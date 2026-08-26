type Locale = 'zh' | 'en' | 'ru' | 'es';

type AboutCopy = {
  profileTitle: string;
  profileLead: string;
  profileSublead: string;
  profileParagraphs: string[];
  productsTitle: string;
  products: string[];
  cultureTitle: string;
  cultureLead: string;
  cultureItems: string[];
  historyTitle: string;
  historyLead: string;
  history: Array<{ date: string; text: string }>;
};

const ABOUT_PATH_LOCALES: Record<string, Locale> = {
  '/guanyuxingye/': 'zh',
  '/en/guanyuxingye/': 'en',
  '/ru/guanyuxingye/': 'ru',
  '/es/guanyuxingye/': 'es',
};

const aboutCopies: Record<Locale, AboutCopy> = {
  zh: {
    profileTitle: '公司简介',
    profileLead: '矿山装备与工程机械备件国产化高新技术企业',
    profileSublead: '秉持“仁者弘毅”精神，专注研发与制造',
    profileParagraphs: [
      '长沙仁毅机械制造有限公司是一家秉持“仁者弘毅”之精神，以研发和制造专业矿山装备和工程机械备件国产化为主的高新技术型企业。公司拥有一支勇于开拓创新的产品研发制造团队，成员来自各大科研院所、大型厂矿企业，汇聚高级工程师和高级技师。',
      '我们不仅在各自领域拥有独特技能、专业知识和丰富经验，也都有一个坚定信念：毕生致力于中国制造最基础的部分，希望以自己的微薄之力，为中国制造从中高端迈向中高级夯实坚实基础，贡献点滴之功。',
      '公司的宗旨是：“格物、致知、诚意、正心”。格物者，穷究也；致知者，融会贯通也；质量第一、服务第一、诚信经营乃诚意之不二法门；做事做物以求慎独，此为心正者，即正心也。',
      '放眼当今世界，中国制造已然成为泱泱大国，但要成为制造强国，以德国、日本为赶超目标还有相当长的路要走。生产制造出性价比高的产品，提高不可再生资源的使用率，降低能耗比，是看得见、摸得着的现实需求。长沙仁毅机械制造有限公司愿意为此不懈努力。',
      '公司拥有多种大型加工设备、完善的质量检测手段和配套设施，以支持实现各位同仁的努力奋斗。',
      '长沙仁毅机械制造有限公司成立二十多年以来，在矿山装备领域成就斐然：公司已能独立开发和制造包括天井钻机、潜孔钻机在内的各种矿山装备；在机、电、液领域，公司可承担从大型工程机械备件国产化到新产品开发，进口工程机械部件（包括大型结构件）的修复、改进、完善及整个系统技术更新等任务；并可提供相应的技术咨询、贸易（包括进出口贸易）等服务。公司的服务领域涵盖矿山、采石场、钢厂、冶炼厂、市政工程等。',
    ],
    productsTitle: '目前，公司主导产品主要有',
    products: [
      'AT系列天井钻机',
      '钻、装、运等工程机械所用的特种油缸、悬挂、高强度销轴件、传动件及结构件',
      '各类钻头、钻杆、冲击器',
    ],
    cultureTitle: '企业文化',
    cultureLead: '格物、致知、诚意、正心',
    cultureItems: ['质量优先', '服务优先', '安全优先'],
    historyTitle: '发展历程',
    historyLead: '二十多年持续研发制造，围绕矿山装备与工程机械备件国产化深耕。',
    history: [
      { date: '2007.01', text: '长沙仁毅机械制造有限公司成立，专业制造矿用工程机械液压缸。' },
      { date: '2007.02至今', text: '进口矿用非公路自卸卡车（154-290吨级）前悬挂、后悬挂、举升缸、转向缸国产化成系列研发制造成功。' },
      { date: '2007年至今', text: '研制生产各类进口品牌、各类规格工程机械（装载机、挖掘机、平地机、牙轮钻机等）液压油缸。' },
      { date: '2007-2010', text: '在江铜完成12台小松630E电动轮后尾梁现场技改。' },
      { date: '2008.02-2011.06', text: '进口矿用非公路自卸卡车（170-220吨级）后桥壳系列研发制造成功。' },
      { date: '2009.03', text: '公司通过质量管理体系 ISO 9001 认证。' },
      { date: '2010.10', text: '自主研发、具有自主知识产权的 E1400 铲运机 22-25 轮辋拆装机研制成功。' },
      { date: '2012.06', text: '自主研发、具有自主知识产权的 220 吨级矿用非公路自卸卡车轮辋拆装机研制成功。' },
      { date: '2012.11', text: '自主研发、具有自主知识产权的 100 吨级矿用非公路自卸卡车轮辋拆装机研制成功。' },
      { date: '2012.12', text: '具有自主知识产权的 GE776、GE788 电动轮轮边马达拆装小车研制成功。' },
      { date: '2013-2016', text: '自主研发并成功制造 5518、6433 自磨机给料小车。' },
      { date: '2014.01', text: '具有自主知识产权的 GEB25 电动轮轮边马达拆装小车研制成功。' },
      { date: '2014年至今', text: '完成数十台 70-200 立方浮选机改造。' },
      { date: '2016年至今', text: '圆满完成 11 台沃尔沃 A40E 铰接式卡车、2 台沃尔沃 A25 铰接式卡车大修工作。' },
      { date: '2017年至今', text: '研制生产 1 米-2.5 米天井钻机多台。' },
      { date: '2019年', text: '完成沃尔沃 EC700B 挖机大修工作。' },
      { date: '2019.06-2021.06', text: '在中铝广西分公司完成 58 台铰接式卡车（VOLVO-A40D、VOLVO-A40F、CAT740、CAT745 系列）现场维保服务工作。' },
      { date: '2021年', text: '成为志高机械股份有限公司战略客户经销商，并挂牌志高掘进再制造中心。' },
    ],
  },
  en: {
    profileTitle: 'Company Profile',
    profileLead: 'High-tech manufacturer of mining equipment and localized engineering machinery parts',
    profileSublead: 'Guided by the spirit of perseverance and responsibility',
    profileParagraphs: [
      'Changsha Renyi Machinery Manufacturing Co., Ltd. is a high-tech enterprise guided by the spirit of “benevolence and perseverance”. The company focuses on the research, development, and manufacturing of professional mining equipment and localized engineering machinery spare parts.',
      'Renyi has an innovative product development and manufacturing team made up of senior engineers and senior technicians from research institutes and large mining and industrial enterprises. The team brings specialized skills, deep technical knowledge, and practical experience from demanding worksites.',
      'We share one firm belief: to devote ourselves to the fundamental part of Chinese manufacturing, and to contribute steadily to helping China move from mid-to-high-end manufacturing toward stronger, higher-value manufacturing capabilities.',
      'Our operating principles are “investigate things, extend knowledge, act with sincerity, and keep an upright mind.” We pursue quality first, service first, and honest operation, while holding ourselves to disciplined standards even when no one is watching.',
      'China has become a major manufacturing nation, but there is still a long road toward becoming a true manufacturing power. Producing cost-effective products, improving the use of non-renewable resources, and reducing energy consumption are clear, practical needs. Changsha Renyi Machinery Manufacturing Co., Ltd. is committed to working persistently toward these goals.',
      'For more than twenty years, Renyi has built strong capabilities in mining equipment. The company can independently develop and manufacture mining equipment including raise boring machines and down-the-hole drilling machines. In mechanical, electrical, and hydraulic systems, Renyi undertakes localization of large engineering machinery spare parts, new product development, repair and improvement of imported engineering machinery components, and technical upgrades of complete systems. Its services cover mines, quarries, steel plants, smelters, municipal engineering, technical consulting, and import-export trade.',
    ],
    productsTitle: 'Main Products',
    products: [
      'AT series raise boring machines',
      'Special cylinders, suspensions, high-strength pins, transmission parts, and structural parts for drilling, loading, and hauling equipment',
      'Drill bits, drill rods, and impactors',
    ],
    cultureTitle: 'Corporate Culture',
    cultureLead: '格物、致知、诚意、正心',
    cultureItems: ['Quality First', 'Service First', 'Safety First'],
    historyTitle: 'Development History',
    historyLead: 'More than twenty years of sustained development in mining equipment and localized engineering machinery components.',
    history: [
      { date: 'Jan. 2007', text: 'Changsha Renyi Machinery Manufacturing Co., Ltd. was established, specializing in hydraulic cylinders for mining engineering machinery.' },
      { date: 'Feb. 2007 to present', text: 'Localized series development and manufacturing of front suspensions, rear suspensions, hoist cylinders, and steering cylinders for imported off-highway mining dump trucks from 154 to 290 tons.' },
      { date: '2007 to present', text: 'Developed and produced hydraulic cylinders for multiple imported brands and specifications of engineering machinery, including loaders, excavators, graders, and rotary drilling rigs.' },
      { date: '2007-2010', text: 'Completed on-site technical upgrades of rear tail beams for 12 Komatsu 630E electric wheel trucks at Jiangxi Copper.' },
      { date: 'Feb. 2008-Jun. 2011', text: 'Successfully developed and manufactured rear axle housing series for imported 170-220 ton off-highway mining dump trucks.' },
      { date: 'Mar. 2009', text: 'Passed ISO 9001 quality management system certification.' },
      { date: 'Oct. 2010', text: 'Successfully developed the E1400 loader 22-25 wheel rim disassembly machine with independent intellectual property rights.' },
      { date: 'Jun. 2012', text: 'Successfully developed a 220-ton mining off-highway dump truck wheel rim disassembly machine with independent intellectual property rights.' },
      { date: 'Nov. 2012', text: 'Successfully developed a 100-ton mining off-highway dump truck wheel rim disassembly machine with independent intellectual property rights.' },
      { date: 'Dec. 2012', text: 'Successfully developed GE776 and GE788 electric wheel motor disassembly trolleys with independent intellectual property rights.' },
      { date: '2013-2016', text: 'Independently developed and manufactured 5518 and 6433 autogenous mill feed trolleys.' },
      { date: 'Jan. 2014', text: 'Successfully developed the GEB25 electric wheel motor disassembly trolley with independent intellectual property rights.' },
      { date: '2014 to present', text: 'Completed renovation of dozens of 70-200 cubic meter flotation machines.' },
      { date: '2016 to present', text: 'Completed overhaul work on 11 Volvo A40E articulated trucks and 2 Volvo A25 articulated trucks.' },
      { date: '2017 to present', text: 'Developed and produced multiple 1 m to 2.5 m raise boring machines.' },
      { date: '2019', text: 'Completed overhaul of a Volvo EC700B excavator.' },
      { date: 'Jun. 2019-Jun. 2021', text: 'Provided on-site maintenance service for 58 articulated trucks at Chinalco Guangxi Branch, including VOLVO A40D, VOLVO A40F, CAT740, and CAT745 series.' },
      { date: '2021', text: 'Became a strategic customer dealer of Zhigao Machinery Co., Ltd. and was listed as Zhigao Tunneling Remanufacturing Center.' },
    ],
  },
  ru: {
    profileTitle: 'О компании',
    profileLead: 'Высокотехнологичное предприятие по горному оборудованию и локализации запасных частей',
    profileSublead: 'Разработка и производство для тяжелых условий эксплуатации',
    profileParagraphs: [
      'Changsha Renyi Machinery Manufacturing Co., Ltd. является высокотехнологичным предприятием, которое придерживается духа ответственности и настойчивости. Компания специализируется на разработке и производстве профессионального горного оборудования, а также на локализации запасных частей для строительной техники.',
      'В компании работает команда инженеров и техников, ориентированная на инновации и производство. Наши специалисты пришли из научно-исследовательских институтов, крупных горнодобывающих и промышленных предприятий, обладают глубокими знаниями и богатым практическим опытом.',
      'Мы разделяем твердое убеждение: посвятить себя базовым направлениям китайского производства и внести свой вклад в переход китайской промышленности к более высокому уровню качества и технологической зрелости.',
      'Принципы компании: изучать суть вещей, соединять знания с практикой, действовать искренне и сохранять правильный подход. Качество, сервис и честная работа являются основой нашей деятельности.',
      'Китай уже стал крупной производственной страной, но путь к статусу сильной промышленной державы остается долгим. Производство продукции с высокой эффективностью затрат, повышение использования невозобновляемых ресурсов и снижение энергопотребления являются реальными практическими задачами. Changsha Renyi Machinery Manufacturing Co., Ltd. готова последовательно работать в этом направлении.',
      'За более чем двадцать лет развития компания добилась заметных результатов в области горного оборудования. Renyi способна самостоятельно разрабатывать и производить различные виды оборудования, включая буровые установки для восстающих выработок и погружные буровые установки. В механических, электрических и гидравлических системах компания выполняет локализацию крупных запасных частей, разработку новых продуктов, ремонт и модернизацию импортных компонентов, а также техническое обновление целых систем. Сферы обслуживания включают рудники, карьеры, металлургические заводы, сталелитейные предприятия, муниципальное строительство, технические консультации и торговлю, включая импорт и экспорт.',
    ],
    productsTitle: 'Основная продукция',
    products: [
      'Буровые установки для восстающих выработок серии AT',
      'Специальные гидроцилиндры, подвески, высокопрочные пальцы, детали трансмиссии и конструкционные элементы для бурения, погрузки и транспортировки',
      'Буровые коронки, буровые штанги и ударники',
    ],
    cultureTitle: 'Корпоративная культура',
    cultureLead: '格物、致知、诚意、正心',
    cultureItems: ['Качество прежде всего', 'Сервис прежде всего', 'Безопасность прежде всего'],
    historyTitle: 'История развития',
    historyLead: 'Более двадцати лет развития в горном оборудовании и локализации компонентов строительной техники.',
    history: [
      { date: '01.2007', text: 'Основана Changsha Renyi Machinery Manufacturing Co., Ltd.; компания специализируется на гидроцилиндрах для горной строительной техники.' },
      { date: '02.2007 - наст. время', text: 'Успешно освоена серия локализованных передних подвесок, задних подвесок, подъемных и рулевых цилиндров для импортных карьерных самосвалов грузоподъемностью 154-290 тонн.' },
      { date: '2007 - наст. время', text: 'Разработка и производство гидроцилиндров для импортной строительной техники разных марок и спецификаций, включая погрузчики, экскаваторы, грейдеры и шарошечные буровые станки.' },
      { date: '2007-2010', text: 'Выполнена модернизация задних балок 12 электросамосвалов Komatsu 630E на площадке Jiangxi Copper.' },
      { date: '02.2008-06.2011', text: 'Успешно разработана и изготовлена серия корпусов задних мостов для импортных карьерных самосвалов грузоподъемностью 170-220 тонн.' },
      { date: '03.2009', text: 'Компания прошла сертификацию системы менеджмента качества ISO 9001.' },
      { date: '10.2010', text: 'Успешно разработан станок для демонтажа колесных ободов 22-25 погрузчика E1400 с независимыми правами интеллектуальной собственности.' },
      { date: '06.2012', text: 'Успешно разработан станок для демонтажа колесных ободов 220-тонного карьерного самосвала.' },
      { date: '11.2012', text: 'Успешно разработан станок для демонтажа колесных ободов 100-тонного карьерного самосвала.' },
      { date: '12.2012', text: 'Успешно разработаны тележки для демонтажа колесных электродвигателей GE776 и GE788.' },
      { date: '2013-2016', text: 'Самостоятельно разработаны и изготовлены загрузочные тележки автогенных мельниц 5518 и 6433.' },
      { date: '01.2014', text: 'Успешно разработана тележка для демонтажа колесного электродвигателя GEB25.' },
      { date: '2014 - наст. время', text: 'Выполнена модернизация десятков флотационных машин объемом 70-200 м3.' },
      { date: '2016 - наст. время', text: 'Выполнен капитальный ремонт 11 сочлененных самосвалов Volvo A40E и 2 самосвалов Volvo A25.' },
      { date: '2017 - наст. время', text: 'Разработано и изготовлено несколько буровых установок для восстающих выработок диаметром 1-2,5 м.' },
      { date: '2019', text: 'Выполнен капитальный ремонт экскаватора Volvo EC700B.' },
      { date: '06.2019-06.2021', text: 'На площадке Chinalco Guangxi Branch выполнено обслуживание 58 сочлененных самосвалов серий VOLVO A40D, VOLVO A40F, CAT740 и CAT745.' },
      { date: '2021', text: 'Компания стала стратегическим дилером Zhigao Machinery Co., Ltd. и получила статус Zhigao Tunneling Remanufacturing Center.' },
    ],
  },
  es: {
    profileTitle: 'Perfil de la empresa',
    profileLead: 'Empresa de alta tecnología en equipos mineros y localización de repuestos',
    profileSublead: 'Investigación y fabricación para condiciones de trabajo exigentes',
    profileParagraphs: [
      'Changsha Renyi Machinery Manufacturing Co., Ltd. es una empresa de alta tecnología guiada por el espíritu de responsabilidad y perseverancia. La compañía se dedica a la investigación, el desarrollo y la fabricación de equipos mineros profesionales, así como a la localización de repuestos para maquinaria de ingeniería.',
      'Renyi cuenta con un equipo innovador de investigación, desarrollo y fabricación, formado por ingenieros senior y técnicos senior procedentes de institutos de investigación, grandes minas y empresas industriales. El equipo combina habilidades especializadas, conocimiento técnico y experiencia práctica.',
      'Compartimos una convicción firme: dedicarnos a la parte fundamental de la fabricación china y contribuir, paso a paso, a que la industria avance hacia capacidades de mayor valor y mayor nivel técnico.',
      'Los principios de la empresa son investigar la esencia de las cosas, integrar el conocimiento, actuar con sinceridad y mantener una mente recta. Calidad primero, servicio primero y operación honesta son la base de nuestra gestión.',
      'China ya es una gran nación manufacturera, pero aún queda un largo camino para convertirse en una potencia industrial. Fabricar productos rentables, mejorar el uso de recursos no renovables y reducir el consumo energético son necesidades reales y visibles. Changsha Renyi Machinery Manufacturing Co., Ltd. está dispuesta a trabajar de forma constante por estos objetivos.',
      'Durante más de veinte años, Renyi ha logrado resultados destacados en el campo de los equipos mineros. La empresa puede desarrollar y fabricar de forma independiente equipos como perforadoras de chimeneas y perforadoras DTH. En sistemas mecánicos, eléctricos e hidráulicos, Renyi realiza localización de repuestos de gran maquinaria de ingeniería, desarrollo de nuevos productos, reparación y mejora de componentes importados, y actualización técnica de sistemas completos. Sus servicios cubren minas, canteras, acerías, fundiciones, obras municipales, consultoría técnica y comercio, incluido comercio de importación y exportación.',
    ],
    productsTitle: 'Productos principales',
    products: [
      'Perforadoras de chimeneas serie AT',
      'Cilindros especiales, suspensiones, pasadores de alta resistencia, piezas de transmisión y estructuras para equipos de perforación, carga y transporte',
      'Brocas, barras de perforación e impactadores',
    ],
    cultureTitle: 'Cultura corporativa',
    cultureLead: '格物、致知、诚意、正心',
    cultureItems: ['Calidad primero', 'Servicio primero', 'Seguridad primero'],
    historyTitle: 'Historia de desarrollo',
    historyLead: 'Más de veinte años de desarrollo continuo en equipos mineros y componentes localizados para maquinaria de ingeniería.',
    history: [
      { date: '01.2007', text: 'Se fundó Changsha Renyi Machinery Manufacturing Co., Ltd., especializada en cilindros hidráulicos para maquinaria minera de ingeniería.' },
      { date: '02.2007 hasta hoy', text: 'Desarrollo y fabricación localizados en serie de suspensiones delanteras, suspensiones traseras, cilindros de elevación y cilindros de dirección para camiones mineros importados de 154 a 290 toneladas.' },
      { date: '2007 hasta hoy', text: 'Desarrollo y producción de cilindros hidráulicos para maquinaria de ingeniería importada de diferentes marcas y especificaciones, como cargadores, excavadoras, motoniveladoras y perforadoras rotativas.' },
      { date: '2007-2010', text: 'Se completaron mejoras técnicas en sitio para vigas traseras de 12 camiones eléctricos Komatsu 630E en Jiangxi Copper.' },
      { date: '02.2008-06.2011', text: 'Desarrollo y fabricación exitosos de series de carcasas de eje trasero para camiones mineros importados de 170 a 220 toneladas.' },
      { date: '03.2009', text: 'La empresa obtuvo la certificación del sistema de gestión de calidad ISO 9001.' },
      { date: '10.2010', text: 'Se desarrolló con éxito la máquina desmontadora de llantas 22-25 para cargador E1400 con derechos de propiedad intelectual independientes.' },
      { date: '06.2012', text: 'Se desarrolló con éxito una máquina desmontadora de llantas para camiones mineros de 220 toneladas.' },
      { date: '11.2012', text: 'Se desarrolló con éxito una máquina desmontadora de llantas para camiones mineros de 100 toneladas.' },
      { date: '12.2012', text: 'Se desarrollaron carros de desmontaje para motores de rueda eléctrica GE776 y GE788.' },
      { date: '2013-2016', text: 'Desarrollo y fabricación independientes de carros alimentadores para molinos autógenos 5518 y 6433.' },
      { date: '01.2014', text: 'Se desarrolló con éxito el carro de desmontaje para motor de rueda eléctrica GEB25.' },
      { date: '2014 hasta hoy', text: 'Se completaron reformas en decenas de máquinas de flotación de 70 a 200 metros cúbicos.' },
      { date: '2016 hasta hoy', text: 'Se completó la revisión general de 11 camiones articulados Volvo A40E y 2 camiones articulados Volvo A25.' },
      { date: '2017 hasta hoy', text: 'Desarrollo y producción de múltiples perforadoras de chimeneas de 1 m a 2,5 m.' },
      { date: '2019', text: 'Se completó la revisión general de una excavadora Volvo EC700B.' },
      { date: '06.2019-06.2021', text: 'Servicio de mantenimiento en sitio para 58 camiones articulados en Chinalco Guangxi Branch, incluidos VOLVO A40D, VOLVO A40F, CAT740 y CAT745.' },
      { date: '2021', text: 'La empresa se convirtió en distribuidor estratégico de Zhigao Machinery Co., Ltd. y fue designada como Zhigao Tunneling Remanufacturing Center.' },
    ],
  },
};

const menuLabelReplacements: Record<Locale, Array<[string, string]>> = {
  zh: [
    ['title="兴业文化">兴业文化</a>', 'title="企业文化">企业文化</a>'],
    ['title="兴业文化"', 'title="企业文化"'],
    ['>兴业文化</a>', '>企业文化</a>'],
  ],
  en: [
    ['title="Enterprise Culture">Enterprise Culture</a>', 'title="Corporate Culture">Corporate Culture</a>'],
    ['title="Development History">Development History</a>', 'title="Development History">Development History</a>'],
  ],
  ru: [
    ['title="Культура Xingye">Культура Xingye</a>', 'title="Корпоративная культура">Корпоративная культура</a>'],
    ['title="История">История</a>', 'title="История развития">История развития</a>'],
    ['title="Общественная информация">Общественная информация</a>', 'title="Новости">Новости</a>'],
  ],
  es: [
    ['title="Perfil">Perfil</a>', 'title="Perfil de la empresa">Perfil de la empresa</a>'],
    ['title="Cultura Empresarial">Cultura Empresarial</a>', 'title="Cultura corporativa">Cultura corporativa</a>'],
    ['title="Historia">Historia</a>', 'title="Historia de desarrollo">Historia de desarrollo</a>'],
  ],
};

function getLocale(pathname: string) {
  const clean = pathname.split('#')[0]?.split('?')[0] || '/';
  const normalized = clean.replace(/\/+/g, '/');
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return ABOUT_PATH_LOCALES[path] ?? null;
}

function paragraphsHtml(paragraphs: string[]) {
  return paragraphs.map((paragraph) => `<p class="mb30">${paragraph}</p>`).join('');
}

function productsHtml(copy: AboutCopy) {
  return `
    <div class="renyi-product-list">
      <h4>${copy.productsTitle}</h4>
      <ul>
        ${copy.products.map((product) => `<li>${product}</li>`).join('')}
      </ul>
    </div>
  `;
}

function profileSection(copy: AboutCopy) {
  return `
    <div class="maodian"><a name="a1"></a></div>
    <section class="about01 page-col-space wow fadeInUp renyi-about-section">
      <div class="container">
        <div class="page-tit-box"><h3 class="tit mb20">${copy.profileTitle}</h3></div>
        <div class="page-txtbig mb30">
          <div class="txt01">${copy.profileLead}</div>
          <div class="txt02">${copy.profileSublead}</div>
        </div>
        <div class="renyi-about-copy">
          ${paragraphsHtml(copy.profileParagraphs)}
          ${productsHtml(copy)}
        </div>
      </div>
    </section>
  `;
}

function cultureSection(copy: AboutCopy) {
  return `
    <div class="maodian"><a name="a2"></a></div>
    <section class="about02 page-col-space clearfix renyi-culture-section">
      <div class="container pr">
        <div class="page-tit-box"><h3 class="tit mb20">${copy.cultureTitle}</h3></div>
        <div class="page-txtbig mb40">
          <div class="txt01">${copy.cultureLead}</div>
        </div>
        <div class="renyi-culture-grid">
          ${copy.cultureItems.map((item) => `<div class="renyi-culture-card"><strong>${item}</strong></div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function historySection(copy: AboutCopy) {
  return `
    <div class="maodian"><a name="a4"></a></div>
    <section class="about04 page-col-space wow fadeInUp renyi-history-section">
      <div class="container">
        <div class="page-tit-box"><h3 class="tit mb20">${copy.historyTitle}</h3></div>
        <div class="page-txtbig mb30"><div class="txt02 fz22">${copy.historyLead}</div></div>
        <div class="renyi-history-list">
          ${copy.history
            .map(
              (item) => `
                <div class="renyi-history-item">
                  <div class="renyi-history-date">${item.date}</div>
                  <div class="renyi-history-text">${item.text}</div>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function replaceAboutSection(html: string, anchor: 'a1' | 'a2' | 'a4', replacement: string) {
  const sectionClass = anchor === 'a1' ? 'about01' : anchor === 'a2' ? 'about02' : 'about04';
  const pattern = new RegExp(
    `<div class="maodian"><a name="${anchor}"></a></div>\\s*<section class="${sectionClass}[\\s\\S]*?</section>`,
  );
  return html.replace(pattern, replacement);
}

function replaceMenuLabels(html: string, locale: Locale) {
  return menuLabelReplacements[locale].reduce(
    (contents, [source, replacement]) => contents.replaceAll(source, replacement),
    html,
  );
}

export function patchRenyiAboutHtml(html: string, pathname: string) {
  const locale = getLocale(pathname);
  if (!locale) {
    return html;
  }

  const copy = aboutCopies[locale];
  return replaceAboutSection(
    replaceAboutSection(
      replaceAboutSection(replaceMenuLabels(html, locale), 'a1', profileSection(copy)),
      'a2',
      cultureSection(copy),
    ),
    'a4',
    historySection(copy),
  );
}
