import { Recipe } from '../types';

export const ALL_RECIPES: Recipe[] = [
  // CAFÉ DA MANHÃ
  {
    id: '1',
    slug: 'panqueca-americana-fofinha',
    title: 'Panqueca Americana Fofinha',
    description: 'A clássica panqueca americana ideal para começar o dia com doçura e leveza.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    costEstimate: '$',
    servings: 2,
    ingredients: [
      { name: 'Farinha de trigo', quantity: 1, unit: 'xícara' },
      { name: 'Leite', quantity: 1, unit: 'xícara' },
      { name: 'Açúcar', quantity: 2, unit: 'colheres sopa' },
      { name: 'Ovo', quantity: 1, unit: 'un' },
      { name: 'Fermento em pó', quantity: 2, unit: 'colheres chá' },
      { name: 'Essência de baunilha', quantity: 1, unit: 'colher chá' }
    ],
    steps: [
      { order: 1, text: 'Misture os ingredientes secos em uma tigela.' },
      { order: 2, text: 'Adicione o leite, o ovo e a baunilha, batendo até ficar homogêneo.' },
      { order: 3, text: 'Aqueça uma frigideira antiaderente levemente untada.' },
      { order: 4, text: 'Despeje porções da massa e vire quando surgirem bolhas.' }
    ],
    images: ['https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 150,
    authorId: 'Chef Maria',
    createdAt: '2026-03-01T08:00:00Z'
  },
  {
    id: '2',
    slug: 'ovos-mexidos-cremosos-estilo-hotel',
    title: 'Ovos Mexidos Estilo Hotel',
    description: 'O segredo para ovos mexidos extremamente cremosos e macios.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 5,
    cookTime: 5,
    costEstimate: '$',
    servings: 1,
    ingredients: [
      { name: 'Ovos', quantity: 3, unit: 'un' },
      { name: 'Manteiga gelada', quantity: 1, unit: 'colher sopa' },
      { name: 'Creme de leite', quantity: 1, unit: 'colher sopa' },
      { name: 'Sal e cebolinha', quantity: 1, unit: 'a gosto' }
    ],
    steps: [
      { order: 1, text: 'Bata os ovos levemente.' },
      { order: 2, text: 'Aqueça a frigideira em fogo baixo com a manteiga.' },
      { order: 3, text: 'Despeje os ovos e mexa constantemente.' },
      { order: 4, text: 'Quando começar a firmar, adicione o creme de leite e desligue o fogo.' }
    ],
    images: ['https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 88,
    authorId: 'Chef Pedro',
    createdAt: '2026-03-02T08:00:00Z'
  },
  {
    id: '3',
    slug: 'avocado-toast-especial',
    title: 'Avocado Toast Especial',
    description: 'Pão de fermentação natural com abacate maduro, temperos frescos e sementes.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 5,
    cookTime: 2,
    costEstimate: '$$',
    servings: 1,
    ingredients: [
      { name: 'Pão sourdough', quantity: 1, unit: 'fatia' },
      { name: 'Abacate maduro', quantity: 0.5, unit: 'un' },
      { name: 'Suco de limão siciliano', quantity: 0.5, unit: 'un' },
      { name: 'Sementes de gergelim', quantity: 1, unit: 'colher chá' },
      { name: 'Pimenta calabresa', quantity: 1, unit: 'a gosto' }
    ],
    steps: [
      { order: 1, text: 'Toste o pão até ficar crocante.' },
      { order: 2, text: 'Amasse o abacate com limão, sal e pimenta.' },
      { order: 3, text: 'Espalhe sobre o pão quente.' },
      { order: 4, text: 'Finalize com sementes e flocos de pimenta.' }
    ],
    images: ['https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 110,
    authorId: 'Chef Ana',
    createdAt: '2026-03-03T08:00:00Z'
  },
  {
    id: '4',
    slug: 'smoothie-bowl-frutas-vermelhas',
    title: 'Smoothie Bowl de Frutas Vermelhas',
    description: 'Uma tigela refrescante e nutritiva com frutas vermelhas congeladas e granola.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    costEstimate: '$$',
    servings: 1,
    ingredients: [
      { name: 'Frutas vermelhas congeladas', quantity: 1, unit: 'xícara' },
      { name: 'Banana congelada', quantity: 1, unit: 'un' },
      { name: 'Leite vegetal', quantity: 0.5, unit: 'xícara' },
      { name: 'Granola artesanal', quantity: 2, unit: 'colheres sopa' }
    ],
    steps: [
      { order: 1, text: 'Bata as frutas e o leite no liquidificador até ficar cremoso.' },
      { order: 2, text: 'Despeje em uma tigela.' },
      { order: 3, text: 'Decore com granola e frutas frescas.' }
    ],
    images: ['https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 95,
    authorId: 'Chef Nutri',
    createdAt: '2026-03-04T08:00:00Z'
  },
  {
    id: '5',
    slug: 'granola-caseira-crocante',
    title: 'Granola Caseira Crocante',
    description: 'Prepare sua própria granola saudável e sem conservantes, cheia de sementes e mel.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 25,
    costEstimate: '$',
    servings: 10,
    ingredients: [
      { name: 'Aveia em flocos grossos', quantity: 500, unit: 'g' },
      { name: 'Mix de castanhas', quantity: 200, unit: 'g' },
      { name: 'Mel ou melaço', quantity: 100, unit: 'ml' },
      { name: 'Óleo de coco', quantity: 50, unit: 'ml' }
    ],
    steps: [
      { order: 1, text: 'Misture todos os ingredientes em uma assadeira ampla.' },
      { order: 2, text: 'Leve ao forno baixo (160°C).' },
      { order: 3, text: 'Mexa a cada 10 minutos para dourar por igual.' },
      { order: 4, text: 'Deixe esfriar completamente antes de guardar.' }
    ],
    images: ['https://images.unsplash.com/photo-1517093157656-b99917c6471c?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 5.0,
    ratingCount: 64,
    authorId: 'Artesanal Chef',
    createdAt: '2026-03-05T08:00:00Z'
  },
  {
    id: '6',
    slug: 'pao-de-queijo-fit-3-ingredientes',
    title: 'Pão de Queijo Fit (3 Ingredientes)',
    description: 'Versão rápida e saudável do clássico pão de queijo usando iogurte.',
    category: 'Café da manhã',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 20,
    costEstimate: '$',
    servings: 4,
    ingredients: [
      { name: 'Polvilho azedo', quantity: 200, unit: 'g' },
      { name: 'Queijo parmesão ralado', quantity: 100, unit: 'g' },
      { name: 'Iogurte natural integral', quantity: 170, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Misture todos os ingredientes até formar uma massa que desgrude das mãos.' },
      { order: 2, text: 'Modele bolinhas pequenas.' },
      { order: 3, text: 'Asse a 200°C por cerca de 20 minutos ou até dourar.' }
    ],
    images: ['https://images.unsplash.com/photo-1599143338408-aa70591f1c56?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.6,
    ratingCount: 230,
    authorId: 'Chef Fit',
    createdAt: '2026-03-06T08:00:00Z'
  },

  // ALMOÇO
  {
    id: '7',
    slug: 'risoto-de-cogumelos-classico',
    title: 'Risoto de Cogumelos Clássico',
    description: 'Um risoto cremoso feito com arroz arbóreo e um mix de cogumelos frescos.',
    category: 'Almoço',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 30,
    costEstimate: '$$$',
    servings: 4,
    ingredients: [
      { name: 'Arroz arbóreo', quantity: 300, unit: 'g' },
      { name: 'Cogumelos frescos (Shimeji/Paris)', quantity: 400, unit: 'g' },
      { name: 'Caldo de legumes quente', quantity: 1.5, unit: 'L' },
      { name: 'Vinho branco seco', quantity: 150, unit: 'ml' },
      { name: 'Queijo parmesão', quantity: 100, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Refogue os cogumelos na manteiga e reserve.' },
      { order: 2, text: 'Frite o arroz arbóreo com cebola.' },
      { order: 3, text: 'Adicione o vinho e mexa até secar.' },
      { order: 4, text: 'Vá adicionando o caldo aos poucos, concha a concha, mexendo sempre.' },
      { order: 5, text: 'Finalize com manteiga gelada, parmesão e os cogumelos reservados.' }
    ],
    images: ['https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 215,
    authorId: 'Chef Luigi',
    createdAt: '2026-03-07T12:00:00Z'
  },
  {
    id: '8',
    slug: 'frango-xadrez-oriental',
    title: 'Frango Xadrez Oriental',
    description: 'Receita rápida e saborosa inspirada na culinária chinesa.',
    category: 'Almoço',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    costEstimate: '$$',
    servings: 3,
    ingredients: [
      { name: 'Peito de frango em cubos', quantity: 500, unit: 'g' },
      { name: 'Pimentões coloridos', quantity: 2, unit: 'un' },
      { name: 'Cebola em cubos grandes', quantity: 1, unit: 'un' },
      { name: 'Amendoim torrado', quantity: 50, unit: 'g' },
      { name: 'Molho shoyu', quantity: 100, unit: 'ml' }
    ],
    steps: [
      { order: 1, text: 'Frite o frango até dourar.' },
      { order: 2, text: 'Adicione a cebola e os pimentões.' },
      { order: 3, text: 'Junte o amendoim e o molho shoyu misturado com amido de milho.' },
      { order: 4, text: 'Cozinhe até o molho engrossar.' }
    ],
    images: ['https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 140,
    authorId: 'Chef Lee',
    createdAt: '2026-03-08T12:00:00Z'
  },
  {
    id: '9',
    slug: 'feijoada-completa-tradicional',
    title: 'Feijoada Completa Tradicional',
    description: 'O prato mais icônico do Brasil, feito com feijão preto e carnes selecionadas.',
    category: 'Almoço',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 180,
    costEstimate: '$$$',
    servings: 8,
    ingredients: [
      { name: 'Feijão preto', quantity: 1, unit: 'kg' },
      { name: 'Carne seca e lombo suíno', quantity: 500, unit: 'g cada' },
      { name: 'Paio e linguiça calabresa', quantity: 300, unit: 'g cada' },
      { name: 'Costelinha salgada', quantity: 500, unit: 'g' },
      { name: 'Laranja inteira', quantity: 1, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Dessalgue as carnes por 24 horas trocando a água.' },
      { order: 2, text: 'Cozinhe o feijão com a laranja inteira.' },
      { order: 3, text: 'Adicione as carnes mais duras primeiro.' },
      { order: 4, text: 'Junte as linguiças quando as carnes estiverem macias.' },
      { order: 5, text: 'Finalize com um refogado caprichado de alho e cebola.' }
    ],
    images: ['https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 5.0,
    ratingCount: 450,
    authorId: 'Chef Zé',
    createdAt: '2026-03-09T12:00:00Z'
  },
  {
    id: '10',
    slug: 'strogonoff-de-carne-brasileiro',
    title: 'Strogonoff de Carne Brasileiro',
    description: 'Receita caseira com creme de leite e batata palha, do jeito que o brasileiro gosta.',
    category: 'Almoço',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 20,
    costEstimate: '$$',
    servings: 4,
    ingredients: [
      { name: 'Filé mignon ou alcatra', quantity: 800, unit: 'g' },
      { name: 'Creme de leite', quantity: 2, unit: 'latas' },
      { name: 'Ketchup e mostarda', quantity: 3, unit: 'colheres cada' },
      { name: 'Cogumelos champignon', quantity: 100, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Frite a carne em cubos em fogo bem alto para não soltar água.' },
      { order: 2, text: 'Adicione cebola, alho e flambe com um pouco de conhaque.' },
      { order: 3, text: 'Junte o ketchup, mostarda e cogumelos.' },
      { order: 4, text: 'Desligue o fogo e incorpore o creme de leite.' }
    ],
    images: ['https://images.unsplash.com/photo-1534939561122-0cc9ce16cba0?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 320,
    authorId: 'Chef Maria',
    createdAt: '2026-03-10T12:00:00Z'
  },
  {
    id: '11',
    slug: 'moqueca-de-peixe-baiana',
    title: 'Moqueca de Peixe Baiana',
    description: 'Moqueca feita com leite de coco, azeite de dendê e muitos temperos.',
    category: 'Almoço',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 30,
    costEstimate: '$$$',
    servings: 4,
    ingredients: [
      { name: 'Postas de peixe (Robalo/Pintado)', quantity: 1, unit: 'kg' },
      { name: 'Leite de coco', quantity: 500, unit: 'ml' },
      { name: 'Azeite de dendê', quantity: 100, unit: 'ml' },
      { name: 'Pimentões e cebola em rodelas', quantity: 3, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Monte camadas de vegetais e peixe em uma panela de barro.' },
      { order: 2, text: 'Regue com limão e sal.' },
      { order: 3, text: 'Adicione o leite de coco e o dendê.' },
      { order: 4, text: 'Cozinhe em fogo médio sem mexer até o peixe ficar macio.' }
    ],
    images: ['https://images.unsplash.com/photo-1548943487-a2e4b43b4853?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 180,
    authorId: 'Chef Bahia',
    createdAt: '2026-03-11T12:00:00Z'
  },
  {
    id: '12',
    slug: 'lasanha-a-bolonhesa-generosa',
    title: 'Lasanha à Bolonhesa Generosa',
    description: 'Massa gratinada com muito queijo e molho de carne cozido lentamente.',
    category: 'Almoço',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 45,
    costEstimate: '$$',
    servings: 6,
    ingredients: [
      { name: 'Massa de lasanha pré-cozida', quantity: 1, unit: 'pacote' },
      { name: 'Molho bolonhesa caseiro', quantity: 1, unit: 'L' },
      { name: 'Queijo muçarela fatiado', quantity: 500, unit: 'g' },
      { name: 'Presunto fatiado', quantity: 300, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Alterne camadas de molho, massa, presunto e queijo.' },
      { order: 2, text: 'Finalize com uma camada generosa de queijo.' },
      { order: 3, text: 'Leve ao forno a 200°C por 30 minutos até borbulhar e dourar.' }
    ],
    images: ['https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 290,
    authorId: 'Chef Nonna',
    createdAt: '2026-03-12T12:00:00Z'
  },

  // JANTAR
  {
    id: '13',
    slug: 'pizza-margherita-artesanal',
    title: 'Pizza Margherita Artesanal',
    description: 'Massa de longa fermentação com molho de tomate pelado e manjericão fresco.',
    category: 'Jantar',
    difficulty: 'Medium',
    prepTime: 120,
    cookTime: 10,
    costEstimate: '$',
    servings: 4,
    ingredients: [
      { name: 'Massa de longa fermentação', quantity: 1, unit: 'un' },
      { name: 'Tomate pelado triturado', quantity: 200, unit: 'ml' },
      { name: 'Muçarela de búfala', quantity: 200, unit: 'g' },
      { name: 'Manjericão fresco', quantity: 1, unit: 'maço' }
    ],
    steps: [
      { order: 1, text: 'Abra a massa com as mãos mantendo as bordas altas.' },
      { order: 2, text: 'Espalhe o molho de tomate.' },
      { order: 3, text: 'Adicione o queijo e um fio de azeite.' },
      { order: 4, text: 'Asse em forno pré-aquecido na temperatura máxima.' },
      { order: 5, text: 'Finalize com o manjericão após sair do forno.' }
    ],
    images: ['https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 5.0,
    ratingCount: 510,
    authorId: 'Chef Enzo',
    createdAt: '2026-03-13T19:00:00Z'
  },
  {
    id: '14',
    slug: 'poke-bowl-de-salmao',
    title: 'Poke Bowl de Salmão',
    description: 'Um jantar leve e saudável com peixe fresco, arroz japonês e vegetais.',
    category: 'Jantar',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    costEstimate: '$$$',
    servings: 1,
    ingredients: [
      { name: 'Salmão cru em cubos', quantity: 150, unit: 'g' },
      { name: 'Arroz japonês (Gohan)', quantity: 100, unit: 'g' },
      { name: 'Manga e pepino', quantity: 1, unit: 'un' },
      { name: 'Edamame cozido', quantity: 50, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Cozinhe o arroz japonês.' },
      { order: 2, text: 'Tempere o salmão com shoyu e óleo de gergelim.' },
      { order: 3, text: 'Monte a tigela colocando o arroz na base e decorando com os demais itens.' }
    ],
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 165,
    authorId: 'Chef Hula',
    createdAt: '2026-03-14T19:00:00Z'
  },
  {
    id: '15',
    slug: 'espaguete-a-carbonara-italiano',
    title: 'Espaguete à Carbonara Italiano',
    description: 'A verdadeira receita italiana: sem creme de leite, apenas ovos e queijo.',
    category: 'Jantar',
    difficulty: 'Medium',
    prepTime: 5,
    cookTime: 10,
    costEstimate: '$$',
    servings: 2,
    ingredients: [
      { name: 'Espaguete', quantity: 200, unit: 'g' },
      { name: 'Gemas de ovo', quantity: 3, unit: 'un' },
      { name: 'Guanciale ou Panceta', quantity: 100, unit: 'g' },
      { name: 'Queijo Pecorino Romano', quantity: 50, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Frite a panceta até ficar crocante.' },
      { order: 2, text: 'Misture as gemas com o queijo e pimenta do reino.' },
      { order: 3, text: 'Cozinhe a massa al dente.' },
      { order: 4, text: 'Misture a massa quente com a gordura da panceta e, fora do fogo, adicione o creme de gemas.' }
    ],
    images: ['https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 380,
    authorId: 'Chef Luca',
    createdAt: '2026-03-15T19:00:00Z'
  },
  {
    id: '16',
    slug: 'burguer-gourmet-de-cordeiro',
    title: 'Burguer Gourmet de Cordeiro',
    description: 'Hambúrguer de cordeiro temperado com hortelã e molho de iogurte grego.',
    category: 'Jantar',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 10,
    costEstimate: '$$$',
    servings: 2,
    ingredients: [
      { name: 'Carne de cordeiro moída', quantity: 400, unit: 'g' },
      { name: 'Hortelã fresca', quantity: 1, unit: 'maço' },
      { name: 'Pão brioche', quantity: 2, unit: 'un' },
      { name: 'Iogurte grego', quantity: 100, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Tempere a carne de cordeiro com sal, pimenta e hortelã picada.' },
      { order: 2, text: 'Molde os hambúrgueres.' },
      { order: 3, text: 'Grelhe até o ponto desejado.' },
      { order: 4, text: 'Monte no pão brioche com molho de iogurte e pepino.' }
    ],
    images: ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 125,
    authorId: 'Chef Grill',
    createdAt: '2026-03-16T19:00:00Z'
  },
  {
    id: '17',
    slug: 'sopa-de-cebola-gratinada',
    title: 'Sopa de Cebola Gratinada',
    description: 'Clássico francês reconfortante com muito queijo gratinado e pão crocante.',
    category: 'Jantar',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 40,
    costEstimate: '$',
    servings: 3,
    ingredients: [
      { name: 'Cebolas fatiadas', quantity: 1, unit: 'kg' },
      { name: 'Caldo de carne caseiro', quantity: 1.5, unit: 'L' },
      { name: 'Pão tipo baguete', quantity: 0.5, unit: 'un' },
      { name: 'Queijo Gruyère', quantity: 150, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Caramelize as cebolas em fogo baixo por pelo menos 30 minutos.' },
      { order: 2, text: 'Adicione o caldo e cozinhe.' },
      { order: 3, text: 'Coloque em tigelas individuais, cubra com o pão e o queijo.' },
      { order: 4, text: 'Gratine em forno alto até dourar o queijo.' }
    ],
    images: ['https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.6,
    ratingCount: 94,
    authorId: 'Chef Gaston',
    createdAt: '2026-03-17T19:00:00Z'
  },
  {
    id: '18',
    slug: 'salmao-ao-molho-de-maracuja',
    title: 'Salmão ao Molho de Maracujá',
    description: 'Filé de salmão grelhado finalizado com um molho agridoce de maracujá.',
    category: 'Jantar',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    costEstimate: '$$$',
    servings: 2,
    ingredients: [
      { name: 'Filés de salmão', quantity: 400, unit: 'g' },
      { name: 'Polpa de maracujá fresco', quantity: 2, unit: 'un' },
      { name: 'Mel ou açúcar demerara', quantity: 1, unit: 'colher sopa' },
      { name: 'Manteiga', quantity: 1, unit: 'colher sopa' }
    ],
    steps: [
      { order: 1, text: 'Grelhe o salmão com a pele para baixo.' },
      { order: 2, text: 'Reduza a polpa de maracujá com açúcar em uma panela pequena.' },
      { order: 3, text: 'Finalize o molho com manteiga gelada para dar brilho.' },
      { order: 4, text: 'Sirva o salmão regado com o molho.' }
    ],
    images: ['https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 158,
    authorId: 'Chef Marina',
    createdAt: '2026-03-18T19:00:00Z'
  },

  // SOBREMESAS
  {
    id: '19',
    slug: 'mousse-de-chocolate-belga',
    title: 'Mousse de Chocolate Belga',
    description: 'Uma mousse aerada e intensa, feita com o melhor chocolate belga.',
    category: 'Sobremesas',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 0,
    costEstimate: '$$',
    servings: 6,
    ingredients: [
      { name: 'Chocolate belga 70%', quantity: 200, unit: 'g' },
      { name: 'Claras de ovo', quantity: 4, unit: 'un' },
      { name: 'Creme de leite fresco', quantity: 200, unit: 'ml' }
    ],
    steps: [
      { order: 1, text: 'Derreta o chocolate em banho-maria.' },
      { order: 2, text: 'Incorpore o creme de leite no chocolate morno.' },
      { order: 3, text: 'Bata as claras em neve bem firmes.' },
      { order: 4, text: 'Incorpore as claras delicadamente para não perder o ar.' },
      { order: 5, text: 'Leve à geladeira por no mínimo 4 horas.' }
    ],
    images: ['https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 5.0,
    ratingCount: 210,
    authorId: 'Chef Patissier',
    createdAt: '2026-03-19T15:00:00Z'
  },
  {
    id: '20',
    slug: 'petit-gateau-perfeito',
    title: 'Petit Gâteau Perfeito',
    description: 'Bolinho quente de chocolate com o centro derretido, servido com sorvete.',
    category: 'Sobremesas',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 8,
    costEstimate: '$$',
    servings: 4,
    ingredients: [
      { name: 'Chocolate amargo', quantity: 200, unit: 'g' },
      { name: 'Manteiga sem sal', quantity: 150, unit: 'g' },
      { name: 'Ovos e gemas', quantity: 2, unit: 'un cada' },
      { name: 'Farinha de trigo', quantity: 50, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Derreta chocolate e manteiga juntos.' },
      { order: 2, text: 'Misture ovos e açúcar (opcional) sem bater muito.' },
      { order: 3, text: 'Incorpore a farinha peneirada.' },
      { order: 4, text: 'Asse em forminhas untadas em forno muito quente (220°C) por exatos 8 minutos.' }
    ],
    images: ['https://images.unsplash.com/photo-1617305813359-67611fbde028?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 340,
    authorId: 'Chef Sweets',
    createdAt: '2026-03-20T15:00:00Z'
  },
  {
    id: '21',
    slug: 'torta-de-limao-siciliano',
    title: 'Torta de Limão Siciliano',
    description: 'Torta equilibrada entre a acidez cítrica e o doce do leite condensado.',
    category: 'Sobremesas',
    difficulty: 'Easy',
    prepTime: 30,
    cookTime: 15,
    costEstimate: '$',
    servings: 10,
    ingredients: [
      { name: 'Biscoitos triturados', quantity: 200, unit: 'g' },
      { name: 'Manteiga derretida', quantity: 100, unit: 'g' },
      { name: 'Leite condensado', quantity: 2, unit: 'latas' },
      { name: 'Suco de limão siciliano', quantity: 150, unit: 'ml' }
    ],
    steps: [
      { order: 1, text: 'Faça a base com os biscoitos e manteiga, asse por 5 min.' },
      { order: 2, text: 'Misture leite condensado e limão até engrossar.' },
      { order: 3, text: 'Despeje na base fria e decore com raspas.' }
    ],
    images: ['https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 195,
    authorId: 'Chef Nina',
    createdAt: '2026-03-21T15:00:00Z'
  },
  {
    id: '22',
    slug: 'pudim-lisinho-sem-furinhos',
    title: 'Pudim Lisinho Sem Furinhos',
    description: 'O segredo do pudim perfeito: textura de veludo e calda caramelizada.',
    category: 'Sobremesas',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 90,
    costEstimate: '$',
    servings: 8,
    ingredients: [
      { name: 'Leite condensado', quantity: 1, unit: 'lata' },
      { name: 'Leite integral (mesma medida)', quantity: 1, unit: 'un' },
      { name: 'Ovos', quantity: 3, unit: 'un' },
      { name: 'Açúcar para calda', quantity: 1, unit: 'xícara' }
    ],
    steps: [
      { order: 1, text: 'Caramelize a forma.' },
      { order: 2, text: 'Bata tudo no liquidificador e deixe descansar por 15 min.' },
      { order: 3, text: 'Asse em banho-maria em fogo baixíssimo (160°C).' }
    ],
    images: ['https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 560,
    authorId: 'Chef Vovó',
    createdAt: '2026-03-22T15:00:00Z'
  },
  {
    id: '23',
    slug: 'cheesecake-de-frutas-vermelhas',
    title: 'Cheesecake de Frutas Vermelhas',
    description: 'New York style cheesecake com calda caseira de morango e amora.',
    category: 'Sobremesas',
    difficulty: 'Hard',
    prepTime: 40,
    cookTime: 120,
    costEstimate: '$$$',
    servings: 12,
    ingredients: [
      { name: 'Cream Cheese', quantity: 600, unit: 'g' },
      { name: 'Açúcar', quantity: 150, unit: 'g' },
      { name: 'Base de biscoito', quantity: 1, unit: 'un' },
      { name: 'Ovos', quantity: 3, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Bata o cream cheese com açúcar até ficar cremoso.' },
      { order: 2, text: 'Adicione os ovos um a um.' },
      { order: 3, text: 'Asse em banho-maria por 2 horas.' },
      { order: 4, text: 'Resfrie por 8 horas antes de colocar a calda.' }
    ],
    images: ['https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 275,
    authorId: 'Chef NYC',
    createdAt: '2026-03-23T15:00:00Z'
  },
  {
    id: '24',
    slug: 'brownie-de-chocolate-belga',
    title: 'Brownie de Chocolate Belga',
    description: 'Um brownie denso, puxento (fudgy) com pedaços de chocolate belga.',
    category: 'Sobremesas',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 25,
    costEstimate: '$$',
    servings: 16,
    ingredients: [
      { name: 'Chocolate belga amargo', quantity: 200, unit: 'g' },
      { name: 'Manteiga', quantity: 150, unit: 'g' },
      { name: 'Açúcar mascavo', quantity: 200, unit: 'g' },
      { name: 'Ovos', quantity: 3, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Derreta o chocolate com a manteiga.' },
      { order: 2, text: 'Misture os ovos e o açúcar sem fazer espuma.' },
      { order: 3, text: 'Asse a 180°C até formar aquela casquinha craquelada.' }
    ],
    images: ['https://images.unsplash.com/photo-1461008413523-c527c92a3d07?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 420,
    authorId: 'Chef Choco',
    createdAt: '2026-03-24T15:00:00Z'
  },

  // LANCHES
  {
    id: '25',
    slug: 'sanduiche-natural-de-frango',
    title: 'Sanduíche Natural de Frango',
    description: 'Leve e refrescante, ideal para um lanche rápido no meio da tarde.',
    category: 'Lanches',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 5,
    costEstimate: '$',
    servings: 2,
    ingredients: [
      { name: 'Frango desfiado', quantity: 200, unit: 'g' },
      { name: 'Maionese light', quantity: 2, unit: 'colheres sopa' },
      { name: 'Cenoura ralada', quantity: 1, unit: 'un' },
      { name: 'Pão de forma integral', quantity: 4, unit: 'fatias' }
    ],
    steps: [
      { order: 1, text: 'Misture o frango, a maionese e a cenoura.' },
      { order: 2, text: 'Monte os sanduíches com alface e tomate se desejar.' }
    ],
    images: ['https://images.unsplash.com/photo-1592415499556-74fcb9f18667?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.5,
    ratingCount: 112,
    authorId: 'Chef Fresh',
    createdAt: '2026-03-25T16:00:00Z'
  },
  {
    id: '26',
    slug: 'coxinha-de-frango-crocante',
    title: 'Coxinha de Frango Crocante',
    description: 'O salgado brasileiro preferido com massa de batata e recheio suculento.',
    category: 'Lanches',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 30,
    costEstimate: '$',
    servings: 20,
    ingredients: [
      { name: 'Farinha de trigo', quantity: 500, unit: 'g' },
      { name: 'Caldo de frango', quantity: 1, unit: 'L' },
      { name: 'Batata cozida e espremida', quantity: 200, unit: 'g' },
      { name: 'Peito de frango cozido e desfiado', quantity: 500, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Faça a massa escaldando a farinha no caldo fervente com batata.' },
      { order: 2, text: 'Refogue o frango com temperos.' },
      { order: 3, text: 'Modele as coxinhas, pane e frite em óleo quente.' }
    ],
    images: ['https://images.unsplash.com/photo-1541544222056-91506b3aa0e4?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 890,
    authorId: 'Chef Salgadinho',
    createdAt: '2026-03-26T16:00:00Z'
  },
  {
    id: '27',
    slug: 'bolinho-de-chuva-da-vovo',
    title: 'Bolinho de Chuva da Vovó',
    description: 'Aquela nostalgia em forma de bolinho frito com canela e açúcar.',
    category: 'Lanches',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 15,
    costEstimate: '$',
    servings: 6,
    ingredients: [
      { name: 'Farinha de trigo', quantity: 2, unit: 'xícaras' },
      { name: 'Leite', quantity: 1, unit: 'xícara' },
      { name: 'Açúcar', quantity: 0.5, unit: 'xícara' },
      { name: 'Ovos', quantity: 2, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Misture tudo até formar uma massa pastosa.' },
      { order: 2, text: 'Frite colheradas da massa em óleo médio.' },
      { order: 3, text: 'Passe na mistura de açúcar e canela.' }
    ],
    images: ['https://images.unsplash.com/photo-1599307733476-eb331398826d?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 410,
    authorId: 'Chef Vovó',
    createdAt: '2026-03-27T16:00:00Z'
  },
  {
    id: '28',
    slug: 'pao-australiano-artesanal',
    title: 'Pão Australiano Artesanal',
    description: 'Pão escuro, macio e levemente adocicado, perfeito com manteiga.',
    category: 'Lanches',
    difficulty: 'Medium',
    prepTime: 120,
    cookTime: 30,
    costEstimate: '$$',
    servings: 2,
    ingredients: [
      { name: 'Farinha de trigo', quantity: 500, unit: 'g' },
      { name: 'Cacau em pó', quantity: 3, unit: 'colheres sopa' },
      { name: 'Mel', quantity: 3, unit: 'colheres sopa' },
      { name: 'Melaço de cana', quantity: 1, unit: 'colher sopa' }
    ],
    steps: [
      { order: 1, text: 'Misture secos e líquidos e sove bem.' },
      { order: 2, text: 'Deixe crescer até dobrar de volume.' },
      { order: 3, text: 'Modele e asse a 180°C por 30 minutos.' }
    ],
    images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 155,
    authorId: 'Chef Baker',
    createdAt: '2026-03-28T16:00:00Z'
  },
  {
    id: '29',
    slug: 'mini-quiches-de-alho-poro',
    title: 'Mini Quiches de Alho Poró',
    description: 'Deliciosas tortinhas individuais com recheio cremoso e suave.',
    category: 'Lanches',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 25,
    costEstimate: '$$',
    servings: 12,
    ingredients: [
      { name: 'Massa podre', quantity: 1, unit: 'un' },
      { name: 'Alho poró fatiado', quantity: 2, unit: 'un' },
      { name: 'Creme de leite', quantity: 1, unit: 'caixa' },
      { name: 'Ovos', quantity: 2, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Forre forminhas individuais com a massa.' },
      { order: 2, text: 'Refogue o alho poró.' },
      { order: 3, text: 'Misture creme de leite e ovos.' },
      { order: 4, text: 'Recheie e asse até dourar.' }
    ],
    images: ['https://images.unsplash.com/photo-1608039755401-722054f42bab?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.7,
    ratingCount: 88,
    authorId: 'Chef Mara',
    createdAt: '2026-03-29T16:00:00Z'
  },
  {
    id: '30',
    slug: 'muffin-de-mirtilo-blueberry',
    title: 'Muffin de Mirtilo (Blueberry)',
    description: 'Bolinhos fofos carregados de mirtilos frescos.',
    category: 'Lanches',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 20,
    costEstimate: '$$',
    servings: 12,
    ingredients: [
      { name: 'Farinha de trigo', quantity: 250, unit: 'g' },
      { name: 'Açúcar', quantity: 150, unit: 'g' },
      { name: 'Mirtilos frescos', quantity: 150, unit: 'g' },
      { name: 'Manteiga derretida', quantity: 100, unit: 'g' }
    ],
    steps: [
      { order: 1, text: 'Misture os ingredientes secos e úmidos separadamente.' },
      { order: 2, text: 'Combine os dois e adicione os mirtilos.' },
      { order: 3, text: 'Asse a 200°C por 20 minutos.' }
    ],
    images: ['https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.8,
    ratingCount: 145,
    authorId: 'Chef Bakery',
    createdAt: '2026-03-30T16:00:00Z'
  },
  {
    id: '31',
    slug: 'guacamole-mexicana-real',
    title: 'Guacamole Mexicana Real',
    description: 'Acompanhamento perfeito para nachos, feito com abacates frescos e coentro.',
    category: 'Lanches',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    costEstimate: '$',
    servings: 4,
    ingredients: [
      { name: 'Abacate maduro', quantity: 2, unit: 'un' },
      { name: 'Tomate sem semente', quantity: 1, unit: 'un' },
      { name: 'Cebola roxa', quantity: 0.5, unit: 'un' },
      { name: 'Suco de limão', quantity: 1, unit: 'un' }
    ],
    steps: [
      { order: 1, text: 'Amasse grosseiramente os abacates.' },
      { order: 2, text: 'Pique finamente a cebola e o tomate.' },
      { order: 3, text: 'Misture tudo e ajuste o sal e pimenta.' }
    ],
    images: ['https://images.unsplash.com/photo-1541288097918-8321217e0b90?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 4.9,
    ratingCount: 212,
    authorId: 'Chef Mexicano',
    createdAt: '2026-03-31T16:00:00Z'
  },
  {
    id: '32',
    slug: 'brigadeiro-gourmet-confeiteiro',
    title: 'Brigadeiro Gourmet',
    description: 'O segredo da textura perfeita e brilho intenso do doce mais amado do Brasil.',
    category: 'Lanches',
    difficulty: 'Easy',
    prepTime: 5,
    cookTime: 15,
    costEstimate: '$',
    servings: 20,
    ingredients: [
      { name: 'Leite condensado', quantity: 1, unit: 'lata' },
      { name: 'Cacau 50%', quantity: 3, unit: 'colheres sopa' },
      { name: 'Manteiga', quantity: 1, unit: 'colher sopa' },
      { name: 'Creme de leite', quantity: 100, unit: 'ml' }
    ],
    steps: [
      { order: 1, text: 'Misture tudo em uma panela de fundo grosso.' },
      { order: 2, text: 'Cozinhe em fogo médio/baixo mexendo sem parar até soltar do fundo.' },
      { order: 3, text: 'Deixe esfriar completamente antes de enrolar.' }
    ],
    images: ['https://images.unsplash.com/photo-1599599810694-b5b3a30c5e4d?auto=format&fit=crop&w=1200&q=80'],
    ratingAvg: 5.0,
    ratingCount: 1250,
    authorId: 'Chef Doce',
    createdAt: '2026-04-01T16:00:00Z'
  }
];
