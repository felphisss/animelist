// dados.js

// Lista dos Animes Gerais
let animes = [
  {
    imagem: "imgAnimes/Attack on Titan.jpg",
    nome: "Atack on Titan",
    nomeAlternativo: "Shingeki no Kyojin",
    sinopse: "Em um mundo cercado por três muralhas gigantes, a humanidade vive em constante medo dos Titãs, criaturas humanóides gigantes que devoram humanos sem motivo aparente. A história acompanha Eren Yeager e seus amigos que decidem se juntar ao exército para combater os Titãs e recuperar a liberdade da humanidade.",
    linkMyAnimeList: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=shingeki%20no%20&cat=anime",
  },
  {
    imagem: "imgAnimes/Demon Slayer.jpg",
    nome: "Demon Slayer: Kimetsu no Yaiba",
    nomeAlternativo: "Kimetsu no Yaiba",
    sinopse: "Em um Japão da Taisho, Tanjiro Kamado, um garoto bondoso e trabalhador, encontra sua família massacrada por um demônio. Sua irmã mais nova, Nezuko, é a única sobrevivente, mas transformada em um demônio. Determinado a encontrar uma cura para Nezuko e vingar sua família, Tanjiro se torna um caçador de demônios.",
    linkMyAnimeList: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon%20sla&cat=anime",
  },
  {
    imagem: "imgAnimes/Naruto.jpg",
    nome: "Naruto",
    nomeAlternativo: "",
    sinopse: "Naruto Uzumaki é um jovem ninja que almeja se tornar o Hokage, o líder da vila da Folha, para ganhar o reconhecimento de todos e fazer amigos. Acompanhe sua jornada repleta de aventuras, lutas e desafios.",
    linkMyAnimeList: "https://myanimelist.net/anime/20/Naruto?q=Naruto&cat=anime",
  },
  {
    imagem: "imgAnimes/One Piece.jpg",
    nome: "One Piece",
    nomeAlternativo: "",
    sinopse: "Monkey D. Luffy é um garoto que sonha em se tornar o Rei dos Piratas, encontrando o lendário tesouro One Piece. Acompanhe suas aventuras pelos Sete Mares, fazendo amigos, enfrentando inimigos e desvendando os mistérios do mundo de One Piece.",
    linkMyAnimeList: "https://myanimelist.net/anime/21/One_Piece?q=one%20piece&cat=anime",
  },
  {
    imagem: "imgAnimes/My Hero Academia.jpg",
    nome: "My Hero Academia",
    nomeAlternativo: "Boku no Hero Academia",
    sinopse: "Em um mundo onde a maioria das pessoas possuem superpoderes, Izuku Midoriya é um garoto que nasceu sem nenhuma habilidade. No entanto, seu sonho de se tornar um herói não é abalado, e ele encontra uma oportunidade única de realizar seu desejo.",
    linkMyAnimeList: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=my%20hero%20aca&cat=anime",
  },
  {
    imagem: "imgAnimes/Death Note.jpg",
    nome: "Death Note",
    nomeAlternativo: "",
    sinopse: "Light Yagami, um estudante do ensino médio extremamente inteligente, encontra um misterioso caderno, o Death Note, que concede ao seu portador o poder de matar qualquer pessoa cujo nome seja escrito nele. Obcecado com a ideia de criar um mundo sem crimes, Light inicia uma série de assassinatos, se tornando conhecido como Kira.",
    linkMyAnimeList: "https://myanimelist.net/anime/1535/Death_Note?q=death%20note%20&cat=anime",
  },
  {
    imagem: "imgAnimes/Fullmetal Alchemist.jpg",
    nome: "Fullmetal Alchemist: Brotherhood",
    nomeAlternativo: "",
    sinopse: "Os irmãos Edward e Alphonse Elric tentam trazer sua mãe de volta à vida através da alquimia, mas falham e perdem muito no processo. Em busca de uma forma de restaurar seus corpos, eles embarcam em uma jornada perigosa.",
    linkMyAnimeList: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=full%20metal%20alch&cat=anime",
  },
  {
    imagem: "imgAnimes/No Game No Life.jpg",
    nome: "No Game No Life",
    nomeAlternativo: "No Game, No Life",
    sinopse: "No Game No Life é um anime que transporta os irmãos Sora e Shiro, dois hikikomori e mestres dos jogos online, para um mundo fantástico onde todas as disputas são resolvidas através de jogos. Neste novo universo, a humanidade foi reduzida a uma pequena cidade eos irmãos precisam utilizar suas habilidades para salvar a raça humana da extinção, enfrentando diversas raças e desafios em jogos cada vez mais complexos.",
    linkMyAnimeList: "https://myanimelist.net/anime/19815/No_Game_No_Life"
  },
  {
    imagem: "imgAnimes/Blue Period.jpg",
    nome: "Blue Period",
    nomeAlternativo: "",
    sinopse: "Yatora Yaguchi, um estudante popular e sem objetivos, descobre um novo mundo ao se apaixonar pela arte. Acompanhe sua jornada enquanto ele se dedica intensamente aos estudos e enfrenta os desafios de entrar em uma das melhores escolas de artes do Japão.",
    linkMyAnimeList: "https://myanimelist.net/anime/46352/Blue_Period"
  },
  {
    imagem: "imgAnimes/Grand Blue.jpg",
    nome: "Grand Blue",
    nomeAlternativo: "Grand Blue Dreaming",
    sinopse: "Iori Kitahara se muda para uma cidade universitária e logo se junta ao clube de mergulho da universidade. Acompanhe as aventuras hilárias desse grupo de amigos enquanto eles exploram o mundo do mergulho, fazem novas amizades e aproveitam ao máximo a vida universitária.",
    linkMyAnimeList: "https://myanimelist.net/anime/37105/Grand_Blue"
  },
  {
    imagem: "imgAnimes/Charlotte.jpg",
    nome: "Charlotte",
    nomeAlternativo: "",
    sinopse: "Yu Otosaka possui um poder sobrenatural que lhe permite roubar os poderes de outras pessoas. Após um incidente, ele se junta a uma escola especial para estudantes com habilidades sobrenaturais e descobre os perigos e responsabilidades que vêm com seus poderes.",
    linkMyAnimeList: "https://myanimelist.net/anime/28999/Charlotte"
  },
  {
    imagem: "imgAnimes/Haikyu!!.jpg",
    nome: "Haikyuu!!",
    nomeAlternativo: "Haikyu!!",
    sinopse: "Shoyo Hinata, um garoto baixo, se apaixona pelo vôlei após assistir a um jogo de um jogador talentoso. Determinado a se tornar um jogador de vôlei de destaque, ele entra para o clube de vôlei da escola e, junto com seus companheiros de equipe, enfrenta desafios e obstáculos para alcançar seus objetivos.",
    linkMyAnimeList: "https://myanimelist.net/anime/20583/Haikyuu",
  },
  {
    imagem: "imgAnimes/Oshi no Ko.jpg",
    nome: "Oshi no Ko",
    nomeAlternativo: "",
    sinopse: "Oshi no Ko é uma série de anime que te leva para um mundo onde a fama e a indústria do entretenimento nem sempre são o que parecem. A história acompanha Gorou Amemiya, um médico obcecado pela idol Ai Hoshino, que acaba reencarnando como um de seus filhos após um trágico acontecimento. Junto com sua irmã gêmea, ele embarca em uma jornada para desvendar os segredos do mundo do show business, descobrindo que a vida de uma estrela não é tão brilhante quanto parece. Com uma trama que mistura drama, suspense e comédia, a série explora temas como fama, família e vingança, apresentando uma visão realista e sombria do mundo dos idols.",
    linkMyAnimeList: "https://myanimelist.net/anime/52034/Oshi_no_Ko?q=oshi%20no%20ko&cat=anime"
  },
  {
    imagem: "imgAnimes/OshiNoKo2.webp",
    nome: "Oshi no Ko 2nd Season",
    nomeAlternativo: "",
    sinopse: "A segunda temporada de Oshi no Ko continua a emocionante jornada dos irmãos gêmeos Aqua e Ruby, filhos da famosa ídolo Ai Hoshino. Enquanto navegam pelos desafios da indústria do entretenimento, eles enfrentam novos obstáculos e revelações sobre seus verdadeiros destinos.",
    linkMyAnimeList: "https://myanimelist.net/anime/55791/Oshi_no_Ko_2nd_Season?q=oshi%20no%20ko&cat=anime"
  },
  {
    imagem: "imgAnimes/Alya.webp",
    nome: "Alya Sometimes Hides Her Feelings in Russian",
    nomeAlternativo: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
    sinopse: "Nesta comédia romântica, Alya, uma garota russa, luta para expressar seus sentimentos. A série acompanha suas interações com amigos e colegas de classe, enquanto ela tenta navegar pelas complexidades do amor e da amizade.",
    linkMyAnimeList: "https://myanimelist.net/anime/54744/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Alya-san?q=alya&cat=anime"
  },
  {
    imagem: "imgAnimes/Tower of God.jpg",
    nome: "Tower of God",
    nomeAlternativo: "Kami no Tou",
    sinopse: "A primeira temporada de Tower of God apresenta Bam, um garoto que entra em uma misteriosa torre em busca de sua amiga Rachel. Ao subir os andares da torre, ele enfrenta diversos desafios e descobre segredos sobre o mundo ao seu redor, enquanto forma alianças e enfrenta inimigos poderosos.",
    linkMyAnimeList: "https://myanimelist.net/anime/40221/Kami_no_Tou?q=tower%20of%20god&cat=anime"
  },
  {
    imagem: "imgAnimes/ToweOfGod2.webp",
    nome: "Tower of God: Return of the Prince",
    nomeAlternativo: "Kami no Tou: Ouji no Kikan",
    sinopse: "A segunda temporada de Tower of God continua a emocionante jornada de Bam enquanto ele sobe os andares da misteriosa torre. Ele enfrenta novos desafios, forma alianças inesperadas e descobre mais sobre os segredos e o poder oculto da torre.",
    linkMyAnimeList: "https://myanimelist.net/anime/52635/Kami_no_Tou__Ouji_no_Kikan"
  },
  {
    imagem: "imgAnimes/Wistoria.webp",
    nome: "Wistoria: Wand and Sword",
    nomeAlternativo: "Tsue to Tsurugi no Wistoria",
    sinopse: "Nesta série de fantasia, Will Serfort sonha em se tornar um poderoso mago, mas suas habilidades mágicas são limitadas. Ele se matricula em uma academia mágica e deve usar suas habilidades com a espada para compensar sua falta de magia, enquanto enfrenta desafios e rivalidades.",
    linkMyAnimeList: "https://myanimelist.net/anime/58059/Tsue_to_Tsurugi_no_Wistoria"
  },
  {
    imagem: "imgAnimes/DaysWithMyStepsister.webp",
    nome: "Days with My Stepsister",
    nomeAlternativo: "Gimai Seikatsu",
    sinopse: "Uma comédia romântica sobre Yuuta, um estudante do ensino médio que se vê obrigado a viver com sua nova irmã mais velha, Saki. Inicialmente desconfortáveis com a situação, os dois gradualmente desenvolvem uma relação mais próxima, enquanto enfrentam os desafios da vida cotidiana e descobrem sentimentos inesperados.",
    linkMyAnimeList: "https://myanimelist.net/anime/52481/Gimai_Seikatsu"
  },
  {
    imagem: "imgAnimes/MakeHeroine.webp",
    nome: "Makeine: Too Many Losing Heroines!",
    nomeAlternativo: "Make Heroine ga Oosugiru!",
    sinopse: "Makeine se vê cercado por um harém de heroínas que parecem ter a pior sorte do mundo. Enquanto tenta ajudá-las a superar suas dificuldades, ele descobre habilidades únicas e se envolve em uma série de aventuras hilárias e um tanto quanto caóticas.",
    linkMyAnimeList: "https://myanimelist.net/anime/57524/Make_Heroine_ga_Oosugiru"
  },
  {
    imagem: "imgAnimes/NoLonger.jpg",
    nome: "No Longer Allowed in Another World",
    nomeAlternativo: "Isekai Shikkaku",
    sinopse: "Haruto, um jovem comum, é convocado para outro mundo, mas por um erro é logo mandado de volta. Determinado a retornar, ele treina intensamente para se tornar mais forte e finalmente consegue voltar. No entanto, o mundo que ele tanto desejava visitar não é tão perfeito quanto imaginava.",
    linkMyAnimeList: "https://myanimelist.net/anime/52367/Isekai_Shikkaku"
  },
  {
    imagem: "imgAnimes/Pseudo Harem.jpg",
    nome: "Pseudo Harem",
    nomeAlternativo: "Giji Harem",
    sinopse: "Um jovem se encontra cercado por um grupo de garotas que aparentam estar interessadas nele romanticamente. No entanto, ele logo descobre que elas estão mais interessadas em seus próprios objetivos e o estão usando para alcançá-los. É uma comédia que explora os mal-entendidos e as situações cômicas que surgem desse pseudo-relacionamento.",
    linkMyAnimeList: "https://myanimelist.net/anime/54968/Giji_Harem"
  },
  {
    imagem: "imgAnimes/I Parry Everything.jpg",
    nome: "I Parry Everything",
    nomeAlternativo: 'Ore wa Subete wo "Parry" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai',
    sinopse: "Um jovem descobre que possui uma habilidade única: a de desviar de qualquer ataque. Com esse poder, ele se torna um espadachim imbatível, enfrentando desafios e inimigos cada vez mais poderosos.",
    linkMyAnimeList: "https://myanimelist.net/anime/57058/Ore_wa_Subete_wo_Parry_suru__Gyaku_Kanchigai_no_Sekai_Saikyou_wa_Boukensha_ni_Naritai"
  },
  {
    imagem: "imgAnimes/The Ossan Newbie Adventurer.jpg",
    nome: "The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible",
    nomeAlternativo: "Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.",
    sinopse: "Kazuma, um homem de meia-idade, decide se tornar um aventureiro em outro mundo. Apesar da falta de experiência, ele utiliza sua inteligência e astúcia para superar obstáculos e se tornar um herói improvável.",
    linkMyAnimeList: "https://myanimelist.net/anime/54913/Shinmai_Ossan_Boukensha_Saikyou_Party_ni_Shinu_hodo_Kitaerarete_Muteki_ni_Naru"
  },
  {
    imagem: "imgAnimes/The Magical Girl.jpg",
    nome: "The Magical Girl and the Evil Lieutenant Used to Be Archenemies",
    nomeAlternativo: "Katsute Mahou Shoujo to Aku wa Tekitai shiteita.",
    sinopse: "Uma garota mágica e um vilão de longa data, que no passado eram inimigos, se unem para enfrentar uma nova ameaça que coloca o mundo em perigo. Juntos, eles precisam superar suas diferenças e trabalhar em equipe.",
    linkMyAnimeList: "https://myanimelist.net/anime/57217/Katsute_Mahou_Shoujo_to_Aku_wa_Tekitai_shiteita"
  },
  {
    imagem: "imgAnimes/A Journey Through Another World.jpg",
    nome: "A Journey Through Another World: Raising Kids While Adventuring",
    nomeAlternativo: "Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu",
    sinopse: "Um jovem é transportado para outro mundo e se vê responsável por criar um grupo de crianças órfãs. Enquanto enfrenta desafios e aventuras, ele busca um caminho para retornar ao seu mundo natal, ao mesmo tempo em que cria laços profundos com as crianças sob sua proteção.",
    linkMyAnimeList: "https://myanimelist.net/anime/57380/Isekai_Yururi_Kikou__Kosodateshinagara_Boukensha_Shimasu"
  },
  {
    imagem: "imgAnimes/VTuber Legend.jpg",
    nome: "VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream",
    nomeAlternativo: "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
    sinopse: "Uma VTuber novata comete um erro ao esquecer de desligar seu stream, revelando sua vida real. Apesar do choque inicial, ela decide aproveitar a oportunidade e usar sua nova fama para construir uma carreira mais significativa como VTuber.",
    linkMyAnimeList: "https://myanimelist.net/anime/54284/VTuber_Nandaga_Haishin_Kiri_Wasuretara_Densetsu_ni_Natteta"
  },
  {
    imagem: "imgAnimes/Dahlia in Bloom.jpg",
    nome: "Dahlia in Bloom: Crafting a Fresh Start with Magical Tools",
    nomeAlternativo: "Madougushi Dahliya wa Utsumukanai",
    sinopse: "Dahlia, uma jovem talentosa em artesanato, recebe um conjunto de ferramentas mágicas. Com a ajuda dessas ferramentas, ela embarca em uma jornada de autodescoberta e crescimento pessoal, enquanto utiliza seus talentos para ajudar os outros e criar um mundo melhor.",
    linkMyAnimeList: "https://myanimelist.net/anime/56449/Madougushi_Dahliya_wa_Utsumukanai"
  },
  {
    imagem: "imgAnimes/Love Is Indivisible by Twins.jpg",
    nome: "Love Is Indivisible by Twins",
    nomeAlternativo: "Koi wa Futago de Warikirenai",
    sinopse: "Jun Shirasaki e as irmãs Jinguuji são amigos de infância e vizinhos. Quando a primeira namorada de Jun, a irmã mais velha Rumi, termina com ele, ela diz algo que complica o relacionamento das três pessoas, seus primeiros amores e seu romance—?",
    linkMyAnimeList: "https://myanimelist.net/anime/55996/Koi_wa_Futago_de_Warikirenai"
  },
  {
    imagem: "imgAnimes/Delico's Nursery.jpg",
    nome: "Delico's Nursery",
    nomeAlternativo: "",
    sinopse: "Dali Delico, um vampiro aristocrata de alto escalão, se vê em um dilema. Encarregado de uma missão crucial pelo Conselho do Pacto Sanguíneo, ele se recusa a cumpri-la. Ao invés disso, é encontrado cuidando de uma criança, desafiando as expectativas de sua classe social. Enquanto isso, uma série de assassinatos aterroriza a comunidade vampírica, e Dali parece ter ligações com uma organização secreta e perigosa. A história explora o conflito entre o dever e os instintos paternais, enquanto Dali tenta conciliar sua vida de nobreza com a responsabilidade de criar um filho.",
    linkMyAnimeList: "https://myanimelist.net/anime/56179/Delicos_Nursery"
  },
  {
    imagem: "imgAnimes/Quality Assurance in Another World.jpg",
    nome: "Quality Assurance in Another World",
    nomeAlternativo: "Kono Sekai wa Fukanzen Sugiru",
    sinopse: "Nikola é apenas uma garota de vila que trabalha em uma pousada... até o dia em que dragões invadem e ela conhece Haga, um estudioso de tudo ao seu redor. Ele faz parte de uma sociedade de elite chamada 'Seeker', criada para resolver uma série de doenças que afligem seu mundo normalmente pacífico. Mas tanto Nikola quanto Haga têm segredos que escondem... segredos que mudarão a existência um do outro...",
    linkMyAnimeList: "https://myanimelist.net/anime/54835/Kono_Sekai_wa_Fukanzen_Sugiru"
  },
  {
    imagem: "imgAnimes/Narenare -Cheer for You!-.jpg",
    nome: "Narenare -Cheer for You!-",
    nomeAlternativo: "Na Nare Hana Nare",
    sinopse: "Narenare -Cheer for You!- é um anime que gira em torno do mundo da torcida organizada. A história se concentra em um grupo de estudantes do ensino médio que decidem se juntar à equipe de torcida de sua escola. Através de treinos intensos, desafios e amizade, elas aprendem a superar seus limites e a trabalhar em equipe para alcançar seus objetivos. O anime explora temas como superação, trabalho em equipe e a importância de perseguir seus sonhos.",
    linkMyAnimeList: "https://myanimelist.net/anime/57099/Na_Nare_Hana_Nare"
  },
  {
    imagem: "imgAnimes/The Elusive Samurai.jpg",
    nome: "The Elusive Samurai",
    nomeAlternativo: "Nige Jouzu no Wakagimi",
    sinopse: "The Elusive Samurai é um anime de ação e aventura ambientado em um mundo de fantasia. A história acompanha um samurai habilidoso e misterioso que vaga por diferentes reinos, enfrentando inimigos poderosos e desvendando intrigas políticas. Com uma estética visual marcante e lutas emocionantes, o anime oferece uma experiência envolvente para os fãs de samurais e aventuras épicas.",
    linkMyAnimeList: "https://myanimelist.net/anime/54724/Nige_Jouzu_no_Wakagimi"
  },
  {
    imagem: "imgAnimes/My Deer Friend Nokotan.jpg",
    nome: "My Deer Friend Nokotan",
    nomeAlternativo: "Shikanoko Nokonoko Koshitantan",
    sinopse: "My Deer Friend Nokotan é uma animação mais leve e focada em um público infantil. A história gira em torno de uma menina que faz amizade com um cervo mágico chamado Nokotan. Juntos, eles vivem diversas aventuras em um mundo fantástico, aprendendo sobre amizade, natureza e a importância de cuidar dos animais. O anime apresenta uma atmosfera alegre e colorida, com personagens adoráveis e mensagens positivas.",
    linkMyAnimeList: "https://myanimelist.net/anime/58426/Shikanoko_Nokonoko_Koshitantan"
  } 
];


// Lista dos Animes em lançamento (visualização na página inicial)
let animesLancamento = [
  {
    imagem: "imgAnimes/OshiNoKo2.webp",
    nome: "Oshi no Ko 2nd Season",
    link: "https://myanimelist.net/anime/55791/Oshi_no_Ko_2nd_Season"
  },
  {
    imagem: "imgAnimes/Alya.webp",
    nome: "Alya Sometimes Hides Her Feelings in Russian",
    link: "https://myanimelist.net/anime/54744/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Alya-san"
  },
  {
    imagem: "imgAnimes/ToweOfGod2.webp",
    nome: "Tower of God: Return of the Prince",
    link: "https://myanimelist.net/anime/52635/Kami_no_Tou__Ouji_no_Kikan"
  },
  {
    imagem: "imgAnimes/Wistoria.webp",
    nome: "Wistoria: Wand and Sword",
    link: "https://myanimelist.net/anime/58059/Tsue_to_Tsurugi_no_Wistoria"
  },
  {
    imagem: "imgAnimes/DaysWithMyStepsister.webp",
    nome: "Days with My Stepsister",
    link: "https://myanimelist.net/anime/52481/Gimai_Seikatsu"
  },
  {
    imagem: "imgAnimes/MakeHeroine.webp",
    nome: "Makeine: Too Many Losing Heroines!",
    link: "https://myanimelist.net/anime/57524/Make_Heroine_ga_Oosugiru"
  },
  {
    imagem: "imgAnimes/NoLonger.jpg",
    nome: "No Longer Allowed in Another World",
    link: "https://myanimelist.net/anime/52367/Isekai_Shikkaku"
  },
  {
    imagem: "imgAnimes/Pseudo Harem.jpg",
    nome: "Pseudo Harem",
    link: "https://myanimelist.net/anime/54968/Giji_Harem"
  },
  {
    imagem: "imgAnimes/I Parry Everything.jpg",
    nome: "I Parry Everything",
    link: "https://myanimelist.net/anime/57058/Ore_wa_Subete_wo_Parry_suru__Gyaku_Kanchigai_no_Sekai_Saikyou_wa_Boukensha_ni_Naritai"
  },
  {
    imagem: "imgAnimes/The Ossan Newbie Adventurer.jpg",
    nome: "The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible",
    link: "https://myanimelist.net/anime/54913/Shinmai_Ossan_Boukensha_Saikyou_Party_ni_Shinu_hodo_Kitaerarete_Muteki_ni_Naru"
  },
  {
    imagem: "imgAnimes/The Magical Girl.jpg",
    nome: "The Magical Girl and the Evil Lieutenant Used to Be Archenemies",
    link: "https://myanimelist.net/anime/57217/Katsute_Mahou_Shoujo_to_Aku_wa_Tekitai_shiteita"
  },
  {
    imagem: "imgAnimes/A Journey Through Another World.jpg",
    nome: "A Journey Through Another World: Raising Kids While Adventuring",
    link: "https://myanimelist.net/anime/57380/Isekai_Yururi_Kikou__Kosodateshinagara_Boukensha_Shimasu"
  },
  {
    imagem: "imgAnimes/VTuber Legend.jpg",
    nome: "VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream",
    link: "https://myanimelist.net/anime/54284/VTuber_Nandaga_Haishin_Kiri_Wasuretara_Densetsu_ni_Natteta"
  },
  {
    imagem: "imgAnimes/Dahlia in Bloom.jpg",
    nome: "Dahlia in Bloom: Crafting a Fresh Start with Magical Tools",
    link: "https://myanimelist.net/anime/56449/Madougushi_Dahliya_wa_Utsumukanai"
  },
  {
    imagem: "imgAnimes/Love Is Indivisible by Twins.jpg",
    nome: "Love Is Indivisible by Twins",
    link: "https://myanimelist.net/anime/55996/Koi_wa_Futago_de_Warikirenai"
  },
  {
    imagem: "imgAnimes/Delico's Nursery.jpg",
    nome: "Delico's Nursery",
    link: "https://myanimelist.net/anime/56179/Delicos_Nursery"
  },
  {
    imagem: "imgAnimes/Quality Assurance in Another World.jpg",
    nome: "Quality Assurance in Another World",
    link: "https://myanimelist.net/anime/54835/Kono_Sekai_wa_Fukanzen_Sugiru"
  },
  {
    imagem: "imgAnimes/Narenare -Cheer for You!-.jpg",
    nome: "Narenare -Cheer for You!-",
    link: "https://myanimelist.net/anime/57099/Na_Nare_Hana_Nare"
  },
  {
    imagem: "imgAnimes/The Elusive Samurai.jpg",
    nome: "The Elusive Samurai",
    link: "https://myanimelist.net/anime/54724/Nige_Jouzu_no_Wakagimi"
  },
  {
    imagem: "imgAnimes/My Deer Friend Nokotan.jpg",
    nome: "My Deer Friend Nokotan",
    link: "https://myanimelist.net/anime/58426/Shikanoko_Nokonoko_Koshitantan"
  },
];
