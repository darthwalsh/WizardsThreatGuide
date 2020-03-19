
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

let selected = null;
function switchTo(id) {
    if (selected) {
        $(selected).style.display = "none";
    }
    selected = "tab-" + id;
    $(selected).style.display = "";
}

for (const r in registry) {
    const reg = registry[r];
    const id = r.replace(/ /g, '').toLowerCase();

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
    tab.textContent = Object.keys(reg).join(' ');
    tab.style.display = "none";
    tab.id = "tab-" + id;

    if (!selected) switchTo(id);
    
    for (const s in reg) {
        if (!reg[s].length) console.error(r, s, 'is empty');
    }
}

$("tabs").onclick = e => switchTo(e.target.id);

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

