// ========== SANGDATA ==========
// Rediger sange og tekster her — eller brug 'Download songs.js' i appen efter redigering.
const initialSongs = [
  {
    "id": "1",
    "title": "Jeg Tager Imod",
    "key": "Dm",
    "bpm": 120,
    "artist": "Thomas Helmig",
    "categories": [
      "Dansk",
      "Pop"
    ],
    "lyrics": "Dine øjne stjæler alt,\nog dit lys blænder rummet op,\ndine hænder finder vej,\nog sætter fodspor på min krop.\nLigeså blid som engleblid,\nog ligeså sej som hver for sig,\nlige nu og lige foran mig...\n\n**Livet rækker hånden ud,**\n**jeg tager imod,**\n**som et sommerstjerneskud,**\n**jeg tager imod.**\n**Gennemblødt af gaveregn,**\n**lykkelig og på vej,**\n**står jeg og tager imod fra dig**\n\nDin stemme hvisker bort,\nog dine tanker trækker til,\ndine minder minder om,\nalt hvad der er på spil.\nLigeså varm som hjertevarm,\nog ligeså vild som faret vild,\nlige nu og alt hvad jeg vil...\n\n**Livet rækker hånden ud,**\n**jeg tager imod,**\n**som et sommerstjerneskud,**\n**jeg tager imod.**\n**Gennemblødt af gaveregn,**\n**lykkelig og på vej,**\n**står jeg og tager imod fra dig**"
  },
  {
    "id": "2",
    "title": "Love Is In The Air",
    "key": "C",
    "bpm": 118,
    "artist": "John Paul Young",
    "categories": [
      "Pop",
      "80'er"
    ],
    "lyrics": "**Love is in the air**\n**Everywhere I look around**\n**Love is in the air**\n**Every sight and every sound**\n\n**And I don't know if I'm being foolish**\n**Don't know if I'm being wise**\n**But it's something that I must believe in**\n**And it's there when I look in your eyes**\n\n**Love is in the air**\n**In the whisper of the trees**\n**Love is in the air**\n**In the thunder of the sea**\n\n**And I don't know if I'm just dreaming**\n**Don't know if I feel sane**\n**But it's something that I must believe in**\n**And it's there when you call out my name**\n\nLove is in the air, Love is in the air, oh, oh, oh...\n\n**Love is in the air**\n**In the rising of the sun**\n**Love is in the air**\n**When the day is nearly done**\n\n**And I don't know if you're an illusion**\n**Don't know if I see it true**\n**But you're something that I must believe in**\n**And you're there when I reach out for you**\n\n**Love is in the air**\n**Everywhere I look around**\n**Love is in the air**\n**Every sight and every sound**\n\n**And I don't know if I'm being foolish**\n**Don't know if I'm being wise**\n**But it's something that I must believe in**\n**And it's there when I look in your eyes**\n\nLove is in the air, Love is in the air, oh, oh, oh..."
  },
  {
    "id": "3",
    "title": "Pretty Woman",
    "key": "A",
    "bpm": 120,
    "artist": "Roy Orbison",
    "categories": [
      "Rock",
      "Pop"
    ],
    "lyrics": "Pretty woman, walking down the street\nPretty woman, the kind I like to meet\nPretty woman\nI don't believe you, you're not the truth\nNo one could look as good as you\nMercy\n\nPretty woman, won't you pardon me\nPretty woman, I couldn't help see\nPretty woman\nThat you look lovely as can be\nAre you lonely just like me\nWow\n\nPretty woman, stop a while\nPretty woman, talk a while\nPretty woman, gave your smile to me\nPretty woman, yeah yeah yeah\nPretty woman, look my way\nPretty woman, say you'll stay with me\n'Cause I need you, I'll treat you right\nCome with me baby, be mine tonight\n\nPretty woman, don't walk on by\nPretty woman, make me cry\nPretty woman, don't walk away, hey...okay\nIf that's the way it must be, okay\nI guess I'll go on home, it's late\nThere'll be tomorrow nigh, but wait\nWhat do I see\nIs she walking back to me\nYeah, she's walking back to me\nOh, oh, Pretty woman"
  },
  {
    "id": "4",
    "title": "The Way You Make Me Feel",
    "key": "A",
    "bpm": 113,
    "artist": "Michael Jackson",
    "categories": [
      "Pop",
      "80'er"
    ],
    "lyrics": "Hey Pretty Baby With The High Heels On\nYou Give Me Fever Like I've Never, Ever Known\nYou're Just A Product Of Loveliness\nI Like The Groove Of Your Walk, Your Talk, Your Dress\n\nI Feel Your Fever From Miles Around\nI'll Pick You Up In My Car And We'll Paint The Town\nJust Kiss Me Baby And Tell Me Twice\nThat You're The One For Me\n\n**The Way You Make Me Feel**\n**(The Way You Make Me Feel)**\n**You Really Turn Me On**\n**(You Really Turn Me On)**\n**You Knock Me Off Of My Feet**\n**(You Knock Me Off Of**\n**My Feet)**\n**My Lonely Days Are Gone**\n**(My Lonely Days Are Gone)**\n\nI Like The Feelin' You're Givin' Me\nJust Hold Me Baby And I'm In Ecstasy\nOh I'll Be Workin' From Nine To Five\nTo Buy You Things To Keep You By My Side\n\nI Never Felt So In Love Before\nJust Promise Baby, You'll Love Me Forevermore\nI Swear I'm Keepin' You Satisfied\n'Cause You're The One For Me\n\n**The Way You Make Me Feel**\nAcha-Ooh!\n\n**I Never Felt So In Love Before...**\n\n**The Way You Make Me Feel...**\n\nAin't Nobody's Business,...\nBut Mine And My Baby\nGive It To Me-Give Me Some Time\nCome On Be My Girl-I Wanna Be With Mine\nAin't Nobody's Business..."
  },
  {
    "id": "5",
    "title": "Øde Ø",
    "key": "G",
    "bpm": 116,
    "artist": "Rasmus Seebach",
    "categories": [
      "Dansk",
      "Pop"
    ],
    "lyrics": "Hvis det føles lidt som om at livet er en test\nOg hvis du kun møder modstand på din vej\nVed du jeg stiller op med hele mit band og holder fest\nFordi jeg ved at du ville gøre det samme for mig\n\nEr du blevet hustlet, har du fået dit hjerte knust\nVille jeg be tossen pænt om at gå sin vej\nTa' dig med ud i byen for at glemme det hele og få en sjus\nFordi jeg ved at du ville gøre det samme for mig\nJa, jeg ved at du ville gøre det samme for mig\n\n**Og hvis vi styrtede ned på en øde ø**\n**Hvis vi kun havde hinanden til den dag vi skulle dø**\n**Så ville jeg være lykkelig og ikke engang forsøge**\n**på at tilkalde hjælp eller sejle hjem**\n**Jeg vil ikke engang savne dem**\n\n**Jeg ved at vi to kan gå igennem ild og vand**\n**Og jeg vil elske dig til verdens ende**\n**De sagde det ville gå galt for os**\n**Stik imod alle odds der står vi her, baby**\n**Langt om længe er det stadig dig og mig, åh**\n\nÅh åh åh åh åh\nStadig dig og mig\nÅh åh åh åh åh\n\nGik du ud i verden men kom for langt væk hjemmefra\nSavner du København og sommerregn\nVille jeg hoppe på en flyver for at hente dig hjem\nså bare gør dig klar\nOg jeg ved at du ville gøre det samme for mig\n\nVågner du op en morgen\nog har lidt ondt i selvtilliden\nStår du og stirrer dig blind på din mindste fejl\nSi'r jeg du er helt perfekt som du er\ndet skal du vide\nOg jeg ved at du ville gøre det samme for mig\nJa, du vil lyve og du ville sige det samme til mig\n\n**Og hvis vi styrtede ned på en øde ø...**\n\n**Jeg ved at vi to kan gå igennem ild og vand...**\n\nÅh åh åh åh åh\nStadig dig og mig\nÅh åh åh åh åh\n\n*Du spurgte mig engang:*\n*\"Hvis du måtte tage tre ting med på en øde ø,*\n*Hvad ville du så vælge?\"*\n*Jeg har tænket over det,*\n*og hvis jeg skal være helt ærlig*\n*Så er jeg fuldstændig ligeglad med de andre to ting*\n*Jeg skal bare have dig med*\n\n**Jeg ved at vi to kan gå igennem ild og vand...**\n(BREAK)\n\n**Og hvis vi styrtede ned på en øde ø...**\n\n**Jeg ved at vi to kan gå igennem ild og vand...**\n\nÅh åh åh åh åh\nStadig dig og mig\nÅh åh åh åh åh"
  },
  {
    "id": "6",
    "title": "Mustang Sally",
    "key": "C",
    "bpm": 130,
    "artist": "Wilson Picket",
    "categories": [
      "Rock",
      "Disco"
    ],
    "lyrics": "Mustang Sally\nGuess you better slow that mustang down\nMustang Sally, now baby\nGuess you better slow that mustang down\nYou've been running all over town\nOh, I guess you gotta put your flat feet on the ground\n\n**All you wanna do is ride around Sally (ride, Sally, ride)...**\n\n**One of these early mornings**\n**I'm gonna be wiping those weepin' eyes, yeah**\n\nI brought you a brand new mustang\nIt was a nineteen sixty five\nNow you comin' around to signify a woman\nGirl, you won't, you won't let me ride\n\nMustang Sally, now baby (Sally, now baby)\nGuess you better slow that Mustang down, alright\nYou've been running all over town\nOh, I guess you gotta put your flat feet on the ground\n\n**All you wanna do is ride around Sally (ride, Sally, ride)...**\n\n**One of these early mornings**\n**I'm gonna be wiping those weepin' eyes, yeah**\n\nThose weepin' eyes, oh yeah, those weepin' eyes\nThose weepin' eyes, yeah, yeah, yeah, those weepin' eyes"
  },
  {
    "id": "7",
    "title": "Can’t Take My Eyes Off Of You",
    "key": "D",
    "bpm": 111,
    "artist": "Frankie Valli",
    "categories": [
      "Pop"
    ],
    "lyrics": "You're just too good to be true.\nCan't take my eyes off you.\nYou'd be like Heaven to touch.\nI wanna hold you so much.\nAt long last love has arrived\nAnd I thank God I'm alive.\nYou're just too good to be true.\nCan't take my eyes off you.\n\nPardon the way that I stare.\nThere's nothing else to compare.\nThe sight of you leaves me weak.\nThere are no words left to speak,\nBut if you feel like I feel,\nPlease let me know that it's real.\nYou're just too good to be true.\nCan't take my eyes off you.\n\n**I love you, baby,\nAnd if it's quite alright,\nI need you, baby,\nTo warm a lonely night.\nI love you, baby.\nTrust in me when I say:\nOh, pretty baby,\nDon't bring me down, I pray.\nOh, pretty baby, now that I found you, stay\nAnd let me love you, baby.\nLet me love you.**\n\nYou're just too good to be true.\nCan't take my eyes off you.\nYou'd be like Heaven to touch.\nI wanna hold you so much.\nAt long last love has arrived\nAnd I thank God I'm alive.\nYou're just too good to be true.\nCan't take my eyes off you.\n\n**I love you baby...**"
  },
  {
    "id": "8",
    "title": "Johnny B. Goode",
    "key": "A",
    "artist": "Chuck Berry",
    "categories": [
      "Rock",
      "Hård Rock"
    ],
    "bpm": 168,
    "lyrics": "Deep down Louisiana close to New Orleans\nWay back up in the woods among the evergreens\nThere stood a log cabin made of earth and wood\nWhere lived a country boy named Johnny B. Goode\nWho never ever learned to read or write so well\nBut he could play the guitar just like a ringing a bell\n\n**Go go**\n\n**Go Johnny go go go...**\n\nHe used to carry his guitar in a gunny sack\nGo sit beneath the tree by the railroad track\nOh, the engineers would see him sitting in the shade\nStrumming with the rhythm that the drivers made\nPeople passing by they would stop and say\nOh my that little country boy could play\n\n**Go go**\n\n**Go Johnny go go go...**\n\nHis mother told him \"Someday you will be a man,\nAnd you will be the leader of a big old band.\nMany people coming from miles around\nTo hear you play your music when the sun go down\nMaybe someday your name will be in lights\nSaying Johnny B. Goode tonight.\"\n\n**Go go**\n\n**Go Johnny go go...**"
  },
  {
    "id": "9",
    "title": "Rabalderstræde",
    "key": "D",
    "bpm": 132,
    "artist": "Gasolin",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Rabalderstræde\ner en gade\nhvor den slet slet ikke får for lidt\nfor der sprut i stride strømme\nog lamperne går aldrig ud\nog der tingelingelater\nnår tumperne de ruller sig ud.\n\n**Frække chicks og friske fyre**\n**drøner rundt og spiller dyre**\n**kom og ta' mig!**\n\nDer ryddes buler\nog trilles kugler\nog alle tænker mon jeg ikke snart får bid\nog der blir råbt og der blir skreget\nnår skuffelserne skylles ned\nog der blir kysset og krammet\nrivalerne får aldrig fred.\n\n**Frække chicks og friske fyre**\n**drøner rundt og spiller dyre**\n**å goddow do!**\n\nNår dagen kommer\nmed tomme lommer\nog den allersidste brandert bæres hjem\ner der ikke flere drømme\nog gaden ligger øde hen\nmen når lygterne tændes\nså hænger vi sgu på den igen.\n\n**Frække chicks og friske fyre**\n**drøner rundt og spiller dyre**\n**i al evighed.**\n\nSå kom og ta mig\nhvis du vil ha mig ..."
  },
  {
    "id": "10",
    "title": "Abracadabra",
    "key": "Am",
    "bpm": 128,
    "artist": "The Steve Miller Band",
    "categories": [
      "Rock",
      "80'er"
    ],
    "lyrics": "I heat up, I can't cool down\nYou got me spinnin'\n'Round and 'round\n'Round and 'round and 'round it goes\nWhere it stops nobody knows\n\nEvery time you call my name\nI heat up like a burnin' flame\nBurnin' flame full of desire\nKiss me baby, let the fire get higher\n\n**Abra-abra-cadabra**\n**I want to reach out and grab ya**\n**Abra-abra-cadabra**\n**Abracadabra**\n\nYou make me hot, you make me sigh\nYou make me laugh, you make me cry\nKeep me burnin' for your love\nWith the touch of a velvet glove\n\n**Abra-abra-cadabra...**\n\nI feel the magic in your caress\nI feel magic when I touch your dress\nSilk and satin, leather and lace\nBlack panties with an angel's face\n\nI see magic in your eyes\nI hear the magic in your sighs\nJust when I think I'm gonna get away\nI hear those words that you always say\n\n**Abra-abra-cadabra...**\n\nEvery time you call my name\nI heat up like a burnin' flame\nBurnin' flame full of desire\nKiss me baby, let the fire get higher\n\nSOLD\n\n*I heat up, I can't cool down*\n*My situation goes 'round and 'round...*"
  },
  {
    "id": "11",
    "title": "What A Life",
    "key": "Am",
    "bpm": 114,
    "artist": "Scarlet Pleasure",
    "categories": [
      "Pop",
      "Dansk"
    ],
    "lyrics": "**What a life, what a night**\n**What a beautiful, beautiful ride**\n**Don't know where I'm in five but I'm young and alive**\n**Fuck what they are saying, what a life**\n\nI am so thrilled right now\n'Cause I'm poppin' pills right now\nDon't wanna worry 'bout a thing\nBut it makes me terrified\nTo be on the other side\nHow long before I go insane?\n\nI am so thrilled right now\n'Cause I'm poppin' pills right now\nDon't wanna worry 'bout a thing\nBut it makes me terrified\nTo be on the other side\nHow long before I go insane?\n\n**What a life, what a night**\n**What a beautiful, beautiful ride (yah, yah)**\n**Don't know where I'm in five but I'm young and alive (woo)**\n**Fuck what they are saying, what a life (yah, yah)**\n**It's okay, it's okay**\n**That we're living, we're living this way (yah, yah)**\n**Don't know where I'm in five but I'm young and alive (woo)**\n**Fuck what they are saying, what a life**\n\nDon't really have a clue\nNothing I need to do\nI got some money but ain't got no plans (ain't got no plans)\nIt's making me paranoid\nTo float like an asteroid\nHow long before I go insane? (Insane)\n\nDon't really have a clue\nNothing I need to do\nI got some money but ain't got no plans (ain't got no plans)\nIt's making me paranoid\nTo float like an asteroid\nHow long before I go insane? (Insane)\n\n**What a life, what a night (woo-ooh)**\n**What a beautiful, beautiful ride**\n**Don't know where I'm in five but I'm young and alive**\n**Fuck what they are saying, what a life (yah, yah)**\n**It's okay, it's okay**\n**That we're living, we're living this way (yah, yah)**\n**Don't know where I'm in five but I'm young and alive (woo)**\n**Fuck what they are saying, what a life**"
  },
  {
    "id": "12",
    "title": "STOR MAND",
    "key": "F",
    "bpm": 146,
    "artist": "Tobias Rahim & Rasmus Odbjerg",
    "categories": [
      "Dansk",
      "Pop"
    ],
    "lyrics": "Jeg' i Jylland, brænder Cali-weed\nMin' tanker kører om en Evergreen, uh-ah\nVi teamer op om godt halvanden time\nPå Grønnegade med et dollargrin, uh-ah\n\n*Du siger du ruller op, hvis jeg rister*\n*Imens morgenerne bli'r til nætter*\n*Alle er blå, blå silhuetter*\n*Jeg vil bare gå endnu længere med dig*\n\n**Driver langs åen, jeg ser månen bli'r blokeret af dig**\n**Ned' på Den Sidste er vi de første til at gå vores vej**\n**Ta'r dig ind, ta'r dig nu, ta'r dig sommeren ud**\n**Ja, jeg gi'r dig mit hjerte i Aarhus**\n**Har aldrig danset med en stor mand**\n**En stor mand som dig**\n\nOg ja, jeg føler at jeg ejer byen\nSom Pablo Escobar i Medellin, uh-ah\nMed vinderenergi på Bellevue\nHvor smukke mennesker gi'r mig deja vu, uh-ah\n\n*Du siger du ruller op, hvis jeg rister*\n*Imens morgenerne bli'r til nætter*\n*Alle er blå, blå silhuetter*\n*Jeg vil bare gå endnu længere med dig*\n\n**Driver langs åen, jeg ser månen bli'r blokeret af dig**\n**Ned' på Den Sidste er vi de første til at gå vores vej**\n**Ta'r dig ind, ta'r dig nu, ta'r dig sommeren ud**\n**Ja, jeg gi'r dig mit hjerte i Aarhus**\n**Har aldrig danset med en stor mand**\n**En stor mand som dig**\n\nDer' mange tårer i byen og corny smil\nSer dig gå alene rundt\nDu ved ikke hvad du tænker på, nej - Men du gør at jeg\nHar det som en gigolo der' på vej til peng' lige nu\n\n**Driver langs åen, jeg ser månen bli'r blokeret af dig**\n**Ned' på Den Sidste er vi de første til at gå vores vej**\n**Ta'r dig ind, ta'r dig nu, ta'r dig sommeren ud**\n**Ja, jeg gi'r dig mit hjerte i Aarhus**\n**Har aldrig danset med en stor mand - En stor mand som dig**"
  },
  {
    "id": "13",
    "title": "Kun For Mig",
    "key": "Am",
    "bpm": 125,
    "artist": "Medina",
    "categories": [
      "Dansk",
      "Pop"
    ],
    "lyrics": "Klubben fylder mine årer\nOg lægger skjul på alle sår\nHer ser man ikke svage tårer\nJeg har det godt\n\nPromillerne sejler rundt\nHer er der ingenting der gør ondt\nHer er der låg på alt hvad der er sundt\nJeg har det godt\n\n*Kun tonerne fylder min verden*\n*Jeg hører kun musik I mit iskolde hjerte*\n*Her er der ingen ting der kan røre mig*\n*Her er der ingen mand der kan snørre mig*\n*For jeg har ikke mere tilovers for kærlighed*\n*Og jeg er så færdig med din falske ærlighed*\n*Nu er det forbi jeg skal morer mig*\n*Jeg sagde jeg har det meget bedre uden dig*\n\n**Så nu er musikken kun for mig, kun for mig**\n**Kun for mig, kun for mig**\n\nJeg er lige glad med hvad andre siger\nJeg ved jo godt det med de piger\nNu betyder det sku ikke mer'\nJeg har det godt\n\nMen når mørket falder på er jeg\nIgen på klubben for at glemme dig\nDet er utroligt hvad do gjorde ved mig\nDu gjorde det godt\n\n*Kun tonerne fylder min verden...*\n\n**Så nu er musikken kun for mig, kun for mig...**"
  },
  {
    "id": "14",
    "title": "On A Long Lonely Night",
    "key": "G",
    "bpm": 112,
    "artist": "Sko/Torp",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "I've been wondering where you\nWhere you've gone\nBeen such a long time\nI've been living alone for way too long\nYou've been out all night\nFooling round, with a bunch of bad guys\nNow you know how I hate it when you're not near\n\n**And I miss you so much pretty lady**\n**You know that I do**\n**And I wish you'd come home, but you're not near**\n**How could you walk away, when I needed you?**\n**You make me cry on a long lonely night**\n\n(On a lonely night)\n(On a lonely night)\n\nI've been wondering how you, you could go\nJust gone and left me baby\nYou turned me on, and then left me on my own\nAnd the light of the day breaks through my window\nYou left me naked, where you used to live\n\n**And I miss you so much pretty lady**\n**You know that I do**\n**And I wish you'd come home, but you're not near**\n**How could you walk away, when I needed you?**\n**You make me cry on a long lonely night**\n\n(On a lonely night)\n(On a lonely night)\n\nI wonder if you'll ever come back in to my life\nI wonder where you've been so long\nDon't you miss me, like I miss you, little miss\n\n**Well I miss you so much pretty lady**"
  },
  {
    "id": "15",
    "title": "Mr. Swing King",
    "key": "C",
    "bpm": 144,
    "artist": "Gnags",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Fryden når vi ride ride ranke\nOppe på loftet af møllerens hus\nVi fløj til himlen og faldt ned\nI et hul med sus\nFløj igennem luften på en sommerdag\nKarruselkongen, Mr. Swing King\nDaddy stod i midten og huskede\nAlt det fra dengang han selv var dreng\n\nKarruselkongen, Mr. Swing King\nVelkommen Mr. Swing King\n\nNår alting snerper sammen og bliver cool og cash\nNår alt bliver business og noget for noget\nSå væk mig med jeg ved ikke hvad\nKammerat men vi finder på'ed\nEt steady blik i øjet når det flimrer ud\nEn hånd i tågen når alting bliver tåget\nVæk mig med et nip af det som fuglene får pip af\nOg sådan noget\n\nKarruselkongen, Mr. Swing King\nVelkommen Mr. Swing King\n\nTag toget fra den dybe brønd\nElektrisk sporskift og bomme rejser sig og blinker\nLidt a'la' H.C. Andersen\nOg papma'che-bjerge og underlige dværge\nStår og vinker\nOg selv de største mænd\nBliver lisom børn igen\n\nMine damer og herrer:\nMr. Swing King\n\nKarruselkongen, Mr. Swing King\nVelkommen Mr. Swing King"
  },
  {
    "id": "16",
    "title": "I Feel Good",
    "key": "Bb",
    "bpm": 108,
    "artist": "James Brown",
    "categories": [
      "Disco"
    ],
    "lyrics": "Wo! I feel good, I knew that I would, now\nI feel good, I knew that I would, now\nSo good, so good, I got you\n\nWo! I feel nice, like sugar and spice\nI feel nice, like sugar and spice\nSo nice, so nice, I got you\n\n*[Sax, two licks to bridge]*\n\nWhen I hold you in my arms\nI know that I can do no wrong\nand when I hold you in my arms\nMy love won't do you no harm\n\nand I feel nice, like sugar and spice\nI feel nice, like sugar and spice\nSo nice, so nice, I got you\n\n*[Sax, two licks to bridge]*\n\nWhen I hold you in my arms\nI know that I can't do no wrong\nand when I hold you in my arms\nMy love can't do me no harm\n\nand I feel nice, like sugar and spice\nI feel nice, like sugar and spice\nSo nice, so nice, well I got you\n\nWo! I feel good, I knew that I would, now\nI feel good, I knew that I would\nSo good, so good, 'cause I got you\nSo good, so good, 'cause I got you\nSo good, so good, 'cause I got you\n\nHey! Oh yeah-a..."
  },
  {
    "id": "17",
    "title": "Bag Duggede Ruder - Lanternen",
    "key": "C",
    "bpm": 133,
    "artist": "TV2",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Før jeg ku gi\nFør jeg ku skænke dig en tanke\nog en krop som langt om længe\ntog sig sammen til at elske lidt med livet\nKunne jeg se dit hjerte banke\nunder bryster som forlængst var blevet taget\naf alle mulige for givet\n\nJeg vented lange nætter\ni dine kolde stuer\nbrændt varm i hvert et blik\nfra dine duggede ruder\n\nFør jeg ku tro\nFør jeg ku tro på mine løgne\nog en sandsynligvis korrekt beregning\nover livets gang før det var gået\nSå jeg ind, helt ind i dine øjne\nog forsvandt i et svimlende styrt\nhvor bunden endnu ikke er nået\n\nJeg varmer stadig kroppen\ni dine kolde stuer\nbrændt fast af frygt for udsigten\nbag duggede ruder\n\nfra attid ... X2\n\nSOLO"
  },
  {
    "id": "18",
    "title": "Play That Funky Music",
    "key": "E",
    "bpm": 131,
    "artist": "Wild Cherry",
    "categories": [
      "Disco"
    ],
    "lyrics": "Hey, Once I was a funky singer playin' in a Rock and Roll Band\nI never had no problems, yeah\nBurnin' down one night stands\nAnd everything around me, yeah\nGot to stop to feelin' so low And I decided quickly (Yes I did)\nTo disco down and check out the show\n\nYeah, they was dancin' and singin' and movin' to the groovin'\nAnd just when it hit me somebody turned around and shouted\n\n**Play that funky music white boy...**\n\nI tried to understand this\nI thought that they were out of their minds\nHow could I be so foolish (How could I)\nTo not see I was the one behind\nSo still I kept on fighting\nWell, loosing every step of the way\nI said, I must go back there (I got to go back)\nAnd check to see if things still the same\n\nYeah they was dancin'...\n\n**Play that funky music white boy...**\n\n(Hey, wait a minute)\nNow first it wasn't easy\nChangin' Rock and Roll and minds and things were getting shaky\nI thought I'd have to leave it behind\nBut now its so much better (it's so much better)\nI'm funking out in every way\nBut I'll never lose that feelin' (no I won't)\nOf how I learned my lesson that day\n\nWhen they were dancin'...\n\n**Play that funky music white boy...**"
  },
  {
    "id": "19",
    "title": "Det er Mig Der Står Herude Og Banker på",
    "key": "A",
    "bpm": 83,
    "artist": "Thomas Helmig",
    "categories": [
      "Dansk",
      "Pop"
    ],
    "lyrics": "Det går næsten altid galt\nnår vi er i byen sammen\nVi går næsten altid hjem hver for sig\nVi bliver en smule fulde\nog så sårer vi hinanden\nog sidst der gik det ud over dig\n\n**Det er mig der står herude og banker på**\n**og beder dig om at prøve at forstå**\n**jeg kyssede hende kun på hendes kind**\n**sig at det er okay og luk mig ind**\n**sig det' okay og luk mig ind**\n**jeg kyssede hende kun på hendes kind**\n**et kys på kinden**\n**det er hvad der sker**\n**jeg lover at der ikke skete mere**\n\nDet er så let at komme galt afsted\ndet er så let at dumme sig\net glas for meget kan ødelægge alt\nog sidst der gik det ud over dig\n\n*Det er altid det samme der sker*\n*de tomme flasker bliver flere og flere*\n*og så glemmer jeg alt om gode manerer*\n\n**Det er mig der står herude og banker på**\n**og beder dig om at prøve at forstå**\n**jeg kyssede hende kun på hendes kind**\n**sig at det er okay og luk mig ind**\n**sig det' okay og luk mig ind**\n**jeg kyssede hende kun på hendes kind**\n**et kys på kinden**\n**det er hvad der sker**\n**jeg lover at der aldrig skete mere**\n\nDet er mig der står herude og banker på..."
  },
  {
    "id": "20",
    "title": "For Evigt",
    "key": "C",
    "bpm": 147,
    "artist": "Volbeat",
    "categories": [
      "Dansk",
      "Hård Rock"
    ],
    "lyrics": "Memory, your lamp light is burning holes\nRecover the damage, bring it all home\nFollow the bliss just like Summer song\n~~Please~~ stay there forever, I'll try to remember\nCome home\n\nMemory, you gave me another note\nA voice that is endless, bring it all home\nOh what it is feels like a Summer song\nI'll stay here forever, her face I remember\n\n**For evigt, måske for evigt**\n**Skal vi sammen, samme vej**\n**Og når i morgen får øjne, og natten hviler sig**\n**Skal vi for evigt måske samme vej**\n\nHappiness, I'm sorry you've been on hold\nThe doors will be open, bring it all home\nCause what it is, feels like a Summer song\nI'll stay here forever now that I remember\n\n**For evigt, måske for evigt**\n**Skal vi sammen, samme vej**\n**Og når i morgen får øjne, og natten hviler sig**\n**Skal vi for evigt måske samme vej**\n\nFor all these symbols don't open our eyes\nWe'll close them instead, leave the messenger behind\nBut one day we will know...\n\n**For evigt, måske for evigt**\n**Skal vi sammen, samme vej**\n**Og når i morgen får øjne, og natten hviler sig**\n**Skal vi for evigt måske for evigt**\n\n**For evigt, måske for evigt**\n**Skal vi sammen, samme vej**\n**Og når i morgen får øjne, og natten hviler sig**\n**Skal vi for evigt måske samme vej**\n\n**Skal vi for evigt måske samme vej**\n**Skal vi for evigt måske samme vej**\n\nINSTR."
  },
  {
    "id": "21",
    "title": "Kiss",
    "key": "A",
    "bpm": 115,
    "artist": "Prince",
    "categories": [
      "Pop",
      "Disco"
    ],
    "lyrics": "U don't have 2 be beautiful, 2 turn me on\nI just need your body baby\nFrom dusk till dawn\nU don't need experience, 2 turn me out\nU just leave it all up 2 me\nI'm gonna show u what it's all about\n\nU don't have 2 be rich, 2 be my girl\nU don't have 2 be cool\n2 rule my world\nAin't no particular sign I'm more compatible with\nI just want your extra time and your\n\n**Kiss**\n\nU got to not talk dirty, baby, If u wanna impress me\nU can't be 2 flirty, mama\nI know how 2 undress me (yeah)\nI want 2 be your fantasy, Maybe u could be mine\nU just leave it all up to me\nWe could have a good time\n\n**Kiss**\n\nWomen not girls rule my world\nI said they rule my world\nAct your age, mama (not your shoe size)\nNot your shoe size\nMaybe we could do the twirl\nU don't have 2 watch dynasty"
  },
  {
    "id": "22",
    "title": "Det Bedste til Mig og Mine Venner",
    "key": "F",
    "bpm": 150,
    "artist": "Gasolin",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Solen den går ned over gaden\nstemmerne får tusmørkelyd\nvi spiller bold mod facaden\nog så med et der ryger min dyd\n\n**og floridor ja**\n**og cellestin**\n**de siger hva ska du ha min dreng**\n**jeg sir det bedste**\n**til mig og mine venner, jajaja**\n\nBilly var på speed i Herstedvester\nca. sytten dage på pip pip\nder var discofil-musik og skrigende gæster\nog gamle venner på trip\n\n**og floridor ja ...**\n\nSjakalerne de begyndte og grine\nda de første ruder de røg\nog drengene de gik på line\ni crepe-de-chine og tøsetøj\n\n**og floridor ja ...**\n\nNerverne som glas på resteniler\nskøjteløb på Bagsværd sø\nkærlighed i kolde biler\nog så er man sgu bange for at dø\n\n**og floridor ja ...**"
  },
  {
    "id": "23",
    "title": "Sweet Home Alabama",
    "key": "D",
    "bpm": 98,
    "artist": "Lynyrd Skynyrd",
    "categories": [
      "Rock"
    ],
    "lyrics": "Big wheels keep on turning\nCarry me home to see my kin\nSinging songs about the Southland\nI miss Alabamy once again\nAnd I think its a sin, yes\n\nWell I heard mister Young sing about her\nWell, I heard ole Neil put her down\nWell, I hope Neil Young will remember\nA Southern man don't need him around anyhow\n\n**Sweet home Alabama Where the skies are so blue Sweet Home Alabama Lord, I'm coming home to you**\n\nIn Birmingham they love the governor\nNow we all did what we could do\nNow Watergate does not bother me\nDoes your conscience bother you?\nTell the truth\n\n**Sweet home Alabama...**\n\nNow Muscle Shoals has got the Swampers\nAnd they've been known to pick a song or two\nLord they get me off so much\nThey pick me up when I'm feeling blue\nNow how about you?\n\n**Sweet home Alabama...**"
  },
  {
    "id": "24",
    "title": "Midt Om Natten",
    "key": "Dm",
    "bpm": 116,
    "artist": "Kim Larsen",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Strisserne kom før vi ventede dem\nmidt om natten\nså mig og min baby vi var på den igen\nmidt om natten\n\n**de kylede gas gennem vinduerne**\n**så tårerne de trillede i stuerne**\n**åhja**\n**midt om natten**\n\ndet næste der skete tør jeg ikke tænke på\nmidt om natten\nen fyr vi kaldte Spacy tog den ud i det blå\nmidt om natten\n\n**han ramte gaden fra en femte sal**\n**det er ikke vores skyld, han var bare bindegal**\n**sagde strisserne**\n**midt om natten**\n\nde lukkede os ud da klokken den var cirka tre\nmidt om natten\nde sagde, gå nu hjem, men vi spurgte hvor er det\nmidt om natten\n\n**nu glæder jeg mig til jeg blir en gammel mand**\n**så får jeg nok et værelse med lys og med vand**\n**og der kommer strisserne vel næppe på besøg**\n**igen**\n**midt om natten**\n**midt om natten**\n\n**åh manāna**\n**håber vi får i morgen med**\n\n**åh manāna**\n**håber vi får i morgen med**"
  },
  {
    "id": "25",
    "title": "Save Tonight",
    "key": "Am",
    "bpm": 122,
    "artist": "Eagle Eye Cherry",
    "categories": [
      "Pop",
      "90'er"
    ],
    "lyrics": "Go on and close the curtains - cause all we need is candle light\nYou and me and a bottle of wine - going to hold you tonight\n\nWell we know I'm going away - and how I wish, I wish it weren't so\nSo take this wine and drink with me - let's delay our misery\n\n**Save tonight - and fight the break of dawn**\n**Come tomorrow - tomorrow I'll be gone**\n**Save tonight - and fight the break of dawn**\n**Come tomorrow - tomorrow I'll be gone**\n\nThere's a log on the fire - and it burns like me for you\nTomorrow comes with one desire - to take me away it's true\nIt ain't easy to say goodbye - darling please don't start to cry\nCause girl you know I've got to go, oh - Lord I wish it wasn't so\n\n*Tomorrow comes, to take me away - I wish that I, that I could stay*\n*Girl you know I've got to go - Lord I wish it wasn't so*\n\n**OMKVÆD --> Solo --> OMKVÆD**\n\n**Akkorder: ||Am F |C G ||...**"
  },
  {
    "id": "26",
    "title": "Kom Tilbage Nu",
    "key": "A",
    "bpm": 110,
    "artist": "Danseorkestret",
    "categories": [
      "Dansk"
    ],
    "lyrics": "Det kom som et chok, da hun forlod mig\nDen nat hun blev væk, den dag hun sendte brevet til mig\nI brevet der stod, hmm, at hun var blevet træt af mig\nUh-ja, træt af at vente og hele tiden skændes med mig\n\n[Bro]\nNu’ jeg helt alene, går søvnløs rundt\nJeg føler mig så ensom, åh, mit hjerte gør ondt\nSket er sket, og jeg fortryder nu\nMh-ja, gjort er gjort, jeg må ha’ hende igen\nDe ting hun gør, de ting hun si’r\nJeg elsker ingen andre piger\n\n[Omkvæd]\n**Kom tilbage til mig, jeg elsker kun dig**\n**(Kom tilbage nu, kom tilbage nu)**\n**Kom tilbage til mig, jeg elsker kun dig**\n**(Tilbage nu)**\n\n[Vers 2]\nVi ku’ prøve igen\nTejse langt, langt bort, åh, sig du vil\nSig du vil gi’ mig\nGi’ mig en chance til\n\n[Bro]\nFor jeg’ helt alene, går søvnløs rundt\nMh-ja, jeg føler mig så ensom, oh, mit hjerte gør ondt\nSket er sket, åh, men jeg fortryder nu, nu, nu\nGjort er gjort, jeg må ha’ hende igen\nDe ting hun gør, de ting hun si’r\nJeg elsker ingen andre piger\n\n[Omkvæd]\n**Kom tilbage til mig, jeg elsker kun dig**"
  },
  {
    "id": "27",
    "title": "Proud Mary",
    "key": "D",
    "bpm": 100,
    "artist": "Ike & Tina Turner",
    "categories": [
      "Rock",
      "Syng med"
    ],
    "lyrics": "Left a good job in the city\nWorkin' for the man ev'ry night and day\nAnd I never lost one minute of sleepin'\nWorryin' 'bout the way things might have been\n\n**Big wheel keep on turnin'**\n\n**Proud Mary keep on burnin'**\n\n**Rollin', rollin', rollin' on the river**\n\nCleaned a lot of plates in Memphis\nPumped a lot of 'tane down in New Orleans\nBut I never saw the good side of the city\n'Til I hitched a ride on a river boat queen\n\n**Big wheel keep on turnin'**\n\n**Proud Mary keep on burnin'**\n\n**Rollin', rollin', rollin' on the river**\n\n**Rollin', rollin', rollin' on the river**\n\nIf you come down to the river\nBet you gonna find some people who live\nYou don't have to worry 'cause if you have no money\nPeople on the river are happy to give\n\n**Big wheel keep on turnin'**\n\n**Proud Mary keep on burnin'**\n\n**Rollin', rollin', rollin' on the river**\n\n**Rollin', rollin', rollin' on the river**\n\n**Rollin', rollin', rollin' on the river**"
  },
  {
    "id": "28",
    "title": "Summer of 69",
    "key": "H",
    "bpm": 139,
    "artist": "Bryan Adams",
    "categories": [
      "Rock",
      "Syng med"
    ],
    "lyrics": "I got my first real six-string\nBought it at the five and dime\nPlayed it 'til my fingers bled\nWas the summer of '69\n\nMe and some guys from school\nHad a band and we tried real hard\nJimmy quit and Jody got married\nI should've known we'd never get far\n\n**Oh, when I look back now**\n**That summer seemed to last forever**\n**And if I had the choice**\n**Yeah, I'd always wanna be there**\n**Those were the best days of my life**\n\nAin't no use in complainin'\nWhen you got a job to do\nI spent my evenings down at the drive-in\nAnd that's when I met you, yeah!\n\n**Standin' on your mama's porch**\n**You told me that you'd wait forever**\n**Oh, and when you held my hand**\n**I knew that it was now or never**\n**Those were the best days of my life**\n**Oh, yeah**\n**Back in the summer of '69, oh**\n\n*Man, we were killin' time*\n*We were young and restless*\n*We needed to unwind*\n*I guess nothing can last forever*\n*Forever, no*\n*Yeah*\n\nAnd now the times are changin'\nLook at everything that's come and gone\nSometimes when I play that old six-string\nI think about you, wonder what went wrong\n\n**Standin' on your mama's porch...**"
  },
  {
    "id": "29",
    "title": "Mona Mona",
    "key": "D",
    "bpm": 120,
    "artist": "Søren Krag Jacobsen",
    "categories": [
      "Dansk",
      "Syng med"
    ]
  },
  {
    "id": "30",
    "title": "Kvinde Min",
    "key": "Dm",
    "bpm": 123,
    "artist": "Gasolin",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "Kvinde min jeg elsker dig\nog jeg ved du elsker mig\nog hvad der så end sker\nåh la det ske\nfor jeg er din\nog selv om vi har skændtes tit\nog du har grædt og lidt\nnår det har været slemt\nså glem det nu\nfor jeg er din.\n\nÅh, jeg har huslet\nog spillet tosset\nog jeg har snydt dig ja\nog skammet mig\nog stjålet af din kærlighed\ndu ved besked.\nåh ja\nåh ja\nwowwa og bababilåh\n\nfor du er stadigvæk akkurat lige så smuk\nsom allerførste gang da du kyssede mig\nså inderligt\nså inderligt.\n\nTror du vi ska følges ad\ntil livet det er slut\nåh det håber jeg\nja jeg gør ja jeg gør.\nSå kvinde kom og drøm med mig\ni den lange nat\nnår stjernerne de funkler\nog blinker som besat.\n\nNej, bliv ikke bange\nfor deres sange.\nHold bare fast i mig\nnår de fortæller dig\nat der er tusinde mil\nimellem dig og mig.\n\nNej nej\nåh tro det ej wauwa og bababilåh\n\nfor du er stadigvæk akkurat lige så smuk\nsom allerførste gang da du kyssede mig\nså inderligt\nså inderligt."
  },
  {
    "id": "31",
    "title": "Jutlandia",
    "key": "A",
    "bpm": 125,
    "artist": "Kim Larsen",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "Det var i 1949 eller cirka der omkring\nDa der var krig i Korea\nSkibet hed Jutlandia, og det kom vidt omkring\nFor der var krig i Korea\n\nUdstyret fra kælder til sal\nSom et flydende hospital\n\nNår drengene de skal i krig sejler kvinderne forbi\nPå de røde kors malede skibe\nOg Lillili Marlen synger\nAuf Wiedersehn\nNår de falder på stribe\n\nKanonerne spiller første violin\nCome on soldier\nSyng med på melodien\n\n(Mellemspil)\n\nHun sejler gennem natten, med alle sine børn\nLevende og døde\nHvid som en jomfru\nOg tapper som en ørn\nGår hun krigen i møde\n\nSygeplejersker på 16 år\nTilser soldaternes sår"
  },
  {
    "id": "32",
    "title": "Nu Hvor Du har Brændt mig af",
    "key": "D",
    "bpm": 159,
    "artist": "Thomas Helmig",
    "categories": [
      "Dansk",
      "Syng med"
    ]
  },
  {
    "id": "33",
    "title": "Tarzan Mama Mia",
    "key": "C",
    "bpm": 134,
    "artist": "Kim Larsen",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "Sammen ku' vi lægge verden ned\nAh ah, og hele universet med\n\nVi ku' bygge Babelstårnet lige så højt som op til himmelen\nSejle rundt i satellitter ude midt i stjernevrimmelen\n\n(guitar ting)\n\nVi ku' flyve som Pegasusser under fremmede stjernetegn\nDrikke mælkebøttesjusser i tavernerne på Mælkevejen\n\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**\n\nSammen, sammen ku' vi finde fred\nÅh-åh, lykke og lidt kærlighed\nAh, vi ku' sætte sejl og sejle sammen ud i evigheden\nMen vi er slet ikke sammen, det er det, der er det store problem\n\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**\n\n**Ah, wee, bi-bi-di-balaja**\n**Ah, wee, bi-bi-di-balaja**\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**\n**Åh, Mamma Mia, Tarzan Mamma Mia**\n**Åh-åh-åh, Mamma Mia**"
  },
  {
    "id": "34",
    "title": "All My Love",
    "key": "E",
    "bpm": 129,
    "artist": "Rocazino",
    "categories": [
      "Dansk",
      "Syng med"
    ]
  },
  {
    "id": "35",
    "title": "Du ligner Din Mor",
    "key": "E",
    "bpm": 107,
    "artist": "Benjamin Hav",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "**Jeg vil' lig' kom' forbi\nOg sig' at baby, du har den (Baby du har den)\nDu har hele pakken (Uh-uh)\nSmilet er stort\nLivet gik to små skridt\nOg du blev flotter' med årene (Flotter' med årene)\nSå kommer tårene (Uh-uh)\nDu ligner din mor**\n\nJeg tænker på årene, de var sgu korte\nDu havd' en drøm, lad os se, om du når det\nHård som en dør så de kalder ham Dorte\nDu' blevet gammel, men du' jo bedårende\nJeg tænker bare: \"Sku' vi lege lidt?\nDu og jeg, løbe ned ad den forbudte vej? You decide\nEr vi tørre? Gu' vi ej, vi' ude i regnen\nTrist liv, det blir' uden mig, goodbye\nFolk holder fest for dig bare fordi, du er 'The One'\nSå god danser' folk har fortrudt, at de kom\nLister ind på gulvet selvom klubben er tom\nMed dine små hjemmesutter' i hånden\nBaby, vi hører J.Lo from the Block gør der' sjæl på\nFolk de' sure, er du okay bro?\nVi' alle ensomme, du ikk' den eneste\nBaby, baby, jeg ka' se det\n\n**Jeg vil' lig' kom' forbi…**\n\nJeg tænker på dig mor, du' sgu en flot mor\nJeg sagde, \"Tak\", jeg synes, det' et godt ord\nDu har lavet grimme ting, det har jeg ogs' gjort\nEn lille blå mand banker på, det' ikk' Postnord\nDet' lillebitte mig Mommy, hun sagde: \"Hej Sonny –\nDer dufter lidt af Johnny Madsen, er det dig Johnny?\"\nJeg' et godt menneske, find din egen hobby\nDet en kold werden, jeg' bare en dreng mommy\n\n**Jeg vil' lig' kom' forbi…**"
  },
  {
    "id": "36",
    "title": "Blame It On The Boogie",
    "key": "Bb",
    "bpm": 109,
    "artist": "The Jacksons",
    "categories": [
      "Disco",
      "Syng med"
    ],
    "lyrics": "My baby's always dancin'\nAnd it wouldn't be a bad thing\nBut I don't get no lovin'\nAnd that's no lie\nWe spent the night in Frisco\nAt every kind of disco\nFrom that night I kissed our love goodbye\n\n**Don't blame it on the sunshine...**\n\nThat nasty boogie bugs me\nBut somehow it has drugged me\nSpellbound rhythm gets me on my feet\nI've changed my life completely\nI've seen the lightning leave me\nMy baby just can't take her eyes off me\n\n**Don't blame it on the sunshine...**\n\n*I just can't, I just can't*\n*I just can't control my feet...*\n\n**Sunshine**\n\n**Don't blame it on the moonlight...**\n\nintro\n\nThis magic music grooves me\nThat dirty rhythm moves me\nThe devil's gotten to me through this dance\nI'm full of funky fever\nA fire burns inside me\nBoogie's got me in a super trance\n\n**Don't blame it on the sunshine...**\n\n(Sunshine)-(Moonlight)-(Good times)-(Boogie)\n\nBlame it on yourself (sunshine)\nAin't nobody's fault (moonlight)\nBut yours and that boogie\nDancing all night long"
  },
  {
    "id": "37",
    "title": "Signed Sealed Delivered I am Yours",
    "key": "E",
    "bpm": 115,
    "artist": "Stevie Wonder",
    "categories": [
      "Pop",
      "Disco"
    ],
    "lyrics": "**Like** a fool I went and stayed too long\nNow I'm wondering if your love's still strong\nOoh baby\nHere I am, signed, sealed delivered I'm yours\n\n**Then** that time I went and said good-bye\nNow I'm back and not ashamed to cry\nOoh baby\nHere I am, signed, sealed delivered\nI'm yours\n\nHere I am baby\nOh, you've got the future in your hand\n(Signed, sealed delivered, I'm yours)\nI've done a lot of foolish things\nThat I really didn't mean\nHey, hey, yea, yea, didn't I, oh baby\n\n**Seen** a lot of things in this old world\nWhen I touched them they did nothing, girl\nOoh baby\nHere I am, signed sealed delivered\nI'm yours, oh I'm yours\n\n**Oo-wee** babe you set my soul on fire\nThat's why I know you are my only desire\nOoh baby\nHere I am, signed, sealed delivered\nI'm yours\n\nHere I am baby\nOh, you've got the future in your hand\n(Signed, sealed delivered, I'm yours)\nHere I am baby\nOh, you've got the future in your hand\n(Signed, sealed delivered, I'm yours)\nI've done a lot of foolish things"
  },
  {
    "id": "38",
    "title": "Flowers",
    "key": "Gm",
    "bpm": 118,
    "artist": "Miley Cyrus",
    "categories": [
      "Pop"
    ],
    "lyrics": "We were good, we were gold\nKinda dream that can't be sold\nWe were right 'til we weren't\nBuilt a home and watched it burn\n\nMm, I didn't wanna leave you\nI didn't wanna lie\nStarted to cry, but then remembered I\n\n**I can buy myself flowers**\n**Write my name in the sand**\n**Talk to myself for hours**\n**Say things you don't understand**\n**I can take myself dancing**\n**And I can hold my own hand**\n**Yeah, I can love me better than you can**\n\nCan love me better\nI can love me better, baby\nCan love me better\nI can love me better, baby\n\nPaint my nails cherry red\nMatch the roses that you left\nNo remorse, no regret\nI forgive every word you said\n\nOoh, I didn't wanna leave you, baby...\n\n**I can buy myself flowers...**\n\nCan love me better..\n\nNED!\n\nI didn't wanna leave you...\n\n**I can buy myself flowers (oh)...**\n\nobs!\n\nYeah, I can love me better than\nYeah, I can love me better than you can\n\nCan love me better..."
  },
  {
    "id": "39",
    "title": "Love Yourself",
    "key": "E",
    "bpm": 100,
    "artist": "Justin Bieber",
    "categories": [
      "Pop"
    ],
    "lyrics": "For all the times that you rain on my parade\nAnd all the clubs you get in using my name\nYou think you broke my heart, oh, girl for goodness' sake\nYou think I'm crying on my own. Well, I ain't\n\nAnd I didn't wanna write a song\n'Cause I didn't want anyone thinking I still care. I don't,\nBut you still hit my phone up\nAnd, baby, I be movin' on\nAnd I think you should be somethin' I don't wanna hold back,\nMaybe you should know that\n\n**My mama don't like you and she likes everyone**\n**And I never like to admit that I was wrong**\n**And I've been so caught up in my job,**\n**Didn't see what's going on**\n**But now I know,**\n**I'm better sleeping on my own**\n\n**'Cause if you like the way you look that much**\n**Oh, baby, you should go and love yourself**\n**And if you think that I'm still holdin' on to somethin'**\n**You should go and love yourself**\n\nAnd when you told me that you hated my friends\nThe only problem was with you and not them\nAnd every time you told me my opinion was wrong\nAnd tried to make me forget where I came from\n\nAnd I didn't wanna write a song\n'Cause I didn't want anyone thinking I still care. I don't,\nBut you still hit my phone up\nAnd, baby, I be movin' on\nAnd I think you should be somethin' I don't wanna hold back,\nMaybe you should know that\n\n**My mama don't like you and she likes everyone...**\n\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think that I'm still holdin' on to somethin'\nYou should go and love yourself\n\nFor all the times that you made me feel small\nI fell in love. Now I feel nothin' at all\nAnd never felt so low when I was vulnerable\nWas I a fool to let you break down my walls?\n\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think that I'm still holdin' on to somethin'\nYou should go and love yourself\n\n'Cause if you like the way you look that much\nOh, baby, you should go and love yourself\nAnd if you think (you think) that I'm (that I'm)\nstill holdin' on (holdin' on) to somethin'\nYou should go and love yourself"
  },
  {
    "id": "40",
    "title": "Cant Feel My Face",
    "key": "Am",
    "bpm": 171,
    "artist": "The Weeknd",
    "categories": [
      "Pop"
    ],
    "lyrics": "And I know she'll be the death of me\nAt least, we'll both be numb\nAnd she'll always get the best of me\nThe worst is yet to come\nBut at least, we'll both be beautiful and stay forever young\nThis I know, yeah, this I know\n\n*She told me, \"Don't worry about it\"*\n*She told me, \"Don't worry no more\"*\n*We both know we can't go without it*\n*She told me, \"You'll never be alone\", oh, oh, woo*\n\n**I can't feel my face when I'm with you**\n**But I love it, but I love it, oh**\n**I can't feel my face when I'm with you**\n**But I love it, but I love it, oh**\n\nAnd I know she'll be the death of me\nAt least we'll both be numb\nAnd she'll always get the best of me\nThe worst is yet to come\nAll the misery was necessary when we're deep in love\nThis I know (This I know), yeah, girl, I know\n\n*She told me, \"Don't worry about it\"*\n*She told me, \"Don't worry no more\"*\n*We both know we can't go without it*\n*She told me, \"You'll never be alone\", oh, oh, woo*\n\n**I can't feel my face when I'm with you...**\n\n**I can't feel my face when I'm with you, but I love it, but I love it...**\n\nBASS\n\n*She told me, \"Don't worry about it\"*\n*She told me, \"Don't worry no more\"*\n*We both know we can't go without it (Can't go)*\n*She told me, \"You'll never be alone\", oh, oh, woo*\n\n**I can't feel my face when I'm with you...**\n\n**I can't feel my face when I'm with you, but I love it, but I love it, oh...**"
  },
  {
    "id": "41",
    "title": "Crazy",
    "key": "Gm",
    "bpm": 112,
    "artist": "Gnarls Barkley",
    "categories": [
      "Pop"
    ],
    "lyrics": "I remember when, I remember\nI remember when I lost my mind\nThere was something so pleasant about that place\nEven your emotions have an echo in so much space\n\nAnd when you're out there without care\nYeah, I was out of touch\nBut it wasn't because I didn't know enough\nI just knew too much\n\n**Does that make me crazy?**\n**Does that make me crazy?**\n**Does that make me crazy?**\n**Possibly**\n\nAnd I hope that you are\nHaving the time of your life\nBut think twice\nThat's my only advice\n\nCome on now, who do you\nWho do you, who do you, who do you think you are?\nHa ha ha, bless your soul\nYou really think you're in control?\n\n**Well, I think you're crazy**\n**I think you're crazy**\n**I think you're crazy**\n**Just like me**\n\nMy heroes had the heart\nTo lose their lives out on a limb\nAnd all I remember\nIs thinking, I want to be like them\n\nEver since I was little\nEver since I was little\nIt looked like fun\nAnd it's no coincidence I've come\nAnd I can die when I'm done\n\n**But maybe I'm crazy...**"
  },
  {
    "id": "42",
    "title": "To Mennesker På En Strand",
    "key": "G",
    "bpm": 155,
    "artist": "John Mogensen",
    "categories": [
      "Dansk"
    ],
    "lyrics": "**To mennesker på en strand**\n\n**To hjerter i brand**\n\n**Sol, blæst, sand og vand**\n\n**En kvinde og en mand**\n\n**Hun rækker ham sin hånd**\n\n**Han løsner et bånd**\n\n**Hun si'r blufærdigt, \"nej\"**\n\n**Den gode gamle leg**\n\nFor det' sommer, solen står på himlen, livet er herligt\nDe bare løber, leger og slår smut - hva' de nu finder på\nMen pludselig standser det hele et sekund - der er sket noget særligt\nDe står og ser på hinanden og begynder så småt at forstå\n\n**To mennesker på en strand**\n\n**To hjerter i brand**\n\n**Sol, blæst, sand og vand**\n\n**En kvinde og en mand**\n\nEn dejlig gryde i toppen af en klit, hvor de lægger sig sammen\nEn skøn oase for to milevidt fra den nærmeste stad\nOg der' ingen at se - det er jo bare at puste til flammen\nNu er der intet på denne jord, der magter at skille dem ad\n\n**To mennesker på en strand**\n\n**To hjerter i brand**\n\n**Sol, blæst, sand og vand**\n\n**En kvinde og en mand**"
  },
  {
    "id": "43",
    "title": "Vilde Kaniner",
    "key": "Em",
    "bpm": 88,
    "artist": "Gnags",
    "categories": [
      "Dansk",
      "Rock"
    ]
  },
  {
    "id": "44",
    "title": "Sultans Of Swing",
    "key": "Dm",
    "bpm": 145,
    "artist": "Dire Straits",
    "categories": [
      "Rock"
    ],
    "lyrics": "You get a shiver in the dark\nIt's raining in the park but meantime\nSouth of the river you stop and you hold everything\nA band is blowing Dixie double four time\nYou feel alright when you hear that music ring\n\nYou step inside but you don't see too many faces\nComing in out of the rain to hear the jazz go down\nToo much competition too many other places\nBut not too many horns can make that sound\n\nWay on downsouth way on downsouth London town\n\nYou check out Guitar George he knows all the chords\nMind he's strictly rhythm he doesn't want to make it cry or sing\nAnd an old guitar is all he can afford\nWhen he gets up under the lights to play his thing\n\nAnd Harry doesn't mind if he doesn't make the scene\nHe's got a daytime job he's doing alright\nHe can play honky tonk just like anything\nSaving it up for Friday night\nWith the Sultans with the Sultans of Swing\n\nAnd a crowd of young boys they're fooling around in the corner\nDrunk and dressed in their best brown baggies and their platform\nsoles\nThe don't give a damn about any trumpet playing band\nIt ain't what they call rock and roll\nAnd the Sultans played Creole\n\nTEMA- SOLO VERS - TEMA\n\nAnd then the man he steps right up to the microphone\nAnd says at last just as the time bell rings\n'Thank you goodnight now it's time to go home'\nand he makes it fast whith one more thing\n'We are the Sultans of Swing'\n\nTEMA-SOLO"
  },
  {
    "id": "45",
    "title": "September",
    "key": "A",
    "bpm": 126,
    "artist": "Earth Wind & Fire",
    "categories": [
      "Disco"
    ],
    "lyrics": "Do you remember the\n21st night of September?\nLove was changing the minds of pretenders\nWhile chasing the clouds away\n\nOur hearts were ringing\nIn the key that our souls were singing.\nAs we danced in the night,\nRemember how the stars stole the night away\n\n**Ba de ya - say do you remember**\n**Ba de ya - dancing in September**\n**Ba de ya - never was a cloudy day**\n\n*Ba duda, ba duda, ba duda, badu*\n*Ba duda, badu, ba duda, badu*\n*Ba duda, badu, ba duda*\n\nMy thoughts are with you\nHolding hands with your heart to see you\nOnly blue talk and love,\nRemember how we knew love was here to stay\n\nNow December found the love we shared in September.\nOnly blue talk and love,\nRemember the true love we share today\n\n**Ba de ya - say do you remember**\n**Ba de ya - dancing in September**\n**Ba de ya - never was a cloudy day**\n\n**There was a**\n**Ba de ya - say do you remember**\n**Ba de ya - dancing in September**\n**Ba de ya - golden dreams were shiny days**\n\nThe bell was ringing, aha\nOur souls were singing\nDo you remember\nNever a cloudy day"
  },
  {
    "id": "46",
    "title": "Satisfaction",
    "key": "E",
    "bpm": 133,
    "artist": "Rolling Stones",
    "categories": [
      "Rock",
      "Hård Rock"
    ],
    "lyrics": "**I can't get no satisfaction**\n**I can't get no satisfaction**\n**'Cause I try and I try and I try and I try**\n**I can't get no, I can't get no**\n\nWhen I'm drivin' in my car\nAnd that man comes on the radio\nHe's tellin' me more and more\nAbout some useless information\nSupposed to fire my imagination\nI can't get no, oh no, no, no\nHey hey hey, that's what I say\n\n**I can't get no satisfaction...**\n\nWhen I'm watchin' my T.V.\nAnd that man comes on to tell me\nHow white my shirts can be\nBut he can't be a man 'cause he doesn't smoke\nThe same cigarrettes as me\nI can't get no, oh no, no, no\nHey hey hey, that's what I say\n\n**I can't get no satisfaction, I can´t get no girl reaction...**\n\nWhen I'm ridin' round the world\nAnd I'm doin' this and I'm signin' that\nAnd I'm tryin' to make some girl\nWho tells me baby better come back later next week\n'Cause you see I'm on a losing streak\nI can't get no, oh no, no, no\nHey hey hey, that's what I say\n\n**I can't get no, I can't get no...**"
  },
  {
    "id": "47",
    "title": "Feel It Still",
    "key": "C#m",
    "bpm": 90,
    "artist": "Portugal. The Man",
    "categories": [
      "Pop"
    ],
    "lyrics": "Can't keep my hands off myself\nThink I'll dust 'em off, put 'em back up on the shelf\nIn case my little baby girl is in need\nAm I coming out of left field?\n\n**Ooh woo, I'm a rebel just for kicks, now**\n**I been feeling it since 1966, now**\n**Might be over now, but I feel it still**\n**Ooh woo, I'm a rebel just for kicks, now**\n**Let me kick it like it's 1986, now**\n**Might be over now, but I feel it still**\n\nGot another mouth to feed\nLeave her with a baby sitter, mama, call the grave digger\nGone with the fallen leaves\nAm I coming out of left field?\n\n**Ooh woo, I'm a rebel just for kicks, now...**\n**Might've had your fill, but you feel it still...**\n\n*We could fight a war for peace*\n*Give in to that easy living*\n*Goodbye to my hopes and dreams*\n*Stop flipping for my enemies*\n*We could wait until the walls come down*\n*It's time to give a little to the*\n*Kids in the middle, but oh 'til it falls*\n*Won't bother me*\n\n*Is it coming?*\n*Is it coming?*\n*Is it coming?*\n*Is it coming?*\n*Is it coming?*\n*Is it coming back?*\n\n**Ooh woo, I'm a rebel just for kicks, yeah**\n**Your love is an abyss for my heart to eclipse, now**\n**Might be over now, but I feel it still**\n\n**Ooh woo, I'm a rebel just for kicks, now...**"
  },
  {
    "id": "48",
    "title": "Saw her standing there",
    "key": "E",
    "bpm": 180,
    "artist": "The Beatles",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "49",
    "title": "Lets Dance",
    "key": "Bbm",
    "bpm": 118,
    "artist": "David Bowie",
    "categories": [
      "Pop",
      "Disco"
    ],
    "lyrics": "Let's dance\nPut on your red shoes and dance the blues\nLet's dance\nTo the song they're playin' on the radio\nLet's sway\nWhile color lights up your face\nLet's sway\nSway through the crowd to an empty space\n\n**If you say run**\n**I'll run with you**\n**And if you say hide**\n**We'll hide**\n**Because my love for you**\n**Would break my heart in two**\n**If you should fall into my arms**\n**And tremble like a flower**\n\nLet's dance\nLet's dance\nFor fear your grace should fall\nLet's dance\nFor fear tonight is all\nLet's sway\nYou could look into my eyes\nLet's sway\nUnder the moonlight, this serious moonlight\n\n**And if you say run**\n**I'll run with you**\n**And if you say hide**\n**We'll hide**\n**Because my love for you**\n**Would break my heart in two**\n**If you should fall into my arms**\n**And tremble like a flower**\n\nLet's dance\nPut on your red shoes and dance the blues\nLet's sway\nUnder the moonlight, this serious moonlight\nLet's dance\nLet's dance\nLet's dance, dance, dance"
  },
  {
    "id": "50",
    "title": "Money For Nothing",
    "key": "Gm",
    "bpm": 132,
    "artist": "Dire Straits",
    "categories": [
      "Rock"
    ],
    "lyrics": "Now look at them yo-yo's that's the way you do it\nYou play the guitar on the MTV\nThat ain't workin' that's the way you do it\nMoney for nothin' and chicks for free\nNow that ain't workin' that's the way you do it\nLemme tell ya them guys ain't dumb\nMaybe get a blister on your little finger\nMaybe get a blister on your thumb\n\n**We gotta install microwave ovens Custom kitchen deliveries**\n\n**We gotta move these refrigerators We gotta move these colour TV's**\n\nSee the little faggot with the earring and the makeup\nYeah buddy that's his own hair\nThat little faggot got his own jet airplane\nThat little faggot he's a millionaire\n\n**We gotta install microwave ovens...**\n\n*TEMA*\n\n**We gotta install microwave ovens...**\n\nI shoulda learned to play the guitar\nI shoulda learned to play them drums\nLook at that mama, she got it stickin' in the camera\nMan we could have some fun\nAnd he's up there, what's that? Hawaiian noises?\nBangin' on the bongoes like a chimpanzee\nThat ain't workin' that's the way you do it\nGet your money for nothin' get your chicks for free\n\n**We gotta install microwave ovens...**\n\n*TEMA*\n\nNow that ain't workin' that's the way you do it\nYou play the guitar on the MTV\nThat ain't workin' that's the way you do it\nMoney for nothin' and your chicks for free\nMoney for nothin' and chicks for free"
  },
  {
    "id": "51",
    "title": "As It Was",
    "key": "A start D",
    "bpm": 174,
    "artist": "Harry Styles",
    "categories": [
      "Pop"
    ],
    "lyrics": "Holdin' me back\nGravity's holdin' me back\nI want you to hold out the palm of your hand\nWhy don't we leave it at that?\nNothin' to say\nWhen everything gets in the way\nSeems you cannot be replaced\nAnd I'm the one who will stay, oh\n\nPOWER\n\n**In this world, it's just us**\n**You know it's not the same as it was**\n**In this world, it's just us**\n**You know it's not the same as it was**\n**As it was, as it was**\n**You know it's not the same**\n\nAnswer the phone\n\"Harry, you're no good alone\nWhy are you sittin' at home on the floor?\nWhat kind of pills are you on?\"\nRingin' the bell\nAnd nobody's comin' to help\nYour daddy lives by himself\nHe just wants to know that you're well, oh\n\n**In this world, it's just us**\n**You know it's not the same as it was**\n**In this world, it's just us**\n**You know it's not the same as it was**\n**As it was, as it was**\n**You know it's not the same**\n\nGo home, get ahead, light-speed internet\nI don't wanna talk about the way that it was\nLeave America, two kids follow her\nI don't wanna talk about who's doin' it first\n\n**As it was**\n**You know it's not the same as it was**\n**As it was, as it was**"
  },
  {
    "id": "52",
    "title": "Lay Down Sally",
    "key": "A",
    "bpm": 127,
    "artist": "Eric Clapton",
    "categories": [
      "Rock"
    ],
    "lyrics": "There is nothing that is wrong\nIn wanting you to stay here with me.\nI know you've got somewhere to go,\nBut won't you make yourself at home and stay with me?\nAnd don't you ever leave.\n\n**Lay down, Sally, and rest you in my arms.**\n**Don't you think you want someone to talk to?**\n**Lay down, Sally, no need to leave so soon.**\n**I've been trying all night long just to talk to you.**\n\nThe sun ain't nearly on the rise\nAnd we still got the moon and stars above.\nUnderneath the velvet skies,\nLove is all that matters. Won't you stay with me?\nAnd don't you ever leave.\n\n**Lay down, Sally, and rest you in my arms.**\n**Don't you think you want someone to talk to?**\n**Lay down, Sally, no need to leave so soon.**\n**I've been trying all night long just to talk to you.**\n\nI long to see the morning light\nColoring your face so dreamingly.\nSo don't you go and say goodbye,\nYou can lay your worries down and stay with me.\nAnd don't you ever leave.\n\n**Lay down, Sally, and rest you in my arms.**\n**Don't you think you want someone to talk to?**\n**Lay down, Sally, no need to leave so soon.**\n**I've been trying all night long just to talk to you.**"
  },
  {
    "id": "53",
    "title": "Get Lucky",
    "key": "A",
    "bpm": 116,
    "artist": "Daft Punk",
    "categories": [
      "Disco",
      "Pop"
    ],
    "lyrics": "Like the legend of the phoenix\nAll ends with beginnings\nWhat keeps the planet spinning (uh)\nThe force of love beginning\n\nWe've come too far to give up who we are\nSo let's raise the bar and our cups to the stars\n\n**She's up all night 'til the sun**\n**I'm up all night to get some**\n**She's up all night for good fun**\n**I'm up all night to get lucky**\n\n**We're up all night 'til the sun**\n**We're up all night to get some**\n**We're up all night for good fun**\n**We're up all night to get lucky x 5**\n\nThe present has no ribbon\nYour gift keeps on giving,\nWhat is this I'm feeling?\nIf you wanna leave I'm ready (ah)\n\nWe've come too far to give up who we are\nSo let's raise the bar and our cups to the stars\n\n**She's up all night 'til the sun**\n**I'm up all night to get some**\n**She's up all night for good fun**\n**I'm up all night to get lucky**\n\n**We're up all night 'til the sun**\n**We're up all night to get some**\n**We're up all night for good fun**\n**We're up all night to get lucky x 5**\n\n~~We're up all night to get~~ ~~solo~~\n\nWe've come too far to give up who we are\nSo let's raise the bar and our cups to the stars\n**She's up all night 'til the sun...**"
  },
  {
    "id": "54",
    "title": "Muchi Bar",
    "key": "B",
    "bpm": 137,
    "artist": "Tobias Rahim",
    "categories": [
      "Dansk",
      "Røvballe"
    ]
  },
  {
    "id": "55",
    "title": "Blurred Lines",
    "key": "G",
    "bpm": 120,
    "artist": "Robin Thicke",
    "categories": [
      "Pop",
      "Disco"
    ],
    "lyrics": "Everybody get up\nEverybody get up\nHey, hey, hey...\n\nIf you can't hear what I'm trying to say\nIf you can't read from the same page\nMaybe I'm going deaf, maybe I'm going blind\nMaybe I'm out of my mind\n\n*OK now he was close, tried to domesticate you*\n*But you're an animal, baby it's in your nature*\n*Just let me liberate you*\n*You don't need no papers*\n*That man is not your maker*\n\n**And that's why I'm gon' take a good girl**\n**I know you want it...**\n**You're a good girl**\n**Can't let it get passed me**\n**You're far from plastic**\n**Talk about gettin blasted**\n**I hate these blurred lines**\n**I know you want it...**\n**But you're a good girl**\n**The way you grab me**\n**Must wanna get nasty**\n**Go ahead, get at me**\n\nWhat do they make dreams for\nWhen you got them jeans on\nWhat do we need steam for\nYou the hottest bitch in this place\nI feel so lucky\nYou wanna hug me\nWhat rhymes with hug me?\n\n*OK now he was close, tried to domesticate you*\n*But you're an animal, baby it's in your nature*\n*Just let me liberate you*\n*You don't need no papers*\n*Than man is not your maker*\n\n**And that's why I'm gon' take a good girl**\n\nI know you want it...\nYou're a good girl\nCan't let it get passed me\nYou're far from plastic\nTalk about gettin blasted\nI hate these blurred lines\nI know you want it...\nBut you're a good girl\nThe way you grab me\nMust wanna get nasty\nGo ahead, get at me\n\nSOLO (RAP)\n\nShake the vibe, get down, get up\nDo it like it hurt, like it hurt\nWhat you don't like work\n\nBaby can you breathe? I got this from Jamaica\nIt always works for me Dakota to Decatur, uh huh\n\nNo more pretending\nCause now you winning\nHere's our beginning\n\nI always wanted a good girl\nI know you want it...\nYou're a good girl\nCan't let it get passed me\nYou're far from plastic\nTalk about gettin blasted\nI hate these blurred lines\nI know you want it...\nBut you're a good girl\nThe way you grab me\nMust wanna get nasty\nGo ahead, get at me\n\nEverybody get up\nEverybody get up\nHey, hey, hey...\n\nOne thing I ask of you\nLemme be the one you back that ass up to\nFrom Malibu to Paris boo\nHad a bitch, but she ain't bad as you\nSo, hit me up when you pass through\nI'll give you something big enough to tear your ass in two\nSwag on 'em even when you dress casual\nI mean, it's almost unbearable\nIn a hundred years not dare would I\nPull a Pharcyde, let you pass me by\nNothin' like your last guy, he too square for you\nHe don't smack that ass and pull your hair like that\nSo I'm just watching and waitin'\nFor you to salute the true big pimpin'\nNot many women can refuse this pimping\nI'm a nice guy, but don't get confused, this pimpin'"
  },
  {
    "id": "56",
    "title": "What a Wonderful World",
    "key": "F",
    "bpm": 69,
    "artist": "Louis Armstrong",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "57",
    "title": "Dont Know Why",
    "key": "C",
    "bpm": 96,
    "artist": "Norah Jones",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "58",
    "title": "Aint No Sunshine",
    "key": "Am",
    "bpm": 97,
    "artist": "Bill Withers",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "59",
    "title": "With Or Without You",
    "key": "D",
    "bpm": 115,
    "artist": "U2",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "60",
    "title": "Help The Poor",
    "key": "Dm",
    "bpm": 100,
    "artist": "Eric Clapton & B.B. King",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "61",
    "title": "I Shot The Sheriff",
    "key": "Gm",
    "bpm": 100,
    "artist": "Bob Marley",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "62",
    "title": "Lovely Day",
    "key": "E",
    "bpm": 102,
    "artist": "Bill Withers",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "63",
    "title": "Just The Way You Are",
    "key": "D",
    "bpm": 134,
    "artist": "Billy Joel",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "64",
    "title": "Lets Stay Together",
    "key": "F",
    "bpm": 109,
    "artist": "Bill Withers",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "65",
    "title": "I Cant Make You Love Me",
    "key": "G - start C",
    "bpm": 96,
    "artist": "Bonnie Raitt",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "66",
    "title": "Your Body Is A Wonderland",
    "key": "E",
    "bpm": 77,
    "artist": "John Mayer",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "67",
    "title": "Call Me The Breeze",
    "key": "F#",
    "bpm": 110,
    "artist": "J.J. Cale",
    "categories": [
      "Rock"
    ],
    "lyrics": "They call me the breeze\nI keep blowing down the road\nThey call me the breeze\nI keep blowing down the road\n\n**I ain't got me nobody**\n**I ain't carrying me no load**\n\nAin't no change in the weather\nAin't no change in me\nAin't no change in the weather\nAin't no change in me\n\n**I ain't hidin' from nobody**\n**Ain't nobody hidin' from me**\n\nI got that green light, babe\nI got to keep moving on\nI got that green light, babe\nI got to keep moving on\n\n**I might go out to California**\n**Might go down to Georgia**\n**Might stay home**"
  },
  {
    "id": "68",
    "title": "On Broadway",
    "key": "G",
    "bpm": 114,
    "artist": "George Benson",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "69",
    "title": "Over my shoulder",
    "key": "D",
    "bpm": 100,
    "artist": "Mike and The Mechanics",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "70",
    "title": "Faith",
    "key": "H",
    "bpm": 96,
    "artist": "George Michael",
    "categories": [
      "Pop",
      "80'er"
    ]
  },
  {
    "id": "71",
    "title": "Tip of my tongue",
    "key": "H",
    "bpm": 105,
    "artist": "Diesel",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "72",
    "title": "So lonely",
    "key": "E",
    "bpm": 156,
    "artist": "Police",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "73",
    "title": "Walking on sunshine",
    "key": "F",
    "bpm": 110,
    "artist": "Katrina and the Waves",
    "categories": [
      "Pop",
      "80'er"
    ],
    "lyrics": "**I used to think maybe you love me, now baby I'm sure**\n**And I just can't wait till the day when you knock on my door**\n**Now everytime I go for the mailbox gotta hold myself down**\n**Cause I just can't wait till you write me you're comin' around**\n\n(Chorus)\n\n**Now I'm walking on sunshine, whoa oh**\n**Now I'm walking on sunshine, whoa oh**\n**Now I'm walking on sunshine, whoa oh**\n**And don't it feel good, hey, all right now**\n**And don't it feel good**\n\n**I used to think maybe you love me now I know that it's true**\n**And I don't wanna spend my whole life just a waitin' for you**\n**Now don't want you back for the weekend, not back for a day (no no)**\n**I said baby I just want you back and I want you to stay**\n\n(Chorus)\n\n**Walkin' On Sunshine Walkin' On Sunshine (yeah)**\n**I feel alive, I feel a love, I feel a love that's really real**\n**I feel alive, I feel a love**\n**I feel a love that's really real I'm on sunshine baby, oh**\n**Oh yeah, I'm on sunshine baby, oh**\n\n(Chorus)\n\n**I say it, I say it, I say it again, now**\n**And don't it feel good, hey, yeah now**\n**And don't it feel good**\n\n**Now don't it, don't it, don't it, don't it, don't it, don't it feel good**\n**I say it, I say it, I say it again, now**"
  },
  {
    "id": "74",
    "title": "Ahr der",
    "key": "E",
    "bpm": 95,
    "artist": "Mc Einar",
    "categories": [
      "Dansk",
      "Røvballe"
    ]
  },
  {
    "id": "75",
    "title": "Den jeg elsker",
    "key": "D",
    "bpm": 112,
    "artist": "Thomas Helmig og Søs Fenger",
    "categories": [
      "Dansk",
      "Pop"
    ]
  },
  {
    "id": "76",
    "title": "Long train running",
    "key": "Em",
    "bpm": 102,
    "artist": "The Doobie Brothers",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "77",
    "title": "Flying",
    "key": "D",
    "bpm": 104,
    "artist": "Nice Little Penguins",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "78",
    "title": "Breakfast at tiffanys",
    "key": "D",
    "bpm": 96,
    "artist": "Deep Blue Something",
    "categories": [
      "Pop",
      "90'er"
    ]
  },
  {
    "id": "79",
    "title": "Stupid man",
    "key": "F",
    "bpm": 125,
    "artist": "Thomas Helmig",
    "categories": [
      "Dansk",
      "Pop"
    ]
  },
  {
    "id": "80",
    "title": "Lady",
    "key": "Am",
    "bpm": 109,
    "artist": "Modjo",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "81",
    "title": "Help",
    "key": "A",
    "bpm": 96,
    "artist": "The Beatles",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "82",
    "title": "Lanternen",
    "key": "C/A",
    "bpm": 122,
    "artist": "TV2",
    "categories": [
      "Dansk",
      "Rock"
    ]
  },
  {
    "id": "83",
    "title": "Sing it Back",
    "key": "Em",
    "bpm": 123,
    "artist": "Moloko",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "84",
    "title": "Sunny",
    "key": "Em",
    "bpm": 110,
    "artist": "Bobby Hebb",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "85",
    "title": "Take on me",
    "key": "A",
    "bpm": 169,
    "artist": "Aha",
    "categories": [
      "Pop",
      "80'er"
    ]
  },
  {
    "id": "86",
    "title": "Gorgie Porgie",
    "key": "Em",
    "bpm": 126,
    "artist": "Toto",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "87",
    "title": "My girl",
    "key": "C",
    "bpm": 115,
    "artist": "The Temptations",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "88",
    "title": "Mrs Robinson",
    "key": "F#7/A",
    "bpm": 99,
    "artist": "Simon and Garfunkel",
    "categories": [
      "Pop",
      "Rock"
    ]
  },
  {
    "id": "89",
    "title": "De første kærester på månen",
    "key": "G",
    "bpm": 132,
    "artist": "TV2",
    "categories": [
      "Dansk",
      "Rock"
    ]
  },
  {
    "id": "90",
    "title": "Happy together",
    "key": "F#m",
    "bpm": 120,
    "artist": "The Turtles",
    "categories": [
      "Pop",
      "80'er"
    ]
  },
  {
    "id": "91",
    "title": "Walk on by",
    "key": "Em",
    "bpm": 128,
    "artist": "Dione Warwick",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "92",
    "title": "Dont worry be happy",
    "key": "C",
    "bpm": 100,
    "artist": "Bobby McFerrin",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "93",
    "title": "I feel for you",
    "key": "F#",
    "bpm": 118,
    "artist": "Prince",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "94",
    "title": "It wont be long",
    "key": "E",
    "bpm": 168,
    "artist": "The Beatles",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "95",
    "title": "Change the world",
    "key": "E",
    "bpm": 100,
    "artist": "Eric Clapton",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "96",
    "title": "I will survive",
    "key": "Dm",
    "bpm": 117,
    "artist": "Gloria Gaynor",
    "categories": [
      "Disco",
      "Pop"
    ]
  },
  {
    "id": "97",
    "title": "Walk of life",
    "key": "E",
    "bpm": 150,
    "artist": "Dire Straits",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "98",
    "title": "Midnight Hour",
    "key": "C",
    "bpm": 109,
    "artist": "Wilson Picket",
    "categories": [
      "Disco"
    ]
  },
  {
    "id": "99",
    "title": "The joker",
    "key": "F",
    "bpm": 104,
    "artist": "Steve Miller Band",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "100",
    "title": "I am still standing",
    "key": "A/Am",
    "bpm": 117,
    "artist": "Elton John",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "101",
    "title": "Ticket to ride",
    "key": "A",
    "bpm": 113,
    "artist": "The Beatles",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "102",
    "title": "It aint over till its over",
    "key": "C#",
    "bpm": 88,
    "artist": "Lenny Kravitz",
    "categories": [
      "Rock",
      "Hård Rock"
    ]
  },
  {
    "id": "103",
    "title": "1999",
    "key": "F",
    "bpm": 159,
    "artist": "Prince",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "104",
    "title": "I got a Woman",
    "key": "A",
    "bpm": 112,
    "artist": "Ray Charles",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "105",
    "title": "Start me up",
    "key": "F",
    "bpm": 118,
    "artist": "Rolling Stones",
    "categories": [
      "Rock",
      "Hård Rock"
    ]
  },
  {
    "id": "106",
    "title": "Master Blaster",
    "key": "Am",
    "bpm": 107,
    "artist": "Stevie Wonder",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "107",
    "title": "7 Years",
    "key": "Em",
    "bpm": 120,
    "artist": "Lucas Graham",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "108",
    "title": "Cake by the Ocean",
    "key": "Em",
    "bpm": 119,
    "artist": "DNCE",
    "categories": [
      "Pop",
      "Disco"
    ]
  },
  {
    "id": "109",
    "title": "Shape of you",
    "key": "C#m",
    "bpm": 96,
    "artist": "Ed Sheeran",
    "categories": [
      "Pop"
    ],
    "lyrics": "The club isn't the best place to find a lover\nSo the bar is where I go (mmmm)\nMe and my friends at the table doing shots\nDrinking fast and then we talk slow (mmmm)\nAnd you come over and start up a conversation with just me\nAnd trust me I'll give it a chance now\nTake my hand, stop\nPut Van The Man on the jukebox\nAnd then we start to dance\nAnd now I'm singing like\n\n*Girl, you know I want your love*\n*Your love was handmade for somebody like me*\n*Come on now, follow my lead*\n*I may be crazy, don't mind me*\n*Say, boy, let's not talk too much*\n*Grab on my waist and put that body on me*\n*Come on now, follow my lead*\n*Come, come on now, follow my lead (mmmm)*\n\n**I'm in love with the shape of you**\n**We push and pull like a magnet do**\n**Although my heart is falling too**\n**I'm in love with your body**\n**Last night you were in my room**\n**And now my bedsheets smell like you**\n**Every day discovering something brand new**\n**I'm in love with your body**\n**Oh I oh I oh I oh I**\n**I'm in love with your body**\n**Oh I oh I oh I oh I**\n**I'm in love with your body**\n**Oh I oh I oh I oh I**\n**I'm in love with your body**\n**Every day discovering something brand new**\n**I'm in love with the shape of you**\n\nOne week in we let the story begin\nWe're going out on our first date (mmmm)\nYou and me are thrifty\nSo go all you can eat\nFill up your bag and I fill up a plate\nWe talk for hours and hours about the sweet and the sour\nAnd how your family is doing okay (mmmm)\nAnd leave and get in a taxi, then kiss in the backseat\nTell the driver make the radio play\nAnd I'm singing like\n\n*Girl, you know I want your love...*\n\n**I'm in love with the shape of you...**\n\n*Come on, be my baby, come on... (x 8)*\n\nI'm in love with the shape of you..."
  },
  {
    "id": "110",
    "title": "Cream",
    "key": "Bb",
    "bpm": 102,
    "artist": "Prince",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "111",
    "title": "Cant stop the feeling",
    "key": "C",
    "bpm": 113,
    "artist": "Justin Timberlake",
    "categories": [
      "Pop"
    ],
    "lyrics": "I got this feeling inside my bones\nIt goes electric, wavey when I turn it on\nAll through my city, all through my home\nWe're flying up, no ceiling, when we in our zone\n\n*I got that sunshine in my pocket*\n*Got that good soul in my feet*\n*I feel that hot blood in my body when it drops, ooh*\n*I can't take my eyes up off it, moving so phenomenally*\n*Room on lock the way we rock it, so don't stop*\n\nAnd under the lights when everything goes\nNowhere to hide when I'm getting you close\nWhen we move, well, you already know\nSo just imagine, just imagine, just imagine\n\n**Nothing I can see but you when you dance, dance, dance**\n**Feeling good, good, creeping up on you**\n**So just dance, dance, dance, come on**\n**All those things I shouldn't do**\n**But you dance, dance, dance**\n**And ain't nobody leaving soon, so keep dancing**\n\n**I can't stop the feeling**\n**So just dance, dance, dance**\n**I can't stop the feeling**\n**So just dance, dance, dance, come on**\n\nOoh, it's something magical\nIt's in the air, it's in my blood, it's rushing on\nDon't need no reason, don't need control\nI fly so high, no ceiling, when I'm in my zone\n\n*'Cause I got that sunshine in my pocket...*\n\nAnd under the lights when everything goes...\n\n**Nothing I can see but you when you dance, dance, dance...**\n\n**I can't stop the feeling...**"
  },
  {
    "id": "112",
    "title": "Unchain my heart",
    "key": "Am",
    "bpm": 150,
    "artist": "Ray Charles",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "113",
    "title": "Rock with you",
    "key": "Dm",
    "bpm": 116,
    "artist": "Michael Jackson",
    "categories": [
      "Disco",
      "Pop"
    ],
    "lyrics": "Girl, close your eyes\nLet that rhythm get into you\nDon't try to fight it\nThere ain't nothing that you can do\n\nRelax your mind\nLay back and groove with mine\nYou gotta feel that heat\nAnd we can ride the boogie\nShare that beat of love\n\n**I wanna rock with you (all night)**\n**Dance you into day (sunlight)**\n**I wanna rock with you (all night)**\n**We're gonna rock the night away (rock, right)**\n\nOut on the floor\nThere ain't nobody there but us\nGirl, when you dance\nThere's a magic that must be love\n\nJust take it slow\n'Cause we got so far to go\nWhen you feel that heat\nAnd we're gonna ride the boogie\nShare that beat of love\n\n**I wanna rock with you (all night)**\n**Dance you into day (sunlight)**\n**I wanna rock with you (all night)**\n**We gon' rock the night away (rock, right)**\n\n*And when the groove is dead and gone (yeah)*\n*You know that love survives*\n*So we can rock forever, on*\n\nI wanna rock with you..."
  },
  {
    "id": "114",
    "title": "The Girl From Ipanema",
    "key": "F",
    "bpm": 130,
    "artist": "Jobim",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "115",
    "title": "Corcovado",
    "key": "Am",
    "bpm": 130,
    "artist": "Jobim",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "116",
    "title": "Fields Of Gold",
    "key": "C",
    "bpm": 104,
    "artist": "Sting",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "117",
    "title": "Shape Of My Heart",
    "key": "F#m",
    "bpm": 84,
    "artist": "Sting",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "118",
    "title": "Vem Vet",
    "key": "Am",
    "bpm": 95,
    "artist": "Lisa Ekdahl",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "119",
    "title": "Calling You",
    "key": "G",
    "bpm": 103,
    "artist": "Bagdad Cafe",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "120",
    "title": "Its Probably Me",
    "key": "Em",
    "bpm": 100,
    "artist": "Sting & Eric Clapton",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "121",
    "title": "Cocain",
    "key": "Em",
    "bpm": 100,
    "artist": "J.J. Cale",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "122",
    "title": "Fever",
    "key": "Cm",
    "bpm": 122,
    "artist": "Elvis",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "123",
    "title": "Fallen",
    "key": "E",
    "bpm": 112,
    "artist": "Lauren Wood",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "124",
    "title": "50 Ways To Leave Your Lover",
    "key": "Em",
    "bpm": 102,
    "artist": "Paul Simon",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "125",
    "title": "Ebony And Ivory",
    "key": "G/start D11",
    "bpm": 80,
    "artist": "Paul McCartney & Stevie Wonder",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "126",
    "title": "Dont Be Cruel",
    "key": "C",
    "bpm": 170,
    "artist": "Elvis",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "127",
    "title": "Careless Whisper",
    "key": "Dm",
    "bpm": 76,
    "artist": "Wham",
    "categories": [
      "Pop",
      "80'er"
    ]
  },
  {
    "id": "128",
    "title": "Father Figure",
    "key": "A",
    "bpm": 112,
    "artist": "George Michael",
    "categories": [
      "Pop",
      "80'er"
    ]
  },
  {
    "id": "129",
    "title": "Tears In Heaven",
    "key": "A",
    "bpm": 77,
    "artist": "Eric Clapton",
    "categories": [
      "Rock",
      "Pop"
    ]
  },
  {
    "id": "130",
    "title": "They Call Me The Breeze",
    "key": "F#",
    "bpm": 110,
    "artist": "J.J. Cale",
    "categories": [
      "Rock"
    ]
  },
  {
    "id": "131",
    "title": "Who Says",
    "key": "D",
    "bpm": 90,
    "artist": "John Mayer",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "132",
    "title": "You Can Call Me Al",
    "key": "F",
    "bpm": 120,
    "artist": "Paul Simon",
    "categories": [
      "Pop"
    ]
  },
  {
    "id": "133",
    "title": "Regndans",
    "key": "Gm",
    "artist": "Danseorkestret",
    "categories": [
      "Dansk",
      "90'er"
    ],
    "lyrics": "Sommersolen brænder på det tørre ørkensand\nIsabella ser mod himlen Isabella ser sit land\nLandet ligger tørt og stille venter på et tegn\nHvert et frø og hvert en plante venter kun på regn\n\n**Jeg tror du kan og vil og jeg ved**\n**Du kan danse jorden grøn til liv og kærlighed**\n**Dans dans så regnen falder ned**\n**Dans Isabella dans**\n\nBREAK\n\nFørst dråbe falder fra den første lille sky\nDu har danset længe nu du har danset for din by\nRegnen falder stille på din skulder og din kind\nJorden ligger tør i den varme ørkenvind\n\n**Jeg tror du kan og vil og jeg ved**\n**Du kan danse jorden grøn til liv og kærlighed**\n**Jeg tror du kan og vil og jeg ved**\n**Du kan danse regnen ned du kan danse fred**\n\n**Dans dans så regnen falder ned**\n**Dans Isabella dans BREAK**\n\nDans dans så regnen falder ned\nDans Isabella dans\nRegn...dans\nRegn...dans\nRegn...dans\n\nIsabella...Isabella,\nIsabella...Isabella,\nIsabella...Isabella,\nIsabella...Isabella,\nIsabella...Isabella,\n\nSe regnen falder\nSe regner falder (Isabella, Isabella)\n\nBREAK!",
    "bpm": 99
  },
  {
    "id": "134",
    "title": "Din Røde Kjole",
    "key": "G",
    "artist": "Thomas Helmig",
    "categories": [
      "Dansk"
    ],
    "lyrics": "(Intro)\n\n(Uhh uhh uhh)\n\nJeg slukker for mit fjernsyn\nDet spærrer for mit udsyn\nDer´ aldrig noget godt på\nJeg trænger til noget der er tæt på\n\nOg hvad kunne være bedre\nEnd at vende mig i stolen og kigge på dig\nPå dig - som du står der foran mig\n\n**Og du har din røde kjole på**\n**Og mit hjerte går i stå**\n**Jeg ved vi ind imellem er lige lovlig Hr. og Fru**\n**Men du har aldrig været smukkere end nu**\n\nHvad siger du til at danse\nSe om du kan få mig til at standse\nGiv mig bare en grund\nTil ikke at rocke med din husbond\n\nJa hvad kunne være bedre\nEnd at tænde for musikken og tage fat om dig\nOm dig - som du står der foran mig\n\n**Du har din røde kjole på**\n**Og mit hjerte går i stå**\n**Jeg ved vi ind i mellem er lige lovlig Hr. og Fru**\n**Men du har aldrig været smukkere end nu**\n\n(Intro) x 2\n\n(Uhh uhh uhh)\n\n**Du har din røde kjole på**\n**Og mit hjerte går i stå**\n**Jeg ved vi ind i mellem er lige lovlig Hr. og Fru**\n**Men du har aldrig været smukkere end nu**\n\n**Ja ja ja ja ja ja ja!!!**",
    "bpm": 125
  },
  {
    "id": "135",
    "title": "Wake Me Up",
    "key": "Bm",
    "artist": "Avicii",
    "categories": [
      "Pop"
    ],
    "lyrics": "Feeling my way through the darkness\nGuided by a beating heart\nI can't tell where the journey will end\nBut I know where to start\n\nThey tell me I'm too young to understand\nThey say I'm caught up in a dream\nWell life will pass me by if I don't open up my eyes\nWell that's fine by me\n\n[2x]\n\n**So wake me up when it's all over**\n**When I'm wiser and I'm older**\n**All this time I was finding myself**\n**And I didn't know I was lost**\n\nI tried carrying the weight of the world\nBut I only have two hands\nHope I get the chance to travel the world\nBut I don't have any plans\n\nWish that I could stay forever this young\nNot afraid to close my eyes\nLife's a game made for everyone\nAnd love is the prize\n\n[2x]\n\n**So wake me up when it's all over**\n**When I'm wiser and I'm older**\n**All this time I was finding myself**\n**And I didn't know I was lost**\n\nDidn't know I was lost\nI didn't know I was lost\nI didn't know I was lost\nI didn't know (didn't know, didn't know)",
    "bpm": 124
  },
  {
    "id": "136",
    "title": "Costa Del Sol",
    "key": "F",
    "artist": "C.V. Jørgensen",
    "categories": [
      "Dansk",
      "Rock"
    ],
    "lyrics": "Intro: || C7 | % | F | % | C7 | % | F | % ||\n\nC7 F\nNår solen den forsvinder fra de hjemlige himmelstrøg, ja så forsvinder jeg også\nC7 F\nSydpå til Spanien og mit luksus-eksil - For at te mig som en tosse\nBbmaj7 A(#5) A7 Dm C\nPå Costa del Sol hvor solen den danser - En inciterende flamenco i min swimming-pool\nBbmaj7 Asus A7 Dm 1.x A\nHar keep cool altid været mit motto - Mit navn Günther men folk hernede kalder mig Otto\n\nSå snart jeg så det hele gå ad helvede til - var jeg psst-væk over samtlige bjerge\nOg danderer den nu flittigt i dansker koloni - med pensionen hjemmefra i reserve\n\nPå Costa del Sol...(2.x C)\n\nBbmaj7 C F Bbmaj7\nFor øjeblikket har vi det herligt her på Costa del Sol\nGm7 A7sus A\nI vort ny-nazistiske og asociale sammenhold\nBbmaj7 C F Bbmaj7\nMen den dag røde russerne kommer og det gør de jo nok igen\nGm7 C F - C7 - F - C7 - F - C7 - F - C7 - F - C7 - F\nHar jeg solgt min hacienda og købt en ny i Californien - (mellemspil)\n\nEn sidste kommentar herfra sku' lige være den\nAt der Führer var en visionær af klasse\nDer såfremt han var til stede den dag i dag\nVille la' fattigrøve og skvadderhoveder gasse\n\nPå Costa del Sol...",
    "bpm": 130
  },
  {
    "id": "137",
    "title": "Handle Me With Care",
    "key": "G",
    "artist": "Traveling Wilburys",
    "categories": [
      "Rock",
      "Pop"
    ],
    "lyrics": "Been beat up and battered 'round\nBeen sent up, and I've been shot down\nYou're the best thing that I've ever found\nHandle me with care\n\nReputations changeable\nSituations tolerable\nBaby, you're adorable\nHandle me with care\n\n*I'm so tired of being lonely*\n*I still have some love to give*\n*Won't you show me that you really care?*\n\n**Everybody's got somebody to lean on**\n**Put your body next to mine, and dream on**\n\nI've been fobbed off, and I've been fooled\nI've been robbed and ridiculed\nIn daycare centers and night schools\nHandle me with care\n\nSOLO KORT\n\nBeen stuck in airports, terrorized\nSent to meetings, hypnotized\nOverexposed, commercialized\nHandle me with care\n\n*I'm so tired of being lonely*\n*I still have some love to give*\n*Won't you show me that you really care?*\n\n**Everybody's got somebody to lean on**\n**Put your body next to mine, and dream on**\n\nI've been uptight and made a mess\nBut I'll clean it up myself, I guess\nOh, the sweet smell of success\nHandle me with care\n\nSOLO Z FAVE",
    "bpm": 115
  },
  {
    "id": "138",
    "title": "bad guy",
    "key": "Gm",
    "artist": "Billie Eilish",
    "categories": [
      "Pop"
    ],
    "lyrics": "White shirt now red, my bloody nose\nSleepin', you're on your tippy toes\nCreepin' around like no one knows\nThink you're so criminal\n\nBruises on both my knees for you\nDon't say thank you or please\nI do what I want when I'm wanting to\nMy soul? So cynical\n\n**So you're a tough guy**\n**Like it really rough guy**\n**Just can't get enough guy**\n**Chest always so puffed guy**\n**I'm that bad type**\n**Make your mama sad type**\n**Make your girlfriend mad tight**\n**Might seduce your dad type**\n**I'm the bad guy, duh**\n\nI like it when you take control\nEven if you know that you don't\nOwn me, I'll let you play the role\nI'll be your animal\n\nMy mommy likes to sing along with me\nBut she won't sing this song\nIf she reads all the lyrics\nShe'll pity the men I know\n\n**So you're a tough guy**\n**Like it really rough guy**\n**Just can't get enough guy**\n**Chest always so puffed guy**\n**I'm that bad type**\n**Make your mama sad type**\n**Make your girlfriend mad tight**\n**Might seduce your dad type**\n**I'm the bad guy, duh**",
    "bpm": 135
  },
  {
    "id": "139",
    "title": "She's a Lady",
    "key": "Em",
    "artist": "Tom Jones",
    "categories": [
      "Pop"
    ],
    "lyrics": "Well, she's all you'd ever want\nShe's the kind I like to flaunt and take to dinner\nBut she always knows her place\nShe's got style, she's got grace, she's a winner\n\n**She's a Lady**\n\n**Oh, whoa, whoa, she's a lady**\n**Talkin' about that little lady**\n**And the lady is mine**\n\nWell, she's never in the way\nAlways something nice to say, and what a blessin'\nI can leave her on her own\nKnowin' she's okay alone and there's no messin'\n\n**She's a Lady**\n\n**Oh, whoa, whoa, she's a lady**\n**Talkin' about that little lady**\n**And the lady is mine**\n\nWell, she never asks very much\nAnd I don't refuse her\nAlways treat her with respect\nI never would abuse her\nWhat she's got is hard to find\nAnd I don't want to lose her\nHelp me build a mountain\nFrom a little pile of clay, hey hey hey\n\nWell, she knows what I'm about\nShe can take what I dish out, and that's not easy\nBut she knows me through and through\nAnd she knows just what to do and how to please me\n\n**She's a Lady**\n\n**Oh, whoa, whoa, she's a lady**\n**Talkin' about that little lady**\n**And the lady is mine**\n**Yeah, yeah, yeah, she's a lady...**",
    "bpm": 120
  },
  {
    "id": "140",
    "title": "Boogie On Reggae Woman",
    "key": "Ab",
    "artist": "Stevie Wonder",
    "categories": [
      "Disco",
      "Pop"
    ],
    "lyrics": "I like to see you boogie\nRight across the floor\nI like to do it to you\nTill you holla for more\n\nI like to reggae\nBut you dance too fast for me\nI'd like to make love to you\nSo you can make me scream\n\n**Boogie on reggae woman**\n**What is wrong with me**\n**Boogie on reggae woman**\n**Baby can't you see**\n\nI'd like to see both of us\nFall deeply in love\nI'd like to see you na...\nUnder the stars above\n\nI'd like to see both of us\nFall deeply in love - yeah\nI'd like to see you in the raw\nUnder the stars above\n\n**So boogie on reggae woman**\n**What is wrong with you**\n**Boogie on reggae woman**\n**What you tryin' to do**\n\nCan i play? can i play? No!\n\n**Boogie on reggae woman**\n**What is wrong with me**\n**Boogie on reggae woman**\n**What you tryin' to do**\n**Boogie on reggae woman**\n**Let me do it to you**\n**Boogie on reggae woman**\n**What you tryin' to do**",
    "bpm": 107
  },
  {
    "id": "141",
    "title": "Smuk Som Et Stjerneskud",
    "key": "D",
    "artist": "Brødrene Olsen",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "| Intro | n.c. | % | Hm7 | % | D – Hm | G – A | D | break |\n\nI den varme nat – fyldt med drømmen at\nLykken varer evigt\nLyser månen op – på en kvindekrop, ja\nHendes smukke ansigt\nHun er bare min store kærlighed\nDer bli'r større – der bli'r ved og ved\n\n**Smuk som et stjerneskud**\n**Som tiden går**\n**Smukkere ser hun ud**\n**År efter år**\n\nHendes hofters dans – I en strålekrans, ja\ngennem bølgebruset\nOg i måneskin – bli'r jeg lukket ind\nLyk'lig og beruset\nNatten den er fyldt med kærlighed\nDer bli'r større – der bli'r ved og ved\n\n**Smuk som et stjerneskud**\n**Som tiden går**\n**Smukkere ser hun ud**\n**År efter år**\n\nEt stjerneskud (stjerneskud)\nSmuk som et stjerneskud (år efter år)\nFlottere som tiden går (stjerneskud)\nÅr efter år\n\n**Smuk som et stjerneskud**\n**Som tiden går**\n**Smukkere ser hun ud**\n**År efter år**\n\n**Smuk som et stjerneskud (stjerneskud)**\n**Som tiden går (år efter år)**\n**Smukkere ser hun ud (stjerneskud)**\n**År efter år**\n\n| Coda |\nMit stjerneskud\nÅr efter år efter år efter år (stjerneskud)",
    "bpm": 104
  },
  {
    "id": "142",
    "title": "Susan Himmelbl\u00e5",
    "key": "D",
    "bpm": 120,
    "artist": "Kim Larsen",
    "categories": [
      "Dansk",
      "Syng med"
    ],
    "lyrics": "[Vers 1]\n(Inds\u00e6t vers 1 her)\n\n[Omkv\u00e6d]\n**(Inds\u00e6t omkv\u00e6d her)**\n\n[Vers 2]\n(Inds\u00e6t vers 2 her)\n\n[Omkv\u00e6d]\n**(Inds\u00e6t omkv\u00e6d her)**\n\n[Bridge]\n(Inds\u00e6t bridge her)\n\n[Omkv\u00e6d]\n**(Inds\u00e6t omkv\u00e6d her)**\n\n[Outro]\n(Inds\u00e6t outro her)"
  }
];

const initialSets = [
  {
    "id": "set1",
    "name": "Første sæt",
    "songIds": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13"
    ]
  },
  {
    "id": "set2",
    "name": "Andet sæt",
    "songIds": [
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25"
    ]
  }
];
