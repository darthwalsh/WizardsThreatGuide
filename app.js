window.addEventListener("error", e => alert(e.error.message + " from " + e.error.stack));

(async () => {
  let storage = getStorage();

  if (!storage) {
    storage = await new Promise(res => {
      $("sync").onclick = () => res(useStorage("sync"));
      $("anon").onclick = () => res(useStorage("local"));
    });
  }
  $("front").style.display = 'none';

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
      const threats = Array(4).fill().map(_ => ({clicked: 0, total: 0}));
      for (const sub of Object.values(reg)) {
        for (const name in sub) {
          const {level, collect} = sub[name];
          if (!collect.includes('Wild')) continue;

          const row = levelToRow[level];
          ++threats[row].total;

          if (await storage.get(name.replace(/[^a-z]/gi, ''))) {
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
      for (const name in sub) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = name;
        li.id = name.replace(/[^a-z]/gi, '');
        storage.get(li.id).then(done => done && li.classList.add('done'));
      }
    }
  }

  storage.onAdd = id => $(id).classList.add('done');
  storage.onRemove = id => $(id).classList.remove('done');

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

  async function toggleDone(id) {
    const before = await storage.get(id);
    return storage.set(id, !before);
  }

  $("tab").onclick = e => e.target.nodeName === "LI" && toggleDone(e.target.id);

  $("sign-out").onclick = () => {
    storage.clear();
    location.reload(false);
  };

  // TODO add data export and import to settings
  // TODO add README
  $("issue").onclick = async () => {
    const codeBlock = "```";
    const doneKeys = await allDone();
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
})();
