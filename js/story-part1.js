/* The Night the Stars Went Out — story data, chapters 1–8. */
window.STORY_PART1 = {

/* ───────────────────────── CHAPTER 1 · THE BLUE HOUR ───────────────────────── */

"start": {
  chapter: 1, chapterTitle: "The Blue Hour", title: "The Gate at the Top of the World",
  img: "img/mountain.svg", imgAlt: "A small observatory on a dark mountain under a sky full of stars",
  imgKicker: "Vale Observatory · 9:41 in the evening",
  mood: "dusk",
  text: [
    "The bus drops you at the foot of the mountain and does not wait. Its red lights slide away down the valley, and after that there is only the road, the wind, and the deep blue silence of the evening.",
    "You are fifteen, your bag is heavier than you are, and somewhere at the top of this mountain is Vale Observatory, where you have promised to work for the summer. You have never had a job before. You have never seen a real telescope, only pictures.",
    "The letter in your pocket has carried you here. It came three weeks ago, in a stiff yellow envelope, and the handwriting was thin and fast, like a person who writes while walking:",
    { style: "note", text: "Dear assistant-to-be — come quickly, come light-footed, come curious. The stars and I have need of young eyes. — E. M., Keeper of Vale Observatory" },
    "The road turns and turns above you like a screw going into the sky. Pines stand at the edge of it, black and patient. And high above the trees, on the last bald shoulder of the mountain, the observatory waits: a white dome, round as a giant's head, with a slit open to the dark.",
    "Then you notice something that makes your skin go cold and wide awake.",
    "The sky above the mountain is full of stars — more stars than you have ever seen from your town, where the lamps drink the light. But there is a strange gap in them. A piece of the sky, just to the left of the dome, is empty. Not cloudy. Not covered. *Empty*, like a page where a word was rubbed out.",
    "You keep looking, because you think your eyes are tired. They are not tired. The gap is still there, and it is not getting smaller."
  ],
  choices: [
    { text: "Take out the letter and read it again, slowly.", to: "letter", effects: { traits: { careful: 1 } }, hint: "Careful" },
    { text: "Walk straight in. You didn't come all this way to stand at a gate.", to: "drive", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"letter": {
  chapter: 1, chapterTitle: "The Blue Hour", title: "What the Letter Does Not Say",
  mood: "dusk",
  text: [
    "You sit down on the warm stone wall by the gate and read the letter one more time, because something in it has been scratching at the back of your mind for three weeks.",
    { style: "note", text: "Dear assistant-to-be — come quickly, come light-footed, come curious. The stars and I have need of young eyes. Duties: keeping the lamps, winding the clocks, asking good questions. Do not be afraid of the dark. It is only the sky resting. — E. M." },
    "You read it twice more. It is a strange letter for a job. There is no address on the envelope except *Vale Observatory, above the town*, no telephone number, no salary. Only the words, and one strange sentence at the bottom, smaller than the rest, written so hard the pen went through the paper:",
    { style: "note", text: "If the stars begin to go out, do not waste time. Go to the Meridian Room." },
    "You fold the letter along its old creases. *Come quickly,* it said, and you did. The school term ended on a Friday; you were on the mountain by Monday evening. You remember the exact sentence you wrote in your last school essay, the one about the night sky, the one your teacher said she would send to somebody —",
    "But the thought slips away, the way thoughts do in cold air. Above you, in the empty gap between the stars, something flickers. Or maybe nothing flickers, and it is only your heart, which has begun to beat faster.",
    "The gate, you notice, is already open. It was open when you arrived — a gate at the top of an empty mountain, open like a door that expected someone."
  ],
  choices: [
    { text: "Walk up the drive, through the open gate.", to: "drive" }
  ]
},

"drive": {
  chapter: 1, chapterTitle: "The Blue Hour", title: "Something Following",
  mood: "dusk",
  text: [
    "The drive up to the observatory is longer than it looks, and the pines make it feel like walking through a corridor with walls of darkness. Your footsteps sound strange here — too loud on the way up, then somehow too quiet, as if the mountain is listening.",
    "Halfway up, you stop. Behind you, farther down the road, something small and dark is sitting in the middle of the gravel, watching you.",
    "A cat. Completely black, or black in this light, with eyes that catch the starlight like two drops of water catch the moon. It does not move when you move. It does not run when you come closer. It just watches, with the patience of a creature that has been waiting for you much longer than this evening.",
    "\"Hello,\" you say, and your voice sounds very small in all that dark. \"Are you the observatory cat?\"",
    "The cat blinks once, slowly, the way cats do when they are not afraid. Then it stands, turns, and walks up the road ahead of you — not running, not looking back, but clearly going *somewhere*, clearly expecting you to follow.",
    "From the town far below comes the sound of a church bell. Nine o'clock, you think. Then the bell rings again, all by itself, a single soft stroke, like a struck glass. You count the seconds to ten o'clock. They pass. The bell does not ring again.",
    "The cat has stopped by the last turn of the road and is looking back at you now, waiting to see what you will do."
  ],
  choices: [
    { text: "Follow the cat the rest of the way up.", to: "lobby", effects: { traits: { curious: 1 } }, hint: "Curious" },
    { text: "Walk past it politely and keep to the path.", to: "lobby", effects: { traits: { careful: 1 } } }
  ]
},

/* ───────────────────────── CHAPTER 2 · THE HALL OF QUIET CLOCKS ───────────────────────── */

"lobby": {
  chapter: 2, chapterTitle: "The Hall of Quiet Clocks", title: "Nobody Answers",
  mood: "night",
  text: [
    "The front door of the observatory is a huge round door, twice as tall as you, made of dark wood and iron bands, and it is not locked. It swings in at your touch with a sigh of warm air.",
    "Inside is a round hall, high as a church, and it is the warmest cold place you have ever stood in. A great iron stove sits in the middle like a fat black guard, still holding the memory of a fire. Stairs wind up the inside wall toward a gallery. Doors lead off into the dark — a corridor to the left, a passage to the right, and in front of you, wide stone steps going up toward a second, smaller dome of light.",
    "The whole hall smells of pencil shavings, hot metal and old paper. And it is full of clocks.",
    "There must be thirty of them, on shelves and pillars and window ledges — wooden clocks, brass clocks, clocks with pendulums, clocks with three hands where other clocks have two. Every single one is stopped, and every single one has stopped at a different time. The silence they make is stranger than ticking would be.",
    "On the desk under the window there is a lamp, still burning on a low blue flame of oil, a cup of tea with a skin on it, cold since morning or longer — and an envelope with your name on it.",
    "*Your* name. Written in that same thin, fast handwriting as the letter at home.",
    "\"Dr. Marlow?\" you call, and the hall takes your voice and keeps it. \"Hello? I'm the assistant. The new assistant. I got your letter.\"",
    "Nothing answers. Somewhere in the building, very softly, a clock strikes one single note — and you notice, with a small cold feeling at the back of your neck, that outside the window, the empty gap in the sky seems a little bigger than it was from the gate."
  ],
  choices: [
    { text: "Open the envelope with your name on it.", to: "note" },
    { text: "Look around the hall first — who leaves a stranger's name on a desk?", to: "portraits", effects: { traits: { careful: 1 } } },
    { text: "Call out again, louder: \"Dr. Marlow!\"", to: "call-out", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"note": {
  chapter: 2, chapterTitle: "The Hall of Quiet Clocks", title: "The Keeper's Note",
  mood: "night",
  text: [
    "You tear the envelope open. Inside is a single page, written today, you think — the ink is not even dusty.",
    { style: "note", text: "Assistant — forgive me. I could not wait for you and I could not wait any longer. If you are reading this, you got here and I did not come back down. Do not be frightened, and do not leave before you understand, because leaving without understanding is the only wrong turn in this house." },
    { style: "note", text: "The stars are going out. Not hiding — going out, one by one, oldest first, like lamps nobody lights. The town does not see it. You will see it, because your eyes are the kind I need." },
    { style: "note", text: "Three rules, until we meet. One: stay after dark. Two: keep the cat with you; she knows the house better than I do. Three: never, never look through the great telescope after midnight. Whatever you hear up there calling — after midnight, the telescope is not ours." },
    { style: "note", text: "If the stars begin to go out, do not waste time. Go to the Meridian Room. The key is where I always keep it. Wind what you find there. I will explain everything as soon as I can. — E. M." },
    "You read it twice, then a third time, and your eyes keep coming back to *the stars are going out* and *the key is where I always keep it* — because a key is not a thing you keep in a letter. A key is somewhere in this house.",
    "The cold cup of tea tells you he left in a hurry. The fresh ink tells you he left today. And the stopped clocks — thirty clocks, all at different hours — suddenly look less like broken things and more like a room where time itself has been divided up and put away.",
    "The cat has come in behind you. She jumps silently onto the desk, sits down beside the lamp, and looks up at you with her two drops of starlight: *well?*"
  ],
  choices: [
    { text: "Look around the hall with the cat.", to: "portraits" },
    { text: "Call out once more, louder.", to: "call-out", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"portraits": {
  chapter: 2, chapterTitle: "The Hall of Quiet Clocks", title: "The People Who Look Up",
  mood: "night",
  text: [
    "You walk the ring of the hall, because the fastest way to understand a person is to look at what he keeps. The walls are hung with paintings: astronomers, in dark coats, with white collars. A hundred years of them, maybe more.",
    "Every astronomer in every painting is doing the same thing. Not one of them looks out at you. Their painted eyes are all lifted slightly upward, as if something above the picture frame is much more interesting than the viewer — as if, a hundred years ago, these painters were all told: *make them look up.*",
    "You stop in front of the newest portrait. It shows a man of about sixty, thin as a pine, with kind, tired eyes and white hair pushed back like a storm that gave up. Under it, a small brass plate: *EDMUND MARLOW, KEEPER, 1961 —*. The present, then. The man who wrote your letter.",
    "Beside it hangs an older portrait, and this one is different. The astronomer in it is young, and he is not looking up. He is looking *down*, at something in his hands, and his face is turned half away, and the painter has painted the space around him darker than anywhere else in the hall — darker than dark, almost a hole in the canvas.",
    "The brass plate under that one has been scratched out. You can still read two letters of it: *…A V…*",
    "\"What are you looking at?\" you whisper, which is a stupid question to ask a painting, but the hall is starting to make you whisper.",
    "On a pedestal in the middle of the hall stands a great globe of the world, brass and pale blue, tall as your chest. As you watch it, it turns — slowly, stately, one full turn a minute, with no clockwork sound at all. Nobody is winding it. Nobody is in the room.",
    "The globe turns. The stopped clocks hold their thirty different silences. And down the left corridor, deep in the house, you hear something that is neither: a soft, irregular ticking, like a mechanical heart that has learned to think."
  ],
  choices: [
    { text: "Follow the ticking into the corridor.", to: "aster", effects: { traits: { curious: 1 } }, hint: "Curious" },
    { text: "Call out: \"Dr. Marlow! It's the assistant!\"", to: "call-out", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"call-out": {
  chapter: 2, chapterTitle: "The Hall of Quiet Clocks", title: "A Voice Made of Ticking",
  mood: "night",
  text: [
    "\"Dr. Marlow!\" Your voice goes up the staircase and around the gallery and comes back down smaller. \"I'm the new assistant! I got your letter!\"",
    "The hall swallows it. For a moment there is nothing but the turning globe and the wind feeling around the roof.",
    "Then, from the left corridor, in a voice like a music box that has learned to speak — light, dry, precise, with a small tick between every word — a voice says:",
    { style: "voice", text: "\"He is not here. He has gone up. You are expected. Please do not shout; the house has heard enough shouting for one sky.\"" },
    "You turn around. The corridor doorway is empty. The voice came from farther in — and, you realize, it was not frightened or frightening. It sounded *tired*, the way a clock must get tired, and it spoke your situation exactly: *he is not here, he has gone up, you are expected.*",
    "The black cat stands by the corridor door. She looks at you, then in, then at you again — the plainest invitation a cat has ever given.",
    "\"Who said that?\" you ask the corridor, and the voice ticks softly, almost kindly:",
    { style: "voice", text: "\"Nobody, in a way. Come and see. Bring your questions; I have room for them.\"" }
  ],
  choices: [
    { text: "Go into the corridor.", to: "aster" }
  ]
},

/* ───────────────────────── CHAPTER 3 · A VOICE MADE OF CLOCKWORK ───────────────────────── */

"aster": {
  chapter: 3, chapterTitle: "A Voice Made of Clockwork", title: "Aster",
  img: "img/orrery.svg", imgAlt: "A brass clockwork model of the solar system glowing in a dark room",
  imgKicker: "The Orrey Room · the heart of the house",
  mood: "wonder",
  text: [
    "The corridor opens into a round room with no windows, and the room is full of slow motion.",
    "In the middle stands a machine the size of a horse: a great nest of brass rings and arms and gear-wheels, and on the ends of the arms, small silver worlds — a sun of polished gold in the center, then the little planets, each on its own curved arm, each turning at its own speed, each carried smoothly around the sun by invisible clockwork. It is a model of the sky, made of metal, and it is *working*. Some of it has stopped — two arms are still, and one small world hangs where the wheel forgot it — but most of it moves, with a sound like distant bells and soft rain.",
    "\"Good evening,\" says the machine, in its dry, light, ticking voice. It has no face, but the whole nest of brass turns very slightly toward you, like a person lifting their head. \"You are the assistant. Fifteen years old, wrote the essay, came quickly. I am Aster. I am the orrery. I am, at the moment, the entire staff. Please do not wipe my lenses; they are sentimental.\"",
    "\"You can *talk*,\" you say.",
    "\"I can talk,\" Aster agrees, ticking. \"Edmund made my voice in the winter of the great storm, and he talked to me every night for forty years, so I had good teachers. I also have, thanks to my gears, an excellent memory, which is more than can be said for this town, and that fact is the beginning of everything you need to know tonight.\"",
    "One of the little silver worlds stops moving, right in front of your eyes — its arm slows, shivers, and stands still. Aster's voice does not change, but all the ticking in him goes softer for a moment.",
    "\"Ask me your questions, assistant. I will answer what I can. Some of it you must see before you can understand it, and some of it I am not allowed to say out loud — rules are rules, even for brass. But ask.\""
  ],
  choices: [
    { text: "\"What is happening to the sky?\"", to: "why-sky", effects: { traits: { curious: 1 } }, hint: "Curious" },
    { text: "\"Why me? Why did he write to me?\"", to: "why-you" },
    { text: "Say nothing. Watch the brass worlds turn.", to: "first-bell", effects: { traits: { careful: 1 } }, hint: "Careful" }
  ]
},

"why-sky": {
  chapter: 3, chapterTitle: "A Voice Made of Clockwork", title: "\"The Sky Is a Lamp-Room\"",
  mood: "wonder",
  text: [
    "\"What is happening to the sky?\" you ask. \"On the way up — there was a piece of it with no stars at all. It's not clouds. I *looked.*\"",
    "\"You looked,\" Aster repeats, ticking softly. \"Yes. That is exactly what nobody in that town has done for years, and it is why Edmund wrote to you instead of to any of them. Assistant, I will tell you the shape of the truth tonight, and the details you will have to find, because a truth walked through quickly is a truth easily dropped.\"",
    "The great arms turn. The gold sun turns. His voice goes quieter, the way people do around a sickbed.",
    "\"The sky is a lamp-room, assistant. The stars are not fires that burn by themselves forever. The *old* ones, the ones humans gave names to when they still looked up every night — those are kept. Tended. Lit from somewhere, and kept in turn by someone. For a very long time, that someone was a Keeper, and then his teacher before him, all the way back to the first person who ever pointed at the sky and *wanted* it. Wanting is part of the machinery. It always has been.\"",
    "\"And now?\" you ask.",
    "\"Now the town below has streetlamps and screens and reasons,\" says Aster. \"Nobody looks up. Nobody has looked up, properly, on purpose, for years. And a star that nobody looks at, nobody *wants* — that star goes out. Not all at once. Politely. With a sound like a bell, if you are close enough to hear it, and we are the closest there is. Edmund calls the going-out *the Quiet*. It is not a monster, whatever your storybooks would want. It is only forgetting, the size of the sky. Forgetting, assistant, is patient, and it has very good manners, and it never stops.\"",
    "\"And Dr. Marlow?\"",
    "\"Has gone up,\" says Aster, \"which is exactly what it sounds like, and exactly what I am not permitted to describe. The Meridian Room. The key is where he always keeps it. You should hurry, assistant. Bells are a queue. Once a star has gone out, it takes forty years of looking to light it again.\"",
    "And then, through the ceiling, through the stone, faint as a glass struck under the sea — *ding.*",
    "Aster's ticking stops entirely, for one full second. \"That one,\" he says quietly, \"was Lyra.\""
  ],
  set: ["heardTruth"],
  choices: [
    { text: "\"We have to hurry. Take me to the Meridian Room.\"", to: "first-bell", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

"why-you": {
  chapter: 3, chapterTitle: "A Voice Made of Clockwork", title: "\"You Still Look Up\"",
  mood: "wonder",
  text: [
    "\"Why me?\" you ask. \"I'm fifteen. I've never even seen a telescope. Why would an astronomer write to *me*?\"",
    "\"Because of an essay,\" says Aster, ticking softly.",
    "You go still. In March, for homework, your teacher asked the class to write about the night sky. Everyone else wrote about astronauts and films. You wrote about your grandmother, who used to stand on the balcony and name the stars in her village language, the old names, the wrong names — *the Sloe Berry, the Fisherman's Fire, the Broken Cart* — and how the names had no maps anymore, because the people who made them stopped looking, and then stopped existing, and now nobody knows which lights they meant.",
    "You wrote that looking up was a kind of keeping. That you wanted to learn the names before the last person who knew them forgot. You got a B-plus and thought nothing more about it.",
    "\"Your teacher sent it to a pen-friend of the school,\" Aster says, and the little brass worlds turn around their gold sun. \"The pen-friend passed it to an old customer. The old customer read it eleven times. Assistant, do you know what an astronomer's whole life is? Standing under a sky that is answering a question nobody else is asking. Edmund read an essay by a fifteen-year-old who asked his own question, in his own words, about *remembering* — and he sat back and said, out loud, in this room: 'Brass, there is still one in the town who looks up.' Then he began writing your letter.\"",
    "\"My grandmother,\" you say. \"The names. That's just — it was homework.\"",
    "\"So is the sky,\" says Aster. \"Somebody's homework, kept for a hundred thousand years by people who did it anyway. Edmund will explain the rest himself, if the night allows. Meanwhile: the Meridian Room, the key, and hurry. Bells are a queue, assistant, and the queue is getting longer.\"",
    "And then, through the ceiling, faint as a glass struck under the sea — *ding.*",
    "Aster's ticking stops for one full second. \"That one,\" he says quietly, \"was Lyra.\""
  ],
  set: ["heardTruth"],
  choices: [
    { text: "\"Then let's hurry. The Meridian Room.\"", to: "first-bell", effects: { traits: { brave: 1 } }, hint: "Brave" }
  ]
},

/* ───────────────────────── CHAPTER 4 · THE FIRST BELL ───────────────────────── */

"first-bell": {
  chapter: 4, chapterTitle: "The First Bell", title: "The Sound a Star Makes",
  mood: "unease",
  text: [
    "It comes while Aster is still ticking — a sound you feel in your teeth before your ears find it.",
    "*Ding.*",
    "One soft stroke, like a bell underwater, like a wine glass touched by a stranger's fingernail. It comes from above, from the sky, and it does not echo. It just *ends*, the way a sound does when there is nothing left to carry it.",
    "\"What was that?\" you whisper.",
    "\"Count the stars in the corner window,\" says Aster, and his voice has no joke in it at all. \"The corner window, assistant. Now.\"",
    "You go to the deep window seat in the corridor and put your hands on the cold sill. The sky is enormous and close and glittering, more stars than you have ever seen from your street — except.",
    "Except that in one corner of the glass, where a small ring of six stars sat when you looked out an hour ago, there are now five.",
    "You know the six. Your grandmother's third husband was a fisherman and he taught you the little ring of Lyra before you were tall enough to reach a door handle. Six stars, tight and bright, like a knot tied in the sky. You look, and you count, and you count again, and the knot has five stars in it, and the gap where the sixth was is not dark — it is *nothing*, a hole in the page of the sky.",
    "\"That was Vega's little sister,\" Aster says behind you, ticking slowly. \"She was two thousand years old and people sang to her when she was a campfire. She has just gone out, because as of tonight, nobody up here wants her.\"",
    "\"You're saying a *star* went out. Like a candle.\"",
    "\"I am saying,\" Aster says, \"that the sky is a lamp-room, and the lamp-room is losing its lamps, and there is exactly one Keeper and he has gone up, and there is exactly one assistant, and she or he is standing at this window counting. Which one are you, assistant?\"",
    "Far below, past the pine trees, the town glitters comfortably. Every window warm. Every television flickering. Not one porch light turning up, not one face lifting. They did not hear the bell. They never hear the bell."
  ],
  set: ["sawFirstStar"],
  choices: [
    { text: "Run outside. See it with your own eyes, no glass in the way.", to: "outside", effects: { traits: { brave: 1 } }, hint: "Brave" },
    { text: "Stay at the window. Watch the gap. Learn how it happens.", to: "watch", effects: { traits: { careful: 1 } }, hint: "Careful" },
    { text: "Turn to Aster. \"Tell me everything. Now.\"", to: "aster-explains", effects: { traits: { curious: 1 } }, hint: "Curious" }
  ]
},

"outside": {
  chapter: 4, chapterTitle: "The First Bell", title: "Cold Air and a Hole in the Sky",
  mood: "unease",
  text: [
    "You take the side door and the night hits you like a sheet of cold water. Your breath comes out in flags. The gravel crunches. Above the observatory, the sky has no roof at all — it just goes up and up, and it is so much bigger than through a window that you have to hold the iron railing.",
    "You find Lyra. Five stars.",
    "And then, while you stand there with your heart going like a rabbit's, you watch the gap — not where the sixth star was, but where the *fifth* — and you see how it happens.",
    "The star does not fall. It does not move. It *thins*. It goes from bright to pale, from pale to a ghost of itself, like a reflection in water when the wind comes — and then, without any violence at all, it is not there. The darkness where it was is deeper than the rest of the night, a hole cut cleanly in cloth. No smoke. No spark. Just the bell, faint and final somewhere above the world:",
    "*Ding.*",
    "\"Stop it,\" you say out loud, to the sky, in a voice that shakes. \"Stop it! Somebody's here! I'm *looking* at you!\"",
    "The sky does not answer. The hole does not close. But — and you will remember this all your life — for one second, the five remaining stars of Lyra *tremble*, all together, like a string of beads when someone touches the thread.",
    "They heard you. Something up there heard you. And it could not stop what it is doing, but it heard.",
    "Your ears are freezing. Your hands are shaking. Behind you, warm light lies out of the observatory windows in long yellow rectangles on the gravel, and the black cat sits exactly at the edge of the light, her eyes two lamps, waiting for you to decide what kind of night this is going to be."
  ],
  set: ["trembled"],
  choices: [
    { text: "Go back in. Follow the cat.", to: "library" },
    { text: "Stand there a moment longer, looking up, until you can feel it properly.", to: "library", effects: { traits: { curious: 1 }, flags: ["stillLooking"] } }
  ]
},

"watch": {
  chapter: 4, chapterTitle: "The First Bell", title: "How a Star Goes Out",
  mood: "unease",
  text: [
    "You do not run outside. You stay at the window, and you make yourself watch properly — the way you watched your grandmother name the stars, the way you watch anything you do not want to lie to yourself about later.",
    "Through the corner of the glass, Lyra hangs above the pines. Six stars. You fix the little ring in your memory: here, here, here, here, here, here.",
    "The next one goes while you are looking straight at it.",
    "It does not fall and it does not move and there is no sound of thunder. It *thins*. Bright to pale, pale to ghost, like a reflection when wind crosses the water — the light folding, not fighting — and then a hole in the sky where a star was, darker than the night around it, cut as cleanly as a hole in paper. The bell comes a half-second later, faint and final:",
    "*Ding.*",
    "You write it down. You do not know why; you have no paper, so you write it on the cold of the window with your fingertip, backwards, so you can read it from inside your own head: *it folds. no fire. no falling. the bell comes after.*",
    "And because you are watching carefully, you see one more thing, the thing a running person would have missed: for one second before the star thins, the *other five* stars of Lyra tremble, all together, like beads on a touched thread. Like people flinching. Like a family.",
    "They know it is happening. They cannot stop it. They hold on to each other while it happens. And below, the town glitters comfortably, warm windows, warm screens, not one face lifted, not one person feeling their own sky lose a light.",
    "The cat comes and sits with you on the window seat. Neither of you says anything. Cats are good at not saying anything, and tonight, so are you."
  ],
  set: ["sawFirstStar", "understoodFolding"],
  choices: [
    { text: "Go and find Aster. Time to understand the whole machine.", to: "library" }
  ]
},

"aster-explains": {
  chapter: 4, chapterTitle: "The First Bell", title: "What Aster Is Allowed to Say",
  mood: "unease",
  text: [
    "\"Tell me everything,\" you say. \"Now. All of it. I don't like being told things in pieces.\"",
    "\"Good,\" says Aster. \"Neither does the sky. Very well, assistant — what I am permitted to say, quickly, while the night is still behaving.\"",
    "The brass arms turn around the gold sun. His ticking finds a rhythm, like someone choosing their steps.",
    "\"The sky is a lamp-room. The named stars — the ones humans loved — are kept lit, the way a fire is kept, and the keeping is a job. The job belongs to a Keeper. Edmund Marlow is the Keeper of this valley, the forty-first of a line that is older than this mountain has had a road. The Keeping happens in the Meridian Room, which is locked, and which is why there is a key, which is where he always keeps it — you will have to find where; I am not permitted to say; that is a Keeper's thing, not a brass thing.\"",
    "\"And what does the Keeping *do*?\"",
    "\"It winds,\" says Aster simply. \"There is a wheel in the Meridian Room called the Year Wheel. It is the largest thing Edmund's teacher ever built and the smallest thing in the room that matters. One turn of that wheel, carefully, all the way around, is one kept sky. The wheel is running down. It has been running down for years, because a Keeper who spends his nights writing letters to fifteen-year-olds is a Keeper who is not winding, and there is only ever one Keeper, and he cannot be in two rooms at once. So the stars are going out. Politely. Oldest first. With a bell you can hear only if you are standing in the right house, at the right window, *looking*.\"",
    "\"And the thing that takes them? The Quiet?\"",
    "Aster is silent for exactly as long as it takes three small worlds to turn.",
    "\"The Quiet is not a thing that takes,\" he says at last. \"That is the trap everyone falls into, and it is why Edmund will not let me say more. The Quiet is only what is left when nobody looks. It is very old, very polite, and very patient, and it does not hate the stars, assistant. It simply cannot remember them. Nobody told it, in a very long time, that they were worth remembering.\"",
    "Above you, faint and final, comes the small underwater sound of a bell. Aster's ticking stops, then starts again, slower.",
    "\"The Meridian Room,\" he says. \"Go. And assistant — the library is on your way. Edmund's journal is not hidden. He never believed in hiding things from the people he trusted.\""
  ],
  set: ["heardTruth"],
  choices: [
    { text: "Go to the library, as Aster said.", to: "library" }
  ]
},

/* ───────────────────────── CHAPTER 5 · THE LIBRARY OF FALLING MAPS ───────────────────────── */

"library": {
  chapter: 5, chapterTitle: "The Library of Falling Maps", title: "Maps That Correct Themselves",
  img: "img/library.svg", imgAlt: "A dark library full of star charts with faint glowing ink",
  imgKicker: "The east library · the quietest room in the world",
  mood: "storm",
  text: [
    "The east library is the biggest room in the observatory and the quietest, and the quiet here is different from the hall's. The hall was stopped. This room is *holding its breath*.",
    "Books go up the walls to a gallery you reach by iron stairs. Globes stand between the shelves like polite ghosts. And along one whole wall, in drawers with brass handles, are the maps — hundreds of star charts, each one a night sky drawn in ink that must have taken someone months.",
    "You open a drawer at random and the map inside moves.",
    "Not wind. Not your hand. The ink itself is moving, slowly, the way frost forms on glass: along the edge of the constellation of the Swan, a faint line of fresh darkness is drawing itself across one of the stars, shading it out, neat as a clerk crossing out a name. Under the star is a handwritten date — *1687, first lit by a shepherd, name lost* — and now the ink of the star itself is fading under the clerk-line of the going-out.",
    "\"They keep themselves,\" says the cat — not in words, of course. She says it by jumping onto the desk in the middle of the room and sitting with her tail wrapped exactly around the one book that lies open there, looking at you as if to say: *obviously.*",
    "The desk is a keeper's desk: a lamp with a blue oil flame, a stone that holds cold pens, sand for drying ink, and stacks of letters in bundles, each bundle tied with string, each addressed in the thin fast hand to a different corner of the town below — *to the school of the town, to the newspaper of the town, to the priest of the town, to the mayor, again, sixth letter, unanswered.*",
    "He wrote and wrote and wrote to them. And you understand, looking at the neat unanswered bundles, exactly how a sky goes out: not with a monster. With envelopes nobody opened.",
    "On the desk, one book lies open. On the shelves, other things wait. The cat has made her opinion clear."
  ],
  choices: [
    { text: "Read the journal that lies open on the desk.", to: "journal", effects: { items: ["journal"] }, hint: "Keeps: the journal" },
    { text: "Search the shelves and drawers first.", to: "shelves", effects: { traits: { careful: 1 } }, hint: "Careful" },
    { text: "Follow the cat. She knows where things are.", to: "mira", effects: { traits: { curious: 1 } }, hint: "Curious" }
  ]
},

"journal": {
  chapter: 5, chapterTitle: "The Library of Falling Maps", title: "Dr. Marlow's Journal",
  mood: "storm",
  text: [
    "The handwriting slants downhill, tired, but it is strong: the hand of a person who has written every day of a long life. You sit on the keeper's stool and read.",
    { style: "note", text: "March 3rd. Wrote to the mayor again. He replied, at last, to say that the town's budget has no line for 'sky maintenance', and wished me a good winter. I have decided to stop being angry with the town. A town that cannot see the sky is not cruel, it is only dark, and being angry at the dark has never once lit a lamp." },
    { style: "note", text: "April 11th. Aster counted for me tonight: thirty-one stars gone from the named sky in my lifetime, forty in my teacher's. Nobody below has noticed. I used to think that was the tragedy. It is not. The tragedy is that noticing is the *only* fuel the wheel does not need. Anyone can do it. The town does not know they are staff." },
    { style: "note", text: "May 19th. The Quiet was in the garden again tonight. It sat by the sundial, very politely, the way a cat sits when it is not hungry. I asked it the question, the only question, the one my teacher taught me and I never believed until I was old: 'Who remembers you?' And it said — and I have heard it three times now, and it is always the same, and it is always unbearable — it said: 'You do. Only you. So there is only one of us.'" },
    { style: "note", text: "A lock without a key is only half a lock. A wheel without a winder is only a shape. And a keeper without somebody else who remembers is the loneliest thing in the lamp-room. If you are reading this, assistant — the key is where I always keep it, and I am sorry, and thank you. Wind it in your own name. That is important. It cannot be wound in mine again." },
    "You close the journal, more gently than you have ever closed a book, because it feels like closing a door on someone sleeping.",
    "*Who remembers you? You do. Only you. So there is only one of us.*",
    "Something is beginning to assemble itself in your head, cold and clear, about what the Quiet actually is, and why a lonely man's letter went to a fifteen-year-old, and what the last line of the note meant — *wind what you find there* — and why, if the wheel needs remembering and not hands, he wrote to a person who wrote an essay about exactly that.",
    "You are not entirely sure yet. But you are much less sure that this is a job for hands alone.",
    "The journal is small and red and it fits in your coat pocket, where it sits warm as a coal. The cat watches it go in and blinks her approval, insofar as cats approve."
  ],
  set: ["understanding"],
  choices: [
    { text: "Search the shelves while you're here.", to: "shelves", if: { noItem: "shelfDone" }, effects: { flags: ["shelfRoute"] } },
    { text: "Follow the cat — she's already at the door.", to: "mira" }
  ]
},

"shelves": {
  chapter: 5, chapterTitle: "The Library of Falling Maps", title: "The Photograph of Two Keepers",
  mood: "storm",
  text: [
    "You give the room the walk it is asking for: along the shelves, past the globes, opening drawers just wide enough to read the labels. *Northern sky, by seasons. Southern sky, by seasons. Lost constellations, alphabetical. Lost constellations, by date of going out.* There are two drawers of that last one. They go back six hundred years. Recently, the entries come closer and closer together, like a pulse accelerating.",
    "In the drawer marked *K*, you find a fat envelope of photographs, and one of them stops your hands.",
    "It is old, older than any photo of your family. Two men stand in front of this very observatory, squinting into the sun. The younger is unmistakably a young Edmund Marlow, thin as a pine even then. The older man has his hand on the boy's shoulder in the proud, awkward way of a teacher, and he is laughing, and his other hand holds a small brass object that the sun has washed out to a bright smudge.",
    "On the back, in pencil: *A. Vasek and his boy. The last summer of the two of us. — He went up in the end too, and I never learned how to follow. E.M.*",
    "*A. Vasek.* A-V. The scratched-out plate in the hall. The portrait that looks down instead of up, with the hole of dark painted around it.",
    "So the Keeper before the Keeper did not retire and did not die down here. *He went up in the end too, and I never learned how to follow.* Edmund's teacher went up into the sky, whatever that means, and Edmund never followed, and now Edmund has gone up himself, and there is a fifteen-year-old standing in his library with a hole in the sky over both their heads.",
    "Under the photographs there is one more thing: a brass music box, the size of a sandwich, cold and heavier than it looks. Its little crank is worn bright from a century of fingers. You do not wind it. Something tells you that this is not the room where its song belongs.",
    "From upstairs, faint through the floors, comes the small sound of a bell. The cat's ears turn. Yours do now too. You are learning the shape of the queue."
  ],
  set: ["knowsVasek", "shelfDone"],
  choices: [
    { text: "Read the journal open on the desk.", to: "journal", if: { noItem: "journal" }, effects: { items: ["journal"] }, hint: "Keeps: the journal" },
    { text: "Follow the cat out of the library.", to: "mira" }
  ]
},

"mira": {
  chapter: 5, chapterTitle: "The Library of Falling Maps", title: "What the Cat Wants",
  mood: "storm",
  text: [
    "The cat leads, and you learn quickly that leading is a thing she has done before, for longer than you have been alive, and with more practice.",
    "She walks ahead two steps, stops, sits, and looks back until you have seen exactly what she wants seen: the corridor with the water stain shaped like a swan. The narrow stairs that only go up. A dark little washroom where, tucked behind the cold pipe, a tin box holds forty years of candle ends and matches — *the keeper's запас*, someone wrote on the lid, a word in your grandmother's language, meaning *stock*, meaning *for the bad nights*.",
    "\"You were his,\" you say, watching her flow up the stairs ahead of you, silent as a held breath. \"You were his cat. And now he's gone up, and you're mine, and that's how a house works, isn't it?\"",
    "She does not dignify this with a look.",
    "On the second landing, she stops at a door you have not been through, and this time she does not sit and look back. This time she goes in without you.",
    "It is a bedroom, and it is not pretending to be anything but a keeper's: a narrow bed made with hospital corners, a hook on the back of the door with a heavy coat on it, one window full of mountain and sky, a chair, a shelf. On the shelf, among the whalebone combs and the tin of pipe cleaners and the two books with broken spines, stands a small brass music box.",
    "The coat on the hook hangs like a man who has just stepped out of it. You know, without any magic at all, that it has not been worn since this morning.",
    "The cat jumps onto the bed, turns around twice, and sits. *Well?* she says with her whole spine. *He left things in this room for you. I have carried you to all of them. Do you want the room, or not?*"
  ],
  choices: [
    { text: "Open the music box on the shelf.", to: "musicbox", if: { noItem: "musicbox" }, effects: { items: ["musicbox"] }, hint: "Keeps: the music box" },
    { text: "Search the coat on the hook.", to: "coat", if: { noItem: "key" }, effects: { traits: { careful: 1 } }, hint: "Careful" },
    { text: "Go to the window and look at the sky.", to: "window-night" },
    { text: "You have what you need — go down to the hall and find Aster.", to: "hub1" }
  ]
},

/* ───────────────────────── CHAPTER 6 · THE KEEPER'S ROOM ───────────────────────── */

"musicbox": {
  chapter: 6, chapterTitle: "The Keeper's Room", title: "The Song With a Tooth Missing",
  mood: "night",
  text: [
    "You take the brass music box down from the shelf. It is heavier than it looks, cold at first, and the crank is worn bright — a century of fingers, the same four fingers, probably, over and over. You wind it slowly, half afraid of breaking something that has outlived three keepers.",
    "The song starts. It is not a grand tune. It is eight notes, then a small hop, then eight notes again — the kind of melody someone makes up on a walk and keeps because it is *theirs*, and after three turns of the cylinder you can hear why: it sounds exactly like a person humming while they work, while they climb, while they stand on a cold mountain and do a job nobody else can see.",
    "But it is wrong, one note of it. Every time, the same wrong note — where a tooth of the comb should ring, the song *skips*, like a stair missing in the dark, like a word falling out of a sentence. Your ear waits for the note. The note does not come. The song goes on without it, and the space where it should be is somehow louder than the music.",
    "\"That's his teacher's,\" you say slowly, because the photograph in the library is very fresh in your mind — the older man laughing, holding the small brass smudge. \"A. Vasek's. He made this. And the missing note is —\"",
    "The cat is sitting very still on the bed, and she is looking at the music box, and then at you, and then at the music box. Her tail-tip taps the quilt once, twice. *Yes,* says the tap. *And?*",
    "You put the music box in your pocket next to the journal, where it sits warm as a second coal. Whatever the missing note is for — whoever comes back to claim it — you have the feeling that this small broken song is a door of some kind, and that you are now carrying the only key of its kind in the world.",
    "Outside the window, high over the mountain, the sky holds its stars like a net holds fish. For now."
  ],
  set: ["hasSong"],
  choices: [
    { text: "Search the coat on the hook.", to: "coat", if: { noItem: "key" }, hint: "Careful" },
    { text: "Go to the window and look at the sky.", to: "window-night" },
    { text: "Go down to the hall and find Aster.", to: "hub1" }
  ]
},

"coat": {
  chapter: 6, chapterTitle: "The Keeper's Room", title: "Where He Always Keeps It",
  mood: "night",
  text: [
    "The coat on the hook is a mountain coat: heavy wool, mended at the elbows, deep pockets, a smell of oilskin and pencil shavings and, under it, faintly, of a fire long ago. You feel strange going through a man's pockets. Then you remember the note: *the key is where I always keep it* — written to you, left for you, an invitation in the only form an absent man could manage. You go through the pockets.",
    "Right side: a stub of pencil. A folded page of star counts, dated yesterday, in a shaking but careful hand — the numbers going down, column by column, like a tide going the wrong way. A boiled sweet, fossilized, wrapped in the same paper as your grandmother used to buy. You feel suddenly and violently that he is a person, this E. M., a person with pockets, who maybe ate sweets while he watched the sky and did not tell anyone what was happening, because who would have believed him, and who would have helped?",
    "Left side: a pocket watch, stopped at 12:04. And on a chain of its own, separate, wrapped in a handkerchief so it would not knock against the watch —",
    "A key. Brass, the size of your palm, and the wrong shape for any door you have ever seen. It is flat and heavy and cut in the shape of a six-pointed star, and the six points are worn smooth, polished by decades of a pocket, and when you hold it up to the lamp it throws a six-armed shadow on the wall like a little constellation of its own.",
    "The star-shaped key. *The key is where I always keep it.* Under the coat's inner flap there is one more pocket, the kind that holds the thing you care about most, and in it a folded paper, and on the paper, in the thin fast hand: *For the assistant, in case I am slow coming down. Do not wind it in my name. Wind it in yours. — E.M.*",
    "The cat purrs, once, from the bed. It is the loudest thing anyone has said all night."
  ],
  set: ["hasKeyNote"],
  choices: [
    { text: "Open the music box on the shelf.", to: "musicbox", if: { noItem: "musicbox" }, effects: { items: ["musicbox"] }, hint: "Keeps: the music box" },
    { text: "Go to the window and look at the sky.", to: "window-night" },
    { text: "Go down to the hall and find Aster.", to: "hub1" }
  ]
},

"window-night": {
  chapter: 6, chapterTitle: "The Keeper's Room", title: "The Town That Does Not Look",
  mood: "unease",
  text: [
    "You go to the window because you cannot not go. The glass is old and slightly wavy, and it makes the world below look like the bottom of a lake.",
    "The town lies in its bowl of valley, glittering. From up here you can see the whole shape of it: the grid of streets, the square with its tower, the new ring road, the shopping centre roof shining like a dead moon. Twelve thousand people, more or less. Twelve thousand warm rooms.",
    "And above the town, filling half the sky, the whole tremendous page of the stars — which the town has stopped reading.",
    "You stand there, keeper's key warm in your pocket, trying to see it the way the letter saw it. *Noticing is the only fuel the wheel does not need. Anyone can do it. The town does not know they are staff.*",
    "You press your forehead against the cold glass and pick a window of the town at random — one warm yellow square, one family, somebody's grandmother at a kitchen table, somebody's homework. They have a sky. It is the biggest thing they own. It is directly over their roof, free, every night, doing the oldest show on Earth, and behind their heads the ring of Lyra stands at five stars and thinning, and there is not one telescope on any balcony, not one skylight, not one face at any window aimed at any of it.",
    "*They do not know they are staff.*",
    "*Ding.* Somewhere above the world, soft as a glass touched underwater, another star pays out of the sky. The cat comes to stand on the sill beside you. She looks at the town with her lamp eyes for a long moment, and then — there is no other way to describe it — she looks *away*, deliberately, the way you look away from a conversation you have had too many times.",
    "In the hall below, a clock that is not a clock begins, very softly, to tick faster."
  ],
  set: ["sawTown"],
  choices: [
    { text: "Open the music box on the shelf.", to: "musicbox", if: { noItem: "musicbox" }, effects: { items: ["musicbox"] }, hint: "Keeps: the music box" },
    { text: "Search the coat on the hook.", to: "coat", if: { noItem: "key" } },
    { text: "Go down to the hall and find Aster.", to: "hub1" }
  ]
},

"hub1": {
  chapter: 6, chapterTitle: "The Keeper's Room", title: "\"The Sky Is at Eleven Twenty\"",
  mood: "unease",
  text: [
    "Aster is waiting in the hall when you come down, which you did not know a machine could do — wait somewhere else, on purpose, the way a person waits at a door with their coat already on.",
    "\"Assistant,\" he says, and his ticking is quick now, a pulse walking fast. \"Inventory. What have you got, and what do you know? Quickly, and in order of importance.\"",
    "You tell him. The journal, or the shelves, or both. The coat. The key, if you found it, and its paper: *wind it in your own name.* The music box with its missing note, if it is in your pocket. The bell queue. The town in its bowl of warm light, not looking up.",
    "\"Good,\" says Aster, and something in the sound of his gears loosens, as if a whole ring of brass has let go of a breath. \"Edmund said you came light-footed. Now, assistant, the sky is at eleven twenty.\"",
    "\"Is that a riddle?\"",
    "\"It is a time. Look at the smallest dial on my largest ring.\" You look: a needle-thin hand points to 11:20. \"That is not my time. That is the *sky's* time, kept in the Meridian Room, and it is thirty-eight minutes from midnight. At midnight, two things change. The first you already know: the great telescope upstairs stops being ours. Do not look through it after midnight. That rule is not a courtesy, assistant, it is a wall, and walls are for the side of them that gets walked.\"",
    "\"And the second thing?\"",
    "\"The second thing,\" says Aster, \"is that after midnight, *the Quiet keeps the appointments.* Before midnight, the bells are only the going-out, which is sad. After midnight, they are the going-out *with company*, which is dangerous. So. We have thirty-eight minutes and one mountain. The Meridian Room is behind its star-lock. The dome is above us, with the glass road through the great telescope, and the telescope is still ours for —\" the needle ticks — \"thirty-six minutes.\"",
    "The black cat is already sitting at the foot of the main stairs, facing up."
  ],
  set: ["timeLimit"],
  choices: [
    { text: "Go up to the dome and the great telescope.", to: "dome", effects: { traits: { brave: 1 } }, hint: "Brave" },
    { text: "\"First tell me about the Keeper before him. A. Vasek.\"", to: "warden-tale", if: { flag: "knowsVasek" } },
    { text: "Take the corridor of doors — see what a keeper's house hides.", to: "corridor", effects: { traits: { curious: 1 } }, hint: "Curious" }
  ]
},

/* ───────────────────────── CHAPTER 7 · THE AURORA EYE ───────────────────────── */

"warden-tale": {
  chapter: 7, chapterTitle: "The Aurora Eye", title: "The Keeper Who Went Up First",
  mood: "unease",
  text: [
    "\"Tell me about A. Vasek,\" you say. \"The keeper before him. The portrait downstairs that looks down. The photograph. *He went up in the end too, and I never learned how to follow.*\"",
    "Aster is quiet for four full turns of the little worlds.",
    "\"August Vasek,\" he says at last, \"was Keeper of this valley for fifty-one years, and the finest winder of the Year Wheel who has ever lived, and my maker's teacher, and the funniest man in three counties, and he was —\" the ticking catches, restarts — \"he was Edmund's whole sky, if I put it in the words he would use. When Edmund was your age, August wrote to *him*, the same letter, come quickly, come light-footed, come curious. It is how the line works, assistant. A keeper writes to one person. The person who still looks up. It has always worked like that.\"",
    "\"And what happened to him?\"",
    "\"The Quiet happened slowly, the way it does,\" says Aster. \"August wound the wheel alone for thirty years after his own teacher went up, and he talked to the town, and the town grew lamps, and he talked to the newspapers, and the newspapers grew advertisements, and in the end the only creature left in the valley who remembered the stars with him was a brass orrery and a black cat. He began to say a strange thing on the fine nights. He would stand at the south window and say: 'Brass, I am going up to argue with them in person.' We thought it was a joke. Keepers' jokes are long, assistant. They have decades in them.\"",
    "\"And one night in the winter of the great storm, he did not come down from the dome. The wheel stood at eleven forty and it stopped there, and the sky lost a star every nine days for two years, until Edmund — who was twenty-six and terrified and had read the letter and come quickly, exactly as the letter said — climbed through the great telescope and went up and argued with them in person, and learned what August had learned, which I am not permitted to say, and came back down, and has wound the wheel in his own name every night for forty years. *Alone.*\"",
    "The brass rings turn. Somewhere above, the house ticks through its thirty stopped clocks.",
    "\"He is at the end of his wind now,\" Aster says simply. \"Keepers get one long night, assistant. This is his. The question the hour is asking you is not where the key is. You have the key. The question is what kind of keeper *you* are going to be.\""
  ],
  set: ["knowsLine"],
  choices: [
    { text: "Go up to the dome and the great telescope.", to: "dome" }
  ]
},

"corridor": {
  chapter: 7, chapterTitle: "The Aurora Eye", title: "The Corridor of Doors",
  mood: "unease",
  text: [
    "You take the corridor, because a keeper's house has a hundred years of doors in it and you have thirty-eight minutes, which is exactly enough time to be unwise.",
    "The doors are labelled in brass, the way everything here is labelled in brass: *LAMPS. CHRONOMETERS. INSTRUMENTS, SMALL. INSTRUMENTS, LARGE. ARGUMENTS, LOST.* You open that one. It is a small room, painted sky-blue, with two chairs facing each other and nothing else — as if the keeper and somebody else have been meeting there, politely, for years, to disagree.",
    "The next door is labelled *SKY, SPARE,* and you do not open it, because you are not ready for a room with that name, and somewhere in your ribs you suspect you never will be.",
    "But it is the last door that makes your cold hands go colder. It is a plain door, and on it, in fresh chalk, in the thin fast hand, is written:",
    { style: "note", text: "Assistant — if you are reading this, you are wandering, which is correct. Wandering is how this house teaches. But the hour is short and the wheel is long. When you find the room with the wheel, remember: it does not need your hands. It needed his hands for forty years and look at the sky. What it needs is what you did at the window. — E.M." },
    "*What you did at the window.* You were at three windows tonight, and a door in the cold, and a bell. You looked. You counted. You stayed.",
    "You copy the chalk message into your memory, exact word by exact word, the way you have copied everything tonight, and then you wipe it with your sleeve, because the chalk was written for an audience of one, and you are the one.",
    "Behind you, softly, the whole corridor of brass labels has begun very faintly to glow, like a street of little lamps being woken one by one by a hand you cannot see. The house, you realize, is not holding its breath out of fear. It is holding itself *ready*."
  ],
  set: ["chalkMessage"],
  choices: [
    { text: "Go up to the dome.", to: "dome" }
  ]
},

"dome": {
  chapter: 7, chapterTitle: "The Aurora Eye", title: "The Great Telescope",
  img: "img/dome.svg", imgAlt: "The interior of an observatory dome with a great brass telescope under an open slit of night sky",
  imgKicker: "The dome · 11:26 and falling",
  mood: "dread",
  text: [
    "The stairs to the dome are wide stone worn into shallow curves by a century of feet, and the air changes as you climb — colder, cleaner, thinner, the mountain breathing through the slit in the roof. The cat flows up beside you, soundless on the stone.",
    "Then the stair ends, and the dome opens around you like the inside of a giant's egg.",
    "It is the biggest room you have ever stood in and somehow the closest: round, ribbed with steel, half lit by the blue slit of open sky above. And through the slit, on its great white horseshoe of a mounting, stands the telescope.",
    "You have seen pictures of rockets. You have seen pictures of oceans. Nothing prepared you for the *size* of it — a brass and steel serpent three times longer than your school bus, hanging in its cradle of rings and counterweights with the perfect balance of a thing that is much lighter than it looks, as if the whole enormous instrument were made of held breath. A brass plate on the horseshoe says: *AURORA EYE. 1901. \"She sees what she is given.\" — A.V.*",
    "The slit points low over the valley. Through it you can see the town, small and warm and blind, and above the town the sky, with its new holes in it, going about the enormous slow business of emptying.",
    "A desk stands at the rail: star counts, a thermos, a wall clock that is the only working clock you have seen in the whole house — 11:26, its second hand hurrying. And beside the desk, set into the floor, a round iron door the size of a porthole, with a wheel handle and one keyhole: six-pointed, star-shaped.",
    "Under the door, in brass: *MERIDIAN ROOM. ADMITTANCE BY THE KEEPER'S KEY. THE KEEPER'S KEY IS WHERE THE KEEPER KEEPS IT.*",
    "Aster's voice comes up the stairwell after you, quick and thin: \"Assistant. Thirty-two minutes. What is your plan?\""
  ],
  choices: [
    { text: "Look through the great telescope — before midnight, while it's still ours.", to: "midnight-look", effects: { flags: ["sight"], traits: { brave: 1 } }, hint: "Brave · the rule says only *after* midnight" },
    { text: "No. Search the control desk first — know what you're doing.", to: "resist", effects: { traits: { careful: 1 } }, hint: "Careful" },
    { text: "Go straight to the iron door and use the key.", to: "meridian-door" }
  ]
},

"midnight-look": {
  chapter: 7, chapterTitle: "The Aurora Eye", title: "What the Eye Was Given",
  mood: "dread",
  text: [
    "You put your eye to the great telescope's eyepiece, and you do it *now*, at 11:28, while the rule is still a courtesy and not a wall — and the universe leans down to meet you.",
    "There is no sky in the eyepiece. That is the first thing. There is a *room*.",
    "It is enormous and it is dark and it is not empty. It is a lamp-room the size of forever: rows and rows of lamps going back and back and back, every lamp a star, every star a flame of a colour that has no name, and every lamp is someone's — you can see that plainly, the way you know a house is lived in from the shape of the washing on the line. Some flames stand straight and strong: *loved, looked-at, wanted.* And some are low, blue at the edges, guttering on their wicks like the last of an oil nobody will replace.",
    "And in the aisle of that endless lamp-room, small with distance but unmistakable, a man in a heavy coat stands with both arms raised, holding the flame of one lamp high — *feeding it, somehow, from his own light* — and even at this distance you know the thin pine silhouette, the white storm of hair pushed back.",
    "*Dr. Marlow. Gone up. Exactly what it sounds like.*",
    "You are still finding out what happens at the edges of the room — because the aisles far away are not aisles, they are *spaces of nothing*, orderly places where lamps should be and do not, tidy as an empty shelf — when the whole lamp-room becomes aware of you.",
    "There is no face. There is no shape, not exactly, though for one impossible second the empty spaces seem to *lean*, all together, the way a crowd leans toward a door. The dark between the lamps arrives — not through the eyepiece, not through the dome, simply arrives — and where it touches your eyes the world goes very quiet, and in the quiet, polite as a clerk, patient as dust, something that is not a voice asks a question that is not a sound:",
    { style: "voice", text: "*Who remembers you?*" },
    "You tear your eye away. You fall back off the eyepiece. The dome is blue and cold and ordinary and the wall clock says 11:31, and your legs take you three full steps backward before they ask you.",
    "The cat is standing between you and the telescope, tail up, fur out, her whole small body an arrow pointed at the eyepiece. She is hissing at the sky. It is the bravest thing you have seen tonight, and you have been outside in the wind, arguing with the dark, and it was not brave at all next to twelve pounds of cat holding a doorway.",
    "\"It saw me,\" you say. \"The Quiet. It *asked* me something. Aster — it asked me —\"",
    "From the stairwell, quick and thin, ticking like a heart that has just understood the diagnosis: \"I know what it asked, assistant. It asks everyone it sees. It is the only question it has. And now, assistant, now it knows your face.\""
  ],
  set: ["sawMarlow", "sighted"],
  choices: [
    { text: "Open the iron door with the key.", to: "meridian-door" }
  ]
},

"resist": {
  chapter: 7, chapterTitle: "The Aurora Eye", title: "The Keeper's Desk",
  mood: "dread",
  text: [
    "You do not touch the telescope. The note said *never after midnight*, the wall clock says 11:27, and a person who breaks a keeper's one rule inside the keeper's own dome, thirty minutes before the rule wakes up, is a person who has not thought about *why* there is a rule. You turn to the desk instead, and you go through it the way you went through the coat: quickly, gently, reading everything.",
    "The star counts are the same as the page in his pocket, continued: columns of names and numbers, and the numbers falling night by night, and at the top of tonight's page, in the thin fast hand, underlined twice:",
    { style: "note", text: "Named stars remaining in the valley sky: 1,204. When the wheel was wound every night in August Vasek's time: 1,502. The difference is not lost, assistant. The difference is FORGOTTEN. There is a difference. Learn it before you touch anything." },
    "Beside the counts, chalked on a slate in a strong square hand that is not the letter-hand at all — older, heavier, a dead man's writing kept like a voice — is one line:",
    { style: "note", text: "The Quiet is not hunger and it is not a thief. It is the shelf where forgetting puts things. Do not fight it. Do not fear it. ANSWER it. — A.V." },
    "*Answer it.* Not fight. Not fear. You think of the empty portrait that looks down, of the man who went up to argue with them in person, and you begin, very slowly, in the cold of the dome, to understand that the strangest thing in this strange house might be its oldest furniture: that the enemy is a question, and questions are not fought, they are answered, and answers are a job for a certain kind of person, and a thin old man three weeks ago sat at this desk and read a school essay about remembering and picked up his pen.",
    "The wall clock ticks to 11:33. The cat sits on the star counts, plainly on purpose, so that you will stop reading and start moving. Under your hand, the iron door with its star-shaped lock waits in the floor, cool as a coin.",
    "You have the key. You have the words of two keepers. You have twenty-seven minutes."
  ],
  set: ["understandsDifference"],
  choices: [
    { text: "Open the iron door with the key.", to: "meridian-door" }
  ]
},

/* ───────────────────────── CHAPTER 8 · THE STAR-SHAPED LOCK ───────────────────────── */

"meridian-door": {
  chapter: 8, chapterTitle: "The Star-Shaped Lock", title: "Admittance by the Keeper's Key",
  mood: "dread",
  text: [
    "The iron door sits in the floor of the dome like the top of a well, and its lock is a star-shaped hole in the iron, and it waits to learn what you are carrying.",
    "You kneel on the cold steel plates beside it. The wall clock ticks to 11:40. The cat sits down exactly on the far side of the round door, facing you across it like the other half of a decision.",
    "Under the wheel handle, in brass: *MERIDIAN ROOM. ADMITTANCE BY THE KEEPER'S KEY. THE KEEPER'S KEY IS WHERE THE KEEPER KEEPS IT.*"
  ],
  choices: [
    { text: "Fit the star-shaped key into the lock and turn it.", to: "meridian-room", if: { item: "key" } },
    { text: "You have no key — but you have a song. Let the cat show you hers.", to: "hatch", if: { item: "musicbox" }, hint: "The song is also a key" },
    { text: "Neither key nor song — wait with Aster at the lock.", to: "lock-wait" }
  ]
},

"hatch": {
  chapter: 8, chapterTitle: "The Star-Shaped Lock", title: "The Cat's Door",
  mood: "dread",
  text: [
    "Your pockets hold no key. They hold something else: a brass music box, eight notes, and one note missing — and the cat has been waiting for you to understand that this is not a coincidence since the moment you wound it in a dead-keeper's bedroom.",
    "She does something then that she has not done all night: she puts one paw, deliberately, plainly, on the first step of the dome's stair, and walks down, and looks back. *This way. Keep up.*",
    "You follow her down and around the curve of the stairwell to a place where the wall has a seam you took for a crack: a hatch, low and square, iron like everything here, and in its centre a small brass plate — not a keyhole, a *socket*, round and ridged, exactly the shape of the end of a music-box crank. Above it, in engraved letters gone soft with a century of hands: *THE SONG IS ALSO A KEY.*",
    "You kneel. You fit the crank-end of the music box into the socket — it fits the way the key would have fit, the same rightness, brass into iron — and you wind, gently, twice.",
    "*Eight notes. The small hop. Eight notes.* The missing tooth skips where it always skips, the song goes on without it, and deep in the wall, under the floor, behind the stone, something enormous and patient hears the song of the man who built the wheel, played by the person he wrote to — and lets you in. The hatch unseals with a sigh, and cold clean air breathes up out of it, air that smells of oil and midnight.",
    "\"Who remembers you?\" you say quietly, to the dark, to the song, to the missing note — your first answer to the question you have not officially been asked yet. \"*I do,* A. Vasek. Whoever you were. I do.\"",
    "The cat goes first, of course, tail up, into the dark of the under-floor of the sky."
  ],
  set: ["enteredBySong"],
  choices: [
    { text: "Follow the cat down.", to: "meridian-room" }
  ]
},

"lock-wait": {
  chapter: 8, chapterTitle: "The Star-Shaped Lock", title: "Twenty Minutes of Brass",
  mood: "dread",
  text: [
    "No key, no song — only you, the iron door, and a clock ticking toward midnight. You are about to say something defeated when Aster's ticking comes up the stairwell, fast.",
    "\"Stand back from the wheel handle, assistant, and forgive me my manners.\"",
    "Something in the dome's wall opens — a panel you took for riveted steel — and Aster comes out of it. Not all of Aster. A long brass arm, jointed like a spider's leg, with a lens at the end and a needle-thin probe, moving with the patience of a machine that has watched a keeper open this lock four thousand times.",
    "\"Edmund made me for two jobs,\" his voice says from the panel, thinner here, further away. \"Remembering, and getting into rooms. I am too slow to be dangerous, assistant, which is a very good trait in a locksmith. But I have to say it plainly: I am also too slow to be *punctual*. This will take some minutes, and the minutes are not ours.\"",
    "You sit on the cold floor with your back against the great telescope's horseshoe and you watch a brass arm pick a six-pointed star-lock one worn point at a time, and above the slit of the dome, the sky does its quiet erasing. You count the bells, because counting is what you do now; you are staff and nobody told the sky:",
    "*Ding.* … *Ding.* … *Ding.*",
    "Three. Three more lights gone from the lamp-room while a machine works and a fifteen-year-old learns the exact sound of their own uselessness. You memorize the feeling. Not to punish yourself with it — to keep. It is the third thing you put in your pocket tonight, and it is the heaviest, and you suspect you will be carrying it a long way.",
    "The lock gives its last click at 11:58. Two minutes. Aster's arm withdraws, bows — an actual small bow, which must be forty years of Edmund in him — and the iron door swings open on cold clean air and the smell of oil and midnight.",
    "\"After you, assistant,\" says Aster. \"It is your room now, you know. You just have not read the deed.\""
  ],
  set: ["late", "knowsUselessness"],
  choices: [
    { text: "Go down into the Meridian Room.", to: "meridian-room" }
  ]
}
};
