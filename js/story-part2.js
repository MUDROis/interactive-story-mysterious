/* The Night the Stars Went Out — story data, chapters 9–10 and the four endings. */
window.STORY_PART2 = {

/* ───────────────────────── CHAPTER 8 · THE MERIDIAN ROOM ───────────────────────── */

"meridian-room": {
  chapter: 8, chapterTitle: "The Star-Shaped Lock", title: "The Year Wheel",
  mood: "storm",
  text: [
    "The Meridian Room is not a room. It is the inside of the mountain's own heart, round and high as the dome above it, and it is full of the same slow weather as Aster's chamber — but *bigger*. Bigger than furniture. Bigger than buildings.",
    "The Year Wheel stands in the middle of it on a bed of stone, and it is the size of a village church, and it is beautiful the way glaciers and cathedral windows are beautiful: without trying, without end, without mercy. A ring of brass as tall as the house, toothed like a great gear, hung with hundreds of small lamps in glass cases — and every lamp alive, every one burning with a flame of that colour-with-no-name you saw in the eyepiece. Around the ring run chains and cranks and a stair that climbs the wheel itself like a vine. Through the middle, where the axle should be, light moves: slow, steady, breathing.",
    "It is almost stopped. That is the second thing you understand, before anyone says a word. The great ring hangs at a slant of exhaustion, the lamps in their cases burned down to blue-edged whispers, and the breathing light in the axle comes slower, and slower, and —",
    "On a desk like a ship's bridge, bolted to the stone, stands a machine you know only from school films: a phonograph, horn of polished brass, wax cylinder freshly sliced with words. Beside it, a card in the thin fast hand: *PLAY ME FIRST. — E.M.*",
    "The cat jumps onto the desk and sits beside the phonograph with her tail around her feet. From the dark of the stair behind you, quick and quiet, comes the ticking of Aster, who has followed you down and is not going to apologize for it."
  ],
  choices: [
    { text: "Play the phonograph.", to: "phonograph" }
  ]
},

"phonograph": {
  chapter: 8, chapterTitle: "The Star-Shaped Lock", title: "The Voice on the Cylinder",
  mood: "storm",
  text: [
    "You lower the horn, you turn the crank, you set the needle in the groove, the way the little engraved card shows. The cylinder turns. A voice fills the mountain's heart — tired, warm, thin as the letter, and *alive*: a man speaking calmly into a brass horn at the end of the world.",
    { style: "voice", text: "\"Good evening, assistant. If you are hearing this, then the wheel brought you down, which means the house trusts you, which means my judgement of you in March was correct, which is a great comfort to me tonight, because I am, as you have probably worked out, up.\"" },
    { style: "voice", text: "\"You will want the whole of it, so here is the whole of it, quickly, the way I would say it over tea. The stars are lamps. The lamps are lit by being wanted. The wanting is kept by the Year Wheel, which my teacher built and I have wound. The Quiet is the forgetting itself — it is not wicked, it is only enormous, and hungry the way silence is hungry, and it cannot be fought, because you cannot fight a space. It can only be answered. My teacher's last word to me was: answer it. I have spent forty years not knowing what he meant, and I think — I think, assistant, I do not know — that tonight I finally understood, and that understanding is why I went up, and why I cannot come down and also explain. Some things can only be carried by one person at a time.\"" },
    { style: "voice", text: "\"The wheel is nearly down. Here is what I know for certain, and then I will stop telling you things and let the night ask you, because it will, it always does. One: the wheel must be wound before it stops, and a wound wheel buys the sky years, and the winding must be done in the winder's own name — it cannot be mine again, I have spent mine. Two: whatever you do, do it in your own name. That is not poetry; it is engineering; you will see. Three: the Quiet is going to ask you the only question it has. It asks everyone it sees, and nearly everyone answers it wrong, not because they are stupid, but because they are frightened, and it is very hard to remember the answer when you are frightened.\"" },
    { style: "voice", text: "\"And the last thing. If you climb — and you may climb, the telescope goes both ways, that is what the glass road is — if you climb, you will find me holding a lock I cannot let go of, and you will be angry with me, and I am sorry, and it will not be the last time you are angry with a keeper, because keepers are only people who stayed. I did not have time to teach you, assistant. I am beginning to suspect, from up here, that this was never a job you could teach. The wheel will tell you what it needs. It has been waiting, I think, for someone who remembers being fifteen and looking up. — Edmund Marlow, Keeper, in his own name, good night.\"" },
    "The cylinder runs out. The ticking of the phonograph winds down like a small clock going to sleep. In the enormous quiet of the Meridian Room, the Year Wheel breathes, slower, slower, and every lamp in its glass cases is waiting — you are quite sure of this now, quite sure in your ribs — every lamp in its glass case is waiting to find out what you are made of.",
    "The cat is looking at you. Aster is looking at you, all of his brass. And down under the floor, far away, soft as the world's smallest bell, the sky keeps paying out its lights."
  ],
  set: ["heardMarlow"],
  choices: [
    { text: "Decide. This is your night now.", to: "hub2" }
  ]
},

/* ───────────────────────── CHAPTER 9 · THE HOUR OF THE QUIET ───────────────────────── */

"hub2": {
  chapter: 9, chapterTitle: "The Hour of the Quiet", title: "Five Roads Out of the Heart of the Mountain",
  mood: "dread",
  text: [
    "You stand in the heart of the mountain with a dead man's letter in your memory and a living man's voice in your ears, and you take inventory, because that is what the night has taught you: inventory, in order of importance.",
    "The Year Wheel, nearly down, needing a winder — and a winder who winds in their own name. The glass road up through the great telescope, at the top of which a thin old man is holding a lock with both arms. The Quiet, enormous and polite, somewhere above the world, keeping its appointments after midnight, carrying its one unbearable question. And below the mountain, in its bowl of warm light, a town of twelve thousand staff who do not know they are staff.",
    "Aster ticks at your shoulder. The cat walks a slow circle around the base of the wheel, the way a sailor walks a deck. The lamps in their cases lean their little flames toward you, every one of them, like faces in a classroom waiting to be called on.",
    "\"Whatever you choose,\" Aster says quietly, \"I want it written somewhere that the choice was real. People think the sky is a fact. It is not, assistant. It never was. It is a decision, remade every night by whoever agrees to keep making it. Tonight the decision is yours. It is a terrible thing to give a fifteen-year-old. It is also the only honest thing anyone can give.\"",
    "The clock in the wheel's bridge — the sky's clock, needle-thin — crosses twelve, and does not strike, and does not need to. Midnight, without ceremony, arrives.",
    "The mountain breathes. The wheel waits. What do you do?"
  ],
  choices: [
    { text: "Wind the Year Wheel. In your own name.", to: "wind", effects: { traits: { brave: 1 } }, hint: "Brave" },
    { text: "Climb the glass road to Dr. Marlow.", to: "climb", if: { any: ["sight"], trait: { brave: 2 } }, hint: "You have seen the way — or the nerve for it" },
    { text: "Call out to the Quiet. Answer the question it carries.", to: "speak", if: { flag: "understanding" }, hint: "You have read what it is" },
    { text: "Run down the mountain. Wake the town.", to: "town", effects: { traits: { kind: 1 } }, hint: "Kind" },
    { text: "Pack your bag. This is too big. You are too young. Go home.", to: "ending-b", effects: { flags: ["left"] } }
  ]
},

/* ───────────────────────── CHAPTER 10 · THE YEAR WHEEL ───────────────────────── */

"wind": {
  chapter: 10, chapterTitle: "The Year Wheel", title: "Winding in Your Own Name",
  mood: "storm",
  text: [
    "You climb the vine of a stair that grows up the Year Wheel's great ring, and at the top of it you find the winding station, and it is nothing like a key, and it is everything like a desk.",
    "There is a keeper's seat, small and worn to the shape of one particular thin old man. There are handles, two of them, at exactly the height of your hands, polished bright by forty years of the same grip. And above them, a brass plate engraved in letters a century deep:",
    { style: "note", text: "THE YEAR WHEEL IS WOUND IN THE WINDER'S OWN NAME. NAME IT ALOUD, TURN IT FULLY AROUND, AND DO NOT LET GO." },
    "You take the handles. The brass is warm — not metal-warm; *hand*-warm, the temperature of the last person's hands, kept by a hundred years of pockets. Aster's voice comes up from far below, thin and clear: \"Whatever happens, assistant — do not let go. The wheel does not mind being slow. It only minds being alone.\"",
    "You press down. The ring shifts its enormous weight with a groan like a ship leaving harbour, and the first inch is the hardest thing you have ever done with your body, and then it turns, and turning it is like turning the season itself.",
    { text: "And it answers you. The lamps in their cases stand up straighter, flame by flame. The light in the axle steadies, quickens, begins to breathe like something sleeping well. The whole mountain hums one long low note that you feel in your back teeth, in your ribs, in the bones of your feet: the sound of a sky deciding to keep going for one more while.", if: { flag: "understanding" } },
    { text: "And it turns, but it does not answer. The lamps flicker and stand uncertain. The light in the axle keeps its slow dying rhythm. Something is missing; you can hear the missing it, the way you heard the missing note in the music box — the wheel turns and turns and somewhere, far up, the sky does not lean in. The journal is heavy in your pocket, and you never read the last page.", if: { notFlag: "understanding" } },
    "Halfway around, the temperature of the room changes. Not colder. *Quieter.* The quiet comes in at the edge of your vision first, a stillness like deep water, polite as a clerk, patient as dust — and the whole Meridian Room waits, the way the library held its breath, to see what you will do with your hands full."
  ],
  choices: [
    { text: "Keep turning. Do not let go. Finish the revolution.", to: "wind-alone", effects: { flags: ["wound"], traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"wind-alone": {
  chapter: 10, chapterTitle: "The Year Wheel", title: "The Long Turn",
  mood: "storm",
  text: [
    "You keep turning.",
    "It is the longest work of your life and it takes eleven minutes. The Quiet moves through the room like weather, and it does not touch you and it does not speak, and that is somehow worse — you are being *circled* by the size of the forgetting, examined by something that has outlived every star it has ever watched go out. Your arms are fire. Your breath comes in torn pieces. The wheel does not care, because the wheel is not cruel either; the wheel is only true: *turn or the sky stops, turn or the sky stops, turn or the sky stops.*",
    { text: "And all the way through the turn, in the deep of your ribs where the Quiet cannot reach, you keep the answer warm. *Who remembers you? I do. I do. I do.* You think of your grandmother on the balcony, of Vega's little sister, of the clerk-lines crossing the Swan, of a thin man reading an essay eleven times. You wind every star you have ever loved back into the wheel, one name at a time, in your own name, out loud, forgetting to be embarrassed.", if: { flag: "understanding" } },
    { text: "And all the way through the turn, the silence in the axle asks you something you cannot hear, and you have no words to give it, because you never opened the journal's last page, and the wheels of the sky, it turns out, are geared to words as much as hands.", if: { notFlag: "understanding" } },
    "Then the revolution is done. The handles lock. The great ring sighs down into its new balance, and the light in the axle stands up straight and *breathes*, easy, kept, a sky's worth of burning.",
    "You slide down against the wheel's rim and sit on the stone, fifteen years old, unable to lift your arms, shaking with the ordinary human glory of having finished a thing.",
    "But there is a sound the wheel cannot make. Somewhere at the top of the glass road, at the top of the dome, a lock is still being held by a thin old man who cannot let go — and now you know it the way you know your own name, because the wheel hums it through the stone: *he is still up there. He can hear the wheel. He cannot come down.*",
    "Aster's ticking arrives, fast, all of him this time, every ring of brass humming. \"The wheel is wound in your name, assistant. The sky will keep. *He* will not keep. Not forever. Not alone.\""
  ],
  choices: [
    { text: "Climb the glass road. Bring him down.", to: "climb", effects: { traits: { brave: 1 } }, hint: "Brave" },
    { text: "Stay by the wheel. It's wound; the sky is safe; it's enough.", to: "ending-b", effects: { flags: ["stayed"] } }
  ]
},

/* ───────────────────────── CHAPTER 10 · THE GLASS ROAD ───────────────────────── */

"climb": {
  chapter: 10, chapterTitle: "The Glass Road", title: "Up the Telescope",
  mood: "wonder",
  text: [
    "The glass road begins where the great telescope points its eye, and it does not begin anywhere you could explain to a physicist, which is fine, because you are done explaining things to yourself tonight.",
    "You put your hand into the open air of the eyepiece's great sister-lens — the *object* glass, the eye that drinks — and the air takes your hand like water, and you climb through, into the tube of the Aurora Eye, and the tube is a road.",
    "It is cold and enormous and softly lit from nowhere, this road, and it climbs the way a dream climbs: steeply, endlessly, but *carrying* you, the way the wheel carried you, as if the mountain's whole machinery had one more gear left and the gear is called *consent*. All around the inside of the tube, faint as breath on glass, drift pictures — every picture this telescope has ever seen. Centuries of nights. A comet like a wound ribbon. Saturn leaning in its rings like a cat on a chair. A young woman in a shawl, in a painting you recognize from the hall, looking up, looking *up* — the painters were all told, you remember, *make them look up.*",
    "The cat climbs with you, weightless, her lamp-eyes the only fixed point. And far ahead, growing as you rise, is a light: not starlight, not lamplight — *work*-light. The light of a person doing a job alone at the top of the night.",
    "Halfway up, you pass a small dark shape falling gently the other way, unburning, unhurried, and you know it for what it is — a star's last light, going out to sea, kept company by nothing — and you do not weep, which you will later count as the second bravest thing you did all night. You are done watching lights go out without an escort. You put your shoulder into the climb.",
    "And then the tube ends, and the sky opens, and you step out of the eyepiece of the world into the lamp-room the size of forever — and there he is."
  ],
  choices: [
    { text: "Go to him.", to: "marlow" }
  ]
},

"marlow": {
  chapter: 10, chapterTitle: "The Glass Road", title: "The Keeper at the Lock",
  mood: "wonder",
  text: [
    "He is smaller than the dome made him look, and younger — up here his white hair is dark again and his coat is not worn, because up here he is made of the same thing as his job — and he stands with both arms raised, holding the flame of a single lamp high, feeding it from himself, and the lamp he holds is *the sky of the valley*. You know it the way you know a face in a crowd.",
    "\"Assistant,\" says Dr. Edmund Marlow, without turning around, and his voice is the letter, thin and fast and warm, with forty years of night in it. \"You wound the wheel. I heard it. I heard my own sky come back on, and I am not permitted to let go to look, so you will have to tell me: was it loud?\"",
    "\"It hummed,\" you say. Your voice works, which surprises you. \"Like a mountain deciding.\"",
    "\"Good,\" he says. \"That's the correct sound. I wound it forty years and it always hummed like that and I never once got tired of it. Assistant, I cannot turn my head. The lock does not care for visitors; it is holding *me* as much as I am holding it. So I will ask my questions to the air, and the air can pass them on.\"",
    "You stand where he can half-see you, at the edge of his raised arms, close enough to touch the light he is feeding — it is warm like the handles of the wheel, *hand*-warm — and the lamp-room of the sky holds its endless shelves of little flames around you both, and far off, in the aisles of nothing, the empty spaces lean and wait with their one question.",
    "\"Do you understand,\" he asks, quietly, \"what the wheel was for? Not what it does — what it is *for*? Because I understood it tonight, at the end, and it took me forty years and a letter and a school essay about a grandmother's names, and I will not insult you by pretending you do not also understand it.\"",
    "You look at the lamp in his hands. The sky of the valley. Every star your grandmother named wrong and beautifully. All of it burning on one old man's arms, in a room of forgetting, at the top of the night.",
    "\"You could go home now,\" he says, into the silence. \"The wheel is wound in your name. The sky will keep for years. Most people, assistant, would go home. Most people *should*.\""
  ],
  choices: [
    { text: "\"Move over. Show me how to hold it.\"", to: "ending-a", effects: { flags: ["tookLock"], traits: { brave: 1 } }, hint: "Brave" },
    { text: "Take out the music box. Wind it for him.", to: "ending-c", if: { item: "musicbox" }, effects: { flags: ["gaveSong"] }, hint: "The song is also a key" },
    { text: "Take his arms and pull. \"No one keeps the sky alone. Not even you.\"", to: "ending-b", effects: { flags: ["pulledMarlow"], traits: { kind: 1 } }, hint: "Kind" }
  ]
},

/* ───────────────────────── CHAPTER 10 · THE QUIET ───────────────────────── */

"speak": {
  chapter: 10, chapterTitle: "The Hour of the Quiet", title: "Answering It",
  mood: "green",
  text: [
    "You do not wind the wheel and you do not climb. You do the thing nobody in a hundred and forty years of keepers has done on purpose, the thing the journal underlined, the thing the dead man chalked on his slate in his strong square hand:",
    "*Do not fight it. Do not fear it. Answer it.*",
    "You walk out of the observatory into the deep of the night, past the iron railing, past the cat (who follows), down the bare shoulder of the mountain to the flat stone where the sundial stands in its garden of dry thyme. You sit on the cold stone with your back straight, fifteen years old, heart going like a rabbit, hands open on your knees.",
    "\"I know you're here,\" you say to the Quiet. \"You were in the garden in May. He wrote it down.\"",
    "The stillness arrives the way it did in the eyepiece: at the edge of vision, a leaning-in, polite as a clerk. The stars above you hold very still. Even the wind stops to listen, and the mountain with it, and the town below in its bowl of light goes, for one moment, quiet enough that you can hear — for the first time from the outside — the true size of the silence that forgetting makes.",
    { style: "voice", text: "*Who remembers you?*" },
    "It is not a threat. You understand that now, here, in the open, with the sky still full — it has never once been a threat. It is the loneliest question in the world, asked by the loneliest thing in the world, a thing made of every forgetting, standing in a garden every night for a hundred years next to a man who answered it *alone* — 'You do. Only you. So there is only one of us' — and you understand, with a clarity that hurts, why August Vasek went up. Why Edmund Marlow went up. Why the wheel hums and the letters went unanswered and the sky is a queue of bells.",
    "Because a question like that, asked by a thing like that, to a person like a keeper, all alone, for decades, is not a question any one person can hold.",
    "It is a question for *staff.*",
    "\"Before I answer you,\" you say to the Quiet, \"I have a question too.\" The stillness leans closer, curious, patient, polite. \"Who told you that nobody remembers? Who counted the town for you?\"",
    "And the Quiet is silent, and the silence has the shape of a very old thing realizing, slowly, that it has never once been asked anything back."
  ],
  choices: [
    { text: "Take out what you brought. Give it.", to: "quiet-question" }
  ]
},

"quiet-question": {
  chapter: 10, chapterTitle: "The Hour of the Quiet", title: "The Answer",
  mood: "green",
  text: [
    "The Quiet waits, and the garden of dry thyme waits, and the cat sits at your hip like a small black anchor of the ordinary world.",
    "And then you do the thing. Whatever you brought, you take it out, and you give it — out loud, in your own name, the way the wheel taught you."
  ],
  choices: [
    { text: "Wind the music box on the sundial's cold stone.", to: "ending-c", if: { item: "musicbox" }, effects: { flags: ["gaveSong"] } },
    { text: "Tell it everything. Every bell, every star, every name you know.", to: "ending-c", effects: { flags: ["gaveMemory"] } }
  ]
},

/* ───────────────────────── CHAPTER 10 · THE TOWN ───────────────────────── */

"town": {
  chapter: 10, chapterTitle: "The Town That Looked Up", title: "Running Down",
  mood: "night",
  text: [
    "You leave the wheel unwound and the lock unopened and the mountain behind you, and you run.",
    "You run because you are the only person in the valley who can hear the bells, and you have spent this whole night learning what that loneliness costs — one keeper, forty years, alone; another, up before him, alone; a brass machine and a black cat and a sky going out politely, oldest first, while twelve thousand people watch screens. The wheel needs hands and the lock needs arms and the Quiet needs an answer, and you are fifteen and cannot give it any of those. But there is one thing the whole sky is short of that *you* can carry down a mountain:",
    "Somebody who looks up.",
    "The road is faster going down and fear is a good engine. Twice you fall. The town comes up out of the valley to meet you, street by warm blind street, and at ten past midnight you come through the empty square on legs that have stopped asking questions, and you do the loudest thing a person can do in a town at midnight.",
    "You climb the bell tower of the church — the gate is open; towns always leave one gate open; you will never know why tonight — and you throw your whole fifteen-year-old weight on the bell rope, and you ring.",
    "You ring like the sky pays you. You ring non-stop, wild, out of rhythm, *wrong*, and lights come on in windows all down the square, and voices shout at you to stop, and you do not stop, and when the first people come into the square in their nightclothes to drag the mad person off the bell rope —",
    "You stop. You lean out of the belfry into the cold clean dark over twelve thousand upturned faces, and you shout with everything the mountain put in you:",
    "\"LOOK UP! *Look up! You're staff and nobody told you! Look UP!*\"",
    "And — because they are angry, and angry people look for the thing that woke them, and because human necks have always known how to do this — they look up."
  ],
  choices: [
    { text: "Stay at the rail. Watch what twelve thousand faces do to the sky.", to: "town-quiet" }
  ]
},

"town-quiet": {
  chapter: 10, chapterTitle: "The Town That Looked Up", title: "What Twelve Thousand Faces Do",
  mood: "dawn",
  text: [
    "What twelve thousand faces do to the sky is this:",
    "They give it *eyes*. The mayor, in slippers, furious. The baker with flour still on her. The class that laughed at your essay — some of them, the ones who secretly liked it. Teenagers filming, then not filming, then just looking. Old men who knew the old names and had told nobody for fifty years, telling people, right there in the square, pointing, *that one, the Fisherman's Fire, my father showed me* — the wrong names, the beautiful wrong names, coming back from the dead with the whole town for witnesses.",
    "And above them the sky does not change, and the sky *completely* changes. You cannot say how you know; you know like you knew the key was right: the going-out *stops*. The bell does not ring. Somewhere over the mountain the enormous polite patient thing that is made of forgetting stands in a garden of dry thyme with nothing to collect and nowhere to put it, because the shelf where forgetting puts things is empty, and the whole valley, for the first time in a generation, is *remembering out loud.*",
    "Then it is dawn, and the stars fade the way they always do, politely, into the blue — but the town does not go back inside.",
    "That is the part you will tell for the rest of your life. They do not go back inside. The old men keep pointing. The teenagers argue about constellations. The mayor, in his slippers, climbs the tower steps himself to see who rang the bell, finds a fifteen-year-old asleep on the bell rope, and — before he wakes you, before anyone wakes you — takes out his notebook and writes at the top of a page, in a hand that shakes a little: *ITEM ONE: THE TOWN OF VALE ESTABLISHES, HEREBY, A POST OF SKY WARDEN, SALARIED.*",
    "And behind him in the belfry doorway, thin as a pine, real as morning, smelling of oil and midnight and boiled sweets, comes down the stairs — holding the rail, tired, upright, *smiling* — the Keeper of Vale Observatory, who did not have to hold the sky alone ever again, and who has brought with him down the glass road a letter three weeks old, and a brass key with six points, and one small star-shaped job for a certain assistant, whenever she wakes up."
  ],
  choices: [
    { text: "Wake up. It's morning, and you're staff.", to: "ending-d" }
  ]
},

/* ───────────────────────── THE FOUR ENDINGS ───────────────────────── */

"ending-a": {
  chapter: 10, chapterTitle: "Endings", title: "The New Warden of Vale",
  mood: "gold",
  ending: { key: "a", name: "The New Warden of Vale" },
  text: [
    "\"Move over,\" you say, \"show me how to hold it,\" and you put your hands into the hand-warm light of the lock, beside his.",
    "It is the strangest weight in the world and the simplest: it is the sky, and it weighs exactly as much as a decision, and your arms — your fifteen-year-old arms, which eleven minutes of wheel turned into fire — take the share you ask them for. Dr. Marlow makes a sound that a man should not be able to make after forty years alone at the top of the night. It is halfway between a laugh and a bell.",
    "\"Both hands,\" he says. \"Like the wheel. *In your own name.* Not mine — the lock has had mine; it wants no more of me. Say it. Out loud. It is engineering, assistant, I told you, it is not poetry.\"",
    "\"I'm —\" and you say your own name, first name and last, the way you sign homework, and the lock takes it, and the flame you are holding stops leaning on his arms and stands on yours, and the whole lamp-room of the sky sighs like a library of maps correcting itself.",
    "What happens next takes years, and you live all of them, so this is the short version, and the long version is your life:",
    "You both come down. Keepers can, it turns out, when the lock is shared — a lock without a key is only half a lock, but a lock with two keepers is a *shift*, and shifts are how everything human works. Dr. Marlow teaches you the lamps for three winters and then, one bright morning, with the wheel humming and the sky fat with kept light, he hangs his coat on the hook in the keeper's room for the last time and moves to the town, to a small house near the square, where he is unbearable at parties and writes letters that people answer.",
    "You wind the Year Wheel in your own name, every night, and it hums like a mountain deciding. You keep the journal going in the same thin fast hand, because handwriting is a house's memory. Aster gets his two stopped arms mended and gossips about you to the cat. The cat gets the good chair.",
    { text: "And on fine nights, when the town below is loud and blind and human, you stand at the south window of the dome with the sky keeping perfectly, uneventfully, magnificently above you — and you write letters. *Come quickly,* you write. *Come light-footed, come curious. The stars and I have need of young eyes.* And the letters go out, and mostly they go unanswered, and that is fine, because you are not writing for the town. You are writing for the one. There is always one. That is the whole machine, and it has never once needed magic: only somebody, somewhere, looking up.", if: { flag: "understanding" } },
    { text: "And it is work, real work, the first real work of your life — and some nights the wheel hums and some nights it only groans, and you slowly learn what the last page of the journal would have told you: that the wheel was never geared to arms alone. You keep it wound. You learn it. The sky keeps, and you keep it, and one winter, reading in the keeper's chair with the journal on your knees, you finally understand the machine all the way down — and the night the wheel next hums like a mountain deciding, you are not surprised, because you knew it could.", if: { notFlag: "understanding" } },
    "The stars remember you as a keeper. The town remembers you as the person who was at the observatory that summer. Your grandmother's wrong beautiful names get a small brass plate in the school corridor, which would have made her laugh.",
    "This was Ending A. The sky above the valley tonight: kept, bright, and going about its business. Somebody has to be at the window. You are. You always, always were."
  ]
},

"ending-b": {
  chapter: 10, chapterTitle: "Endings", title: "Morning Without Stars",
  mood: "grey",
  ending: { key: "b", name: "Morning Without Stars" },
  text: [
    "There is more than one way to leave the top of a mountain, and every one of them is a choice, and the night does not hold it against you. That is the first true thing about this ending, and the hardest: nothing here is punished. It is only *cost*.",
    { text: "You take his arms and you pull, because nobody keeps the sky alone, not even him — and he does not fall and you do not fail, not exactly: he simply looks at you with forty years of kindness and says, \"Assistant. If I let go, the sky lets go.\" And he lets you pull him down anyway, because he is tired, because he is only human, because a man who has been holding a lock for a night is allowed to be talked down by somebody who read his journal. You come down the glass road together, arm in arm, and it is the warmest walk of your whole life.", if: { flag: "pulledMarlow" } },
    { text: "The wheel is wound in your name and the lamp-room is safe for years, and that is what you tell yourself at the foot of the Year Wheel, sitting on the stone, unable to lift your arms — *it is enough, it is enough* — while somewhere far above, patient as dust, the lock waits for its keeper with nobody left to bring him down.", if: { flag: "stayed" } },
    { text: "The bag was always going to be packed. You are fifteen and the sky is enormous and nobody — not the letter, not the cat, not a brass machine with a heart of ticking — has the right to hand a person your age a decision the size of forever. You leave the Meridian Room tidy. You wind nothing. You tell Aster he was the best part of the whole strange night, and you mean it, and his ticking says he knows. You walk down the mountain in the dark with your heart going like a rabbit, and you do not look up.", if: { flag: "left" } },
    "Morning comes. Morning always comes; that is its whole trick.",
    "The town wakes to a grey sky with no holes in it, because there are no stars left to have holes. The sun still rises — the sun was never one of the kept lamps; it is too near, too loved, too looked-at to go out — and the day is warm and the buses run and nobody in the valley can say what is missing, because you cannot miss what you stopped looking at years ago.",
    { text: "Only two people in the town stand in the street that morning doing the arithmetic of the sky. One is an old man, new to the town, thin as a pine, who arrived down the glass road arm in arm with you and never went back up; he shields his eyes at the empty blue and says nothing for a long time and then goes home and begins writing letters again — unanswered, every one. The other is you, at your window, at dawn, with a red journal you never finished and a brass music box that skips, keeping the only sky that is left: the one inside. *Who remembers you?* the empty night had asked. *I do,* you say to it, every night, from your window, with the lights off. It is not nothing. It is the one brick a new sky gets built from. But it is brick, and the sky is gone.", if: { flag: "pulledMarlow" } },
    { text: "The observatory stands empty above the valley for years, and Aster's ticking keeps the only time in the house, and the cat is fed by a neighbour from the village who does not ask questions, and the Year Wheel stands in the heart of the mountain at the same exhausted slant, waiting, with a patience you once had and will want again. It is not too late. Nothing in that house is ever too late; it is only later. And on some nights, from your window in the town, when the streetlamps allow it, you still look up — at nothing, at the grey, at the biggest thing you own — and you keep the habit, and the habit keeps you, and that is how every keeper there ever was began.", if: { flag: "stayed" } },
    { text: "And here is the strange mercy at the bottom of this ending, the one you only learn years later, and it is why the night does not hold it against you: the Quiet never wanted the stars. It wanted what you did at the window. It is still standing in the garden of dry thyme, asking its one question of the empty blue. *Who remembers you?* And some night — it will be a night when you are older, and braver in the ordinary ways, and it will probably be raining — you will answer it out loud, at your window, alone, in your own name. And the sky will hear you. It heard you the first time, at the gate, when you were only tired. It always, always hears.", if: { flag: "left" } },
    "This was Ending B. The stars remember you anyway. That is the kind of thing stars are."
  ]
},

"ending-c": {
  chapter: 10, chapterTitle: "Endings", title: "The Song Between Stars",
  mood: "green",
  ending: { key: "c", name: "The Song Between Stars" },
  text: [
    "You give it the song. You take the brass music box out of your pocket — where it has sat warm as a coal since a dead man's bedroom — and you set it on the cold stone of the sundial, in front of the leaning-in stillness, and you wind it, gently, twice.",
    "*Eight notes. The small hop. Eight notes.* The missing tooth skips where it always skips. The song goes on without the note, the way it has gone on for a hundred years — a person humming while they work, while they climb, while they stand on a cold mountain and do a job nobody else can see.",
    "And the Quiet *stops.*",
    "Not the stillness — the stillness is what it is; a stillness cannot stop, the same way a colour cannot stop — but the going stops. The queue of bells holds its next stroke. Over the whole valley, for the first time since the first shepherd pointed at the first light, the forgetting *listens to music.*",
    "Because here is the thing the Quiet never knew, the thing August Vasek heard from up top and could not say, the thing forty years of a letter-writing man could not find words for, the thing that has been skipped over by a missing tooth since before your grandmother's grandmother: the song does not need its note. The song has been carrying the gap in it, openly, lovingly, for a century — and the gap *is* the music. Ask any drummer. Ask anyone who has ever loved a person who is not there anymore. The note that is missing is not missing from the song. It is where the song keeps it.",
    "The Quiet does not have a face, but you will swear for the rest of your life that it *closed its eyes to listen* — and while it listens, you give it the second thing, the thing that is yours to give:",
    { text: "Your memory of tonight. All of it — the gate open like an expected door, the cat's two lamps of eyes, the letter gone through the paper, the six worn points of brass into iron, the wheel humming like a mountain deciding, a thin man reading a school essay eleven times — you pour it out to the stillness in the garden, out loud, in your own voice, and the Quiet takes it the way sand takes rain.", if: { flag: "gaveMemory" } },
    { text: "The whole strange night, told to the stillness like a story at a sleepover: the bell underwater, the clerk-lines crossing the Swan, the town in its bowl of warm light, the keeper at the lock feeding the sky from his own arms. You give it everything that happened to you between the gate and now, in order, out loud, in your own voice — and the Quiet takes it the way sand takes rain.", if: { flag: "gaveSong" } },
    "And when it has listened all the way to the end of the song and the end of the night, the Quiet does the thing that nobody in a hundred and forty years of keepers knew it could do, because nobody ever gave it anything before:",
    "It answers back.",
    { style: "voice", text: "*You do,* it says — in a voice that is not a voice, in the politeness of deep water, and you hear, under the words, the shape of something enormous setting down something it has carried since before this mountain had a road. *You do. Only you. So there is only one of us.* And then — softer, if a silence can be soft — *that was never a warning, keeper. That was a request. Bring more.*" },
    "The sky over the valley changes that night, and it does not come back the way it left. The old stars return — most of them; the wheel is wound in your name by a thin man whose arms are free at last — but between them, in the aisles of nothing where the going-out had shelved its collections, new lights are standing up: strange, slow, *singing* lights, arranged in patterns no constellation book has ever had, and if you stand under them and listen — really listen, the way you learned to on a mountain — you can hear what they are.",
    "They are the gaps. The skipped notes. Everything the Quiet ever took politely, shelved and kept and carried — it has been *keeping* them all along, the way a music box keeps a missing tooth. Not a thief. Never a thief. A shelf where forgetting puts things — and now, at last, an answerer has come to the shelf and opened it, and the lost lights are coming home as something new, and the sky of the valley is learning, note by skipped note, a song with more room in it than the old one had.",
    "This was Ending C. Somewhere below, a thin old man stands in a garden of dry thyme, listening to a music box play by itself on a sundial, crying in the unashamed way of keepers. And the stars remember you — not as a keeper, not as a warden, but as the person who, when the loneliest question in the world asked itself in your garden, took out a broken song and gave it away."
  ]
},

"ending-d": {
  chapter: 10, chapterTitle: "Endings", title: "The Town That Looked Up",
  mood: "dawn",
  ending: { key: "d", name: "The Town That Looked Up" },
  text: [
    "You wake on the bell rope with the morning coming in gold through the belfry louvres, your hands still curve-shaped from rope, and the first thing you see is the notebook page on the mayor's knee — *ITEM ONE: THE TOWN OF VALE ESTABLISHES, HEREBY, A POST OF SKY WARDEN, SALARIED* — and the second thing you see is Dr. Edmund Marlow, real as morning, holding out a boiled sweet in paper.",
    "\"Assistant,\" he says. \"I hear you rang my sky back on.\"",
    "The town below is not the town you ran through at midnight. It is *loud* about the sky now, the way towns get loud about a football match: the school has a telescope club by lunchtime — three telescopes, one of them somebody's grandfather's, dragged out of an attic still wrapped in the newspaper of 1978. The baker paints the old constellations on her front window. The newspaper, which never once opened a keeper's envelope, prints your bell-tower speech in full and gets half the star names wrong, beautifully, and prints corrections for a week, and the corrections sell more papers than the football.",
    "And here is what you learn, in the weeks that follow, about what actually happened at the top of the night — because you only ever get the whole story in pieces, and you are the one who collects them:",
    "When twelve thousand faces looked up, the going-out stopped. Not slowed. *Stopped* — mid-queue, mid-bell. The Quiet stood in a garden of dry thyme with an empty shelf and nothing to put on it, and the thing it did then, the thing nobody could have predicted because nobody had ever fed it before, was that it *leaned in to watch the town watching.*",
    "It liked it. The enormous polite patient forgetting — the loneliest thing in the world — discovered that being surrounded by people who remember is the only thing that has ever answered its question. And when the old men in the square pointed out the Fisherman's Fire with their beautiful wrong names, the Quiet — politely, patiently, with very good manners — began to give some back.",
    "The astronomers will argue for years about the new stars of that summer: the slow ones, the strange ones, the ones that seem to appear *when the telescope club is out on the hill looking* — and only then — and they will publish papers and hold conferences, and the teenagers of the telescope club will notice first, because teenagers always notice first, that the new stars come out on club nights, and they will keep it off the record, because it is theirs.",
    "Dr. Marlow goes back up sometimes, he tells you, now that the lock has a town behind it — *shifts,* he says, that is all a sky ever needed, shifts. And he comes down for the school's end-of-term sky night, and he is unbearable at it, and the children love him.",
    "You keep the job. Sky Warden of Vale, salaried, Item One — the youngest keeper in a hundred and forty years of a line that goes back to the first person who pointed at the sky and wanted it, and the first one in all that time who never once did it alone. You wind the wheel in your own name on the clear nights, and the town winds it with you, in theirs, on the others — the baker takes Tuesdays; the mayor, in slippers, took Fridays and will not say why.",
    "This was Ending D. And on the fine nights, from the dome, you look down at the town that once did not look up — and it is lit like a constellation itself, and it is *looking*, and the sky over the valley is the fattest, brightest, most kept sky in the world. Somebody has to be at the window. Everyone is. That was the answer all along."
  ]
}
};

/* Ending gallery metadata. */
window.STORY_ENDINGS = {
  a: { name: "The New Warden of Vale", blurb: "You took the lock and made the keeping a shift of two. The sky is kept, bright, and going about its business.", hint: "Some endings ask you to stay, to wind, and to understand what you are keeping. Read the journal, climb the glass road, and take his place." },
  b: { name: "Morning Without Stars", blurb: "The wheel stands unwound and the town wakes to a grey morning. It is not a punishment — it is only cost.", hint: "Some endings are chosen by walking away — or by holding on too hard, or by stopping at the foot of the wheel." },
  c: { name: "The Song Between Stars", blurb: "You answered the loneliest question in the world with a broken song, and the sky learned new lights.", hint: "The Quiet only ever asked a question. Carry the music box, and be the one who answers it — in the garden, or at the top of the glass road." },
  d: { name: "The Town That Looked Up", blurb: "You ran down the mountain and rang the bell, and twelve thousand faces became the newest keepers of the sky.", hint: "One voice can wake a town. Sometimes the bravest thing is not climbing — it is running down." }
};
