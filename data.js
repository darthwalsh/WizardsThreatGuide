// cSpell:disable

// MAYBE get capture chances from https://foundables.com/?r=capture

const registry = {
  "Care of Magical Creatures": {
    "Hagrid’s Hut": {
      "Abraxan Winged Horse": {level: "Emergency", collect: "Wizarding Challenges"},
      "Buckbeak": {level: "Severe", collect: "Portkey & Wild"},
      "Hagrids Hut": {level: "Emergency", collect: "Wizarding Challenges"},
      "Norwegian Ridgeback Baby": {level: "High", collect: "Wild"},
      "Rubeus Hagrid": {level: "Emergency", collect: "Wild"},
    },
    "Pumpkin Patch": {
      "Acromantula Eggs": {level: "Low", collect: "Portkey & Wild"},
      "Baby Hippogriff": {level: "Low", collect: "Wild"},
      "Flobberworm": {level: "Low", collect: "Wild"},
      "Kneazle": {level: "Low", collect: "Wild"},
      "Monster Book Of Monsters": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Forbidden Forest": {
      "Baby Unicorn": {level: "Medium", collect: "Wild"},
      "Blast-Ended Skrewt": {level: "Medium", collect: "Wild"},
      "Dragon Egg": {level: "Medium", collect: "Portkey & Wild"},
      "Firenze": {level: "Severe", collect: "Wild"},
      "Hippogriff": {level: "High", collect: "Wild"},
      "Puffskein": {level: "Low", collect: "Wizarding Challenges"},
    }
  },
  "Dark Arts": {
    "Borgin & Burkes": {
      "Flesh-Eating Slugs": {level: "Low", collect: "Wild"},
      "Hand of Glory": {level: "Low", collect: "Wild"},
      "Magick Moste Evile": {level: "Low", collect: "Portkey & Wild"},
      "Vanishing Cabinet": {level: "Medium", collect: "Wild"},
      "Wanted Poster of an Azkaban Escapee": {level: "Low", collect: "Wild"},
    },
    "Knockturn Alley": {
      "Hag": {level: "Medium", collect: "Wild"},
      "Knockturn Alley Sign": {level: "Emergency", collect: "Wizarding Challenges"},
      "Ministry Executioner": {level: "Medium", collect: "Portkey & Wild"},
      "Portrait of Bellatrix Lestrange": {level: "Medium", collect: "Wild"},
      "Swooping Evil": {level: "Severe", collect: "Portkey & Wild"},
      "Thestral": {level: "High", collect: "Wild"},
    },
    "Fallen Ministry Atrium": {
      "Magic is Might Statue": {level: "Emergency", collect: "Wizarding Challenges"},
      "Percival Graves": {level: "Severe", collect: "Wild"},
      "Portrait of Voldemort": {level: "High", collect: "Portkey & Wild"},
      "Tom Riddle Sr's Gravestone": {level: "Emergency", collect: "Wizarding Challenges"},
      "Tom Riddle": {level: "Emergency", collect: "Wild"},
    }
  },
  "Hogwarts School": {
    "DADA Classroom": {
      "Boggart Cabinet": {level: "Medium", collect: "Portkey & Wild"},
      "Gryffindor Student": {level: "Low", collect: "Portkey & Wild"},
      "Hufflepuff Student": {level: "Low", collect: "Wild"},
      "Ravenclaw Student": {level: "Low", collect: "Wild"},
      "Slytherin Student": {level: "Low", collect: "Wild"},
    },
    "Moving Staircases": {
      "Hogwarts House Cup": {level: "Emergency", collect: "Wizarding Challenges"},
      "Minerva Mcgonagall": {level: "Emergency", collect: "Wild"},
      "Moaning Myrtle": {level: "High", collect: "Wild"},
      "Peeves": {level: "High", collect: "Wild"},
      "Pomona Sprout": {level: "Medium", collect: "Wild"},
      "Professor Flitwick": {level: "Medium", collect: "Wild"},
    },
    "Great Hall": {
      "Fawkes": {level: "Severe", collect: "Wild"},
      "House Hourglass Set": {level: "Emergency", collect: "Wizarding Challenges"},
      "Owl Lecturn": {level: "Emergency", collect: "Wizarding Challenges"},
      "Portrait of Dumbledore": {level: "Medium", collect: "Portkey & Wild"},
      "Sorting Hat": {level: "Severe", collect: "Portkey & Wild"},
    },
    "Moving Staircases II": {
      "Godric Gryffindor Wizard Portrait": {level: "High", collect: "Wild"},
      "Helga Hufflepuff Wizard Portrait": {level: "High", collect: "Wild"},
      "Rowena Ravenclaw Wizard Portrait": {level: "High", collect: "Wild"},
      "Salazar Slytherin Wizard Portrait": {level: "High", collect: "Wild"},
      "Wild Boar": {level: "Emergency", collect: "Wizarding Challenges"},
    }
  },
  "Legends of Hogwarts": {
    "Room of Requirement I": {
      "Dumbledore’s Army Dueling Dummy": {level: "Low", collect: "Portkey & Wild"},
      "Filch and Mrs. Norris": {level: "Low", collect: "Wild"},
      "Neville Longbottom": {level: "Medium", collect: "Wild"},
      "Weasley Fireworks": {level: "Low", collect: "Wild"},
      "Young Ginny Weasley ": {level: "Medium", collect: "Portkey & Wild"},
      "Young Luna Lovegood": {level: "Medium", collect: "Wild"},
    },
    "Potions Classroom": {
      "Half Blood Prince's Advanced Potion Making": {level: "Emergency", collect: "Wizarding Challenges"},
      "Hedwig": {level: "Low", collect: "Wild"},
      "Severus Snape": {level: "High", collect: "Wild"},
      "Sirius Black": {level: "High", collect: "Portkey & Wild"},
      "Young Harry Potter": {level: "Severe", collect: "Portkey & Wild"},
    },
    "Chess Chamber": {
      "Albus Dumbledore": {level: "Emergency", collect: "Wild"},
      "Flying Key": {level: "Emergency", collect: "Wizarding Challenges"},
      "Hermione Granger": {level: "Severe", collect: "Wild"},
      "Wizard Chess Queen": {level: "Emergency", collect: "Wizarding Challenges"},
      "Young Ron Weasley": {level: "Medium", collect: "Wild"},
    },
    "Room of Requirement V": {
      "Fred Weasley": {level: "Severe", collect: "Wild"},
      "George Weasley": {level: "Severe", collect: "Wild"},
      "Parvati Patil": {level: "High", collect: "Wild"},
      "Angelina Johnson": {level: "Medium", collect: "Wild"},
      "Dumbledore’s Army Sign-up Sheet": {level: "Emergency", collect: "Wizarding Challenges"},
    },
    "Yule Ball Great Hall": {
      "Angelina and Fred": {level: "High", collect: "Wild"},
      "Hermione and Viktor": {level: "Severe", collect: "Wild"},
      "Hagrid and Madame Maxime": {level: "High", collect: "Wild"},
      "Parvati and Harry": {level: "Severe", collect: "Wild"},
      "Yule Ball Program": {level: "Emergency", collect: "Wizarding Challenges"},
    },
    "Hogwarts Grounds": {
      "Young James Potter": {level: "Emergency", collect: "Wild"},
      "Young Sirius Black": {level: "High", collect: "Wild"},
      "Young Remus Lupin": {level: "Severe", collect: "Wild"},
      "Young Peter Pettigrew": {level: "High", collect: "Wild"},
      "Unfinished Marauder’s Map": {level: "Emergency", collect: "Wizarding Challenges"},
    }
  },
  "Ministry of Magic": {
    "Ministry Atrium": {
      "Daily Prophet Stand": {level: "Low", collect: "Wild"},
      "Flock of Interdepartmental Memos": {level: "Medium", collect: "Portkey & Wild"},
      "Ministry Administrator": {level: "Low", collect: "Wild"},
      "Ministry Official": {level: "Low", collect: "Wild"},
      "Prophecy Record": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Ministry Atrium II": {
      "Bogrod": {level: "Medium", collect: "Wild"},
      "Fountain Of Magical Brethren": {level: "Emergency", collect: "Wizarding Challenges"},
      "Tank of Brains": {level: "Severe", collect: "Wild"},
      "The Veil": {level: "Severe", collect: "Portkey & Wild"},
      "Ministry Employee Newt Scamander": {level: "Emergency", collect: "Special"},
    },
    "Courtroom Ten": {
      "Alastor Moody": {level: "High", collect: "Portkey & Wild"},
      "Arthur Weasley": {level: "Medium", collect: "Portkey & Wild"},
      "Ministry Visitors Entrance": {level: "Emergency", collect: "Wizarding Challenges"},
      "Nymphadora Tonks": {level: "High", collect: "Wild"},
      "Wizengamot Accusation Chair": {level: "Emergency", collect: "Wizarding Challenges"},
    }
  },
  "Magizoology": {
    "Newt’s Case": {
      "Baby Niffler": {level: "Low", collect: "Wild"},
      "Billywig": {level: "Low", collect: "Wild"},
      "Mooncalf": {level: "Medium", collect: "Wild"},
      "Niffler": {level: "Medium", collect: "Portkey & Wild"},
      "Young Graphorn": {level: "Low", collect: "Wild"},
    },
    "Central Park": {
      "Branch of Bowtruckles": {level: "Medium", collect: "Wild"},
      "Demiguise": {level: "High", collect: "Portkey & Wild"},
      "Erumpent": {level: "Medium", collect: "Wild"},
      "Mountain Troll": {level: "High", collect: "Wild"},
      "Murtlap": {level: "Emergency", collect: "Wizarding Challenges"},
      "Pickett": {level: "Severe", collect: "Portkey and Wild"},
    },
    "New York City Street": {
      "Newt Scamander": {level: "Emergency", collect: "Wild"},
      "Occamy Eggs": {level: "High", collect: "Portkey & Wild"},
      "Occamy": {level: "Emergency", collect: "Wizarding Challenges"},
      "Thunderbird": {level: "Emergency", collect: "Wizarding Challenges"},
      "Unicorn": {level: "Severe", collect: "Wild"},
    }
  },
  "Magical Games and Sports": {
    "World Cup Grounds": {
      "Chudley Cannons Player": {level: "Low", collect: "Portkey & Wild"},
      "Gobstone Set": {level: "Low", collect: "Wild"},
      "Magical Megaphone": {level: "Low", collect: "Wild"},
      "Quaffle": {level: "Low", collect: "Portkey & Wild"},
      "Quidditch World Cup": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Hogwarts Quidditch Pitch": {
      "Beaters Bat": {level: "Medium", collect: "Wild"},
      "Bludger": {level: "Medium", collect: "Wild"},
      "Exploding Snap House of Cards": {level: "Medium", collect: "Wild"},
      "Golden Snitch": {level: "High", collect: "Wild"},
      "Quidditch Keeper Ron": {level: "Severe", collect: "Wild"},
      "Quidditch Pitch Stands": {level: "Emergency", collect: "Wizarding Challenges"},
    },
    "Triwizard Maze": {
      "Book Quidditch Through The Ages": {level: "Emergency", collect: "Wizarding Challenges"},
      "Goblet Of Fire": {level: "Severe", collect: "Portkey & Wild"},
      "Harry Potter - Quidditch": {level: "Emergency", collect: "Wild"},
      "Nimbus 2000": {level: "Medium", collect: "Portkey & Wild"},
      "Triwizard Cup": {level: "Emergency", collect: "Wizarding Challenges"},
    },
    "Hogwarts Quidditch Stands": {
      "Quidditch Fan Hermione": {level: "Severe", collect: "Wild"},
      "Quidditch Fan Luna": {level: "High", collect: "Wild"},
      "Quidditch Fan Neville": {level: "High", collect: "Wild"},
      "Quidditch Fan Seamus": {level: "Medium", collect: "Wild"},
      "Gryffindor Quidditch Banner": {level: "Emergency", collect: "Wizarding Challenges"},
    }
  },
  "Mysterious Artefacts": {
    "Room of Requirement II": {
      "Decoy Detonators": {level: "Medium", collect: "Wild"},
      "Hagrids Umbrella": {level: "Low", collect: "Portkey & Wild"},
      "Quill of Acceptance and Book of Admittance": {level: "Low", collect: "Wild"},
      "Remembrall": {level: "Low", collect: "Wild"},
      "Weasley Clock": {level: "Low", collect: "Wild"},
    },
    "Dumbledore’s Office": {
      "Dumbledore’s Memory Cabinet": {level: "Medium", collect: "Portkey & Wild"},
      "Mirror Of Erised": {level: "High", collect: "Portkey & Wild"},
      "Pensieve": {level: "Severe", collect: "Portkey & Wild"},
      "Philosophers Stone": {level: "Severe", collect: "Wild"},
      "Sword Of Gryffindor": {level: "Emergency", collect: "Wizarding Challenges"},
    },
    "Room of Requirement III": {
      "Cursed Opal Necklace": {level: "High", collect: "Wizarding Challenges"},
      "Mad-Eye Moody’s Eye": {level: "High", collect: "Wild"},
      "Marauders Map": {level: "Medium", collect: "Wild"},
      "Omnioculars": {level: "Medium", collect: "Wild"},
      "Sirius Flying Motorbike": {level: "Emergency", collect: "Wizarding Challenges"},
      "Time Turner": {level: "Emergency", collect: "Wild"},
    }
  },
  "Wonders of the Wizarding World": {
    "Room of Requirement IV": {
      "Crystal Ball": {level: "Low", collect: "Wild"},
      "Dirigible Plums": {level: "Low", collect: "Portkey & Wild"},
      "Music Box": {level: "Low", collect: "Wild"},
      "Quibbler": {level: "Low", collect: "Wild"},
      "Self-playing Harp": {level: "Medium", collect: "Portkey & Wild"},
    },
    "Hogwarts Gate": {
      "Grawp": {level: "Severe", collect: "Wild"},
      "Howler": {level: "Medium", collect: "Wild"},
      "Knight Bus": {level: "Emergency", collect: "Wizarding Challenges"},
      "Wanted Poster of Sirius Black": {level: "Medium", collect: "Wild"},
      "Weasley's Flying Car": {level: "Severe", collect: "Portkey & Wild"},
      "Whomping Willow": {level: "Emergency", collect: "Wild"},
    },
    "King’s Cross Station": {
      "Foe Glass": {level: "High", collect: "Portkey & Wild"},
      "Giants Helm": {level: "Low", collect: "Wild"},
      "Hogwarts Express Engine": {level: "Emergency", collect: "Wizarding Challenges"},
      "Mandrake": {level: "High", collect: "Wild"},
      "Platform 9 3/4 Sign": {level: "Emergency", collect: "Wizarding Challenges"},
    }
  },
  "Oddities": {
    "Oddities I": {
      "Centaur's Bow": {level: "Emergency", collect: "Wizarding Challenges"},
      "Centaur": {level: "Medium", collect: "Wild"},
      "Doxy": {level: "Low", collect: "Wild"},
      "Fenrir Greyback": {level: "High", collect: "Wild"},
      "Pixie": {level: "Low", collect: "Wild"},
      "Vampire": {level: "High", collect: "Wild"},
      "Werewolf": {level: "High", collect: "Wild"},
    },
    "Oddities II": {
      "Erklings": {level: "High", collect: "Wild"},
      "Horned Serpent Egg": {level: "High", collect: "Wizarding Challenges"},
      "Horned Serpent": {level: "Emergency", collect: "Portkey & Wild"},
      "Leprechaun": {level: "Medium", collect: "Wild"},
    },
    "Oddities III": {
      "Antipodean Opaleye": {level: "Severe", collect: "Wild"},
      "Chinese Fireball": {level: "Emergency", collect: "Wild"},
      "Antipodean Opaleye Egg": {level: "Medium", collect: "Portkey"},
      "Chinese Fireball Egg": {level: "Medium", collect: "Portkey"},
    },
    "Oddities IV": {
      "Common Welsh Green": {level: "Severe", collect: "Wild"},
      "Peruvian Vipertooth": {level: "Emergency", collect: "Wild"},
      "Common Welsh Green Egg": {level: "Medium", collect: "Portkey"},
      "Peruvian Vipertooth Egg": {level: "Medium", collect: "Portkey"},
    },
    "Oddities V": {
      "Azkaban Escapee": {level: "Medium", collect: "Wild"},
      "Death Eater": {level: "Severe", collect: "Wild"},
      "Fluffy/Three Headed Dog": {level: "Emergency", collect: "Wild"},
    }
  }
};

