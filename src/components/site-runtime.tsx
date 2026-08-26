import { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import {
  RENYI_ABOUT_MENU_BACKGROUND_IMAGE,
  RENYI_PRODUCT_MENU_BACKGROUND_IMAGE,
  RENYI_RAISE_BORING_CATEGORY_BANNER_IMAGE,
  RENYI_SERVICE_MENU_BACKGROUND_IMAGE,
  RENYI_CONTACT_MENU_BACKGROUND_OVERLAY,
  RENYI_CONTACT_MENU_BACKGROUND_IMAGE,
  RENYI_CONTACT_PAGE_BANNER_IMAGE,
  RENYI_CONTACT_PAGE_COPY,
  RENYI_QUICK_NAV_COPY,
  RENYI_JOIN_PAGE_BANNER_IMAGE,
  RENYI_JOIN_TRAINING_MODE_IMAGE,
  RENYI_JOIN_PRODUCTION_PRACTICE_IMAGE,
  getRenyiJoinPageBannerTextHtml,
  getRenyiAboutBannerTextHtml,
  getRenyiNewsBannerTextHtml,
  getRenyiLogoCopy,
  RENYI_CULTURE_BANNER_IMAGES,
  RENYI_COMPANY_NAME,
  RENYI_COPYRIGHT_TEXT,
  RENYI_ICP_RECORD,
  RENYI_ICP_URL,
  RENYI_NEWS_BANNER_IMAGE,
  RENYI_WHATSAPP_DISPLAY_PHONE,
  RENYI_WHATSAPP_QR_IMAGE,
  RENYI_WHATSAPP_URL,
  type RenyiLocale,
} from '@/lib/site-pages';

const RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE = '/renyi/renyi-wechat-official-account-qr.jpg';

const SITE_SCRIPTS = [
  '/home/scripts/jquery.min.js',
  '/home/scripts/swiper.min.js',
  '/home/scripts/swiper.animate.min.js',
  '/home/scripts/jquery.magnific-popup.min.js',
  '/home/scripts/wow.js',
  '/home/scripts/main.js?v=20260727-cat-chart',
];

const RENYI_SOLUTION_MAP_IMAGE = '/renyi/renyi-ind03-map-changsha-v2.svg';
const RENYI_SOLUTION_COPY: Record<RenyiLocale, { title: string; paragraph: string }> = {
  zh: {
    title: '匹配您现场需求的专用装备方案',
    paragraph:
      '仁毅专注天井钻机、特种油缸、结构件、选矿设备及专用装备制造，依托研发设计、精密加工、焊接装配和质量检测能力，为矿山建设、工程机械维保及关键备件国产化提供稳定可靠的定制化解决方案。',
  },
  en: {
    title: 'Dedicated Equipment Solutions for Your Worksite',
    paragraph:
      'Renyi focuses on raise boring rigs, special hydraulic cylinders, structural components, mineral processing equipment, and dedicated machinery. With engineering design, precision machining, welding assembly, and quality inspection capabilities, we deliver reliable customized solutions for mining construction, machinery maintenance, and localized key spare parts.',
  },
  ru: {
    title: 'Спецрешения под задачи вашей площадки',
    paragraph:
      'Renyi специализируется на станках raise boring, специальных гидроцилиндрах, металлоконструкциях, обогатительном и специализированном оборудовании. Опираясь на проектирование, точную механообработку, сварочную сборку и контроль качества, мы поставляем надежные индивидуальные решения для горных работ, обслуживания техники и локализации ключевых запчастей.',
  },
  es: {
    title: 'Soluciones dedicadas para su sitio de trabajo',
    paragraph:
      'Renyi se especializa en equipos raise boring, cilindros hidráulicos especiales, componentes estructurales, equipos de procesamiento mineral y maquinaria dedicada. Con diseño de ingeniería, mecanizado de precisión, soldadura, montaje e inspección de calidad, ofrecemos soluciones personalizadas fiables para minería, mantenimiento de maquinaria y localización de repuestos clave.',
  },
};
const RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE = '/renyi/product-category-structural-components-banner.png?v=20260513-imagegen-sharp-banner';
const RENYI_HOME_NAV_LABELS: Record<RenyiLocale, string> = {
  zh: '首页',
  en: 'Home',
  ru: 'Главная',
  es: 'Inicio',
};
const RENYI_HEADER_NAV_ITEMS = [
  {
    className: 'm-0 has-sub',
    href: '/guanyuxingye/',
    labels: { zh: '关于', en: 'About', ru: 'О нас', es: 'Introducción' },
    submenu: {
      zh: [
        ['公司简介', '/guanyuxingye/#a1'],
        ['企业文化', '/guanyuxingye/#a2'],
        ['发展历程', '/guanyuxingye/#a4'],
        ['新闻中心', '/category/renyixinwen/'],
      ],
      en: [
        ['Company Profile', '/guanyuxingye/#a1'],
        ['Corporate Culture', '/guanyuxingye/#a2'],
        ['Development History', '/guanyuxingye/#a4'],
        ['News Center', '/en/category/renyixinwen/'],
      ],
      ru: [
        ['Профиль компании', '/guanyuxingye/#a1'],
        ['Корпоративная культура', '/guanyuxingye/#a2'],
        ['История развития', '/guanyuxingye/#a4'],
        ['Новости', '/ru/category/renyixinwen/'],
      ],
      es: [
        ['Perfil de la empresa', '/guanyuxingye/#a1'],
        ['Cultura corporativa', '/guanyuxingye/#a2'],
        ['Historia de desarrollo', '/guanyuxingye/#a4'],
        ['Noticias', '/es/category/renyixinwen/'],
      ],
    },
  },
  {
    className: 'm-1 has-sub',
    href: '/chanpinzhanshi/',
    labels: { zh: '产品', en: 'Products', ru: 'Продукция', es: 'Productos' },
  },
  {
    className: 'm-2',
    href: '/anlizhanshi/',
    labels: { zh: '案例', en: 'Cases', ru: 'Проекты', es: 'Proyectos' },
  },
  {
    className: 'm-3 has-sub',
    href: '/fuwuzhichi/',
    labels: { zh: '服务', en: 'Service', ru: 'Сервис', es: 'Servicio' },
    submenu: {
      zh: [
        ['产品质量', '/fuwuzhichi/#a1'],
        ['售后服务', '/fuwuzhichi/#a2'],
      ],
      en: [
        ['Product Quality', '/fuwuzhichi/#a1'],
        ['After-Sales Service', '/fuwuzhichi/#a2'],
      ],
      ru: [
        ['Качество продукции', '/fuwuzhichi/#a1'],
        ['Послепродажный сервис', '/fuwuzhichi/#a2'],
      ],
      es: [
        ['Calidad del producto', '/fuwuzhichi/#a1'],
        ['Servicio postventa', '/fuwuzhichi/#a2'],
      ],
    },
  },
  {
    className: 'm-4 has-sub',
    href: '/jiaruwomen/',
    labels: { zh: '加入', en: 'Join', ru: 'Карьера', es: 'Únete' },
    submenu: {
      zh: [
        ['人才理念', '/jiaruwomen/#a1'],
        ['招聘信息', '/jiaruwomen/#a2'],
      ],
      en: [
        ['Talent Philosophy', '/jiaruwomen/#a1'],
        ['Recruitment', '/jiaruwomen/#a2'],
      ],
      ru: [
        ['Философия талантов', '/jiaruwomen/#a1'],
        ['Вакансии', '/jiaruwomen/#a2'],
      ],
      es: [
        ['Filosofía de talento', '/jiaruwomen/#a1'],
        ['Reclutamiento', '/jiaruwomen/#a2'],
      ],
    },
  },
  {
    className: 'm-5 has-sub',
    href: '/lianxiwomen/',
    labels: { zh: '联系', en: 'Contact', ru: 'Контакты', es: 'Contacto' },
    submenu: {
      zh: [
        ['联系我们', '/lianxiwomen/#a1'],
        ['在线留言', '/lianxiwomen/#a2'],
      ],
      en: [
        ['Contact Us', '/lianxiwomen/#a1'],
        ['Online Message', '/lianxiwomen/#a2'],
      ],
      ru: [
        ['Контакты', '/lianxiwomen/#a1'],
        ['Сообщение онлайн', '/lianxiwomen/#a2'],
      ],
      es: [
        ['Contacto', '/lianxiwomen/#a1'],
        ['Mensaje en línea', '/lianxiwomen/#a2'],
      ],
    },
  },
] as const;
const RENYI_LANGUAGE_LABELS: Record<RenyiLocale, string> = {
  zh: '语言选择',
  en: 'Language',
  ru: 'Язык',
  es: 'Idioma',
};
const RENYI_LANGUAGE_ICON_ALTS: Record<RenyiLocale, string> = {
  zh: '语言选择图标',
  en: 'Language selector icon',
  ru: 'Значок выбора языка',
  es: 'Icono de selección de idioma',
};
const RENYI_QUICK_NAV_TITLES: Record<RenyiLocale, string> = {
  zh: '快捷导航',
  en: 'Quick Navigation',
  ru: 'Быстрая навигация',
  es: 'Navegación rápida',
};
const RENYI_QUICK_NAV_ICON_ALTS: Record<RenyiLocale, string> = {
  zh: '快捷导航按钮',
  en: 'Quick navigation button',
  ru: 'Кнопка быстрой навигации',
  es: 'Botón de navegación rápida',
};
const RENYI_PRODUCT_MENU_COPY: Record<RenyiLocale, { title: string; text: string }> = {
  zh: {
    title: '深耕工业装备',
    text: '仁毅机械肩负“夯实中国制造基石”的企业使命，持续推动矿山装备与工程机械核心部件国产化，为复杂工况提供可靠、高效、可持续的装备支撑。',
  },
  en: {
    title: 'Industrial Equipment Expertise',
    text: 'Renyi Machinery advances the localization of mining equipment and core engineering machinery components, providing reliable, efficient, and sustainable equipment support for demanding worksites.',
  },
  ru: {
    title: 'Промышленное оборудование',
    text: 'Renyi Machinery развивает локализацию горного оборудования и ключевых компонентов инженерной техники, обеспечивая надежную, эффективную и устойчивую поддержку для сложных условий эксплуатации.',
  },
  es: {
    title: 'Experiencia en equipos industriales',
    text: 'Renyi Machinery impulsa la localización de equipos mineros y componentes clave de maquinaria de ingeniería, ofreciendo soporte confiable, eficiente y sostenible para entornos de trabajo exigentes.',
  },
};
const RENYI_ABOUT_MENU_COPY: Record<RenyiLocale, { title: string; text: string; more: string }> = {
  zh: {
    title: '格物、致知、诚意、正心',
    text: '长沙仁毅机械制造有限公司是一家高新技术企业，专注矿山装备与工程机械备件国产化。公司深耕行业二十余载，主营天井钻机及特种油缸等产品，致力于夯实中国制造的基础。',
    more: '查看更多',
  },
  en: {
    title: 'Investigate, Learn, Be Sincere, Stay Upright',
    text: 'Changsha Renyi Machinery Manufacturing Co., Ltd. is a high-tech enterprise focused on mining equipment and localized engineering machinery spare parts. With more than twenty years of industry experience, we specialize in raise boring rigs and special hydraulic cylinders.',
    more: 'More',
  },
  ru: {
    title: 'Исследование, знание, искренность, праведность',
    text: 'Changsha Renyi Machinery Manufacturing Co., Ltd. является высокотехнологичным предприятием, специализирующимся на горном оборудовании и локализации запасных частей для инженерной техники. Более двадцати лет опыта помогают нам развивать установки восстающего бурения и специальные гидроцилиндры.',
    more: 'Подробнее',
  },
  es: {
    title: 'Investigar, conocer, ser sincero y recto',
    text: 'Changsha Renyi Machinery Manufacturing Co., Ltd. es una empresa de alta tecnología enfocada en equipos mineros y repuestos localizados para maquinaria de ingeniería. Con más de veinte años de experiencia, nos especializamos en equipos raise boring y cilindros hidráulicos especiales.',
    more: 'Ver más',
  },
};
const RENYI_SERVICE_MENU_COPY: Record<RenyiLocale, { title: string; text: string; more: string }> = {
  zh: {
    title: '高端装备、精密检测、可靠交付',
    text: '仁毅机械拥有全面的检测实验室，覆盖原材料、化学检测、力学性能测试、无损检测及疲劳试验等环节，为产品交付建立可追溯的质量依据。',
    more: '查看更多',
  },
  en: {
    title: 'High-end Equipment, Precise Testing, Reliable Delivery',
    text: 'Renyi maintains a comprehensive testing laboratory for raw materials, chemical analysis, mechanical performance, nondestructive testing and fatigue testing, building traceable quality evidence for every delivery.',
    more: 'More',
  },
  ru: {
    title: 'Высокоточное оборудование, испытания, надежная поставка',
    text: 'Renyi располагает комплексной испытательной лабораторией для контроля сырья, химического анализа, механических испытаний, неразрушающего контроля и усталостных проверок, формируя прослеживаемую основу качества.',
    more: 'Подробнее',
  },
  es: {
    title: 'Equipos avanzados, pruebas precisas y entrega confiable',
    text: 'Renyi cuenta con un laboratorio integral para materias primas, análisis químico, pruebas mecánicas, ensayos no destructivos y fatiga, creando una base de calidad trazable para cada entrega.',
    more: 'Ver más',
  },
};
const RENYI_JOIN_MENU_COPY: Record<RenyiLocale, { title: string; text: string; more: string }> = {
  zh: {
    title: '精铸基石，智联全球',
    text: '仁毅坚持以人为本，重视员工成长与价值实现，让员工在精益生产、可靠交付和专业制造中成长成才，与企业携手共进。',
    more: '查看更多',
  },
  en: {
    title: 'Precision Forges Foundations, Intelligence Connects the World',
    text: 'Renyi values people, practical training and long-term growth, helping employees build expertise through lean production, reliable delivery and professional manufacturing.',
    more: 'More',
  },
  ru: {
    title: 'Точность создает основу, интеллект соединяет мир',
    text: 'Renyi ценит людей, практическое обучение и долгосрочный рост, помогая сотрудникам развивать компетенции через бережливое производство и надежные поставки.',
    more: 'Подробнее',
  },
  es: {
    title: 'Precisión que forja bases, inteligencia que conecta el mundo',
    text: 'Renyi valora a las personas, la formación práctica y el crecimiento a largo plazo, ayudando al equipo a desarrollarse mediante producción eficiente y entrega confiable.',
    more: 'Ver más',
  },
};
const RENYI_CONTACT_MENU_COPY: Record<RenyiLocale, { title: string; text: string; more: string }> = {
  zh: {
    title: '精工智造，可靠交付',
    text: '仁毅聚焦天井钻机、特种油缸、结构件及专用设备制造，依托技术研发、精密加工与质量检测能力，为矿山及工程机械客户提供稳定可靠的定制化解决方案。',
    more: '查看更多',
  },
  en: {
    title: 'Precision Manufacturing, Reliable Delivery',
    text: 'Renyi focuses on raise boring rigs, special hydraulic cylinders, structural components and custom equipment, using R&D, precision machining and quality testing to provide reliable tailored solutions for mining and engineering machinery customers.',
    more: 'More',
  },
  ru: {
    title: 'Точное производство, надежная поставка',
    text: 'Renyi специализируется на установках восстающего бурения, специальных гидроцилиндрах, металлоконструкциях и нестандартном оборудовании, сочетая НИОКР, точную механообработку и контроль качества для надежных решений.',
    more: 'Подробнее',
  },
  es: {
    title: 'Fabricación precisa, entrega confiable',
    text: 'Renyi se centra en equipos raise boring, cilindros hidráulicos especiales, componentes estructurales y equipos personalizados, combinando I+D, mecanizado preciso y control de calidad para soluciones confiables.',
    more: 'Ver más',
  },
};
const RENYI_VIDEO_FALLBACK_TEXT: Record<RenyiLocale, string> = {
  zh: '您的浏览器不支持 video 标签。',
  en: 'Your browser does not support the video tag.',
  ru: 'Ваш браузер не поддерживает тег video.',
  es: 'Su navegador no admite la etiqueta de video.',
};
const RENYI_PROMO_VIDEO_PATHS: Record<RenyiLocale, string> = {
  zh: '/renyi/renyi-banner-zh.mp4?v=20260601-drone-opening',
  en: '/renyi/renyi-banner-en.mp4?v=20260601-drone-opening',
  ru: '/renyi/renyi-banner-ru.mp4?v=20260601-drone-opening',
  es: '/renyi/renyi-banner-es.mp4?v=20260601-drone-opening',
};
const RENYI_RAISE_BORING_BANNER_TEXT: Record<RenyiLocale, { title: string; subtitle?: string }> = {
  zh: { title: '天井钻机系列', subtitle: 'RAISE BORING MACHINERY SERIES' },
  en: { title: 'Raise Boring Machinery Series' },
  ru: { title: 'Серия установок для восстающих выработок' },
  es: { title: 'Serie de equipos raise boring' },
};
const RENYI_STRUCTURAL_BANNER_TEXT: Record<RenyiLocale, { title: string; subtitle?: string }> = {
  zh: { title: '结构件系列', subtitle: 'STRUCTURAL COMPONENTS SERIES' },
  en: { title: 'Structural Components Series' },
  ru: { title: 'Серия металлоконструкций' },
  es: { title: 'Serie de componentes estructurales' },
};
const RENYI_STRUCTURAL_CATEGORY_LABELS: Record<RenyiLocale, string> = {
  zh: '结构件系列',
  en: 'Structural Components Series',
  ru: 'Серия металлоконструкций',
  es: 'Serie de componentes estructurales',
};
const RENYI_JOIN_TRAINING_MODE_ALT: Record<RenyiLocale, string> = {
  zh: '仁毅机械车间技术培训，员工围绕液压油缸和精密零部件交流工艺',
  en: 'Renyi workshop skills training with technicians discussing hydraulic cylinders and precision components',
  ru: 'Обучение сотрудников Renyi в цехе с обсуждением гидроцилиндров и точных деталей',
  es: 'Formación técnica en el taller de Renyi con empleados revisando cilindros hidráulicos y componentes de precisión',
};
const RENYI_JOIN_PRODUCTION_PRACTICE_COPY: Record<RenyiLocale, { title: string; text: string; alt: string }> = {
  zh: {
    title: '规范的生产实践',
    text: '围绕天井钻机、特种油缸及结构件制造，在生产、装配、检测一线积累经验，强化质量意识、安全意识和可靠交付能力。',
    alt: '仁毅机械员工在车间进行大型液压油缸装配和质量检查',
  },
  en: {
    title: 'Standardized Production Practice',
    text: 'Employees build experience on the front line of raise boring machinery, special hydraulic cylinders, structural fabrication, assembly and inspection, strengthening quality, safety and delivery awareness.',
    alt: 'Renyi employees assembling and inspecting a large hydraulic cylinder in the workshop',
  },
  ru: {
    title: 'Стандартизированная производственная практика',
    text: 'Сотрудники получают опыт в производстве, сборке и контроле оборудования, гидроцилиндров и металлоконструкций, укрепляя культуру качества, безопасности и надежной поставки.',
    alt: 'Сотрудники Renyi собирают и проверяют крупный гидроцилиндр в цехе',
  },
  es: {
    title: 'Práctica de producción estandarizada',
    text: 'El equipo adquiere experiencia en fabricación, montaje e inspección de equipos raise boring, cilindros hidráulicos y estructuras, reforzando calidad, seguridad y entrega confiable.',
    alt: 'Empleados de Renyi montando e inspeccionando un gran cilindro hidráulico en el taller',
  },
};
const RENYI_STRUCTURAL_ACTIONS: Record<RenyiLocale, { inquiry: string; more: string }> = {
  zh: { inquiry: '在线留言', more: '了解更多' },
  en: { inquiry: 'Contact Us', more: 'Learn more' },
  ru: { inquiry: 'Связаться с нами', more: 'Подробнее' },
  es: { inquiry: 'Contáctenos', more: 'Aprende más' },
};

type SiteWindow = Window & {
  __ytxySiteScriptsLoaded?: boolean;
  Swiper?: new (
    container: string | Element,
    options?: Record<string, unknown>,
  ) => ProductCategorySwiper;
};

type ProductCategorySwiper = {
  activeIndex?: number;
  slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
  update?: () => void;
};

type ProductCategorySwiperContainer = HTMLElement & {
  swiper?: ProductCategorySwiper;
};

type RenyiStructuralRuntimeCard = {
  href: string;
  image: string;
  title: Record<RenyiLocale, string>;
  alt: Record<RenyiLocale, string>;
  specs: Record<RenyiLocale, Array<[string, string]>>;
};

const RENYI_STRUCTURAL_CARDS: RenyiStructuralRuntimeCard[] = [
  {
    href: '/jiegou-01/',
    image: '/renyi/product-structural-rear-axle-housing.jpg?v=20260513-imagegen',
    title: { zh: '后桥壳', en: 'Rear Axle Housing', ru: 'Корпус заднего моста', es: 'Carcasa de eje trasero' },
    alt: { zh: '矿用电动轮自卸车后桥壳结构件实拍图', en: 'Mining electric-drive truck rear axle housing structural component photo', ru: 'Фото корпуса заднего моста карьерного самосвала', es: 'Foto de carcasa de eje trasero de camión minero' },
    specs: {
      zh: [['典型型号', '适配多数车型'], ['应用部位', '矿用电动轮自卸车后桥'], ['工艺能力', '重型焊接 / 大型机加工']],
      en: [['Typical models', 'Fits most vehicle models'], ['Application', 'Mining electric-drive truck rear axle'], ['Process capability', 'Heavy welding / large machining']],
      ru: [['Типовые модели', 'Подходит для большинства моделей техники'], ['Применение', 'Задний мост карьерного самосвала'], ['Технология', 'Тяжелая сварка / крупная механообработка']],
      es: [['Modelos típicos', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Eje trasero de camión minero eléctrico'], ['Proceso', 'Soldadura pesada / mecanizado grande']],
    },
  },
  {
    href: '/jiegou-03/',
    image: '/renyi/product-structural-subframe.jpg?v=20260513-subframe-imagegen',
    title: { zh: '副车架', en: 'Subframe', ru: 'Подрамник', es: 'Subchasis' },
    alt: { zh: '矿用电动轮自卸车副车架结构件实拍图', en: 'Mining truck subframe structural component photo', ru: 'Фото подрамника карьерного самосвала', es: 'Foto de subchasis de camión minero' },
    specs: {
      zh: [['典型型号', '适配多数车型'], ['应用部位', '矿用自卸车副车架'], ['制造重点', '焊缝质量 / 尺寸精度 / 装配基准']],
      en: [['Typical model', 'Fits most vehicle models'], ['Application', 'Mining truck subframe'], ['Manufacturing focus', 'Weld quality / dimensional accuracy / assembly datum']],
      ru: [['Типовая модель', 'Подходит для большинства моделей техники'], ['Применение', 'Подрамник карьерного самосвала'], ['Фокус производства', 'Качество сварки / точность размеров / база сборки']],
      es: [['Modelo típico', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Subchasis de camión minero'], ['Enfoque', 'Soldadura / precisión dimensional / base de montaje']],
    },
  },
  {
    href: '/jiegou-05/',
    image: '/renyi/product-structural-truck-body.jpg?v=20260513-truck-body-imagegen',
    title: { zh: '车斗', en: 'Truck Body', ru: 'Кузов самосвала', es: 'Caja de camión' },
    alt: { zh: '铰接式矿用车辆车斗结构件实拍图', en: 'Articulated mining truck body structural component photo', ru: 'Фото кузова сочлененного карьерного самосвала', es: 'Foto de caja de camión minero articulado' },
    specs: {
      zh: [['典型型号', '适配多数车型'], ['应用部位', '铰接式矿用车辆车斗'], ['性能要求', '耐磨 / 抗冲击 / 大载荷']],
      en: [['Typical model', 'Fits most vehicle models'], ['Application', 'Articulated truck body'], ['Requirements', 'Wear resistance / impact resistance / heavy load']],
      ru: [['Типовая модель', 'Подходит для большинства моделей техники'], ['Применение', 'Кузов сочлененного самосвала'], ['Требования', 'Износостойкость / ударостойкость / высокая нагрузка']],
      es: [['Modelo típico', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Caja de camión articulado'], ['Requisitos', 'Desgaste / impacto / carga pesada']],
    },
  },
];

const TEXT_REPLACEMENTS: Array<[string, string]> = [
  ['创造，共赢，责任，奉献', '格物、致知、诚意、正心'],
  ['Creating, sharing, responsibility and dedication', '格物、致知、诚意、正心'],
  ['Созидание, взаимовыигрыша, ответственность, преданность', '格物、致知、诚意、正心'],
  ['Creación, ganar-ganar, responsabilidad, dedicación', '格物、致知、诚意、正心'],
  [
    '长沙仁毅机械有限公司成立于1997年，位于全国文明城市山东省烟台市，公司现有职工350多人，注册资金9500万元，占地200余亩。',
    '长沙仁毅机械制造有限公司是一家高新技术企业，专注矿山装备与工程机械备件国产化。公司深耕行业二十余载，主营天井钻机及特种油缸等产品，致力于夯实中国制造的基础。',
  ],
  [
    '长沙仁毅机械有限公司成立于1997年，位于全国文明城市山东省烟台市。',
    '聚焦天井钻机、特种油缸、结构件、选矿设备及专用装备制造，为矿山与工程机械客户提供可靠方案。',
  ],
  [
    '长沙仁毅机械有限公司秉承“振兴民族工业”的企业使命，始终追求发展与创新的企业精神。',
    '秉持“格物、致知、诚意、正心”的宗旨，坚持质量第一、服务第一、诚信经营，把每一项制造与交付做实。',
  ],
  [
    '有计划，有条理，有能力，敢担当，守信用，会协助，重执行，高效率。',
    '坚持以人为本，重视员工成长与价值实现，让团队在精益生产、可靠交付和专业制造中成长成才。',
  ],
  [
    '专业从事矿山无轨设备的研发设计、生产制造及国内外销售',
    '提供天井钻机、特种油缸、结构件及专用设备的研发设计、精密加工、质量检测和可靠交付支持。',
  ],
  [
    'Yantai Xingye Machinery Co., Ltd was founded in 1997. We are installed in Yantai City, Shandong Province and covers an area of more than 20,000 square meters of which, 15,000 square meters, are dedicated to our workshops and warehouses.',
    '长沙仁毅机械制造有限公司是一家高新技术企业，专注矿山装备与工程机械备件国产化。公司深耕行业二十余载，主营天井钻机及特种油缸等产品，致力于夯实中国制造的基础。',
  ],
  [
    'Компания Yantai Xingye Machinery Co., Ltd. была основана в 1997 году, расположена в городе Яньтай, вся провинция Шаньдун, компания насчитывает более 350 сотрудников, уставной капитал 95 миллионов юаней',
    '长沙仁毅机械制造有限公司是一家高新技术企业，专注矿山装备与工程机械备件国产化。公司深耕行业二十余载，主营天井钻机及特种油缸等产品，致力于夯实中国制造的基础。',
  ],
  [
    'Yantai Xingye Machinery Co., Ltd se fundó en 1997, situado en Yantai,Shandong Provincia, China. En la acutualidad la empresa tiene más de 350 empleados y más de 60 profesionales y técnicos, ocupa una aréa más de 200 metros cuadrados con fondo registrado 95 millónes. Tenemos el Centro de Tecnología autónoma empresarial, la capacidad perfecta de producción y elaboración, excelente servicio postventa. ',
    '长沙仁毅机械制造有限公司是一家高新技术企业，专注矿山装备与工程机械备件国产化。公司深耕行业二十余载，主营天井钻机及特种油缸等产品，致力于夯实中国制造的基础。',
  ],
  ['兴业文化', '企业文化'],
  ['关于兴业', '关于仁毅'],
  [
    '地 址: 烟台市牟平区大窑沁水工业园天华大街186号',
    '地 址: 中国湖南长沙经济技术开发区漓湘路98号',
  ],
  [
    '联系地址：山东省烟台市牟平区天华大街186号',
    '联系地址：中国湖南长沙经济技术开发区漓湘路98号',
  ],
  [
    '地 址: 中国湖南省长沙经济技术开发区国顺科技园南二路27号',
    '地 址: 中国湖南长沙经济技术开发区漓湘路98号',
  ],
  [
    '联系地址：中国湖南省长沙经济技术开发区国顺科技园南二路27号',
    '联系地址：中国湖南长沙经济技术开发区漓湘路98号',
  ],
  ['销售电话: 总机4838688-1', '销售电话: 0731-84033881'],
  ['招聘电话: 0535-4838688-3', '招聘电话: +86 139 0848 9376'],
  ['营销中心: 0535-4838688', '营销中心: 0731-84033872'],
  ['销售经理：+8615053525100', '销售经理：+86 139 0848 9376'],
  ['传 真: 0535-3397708', '邮件至：info@csrenyi.com'],
  ['总机4838688-1', '0731-84033881'],
  ['0535-3397700、3397701', '营销中心：0731-84033872'],
  ['邮 编：264100', '邮 编：410100'],
  [
    'Postcode: 264100',
    'Postcode: 410100',
  ],
  [
    'Address: No. 27 South 2nd Road, Guoshun Science and Technology Park, Changsha Economic and Technological Development Zone, Hunan Province, China',
    'Address: No. 98 Lixiang Road, Changsha Economic and Technological Development Zone, Hunan, China',
  ],
  [
    'Адрес: № 186 улица Тяньхуа, промышленный парк Циньшуй, Даяо, район Мупин, Яньтай ',
    'Адрес: Китай, провинция Хунань, зона экономического и технологического развития г. Чанша, улица Лисян, № 98',
  ],
  [
    'Адрес: Китай, провинция Хунань, зона экономического и технологического развития г. Чанша, технопарк Guoshun, Южная 2-я дорога, № 27',
    'Адрес: Китай, провинция Хунань, зона экономического и технологического развития г. Чанша, улица Лисян, № 98',
  ],
  [
    'Domicilio: Avda.Tianhua No.186, Distrito de Mouping, Yantai, China',
    'Domicilio: No. 98, Lixiang Road, Zona de Desarrollo Económico y Tecnológico de Changsha, Hunan, China',
  ],
  [
    'Domicilio: No. 27, South 2nd Road, Parque Científico y Tecnológico Guoshun, Zona de Desarrollo Económico y Tecnológico de Changsha, Provincia de Hunan, China',
    'Domicilio: No. 98, Lixiang Road, Zona de Desarrollo Económico y Tecnológico de Changsha, Hunan, China',
  ],
  ['YANTAI XINGYE MACHINERY CO.,LTD', 'CHANGSHA RENYI MACHINERY MANUFACTURING CO., LTD'],
  ['Yantai Xingye Machinery Co., Ltd', 'Changsha Renyi Machinery Manufacturing Co., Ltd'],
  ['яньтайxingyeMachinery Co. Ltd.', 'Changsha Renyi Machinery Manufacturing Co., Ltd'],
  ['专业矿山无轨设备供应商', '矿山与工程专用设备制造商'],
  ['Professional mining trackless equipment supplier', 'Specialized machinery for demanding worksites'],
  ['严谨、认真、细腻、完美', '格物、致知、诚意、正心'],
  ['严谨 <span>|</span> 认真 <span>|</span> 细腻 <span>|</span> 完美', '格物 <span>|</span> 致知 <span>|</span> 诚意 <span>|</span> 正心'],
  ['Rigorous conscientious delicate perfect', 'Quality first · Service first · Honest operation'],
  ['Enterprise Culture', 'Corporate Culture'],
  ['Культура Xingye', 'Корпоративная культура'],
  ['Общественная информация', 'Новости'],
  ['Perfil', 'Perfil de la empresa'],
  ['Cultura Empresarial', 'Cultura corporativa'],
  ['宣传视频', '企业宣传片'],
  ['xingye machinery', 'Renyi Machinery'],
  ['Xingye', 'Renyi'],
  ['兴业', '仁毅'],
];

const FOOTER_CONTACTS: Record<RenyiLocale, { title: string; items: string[] }> = {
  zh: {
    title: '联系我们',
    items: ['地 址: 中国湖南长沙经济技术开发区漓湘路98号', '总机：0731-84033881', '招聘电话：+86 139 0848 9376', '营销中心：0731-84033872', '销售经理：+86 139 0848 9376', `WhatsApp：${RENYI_WHATSAPP_DISPLAY_PHONE}`, '邮件至：info@csrenyi.com'],
  },
  en: {
    title: 'Contact Us',
    items: ['Address: No. 98 Lixiang Road, Changsha Economic and Technological Development Zone, Hunan, China', 'Main switchboard: 0731-84033881', 'Recruitment phone: +86 139 0848 9376', 'Marketing center: 0731-84033872', 'Sales manager: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`, 'Email: info@csrenyi.com'],
  },
  ru: {
    title: 'Контакты',
    items: ['Адрес: Китай, провинция Хунань, зона экономического и технологического развития г. Чанша, улица Лисян, № 98', 'Главный телефон: 0731-84033881', 'Отдел кадров: +86 139 0848 9376', 'Маркетинговый центр: 0731-84033872', 'Менеджер по продажам: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`, 'Эл. почта: info@csrenyi.com'],
  },
  es: {
    title: 'Contacto',
    items: ['Dirección: No. 98, Lixiang Road, Zona de Desarrollo Económico y Tecnológico de Changsha, Hunan, China', 'Central: 0731-84033881', 'Teléfono de contratación: +86 139 0848 9376', 'Centro de marketing: 0731-84033872', 'Gerente de ventas: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`, 'Correo electrónico: info@csrenyi.com'],
  },
};

const FOOTER_PRODUCT_LABELS: Record<RenyiLocale, string[]> = {
  zh: ['天井钻机系列', '油缸悬挂系列', '结构件系列', '选矿设备系列', '专用设备系列'],
  en: [
    'Raise Boring Machinery Series',
    'Hydraulic Cylinder & Suspension Series',
    'Structural Components Series',
    'Mineral Processing Equipment Series',
    'Special Equipment Series',
  ],
  ru: [
    'Серия установок для восстающих выработок',
    'Серия гидроцилиндров и подвесок',
    'Серия металлоконструкций',
    'Серия обогатительного оборудования',
    'Серия специального оборудования',
  ],
  es: [
    'Serie de equipos raise boring',
    'Serie de cilindros hidráulicos y suspensión',
    'Serie de componentes estructurales',
    'Serie de equipos de beneficio mineral',
    'Serie de equipos especiales',
  ],
};
const FOOTER_MENU_COPY = {
  about: {
    className: 'm-0 has-sub',
    href: '/guanyuxingye/',
    labels: { zh: '关于仁毅', en: 'About Renyi', ru: 'О Renyi', es: 'Sobre Renyi' },
    submenu: {
      zh: [
        ['公司简介', '/guanyuxingye/#a1'],
        ['企业文化', '/guanyuxingye/#a2'],
        ['资质荣誉', '/guanyuxingye/#a3'],
        ['发展历程', '/guanyuxingye/#a4'],
      ],
      en: [
        ['Company Profile', '/guanyuxingye/#a1'],
        ['Corporate Culture', '/guanyuxingye/#a2'],
        ['Qualifications & Honors', '/guanyuxingye/#a3'],
        ['Development History', '/guanyuxingye/#a4'],
      ],
      ru: [
        ['Профиль компании', '/guanyuxingye/#a1'],
        ['Корпоративная культура', '/guanyuxingye/#a2'],
        ['Сертификаты и награды', '/guanyuxingye/#a3'],
        ['История развития', '/guanyuxingye/#a4'],
      ],
      es: [
        ['Perfil de la empresa', '/guanyuxingye/#a1'],
        ['Cultura corporativa', '/guanyuxingye/#a2'],
        ['Certificaciones y honores', '/guanyuxingye/#a3'],
        ['Historia de desarrollo', '/guanyuxingye/#a4'],
      ],
    },
  },
  products: {
    className: 'm-1 has-sub',
    href: '/chanpinzhanshi/',
    labels: { zh: '产品展示', en: 'Products', ru: 'Продукция', es: 'Productos' },
  },
  service: {
    className: 'm-2 has-sub',
    href: '/fuwuzhichi/',
    labels: { zh: '服务支持', en: 'Service Support', ru: 'Сервисная поддержка', es: 'Soporte de servicio' },
    submenu: RENYI_HEADER_NAV_ITEMS[3].submenu,
  },
  contact: {
    className: 'm-4 has-sub',
    href: '/lianxiwomen/',
    labels: { zh: '联系我们', en: 'Contact Us', ru: 'Контакты', es: 'Contacto' },
    submenu: RENYI_HEADER_NAV_ITEMS[5].submenu,
  },
} as const;

const HEADER_PRODUCT_LABELS: Record<RenyiLocale, string[]> = {
  zh: ['天井钻机系列', '油缸悬挂系列', '选矿设备系列', '专用设备系列', '结构件系列'],
  en: [
    'Raise Boring Machinery Series',
    'Hydraulic Cylinder & Suspension Series',
    'Mineral Processing Equipment Series',
    'Special Equipment Series',
    'Structural Components Series',
  ],
  ru: [
    'Серия установок для восстающих выработок',
    'Серия гидроцилиндров и подвесок',
    'Серия обогатительного оборудования',
    'Серия специального оборудования',
    'Серия металлоконструкций',
  ],
  es: [
    'Serie de equipos raise boring',
    'Serie de cilindros hidráulicos y suspensión',
    'Serie de equipos de beneficio mineral',
    'Serie de equipos especiales',
    'Serie de componentes estructurales',
  ],
};

const PRODUCT_SERIES_CARD_LABELS: Record<RenyiLocale, Record<string, string>> = {
  zh: {
    '/zuanjixilie/': '天井钻机系列',
    '/yougangxuangua/': '油缸悬挂系列',
    '/jiegouxilie/': '结构件系列',
    '/pro_category/zaoyantaiche/': '结构件系列',
    '/fuxuanjixilie/': '选矿设备系列',
    '/zhuanyongxilie/': '专用设备系列',
    '/pro_category/dexiafuwuche/': '专用设备系列',
  },
  en: {
    '/zuanjixilie/': 'Raise Boring Machinery Series',
    '/yougangxuangua/': 'Hydraulic Cylinder & Suspension Series',
    '/jiegouxilie/': 'Structural Components Series',
    '/pro_category/zaoyantaiche/': 'Structural Components Series',
    '/fuxuanjixilie/': 'Mineral Processing Equipment Series',
    '/zhuanyongxilie/': 'Special Equipment Series',
    '/pro_category/dexiafuwuche/': 'Special Equipment Series',
  },
  ru: {
    '/zuanjixilie/': 'Серия установок для восстающих выработок',
    '/yougangxuangua/': 'Серия гидроцилиндров и подвесок',
    '/jiegouxilie/': 'Серия металлоконструкций',
    '/pro_category/zaoyantaiche/': 'Серия металлоконструкций',
    '/fuxuanjixilie/': 'Серия обогатительного оборудования',
    '/zhuanyongxilie/': 'Серия специального оборудования',
    '/pro_category/dexiafuwuche/': 'Серия специального оборудования',
  },
  es: {
    '/zuanjixilie/': 'Serie de equipos raise boring',
    '/yougangxuangua/': 'Serie de cilindros hidráulicos y suspensión',
    '/jiegouxilie/': 'Serie de componentes estructurales',
    '/pro_category/zaoyantaiche/': 'Serie de componentes estructurales',
    '/fuxuanjixilie/': 'Serie de equipos de beneficio mineral',
    '/zhuanyongxilie/': 'Serie de equipos especiales',
    '/pro_category/dexiafuwuche/': 'Serie de equipos especiales',
  },
};

const PRODUCT_SERIES_CARD_IMAGES: Record<string, string> = {
  '/zuanjixilie/': '/renyi/product-category-raise-boring-site-card.jpg?v=20260801',
  '/yougangxuangua/': '/renyi/product-category-hydraulic-suspension-cylinders.jpg?v=20260801',
  '/pro_category/zaoyantaiche/': '/renyi/product-category-structural-components-fill.jpg?v=20260801',
  '/fuxuanjixilie/': '/renyi/product-category-mineral-processing-fill.jpg?v=20260801',
  '/pro_category/dexiafuwuche/': '/renyi/product-category-special-equipment-yard.jpg?v=20260801',
};

const PRODUCT_SERIES_CARD_ALTS: Record<RenyiLocale, Record<string, string>> = {
  zh: {
    '/zuanjixilie/': '天井钻机系列设备在高原矿山竖井施工现场作业',
    '/yougangxuangua/': '工程机械油缸悬挂系统与大型液压部件展示',
    '/pro_category/zaoyantaiche/': '矿用车辆后桥壳、副车架和车斗等高强度结构件展示',
    '/fuxuanjixilie/': '选矿设备与矿山管路系统现场应用展示',
    '/pro_category/dexiafuwuche/': '矿山专用设备及大型轮胎维护装备现场展示',
  },
  en: {
    '/zuanjixilie/': 'Raise boring machinery working at a high-altitude mine shaft site',
    '/yougangxuangua/': 'Hydraulic cylinders, suspension systems, and large hydraulic components',
    '/pro_category/zaoyantaiche/': 'High-strength structural components including rear axle housings, subframes, and truck bodies',
    '/fuxuanjixilie/': 'Mineral processing equipment and mining pipeline system in field application',
    '/pro_category/dexiafuwuche/': 'Special mining equipment and large tire maintenance equipment at a worksite',
  },
  ru: {
    '/zuanjixilie/': 'Оборудование для восстающих выработок на горной площадке',
    '/yougangxuangua/': 'Гидроцилиндры, системы подвески и крупные гидравлические компоненты',
    '/pro_category/zaoyantaiche/': 'Высокопрочные конструкции, включая корпуса задних мостов, подрамники и кузова',
    '/fuxuanjixilie/': 'Обогатительное оборудование и трубопроводная система на площадке',
    '/pro_category/dexiafuwuche/': 'Специальное горное оборудование и техника обслуживания крупных шин',
  },
  es: {
    '/zuanjixilie/': 'Equipo raise boring trabajando en un sitio minero de alta montaña',
    '/yougangxuangua/': 'Cilindros hidráulicos, sistemas de suspensión y componentes hidráulicos grandes',
    '/pro_category/zaoyantaiche/': 'Componentes estructurales de alta resistencia, incluidos ejes traseros, subchasis y cajas',
    '/fuxuanjixilie/': 'Equipos de beneficio mineral y sistema de tuberías en aplicación minera',
    '/pro_category/dexiafuwuche/': 'Equipos especiales mineros y equipos de mantenimiento de neumáticos grandes',
  },
};

const PRODUCT_SERIES_CARD_DESCRIPTIONS: Record<RenyiLocale, Record<string, string>> = {
  zh: {
    '/zuanjixilie/':
      '仁毅机械天井钻机系列面向地下矿山及竖井工程，覆盖有轨式、无轨式天（反）井钻机，以及钻杆、稳定杆、扩孔刀盘等配套部件，适用于矿山、水电、冶金、交通等复杂地下工程。',
    '/yougangxuangua/':
      '油缸悬挂系列覆盖工程机械与特种车辆两大应用方向，可提供大臂油缸、铲斗油缸、悬挂缸、举升缸、转向缸等总成及配件，服务矿卡、铰卡及大型工程设备国产化替代需求。',
    '/pro_category/zaoyantaiche/':
      '结构件系列聚焦大型矿用车辆与工程机械高强度结构件，核心产品包括后桥壳、副车架、车斗等关键部件，依托重型焊接与大型机加工能力，满足极端工况下的承载与耐久要求。',
    '/fuxuanjixilie/':
      '选矿设备系列以高效充气搅拌式浮选机为核心，服务有色金属、黑色金属及非金属矿物选别，兼顾处理能力、回收率、低能耗和稳定运行，为矿山选矿流程提供可靠装备支撑。',
    '/pro_category/dexiafuwuche/':
      '专用设备系列面向矿山、港口和大型车辆维修场景，覆盖轮辋拆装机、马达拆装机、炮孔填塞机、轮胎拆卸手等装备，帮助客户提升重型设备维护效率与作业安全性。',
  },
  en: {
    '/zuanjixilie/':
      'The raise boring machinery series serves underground mines and shaft engineering, covering rail-mounted and trackless raise boring rigs, drill rods, stabilizers, and reaming heads for mining, hydropower, metallurgy, and transportation works.',
    '/yougangxuangua/':
      'The hydraulic cylinder and suspension series covers construction machinery and special vehicles, including boom cylinders, bucket cylinders, suspension cylinders, hoist cylinders, steering cylinders, assemblies, and parts for heavy equipment localization.',
    '/pro_category/zaoyantaiche/':
      'The structural components series focuses on high-strength parts for large mining vehicles and engineering machinery, including rear axle housings, subframes, and truck bodies supported by heavy welding and large-scale machining capability.',
    '/fuxuanjixilie/':
      'The mineral processing equipment series centers on efficient forced-air mechanical flotation machines for non-ferrous, ferrous, and non-metallic minerals, supporting processing capacity, recovery rate, low energy consumption, and stable operation.',
    '/pro_category/dexiafuwuche/':
      'The special equipment series supports mining, port, and heavy-vehicle maintenance scenarios, covering rim dismounting machines, motor dismounting machines, blasthole stemming machines, tire handlers, and related service equipment.',
  },
  ru: {
    '/zuanjixilie/':
      'Серия установок для восстающих выработок предназначена для подземных рудников и шахтного строительства, включая рельсовые и безрельсовые установки, буровые штанги, стабилизаторы и расширительные головки.',
    '/yougangxuangua/':
      'Серия гидроцилиндров и подвесок охватывает инженерную технику и специальные транспортные средства, включая цилиндры стрелы, ковша, подвески, подъема и рулевого управления, а также узлы и запасные части.',
    '/pro_category/zaoyantaiche/':
      'Серия металлоконструкций ориентирована на высокопрочные детали для крупной горной и инженерной техники, включая корпуса задних мостов, подрамники и кузова, с опорой на тяжелую сварку и крупную механообработку.',
    '/fuxuanjixilie/':
      'Серия обогатительного оборудования основана на эффективных флотационных машинах с принудительной аэрацией и механическим перемешиванием для цветных, черных и неметаллических минералов.',
    '/pro_category/dexiafuwuche/':
      'Серия специального оборудования предназначена для горных, портовых и ремонтных задач тяжелой техники, включая станки демонтажа ободов, демонтаж моторов, установки забойки скважин и манипуляторы для шин.',
  },
  es: {
    '/zuanjixilie/':
      'La serie de equipos raise boring sirve a minas subterráneas y obras de pozos, cubriendo equipos sobre carriles y sin carriles, barras de perforación, estabilizadores y cabezales de escariado.',
    '/yougangxuangua/':
      'La serie de cilindros hidráulicos y suspensión cubre maquinaria de ingeniería y vehículos especiales, incluidos cilindros de pluma, cuchara, suspensión, elevación y dirección, junto con conjuntos y repuestos.',
    '/pro_category/zaoyantaiche/':
      'La serie de componentes estructurales se centra en piezas de alta resistencia para vehículos mineros y maquinaria de ingeniería, como carcasas de eje trasero, subchasis y cajas, con soldadura pesada y mecanizado grande.',
    '/fuxuanjixilie/':
      'La serie de equipos de beneficio mineral se basa en máquinas de flotación eficientes con aireación forzada y agitación mecánica para minerales no ferrosos, ferrosos y no metálicos.',
    '/pro_category/dexiafuwuche/':
      'La serie de equipos especiales atiende escenarios de minería, puertos y mantenimiento de vehículos pesados, con desmontadoras de llantas, desmontadoras de motores, equipos de retacado y manipuladores de neumáticos.',
  },
};

const PRODUCT_SERIES_HREFS = {
  raiseBoring: '/zuanjixilie/',
  hydraulic: '/yougangxuangua/',
  structural: '/jiegouxilie/',
  mineral: '/fuxuanjixilie/',
  special: '/zhuanyongxilie/',
} as const;

const HEADER_PRODUCT_SERIES_HREFS = [
  PRODUCT_SERIES_HREFS.raiseBoring,
  PRODUCT_SERIES_HREFS.hydraulic,
  PRODUCT_SERIES_HREFS.mineral,
  PRODUCT_SERIES_HREFS.special,
  PRODUCT_SERIES_HREFS.structural,
] as const;

const FOOTER_PRODUCT_SERIES_HREFS = [
  PRODUCT_SERIES_HREFS.raiseBoring,
  PRODUCT_SERIES_HREFS.hydraulic,
  PRODUCT_SERIES_HREFS.structural,
  PRODUCT_SERIES_HREFS.mineral,
  PRODUCT_SERIES_HREFS.special,
] as const;

const PRODUCT_SERIES_CARD_HREF_ALIASES: Record<string, string> = {
  '/pro_category/chanyunjixilie/': PRODUCT_SERIES_HREFS.raiseBoring,
  '/pro_category/yunkuangkache/': PRODUCT_SERIES_HREFS.hydraulic,
  '/pro_category/yidongshiqiaomaotaiche/': PRODUCT_SERIES_HREFS.mineral,
  '/pro_category/fuwuchexilie/': '/pro_category/dexiafuwuche/',
};
const SPARE_PARTS_SERIES_HREF = '/pro_category/beijianzhongxin/';

const HYDRAULIC_SERIES_CHILD_LABELS: Record<string, string> = {
  '/yougang-01/': '工程机械类',
  '/yougang-02/': '特种车辆类（矿卡与铰卡）',
};

const STRUCTURAL_SERIES_CHILD_HREFS = [
  '/jiegou-01/',
  '/jiegou-03/',
  '/jiegou-05/',
];

const STRUCTURAL_SERIES_CHILD_LABELS: Record<string, string> = {
  '/jiegou-01/': '后桥壳',
  '/jiegou-03/': '副车架',
  '/jiegou-05/': '车斗',
};

const SPECIAL_EQUIPMENT_CHILD_HREFS = [
  '/zhuanyong-02/',
  '/zhuanyong-03/',
  '/zhuanyong-04/',
];

const SPECIAL_EQUIPMENT_CHILD_LABELS: Record<string, string> = {
  '/zhuanyong-02/': '轮辋拆装机（门架式）',
  '/zhuanyong-03/': '马达拆装机',
  '/zhuanyong-04/': '炮孔填塞机',
};

const RAISE_BORING_SERIES_CHILD_LABELS: Record<string, string> = {
  '/zuanji-01/': '有轨式天（反）井钻机',
  '/zuanji-02/': '无轨式天（反）井钻机',
  '/zuanji-03/': '钻杆、稳定杆',
  '/zuanji-04/': '扩孔刀盘',
};

const MINERAL_PROCESSING_SERIES_CHILD_LABELS: Record<string, string> = {
  '/xuanji-01/': '充气搅拌式浮选机',
};

const HEADER_PRODUCT_CHILD_LABELS: Record<string, Record<string, string>> = {
  [PRODUCT_SERIES_HREFS.raiseBoring]: RAISE_BORING_SERIES_CHILD_LABELS,
  [PRODUCT_SERIES_HREFS.hydraulic]: HYDRAULIC_SERIES_CHILD_LABELS,
  [PRODUCT_SERIES_HREFS.mineral]: MINERAL_PROCESSING_SERIES_CHILD_LABELS,
  [PRODUCT_SERIES_HREFS.special]: SPECIAL_EQUIPMENT_CHILD_LABELS,
  [PRODUCT_SERIES_HREFS.structural]: STRUCTURAL_SERIES_CHILD_LABELS,
};
const HEADER_PRODUCT_CHILD_LABELS_BY_LOCALE: Record<RenyiLocale, Record<string, Record<string, string>>> = {
  zh: HEADER_PRODUCT_CHILD_LABELS,
  en: {
    [PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Rail-Mounted Raise Boring Rig',
      '/zuanji-02/': 'Trackless Raise Boring Rig',
      '/zuanji-03/': 'Drill Rods and Stabilizers',
      '/zuanji-04/': 'Reaming Cutterhead',
    },
    [PRODUCT_SERIES_HREFS.hydraulic]: {
      '/yougang-01/': 'Construction Machinery',
      '/yougang-02/': 'Special Vehicles (Mining Trucks & Articulated Trucks)',
    },
    [PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Forced-Air Mechanical Flotation Machine',
    },
    [PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-02/': 'Rim Dismounting Machine (Gantry Type)',
      '/zhuanyong-03/': 'Motor Dismounting Machine',
      '/zhuanyong-04/': 'Blasthole Stemming Machine',
    },
    [PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Rear Axle Housing',
      '/jiegou-03/': 'Subframe',
      '/jiegou-05/': 'Truck Body',
    },
  },
  ru: {
    [PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Рельсовая установка восстающего бурения',
      '/zuanji-02/': 'Безрельсовая установка восстающего бурения',
      '/zuanji-03/': 'Буровые штанги и стабилизаторы',
      '/zuanji-04/': 'Расширительная буровая головка',
    },
    [PRODUCT_SERIES_HREFS.hydraulic]: {
      '/yougang-01/': 'Инженерная техника',
      '/yougang-02/': 'Специальные автомобили (карьерные и сочлененные самосвалы)',
    },
    [PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Пневмомеханическая флотационная машина',
    },
    [PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-02/': 'Станок демонтажа ободов (портальный тип)',
      '/zhuanyong-03/': 'Станок демонтажа моторов',
      '/zhuanyong-04/': 'Установка забойки скважин',
    },
    [PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Корпус заднего моста',
      '/jiegou-03/': 'Подрамник',
      '/jiegou-05/': 'Кузов самосвала',
    },
  },
  es: {
    [PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Equipo raise boring sobre carriles',
      '/zuanji-02/': 'Equipo raise boring sin carriles',
      '/zuanji-03/': 'Barras de perforación y estabilizadores',
      '/zuanji-04/': 'Cabezal de escariado',
    },
    [PRODUCT_SERIES_HREFS.hydraulic]: {
      '/yougang-01/': 'Maquinaria de ingeniería',
      '/yougang-02/': 'Vehículos especiales (mineros y articulados)',
    },
    [PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Máquina de flotación mecánica con aire forzado',
    },
    [PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-02/': 'Desmontadora de llantas (tipo pórtico)',
      '/zhuanyong-03/': 'Desmontadora de motores',
      '/zhuanyong-04/': 'Equipo de retacado de barrenos',
    },
    [PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Carcasa de eje trasero',
      '/jiegou-03/': 'Subchasis',
      '/jiegou-05/': 'Caja de camión',
    },
  },
};

function withLocalePath(pathname: string, locale: RenyiLocale) {
  return locale === 'zh' ? pathname : `/${locale}${pathname}`;
}

function getProductSeriesLabel(locale: RenyiLocale, hrefPart: string) {
  return (
    (PRODUCT_SERIES_CARD_LABELS[locale] as Record<string, string>)[hrefPart] ??
    (PRODUCT_SERIES_CARD_LABELS.zh as Record<string, string>)[hrefPart] ??
    ''
  );
}

function createProductMenuChildList(locale: RenyiLocale, labels: Record<string, string>) {
  const childList = document.createElement('ul');
  childList.className = 'sub-btn3';

  Object.entries(labels).forEach(([hrefPart, label]) => {
    const item = document.createElement('li');
    const link = document.createElement('a');

    link.setAttribute('href', withLocalePath(hrefPart, locale));
    link.title = label;
    link.textContent = label;
    item.append(link);
    childList.append(item);
  });

  return childList;
}

function createHeaderProductMenuItem(locale: RenyiLocale, hrefPart: string) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  const label = getProductSeriesLabel(locale, hrefPart);
  const icon = document.createElement('i');
  const childLabels = HEADER_PRODUCT_CHILD_LABELS_BY_LOCALE[locale][hrefPart] ?? {};

  link.setAttribute('href', withLocalePath(hrefPart, locale));
  link.title = label;
  link.append(document.createTextNode(label));
  icon.className = 'ifa ifa-youjiantou1';
  link.append(icon);
  item.append(link);

  if (Object.keys(childLabels).length) {
    item.append(createProductMenuChildList(locale, childLabels));
  }

  return item;
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-site-script="${src}"]`);

    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.siteScript = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function refreshSiteScripts() {
  window.dispatchEvent(new Event('resize'));
  window.dispatchEvent(new Event('scroll'));
}

function replaceText(value: string) {
  return TEXT_REPLACEMENTS.reduce(
    (contents, [source, replacement]) => contents.replaceAll(source, replacement),
    value,
  );
}

function replaceBrandLogo() {
  const logoCopy = getRenyiLogoCopy(window.location.pathname);
  const logos = document.querySelectorAll<HTMLAnchorElement>('a.logo.navbar-brand');

  logos.forEach((logo) => {
    if (logo.dataset.brandLocale === logoCopy.locale) {
      return;
    }

    logo.dataset.brandPatched = 'true';
    logo.dataset.brandLocale = logoCopy.locale;
    logo.classList.add('renyi-brand');
    (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((locale) => {
      logo.classList.toggle(`renyi-brand--${locale}`, locale === logoCopy.locale);
    });
    logo.href = logoCopy.homePath;
    logo.title = logoCopy.companyName;
    logo.setAttribute('aria-label', `${logoCopy.companyName} home`);

    const mark = document.createElement('span');
    mark.className = 'renyi-brand__mark';
    mark.setAttribute('aria-hidden', 'true');

    const title = document.createElement('span');
    title.className = 'renyi-brand__title';
    title.textContent = logoCopy.companyName;

    logo.replaceChildren(mark, title);
  });
}

function replacePromoVideo() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const videoPath = RENYI_PROMO_VIDEO_PATHS[locale];
  const shouldLoadVideo = false;

  document.querySelectorAll<HTMLSourceElement>('video#banner_video source').forEach((source) => {
    source.dataset.src = videoPath;
    if (shouldLoadVideo) {
      source.src = videoPath;
    } else {
      source.removeAttribute('src');
    }
  });

  document.querySelectorAll<HTMLVideoElement>('video#banner_video').forEach((video) => {
    video.muted = true;
    video.loop = false;
    video.autoplay = false;
    video.playsInline = true;
    video.removeAttribute('loop');
    video.setAttribute('playsinline', '');
    video.preload = shouldLoadVideo ? 'metadata' : 'none';
    Array.from(video.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes('video')) {
        node.textContent = RENYI_VIDEO_FALLBACK_TEXT[locale];
      }
    });
    if (shouldLoadVideo) {
      video.load();
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  });

  document
    .querySelectorAll<HTMLAnchorElement>('a[href*="banner.mp4"], a[href*="renyi-banner-"]')
    .forEach((link) => {
      link.href = videoPath;
    });
}

function replaceCultureBannerSecondSlide() {
  const logoCopy = getRenyiLogoCopy(window.location.pathname);
  const imagePath = RENYI_CULTURE_BANNER_IMAGES[logoCopy.locale];
  const slides = Array.from(
    document.querySelectorAll<HTMLElement>('.banner .swiper-wrapper > .swiper-slide'),
  );
  const cultureSlide =
    slides.find(
      (slide) =>
        slide.classList.contains('renyi-culture-banner-slide') ||
        slide.style.backgroundImage.includes('/2022/09/b1.jpg') ||
        slide.style.backgroundImage.includes('b1.jpg'),
    ) ?? slides[1];

  if (!cultureSlide) {
    return;
  }

  cultureSlide.classList.add('renyi-culture-banner-slide');
  cultureSlide.style.backgroundImage = 'none';

  cultureSlide.querySelectorAll('.renyi-culture-banner-img').forEach((image) => image.remove());

  const image = document.createElement('img');
  image.className = 'img-w renyi-culture-banner-img';
  image.src = imagePath;
  image.alt = '';
  cultureSlide.prepend(image);

  const legacyTextBox = cultureSlide.querySelector<HTMLElement>('.banner-textbox');
  if (legacyTextBox) {
    legacyTextBox.style.display = 'none';
    legacyTextBox.setAttribute('aria-hidden', 'true');
  }
}

function replaceAboutMenuBackground() {
  document.querySelectorAll<HTMLElement>('.menu > li.m-0.has-sub > .sub-nav').forEach((menu) => {
    let layer = Array.from(menu.children).find((child) =>
      child.classList.contains('renyi-about-menu-bg'),
    ) as HTMLElement | undefined;

    if (!layer) {
      layer = document.createElement('div');
      layer.className = 'renyi-about-menu-bg';
      layer.setAttribute('aria-hidden', 'true');
      menu.prepend(layer);
    }

    let image = layer.querySelector('img');

    if (!image) {
      image = document.createElement('img');
      image.alt = '';
      layer.appendChild(image);
    }

    image.src = RENYI_ABOUT_MENU_BACKGROUND_IMAGE;
    menu.style.backgroundImage = 'none';
    menu.style.backgroundRepeat = 'no-repeat';
    menu.style.backgroundSize = 'auto 100%';
    menu.style.backgroundPosition = 'right top';
    menu.style.backgroundColor = '#fff';
    menu.style.boxShadow = 'none';
    menu.style.filter = 'none';
  });
}

function replaceAboutMenuText() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const copy = RENYI_ABOUT_MENU_COPY[locale];
  const textBox = document.querySelector<HTMLElement>('.menu > li.m-0.has-sub .sub-txtbox');

  if (!textBox) {
    return;
  }

  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const moreLink = document.createElement('a');
  const icon = document.createElement('i');

  title.textContent = copy.title;
  paragraph.textContent = copy.text;
  moreLink.setAttribute('href', withLocalePath('/guanyuxingye/', locale));
  moreLink.textContent = copy.more;
  icon.className = 'ifa ifa-arrow-right-bold';
  moreLink.append(icon);

  textBox.replaceChildren(title, paragraph, moreLink);
}

function isNewsPath(pathname: string) {
  const normalized = pathname.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? '/';
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;

  return (
    path.includes('/category/renyixinwen/') ||
    path.includes('/category/xingyexinwen/') ||
    path.includes('/category/xinwenzhongxin/')
  );
}

function isAboutPath(pathname: string) {
  const normalized = pathname.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? '/';
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;

  return ['/guanyuxingye/', '/en/guanyuxingye/', '/ru/guanyuxingye/', '/es/guanyuxingye/'].includes(path);
}

function isJoinPagePath(pathname: string) {
  const normalized = pathname.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? '/';
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;

  return ['/jiaruwomen/', '/en/jiaruwomen/', '/ru/jiaruwomen/', '/es/jiaruwomen/'].includes(path);
}

function isRaiseBoringCategoryPath(pathname: string) {
  const normalized = pathname.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? '/';
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;

  return [
    '/zuanjixilie/',
    '/en/zuanjixilie/',
    '/ru/zuanjixilie/',
    '/es/zuanjixilie/',
    '/pro_category/chanyunjixilie/',
    '/en/pro_category/chanyunjixilie/',
    '/ru/pro_category/chanyunjixilie/',
    '/es/pro_category/chanyunjixilie/',
  ].includes(path);
}

function isStructuralCategoryPath(pathname: string) {
  const normalized = pathname.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? '/';
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;

  return [
    '/jiegouxilie/',
    '/en/jiegouxilie/',
    '/ru/jiegouxilie/',
    '/es/jiegouxilie/',
    '/pro_category/zaoyantaiche/',
    '/en/pro_category/zaoyantaiche/',
    '/ru/pro_category/zaoyantaiche/',
    '/es/pro_category/zaoyantaiche/',
  ].includes(path);
}

function getRaiseBoringBannerTextHtml(pathname: string) {
  const locale = getRenyiLogoCopy(pathname).locale;
  const copy = RENYI_RAISE_BORING_BANNER_TEXT[locale];
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = copy.subtitle ? `<div class="txt2">${copy.subtitle}</div>` : '';

  return `${title} <div class="txt1">${copy.title}</div> ${subtitle}`;
}

function getStructuralBannerTextHtml(pathname: string) {
  const locale = getRenyiLogoCopy(pathname).locale;
  const copy = RENYI_STRUCTURAL_BANNER_TEXT[locale];
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = copy.subtitle ? `<div class="txt2">${copy.subtitle}</div>` : '';

  return `${title} <div class="txt1">${copy.title}</div> ${subtitle}`;
}

const STRUCTURAL_CATEGORY_REPAIR_DELAYS = [50, 250, 750, 1500] as const;
let scheduledStructuralCategoryRepairPath = '';

function normalizeHrefPath(href: string) {
  try {
    const pathname = new URL(href, window.location.origin).pathname.replace(/\/+/g, '/');
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  } catch {
    const pathname = href.split('#')[0]?.split('?')[0]?.replace(/\/+/g, '/') ?? href;
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  }
}

function structuralCategoryHasAllCards(list: HTMLElement, locale: RenyiLocale) {
  const hrefs = new Set(
    Array.from(list.querySelectorAll<HTMLAnchorElement>('a[href]'), (link) =>
      normalizeHrefPath(link.getAttribute('href') ?? ''),
    ),
  );

  return RENYI_STRUCTURAL_CARDS.every((card) => hrefs.has(withLocalePath(card.href, locale)));
}

function applyCertificateWallPageBanner(className: string) {
  const banner = document.querySelector<HTMLElement>('.page-banner');

  if (!banner) {
    return;
  }

  banner.classList.add(className);
  banner.style.backgroundImage = `url(${RENYI_NEWS_BANNER_IMAGE})`;
  banner.style.backgroundPosition = 'center center';
  banner.style.backgroundSize = '100% 100%';
  banner.style.backgroundRepeat = 'no-repeat';
}

function replaceNewsPageBanner() {
  if (!isNewsPath(window.location.pathname)) {
    return;
  }

  applyCertificateWallPageBanner('renyi-news-page-banner');
  (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((locale) => {
    document.querySelector<HTMLElement>('.page-banner')?.classList.toggle(
      `renyi-news-page-banner--${locale}`,
      getRenyiLogoCopy(window.location.pathname).locale === locale,
    );
  });

  const titleBox = document.querySelector<HTMLElement>('.page-banner .banner-tit-box');

  if (!titleBox) {
    return;
  }

  titleBox.innerHTML = getRenyiNewsBannerTextHtml(window.location.pathname);
}

function replaceAboutPageBanner() {
  if (!isAboutPath(window.location.pathname)) {
    return;
  }

  applyCertificateWallPageBanner('renyi-about-page-banner');
  (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((locale) => {
    document.querySelector<HTMLElement>('.page-banner')?.classList.toggle(
      `renyi-about-page-banner--${locale}`,
      getRenyiLogoCopy(window.location.pathname).locale === locale,
    );
  });

  const titleBox = document.querySelector<HTMLElement>('.page-banner .banner-tit-box');

  if (!titleBox) {
    return;
  }

  titleBox.innerHTML = getRenyiAboutBannerTextHtml(window.location.pathname);
}

function replaceJoinPageBanner() {
  if (!isJoinPagePath(window.location.pathname)) {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const banner = document.querySelector<HTMLElement>('.page-banner');
  const titleBox = document.querySelector<HTMLElement>('.page-banner .banner-tit-box');

  if (!banner || !titleBox) {
    return;
  }

  banner.classList.add('renyi-join-page-banner');
  (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((item) => {
    banner.classList.toggle(`renyi-join-page-banner--${item}`, item === locale);
  });
  banner.style.backgroundImage = `url(${RENYI_JOIN_PAGE_BANNER_IMAGE})`;
  banner.style.backgroundPosition = 'center center';
  banner.style.backgroundSize = '100% 100%';
  banner.style.backgroundRepeat = 'no-repeat';
  titleBox.innerHTML = getRenyiJoinPageBannerTextHtml(window.location.pathname);
}

function replaceContactPageBanner() {
  const pathname = window.location.pathname.replace(/\/+/g, '/');
  const unlocalizedPath = pathname.replace(/^\/(?:en|ru|es)/, '');

  if (unlocalizedPath !== '/lianxiwomen/' && unlocalizedPath !== '/lianxiwomen') {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const banner = document.querySelector<HTMLElement>('.page-banner');

  if (!banner) {
    return;
  }

  banner.classList.add('renyi-contact-page-banner');
  (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((item) => {
    banner.classList.toggle(`renyi-contact-page-banner--${item}`, item === locale);
  });
  banner.style.backgroundImage = `url(${RENYI_CONTACT_PAGE_BANNER_IMAGE})`;
  banner.style.backgroundPosition = 'center center';
  banner.style.backgroundSize = '100% 100%';
  banner.style.backgroundRepeat = 'no-repeat';
}

function replaceJoinTrainingModeImage() {
  if (!isJoinPagePath(window.location.pathname)) {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const image = document.querySelector<HTMLImageElement>('.job01 .job01-list .job01-item img.imgshow');

  if (!image) {
    return;
  }

  image.src = RENYI_JOIN_TRAINING_MODE_IMAGE;
  image.alt = RENYI_JOIN_TRAINING_MODE_ALT[locale];
  image.loading = 'lazy';
}

function replaceJoinProductionPracticeCard() {
  if (!isJoinPagePath(window.location.pathname)) {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const copy = RENYI_JOIN_PRODUCTION_PRACTICE_COPY[locale];
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.job01 .job01-list .job01-item'));
  const imageCard = cards.find((card) => !card.querySelector('.job01-item-txt'));
  const image = imageCard?.querySelector<HTMLImageElement>('img.imgshow');
  const textCards = cards.filter((card) => card.querySelector('.job01-item-txt'));
  const card = textCards.at(-1);
  const title = card?.querySelector<HTMLElement>('.job01-item-txt strong');
  const paragraph = card?.querySelector<HTMLElement>('.job01-item-txt p');

  if (!image || !card || !title || !paragraph) {
    return;
  }

  image.src = RENYI_JOIN_PRODUCTION_PRACTICE_IMAGE;
  image.alt = copy.alt;
  image.loading = 'lazy';
  title.textContent = copy.title;
  paragraph.textContent = copy.text;
}

function replaceRaiseBoringCategoryBanner() {
  if (!isRaiseBoringCategoryPath(window.location.pathname)) {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const banner = document.querySelector<HTMLElement>('.page-banner');
  const titleBox = document.querySelector<HTMLElement>('.page-banner .banner-tit-box');

  if (!banner || !titleBox) {
    return;
  }

  banner.classList.add('renyi-raise-boring-page-banner');
  (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((item) => {
    banner.classList.toggle(`renyi-raise-boring-page-banner--${item}`, item === locale);
  });
  banner.style.backgroundImage = `url(${RENYI_RAISE_BORING_CATEGORY_BANNER_IMAGE})`;
  banner.style.backgroundPosition = 'center center';
  banner.style.backgroundSize = '100% 100%';
  banner.style.backgroundRepeat = 'no-repeat';
  titleBox.innerHTML = getRaiseBoringBannerTextHtml(window.location.pathname);
}

function createStructuralSpecElement(spec: [string, string]) {
  const item = document.createElement('div');
  const label = document.createElement('span');

  item.className = 'sub-item';
  label.className = 'sub-t';
  label.textContent = `${spec[0]}:`;
  item.append(label, document.createTextNode(spec[1]));

  return item;
}

function createStructuralCategoryCard(card: RenyiStructuralRuntimeCard, locale: RenyiLocale) {
  const title = card.title[locale];
  const category = RENYI_STRUCTURAL_CATEGORY_LABELS[locale];
  const actions = RENYI_STRUCTURAL_ACTIONS[locale];
  const href = withLocalePath(card.href, locale);
  const inquiryHref = RENYI_WHATSAPP_URL;
  const col = document.createElement('div');
  const item = document.createElement('div');
  const imageBox = document.createElement('div');
  const imageLink = document.createElement('a');
  const imageFrame = document.createElement('div');
  const image = document.createElement('img');
  const textBox = document.createElement('div');
  const categoryNode = document.createElement('div');
  const heading = document.createElement('h3');
  const headingLink = document.createElement('a');
  const specBox = document.createElement('div');
  const buttonBox = document.createElement('div');
  const inquiryLink = document.createElement('a');
  const moreLink = document.createElement('a');

  col.className = 'col-xs-24 col-sm-12 col-md-8';
  item.className = 'item wow fadeInUp img-hover';
  item.title = title;
  imageBox.className = 'img-box oh';
  imageLink.href = href;
  imageFrame.className = 'img-h-9';
  image.className = 'img-w';
  image.src = card.image;
  image.title = card.alt[locale];
  image.alt = card.alt[locale];
  textBox.className = 'txt-box';
  categoryNode.className = 'category';
  categoryNode.textContent = category;
  heading.className = 'tit';
  headingLink.href = href;
  headingLink.textContent = title;
  specBox.className = 'txt';
  card.specs[locale].forEach((spec) => specBox.append(createStructuralSpecElement(spec)));
  buttonBox.className = 'btn-box';
  inquiryLink.href = inquiryHref;
  inquiryLink.target = '_blank';
  inquiryLink.rel = 'noopener';
  inquiryLink.textContent = actions.inquiry;
  moreLink.href = href;
  moreLink.textContent = actions.more;

  imageFrame.append(image);
  imageLink.append(imageFrame);
  imageBox.append(imageLink);
  heading.append(headingLink);
  buttonBox.append(inquiryLink, moreLink);
  textBox.append(categoryNode, heading, specBox, buttonBox);
  item.append(imageBox, textBox);
  col.append(item);

  return col;
}

function replaceStructuralCategoryPage() {
  if (!isStructuralCategoryPath(window.location.pathname)) {
    return false;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const banner = document.querySelector<HTMLElement>('.page-banner');
  const titleBox = document.querySelector<HTMLElement>('.page-banner .banner-tit-box');
  const list = document.querySelector<HTMLElement>('.row.row-40.list-pro.clearfix') ??
    document.querySelector<HTMLElement>('.list-pro');
  const grid = document.createElement('div');

  document.body.classList.add('renyi-structural-category');

  if (banner) {
    banner.classList.add('renyi-raise-boring-page-banner', 'renyi-structural-page-banner');
    (['zh', 'en', 'ru', 'es'] satisfies RenyiLocale[]).forEach((item) => {
      banner.classList.toggle(`renyi-raise-boring-page-banner--${item}`, item === locale);
    });
    banner.style.backgroundImage = `url(${RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE})`;
    banner.style.backgroundPosition = 'center center';
    banner.style.backgroundSize = '100% 100%';
    banner.style.backgroundRepeat = 'no-repeat';
    banner.querySelectorAll<HTMLImageElement>(':scope > .container > img').forEach((image) => {
      image.src = RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE;
      image.alt = '结构件系列横幅图';
      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
    });
  }

  if (titleBox) {
    titleBox.innerHTML = getStructuralBannerTextHtml(window.location.pathname);
  }

  if (!list?.parentElement) {
    return false;
  }

  if (structuralCategoryHasAllCards(list, locale)) {
    return true;
  }

  grid.className = 'row row-40 list-pro clearfix wow fadeInUp';
  RENYI_STRUCTURAL_CARDS.forEach((card) => grid.append(createStructuralCategoryCard(card, locale)));
  list.parentElement.replaceChild(grid, list);

  return true;
}

function scheduleStructuralCategoryRepair() {
  const path = window.location.pathname;

  if (!isStructuralCategoryPath(path) || scheduledStructuralCategoryRepairPath === path) {
    return;
  }

  scheduledStructuralCategoryRepairPath = path;

  STRUCTURAL_CATEGORY_REPAIR_DELAYS.forEach((delay) => {
    window.setTimeout(() => {
      if (!isStructuralCategoryPath(window.location.pathname)) {
        return;
      }

      if (replaceStructuralCategoryPage()) {
        refreshSiteScripts();
      }
    }, delay);
  });
}

function replaceSolutionMapImage() {
  const image = document.querySelector<HTMLImageElement>('.ind03 .ind03-map > img.img-w');

  if (image) {
    image.src = RENYI_SOLUTION_MAP_IMAGE;
  }
}

function replaceSolutionCopy() {
  const copy = RENYI_SOLUTION_COPY[getRenyiLogoCopy(window.location.pathname).locale];
  const section = document.querySelector<HTMLElement>('.ind03.page-col-space');
  const title = section?.querySelector<HTMLElement>('.page-txtbig .txt01.fn');
  const paragraph = section?.querySelector<HTMLElement>('.page-txtbig .mt10');

  if (title) {
    title.textContent = copy.title;
  }

  if (paragraph) {
    paragraph.textContent = copy.paragraph;
  }
}

function removeSolutionMapHotspots() {
  document.querySelectorAll<HTMLElement>('.ind03 .ind03-map .btn-box').forEach((element) => {
    element.remove();
  });
}

function localizeVisibleText() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const text = node.textContent;
    if (text) {
      const updated = replaceText(text);
      if (updated !== text) {
        node.textContent = updated;
      }
    }
    node = walker.nextNode();
  }

  document.querySelectorAll<HTMLElement>('[title], [alt], [aria-label]').forEach((element) => {
    for (const attribute of ['title', 'alt', 'aria-label']) {
      const value = element.getAttribute(attribute);
      if (!value) {
        continue;
      }
      const updated = replaceText(value);
      if (updated !== value) {
        element.setAttribute(attribute, updated);
      }
    }
  });
}

function replaceForeignFooterContacts() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const copy = FOOTER_CONTACTS[locale];
  const contact = document.querySelector<HTMLElement>('.footer .footer-contacts-nav .footer-contacts');

  if (!contact) {
    return;
  }

  contact.innerHTML = `<h3>${copy.title}</h3><div>${copy.items.map((item) => `<p>${item}</p>`).join('')}</div>`;
}

function replaceFooterQrImages() {
  document.querySelectorAll<HTMLImageElement>('.footer .footer-contacts-nav1 img').forEach((image, index) => {
    const src = image.getAttribute('src') ?? '';

    if (
      !src.includes('/dy.jpg') &&
      !src.includes('/wx.jpg') &&
      !src.includes('renyi-whatsapp-qr.png') &&
      !src.includes('renyi-wechat-official-account-qr.jpg')
    ) {
      return;
    }

    const isWechatQr = index === 1;
    image.src = isWechatQr ? RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE : RENYI_WHATSAPP_QR_IMAGE;
    image.alt = isWechatQr ? '微信公众号二维码' : 'WhatsApp二维码';
    image.title = isWechatQr ? '微信公众号二维码' : 'WhatsApp二维码';
  });
}

function replaceHeaderIconImageLabels() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const iconLabels: Array<[string, string]> = [
    ['.top-block .a1 img, img[src*="language.gif"]', RENYI_LANGUAGE_ICON_ALTS[locale]],
    ['.top-block .right_btn img, img[src*="head-btn.jpg"]', RENYI_QUICK_NAV_ICON_ALTS[locale]],
  ];

  iconLabels.forEach(([selector, label]) => {
    document.querySelectorAll<HTMLImageElement>(selector).forEach((image) => {
      image.alt = label;
      image.title = label;
    });
  });
}

function replaceFooterLegalRecords() {
  const column = document.querySelector<HTMLElement>('.footer-copy .footer-copy-col2');

  if (!column) {
    return;
  }

  column.innerHTML = `<span><a href="/">${RENYI_COPYRIGHT_TEXT}</a></span> <span><a href="${RENYI_ICP_URL}" target="_blank" rel="nofollow noopener noreferrer">${RENYI_ICP_RECORD}</a></span>`;
}

function replaceContactPageInfo() {
  const pathname = window.location.pathname.replace(/\/+/g, '/');
  const unlocalizedPath = pathname.replace(/^\/(?:en|ru|es)/, '');

  if (unlocalizedPath !== '/lianxiwomen/' && unlocalizedPath !== '/lianxiwomen') {
    return;
  }

  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const copy = RENYI_CONTACT_PAGE_COPY[locale];
  const section = document.querySelector<HTMLElement>('.contact01');

  if (!section) {
    return;
  }

  const cardsHtml = copy.cards
    .map(
      (card) =>
        `<div class="col-md-8"> <div class="contact01-item"> <div class="contact01-item-top"> <strong>${card.title}</strong> </div> <div class="contact01-item-body"> ${card.lines.join(
          '<br>',
        )} </div> </div> </div>`,
    )
    .join(' ');

  section.innerHTML = `<div class="container"> <div class="page-tit-box"> <h3 class="tit mb20">${copy.sectionTitle}</h3> </div> <div class="page-txtbig mb50"> <div class="txt01">${copy.headline}</div> <div class="txt02">${copy.subtitle}</div> </div> <div class="contact01-list"> <div class="row "> ${cardsHtml} </div> </div> </div>`;
}

function removeLegacyCaptchaFields() {
  document.querySelectorAll<HTMLElement>('.contact-page__form-input-box.text-code-box').forEach((captchaBox) => {
    captchaBox.closest('.col-md-12')?.remove();
  });

  document.querySelectorAll<HTMLElement>('.contact-page__btn-box').forEach((buttonBox) => {
    const column = buttonBox.closest<HTMLElement>('.col-md-12');

    column?.classList.add('col-md-offset-12');
  });
}

function getInquiryFormValue(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name);

  if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
    return field.value.trim();
  }

  return '';
}

function buildWhatsappInquiryMessage(form: HTMLFormElement) {
  const productTitle = document.querySelector<HTMLElement>('.pro-tit')?.innerText.trim();
  const fields = [
    ['姓名', getInquiryFormValue(form, 'your-name')],
    ['邮箱', getInquiryFormValue(form, 'your-email')],
    ['电话', getInquiryFormValue(form, 'your-tel')],
    ['留言内容', getInquiryFormValue(form, 'your-message')],
  ] as const;
  const lines = ['网站留言咨询'];

  if (productTitle) {
    lines.push(`产品：${productTitle}`);
  }

  fields.forEach(([label, value]) => {
    if (value) {
      lines.push(`${label}：${value}`);
    }
  });

  return lines.join('\n');
}

function bindWhatsappInquiryForms() {
  document.querySelectorAll<HTMLFormElement>('.wpcf7-form').forEach((form) => {
    if (form.dataset.renyiWhatsappBound === 'true') {
      return;
    }

    form.dataset.renyiWhatsappBound = 'true';
    form.action = RENYI_WHATSAPP_URL;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();

      const message = buildWhatsappInquiryMessage(form);
      const whatsappUrl = `${RENYI_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
      const opened = window.open(whatsappUrl, '_blank', 'noopener');

      if (!opened) {
        window.location.href = whatsappUrl;
      }
    });
  });
}

function replaceLegacyInquiryLinks() {
  document.querySelectorAll<HTMLAnchorElement>('.pro-v-head-btns .go-inquiry, .list-pro .btn-box a[href*="#a2"]').forEach((link) => {
    link.href = RENYI_WHATSAPP_URL;
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

const LEGACY_CATEGORY_PATH_ALIASES: Record<string, string> = {
  '/pro_category/products/': '/chanpinzhanshi/',
  '/pro_category/products/page/2/': '/chanpinzhanshi/',
  '/pro_category/products/page/3/': '/chanpinzhanshi/',
  '/pro_category/products/page/4/': '/chanpinzhanshi/',
  '/pro_category/products/page/5/': '/chanpinzhanshi/',
  '/pro_category/chanyunjixilie/': '/zuanjixilie/',
  '/pro_category/neiranchanyunji/': '/chanpinzhanshi/',
  '/pro_category/diandongchanyunji/': '/chanpinzhanshi/',
  '/pro_category/xudianchichanyunji/': '/chanpinzhanshi/',
  '/pro_category/diaishichanyunji/': '/chanpinzhanshi/',
  '/pro_category/yunkuangkache/': '/yougangxuangua/',
  '/pro_category/yunliaoche/': '/yougang-01/',
  '/pro_category/guandaoanzhuangche/': '/yougang-02/',
  '/pro_category/zaoyantaiche/': '/jiegouxilie/',
  '/pro_category/xianchanghunzhuangruhuazhayaoche/': '/jiegou-01/',
  '/pro_category/shengjiangpingtaiche/': '/jiegou-03/',
  '/pro_category/yunrenxilie/': '/jiegou-05/',
  '/pro_category/yidongshiqiaomaotaiche/': '/fuxuanjixilie/',
  '/pro_category/qiaomaotaiche/': '/fuxuanjixilie/',
  '/pro_category/dexiafuwuche/': '/zhuanyongxilie/',
  '/pro_category/fuwuchexilie/': '/zhuanyongxilie/',
  '/pro_category/shuipaoche/': '/zhuanyong-01/',
  '/pro_category/fls-5sashuiche/': '/zhuanyong-01/',
  '/pro_category/baopoqicaiyunshuche/': '/zhuanyong-02/',
  '/pro_category/hunningtujiaobanche/': '/zhuanyong-03/',
  '/pro_category/youliaoyunshuche/': '/zhuanyong-04/',
  '/pro_category/yidongshisuishiji/': '/zhuanyong-05/',
  '/pro_category/beijianzhongxin/': '/chanpinzhanshi/',
  '/pro_category/yeyajian/': '/yougangxuangua/',
  '/pro_category/dianqijian/': '/chanpinzhanshi/',
  '/pro_category/donglichuandongjian/': '/chanpinzhanshi/',
  '/pro_category/qita/': '/chanpinzhanshi/',
};

function replaceLegacyCategoryLinks() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;

  document.querySelectorAll<HTMLAnchorElement>('a[href*="/pro_category/"]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    const path = normalizeHrefPath(href).replace(/^\/(en|ru|es)(?=\/)/, '');
    const alias = LEGACY_CATEGORY_PATH_ALIASES[path];

    if (alias) {
      link.href = withLocalePath(alias, locale);
    }
  });
}

function replaceHeaderQuickNav() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const copy = RENYI_QUICK_NAV_COPY[locale];
  const title = document.querySelector<HTMLElement>('.header-right-win .right-win-title');
  const body = document.querySelector<HTMLElement>('.header-right-win .right-win-body');

  if (title) {
    title.textContent = RENYI_QUICK_NAV_TITLES[locale];
  }

  if (!body) {
    return;
  }

  const itemsHtml = copy.items
    .map(
      (item) =>
        `<strong><a href="${withLocalePath(item.href, locale)}">${item.title}</a></strong> <p>${item.text}</p>`,
    )
    .join(' ');
  const contactHtml = `<div class="txt02"> <strong>${copy.contactTitle}</strong> <p>${copy.contactLines.join('<br>')}</p> </div>`;
  const qrAlt = locale === 'zh'
    ? '微信公众号二维码'
    : locale === 'en'
      ? 'WeChat official account QR code'
      : locale === 'ru'
        ? 'QR-код официального аккаунта WeChat'
        : 'Código QR de la cuenta oficial de WeChat';
  const qrLabel = locale === 'zh' ? '微信公众号' : 'WeChat';
  const qrHtml = `<div class="txt03"> <img class="img-w" src="${RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE}" alt="${qrAlt}" title="${qrAlt}"> <p>${qrLabel}</p> </div>`;

  body.innerHTML = `<div class="txt01"> ${itemsHtml} </div> ${contactHtml} ${qrHtml}`;
}

function bindHeaderQuickNavToggle() {
  const panel = document.querySelector<HTMLElement>('.header-right-win');
  const openButton = document.querySelector<HTMLAnchorElement>('.right_btn');
  const closeButton = document.querySelector<HTMLAnchorElement>('.header-right-win .right-win-close');

  if (!panel || !openButton || !closeButton || openButton.dataset.renyiQuickNavBound === 'true') {
    return;
  }

  openButton.dataset.renyiQuickNavBound = 'true';
  closeButton.dataset.renyiQuickNavBound = 'true';

  openButton.addEventListener('click', (event) => {
    event.preventDefault();
    panel.classList.add('win-show');
  });

  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    panel.classList.remove('win-show');
  });
}

function replaceFooterProductLabels() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const list = document.querySelector<HTMLUListElement>('.footer .footer-contacts-nav .b-menu > li.m-1 > ul.sub-btn');

  if (!list) {
    return;
  }

  list.replaceChildren(
    ...FOOTER_PRODUCT_SERIES_HREFS.map((hrefPart) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const label = getProductSeriesLabel(locale, hrefPart);

      link.setAttribute('href', withLocalePath(hrefPart, locale));
      link.title = label;
      link.textContent = label;
      item.append(link);

      return item;
    }),
  );
}

function replaceFooterMenuLabels() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;

  Object.values(FOOTER_MENU_COPY).forEach((menuItem) => {
    const item = findItemByClasses<HTMLLIElement>(document, '.footer .footer-contacts-nav .b-menu > li', menuItem.className);

    if (!item) {
      return;
    }

    const link = item.querySelector<HTMLAnchorElement>(':scope > a');
    const label = menuItem.labels[locale];

    if (link) {
      link.href = withLocalePath(menuItem.href, locale);
      link.title = label;
      link.textContent = label;
    }

    const list = item.querySelector<HTMLUListElement>(':scope > ul.sub-btn');

    if (!list || !('submenu' in menuItem)) {
      return;
    }

    const submenuItems = menuItem.submenu[locale] as ReadonlyArray<readonly [string, string]>;

    list.replaceChildren(
      ...submenuItems.map(([itemLabel, href]) => {
        const subItem = document.createElement('li');
        const subLink = document.createElement('a');

        subLink.href = withLocalePath(href, locale);
        subLink.title = itemLabel;
        subLink.textContent = itemLabel;
        subItem.append(subLink);

        return subItem;
      }),
    );
  });
}

function removeSparePartsSeriesLinks() {
  document
    .querySelectorAll<HTMLAnchorElement>(
      `.header-box .menu a[href*="${SPARE_PARTS_SERIES_HREF}"], .footer a[href*="${SPARE_PARTS_SERIES_HREF}"]`,
    )
    .forEach((link) => {
      link.closest('li')?.remove();
    });
}

function removeHeaderMenuNativeTooltips() {
  document.querySelectorAll<HTMLAnchorElement>('.header-box .menu a[title]').forEach((link) => {
    link.removeAttribute('title');
  });
}

function replaceHeaderHomeNav() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const label = RENYI_HOME_NAV_LABELS[locale];
  const item = Array.from(document.querySelectorAll<HTMLLIElement>('.menu > li.m-0')).find(
    (candidate) => !candidate.classList.contains('has-sub'),
  );

  if (!item) {
    return;
  }

  const link = document.createElement('a');
  const span = document.createElement('span');

  link.href = withLocalePath('/', locale);
  link.title = label;
  span.dataset.title = label;
  span.textContent = label;
  link.append(span);
  item.replaceChildren(link);
}

function findItemByClasses<T extends HTMLElement>(root: ParentNode, selector: string, className: string) {
  const classes = className.split(/\s+/).filter(Boolean);

  return Array.from(root.querySelectorAll<T>(selector)).find((item) => classes.every((name) => item.classList.contains(name)));
}

function replaceTopAnchor(item: HTMLElement, href: string, label: string, locale: RenyiLocale) {
  const link = document.createElement('a');
  const span = document.createElement('span');
  const existingSubNav = item.querySelector<HTMLElement>(':scope > .sub-nav');

  link.href = withLocalePath(href, locale);
  link.title = label;
  span.dataset.title = label;
  span.textContent = label;
  link.append(span);

  if (existingSubNav) {
    item.replaceChildren(link, existingSubNav);
    return;
  }

  item.replaceChildren(link);
}

function replaceSubMenuItems(
  item: HTMLElement,
  locale: RenyiLocale,
  items?: Readonly<Record<RenyiLocale, ReadonlyArray<readonly [string, string]>>>,
) {
  if (!items) {
    return;
  }

  const list = item.querySelector<HTMLUListElement>(':scope > .sub-nav .sub-btnbox > .sub-btn');

  if (!list) {
    return;
  }

  list.replaceChildren(
    ...items[locale].map(([label, href]) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');

      link.href = withLocalePath(href, locale);
      link.title = label;
      link.textContent = label;
      listItem.append(link);

      return listItem;
    }),
  );
}

function replaceHeaderTopNavLabels() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;

  RENYI_HEADER_NAV_ITEMS.forEach((navItem) => {
    const item = findItemByClasses<HTMLLIElement>(document, '.header-box .menu > li', navItem.className);

    if (!item) {
      return;
    }

    replaceTopAnchor(item, navItem.href, navItem.labels[locale], locale);
    replaceSubMenuItems(item, locale, 'submenu' in navItem ? navItem.submenu : undefined);
  });
}

function ensureHeaderCaseNav() {
  const list = document.querySelector<HTMLUListElement>('.header-box .menu');

  if (!list) {
    return;
  }

  const item = list.querySelector<HTMLLIElement>(':scope > li.m-2') ?? document.createElement('li');
  const anchor = document.createElement('a');
  const label = document.createElement('span');
  const serviceItem = list.querySelector<HTMLLIElement>(':scope > li.m-3');

  const currentPath = normalizeHrefPath(window.location.pathname).replace(/^\/(en|ru|es)(?=\/)/, '');

  item.className = currentPath.startsWith('/anlizhanshi/') ? 'm-2 current' : 'm-2';
  anchor.append(label);
  item.replaceChildren(anchor);

  if (!item.parentElement) {
    list.insertBefore(item, serviceItem);
  }
}

function replaceHeaderLanguageLabel() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const label = RENYI_LANGUAGE_LABELS[locale];
  const element = document.querySelector<HTMLElement>('.header-box .top-block .a1 span.hidden-sm.hidden-xs');

  if (element) {
    element.textContent = label;
  }
}

function replaceProductSeriesCardLabels() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const labels = PRODUCT_SERIES_CARD_LABELS[locale];
  const alts = PRODUCT_SERIES_CARD_ALTS[locale];
  const descriptions = PRODUCT_SERIES_CARD_DESCRIPTIONS[locale];
  const hrefParts = [
    ...Object.keys(labels),
    ...Object.keys(PRODUCT_SERIES_CARD_HREF_ALIASES),
  ];

  hrefParts.forEach((hrefPart) => {
    const canonicalHrefPart = PRODUCT_SERIES_CARD_HREF_ALIASES[hrefPart] ?? hrefPart;
    const label = (labels as Record<string, string>)[canonicalHrefPart];

    if (!label) {
      return;
    }

    document
      .querySelectorAll<HTMLAnchorElement>(`a.item.img-hover[href*="${hrefPart}"]`)
      .forEach((card) => {
        const imageSrc = PRODUCT_SERIES_CARD_IMAGES[canonicalHrefPart];
        const image = card.querySelector<HTMLImageElement>('img');
        const title = card.querySelector<HTMLHeadingElement>('h3.tit');
        const description = card.querySelector<HTMLParagraphElement>('p.txt');

        card.setAttribute('href', withLocalePath(canonicalHrefPart, locale));

        if (image && imageSrc) {
          image.src = imageSrc;
          image.alt = (alts as Record<string, string>)[canonicalHrefPart] ?? label;
        }

        if (title) {
          title.textContent = label;
        }

        if (description) {
          description.textContent = (descriptions as Record<string, string>)[canonicalHrefPart] ?? '';
        }
      });
  });
}

function moveHeaderProductSubItemsToHydraulicSeries(list: HTMLElement) {
  const hydraulicLink = list.querySelector<HTMLAnchorElement>('a[href*="/yougangxuangua/"]');
  const hydraulicItem = hydraulicLink?.closest<HTMLLIElement>('li');

  if (!hydraulicItem) {
    return;
  }

  let hydraulicSubList = hydraulicItem.querySelector<HTMLUListElement>(':scope > .sub-btn3');
  if (!hydraulicSubList) {
    hydraulicSubList = document.createElement('ul');
    hydraulicSubList.className = 'sub-btn3';
    hydraulicItem.append(hydraulicSubList);
  }

  Object.entries(HYDRAULIC_SERIES_CHILD_LABELS).forEach(([hrefPart, label]) => {
    const link = list.querySelector<HTMLAnchorElement>(`a[href*="${hrefPart}"]`);
    const item = link?.closest<HTMLLIElement>('li');

    if (link) {
      link.title = label;
      link.textContent = label;
    }

    if (!item) {
      const nextItem = document.createElement('li');
      const nextLink = document.createElement('a');
      nextLink.href = hrefPart;
      nextLink.title = label;
      nextLink.textContent = label;
      nextItem.append(nextLink);
      hydraulicSubList.append(nextItem);
      return;
    }

    if (!item || item.parentElement === hydraulicSubList) {
      return;
    }

    hydraulicSubList.append(item);
  });
}

function findTopLevelProductMenuItem(list: HTMLElement, hrefPart: string) {
  return Array.from(list.children).find((item) => {
    const link = item.querySelector<HTMLAnchorElement>(':scope > a');
    return link?.href.includes(hrefPart);
  }) as HTMLLIElement | undefined;
}

function replaceHeaderProductChildLabels(list: HTMLElement, labels: Record<string, string>) {
  Object.entries(labels).forEach(([hrefPart, label]) => {
    const link = list.querySelector<HTMLAnchorElement>(`a[href*="${hrefPart}"]`);

    if (!link) {
      return;
    }

    link.title = label;
    link.textContent = label;
  });
}

function moveHeaderSpecialEquipmentChildrenIntoSpecialSeries(list: HTMLElement) {
  const specialItem = findTopLevelProductMenuItem(list, '/pro_category/dexiafuwuche/');

  if (!specialItem) {
    return;
  }

  let specialSubList = specialItem.querySelector<HTMLUListElement>(':scope > .sub-btn3');
  if (!specialSubList) {
    specialSubList = document.createElement('ul');
    specialSubList.className = 'sub-btn3';
    specialItem.append(specialSubList);
  }

  SPECIAL_EQUIPMENT_CHILD_HREFS.forEach((hrefPart) => {
    const link = list.querySelector<HTMLAnchorElement>(`a[href*="${hrefPart}"]`);
    const item = link?.closest<HTMLLIElement>('li');

    if (!item || item.parentElement === specialSubList) {
      return;
    }

    specialSubList.append(item);
  });
}

function moveHeaderStructuralSeriesAfterSpecialEquipment(list: HTMLElement) {
  const structuralItem = findTopLevelProductMenuItem(list, '/pro_category/zaoyantaiche/');
  const specialItem = findTopLevelProductMenuItem(list, '/pro_category/dexiafuwuche/');

  if (!structuralItem || !specialItem) {
    return;
  }

  let structuralSubList = structuralItem.querySelector<HTMLUListElement>(':scope > .sub-btn3');
  if (!structuralSubList) {
    structuralSubList = document.createElement('ul');
    structuralSubList.className = 'sub-btn3';
    structuralItem.append(structuralSubList);
  }

  STRUCTURAL_SERIES_CHILD_HREFS.forEach((hrefPart) => {
    const link = list.querySelector<HTMLAnchorElement>(`a[href*="${hrefPart}"]`);
    const item = link?.closest<HTMLLIElement>('li');

    if (!item || item.parentElement === structuralSubList) {
      return;
    }

    structuralSubList.append(item);
  });
  specialItem.after(structuralItem);
}

function replaceHeaderProductMenu() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const list = document.querySelector<HTMLElement>('.menu > li.m-1.has-sub .sub-btnbox > .sub-btn2');

  if (!list) {
    return;
  }

  list.replaceChildren(...HEADER_PRODUCT_SERIES_HREFS.map((hrefPart) => createHeaderProductMenuItem(locale, hrefPart)));
}

function replaceHeaderProductMenuText() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const textBox = document.querySelector<HTMLElement>('.menu > li.m-1.has-sub .sub-txtbox');

  if (!textBox) {
    return;
  }

  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const moreLink = document.createElement('a');
  const labels: Record<RenyiLocale, string> = {
    zh: '查看更多',
    en: 'More',
    ru: 'Подробнее',
    es: 'Ver más',
  };
  const icon = document.createElement('i');
  const copy = RENYI_PRODUCT_MENU_COPY[locale];

  title.textContent = copy.title;
  paragraph.textContent = copy.text;
  moreLink.setAttribute('href', withLocalePath('/chanpinzhanshi/', locale));
  moreLink.textContent = labels[locale];
  icon.className = 'ifa ifa-arrow-right-bold';
  moreLink.append(icon);

  textBox.replaceChildren(title, paragraph, moreLink);
}

function replaceHeaderProductMenuBackground() {
  const menu = document.querySelector<HTMLElement>('.menu > li.m-1.has-sub > .sub-nav');

  if (!menu) {
    return;
  }

  menu.style.backgroundImage = `url(${RENYI_PRODUCT_MENU_BACKGROUND_IMAGE})`;
  menu.style.backgroundRepeat = 'no-repeat';
  menu.style.backgroundSize = '100% 100%';
  menu.style.backgroundPosition = 'center top';
}

function replaceHeaderServiceMenuText() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const textBox = document.querySelector<HTMLElement>('.menu > li.m-3.has-sub .sub-txtbox');

  if (!textBox) {
    return;
  }

  const copy = RENYI_SERVICE_MENU_COPY[locale];
  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const moreLink = document.createElement('a');
  const icon = document.createElement('i');

  title.textContent = copy.title;
  paragraph.textContent = copy.text;
  moreLink.setAttribute('href', withLocalePath('/fuwuzhichi/', locale));
  moreLink.textContent = copy.more;
  icon.className = 'ifa ifa-arrow-right-bold';
  moreLink.append(icon);

  textBox.replaceChildren(title, paragraph, moreLink);
}

function replaceHeaderServiceMenuBackground() {
  const menu = document.querySelector<HTMLElement>('.menu > li.m-3.has-sub > .sub-nav');

  if (!menu) {
    return;
  }

  menu.style.backgroundImage = `linear-gradient(90deg, rgba(244, 244, 242, 0.96) 0%, rgba(244, 244, 242, 0.88) 28%, rgba(244, 244, 242, 0.54) 42%, rgba(244, 244, 242, 0.08) 60%, rgba(244, 244, 242, 0) 74%), url(${RENYI_SERVICE_MENU_BACKGROUND_IMAGE})`;
  menu.style.backgroundRepeat = 'no-repeat';
  menu.style.backgroundSize = '100% 100%, 100% 100%';
  menu.style.backgroundPosition = 'center center';
  menu.style.backgroundColor = '#f4f4f2';
  menu.style.boxShadow = 'none';
  menu.style.filter = 'none';
}

function replaceHeaderJoinMenuText() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const textBox = document.querySelector<HTMLElement>('.menu > li.m-4.has-sub .sub-txtbox');

  if (!textBox) {
    return;
  }

  const copy = RENYI_JOIN_MENU_COPY[locale];
  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const moreLink = document.createElement('a');
  const icon = document.createElement('i');

  title.textContent = copy.title;
  paragraph.textContent = copy.text;
  moreLink.setAttribute('href', withLocalePath('/jiaruwomen/', locale));
  moreLink.textContent = copy.more;
  icon.className = 'ifa ifa-arrow-right-bold';
  moreLink.append(icon);

  textBox.replaceChildren(title, paragraph, moreLink);
}

function replaceHeaderContactMenuText() {
  const locale = getRenyiLogoCopy(window.location.pathname).locale;
  const textBox = document.querySelector<HTMLElement>('.menu > li.m-5.has-sub .sub-txtbox');

  if (!textBox) {
    return;
  }

  const copy = RENYI_CONTACT_MENU_COPY[locale];
  const title = document.createElement('h3');
  const paragraph = document.createElement('p');
  const moreLink = document.createElement('a');
  const icon = document.createElement('i');

  title.textContent = copy.title;
  paragraph.textContent = copy.text;
  moreLink.setAttribute('href', withLocalePath('/lianxiwomen/', locale));
  moreLink.textContent = copy.more;
  icon.className = 'ifa ifa-arrow-right-bold';
  moreLink.append(icon);

  textBox.replaceChildren(title, paragraph, moreLink);
}

function replaceHeaderContactMenuBackground() {
  const menu = document.querySelector<HTMLElement>('.menu > li.m-5.has-sub > .sub-nav');

  if (!menu) {
    return;
  }

  menu.style.backgroundImage = `${RENYI_CONTACT_MENU_BACKGROUND_OVERLAY}, url(${RENYI_CONTACT_MENU_BACKGROUND_IMAGE})`;
  menu.style.backgroundRepeat = 'no-repeat';
  menu.style.backgroundSize = '100% 100%, 100% 100%';
  menu.style.backgroundPosition = 'center center, center center';
  menu.style.backgroundColor = '#f4f4f2';
  menu.style.boxShadow = 'none';
  menu.style.filter = 'none';
}

function bindRenyiAfterSalesCards() {
  const cards = document.querySelectorAll<HTMLButtonElement>('.renyi-after-sales-card');
  const grid = document.querySelector<HTMLElement>('.renyi-after-sales-grid');

  if (!cards.length) {
    return;
  }

  const supportsHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ?? false;
  const clearActiveCards = () => {
    cards.forEach((card) => {
      card.classList.remove('is-active');
      card.setAttribute('aria-expanded', 'false');
    });
  };
  const setActiveCard = (activeCard: HTMLButtonElement) => {
    cards.forEach((card) => {
      const isActive = card === activeCard;

      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-expanded', String(isActive));
    });
  };

  cards.forEach((card) => {
    if (card.dataset.renyiAfterSalesBound === 'true') {
      return;
    }

    card.dataset.renyiAfterSalesBound = 'true';

    if (supportsHover) {
      card.addEventListener('mouseenter', () => setActiveCard(card));
      return;
    }

    card.addEventListener('click', () => setActiveCard(card));
  });

  if (supportsHover && grid && grid.dataset.renyiAfterSalesLeaveBound !== 'true') {
    grid.dataset.renyiAfterSalesLeaveBound = 'true';
    grid.addEventListener('mouseleave', clearActiveCards);
  }
}

function bindHydraulicCategoryCardLinks() {
  const cards = document.querySelectorAll<HTMLElement>('body.renyi-hydraulic-category .list-pro .item[data-card-href]');

  cards.forEach((card) => {
    if (card.dataset.cardClickBound === 'true') {
      return;
    }

    card.dataset.cardClickBound = 'true';
    card.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;

      if (event.defaultPrevented || target?.closest('a, button, input, textarea, select, label')) {
        return;
      }

      const href = card.dataset.cardHref;

      if (!href) {
        return;
      }

      if (card.dataset.cardTarget === '_blank') {
        window.open(href, '_blank', 'noopener');
        return;
      }

      window.location.href = href;
    });
  });
}

function patchRenyiMirror() {
  replaceBrandLogo();
  replacePromoVideo();
  replaceAboutMenuBackground();
  replaceAboutMenuText();
  replaceCultureBannerSecondSlide();
  replaceAboutPageBanner();
  replaceNewsPageBanner();
  replaceJoinPageBanner();
  replaceContactPageBanner();
  replaceJoinTrainingModeImage();
  replaceJoinProductionPracticeCard();
  replaceRaiseBoringCategoryBanner();
  replaceStructuralCategoryPage();
  scheduleStructuralCategoryRepair();
  replaceSolutionMapImage();
  replaceSolutionCopy();
  removeSolutionMapHotspots();
  localizeVisibleText();
  replaceHeaderIconImageLabels();
  replaceContactPageInfo();
  removeLegacyCaptchaFields();
  bindWhatsappInquiryForms();
  replaceLegacyInquiryLinks();
  replaceHeaderQuickNav();
  bindHeaderQuickNavToggle();
  replaceForeignFooterContacts();
  replaceFooterProductLabels();
  replaceFooterMenuLabels();
  replaceFooterQrImages();
  replaceFooterLegalRecords();
  removeSparePartsSeriesLinks();
  removeHeaderMenuNativeTooltips();
  replaceHeaderHomeNav();
  ensureHeaderCaseNav();
  replaceHeaderTopNavLabels();
  replaceHeaderLanguageLabel();
  replaceProductSeriesCardLabels();
  replaceHeaderProductMenu();
  replaceHeaderProductMenuText();
  replaceHeaderServiceMenuText();
  replaceHeaderJoinMenuText();
  replaceHeaderContactMenuText();
  removeSparePartsSeriesLinks();
  removeHeaderMenuNativeTooltips();
  replaceHeaderProductMenuBackground();
  replaceHeaderServiceMenuBackground();
  replaceHeaderContactMenuBackground();
  removeHeaderMenuNativeTooltips();
  bindRenyiAfterSalesCards();
  replaceLegacyCategoryLinks();
  bindHydraulicCategoryCardLinks();
  bindProductCategorySwitcher();
}

function setProductCategoryActiveButton(buttons: NodeListOf<HTMLAnchorElement>, activeIndex: number) {
  buttons.forEach((button, index) => {
    button.classList.toggle('cur', index === activeIndex);
  });
}

function bindProductCategorySwitcher() {
  const section = document.querySelector<HTMLElement>('.ind02');
  const container = section?.querySelector<ProductCategorySwiperContainer>('.swiper-container');
  const buttons = section?.querySelectorAll<HTMLAnchorElement>('.ind02-btn-box a');

  if (!section || !container || !buttons?.length) {
    return;
  }

  const siteWindow = window as SiteWindow;
  let swiper = container.swiper;

  if (!swiper && siteWindow.Swiper) {
    swiper = new siteWindow.Swiper(container, {
      nextButton: '.s-btn-next',
      prevButton: '.s-btn-prev',
      onInit: (instance: ProductCategorySwiper) => {
        setProductCategoryActiveButton(buttons, instance.activeIndex ?? 0);
      },
      onSlideChangeEnd: (instance: ProductCategorySwiper) => {
        setProductCategoryActiveButton(buttons, instance.activeIndex ?? 0);
      },
    });
  }

  if (!swiper) {
    return;
  }

  buttons.forEach((button, index) => {
    button.href = 'javascript:;';

    if (button.dataset.renyiSwitcherBound === 'true') {
      return;
    }

    button.dataset.renyiSwitcherBound = 'true';
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const currentSwiper = container.swiper ?? swiper;
      currentSwiper?.update?.();
      currentSwiper?.slideTo(index, 1000, false);
      setProductCategoryActiveButton(buttons, index);
    });
  });

  setProductCategoryActiveButton(buttons, swiper.activeIndex ?? 0);
}

function escapeAttributeValue(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function scrollToCurrentHash() {
  const hash = window.location.hash.replace(/^#/, '');

  if (!hash) {
    return;
  }

  const escapedHash = escapeAttributeValue(hash);
  const target =
    document.getElementById(hash) ??
    document.querySelector<HTMLElement>(`a[name="${escapedHash}"], [name="${escapedHash}"]`);

  if (!target) {
    return;
  }

  const headerHeight = document.querySelector<HTMLElement>('.header-box')?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

  window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
}

type RenyiAnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  _hmt?: Array<unknown[]>;
};

function trackRenyiConversion(type: string, label: string) {
  const analyticsWindow = window as RenyiAnalyticsWindow;
  const payload = {
    event: 'renyi_conversion',
    conversion_type: type,
    conversion_label: label.slice(0, 160),
    page_path: window.location.pathname,
  };

  analyticsWindow.dataLayer?.push(payload);
  analyticsWindow._hmt?.push(['_trackEvent', 'conversion', type, payload.conversion_label]);
}

function getRenyiConversionFromClick(event: MouseEvent) {
  const target = event.target instanceof Element ? event.target : null;
  const link = target?.closest<HTMLAnchorElement>('a');
  const href = link?.href || '';
  const label = link?.innerText.trim() || link?.getAttribute('aria-label') || href;

  if (/https?:\/\/(?:api\.)?whatsapp\.com|https?:\/\/wa\.me/i.test(href)) return ['whatsapp', label] as const;
  if (href.startsWith('tel:')) return ['phone', label] as const;
  if (href.startsWith('mailto:')) return ['email', label] as const;
  if (link?.classList.contains('go-cases')) return ['case_cta', label] as const;
  if (link?.classList.contains('go-inquiry') || link?.hash === '#a2') return ['inquiry_cta', label] as const;
  if (target?.closest('img[src*="wechat"], img[src*="weixin"], img[src*="wx."]')) return ['wechat', label] as const;
  return null;
}

export function SiteRuntime() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  useEffect(() => {
    let cancelled = false;
    const siteWindow = window as SiteWindow;

    const boot = async () => {
      patchRenyiMirror();

      if (siteWindow.__ytxySiteScriptsLoaded) {
        refreshSiteScripts();
        return;
      }

      for (const src of SITE_SCRIPTS) {
        if (cancelled) {
          return;
        }

        await loadScript(src);
      }

      siteWindow.__ytxySiteScriptsLoaded = true;
      patchRenyiMirror();
      refreshSiteScripts();
      window.setTimeout(scrollToCurrentHash, 0);
    };

    boot().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const siteWindow = window as SiteWindow;

    if (!siteWindow.__ytxySiteScriptsLoaded) {
      return;
    }

    const timer = window.setTimeout(() => {
      patchRenyiMirror();
      refreshSiteScripts();
      scrollToCurrentHash();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('hashchange', scrollToCurrentHash);

    return () => {
      window.removeEventListener('hashchange', scrollToCurrentHash);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const conversion = getRenyiConversionFromClick(event);
      if (conversion) trackRenyiConversion(conversion[0], conversion[1]);
    };
    const handleSubmit = (event: SubmitEvent) => {
      if (event.target instanceof HTMLFormElement && event.target.matches('.wpcf7-form')) {
        trackRenyiConversion('form_submit', event.target.action || window.location.href);
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('submit', handleSubmit, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('submit', handleSubmit, true);
    };
  }, []);

  return null;
}
