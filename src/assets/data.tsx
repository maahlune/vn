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

// Taxonomia padronizada de gêneros:
// - Romance: Relacionamentos e histórias de amor
// - Drama: Histórias emocionalmente intensas
// - Comédia: Conteúdo humorístico
// - Slice of Life: Vida cotidiana e situações realistas
// - Ficção Científica: Elementos futuristas e científicos
// - Horror: Terror e suspense psicológico
// - Mistério: Investigação e enigmas
// - Fantasia: Elementos mágicos e sobrenaturais
// - Sobrenatural: Elementos místicos e paranormais
// - Suspense: Tensão e expectativa
// - Aventura: Jornadas e exploração
// - Puzzle: Elementos de quebra-cabeça
// - Adulto: Conteúdo maduro (+18)

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
        genres: ["Ficção Científica", "Drama", "Romance"],
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
        platforms: ["Steam"],
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
        genres: ["Horror", "Romance", "Suspense"],
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
        genres: ["Horror", "Suspense", "Puzzle"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/981020/Clea/",
    },
    {
        title: "Lynne",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/885640/header.jpg",
        description: "Lynne é uma história curta sobre a coisa mais assustadora deste mundo - ser uma adolescente.",
        status: "complete",
        translator: "VNX+",
        genres: ["Horror", "Drama"],
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
        genres: ["Fantasia", "Aventura"],
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
        genres: ["Horror", "Sobrenatural"],
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
        genres: ["Fantasia", "Slice of Life"],
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
        genres: ["Mistério", "Horror", "Suspense"],
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
        genres: ["Romance", "Comédia", "Fantasia"],
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
        genres: ["Drama", "Romance", "Ficção Científica"],
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
        genres: ["Romance", "Drama", "Ficção Científica"],
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
        genres: ["Romance", "Adulto"],
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
        genres: ["Romance", "Adulto"],
        platforms: ["Steam"],
        downloadLink: "https://eromangatranslations.blogspot.com/2021/09/9-nine-episode-1-18.html",
    },
    {
        title: "9-nine: Ep 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1033420/header.jpg",
        description: "Este é o segundo episódio de 9-nine, dando continuidade ao 'episódio 1 do jogo'.",
        status: "complete",
        translator: "EroMangá",
        genres: ["Romance", "Adulto"],
        platforms: ["Steam"],
        downloadLink: "https://eromangatranslations.blogspot.com/2021/11/9-nine-episode-2-sendo-traduzido.html",
    },
    {
        title: "9-nine: Ep 3",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1142830/header.jpg",
        description: "Este é o terceiro episódio de 9-nine, dando continuidade ao 'episódio 1 e 2 do jogo'.",
        status: "complete",
        translator: "EroMangá",
        genres: ["Romance", "Adulto"],
        platforms: ["Steam"],
        downloadLink: "https://eromangatranslations.blogspot.com/2022/08/9-episodio-3-sendo-traduzido.html",
    },
    {
        title: "Yosuga no Sora",
        image: "https://zettairenai.wordpress.com/wp-content/uploads/2024/02/yosuga-1.jpg",
        description:
            "Haruka e Sora, irmãos gêmeos que se mudam para o campo após a morte de seus pais e enfrentam dilemas morais e emocionais em suas vidas.",
        status: "in-progress",
        translator: "Hanabi Works",
        genres: ["Romance", "Drama"],
        downloadLink: "https://hanabiworks.github.io/yosuganosora/",
    },
    {
        title: "Tsukihime Remake",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202405/2913/cdbe87ecb4352457ce1e2552b80f568a214e70d76fb70fbb.jpg?w=440",
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
    {
        title: "Steins;Gate 0",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/825630/header.jpg",
        description:
            "Sequência de Steins;Gate, que explora uma linha do tempo alternativa onde o protagonista, Okabe Rintarou, não consegue salvar Kurisu Makise e enfrenta as consequências emocionais dessa perda.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Ficção Científica", "Drama", "Romance"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/steins-gate-0/",
    },
    {
        title: "Chaos;Head Noah",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1961950/header.jpg",
        description:
            "Chaos;Head Noah é uma visual novel de terror psicológico que segue a história de Takumi Nishijo, um jovem que começa a ter alucinações e se vê envolvido em uma série de assassinatos misteriosos.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Horror", "Mistério", "Ficção Científica"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/chaoshead-noah/",
    },
    {
        title: "Karakara",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/487430/header.jpg",
        description:
            "A história segue um jovem chamado Kenta, que encontra uma garota misteriosa chamada Momo e juntos eles enfrentam desafios emocionais e físicos.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Romance", "Drama", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/karakara/",
    },
    {
        title: "Karakara 2",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/745850/header.jpg",
        description:
            "Karakara 2 é a continuação da história de Kenta e Momo, onde eles enfrentam novos desafios e desenvolvem ainda mais seu relacionamento.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Romance", "Drama", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/karakara-2/",
    },
    {
        title: "Chaos;Head",
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/Chaos_Head_game_cover.jpg",
        description:
            "Chaos;Head é uma visual novel de terror psicológico que segue a história de Takumi Nishijo, um jovem que começa a ter alucinações e se vê envolvido em uma série de assassinatos misteriosos.",
        status: "complete",
        translator: "Aozora",
        genres: ["Horror", "Mistério", "Ficção Científica"],
        platforms: ["PC"],
        downloadLink: "https://aozorauwu.github.io/Aozora/",
    },
    {
        title: "Sakura Swim Club",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/402180/header.jpg",
        description:
            "Um jovem chamado Kaede, que se junta ao clube de natação da escola e se envolve com várias garotas, cada uma com suas próprias histórias e desafios.",
        status: "complete",
        translator: "EF Visual Novel",
        genres: ["Romance", "Comédia", "Esporte"],
        platforms: ["Steam"],
        downloadLink: "https://drive.google.com/file/d/1DuEWvWbVa1Immaeb4PauyiA7fUhSjIdm/edit",
    },
    {
        title: "Coffee Talk",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/914800/header.jpg",
        description:
            "Coffee Talk é uma visual novel onde você assume o papel de um barista em um café em Seattle, atendendo a clientes de diferentes raças e espécies, enquanto ouve suas histórias e resolve seus problemas.",
        status: "complete",
        translator: "Toge Productions",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://store.steampowered.com/app/914800/Coffee_Talk/",
    },
    {
        title: "Your Turn to Die",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2067780/header.jpg",
        description:
            "Your Turn to Die é um jogo de aventura e mistério onde você deve tomar decisões difíceis para sobreviver em um jogo mortal, enquanto tenta descobrir a verdade por trás dos eventos que levaram você e outros personagens a essa situação.",
        status: "complete",
        translator: "Maya Ooue",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://teapartyprojectrpg.tumblr.com/post/187847993425/your-turn-to-die-tradu%C3%A7%C3%A3o",
    },
    {
        title: "Tada no Ai",
        image: "https://www.greenpixel.com.br/wp-content/uploads/edd/2018/11/a.png",
        description:
            "Tada no Ai é uma visual novel que conta a história de Caio Mitsukami, e sua vida que gira entorno de sua irmã Cinthia, sua amiga Sofia e seus novos colegas de turma",
        status: "complete",
        translator: "Green Pixel",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Green Pixel"],
        downloadLink: "https://www.greenpixel.com.br/downloads/tada-no-ai/",
    },
    {
        title: "Reviver: Orange",
        image: "https://www.greenpixel.com.br/wp-content/uploads/edd/2018/11/banner-reviver-orange.jpg",
        description:
            "A história se passa no ano de 2020, numa cidade fictícia chamada Hokkai, no Japão. O protagonista é um otaku que irá começar seu primeiro ano na faculdade, num curso de artes, depois de uma frustante e tediosa infância e pré-adolescência. Mal sabia ele que sua vida mudaria a partir dai, tendo que tomar decisões complexas e dificeis que irão assegurar seu futuro com diversos novos personagens introduzidos em sua vida. O valentão da escola, a garota estranha e quieta, a tsundere, a popular, o líder de turma entre outros.",
        status: "complete",
        translator: "Green Pixel",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Green Pixel"],
        downloadLink: "https://www.greenpixel.com.br/downloads/reviver-orange/",
    },
    {
        title: "Nekopara Vol. 4",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1406990/header.jpg",
        description:
            "A história continua com Kashou Minaduki e suas garotas-gato, Chocola, Vanilla, Azuki, Coconut, Cinnamon e Maple, enquanto eles enfrentam novos desafios e aventuras na confeitaria La Soleil.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/nekopara-vol-4/",
    },
    {
        title: "Nekopara Extra",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/899970/header.jpg",
        description:
            "Nekopara Extra é uma história adicional que se passa no universo de Nekopara, focando em momentos especiais e interações entre Kashou Minaduki e suas garotas-gato.",
        status: "in-progress",
        translator: "VNX+",
        genres: ["Romance", "Comédia", "Slice of Life"],
        platforms: ["Steam"],
        downloadLink: "https://vnx.uvnworks.com/nekopara-vol-extra/",
    },
    {
        title: "Nothing Special",
        image: "https://img.itch.zone/aW1hZ2UvMTIyNDIwNS83MTM3NjAzLnBuZw==/original/aZ520R.png",
        description: "Um jogo curto e perturbador sobre ser mantido em cativeiro por uma garota misteriosa.",
        status: "complete",
        translator: "Sekai VN",
        genres: ["Horror", "Suspense"],
        platforms: ["Itch.io"],
        downloadLink: "https://www.sekaivisualnovels.com/p/vn-ptbr-nothing-special.html",
    },
    {
        title: "Without Within",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/345650/header.jpg",
        description:
            "Without Within é uma visual novel de terror psicológico que explora temas de solidão e desespero, onde o protagonista deve enfrentar seus próprios demônios internos.",
        status: "complete",
        translator: "Sekai VN",
        genres: ["Horror", "Suspense"],
        platforms: ["Steam"],
        downloadLink: "https://www.sekaivisualnovels.com/p/sekaivn-without-within.html",
    },
    {
        title: "Snatcher",
        image: "https://cdn2.steamgriddb.com/thumb/3e40da343b52920d5ff6d0401001a9a9.jpg",
        description:
            "Snatcher é um clássico jogo de aventura e ficção científica criado por Hideo Kojima, onde o jogador assume o papel de um detetive que investiga uma série de assassinatos cometidos por seres robóticos chamados Snatchers.",
        status: "complete",
        translator: "Amusement Factory",
        genres: ["Romance", "Comédia", "Slice of Life"],
        downloadLink: "https://www.amusementfactory.com.br/msx/snatcher/",
    },
    {
        title: "Tokyo Alice",
        image: "https://t.vndb.org/cv/66/6866.jpg",
        description:
            "Tokyo Alice é uma visual novel que segue a história de uma jovem chamada Alice, que vive em Tóquio e enfrenta desafios emocionais e sociais enquanto busca seu lugar no mundo.",
        status: "complete",
        translator: "Velvet Rose",
        genres: ["Slice of Life"],
        downloadLink: "https://velvetrosestl.wordpress.com/projetos/",
    },
    {
        title: "Carpe Diem",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/423880/header.jpg",
        description:
            "Nessa muito pequena novela gráfica, você irá jogar como Jung que está conhecendo e saindo com uma garota chamada Ai. Perca seu tempo preciosamente.",
        status: "complete",
        translator: "Moonlit Works",
        platforms: ["Steam"],
        genres: ["Romance", "Comédia", "Slice of Life"],
        downloadLink: "https://store.steampowered.com/app/423880/Carpe_Diem/",
    },
    {
        title: "Saya no Uta",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/702050/header.jpg",
        description:
            "Saya no Uta é uma visual novel de terror psicológico que segue a história de um jovem chamado Fuminori, que após um acidente, começa a ver o mundo de uma maneira distorcida e grotesca, e se envolve com uma criatura chamada Saya.",
        status: "complete",
        translator: "Zero Force",
        platforms: ["Steam"],
        genres: ["Horror", "Romance", "Suspense"],
        downloadLink: "https://mega.nz/file/I4pG3LjR#guVbwUz3hmxTaCWyRm806dtF3jn_lLW7aRkyKK-gScA",
    },
    {
        title: "X-Change",
        image: "https://t.vndb.org/cv.t/35/88335.jpg",
        description:
            "X-Change é uma visual novel erótica que segue a história de um jovem que, após um experimento científico, se transforma em uma mulher e deve lidar com as consequências dessa mudança.",
        status: "complete",
        translator: "Tiozinho",
        genres: ["Adulto", "Romance"],
        downloadLink: "https://romhackers.org/traducoes/computador/pc/x-change-po.b.r.e",
    },
    {
        title: "Viper-M1",
        image: "https://images.launchbox-app.com/8b43ca09-1536-436c-8bd2-d827b5951e3f.jpg",
        description:
            "Viper-M1 é uma visual novel erótica que segue a história de um jovem piloto de caça que se envolve com várias garotas enquanto participa de missões perigosas.",
        status: "complete",
        translator: "Tiozinho",
        genres: ["Adulto", "Romance"],
        downloadLink: "https://romhackers.org/traducoes/computador/pc/hyper-animation-series-viper-m1-po.b.r.e",
    },
    {
        title: "Divi-Dead",
        image: "https://t.vndb.org/cv/80/81080.jpg",
        description:
            "Divi-Dead é uma visual novel de terror psicológico que segue a história de um jovem que se envolve em eventos sobrenaturais e deve desvendar mistérios sombrios enquanto lida com suas próprias emoções.",
        status: "complete",
        translator: "Tiozinho",
        platforms: ["Online"],
        genres: ["Adulto", "Romance"],
        downloadLink: "https://tss.asenheim.org/",
    },
    {
        title: "Over The Rainbow",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRNxfHoLoG_jAzIZMW4Zi6kVYBblHAc_v8ib7k_VfZh_wc_B8s487mUIFUNazMOmKFqb5ifJ5rjRDpbgzhsWmvgv9gk1RGsqeW-HpJ6dIIl2MpOEkXv1_oNWi194rYdff3_12BA9nxWVHI/s1600/cats.jpg",
        description:
            "Miku, uma jovem de 19 anos que sofre uma doença que paralisou suas pernas e, como se não fosse o suficiente, deixou ela com a mentalidade de uma eterna criança de sete anos.",
        status: "complete",
        translator: "Tiozinho",
        genres: ["Romance"],
        downloadLink: "https://visualnovelptbr.blogspot.com/2014/07/niji-no-kanata-ni-agora-traduzida-para.html",
    },
    {
        title: "Phenomeno",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL71J9_asutCO4TnyKeRIRBWupHIp0BqH4d2Bf1WeyPIIDHN29mzYZsrhBFhAnebLD5fZueoOOjmVz8nFSnhtk6xccNCN5VDmCh7J36N0dwB8pO-_oF2nVGSWmJgQO_t7noTHKkyZ7fK6X/s1600/8BRxYit.jpg",
        description:
            "Yamada Nagito, um estudante universitário que vive longe de casa precisando de um lugar barato para viver, descobre uma misteriosa casa que 'concede desejos' por um preço extremamente baixo. Algumas noites após começar a viver nesta casa, elecomeça a ouvir estranhos rangidos.",
        status: "complete",
        translator: "Ohayo Scans",
        genres: ["Horror", "Sobrenatural"],
        downloadLink: "https://www.mirrored.to/files/KCTG51QY/_OS__Phenomeno_-_v1.0.rar_links",
    },
    {
        title: "True Love",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5CCpwPc9ISh5IKyEZY12P0czXU0hpPLT-H9I3KfRdOAXWVJHECHXv5Tz0wrCRgrr1IVwOUfQeApdcJfIVKpWfafbDFc-eeGm6wZ8-1CkydfyYcKPNtUdQudao-khsdwaRwLAncvwGsIbo/s1600/True_Love_001.jpg",
        description:
            "True Love é uma visual novel clássica onde você assume o papel de um estudante do ensino médio que deve conquistar o coração de várias garotas, enfrentando desafios emocionais e sociais.",
        status: "complete",
        translator: "Johny Bravo",
        platforms: ["Online"],
        genres: ["Romance", "Comédia", "Slice of Life"],
        downloadLink: "https://tss.asenheim.org/",
    },
    {
        title: "Ichigokuruiza",
        image: "https://t.vndb.org/cv/86/60486.jpg",
        description:
            "Depois de ser sequestrado, Ren Kizirushi é forçado a curar as doenças dos fiéis de um certo tempo, fazendo-os beber do seu sangue.",
        status: "complete",
        translator: "Maya Ooue",
        genres: ["Horror", "Romance", "Suspense"],
        downloadLink: "https://teaparty-itigokuruiza.carrd.co/",
    },
    {
        title: "Higanbana no Saku Yoru Ni - A Primeira Noite",
        image: "https://t.vndb.org/cv/33/91333.jpg",
        description:
            "Visual novel de terror psicológico que segue a história de um estudante do ensino médio que se envolve com eventos sobrenaturais e deve desvendar mistérios sombrios enquanto lida com suas próprias emoções.",
        status: "complete",
        translator: "Kikachan Games",
        genres: ["Horror", "Suspense", "Sobrenatural"],
        downloadLink: "https://kikachangames.github.io/higanbana1-pt-br/",
        platforms: ["PC"],
    },
    {
        title: "Higanbana no Saku Yoru Ni - A Segunda Noite",
        image: "https://kikachangames.github.io/projetos/00.jpg",
        description:
            "Continuação da história de Higanbana no Saku Yoru Ni, onde o protagonista enfrenta novos desafios e mistérios em um ambiente escolar assombrado.",
        status: "complete",
        translator: "Kikachan Games",
        genres: ["Horror", "Suspense", "Sobrenatural"],
        downloadLink: "https://kikachangames.github.io/higanbana2/",
        platforms: ["PC", "Android"],
    },
    {
        title: "Air",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2983250/header.jpg",
        description:
            "Air é uma visual novel que segue a história de Yukito Kunisaki, um jovem viajante que chega a uma cidade costeira em busca de uma garota misteriosa chamada Misuzu.",
        status: "complete",
        translator: "Kikachan Games",
        genres: ["Romance", "Drama", "Fantasia"],
        downloadLink: "https://kikachangames.github.io/air/",
        platforms: ["PC", "Android"],
    },
    {
        title: "Higurashi no Naku Koro ni - Kuradashi-hen",
        image: "https://t.vndb.org/cv/29/97229.jpg",
        description:
            "Kuradashi-hen é um arco da série Higurashi no Naku Koro ni que se passa após os eventos de Kai, onde os personagens principais enfrentam novos desafios e mistérios em sua cidade natal.",
        status: "complete",
        translator: "Kikachan Games",
        genres: ["Mistério", "Horror", "Suspense"],
        downloadLink: "https://kikachangames.github.io/kuradashi/",
        platforms: ["PC"],
    },
    {
        title: "Sayonara o Oshiete ~Comment te Dire Adieu~",
        image: "https://t.vndb.org/sf/09/8709.jpg",
        description:
            "Inquietação e pesadelos surgem em ataques repentinos, causando uma tensão, uma fobia social que começa a crescer cada vez mais a cada dia.",
        status: "in-progress",
        translator: "Kikachan Games",
        genres: ["Adulto", "Horror", "Suspense"],
        downloadLink: "https://kikachangames.github.io/sayooshi/",
        platforms: ["PC"],
    },
    {
        title: "MOON.",
        image: "https://t.vndb.org/sf/65/6865.jpg",
        description:
            "Minha mãe, que não estava ao meu lado há muito tempo, voltou. Minha mãe, que eu não via há muito tempo - desde que foi para um retiro espiritual da seita religiosa FARGO, voltou. Finalmente quando pensei que teria uma vida feliz, minha mãe morre misteriosamente. Por que ela morreu? O que estava acontecendo naquele lugar?",
        status: "in-progress",
        translator: "Kikachan Games",
        genres: ["Fantasia", "Drama", "Romance"],
        downloadLink: "https://kikachangames.github.io/moon/",
        platforms: ["PC"],
    },
    {
        title: "Koropokkur in Love ~A Little Fairy’s Tale~",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/915560/header.jpg",
        description:
            "Minha mãe, que não estava ao meu lado há muito tempo, voltou. Minha mãe, que eu não via há muito tempo - desde que foi para um retiro espiritual da seita religiosa FARGO, voltou. Finalmente quando pensei que teria uma vida feliz, minha mãe morre misteriosamente. Por que ela morreu? O que estava acontecendo naquele lugar?",
        status: "in-progress",
        translator: "Kikachan Games",
        genres: ["Fantasia", "Drama", "Romance"],
        downloadLink: "https://kikachangames.github.io/koropokkur/",
        platforms: ["PC"],
    },
    {
        title: "Wonderful Everyday Down the Rabbit-Hole",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/658620/header.jpg",
        description:
            'Wonderful Everyday é uma visual novel com múltiplas vertentes que desenvolve uma história baseada em alguns conceitos: "o céu e o mundo", "o começo e o fim", "literatura e ciência", "salvador e herói", "irmão e irmã".',
        status: "in-progress",
        translator: "endskybrasil",
        genres: ["Horror", "Suspense", "Romance"],
        downloadLink: "https://x.com/endskybrasil",
        platforms: ["PC"],
    },
    {
        title: "Fate/stay night",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2396980/header.jpg",
        description:
            "A Guerra do Santo Graal. Um grande ritual que materializa o maior artefato sagrado, o Santo Graal. Há duas condições para participar nesse ritual: ser um mago, e ser um “Mestre” escolhido pelo Santo Graal.",
        status: "complete",
        translator: "Meow Works",
        genres: ["Fantasia", "Ação", "Romance"],
        downloadLink: "https://meowworks.gitlab.io/page/fatestaynight/",
        platforms: ["PC"],
    },
    {
        title: "Muv-Luv",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/802880/header.jpg",
        description:
            "A saga Muv-Luv é um conto épico dividido em três partes: Muv-Luv Extra, Muv-Luv Unlimited e Muv-Luv Alternative. O que começa como uma comédia romântica num ambiente escolar acaba se transformando em uma história intensa de guerra intergalática em uma das maiores mudanças de gênero já produzidas.",
        status: "in-progress",
        translator: "Meow Works",
        genres: ["Romance", "Ação", "Ficção Científica"],
        downloadLink: "https://meowworks.gitlab.io/page/muvluv",
        platforms: ["PC"],
    },
    {
        title: "Hyperdimension Neptunia Re;Birth 1",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/282900/header.jpg",
        description:
            "No mundo da Gamindustri, quatro deusas conhecidas como CPUs lutam pela supremacia na Guerra dos Consoles. Uma dessas CPUs, Neptune, foi derrotada pelas outras e exilada do paraíso. Em sua queda, acabou perdendo as memórias, mas logo encontrou um livro misterioso que ao se revelar afirmou conhecer toda a história da Gamindustri. Junta de Compa, IF e desse livro senciente conhecido como Histoire, Neptune adentra uma jornada extraordinária através das quatro diferentes nações em uma missão para salvar o mundo!",
        status: "complete",
        translator: "Meow Works",
        genres: ["Ação", "RPG", "Fantasia"],
        downloadLink: "https://meowworks.gitlab.io/page/neptunia",
        platforms: ["Steam"],
    },
];
