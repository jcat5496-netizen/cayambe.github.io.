// ================= CONFIGURACIÓN EDITABLE =================
// Todo lo que normalmente querrás cambiar está en esta sección.

// Idioma con el que abre la página: "es", "en" o "zh"
const DEFAULT_LANG = "es";

// Título de la pestaña del navegador
const PAGE_TITLE = "Cayambe · Ecuador · Andes";

// Enlace de tu diseño de Canva.
// - Si pegas un enlace de inserción (contiene "embed"), se muestra incrustado.
// - Si pegas un enlace normal, se muestra una tarjeta con botón que lo abre en otra pestaña.
// - Si lo dejas vacío (""), se muestra un espacio pendiente.
let canvaUrl = "https://www.canva.com/design/DAHZ59N4NlQ/n8V5RV_oHNOXfsgB7yd2kw/edit";

// Imagen panorámica del Nevado Cayambe (fondo del inicio)
const HERO_IMAGE = "images/nevado-cayambe-panoramica.jpg";

// Imagen de la sección "Un lugar lleno de historia y naturaleza"
const ABOUT_IMAGE = "images/cayambe-paisaje.jpg";

// Búsqueda de Google Maps del botón de contacto (footer)
const CONTACT_MAPS_QUERY = "Cayambe Ecuador información turística";

// Orden de las tarjetas en la página principal (usa los ids de "destinations")
const CARD_ORDER = ["bizcochos", "quitsato", "nevado-cayambe", "floricolas", "industria-alimentaria", "cultura", "haciendas", "gastronomia", "naturaleza"];

// Tarjetas que se muestran más anchas en la cuadrícula
const WIDE_CARDS = ["bizcochos", "cultura", "naturaleza"];

// Ayuda para nombres propios iguales en los 3 idiomas
const N = (s) => ({ es: s, en: s, zh: s });

// ---------- DESTINOS (páginas secundarias) ----------
// Para cada destino puedes cambiar:
//   image    -> imagen principal (banner y tarjeta)
//   gallery  -> lista de imágenes de la galería
//   related  -> ids de otros destinos relacionados
//   maps     -> botones de Google Maps. "main:true" = botón "Ver en Google Maps".
//               "q" es la búsqueda que se hará en Google Maps (edítala libremente).
//   text     -> textos en es / en / zh. "sections" = [ [título, texto], ... ]
// NOTA: revisa y amplía los textos con tu documento "DATOS DE CAYAMBE.docx".
const destinations = {
  "bizcochos": {
    image: "images/bizcochos.jpg",
    gallery: ["images/bizcochos.jpg"],
    related: ["gastronomia", "cultura", "quitsato"],
    maps: [
      { q: "panaderias de bizcochos Cayambe Ecuador", main: true },
      { q: "tiendas de bizcochos y queso de hoja Cayambe Ecuador", l: { es: "Buscar tiendas de bizcochos", en: "Search biscuit shops", zh: "搜索饼干店" } }
    ],
    text: {
      es: { title: "Bizcochos de Cayambe", subtitle: "El sabor tradicional de la Ciudad de los bizcochos",
        card: "Descubre el sabor tradicional de Cayambe a través de sus famosos bizcochos, acompañados de queso de hoja y chocolate caliente.",
        description: "Los bizcochos son uno de los símbolos gastronómicos de Cayambe, conocida como la Ciudad del Sol y de los bizcochos.",
        sections: [
          ["Historia y tradición gastronómica", "Los bizcochos forman parte de la identidad de Cayambe y de su tradición culinaria."],
          ["Preparación tradicional en hornos", "Se elaboran con técnicas tradicionales y se cuecen en hornos, una práctica que se mantiene en la zona."],
          ["Queso de hoja y chocolate caliente", "Se acompañan con queso de hoja y chocolate caliente, la combinación clásica para disfrutarlos."],
          ["Turismo y economía local", "Su elaboración y venta generan comercio y atraen a visitantes nacionales y extranjeros."],
          ["Panaderías y tiendas", "Usa los botones de Google Maps para buscar panaderías y tiendas de bizcochos en Cayambe."]
        ] },
      en: { title: "Cayambe Biscuits (Bizcochos)", subtitle: "The traditional flavor of the City of Bizcochos",
        card: "Discover the traditional taste of Cayambe through its famous bizcochos, served with leaf cheese and hot chocolate.",
        description: "Bizcochos are one of Cayambe's culinary symbols; the town is known as the City of the Sun and of bizcochos.",
        sections: [
          ["History and culinary tradition", "Bizcochos are part of Cayambe's identity and its culinary tradition."],
          ["Traditional oven baking", "They are made with traditional techniques and baked in ovens, a practice still kept in the area."],
          ["Leaf cheese and hot chocolate", "They are served with leaf cheese (queso de hoja) and hot chocolate, the classic pairing."],
          ["Tourism and local economy", "Making and selling them creates local trade and attracts national and international visitors."],
          ["Bakeries and shops", "Use the Google Maps buttons to search for bizcocho bakeries and shops in Cayambe."]
        ] },
      zh: { title: "卡扬贝的比斯科乔饼", subtitle: "“比斯科乔饼之城”的传统味道",
        card: "通过著名的比斯科乔饼，搭配叶子奶酪和热巧克力，探索卡扬贝的传统风味。",
        description: "比斯科乔饼（bizcochos）是卡扬贝的美食象征之一，卡扬贝被称为“太阳与比斯科乔饼之城”。",
        sections: [
          ["历史与美食传统", "比斯科乔饼是卡扬贝身份认同和饮食传统的一部分。"],
          ["传统烤炉制作", "它们以传统工艺制作，并在烤炉中烘烤，这一做法在当地延续至今。"],
          ["叶子奶酪与热巧克力", "通常搭配叶子奶酪（queso de hoja）和热巧克力，是经典吃法。"],
          ["旅游与地方经济", "制作和销售比斯科乔饼带动了当地商业，也吸引国内外游客。"],
          ["面包店与商店", "使用谷歌地图按钮搜索卡扬贝的比斯科乔饼面包店和商店。"]
        ] }
    }
  },

  "quitsato": {
    image: "images/quitsato.jpg",
    gallery: ["images/quitsato.jpg"],
    related: ["nevado-cayambe", "haciendas", "naturaleza"],
    maps: [{ q: "Reloj Solar Quitsato Cayambe Ecuador", main: true }],
    text: {
      es: { title: "Mitad del Mundo en Cayambe", subtitle: "Reloj Solar Quitsato y la línea ecuatorial",
        card: "Explora el Reloj Solar Quitsato y conoce la importancia científica y geográfica de la línea ecuatorial.",
        description: "En Cayambe la línea ecuatorial se puede visitar y comprender a través del Reloj Solar Quitsato.",
        sections: [
          ["Reloj Solar Quitsato", "Un reloj solar que permite observar y entender el movimiento del Sol en la línea ecuatorial."],
          ["Ubicación en Guachalá", "Quitsato se encuentra en la zona de Guachalá, en el cantón Cayambe."],
          ["La línea ecuatorial", "Es la línea imaginaria que divide la Tierra en hemisferio norte y hemisferio sur."],
          ["Importancia científica y geográfica", "Ayuda a comprender la posición de Ecuador en el planeta y la observación astronómica."],
          ["Equinoccios", "Durante los equinoccios, en marzo y septiembre, el Sol incide de forma perpendicular sobre el ecuador."],
          ["Bola de Guachalá", "Punto de interés de Guachalá vinculado a la línea ecuatorial."]
        ] },
      en: { title: "Middle of the World in Cayambe", subtitle: "The Quitsato Sundial and the equator line",
        card: "Explore the Quitsato Sundial and learn about the scientific and geographic importance of the equator.",
        description: "In Cayambe you can visit the equator line and understand it through the Quitsato Sundial.",
        sections: [
          ["Quitsato Sundial", "A sundial that lets you observe and understand the Sun's movement at the equator."],
          ["Location in Guachalá", "Quitsato is located in the Guachalá area, in the Cayambe canton."],
          ["The equator line", "The imaginary line that divides the Earth into northern and southern hemispheres."],
          ["Scientific and geographic importance", "It helps explain Ecuador's position on the planet and supports astronomical observation."],
          ["Equinoxes", "During the equinoxes, in March and September, the Sun falls perpendicular over the equator."],
          ["Bola de Guachalá", "A point of interest in Guachalá linked to the equator line."]
        ] },
      zh: { title: "卡扬贝的“世界中心”", subtitle: "基特萨托日晷与赤道线",
        card: "探索基特萨托（Quitsato）日晷，了解赤道线的科学与地理意义。",
        description: "在卡扬贝可以参观赤道线，并通过基特萨托日晷来理解它。",
        sections: [
          ["基特萨托日晷", "一座日晷，可以观察并理解太阳在赤道上的运行。"],
          ["位于瓜查拉", "基特萨托位于卡扬贝县的瓜查拉（Guachalá）地区。"],
          ["赤道线", "赤道是将地球分为北半球和南半球的假想线。"],
          ["科学与地理意义", "有助于理解厄瓜多尔在地球上的位置，也便于天文观测。"],
          ["二分点", "春分和秋分（三月和九月）时，太阳垂直照射赤道。"],
          ["瓜查拉之球（Bola de Guachalá）", "瓜查拉的一处景点，与赤道线相关。"]
        ] }
    }
  },

  "nevado-cayambe": {
    image: "images/nevado-cayambe.jpg",
    gallery: ["images/nevado-cayambe.jpg"],
    related: ["naturaleza", "quitsato", "haciendas"],
    maps: [{ q: "Nevado Cayambe Ecuador", main: true },
      { q: "Parque Nacional Cayambe-Coca Ecuador", l: { es: "Parque Nacional Cayambe-Coca", en: "Cayambe-Coca National Park", zh: "卡扬贝-科卡国家公园" } }],
    text: {
      es: { title: "Nevado Cayambe", subtitle: "Un gigante glaciar de los Andes",
        card: "Admira uno de los paisajes más impresionantes de los Andes ecuatorianos, rodeado de glaciares y naturaleza.",
        description: "El Nevado Cayambe es el volcán nevado que domina el paisaje del cantón, con una altura aproximada de 5.790 m s. n. m.",
        sections: [
          ["Altura y características", "Alcanza unos 5.790 m s. n. m. Es un volcán cubierto de nieve y glaciares."],
          ["Glaciares", "Sus glaciares son parte esencial de su paisaje de alta montaña."],
          ["Parque Nacional Cayambe-Coca", "El nevado se encuentra dentro de esta área protegida, rodeado de páramo y naturaleza."],
          ["Fotografía y paisajes", "Sus panorámicas de nieve, páramo y cielo andino son ideales para la fotografía."],
          ["Senderismo y montañismo", "Haz senderismo solo en zonas autorizadas. El montañismo requiere guías especializados y preparación."],
          ["Seguridad y clima", "El clima de alta montaña cambia rápido. Consulta el pronóstico, lleva abrigo e hidratación, respeta las normas del parque y no subas sin preparación ni guía."]
        ] },
      en: { title: "Cayambe Volcano", subtitle: "A glacier-capped giant of the Andes",
        card: "Admire one of the most impressive landscapes of the Ecuadorian Andes, surrounded by glaciers and nature.",
        description: "Nevado Cayambe is the snow-capped volcano that dominates the canton's landscape, at roughly 5,790 m above sea level.",
        sections: [
          ["Height and features", "It reaches about 5,790 m above sea level. It is a volcano covered in snow and glaciers."],
          ["Glaciers", "Its glaciers are an essential part of its high-mountain landscape."],
          ["Cayambe-Coca National Park", "The volcano lies within this protected area, surrounded by páramo and nature."],
          ["Photography and landscapes", "Its views of snow, páramo and Andean sky are ideal for photography."],
          ["Hiking and mountaineering", "Hike only in authorized areas. Mountaineering requires specialized guides and preparation."],
          ["Safety and weather", "High-mountain weather changes fast. Check the forecast, bring warm clothing and water, follow park rules, and never climb without preparation or a guide."]
        ] },
      zh: { title: "卡扬贝雪山", subtitle: "安第斯山脉的冰川巨人",
        card: "欣赏厄瓜多尔安第斯山脉最壮观的景色之一，冰川与大自然环绕。",
        description: "卡扬贝雪山是主宰该县景观的雪山火山，海拔约5,790米。",
        sections: [
          ["海拔与特征", "海拔约5,790米，是一座被冰雪和冰川覆盖的火山。"],
          ["冰川", "冰川是其高山景观的重要组成部分。"],
          ["卡扬贝-科卡国家公园", "雪山位于这一保护区内，周围是高原湿地草原（páramo）和自然景观。"],
          ["摄影与风景", "雪山、高原草甸和安第斯天空的全景非常适合摄影。"],
          ["徒步与登山", "仅在获准区域徒步。登山需要专业向导和充分准备。"],
          ["安全与天气", "高山天气变化很快。请查看天气预报，携带保暖衣物和饮水，遵守公园规定，切勿在没有准备或向导的情况下攀登。"]
        ] }
    }
  },

  "floricolas": {
    image: "images/floricolas.jpg",
    gallery: ["images/floricolas.jpg"],
    related: ["industria-alimentaria", "nevado-cayambe", "cultura"],
    maps: [{ q: "floricolas Cayambe Ecuador", main: true },
      { q: "rosas Cayambe Ecuador", l: { es: "Buscar productores de rosas", en: "Search rose growers", zh: "搜索玫瑰种植园" } }],
    text: {
      es: { title: "Florícolas de Cayambe", subtitle: "Rosas que viajan desde los Andes",
        card: "Conoce la importancia de la producción de flores, especialmente las rosas, en la economía de Cayambe.",
        description: "La producción de flores, en especial rosas, es una de las actividades económicas más importantes de Cayambe.",
        sections: [
          ["Producción de rosas", "Las rosas son el producto más representativo de las florícolas de la zona."],
          ["Exportación de flores", "Gran parte de la producción se destina a mercados internacionales."],
          ["Importancia económica", "La floricultura es un pilar de la economía local."],
          ["Generación de empleo", "El sector ofrece trabajo a muchas familias del cantón."],
          ["Condiciones geográficas y climáticas", "La altura, la luz solar y el clima andino favorecen el cultivo de flores."]
        ] },
      en: { title: "Cayambe Flower Farms", subtitle: "Roses traveling from the Andes",
        card: "Learn about the importance of flower production, especially roses, in Cayambe's economy.",
        description: "Flower growing, especially roses, is one of Cayambe's most important economic activities.",
        sections: [
          ["Rose production", "Roses are the most representative product of the area's flower farms."],
          ["Flower exports", "A large part of the production goes to international markets."],
          ["Economic importance", "Floriculture is a pillar of the local economy."],
          ["Job creation", "The sector provides work for many families in the canton."],
          ["Geography and climate", "Altitude, sunlight and the Andean climate favor flower growing."]
        ] },
      zh: { title: "卡扬贝的花卉种植园", subtitle: "从安第斯山脉出发的玫瑰",
        card: "了解花卉（尤其是玫瑰）生产对卡扬贝经济的重要性。",
        description: "花卉种植，尤其是玫瑰，是卡扬贝最重要的经济活动之一。",
        sections: [
          ["玫瑰生产", "玫瑰是当地花卉种植园最具代表性的产品。"],
          ["花卉出口", "大部分产品销往国际市场。"],
          ["经济意义", "花卉业是当地经济的支柱。"],
          ["创造就业", "该行业为该县许多家庭提供工作。"],
          ["地理与气候条件", "海拔、阳光和安第斯气候有利于花卉种植。"]
        ] }
    }
  },

  "industria-alimentaria": {
    image: "images/industria-alimentaria.jpg",
    gallery: ["images/industria-alimentaria.jpg"],
    related: ["floricolas", "gastronomia", "haciendas"],
    maps: [{ q: "industria lactea Cayambe Ecuador", main: true },
      { q: "queserias Cayambe Ecuador", l: { es: "Buscar queserías", en: "Search cheese makers", zh: "搜索奶酪作坊" } }],
    text: {
      es: { title: "Nestlé e industria alimentaria", subtitle: "Leche, queso y economía andina",
        card: "Descubre la relación de Cayambe y sus alrededores con la producción lechera y la industria alimentaria.",
        description: "Cayambe y sus alrededores tienen una fuerte relación con la producción lechera y la industria alimentaria.",
        sections: [
          ["Industria alimentaria", "El sector alimentario es parte importante de la economía de la zona."],
          ["Producción lechera", "La producción de leche es una actividad clave en el campo de Cayambe y sus alrededores."],
          ["Industria láctea", "La leche se transforma en productos lácteos como el queso."],
          ["Comercialización de productos", "Los productos llegan a mercados locales y nacionales."],
          ["Relación económica con Cayambe", "Estas actividades generan trabajo y comercio. Aviso: no se afirma que exista una fábrica específica de Nestlé dentro de la ciudad, pues no hay información confirmada."]
        ] },
      en: { title: "Nestlé and the Food Industry", subtitle: "Milk, cheese and the Andean economy",
        card: "Discover how Cayambe and its surroundings relate to dairy production and the food industry.",
        description: "Cayambe and its surroundings have a strong link to dairy production and the food industry.",
        sections: [
          ["Food industry", "The food sector is an important part of the area's economy."],
          ["Dairy production", "Milk production is a key activity in the countryside of Cayambe and its surroundings."],
          ["Dairy industry", "Milk is turned into dairy products such as cheese."],
          ["Marketing of products", "Products reach local and national markets."],
          ["Economic relationship with Cayambe", "These activities create jobs and trade. Note: we do not claim a specific Nestlé factory exists inside the town, as there is no confirmed information."]
        ] },
      zh: { title: "雀巢与食品工业", subtitle: "牛奶、奶酪与安第斯经济",
        card: "了解卡扬贝及周边地区与乳业生产和食品工业的关系。",
        description: "卡扬贝及周边地区与乳业生产和食品工业关系密切。",
        sections: [
          ["食品工业", "食品行业是当地经济的重要组成部分。"],
          ["乳业生产", "牛奶生产是卡扬贝及周边乡村的重要活动。"],
          ["乳制品工业", "牛奶被加工成奶酪等乳制品。"],
          ["产品销售", "产品销往本地和全国市场。"],
          ["与卡扬贝的经济关系", "这些活动创造就业和贸易。说明：由于没有确认的信息，我们不声称城内有具体的雀巢工厂。"]
        ] }
    }
  },

  "cultura": {
    image: "images/cultura.jpg",
    gallery: ["images/cultura.jpg"],
    related: ["haciendas", "gastronomia", "bizcochos"],
    maps: [{ q: "Cayambe Ecuador centro", main: true },
      { q: "Museo Cayambe Ecuador", l: { es: "Buscar museos y centros culturales", en: "Search museums and cultural centers", zh: "搜索博物馆和文化中心" } }],
    text: {
      es: { title: "Cultura y fiestas tradicionales", subtitle: "El pueblo Kayambi y sus celebraciones",
        card: "Conoce las celebraciones del pueblo Kayambi, sus personajes tradicionales y sus costumbres.",
        description: "La cultura de Cayambe se vive en las fiestas, los personajes tradicionales y la herencia del pueblo Kayambi.",
        sections: [
          ["Pueblo Kayambi", "Pueblo originario cuya herencia sigue presente en las costumbres de Cayambe."],
          ["Inti Raymi · 21 de junio", "Celebración andina ligada al Sol y a los ciclos agrícolas."],
          ["San Pedro y San Pablo · 29 de junio", "Fiesta tradicional que forma parte del calendario festivo de junio."],
          ["Octavas de Juan Montalvo · 30 de junio", "Celebración que cierra el ciclo de las fiestas de junio."],
          ["Cantonización de Cayambe · 23 de julio", "Fecha en que se celebra la cantonización de Cayambe."],
          ["Personajes tradicionales", "Diabluma, Aruchicos, Chinucas y Payasos acompañan las celebraciones."],
          ["Dolores Cacuango", "Líder indígena recordada de Cayambe, símbolo de la lucha y la dignidad de su pueblo."]
        ] },
      en: { title: "Culture and Traditional Festivals", subtitle: "The Kayambi people and their celebrations",
        card: "Learn about the Kayambi people's celebrations, traditional characters and customs.",
        description: "Cayambe's culture lives in its festivals, traditional characters and the heritage of the Kayambi people.",
        sections: [
          ["Kayambi people", "An indigenous people whose heritage remains present in Cayambe's customs."],
          ["Inti Raymi · June 21", "An Andean celebration linked to the Sun and agricultural cycles."],
          ["San Pedro and San Pablo · June 29", "A traditional festival in the June festive calendar."],
          ["Octavas de Juan Montalvo · June 30", "A celebration that closes the cycle of June festivities."],
          ["Cantonization of Cayambe · July 23", "The date when Cayambe's cantonization is celebrated."],
          ["Traditional characters", "Diabluma, Aruchicos, Chinucas and Payasos (clowns) accompany the celebrations."],
          ["Dolores Cacuango", "A remembered indigenous leader from Cayambe, a symbol of her people's struggle and dignity."]
        ] },
      zh: { title: "文化与传统节日", subtitle: "卡扬比人及其庆典",
        card: "了解卡扬比人的庆典、传统人物和习俗。",
        description: "卡扬贝的文化体现在节日、传统人物和卡扬比人的传承之中。",
        sections: [
          ["卡扬比人（Kayambi）", "原住民族，其传统至今仍体现在卡扬贝的习俗中。"],
          ["太阳节 Inti Raymi · 6月21日", "与太阳和农业周期相关的安第斯庆典。"],
          ["圣彼得与圣保罗节 · 6月29日", "六月节庆日历中的传统节日。"],
          ["胡安·蒙塔尔沃八日庆 · 6月30日", "为六月庆典画上句号的庆祝活动。"],
          ["卡扬贝建县纪念日 · 7月23日", "庆祝卡扬贝建县的日子。"],
          ["传统人物", "Diabluma、Aruchicos、Chinucas 和 Payasos（小丑）陪伴着各种庆典。"],
          ["多洛雷斯·卡库安戈（Dolores Cacuango）", "卡扬贝著名的原住民领袖，象征着其民族的抗争与尊严。"]
        ] }
    }
  },

  "haciendas": {
    image: "images/haciendas.jpg",
    gallery: ["images/haciendas.jpg"],
    related: ["cultura", "quitsato", "naturaleza"],
    maps: [
      { q: "Hacienda Guachalá Cayambe Ecuador", l: N("Hacienda Guachalá") },
      { q: "Hacienda Molino San Juan Cayambe Ecuador", l: N("Hacienda Molino San Juan") },
      { q: "Hacienda María Delfina Cayambe Ecuador", l: N("Hacienda María Delfina") }
    ],
    text: {
      es: { title: "Haciendas históricas", subtitle: "Historia, arquitectura y vida rural",
        card: "Recorre lugares que conservan la historia, la arquitectura y las tradiciones rurales de la región.",
        description: "Las haciendas de la zona conservan parte de la historia, la arquitectura y las tradiciones rurales de Cayambe.",
        sections: [
          ["Hacienda Guachalá", "Hacienda histórica de la zona de Guachalá."],
          ["Hacienda Molino San Juan", "Lugar que forma parte del patrimonio rural de Cayambe."],
          ["Hacienda María Delfina", "Otra hacienda representativa de la región."],
          ["Historia y arquitectura", "Sus construcciones reflejan la historia rural de los Andes."],
          ["Turismo rural y patrimonio cultural", "Visitarlas permite conocer el patrimonio cultural del campo. Confirma horarios y condiciones de visita antes de ir."]
        ] },
      en: { title: "Historic Haciendas", subtitle: "History, architecture and rural life",
        card: "Visit places that preserve the history, architecture and rural traditions of the region.",
        description: "The area's haciendas preserve part of Cayambe's history, architecture and rural traditions.",
        sections: [
          ["Hacienda Guachalá", "A historic hacienda in the Guachalá area."],
          ["Hacienda Molino San Juan", "A place that is part of Cayambe's rural heritage."],
          ["Hacienda María Delfina", "Another representative hacienda of the region."],
          ["History and architecture", "Their buildings reflect the rural history of the Andes."],
          ["Rural tourism and cultural heritage", "Visiting them lets you discover the cultural heritage of the countryside. Confirm visiting hours and conditions first."]
        ] },
      zh: { title: "历史庄园", subtitle: "历史、建筑与乡村生活",
        card: "走访保留着该地区历史、建筑和乡村传统的地方。",
        description: "该地区的庄园保留了卡扬贝的部分历史、建筑和乡村传统。",
        sections: [
          ["瓜查拉庄园（Hacienda Guachalá）", "瓜查拉地区的历史庄园。"],
          ["圣胡安磨坊庄园（Hacienda Molino San Juan）", "卡扬贝乡村遗产的一部分。"],
          ["玛丽亚·德尔菲娜庄园（Hacienda María Delfina）", "该地区另一座具有代表性的庄园。"],
          ["历史与建筑", "这些建筑反映了安第斯地区的乡村历史。"],
          ["乡村旅游与文化遗产", "参观可以了解乡村的文化遗产。出发前请确认开放时间和参观条件。"]
        ] }
    }
  },

  "gastronomia": {
    image: "images/gastronomia.jpg",
    gallery: ["images/gastronomia.jpg"],
    sectionImages: ["images/bizcochos.jpg", "images/queso-de-hoja.jpg", "images/chocolate-caliente.jpg", "images/uchujacu.jpg", "images/cuy-asado.jpg", "images/tortillas-de-tiesto.jpg", "images/chicha-de-jora.jpg", "images/guarango.jpg"],
    related: ["bizcochos", "cultura", "industria-alimentaria"],
    maps: [{ q: "restaurantes Cayambe Ecuador", main: true },
      { q: "comida tradicional Cayambe Ecuador", l: { es: "Buscar comida tradicional", en: "Search traditional food", zh: "搜索传统美食" } },
      { q: "cuy asado Cayambe Ecuador", l: { es: "Buscar cuy asado", en: "Search roast guinea pig", zh: "搜索烤豚鼠" } }],
    text: {
      es: { title: "Gastronomía de Cayambe", subtitle: "Sabores de los Andes ecuatorianos",
        card: "Descubre los sabores tradicionales de los Andes ecuatorianos y su riqueza culinaria.",
        description: "La cocina de Cayambe combina productos andinos, tradición familiar y recetas que pasan de generación en generación.",
        sections: [
          ["Bizcochos", "El producto más emblemático de Cayambe, horneado de forma tradicional."],
          ["Queso de hoja", "Queso fresco que acompaña a los bizcochos."],
          ["Chocolate caliente", "Bebida caliente ideal para el clima andino y compañera de los bizcochos."],
          ["Uchujacu", "Preparación tradicional andina."],
          ["Cuy asado", "Plato típico de la sierra ecuatoriana, presente en celebraciones."],
          ["Tortillas de tiesto", "Tortillas cocinadas en tiesto, una receta andina tradicional."],
          ["Chicha de jora", "Bebida tradicional andina elaborada a base de maíz."],
          ["Guarango", "Bebida tradicional andina, asociada a las celebraciones. Confirma su descripción con tu documento."]
        ] },
      en: { title: "Cayambe Gastronomy", subtitle: "Flavors of the Ecuadorian Andes",
        card: "Discover the traditional flavors of the Ecuadorian Andes and their culinary richness.",
        description: "Cayambe's cuisine combines Andean ingredients, family tradition and recipes passed down through generations.",
        sections: [
          ["Bizcochos", "Cayambe's most emblematic product, baked the traditional way."],
          ["Leaf cheese (queso de hoja)", "Fresh cheese served with bizcochos."],
          ["Hot chocolate", "A hot drink suited to the Andean climate, a partner to bizcochos."],
          ["Uchujacu", "A traditional Andean preparation."],
          ["Roast guinea pig (cuy asado)", "A typical dish of the Ecuadorian highlands, present in celebrations."],
          ["Tortillas de tiesto", "Tortillas cooked on a clay griddle, a traditional Andean recipe."],
          ["Chicha de jora", "A traditional Andean drink made from corn."],
          ["Guarango", "A traditional Andean drink associated with celebrations. Check its description against your document."]
        ] },
      zh: { title: "卡扬贝美食", subtitle: "厄瓜多尔安第斯山区的味道",
        card: "探索厄瓜多尔安第斯山区的传统风味和丰富的饮食文化。",
        description: "卡扬贝的美食融合了安第斯食材、家庭传统和代代相传的食谱。",
        sections: [
          ["比斯科乔饼（Bizcochos）", "卡扬贝最具代表性的产品，以传统方式烘烤。"],
          ["叶子奶酪（Queso de hoja）", "搭配比斯科乔饼食用的新鲜奶酪。"],
          ["热巧克力", "适合安第斯气候的热饮，是比斯科乔饼的好搭档。"],
          ["Uchujacu", "一道传统的安第斯美食。"],
          ["烤豚鼠（Cuy asado）", "厄瓜多尔高原的特色菜，常见于庆典。"],
          ["陶板玉米饼（Tortillas de tiesto）", "在陶板上烙制的玉米饼，是传统的安第斯食谱。"],
          ["玉米酒 Chicha de jora", "以玉米为原料的传统安第斯饮品。"],
          ["Guarango", "与庆典相关的传统安第斯饮品。请对照你的文档核实其介绍。"]
        ] }
    }
  },

  "naturaleza": {
    image: "images/naturaleza.jpg",
    gallery: ["images/naturaleza.jpg"],
    related: ["nevado-cayambe", "quitsato", "haciendas"],
    maps: [
      { q: "Laguna San Marcos Cayambe Ecuador", l: N("Laguna San Marcos") },
      { q: "Laguna Puruhanta Cayambe Ecuador", l: N("Laguna Puruhanta") },
      { q: "Parque Nacional Cayambe-Coca Ecuador", l: { es: "Parque Nacional Cayambe-Coca", en: "Cayambe-Coca National Park", zh: "卡扬贝-科卡国家公园" } }
    ],
    text: {
      es: { title: "Lagunas y naturaleza", subtitle: "Páramo, agua y biodiversidad",
        card: "Explora los paisajes de páramo, las lagunas y la biodiversidad de los alrededores de Cayambe.",
        description: "Los alrededores de Cayambe ofrecen páramo, lagunas y áreas protegidas llenas de vida.",
        sections: [
          ["Laguna San Marcos", "Laguna de los alrededores de Cayambe, rodeada de paisaje andino."],
          ["Laguna Puruhanta", "Otro espejo de agua de la zona de páramo."],
          ["Parque Nacional Cayambe-Coca", "Área protegida que resguarda ecosistemas de páramo y alta montaña."],
          ["Paisajes de páramo", "Extensos pajonales y vistas abiertas típicas de los Andes."],
          ["Biodiversidad", "El páramo alberga flora y fauna propias de la alta montaña."],
          ["Fuentes de agua", "El páramo y los glaciares son fuentes de agua importantes. Cuídalos: no dejes residuos y respeta los senderos."]
        ] },
      en: { title: "Lagoons and Nature", subtitle: "Páramo, water and biodiversity",
        card: "Explore the páramo landscapes, lagoons and biodiversity around Cayambe.",
        description: "The surroundings of Cayambe offer páramo, lagoons and protected areas full of life.",
        sections: [
          ["Laguna San Marcos", "A lagoon near Cayambe, surrounded by Andean scenery."],
          ["Laguna Puruhanta", "Another body of water in the páramo area."],
          ["Cayambe-Coca National Park", "A protected area that safeguards páramo and high-mountain ecosystems."],
          ["Páramo landscapes", "Wide grasslands and open views typical of the Andes."],
          ["Biodiversity", "The páramo is home to flora and fauna typical of the high mountains."],
          ["Water sources", "The páramo and glaciers are important water sources. Protect them: leave no waste and stay on trails."]
        ] },
      zh: { title: "湖泊与自然", subtitle: "高原草甸、水源与生物多样性",
        card: "探索卡扬贝周边的高原草甸景观、湖泊和生物多样性。",
        description: "卡扬贝周边有高原草甸（páramo）、湖泊和充满生机的保护区。",
        sections: [
          ["圣马科斯湖（Laguna San Marcos）", "卡扬贝周边的湖泊，被安第斯风光环绕。"],
          ["普鲁汉塔湖（Laguna Puruhanta）", "高原地区的另一处湖泊。"],
          ["卡扬贝-科卡国家公园", "保护高原草甸和高山生态系统的保护区。"],
          ["高原草甸景观", "典型的安第斯广阔草原与开阔视野。"],
          ["生物多样性", "高原草甸栖息着高山特有的动植物。"],
          ["水源", "高原草甸和冰川是重要水源。请爱护：不留垃圾，沿步道行走。"]
        ] }
    }
  }
};

// ---------- TRADUCCIONES DE LA INTERFAZ ----------
const translations = {
  es: {
    skip: "Saltar al contenido", navHome: "Inicio", navDiscover: "Descubrir", navCulture: "Cultura", navFood: "Gastronomía", navNature: "Naturaleza", navContact: "Contacto",
    langLabel: "Idioma", themeDark: "Activar modo oscuro", themeLight: "Activar modo claro", menu: "Menú",
    heroEyebrow: "DESCUBRE LOS ANDES DEL ECUADOR", heroSub: "Un destino donde los Andes, la cultura y las tradiciones se encuentran.",
    heroText: "Cayambe es uno de los cantones más representativos de Pichincha. Conocido por su nevado, sus tradicionales bizcochos, sus paisajes andinos y la riqueza cultural del pueblo Kayambi, ofrece una experiencia que conecta naturaleza, historia y gastronomía.",
    btnExplore: "Explorar Cayambe", btnNevado: "Conocer el Nevado", scroll: "Desplázate hacia abajo",
    discoverTitle: "Descubre Cayambe", discoverSub: "Explora sus lugares, sabores, paisajes y tradiciones.", more: "Descubrir más",
    aboutTitle: "Un lugar lleno de historia y naturaleza",
    aboutList: ["Ubicación: provincia de Pichincha, Ecuador.", "Altitud aproximada: 2.830 m s. n. m.", "Clima frío templado andino.", "Conocida como Ciudad del Sol y de los bizcochos.", "Riqueza cultural indígena.", "Producción de flores.", "Paisajes andinos."],
    canvaTitle: "Conoce Cayambe de otra manera", canvaText: "Mira nuestra presentación visual y recorre Cayambe con otra mirada.", canvaBtn: "Ver presentación",
    canvaPending: "Aquí aparecerá tu diseño de Canva. Pega tu enlace en la variable canvaUrl de script.js.", canvaFrameTitle: "Presentación de Cayambe en Canva",
    infoTitle: "Información detallada", galleryTitle: "Galería", relatedTitle: "Lugares relacionados", howTitle: "¿Cómo llegar?", moreInfo: "Más información",
    howText: "Abre Google Maps en una nueva pestaña para ver la ubicación o buscar lugares y negocios relacionados.", viewMaps: "Ver en Google Maps",
    back: "← Volver", pending: "Imagen pendiente de agregar",
    footerText: "Guía turística del cantón Cayambe, provincia de Pichincha.", contactTitle: "Contacto", contactText: "¿Planeas tu visita? Consulta información turística de Cayambe en Google Maps.",
    credits: "Proyecto educativo · Hecho con HTML, CSS y JavaScript", toTop: "Volver al inicio", alt: "Imagen de"
  },
  en: {
    skip: "Skip to content", navHome: "Home", navDiscover: "Discover", navCulture: "Culture", navFood: "Gastronomy", navNature: "Nature", navContact: "Contact",
    langLabel: "Language", themeDark: "Switch to dark mode", themeLight: "Switch to light mode", menu: "Menu",
    heroEyebrow: "DISCOVER THE ANDES OF ECUADOR", heroSub: "A destination where the Andes, culture and traditions meet.",
    heroText: "Cayambe is one of the most representative cantons of Pichincha. Known for its snow-capped volcano, traditional bizcochos, Andean landscapes and the cultural wealth of the Kayambi people, it offers an experience that connects nature, history and gastronomy.",
    btnExplore: "Explore Cayambe", btnNevado: "Meet the Volcano", scroll: "Scroll down",
    discoverTitle: "Discover Cayambe", discoverSub: "Explore its places, flavors, landscapes and traditions.", more: "Discover more",
    aboutTitle: "A place full of history and nature",
    aboutList: ["Location: Pichincha province, Ecuador.", "Approximate altitude: 2,830 m above sea level.", "Cool temperate Andean climate.", "Known as the City of the Sun and of bizcochos.", "Rich indigenous culture.", "Flower production.", "Andean landscapes."],
    canvaTitle: "Discover Cayambe in another way", canvaText: "Watch our visual presentation and see Cayambe through a different lens.", canvaBtn: "View presentation",
    canvaPending: "Your Canva design will appear here. Paste your link in the canvaUrl variable in script.js.", canvaFrameTitle: "Cayambe presentation on Canva",
    infoTitle: "Detailed information", galleryTitle: "Gallery", relatedTitle: "Related places", howTitle: "How to get there", moreInfo: "More information",
    howText: "Open Google Maps in a new tab to see the location or search for related places and businesses.", viewMaps: "View on Google Maps",
    back: "← Back", pending: "Image to be added",
    footerText: "Tourist guide to the Cayambe canton, Pichincha province.", contactTitle: "Contact", contactText: "Planning your visit? Check tourist information about Cayambe on Google Maps.",
    credits: "Educational project · Built with HTML, CSS and JavaScript", toTop: "Back to top", alt: "Image of"
  },
  zh: {
    skip: "跳到内容", navHome: "首页", navDiscover: "探索", navCulture: "文化", navFood: "美食", navNature: "自然", navContact: "联系",
    langLabel: "语言", themeDark: "切换到深色模式", themeLight: "切换到浅色模式", menu: "菜单",
    heroEyebrow: "探索厄瓜多尔的安第斯山脉", heroSub: "安第斯山脉、文化与传统交汇的目的地。",
    heroText: "卡扬贝是皮钦查省最具代表性的县之一。这里以雪山、传统的比斯科乔饼、安第斯风光和卡扬比人丰富的文化而闻名，带来连接自然、历史与美食的体验。",
    btnExplore: "探索卡扬贝", btnNevado: "认识雪山", scroll: "向下滚动",
    discoverTitle: "探索卡扬贝", discoverSub: "探索这里的景点、风味、风景与传统。", more: "了解更多",
    aboutTitle: "充满历史与自然的地方",
    aboutList: ["位置：厄瓜多尔皮钦查省。", "大致海拔：2,830米。", "凉爽温和的安第斯气候。", "被称为“太阳与比斯科乔饼之城”。", "丰富的原住民文化。", "花卉生产。", "安第斯风光。"],
    canvaTitle: "以另一种方式认识卡扬贝", canvaText: "观看我们的视觉展示，用不同的视角游览卡扬贝。", canvaBtn: "查看展示",
    canvaPending: "你的 Canva 设计将显示在这里。请把链接粘贴到 script.js 的 canvaUrl 变量中。", canvaFrameTitle: "Canva 上的卡扬贝展示",
    infoTitle: "详细信息", galleryTitle: "图库", relatedTitle: "相关地点", howTitle: "如何前往", moreInfo: "更多信息",
    howText: "在新标签页中打开谷歌地图，查看位置或搜索相关地点和商家。", viewMaps: "在谷歌地图中查看",
    back: "← 返回", pending: "图片待添加",
    footerText: "皮钦查省卡扬贝县旅游指南。", contactTitle: "联系", contactText: "计划前往？在谷歌地图上查看卡扬贝的旅游信息。",
    credits: "教学项目 · 使用 HTML、CSS 和 JavaScript 制作", toTop: "回到顶部", alt: "图片："
  }
};
// ================= FIN DE LA CONFIGURACIÓN EDITABLE =================


// ================= CÓDIGO DEL SITIO (no necesitas editarlo) =================
const STORAGE_LANG = "cayambe-lang";
const STORAGE_THEME = "cayambe-theme";
const app = document.getElementById("app");
let lang = DEFAULT_LANG;

const safeGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } };
const t = (key) => (translations[lang] && translations[lang][key]) || translations.es[key] || key;

// ---------- Imágenes y placeholders (G) ----------
function placeholder(cls) { return `<div class="ph ${cls || ""}"><span>${t("pending")}</span></div>`; }
function imgFail(el) {
  const d = document.createElement("div");
  d.className = "ph";
  d.innerHTML = `<span>${t("pending")}</span>`;
  el.replaceWith(d);
}
function img(src, alt) {
  if (!src) return placeholder();
  return `<img src="${src}" alt="${alt || ""}" loading="lazy" onerror="imgFail(this)">`;
}

// ---------- Google Maps (H) ----------
function mapsUrl(query) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query); }
function mapsButtons(list) {
  return list.map((m) => {
    const label = m.main ? t("viewMaps") : (m.l[lang] || m.l.es);
    return `<a class="btn ${m.main ? "btn-primary" : "btn-ghost"}" href="${mapsUrl(m.q)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }).join("");
}

// ---------- Canva (I) ----------
function canvaSection() {
  let visual;
  if (canvaUrl && /embed/i.test(canvaUrl)) {
    visual = `<div class="canva-frame"><iframe src="${canvaUrl}" title="${t("canvaFrameTitle")}" loading="lazy" allowfullscreen></iframe></div>`;
  } else if (canvaUrl) {
    visual = `<div class="canva-card"><h3>${t("canvaTitle")}</h3><p>${t("canvaText")}</p><a class="btn btn-primary" href="${canvaUrl}" target="_blank" rel="noopener noreferrer">${t("canvaBtn")}</a></div>`;
  } else {
    visual = `<div class="canva-card"><h3>${t("canvaTitle")}</h3><p>${t("canvaPending")}</p></div>`;
  }
  const btn = canvaUrl ? `<a class="btn btn-ghost" href="${canvaUrl.replace(/\?embed.*$/i, "")}" target="_blank" rel="noopener noreferrer">${t("canvaBtn")}</a>` : "";
  return `<section class="section alt reveal" id="canva"><div class="container">
    <div class="canva-head"><div class="section-head" style="margin:0"><h2>${t("canvaTitle")}</h2><p>${t("canvaText")}</p></div>${btn}</div>
    ${visual}</div></section>`;
}

// ---------- Botón "Más información" (enlace de Canva) ----------
function moreInfoBtn() {
  return canvaUrl ? `<a class="btn btn-primary" href="${canvaUrl}" target="_blank" rel="noopener noreferrer">${t("moreInfo")}</a>` : "";
}

// ---------- Páginas (D) ----------
function homePage() {
  const cards = CARD_ORDER.map((id) => {
    const d = destinations[id], tx = d.text[lang];
    return `<a class="card ${WIDE_CARDS.includes(id) ? "wide" : ""}" href="#/${id}">
      <div class="card-img">${img(d.image, tx.title)}</div>
      <div class="card-body"><h3>${tx.title}</h3><p>${tx.card}</p><span class="card-link">${t("more")}</span></div></a>`;
  }).join("");
  const list = translations[lang].aboutList.map((i) => `<li>${i}</li>`).join("");
  return `
  <section class="hero" id="inicio">
    <div class="hero-bg">${img(HERO_IMAGE, "Nevado Cayambe")}</div>
    <div class="container hero-content">
      <p class="eyebrow">${t("heroEyebrow")}</p>
      <h1>CAYAMBE</h1>
      <p class="hero-sub">“${t("heroSub")}”</p>
      <p class="hero-text">${t("heroText")}</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#/descubre">${t("btnExplore")}</a>
        <a class="btn btn-light" href="#/nevado-cayambe">${t("btnNevado")}</a>
      </div>
    </div>
    <span class="scroll-hint" role="img" aria-label="${t("scroll")}"></span>
  </section>
  <section class="section reveal" id="descubre"><div class="container">
    <div class="section-head"><h2>${t("discoverTitle")}</h2><p>${t("discoverSub")}</p></div>
    <div class="cards">${cards}</div></div></section>
  <section class="section alt reveal" id="sobre"><div class="container about">
    <div><h2>${t("aboutTitle")}</h2><ul class="about-list">${list}</ul></div>
    <div class="about-img">${img(ABOUT_IMAGE, t("aboutTitle"))}</div></div></section>
  ${canvaSection()}`;
}

function detailPage(id) {
  const d = destinations[id], tx = d.text[lang];
  const food = Array.isArray(d.sectionImages);
  const items = tx.sections.map((s, i) => {
    const pic = food ? `<div class="food-img">${img(d.sectionImages[i], s[0])}</div>` : "";
    const safety = id === "nevado-cayambe" && i === tx.sections.length - 1 ? " safety" : "";
    return `<article class="info-item${safety}">${pic}<h3>${s[0]}</h3><p>${s[1]}</p></article>`;
  }).join("");
  const gallery = d.gallery.map((g, i) => `<figure>${img(g, `${t("alt")} ${tx.title} ${i + 1}`)}</figure>`).join("");
  const related = d.related.map((r) => `<a class="chip" href="#/${r}">${destinations[r].text[lang].title}</a>`).join("");
  return `
  <div class="page-in">
  <section class="banner">
    <div class="banner-img">${img(d.image, tx.title)}</div>
    <div class="container banner-content"><a class="crumb" href="#/">${t("back")}</a><h1>${tx.title}</h1><p>${tx.subtitle}</p></div>
  </section>
  <section class="section reveal"><div class="container">
    <p class="lead">${tx.description}</p>
    <h2 style="margin-top:3rem">${t("infoTitle")}</h2>
    <div class="info-grid">${items}</div></div></section>
  <section class="section alt reveal"><div class="container">
    <h2>${t("galleryTitle")}</h2><div class="gallery">${gallery}</div></div></section>
  <section class="section reveal"><div class="container">
    <h2>${t("relatedTitle")}</h2><div class="related">${related}</div></div></section>
  <section class="section alt reveal"><div class="container">
    <div class="maps-box"><h2>${t("howTitle")}</h2><p>${t("howText")}</p><div class="maps-actions">${mapsButtons(d.maps)}</div></div></div></section>
  <div class="container back-row"><a class="btn btn-ghost" href="#/">${t("back")}</a>${moreInfoBtn()}</div>
  </div>`;
}

function getRoute() { return location.hash.replace(/^#\/?/, "").split("?")[0]; }

function render() {
  const route = getRoute();
  document.title = destinations[route] ? `${destinations[route].text[lang].title} · Cayambe` : PAGE_TITLE;
  app.innerHTML = destinations[route] ? detailPage(route) : homePage();
  if (!destinations[route]) app.firstElementChild.classList.add("page-in");
  document.querySelectorAll(".nav a").forEach((a) => {
    const on = a.dataset.route === route || (a.dataset.route === "" && !destinations[route] && route !== "descubre" && route !== "contacto");
    on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
  });
  observeReveal();
  scrollForRoute(route);
}

function scrollForRoute(route) {
  const target = route === "descubre" ? document.getElementById("descubre") : route === "contacto" ? document.getElementById("contacto") : null;
  if (target) target.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo(0, 0);
}

// ---------- Animación de aparición ----------
let observer;
function observeReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("visible")); return; }
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); observer.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => observer.observe(e));
}

// ---------- Idiomas (E) ----------
function applyStatic() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.getElementById("menuBtn").setAttribute("aria-label", t("menu"));
  document.getElementById("contactMaps").href = mapsUrl(CONTACT_MAPS_QUERY);
  updateThemeButton();
}
function setLang(l) {
  if (!translations[l]) l = "es";
  lang = l;
  safeSet(STORAGE_LANG, l);
  document.getElementById("langSelect").value = l;
  applyStatic();
  render();
}

// ---------- Tema (F) ----------
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  const btn = document.getElementById("themeBtn");
  btn.setAttribute("aria-label", dark ? t("themeLight") : t("themeDark"));
  document.getElementById("themeIcon").textContent = dark ? "☀" : "☾";
}
function setTheme(th) {
  document.documentElement.dataset.theme = th;
  safeSet(STORAGE_THEME, th);
  updateThemeButton();
}

// ---------- Menú móvil (J) ----------
function setMenu(open) {
  document.getElementById("nav").classList.toggle("open", open);
  document.getElementById("menuBtn").setAttribute("aria-expanded", String(open));
}

// ---------- Inicio ----------
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = safeGet(STORAGE_THEME);
  document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  const savedLang = safeGet(STORAGE_LANG);
  lang = translations[savedLang] ? savedLang : DEFAULT_LANG;
  document.getElementById("langSelect").value = lang;

  document.getElementById("langSelect").addEventListener("change", (e) => setLang(e.target.value));
  document.getElementById("themeBtn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  document.getElementById("menuBtn").addEventListener("click", () => setMenu(!document.getElementById("nav").classList.contains("open")));
  document.getElementById("nav").addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.getElementById("toTop").addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.querySelector(".skip").addEventListener("click", (e) => { e.preventDefault(); app.focus(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("hashchange", render);

  applyStatic();
  render();
});