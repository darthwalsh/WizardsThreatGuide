/// <reference path="./data.js" />
/// <reference path="./storage.js" />

window.addEventListener("error", e => alert(e.error.message + " from " + e.error.stack));

(async () => {
  let storage = getStorage();

  if (!storage) {
    storage = await new Promise(res => {
      $("sync").onclick = () => res(useStorage("sync"));
      $("anon").onclick = () => res(useStorage("local"));
    });
  }
  $("front").style.display = "none";
  switch (storageMethod()) {
    case "sync":
      $("sign-out").innerText = "Sign out of Google";
      break;
    case "local":
      $("sign-out").innerText = "Clear local storage";
      break;
  }

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
      if (selectedTab !== "Summary") $(selectedTab).style.background = "";
    }
    selectedTab = id;
    $("tab-" + selectedTab).style.display = "";
    if (selectedTab !== "Summary") $(selectedTab).style.background = "grey";
  }

  const levelToRow = {
    Low: 0,
    Medium: 0,
    High: 1,
    Severe: 2,
    Emergency: 3,
    WizardingChallenges: 4,
  };

  async function updateSummary() {
    const tbody = $("tab-Summary");

    let col = 0;
    for (const reg of Object.values(registry)) {
      const essentials = [];
      for (const sub of Object.values(reg)) {
        let unfinished = [];
        for (const name in sub) {
          if (!(await storage.get(toId(name)))) {
            unfinished.push(toId(name));
          }
        }
        if (unfinished.length === 1) {
          essentials.push(unfinished[0]);
        }
      }

      const threats = Array(5)
        .fill()
        .map(_ => ({essential: 0, clicked: 0, total: 0}));
      for (const sub of Object.values(reg)) {
        for (const name in sub) {
          const {level, collect} = sub[name];

          let row;
          if (collect.includes("Wild")) {
            row = levelToRow[level];
          } else if (collect.includes("Wizarding Challenges")) {
            row = levelToRow.WizardingChallenges;
          } else {
            continue;
          }

          ++threats[row].total;
          if (await storage.get(toId(name))) {
            ++threats[row].clicked;
          }
          if (essentials.includes(toId(name))) {
            ++threats[row].essential;
          }
        }
      }

      for (let tr = tbody.firstElementChild, row = 0; tr; tr = tr.nextElementSibling, ++row) {
        const td = tr.children[col];
        const {essential, clicked, total} = threats[row];
        const essentialPercent = Math.round((100 * essential) / total);
        let donePercent = Math.round(100 * (1 - clicked / total));
        let stops = [
          `#00FF30 0%,#00FF30 ${essentialPercent}%`,
          `#CCFF99 ${essentialPercent}%,#CCFF99 ${donePercent}%`,
          `grey ${donePercent}%,grey 100%`,
        ];
        td.style.background = `linear-gradient(to bottom, ${stops.join(", ")})`;
      }

      ++col;
    }
  }
  switchTab("Summary");

  for (const r in registry) {
    const reg = registry[r];
    const id = toId(r);

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

    for (const s in reg) {
      const span = document.createElement("span");
      tab.appendChild(span);
      span.innerText = s;
      span.id = r + "." + s;

      const ul = document.createElement("ul");
      tab.appendChild(ul);

      const sub = reg[s];
      for (const name in sub) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = name;
        li.id = toId(name);
        storage.get(li.id).then(done => done && li.classList.add("done"));
      }
    }
  }

  storage.onAdd = id => $(id).classList.add("done");
  storage.onRemove = id => $(id).classList.remove("done");
  // TODO add gear spinner for settings storage.onBusy =
  // https://codepen.io/sketchbookkeeper/pen/jrmYXm

  const imgCreators = ["blank", "yellow", "orange", "red"].map(c => _ => "flame-" + c);
  imgCreators.push(r => "runestone-" + toId(r).toLowerCase());
  for (const f of imgCreators) {
    const tr = document.createElement("tr");
    $("tab-Summary").appendChild(tr);
    for (const r in registry) {
      const td = document.createElement("td");
      tr.appendChild(td);
      const img = document.createElement("img");
      td.appendChild(img);
      img.src = `img/${f(r)}.png`;
    }
  }

  $("tabs").onclick = e => e.target.nodeName === "IMG" && switchTab(e.target.id);

  function toId(name) {
    return name.replace(/[^a-z]/gi, "");
  }
  async function toggleDone(id) {
    const before = await storage.get(id);
    return storage.set(id, !before);
  }
  async function toggleAll(id) {
    const [reg, sub] = id.split(".");
    const ids = Object.keys(registry[reg][sub]).map(toId);
    const allDones = await Promise.all(ids.map(async id => await storage.get(id)));
    const noneDone = allDones.every(done => !done);
    return Promise.all(ids.map(id => storage.set(id, noneDone)));
  }

  $("tab").onclick = e => {
    switch (e.target.nodeName) {
      case "LI":
        toggleDone(e.target.id);
        break;
      case "SPAN":
        toggleAll(e.target.id);
        break;
    }
  };

  $("sign-out").onclick = () => {
    storage.clear();
    location.reload(false);
  };

  $("import-export").onclick = async () => {
    $("data").style.display = "";
    $("textarea").value = (await storage.keys()).join("\n");
  };
  $("export-copy").onclick = () => {
    navigator.clipboard.writeText($("textarea").value);
    $("data").style.display = "none";
  };
  $("import-button").onclick = () => {
    $("textarea")
      .value.split("\n")
      .forEach(s => storage.set(s, true));
    $("data").style.display = "none";
  };

  $("data").onclick = e => {
    if (e.target === $("data")) $("data").style.display = "none";
  };

  // TODO add README
  $("issue").onclick = async () => {
    const codeBlock = "```";
    const body = `**Description of the problem:**

**What you saw happen:**

**What should have happened:**

**Your configuration:**
${codeBlock}
${(await storage.keys()).join("\n")}
${codeBlock}`;
    const url = `https://github.com/darthwalsh/WizardsThreatGuide/issues/new?body=${encodeURIComponent(
      body
    )}`;
    var win = window.open(url, "_blank");
    win.focus();
  };
})();
