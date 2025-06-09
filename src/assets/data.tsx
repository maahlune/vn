export interface Translation {
    title: string;
    image: string;
    description: string;
    status: string;
    statusText?: string; // Agora é opcional
    translator: string;
    genres: string[];
    platforms?: string[];
    downloadLink: string;
}

// Função utilitária para gerar statusText baseado no status
export const getStatusText = (status: string): string => {
    switch (status) {
        case "complete":
            return "Tradução Completa";
        case "in-progress":
            return "Em Progresso";
        case "paused":
            return "Pausada";
        case "planned":
            return "Planejada";
        default:
            return "Status Desconhecido";
    }
};

export const translations: Translation[] = [
    {
        title: "Steins;Gate",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/412830/header.jpg?t=1715703398",
        description:
            "Uma história de ficção científica onde um grupo de amigos descobre como enviar mensagens para o passado, alterando eventos e criando realidades alternativas.",
        status: "complete",
        translator: "VNX+",
        genres: ["Sci-Fi", "Drama", "Romance"],
        platforms: ["JAST", "Steam"],
        downloadLink: "https://steins.uvnworks.com/traducao-steinsgate-lancada/",
    },
    {
        title: "Katawa Shoujo",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/3068300/header.jpg",
        description:
            "Um jovem com arritmia cardíaca é transferido para uma escola para estudantes com deficiências físicas, onde conhece cinco garotas com quem desenvolve relacionamentos.",
        status: "complete",
        translator: "VNX+",
        genres: ["Romance", "Drama", "Slice of Life"],
        platforms: ["Windows, Mac, Linux"],
        downloadLink: "https://vnx.uvnworks.com/katawa/",
    },
    {
        title: "Nekopara Vol. 1",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/333600/header.jpg",
        description:
            "Kashou Minaduki abre sua própria confeitaria, mas descobre que duas de suas garotas-gato, Chocola e Vanilla, esconderam-se em suas caixas para irem com ele.",
        status: "complete",
        translator: "VNX+",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/nekopara-vol-1/",
    },
    {
        title: "Nekopara Vol. 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/420110/header.jpg",
        description:
            "A continuação das aventuras na confeitaria La Soleil, agora focando nas gêmeas felinas Azuki e Coconut, que tentam superar suas diferenças.",
        status: "complete",
        translator: "VNX+",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/nekopara-vol-2/",
    },
    {
        title: "Nekopara Vol. 3",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/602520/header.jpg",
        description:
            "A história continua com foco nas últimas garotas-gato, Cinnamon e Maple, enquanto a confeitaria La Soleil se prepara para um importante evento de verão.",
        status: "complete",
        translator: "VNX+",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/nekopara-vol-3/",
    },
    {
        title: "Doki Doki Literature Club",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/698780/header.jpg",
        description:
            "Um jogo de namoro fofinho onde você escreve poemas para conquistar o coração de garotas em um clube literário, mas que esconde segredos perturbadores.",
        status: "complete",
        translator: "VNX+",
        genres: ["Horror Psicológico", "Romance", "Metaficção"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/doki-doki-literature-club",
    },
    {
        title: "Reflexia Prototype Ver.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1997680/header.jpg",
        description:
            "Uma visual novel experimental que explora temas de identidade e realidade através da história de uma jovem que descobre um espelho com poderes sobrenaturais.",
        status: "complete",
        translator: "VNX+",
        genres: ["Mistério", "Sobrenatural", "Drama"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/1997680/REFLEXIA_Prototype_ver/",
    },
    {
        title: "Clea",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/981020/header.jpg",
        description:
            "Clea é um jogo do gênero survival horror, livre de sustos e fortemente baseado nas habilidades do jogador para determinar o futuro dos personagens.",
        status: "complete",
        translator: "VNX+",
        genres: ["Terror", "Suspense", "Puzzle"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/981020/Clea/",
    },
    {
        title: "Lynne",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/885640/header.jpg",
        description: "Lynne é uma história curta sobre a coisa mais assustadora deste mundo - ser uma adolescente.",
        status: "complete",
        translator: "VNX+",
        genres: ["Terror", "Indie"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/885640/Lynne/",
    },
    {
        title: "fault - milestone one",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/286260/header.jpg",
        description:
            "A história gira em torno de uma princesa e sua guarda costas que, para escaparem de um ataque brutal ao reino de Rughzenhaide, acidentalmente são teleportadas para o outro lado do mundo. Agora, elas precisam encontrar seu caminho de volta para sua terra natal e retomar o controle do reino.",
        status: "complete",
        translator: "VNX+ e Zero Force",
        genres: ["Romance"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/286260/fault__milestone_one/",
    },
    {
        title: "Reflection",
        image: "https://i0.wp.com/vnx.uvnworks.com/wp-content/uploads/2024/12/reflection.png?resize=768%2C432&ssl=1",
        description:
            "Reflection é uma curta história de terror sobre uma universitária que estuda folclore e o ocultismo.",
        status: "complete",
        translator: "VNX+",
        genres: ["Terror", "Indie"],
        platforms: ["Itch.io"],
        downloadLink: "https://vnx.uvnworks.com/reflection/",
    },
    {
        title: "The Waters Above: Prelude",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/885650/header.jpg",
        description:
            "Uma gigantesca cúpula chamada de “Cúpula do Céu” separa a Terra do vasto oceano que fica acima dela. Neste mundo, as ninfas do mar cuidam das estrelas do céu, dedicando suas vidas a elas.",
        status: "complete",
        translator: "VNX+",
        genres: ["Casual", "Fofo"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/the-waters-above-prelude/",
    },
    {
        title: "Umineko When They Cry",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/406550/header.jpg",
        description:
            "Umineko When They Cry é a segunda série de Sound Novels lançada pela 07th Expansion. A versão da Steam apresenta sprites de personagens renovados, que podem ser alternados com a arte clássica.",
        status: "complete",
        translator: "Knox Translations",
        genres: ["Mistério"],
        downloadLink: "https://knox.fansub.com.br",
    },
    {
        title: "Narcissu 1+2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/264380/header.jpg",
        description:
            'Esta é uma história de doença e sofrimento; de medicamentos e efeitos adversos; de cicatrizes de toracotomia e venenos celulares; dos vivos que não podem deixar de morrer e dos moribundos que não conseguem deixar de viver; de um lugar de descanso que não é "no 7º andar" nem "em casa".',
        status: "complete",
        translator: "Zero Force",
        genres: ["Drama", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://zeroforcetranslations.wordpress.com/",
    },
    {
        title: "Shuffle!",
        image: "https://animeataraxia.wordpress.com/wp-content/uploads/2016/08/se0001.jpg?w=640",
        description:
            "Rin é um estudante normal do ensino médio que vive numa época em que pessoas de mundos diferentes coexistem. Um dia, os pais de duas garotas de diferentes mundos - o mundo dos Deuses e o mundo dos Demônios - se mudam para a casa ao lado da dele.",
        status: "complete",
        translator: "Zero Force",
        genres: ["Romance", "Comédia", "Harem", "Fantasia"],
        downloadLink: "https://zeroforcetranslations.wordpress.com/",
    },
    {
        title: "Clannad",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/324160/header.jpg",
        description:
            "Um estudante do ensino médio que se junta a um clube escolar e conhece várias garotas, cada uma com suas próprias histórias e desafios.",
        status: "complete",
        translator: "Zero Force",
        genres: ["Drama", "Romance", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://zeroforcetranslations.wordpress.com/",
    },
    {
        title: "Planetarian HD",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/623080/header.jpg",
        description:
            "Planetarian é uma visual novel pós-apocalíptica que se passa em um mundo devastado por uma guerra. A história segue um protagonista solitário que encontra uma robô chamada Yumemi Hoshino em um planetário abandonado.",
        status: "complete",
        translator: "Taiyaki Club",
        genres: ["Drama", "Romance", "Sci-Fi"],
        platforms: ["Steam"],
        downloadLink: "https://drive.google.com/file/d/12xTNKWrWmy3R7dRowEO6aOysGY-dbzhj/view",
    },
    {
        title: "Kanon",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2850310/header.jpg",
        description:
            "Kanon é uma visual novel que segue a história de um jovem que retorna a uma cidade onde passou um inverno especial anos atrás, reencontrando pessoas e descobrindo segredos do passado.",
        status: "complete",
        translator: "Taiyaki Club",
        genres: ["Drama", "Romance", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://taiyakiclub.wordpress.com/kanon/",
    },
    {
        title: "Rewrite",
        image: "https://d31u62iyrzhln9.cloudfront.net/images/RewriteBanner.original.jpg",
        description:
            "A história de Rewrite se passa na cidade de Kazamatsuri, onde projetos de arborização a transformou em um lugar cheio de árvores e flores enormes. Apesar de sua aparência rural, possui também vários dos elementos tradicionalmente encontrado nas regiões mais desenvolvidas. Kazamatsuri, idealizada com um enredo moderno, ainda não deixa de passar um ar de nostalgia e mistério.",
        status: "complete",
        translator: "Meow Works",
        genres: ["Drama", "Romance", "Fantasia"],
        downloadLink: "https://meowworks.gitlab.io/page/rewrite/",
    },
    {
        title: "A Kiss for the Petals: Remembering How We Met",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/397270/header.jpg",
        description:
            "Segue a história de duas garotas, Sayaka e Mai, que se reencontram após anos separadas e redescobrem seus sentimentos uma pela outra.",
        status: "complete",
        translator: "Zero Force",
        genres: ["Romance", "Yuri"],
        platforms: ["Steam"],
        downloadLink: "https://zeroforcetranslations.wordpress.com/",
    },
    {
        title: "Lucy ~A Eternidade Que Ela Desejava~",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/430960/header.jpg",
        description:
            "Lucy ~A Eternidade Que Ela Desejava~ é uma visual novel que conta a história de Lucy, uma jovem que vive em um mundo futurista e busca entender o significado da vida e da morte.",
        status: "complete",
        translator: "Zero Force",
        genres: ["Romance", "Drama", "Sci-Fi"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/430960/Lucy_A_Eternidade_Que_Ela_Desejava/",
    },
    {
        title: "Oreimo",
        image: "https://latilen.wordpress.com/wp-content/uploads/2014/05/ore_no_imouto.png?w=600",
        description:
            "Oreimo é uma visual novel baseada na popular série de light novels e animes, onde o protagonista, Kyousuke, descobre que sua irmã Kirino é uma otaku secreta e se envolve em suas aventuras no mundo dos jogos e animes.",
        status: "complete",
        translator: "Hanabi Works",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["PSP"],
        downloadLink: "https://hanabiworks.github.io/oreimo/",
    },
    {
        title: "Toradora Portable",
        image: "https://tonkuniverse.wordpress.com/wp-content/uploads/2011/05/td4.jpg",
        description:
            "Toradora Portable é uma visual novel baseada na popular série de light novels e animes, seguindo a história de Ryuuji Takasu e Taiga Aisaka, dois estudantes do ensino médio que se ajudam mutuamente em suas conquistas amorosas.",
        status: "complete",
        translator: "Hanabi Works",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["PSP"],
        downloadLink: "https://hanabiworks.github.io/toradora/",
    },
    {
        title: "NekoMiko",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/969700/header.jpg",
        description:
            "NekoMiko é uma visual novel erótica que segue a história de um jovem que se envolve com garotas-gato em um mundo onde humanos e seres sobrenaturais coexistem.",
        status: "complete",
        translator: "EroMangá",
        genres: ["Romance", "Slice of Life", "+18"],
        platforms: ["Steam"],
        downloadLink: "https://eromangatranslations.blogspot.com/2021/03/nekomiko.html",
    },
    {
        title: "9-nine: Ep 1",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/976390/header.jpg",
        description:
            "9-nine: Ep 1 é uma visual novel que segue a história de um jovem que se envolve com garotas-gato em um mundo onde humanos e seres sobrenaturais coexistem.",
        status: "complete",
        translator: "EroMangá",
        genres: ["Romance", "Slice of Life", "+18"],
        platforms: ["Steam"],
        downloadLink: "https://eromangatranslations.blogspot.com/2021/09/9-nine-episode-1-18.html",
    },
    {
        title: "Yosuga no Sora",
        image: "https://i.pinimg.com/originals/79/4d/e5/794de57b0ad2095070a13edeb7ee3c8f.jpg",
        description:
            "Haruka e Sora, irmãos gêmeos que se mudam para o campo após a morte de seus pais e enfrentam dilemas morais e emocionais em suas vidas.",
        status: "in-progress",
        translator: "Hanabi Works",
        genres: ["Romance", "Drama", "Harem"],
        downloadLink: "https://hanabiworks.github.io/yosuganosora/",
    },
    {
        title: "Tsukihime Remake",
        image: "https://www.nintendo-insider.com/wp-content/uploads/2024/12/tsukihime_a_piece_of_blue_glass_moon_review_banner-300x169.jpg",
        description:
            "Shiki Tohno, um jovem com a habilidade de ver linhas de morte, enquanto ele investiga eventos sobrenaturais e se envolve com várias garotas.",
        status: "in-progress",
        translator: "Hanabi Works",
        genres: ["Romance", "Mistério", "Fantasia"],
        downloadLink: "https://hanabiworks.github.io/tsukihime/",
    },
    {
        title: "Summer Pockets",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/897220/header.jpg",
        description:
            "Um jovem chamado Hairi Takahara visita uma ilha para passar as férias de verão e acaba se envolvendo com várias garotas, cada uma com suas próprias histórias e segredos.",
        status: "in-progress",
        translator: "Hanabi Works",
        genres: ["Romance", "Drama", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://hanabiworks.github.io/summerpockets/",
    },
    {
        title: "Gin'iro, Haruka",
        image: "https://pbs.twimg.com/media/GMEI_p_acAAG1NE.jpg",
        description:
            "Haruka, uma jovem que vive em um mundo onde a magia e a tecnologia coexistem. Ela embarca em uma jornada para descobrir seu verdadeiro destino e enfrentar desafios emocionais.",
        status: "in-progress",
        translator: "Hanabi Works",
        genres: ["Romance", "Drama", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://hanabiworks.github.io/giniruharuka/",
    },
];
