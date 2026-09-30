// ========== SANGDATA ==========
// Rediger sange og tekster her — eller brug 'Download songs.js' i appen efter redigering.
const initialSongs = [
      // Første sæt - mappet til nye kategorier
      { id: '1', title: 'Jeg Tager Imod', key: 'Dm', bpm: 120, artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '2', title: 'Love Is In The Air', key: 'C', bpm: 118, artist: 'John Paul Young', categories: ['Pop', '80\'er'] },
      { id: '3', title: 'Pretty Woman', key: 'A', bpm: 120, artist: 'Roy Orbison', categories: ['Rock', 'Pop'] },
      { id: '4', title: 'The Way You Make Me Feel', key: 'A', bpm: 113, artist: 'Michael Jackson', categories: ['Pop', '80\'er'] },
      { id: '5', title: 'Øde Ø', key: 'G', bpm: 116, artist: 'Rasmus Seebach', categories: ['Dansk', 'Pop'] },
      { id: '6', title: 'Mustang Sally', key: 'C', bpm: 130, artist: 'Wilson Picket', categories: ['Rock', 'Disco'] },
      { id: '7', title: 'Can’t Take My Eyes Off Of You', key: 'D', bpm: 111, artist: 'Frankie Valli', categories: ['Pop'] },
      { id: '8', title: 'Johnny B. Goode', key: 'A', artist: 'Chuck Berry', categories: ['Rock', 'Hård Rock'], bpm: 168, lyrics: `Deep down in Louisiana close to New Orleans
Way back up in the woods among the evergreens
There stood a log cabin made of earth and wood
Where lived a country boy named Johnny B. Goode
Who never ever learned to read or write so well
But he could play a guitar just like a-ringing a bell

Go go, go Johnny go, go!
Go Johnny go, go!
Go Johnny go, go!
Go Johnny go, go!
Go Johnny go!
Johnny B. Goode

(TEST-TEKST - erstat med den rigtige tekst under Rediger Sang)` },
      { id: '9', title: 'Rabalderstræde', key: 'D', bpm: 132, artist: 'Gasolin', categories: ['Dansk', 'Rock'] },
      { id: '10', title: 'Abracadabra', key: 'Am', bpm: 128, artist: 'The Steve Miller Band', categories: ['Rock', '80\'er'] },
      { id: '11', title: 'What A Life', key: 'Am', bpm: 114, artist: 'Scarlet Pleasure', categories: ['Pop', 'Dansk'] },
      { id: '12', title: 'STOR MAND', key: 'F', bpm: 146, artist: 'Tobias Rahim & Rasmus Odbjerg', categories: ['Dansk', 'Pop'] },
      { id: '13', title: 'Kun For Mig', key: 'Am', bpm: 125, artist: 'Medina', categories: ['Dansk', 'Pop'] },

      // Andet sæt
      { id: '14', title: 'On A Long Lonely Night', key: 'G', bpm: 112, artist: 'Sko/Torp', categories: ['Dansk', 'Rock'] },
      { id: '15', title: 'Mr. Swing King', key: 'C', bpm: 144, artist: 'Gnags', categories: ['Dansk', 'Rock'] },
      { id: '16', title: 'I Feel Good', key: 'Bb', bpm: 108, artist: 'James Brown', categories: ['Disco'] },
      { id: '17', title: 'Bag Duggede Ruder - Lanternen', key: 'C', bpm: 133, artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '18', title: 'Play That Funky Music', key: 'E', bpm: 131, artist: 'Wild Cherry', categories: ['Disco'] },
      { id: '19', title: 'Det er Mig Der Står Herude Og Banker på', key: 'A', bpm: 83, artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '20', title: 'For Evigt', key: 'C', bpm: 147, artist: 'Volbeat', categories: ['Dansk', 'Hård Rock'] },
      { id: '21', title: 'Kiss', key: 'A', bpm: 115, artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '22', title: 'Det Bedste til Mig og Mine Venner', key: 'F', bpm: 150, artist: 'Gasolin', categories: ['Dansk', 'Rock'] },
      { id: '23', title: 'Sweet Home Alabama', key: 'D', bpm: 98, artist: 'Lynyrd Skynyrd', categories: ['Rock'] },
      { id: '24', title: 'Midt Om Natten', key: 'Dm', bpm: 116, artist: 'Kim Larsen', categories: ['Dansk', 'Rock'] },
      { id: '25', title: 'Save Tonight', key: 'Am', bpm: 122, artist: 'Eagle Eye Cherry', categories: ['Pop', '90\'er'] },

      // Ekstra Numre
      { id: '26', title: 'Kom Tilbage Nu', key: 'A', bpm: 110, artist: 'Danseorkestret', categories: ['Dansk'] },

      // Syng med
      { id: '27', title: 'Proud Mary', key: 'D', bpm: 100, artist: 'Ike & Tina Turner', categories: ['Rock', 'Syng med'] },
      { id: '28', title: 'Summer of 69', key: 'H', bpm: 139, artist: 'Bryan Adams', categories: ['Rock', 'Syng med'] },
      { id: '29', title: 'Mona Mona', key: 'D', bpm: 120, artist: 'Søren Krag Jacobsen', categories: ['Dansk', 'Syng med'] },
      { id: '30', title: 'Kvinde Min', key: 'Dm', bpm: 123, artist: 'Gasolin', categories: ['Dansk', 'Syng med'] },
      { id: '31', title: 'Jutlandia', key: 'A', bpm: 125, artist: 'Kim Larsen', categories: ['Dansk', 'Syng med'] },
      { id: '32', title: 'Nu Hvor Du har Brændt mig af', key: 'D', bpm: 159, artist: 'Thomas Helmig', categories: ['Dansk', 'Syng med'] },
      { id: '33', title: 'Tarzan Mama Mia', key: 'C', bpm: 134, artist: 'Kim Larsen', categories: ['Dansk', 'Syng med'] },
      { id: '34', title: 'All My Love', key: 'E', bpm: 129, artist: 'Rocazino', categories: ['Dansk', 'Syng med'] },
      { id: '35', title: 'Du ligner Din Mor', key: 'E', bpm: 107, artist: 'Benjamin Hav', categories: ['Dansk', 'Syng med'], lyrics: `**Jeg vil' lig' kom' forbi
Og sig' at baby, du har den (Baby du har den)
Du har hele pakken (Uh-uh)
Smilet er stort
Livet gik to små skridt
Og du blev flotter' med årene (Flotter' med årene)
Så kommer tårene (Uh-uh)
Du ligner din mor**

Jeg tænker på årene, de var sgu korte
Du havd' en drøm, lad os se, om du når det
Hård som en dør så de kalder ham Dorte
Du' blevet gammel, men du' jo bedårende
Jeg tænker bare: "Sku' vi lege lidt?
Du og jeg, løbe ned ad den forbudte vej? You decide
Er vi tørre? Gu' vi ej, vi' ude i regnen
Trist liv, det blir' uden mig, goodbye
Folk holder fest for dig bare fordi, du er 'The One'
Så god danser' folk har fortrudt, at de kom
Lister ind på gulvet selvom klubben er tom
Med dine små hjemmesutter' i hånden
Baby, vi hører J.Lo from the Block gør der' sjæl på
Folk de' sure, er du okay bro?
Vi' alle ensomme, du ikk' den eneste
Baby, baby, jeg ka' se det

**Jeg vil' lig' kom' forbi…**

Jeg tænker på dig mor, du' sgu en flot mor
Jeg sagde, "Tak", jeg synes, det' et godt ord
Du har lavet grimme ting, det har jeg ogs' gjort
En lille blå mand banker på, det' ikk' Postnord
Det' lillebitte mig Mommy, hun sagde: "Hej Sonny –
Der dufter lidt af Johnny Madsen, er det dig Johnny?"
Jeg' et godt menneske, find din egen hobby
Det en kold werden, jeg' bare en dreng mommy

**Jeg vil' lig' kom' forbi…**` },
      { id: '36', title: 'Blame It On The Boogie', key: 'Bb', bpm: 109, artist: 'The Jacksons', categories: ['Disco', 'Syng med'] },

      // Flere numre
      { id: '37', title: 'Signed Sealed Delivered I am Yours', key: 'E', bpm: 115, artist: 'Stevie Wonder', categories: ['Pop', 'Disco'] },
      { id: '38', title: 'Flowers', key: 'Gm', bpm: 118, artist: 'Miley Cyrus', categories: ['Pop'] },
      { id: '39', title: 'Love Yourself', key: 'E', bpm: 100, artist: 'Justin Bieber', categories: ['Pop'] },
      { id: '40', title: 'Cant Feel My Face', key: 'Am', bpm: 171, artist: 'The Weeknd', categories: ['Pop'] },
      { id: '41', title: 'Crazy', key: 'Gm', bpm: 112, artist: 'Gnarls Barkley', categories: ['Pop'] },
      { id: '42', title: 'To Mennesker På En Strand', key: 'G', bpm: 155, artist: 'John Mogensen', categories: ['Dansk'] },
      { id: '43', title: 'Vilde Kaniner', key: 'Em', bpm: 88, artist: 'Gnags', categories: ['Dansk', 'Rock'] },
      { id: '44', title: 'Sultans Of Swing', key: 'Dm', bpm: 145, artist: 'Dire Straits', categories: ['Rock'] },
      { id: '45', title: 'September', key: 'A', bpm: 126, artist: 'Earth Wind & Fire', categories: ['Disco'] },
      { id: '46', title: 'Satisfaction', key: 'E', bpm: 133, artist: 'Rolling Stones', categories: ['Rock', 'Hård Rock'] },
      { id: '47', title: 'Feel It Still', key: 'C#m', bpm: 90, artist: 'Portugal. The Man', categories: ['Pop'] },
      { id: '48', title: 'Saw her standing there', key: 'E', bpm: 180, artist: 'The Beatles', categories: ['Rock'] },
      { id: '49', title: 'Lets Dance', key: 'Bbm', bpm: 118, artist: 'David Bowie', categories: ['Pop', 'Disco'] },
      { id: '50', title: 'Money For Nothing', key: 'Gm', bpm: 132, artist: 'Dire Straits', categories: ['Rock'] },
      { id: '51', title: 'As It Was', key: 'A start D', bpm: 174, artist: 'Harry Styles', categories: ['Pop'] },
      { id: '52', title: 'Lay Down Sally', key: 'A', bpm: 127, artist: 'Eric Clapton', categories: ['Rock'] },
      { id: '53', title: 'Get Lucky', key: 'A', bpm: 116, artist: 'Daft Punk', categories: ['Disco', 'Pop'] },
      { id: '54', title: 'Muchi Bar', key: 'B', bpm: 137, artist: 'Tobias Rahim', categories: ['Dansk', 'Røvballe'] },
      { id: '55', title: 'Blurred Lines', key: 'G', bpm: 120, artist: 'Robin Thicke', categories: ['Pop', 'Disco'] },

      // Slow and Dirty -> mappet til passende kategorier
      { id: '56', title: 'What a Wonderful World', key: 'F', bpm: 69, artist: 'Louis Armstrong', categories: ['Pop'] },
      { id: '57', title: 'Dont Know Why', key: 'C', bpm: 96, artist: 'Norah Jones', categories: ['Pop'] },
      { id: '58', title: 'Aint No Sunshine', key: 'Am', bpm: 97, artist: 'Bill Withers', categories: ['Pop'] },
      { id: '59', title: 'With Or Without You', key: 'D', bpm: 115, artist: 'U2', categories: ['Rock'] },
      { id: '60', title: 'Help The Poor', key: 'Dm', bpm: 100, artist: 'Eric Clapton & B.B. King', categories: ['Rock'] },
      { id: '61', title: 'I Shot The Sheriff', key: 'Gm', bpm: 100, artist: 'Bob Marley', categories: ['Rock'] },
      { id: '62', title: 'Lovely Day', key: 'E', bpm: 102, artist: 'Bill Withers', categories: ['Pop'] },
      { id: '63', title: 'Just The Way You Are', key: 'D', bpm: 134, artist: 'Billy Joel', categories: ['Pop'] },
      { id: '64', title: 'Lets Stay Together', key: 'F', bpm: 109, artist: 'Bill Withers', categories: ['Pop'] },
      { id: '65', title: 'I Cant Make You Love Me', key: 'G - start C', bpm: 96, artist: 'Bonnie Raitt', categories: ['Pop'] },
      { id: '66', title: 'Your Body Is A Wonderland', key: 'E', bpm: 77, artist: 'John Mayer', categories: ['Pop'] },
      { id: '67', title: 'Call Me The Breeze', key: 'F#', bpm: 110, artist: 'J.J. Cale', categories: ['Rock'] },

      // Nye sange - Flere numre
      { id: '68', title: 'On Broadway', key: 'G', bpm: 114, artist: 'George Benson', categories: ['Pop', 'Disco'] },
      { id: '69', title: 'Over my shoulder', key: 'D', bpm: 100, artist: 'Mike and The Mechanics', categories: ['Pop'] },
      { id: '70', title: 'Faith', key: 'H', bpm: 96, artist: 'George Michael', categories: ['Pop', '80\'er'] },
      { id: '71', title: 'Tip of my tongue', key: 'H', bpm: 105, artist: 'Diesel', categories: ['Rock'] },
      { id: '72', title: 'So lonely', key: 'E', bpm: 156, artist: 'Police', categories: ['Rock'] },
      { id: '73', title: 'Walking on sunshine', key: 'F', bpm: 110, artist: 'Katrina and the Waves', categories: ['Pop', '80\'er'] },
      { id: '74', title: 'Ahr der', key: 'E', bpm: 95, artist: 'Mc Einar', categories: ['Dansk', 'Røvballe'] },
      { id: '75', title: 'Den jeg elsker', key: 'D', bpm: 112, artist: 'Thomas Helmig og Søs Fenger', categories: ['Dansk', 'Pop'] },
      { id: '76', title: 'Long train running', key: 'Em', bpm: 102, artist: 'The Doobie Brothers', categories: ['Rock'] },
      { id: '77', title: 'Flying', key: 'D', bpm: 104, artist: 'Nice Little Penguins', categories: ['Pop'] },
      { id: '78', title: 'Breakfast at tiffanys', key: 'D', bpm: 96, artist: 'Deep Blue Something', categories: ['Pop', '90\'er'] },
      { id: '79', title: 'Stupid man', key: 'F', bpm: 125, artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '80', title: 'Lady', key: 'Am', bpm: 109, artist: 'Modjo', categories: ['Pop', 'Disco'] },
      { id: '81', title: 'Help', key: 'A', bpm: 96, artist: 'The Beatles', categories: ['Rock'] },
      { id: '82', title: 'Lanternen', key: 'C/A', bpm: 122, artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '83', title: 'Sing it Back', key: 'Em', bpm: 123, artist: 'Moloko', categories: ['Pop', 'Disco'] },
      { id: '84', title: 'Sunny', key: 'Em', bpm: 110, artist: 'Bobby Hebb', categories: ['Pop'] },
      { id: '85', title: 'Take on me', key: 'A', bpm: 169, artist: 'Aha', categories: ['Pop', '80\'er'] },
      { id: '86', title: 'Gorgie Porgie', key: 'Em', bpm: 126, artist: 'Toto', categories: ['Rock'] },
      { id: '87', title: 'My girl', key: 'C', bpm: 115, artist: 'The Temptations', categories: ['Pop', 'Disco'] },
      { id: '88', title: 'Mrs Robinson', key: 'F#7/A', bpm: 99, artist: 'Simon and Garfunkel', categories: ['Pop', 'Rock'] },
      { id: '89', title: 'De første kærester på månen', key: 'G', bpm: 132, artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '90', title: 'Happy together', key: 'F#m', bpm: 120, artist: 'The Turtles', categories: ['Pop', '80\'er'] },
      { id: '91', title: 'Walk on by', key: 'Em', bpm: 128, artist: 'Dione Warwick', categories: ['Pop'] },
      { id: '92', title: 'Dont worry be happy', key: 'C', bpm: 100, artist: 'Bobby McFerrin', categories: ['Pop'] },
      { id: '93', title: 'I feel for you', key: 'F#', bpm: 118, artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '94', title: 'It wont be long', key: 'E', bpm: 168, artist: 'The Beatles', categories: ['Rock'] },
      { id: '95', title: 'Change the world', key: 'E', bpm: 100, artist: 'Eric Clapton', categories: ['Rock'] },
      { id: '96', title: 'I will survive', key: 'Dm', bpm: 117, artist: 'Gloria Gaynor', categories: ['Disco', 'Pop'] },
      { id: '97', title: 'Walk of life', key: 'E', bpm: 150, artist: 'Dire Straits', categories: ['Rock'] },
      { id: '98', title: 'Midnight Hour', key: 'C', bpm: 109, artist: 'Wilson Picket', categories: ['Disco'] },
      { id: '99', title: 'The joker', key: 'F', bpm: 104, artist: 'Steve Miller Band', categories: ['Rock'] },
      { id: '100', title: 'I am still standing', key: 'A/Am', bpm: 117, artist: 'Elton John', categories: ['Pop'] },
      { id: '101', title: 'Ticket to ride', key: 'A', bpm: 113, artist: 'The Beatles', categories: ['Rock'] },
      { id: '102', title: 'It aint over till its over', key: 'C#', bpm: 88, artist: 'Lenny Kravitz', categories: ['Rock', 'Hård Rock'] },
      { id: '103', title: '1999', key: 'F', bpm: 159, artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '104', title: 'I got a Woman', key: 'A', bpm: 112, artist: 'Ray Charles', categories: ['Pop'] },
      { id: '105', title: 'Start me up', key: 'F', bpm: 118, artist: 'Rolling Stones', categories: ['Rock', 'Hård Rock'] },
      { id: '106', title: 'Master Blaster', key: 'Am', bpm: 107, artist: 'Stevie Wonder', categories: ['Pop', 'Disco'] },
      { id: '107', title: '7 Years', key: 'Em', bpm: 120, artist: 'Lucas Graham', categories: ['Pop'] },
      { id: '108', title: 'Cake by the Ocean', key: 'Em', bpm: 119, artist: 'DNCE', categories: ['Pop', 'Disco'] },
      { id: '109', title: 'Shape of you', key: 'C#m', bpm: 96, artist: 'Ed Sheeran', categories: ['Pop'] },
      { id: '110', title: 'Cream', key: 'Bb', bpm: 102, artist: 'Prince', categories: ['Rock'] },
      { id: '111', title: 'Cant stop the feeling', key: 'C', bpm: 113, artist: 'Justin Timberlake', categories: ['Pop'] },
      { id: '112', title: 'Unchain my heart', key: 'Am', bpm: 150, artist: 'Ray Charles', categories: ['Pop'] },
      { id: '113', title: 'Rock with you', key: 'Dm', bpm: 116, artist: 'Michael Jackson', categories: ['Disco', 'Pop'] },

      // Nye sange - Slow and Dirty mappet til nye kategorier
      { id: '114', title: 'The Girl From Ipanema', key: 'F', bpm: 130, artist: 'Jobim', categories: ['Pop'] },
      { id: '115', title: 'Corcovado', key: 'Am', bpm: 130, artist: 'Jobim', categories: ['Pop'] },
      { id: '116', title: 'Fields Of Gold', key: 'C', bpm: 104, artist: 'Sting', categories: ['Pop'] },
      { id: '117', title: 'Shape Of My Heart', key: 'F#m', bpm: 84, artist: 'Sting', categories: ['Pop'] },
      { id: '118', title: 'Vem Vet', key: 'Am', bpm: 95, artist: 'Lisa Ekdahl', categories: ['Pop'] },
      { id: '119', title: 'Calling You', key: 'G', bpm: 103, artist: 'Bagdad Cafe', categories: ['Pop'] },
      { id: '120', title: 'Its Probably Me', key: 'Em', bpm: 100, artist: 'Sting & Eric Clapton', categories: ['Pop'] },
      { id: '121', title: 'Cocain', key: 'Em', bpm: 100, artist: 'J.J. Cale', categories: ['Rock'] },
      { id: '122', title: 'Fever', key: 'Cm', bpm: 122, artist: 'Elvis', categories: ['Rock'] },
      { id: '123', title: 'Fallen', key: 'E', bpm: 112, artist: 'Lauren Wood', categories: ['Pop'] },
      { id: '124', title: '50 Ways To Leave Your Lover', key: 'Em', bpm: 102, artist: 'Paul Simon', categories: ['Pop'] },
      { id: '125', title: 'Ebony And Ivory', key: 'G/start D11', bpm: 80, artist: 'Paul McCartney & Stevie Wonder', categories: ['Pop'] },
      { id: '126', title: 'Dont Be Cruel', key: 'C', bpm: 170, artist: 'Elvis', categories: ['Rock'] },
      { id: '127', title: 'Careless Whisper', key: 'Dm', bpm: 76, artist: 'Wham', categories: ['Pop', '80\'er'] },
      { id: '128', title: 'Father Figure', key: 'A', bpm: 112, artist: 'George Michael', categories: ['Pop', '80\'er'] },
      { id: '129', title: 'Tears In Heaven', key: 'A', bpm: 77, artist: 'Eric Clapton', categories: ['Rock', 'Pop'] },
      { id: '130', title: 'They Call Me The Breeze', key: 'F#', bpm: 110, artist: 'J.J. Cale', categories: ['Rock'] },
      { id: '131', title: 'Who Says', key: 'D', bpm: 90, artist: 'John Mayer', categories: ['Pop'] },
      { id: '132', title: 'You Can Call Me Al', key: 'F', bpm: 120, artist: 'Paul Simon', categories: ['Pop'] }
    ];

    const initialSets = [
      { id: 'set1', name: 'Første sæt', songIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'] },
      { id: 'set2', name: 'Andet sæt', songIds: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'] }
    ];
