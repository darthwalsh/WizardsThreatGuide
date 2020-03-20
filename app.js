
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
    if (selectedTab) {
        $(selectedTab).style.display = "none";
    }
    selectedTab = "tab-" + id;
    $(selectedTab).style.display = "";
}

for (const r in registry) {
    const reg = registry[r];
    const id = r.replace(/ /g, '');

    const img = document.createElement("img");
    $("tabs").appendChild(img);
    img.src = `img/${id}.png`;
    img.id = id;
    img.alt = r;
    img.height = 113;
    img.width = 113;
    img.onclick = null; // TODO

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
        }
    }
}

$("tabs").onclick = e => e.target.nodeName === "IMG" && switchTab(e.target.id);

const done = new Set();
/** @param {HTMLElement} el */
function toggleDone(el) {
    const id = el.id;
    if (done.has(id)) {
        done.delete(id);
        el.classList.remove('done');
    } else {
        done.add(id);
        el.classList.add('done');
    }
}
$("tab").onclick = e => e.target.nodeName === "LI" && toggleDone(e.target);

$("issue").onclick = () => {
    const codeBlock = "```";
    const body = `**Description of the problem:**

**What you saw happen:**

**What should have happened:**

**Your configuration:**
${codeBlock}
${"TODO"}
${codeBlock}`; // TODO configuration
    const url = `https://github.com/darthwalsh/WizardsThreatGuide/issues/new?body=${encodeURIComponent(body)}`;
    var win = window.open(url, '_blank');
    win.focus();
};

