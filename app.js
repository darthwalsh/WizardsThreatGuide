
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

function updateSummary() {
    const tbody = $("tab-Summary");

    let col = 0;
    for (const reg of Object.values(registry)) {
        const threats = Array(4).fill().map(_ => ({ done: 0, total: 0 }));
        for (const sub of Object.values(reg)) {
            for (const {name, level, collect} of sub) {
                if (!collect.includes('Wild')) continue;

                const row = levelToRow[level];
                ++threats[row].total;

                if (done.has(name.replace(/[^a-z]/gi, ''))) {
                    ++threats[row].done;
                }
            }
        }

        for (let tr = tbody.firstElementChild, row = 0; tr; tr = tr.nextElementSibling, ++row) {
            const td = tr.children[col];
            const {done, total} = threats[row]
            td.style.background = done === total ? 'grey' : '#a5d6a7';
        }

        ++col;
    }
}

const done = new Set();
for (const key in localStorage) {
    if (key.startsWith('done-')) {
        done.add(key.substring('done-'.length));
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
            if (done.has(li.id)) {
                li.classList.add('done');
            }
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
function toggleDone(el) {
    const id = el.id;
    const key = 'done-' + id;
    if (done.has(id)) {
        done.delete(id);
        el.classList.remove('done');
        localStorage.removeItem(key);
    } else {
        done.add(id);
        el.classList.add('done');
        localStorage.setItem(key, true);
    }
    // MAYBE write to firebase instead of localStorage?
}
$("tab").onclick = e => e.target.nodeName === "LI" && toggleDone(e.target);

// TODO make this a setting tab with data export and import and README
$("issue").onclick = () => {
    const codeBlock = "```";
    const body = `**Description of the problem:**

**What you saw happen:**

**What should have happened:**

**Your configuration:**
${codeBlock}
${[...done].join('\n')}
${codeBlock}`;
    const url = `https://github.com/darthwalsh/WizardsThreatGuide/issues/new?body=${encodeURIComponent(body)}`;
    var win = window.open(url, '_blank');
    win.focus();
};

