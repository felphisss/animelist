// Lista dos Animes Gerais
let animes = [
    {
        nome: "Atack on Titan",
        sinopse: "Em um mundo cercado por três muralhas gigantes, a humanidade vive em constante medo dos Titãs, criaturas humanóides gigantes que devoram humanos sem motivo aparente. A história acompanha Eren Yeager e seus amigos que decidem se juntar ao exército para combater os Titãs e recuperar a liberdade da humanidade.",
        linkMyAnimeList: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin?q=shingeki%20no%20&cat=anime",
    },
    {
        nome: "Demon Slayer: Kimetsu no Yaiba",
        sinopse: "Em um Japão da Taisho, Tanjiro Kamado, um garoto bondoso e trabalhador, encontra sua família massacrada por um demônio. Sua irmã mais nova, Nezuko, é a única sobrevivente, mas transformada em um demônio. Determinado a encontrar uma cura para Nezuko e vingar sua família, Tanjiro se torna um caçador de demônios.",
        linkMyAnimeList: "https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba?q=demon%20sla&cat=anime",
    },
    {
        nome: "Naruto",
        sinopse: "Naruto Uzumaki é um jovem ninja que almeja se tornar o Hokage, o líder da vila da Folha, para ganhar o reconhecimento de todos e fazer amigos. Acompanhe sua jornada repleta de aventuras, lutas e desafios.",
        linkMyAnimeList: "https://myanimelist.net/anime/20/Naruto?q=Naruto&cat=anime",
    },
    {
        nome: "One Piece",
        sinopse: "Monkey D. Luffy é um garoto que sonha em se tornar o Rei dos Piratas, encontrando o lendário tesouro One Piece. Acompanhe suas aventuras pelos Sete Mares, fazendo amigos, enfrentando inimigos e desvendando os mistérios do mundo de One Piece.",
        linkMyAnimeList: "https://myanimelist.net/anime/21/One_Piece?q=one%20piece&cat=anime",
    },
    {
        nome: "My Hero Academia",
        sinopse: "Em um mundo onde a maioria das pessoas possuem superpoderes, Izuku Midoriya é um garoto que nasceu sem nenhuma habilidade. No entanto, seu sonho de se tornar um herói não é abalado, e ele encontra uma oportunidade única de realizar seu desejo.",
        linkMyAnimeList: "https://myanimelist.net/anime/31964/Boku_no_Hero_Academia?q=my%20hero%20aca&cat=anime",
    },
    {
        nome: "Death Note",
        sinopse: "Light Yagami, um estudante do ensino médio extremamente inteligente, encontra um misterioso caderno, o Death Note, que concede ao seu portador o poder de matar qualquer pessoa cujo nome seja escrito nele. Obcecado com a ideia de criar um mundo sem crimes, Light inicia uma série de assassinatos, se tornando conhecido como Kira.",
        linkMyAnimeList: "https://myanimelist.net/anime/1535/Death_Note?q=death%20note%20&cat=anime",
    },
    {
        nome: "Fullmetal Alchemist: Brotherhood",
        sinopse: "Os irmãos Edward e Alphonse Elric tentam trazer sua mãe de volta à vida através da alquimia, mas falham e perdem muito no processo. Em busca de uma forma de restaurar seus corpos, eles embarcam em uma jornada perigosa.",
        linkMyAnimeList: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood?q=full%20metal%20alch&cat=anime",
    },
    {
        nome: "No Game No Life",
        sinopse: "No Game No Life é um anime que transporta os irmãos Sora e Shiro, dois hikikomori e mestres dos jogos online, para um mundo fantástico onde todas as disputas são resolvidas através de jogos. Neste novo universo, a humanidade foi reduzida a uma pequena cidade eos irmãos precisam utilizar suas habilidades para salvar a raça humana da extinção, enfrentando diversas raças e desafios em jogos cada vez mais complexos.",
        linkMyAnimeList: "https://myanimelist.net/anime/19815/No_Game_No_Life"
      },
      {
        nome: "Blue Period",
        sinopse: "Yatora Yaguchi, um estudante popular e sem objetivos, descobre um novo mundo ao se apaixonar pela arte. Acompanhe sua jornada enquanto ele se dedica intensamente aos estudos e enfrenta os desafios de entrar em uma das melhores escolas de artes do Japão.",
        linkMyAnimeList: "https://myanimelist.net/anime/46352/Blue_Period"
      },
      {
        nome: "Grand Blue",
        sinopse: "Iori Kitahara se muda para uma cidade universitária e logo se junta ao clube de mergulho da universidade. Acompanhe as aventuras hilárias desse grupo de amigos enquanto eles exploram o mundo do mergulho, fazem novas amizades e aproveitam ao máximo a vida universitária.",
        linkMyAnimeList: "https://myanimelist.net/anime/37105/Grand_Blue"
      },
      {
        nome: "Charlotte",
        sinopse: "Yu Otosaka possui um poder sobrenatural que lhe permite roubar os poderes de outras pessoas. Após um incidente, ele se junta a uma escola especial para estudantes com habilidades sobrenaturais e descobre os perigos e responsabilidades que vêm com seus poderes.",
        linkMyAnimeList: "https://myanimelist.net/anime/28999/Charlotte"
      },
      {
        nome: "Haikyuu!!",
        sinopse: "Shoyo Hinata, um garoto baixo, se apaixona pelo vôlei após assistir a um jogo de um jogador talentoso. Determinado a se tornar um jogador de vôlei de destaque, ele entra para o clube de vôlei da escola e, junto com seus companheiros de equipe, enfrenta desafios e obstáculos para alcançar seus objetivos.",
        linkMyAnimelist: "https://myanimelist.net/anime/20583/Haikyuu"
      }
];

// Lista dos Animes em lançamento (visualização na página inicial)
let animesLancamento = [
  {
    imagem: "imgAnimes/OshiNoKo2.webp",
    nome: "Oshi no Ko 2",
    link: "https://myanimelist.net/anime/55791/Oshi_no_Ko_2nd_Season"
  },
  {
    imagem: "imgAnimes/Alya.webp",
    nome: "Alya Sometimes Hides Her Feelings in Russian",
    link: "https://myanimelist.net/anime/54744/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Alya-san"
  },
  {
    imagem: "imgAnimes/ToweOfGod2.webp",
    nome: "Tower Of God 2",
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
