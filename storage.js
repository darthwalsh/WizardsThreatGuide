function getStorage() {
  const method = storageMethod();
  if (!method) return null;

  switch (method) {
    case "local": return new StorageLocal();
    case "sync": return new StorageSync();
  }
  throw new Error("unrecognized storage " + method);
}

function storageMethod() {
  return localStorage.getItem('__STORAGE');
}

function useStorage(method) {
  localStorage.setItem('__STORAGE', method);
  return getStorage();
}

class StorageLocal {
  keys() {
    return Object.keys(localStorage).filter(key => !key.startsWith("__"));
  }
  get(key) {
    return Promise.resolve(Boolean(localStorage.getItem(key)));
  }
  set(key, value) {
    if (value) {
      localStorage.setItem(key, true);
      this.onAdd && this.onAdd(key);
    } else {
      localStorage.removeItem(key);
      this.onRemove && this.onRemove(key);
    }
    return Promise.resolve();
  }
  clear() {
    localStorage.clear();
  }
}

class StorageSync {
  async init() {    
    StorageSync.initFirebase();

    const database = firebase.database();
    const auth = firebase.auth();

    let user = await new Promise((res, rej) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        unsubscribe();
        res(user);
      }, rej);
    });

    if (!user) {
      await auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    
    const userRef = database.ref('users').child(user.uid);
    userRef.child('__MODIFIED').set(new Date().toJSON());
    this.doneRef = userRef.child('done');

    this.doneRef.on('child_added', data => this.onAdd && this.onAdd(data.key));
    this.doneRef.on('child_removed', data => this.onRemove && this.onRemove(data.key));
  }

  constructor() {
    this.ready = this.init();
  }

  async keys() {
    await this.ready;
    const doneSnapshot = await this.doneRef.once('value');
    return Object.keys(doneSnapshot.val() || []);
  }
  async get(key) {
    await this.ready;
    const snapshot = await this.doneRef.child(key).once('value');
    return Boolean(snapshot.val());
  }
  async set(key, value) {
    await this.ready;
    if (value) {
      await this.doneRef.child(key).set(true);
    } else {
      await this.doneRef.child(key).remove();
    }
  }
  clear() {
    firebase.auth().signOut();
    localStorage.clear();
  }
}
StorageSync.initFirebase = () => {
  if (StorageSync.firebaseInit) return;
  const firebaseConfig = {
    apiKey: "AIzaSyDcnQNN4RP73kIMYp5RMyarCplwInb6wNc",
    authDomain: "wizardsthreatguide.firebaseapp.com",
    databaseURL: "https://wizardsthreatguide.firebaseio.com",
    projectId: "wizardsthreatguide",
  };
  firebase.initializeApp(firebaseConfig);
  StorageSync.firebaseInit = true;
}
