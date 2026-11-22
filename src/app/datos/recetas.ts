import { Ingrediente, Receta, ItemDespensa } from '../modelos/receta';

export const INGREDIENTES: Ingrediente[] = [
  { id: 'aguacate', nombre: 'Aguacate', emoji: '🥑' }, { id: 'espinacas', nombre: 'Espinacas', emoji: '🥬' },
  { id: 'huevos', nombre: 'Huevos', emoji: '🥚' },     { id: 'tomate', nombre: 'Tomate', emoji: '🍅' },
  { id: 'queso', nombre: 'Queso feta', emoji: '🧀' },  { id: 'pollo', nombre: 'Pollo', emoji: '🍗' },
  { id: 'pasta', nombre: 'Pasta', emoji: '🍝' },       { id: 'pan', nombre: 'Pan', emoji: '🍞' },
  { id: 'arroz', nombre: 'Arroz', emoji: '🍚' },       { id: 'cebolla', nombre: 'Cebolla', emoji: '🧅' },
  { id: 'patata', nombre: 'Patatas', emoji: '🥔' },    { id: 'lechuga', nombre: 'Lechuga', emoji: '🥗' },
  { id: 'aceite', nombre: 'Aceite de oliva', emoji: '🫒' }, { id: 'ajo', nombre: 'Ajo', emoji: '🧄' },
];

export const RECETAS: Receta[] = [
  { id: 1, titulo: 'Tostada Crujiente de Aguacate y Huevo', foto: 'assets/recetas/tostada.jpg', minutos: 12, porciones: 1,
    dificultad: 'Fácil', etiquetas: ['vegetariano', 'rapido', 'economico'],
    ingredientes: [{ id: 'aguacate', nombre: 'Aguacate fresco', cantidad: '1/2 ud' }, { id: 'huevos', nombre: 'Huevos', cantidad: '2 ud' },
                   { id: 'pan', nombre: 'Pan de hogaza', cantidad: '1 rebanada' }],
    pasos: ['Tuesta el pan y unta el aguacate machacado con una pizca de sal.', 'Fríe los huevos en una sartén con un poco de aceite.', 'Monta los huevos sobre la tostada y sirve.'] },
  { id: 2, titulo: 'Ensalada de Huevo y Aguacate Cremoso', foto: 'assets/recetas/ensalada.jpg', minutos: 15, porciones: 1,
    dificultad: 'Fácil', etiquetas: ['vegetariano', 'sin-gluten', 'rapido'],
    ingredientes: [{ id: 'huevos', nombre: 'Huevos', cantidad: '2 ud' }, { id: 'aguacate', nombre: 'Aguacate', cantidad: '1 ud' },
                   { id: 'lechuga', nombre: 'Lechuga', cantidad: '1 puñado' }, { id: 'aceite', nombre: 'Aceite de oliva', cantidad: '1 cda' }],
    pasos: ['Cuece los huevos 10 minutos y pélalos.', 'Trocea el aguacate y la lechuga.', 'Mezcla todo y aliña con aceite y sal.'] },
  { id: 3, titulo: 'Tortilla Francesa de Espinaca y Queso', foto: 'assets/recetas/tortilla.jpg', minutos: 12, porciones: 1,
    dificultad: 'Fácil', etiquetas: ['vegetariano', 'sin-gluten', 'rapido'],
    ingredientes: [{ id: 'huevos', nombre: 'Huevos de corral', cantidad: '2 ud' }, { id: 'espinacas', nombre: 'Espinacas baby', cantidad: '1 taza' },
                   { id: 'queso', nombre: 'Queso feta', cantidad: '30 g' }],
    pasos: ['Saltea las espinacas ligeramente en una sartén.', 'Bate los huevos, viértelos y añade el queso desmenuzado.', 'Dobla la tortilla y cocina 1 minuto más.'] },
  { id: 4, titulo: 'Bowl de Arroz con Huevo', foto: 'assets/recetas/bowl.jpg', minutos: 20, porciones: 2,
    dificultad: 'Fácil', etiquetas: ['vegetariano', 'economico'],
    ingredientes: [{ id: 'arroz', nombre: 'Arroz', cantidad: '150 g' }, { id: 'huevos', nombre: 'Huevos', cantidad: '2 ud' },
                   { id: 'cebolla', nombre: 'Cebolla', cantidad: '1/2 ud' }, { id: 'aceite', nombre: 'Aceite de oliva', cantidad: '2 cdas' }],
    pasos: ['Cuece el arroz.', 'Sofríe la cebolla picada.', 'Añade el arroz y corona con los huevos fritos.'] },
  { id: 5, titulo: 'Pasta con Tomate y Ajo', foto: 'assets/recetas/pasta.jpg', minutos: 25, porciones: 2,
    dificultad: 'Media', etiquetas: ['vegetariano', 'economico'],
    ingredientes: [{ id: 'pasta', nombre: 'Pasta', cantidad: '200 g' }, { id: 'tomate', nombre: 'Tomates maduros', cantidad: '3 ud' },
                   { id: 'ajo', nombre: 'Ajo', cantidad: '2 dientes' }, { id: 'aceite', nombre: 'Aceite de oliva', cantidad: '3 cdas' }],
    pasos: ['Cuece la pasta al dente.', 'Sofríe el ajo y añade el tomate troceado 10 minutos.', 'Mezcla con la pasta y sirve.'] },
  { id: 6, titulo: 'Pollo con Patatas al Horno', foto: 'assets/recetas/pollo.jpg', minutos: 45, porciones: 2,
    dificultad: 'Media', etiquetas: ['sin-gluten'],
    ingredientes: [{ id: 'pollo', nombre: 'Muslos de pollo', cantidad: '4 ud' }, { id: 'patata', nombre: 'Patatas', cantidad: '3 ud' },
                   { id: 'cebolla', nombre: 'Cebolla', cantidad: '1 ud' }, { id: 'aceite', nombre: 'Aceite de oliva', cantidad: '3 cdas' }],
    pasos: ['Precalienta el horno a 200 °C.', 'Coloca pollo, patatas y cebolla en una bandeja con aceite y sal.', 'Hornea 40 minutos dándole la vuelta a mitad.'] },
];

export const DESPENSA_INICIAL: ItemDespensa[] = [
  { id: 'aguacate', nombre: 'Aguacate', categoria: 'Frescos', cantidad: 2, unidad: 'uds', caducaEnDias: 0 },
  { id: 'espinacas', nombre: 'Espinacas', categoria: 'Frescos', cantidad: 1, unidad: 'bolsa', caducaEnDias: 2 },
  { id: 'huevos', nombre: 'Huevos', categoria: 'Frescos', cantidad: 6, unidad: 'uds', caducaEnDias: 12 },
  { id: 'tomate', nombre: 'Tomate', categoria: 'Frescos', cantidad: 4, unidad: 'uds', caducaEnDias: 5 },
  { id: 'leche', nombre: 'Leche entera', categoria: 'Lácteos', cantidad: 1, unidad: 'L', caducaEnDias: 1 },
  { id: 'aceite', nombre: 'Aceite de oliva', categoria: 'Despensa', cantidad: 1, unidad: 'L', caducaEnDias: 200 },
  { id: 'arroz', nombre: 'Arroz', categoria: 'Despensa', cantidad: 2, unidad: 'kg', caducaEnDias: 300 },
];
