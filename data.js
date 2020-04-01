/* cSpell:disable

To generate, open https://jibsentertainment.com/2019/04/18/wizards-unite-all-potential-encounters-foundables-enemies/

Then run this on the DevTools console:

    const ch = e => [...e.children]
    copy(ch(ch(document.getElementById("tablepress-2"))[1])
            .map(r => ch(r).map(e => e.textContent).join('|'))
            .filter(r => !r.startsWith('Brilliant') && !r.includes('|N.A.|'))
            .map(r => r
                .replace('Hogwarts Quiditch Pitch', 'Hogwarts Quidditch Pitch')
                .replace('Courtoom ten', 'Courtroom Ten')
                .replace('Room of Requirements III', 'Room of Requirement III')
                .trim())
            .sort()
            .join('\n'))

Schema: Foundable|Threat Level|How to collect it|Registry Sub-section|Registry
*/

const foundableRaw = `
Abraxan Winged Horse|Emergency|Wizarding Challenges|Hagrid’s Hut|Care of Magical Creatures
Acromantula Eggs|Low|Portkey & Wild|Pumpkin Patch|Care of Magical Creatures
Alastor Moody|High|Portkey & Wild|Courtroom Ten|Ministry of Magic
Albus Dumbledore|Emergency|Wild|Chess Chamber|Legends of Hogwarts
Antipodean Opaleye|Severe|Wild|Oddities III|Oddities
Arthur Weasley|Medium|Portkey & Wild|Courtroom Ten|Ministry of Magic
Azkaban Escapee|Medium|Wild|Oddities V|Oddities
Baby Hippogriff|Low|Wild|Pumpkin Patch|Care of Magical Creatures
Baby Niffler|Low|Wild|Newt’s Case|Magizoology
Baby Unicorn|Medium|Wild|Forbidden Forest|Care of Magical Creatures
Beaters Bat|Medium|Wild|Hogwarts Quidditch Pitch|Magical Games and Sports
Billywig|Low|Wild|Newt’s Case|Magizoology
Blast-Ended Skrewt|Medium|Wild|Forbidden Forest|Care of Magical Creatures
Bludger|Medium|Wild|Hogwarts Quidditch Pitch|Magical Games and Sports
Boggart Cabinet|Medium|Portkey & Wild|DADA Classroom|Hogwarts School
Bogrod|Medium|Wild|Ministry Atrium II|Ministry of Magic
Book Quidditch Through The Ages|Emergency|Wizarding Challenges|Triwizard Maze|Magical Games and Sports
Branch of Bowtruckles|Medium|Wild|Central Park|Magizoology
Buckbeak|Severe|Portkey & Wild|Hagrid’s Hut|Care of Magical Creatures
Centaur's Bow|Emergency|Wizarding Challenges|Oddities I|Oddities
Centaur|Medium|Wild|Oddities I|Oddities
Chinese Fireball|Emergency|Wild|Oddities III|Oddities
Chudley Cannons Player|Low|Portkey & Wild|World Cup Grounds|Magical Games and Sports
Common Welsh Green|Severe|Wild|Oddities IV|Oddities
Crystal Ball|Low|Wild|Room of Requirement IV|Wonders of the Wizarding World
Cursed Opal Necklace|High|Wizarding Challenges|Room of Requirement III|Mysterious Artefacts
Daily Prophet Stand|Low|Wild|Ministry Atrium|Ministry of Magic
Death Eater|Severe|Wild|Oddities V|Oddities
Decoy Detonators|Medium|Wild|Room of Requirement II|Mysterious Artefacts
Demiguise|High|Portkey & Wild|Central Park|Magizoology
Dirigible Plums|Low|Portkey & Wild|Room of Requirement IV|Wonders of the Wizarding World
Doxy|Low|Wild|Oddities I|Oddities
Dragon Egg|Medium|Portkey & Wild|Forbidden Forest|Care of Magical Creatures
Dumbledore’s Army Dueling Dummy|Low|Portkey & Wild|Room of Requirement I|Legends of Hogwarts
Dumbledore’s Memory Cabinet|Medium|Portkey & Wild|Dumbledore’s Office|Mysterious Artefacts
Erklings|High|Wild|Oddities II|Oddities
Erumpent|Medium|Wild|Central Park|Magizoology
Exploding Snap House of Cards|Medium|Wild|Hogwarts Quidditch Pitch|Magical Games and Sports
Fawkes|Severe|Wild|Great Hall|Hogwarts School
Fenrir Greyback|High|Wild|Oddities I|Oddities
Filch and Mrs. Norris|Low|Wild|Room of Requirement I|Legends of Hogwarts
Firenze|Severe|Wild|Forbidden Forest|Care of Magical Creatures
Flesh-Eating Slugs|Low|Wild|Borgin & Burkes|Dark Arts
Flobberworm|Low|Wild|Pumpkin Patch|Care of Magical Creatures
Flock of Interdepartmental Memos|Medium|Portkey & Wild|Ministry Atrium|Ministry of Magic
Fluffy/Three Headed Dog|Emergency|Wild|Oddities V|Oddities
Flying Key|Emergency|Wizarding Challenges|Chess Chamber|Legends of Hogwarts
Foe Glass|High|Portkey & Wild|King’s Cross Station|Wonders of the Wizarding World
Fountain Of Magical Brethren|Emergency|Wizarding Challenges|Ministry Atrium II|Ministry of Magic
Giants Helm|Low|Wild|King’s Cross Station|Wonders of the Wizarding World
Goblet Of Fire|Severe|Portkey & Wild|Triwizard Maze|Magical Games and Sports
Gobstone Set|Low|Wild|World Cup Grounds|Magical Games and Sports
Godric Gryffindor Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Golden Snitch|High|Wild|Hogwarts Quidditch Pitch|Magical Games and Sports
Grawp|Severe|Wild|Hogwarts Gate|Wonders of the Wizarding World
Gryffindor Student|Low|Portkey & Wild|DADA Classroom|Hogwarts School
Hagrids Hut|Emergency|Wizarding Challenges|Hagrid’s Hut|Care of Magical Creatures
Hagrids Umbrella|Low|Portkey & Wild|Room of Requirement II|Mysterious Artefacts
Hag|Medium|Wild|Knockturn Alley|Dark Arts
Half Blood Prince's Advanced Potion Making|Emergency|Wizarding Challenges|Potions Classroom|Legends of Hogwarts
Hand of Glory|Low|Wild|Borgin & Burkes|Dark Arts
Harry Potter - Quidditch|Emergency|Wild|Triwizard Maze|Magical Games and Sports
Hedwig|Low|Wild|Potions Classroom|Legends of Hogwarts
Helga Hufflepuff Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Hermione Granger|Severe|Wild|Chess Chamber|Legends of Hogwarts
Hippogriff|High|Wild|Forbidden Forest|Care of Magical Creatures
Hogwarts Express Engine|Emergency|Wizarding Challenges|King’s Cross Station|Wonders of the Wizarding World
Hogwarts House Cup|Emergency|Wizarding Challenges|Moving Staircases|Hogwarts School
Horned Serpent Egg|High|Wizarding Challenges|Oddities II|Oddities
Horned Serpent|Emergency|Portkey & Wild|Oddities II|Oddities
House Hourglass Set|Emergency|Wizarding Challenges|Great Hall|Hogwarts School
Howler|Medium|Wild|Hogwarts Gate|Wonders of the Wizarding World
Hufflepuff Student|Low|Wild|DADA Classroom|Hogwarts School
Kneazle|Low|Wild|Pumpkin Patch|Care of Magical Creatures
Knight Bus|Emergency|Wizarding Challenges|Hogwarts Gate|Wonders of the Wizarding World
Knockturn Alley Sign|Emergency|Wizarding Challenges|Knockturn Alley|Dark Arts
Leprechaun|Medium|Wild|Oddities II|Oddities
Mad-Eye Moody’s Eye|High|Wild|Room of Requirement III|Mysterious Artefacts
Magic is Might Statue|Emergency|Wizarding Challenges|Fallen Ministry Atrium|Dark Arts
Magical Megaphone|Low|Wild|World Cup Grounds|Magical Games and Sports
Magick Moste Evile|Low|Portkey & Wild|Borgin & Burkes|Dark Arts
Mandrake|High|Wild|King’s Cross Station|Wonders of the Wizarding World
Marauders Map|Medium|Wild|Room of Requirement III|Mysterious Artefacts
Minerva Mcgonagall|Emergency|Wild|Moving Staircases|Hogwarts School
Ministry Administrator|Low|Wild|Ministry Atrium|Ministry of Magic
Ministry Executioner|Medium|Portkey & Wild|Knockturn Alley|Dark Arts
Ministry Official|Low|Wild|Ministry Atrium|Ministry of Magic
Ministry Visitors Entrance|Emergency|Wizarding Challenges|Courtroom Ten|Ministry of Magic
Mirror Of Erised|High|Portkey & Wild|Dumbledore’s Office|Mysterious Artefacts
Moaning Myrtle|High|Wild|Moving Staircases|Hogwarts School
Monster Book Of Monsters|Medium|Portkey & Wild|Pumpkin Patch|Care of Magical Creatures
Mooncalf|Medium|Wild|Newt’s Case|Magizoology
Mountain Troll|High|Wild|Central Park|Magizoology
Murtlap|Emergency|Wizarding Challenges|Central Park|Magizoology
Music Box|Low|Wild|Room of Requirement IV|Wonders of the Wizarding World
Neville Longbottom|Medium|Wild|Room of Requirement I|Legends of Hogwarts
Newt Scamander|Emergency|Wild|New York City Street|Magizoology
Niffler|Medium|Portkey & Wild|Newt’s Case|Magizoology
Nimbus 2000|Medium|Portkey & Wild|Triwizard Maze|Magical Games and Sports
Norwegian Ridgeback Baby|High|Wild|Hagrid’s Hut|Care of Magical Creatures
Nymphadora Tonks|High|Wild|Courtroom Ten|Ministry of Magic
Occamy Eggs|High|Portkey & Wild|New York City Street|Magizoology
Occamy|Emergency|Wizarding Challenges|New York City Street|Magizoology
Omnioculars|Medium|Wild|Room of Requirement III|Mysterious Artefacts
Owl Lecturn|Emergency|Wizarding Challenges|Great Hall|Hogwarts School
Peeves|High|Wild|Moving Staircases|Hogwarts School
Pensieve|Severe|Portkey & Wild|Dumbledore’s Office|Mysterious Artefacts
Percival Graves|Severe|Wild|Fallen Ministry Atrium|Dark Arts
Peruvian Vipertooth|Emergency|Wild|Oddities IV|Oddities
Philosophers Stone|Severe|Wild|Dumbledore’s Office|Mysterious Artefacts
Pickett|Severe|Portkey and Wild|Central Park|Magizoology
Pixie|Low|Wild|Oddities I|Oddities
Platform 9 3/4 Sign|Emergency|Wizarding Challenges|King’s Cross Station|Wonders of the Wizarding World
Pomona Sprout|Medium|Wild|Moving Staircases|Hogwarts School
Portrait of Bellatrix Lestrange|Medium|Wild|Knockturn Alley|Dark Arts
Portrait of Dumbledore|Medium|Portkey & Wild|Great Hall|Hogwarts School
Portrait of Voldemort|High|Portkey & Wild|Fallen Ministry Atrium|Dark Arts
Professor Flitwick|Medium|Wild|Moving Staircases|Hogwarts School
Prophecy Record|Medium|Portkey & Wild|Ministry Atrium|Ministry of Magic
Puffskein|Low|Wizarding Challenges|Forbidden Forest|Care of Magical Creatures
Quaffle|Low|Portkey & Wild|World Cup Grounds|Magical Games and Sports
Quibbler|Low|Wild|Room of Requirement IV|Wonders of the Wizarding World
Quidditch Fan Hermione|Severe|Wild|Hogwarts Quidditch Stands|Magical Games and Sports
Quidditch Fan Luna|High|Wild|Hogwarts Quidditch Stands|Magical Games and Sports
Quidditch Fan Neville|High|Wild|Hogwarts Quidditch Stands|Magical Games and Sports
Quidditch Fan Seamus|Medium|Wild|Hogwarts Quidditch Stands|Magical Games and Sports
Quidditch Keeper Ron|Severe|Wild|Hogwarts Quidditch Pitch|Magical Games and Sports
Quidditch Pitch Stands|Emergency|Wizarding Challenges|Hogwarts Quidditch Pitch|Magical Games and Sports
Quidditch World Cup|Medium|Portkey & Wild|World Cup Grounds|Magical Games and Sports
Quill of Acceptance and Book of Admittance|Low|Wild|Room of Requirement II|Mysterious Artefacts
Ravenclaw Student|Low|Wild|DADA Classroom|Hogwarts School
Remembrall|Low|Wild|Room of Requirement II|Mysterious Artefacts
Rowena Ravenclaw Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Rubeus Hagrid|Emergency|Wild|Hagrid’s Hut|Care of Magical Creatures
Salazar Slytherin Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Self-playing Harp|High|Portkey & Wild|Room of Requirement IV|Wonders of the Wizarding World
Severus Snape|High|Wild|Potions Classroom|Legends of Hogwarts
Sirius Black|High|Portkey & Wild|Potions Classroom|Legends of Hogwarts
Sirius Flying Motorbike|Emergency|Wizarding Challenges|Room of Requirement III|Mysterious Artefacts
Slytherin Student|Low|Wild|DADA Classroom|Hogwarts School
Sorting Hat|Severe|Portkey & Wild|Great Hall|Hogwarts School
Swooping Evil|Severe|Portkey & Wild|Knockturn Alley|Dark Arts
Sword Of Gryffindor|Emergency|Wizarding Challenges|Dumbledore’s Office|Mysterious Artefacts
Tank of Brains|Severe|Wild|Ministry Atrium II|Ministry of Magic
The Veil|Severe|Portkey & Wild|Ministry Atrium II|Ministry of Magic
Thestral|High|Wild|Knockturn Alley|Dark Arts
Thunderbird|Emergency|Wizarding Challenges|New York City Street|Magizoology
Time Turner|Emergency|Wild|Room of Requirement III|Mysterious Artefacts
Tom Riddle Sr's Gravestone|Emergency|Wizarding Challenges|Fallen Ministry Atrium|Dark Arts
Tom Riddle|Emergency|Wild|Fallen Ministry Atrium|Dark Arts
Triwizard Cup|Emergency|Wizarding Challenges|Triwizard Maze|Magical Games and Sports
Unicorn|Severe|Wild|New York City Street|Magizoology
Vampire|High|Wild|Oddities I|Oddities
Vanishing Cabinet|Medium|Wild|Borgin & Burkes|Dark Arts
Wanted Poster of Sirius Black|Medium|Wild|Hogwarts Gate|Wonders of the Wizarding World
Wanted Poster of an Azkaban Escapee|Low|Wild|Borgin & Burkes|Dark Arts
Weasley Clock|Low|Wild|Room of Requirement II|Mysterious Artefacts
Weasley Fireworks|Low|Wild|Room of Requirement I|Legends of Hogwarts
Weasley's Flying Car|Severe|Portkey & Wild|Hogwarts Gate|Wonders of the Wizarding World
Werewolf|High|Wild|Oddities I|Oddities
Whomping Willow|Emergency|Wild|Hogwarts Gate|Wonders of the Wizarding World
Wizard Chess Queen|Emergency|Wizarding Challenges|Chess Chamber|Legends of Hogwarts
Wizengamot Accusation Chair|Emergency|Wizarding Challenges|Courtroom Ten|Ministry of Magic
Young Ginny Weasley |Medium|Portkey & Wild|Room of Requirement I|Legends of Hogwarts
Young Graphorn|Low|Wild|Newt’s Case|Magizoology
Young Harry Potter|Severe|Portkey & Wild|Potions Classroom|Legends of Hogwarts
Young Luna Lovegood|Medium|Wild|Room of Requirement I|Legends of Hogwarts
Young Ron Weasley|Medium|Wild|Chess Chamber|Legends of Hogwarts
`.trim().split('\n');

foundableRaw.push(...`
Fred Weasley|Severe|Wild|Room of Requirement V|Legends of Hogwarts
George Weasley|Severe|Wild|Room of Requirement V|Legends of Hogwarts
Parvati Patil|High|Wild|Room of Requirement V|Legends of Hogwarts
Angelina Johnson|Medium|Wild|Room of Requirement V|Legends of Hogwarts
Dumbledore’s Army Sign-up Sheet|Emergency|Wizarding Challenges|Room of Requirement V|Legends of Hogwarts
Angelina and Fred|High|Wild|Yule Ball Great Hall|Legends of Hogwarts
Hermione and Viktor|Severe|Wild|Yule Ball Great Hall|Legends of Hogwarts
Hagrid and Madame Maxime|High|Wild|Yule Ball Great Hall|Legends of Hogwarts
Parvati and Harry|Severe|Wild|Yule Ball Great Hall|Legends of Hogwarts
Yule Ball Program|Emergency|Wizarding Challenges|Yule Ball Great Hall|Legends of Hogwarts
Antipodean Opaleye Egg|Medium|Portkey|Oddities III|Oddities
Chinese Fireball Egg|Medium|Portkey|Oddities III|Oddities
Common Welsh Green Egg|Medium|Portkey|Oddities IV|Oddities
Peruvian Vipertooth Egg|Medium|Portkey|Oddities IV|Oddities
Young James Potter|Emergency|Wild|Hogwarts Grounds|Legends of Hogwarts
Young Sirius Black|High|Wild|Hogwarts Grounds|Legends of Hogwarts
Young Remus Lupin|Severe|Wild|Hogwarts Grounds|Legends of Hogwarts
Young Peter Pettigrew|High|Wild|Hogwarts Grounds|Legends of Hogwarts
Unfinished Marauder’s Map|Emergency|Wizarding Challenges|Hogwarts Grounds|Legends of Hogwarts
Wild Boar|Emergency|Wizarding Challenges|Moving Staircases II|Hogwarts School
`.trim().split('\n'));

const registryRaw = `
Care of Magical Creatures
Hagrid’s Hut
Pumpkin Patch
Forbidden Forest

Dark Arts
Borgin & Burkes
Knockturn Alley
Fallen Ministry Atrium

Hogwarts School
DADA Classroom
Moving Staircases
Great Hall
Moving Staircases II

Legends of Hogwarts
Room of Requirement I
Potions Classroom
Chess Chamber
Room of Requirement V
Yule Ball Great Hall
Hogwarts Grounds

Ministry of Magic
Ministry Atrium
Ministry Atrium II
Courtroom Ten

Magizoology
Newt’s Case
Central Park
New York City Street

Magical Games and Sports
World Cup Grounds
Hogwarts Quidditch Pitch
Triwizard Maze
Hogwarts Quidditch Stands

Mysterious Artefacts
Room of Requirement II
Dumbledore’s Office
Room of Requirement III

Wonders of the Wizarding World
Room of Requirement IV
Hogwarts Gate
King’s Cross Station

Oddities
Oddities I
Oddities II
Oddities III
Oddities IV
Oddities V
`.trim().split('\n\n');
