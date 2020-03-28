const firebaseConfig = {
    apiKey: "AIzaSyDcnQNN4RP73kIMYp5RMyarCplwInb6wNc",
    authDomain: "wizardsthreatguide.firebaseapp.com",
    databaseURL: "https://wizardsthreatguide.firebaseio.com",
    projectId: "wizardsthreatguide",
    storageBucket: "wizardsthreatguide.appspot.com",
    messagingSenderId: "843184506598",
    appId: "1:843184506598:web:148bd23d336aa9870b9d27",
}; // TODO trim out unneeded values
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const doneRef = database.ref('done/id123'); //TODO auth and database rules

async function isDone(id) {
    const snapshot = await doneRef.child(id).once('value');
    return Boolean(snapshot.val());
}

/** @returns {Promise} */
function setDone(id, value) {
    return doneRef.child(id).set(value);
}
// TODO use listener for changes so el.classList.remove('done');

const registry = registryRaw.reduce((o, c) => {
    const lines = c.split('\n');
    o[lines.shift()] = lines.reduce((o, c) => (o[c] = [], o), {});
    return o;
}, {});

foundableRaw.forEach(line => {
    const [name, level, collect, sub, reg] = line.split('|');

    try {
        registry[reg][sub].push({name, level, collect});
    } catch (e) {
        console.error(e.message, line)
    }
});

function $(id) {
    return document.getElementById(id);
}

let selectedTab = null;
function switchTab(id) {
    if (id === selectedTab) {
        id = "Summary";
    }

    if (id === "Summary") {
        updateSummary();
    }

    if (selectedTab) {
        $("tab-" + selectedTab).style.display = "none";
    }
    selectedTab = id;
    $("tab-" + selectedTab).style.display = "";
}

const levelToRow = {
    Low: 0,
    Medium: 0,
    High: 1,
    Severe: 2,
    Emergency: 3,
};

async function updateSummary() {
    const tbody = $("tab-Summary");

    let col = 0;
    for (const reg of Object.values(registry)) {
        const threats = Array(4).fill().map(_ => ({ clicked: 0, total: 0 }));
        for (const sub of Object.values(reg)) {
            for (const {name, level, collect} of sub) {
                if (!collect.includes('Wild')) continue;

                const row = levelToRow[level];
                ++threats[row].total;

                if (await isDone(name.replace(/[^a-z]/gi, ''))) { // TODO start all then Promise.all?
                    ++threats[row].clicked;
                }
            }
        }

        for (let tr = tbody.firstElementChild, row = 0; tr; tr = tr.nextElementSibling, ++row) {
            const td = tr.children[col];
            const {clicked, total} = threats[row]
            td.style.background = clicked === total ? 'grey' : '#a5d6a7';
        }

        ++col;
    }
}

for (const r in registry) {
    const reg = registry[r];
    const id = r.replace(/ /g, '');

    const th = document.createElement("th");
    $("tabs").appendChild(th);

    const img = document.createElement("img");
    th.appendChild(img);
    img.src = `img/${id.toLowerCase()}.png`;
    img.id = id;
    img.alt = r;

    const tab = document.createElement("div");
    $("tab").appendChild(tab);
    tab.style.display = "none";
    tab.id = "tab-" + id;

    if (!selectedTab) switchTab(id);
    
    for (const s in reg) {
        if (!reg[s].length) console.error(r, s, 'is empty');

        tab.append(s);
        const ul = document.createElement("ul");
        tab.appendChild(ul);

        const sub = reg[s];
        for (const foundable of sub) {
            const li = document.createElement("li");
            ul.appendChild(li);
            li.innerText = foundable.name;
            li.id = foundable.name.replace(/[^a-z]/gi, '');
            isDone(li.id).then(b => b && li.classList.add('done'));
        }
    }
}

const colors = ['blank', 'yellow', 'orange', 'red'];
for (const color of colors) {
    const tr = document.createElement("tr");
    $("tab-Summary").appendChild(tr);
    for (const _ in registry) {
        const td = document.createElement("td");
        tr.appendChild(td);
        const img = document.createElement("img");
        td.appendChild(img);
        img.src = `img/flame-${color}.png`;
    }
}

$("summary").onclick = e => switchTab("Summary");
$("tabs").onclick = e => e.target.nodeName === "IMG" && switchTab(e.target.id);

/** @param {HTMLElement} el */
async function toggleDone(el) {
    const id = el.id;
    if (await isDone(id)) {
        setDone(id, false);
        el.classList.remove('done');
    } else {
        setDone(id, true);
        el.classList.add('done');
    }
}
$("tab").onclick = e => e.target.nodeName === "LI" && toggleDone(e.target);

// TODO make this a setting tab with data export and import and README
$("issue").onclick = async () => {
    const codeBlock = "```";
    const doneSnapshot = await doneRef.once('value');
    const doneKeys = Object.keys(doneSnapshot.val());
    const body = `**Description of the problem:**

**What you saw happen:**

**What should have happened:**

**Your configuration:**
${codeBlock}
${doneKeys.join('\n')}
${codeBlock}`;
    const url = `https://github.com/darthwalsh/WizardsThreatGuide/issues/new?body=${encodeURIComponent(body)}`;
    var win = window.open(url, '_blank');
    win.focus();
};

