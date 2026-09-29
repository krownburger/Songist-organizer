// ========== SANGDATA ==========
// Rediger sange og tekster her — eller brug 'Download songs.js' i appen efter redigering.
const initialSongs = [
      // Første sæt - mappet til nye kategorier
      { id: '1', title: 'Jeg Tager Imod', key: 'Dm', artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '2', title: 'Love Is In The Air', key: 'C', artist: 'John Paul Young', categories: ['Pop', '80\'er'] },
      { id: '3', title: 'Pretty Woman', key: 'A', artist: 'Roy Orbison', categories: ['Rock', 'Pop'] },
      { id: '4', title: 'The Way You Make Me Feel', key: 'A', artist: 'Michael Jackson', categories: ['Pop', '80\'er'] },
      { id: '5', title: 'Øde Ø', key: 'G', artist: 'Rasmus Seebach', categories: ['Dansk', 'Pop'] },
      { id: '6', title: 'Mustang Sally', key: 'C', artist: 'Wilson Picket', categories: ['Rock', 'Disco'] },
      { id: '7', title: 'Can’t Take My Eyes Off Of You', key: 'D', artist: 'Frankie Valli', categories: ['Pop'] },
      { id: '8', title: 'Johnny B. Goode', key: 'A', artist: 'Chuck Berry', categories: ['Rock', 'Hård Rock'], lyrics: `Deep down in Louisiana close to New Orleans
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
      { id: '9', title: 'Rabalderstræde', key: 'D', artist: 'Gasolin', categories: ['Dansk', 'Rock'] },
      { id: '10', title: 'Abracadabra', key: 'Am', artist: 'The Steve Miller Band', categories: ['Rock', '80\'er'] },
      { id: '11', title: 'What A Life', key: 'Am', artist: 'Scarlet Pleasure', categories: ['Pop', 'Dansk'] },
      { id: '12', title: 'STOR MAND', key: 'F', artist: 'Tobias Rahim & Rasmus Odbjerg', categories: ['Dansk', 'Pop'] },
      { id: '13', title: 'Kun For Mig', key: 'Am', artist: 'Medina', categories: ['Dansk', 'Pop'] },

      // Andet sæt
      { id: '14', title: 'On A Long Lonely Night', key: 'G', artist: 'Sko/Torp', categories: ['Dansk', 'Rock'] },
      { id: '15', title: 'Mr. Swing King', key: 'C', artist: 'Gnags', categories: ['Dansk', 'Rock'] },
      { id: '16', title: 'I Feel Good', key: 'Bb', artist: 'James Brown', categories: ['Disco'] },
      { id: '17', title: 'Bag Duggede Ruder - Lanternen', key: 'C', artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '18', title: 'Play That Funky Music', key: 'E', artist: 'Wild Cherry', categories: ['Disco'] },
      { id: '19', title: 'Det er Mig Der Står Herude Og Banker på', key: 'A', artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '20', title: 'For Evigt', key: 'C', artist: 'Volbeat', categories: ['Dansk', 'Hård Rock'] },
      { id: '21', title: 'Kiss', key: 'A', artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '22', title: 'Det Bedste til Mig og Mine Venner', key: 'F', artist: 'Gasolin', categories: ['Dansk', 'Rock'] },
      { id: '23', title: 'Sweet Home Alabama', key: 'D', artist: 'Lynyrd Skynyrd', categories: ['Rock'] },
      { id: '24', title: 'Midt Om Natten', key: 'Dm', artist: 'Kim Larsen', categories: ['Dansk', 'Rock'] },
      { id: '25', title: 'Save Tonight', key: 'Am', artist: 'Eagle Eye Cherry', categories: ['Pop', '90\'er'] },

      // Ekstra Numre
      { id: '26', title: 'Kom Tilbage Nu', key: 'A', artist: 'Danseorkestret', categories: ['Dansk'] },

      // Syng med
      { id: '27', title: 'Proud Mary', key: 'D', artist: 'Ike & Tina Turner', categories: ['Rock', 'Syng med'] },
      { id: '28', title: 'Summer of 69', key: 'H', artist: 'Bryan Adams', categories: ['Rock', 'Syng med'] },
      { id: '29', title: 'Mona Mona', key: 'D', artist: 'Søren Krag Jacobsen', categories: ['Dansk', 'Syng med'] },
      { id: '30', title: 'Kvinde Min', key: 'Dm', artist: 'Gasolin', categories: ['Dansk', 'Syng med'] },
      { id: '31', title: 'Jutlandia', key: 'A', artist: 'Kim Larsen', categories: ['Dansk', 'Syng med'] },
      { id: '32', title: 'Nu Hvor Du har Brændt mig af', key: 'D', artist: 'Thomas Helmig', categories: ['Dansk', 'Syng med'] },
      { id: '33', title: 'Tarzan Mama Mia', key: 'C', artist: 'Kim Larsen', categories: ['Dansk', 'Syng med'] },
      { id: '34', title: 'All My Love', key: 'E', artist: 'Rocazino', categories: ['Dansk', 'Syng med'] },
      { id: '35', title: 'Du ligner Din Mor', key: 'E', artist: 'Benjamin Hav', categories: ['Dansk', 'Syng med'], lyrics: `Jeg vil' lig' kom' forbi
Og sig' at baby, du har den (Baby du har den)
Du har hele pakken (Uh-uh)
Smilet er stort
Livet gik to små skridt
Og du blev flotter' med årene (Flotter' med årene)
Så kommer tårene (Uh-uh)
Du ligner din mor

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

Jeg vil' lig' kom' forbi…

Jeg tænker på dig mor, du' sgu en flot mor
Jeg sagde, "Tak", jeg synes, det' et godt ord
Du har lavet grimme ting, det har jeg ogs' gjort
En lille blå mand banker på, det' ikk' Postnord
Det' lillebitte mig Mommy, hun sagde: "Hej Sonny –
Der dufter lidt af Johnny Madsen, er det dig Johnny?"
Jeg' et godt menneske, find din egen hobby
Det en kold werden, jeg' bare en dreng mommy

Jeg vil' lig' kom' forbi…` },
      { id: '36', title: 'Blame It On The Boogie', key: 'Bb', artist: 'The Jacksons', categories: ['Disco', 'Syng med'] },

      // Flere numre
      { id: '37', title: 'Signed Sealed Delivered I am Yours', key: 'E', artist: 'Stevie Wonder', categories: ['Pop', 'Disco'] },
      { id: '38', title: 'Flowers', key: 'Gm', artist: 'Miley Cyrus', categories: ['Pop'] },
      { id: '39', title: 'Love Yourself', key: 'E', artist: 'Justin Bieber', categories: ['Pop'] },
      { id: '40', title: 'Cant Feel My Face', key: 'Am', artist: 'The Weeknd', categories: ['Pop'] },
      { id: '41', title: 'Crazy', key: 'Gm', artist: 'Gnarls Barkley', categories: ['Pop'] },
      { id: '42', title: 'To Mennesker På En Strand', key: 'G', artist: 'John Mogensen', categories: ['Dansk'] },
      { id: '43', title: 'Vilde Kaniner', key: 'Em', artist: 'Gnags', categories: ['Dansk', 'Rock'] },
      { id: '44', title: 'Sultans Of Swing', key: 'Dm', artist: 'Dire Straits', categories: ['Rock'] },
      { id: '45', title: 'September', key: 'A', artist: 'Earth Wind & Fire', categories: ['Disco'] },
      { id: '46', title: 'Satisfaction', key: 'E', artist: 'Rolling Stones', categories: ['Rock', 'Hård Rock'] },
      { id: '47', title: 'Feel It Still', key: 'C#m', artist: 'Portugal. The Man', categories: ['Pop'] },
      { id: '48', title: 'Saw her standing there', key: 'E', artist: 'The Beatles', categories: ['Rock'] },
      { id: '49', title: 'Lets Dance', key: 'Bbm', artist: 'David Bowie', categories: ['Pop', 'Disco'] },
      { id: '50', title: 'Money For Nothing', key: 'Gm', artist: 'Dire Straits', categories: ['Rock'] },
      { id: '51', title: 'As It Was', key: 'A start D', artist: 'Harry Styles', categories: ['Pop'] },
      { id: '52', title: 'Lay Down Sally', key: 'A', artist: 'Eric Clapton', categories: ['Rock'] },
      { id: '53', title: 'Get Lucky', key: 'A', artist: 'Daft Punk', categories: ['Disco', 'Pop'] },
      { id: '54', title: 'Muchi Bar', key: 'B', artist: 'Tobias Rahim', categories: ['Dansk', 'Røvballe'] },
      { id: '55', title: 'Blurred Lines', key: 'G', artist: 'Robin Thicke', categories: ['Pop', 'Disco'] },

      // Slow and Dirty -> mappet til passende kategorier
      { id: '56', title: 'What a Wonderful World', key: 'F', artist: 'Louis Armstrong', categories: ['Pop'] },
      { id: '57', title: 'Dont Know Why', key: 'C', artist: 'Norah Jones', categories: ['Pop'] },
      { id: '58', title: 'Aint No Sunshine', key: 'Am', artist: 'Bill Withers', categories: ['Pop'] },
      { id: '59', title: 'With Or Without You', key: 'D', artist: 'U2', categories: ['Rock'] },
      { id: '60', title: 'Help The Poor', key: 'Dm', artist: 'Eric Clapton & B.B. King', categories: ['Rock'] },
      { id: '61', title: 'I Shot The Sheriff', key: 'Gm', artist: 'Bob Marley', categories: ['Rock'] },
      { id: '62', title: 'Lovely Day', key: 'E', artist: 'Bill Withers', categories: ['Pop'] },
      { id: '63', title: 'Just The Way You Are', key: 'D', artist: 'Billy Joel', categories: ['Pop'] },
      { id: '64', title: 'Lets Stay Together', key: 'F', artist: 'Bill Withers', categories: ['Pop'] },
      { id: '65', title: 'I Cant Make You Love Me', key: 'G - start C', artist: 'Bonnie Raitt', categories: ['Pop'] },
      { id: '66', title: 'Your Body Is A Wonderland', key: 'E', artist: 'John Mayer', categories: ['Pop'] },
      { id: '67', title: 'Call Me The Breeze', key: 'F#', artist: 'J.J. Cale', categories: ['Rock'] },

      // Nye sange - Flere numre
      { id: '68', title: 'On Broadway', key: 'G', artist: 'George Benson', categories: ['Pop', 'Disco'] },
      { id: '69', title: 'Over my shoulder', key: 'D', artist: 'Mike and The Mechanics', categories: ['Pop'] },
      { id: '70', title: 'Faith', key: 'H', artist: 'George Michael', categories: ['Pop', '80\'er'] },
      { id: '71', title: 'Tip of my tongue', key: 'H', artist: 'Diesel', categories: ['Rock'] },
      { id: '72', title: 'So lonely', key: 'E', artist: 'Police', categories: ['Rock'] },
      { id: '73', title: 'Walking on sunshine', key: 'F', artist: 'Katrina and the Waves', categories: ['Pop', '80\'er'] },
      { id: '74', title: 'Ahr der', key: 'E', artist: 'Mc Einar', categories: ['Dansk', 'Røvballe'] },
      { id: '75', title: 'Den jeg elsker', key: 'D', artist: 'Thomas Helmig og Søs Fenger', categories: ['Dansk', 'Pop'] },
      { id: '76', title: 'Long train running', key: 'Em', artist: 'The Doobie Brothers', categories: ['Rock'] },
      { id: '77', title: 'Flying', key: 'D', artist: 'Nice Little Penguins', categories: ['Pop'] },
      { id: '78', title: 'Breakfast at tiffanys', key: 'D', artist: 'Deep Blue Something', categories: ['Pop', '90\'er'] },
      { id: '79', title: 'Stupid man', key: 'F', artist: 'Thomas Helmig', categories: ['Dansk', 'Pop'] },
      { id: '80', title: 'Lady', key: 'Am', artist: 'Modjo', categories: ['Pop', 'Disco'] },
      { id: '81', title: 'Help', key: 'A', artist: 'The Beatles', categories: ['Rock'] },
      { id: '82', title: 'Lanternen', key: 'C/A', artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '83', title: 'Sing it Back', key: 'Em', artist: 'Moloko', categories: ['Pop', 'Disco'] },
      { id: '84', title: 'Sunny', key: 'Em', artist: 'Bobby Hebb', categories: ['Pop'] },
      { id: '85', title: 'Take on me', key: 'A', artist: 'Aha', categories: ['Pop', '80\'er'] },
      { id: '86', title: 'Gorgie Porgie', key: 'Em', artist: 'Toto', categories: ['Rock'] },
      { id: '87', title: 'My girl', key: 'C', artist: 'The Temptations', categories: ['Pop', 'Disco'] },
      { id: '88', title: 'Mrs Robinson', key: 'F#7/A', artist: 'Simon and Garfunkel', categories: ['Pop', 'Rock'] },
      { id: '89', title: 'De første kærester på månen', key: 'G', artist: 'TV2', categories: ['Dansk', 'Rock'] },
      { id: '90', title: 'Happy together', key: 'F#m', artist: 'The Turtles', categories: ['Pop', '80\'er'] },
      { id: '91', title: 'Walk on by', key: 'Em', artist: 'Dione Warwick', categories: ['Pop'] },
      { id: '92', title: 'Dont worry be happy', key: 'C', artist: 'Bobby McFerrin', categories: ['Pop'] },
      { id: '93', title: 'I feel for you', key: 'F#', artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '94', title: 'It wont be long', key: 'E', artist: 'The Beatles', categories: ['Rock'] },
      { id: '95', title: 'Change the world', key: 'E', artist: 'Eric Clapton', categories: ['Rock'] },
      { id: '96', title: 'I will survive', key: 'Dm', artist: 'Gloria Gaynor', categories: ['Disco', 'Pop'] },
      { id: '97', title: 'Walk of life', key: 'E', artist: 'Dire Straits', categories: ['Rock'] },
      { id: '98', title: 'Midnight Hour', key: 'C', artist: 'Wilson Picket', categories: ['Disco'] },
      { id: '99', title: 'The joker', key: 'F', artist: 'Steve Miller Band', categories: ['Rock'] },
      { id: '100', title: 'I am still standing', key: 'A/Am', artist: 'Elton John', categories: ['Pop'] },
      { id: '101', title: 'Ticket to ride', key: 'A', artist: 'The Beatles', categories: ['Rock'] },
      { id: '102', title: 'It aint over till its over', key: 'C#', artist: 'Lenny Kravitz', categories: ['Rock', 'Hård Rock'] },
      { id: '103', title: '1999', key: 'F', artist: 'Prince', categories: ['Pop', 'Disco'] },
      { id: '104', title: 'I got a Woman', key: 'A', artist: 'Ray Charles', categories: ['Pop'] },
      { id: '105', title: 'Start me up', key: 'F', artist: 'Rolling Stones', categories: ['Rock', 'Hård Rock'] },
      { id: '106', title: 'Master Blaster', key: 'Am', artist: 'Stevie Wonder', categories: ['Pop', 'Disco'] },
      { id: '107', title: '7 Years', key: 'Em', artist: 'Lucas Graham', categories: ['Pop'] },
      { id: '108', title: 'Cake by the Ocean', key: 'Em', artist: 'DNCE', categories: ['Pop', 'Disco'] },
      { id: '109', title: 'Shape of you', key: 'C#m', artist: 'Ed Sheeran', categories: ['Pop'] },
      { id: '110', title: 'Cream', key: 'Bb', artist: 'Prince', categories: ['Rock'] },
      { id: '111', title: 'Cant stop the feeling', key: 'C', artist: 'Justin Timberlake', categories: ['Pop'] },
      { id: '112', title: 'Unchain my heart', key: 'Am', artist: 'Ray Charles', categories: ['Pop'] },
      { id: '113', title: 'Rock with you', key: 'Dm', artist: 'Michael Jackson', categories: ['Disco', 'Pop'] },

      // Nye sange - Slow and Dirty mappet til nye kategorier
      { id: '114', title: 'The Girl From Ipanema', key: 'F', artist: 'Jobim', categories: ['Pop'] },
      { id: '115', title: 'Corcovado', key: 'Am', artist: 'Jobim', categories: ['Pop'] },
      { id: '116', title: 'Fields Of Gold', key: 'C', artist: 'Sting', categories: ['Pop'] },
      { id: '117', title: 'Shape Of My Heart', key: 'F#m', artist: 'Sting', categories: ['Pop'] },
      { id: '118', title: 'Vem Vet', key: 'Am', artist: 'Lisa Ekdahl', categories: ['Pop'] },
      { id: '119', title: 'Calling You', key: 'G', artist: 'Bagdad Cafe', categories: ['Pop'] },
      { id: '120', title: 'Its Probably Me', key: 'Em', artist: 'Sting & Eric Clapton', categories: ['Pop'] },
      { id: '121', title: 'Cocain', key: 'Em', artist: 'J.J. Cale', categories: ['Rock'] },
      { id: '122', title: 'Fever', key: 'Cm', artist: 'Elvis', categories: ['Rock'] },
      { id: '123', title: 'Fallen', key: 'E', artist: 'Lauren Wood', categories: ['Pop'] },
      { id: '124', title: '50 Ways To Leave Your Lover', key: 'Em', artist: 'Paul Simon', categories: ['Pop'] },
      { id: '125', title: 'Ebony And Ivory', key: 'G/start D11', artist: 'Paul McCartney & Stevie Wonder', categories: ['Pop'] },
      { id: '126', title: 'Dont Be Cruel', key: 'C', artist: 'Elvis', categories: ['Rock'] },
      { id: '127', title: 'Careless Whisper', key: 'Dm', artist: 'Wham', categories: ['Pop', '80\'er'] },
      { id: '128', title: 'Father Figure', key: 'A', artist: 'George Michael', categories: ['Pop', '80\'er'] },
      { id: '129', title: 'Tears In Heaven', key: 'A', artist: 'Eric Clapton', categories: ['Rock', 'Pop'] },
      { id: '130', title: 'They Call Me The Breeze', key: 'F#', artist: 'J.J. Cale', categories: ['Rock'] },
      { id: '131', title: 'Who Says', key: 'D', artist: 'John Mayer', categories: ['Pop'] },
      { id: '132', title: 'You Can Call Me Al', key: 'F', artist: 'Paul Simon', categories: ['Pop'] }
    ];

    const initialSets = [
      { id: 'set1', name: 'Første sæt', songIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'] },
      { id: 'set2', name: 'Andet sæt', songIds: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'] }
    ];
