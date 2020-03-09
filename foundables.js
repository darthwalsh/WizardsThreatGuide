/*
To generate, open https://jibsentertainment.com/2019/04/18/wizards-unite-all-potential-encounters-foundables-enemies/

Then run this on the DevTools console:

    const ch = e => [...e.children]
    copy(ch(ch(document.getElementById("tablepress-2"))[1])
        .map(r => ch(r).map(e => e.textContent).join('|'))
        .sort()
        .join('\n'))

Schema: Foundable|Threat Level|How to collect it|Registry Sub-section|Registry
*/

const foundables = `A Beginner's Guide to Transfiguration|N.A.|Portkey|Calvert Tillery|Books I
A History of Magic|N.A.|Portkey|Hermione Granger|Books II
Abraxan Winged Horse|Emergency|Wizarding Challenges|Hagrid’s Hut|Care of Magical Creatures
Acromantula Eggs|Low|Portkey & Wild|Pumpkin Patch|Care of Magical Creatures
Alastor Moody|High|Portkey & Wild|Courtoom ten|Ministry of Magic
Albus Dumbledore|Emergency|Wild|Chess Chamber|Legends of Hogwarts
Antipodean Opaleye|Severe|Wild|Oddities III|Oddities
Arthur Weasley|Medium|Portkey & Wild|Courtoom ten|Ministry of Magic
Azkaban Escapee|Medium|Wild|Oddities V|Oddities
Baby Hippogriff|Low|Wild|Pumpkin Patch|Care of Magical Creatures
Baby Niffler|Low|Wild|Newt’s Case|Magizoology
Baby Unicorn|Medium|Wild|Forbidden Forest|Care of Magical Creatures
Beaters Bat|Medium|Wild|Hogwarts Quiditch Pitch|Magical Games and Sports
Billywig|Low|Wild|Newt’s Case|Magizoology
Blast-Ended Skrewt|Medium|Wild|Forbidden Forest|Care of Magical Creatures
Bludger|Medium|Wild|Hogwarts Quiditch Pitch|Magical Games and Sports
Boggart Cabinet|Medium|Portkey & Wild|DADA Classroom|Hogwarts School
Bogrod|Medium|Wild|Ministry Atrium II|Ministry of Magic
Book Quidditch Through The Ages|Emergency|Wizarding Challenges|Triwizard Maze|Magical Games and Sports
Branch of Bowtruckles|Medium|Wild|Central Park|Magizoology
Brilliant Buckbeak|N.A.|Wild|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Brilliant DMLE Badge|N.A.|Event Task|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant Framed Family Photo|N.A.|Event Task|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant Golden Snitch|Severe|Wild|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant Harry's Ministry ID Card |N.A.|Portkey (7km)|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant Harry’s School Trunk|N.A.|Portkey (7km)|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Harry’s Triwizard Cup Uniform|N.A.|Event Task|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Harry’s Weasley Jumper|N.A.|Wizarding Challenges|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Hedwig|Severe|Wild|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Hogwarts Heroes Daily Prophet|N.A.|Wizarding Challenges|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant London Five Photograph|N.A.|Event Task|Department of Magical Law Enforcement|British Ministry of Magic
Brilliant Mismatched Socks|N.A.|Event Task|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Quidditch Captain Harry |Severe|Wild|Gryffindor Dormitory|Hogwarts School of Witchcraft and Wizardry
Brilliant Salamander|N.A.|Brilliant Portkey|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Brilliant Scorched Tree Stump|N.A.|Brilliant Tasks/Assignments|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Brilliant Snargaluff|N.A.|Brilliant Tasks/Assignments|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Brilliant Unicorn|N.A.|Wild|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Brilliant Young Acromantula|N.A.|Brilliant Wizarding Challenges|Brilliant Forbidden Forest|Brilliant Event: Fantastic Flora and Faune
Buckbeak|Severe|Portkey & Wild|Hagrid’s Hut|Care of Magical Creatures
Centaur's Bow|Emergency|Wizarding Challenges|Oddities I|Oddities
Centaur|Medium|Wild|Oddities I|Oddities 
Chinese Fireball|Emergency|Wild|Oddities III|Oddities
Chudley Cannons Player|Low|Portkey & Wild|World Cup Grounds|Magical Games and Sports
Common Welsh Green|Severe|Wild|Oddities IV|Oddities
Crystal Ball|Low|Wild|Room of Requirement IV|Wonders of the Wizarding World
Cursed Opal Necklace|High|Wizarding Challenges|Room of Requirements III|Mysterious Artefacts
Daily Prophet Stand|Low|Wild|Ministry Atrium|Ministry of Magic
Dark Mark|N.A.|Portkey|Lord Voldemort|Symbols of the Wizarding World I
Death Eater|Severe|Wild|Oddities V|Oddities
Decoy Detonators|Medium|Wild|Room of Requirement II|Mysterious Artefacts
Deluminator|N.A.|Portkey|Albus Dumbledore|Magical Devices II
Demiguise|High|Portkey & Wild|Central Park|Magizoology
Dirigible Plums|Low|Portkey & Wild|Room of Requirement IV|Wonders of the Wizarding World
Doxy|Low|Wild|Oddities I|Oddities
Dragon Egg|Medium|Portkey & Wild|Forbidden Forest|Care of Magical Creatures
Dumbledore’s Army Dueling Dummy|Low|Portkey & Wild|Room of Requirement I|Legends of Hogwarts
Dumbledore’s Memory Cabinet|Medium|Portkey & Wild|Dumbledore’s Office|Mysterious Artefacts
Erklings|High|Wild|Oddities II|Oddities
Erumpent|Medium|Wild|Central Park|Magizoology
Exploding Snap House of Cards|Medium|Wild|Hogwarts Quiditch Pitch|Magical Games and Sports
Extendable Ears|N.A.|Portkey|Phoebe Clem|Joke Products I
Fanged Frisbee|N.A.|Portkey|Gryffindor Common Room|Joke Products II
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
Golden Snitch|High|Wild|Hogwarts Quiditch Pitch|Magical Games and Sports
Grawp|Severe|Wild|Hogwarts Gate|Wonders of the Wizarding World
Gryffindor Quidditch Banner|N.A.|Wizarding Challenges|Hogwarts Quidditch Stands|Magical Games and Sports
Gryffindor Student|Low|Portkey & Wild|DADA Classroom|Hogwarts School
Hagrids Hut|Emergency|Wizarding Challenges|Hagrid’s Hut|Care of Magical Creatures
Hagrids Umbrella|Low|Portkey & Wild|Room of Requirement II|Mysterious Artefacts
Hag|Medium|Wild|Knockturn Alley|Dark Arts
Half Blood Prince's Advanced Potion Making|Emergency|Wizarding Challenges|Potions Classroom|Legends of Hogwarts
Hand of Glory|Low|Wild|Borgin & Burkes|Dark Arts
Harry Potter - Quidditch|Emergency|Wild|Triwizard Maze|Magical Games and Sports
Harry Potter's Wand|N.A.|Portkey|Harry Potter|Wands of Dumbledore's Army I
Hedwig|Low|Wild|Potions Classroom|Legends of Hogwarts
Helga Hufflepuff Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Hermione Granger's Wand|N.A.|Portkey|Hermione Granger|Wands of Dumbledore's Army I
Hermione Granger|Severe|Wild|Chess Chamber|Legends of Hogwarts
Hippogriff|High|Wild|Forbidden Forest|Care of Magical Creatures
Hogwarts Express Engine|Emergency|Wizarding Challenges|King’s Cross Station|Wonders of the Wizarding World
Hogwarts House Cup|Emergency|Wizarding Challenges|Moving Staircases|Hogwarts School
Hogwarts: A History|N.A.|Portkey|Hermione Granger|Books I
Horned Serpent Egg|High|Wizarding Challenges|Oddities II|Oddities
Horned Serpent|Emergency|Portkey & Wild|Oddities II|Oddities
House Hourglass Set|Emergency|Wizarding Challenges|Great Hall|Hogwarts School
Howler|Medium|Wild|Hogwarts Gate|Wonders of the Wizarding World
Hufflepuff Student|Low|Wild|DADA Classroom|Hogwarts School
Inquisitorial Squad Badge|N.A.|Portkey|Umbridges' Office, 1995|Inquisitorial Squad I
Kneazle|Low|Wild|Pumpkin Patch|Care of Magical Creatures
Knight Bus|Emergency|Wizarding Challenges|Hogwarts Gate|Wonders of the Wizarding World
Knockturn Alley Sign|Emergency|Wizarding Challenges|Knockturn Alley|Dark Arts
Leprechaun|Medium|Wild|Oddities II|Oddities
Mad-Eye Moody’s Eye|High|Wild|Room of Requirements III|Mysterious Artefacts
Magic is Might Statue|Emergency|Wizarding Challenges|Fallen Ministry Atrium|Dark Arts
Magical Megaphone|Low|Wild|World Cup Grounds|Magical Games and Sports
Magick Moste Evile|Low|Portkey & Wild|Borgin & Burkes|Dark Arts
Mandrake|High|Wild|King’s Cross Station|Wonders of the Wizarding World
Marauders Map|Medium|Wild|Room of Requirements III|Mysterious Artefacts
Minerva Mcgonagall|Emergency|Wild|Moving Staircases|Hogwarts School
Ministry Administrator|Low|Wild|Ministry Atrium|Ministry of Magic
Ministry Executioner|Medium|Portkey & Wild|Knockturn Alley|Dark Arts
Ministry Official|Low|Wild|Ministry Atrium|Ministry of Magic
Ministry Visitors Entrance|Emergency|Wizarding Challenges|Courtoom ten|Ministry of Magic
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
Nymphadora Tonks|High|Wild|Courtoom ten|Ministry of Magic
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
Quidditch Keeper Ron|Severe|Wild|Hogwarts Quiditch Pitch|Magical Games and Sports
Quidditch Pitch Stands|Emergency|Wizarding Challenges|Hogwarts Quiditch Pitch|Magical Games and Sports
Quidditch World Cup|Medium|Portkey & Wild|World Cup Grounds|Magical Games and Sports
Quill of Acceptance and Book of Admittance|Low|Wild|Room of Requirement II|Mysterious Artefacts
Ravenclaw Student|Low|Wild|DADA Classroom|Hogwarts School
Remembrall|Low|Wild|Room of Requirement II|Mysterious Artefacts
Ron Weasley's Wand|N.A.|Portkey|Ron Weasley|Wands of Dumbledore's Army I
Rowena Ravenclaw Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Rubeus Hagrid|Emergency|Wild|Hagrid’s Hut|Care of Magical Creatures
Salazar Slytherin Wizard Portrait|High|Wild|Moving Staircases II|Hogwarts School
Self-playing Harp|High|Portkey & Wild|Room of Requirement IV|Wonders of the Wizarding World
Severus Snape's Wand|N.A.|Portkey|Severus Snape|Wands of the Order of the Phoenix I
Severus Snape|High|Wild|Potions Classroom|Legends of Hogwarts
Sirius Black|High|Portkey & Wild|Potions Classroom|Legends of Hogwarts
Sirius Flying Motorbike|Emergency|Wizarding Challenges|Room of Requirements III|Mysterious Artefacts
Skeeter's Quick-Quotes Book|N.A.|Portkey|Rita Skeeter|Magical Devices I
Slytherin Student|Low|Wild|DADA Classroom|Hogwarts School
Sorting Hat|Severe|Portkey & Wild|Great Hall|Hogwarts School
Swooping Evil|Severe|Portkey & Wild|Knockturn Alley|Dark Arts
Sword Of Gryffindor|Emergency|Wizarding Challenges|Dumbledore’s Office|Mysterious Artefacts
Tank of Brains|Severe|Wild|Ministry Atrium II|Ministry of Magic
The Veil|Severe|Portkey & Wild|Ministry Atrium II|Ministry of Magic
Thestral|High|Wild|Knockturn Alley|Dark Arts
Thunderbird|Emergency|Wizarding Challenges|New York City Street|Magizoology
Time Turner|Emergency|Wild|Room of Requirements III|Mysterious Artefacts
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
Wild Board Wizard Portrait|N.A.|Wizarding Challenges|Moving Staircases II|Hogwarts School
Wizard Chess Queen|Emergency|Wizarding Challenges|Chess Chamber|Legends of Hogwarts
Wizengamot Accusation Chair|Emergency|Wizarding Challenges|Courtoom ten|Ministry of Magic
Young Ginny Weasley |Medium|Portkey & Wild|Room of Requirement I|Legends of Hogwarts
Young Graphorn|Low|Wild|Newt’s Case|Magizoology
Young Harry Potter|Severe|Portkey & Wild|Potions Classroom|Legends of Hogwarts
Young Luna Lovegood|Medium|Wild|Room of Requirement I|Legends of Hogwarts
Young Ron Weasley|Medium|Wild|Chess Chamber|Legends of Hogwarts`.split('\n');
