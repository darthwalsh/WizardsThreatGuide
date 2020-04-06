// cSpell:disable

// TODO list sources
// TODO validate against https://gamepress.gg/wizardsunite/reference/foundables-list
// MAYBE get capture chances from https://foundables.com/?r=capture

const registry = {
  "Care of Magical Creatures": {
    "Hagrid’s Hut": {
      "Abraxan Winged Horse": {collect: "Wizarding Challenges"},
      "Hagrids Hut": {collect: "Wizarding Challenges"},
      "Rubeus Hagrid": {level: "Emergency", collect: "Wild"},
      "Buckbeak": {level: "Severe", collect: "Portkey & Wild"},
      "Norwegian Ridgeback Baby": {level: "High", collect: "Wild"},
    },
    "Pumpkin Patch": {
      "Kneazle": {level: "Low", collect: "Wild"},
      "Baby Hippogriff": {level: "Low", collect: "Wild"},
      "Flobberworm": {level: "Low", collect: "Wild"},
      "Monster Book Of Monsters": {level: "Medium", collect: "Portkey & Wild"},
      "Acromantula Eggs": {level: "Low", collect: "Portkey & Wild"},
    },
    "Forbidden Forest": {
      "Hippogriff": {level: "High", collect: "Wild"},
      "Firenze": {level: "Severe", collect: "Wild"},
      "Baby Unicorn": {level: "Medium", collect: "Wild"},
      "Blast-Ended Skrewt": {level: "Medium", collect: "Wild"},
      "Dragon Egg": {level: "Medium", collect: "Portkey & Wild"},
      "Puffskein": {collect: "Wizarding Challenges"},
    }
  },
  "Dark Arts": {
    "Borgin & Burkes": {
      "Wanted Poster of an Azkaban Escapee": {level: "Low", collect: "Wild"},
      "Magick Moste Evile": {level: "Low", collect: "Portkey & Wild"},
      "Vanishing Cabinet": {level: "Medium", collect: "Wild"},
      "Flesh-Eating Slugs": {level: "Low", collect: "Wild"},
      "Hand of Glory": {level: "Low", collect: "Wild"},
    },
    "Knockturn Alley": {
      "Swooping Evil": {level: "Severe", collect: "Portkey & Wild"},
      "Knockturn Alley Sign": {collect: "Wizarding Challenges"},
      "Portrait of Bellatrix Lestrange": {level: "Medium", collect: "Wild"},
      "Hag": {level: "Medium", collect: "Wild"},
      "Thestral": {level: "High", collect: "Wild"},
      "Ministry Executioner": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Fallen Ministry Atrium": {
      "Magic is Might Statue": {collect: "Wizarding Challenges"},
      "Tom Riddle Sr's Gravestone": {collect: "Wizarding Challenges"},
      "Percival Graves": {level: "Severe", collect: "Wild"},
      "Tom Riddle": {level: "Emergency", collect: "Wild"},
      "Portrait of Voldemort": {level: "High", collect: "Portkey & Wild"},
    }
  },
  "Hogwarts School": {
    "DADA Classroom": {
      "Gryffindor Student": {level: "Low", collect: "Portkey & Wild"},
      "Ravenclaw Student": {level: "Low", collect: "Wild"},
      "Hufflepuff Student": {level: "Low", collect: "Wild"},
      "Boggart Cabinet": {level: "Medium", collect: "Portkey & Wild"},
      "Slytherin Student": {level: "Low", collect: "Wild"},
    },
    "Moving Staircases": {
      "Professor Flitwick": {level: "Medium", collect: "Wild"},
      "Minerva Mcgonagall": {level: "Emergency", collect: "Wild"},
      "Peeves": {level: "High", collect: "Wild"},
      "Hogwarts House Cup": {collect: "Wizarding Challenges"},
      "Moaning Myrtle": {level: "High", collect: "Wild"},
      "Pomona Sprout": {level: "Medium", collect: "Wild"},
    },
    "Great Hall": {
      "Fawkes": {level: "Severe", collect: "Wild"},
      "Portrait of Dumbledore": {level: "Medium", collect: "Portkey & Wild"},
      "House Hourglass Set": {collect: "Wizarding Challenges"},
      "Owl Lecturn": {collect: "Wizarding Challenges"},
      "Sorting Hat": {level: "Severe", collect: "Portkey & Wild"},
    },
    "Moving Staircases II": {
      "Helga Hufflepuff Wizard Portrait": {level: "High", collect: "Wild"},
      "Wild Boar": {collect: "Wizarding Challenges"},
      "Rowena Ravenclaw Wizard Portrait": {level: "High", collect: "Wild"},
      "Salazar Slytherin Wizard Portrait": {level: "High", collect: "Wild"},
      "Godric Gryffindor Wizard Portrait": {level: "High", collect: "Wild"},
    }
  },
  "Legends of Hogwarts": {
    "Room of Requirement I": {
      "Filch and Mrs. Norris": {level: "Low", collect: "Wild"},
      "Neville Longbottom": {level: "Medium", collect: "Wild"},
      "Young Ginny Weasley ": {level: "Medium", collect: "Portkey & Wild"},
      "Young Luna Lovegood": {level: "Medium", collect: "Wild"},
      "Dumbledore’s Army Dueling Dummy": {level: "Low", collect: "Portkey & Wild"},
      "Weasley Fireworks": {level: "Low", collect: "Wild"},
    },
    "Potions Classroom": {
      "Hedwig": {level: "Low", collect: "Wild"},
      "Young Harry Potter": {level: "Severe", collect: "Portkey & Wild"},
      "Half Blood Prince's Advanced Potion Making": {collect: "Wizarding Challenges"},
      "Sirius Black": {level: "High", collect: "Portkey & Wild"},
      "Severus Snape": {level: "High", collect: "Wild"},
    },
    "Chess Chamber": {
      "Flying Key": {collect: "Wizarding Challenges"},
      "Hermione Granger": {level: "Severe", collect: "Wild"},
      "Albus Dumbledore": {level: "Emergency", collect: "Wild"},
      "Wizard Chess Queen": {collect: "Wizarding Challenges"},
      "Young Ron Weasley": {level: "Medium", collect: "Wild"},
    },
    "Room of Requirement V": {
      "Fred Weasley": {level: "Severe", collect: "Wild"},
      "Angelina Johnson": {level: "Medium", collect: "Wild"},
      "Parvati Patil": {level: "High", collect: "Wild"},
      "George Weasley": {level: "Severe", collect: "Wild"},
      "Dumbledore’s Army Sign-up Sheet": {collect: "Wizarding Challenges"},
    },
    "Yule Ball Great Hall": {
      "Angelina and Fred": {level: "High", collect: "Wild"},
      "Hagrid and Madame Maxime": {level: "High", collect: "Wild"},
      "Hermione and Viktor": {level: "Severe", collect: "Wild"},
      "Parvati and Harry": {level: "Severe", collect: "Wild"},
      "Yule Ball Program": {collect: "Wizarding Challenges"},
    },
    "Hogwarts Grounds": {
      "Young Sirius Black": {level: "High", collect: "Wild"},
      "Young James Potter": {level: "Emergency", collect: "Wild"},
      "Young Remus Lupin": {level: "Severe", collect: "Wild"},
      "Young Peter Pettigrew": {level: "High", collect: "Wild"},
      "Unfinished Marauder’s Map": {collect: "Wizarding Challenges"},
    }
  },
  "Ministry of Magic": {
    "Ministry Atrium": {
      "Flock of Interdepartmental Memos": {level: "Medium", collect: "Portkey & Wild"},
      "Ministry Official": {level: "Low", collect: "Wild"},
      "Daily Prophet Stand": {level: "Low", collect: "Wild"},
      "Ministry Administrator": {level: "Low", collect: "Wild"},
      "Prophecy Record": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Ministry Atrium II": {
      "The Veil": {level: "Severe", collect: "Portkey & Wild"},
      "Fountain Of Magical Brethren": {collect: "Wizarding Challenges"},
      "Bogrod": {level: "Medium", collect: "Wild"},
      "Tank of Brains": {level: "Severe", collect: "Wild"},
      "Ministry Employee Newt Scamander": {level: "Emergency", collect: "Wild"},
    },
    "Courtroom Ten": {
      "Arthur Weasley": {level: "Medium", collect: "Portkey & Wild"},
      "Alastor Moody": {level: "High", collect: "Portkey & Wild"},
      "Ministry Visitors Entrance": {collect: "Wizarding Challenges"},
      "Wizengamot Accusation Chair": {collect: "Wizarding Challenges"},
      "Nymphadora Tonks": {level: "High", collect: "Wild"},
    }
  },
  "Magizoology": {
    "Newt’s Case": {
      "Billywig": {level: "Low", collect: "Wild"},
      "Young Graphorn": {level: "Low", collect: "Wild"},
      "Niffler": {level: "Medium", collect: "Portkey & Wild"},
      "Baby Niffler": {level: "Low", collect: "Wild"},
      "Mooncalf": {level: "Medium", collect: "Wild"},
    },
    "Central Park": {
      "Mountain Troll": {level: "High", collect: "Wild"},
      "Erumpent": {level: "Medium", collect: "Wild"},
      "Demiguise": {level: "High", collect: "Portkey & Wild"},
      "Branch of Bowtruckles": {level: "Medium", collect: "Wild"},
      "Pickett": {level: "Severe", collect: "Portkey & Wild"},
      "Murtlap": {collect: "Wizarding Challenges"},
    },
    "New York City Street": {
      "Thunderbird": {collect: "Wizarding Challenges"},
      "Newt Scamander": {level: "Emergency", collect: "Wild"},
      "Unicorn": {level: "Severe", collect: "Wild"},
      "Occamy Eggs": {level: "High", collect: "Portkey & Wild"},
      "Occamy": {collect: "Wizarding Challenges"},
    }
  },
  "Magical Games and Sports": {
    "World Cup Grounds": {
      "Gobstone Set": {level: "Low", collect: "Wild"},
      "Quaffle": {level: "Low", collect: "Portkey & Wild"},
      "Magical Megaphone": {level: "Low", collect: "Wild"},
      "Quidditch World Cup": {level: "Medium", collect: "Portkey & Wild"},
      "Chudley Cannons Player": {level: "Low", collect: "Portkey & Wild"},
    },
    "Hogwarts Quidditch Pitch": {
      "Quidditch Pitch Stands": {collect: "Wizarding Challenges"},
      "Bludger": {level: "Medium", collect: "Wild"},
      "Golden Snitch": {level: "High", collect: "Wild"},
      "Beaters Bat": {level: "Medium", collect: "Wild"},
      "Quidditch Keeper Ron": {level: "Severe", collect: "Wild"},
      "Exploding Snap House of Cards": {level: "Medium", collect: "Wild"},
    },
    "Triwizard Maze": {
      "Nimbus 2000": {level: "Medium", collect: "Portkey & Wild"},
      "Harry Potter - Quidditch": {level: "Emergency", collect: "Wild"},
      "Triwizard Cup": {collect: "Wizarding Challenges"},
      "Goblet Of Fire": {level: "Severe", collect: "Portkey & Wild"},
      "Book Quidditch Through The Ages": {collect: "Wizarding Challenges"},
    },
    "Hogwarts Quidditch Stands": {
      "Gryffindor Quidditch Banner": {collect: "Wizarding Challenges"},
      "Quidditch Fan Seamus": {level: "Medium", collect: "Wild"},
      "Quidditch Fan Luna": {level: "High", collect: "Wild"},
      "Quidditch Fan Neville": {level: "High", collect: "Wild"},
      "Quidditch Fan Hermione": {level: "Severe", collect: "Wild"},
    }
  },
  "Mysterious Artefacts": {
    "Room of Requirement II": {
      "Quill of Acceptance and Book of Admittance": {level: "Low", collect: "Wild"},
      "Weasley Clock": {level: "Low", collect: "Wild"},
      "Remembrall": {level: "Low", collect: "Wild"},
      "Hagrids Umbrella": {level: "Low", collect: "Portkey & Wild"},
      "Decoy Detonators": {level: "Medium", collect: "Wild"},
    },
    "Dumbledore’s Office": {
      "Mirror Of Erised": {level: "High", collect: "Portkey & Wild"},
      "Philosophers Stone": {level: "Severe", collect: "Wild"},
      "Sword Of Gryffindor": {collect: "Wizarding Challenges"},
      "Pensieve": {level: "Severe", collect: "Portkey & Wild"},
      "Dumbledore’s Memory Cabinet": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Room of Requirement III": {
      "Marauders Map": {level: "Medium", collect: "Wild"},
      "Cursed Opal Necklace": {collect: "Wizarding Challenges"},
      "Mad-Eye Moody’s Eye": {level: "High", collect: "Wild"},
      "Time Turner": {level: "Emergency", collect: "Wild"},
      "Omnioculars": {level: "Medium", collect: "Wild"},
      "Sirius Flying Motorbike": {collect: "Wizarding Challenges"},
    }
  },
  "Wonders of the Wizarding World": {
    "Room of Requirement IV": {
      "Self-playing Harp": {level: "Medium", collect: "Portkey & Wild"},
      "Dirigible Plums": {level: "Low", collect: "Portkey & Wild"},
      "Crystal Ball": {level: "Low", collect: "Wild"},
      "Music Box": {level: "Low", collect: "Wild"},
      "Quibbler": {level: "Low", collect: "Wild"},
    },
    "Hogwarts Gate": {
      "Howler": {level: "Medium", collect: "Wild"},
      "Whomping Willow": {level: "Emergency", collect: "Wild"},
      "Weasley's Flying Car": {level: "Severe", collect: "Portkey & Wild"},
      "Knight Bus": {collect: "Wizarding Challenges"},
      "Grawp": {level: "Severe", collect: "Wild"},
      "Wanted Poster of Sirius Black": {level: "Medium", collect: "Wild"},
    },
    "King’s Cross Station": {
      "Hogwarts Express Engine": {collect: "Wizarding Challenges"},
      "Platform 9 3/4 Sign": {collect: "Wizarding Challenges"},
      "Foe Glass": {level: "High", collect: "Portkey & Wild"},
      "Giants Helm": {level: "Low", collect: "Wild"},
      "Mandrake": {level: "High", collect: "Wild"},
    }
  },
  "Oddities": {
    "Oddities I": {
      "Pixie": {level: "Low", collect: "Wild"},
      "Centaur": {level: "Medium", collect: "Wild"},
      "Centaur's Bow": {collect: "Wizarding Challenges"},
      "Vampire": {level: "High", collect: "Wild"},
      "Werewolf": {level: "High", collect: "Wild"},
    },
    "Oddities II": {
      "Doxy": {level: "Low", collect: "Wild"},
      "Horned Serpent": {level: "Emergency", collect: "Portkey & Wild"},
      "Horned Serpent Egg": {collect: "Wizarding Challenges"},
      "Erklings": {level: "High", collect: "Wild"},
      "Leprechaun": {level: "Medium", collect: "Wild"},
    },
    "Oddities III": {
      "Chinese Fireball": {level: "Emergency", collect: "Wild"},
      "Chinese Fireball Egg": {level: "Medium", collect: "Portkey"},
      "Antipodean Opaleye Egg": {level: "Medium", collect: "Portkey"},
      "Antipodean Opaleye": {level: "Severe", collect: "Wild"},
    },
    "Oddities IV": {
      "Peruvian Vipertooth": {level: "Emergency", collect: "Wild"},
      "Common Welsh Green": {level: "Severe", collect: "Wild"},
      "Peruvian Vipertooth Egg": {level: "Medium", collect: "Portkey"},
      "Common Welsh Green Egg": {level: "Medium", collect: "Portkey"},
    },
    "Oddities V": {
      "Azkaban Escapee": {level: "Medium", collect: "Wild"},
      "Death Eater": {level: "Severe", collect: "Wild"},
      "Fluffy/Three Headed Dog": {level: "Emergency", collect: "Wild"},
    }
  }
};

