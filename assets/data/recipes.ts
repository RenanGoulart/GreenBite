import { lasanha, curry, quiche } from "..";

type Recipe = {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Lasanha de Berinjela",
    image: lasanha,
    ingredients: [
      "2 berinjelas grandes",
      "2 xícaras de molho de tomate",
      "1 xícara de queijo muçarela ralado",
      "1 xícara de ricota",
      "1/4 xícara de queijo parmesão ralado",
      "2 dentes de alho picados",
      "1 cebola média picada",
      "2 colheres de sopa de azeite de oliva",
      "Sal e pimenta a gosto",
      "Folhas de manjericão fresco para decorar",
    ],
    instructions: [
      "Corte as berinjelas em fatias finas no sentido do comprimento. Salpique sal e deixe descansar por 30 minutos para retirar o amargor. Depois, enxágue e seque com papel toalha.",
      "Em uma panela, aqueça o azeite e refogue o alho e a cebola até dourar.",
      "Adicione o molho de tomate, tempere com sal e pimenta, e cozinhe por 10 minutos. Reserve.",
      "Em um refratário, monte a lasanha alternando camadas de berinjela, molho de tomate, ricota e queijo muçarela. Termine com uma camada de molho e polvilhe o queijo parmesão por cima.",
      "Cubra com papel-alumínio e leve ao forno preaquecido a 180°C por 30 minutos. Retire o papel e asse por mais 10 minutos ou até gratinar.",
      "Decore com folhas de manjericão fresco e sirva.",
    ],
  },
  {
    id: 2,
    title: "Quiche de Espinafre e Ricota",
    image: quiche,
    ingredients: [
      "Massa de quiche pronta (ou feita em casa)",
      "1 maço de espinafre",
      "1 xícara de ricota",
      "1/2 xícara de creme de leite",
      "3 ovos",
      "1 cebola média picada",
      "2 colheres de sopa de azeite de oliva",
      "1/4 xícara de queijo parmesão ralado",
      "Sal, pimenta e noz-moscada a gosto",
    ],
    instructions: [
      "Preaqueça o forno a 180°C.",
      "Em uma frigideira, aqueça o azeite e refogue a cebola até dourar. Adicione o espinafre picado e cozinhe até murchar. Tempere com sal, pimenta e noz-moscada.",
      "Em uma tigela, bata os ovos com o creme de leite. Acrescente a ricota esfarelada e misture bem.",
      "Adicione o espinafre refogado à mistura de ovos e ricota.",
      "Forre uma forma de quiche com a massa pronta e despeje o recheio.",
      "Polvilhe o queijo parmesão por cima e leve ao forno por 30-35 minutos ou até dourar.",
      "Deixe esfriar um pouco antes de desenformar e servir.",
    ],
  },
  {
    id: 3,
    title: "Curry de Grão-de-Bico e Legumes",
    image: curry,
    ingredients: [
      "2 xícaras de grão-de-bico cozido",
      "1 batata-doce média em cubos",
      "1 cenoura média em rodelas",
      "1 pimentão vermelho em tiras",
      "1 cebola média picada",
      "2 dentes de alho picados",
      "1 colher de sopa de gengibre ralado",
      "1 lata de leite de coco",
      "2 xícaras de caldo de legumes",
      "2 colheres de sopa de óleo de coco",
      "2 colheres de sopa de curry em pó",
      "Sal e pimenta a gosto",
      "Coentro fresco picado para decorar",
    ],
    instructions: [
      "Em uma panela grande, aqueça o óleo de coco e refogue a cebola, o alho e o gengibre até dourar.",
      "Adicione o curry em pó e mexa bem para liberar os aromas.",
      "Acrescente a batata-doce, a cenoura e o pimentão. Refogue por alguns minutos.",
      "Adicione o leite de coco e o caldo de legumes. Tempere com sal e pimenta.",
      "Deixe cozinhar em fogo médio por cerca de 20 minutos, ou até os legumes estarem macios.",
      "Adicione o grão-de-bico cozido e cozinhe por mais 5 minutos.",
      "Sirva quente, decorado com coentro fresco picado. Acompanhe com arroz basmati ou naan.",
    ],
  },
];

export { recipes };
