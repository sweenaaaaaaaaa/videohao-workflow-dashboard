import { sitePages, type SitePageData } from '@/data/site-pages.generated';
import { patchRenyiAboutHtml } from '@/lib/renyi-about-content';
import { patchRenyiHomeHtml } from '@/lib/renyi-home-content';
import {
  createRenyiLegalPageData,
  patchRenyiLegalFooterLinksHtml,
  patchRenyiLegalPageHtml,
} from '@/lib/renyi-legal-pages';
import {
  RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE,
  RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE,
  RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE,
  RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE,
  RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE,
  RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE,
  RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE,
  RENYI_HIGH_TECH_CERTIFICATE_IMAGE,
  RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE,
  RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE,
  RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE,
  RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE,
  RENYI_ISO9001_CERTIFICATE_CN_IMAGE,
  RENYI_ISO9001_CERTIFICATE_IMAGE,
  RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE,
  RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE,
  RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE,
  RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE,
  RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE,
  RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE,
  RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE,
  RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE,
  RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE,
  RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE,
  RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE,
  RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE,
  RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE,
  RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE,
  RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE,
  RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE,
  RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE,
  RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE,
  RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE,
  patchRenyiNewsPageHtml,
  patchRenyiNewsPageTitle,
} from '@/lib/renyi-news-pages';

export type RenyiLocale = 'zh' | 'en' | 'ru' | 'es';

export const RENYI_COMPANY_NAME = '长沙仁毅机械制造有限公司';
export const RENYI_COPYRIGHT_TEXT = '版权所有：长沙仁毅机械有限公司';
export const RENYI_ICP_RECORD = '湘ICP备18004704号-1';
export const RENYI_ICP_URL = 'https://beian.miit.gov.cn/';
export const RENYI_PROMO_VIDEO_VERSION = '20260601-drone-opening';
export const RENYI_PROMO_VIDEO_PATH = `/renyi/renyi-banner-zh.mp4?v=${RENYI_PROMO_VIDEO_VERSION}`;
export const RENYI_PROMO_VIDEO_POSTER_IMAGE =
  '/renyi/renyi-banner-poster-zh-1920x832.jpg?v=20260603-faststart';
export const DEFAULT_SITE_TITLE = `${RENYI_COMPANY_NAME} - 官网`;
export const RENYI_SITE_ORIGIN = 'https://csrenyi.com';
const RENYI_HTML_LANGS: Record<RenyiLocale, string> = {
  zh: 'zh-CN',
  en: 'en',
  ru: 'ru',
  es: 'es',
};
export const RENYI_CULTURE_BANNER_IMAGES: Record<RenyiLocale, string> = {
  zh: '/renyi/renyi-banner-culture-zh-1920x832.png',
  en: '/renyi/renyi-banner-culture-en-1920x832.png',
  ru: '/renyi/renyi-banner-culture-ru-1920x832.png',
  es: '/renyi/renyi-banner-culture-es-1920x832.png',
};
export const RENYI_ABOUT_MENU_BACKGROUND_IMAGE = '/renyi/renyi-about-menu-bg.png';
export const RENYI_PRODUCT_MENU_BACKGROUND_IMAGE = '/renyi/renyi-product-menu-bg-raise-boring-site.png';
export const RENYI_JOIN_MENU_BACKGROUND_IMAGE = '/renyi/renyi-join-menu-bg-imagegen.jpg?v=20260518-dsc00060-v6';
export const RENYI_CONTACT_MENU_BACKGROUND_IMAGE = '/renyi/renyi-contact-menu-bg-imagegen.jpg?v=20260518-no-people';
export const RENYI_CONTACT_MENU_BACKGROUND_OVERLAY =
  'linear-gradient(90deg, rgba(255, 255, 255, 0.99) 0%, rgba(255, 255, 255, 0.99) 34%, rgba(255, 255, 255, 0.96) 46%, rgba(255, 255, 255, 0.82) 58%, rgba(255, 255, 255, 0.54) 70%, rgba(255, 255, 255, 0.22) 82%, rgba(255, 255, 255, 0) 92%)';
export const RENYI_CONTACT_MENU_BACKGROUND_CSS = `${RENYI_CONTACT_MENU_BACKGROUND_OVERLAY}, url(${RENYI_CONTACT_MENU_BACKGROUND_IMAGE})`;
export const RENYI_CONTACT_PAGE_BANNER_IMAGE = '/renyi/renyi-contact-page-banner-imagegen.png?v=20260518-industrial';
export const RENYI_JOIN_PAGE_BANNER_IMAGE = '/renyi/renyi-join-page-banner-imagegen.jpg?v=20260518-imagegen-full';
export const RENYI_JOIN_TRAINING_MODE_IMAGE = '/renyi/renyi-join-training-mode-imagegen.jpg?v=20260518-imagegen';
export const RENYI_JOIN_PRODUCTION_PRACTICE_IMAGE = '/renyi/renyi-join-production-practice-imagegen.jpg?v=20260518-imagegen';
export const RENYI_RAISE_BORING_CATEGORY_BANNER_IMAGE = '/renyi/raise-boring-category-banner.png?v=20260509-full';
export const RENYI_WHATSAPP_QR_IMAGE = '/renyi/renyi-whatsapp-qr.png';
export const RENYI_WHATSAPP_PHONE = '8613250789622';
export const RENYI_WHATSAPP_DISPLAY_PHONE = '+86 132 5078 9622';
export const RENYI_WHATSAPP_URL = `https://wa.me/${RENYI_WHATSAPP_PHONE}`;
const RENYI_LEGACY_FOOTER_QR_IMAGES = [
  'https://www.ytxingye.com/wp-content/themes/phoenix/static/images/dy.jpg',
  'https://www.ytxingye.com/wp-content/themes/phoenix/static/images/wx.jpg',
] as const;
const RENYI_LEGACY_ASSET_URL_PATTERN =
  /https?:\/\/(?:www|en|ru|es)\.ytxingye\.com[^\s"'<>)]*\.(?:png|jpe?g|gif|mp4|webp|svg|pdf|css|woff2?|ttf|eot)(?:\?[^\s"'<>)]*)?/gi;

function hashRenyiLegacyAssetUrl(value: string) {
  let hash = 5381;

  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
  }

  return (hash >>> 0).toString(36);
}

const RENYI_LEGACY_ASSET_PATH_ALIASES: Record<string, string> = {
  '/legacy-assets/ytxingye-en9kdn.mp4': '/legacy-assets/ytxingye-178spc7.mp4',
  '/legacy-assets/ytxingye-p6i8ae.mp4': '/legacy-assets/ytxingye-178spc7.mp4',
  '/legacy-assets/ytxingye-1ye7e23.jpg': '/legacy-assets/ytxingye-1iyufgq.jpg',
  '/legacy-assets/ytxingye-5g3yhm.jpg': '/legacy-assets/ytxingye-1iyufgq.jpg',
  '/legacy-assets/ytxingye-enpnhy.jpg': '/legacy-assets/ytxingye-1iyufgq.jpg',
  '/legacy-assets/ytxingye-1kvdlmm.gif': '/legacy-assets/ytxingye-16dg51r.gif',
  '/legacy-assets/ytxingye-1nrl677.gif': '/legacy-assets/ytxingye-16dg51r.gif',
  '/legacy-assets/ytxingye-krkba7.gif': '/legacy-assets/ytxingye-16dg51r.gif',
  '/legacy-assets/ytxingye-1njppeh.jpg': '/legacy-assets/ytxingye-124h1r9.jpg',
  '/legacy-assets/ytxingye-5se46t.jpg': '/legacy-assets/ytxingye-124h1r9.jpg',
  '/legacy-assets/ytxingye-rpk8ec.jpg': '/legacy-assets/ytxingye-124h1r9.jpg',
  '/legacy-assets/ytxingye-15h3jn8.png': '/legacy-assets/ytxingye-13wi6yw.png',
  '/legacy-assets/ytxingye-1lbb44k.png': '/legacy-assets/ytxingye-13wi6yw.png',
  '/legacy-assets/ytxingye-15f0p11.png': '/legacy-assets/ytxingye-13x647d.png',
  '/legacy-assets/ytxingye-1l989id.png': '/legacy-assets/ytxingye-13x647d.png',
  '/legacy-assets/ytxingye-2vf8d0.png': '/legacy-assets/ytxingye-13x647d.png',
  '/legacy-assets/ytxingye-1s78e4b.png': '/legacy-assets/ytxingye-1jp2e3v.png',
  '/legacy-assets/ytxingye-8vumzb.png': '/legacy-assets/ytxingye-1jp2e3v.png',
  '/legacy-assets/ytxingye-1mf2p8x.png': '/legacy-assets/ytxingye-1jtte4h.png',
  '/legacy-assets/ytxingye-1w4qt4t.png': '/legacy-assets/ytxingye-1jtte4h.png',
  '/legacy-assets/ytxingye-5wvie8.png': '/legacy-assets/ytxingye-1jtte4h.png',
  '/legacy-assets/ytxingye-2nqv6e.png': '/legacy-assets/ytxingye-1p2bpsn.png',
  '/legacy-assets/ytxingye-2scve.png': '/legacy-assets/ytxingye-1p2bpsn.png',
  '/legacy-assets/ytxingye-yoyime.png': '/legacy-assets/ytxingye-1p2bpsn.png',
};

function getRenyiLegacyAssetLocalPath(value: string) {
  try {
    const url = new URL(value.replace(/&amp;/g, '&'));
    const extension = url.pathname.match(/\.(png|jpe?g|gif|mp4|webp|svg|pdf|css|woff2?|ttf|eot)$/i)?.[0]?.toLowerCase();

    if (!extension || !/(^|\.)ytxingye\.com$/.test(url.hostname)) {
      return value;
    }

    url.hash = '';

    const localPath = `/legacy-assets/ytxingye-${hashRenyiLegacyAssetUrl(url.toString())}${extension}`;

    return RENYI_LEGACY_ASSET_PATH_ALIASES[localPath] ?? localPath;
  } catch {
    return value;
  }
}

function localizeRenyiLegacyAssetUrlsHtml(html: string) {
  const withoutLegacySrcsets = html.replace(/\s+srcset=(["'])[^"']*ytxingye\.com[^"']*\1/gi, '');
  const withoutLegacyEmails = withoutLegacySrcsets.replace(/[A-Z0-9._%+-]+@ytxingye\.com/gi, 'info@csrenyi.com');
  const normalizedLegacyUrls = withoutLegacyEmails.replace(
    /(https?:\/\/(?:www|en|ru|es)\.ytxingye\.com)\s+(\/)/gi,
    '$1$2',
  );

  return normalizedLegacyUrls.replace(RENYI_LEGACY_ASSET_URL_PATTERN, (url) => getRenyiLegacyAssetLocalPath(url));
}
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
export const RENYI_QUICK_NAV_COPY: Record<
  RenyiLocale,
  {
    items: Array<{ href: string; title: string; text: string }>;
    contactTitle: string;
    contactLines: string[];
  }
> = {
  zh: {
    items: [
      { href: '/jiaruwomen/', title: '加入仁毅', text: '在天井钻机、油缸与专用设备制造一线，和团队一起成长。' },
      { href: '/category/renyixinwen/', title: '仁毅动态', text: '关注产品研发、质量检测、项目交付与企业资讯。' },
      { href: '/lianxiwomen/', title: '合作咨询', text: '围绕矿山与工程设备需求，提供方案沟通和交付支持。' },
      { href: '/fuwuzhichi/', title: '服务支持', text: '以技术、生产、检测和售后协同，保障可靠交付。' },
    ],
    contactTitle: '联系咨询：',
    contactLines: ['总机：0731-84033881', '营销中心：0731-84033872', `WhatsApp：${RENYI_WHATSAPP_DISPLAY_PHONE}`],
  },
  en: {
    items: [
      { href: '/jiaruwomen/', title: 'Join Renyi', text: 'Grow with a team focused on raise boring rigs, cylinders and custom equipment.' },
      { href: '/en/category/renyixinwen/', title: 'Renyi Updates', text: 'Follow product R&D, quality testing, project delivery and company news.' },
      { href: '/lianxiwomen/', title: 'Cooperation', text: 'Discuss mining and engineering equipment needs from proposal to delivery.' },
      { href: '/fuwuzhichi/', title: 'Service Support', text: 'Coordinate engineering, production, inspection and after-sales for reliable delivery.' },
    ],
    contactTitle: 'Contact:',
    contactLines: ['Main switchboard: 0731-84033881', 'Marketing center: 0731-84033872', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
  },
  ru: {
    items: [
      { href: '/jiaruwomen/', title: 'Присоединиться к Renyi', text: 'Развивайтесь вместе с командой оборудования, цилиндров и спецтехники.' },
      { href: '/ru/category/renyixinwen/', title: 'Новости Renyi', text: 'Следите за разработками, контролем качества, поставками и новостями компании.' },
      { href: '/lianxiwomen/', title: 'Сотрудничество', text: 'Обсудим потребности горного и инженерного оборудования от решения до поставки.' },
      { href: '/fuwuzhichi/', title: 'Сервисная поддержка', text: 'Инженерия, производство, контроль и сервис работают на надежную поставку.' },
    ],
    contactTitle: 'Контакты:',
    contactLines: ['Главный телефон: 0731-84033881', 'Маркетинговый центр: 0731-84033872', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
  },
  es: {
    items: [
      { href: '/jiaruwomen/', title: 'Únete a Renyi', text: 'Crece con un equipo de equipos raise boring, cilindros y maquinaria especial.' },
      { href: '/es/category/renyixinwen/', title: 'Noticias Renyi', text: 'Sigue I+D de productos, control de calidad, entregas y novedades de la empresa.' },
      { href: '/lianxiwomen/', title: 'Cooperación', text: 'Hablemos de equipos para minería e ingeniería, desde propuesta hasta entrega.' },
      { href: '/fuwuzhichi/', title: 'Soporte de servicio', text: 'Coordinamos ingeniería, producción, inspección y posventa para entregar con fiabilidad.' },
    ],
    contactTitle: 'Contacto:',
    contactLines: ['Central: 0731-84033881', 'Centro de marketing: 0731-84033872', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
  },
};
export const RENYI_CONTACT_PAGE_COPY: Record<
  RenyiLocale,
  {
    sectionTitle: string;
    headline: string;
    subtitle: string;
    cards: Array<{ title: string; lines: string[] }>;
  }
> = {
  zh: {
    sectionTitle: '联系我们',
    headline: '矿山与工程专用设备制造商',
    subtitle: 'Mining and engineering dedicated equipment manufacturer',
    cards: [
      {
        title: '联系电话',
        lines: ['总机：0731-84033881', '招聘电话：+86 139 0848 9376', '营销中心：0731-84033872', '销售经理：+86 139 0848 9376', `WhatsApp：${RENYI_WHATSAPP_DISPLAY_PHONE}`],
      },
      {
        title: '联系邮箱',
        lines: ['公司邮箱：info@csrenyi.com', '业务咨询邮箱：info@csrenyi.com', '售后服务邮箱：info@csrenyi.com'],
      },
      {
        title: '公司地址',
        lines: ['地 址：中国湖南长沙经济技术开发区漓湘路98号', '邮 编：410100'],
      },
    ],
  },
  en: {
    sectionTitle: 'Contact Us',
    headline: 'Mining and Engineering Equipment Manufacturer',
    subtitle: 'Specialized machinery for demanding worksites',
    cards: [
      {
        title: 'Tel',
        lines: ['Main switchboard: 0731-84033881', 'Recruitment phone: +86 139 0848 9376', 'Marketing center: 0731-84033872', 'Sales manager: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
      },
      {
        title: 'E-mail',
        lines: ['Company email: info@csrenyi.com', 'Business inquiry: info@csrenyi.com', 'After-sales service: info@csrenyi.com'],
      },
      {
        title: 'Address',
        lines: ['Address: No. 98 Lixiang Road, Changsha Economic and Technological Development Zone, Hunan, China', 'Postcode: 410100'],
      },
    ],
  },
  ru: {
    sectionTitle: 'Контакты',
    headline: 'Производитель оборудования для горных и инженерных работ',
    subtitle: 'Специализированное оборудование для сложных условий',
    cards: [
      {
        title: 'Телефон',
        lines: ['Главный телефон: 0731-84033881', 'Отдел кадров: +86 139 0848 9376', 'Маркетинговый центр: 0731-84033872', 'Менеджер по продажам: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
      },
      {
        title: 'Эл. почта',
        lines: ['Почта компании: info@csrenyi.com', 'Бизнес-запросы: info@csrenyi.com', 'Послепродажное обслуживание: info@csrenyi.com'],
      },
      {
        title: 'Адрес',
        lines: ['Адрес: Китай, провинция Хунань, зона экономического и технологического развития г. Чанша, улица Лисян, № 98', 'Почтовый индекс: 410100'],
      },
    ],
  },
  es: {
    sectionTitle: 'Contacto',
    headline: 'Fabricante de equipos para minería e ingeniería',
    subtitle: 'Maquinaria especializada para entornos exigentes',
    cards: [
      {
        title: 'Teléfono',
        lines: ['Central: 0731-84033881', 'Teléfono de contratación: +86 139 0848 9376', 'Centro de marketing: 0731-84033872', 'Gerente de ventas: +86 139 0848 9376', `WhatsApp: ${RENYI_WHATSAPP_DISPLAY_PHONE}`],
      },
      {
        title: 'E-mail',
        lines: ['Correo de empresa: info@csrenyi.com', 'Consulta comercial: info@csrenyi.com', 'Servicio postventa: info@csrenyi.com'],
      },
      {
        title: 'Dirección',
        lines: ['Dirección: No. 98, Lixiang Road, Zona de Desarrollo Económico y Tecnológico de Changsha, Hunan, China', 'Código postal: 410100'],
      },
    ],
  },
};
const RENYI_FOOTER_CONTACTS: Record<RenyiLocale, { title: string; items: string[] }> = {
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
const RENYI_VIDEO_FALLBACK_TEXT: Record<RenyiLocale, string> = {
  zh: '您的浏览器不支持 video 标签。',
  en: 'Your browser does not support the video tag.',
  ru: 'Ваш браузер не поддерживает тег video.',
  es: 'Su navegador no admite la etiqueta de video.',
};
const RENYI_RAISE_BORING_BANNER_TEXT: Record<RenyiLocale, { title: string; subtitle?: string }> = {
  zh: { title: '天井钻机系列', subtitle: 'RAISE BORING MACHINERY SERIES' },
  en: { title: 'Raise Boring Machinery Series' },
  ru: { title: 'Серия установок для восстающих выработок' },
  es: { title: 'Serie de equipos raise boring' },
};
const RENYI_RAISE_BORING_CATEGORY_PATHS = [
  '/zuanjixilie/',
  '/en/zuanjixilie/',
  '/ru/zuanjixilie/',
  '/es/zuanjixilie/',
  '/pro_category/chanyunjixilie/',
  '/en/pro_category/chanyunjixilie/',
  '/ru/pro_category/chanyunjixilie/',
  '/es/pro_category/chanyunjixilie/',
];
const RENYI_RAIL_RAISE_BORING_PRODUCT_PATHS = [
  '/zuanji-01/',
  '/en/zuanji-01/',
  '/ru/zuanji-01/',
  '/es/zuanji-01/',
  '/pro/wj-06/',
  '/en/pro/wj-06/',
  '/ru/pro/wj-06/',
  '/es/pro/wj-06/',
];
const RENYI_RAIL_RAISE_BORING_CARD_IMAGE = '/renyi/product-rail-raise-boring-rig-imagegen-main-rig.jpg?v=20260510b';
const RENYI_RAIL_RAISE_BORING_PRODUCT_IMAGES = [
  '/renyi/product-rail-raise-boring-rig-imagegen-main-rig.jpg?v=20260510b',
  '/renyi/product-rail-raise-boring-rig-imagegen-pump-station.jpg?v=20260510b',
  '/renyi/product-rail-raise-boring-rig-imagegen-operating-console.jpg?v=20260510b',
  '/renyi/product-rail-raise-boring-rig-imagegen-workshop-rig.jpg?v=20260510b',
  '/renyi/product-rail-raise-boring-rig-imagegen-power-module.jpg?v=20260510b',
];
const RENYI_RAIL_RAISE_BORING_TABLE_SECTIONS = [
  {
    key: 'main',
    rows: [
      { key: 'speed', values: ['扩孔：0～15<br>钻孔：0～30', '扩孔：0～13<br>钻孔：0～27', '扩孔：8～9<br>钻孔：22～25'] },
      { key: 'torque', values: ['扩孔：63.4<br>钻孔：31.7', '扩孔：104<br>钻孔：52', '扩孔：143<br>钻孔：63'] },
      { key: 'thrust', values: ['640', '1406', '1406'] },
      { key: 'pull', values: ['1750', '2532', '2532'] },
      { key: 'pilotDiameter', values: ['250', '250/280', '280/311'] },
      { key: 'depth', values: ['300', '400', '250'] },
      { key: 'rodDiameter', values: ['214(细牙)', '214（粗牙，加厚）或254(细牙)', '254（粗牙，加厚）'] },
      { key: 'reamingDiameter', values: ['1500', '2000', '3000'] },
      { key: 'swingAngle', values: ['60～90', '60～90', '60～90'] },
      { key: 'transportSize', values: ['2666×1244×1545', '3020×1420×2000', '3020×1420×2000'] },
      { key: 'overallSize', values: ['3564×2835×（3450～3750）', '3450×（1800+1274）×（3900～4200）', '3450×（1800+1274）×（3900～4200）'] },
      { key: 'noise', values: ['≤90', '≤90', '≤90'] },
      { key: 'weight', values: ['8500', '10500', '12500'] },
      { key: 'gauge', values: ['600/762/900可调', '600/762/900可调', '600/762/900可调'] },
    ],
  },
  {
    key: 'pump',
    rows: [
      { key: 'pressure', values: ['副泵系统：28<br>主泵系统：28', '副泵系统：28<br>主泵系统：28', '副泵系统：28<br>主泵系统：28'] },
      { key: 'flow', values: ['副泵系统：40<br>主泵系统：220', '副泵系统：40<br>主泵系统：320', '副泵系统：40<br>主泵系统：360'] },
      { key: 'power', values: ['副泵系统：11<br>主泵系统：75', '副泵系统：11<br>主泵系统：132', '副泵系统：11<br>主泵系统：132'] },
      { key: 'voltage', values: ['380/660可选', '380/660可选', '380/660可选'] },
      { key: 'tank', values: ['1100', '1100', '1100'] },
      { key: 'pumpSize', values: ['2910×1300×1600', '2910×1300×1600', '2910×1300×1600'] },
      { key: 'pumpWeight', values: ['3500', '3500', '3500'] },
    ],
  },
  {
    key: 'console',
    rows: [
      { key: 'consoleSize', values: ['630×490×1080', '630×490×1080', '630×490×1000'] },
      { key: 'consoleWeight', values: ['40', '40', '40'] },
    ],
  },
];
const RENYI_RAIL_RAISE_BORING_PRODUCT_COPY: Record<
  RenyiLocale,
  {
    category: string;
    title: string;
    inquiry: string;
    imageAlts: string[];
    topSpecs: Array<[string, string]>;
    tabs: [string, string, string];
    introTitle: string;
    introParagraphs: string[];
    advantagesTitle: string;
    advantages: string[];
    specsTitle: string;
    tableSections: Record<string, string>;
    tableRows: Record<string, string>;
  }
> = {
  zh: {
    category: '天井钻机系列',
    title: '有轨式天（反）井钻机',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的有轨式天（反）井钻机主机，黄色机架与灰色液压结构清晰展示',
      'Image Gen精修的有轨式天井钻机液压泵站和电控柜，工业黄色机身与控制面板清晰可见',
      'Image Gen精修的AT系列天井钻机操作台，液压接口、线缆和金属机身细节清晰',
      'Image Gen精修的有轨式天（反）井钻机整机工厂视角，展示主机、底座和液压组件',
      'Image Gen精修的有轨式天井钻机动力模块，电机、泵站、护栏和轨道底座清晰展示',
    ],
    topSpecs: [
      ['型号', 'AT1500 / AT2000 / AT3000'],
      ['扩孔直径', '1500 / 2000 / 3000 mm'],
      ['钻井深度', '300 / 400 / 250 m'],
      ['扩孔拉力', '1750 / 2532 / 2532 kN'],
      ['轨距', '600 / 762 / 900 可调'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '有轨式天（反）井钻机采用向下钻导向孔、向上扩孔、全断面切割、直接成井的钻进方式，天井可直接钻通，扩孔刀头从上水平取出。',
      '钻机采用全液压驱动，各类钻进参数可无级调整，抗冲击性好，工作平稳，结构紧凑，安装简单方便。与普通凿岩爆破法相比，天井钻进具有效率高、成井质量好、操作安全、劳动强度低、钻孔偏斜率小等优点。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '安全可靠：全机械化作业，支持远程遥控操作，减少人员进入工作面的风险。',
      '适应性强：轴压、转速和扭矩等钻进参数可根据岩石情况和钻进深度无级调整。',
      '成井质量好：滚刀机械破岩，井壁光滑，偏斜率小，成井速度高。',
      '施工成本低：配备接卸杆机械手，可从地面直接提取钻杆送至钻机轴线，降低劳动强度与人工成本。',
      '应用广泛：适用于地下矿山通风井、充填井、管道井或溜井施工，也可用于水电、冶金、地铁、交通、人防、军工等地下工程竖井施工。',
    ],
    specsTitle: '技术参数',
    tableSections: { main: '主机', pump: '泵站', console: '操作台' },
    tableRows: {
      speed: '额定转速 (r/min)',
      torque: '额定扭矩 (kN.m)',
      thrust: '钻进推力 (kN)',
      pull: '扩孔拉力 (kN)',
      pilotDiameter: '钻孔直径 (mm)',
      depth: '钻井深度 (m)',
      rodDiameter: '钻杆直径 (mm)',
      reamingDiameter: '扩孔直径 (mm)',
      swingAngle: '钻机摆角 (°)',
      transportSize: '运输尺寸(长×宽×高) (mm)',
      overallSize: '外形尺寸(长×宽×高) (mm)',
      noise: '噪声 dB(A)',
      weight: '质量 (kg)',
      gauge: '轨距 (mm)',
      pressure: '额定压力 (MPa)',
      flow: '额定流量 (L/min)',
      power: '电动机额定功率 (kW)',
      voltage: '额定电压 (V)',
      tank: '油箱有效容积 (L)',
      pumpSize: '外形尺寸(长×宽×高) (mm)',
      pumpWeight: '机重 (kg)',
      consoleSize: '外形尺寸(长×宽×高) (mm)',
      consoleWeight: '机重 (kg)',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Rail-Mounted Raise Boring Rig',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined rail-mounted raise boring rig main machine with clear yellow frame and gray hydraulic structure',
      'Image Gen refined hydraulic pump station and electric control cabinet for the rail-mounted raise boring rig',
      'Image Gen refined AT-series raise boring rig operating console with visible hydraulic ports and cable details',
      'Image Gen refined full workshop view of the rail-mounted raise boring rig with mast, base, and hydraulic components',
      'Image Gen refined power module for the rail-mounted raise boring rig showing motor, pump station, guardrail, and rail base',
    ],
    topSpecs: [
      ['Models', 'AT1500 / AT2000 / AT3000'],
      ['Reaming diameter', '1500 / 2000 / 3000 mm'],
      ['Shaft depth', '300 / 400 / 250 m'],
      ['Reaming pull force', '1750 / 2532 / 2532 kN'],
      ['Rail gauge', '600 / 762 / 900 adjustable'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The rail-mounted raise boring rig drills a pilot hole downward and then reams upward to complete a full-face shaft directly, with the reaming cutterhead removed from the upper level.',
      'The rig uses full hydraulic drive. Drilling parameters can be adjusted steplessly, delivering strong impact resistance, stable operation, compact structure, and convenient installation. Compared with conventional drill-and-blast methods, raise boring offers higher productivity, better shaft quality, safer operation, lower labor intensity, and smaller borehole deviation.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Safe and reliable: mechanized operation with remote control keeps operators away from hazardous faces.',
      'Strong adaptability: thrust, rotation speed, torque, and other drilling parameters can be adjusted according to rock conditions and drilling depth.',
      'High shaft quality: mechanical rock breaking by cutters forms smooth walls with low deviation and fast advance.',
      'Lower construction cost: the rod handling manipulator feeds drill rods from ground level to the rig axis, reducing labor intensity and manpower cost.',
      'Wide application: suitable for ventilation shafts, filling shafts, pipe shafts, and ore passes in underground mines, as well as hydropower, metallurgy, metro, transportation, civil-defense, and defense underground projects.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { main: 'Main Machine', pump: 'Pump Station', console: 'Operating Console' },
    tableRows: {
      speed: 'Rated rotation speed (r/min)',
      torque: 'Rated torque (kN.m)',
      thrust: 'Drilling thrust (kN)',
      pull: 'Reaming pull force (kN)',
      pilotDiameter: 'Pilot hole diameter (mm)',
      depth: 'Shaft depth (m)',
      rodDiameter: 'Drill rod diameter (mm)',
      reamingDiameter: 'Reaming diameter (mm)',
      swingAngle: 'Rig swing angle (°)',
      transportSize: 'Transport dimensions (L×W×H, mm)',
      overallSize: 'Overall dimensions (L×W×H, mm)',
      noise: 'Noise dB(A)',
      weight: 'Weight (kg)',
      gauge: 'Rail gauge (mm)',
      pressure: 'Rated pressure (MPa)',
      flow: 'Rated flow (L/min)',
      power: 'Motor rated power (kW)',
      voltage: 'Rated voltage (V)',
      tank: 'Effective oil tank volume (L)',
      pumpSize: 'Overall dimensions (L×W×H, mm)',
      pumpWeight: 'Weight (kg)',
      consoleSize: 'Overall dimensions (L×W×H, mm)',
      consoleWeight: 'Weight (kg)',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Рельсовая установка восстающего бурения',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: основная машина рельсовой установки восстающего бурения с четкой желтой рамой и серой гидравлической конструкцией',
      'Изображение Image Gen: гидравлическая насосная станция и электрический шкаф управления рельсовой установки восстающего бурения',
      'Изображение Image Gen: пульт управления AT-серии с гидравлическими разъемами и кабельными деталями',
      'Изображение Image Gen: общий вид рельсовой установки восстающего бурения в производственном цехе с мачтой, основанием и гидравликой',
      'Изображение Image Gen: силовой модуль рельсовой установки восстающего бурения с двигателем, насосной станцией, ограждением и рельсовым основанием',
    ],
    topSpecs: [
      ['Модели', 'AT1500 / AT2000 / AT3000'],
      ['Диаметр расширения', '1500 / 2000 / 3000 mm'],
      ['Глубина ствола', '300 / 400 / 250 m'],
      ['Усилие расширения', '1750 / 2532 / 2532 kN'],
      ['Колея', '600 / 762 / 900 регулируемая'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Рельсовая установка восстающего бурения сначала бурит направляющую скважину вниз, затем выполняет расширение вверх и формирует ствол полным сечением. Расширительная головка извлекается с верхнего горизонта.',
      'Установка имеет полностью гидравлический привод, плавную регулировку параметров бурения, хорошую ударостойкость, стабильную работу, компактную конструкцию и простую установку. По сравнению с традиционным буровзрывным способом технология обеспечивает более высокую производительность, лучшее качество ствола, безопасную эксплуатацию, меньшую трудоемкость и меньшее отклонение скважины.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Безопасность и надежность: механизированная работа и дистанционное управление снижают риск нахождения персонала в опасной зоне.',
      'Высокая адаптивность: осевое усилие, скорость вращения, крутящий момент и другие параметры регулируются под породу и глубину бурения.',
      'Качественное формирование ствола: механическое разрушение породы роликовыми резцами дает гладкие стенки, малое отклонение и высокую скорость проходки.',
      'Низкие затраты: манипулятор подачи штанг подает буровые штанги к оси установки с уровня площадки, снижая трудоемкость и стоимость работ.',
      'Широкое применение: вентиляционные, закладочные, трубные стволы и рудоспуски в подземных рудниках, а также гидроэнергетика, металлургия, метро, транспортные и другие подземные проекты.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { main: 'Основная машина', pump: 'Насосная станция', console: 'Пульт управления' },
    tableRows: {
      speed: 'Номинальная скорость вращения (r/min)',
      torque: 'Номинальный крутящий момент (kN.m)',
      thrust: 'Усилие подачи при бурении (kN)',
      pull: 'Усилие расширения (kN)',
      pilotDiameter: 'Диаметр пилотной скважины (mm)',
      depth: 'Глубина ствола (m)',
      rodDiameter: 'Диаметр буровой штанги (mm)',
      reamingDiameter: 'Диаметр расширения (mm)',
      swingAngle: 'Угол поворота установки (°)',
      transportSize: 'Транспортные размеры (Д×Ш×В, mm)',
      overallSize: 'Габаритные размеры (Д×Ш×В, mm)',
      noise: 'Шум dB(A)',
      weight: 'Масса (kg)',
      gauge: 'Колея (mm)',
      pressure: 'Номинальное давление (MPa)',
      flow: 'Номинальный расход (L/min)',
      power: 'Номинальная мощность двигателя (kW)',
      voltage: 'Номинальное напряжение (V)',
      tank: 'Полезный объем маслобака (L)',
      pumpSize: 'Габаритные размеры (Д×Ш×В, mm)',
      pumpWeight: 'Масса (kg)',
      consoleSize: 'Габаритные размеры (Д×Ш×В, mm)',
      consoleWeight: 'Масса (kg)',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Equipo raise boring sobre carriles',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen de la máquina principal raise boring sobre carriles con bastidor amarillo y estructura hidráulica gris',
      'Imagen refinada con Image Gen de la estación hidráulica y el gabinete de control eléctrico del equipo raise boring sobre carriles',
      'Imagen refinada con Image Gen de la consola de operación serie AT con puertos hidráulicos y detalles de cableado',
      'Imagen refinada con Image Gen del equipo raise boring sobre carriles completo en taller con mástil, base y componentes hidráulicos',
      'Imagen refinada con Image Gen del módulo de potencia para equipo raise boring sobre carriles con motor, estación de bombeo, barandilla y base ferroviaria',
    ],
    topSpecs: [
      ['Modelos', 'AT1500 / AT2000 / AT3000'],
      ['Diámetro de escariado', '1500 / 2000 / 3000 mm'],
      ['Profundidad del pozo', '300 / 400 / 250 m'],
      ['Fuerza de tracción de escariado', '1750 / 2532 / 2532 kN'],
      ['Ancho de vía', '600 / 762 / 900 ajustable'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'El equipo raise boring sobre carriles perfora primero un orificio piloto hacia abajo y luego escaria hacia arriba para formar directamente el pozo de sección completa. El cabezal de escariado se retira desde el nivel superior.',
      'El equipo adopta accionamiento hidráulico completo. Los parámetros de perforación se ajustan de forma continua, con buena resistencia al impacto, operación estable, estructura compacta e instalación sencilla. Frente al método convencional de perforación y voladura, ofrece mayor eficiencia, mejor calidad de pozo, operación más segura, menor intensidad laboral y menor desviación del taladro.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Seguro y confiable: operación mecanizada con control remoto para reducir la exposición del personal al frente de trabajo.',
      'Alta adaptabilidad: empuje, velocidad de rotación, par y otros parámetros se ajustan según la roca y la profundidad de perforación.',
      'Buena calidad del pozo: la rotura mecánica con cortadores produce paredes lisas, baja desviación y alta velocidad de avance.',
      'Menor costo de construcción: el manipulador de barras lleva las barras directamente al eje del equipo, reduciendo mano de obra e intensidad de trabajo.',
      'Amplia aplicación: pozos de ventilación, relleno, tuberías y chimeneas de mineral en minas subterráneas, además de hidroenergía, metalurgia, metro, transporte, defensa civil y otros proyectos subterráneos.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { main: 'Máquina principal', pump: 'Estación de bombeo', console: 'Consola de operación' },
    tableRows: {
      speed: 'Velocidad nominal de rotación (r/min)',
      torque: 'Par nominal (kN.m)',
      thrust: 'Empuje de perforación (kN)',
      pull: 'Fuerza de tracción de escariado (kN)',
      pilotDiameter: 'Diámetro del orificio piloto (mm)',
      depth: 'Profundidad del pozo (m)',
      rodDiameter: 'Diámetro de barra de perforación (mm)',
      reamingDiameter: 'Diámetro de escariado (mm)',
      swingAngle: 'Ángulo de oscilación del equipo (°)',
      transportSize: 'Dimensiones de transporte (L×A×H, mm)',
      overallSize: 'Dimensiones generales (L×A×H, mm)',
      noise: 'Ruido dB(A)',
      weight: 'Peso (kg)',
      gauge: 'Ancho de vía (mm)',
      pressure: 'Presión nominal (MPa)',
      flow: 'Caudal nominal (L/min)',
      power: 'Potencia nominal del motor (kW)',
      voltage: 'Tensión nominal (V)',
      tank: 'Volumen útil del tanque de aceite (L)',
      pumpSize: 'Dimensiones generales (L×A×H, mm)',
      pumpWeight: 'Peso (kg)',
      consoleSize: 'Dimensiones generales (L×A×H, mm)',
      consoleWeight: 'Peso (kg)',
    },
  },
};
type RenyiRaiseBoringTableSections = Array<{ key: string; rows: Array<{ key: string; values: string[] }> }>;
type RenyiRaiseBoringLocalizedTableSections = RenyiRaiseBoringTableSections | Record<RenyiLocale, RenyiRaiseBoringTableSections>;
type RenyiRaiseBoringProductCopy = (typeof RENYI_RAIL_RAISE_BORING_PRODUCT_COPY)[RenyiLocale];

const RENYI_TRACKLESS_RAISE_BORING_PRODUCT_PATHS = [
  '/zuanji-02/',
  '/en/zuanji-02/',
  '/ru/zuanji-02/',
  '/es/zuanji-02/',
  '/pro/wj-1/',
  '/en/pro/wj-1/',
  '/ru/pro/wj-1/',
  '/es/pro/wj-1/',
];
const RENYI_TRACKLESS_RAISE_BORING_CARD_IMAGE =
  '/renyi/product-trackless-raise-boring-rig-imagegen-main-rig.jpg?v=20260510c';
const RENYI_TRACKLESS_RAISE_BORING_PRODUCT_IMAGES = [
  '/renyi/product-trackless-raise-boring-rig-imagegen-main-rig.jpg?v=20260510c',
  '/renyi/product-trackless-raise-boring-rig-imagegen-transport-state.jpg?v=20260510c',
  '/renyi/product-trackless-raise-boring-rig-imagegen-operating-console.jpg?v=20260510c',
  '/renyi/product-trackless-raise-boring-rig-imagegen-power-module.jpg?v=20260510c',
  '/renyi/product-trackless-raise-boring-rig-imagegen-workshop-hero.jpg?v=20260510c',
];
const RENYI_TRACKLESS_RAISE_BORING_TABLE_SECTIONS: RenyiRaiseBoringTableSections = [
  {
    key: 'main',
    rows: [
      { key: 'speed', values: ['扩孔：0～15<br>钻孔：0～30', '扩孔：0～13<br>钻孔：0～27', '扩孔：8～9<br>钻孔：22～25'] },
      { key: 'torque', values: ['扩孔：63.4<br>钻孔：31.7', '扩孔：104<br>钻孔：52', '扩孔：143<br>钻孔：63'] },
      { key: 'thrust', values: ['640', '1406', '1406'] },
      { key: 'pull', values: ['1750', '2532', '2532'] },
      { key: 'pilotDiameter', values: ['250', '250/280', '280'] },
      { key: 'depth', values: ['300', '400', '250'] },
      { key: 'rodDiameter', values: ['214(细牙)', '214（粗牙，加厚）或254(细牙)', '254（粗牙，加厚）'] },
      { key: 'reamingDiameter', values: ['1500', '2000', '3000'] },
      { key: 'swingAngle', values: ['60～90', '60～90', '60～90'] },
      { key: 'transportSize', values: ['3500×1560×2000', '3950×1690×2120', '3950×1690×2120'] },
      { key: 'overallSize', values: ['3800×2835×（3450～3750）', '4200×（1800+1274）×（3900～4200）', '4200×（1800+1274）×（3900～4200）'] },
      { key: 'noise', values: ['≤90', '≤90', '≤90'] },
      { key: 'weight', values: ['8500', '10500', '12500'] },
      { key: 'groundClearance', values: ['300', '300', '300'] },
    ],
  },
  {
    key: 'pump',
    rows: [
      { key: 'pressure', values: ['副泵系统：28<br>主泵系统：28', '副泵系统：28<br>主泵系统：28', '副泵系统：28<br>主泵系统：28'] },
      { key: 'flow', values: ['副泵系统：40<br>主泵系统：220', '副泵系统：40<br>主泵系统：320', '副泵系统：40<br>主泵系统：360'] },
      { key: 'power', values: ['副泵系统：11<br>主泵系统：75', '副泵系统：11<br>主泵系统：132', '副泵系统：11<br>主泵系统：132'] },
      { key: 'voltage', values: ['380/660可选', '380/660可选', '380/660可选'] },
      { key: 'tank', values: ['1100', '1100', '1100'] },
      { key: 'pumpSize', values: ['3400×1560×1860', '3550×1690×1900', '3550×1690×1900'] },
      { key: 'pumpWeight', values: ['3500', '3500', '3500'] },
    ],
  },
  {
    key: 'console',
    rows: [
      { key: 'consoleSize', values: ['630×490×1080', '630×490×1080', '630×490×1000'] },
      { key: 'consoleWeight', values: ['40', '40', '40'] },
    ],
  },
];
const RENYI_TRACKLESS_RAISE_BORING_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '天井钻机系列',
    title: '无轨式天（反）井钻机',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的无轨式天（反）井钻机整机主图，黄色机身、灰色底盘和轮胎式移动结构清晰展示',
      'Image Gen精修的无轨式天井钻机收机转场状态，轮胎底盘、钻臂和液压管路清晰可见',
      'Image Gen精修的无轨式天井钻机操作台，按钮、压力表和操纵杆细节清晰',
      'Image Gen精修的无轨式天井钻机液压泵站与动力模块，电机、油箱和管路具有强工业质感',
      'Image Gen精修的无轨式天（反）井钻机车间工作视角，展示桅架、底盘、液压组件和重型结构',
    ],
    topSpecs: [
      ['型号', 'AT1500 / AT2000 / AT3000'],
      ['扩孔直径', '1500 / 2000 / 3000 mm'],
      ['钻井深度', '300 / 400 / 250 m'],
      ['扩孔拉力', '1750 / 2532 / 2532 kN'],
      ['离地高度', '300 mm'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '无轨式天（反）井钻机是长沙仁毅针对国内地下无轨矿山采矿工艺特点，在吸收原有轨轮式天井钻机技术优点的基础上研发设计的成套设备。',
      '该机型在保持天井钻机凿岩参数优势的同时，通过轮胎式无动力源行走结构解决转场运输问题，转弯半径小，行走灵活，安全性高，更适应无轨矿山的发展需求。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '安全可靠：全机械化作业，支持远程遥控操作，改善作业环境并降低人员进入工作面的风险。',
      '转场灵活：轮胎式无动力源行走结构可配合矿方铲运机转运，转弯半径小，适合无轨巷道条件。',
      '适应性强：轴压、转速、扭矩等钻进参数可根据岩石情况和钻进深度无级调整，抗冲击性好。',
      '效率与成井质量高：滚刀机械破岩，井壁光滑，偏斜率小，成井速度高。',
      '操作经济：液压传动与控制成熟，配套接卸杆机械手降低劳动强度和人工成本。',
      '应用广泛：适用于地下矿山通风井、充填井、管道井、溜井施工，也可用于水电、冶金、地铁、交通、人防、军工等地下工程竖井施工。',
    ],
    specsTitle: '技术参数',
    tableSections: { main: '主机', pump: '泵站', console: '操作台' },
    tableRows: {
      speed: '额定转速 (r/min)',
      torque: '额定扭矩 (kN.m)',
      thrust: '钻进推力 (kN)',
      pull: '扩孔拉力 (kN)',
      pilotDiameter: '钻孔直径 (mm)',
      depth: '钻井深度 (m)',
      rodDiameter: '钻杆直径 (mm)',
      reamingDiameter: '扩孔直径 (mm)',
      swingAngle: '钻机摆角 (°)',
      transportSize: '运输尺寸(长×宽×高) (mm)',
      overallSize: '外形尺寸(长×宽×高) (mm)',
      noise: '噪声 dB(A)',
      weight: '质量 (kg)',
      groundClearance: '离地高度 (mm)',
      pressure: '额定压力 (MPa)',
      flow: '额定流量 (L/min)',
      power: '电动机额定功率 (kW)',
      voltage: '额定电压 (V)',
      tank: '油箱有效容积 (L)',
      pumpSize: '外形尺寸(长×宽×高) (mm)',
      pumpWeight: '机重 (kg)',
      consoleSize: '外形尺寸(长×宽×高) (mm)',
      consoleWeight: '机重 (kg)',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Trackless Raise Boring Rig',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined main view of the trackless raise boring rig with yellow body, gray chassis, and wheel-mounted mobile structure',
      'Image Gen refined transport-state trackless raise boring rig with visible tires, folded mast, and hydraulic lines',
      'Image Gen refined operating console for the trackless raise boring rig with clear buttons, pressure gauges, and joysticks',
      'Image Gen refined hydraulic pump station and power module for the trackless raise boring rig with motor, oil tank, and pipework',
      'Image Gen refined workshop view of the trackless raise boring rig showing mast, chassis, hydraulic components, and heavy-duty structure',
    ],
    topSpecs: [
      ['Models', 'AT1500 / AT2000 / AT3000'],
      ['Reaming diameter', '1500 / 2000 / 3000 mm'],
      ['Shaft depth', '300 / 400 / 250 m'],
      ['Reaming pull force', '1750 / 2532 / 2532 kN'],
      ['Ground clearance', '300 mm'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The trackless raise boring rig is developed for the mining process of modern underground trackless mines, combining the technical strengths of Renyi rail-mounted and wheel-type raise boring equipment.',
      'While retaining the key drilling parameters of the AT raise boring series, the rig uses a wheel-mounted unpowered travel structure to simplify transfer between worksites. It offers a small turning radius, flexible movement, high safety, and better adaptation to trackless underground mine development.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Safe and reliable: mechanized operation with remote control improves the working environment and reduces exposure at the face.',
      'Flexible transfer: the wheel-mounted unpowered travel structure can be moved with mine loaders, giving a small turning radius in trackless roadways.',
      'Strong adaptability: thrust, rotation speed, torque, and other drilling parameters can be adjusted steplessly according to rock conditions and drilling depth.',
      'High efficiency and shaft quality: mechanical rock breaking by cutters creates smooth walls, low deviation, and fast shaft completion.',
      'Economic operation: mature hydraulic transmission and control plus a rod handling manipulator reduce labor intensity and manpower cost.',
      'Wide application: suitable for ventilation shafts, filling shafts, pipe shafts, and ore passes in underground mines, as well as hydropower, metallurgy, metro, transportation, civil-defense, and defense underground projects.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { main: 'Main Machine', pump: 'Pump Station', console: 'Operating Console' },
    tableRows: {
      speed: 'Rated rotation speed (r/min)',
      torque: 'Rated torque (kN.m)',
      thrust: 'Drilling thrust (kN)',
      pull: 'Reaming pull force (kN)',
      pilotDiameter: 'Pilot hole diameter (mm)',
      depth: 'Shaft depth (m)',
      rodDiameter: 'Drill rod diameter (mm)',
      reamingDiameter: 'Reaming diameter (mm)',
      swingAngle: 'Rig swing angle (°)',
      transportSize: 'Transport dimensions (L×W×H, mm)',
      overallSize: 'Overall dimensions (L×W×H, mm)',
      noise: 'Noise dB(A)',
      weight: 'Weight (kg)',
      groundClearance: 'Ground clearance (mm)',
      pressure: 'Rated pressure (MPa)',
      flow: 'Rated flow (L/min)',
      power: 'Motor rated power (kW)',
      voltage: 'Rated voltage (V)',
      tank: 'Effective oil tank volume (L)',
      pumpSize: 'Overall dimensions (L×W×H, mm)',
      pumpWeight: 'Weight (kg)',
      consoleSize: 'Overall dimensions (L×W×H, mm)',
      consoleWeight: 'Weight (kg)',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Безрельсовая установка восстающего бурения',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: основной вид безрельсовой установки восстающего бурения с желтым корпусом, серым шасси и колесной мобильной конструкцией',
      'Изображение Image Gen: безрельсовая установка восстающего бурения в транспортном положении с колесами, сложенной мачтой и гидролиниями',
      'Изображение Image Gen: пульт управления безрельсовой установкой восстающего бурения с кнопками, манометрами и джойстиками',
      'Изображение Image Gen: гидравлическая насосная станция и силовой модуль безрельсовой установки восстающего бурения с двигателем, маслобаком и трубопроводами',
      'Изображение Image Gen: производственный вид безрельсовой установки восстающего бурения с мачтой, шасси, гидравликой и тяжелой конструкцией',
    ],
    topSpecs: [
      ['Модели', 'AT1500 / AT2000 / AT3000'],
      ['Диаметр расширения', '1500 / 2000 / 3000 mm'],
      ['Глубина ствола', '300 / 400 / 250 m'],
      ['Усилие расширения', '1750 / 2532 / 2532 kN'],
      ['Дорожный просвет', '300 mm'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Безрельсовая установка восстающего бурения разработана для современных подземных безрельсовых рудников и объединяет технические преимущества рельсовых и колесных установок Renyi.',
      'Сохраняя ключевые параметры бурения серии AT, установка использует колесную безмоторную ходовую конструкцию для упрощения перемещения между участками. Она имеет малый радиус поворота, гибкое перемещение, высокую безопасность и лучше подходит для безрельсовых подземных выработок.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Безопасность и надежность: механизированная работа и дистанционное управление улучшают условия труда и снижают риск нахождения персонала в забое.',
      'Гибкое перемещение: колесная безмоторная ходовая конструкция может перемещаться с помощью шахтного погрузчика и подходит для безрельсовых штреков.',
      'Высокая адаптивность: осевое усилие, скорость вращения, крутящий момент и другие параметры плавно регулируются под породу и глубину бурения.',
      'Высокая эффективность и качество ствола: механическое разрушение породы резцами формирует гладкие стенки, малое отклонение и высокую скорость проходки.',
      'Экономичная эксплуатация: гидравлическая передача и манипулятор подачи штанг снижают трудоемкость и затраты на персонал.',
      'Широкое применение: вентиляционные, закладочные, трубные стволы и рудоспуски в подземных рудниках, а также гидроэнергетика, металлургия, метро, транспортные и другие подземные проекты.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { main: 'Основная машина', pump: 'Насосная станция', console: 'Пульт управления' },
    tableRows: {
      speed: 'Номинальная скорость вращения (r/min)',
      torque: 'Номинальный крутящий момент (kN.m)',
      thrust: 'Усилие подачи при бурении (kN)',
      pull: 'Усилие расширения (kN)',
      pilotDiameter: 'Диаметр пилотной скважины (mm)',
      depth: 'Глубина ствола (m)',
      rodDiameter: 'Диаметр буровой штанги (mm)',
      reamingDiameter: 'Диаметр расширения (mm)',
      swingAngle: 'Угол поворота установки (°)',
      transportSize: 'Транспортные размеры (Д×Ш×В, mm)',
      overallSize: 'Габаритные размеры (Д×Ш×В, mm)',
      noise: 'Шум dB(A)',
      weight: 'Масса (kg)',
      groundClearance: 'Дорожный просвет (mm)',
      pressure: 'Номинальное давление (MPa)',
      flow: 'Номинальный расход (L/min)',
      power: 'Номинальная мощность двигателя (kW)',
      voltage: 'Номинальное напряжение (V)',
      tank: 'Полезный объем маслобака (L)',
      pumpSize: 'Габаритные размеры (Д×Ш×В, mm)',
      pumpWeight: 'Масса (kg)',
      consoleSize: 'Габаритные размеры (Д×Ш×В, mm)',
      consoleWeight: 'Масса (kg)',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Equipo raise boring sin rieles',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen del equipo raise boring sin rieles con cuerpo amarillo, chasis gris y estructura móvil sobre neumáticos',
      'Imagen refinada con Image Gen del equipo raise boring sin rieles en posición de transporte con neumáticos, mástil plegado y líneas hidráulicas',
      'Imagen refinada con Image Gen de la consola de operación del equipo raise boring sin rieles con botones, manómetros y joysticks',
      'Imagen refinada con Image Gen de la estación hidráulica y módulo de potencia del equipo raise boring sin rieles con motor, tanque de aceite y tuberías',
      'Imagen refinada con Image Gen del equipo raise boring sin rieles en taller con mástil, chasis, componentes hidráulicos y estructura pesada',
    ],
    topSpecs: [
      ['Modelos', 'AT1500 / AT2000 / AT3000'],
      ['Diámetro de escariado', '1500 / 2000 / 3000 mm'],
      ['Profundidad del pozo', '300 / 400 / 250 m'],
      ['Fuerza de tracción de escariado', '1750 / 2532 / 2532 kN'],
      ['Distancia al suelo', '300 mm'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'El equipo raise boring sin rieles está desarrollado para los procesos de minería subterránea sin rieles, integrando las ventajas técnicas de los equipos sobre carriles y sobre ruedas de Renyi.',
      'Mantiene los parámetros clave de perforación de la serie AT y adopta una estructura de desplazamiento sobre neumáticos sin fuente motriz propia para simplificar el traslado entre frentes. Ofrece radio de giro reducido, movimiento flexible, alta seguridad y mejor adaptación a minas subterráneas sin rieles.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Seguro y confiable: operación mecanizada con control remoto para mejorar el entorno de trabajo y reducir la exposición del personal al frente.',
      'Traslado flexible: la estructura sobre neumáticos sin motorización propia puede moverse con cargadores de mina y es adecuada para galerías sin rieles.',
      'Alta adaptabilidad: empuje, velocidad de rotación, par y otros parámetros se ajustan de forma continua según la roca y la profundidad de perforación.',
      'Alta eficiencia y calidad del pozo: la rotura mecánica con cortadores produce paredes lisas, baja desviación y rápida formación del pozo.',
      'Operación económica: transmisión hidráulica madura y manipulador de barras reducen la intensidad de trabajo y el costo de mano de obra.',
      'Amplia aplicación: pozos de ventilación, relleno, tuberías y chimeneas de mineral en minas subterráneas, además de hidroenergía, metalurgia, metro, transporte, defensa civil y otros proyectos subterráneos.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { main: 'Máquina principal', pump: 'Estación de bombeo', console: 'Consola de operación' },
    tableRows: {
      speed: 'Velocidad nominal de rotación (r/min)',
      torque: 'Par nominal (kN.m)',
      thrust: 'Empuje de perforación (kN)',
      pull: 'Fuerza de tracción de escariado (kN)',
      pilotDiameter: 'Diámetro del orificio piloto (mm)',
      depth: 'Profundidad del pozo (m)',
      rodDiameter: 'Diámetro de barra de perforación (mm)',
      reamingDiameter: 'Diámetro de escariado (mm)',
      swingAngle: 'Ángulo de oscilación del equipo (°)',
      transportSize: 'Dimensiones de transporte (L×A×H, mm)',
      overallSize: 'Dimensiones generales (L×A×H, mm)',
      noise: 'Ruido dB(A)',
      weight: 'Peso (kg)',
      groundClearance: 'Distancia al suelo (mm)',
      pressure: 'Presión nominal (MPa)',
      flow: 'Caudal nominal (L/min)',
      power: 'Potencia nominal del motor (kW)',
      voltage: 'Tensión nominal (V)',
      tank: 'Volumen útil del tanque de aceite (L)',
      pumpSize: 'Dimensiones generales (L×A×H, mm)',
      pumpWeight: 'Peso (kg)',
      consoleSize: 'Dimensiones generales (L×A×H, mm)',
      consoleWeight: 'Peso (kg)',
    },
  },
};
const RENYI_DRILL_RODS_STABILIZERS_PRODUCT_PATHS = [
  '/zuanji-03/',
  '/en/zuanji-03/',
  '/ru/zuanji-03/',
  '/es/zuanji-03/',
  '/pro/wj-15/',
  '/en/pro/wj-15/',
  '/ru/pro/wj-15/',
  '/es/pro/wj-15/',
];
const RENYI_DRILL_RODS_STABILIZERS_CARD_IMAGE =
  '/renyi/product-drill-rods-stabilizers-imagegen-bundled-rods.jpg?v=20260510a';
const RENYI_DRILL_RODS_STABILIZERS_PRODUCT_IMAGES = [
  '/renyi/product-drill-rods-stabilizers-imagegen-bundled-rods.jpg?v=20260510a',
  '/renyi/product-drill-rods-stabilizers-imagegen-stabilizer-blocks.jpg?v=20260510a',
  '/renyi/product-drill-rods-stabilizers-imagegen-vertical-inventory.jpg?v=20260510a',
  '/renyi/product-drill-rods-stabilizers-imagegen-thread-machining.jpg?v=20260510a',
  '/renyi/product-drill-rods-stabilizers-imagegen-cnc-finishing.jpg?v=20260510a',
];
const RENYI_DRILL_RODS_STABILIZERS_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'functions',
      rows: [
        {
          key: 'operatingRole',
          values: [
            '导孔施工时传递主机下向推力及扭矩至牙轮钻头，扩孔时传递上向拉力及扭矩至扩孔刀盘',
            '稳定块支撑孔壁，抵抗诱偏岩层对钻具系的横向作用力，减少钻孔偏斜',
          ],
        },
        {
          key: 'material',
          values: [
            '新型定制材料，具备高抗拉强度和良好冲击韧性，提高承载能力并延长使用寿命',
            '新型定制稳定杆材料，具备高抗拉强度和良好冲击韧性，提高稳定杆承载能力',
          ],
        },
        {
          key: 'thread',
          values: [
            '采用DI-22国际通用标准，螺旋升角大、牙型粗，降低烧丝和断裂风险',
            '采用DI-22国际通用标准，螺纹可靠性高，适应重载扭矩传递',
          ],
        },
        {
          key: 'surfaceHardening',
          values: [
            '可根据工况选择氮化等螺纹表面硬化处理，提高表面硬度并防止螺纹咬合',
            '可根据工况选择螺纹表面硬化处理，提高表面硬度并防止螺纹咬合',
          ],
        },
        {
          key: 'stabilizerBlocks',
          values: ['-', '采用可拆卸式稳定块，磨损后可直接更换，延长稳定杆使用寿命'],
        },
      ],
    },
  ],
  en: [
    {
      key: 'functions',
      rows: [
        {
          key: 'operatingRole',
          values: [
            'Transmits downward thrust and torque to the tricone bit during pilot-hole drilling, and upward pull plus torque to the reaming cutterhead during reaming',
            'Stabilizer blocks support the borehole wall, resist lateral forces from deflecting strata, and reduce borehole deviation',
          ],
        },
        {
          key: 'material',
          values: [
            'Custom material with high tensile strength and good impact toughness, improving load capacity and service life',
            'Custom stabilizer material with high tensile strength and good impact toughness, improving stabilizer load capacity',
          ],
        },
        {
          key: 'thread',
          values: [
            'DI-22 international standard thread with large helix angle and coarse tooth profile, reducing galling and fracture risk',
            'DI-22 international standard thread with high reliability for heavy torque transmission',
          ],
        },
        {
          key: 'surfaceHardening',
          values: [
            'Optional nitriding or thread surface hardening according to working conditions to improve hardness and prevent seizure',
            'Optional thread surface hardening according to working conditions to improve hardness and prevent seizure',
          ],
        },
        {
          key: 'stabilizerBlocks',
          values: ['-', 'Detachable stabilizer blocks can be replaced directly after wear, extending service life'],
        },
      ],
    },
  ],
  ru: [
    {
      key: 'functions',
      rows: [
        {
          key: 'operatingRole',
          values: [
            'Передает осевое усилие вниз и крутящий момент на шарошечное долото при бурении пилотной скважины, а также тяговое усилие вверх и крутящий момент на расширительную головку',
            'Стабилизирующие блоки опираются на стенку скважины, противодействуют боковым силам отклоняющих пластов и уменьшают отклонение',
          ],
        },
        {
          key: 'material',
          values: [
            'Индивидуальный материал с высокой прочностью на растяжение и ударной вязкостью, повышающий несущую способность и срок службы',
            'Индивидуальный материал стабилизатора с высокой прочностью на растяжение и ударной вязкостью',
          ],
        },
        {
          key: 'thread',
          values: [
            'Резьба стандарта DI-22 с большим углом подъема и крупным профилем снижает риск задиров и разрушения',
            'Резьба стандарта DI-22 с высокой надежностью для передачи большого крутящего момента',
          ],
        },
        {
          key: 'surfaceHardening',
          values: [
            'Опциональное азотирование или упрочнение резьбы по условиям эксплуатации повышает твердость и предотвращает заклинивание',
            'Опциональное упрочнение поверхности резьбы повышает твердость и предотвращает заклинивание',
          ],
        },
        {
          key: 'stabilizerBlocks',
          values: ['-', 'Съемные стабилизирующие блоки можно заменить после износа, продлевая срок службы'],
        },
      ],
    },
  ],
  es: [
    {
      key: 'functions',
      rows: [
        {
          key: 'operatingRole',
          values: [
            'Transmite empuje descendente y par a la broca tricónica durante el taladro piloto, y fuerza ascendente más par al cabezal escariador durante el escariado',
            'Los bloques estabilizadores se apoyan en la pared del taladro, resisten fuerzas laterales de estratos desviadores y reducen la desviación',
          ],
        },
        {
          key: 'material',
          values: [
            'Material personalizado con alta resistencia a la tracción y buena tenacidad al impacto, mejorando capacidad de carga y vida útil',
            'Material personalizado para estabilizador con alta resistencia a la tracción y buena tenacidad al impacto',
          ],
        },
        {
          key: 'thread',
          values: [
            'Rosca estándar internacional DI-22 con gran ángulo de hélice y perfil grueso, reduciendo riesgos de agarrotamiento y rotura',
            'Rosca estándar internacional DI-22 con alta fiabilidad para transmisión de par elevado',
          ],
        },
        {
          key: 'surfaceHardening',
          values: [
            'Nitruración o endurecimiento superficial opcional según condiciones de trabajo para aumentar dureza y evitar agarrotamiento',
            'Endurecimiento superficial opcional de la rosca para aumentar dureza y evitar agarrotamiento',
          ],
        },
        {
          key: 'stabilizerBlocks',
          values: ['-', 'Bloques estabilizadores desmontables reemplazables tras el desgaste para prolongar la vida útil'],
        },
      ],
    },
  ],
};
const RENYI_DRILL_RODS_STABILIZERS_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['钻杆', '稳定杆'],
  en: ['Drill Rod', 'Stabilizer Rod'],
  ru: ['Буровая штанга', 'Стабилизирующая штанга'],
  es: ['Barra de perforación', 'Barra estabilizadora'],
};
const RENYI_DRILL_RODS_STABILIZERS_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '天井钻机系列',
    title: '钻杆、稳定杆',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的天井钻机钻杆和稳定杆成品堆放图，黑灰金属管体与螺纹端清晰展示',
      'Image Gen精修的稳定杆细节图，可拆式稳定块、螺纹端和抛光金属表面清晰可见',
      'Image Gen精修的钻杆库存陈列图，成排黑色钻杆部件展现批量制造能力',
      'Image Gen精修的钻杆螺纹机加工图，重型夹具、内螺纹和金属加工质感清晰',
      'Image Gen精修的钻杆CNC精加工图，长轴工件、卡盘与机床结构体现高精度制造',
    ],
    topSpecs: [
      ['配套产品', '钻杆 / 稳定杆'],
      ['螺纹标准', 'DI-22'],
      ['材料特点', '高抗拉强度 / 高冲击韧性'],
      ['表面处理', '可选螺纹氮化硬化'],
      ['稳定结构', '可拆式稳定块'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '钻杆、稳定杆是天井钻机钻具系统中的关键连接与传力部件。钻杆在导孔施工时负责将主机产生的下向推力及扭矩传递到牙轮钻头，使钻头对岩石产生碾压破碎效果；在扩孔过程中，钻杆负责将主机产生的上向拉力及扭矩传递到扩孔刀盘，使滚刀对岩壁形成持续破岩。',
      '稳定杆为带稳定块的钻杆，作业时稳定块支撑在孔壁上，抵抗诱偏岩层对钻具系产生的横向作用力，阻止钻头横向滑移并减少偏斜。稳定杆的排布会直接影响钻孔精度，是保障成井质量的重要部件。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '新型定制材料：与专业厂家合作研制的新型材料具备很高的抗拉强度和良好的冲击韧性，可提高钻杆、稳定杆承载能力并延长使用寿命。',
      '专业螺纹结构：天井钻机钻杆与稳定杆螺纹采用DI-22国际通用标准，螺旋升角大、牙型粗，可降低烧丝、断裂等风险，可靠性更高。',
      '可拆式稳定块：稳定杆采用可拆卸式稳定块，稳定块磨损后可直接更换，降低维护成本并延长稳定杆寿命。',
      '螺纹表面硬化：根据工况可选择氮化等螺纹表面硬化处理，提高表面硬度，减少螺纹咬合风险。',
    ],
    specsTitle: '技术参数',
    tableSections: { functions: '结构与性能' },
    tableRows: {
      operatingRole: '作业功能',
      material: '材料特点',
      thread: '螺纹结构',
      surfaceHardening: '表面处理',
      stabilizerBlocks: '稳定块',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Drill Rods & Stabilizer Rods',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined bundled raise-boring drill rods and stabilizer rods with clear black and gray metal bodies and threaded ends',
      'Image Gen refined stabilizer rod detail with detachable stabilizer blocks, threaded end, and polished metal surface',
      'Image Gen refined inventory view of black drill rod components arranged in rows, showing batch manufacturing capability',
      'Image Gen refined drill rod thread machining scene with heavy fixture, internal thread, and crisp metalwork',
      'Image Gen refined CNC finishing scene for a drill rod with long shaft workpiece, chuck, and precision machine structure',
    ],
    topSpecs: [
      ['Matched products', 'Drill rods / Stabilizer rods'],
      ['Thread standard', 'DI-22'],
      ['Material features', 'High tensile strength / high impact toughness'],
      ['Surface treatment', 'Optional thread nitriding hardening'],
      ['Stabilizing structure', 'Detachable stabilizer blocks'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'Drill rods and stabilizer rods are key connection and force-transmission parts in a raise-boring drill string. During pilot-hole drilling, the drill rod transmits the downward thrust and torque generated by the main machine to the tricone bit, enabling rolling crushing of the rock. During reaming, it transmits upward pulling force and torque to the reaming cutterhead so the cutters continuously break the shaft wall.',
      'A stabilizer rod is a drill rod fitted with stabilizer blocks. During operation, the blocks support the borehole wall and resist lateral forces from deflecting strata, preventing sideways bit slip and reducing deviation. The stabilizer layout directly affects drilling accuracy and shaft quality.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Custom material: new materials developed with specialist suppliers provide high tensile strength and strong impact toughness, improving load capacity and service life.',
      'Professional thread structure: DI-22 international standard threads with large helix angle and coarse tooth profile reduce galling and fracture risks under heavy torque.',
      'Detachable stabilizer blocks: worn stabilizer blocks can be replaced directly, lowering maintenance cost and extending stabilizer rod service life.',
      'Thread surface hardening: nitriding or other hardening treatments can be selected according to working conditions to improve surface hardness and prevent thread seizure.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { functions: 'Structure and Performance' },
    tableRows: {
      operatingRole: 'Operating role',
      material: 'Material features',
      thread: 'Thread structure',
      surfaceHardening: 'Surface treatment',
      stabilizerBlocks: 'Stabilizer blocks',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Буровые и стабилизирующие штанги',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: пакет буровых и стабилизирующих штанг для восстающего бурения с черно-серыми металлическими корпусами и резьбовыми концами',
      'Изображение Image Gen: деталь стабилизирующей штанги со съемными стабилизирующими блоками, резьбовым концом и полированной поверхностью',
      'Изображение Image Gen: складское размещение черных буровых штанг рядами, демонстрирующее серийное производство',
      'Изображение Image Gen: обработка резьбы буровой штанги с тяжелой оснасткой, внутренней резьбой и четкой металлической фактурой',
      'Изображение Image Gen: финишная обработка буровой штанги на станке с длинной заготовкой, патроном и точной машинной структурой',
    ],
    topSpecs: [
      ['Комплектующие', 'Буровые штанги / стабилизирующие штанги'],
      ['Стандарт резьбы', 'DI-22'],
      ['Материал', 'Высокая прочность на растяжение / высокая ударная вязкость'],
      ['Обработка поверхности', 'Опциональное азотирование резьбы'],
      ['Стабилизация', 'Съемные стабилизирующие блоки'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Буровые и стабилизирующие штанги являются ключевыми соединительными и силопередающими элементами буровой колонны установки восстающего бурения. При бурении пилотной скважины буровая штанга передает осевое усилие вниз и крутящий момент от основной машины на шарошечное долото, обеспечивая дробление породы. При расширении она передает тяговое усилие вверх и крутящий момент на расширительную головку.',
      'Стабилизирующая штанга представляет собой буровую штангу со стабилизирующими блоками. Во время работы блоки опираются на стенку скважины, противодействуют боковым силам отклоняющих пластов, уменьшают поперечное смещение долота и снижают отклонение. Схема установки стабилизаторов напрямую влияет на точность бурения.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Индивидуальный материал: новые материалы, разработанные совместно со специализированными поставщиками, имеют высокую прочность на растяжение и ударную вязкость, повышая несущую способность и срок службы.',
      'Профессиональная резьба: резьба стандарта DI-22 с большим углом подъема и крупным профилем снижает риск задиров и разрушения при передаче большого крутящего момента.',
      'Съемные стабилизирующие блоки: изношенные блоки можно заменить напрямую, что снижает стоимость обслуживания и продлевает ресурс стабилизирующей штанги.',
      'Поверхностное упрочнение резьбы: по условиям эксплуатации может применяться азотирование или иная обработка для повышения твердости и предотвращения заклинивания резьбы.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { functions: 'Конструкция и характеристики' },
    tableRows: {
      operatingRole: 'Рабочая функция',
      material: 'Материал',
      thread: 'Резьбовая конструкция',
      surfaceHardening: 'Обработка поверхности',
      stabilizerBlocks: 'Стабилизирующие блоки',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Barras de perforación y estabilizadoras',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen de barras de perforación y estabilizadoras agrupadas, con cuerpos metálicos negros y grises y extremos roscados',
      'Imagen refinada con Image Gen de una barra estabilizadora con bloques desmontables, extremo roscado y superficie metálica pulida',
      'Imagen refinada con Image Gen de inventario de barras negras dispuestas en filas, mostrando capacidad de fabricación en serie',
      'Imagen refinada con Image Gen del mecanizado de rosca de una barra de perforación con utillaje pesado, rosca interna y acabado metálico nítido',
      'Imagen refinada con Image Gen del acabado CNC de una barra de perforación con pieza larga, plato de sujeción y estructura de máquina de precisión',
    ],
    topSpecs: [
      ['Productos compatibles', 'Barras de perforación / barras estabilizadoras'],
      ['Estándar de rosca', 'DI-22'],
      ['Material', 'Alta resistencia a la tracción / alta tenacidad al impacto'],
      ['Tratamiento superficial', 'Nitruración opcional de rosca'],
      ['Estructura estabilizadora', 'Bloques estabilizadores desmontables'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'Las barras de perforación y las barras estabilizadoras son piezas clave de conexión y transmisión de fuerza en el sistema de perforación raise boring. Durante la perforación del taladro piloto, la barra transmite el empuje descendente y el par de la máquina principal a la broca tricónica para triturar la roca por rodadura. Durante el escariado, transmite la fuerza ascendente y el par al cabezal escariador.',
      'La barra estabilizadora incorpora bloques estabilizadores. Durante la operación, estos bloques se apoyan en la pared del taladro, resisten las fuerzas laterales de estratos que inducen desviación, evitan el deslizamiento lateral de la broca y reducen la desviación. Su distribución influye directamente en la precisión de perforación.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Material personalizado: los nuevos materiales desarrollados con proveedores especializados ofrecen alta resistencia a la tracción y buena tenacidad al impacto, mejorando la capacidad de carga y la vida útil.',
      'Rosca profesional: la rosca estándar internacional DI-22, con gran ángulo de hélice y perfil grueso, reduce riesgos de agarrotamiento y rotura bajo par elevado.',
      'Bloques estabilizadores desmontables: los bloques desgastados pueden sustituirse directamente, reduciendo el mantenimiento y prolongando la vida de la barra estabilizadora.',
      'Endurecimiento superficial de rosca: según las condiciones de trabajo, puede seleccionarse nitruración u otro tratamiento para aumentar la dureza y evitar el agarrotamiento de la rosca.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { functions: 'Estructura y rendimiento' },
    tableRows: {
      operatingRole: 'Función de trabajo',
      material: 'Material',
      thread: 'Estructura de rosca',
      surfaceHardening: 'Tratamiento superficial',
      stabilizerBlocks: 'Bloques estabilizadores',
    },
  },
};
const RENYI_REAMING_CUTTERHEAD_PRODUCT_PATHS = [
  '/zuanji-04/',
  '/en/zuanji-04/',
  '/ru/zuanji-04/',
  '/es/zuanji-04/',
  '/pro/wj-2/',
  '/en/pro/wj-2/',
  '/ru/pro/wj-2/',
  '/es/pro/wj-2/',
];
const RENYI_REAMING_CUTTERHEAD_CARD_IMAGE = '/renyi/product-reaming-cutterhead-imagegen-main.jpg?v=20260510b';
const RENYI_REAMING_CUTTERHEAD_PRODUCT_IMAGES = [
  '/renyi/product-reaming-cutterhead-imagegen-main.jpg?v=20260510b',
  '/renyi/product-reaming-cutterhead-imagegen-assembly.jpg?v=20260510b',
  '/renyi/product-reaming-cutterhead-imagegen-rollers.jpg?v=20260510b',
  '/renyi/product-reaming-cutterhead-imagegen-machined-plate.jpg?v=20260510b',
  '/renyi/product-reaming-cutterhead-imagegen-cutter-seats.jpg?v=20260510b',
];
const RENYI_REAMING_CUTTERHEAD_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'structure',
      rows: [
        { key: 'operatingRole', values: ['反向扩孔作业中安装滚刀并承载破岩载荷，用于破碎、切割岩石'] },
        { key: 'workingMode', values: ['通过钻杆带动刀盘提升和旋转，使滚刀撞击并压入岩石，岩石剥离后向下坠落'] },
        { key: 'diameterRange', values: ['0.9 m / 1.0 m / 1.2 m / 1.5 m / 1.8 m / 2.0 m / 2.5 m / 3.0 m'] },
        { key: 'customization', values: ['可针对不同型号天井钻机自主配置，也可按客户工况特制'] },
        { key: 'transportStructure', values: ['大于1.5 m的扩孔刀盘通常采用组合式结构，便于井下运输和现场装配'] },
      ],
    },
  ],
  en: [
    {
      key: 'structure',
      rows: [
        { key: 'operatingRole', values: ['Carries rolling cutters and rock-breaking loads during upward reaming, cutting and crushing the rock mass'] },
        { key: 'workingMode', values: ['Driven by the drill string to lift and rotate, allowing cutters to impact and press into rock so broken material falls away'] },
        { key: 'diameterRange', values: ['0.9 m / 1.0 m / 1.2 m / 1.5 m / 1.8 m / 2.0 m / 2.5 m / 3.0 m'] },
        { key: 'customization', values: ['Configured for different raise boring rig models and customizable for specific site conditions'] },
        { key: 'transportStructure', values: ['Cutterheads above 1.5 m are usually built in a combined structure for easier underground transport and assembly'] },
      ],
    },
  ],
  ru: [
    {
      key: 'structure',
      rows: [
        { key: 'operatingRole', values: ['Несет роликовые резцы и рабочие нагрузки при расширении снизу вверх, дробя и разрезая породу'] },
        { key: 'workingMode', values: ['Приводится буровой колонной на подъем и вращение, резцы ударяют и вдавливаются в породу, после чего разрушенная порода падает вниз'] },
        { key: 'diameterRange', values: ['0.9 m / 1.0 m / 1.2 m / 1.5 m / 1.8 m / 2.0 m / 2.5 m / 3.0 m'] },
        { key: 'customization', values: ['Подбирается под разные модели установок восстающего бурения и может изготавливаться под условия заказчика'] },
        { key: 'transportStructure', values: ['Головки диаметром более 1.5 m обычно выполняются составными для удобства подземной транспортировки и монтажа'] },
      ],
    },
  ],
  es: [
    {
      key: 'structure',
      rows: [
        { key: 'operatingRole', values: ['Soporta cortadores de rodillo y cargas de rotura durante el escariado ascendente, triturando y cortando la roca'] },
        { key: 'workingMode', values: ['La sarta de perforación eleva y hace girar el cabezal; los cortadores impactan y penetran la roca, que se desprende y cae'] },
        { key: 'diameterRange', values: ['0.9 m / 1.0 m / 1.2 m / 1.5 m / 1.8 m / 2.0 m / 2.5 m / 3.0 m'] },
        { key: 'customization', values: ['Configuración para distintos modelos de equipos raise boring y fabricación especial según las condiciones del cliente'] },
        { key: 'transportStructure', values: ['Los cabezales superiores a 1.5 m suelen adoptar estructura combinada para facilitar transporte subterráneo y montaje'] },
      ],
    },
  ],
};
const RENYI_REAMING_CUTTERHEAD_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['扩孔刀盘'],
  en: ['Reaming Cutterhead'],
  ru: ['Расширительная головка'],
  es: ['Cabezal de escariado'],
};
const RENYI_REAMING_CUTTERHEAD_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '天井钻机系列',
    title: '扩孔刀盘',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的扩孔刀盘整机产品图，黑色刀盘主体、中心轴和滚刀安装位完整展示',
      'Image Gen精修的扩孔刀盘装配产品图，刀盘主体和中心连接结构清晰展示',
      'Image Gen精修的扩孔刀盘滚刀装配图，滚刀阵列和重型刀盘结构完整展示',
      'Image Gen精修的扩孔刀盘铣平面加工件产品图，金属刀盘基体和孔位清晰展示',
      'Image Gen精修的扩孔刀盘刀座结构细节图，展示滚刀安装座和重型焊接结构',
    ],
    topSpecs: [
      ['产品类型', '扩孔刀盘 / 组合式刀盘'],
      ['适配设备', 'AT系列天井钻机'],
      ['常用直径', '0.9-3.0 m'],
      ['作业方式', '自下而上反向扩孔'],
      ['结构形式', '整体式 / 组合式定制'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '扩孔刀盘是天井钻机在自下而上反向扩孔钻凿作业中的必备载体，刀盘上安装滚刀，用于破碎和切割岩石。',
      '作业时，钻机通过钻杆带动扩孔刀盘提升和旋转，使滚刀撞击并压入岩石，岩石不断破碎、剥离并向下坠落，从而实现井筒向上扩孔钻进。',
      '仁毅机械可针对不同型号天井钻机自主配置不同直径的扩孔刀盘，常用直径覆盖0.9米、1米、1.2米、1.5米、1.8米、2米、2.5米、3米，也可根据客户工况特制。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '直径覆盖广：可匹配不同型号天井钻机与不同井筒直径需求，支持常规规格和非标定制。',
      '破岩承载强：刀盘承载滚刀冲击、压入、旋转破岩等复合载荷，适应矿山扩孔作业的高强度工况。',
      '便于井下运输：大于1.5米的扩孔刀盘通常采用组合式结构，降低井下运输和现场转运难度。',
      '制造工序完整：覆盖焊接刀座、铣削加工、表面处理、装配等关键工序，保证刀盘安装精度和结构稳定性。',
      '现场适配灵活：可围绕岩性、井径、钻机型号和客户施工条件进行配置，为天井钻进提供可靠配套。',
    ],
    specsTitle: '技术参数',
    tableSections: { structure: '结构与应用' },
    tableRows: {
      operatingRole: '作业功能',
      workingMode: '工作方式',
      diameterRange: '常用直径',
      customization: '定制能力',
      transportStructure: '运输结构',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Reaming Cutterhead',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined product image of a full reaming cutterhead with black body, central shaft, and cutter mounting positions',
      'Image Gen refined reaming cutterhead assembly showing the cutterhead body and central connection structure',
      'Image Gen refined reaming cutterhead with rolling cutter array and heavy-duty structure',
      'Image Gen refined machined reaming cutterhead plate showing the metal body and mounting holes',
      'Image Gen refined close-up of reaming cutterhead cutter seats and welded heavy-duty structure',
    ],
    topSpecs: [
      ['Product type', 'Reaming cutterhead / combined cutterhead'],
      ['Matched equipment', 'AT series raise boring rigs'],
      ['Common diameters', '0.9-3.0 m'],
      ['Working method', 'Upward reverse reaming'],
      ['Structure', 'Integral / customized combined type'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The reaming cutterhead is the essential carrier used by a raise boring rig during upward reverse reaming. Rolling cutters are installed on the cutterhead to crush and cut rock.',
      'During operation, the rig drives the cutterhead through the drill string, lifting and rotating it so the cutters impact and press into the rock. Broken rock is stripped away and falls downward, completing upward shaft reaming.',
      'Renyi Machinery can configure reaming cutterheads of different diameters for different raise boring rig models. Common diameters include 0.9 m, 1.0 m, 1.2 m, 1.5 m, 1.8 m, 2.0 m, 2.5 m, and 3.0 m, with customized options available for site conditions.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Wide diameter coverage: supports different raise boring rig models and shaft diameters, including standard and non-standard customization.',
      'Strong rock-breaking capacity: designed to carry combined impact, pressing, rotation, and wear loads from rolling cutters in demanding mine reaming work.',
      'Easier underground transport: cutterheads above 1.5 m are usually made in combined sections, reducing underground handling and transfer difficulty.',
      'Complete manufacturing process: welding of cutter seats, milling, surface treatment, and assembly help ensure mounting accuracy and structural stability.',
      'Flexible site matching: configuration can be adjusted around rock condition, shaft diameter, rig model, and customer construction requirements.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { structure: 'Structure and Application' },
    tableRows: {
      operatingRole: 'Operating role',
      workingMode: 'Working method',
      diameterRange: 'Common diameters',
      customization: 'Customization',
      transportStructure: 'Transport structure',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Расширительная буровая головка',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: общий вид расширительной головки с черным корпусом, центральным валом и местами установки резцов',
      'Изображение Image Gen: сборка расширительной головки с корпусом и центральным соединительным узлом',
      'Изображение Image Gen: расширительная головка с рядом роликовых резцов и тяжелой несущей конструкцией',
      'Изображение Image Gen: обработанная плита расширительной головки с металлическим корпусом и монтажными отверстиями',
      'Изображение Image Gen: крупный вид посадочных мест резцов и сварной тяжелой конструкции расширительной головки',
    ],
    topSpecs: [
      ['Тип изделия', 'Расширительная головка / составная головка'],
      ['Совместимое оборудование', 'Установки восстающего бурения серии AT'],
      ['Типовые диаметры', '0.9-3.0 m'],
      ['Метод работы', 'Обратное расширение снизу вверх'],
      ['Конструкция', 'Цельная / составная под заказ'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Расширительная буровая головка является обязательным рабочим узлом установки восстающего бурения при обратном расширении снизу вверх. На головку устанавливаются роликовые резцы для дробления и резания породы.',
      'Во время работы установка через буровую колонну поднимает и вращает головку. Резцы ударяют по породе и вдавливаются в нее, разрушенная порода отделяется и падает вниз, формируя расширенный ствол.',
      'Renyi Machinery может подбирать расширительные головки разных диаметров для разных моделей установок. Типовые диаметры включают 0.9 m, 1.0 m, 1.2 m, 1.5 m, 1.8 m, 2.0 m, 2.5 m и 3.0 m, также возможно специальное изготовление под условия заказчика.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Широкий диапазон диаметров: подходит для разных моделей установок и диаметров ствола, включая стандартные и нестандартные исполнения.',
      'Высокая несущая способность при разрушении породы: головка воспринимает ударные, осевые, вращательные и износные нагрузки от роликовых резцов.',
      'Удобство подземной транспортировки: головки диаметром более 1.5 m обычно изготавливаются составными, что облегчает перевозку и монтаж в шахте.',
      'Полный производственный цикл: сварка посадочных мест резцов, фрезерная обработка, поверхностная обработка и сборка обеспечивают точность и устойчивость конструкции.',
      'Гибкая адаптация к площадке: конфигурация может учитывать породу, диаметр ствола, модель установки и условия строительства заказчика.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { structure: 'Конструкция и применение' },
    tableRows: {
      operatingRole: 'Рабочая функция',
      workingMode: 'Метод работы',
      diameterRange: 'Типовые диаметры',
      customization: 'Индивидуальное изготовление',
      transportStructure: 'Транспортная конструкция',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Cabezal de escariado',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen de un cabezal de escariado completo con cuerpo negro, eje central y posiciones de montaje',
      'Imagen refinada con Image Gen del conjunto de cabezal de escariado con cuerpo y conexión central',
      'Imagen refinada con Image Gen del cabezal de escariado con matriz de cortadores de rodillo y estructura pesada',
      'Imagen refinada con Image Gen de placa mecanizada de cabezal de escariado con cuerpo metálico y orificios de montaje',
      'Imagen refinada con Image Gen de los soportes de cortadores y la estructura soldada pesada del cabezal de escariado',
    ],
    topSpecs: [
      ['Tipo de producto', 'Cabezal de escariado / cabezal combinado'],
      ['Equipo compatible', 'Equipos raise boring serie AT'],
      ['Diámetros comunes', '0.9-3.0 m'],
      ['Método de trabajo', 'Escariado inverso ascendente'],
      ['Estructura', 'Integral / combinada personalizada'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'El cabezal de escariado es el portador indispensable del equipo raise boring durante el escariado inverso ascendente. En el cabezal se instalan cortadores de rodillo para triturar y cortar la roca.',
      'Durante la operación, el equipo acciona el cabezal a través de la sarta de perforación, elevándolo y haciéndolo girar. Los cortadores impactan y penetran la roca, que se desprende y cae hacia abajo para formar el pozo escariado.',
      'Renyi Machinery puede configurar cabezales de distintos diámetros para diferentes modelos de equipos raise boring. Los diámetros comunes incluyen 0.9 m, 1.0 m, 1.2 m, 1.5 m, 1.8 m, 2.0 m, 2.5 m y 3.0 m, con fabricación especial según las condiciones del cliente.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Amplia cobertura de diámetros: compatible con distintos modelos de equipos raise boring y diámetros de pozo, con opciones estándar y no estándar.',
      'Alta capacidad de rotura: diseñado para soportar cargas combinadas de impacto, presión, rotación y desgaste de los cortadores en trabajos mineros exigentes.',
      'Transporte subterráneo más sencillo: los cabezales superiores a 1.5 m suelen fabricarse por secciones combinadas para facilitar manejo y traslado bajo tierra.',
      'Proceso de fabricación completo: soldadura de asientos de cortadores, fresado, tratamiento superficial y montaje ayudan a asegurar precisión y estabilidad estructural.',
      'Adaptación flexible al sitio: la configuración puede ajustarse a la roca, diámetro del pozo, modelo del equipo y requisitos de construcción del cliente.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { structure: 'Estructura y aplicación' },
    tableRows: {
      operatingRole: 'Función de trabajo',
      workingMode: 'Método de trabajo',
      diameterRange: 'Diámetros comunes',
      customization: 'Personalización',
      transportStructure: 'Estructura de transporte',
    },
  },
};
const RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_PATHS = [
  '/zuanji-05/',
  '/en/zuanji-05/',
  '/ru/zuanji-05/',
  '/es/zuanji-05/',
  '/pro/wj-25/',
  '/en/pro/wj-25/',
  '/ru/pro/wj-25/',
  '/es/pro/wj-25/',
];
const RENYI_ROLLER_CUTTER_ASSEMBLY_CARD_IMAGE =
  '/renyi/product-roller-cutter-assembly-retouch-main.jpg?v=20260511c';
const RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_IMAGES = [
  '/renyi/product-roller-cutter-assembly-retouch-main.jpg?v=20260511c',
  '/renyi/product-roller-cutter-assembly-retouch-teeth.jpg?v=20260511c',
  '/renyi/product-roller-cutter-assembly-retouch-types.jpg?v=20260511c',
  '/renyi/product-roller-cutter-assembly-retouch-cutter-seats.jpg?v=20260511c',
  '/renyi/product-roller-cutter-assembly-retouch-seat-detail.jpg?v=20260511c',
];
const RENYI_ROLLER_CUTTER_ASSEMBLY_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'selection',
      rows: [
        { key: 'operatingRole', values: ['装配于扩孔刀盘，是自下而上反向扩孔钻凿作业中的必备破岩刀具'] },
        { key: 'workingMode', values: ['钻机通过钻杆带动滚刀连续向上提升和旋转，对岩石进行破碎和滚切，使岩石剥离并坠落'] },
        { key: 'selectionBasis', values: ['主要根据岩石坚固性和破碎性选型，常以岩石硬度系数 f=R/100 作为参考'] },
        { key: 'bType', values: ['B型滚刀适用于 f=4-8 的中等硬度岩石，可选单排齿或双排齿，在扩孔刀盘上成对安装'] },
        { key: 'dType', values: ['D型滚刀适用于 f=8-12 的较坚硬岩石，可选单排齿或双排齿，在扩孔刀盘上成对安装'] },
        { key: 'cType', values: ['C型超硬岩滚刀适用于 f=10-16 的坚硬岩石，采用五环大合金齿，可承受更大轴压力'] },
        { key: 'cutterSeats', values: ['可配套正刀座、边刀座、内刀座等滚刀安装座，满足不同刀盘布置需求'] },
      ],
    },
  ],
  en: [
    {
      key: 'selection',
      rows: [
        { key: 'operatingRole', values: ['Mounted on the reaming cutterhead as an essential rock-breaking tool for upward reverse reaming'] },
        { key: 'workingMode', values: ['Driven upward and rotated through the drill string, the cutter continuously crushes and rolls the rock so broken material falls away'] },
        { key: 'selectionBasis', values: ['Selection is based on rock firmness and breakability, commonly referencing the hardness coefficient f=R/100'] },
        { key: 'bType', values: ['Type B cutters suit medium-hard rock with f=4-8; single-row or double-row teeth are available and installed in pairs'] },
        { key: 'dType', values: ['Type D cutters suit harder rock with f=8-12; single-row or double-row teeth are available and installed in pairs'] },
        { key: 'cType', values: ['Type C extra-hard-rock cutters suit f=10-16 rock, using five-ring large carbide teeth to withstand higher axial pressure'] },
        { key: 'cutterSeats', values: ['Straight, side, and inner cutter seats can be supplied to match different cutterhead layouts'] },
      ],
    },
  ],
  ru: [
    {
      key: 'selection',
      rows: [
        { key: 'operatingRole', values: ['Устанавливается на расширительную головку и служит основным инструментом разрушения породы при обратном расширении снизу вверх'] },
        { key: 'workingMode', values: ['Через буровую колонну резец поднимается и вращается, непрерывно дробит и прокатывает породу, после чего разрушенный материал падает вниз'] },
        { key: 'selectionBasis', values: ['Выбор выполняется по прочности и дробимости породы, обычно с учетом коэффициента твердости f=R/100'] },
        { key: 'bType', values: ['Резцы типа B подходят для пород средней твердости f=4-8; доступны одно- и двухрядные зубья, монтаж выполняется парами'] },
        { key: 'dType', values: ['Резцы типа D подходят для более твердых пород f=8-12; доступны одно- и двухрядные зубья, монтаж выполняется парами'] },
        { key: 'cType', values: ['Резцы типа C для сверхтвердых пород подходят для f=10-16, используют крупные твердосплавные зубья в пяти рядах и выдерживают повышенное осевое давление'] },
        { key: 'cutterSeats', values: ['Возможна поставка прямых, боковых и внутренних посадочных мест под разные схемы размещения на головке'] },
      ],
    },
  ],
  es: [
    {
      key: 'selection',
      rows: [
        { key: 'operatingRole', values: ['Se monta en el cabezal de escariado como herramienta indispensable de rotura de roca para el escariado inverso ascendente'] },
        { key: 'workingMode', values: ['Impulsado por la sarta de perforación, el cortador asciende y gira de forma continua, triturando y laminando la roca para que el material desprendido caiga'] },
        { key: 'selectionBasis', values: ['La selección depende de la firmeza y la fracturabilidad de la roca, con referencia habitual al coeficiente de dureza f=R/100'] },
        { key: 'bType', values: ['Los cortadores tipo B son adecuados para roca de dureza media f=4-8; se ofrecen dientes de una o dos filas y se instalan por pares'] },
        { key: 'dType', values: ['Los cortadores tipo D son adecuados para roca más dura f=8-12; se ofrecen dientes de una o dos filas y se instalan por pares'] },
        { key: 'cType', values: ['Los cortadores tipo C para roca extra dura son adecuados para f=10-16, con cinco filas de dientes grandes de carburo para mayor presión axial'] },
        { key: 'cutterSeats', values: ['Se pueden suministrar asientos rectos, laterales e interiores para adaptarse a distintas distribuciones del cabezal'] },
      ],
    },
  ],
};
const RENYI_ROLLER_CUTTER_ASSEMBLY_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['滚刀组件'],
  en: ['Roller Cutter Assembly'],
  ru: ['Роликовый резцовый узел'],
  es: ['Conjunto de cortadores de rodillo'],
};
const RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '天井钻机系列',
    title: '滚刀组件',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的滚刀组件产品主图，银色滚刀本体和硬质合金齿完整展示',
      'Image Gen精修的滚刀齿细节图，展示多排硬质合金齿和金属沟槽',
      'Image Gen精修的多规格滚刀组件产品图，展示不同滚刀配置',
      'Image Gen精修的滚刀刀座产品图，展示正刀座、边刀座和内刀座结构',
      '资料包原图转换的滚刀组件实拍图，展示滚刀本体和硬质合金齿',
    ],
    topSpecs: [
      ['产品类型', '滚刀组件'],
      ['适配设备', '扩孔刀盘 / AT系列天井钻机'],
      ['选型依据', '岩石硬度系数 f值'],
      ['适用岩性', '中硬岩至坚硬岩'],
      ['结构形式', '单排齿 / 双排齿'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '滚刀是天井钻机在自下而上反向扩孔钻凿作业时的必备刀具，主要用于破碎和切割岩石。',
      '滚刀表面有规律地镶嵌硬质合金齿，在钻机带动下，通过钻杆连续向上提升和旋转，对岩石进行连续破碎和滚切，使岩石不断剥离并坠落，从而实现井筒向上扩孔钻进。',
      '仁毅机械根据岩石坚固性和破碎性进行滚刀选型，并围绕扩孔刀盘配置正刀座、边刀座、内刀座等配套安装结构。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '选型清晰：以岩石硬度系数f值为主要参考，覆盖B型、D型和C型超硬岩滚刀。',
      '岩性覆盖广：B型适用于中等硬度岩石，D型适用于较坚硬岩石，C型适用于坚硬和极硬岩工况。',
      '齿型配置灵活：B型和D型可提供单排齿、双排齿配置，在扩孔刀盘上成对安装。',
      '承压能力强：C型滚刀采用五环大合金齿，可承受更大轴压力，适合破碎性较差的坚硬岩石。',
      '配套刀座完整：正刀座、边刀座、内刀座等安装座可与刀盘布置协同配置，提升现场适配性。',
    ],
    specsTitle: '技术参数',
    tableSections: { selection: '选型与配置' },
    tableRows: {
      operatingRole: '作业功能',
      workingMode: '工作方式',
      selectionBasis: '选型依据',
      bType: 'B型滚刀',
      dType: 'D型滚刀',
      cType: 'C型滚刀',
      cutterSeats: '配套刀座',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Roller Cutter Assembly',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined main product image of a roller cutter assembly with silver cutter body and carbide teeth',
      'Image Gen refined detail image of roller cutter teeth and machined grooves',
      'Image Gen refined product image showing multiple roller cutter configurations',
      'Image Gen refined product image of straight, side, and inner cutter seats',
      'Source-package product photo of the roller cutter body and carbide teeth',
    ],
    topSpecs: [
      ['Product type', 'Roller cutter assembly'],
      ['Matched equipment', 'Reaming cutterhead / AT series raise boring rigs'],
      ['Selection basis', 'Rock hardness coefficient f'],
      ['Applicable rock', 'Medium-hard to hard rock'],
      ['Structure', 'Single-row / double-row teeth'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The roller cutter is an essential cutting tool for upward reverse reaming with a raise boring rig, mainly used to crush and cut rock.',
      'Carbide teeth are regularly embedded on the cutter surface. Driven by the rig, the cutter is continuously lifted and rotated through the drill string, crushing and rolling the rock so it breaks away and falls downward to complete upward shaft reaming.',
      'Renyi Machinery selects roller cutters according to rock firmness and breakability, and can configure straight, side, and inner cutter seats around the reaming cutterhead layout.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Clear selection logic: the rock hardness coefficient f is the main reference, covering Type B, Type D, and Type C extra-hard-rock cutters.',
      'Wide rock coverage: Type B suits medium-hard rock, Type D suits harder rock, and Type C suits hard and extra-hard rock conditions.',
      'Flexible tooth configuration: Type B and Type D are available with single-row or double-row teeth and are installed in pairs on the cutterhead.',
      'Strong axial load capacity: Type C cutters use five-ring large carbide teeth to withstand higher axial pressure in hard rock with poor breakability.',
      'Complete cutter-seat support: straight, side, and inner cutter seats can be matched with cutterhead layouts for better site adaptability.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { selection: 'Selection and Configuration' },
    tableRows: {
      operatingRole: 'Operating role',
      workingMode: 'Working method',
      selectionBasis: 'Selection basis',
      bType: 'Type B cutter',
      dType: 'Type D cutter',
      cType: 'Type C cutter',
      cutterSeats: 'Cutter seats',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Роликовый резцовый узел',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: основной вид роликового резцового узла с серебристым корпусом и твердосплавными зубьями',
      'Изображение Image Gen: детальный вид зубьев роликового резца и обработанных канавок',
      'Изображение Image Gen: несколько конфигураций роликовых резцов',
      'Изображение Image Gen: прямое, боковое и внутреннее посадочные места резца',
      'Фото из исходных материалов: корпус роликового резца и твердосплавные зубья',
    ],
    topSpecs: [
      ['Тип изделия', 'Роликовый резцовый узел'],
      ['Совместимое оборудование', 'Расширительная головка / установки AT'],
      ['Основа выбора', 'Коэффициент твердости породы f'],
      ['Применяемая порода', 'Среднетвердая и твердая порода'],
      ['Конструкция', 'Однорядные / двухрядные зубья'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Роликовый резец является обязательным режущим инструментом установки восстающего бурения при обратном расширении снизу вверх и применяется главным образом для дробления и резания породы.',
      'На поверхности резца регулярно расположены твердосплавные зубья. Под действием установки резец через буровую колонну непрерывно поднимается и вращается, дробит и прокатывает породу, которая отделяется и падает вниз, формируя расширенный ствол.',
      'Renyi Machinery подбирает роликовые резцы по прочности и дробимости породы, а также конфигурирует прямые, боковые и внутренние посадочные места под компоновку расширительной головки.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Понятная логика выбора: коэффициент твердости породы f является основным ориентиром, доступны резцы типа B, D и C для сверхтвердых пород.',
      'Широкий диапазон пород: тип B подходит для среднетвердых пород, тип D - для более твердых пород, тип C - для твердых и сверхтвердых условий.',
      'Гибкая конфигурация зубьев: типы B и D доступны с одно- или двухрядными зубьями и устанавливаются на головке парами.',
      'Высокая осевая нагрузка: резцы типа C используют крупные твердосплавные зубья в пяти рядах и подходят для трудноразрушаемых твердых пород.',
      'Полная поддержка посадочных мест: прямые, боковые и внутренние опоры можно согласовать с компоновкой головки для лучшей адаптации на объекте.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { selection: 'Выбор и конфигурация' },
    tableRows: {
      operatingRole: 'Рабочая функция',
      workingMode: 'Метод работы',
      selectionBasis: 'Основа выбора',
      bType: 'Резец типа B',
      dType: 'Резец типа D',
      cType: 'Резец типа C',
      cutterSeats: 'Посадочные места',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Conjunto de cortadores de rodillo',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen del conjunto de cortador de rodillo con cuerpo plateado y dientes de carburo',
      'Imagen refinada con Image Gen del detalle de dientes del cortador de rodillo y ranuras mecanizadas',
      'Imagen refinada con Image Gen de varias configuraciones de cortadores de rodillo',
      'Imagen refinada con Image Gen de asientos rectos, laterales e interiores para cortadores',
      'Foto del paquete de materiales: cuerpo del cortador de rodillo y dientes de carburo',
    ],
    topSpecs: [
      ['Tipo de producto', 'Conjunto de cortadores de rodillo'],
      ['Equipo compatible', 'Cabezal de escariado / equipos AT'],
      ['Base de selección', 'Coeficiente de dureza de roca f'],
      ['Roca aplicable', 'Roca media-dura a dura'],
      ['Estructura', 'Dientes de una fila / dos filas'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'El cortador de rodillo es una herramienta indispensable para el escariado inverso ascendente con equipos raise boring, utilizada principalmente para triturar y cortar la roca.',
      'Su superficie incorpora dientes de carburo distribuidos regularmente. Accionado por el equipo, el cortador asciende y gira continuamente a través de la sarta de perforación, triturando y laminando la roca para que se desprenda y caiga, completando el escariado ascendente del pozo.',
      'Renyi Machinery selecciona los cortadores según la firmeza y la fracturabilidad de la roca, y configura asientos rectos, laterales e interiores de acuerdo con la distribución del cabezal de escariado.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Selección clara: el coeficiente de dureza f es la referencia principal, con cortadores tipo B, tipo D y tipo C para roca extra dura.',
      'Amplia cobertura de roca: el tipo B sirve para roca media-dura, el tipo D para roca más dura y el tipo C para condiciones duras y extra duras.',
      'Configuración flexible de dientes: los tipos B y D pueden suministrarse con dientes de una o dos filas y se instalan por pares en el cabezal.',
      'Alta capacidad de carga axial: los cortadores tipo C emplean cinco filas de dientes grandes de carburo para soportar mayor presión axial en roca dura de baja fracturabilidad.',
      'Soporte completo de asientos: los asientos rectos, laterales e interiores pueden coordinarse con la distribución del cabezal para una mejor adaptación en obra.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { selection: 'Selección y configuración' },
    tableRows: {
      operatingRole: 'Función de trabajo',
      workingMode: 'Método de trabajo',
      selectionBasis: 'Base de selección',
      bType: 'Cortador tipo B',
      dType: 'Cortador tipo D',
      cType: 'Cortador tipo C',
      cutterSeats: 'Asientos de cortador',
    },
  },
};
const RENYI_TRICONE_DRILL_BIT_PRODUCT_PATHS = [
  '/zuanji-06/',
  '/en/zuanji-06/',
  '/ru/zuanji-06/',
  '/es/zuanji-06/',
  '/pro/wj-3/',
  '/en/pro/wj-3/',
  '/ru/pro/wj-3/',
  '/es/pro/wj-3/',
];
const RENYI_TRICONE_DRILL_BIT_CARD_IMAGE = '/renyi/product-tricone-drill-bit-retouch-main.jpg?v=20260511a';
const RENYI_TRICONE_DRILL_BIT_PRODUCT_IMAGES = [
  '/renyi/product-tricone-drill-bit-retouch-main.jpg?v=20260511a',
  '/renyi/product-tricone-drill-bit-retouch-cones.jpg?v=20260511a',
  '/renyi/product-tricone-drill-bit-retouch-250.jpg?v=20260511a',
  '/renyi/product-tricone-drill-bit-retouch-280.jpg?v=20260511a',
  '/renyi/product-tricone-drill-bit-retouch-rod-connection.jpg?v=20260511a',
];
const RENYI_TRICONE_DRILL_BIT_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'application',
      rows: [
        { key: 'operatingRole', values: ['连接在钻杆最前端，是天井钻机制导孔过程中的前端破岩钻具'] },
        { key: 'forceTransfer', values: ['将钻机推力和扭矩通过钻杆直接作用到岩石'] },
        { key: 'rockBreaking', values: ['通过牙轮滚动、挤压和碾压使岩石破碎'] },
        { key: 'matchedProcess', values: ['适用于天井钻机导孔钻进，为后续反向扩孔建立导向孔'] },
        { key: 'availableSpecs', values: ['资料规格覆盖250 mm、280 mm及三牙轮钻头形式，可按钻杆和工况配置'] },
      ],
    },
  ],
  en: [
    {
      key: 'application',
      rows: [
        {
          key: 'operatingRole',
          values: ['Mounted at the front end of the drill rod as the leading rock-breaking tool for pilot-hole drilling by a raise boring rig'],
        },
        { key: 'forceTransfer', values: ['Transfers rig thrust and torque through the drill rod directly into the rock'] },
        { key: 'rockBreaking', values: ['Roller cones rotate, press, and crush the rock by rolling contact'] },
        {
          key: 'matchedProcess',
          values: ['Used for raise boring pilot-hole drilling, establishing the guide hole for subsequent reverse reaming'],
        },
        {
          key: 'availableSpecs',
          values: ['Source materials cover 250 mm, 280 mm, and tricone drill-bit forms, configurable by drill rod and site condition'],
        },
      ],
    },
  ],
  ru: [
    {
      key: 'application',
      rows: [
        {
          key: 'operatingRole',
          values: [
            'Устанавливается на переднем конце буровой штанги и служит передним породоразрушающим инструментом при бурении пилотного отверстия установкой восстающего бурения',
          ],
        },
        {
          key: 'forceTransfer',
          values: ['Передает осевое усилие и крутящий момент установки через буровую штангу непосредственно на породу'],
        },
        { key: 'rockBreaking', values: ['Шарошки вращаются, прижимают и раздавливают породу за счет качения'] },
        {
          key: 'matchedProcess',
          values: ['Используется для бурения пилотного отверстия, задающего направление последующего обратного расширения'],
        },
        {
          key: 'availableSpecs',
          values: [
            'Материалы включают варианты 250 mm, 280 mm и трехшарошечное исполнение; конфигурация подбирается по штанге и условиям',
          ],
        },
      ],
    },
  ],
  es: [
    {
      key: 'application',
      rows: [
        {
          key: 'operatingRole',
          values: [
            'Se conecta al extremo delantero de la barra de perforación como herramienta de rotura para el taladro piloto del equipo raise boring',
          ],
        },
        { key: 'forceTransfer', values: ['Transfiere el empuje y el par del equipo a la roca a través de la barra de perforación'] },
        { key: 'rockBreaking', values: ['Los conos giratorios presionan y trituran la roca por contacto rodante'] },
        { key: 'matchedProcess', values: ['Se utiliza para perforar el taladro piloto que guía el escariado inverso posterior'] },
        {
          key: 'availableSpecs',
          values: [
            'Los materiales cubren opciones de 250 mm, 280 mm y broca tricónica; la configuración se ajusta a la barra y la obra',
          ],
        },
      ],
    },
  ],
};
const RENYI_TRICONE_DRILL_BIT_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['牙轮钻头'],
  en: ['Tricone Drill Bit'],
  ru: ['Трехшарошечное долото'],
  es: ['Broca tricónica'],
};
const RENYI_TRICONE_DRILL_BIT_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '天井钻机系列',
    title: '牙轮钻头',
    inquiry: '在线留言',
    imageAlts: [
      'Image Gen精修的牙轮钻头产品主图，展示三牙轮结构、齿面和下部螺纹连接',
      'Image Gen精修的牙轮钻头牙轮细节图，展示合金齿和碾压破岩齿面',
      'Image Gen精修的250规格牙轮钻头产品图，展示紧凑三牙轮结构',
      'Image Gen精修的280规格牙轮钻头产品图，展示重型三牙轮结构',
      'Image Gen精修的牙轮钻头连接钻杆示意图，展示钻头与钻杆前端连接关系',
    ],
    topSpecs: [
      ['产品类型', '牙轮钻头 / 三牙轮钻头'],
      ['适配设备', '天井钻机 / 钻杆'],
      ['应用工序', '导孔钻制'],
      ['破岩方式', '推力与扭矩碾压破碎'],
      ['连接位置', '钻杆最前端'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '牙轮钻头用于天井钻机制导孔过程，连接在钻杆最前端，将钻机推力及扭矩直接作用在岩石上，对岩石形成碾压破碎。',
      '钻进时，牙轮在孔底滚动、挤压并破碎岩石，为后续反向扩孔建立稳定导向孔。仁毅机械可根据钻杆规格、岩性和现场施工工况配置相应牙轮钻头。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '传力直接：位于钻具系最前端，将推力和扭矩传递到孔底岩石。',
      '破岩明确：通过牙轮滚动、挤压和碾压完成导孔破岩。',
      '规格适配：资料覆盖250 mm、280 mm和三牙轮钻头形式，可按钻杆和工况配置。',
      '结构可靠：合金齿与钻头本体配合，适应导孔钻进中的冲击和磨损。',
      '工序衔接：先形成导向孔，再配合扩孔刀盘完成反向扩孔施工。',
    ],
    specsTitle: '技术参数',
    tableSections: { application: '结构与应用' },
    tableRows: {
      operatingRole: '作业功能',
      forceTransfer: '传力方式',
      rockBreaking: '破岩方式',
      matchedProcess: '适用工序',
      availableSpecs: '规格配置',
    },
  },
  en: {
    category: 'Raise Boring Machinery Series',
    title: 'Tricone Drill Bit',
    inquiry: 'Contact Us',
    imageAlts: [
      'Image Gen refined main product image of a tricone drill bit showing the three-cone structure, tooth surface, and lower threaded connection',
      'Image Gen refined detail image of tricone drill-bit cones, carbide teeth, and rolling crushing surface',
      'Image Gen refined 250 specification tricone drill-bit product image with compact three-cone structure',
      'Image Gen refined 280 specification tricone drill-bit product image with heavy-duty three-cone structure',
      'Image Gen refined drill-bit-to-drill-rod connection image showing the front-end connection relationship',
    ],
    topSpecs: [
      ['Product type', 'Tricone drill bit'],
      ['Matched equipment', 'Raise boring rig / drill rod'],
      ['Application process', 'Pilot-hole drilling'],
      ['Rock-breaking method', 'Thrust and torque rolling crushing'],
      ['Connection position', 'Front end of the drill rod'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The tricone drill bit is used during pilot-hole drilling by a raise boring rig. Mounted at the front end of the drill rod, it transfers rig thrust and torque directly into the rock to create rolling crushing action.',
      'During drilling, the cones roll, press, and crush the rock at the bottom of the hole, establishing a stable guide hole for subsequent reverse reaming. Renyi Machinery can configure drill bits according to drill-rod specification, rock condition, and site requirements.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Direct force transfer: positioned at the leading end of the drill string to deliver thrust and torque to the rock face.',
      'Defined rock-breaking action: cone rolling, pressing, and crushing support pilot-hole formation.',
      'Configurable specifications: source materials cover 250 mm, 280 mm, and tricone forms for drill-rod and site matching.',
      'Reliable structure: carbide teeth and bit body work together to handle impact and wear in pilot-hole drilling.',
      'Process continuity: forms the guide hole first, then works with the reaming cutterhead for reverse reaming.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { application: 'Structure and Application' },
    tableRows: {
      operatingRole: 'Operating role',
      forceTransfer: 'Force transfer',
      rockBreaking: 'Rock-breaking method',
      matchedProcess: 'Matched process',
      availableSpecs: 'Specification configuration',
    },
  },
  ru: {
    category: 'Серия установок для восстающих выработок',
    title: 'Трехшарошечное долото',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Изображение Image Gen: основной вид трехшарошечного долота с тремя шарошками, зубьями и нижним резьбовым соединением',
      'Изображение Image Gen: детальный вид шарошек, твердосплавных зубьев и поверхности разрушения породы',
      'Изображение Image Gen: долото спецификации 250 с компактной трехшарошечной конструкцией',
      'Изображение Image Gen: долото спецификации 280 с усиленной трехшарошечной конструкцией',
      'Изображение Image Gen: соединение долота с буровой штангой на переднем конце бурового инструмента',
    ],
    topSpecs: [
      ['Тип изделия', 'Трехшарошечное долото'],
      ['Совместимое оборудование', 'Установка восстающего бурения / буровая штанга'],
      ['Процесс применения', 'Бурение пилотного отверстия'],
      ['Метод разрушения', 'Дробление осевым усилием и крутящим моментом'],
      ['Положение соединения', 'Передний конец буровой штанги'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Трехшарошечное долото применяется при бурении пилотного отверстия установкой восстающего бурения. Оно соединяется с передним концом буровой штанги и передает осевое усилие и крутящий момент непосредственно на породу, создавая дробление качением.',
      'Во время бурения шарошки катятся, прижимают и разрушают породу на забое, формируя устойчивое направляющее отверстие для последующего обратного расширения. Renyi Machinery подбирает долото по спецификации штанги, породе и условиям площадки.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Прямая передача усилия: долото находится на переднем конце бурового инструмента и передает нагрузку на забой.',
      'Понятный принцип разрушения: шарошки катятся, прижимают и дробят породу при формировании пилотного отверстия.',
      'Настраиваемые спецификации: материалы охватывают варианты 250 mm, 280 mm и трехшарошечное исполнение.',
      'Надежная конструкция: твердосплавные зубья и корпус рассчитаны на ударные и абразивные нагрузки при бурении.',
      'Связь с процессом: сначала формирует направляющее отверстие, затем работает в комплексе с расширительной головкой.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { application: 'Конструкция и применение' },
    tableRows: {
      operatingRole: 'Рабочая функция',
      forceTransfer: 'Передача усилия',
      rockBreaking: 'Метод разрушения',
      matchedProcess: 'Связанный процесс',
      availableSpecs: 'Конфигурация спецификаций',
    },
  },
  es: {
    category: 'Serie de equipos raise boring',
    title: 'Broca tricónica',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada con Image Gen de la broca tricónica con tres conos, superficie dentada y conexión roscada inferior',
      'Imagen refinada con Image Gen del detalle de conos, dientes de carburo y superficie de trituración',
      'Imagen refinada con Image Gen de la broca tricónica especificación 250 con estructura compacta de tres conos',
      'Imagen refinada con Image Gen de la broca tricónica especificación 280 con estructura pesada de tres conos',
      'Imagen refinada con Image Gen de la conexión entre la broca y la barra de perforación en el extremo delantero',
    ],
    topSpecs: [
      ['Tipo de producto', 'Broca tricónica'],
      ['Equipo compatible', 'Equipo raise boring / barra de perforación'],
      ['Proceso de aplicación', 'Perforación de taladro piloto'],
      ['Método de rotura', 'Trituración por empuje y par'],
      ['Posición de conexión', 'Extremo delantero de la barra de perforación'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'La broca tricónica se utiliza durante la perforación del taladro piloto con equipos raise boring. Conectada al extremo delantero de la barra, transfiere el empuje y el par directamente a la roca para producir trituración por rodadura.',
      'Durante la perforación, los conos ruedan, presionan y trituran la roca en el fondo del taladro, creando un orificio guía estable para el escariado inverso posterior. Renyi Machinery puede configurar la broca según la barra, la roca y las condiciones de obra.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Transferencia directa de fuerza: situada en el extremo delantero de la sarta para llevar empuje y par al frente de roca.',
      'Acción de rotura definida: los conos ruedan, presionan y trituran para formar el taladro piloto.',
      'Especificaciones configurables: los materiales cubren opciones de 250 mm, 280 mm y broca tricónica.',
      'Estructura confiable: dientes de carburo y cuerpo de la broca trabajan juntos frente al impacto y desgaste.',
      'Continuidad del proceso: forma primero el orificio guía y luego trabaja con el cabezal de escariado para el escariado inverso.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { application: 'Estructura y aplicación' },
    tableRows: {
      operatingRole: 'Función de trabajo',
      forceTransfer: 'Transferencia de fuerza',
      rockBreaking: 'Método de rotura',
      matchedProcess: 'Proceso compatible',
      availableSpecs: 'Configuración de especificaciones',
    },
  },
};
type RenyiRaiseBoringProductConfig = {
  paths: string[];
  detailHref: string;
  cardImage: string;
  images: string[];
  tableSections: RenyiRaiseBoringLocalizedTableSections;
  tableColumnHeaders?: Record<RenyiLocale, string[]>;
  copy: Record<RenyiLocale, RenyiRaiseBoringProductCopy>;
  bodyClass: string;
};
const RENYI_RAISE_BORING_PRODUCT_CONFIGS: RenyiRaiseBoringProductConfig[] = [
  {
    paths: RENYI_RAIL_RAISE_BORING_PRODUCT_PATHS,
    detailHref: '/zuanji-01/',
    cardImage: RENYI_RAIL_RAISE_BORING_CARD_IMAGE,
    images: RENYI_RAIL_RAISE_BORING_PRODUCT_IMAGES,
    tableSections: RENYI_RAIL_RAISE_BORING_TABLE_SECTIONS,
    copy: RENYI_RAIL_RAISE_BORING_PRODUCT_COPY,
    bodyClass: 'renyi-rail-raise-boring-product',
  },
  {
    paths: RENYI_TRACKLESS_RAISE_BORING_PRODUCT_PATHS,
    detailHref: '/zuanji-02/',
    cardImage: RENYI_TRACKLESS_RAISE_BORING_CARD_IMAGE,
    images: RENYI_TRACKLESS_RAISE_BORING_PRODUCT_IMAGES,
    tableSections: RENYI_TRACKLESS_RAISE_BORING_TABLE_SECTIONS,
    copy: RENYI_TRACKLESS_RAISE_BORING_PRODUCT_COPY,
    bodyClass: 'renyi-trackless-raise-boring-product',
  },
  {
    paths: RENYI_DRILL_RODS_STABILIZERS_PRODUCT_PATHS,
    detailHref: '/zuanji-03/',
    cardImage: RENYI_DRILL_RODS_STABILIZERS_CARD_IMAGE,
    images: RENYI_DRILL_RODS_STABILIZERS_PRODUCT_IMAGES,
    tableSections: RENYI_DRILL_RODS_STABILIZERS_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_DRILL_RODS_STABILIZERS_TABLE_HEADERS,
    copy: RENYI_DRILL_RODS_STABILIZERS_PRODUCT_COPY,
    bodyClass: 'renyi-drill-rods-stabilizers-product',
  },
  {
    paths: RENYI_REAMING_CUTTERHEAD_PRODUCT_PATHS,
    detailHref: '/zuanji-04/',
    cardImage: RENYI_REAMING_CUTTERHEAD_CARD_IMAGE,
    images: RENYI_REAMING_CUTTERHEAD_PRODUCT_IMAGES,
    tableSections: RENYI_REAMING_CUTTERHEAD_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_REAMING_CUTTERHEAD_TABLE_HEADERS,
    copy: RENYI_REAMING_CUTTERHEAD_PRODUCT_COPY,
    bodyClass: 'renyi-reaming-cutterhead-product',
  },
  {
    paths: RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_PATHS,
    detailHref: '/zuanji-05/',
    cardImage: RENYI_ROLLER_CUTTER_ASSEMBLY_CARD_IMAGE,
    images: RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_IMAGES,
    tableSections: RENYI_ROLLER_CUTTER_ASSEMBLY_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_ROLLER_CUTTER_ASSEMBLY_TABLE_HEADERS,
    copy: RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_COPY,
    bodyClass: 'renyi-roller-cutter-assembly-product',
  },
  {
    paths: RENYI_TRICONE_DRILL_BIT_PRODUCT_PATHS,
    detailHref: '/zuanji-06/',
    cardImage: RENYI_TRICONE_DRILL_BIT_CARD_IMAGE,
    images: RENYI_TRICONE_DRILL_BIT_PRODUCT_IMAGES,
    tableSections: RENYI_TRICONE_DRILL_BIT_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_TRICONE_DRILL_BIT_TABLE_HEADERS,
    copy: RENYI_TRICONE_DRILL_BIT_PRODUCT_COPY,
    bodyClass: 'renyi-tricone-drill-bit-product',
  },
];
export const RENYI_NEWS_BANNER_IMAGE = '/renyi/renyi-news-banner-certificates.png';
export const RENYI_ABOUT_BANNER_SLOGAN = '精铸基石，智联全球';
export const RENYI_ABOUT_BANNER_SLOGAN_EN = 'PRECISION FORGES FOUNDATIONS, INTELLIGENCE CONNECTS THE WORLD';
export const RENYI_NEWS_BANNER_SLOGAN = '精铸基石，智联全球';

export const RENYI_COMPANY_NAMES: Record<RenyiLocale, string> = {
  zh: RENYI_COMPANY_NAME,
  en: 'Changsha Renyi Machinery Manufacturing Co., Ltd.',
  ru: 'Чанша Жэньи Машиностроительная компания',
  es: 'Changsha Renyi Fabricación de Maquinaria Co., Ltd.',
};
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
const RENYI_QUICK_NAV_TITLES: Record<RenyiLocale, string> = {
  zh: '快捷导航',
  en: 'Quick Navigation',
  ru: 'Быстрая навигация',
  es: 'Navegación rápida',
};
const RENYI_FOOTER_MENU_COPY = {
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
    submenu: RENYI_HEADER_NAV_ITEMS[2].submenu,
  },
  contact: {
    className: 'm-4 has-sub',
    href: '/lianxiwomen/',
    labels: { zh: '联系我们', en: 'Contact Us', ru: 'Контакты', es: 'Contacto' },
    submenu: RENYI_HEADER_NAV_ITEMS[4].submenu,
  },
} as const;

export const RENYI_ABOUT_BANNER_TITLES: Record<RenyiLocale, string> = {
  zh: '关于',
  en: 'ABOUT',
  ru: 'о нас',
  es: 'INTRODUCCIÓN',
};
export const RENYI_ABOUT_BANNER_SLOGANS: Record<RenyiLocale, string> = {
  zh: RENYI_ABOUT_BANNER_SLOGAN,
  en: 'Precision Forges Foundations, Intelligence Connects the World',
  ru: 'Точность создает основу, интеллект соединяет мир',
  es: 'Precisión que forja bases, inteligencia que conecta el mundo',
};
export const RENYI_NEWS_BANNER_TITLES: Record<RenyiLocale, string> = {
  zh: '新闻',
  en: 'NEWS',
  ru: 'НОВОСТИ',
  es: 'NOTICIAS',
};
export const RENYI_NEWS_BANNER_SLOGANS: Record<RenyiLocale, string> = {
  zh: RENYI_NEWS_BANNER_SLOGAN,
  en: 'Precision Forges Foundations, Intelligence Connects the World',
  ru: 'Точность создает основу, интеллект соединяет мир',
  es: 'Precisión que forja bases, inteligencia que conecta el mundo',
};

const RENYI_IMAGE_ALT_SUFFIXES: Record<RenyiLocale, Array<[string, string]>> = {
  zh: [
    [RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE, '长沙仁毅机械制造有限公司AT-1500天井钻机矿用产品安全标志证书，安全标志编号KED200014，签发日期2020年4月9日，有效期至2025年4月8日'],
    [RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE, '长沙仁毅机械制造有限公司AT-2000天井钻机矿用产品安全标志证书，安全标志编号KED190015，签发日期2019年6月4日，有效期至2024年6月3日'],
    [RENYI_HIGH_TECH_CERTIFICATE_IMAGE, '长沙仁毅机械制造有限公司2020年高新技术企业证书，证书编号GR202043000240'],
    [RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE, '长沙仁毅机械制造有限公司国家高新技术企业牌匾，湖南省科学技术厅、湖南省财政厅、国家税务总局湖南省税务局，2020年'],
    [RENYI_ISO9001_CERTIFICATE_IMAGE, '长沙仁毅机械制造有限公司ISO 9001:2015质量管理体系认证英文证书，证书编号U91912Q030594R1S'],
    [RENYI_ISO9001_CERTIFICATE_CN_IMAGE, '长沙仁毅机械制造有限公司中文ISO 9001:2015管理体系认证证书，证书编号U91912Q030594R1S'],
    [RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE, '江铜股份材料设备部授予长沙仁毅机械制造有限公司优秀国产化合作伙伴奖杯，2014年1月'],
    [RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE, '长沙仁毅机械制造有限公司大型汽车车轮轮胎装拆轮胎吊盘实用新型专利证书，专利号ZL 2020 2 2278917.1，授权公告日2021年6月1日'],
    [RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司大型轮胎轮毂吊装拆破机轮毂吊勾装置实用新型专利证书，专利号ZL 2020 2 2278918.6，授权公告日2021年6月1日'],
    [RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE, '长沙仁毅机械制造有限公司多工位大型轮胎轮毂吊装拆破机实用新型专利证书，专利号ZL 2020 2 2290188.1，授权公告日2021年6月4日'],
    [RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种便于拆卸的天井钻机刀具底座实用新型专利证书，专利号ZL 2020 2 2284164.5，授权公告日2021年6月4日'],
    [RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种天井钻机承载转运及竖直卧放系统实用新型专利证书，专利号ZL 2020 2 2371279.8，授权公告日2021年6月4日'],
    [RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE, '长沙仁毅机械制造有限公司矿用汽车运行故障远程检测系统V1.0计算机软件著作权登记证书，登记号2017SR219771，发证日期2017年5月31日'],
    [RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE, '长沙仁毅机械制造有限公司液压油缸实验台PLC控制系统V1.0计算机软件著作权登记证书，登记号2017SR219765，发证日期2017年5月31日'],
    [RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种具有散热功能的稳定型泵站实用新型专利证书，专利号ZL 2018 2 1461085.3，授权公告日2019年4月26日'],
    [RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种可自由组合耐磨的扩孔刀盘实用新型专利证书，专利号ZL 2018 2 1461084.9，授权公告日2019年4月12日'],
    [RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种天井钻机用不易变形且便于换刀的刀盘实用新型专利证书，专利号ZL 2018 2 1461082.X，授权公告日2019年4月12日'],
    [RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种天井钻机用便于拆装清洗的主机实用新型专利证书，专利号ZL 2018 2 1461083.4，授权公告日2019年4月5日'],
    [RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种大型物料转运车实用新型专利证书，专利号ZL 2018 2 0197137.4，授权公告日2018年9月11日'],
    [RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种大型物料转运U型车厢实用新型专利证书，专利号ZL 2018 2 0197138.9，授权公告日2018年8月31日'],
    [RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司大型浮选机、搅拌机上下轴准确定位连接装置实用新型专利证书，专利号ZL 2017 2 0415482.6，授权公告日2017年12月19日'],
    [RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种新型浮选机、搅拌机轴承体内主轴支撑固定装置实用新型专利证书，专利号ZL 2017 2 0415470.3，授权公告日2017年12月8日'],
    [RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种用于中心充气浮选机的高速回转阀实用新型专利证书，专利号ZL 2017 2 0412134.3，授权公告日2017年11月17日'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种用于加工液压油缸内壁的滚压装置实用新型专利证书，专利号ZL 2017 2 0415579.7，授权公告日2017年11月17日'],
    [RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种能安装在车床上对轴进行磨削、抛光加工的磨头装置实用新型专利证书，专利号ZL 2017 2 0415481.1，授权公告日2017年11月24日'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE, '长沙仁毅机械制造有限公司一种用于加工液压油缸内壁的磨削装置实用新型专利证书，专利号ZL 2017 2 0415660.5，授权公告日2017年11月24日'],
    [RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE, '长沙仁毅机械制造有限公司多体式车轮辋拆卸机实用新型专利证书，专利号ZL 2014 2 0027912.3，授权公告日2014年7月2日'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE, '长沙仁毅机械制造有限公司轮边马达拆装机的浮动托盘实用新型专利证书，专利号ZL 2013 2 0372233.5，授权公告日2014年1月8日'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE, '长沙仁毅机械制造有限公司轮边马达拆装机实用新型专利证书，专利号ZL 2013 2 0372249.6，授权公告日2014年1月8日'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE, '长沙仁毅机械制造有限公司轮边马达拆装机的摆动机构实用新型专利证书，专利号ZL 2013 2 0372262.1，授权公告日2013年12月4日'],
    [RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE, '志高掘进ZEGA系列产品授权再制造中心经销授权书，授权长沙仁毅机械制造有限公司，证书有效期2022年1月1日至2023年12月31日'],
    [RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE, '志高掘进ZEGA经销授权书，授权长沙仁毅机械制造有限公司为战略客户经销商，授权期2021年7月1日至2022年12月31日'],
    [RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE, '志高掘进ZEGA系列产品授权再制造中心通知，授权长沙仁毅机械制造有限公司为长沙授权再制造中心，2022年元月'],
    ['language.gif', '语言选择图标'],
    ['/legacy-assets/ytxingye-16dg51r.gif', '语言选择图标'],
    ['head-btn.jpg', '快捷导航按钮'],
    ['/legacy-assets/ytxingye-124h1r9.jpg', '快捷导航按钮'],
	    ['2m.png', '长沙仁毅微信公众号二维码'],
	    [RENYI_WHATSAPP_QR_IMAGE, '长沙仁毅 WhatsApp 联系二维码'],
	    ['dy.jpg', '长沙仁毅抖音二维码'],
	    ['wx.jpg', '长沙仁毅微信二维码'],
    ['gongan.png', '公安备案图标'],
    ['page-banner-0.png', '长沙仁毅新闻中心页眉装饰图'],
    ['page-banner.png', '长沙仁毅新闻中心移动端页眉装饰图'],
  ],
  en: [
    [RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE, 'AT-1500 raise boring rig Mining Product Safety Mark certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., safety mark number KED200014, issued on April 9, 2020 and valid until April 8, 2025'],
    [RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE, 'AT-2000 raise boring rig Safety Certificate of Approval for Mining Products for Changsha Renyi Machinery Manufacturing Co., Ltd., approval number KED190015, issued on June 4, 2019 and valid until June 3, 2024'],
    [RENYI_HIGH_TECH_CERTIFICATE_IMAGE, '2020 High-Tech Enterprise Certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number GR202043000240'],
    [RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE, 'National High-Tech Enterprise plaque for Changsha Renyi Machinery Manufacturing Co., Ltd., issued by Hunan provincial authorities in 2020'],
    [RENYI_ISO9001_CERTIFICATE_IMAGE, 'ISO 9001:2015 Quality Management System certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number U91912Q030594R1S'],
    [RENYI_ISO9001_CERTIFICATE_CN_IMAGE, 'Chinese ISO 9001:2015 management system certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number U91912Q030594R1S'],
    [RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE, 'Excellent Localization Partner trophy awarded by Jiangxi Copper Co., Ltd. Materials and Equipment Department to Changsha Renyi Machinery Manufacturing Co., Ltd. in January 2014'],
    [RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Large Vehicle Wheel and Tire Mounting/Dismounting Hoist Plate by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2278917.1, authorized on June 1, 2021'],
    [RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Wheel Hub Hook Device for a Large Tire and Wheel Hub Hoisting/Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2278918.6, authorized on June 1, 2021'],
    [RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Multi-Station Large Tire and Wheel Hub Hoisting/Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2290188.1, authorized on June 4, 2021'],
    [RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE, 'Utility Model Patent Certificate for an Easily Removable Raise Boring Machine Cutter Base by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2284164.5, authorized on June 4, 2021'],
    [RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE, 'Utility Model Patent Certificate for a Raise Boring Machine Load Transfer and Vertical/Horizontal Placement System by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2371279.8, authorized on June 4, 2021'],
    [RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE, 'Computer Software Copyright Registration Certificate for Mining Truck Operating Fault Remote Detection System V1.0 by Changsha Renyi Machinery Manufacturing Co., Ltd., registration number 2017SR219771, issued on May 31, 2017'],
    [RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE, 'Computer Software Copyright Registration Certificate for Hydraulic Cylinder Test Bench PLC Control System V1.0 by Changsha Renyi Machinery Manufacturing Co., Ltd., registration number 2017SR219765, issued on May 31, 2017'],
    [RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE, 'Utility Model Patent Certificate for a Heat-Dissipation Stable Pump Station by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461085.3, authorized on April 26, 2019'],
    [RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE, 'Utility Model Patent Certificate for a Freely Combinable Wear-Resistant Reaming Cutterhead by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461084.9, authorized on April 12, 2019'],
    [RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE, 'Utility Model Patent Certificate for a Deformation-Resistant Cutterhead with Convenient Cutter Replacement for Raise Boring Machines by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461082.X, authorized on April 12, 2019'],
    [RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE, 'Utility Model Patent Certificate for a Raise Boring Machine Main Unit Designed for Convenient Disassembly and Cleaning by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461083.4, authorized on April 5, 2019'],
    [RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Large Material Transfer Vehicle by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 0197137.4, authorized on September 11, 2018'],
    [RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Large Material Transfer U-Shaped Carriage by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 0197138.9, authorized on August 31, 2018'],
    [RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for an Accurate Positioning Connection Device for Upper and Lower Shafts of Large Flotation Machines and Agitators by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415482.6, authorized on December 19, 2017'],
    [RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for a New Main Shaft Support and Fixing Device inside the Bearing Body of a Flotation Machine and Agitator by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415470.3, authorized on December 8, 2017'],
    [RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE, 'Utility Model Patent Certificate for a High-Speed Rotary Valve for a Center-Aeration Flotation Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0412134.3, authorized on November 17, 2017'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Rolling Device for Machining the Inner Wall of a Hydraulic Cylinder by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415579.7, authorized on November 17, 2017'],
    [RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Grinding Head Device Mounted on a Lathe for Shaft Grinding and Polishing by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415481.1, authorized on November 24, 2017'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE, 'Utility Model Patent Certificate for a Grinding Device for Machining the Inner Wall of a Hydraulic Cylinder by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415660.5, authorized on November 24, 2017'],
    [RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE, 'Utility Model Patent Certificate for Multi-Body Wheel Rim Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2014 2 0027912.3, authorized on July 2, 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE, 'Utility Model Patent Certificate for Floating Tray of a Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372233.5, authorized on January 8, 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE, 'Utility Model Patent Certificate for Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372249.6, authorized on January 8, 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE, 'Utility Model Patent Certificate for Swing Mechanism of a Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372262.1, authorized on December 4, 2013'],
    [RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE, 'ZEGA Series Authorized Remanufacturing Center distributor authorization certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., valid from January 1, 2022 to December 31, 2023'],
    [RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE, 'ZEGA distributor authorization certificate appointing Changsha Renyi Machinery Manufacturing Co., Ltd. as a strategic customer distributor, valid from July 1, 2021 to December 31, 2022'],
    [RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE, 'ZEGA authorized remanufacturing center notice authorizing Changsha Renyi Machinery Manufacturing Co., Ltd. as the Changsha authorized remanufacturing center, January 2022'],
    ['language.gif', 'Language selector icon'],
    ['/legacy-assets/ytxingye-16dg51r.gif', 'Language selector icon'],
    ['head-btn.jpg', 'Quick navigation button'],
    ['/legacy-assets/ytxingye-124h1r9.jpg', 'Quick navigation button'],
	    ['2m.png', 'Changsha Renyi WeChat public account QR code'],
	    [RENYI_WHATSAPP_QR_IMAGE, 'Changsha Renyi WhatsApp contact QR code'],
	    ['dy.jpg', 'Changsha Renyi Douyin QR code'],
	    ['wx.jpg', 'Changsha Renyi WeChat QR code'],
    ['gongan.png', 'Public security filing icon'],
    ['page-banner-0.png', 'Changsha Renyi news center header decoration'],
    ['page-banner.png', 'Changsha Renyi mobile news center header decoration'],
  ],
  ru: [
    [RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE, 'Сертификат знака безопасности горной продукции для установки AT-1500 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер KED200014, выдан 9 апреля 2020 года, действовал до 8 апреля 2025 года'],
    [RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE, 'Сертификат допуска по безопасности горной продукции для установки AT-2000 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер KED190015, выдан 4 июня 2019 года, действовал до 3 июня 2024 года'],
    [RENYI_HIGH_TECH_CERTIFICATE_IMAGE, 'Сертификат высокотехнологичного предприятия Changsha Renyi Machinery Manufacturing Co., Ltd. 2020 года, номер GR202043000240'],
    [RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE, 'Памятная табличка национального высокотехнологичного предприятия Changsha Renyi Machinery Manufacturing Co., Ltd., выданная органами провинции Хунань в 2020 году'],
    [RENYI_ISO9001_CERTIFICATE_IMAGE, 'Сертификат системы менеджмента качества ISO 9001:2015 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер U91912Q030594R1S'],
    [RENYI_ISO9001_CERTIFICATE_CN_IMAGE, 'Китайский сертификат системы менеджмента ISO 9001:2015 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер U91912Q030594R1S'],
    [RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE, 'Награда Excellent Localization Partner, врученная отделом материалов и оборудования Jiangxi Copper Co., Ltd. компании Changsha Renyi Machinery Manufacturing Co., Ltd. в январе 2014 года'],
    [RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE, 'Свидетельство на полезную модель для подъемной плиты монтажа и демонтажа колес и шин крупногабаритных автомобилей компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2278917.1, дата авторизации 1 июня 2021 года'],
    [RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для крюкового устройства ступицы машины подъема и демонтажа крупных шин и колесных ступиц компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2278918.6, дата авторизации 1 июня 2021 года'],
    [RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE, 'Свидетельство на полезную модель для многостанционной машины подъема и демонтажа крупных шин и колесных ступиц компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2290188.1, дата авторизации 4 июня 2021 года'],
    [RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE, 'Свидетельство на полезную модель для легко демонтируемого основания резцов установки восстающего бурения компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2284164.5, дата авторизации 4 июня 2021 года'],
    [RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE, 'Свидетельство на полезную модель для системы несущего перемещения и вертикально-горизонтального размещения установки восстающего бурения компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2371279.8, дата авторизации 4 июня 2021 года'],
    [RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE, 'Свидетельство о регистрации авторского права на программное обеспечение Mining Truck Operating Fault Remote Detection System V1.0 компании Changsha Renyi Machinery Manufacturing Co., Ltd., регистрационный номер 2017SR219771, выдано 31 мая 2017 года'],
    [RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE, 'Свидетельство о регистрации авторского права на программное обеспечение Hydraulic Cylinder Test Bench PLC Control System V1.0 компании Changsha Renyi Machinery Manufacturing Co., Ltd., регистрационный номер 2017SR219765, выдано 31 мая 2017 года'],
    [RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE, 'Свидетельство на полезную модель для стабильной насосной станции с функцией теплоотвода компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461085.3, дата авторизации 26 апреля 2019 года'],
    [RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE, 'Свидетельство на полезную модель для комбинируемой износостойкой расширительной буровой головки компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461084.9, дата авторизации 12 апреля 2019 года'],
    [RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE, 'Свидетельство на полезную модель для устойчивой к деформации буровой головки установки восстающего бурения с удобной заменой резцов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461082.X, дата авторизации 12 апреля 2019 года'],
    [RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE, 'Свидетельство на полезную модель для главного блока установки восстающего бурения с удобной разборкой и очисткой компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461083.4, дата авторизации 5 апреля 2019 года'],
    [RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE, 'Свидетельство на полезную модель для транспортного средства перевозки крупных материалов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 0197137.4, дата авторизации 11 сентября 2018 года'],
    [RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE, 'Свидетельство на полезную модель для U-образного кузова перевозки крупных материалов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 0197138.9, дата авторизации 31 августа 2018 года'],
    [RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для устройства точного позиционирования и соединения верхнего и нижнего валов крупных флотационных машин и мешалок компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415482.6, дата авторизации 19 декабря 2017 года'],
    [RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для нового устройства опоры и фиксации главного вала внутри корпуса подшипника флотационной машины и мешалки компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415470.3, дата авторизации 8 декабря 2017 года'],
    [RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE, 'Свидетельство на полезную модель для высокоскоростного поворотного клапана центроаэрационной флотационной машины компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0412134.3, дата авторизации 17 ноября 2017 года'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для раскатного устройства обработки внутренней стенки гидроцилиндра компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415579.7, дата авторизации 17 ноября 2017 года'],
    [RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для шлифовально-полировальной головки, устанавливаемой на токарный станок для обработки валов, компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415481.1, дата авторизации 24 ноября 2017 года'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE, 'Свидетельство на полезную модель для шлифовального устройства обработки внутренней стенки гидроцилиндра компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415660.5, дата авторизации 24 ноября 2017 года'],
    [RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE, 'Свидетельство на полезную модель Multi-Body Wheel Rim Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2014 2 0027912.3, дата авторизации 2 июля 2014 года'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE, 'Свидетельство на полезную модель Floating Tray of a Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372233.5, дата авторизации 8 января 2014 года'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE, 'Свидетельство на полезную модель Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372249.6, дата авторизации 8 января 2014 года'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE, 'Свидетельство на полезную модель Swing Mechanism of a Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372262.1, дата авторизации 4 декабря 2013 года'],
    [RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE, 'Дистрибьюторский сертификат авторизованного центра ремануфактуринга продукции ZEGA для Changsha Renyi Machinery Manufacturing Co., Ltd., срок действия с 1 января 2022 года по 31 декабря 2023 года'],
    [RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE, 'Дистрибьюторский сертификат ZEGA, назначающий Changsha Renyi Machinery Manufacturing Co., Ltd. стратегическим дистрибьютором, срок действия с 1 июля 2021 года по 31 декабря 2022 года'],
    [RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE, 'Уведомление об авторизованном центре ремануфактуринга продукции ZEGA, назначающее Changsha Renyi Machinery Manufacturing Co., Ltd. авторизованным центром в Чанше, январь 2022 года'],
    ['language.gif', 'Значок выбора языка'],
    ['/legacy-assets/ytxingye-16dg51r.gif', 'Значок выбора языка'],
    ['head-btn.jpg', 'Кнопка быстрой навигации'],
    ['/legacy-assets/ytxingye-124h1r9.jpg', 'Кнопка быстрой навигации'],
	    ['2m.png', 'QR-код официального аккаунта WeChat Changsha Renyi'],
	    [RENYI_WHATSAPP_QR_IMAGE, 'QR-код WhatsApp для связи с Changsha Renyi'],
	    ['dy.jpg', 'QR-код Douyin Changsha Renyi'],
	    ['wx.jpg', 'QR-код WeChat Changsha Renyi'],
    ['gongan.png', 'Значок регистрации общественной безопасности'],
    ['page-banner-0.png', 'Декоративное изображение заголовка центра новостей Changsha Renyi'],
    ['page-banner.png', 'Декоративное изображение мобильного заголовка центра новостей Changsha Renyi'],
  ],
  es: [
    [RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE, 'Certificado de marca de seguridad para producto minero AT-1500 de Changsha Renyi Machinery Manufacturing Co., Ltd., número KED200014, emitido el 9 de abril de 2020 y válido hasta el 8 de abril de 2025'],
    [RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE, 'Certificado de aprobación de seguridad para producto minero AT-2000 de Changsha Renyi Machinery Manufacturing Co., Ltd., número KED190015, emitido el 4 de junio de 2019 y válido hasta el 3 de junio de 2024'],
    [RENYI_HIGH_TECH_CERTIFICATE_IMAGE, 'Certificado de empresa de alta tecnología 2020 de Changsha Renyi Machinery Manufacturing Co., Ltd., número GR202043000240'],
    [RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE, 'Placa de Empresa Nacional de Alta Tecnología de Changsha Renyi Machinery Manufacturing Co., Ltd., emitida por autoridades de Hunan en 2020'],
    [RENYI_ISO9001_CERTIFICATE_IMAGE, 'Certificado ISO 9001:2015 del sistema de gestión de calidad de Changsha Renyi Machinery Manufacturing Co., Ltd., número U91912Q030594R1S'],
    [RENYI_ISO9001_CERTIFICATE_CN_IMAGE, 'Certificado chino del sistema de gestión ISO 9001:2015 de Changsha Renyi Machinery Manufacturing Co., Ltd., número U91912Q030594R1S'],
    [RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE, 'Trofeo Excellent Localization Partner otorgado por el Departamento de Materiales y Equipos de Jiangxi Copper Co., Ltd. a Changsha Renyi Machinery Manufacturing Co., Ltd. en enero de 2014'],
    [RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una placa de izaje de montaje y desmontaje de ruedas y neumáticos de vehículos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2278917.1, autorizada el 1 de junio de 2021'],
    [RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un dispositivo de gancho de cubo de rueda de una máquina de izaje y desmontaje de neumáticos y cubos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2278918.6, autorizada el 1 de junio de 2021'],
    [RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una máquina multiestación de izaje y desmontaje de neumáticos y cubos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2290188.1, autorizada el 4 de junio de 2021'],
    [RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una base de herramienta de máquina raise boring fácilmente desmontable de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2284164.5, autorizada el 4 de junio de 2021'],
    [RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un sistema de transferencia de carga y colocación vertical/horizontal de máquina raise boring de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2371279.8, autorizada el 4 de junio de 2021'],
    [RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE, 'Certificado de registro de derechos de autor de software para Mining Truck Operating Fault Remote Detection System V1.0 de Changsha Renyi Machinery Manufacturing Co., Ltd., número de registro 2017SR219771, emitido el 31 de mayo de 2017'],
    [RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE, 'Certificado de registro de derechos de autor de software para Hydraulic Cylinder Test Bench PLC Control System V1.0 de Changsha Renyi Machinery Manufacturing Co., Ltd., número de registro 2017SR219765, emitido el 31 de mayo de 2017'],
    [RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una estación de bombeo estable con función de disipación de calor de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461085.3, autorizada el 26 de abril de 2019'],
    [RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un cabezal de escariado resistente al desgaste y combinable de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461084.9, autorizada el 12 de abril de 2019'],
    [RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un cabezal de corte resistente a la deformación y con cambio de cortadores conveniente para máquinas raise boring de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461082.X, autorizada el 12 de abril de 2019'],
    [RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una unidad principal de máquina raise boring diseñada para desmontaje y limpieza convenientes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461083.4, autorizada el 5 de abril de 2019'],
    [RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un vehículo de transferencia de materiales grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 0197137.4, autorizada el 11 de septiembre de 2018'],
    [RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una carrocería en U de transferencia de materiales grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 0197138.9, autorizada el 31 de agosto de 2018'],
    [RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un dispositivo de conexión y posicionamiento preciso de ejes superior e inferior de grandes máquinas de flotación y agitadores de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415482.6, autorizada el 19 de diciembre de 2017'],
    [RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un nuevo dispositivo de soporte y fijación del eje principal dentro del cuerpo de rodamientos de una máquina de flotación y agitador de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415470.3, autorizada el 8 de diciembre de 2017'],
    [RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para una válvula rotativa de alta velocidad para máquina de flotación de aireación central de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0412134.3, autorizada el 17 de noviembre de 2017'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un dispositivo de bruñido por rodillos para mecanizar la pared interior de un cilindro hidráulico de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415579.7, autorizada el 17 de noviembre de 2017'],
    [RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un cabezal de rectificado y pulido montado en torno para mecanizar ejes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415481.1, autorizada el 24 de noviembre de 2017'],
    [RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para un dispositivo de rectificado para mecanizar la pared interior de un cilindro hidráulico de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415660.5, autorizada el 24 de noviembre de 2017'],
    [RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para Multi-Body Wheel Rim Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2014 2 0027912.3, autorizada el 2 de julio de 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para Floating Tray of a Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372233.5, autorizada el 8 de enero de 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372249.6, autorizada el 8 de enero de 2014'],
    [RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE, 'Certificado de patente de modelo de utilidad para Swing Mechanism of a Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372262.1, autorizada el 4 de diciembre de 2013'],
    [RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE, 'Certificado de autorización de distribuidor del Centro Autorizado de Remanufactura de productos ZEGA para Changsha Renyi Machinery Manufacturing Co., Ltd., válido del 1 de enero de 2022 al 31 de diciembre de 2023'],
    [RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE, 'Certificado de autorización de distribuidor ZEGA que nombra a Changsha Renyi Machinery Manufacturing Co., Ltd. como distribuidor estratégico, válido del 1 de julio de 2021 al 31 de diciembre de 2022'],
    [RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE, 'Aviso de centro autorizado de remanufactura de productos ZEGA que autoriza a Changsha Renyi Machinery Manufacturing Co., Ltd. como centro autorizado en Changsha, enero de 2022'],
    ['language.gif', 'Icono de selección de idioma'],
    ['/legacy-assets/ytxingye-16dg51r.gif', 'Icono de selección de idioma'],
    ['head-btn.jpg', 'Botón de navegación rápida'],
    ['/legacy-assets/ytxingye-124h1r9.jpg', 'Botón de navegación rápida'],
	    ['2m.png', 'Código QR de la cuenta pública de WeChat de Changsha Renyi'],
	    [RENYI_WHATSAPP_QR_IMAGE, 'Código QR de contacto de WhatsApp de Changsha Renyi'],
	    ['dy.jpg', 'Código QR de Douyin de Changsha Renyi'],
	    ['wx.jpg', 'Código QR de WeChat de Changsha Renyi'],
    ['gongan.png', 'Icono de registro de seguridad pública'],
    ['page-banner-0.png', 'Decoración del encabezado del centro de noticias de Changsha Renyi'],
    ['page-banner.png', 'Decoración móvil del encabezado del centro de noticias de Changsha Renyi'],
  ],
};

const RENYI_FOREIGN_FOOTER_CONTACTS: Record<Exclude<RenyiLocale, 'zh'>, { title: string; items: string[] }> = {
  en: {
    title: 'Contact Us',
    items: [
      'Sales phone: 0731-84033881',
      'Recruitment phone: +86 139 0848 9376',
      'Marketing center: 0731-84033872',
      'Sales manager: +86 139 0848 9376',
      'Email: info@csrenyi.com',
    ],
  },
  ru: {
    title: 'Контакты',
    items: [
      'Телефон отдела продаж: 0731-84033881',
      'Телефон отдела кадров: +86 139 0848 9376',
      'Маркетинговый центр: 0731-84033872',
      'Менеджер по продажам: +86 139 0848 9376',
      'Эл. почта: info@csrenyi.com',
    ],
  },
  es: {
    title: 'Contacto',
    items: [
      'Teléfono de ventas: 0731-84033881',
      'Teléfono de contratación: +86 139 0848 9376',
      'Centro de marketing: 0731-84033872',
      'Gerente de ventas: +86 139 0848 9376',
      'Correo electrónico: info@csrenyi.com',
    ],
  },
};

const RENYI_FOOTER_PRODUCT_LABELS: Record<RenyiLocale, string[]> = {
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

const RENYI_HEADER_PRODUCT_LABELS: Record<RenyiLocale, string[]> = {
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

const RENYI_PRODUCT_SERIES_CARD_LABELS: Record<RenyiLocale, Record<string, string>> = {
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

const RENYI_PRODUCT_SERIES_CARD_IMAGES: Record<string, string> = {
  '/zuanjixilie/': '/renyi/product-category-raise-boring-site-card.png?v=20260509',
  '/yougangxuangua/': '/renyi/product-category-hydraulic-suspension-cylinders.png?v=20260429',
  '/pro_category/zaoyantaiche/': '/renyi/product-category-structural-components-fill.png?v=20260513-imagegen-no-shadow',
  '/fuxuanjixilie/': '/renyi/product-category-mineral-processing-fill.png?v=20260429-fill',
  '/pro_category/dexiafuwuche/': '/renyi/product-category-special-equipment-yard.png?v=20260429',
};

const RENYI_PRODUCT_SERIES_CARD_ALTS: Record<RenyiLocale, Record<string, string>> = {
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

const RENYI_PRODUCT_SERIES_CARD_DESCRIPTIONS: Record<RenyiLocale, Record<string, string>> = {
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

const RENYI_PRODUCT_SERIES_HREFS = {
  raiseBoring: '/zuanjixilie/',
  hydraulic: '/yougangxuangua/',
  structural: '/jiegouxilie/',
  mineral: '/fuxuanjixilie/',
  special: '/zhuanyongxilie/',
} as const;

const RENYI_HEADER_PRODUCT_SERIES_HREFS = [
  RENYI_PRODUCT_SERIES_HREFS.raiseBoring,
  RENYI_PRODUCT_SERIES_HREFS.hydraulic,
  RENYI_PRODUCT_SERIES_HREFS.mineral,
  RENYI_PRODUCT_SERIES_HREFS.special,
  RENYI_PRODUCT_SERIES_HREFS.structural,
] as const;

const RENYI_FOOTER_PRODUCT_SERIES_HREFS = [
  RENYI_PRODUCT_SERIES_HREFS.raiseBoring,
  RENYI_PRODUCT_SERIES_HREFS.hydraulic,
  RENYI_PRODUCT_SERIES_HREFS.structural,
  RENYI_PRODUCT_SERIES_HREFS.mineral,
  RENYI_PRODUCT_SERIES_HREFS.special,
] as const;

const RENYI_PRODUCT_SERIES_CARD_HREF_ALIASES: Record<string, string> = {
  '/pro_category/chanyunjixilie/': RENYI_PRODUCT_SERIES_HREFS.raiseBoring,
  '/pro_category/yunkuangkache/': RENYI_PRODUCT_SERIES_HREFS.hydraulic,
  '/pro_category/fuwuchexilie/': '/pro_category/dexiafuwuche/',
};

const RENYI_SPARE_PARTS_SERIES_HREF = '/pro_category/beijianzhongxin/';
const RENYI_SPARE_PARTS_CATEGORY_PATHS = [
  '/pro_category/beijianzhongxin/',
  '/pro_category/beijianzhongxin/page/2/',
  '/pro_category/yeyajian/',
  '/pro_category/dianqijian/',
  '/pro_category/donglichuandongjian/',
  '/pro_category/qita/',
];
const RENYI_LOCALE_PATH_PREFIXES = ['', '/en', '/ru', '/es'] as const;
const RENYI_REMOVED_SPARE_PARTS_PATHS = new Set(
  RENYI_SPARE_PARTS_CATEGORY_PATHS.flatMap((path) => RENYI_LOCALE_PATH_PREFIXES.map((prefix) => `${prefix}${path}`)),
);

function isRenyiRemovedSparePartsPath(pathname: string) {
  return RENYI_REMOVED_SPARE_PARTS_PATHS.has(normalizeSitePath(pathname));
}

function getRenyiProductLandingPath(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (normalizedPath.startsWith('/en/')) {
    return '/en/chanpinzhanshi/';
  }

  if (normalizedPath.startsWith('/ru/')) {
    return '/ru/chanpinzhanshi/';
  }

  if (normalizedPath.startsWith('/es/')) {
    return '/es/chanpinzhanshi/';
  }

  return '/chanpinzhanshi/';
}

type RenyiLocalizedText = Record<RenyiLocale, string>;
const RENYI_LOCALES = ['zh', 'en', 'ru', 'es'] as const;
type RenyiHydraulicCard = {
  href: string;
  image: string;
  title: RenyiLocalizedText;
  category: RenyiLocalizedText;
  imageAlt: RenyiLocalizedText;
  specs: Record<RenyiLocale, Array<[string, string]>>;
};
type RenyiHydraulicCategoryConfig = {
  paths: string[];
  bodyClass: string;
  copy: Record<RenyiLocale, { title: string; subtitle?: string; inquiry: string; more: string }>;
  cards: RenyiHydraulicCard[];
};
type RenyiHydraulicProductVariant = {
  columnHeader: RenyiLocalizedText;
  equipmentType: RenyiLocalizedText;
  matchedHost: string;
  mainProduct: RenyiLocalizedText;
  application: RenyiLocalizedText;
  image: string;
  imageAlt: RenyiLocalizedText;
};
type RenyiHydraulicProductConfig = {
  paths: string[];
  detailHref: string;
  parentHref: string;
  bodyClass: string;
  category: RenyiLocalizedText;
  title: RenyiLocalizedText;
  cardImage: string;
  images: string[];
  variants: RenyiHydraulicProductVariant[];
};

const RENYI_HYDRAULIC_CATEGORY_BANNER_IMAGE = '/renyi/product-category-hydraulic-suspension-cylinders-banner.png?v=20260512-balanced';
const RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE = '/renyi/product-category-structural-components-banner.png?v=20260513-imagegen-sharp-banner';
const RENYI_MINERAL_CATEGORY_BANNER_IMAGE = '/renyi/product-category-mineral-processing-banner.png?v=20260516-imagegen-full-machine';
const RENYI_SPECIAL_EQUIPMENT_CATEGORY_BANNER_IMAGE = '/renyi/product-category-special-equipment-banner.png?v=20260516-imagegen-no-shadow';
export const RENYI_QUALITY_CONTROL_BANNER_IMAGE = '/renyi/renyi-quality-control-lab-banner-imagegen-ad.jpg?v=20260517-imagegen-ad';
export const RENYI_SERVICE_MENU_BACKGROUND_IMAGE = '/renyi/renyi-quality-control-lab-banner-imagegen-ad.jpg?v=20260518-service-fog';
const RENYI_QUALITY_CONTROL_TESTING_IMAGE = '/renyi/renyi-quality-control-hardness-torque-bench-imagegen-ad.jpg?v=20260517-imagegen-ad';
const RENYI_QUALITY_CONTROL_LAB_IMAGE = '/renyi/renyi-quality-control-carbon-sulfur-analyzer-imagegen-ad.jpg?v=20260517-imagegen-ad';
const RENYI_AFTER_SALES_NDT_IMAGE = '/renyi/renyi-after-sales-service-philosophy-imagegen.jpg?v=20260517-imagegen-ads';
const RENYI_AFTER_SALES_CYLINDER_TEST_IMAGE = '/renyi/renyi-after-sales-service-system-imagegen.jpg?v=20260517-imagegen-ads';
const RENYI_AFTER_SALES_WELDING_IMAGE = '/renyi/renyi-after-sales-customer-training-imagegen.jpg?v=20260517-imagegen-ads';
const RENYI_SERVICE_PAGE_PATHS = new Set(['/fuwuzhichi/', '/en/fuwuzhichi/', '/ru/fuwuzhichi/', '/es/fuwuzhichi/']);

const RENYI_HYDRAULIC_SERIES_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '油缸悬挂系列', subtitle: 'HYDRAULIC CYLINDER & SUSPENSION SERIES', inquiry: '在线留言', more: '了解更多' },
  en: { title: 'Hydraulic Cylinder & Suspension Series', inquiry: 'Contact Us', more: 'Learn more' },
  ru: { title: 'Серия гидроцилиндров и подвесок', inquiry: 'Связаться с нами', more: 'Подробнее' },
  es: { title: 'Serie de cilindros hidráulicos y suspensión', inquiry: 'Contáctenos', more: 'Aprende más' },
};
const RENYI_HYDRAULIC_ENGINEERING_CATEGORY: RenyiLocalizedText = {
  zh: '工程机械类',
  en: 'Construction Machinery',
  ru: 'Инженерная техника',
  es: 'Maquinaria de ingeniería',
};
const RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY: RenyiLocalizedText = {
  zh: '特种车辆类（矿卡与铰卡）',
  en: 'Special Vehicles (Mining Trucks & Articulated Trucks)',
  ru: 'Специальные автомобили (карьерные и сочлененные самосвалы)',
  es: 'Vehículos especiales (mineros y articulados)',
};
const RENYI_STRUCTURAL_SERIES_CATEGORY: RenyiLocalizedText = {
  zh: '结构件系列',
  en: 'Structural Components Series',
  ru: 'Серия металлоконструкций',
  es: 'Serie de componentes estructurales',
};
const RENYI_STRUCTURAL_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '结构件系列', subtitle: 'STRUCTURAL COMPONENTS SERIES', inquiry: '在线留言', more: '了解更多' },
  en: { title: 'Structural Components Series', inquiry: 'Contact Us', more: 'Learn more' },
  ru: { title: 'Серия металлоконструкций', inquiry: 'Связаться с нами', more: 'Подробнее' },
  es: { title: 'Serie de componentes estructurales', inquiry: 'Contáctenos', more: 'Aprende más' },
};
const RENYI_MINERAL_SERIES_CATEGORY: RenyiLocalizedText = {
  zh: '选矿设备系列',
  en: 'Mineral Processing Equipment Series',
  ru: 'Серия обогатительного оборудования',
  es: 'Serie de equipos de beneficio mineral',
};
const RENYI_FLOTATION_CATEGORY: RenyiLocalizedText = {
  zh: '浮选机',
  en: 'Flotation Machine',
  ru: 'Флотационная машина',
  es: 'Máquina de flotación',
};
const RENYI_MINERAL_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '选矿设备系列', subtitle: 'MINERAL PROCESSING EQUIPMENT SERIES', inquiry: '在线留言', more: '了解更多' },
  en: { title: 'Mineral Processing Equipment Series', inquiry: 'Contact Us', more: 'Learn more' },
  ru: { title: 'Серия обогатительного оборудования', inquiry: 'Связаться с нами', more: 'Подробнее' },
  es: { title: 'Serie de equipos de beneficio mineral', inquiry: 'Contáctenos', more: 'Aprende más' },
};
const RENYI_FLOTATION_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '浮选机', subtitle: 'FLOTATION MACHINE', inquiry: '在线留言', more: '了解更多' },
  en: { title: 'Flotation Machine', inquiry: 'Contact Us', more: 'Learn more' },
  ru: { title: 'Флотационная машина', inquiry: 'Связаться с нами', more: 'Подробнее' },
  es: { title: 'Máquina de flotación', inquiry: 'Contáctenos', more: 'Aprende más' },
};
const RENYI_SERVICE_BANNER_COPY: Record<RenyiLocale, { title: string; headline: string; subtitle: string }> = {
  zh: {
    title: '质量控制',
    headline: '先进检测手段与科学管理体系',
    subtitle: 'QUALITY CONTROL',
  },
  en: {
    title: 'Quality Control',
    headline: 'Advanced Testing and Scientific Management',
    subtitle: 'QUALITY CONTROL',
  },
  ru: {
    title: 'Контроль качества',
    headline: 'Современные испытания и научная система управления',
    subtitle: 'QUALITY CONTROL',
  },
  es: {
    title: 'Control de calidad',
    headline: 'Ensayos avanzados y gestión científica',
    subtitle: 'QUALITY CONTROL',
  },
};
const RENYI_QUALITY_CONTROL_SECTION_COPY: Record<
  RenyiLocale,
  {
    sectionTitle: string;
    headline: string;
    summary: string;
    cards: Array<{ title: string; paragraphs: string[]; image: string; alt: string }>;
  }
> = {
  zh: {
    sectionTitle: '产品质量',
    headline: '高端装备、精密检测、可靠交付',
    summary:
      '仁毅机械拥有全面的检测实验室，从原材料、化学检测、力学性能测试、无损检测、疲劳试验，到客户要求的特殊检测方法，覆盖设计、生产、研发、测试与反馈闭环，持续提升产品设计和交付可靠性。',
    cards: [
      {
        title: '先进的检测手段',
        paragraphs: [
          '实验室覆盖原材料检测、化学分析、力学性能测试、无损检测和疲劳试验等环节，可根据客户要求配置特殊检测方法，为每一批产品建立可追溯的质量依据。',
        ],
        image: RENYI_QUALITY_CONTROL_TESTING_IMAGE,
        alt: '长沙仁毅硬度扭力测试台',
      },
      {
        title: '科学的管理体系',
        paragraphs: [
          '仁毅机械在产品研发、生产和检测各环节设定品质、安全及价值标准，遵循 ISO 9001 质量认证要求，运用科学的生产管理流程进行严格质量管控。',
          '完整的质量保证体系贯穿设计、制造、检验与客户反馈，确保产品品质和可靠性稳定交付。',
        ],
        image: RENYI_QUALITY_CONTROL_LAB_IMAGE,
        alt: '长沙仁毅红外碳硫分析仪检测实验室',
      },
    ],
  },
  en: {
    sectionTitle: 'Product Quality',
    headline: 'High-end Equipment, Precise Testing, Reliable Delivery',
    summary:
      'Renyi maintains a comprehensive testing laboratory covering raw materials, chemical analysis, mechanical performance, nondestructive testing, fatigue testing, and special inspection methods required by customers. This closed loop from design, production, R&D, testing, and feedback continually improves product design and delivery reliability.',
    cards: [
      {
        title: 'Advanced Testing Methods',
        paragraphs: [
          'The laboratory supports raw-material inspection, chemical analysis, mechanical testing, nondestructive inspection, fatigue testing, and customer-specific verification, giving each product a traceable quality basis before delivery.',
        ],
        image: RENYI_QUALITY_CONTROL_TESTING_IMAGE,
        alt: 'Renyi hardness and torque testing bench',
      },
      {
        title: 'Scientific Management System',
        paragraphs: [
          'Across product R&D, production, and inspection, Renyi sets high standards for quality, safety, and value while following ISO 9001 quality management requirements.',
          'A complete quality assurance system connects design, manufacturing, inspection, and customer feedback to keep product performance reliable.',
        ],
        image: RENYI_QUALITY_CONTROL_LAB_IMAGE,
        alt: 'Renyi infrared carbon sulfur analyzer laboratory',
      },
    ],
  },
  ru: {
    sectionTitle: 'Качество продукции',
    headline: 'Высокоточное оборудование, точные испытания, надежная поставка',
    summary:
      'Renyi располагает комплексной испытательной лабораторией: контроль сырья, химический анализ, испытания механических свойств, неразрушающий контроль, усталостные испытания и специальные методы по требованиям клиентов. Связка проектирования, производства, НИОКР, испытаний и обратной связи постоянно повышает надежность конструкции и поставки.',
    cards: [
      {
        title: 'Современные методы испытаний',
        paragraphs: [
          'Лаборатория охватывает контроль сырья, химический анализ, механические испытания, неразрушающий контроль, усталостные испытания и специальные проверки по требованиям заказчика, формируя прослеживаемую основу качества для каждой партии продукции.',
        ],
        image: RENYI_QUALITY_CONTROL_TESTING_IMAGE,
        alt: 'Стенд Renyi для испытаний твердости и крутящего момента',
      },
      {
        title: 'Научная система управления',
        paragraphs: [
          'На этапах разработки, производства и контроля Renyi задает высокие стандарты качества, безопасности и ценности, соблюдая требования системы менеджмента качества ISO 9001.',
          'Полная система обеспечения качества связывает проектирование, изготовление, инспекцию и обратную связь клиентов, поддерживая стабильную надежность продукции.',
        ],
        image: RENYI_QUALITY_CONTROL_LAB_IMAGE,
        alt: 'Лаборатория Renyi с инфракрасным анализатором углерода и серы',
      },
    ],
  },
  es: {
    sectionTitle: 'Calidad del producto',
    headline: 'Equipos avanzados, pruebas precisas y entrega confiable',
    summary:
      'Renyi cuenta con un laboratorio de ensayos integral que cubre materias primas, análisis químico, pruebas de propiedades mecánicas, ensayos no destructivos, pruebas de fatiga y métodos especiales requeridos por los clientes. El ciclo cerrado de diseño, producción, I+D, pruebas y retroalimentación mejora continuamente la fiabilidad del diseño y la entrega.',
    cards: [
      {
        title: 'Métodos de ensayo avanzados',
        paragraphs: [
          'El laboratorio cubre inspección de materias primas, análisis químico, pruebas mecánicas, ensayos no destructivos, pruebas de fatiga y verificaciones específicas del cliente, creando una base de calidad trazable antes de la entrega.',
        ],
        image: RENYI_QUALITY_CONTROL_TESTING_IMAGE,
        alt: 'Banco de pruebas de dureza y torsión de Renyi',
      },
      {
        title: 'Sistema de gestión científico',
        paragraphs: [
          'En I+D, producción e inspección, Renyi establece estándares altos de calidad, seguridad y valor, siguiendo los requisitos de gestión de calidad ISO 9001.',
          'El sistema completo de aseguramiento de calidad conecta diseño, fabricación, inspección y retroalimentación del cliente para mantener un rendimiento fiable del producto.',
        ],
        image: RENYI_QUALITY_CONTROL_LAB_IMAGE,
        alt: 'Laboratorio Renyi con analizador infrarrojo de carbono y azufre',
      },
    ],
  },
};

const RENYI_AFTER_SALES_SECTION_COPY: Record<
  RenyiLocale,
  {
    sectionTitle: string;
    intro: string;
    cards: Array<{ title: string; eyebrow: string; paragraphs: string[]; image: string; alt: string; active?: boolean }>;
  }
> = {
  zh: {
    sectionTitle: '售后服务',
    intro:
      '仁毅机械将质量第一、服务第一和诚信经营贯穿客户服务全过程，依托高端加工设备、全面检测实验室与 ISO 9001 管理体系，把交付验证、问题响应、修复改进和客户反馈纳入同一套服务闭环。',
    cards: [
      {
        title: '服务理念',
        eyebrow: 'SERVICE PHILOSOPHY',
        paragraphs: [
          '以客户设备稳定运行为中心，从产品交付前的检测验证到交付后的使用反馈，持续追踪品质、安全和价值标准。',
          '用可验证的质量依据回应现场问题，用研发、生产、检测协同保障服务结果。',
        ],
        image: RENYI_AFTER_SALES_NDT_IMAGE,
        alt: '长沙仁毅无损检测检验试验台',
      },
      {
        title: '售后体系',
        eyebrow: 'AFTER-SALES SYSTEM',
        paragraphs: [
          '围绕油缸试压、无损检测、力学性能测试和疲劳试验等手段，判断问题来源，形成修复、改进、复检和交付记录。',
          '研发、生产、质量检测与营销售后协同响应，为矿山装备和工程机械部件提供可靠的技术支持。',
        ],
        image: RENYI_AFTER_SALES_CYLINDER_TEST_IMAGE,
        alt: '长沙仁毅油缸试压试验台',
        active: true,
      },
      {
        title: '客户培训',
        eyebrow: 'CUSTOMER TRAINING',
        paragraphs: [
          '结合检测标准、设备结构、维护保养和安全操作要点，为客户团队讲解日常检查、异常反馈和关键部件维护方法。',
          '通过现场问题复盘和技术沟通，帮助客户提升设备维护效率，降低重复故障风险。',
        ],
        image: RENYI_AFTER_SALES_WELDING_IMAGE,
        alt: '长沙仁毅焊接机器人及加工设备',
      },
    ],
  },
  en: {
    sectionTitle: 'After-sales Service',
    intro:
      'Renyi carries quality first, service first and integrity through the full customer service process. Advanced processing equipment, comprehensive testing laboratories and ISO 9001 management connect delivery verification, issue response, repair improvement and customer feedback into one service loop.',
    cards: [
      {
        title: 'Service Philosophy',
        eyebrow: 'SERVICE PHILOSOPHY',
        paragraphs: [
          'We focus on stable equipment operation, tracking quality, safety and value standards from pre-delivery verification to customer feedback after use.',
          'Field issues are answered with verifiable quality evidence and with coordinated support from R&D, production and inspection teams.',
        ],
        image: RENYI_AFTER_SALES_NDT_IMAGE,
        alt: 'Renyi nondestructive inspection test bench',
      },
      {
        title: 'After-sales System',
        eyebrow: 'AFTER-SALES SYSTEM',
        paragraphs: [
          'Hydraulic cylinder pressure testing, nondestructive inspection, mechanical testing and fatigue testing help identify causes and form records for repair, improvement, reinspection and delivery.',
          'R&D, production, quality inspection and sales service work together to support mining equipment and engineering machinery components.',
        ],
        image: RENYI_AFTER_SALES_CYLINDER_TEST_IMAGE,
        alt: 'Renyi hydraulic cylinder pressure test bench',
        active: true,
      },
      {
        title: 'Customer Training',
        eyebrow: 'CUSTOMER TRAINING',
        paragraphs: [
          'Based on testing standards, equipment structure, maintenance and safe operation, Renyi explains routine inspection, abnormal feedback and key component maintenance methods.',
          'On-site review and technical communication help customers improve maintenance efficiency and reduce repeated failures.',
        ],
        image: RENYI_AFTER_SALES_WELDING_IMAGE,
        alt: 'Renyi welding robot and processing equipment',
      },
    ],
  },
  ru: {
    sectionTitle: 'Послепродажное обслуживание',
    intro:
      'Renyi внедряет принципы качества, сервиса и добросовестной работы во весь процесс обслуживания клиентов. Передовое производственное оборудование, испытательная лаборатория и система ISO 9001 связывают проверку перед поставкой, реакцию на вопросы, ремонтные улучшения и обратную связь.',
    cards: [
      {
        title: 'Философия сервиса',
        eyebrow: 'SERVICE PHILOSOPHY',
        paragraphs: [
          'В центре внимания находится стабильная работа оборудования заказчика: стандарты качества, безопасности и ценности отслеживаются от проверки перед поставкой до обратной связи после эксплуатации.',
          'Полевые вопросы рассматриваются на основе проверяемых данных качества и совместной работы НИОКР, производства и контроля.',
        ],
        image: RENYI_AFTER_SALES_NDT_IMAGE,
        alt: 'Стенд Renyi для неразрушающего контроля',
      },
      {
        title: 'Система сервиса',
        eyebrow: 'AFTER-SALES SYSTEM',
        paragraphs: [
          'Испытания гидроцилиндров давлением, неразрушающий контроль, механические и усталостные испытания помогают определить причину проблемы и оформить ремонт, улучшение, повторную проверку и поставку.',
          'НИОКР, производство, контроль качества и сервис продаж совместно поддерживают горное оборудование и компоненты инженерной техники.',
        ],
        image: RENYI_AFTER_SALES_CYLINDER_TEST_IMAGE,
        alt: 'Стенд Renyi для испытания гидроцилиндров давлением',
        active: true,
      },
      {
        title: 'Обучение клиентов',
        eyebrow: 'CUSTOMER TRAINING',
        paragraphs: [
          'С учетом стандартов испытаний, конструкции оборудования, обслуживания и безопасной эксплуатации Renyi объясняет ежедневный контроль, передачу информации о неисправностях и обслуживание ключевых узлов.',
          'Разбор ситуаций на объекте и техническая коммуникация повышают эффективность обслуживания и снижают риск повторных отказов.',
        ],
        image: RENYI_AFTER_SALES_WELDING_IMAGE,
        alt: 'Сварочный робот и производственное оборудование Renyi',
      },
    ],
  },
  es: {
    sectionTitle: 'Servicio postventa',
    intro:
      'Renyi integra calidad primero, servicio primero e integridad en todo el proceso de atención al cliente. Los equipos de procesamiento avanzados, el laboratorio de pruebas integral y la gestión ISO 9001 conectan verificación de entrega, respuesta a problemas, mejora de reparación y retroalimentación del cliente.',
    cards: [
      {
        title: 'Filosofía de servicio',
        eyebrow: 'SERVICE PHILOSOPHY',
        paragraphs: [
          'Nos centramos en la operación estable del equipo del cliente y seguimos estándares de calidad, seguridad y valor desde la verificación previa a la entrega hasta la retroalimentación posterior.',
          'Los problemas de campo se responden con evidencia de calidad verificable y coordinación entre I+D, producción e inspección.',
        ],
        image: RENYI_AFTER_SALES_NDT_IMAGE,
        alt: 'Banco de ensayos no destructivos de Renyi',
      },
      {
        title: 'Sistema postventa',
        eyebrow: 'AFTER-SALES SYSTEM',
        paragraphs: [
          'Las pruebas de presión de cilindros hidráulicos, ensayos no destructivos, pruebas mecánicas y de fatiga ayudan a identificar causas y formar registros de reparación, mejora, reinspección y entrega.',
          'I+D, producción, inspección de calidad y servicio comercial trabajan juntos para apoyar equipos mineros y componentes de maquinaria de ingeniería.',
        ],
        image: RENYI_AFTER_SALES_CYLINDER_TEST_IMAGE,
        alt: 'Banco de prueba de presión de cilindros hidráulicos de Renyi',
        active: true,
      },
      {
        title: 'Capacitación del cliente',
        eyebrow: 'CUSTOMER TRAINING',
        paragraphs: [
          'Con base en normas de prueba, estructura del equipo, mantenimiento y operación segura, Renyi explica inspección diaria, reporte de anomalías y mantenimiento de componentes clave.',
          'La revisión de problemas de campo y la comunicación técnica ayudan a mejorar la eficiencia de mantenimiento y reducir fallas repetidas.',
        ],
        image: RENYI_AFTER_SALES_WELDING_IMAGE,
        alt: 'Robot de soldadura y equipo de procesamiento de Renyi',
      },
    ],
  },
};

function renyiStructuralCard(
  href: string,
  title: RenyiLocalizedText,
  image: string,
  imageAlt: RenyiLocalizedText,
  specs: Record<RenyiLocale, Array<[string, string]>>,
): RenyiHydraulicCard {
  return {
    href,
    image,
    title,
    category: RENYI_STRUCTURAL_SERIES_CATEGORY,
    imageAlt,
    specs,
  };
}

const RENYI_STRUCTURAL_CATEGORY_CONFIG: RenyiHydraulicCategoryConfig = {
  paths: [
    '/jiegouxilie/',
    '/en/jiegouxilie/',
    '/ru/jiegouxilie/',
    '/es/jiegouxilie/',
    '/pro_category/zaoyantaiche/',
    '/en/pro_category/zaoyantaiche/',
    '/ru/pro_category/zaoyantaiche/',
    '/es/pro_category/zaoyantaiche/',
  ],
  bodyClass: 'renyi-structural-category',
  copy: RENYI_STRUCTURAL_CATEGORY_COPY,
  cards: [
	    renyiStructuralCard(
	      '/jiegou-01/',
	      renyiLocalizedText('后桥壳', 'Rear Axle Housing', 'Корпус заднего моста', 'Carcasa de eje trasero'),
	      '/renyi/product-structural-rear-axle-housing.jpg?v=20260513-imagegen',
			      renyiLocalizedText('矿用电动轮自卸车后桥壳结构件实拍图', 'Mining electric-drive truck rear axle housing structural component photo', 'Фото корпуса заднего моста карьерного самосвала', 'Foto de carcasa de eje trasero de camión minero'),
	      {
	        zh: [['典型型号', '适配多数车型'], ['应用部位', '矿用电动轮自卸车后桥'], ['工艺能力', '重型焊接 / 大型机加工']],
	        en: [['Typical models', 'Fits most vehicle models'], ['Application', 'Mining electric-drive truck rear axle'], ['Process capability', 'Heavy welding / large machining']],
	        ru: [['Типовые модели', 'Подходит для большинства моделей техники'], ['Применение', 'Задний мост карьерного самосвала'], ['Технология', 'Тяжелая сварка / крупная механообработка']],
	        es: [['Modelos típicos', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Eje trasero de camión minero eléctrico'], ['Proceso', 'Soldadura pesada / mecanizado grande']],
      },
    ),
    renyiStructuralCard(
      '/jiegou-03/',
      renyiLocalizedText('副车架', 'Subframe', 'Подрамник', 'Subchasis'),
      '/renyi/product-structural-subframe.jpg?v=20260513-subframe-imagegen',
	      renyiLocalizedText('矿用电动轮自卸车副车架结构件实拍图', 'Mining truck subframe structural component photo', 'Фото подрамника карьерного самосвала', 'Foto de subchasis de camión minero'),
	      {
	        zh: [['典型型号', '适配多数车型'], ['应用部位', '矿用自卸车副车架'], ['制造重点', '焊缝质量 / 尺寸精度 / 装配基准']],
	        en: [['Typical model', 'Fits most vehicle models'], ['Application', 'Mining truck subframe'], ['Manufacturing focus', 'Weld quality / dimensional accuracy / assembly datum']],
	        ru: [['Типовая модель', 'Подходит для большинства моделей техники'], ['Применение', 'Подрамник карьерного самосвала'], ['Фокус производства', 'Качество сварки / точность размеров / база сборки']],
	        es: [['Modelo típico', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Subchasis de camión minero'], ['Enfoque', 'Soldadura / precisión dimensional / base de montaje']],
      },
    ),
    renyiStructuralCard(
      '/jiegou-05/',
      renyiLocalizedText('车斗', 'Truck Body', 'Кузов самосвала', 'Caja de camión'),
      '/renyi/product-structural-truck-body.jpg?v=20260513-truck-body-imagegen',
	      renyiLocalizedText('铰接式矿用车辆车斗结构件实拍图', 'Articulated mining truck body structural component photo', 'Фото кузова сочлененного карьерного самосвала', 'Foto de caja de camión minero articulado'),
	      {
	        zh: [['典型型号', '适配多数车型'], ['应用部位', '铰接式矿用车辆车斗'], ['性能要求', '耐磨 / 抗冲击 / 大载荷']],
	        en: [['Typical model', 'Fits most vehicle models'], ['Application', 'Articulated truck body'], ['Requirements', 'Wear resistance / impact resistance / heavy load']],
	        ru: [['Типовая модель', 'Подходит для большинства моделей техники'], ['Применение', 'Кузов сочлененного самосвала'], ['Требования', 'Износостойкость / ударостойкость / высокая нагрузка']],
	        es: [['Modelo típico', 'Apto para la mayoría de modelos de vehículo'], ['Aplicación', 'Caja de camión articulado'], ['Requisitos', 'Desgaste / impacto / carga pesada']],
      },
    ),
  ],
};

const RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_PATHS = [
  '/jiegou-01/',
  '/en/jiegou-01/',
  '/ru/jiegou-01/',
  '/es/jiegou-01/',
  '/pro_category/xianchanghunzhuangruhuazhayaoche/',
  '/en/pro_category/xianchanghunzhuangruhuazhayaoche/',
  '/ru/pro_category/xianchanghunzhuangruhuazhayaoche/',
  '/es/pro_category/xianchanghunzhuangruhuazhayaoche/',
];
const RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_IMAGES = [
  '/renyi/product-structural-rear-axle-housing-730e.jpg?v=20260513-imagegen-aligned',
  '/renyi/product-structural-rear-axle-housing-830e.jpg?v=20260513-imagegen-aligned',
  '/renyi/product-structural-rear-axle-housing-r190-339.jpg?v=20260513-imagegen-aligned',
  '/renyi/product-structural-rear-axle-housing-r190-341.jpg?v=20260513-imagegen-aligned',
];
const RENYI_STRUCTURAL_REAR_AXLE_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['矿用电动轮车型', '重载矿用车型', '矿用车辆结构件', '矿用车辆结构件'],
  en: ['mining electric-drive truck', 'heavy-duty mining truck', 'mining vehicle structural component', 'mining vehicle structural component'],
  ru: ['mining electric-drive truck', 'heavy-duty mining truck', 'mining vehicle structural component', 'mining vehicle structural component'],
  es: ['mining electric-drive truck', 'heavy-duty mining truck', 'mining vehicle structural component', 'mining vehicle structural component'],
};
const RENYI_STRUCTURAL_REAR_AXLE_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['后桥壳', '后桥壳', '后桥壳', '后桥壳及后悬挂'] },
        { key: 'matchedHost', values: ['矿用电动轮自卸车', '矿用电动轮自卸车', '矿用电动轮自卸车', '矿用电动轮自卸车'] },
        { key: 'structureScope', values: ['桥壳本体 / 法兰 / 安装座', '桥壳本体 / 端面 / 连接孔', '桥壳本体 / 侧向安装结构', '桥壳与后悬挂连接结构'] },
        { key: 'process', values: ['高强钢焊接 / 大型机加工', '焊接成形 / 镗铣加工', '结构修复 / 机加工校正', '整体改造 / 装配基准控制'] },
        { key: 'supplyMode', values: ['新制 / 修复 / 国产化替代', '新制 / 修复 / 国产化替代', '修复 / 改造 / 国产化替代', '整体改造 / 维修配套'] },
      ],
    },
  ],
  en: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Rear axle housing', 'Rear axle housing', 'Rear axle housing', 'Rear axle housing and suspension'] },
        { key: 'matchedHost', values: ['Mining electric-drive truck', 'Mining electric-drive truck', 'Mining electric-drive truck', 'Mining electric-drive truck'] },
        { key: 'structureScope', values: ['Housing body / flange / mounting seats', 'Housing body / end face / connection holes', 'Housing body / side mounting structure', 'Housing and rear suspension connection'] },
        { key: 'process', values: ['High-strength steel welding / large machining', 'Welded forming / boring and milling', 'Structural repair / machining correction', 'Rebuild / assembly datum control'] },
        { key: 'supplyMode', values: ['New fabrication / repair / localized replacement', 'New fabrication / repair / localized replacement', 'Repair / rebuild / localized replacement', 'Rebuild / maintenance support'] },
      ],
    },
  ],
  ru: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Корпус заднего моста', 'Корпус заднего моста', 'Корпус заднего моста', 'Корпус моста и подвеска'] },
        { key: 'matchedHost', values: ['Карьерный электросамосвал', 'Карьерный электросамосвал', 'Карьерный электросамосвал', 'Карьерный электросамосвал'] },
        { key: 'structureScope', values: ['Корпус / фланец / монтажные места', 'Корпус / торец / соединительные отверстия', 'Корпус / боковая монтажная конструкция', 'Соединение корпуса и задней подвески'] },
        { key: 'process', values: ['Сварка высокопрочной стали / крупная обработка', 'Сварная формовка / растачивание и фрезерование', 'Ремонт конструкции / корректировка обработкой', 'Модернизация / контроль сборочных баз'] },
        { key: 'supplyMode', values: ['Новое изготовление / ремонт / локальная замена', 'Новое изготовление / ремонт / локальная замена', 'Ремонт / модернизация / локальная замена', 'Модернизация / ремонтная поддержка'] },
      ],
    },
  ],
  es: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Carcasa de eje trasero', 'Carcasa de eje trasero', 'Carcasa de eje trasero', 'Carcasa de eje y suspensión'] },
        { key: 'matchedHost', values: ['Camión minero eléctrico', 'Camión minero eléctrico', 'Camión minero eléctrico', 'Camión minero eléctrico'] },
        { key: 'structureScope', values: ['Cuerpo / brida / asientos de montaje', 'Cuerpo / cara final / orificios de conexión', 'Cuerpo / estructura lateral de montaje', 'Conexión de carcasa y suspensión trasera'] },
        { key: 'process', values: ['Soldadura de acero de alta resistencia / mecanizado grande', 'Formado soldado / mandrinado y fresado', 'Reparación estructural / corrección por mecanizado', 'Reconstrucción / control de referencias de montaje'] },
        { key: 'supplyMode', values: ['Fabricación nueva / reparación / sustitución localizada', 'Fabricación nueva / reparación / sustitución localizada', 'Reparación / reconstrucción / sustitución localizada', 'Reconstrucción / soporte de mantenimiento'] },
      ],
    },
  ],
};
const RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '结构件系列',
    title: '后桥壳',
    inquiry: '在线留言',
    imageAlts: [
      '精修后的矿用设备矿用电动轮车型后桥壳近景照片，展示后桥壳壳体、孔位和焊接结构',
      '精修后的矿用设备重载矿用车型后桥壳照片，展示大型后桥壳端面、吊耳和连接结构',
      '精修后的矿用车辆后桥壳照片，展示红色后桥壳壳体与侧向连接端',
      '精修后的矿用车辆后桥壳及后悬挂照片，展示后悬挂油缸和液压管路连接',
    ],
    topSpecs: [
      ['典型型号', '适配多数车型'],
      ['产品范围', '后桥壳、尾梁、后悬挂连接结构'],
      ['应用部位', '矿用电动轮自卸车后桥及悬挂总成'],
      ['工艺能力', '高强钢焊接 / 大型镗铣加工 / 孔位校正'],
      ['服务方式', '新制、修复、整体改造与国产化替代'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '后桥壳是大型矿用电动轮自卸车后桥与后悬挂系统中的关键承载结构件，承担车架连接、载荷传递、悬挂支承和端面装配等功能。',
      '仁毅机械围绕矿用电动轮车型、重载矿用车型及同类矿用车辆积累了后桥壳新制、修复和整体改造经验，可结合原件状态、孔位磨损、焊缝疲劳和装配基准要求提供定制化加工服务。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '承载可靠：面向大吨位矿用车辆，重点控制壳体强度、焊缝质量和关键连接位置。',
      '加工基准清晰：法兰端面、装配孔位和悬挂连接座可通过大型镗铣加工保证尺寸一致性。',
      '适配车型明确：资料覆盖矿用电动轮车型、重载矿用车型以及同类矿用车辆平台。',
      '修复与改造兼顾：可针对磨损、变形、裂纹和装配偏差进行修复校正或整体改造。',
      '交付贴近现场：根据客户旧件、图纸或样件条件，提供国产化替代和维修配套支持。',
    ],
    specsTitle: '技术参数',
    tableSections: { application: '适配与工艺' },
    tableRows: {
      productType: '产品类型',
      matchedHost: '适配主机',
      structureScope: '结构范围',
      process: '主要工艺',
      supplyMode: '供货方式',
    },
  },
  en: {
    category: 'Structural Components Series',
    title: 'Rear Axle Housing',
    inquiry: 'Contact Us',
    imageAlts: [
      'Refined close-up image of a mining electric-drive truck rear axle housing with shell, holes, and welded structure',
      'Refined heavy-duty mining truck rear axle housing image showing the large end face, lifting lugs, and connections',
      'Refined mining vehicle structural component rear axle housing image showing the red housing and side connection',
      'Refined mining vehicle structural component rear axle housing and rear suspension image showing cylinders and hydraulic lines',
    ],
    topSpecs: [
      ['Typical models', 'Fits most vehicle models'],
      ['Product scope', 'Rear axle housing, rear beam, rear suspension connections'],
      ['Application', 'Rear axle and suspension assembly for mining electric-drive trucks'],
      ['Process capability', 'High-strength steel welding / large boring and milling / hole correction'],
      ['Service mode', 'New fabrication, repair, rebuild, and localized replacement'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The rear axle housing is a critical load-bearing structural component in the rear axle and suspension system of large mining electric-drive trucks, supporting frame connection, load transfer, suspension mounting, and end-face assembly.',
      'Renyi Machinery has accumulated experience in new fabrication, repair, and rebuild work for mining electric-drive truck and heavy-duty mining truck housings. Services can be configured according to used-part condition, hole wear, weld fatigue, and assembly datum requirements.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Reliable load capacity: designed around large-tonnage mining trucks with focus on shell strength, weld quality, and key connection positions.',
      'Controlled machining datum: flange faces, mounting holes, and suspension seats can be controlled through large-scale boring and milling.',
      'Clear model coverage: materials cover electric-drive mining trucks, heavy-duty mining trucks, and similar mining vehicle platforms.',
      'Repair and rebuild capability: supports correction of wear, deformation, cracks, and assembly deviation.',
      'Field-oriented delivery: localized replacement and repair support can be provided based on used parts, drawings, or samples.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { application: 'Application and Process' },
    tableRows: {
      productType: 'Product type',
      matchedHost: 'Matched host',
      structureScope: 'Structure scope',
      process: 'Main process',
      supplyMode: 'Supply mode',
    },
  },
  ru: {
    category: 'Серия металлоконструкций',
    title: 'Корпус заднего моста',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Обработанное крупное фото корпуса заднего моста mining electric-drive truck с корпусом, отверстиями и сварной конструкцией',
      'Обработанное фото корпуса заднего моста heavy-duty mining truck с торцом, проушинами и соединениями',
      'Обработанное фото корпуса заднего моста mining vehicle structural component красного цвета',
      'Обработанное фото корпуса заднего моста и задней подвески mining vehicle structural component с цилиндрами и гидролиниями',
    ],
    topSpecs: [
      ['Типовые модели', 'Подходит для большинства моделей техники'],
      ['Объем изделия', 'Корпус заднего моста, задняя балка, соединения подвески'],
      ['Применение', 'Задний мост и подвеска карьерного электросамосвала'],
      ['Технология', 'Сварка высокопрочной стали / крупное растачивание и фрезерование / корректировка отверстий'],
      ['Формат поставки', 'Новое изготовление, ремонт, модернизация и локальная замена'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Корпус заднего моста является ключевой несущей металлоконструкцией в системе заднего моста и подвески крупных карьерных электросамосвалов. Он отвечает за соединение с рамой, передачу нагрузки, опору подвески и монтаж по торцевым базам.',
      'Renyi Machinery имеет опыт изготовления, ремонта и модернизации корпусов для карьерных самосвалов с электроприводом и тяжелых карьерных самосвалов. Решение подбирается по состоянию старой детали, износу отверстий, усталости сварных швов и требованиям к сборочным базам.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Надежная несущая способность: контроль прочности корпуса, качества сварки и ключевых соединений для тяжелых карьерных машин.',
      'Точные базы обработки: фланцы, монтажные отверстия и места крепления подвески контролируются крупным растачиванием и фрезерованием.',
      'Понятная совместимость: материалы охватывают карьерные электросамосвалы, тяжелые карьерные самосвалы и аналогичные платформы.',
      'Ремонт и модернизация: возможна корректировка износа, деформации, трещин и сборочных отклонений.',
      'Поставка под условия площадки: поддержка локальной замены и ремонта по старой детали, чертежам или образцам.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { application: 'Применение и технология' },
    tableRows: {
      productType: 'Тип изделия',
      matchedHost: 'Совместимая машина',
      structureScope: 'Состав конструкции',
      process: 'Основная технология',
      supplyMode: 'Формат поставки',
    },
  },
  es: {
    category: 'Serie de componentes estructurales',
    title: 'Carcasa de eje trasero',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada de primer plano de carcasa de eje trasero mining electric-drive truck con cuerpo, orificios y soldadura',
      'Imagen refinada de carcasa de eje trasero heavy-duty mining truck con cara final, orejetas y conexiones',
      'Imagen refinada de carcasa de eje trasero mining vehicle structural component de color rojo',
      'Imagen refinada de carcasa de eje trasero y suspensión mining vehicle structural component con cilindros y líneas hidráulicas',
    ],
    topSpecs: [
      ['Modelos típicos', 'Apto para la mayoría de modelos de vehículo'],
      ['Alcance', 'Carcasa de eje trasero, viga trasera, conexiones de suspensión'],
      ['Aplicación', 'Eje trasero y suspensión de camiones mineros eléctricos'],
      ['Proceso', 'Soldadura de acero de alta resistencia / mandrinado y fresado grande / corrección de orificios'],
      ['Servicio', 'Fabricación nueva, reparación, reconstrucción y sustitución localizada'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'La carcasa de eje trasero es un componente estructural portante clave en el eje trasero y la suspensión de grandes camiones mineros eléctricos. Soporta conexión al bastidor, transferencia de carga, montaje de suspensión y ensamblaje por caras de referencia.',
      'Renyi Machinery tiene experiencia en fabricación, reparación y reconstrucción para camiones mineros eléctricos y camiones mineros de servicio pesado. El servicio puede adaptarse al estado de la pieza usada, desgaste de orificios, fatiga de soldaduras y requisitos de referencia de montaje.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Capacidad portante confiable: enfocada en resistencia del cuerpo, calidad de soldadura y puntos clave de conexión para camiones mineros pesados.',
      'Referencias de mecanizado controladas: bridas, orificios de montaje y asientos de suspensión mediante mandrinado y fresado de gran tamaño.',
      'Cobertura clara de modelos: camiones mineros eléctricos, camiones mineros pesados y plataformas similares.',
      'Reparación y reconstrucción: corrección de desgaste, deformación, grietas y desviaciones de montaje.',
      'Entrega orientada al sitio: soporte de sustitución localizada y reparación según pieza usada, planos o muestras.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { application: 'Aplicación y proceso' },
    tableRows: {
      productType: 'Tipo de producto',
      matchedHost: 'Equipo compatible',
      structureScope: 'Alcance estructural',
      process: 'Proceso principal',
      supplyMode: 'Modo de suministro',
    },
  },
};
const RENYI_STRUCTURAL_SUBFRAME_PRODUCT_PATHS = [
  '/jiegou-03/',
  '/en/jiegou-03/',
  '/ru/jiegou-03/',
  '/es/jiegou-03/',
  '/pro_category/shengjiangpingtaiche/',
  '/en/pro_category/shengjiangpingtaiche/',
  '/ru/pro_category/shengjiangpingtaiche/',
  '/es/pro_category/shengjiangpingtaiche/',
];
const RENYI_STRUCTURAL_SUBFRAME_PRODUCT_IMAGES = [
  '/renyi/product-structural-subframe.jpg?v=20260513-subframe-imagegen',
  '/renyi/product-structural-subframe-630e-assembly.jpg?v=20260513-subframe-imagegen',
  '/renyi/product-structural-subframe-630e-angle.jpg?v=20260513-subframe-imagegen',
  '/renyi/product-structural-subframe-r190-341.jpg?v=20260513-subframe-imagegen',
  '/renyi/product-structural-subframe-suspension-lever-support.jpg?v=20260513-subframe-imagegen',
];
const RENYI_STRUCTURAL_SUBFRAME_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['副车架', '矿用设备副车架总成', '矿用设备副车架', '矿用车辆结构件', '悬挂杠支座'],
  en: ['Subframe', 'Mining Truck Subframe Assembly', 'Mining Truck Subframe', 'mining vehicle structural component', 'Suspension Lever Support'],
  ru: ['Подрамник', 'Узел подрамника карьерного самосвала', 'Подрамник карьерного самосвала', 'mining vehicle structural component', 'Опора рычага подвески'],
  es: ['Subchasis', 'Conjunto de subchasis para camión minero', 'Subchasis para camión minero', 'mining vehicle structural component', 'Soporte de barra de suspensión'],
};
const RENYI_STRUCTURAL_SUBFRAME_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['副车架', '副车架总成', '副车架', '副车架', '悬挂杠支座'] },
        { key: 'matchedHost', values: ['矿用电动轮自卸车', '重载矿用自卸车', '重载矿用自卸车', '矿用车辆结构件', '矿用自卸车悬挂系统'] },
        { key: 'structureScope', values: ['主梁 / 横梁 / 安装座 / 吊耳', '动力总成支承 / 前横梁 / 侧支座', '双纵梁 / 端部销座 / 支撑耳板', '连接耳板 / 方管梁 / 装配孔', '弧形支座 / 衬套孔 / 销轴孔'] },
        { key: 'process', values: ['高强钢焊接 / 尺寸校正', '焊接成形 / 装配基准控制', '焊缝修复 / 孔位加工', '结构修复 / 机加工校正', '焊接成形 / 孔位精加工'] },
        { key: 'supplyMode', values: ['新制 / 修复 / 国产化替代', '修复 / 改造 / 国产化替代', '新制 / 修复 / 国产化替代', '修复 / 改造 / 国产化替代', '新制 / 维修配套'] },
      ],
    },
  ],
  en: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Subframe', 'Subframe assembly', 'Subframe', 'Subframe', 'Suspension lever support'] },
        { key: 'matchedHost', values: ['Mining electric-drive truck', 'mining truck and similar mining vehicle platforms', 'mining truck and similar mining vehicle platforms', 'mining vehicle structural component mining truck', 'Mining dump truck suspension system'] },
        { key: 'structureScope', values: ['Main beams / cross beams / mounting seats / lifting lugs', 'Powertrain support / front cross beam / side seats', 'Twin longitudinal beams / end pin seats / support lugs', 'Connection lugs / box beam / mounting holes', 'Curved support / bushing bore / pin holes'] },
        { key: 'process', values: ['High-strength steel welding / dimensional correction', 'Welded forming / assembly datum control', 'Weld repair / hole machining', 'Structural repair / machining correction', 'Welded forming / precision hole machining'] },
        { key: 'supplyMode', values: ['New fabrication / repair / localized replacement', 'Repair / rebuild / localized replacement', 'New fabrication / repair / localized replacement', 'Repair / rebuild / localized replacement', 'New fabrication / maintenance support'] },
      ],
    },
  ],
  ru: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Подрамник', 'Узел подрамника', 'Подрамник', 'Подрамник', 'Опора рычага подвески'] },
        { key: 'matchedHost', values: ['Карьерный электросамосвал', 'Карьерный самосвал mining truck', 'Карьерный самосвал mining truck', 'Карьерный самосвал mining vehicle structural component', 'Система подвески карьерного самосвала'] },
        { key: 'structureScope', values: ['Главные балки / поперечины / монтажные места / проушины', 'Опора силового блока / передняя поперечина / боковые опоры', 'Две продольные балки / концевые пальцевые места / опорные проушины', 'Соединительные проушины / коробчатая балка / монтажные отверстия', 'Дуговая опора / отверстие втулки / отверстия пальцев'] },
        { key: 'process', values: ['Сварка высокопрочной стали / корректировка размеров', 'Сварная формовка / контроль сборочных баз', 'Ремонт сварных швов / обработка отверстий', 'Ремонт конструкции / корректировка обработкой', 'Сварная формовка / точная обработка отверстий'] },
        { key: 'supplyMode', values: ['Новое изготовление / ремонт / локальная замена', 'Ремонт / модернизация / локальная замена', 'Новое изготовление / ремонт / локальная замена', 'Ремонт / модернизация / локальная замена', 'Новое изготовление / ремонтная поддержка'] },
      ],
    },
  ],
  es: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Subchasis', 'Conjunto de subchasis', 'Subchasis', 'Subchasis', 'Soporte de barra de suspensión'] },
        { key: 'matchedHost', values: ['Camión minero eléctrico', 'Camión minero mining truck', 'Camión minero mining truck', 'Camión minero mining vehicle structural component', 'Sistema de suspensión de camión minero'] },
        { key: 'structureScope', values: ['Vigas principales / travesaños / asientos / orejetas', 'Soporte de tren motriz / travesaño delantero / apoyos laterales', 'Doble viga longitudinal / asientos de pasador / orejetas', 'Orejetas de conexión / viga cajón / orificios de montaje', 'Soporte curvo / alojamiento de buje / orificios de pasador'] },
        { key: 'process', values: ['Soldadura de acero de alta resistencia / corrección dimensional', 'Formado soldado / control de referencias de montaje', 'Reparación de soldadura / mecanizado de orificios', 'Reparación estructural / corrección por mecanizado', 'Formado soldado / mecanizado preciso de orificios'] },
        { key: 'supplyMode', values: ['Fabricación nueva / reparación / sustitución localizada', 'Reparación / reconstrucción / sustitución localizada', 'Fabricación nueva / reparación / sustitución localizada', 'Reparación / reconstrucción / sustitución localizada', 'Fabricación nueva / soporte de mantenimiento'] },
      ],
    },
  ],
};
const RENYI_STRUCTURAL_SUBFRAME_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '结构件系列',
    title: '副车架',
    inquiry: '在线留言',
    imageAlts: [
      '精修后的矿用车副车架照片，展示双纵梁、横梁、吊耳和安装座',
      '精修后的矿用设备矿用车型副车架总成照片，展示动力总成支承和前横梁结构',
      '精修后的矿用设备矿用车型副车架斜视照片，展示双纵梁、端部销座和支撑耳板',
      '精修后的矿用车辆副车架照片，展示连接耳板、方管梁和装配孔',
      '精修后的矿用自卸车悬挂杠支座照片，展示弧形支座、衬套孔和销轴孔',
    ],
    topSpecs: [
      ['典型型号', '适配多数车型'],
      ['产品范围', '副车架、副车架总成、悬挂杠支座及连接结构'],
      ['应用部位', '矿用电动轮自卸车车架与悬挂连接部位'],
      ['工艺能力', '高强钢焊接 / 大型机加工 / 装配基准校正'],
      ['服务方式', '新制、修复、改造与国产化替代'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '副车架是大型矿用电动轮自卸车车架与悬挂系统之间的重要承载结构件，承担载荷传递、悬挂支承、动力总成定位和连接基准等功能。',
      '仁毅机械围绕矿用电动轮车型、重载矿用车型及同类矿用车辆平台，积累了副车架及悬挂杠支座的新制、修复和国产化替代经验，可根据旧件、图纸或样件状态提供定制化加工。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '承载结构可靠：重点控制主梁、横梁、支座和关键焊缝强度。',
      '装配基准清晰：安装孔位、销孔和连接面可通过机加工与校正保证一致性。',
      '适配车型明确：覆盖矿用电动轮车型、重载矿用车型及同类电动轮矿用车。',
      '修复与新制兼顾：支持裂纹、变形、孔位磨损和连接座偏差的修复改造。',
      '交付贴近现场：可按旧件测绘、图纸或样件条件提供国产化替代和维修配套。',
    ],
    specsTitle: '技术参数',
    tableSections: { application: '适配与工艺' },
    tableRows: {
      productType: '产品类型',
      matchedHost: '适配主机',
      structureScope: '结构范围',
      process: '主要工艺',
      supplyMode: '供货方式',
    },
  },
  en: {
    category: 'Structural Components Series',
    title: 'Subframe',
    inquiry: 'Contact Us',
    imageAlts: [
      'Refined mining truck subframe image showing twin longitudinal beams, cross beams, lifting lugs, and mounting seats',
      'Refined mining truck subframe assembly image showing the powertrain support and front cross beam',
      'Refined oblique mining truck subframe image showing twin beams, end pin seats, and support lugs',
      'Refined mining vehicle structural component subframe image showing connection lugs, box beams, and mounting holes',
      'Refined mining dump truck suspension lever support image showing curved supports, bushing bores, and pin holes',
    ],
    topSpecs: [
      ['Typical models', 'Fits most vehicle models'],
      ['Product scope', 'Subframes, subframe assemblies, suspension lever supports, and connection structures'],
      ['Application', 'Frame and suspension connection area of mining electric-drive trucks'],
      ['Process capability', 'High-strength steel welding / large machining / assembly datum correction'],
      ['Service mode', 'New fabrication, repair, rebuild, and localized replacement'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The subframe is an important load-bearing structural component between the frame and suspension system of large mining electric-drive trucks. It supports load transfer, suspension mounting, powertrain positioning, and connection datum control.',
      'Renyi Machinery has accumulated experience in new fabrication, repair, and localized replacement for mining truck, mining vehicle structural component, and related suspension lever supports. Customized machining can be provided according to used parts, drawings, or samples.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Reliable load-bearing structure: key control over main beams, cross beams, support seats, and critical weld strength.',
      'Clear assembly datum: mounting holes, pin holes, and connection faces can be controlled through machining and correction.',
      'Clear model coverage: supports typical electric-drive mining trucks such as mining truck and mining vehicle structural component.',
      'Repair and new fabrication together: supports cracks, deformation, hole wear, and connection-seat deviation repair.',
      'Field-oriented delivery: localized replacement and maintenance support can be provided based on used-part measurement, drawings, or samples.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { application: 'Application and Process' },
    tableRows: {
      productType: 'Product type',
      matchedHost: 'Matched host',
      structureScope: 'Structure scope',
      process: 'Main process',
      supplyMode: 'Supply mode',
    },
  },
  ru: {
    category: 'Серия металлоконструкций',
    title: 'Подрамник',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Обработанное фото подрамника карьерного самосвала с двумя продольными балками, поперечинами, проушинами и монтажными местами',
      'Обработанное фото узла подрамника mining truck с опорой силового блока и передней поперечиной',
      'Обработанное наклонное фото подрамника mining truck с двумя балками, пальцевыми местами и опорными проушинами',
      'Обработанное фото подрамника mining vehicle structural component с соединительными проушинами, коробчатыми балками и монтажными отверстиями',
      'Обработанное фото опор рычага подвески карьерного самосвала с дуговыми опорами, отверстиями втулок и пальцев',
    ],
    topSpecs: [
      ['Типовые модели', 'Подходит для большинства моделей техники'],
      ['Объем изделия', 'Подрамники, узлы подрамников, опоры рычага подвески и соединительные конструкции'],
      ['Применение', 'Зона соединения рамы и подвески карьерного электросамосвала'],
      ['Технология', 'Сварка высокопрочной стали / крупная механообработка / корректировка сборочных баз'],
      ['Формат поставки', 'Новое изготовление, ремонт, модернизация и локальная замена'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Подрамник является важной несущей металлоконструкцией между рамой и системой подвески крупного карьерного электросамосвала. Он отвечает за передачу нагрузки, опору подвески, позиционирование силового блока и контроль соединительных баз.',
      'Renyi Machinery имеет опыт изготовления, ремонта и локальной замены подрамников карьерных самосвалов и опор рычага подвески. Обработка может выполняться по старой детали, чертежам или образцам.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Надежная несущая конструкция: контроль главных балок, поперечин, опорных мест и критичных сварных швов.',
      'Четкие сборочные базы: монтажные отверстия, отверстия пальцев и соединительные поверхности контролируются обработкой и корректировкой.',
      'Понятная совместимость: поддержка типовых электросамосвалов mining truck и mining vehicle structural component.',
      'Ремонт и новое изготовление: поддержка ремонта трещин, деформации, износа отверстий и отклонений соединительных мест.',
      'Поставка под условия площадки: локальная замена и ремонтная поддержка по измерению старой детали, чертежам или образцам.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { application: 'Применение и технология' },
    tableRows: {
      productType: 'Тип изделия',
      matchedHost: 'Совместимая машина',
      structureScope: 'Состав конструкции',
      process: 'Основная технология',
      supplyMode: 'Формат поставки',
    },
  },
  es: {
    category: 'Serie de componentes estructurales',
    title: 'Subchasis',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen refinada de subchasis de camión minero con doble viga longitudinal, travesaños, orejetas y asientos de montaje',
      'Imagen refinada de conjunto de subchasis mining truck con soporte de tren motriz y travesaño delantero',
      'Imagen refinada oblicua de subchasis mining truck con doble viga, asientos de pasador y orejetas',
      'Imagen refinada de subchasis mining vehicle structural component con orejetas de conexión, vigas cajón y orificios de montaje',
      'Imagen refinada de soportes de barra de suspensión de camión minero con soportes curvos, alojamientos de buje y orificios de pasador',
    ],
    topSpecs: [
      ['Modelos típicos', 'Apto para la mayoría de modelos de vehículo'],
      ['Alcance', 'Subchasis, conjuntos de subchasis, soportes de barra de suspensión y estructuras de conexión'],
      ['Aplicación', 'Zona de conexión entre bastidor y suspensión de camiones mineros eléctricos'],
      ['Proceso', 'Soldadura de acero de alta resistencia / mecanizado grande / corrección de referencias de montaje'],
      ['Servicio', 'Fabricación nueva, reparación, reconstrucción y sustitución localizada'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'El subchasis es un componente estructural portante importante entre el bastidor y la suspensión de grandes camiones mineros eléctricos. Soporta transferencia de carga, montaje de suspensión, posicionamiento del tren motriz y control de referencias de conexión.',
      'Renyi Machinery tiene experiencia en fabricación, reparación y sustitución localizada para mining truck, mining vehicle structural component y soportes de barra de suspensión relacionados. El mecanizado puede adaptarse a piezas usadas, planos o muestras.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Estructura portante confiable: control de vigas principales, travesaños, soportes y soldaduras críticas.',
      'Referencias de montaje claras: orificios de montaje, orificios de pasador y caras de conexión mediante mecanizado y corrección.',
      'Cobertura clara de modelos: camiones mineros eléctricos, camiones mineros pesados y plataformas similares.',
      'Reparación y fabricación nueva: reparación de grietas, deformaciones, desgaste de orificios y desviaciones de asientos de conexión.',
      'Entrega orientada al sitio: sustitución localizada y soporte de mantenimiento según medición de pieza usada, planos o muestras.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { application: 'Aplicación y proceso' },
    tableRows: {
      productType: 'Tipo de producto',
      matchedHost: 'Equipo compatible',
      structureScope: 'Alcance estructural',
      process: 'Proceso principal',
      supplyMode: 'Modo de suministro',
    },
  },
};
const RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_PATHS = [
  '/jiegou-05/',
  '/en/jiegou-05/',
  '/ru/jiegou-05/',
  '/es/jiegou-05/',
  '/pro_category/yunrenxilie/',
  '/en/pro_category/yunrenxilie/',
  '/ru/pro_category/yunrenxilie/',
  '/es/pro_category/yunrenxilie/',
];
const RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_IMAGES = [
  '/renyi/product-structural-truck-body.jpg?v=20260513-truck-body-imagegen',
  '/renyi/product-structural-truck-body-rear.jpg?v=20260513-truck-body-imagegen',
  '/renyi/product-structural-truck-body-interior.jpg?v=20260513-truck-body-imagegen',
  '/renyi/product-structural-truck-body-underside.jpg?v=20260513-truck-body-imagegen',
];
const RENYI_STRUCTURAL_TRUCK_BODY_TABLE_HEADERS: Record<RenyiLocale, string[]> = {
  zh: ['铰接式矿用车辆 articulated mining truck 车斗', '后部卸料结构', '耐磨内腔', '底部铰接结构'],
  en: ['articulated mining truck Truck Body', 'Rear Dump Structure', 'Wear-Resistant Interior', 'Underside Hinge Structure'],
  ru: ['Кузов articulated mining truck', 'Задняя разгрузочная часть', 'Износостойкая внутренняя часть', 'Нижние шарнирные узлы'],
  es: ['Caja articulated mining truck', 'Estructura trasera de descarga', 'Interior antidesgaste', 'Estructura inferior articulada'],
};
const RENYI_STRUCTURAL_TRUCK_BODY_TABLE_SECTIONS: Record<RenyiLocale, RenyiRaiseBoringTableSections> = {
  zh: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['铰接式矿用车车斗', '车斗后部结构', '车斗耐磨内腔', '车斗底部连接结构'] },
        { key: 'matchedHost', values: ['铰接式矿用车辆 articulated mining truck 铰卡', '铰接式矿用车辆 articulated mining truck 铰卡', '铰接式矿用车辆 articulated mining truck 铰卡', '铰接式矿用车辆 articulated mining truck 铰卡'] },
        { key: 'structureScope', values: ['侧板 / 底板 / 前挡板 / 加强筋', '尾部卸料口 / 后铰点 / 起吊耳', '耐磨底板 / 侧板内衬 / 上沿结构', '底部加强梁 / 铰接座 / 安装板'] },
        { key: 'process', values: ['高强钢焊接 / 整体成形', '焊接成形 / 尺寸校正', '耐磨板处理 / 边缘加固', '焊接成形 / 铰点孔位校正'] },
        { key: 'supplyMode', values: ['新制 / 修复 / 国产化替代', '修复 / 改造 / 维修配套', '修复 / 耐磨升级 / 国产化替代', '修复 / 改造 / 维修配套'] },
      ],
    },
  ],
  en: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Articulated mining truck body', 'Rear body structure', 'Wear-resistant body interior', 'Underside connection structure'] },
        { key: 'matchedHost', values: ['articulated mining truck articulated truck', 'articulated mining truck articulated truck', 'articulated mining truck articulated truck', 'articulated mining truck articulated truck'] },
        { key: 'structureScope', values: ['Side panels / floor plate / front shield / ribs', 'Rear dump opening / hinge points / lifting lugs', 'Wear floor / side liner / upper rim', 'Bottom reinforcing beams / hinge seats / mounting plates'] },
        { key: 'process', values: ['High-strength steel welding / integral forming', 'Welded forming / dimensional correction', 'Wear plate treatment / edge reinforcement', 'Welded forming / hinge hole correction'] },
        { key: 'supplyMode', values: ['New fabrication / repair / localized replacement', 'Repair / rebuild / maintenance support', 'Repair / wear upgrade / localized replacement', 'Repair / rebuild / maintenance support'] },
      ],
    },
  ],
  ru: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Кузов сочлененного карьерного самосвала', 'Задняя часть кузова', 'Износостойкая внутренняя часть кузова', 'Нижняя соединительная конструкция'] },
        { key: 'matchedHost', values: ['Сочлененный самосвал articulated mining truck', 'Сочлененный самосвал articulated mining truck', 'Сочлененный самосвал articulated mining truck', 'Сочлененный самосвал articulated mining truck'] },
        { key: 'structureScope', values: ['Боковые борта / днище / передний щит / ребра', 'Задняя разгрузочная кромка / шарниры / проушины', 'Износостойкое днище / боковая футеровка / верхний кант', 'Нижние усилители / шарнирные места / монтажные пластины'] },
        { key: 'process', values: ['Сварка высокопрочной стали / цельная формовка', 'Сварная формовка / корректировка размеров', 'Обработка износостойких плит / усиление кромок', 'Сварная формовка / корректировка отверстий шарниров'] },
        { key: 'supplyMode', values: ['Новое изготовление / ремонт / локальная замена', 'Ремонт / модернизация / ремонтная поддержка', 'Ремонт / усиление износа / локальная замена', 'Ремонт / модернизация / ремонтная поддержка'] },
      ],
    },
  ],
  es: [
    {
      key: 'application',
      rows: [
        { key: 'productType', values: ['Caja de camión minero articulado', 'Estructura trasera de caja', 'Interior antidesgaste de caja', 'Estructura inferior de conexión'] },
        { key: 'matchedHost', values: ['Camión articulado articulated mining truck', 'Camión articulado articulated mining truck', 'Camión articulado articulated mining truck', 'Camión articulado articulated mining truck'] },
        { key: 'structureScope', values: ['Paneles laterales / piso / protector frontal / refuerzos', 'Boca trasera de descarga / bisagras / orejetas', 'Piso antidesgaste / revestimiento lateral / borde superior', 'Vigas inferiores / asientos de bisagra / placas de montaje'] },
        { key: 'process', values: ['Soldadura de acero de alta resistencia / formado integral', 'Formado soldado / corrección dimensional', 'Tratamiento de placa antidesgaste / refuerzo de bordes', 'Formado soldado / corrección de orificios de bisagra'] },
        { key: 'supplyMode', values: ['Fabricación nueva / reparación / sustitución localizada', 'Reparación / reconstrucción / soporte de mantenimiento', 'Reparación / mejora antidesgaste / sustitución localizada', 'Reparación / reconstrucción / soporte de mantenimiento'] },
      ],
    },
  ],
};
const RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_COPY: Record<RenyiLocale, RenyiRaiseBoringProductCopy> = {
  zh: {
    category: '结构件系列',
    title: '车斗',
    inquiry: '在线留言',
    imageAlts: [
      '精修后的铰接式矿用车辆车斗侧视照片，展示侧板、底板、前挡板和加强筋',
      '精修后的铰接式矿用车辆车斗后部照片，展示尾部卸料口、后铰点和起吊耳',
      '精修后的铰接式矿用车辆车斗内腔照片，展示耐磨底板、侧板内衬和上沿结构',
      '精修后的铰接式矿用车辆车斗底部照片，展示底部加强梁、铰接座和安装板',
    ],
    topSpecs: [
      ['典型型号', '适配多数车型'],
      ['产品范围', '车斗、耐磨底板、侧板、底部铰接及举升连接结构'],
      ['应用部位', '铰接式矿用车辆物料承载与举升卸料部位'],
      ['工艺能力', '高强钢焊接 / 耐磨板处理 / 铰点孔位校正'],
      ['服务方式', '新制、修复、改造与国产化替代'],
    ],
    tabs: ['产品介绍', '产品特点', '技术参数'],
    introTitle: '产品介绍',
    introParagraphs: [
      '车斗是铰接式矿用车辆的核心承载结构件，承担矿石、土石方等物料运输过程中的冲击、磨损和举升卸料载荷。',
      '仁毅机械围绕铰接式矿用车辆车斗提供新制、修复和国产化替代服务，可针对侧板变形、底板磨损、铰点偏差和焊缝疲劳进行结构修复与加强。',
    ],
    advantagesTitle: '产品特点',
    advantages: [
      '耐磨抗冲击：面向矿山装载和卸料冲击，重点控制底板、侧板和关键受力区域。',
      '结构强度可靠：加强筋、底部支撑梁、铰接座和起吊耳按重载工况进行焊接与校正。',
      '适配车型明确：资料覆盖铰接式矿用车辆车斗。',
      '修复与升级兼顾：支持底板磨损、侧板变形、铰点孔位偏差和焊缝裂纹处理。',
      '交付贴近现场：可按旧斗状态、图纸或样件条件提供国产化替代和维修配套。',
    ],
    specsTitle: '技术参数',
    tableSections: { application: '适配与工艺' },
    tableRows: {
      productType: '产品类型',
      matchedHost: '适配主机',
      structureScope: '结构范围',
      process: '主要工艺',
      supplyMode: '供货方式',
    },
  },
  en: {
    category: 'Structural Components Series',
    title: 'Truck Body',
    inquiry: 'Contact Us',
    imageAlts: [
      'Refined articulated mining truck articulated truck body side image showing side panels, floor, front shield, and ribs',
      'Refined articulated mining truck truck body rear image showing rear dump opening, hinge points, and lifting lugs',
      'Refined articulated mining truck truck body interior image showing wear floor, side liner, and upper rim structure',
      'Refined articulated mining truck truck body underside image showing bottom reinforcing beams, hinge seats, and mounting plates',
    ],
    topSpecs: [
      ['Typical model', 'Fits most vehicle models'],
      ['Product scope', 'Truck body, wear floor, side panels, underside hinge and lifting connections'],
      ['Application', 'Material carrying and lifting dump area of articulated mining vehicles'],
      ['Process capability', 'High-strength steel welding / wear plate treatment / hinge hole correction'],
      ['Service mode', 'New fabrication, repair, rebuild, and localized replacement'],
    ],
    tabs: ['Introduction', 'Advantages', 'Technical Parameters'],
    introTitle: 'Introduction',
    introParagraphs: [
      'The truck body is the core load-carrying structural component of articulated mining vehicles, bearing impact, abrasion, and lifting-dump loads during ore and earthwork transport.',
      'Renyi Machinery provides new fabrication, repair, and localized replacement for articulated mining truck articulated truck bodies. Structural repair and reinforcement can address side-panel deformation, floor wear, hinge deviation, and weld fatigue.',
    ],
    advantagesTitle: 'Advantages',
    advantages: [
      'Wear and impact resistance: focused on floor plates, side panels, and critical load-bearing areas for mine loading and dumping impacts.',
      'Reliable structural strength: ribs, bottom support beams, hinge seats, and lifting lugs are welded and corrected for heavy-duty service.',
      'Clear model coverage: materials cover the articulated mining truck articulated mining truck body.',
      'Repair and upgrade together: supports floor wear, side-panel deformation, hinge-hole deviation, and weld crack treatment.',
      'Field-oriented delivery: localized replacement and maintenance support can be provided based on used body condition, drawings, or samples.',
    ],
    specsTitle: 'Technical Parameters',
    tableSections: { application: 'Application and Process' },
    tableRows: {
      productType: 'Product type',
      matchedHost: 'Matched host',
      structureScope: 'Structure scope',
      process: 'Main process',
      supplyMode: 'Supply mode',
    },
  },
  ru: {
    category: 'Серия металлоконструкций',
    title: 'Кузов самосвала',
    inquiry: 'Связаться с нами',
    imageAlts: [
      'Обработанное боковое фото кузова articulated mining truck с боковыми бортами, днищем, передним щитом и ребрами',
      'Обработанное заднее фото кузова articulated mining truck с разгрузочной кромкой, шарнирами и проушинами',
      'Обработанное фото внутренней части кузова articulated mining truck с износостойким днищем, боковой футеровкой и верхним кантом',
      'Обработанное фото нижней части кузова articulated mining truck с усилителями, шарнирными местами и монтажными пластинами',
    ],
    topSpecs: [
      ['Типовая модель', 'Подходит для большинства моделей техники'],
      ['Объем изделия', 'Кузов, износостойкое днище, боковые борта, нижние шарниры и подъемные соединения'],
      ['Применение', 'Зона перевозки материала и подъемной разгрузки сочлененных карьерных машин'],
      ['Технология', 'Сварка высокопрочной стали / обработка износостойких плит / корректировка отверстий шарниров'],
      ['Формат поставки', 'Новое изготовление, ремонт, модернизация и локальная замена'],
    ],
    tabs: ['Описание', 'Преимущества', 'Технические параметры'],
    introTitle: 'Описание',
    introParagraphs: [
      'Кузов является основной несущей металлоконструкцией сочлененного карьерного самосвала и воспринимает удар, износ и нагрузки подъемной разгрузки при перевозке руды и грунта.',
      'Renyi Machinery выполняет изготовление, ремонт и локальную замену кузовов articulated mining truck. Возможны ремонт и усиление при деформации бортов, износе днища, отклонении шарниров и усталости сварных швов.',
    ],
    advantagesTitle: 'Преимущества',
    advantages: [
      'Стойкость к износу и ударам: контроль днища, боковых бортов и ключевых нагруженных зон.',
      'Надежная прочность конструкции: ребра, нижние балки, шарнирные места и проушины свариваются и корректируются под тяжелые условия.',
      'Понятная совместимость: материалы охватывают кузов сочлененного карьерного самосвала articulated mining truck.',
      'Ремонт и усиление: поддержка ремонта износа днища, деформации бортов, отклонения отверстий шарниров и трещин швов.',
      'Поставка под условия площадки: локальная замена и ремонтная поддержка по состоянию старого кузова, чертежам или образцам.',
    ],
    specsTitle: 'Технические параметры',
    tableSections: { application: 'Применение и технология' },
    tableRows: {
      productType: 'Тип изделия',
      matchedHost: 'Совместимая машина',
      structureScope: 'Состав конструкции',
      process: 'Основная технология',
      supplyMode: 'Формат поставки',
    },
  },
  es: {
    category: 'Serie de componentes estructurales',
    title: 'Caja de camión',
    inquiry: 'Contáctenos',
    imageAlts: [
      'Imagen lateral refinada de caja articulated mining truck con paneles laterales, piso, protector frontal y refuerzos',
      'Imagen trasera refinada de caja articulated mining truck con boca de descarga, bisagras y orejetas',
      'Imagen refinada del interior de caja articulated mining truck con piso antidesgaste, revestimiento lateral y borde superior',
      'Imagen inferior refinada de caja articulated mining truck con vigas de refuerzo, asientos de bisagra y placas de montaje',
    ],
    topSpecs: [
      ['Modelo típico', 'Apto para la mayoría de modelos de vehículo'],
      ['Alcance', 'Caja, piso antidesgaste, paneles laterales, bisagras inferiores y conexiones de elevación'],
      ['Aplicación', 'Zona de carga y descarga por elevación de vehículos mineros articulados'],
      ['Proceso', 'Soldadura de acero de alta resistencia / tratamiento de placa antidesgaste / corrección de orificios de bisagra'],
      ['Servicio', 'Fabricación nueva, reparación, reconstrucción y sustitución localizada'],
    ],
    tabs: ['Introducción', 'Ventajas', 'Parámetros técnicos'],
    introTitle: 'Introducción',
    introParagraphs: [
      'La caja es el componente estructural portante principal de los vehículos mineros articulados, soportando impacto, abrasión y cargas de elevación-descarga durante el transporte de mineral y tierra.',
      'Renyi Machinery ofrece fabricación, reparación y sustitución localizada para cajas articulated mining truck. Puede realizar reparación y refuerzo estructural frente a deformación de laterales, desgaste del piso, desviación de bisagras y fatiga de soldaduras.',
    ],
    advantagesTitle: 'Ventajas',
    advantages: [
      'Resistencia al desgaste e impacto: control del piso, paneles laterales y zonas críticas de carga.',
      'Estructura confiable: refuerzos, vigas inferiores, asientos de bisagra y orejetas soldados y corregidos para servicio pesado.',
      'Cobertura clara de modelo: caja de camión minero articulado articulated mining truck.',
      'Reparación y mejora: desgaste del piso, deformación lateral, desviación de orificios de bisagra y grietas de soldadura.',
      'Entrega orientada al sitio: sustitución localizada y soporte de mantenimiento según estado de la caja usada, planos o muestras.',
    ],
    specsTitle: 'Parámetros técnicos',
    tableSections: { application: 'Aplicación y proceso' },
    tableRows: {
      productType: 'Tipo de producto',
      matchedHost: 'Equipo compatible',
      structureScope: 'Alcance estructural',
      process: 'Proceso principal',
      supplyMode: 'Modo de suministro',
    },
  },
};
const RENYI_STRUCTURAL_PRODUCT_CONFIGS: RenyiRaiseBoringProductConfig[] = [
  {
    paths: RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_PATHS,
    detailHref: '/jiegou-01/',
    cardImage: '/renyi/product-structural-rear-axle-housing.jpg?v=20260513-imagegen',
    images: RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_IMAGES,
    tableSections: RENYI_STRUCTURAL_REAR_AXLE_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_STRUCTURAL_REAR_AXLE_TABLE_HEADERS,
    copy: RENYI_STRUCTURAL_REAR_AXLE_PRODUCT_COPY,
    bodyClass: 'renyi-structural-rear-axle-product',
  },
  {
    paths: RENYI_STRUCTURAL_SUBFRAME_PRODUCT_PATHS,
    detailHref: '/jiegou-03/',
    cardImage: '/renyi/product-structural-subframe.jpg?v=20260513-subframe-imagegen',
    images: RENYI_STRUCTURAL_SUBFRAME_PRODUCT_IMAGES,
    tableSections: RENYI_STRUCTURAL_SUBFRAME_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_STRUCTURAL_SUBFRAME_TABLE_HEADERS,
    copy: RENYI_STRUCTURAL_SUBFRAME_PRODUCT_COPY,
    bodyClass: 'renyi-structural-subframe-product',
  },
  {
    paths: RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_PATHS,
    detailHref: '/jiegou-05/',
    cardImage: '/renyi/product-structural-truck-body.jpg?v=20260513-truck-body-imagegen',
    images: RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_IMAGES,
    tableSections: RENYI_STRUCTURAL_TRUCK_BODY_TABLE_SECTIONS,
    tableColumnHeaders: RENYI_STRUCTURAL_TRUCK_BODY_TABLE_HEADERS,
    copy: RENYI_STRUCTURAL_TRUCK_BODY_PRODUCT_COPY,
    bodyClass: 'renyi-structural-truck-body-product',
  },
];
const RENYI_HYDRAULIC_ENGINEERING_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '工程机械类', subtitle: 'CONSTRUCTION MACHINERY HYDRAULIC CYLINDERS', inquiry: '在线留言', more: '查看图片' },
  en: { title: 'Construction Machinery', inquiry: 'Contact Us', more: 'View image' },
  ru: { title: 'Инженерная техника', inquiry: 'Связаться с нами', more: 'Посмотреть изображение' },
  es: { title: 'Maquinaria de ingeniería', inquiry: 'Contáctenos', more: 'Ver imagen' },
};
const RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY_COPY: RenyiHydraulicCategoryConfig['copy'] = {
  zh: { title: '特种车辆类（矿卡与铰卡）', subtitle: 'MINING TRUCK & ARTICULATED TRUCK CYLINDERS', inquiry: '在线留言', more: '查看图片' },
  en: { title: 'Special Vehicles (Mining Trucks & Articulated Trucks)', inquiry: 'Contact Us', more: 'View image' },
  ru: { title: 'Специальные автомобили (карьерные и сочлененные самосвалы)', inquiry: 'Связаться с нами', more: 'Посмотреть изображение' },
  es: { title: 'Vehículos especiales (mineros y articulados)', inquiry: 'Contáctenos', more: 'Ver imagen' },
};

function renyiLocalizedText(zh: string, en: string, ru: string, es: string): RenyiLocalizedText {
  return { zh, en, ru, es };
}

function renyiHydraulicSpecs(
  typeZh: string,
  typeEn: string,
  typeRu: string,
  typeEs: string,
  matchedHost: string,
  productZh: string,
  productEn: string,
  productRu: string,
  productEs: string,
): Record<RenyiLocale, Array<[string, string]>> {
  return {
    zh: [
      ['设备类型', typeZh],
      ['适用主机', matchedHost],
      ['主要产品', productZh],
    ],
    en: [
      ['Equipment type', typeEn],
      ['Matched model', matchedHost],
      ['Main product', productEn],
    ],
    ru: [
      ['Тип техники', typeRu],
      ['Модель', matchedHost],
      ['Основное изделие', productRu],
    ],
    es: [
      ['Tipo de equipo', typeEs],
      ['Modelo compatible', matchedHost],
      ['Producto principal', productEs],
    ],
  };
}

function renyiHydraulicParentSpecs(
  rangeZh: string,
  rangeEn: string,
  rangeRu: string,
  rangeEs: string,
  hostZh: string,
  hostEn: string,
  hostRu: string,
  hostEs: string,
  productsZh: string,
  productsEn: string,
  productsRu: string,
  productsEs: string,
): Record<RenyiLocale, Array<[string, string]>> {
  return {
    zh: [
      ['应用范围', rangeZh],
      ['覆盖主机', hostZh],
      ['主要产品', productsZh],
    ],
    en: [
      ['Application range', rangeEn],
      ['Covered machines', hostEn],
      ['Main products', productsEn],
    ],
    ru: [
      ['Область применения', rangeRu],
      ['Оборудование', hostRu],
      ['Основные изделия', productsRu],
    ],
    es: [
      ['Rango de aplicación', rangeEs],
      ['Equipos cubiertos', hostEs],
      ['Productos principales', productsEs],
    ],
  };
}

const RENYI_HYDRAULIC_PARENT_CARDS: RenyiHydraulicCard[] = [
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-ec700c-boom-cylinder.jpg?v=20260513-imagegen-all',
    title: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    category: {
      zh: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.zh.title,
      en: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.en.title,
      ru: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.ru.title,
      es: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.es.title,
    },
    imageAlt: renyiLocalizedText(
      '工程机械大臂油缸实拍图',
      'Construction machinery boom cylinder product photo',
      'Фото гидроцилиндра стрелы инженерной техники',
      'Foto de cilindro de pluma para maquinaria de ingeniería',
    ),
    specs: renyiHydraulicParentSpecs(
      '挖掘机、推土机、装载机、平地机',
      'Excavators, bulldozers, loaders, graders',
      'Экскаваторы, бульдозеры, погрузчики, грейдеры',
      'Excavadoras, bulldozers, cargadoras, motoniveladoras',
      '工程机械、矿用设备、斗山、铰接式矿用车辆、工程机械等',
      'CAT, mining equipment, mining equipment, articulated mining vehicle, construction machinery, etc.',
      'CAT, mining equipment, mining equipment, articulated mining vehicle, construction machinery и др.',
      'CAT, mining equipment, mining equipment, articulated mining vehicle, construction machinery, etc.',
      '大臂油缸、铲斗油缸、铲刀油缸、转向油缸',
      'Boom, bucket, blade, and steering cylinders',
      'Цилиндры стрелы, ковша, отвала и рулевого управления',
      'Cilindros de pluma, cuchara, hoja y dirección',
    ),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-mt4400-hoist-cylinder.jpg?v=20260513-imagegen-all',
    title: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    category: {
      zh: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.zh.title,
      en: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.en.title,
      ru: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.ru.title,
      es: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.es.title,
    },
    imageAlt: renyiLocalizedText(
      '矿卡举升缸和悬挂缸实拍图',
      'Mining truck hoist and suspension cylinder product photo',
      'Фото цилиндра подъема и подвески карьерного самосвала',
      'Foto de cilindro de elevación y suspensión para camión minero',
    ),
    specs: renyiHydraulicParentSpecs(
      '30-60吨铰卡、50-400吨矿卡',
      '30-60 t articulated trucks, 50-400 t mining trucks',
      'Сочлененные самосвалы 30-60 т, карьерные самосвалы 50-400 т',
      'Camiones articulados de 30-60 t y mineros de 50-400 t',
      '工程机械、矿用设备、铰接式矿用车辆及重型矿卡等',
      'Construction machinery, mining equipment, articulated mining vehicles, heavy-duty mining trucks, etc.',
      'Строительная техника, горное оборудование, сочлененные карьерные машины, тяжелые карьерные самосвалы и др.',
      'Construction machinery, mining equipment, articulated mining vehicles, heavy-duty mining trucks, etc.',
      '前后悬挂缸、举升缸、转向缸、蓄能器等',
      'Front/rear suspension cylinders, hoist cylinders, steering cylinders, accumulators',
      'Передние/задние цилиндры подвески, подъема, рулевого управления, аккумуляторы',
      'Cilindros de suspensión delantera/trasera, elevación, dirección y acumuladores',
    ),
  },
];

const RENYI_HYDRAULIC_ENGINEERING_CARDS: RenyiHydraulicCard[] = [
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-ec700c-boom-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('EC700C挖机大臂油缸', 'EC700C Excavator Boom Cylinder', 'Гидроцилиндр стрелы EC700C', 'Cilindro de pluma EC700C'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('EC700C挖机大臂油缸实拍图', 'EC700C excavator boom cylinder product photo', 'Фото гидроцилиндра стрелы EC700C', 'Foto de cilindro de pluma EC700C'),
    specs: renyiHydraulicSpecs('挖掘机', 'Excavator', 'Экскаватор', 'Excavadora', 'EC700C', '大臂油缸', 'Boom cylinder', 'Цилиндр стрелы', 'Cilindro de pluma'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-ec480d-boom-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('EC480D挖掘机大臂油缸', 'EC480D Excavator Boom Cylinder', 'Гидроцилиндр стрелы EC480D', 'Cilindro de pluma EC480D'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('EC480D挖掘机大臂油缸实拍图', 'EC480D excavator boom cylinder product photo', 'Фото гидроцилиндра стрелы EC480D', 'Foto de cilindro de pluma EC480D'),
    specs: renyiHydraulicSpecs('挖掘机', 'Excavator', 'Экскаватор', 'Excavadora', 'EC480D', '大臂油缸', 'Boom cylinder', 'Цилиндр стрелы', 'Cilindro de pluma'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-cat988h-lift-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('大型装载机装载机举升油缸', '大型装载机 Loader Lift Cylinder', 'Цилиндр подъема 大型装载机', 'Cilindro de elevación 大型装载机'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('大型装载机装载机举升油缸实拍图', '大型装载机 loader lift cylinder product photo', 'Фото цилиндра подъема 大型装载机', 'Foto de cilindro de elevación 大型装载机'),
    specs: renyiHydraulicSpecs('装载机', 'Loader', 'Погрузчик', 'Cargadora', '大型装载机', '举升油缸', 'Lift cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-cat988h-tilt-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('大型装载机装载机倾斜油缸', '大型装载机 Loader Tilt Cylinder', 'Цилиндр наклона 大型装载机', 'Cilindro de inclinación 大型装载机'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('大型装载机装载机倾斜油缸实拍图', '大型装载机 loader tilt cylinder product photo', 'Фото цилиндра наклона 大型装载机', 'Foto de cilindro de inclinación 大型装载机'),
    specs: renyiHydraulicSpecs('装载机', 'Loader', 'Погрузчик', 'Cargadora', '大型装载机', '倾斜油缸', 'Tilt cylinder', 'Цилиндр наклона', 'Cilindro de inclinación'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-d10t-blade-lift-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('D10T铲刀提升缸', 'D10T Blade Lift Cylinder', 'Цилиндр подъема отвала D10T', 'Cilindro de elevación de hoja D10T'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('D10T铲刀提升缸实拍图', 'D10T blade lift cylinder product photo', 'Фото цилиндра подъема отвала D10T', 'Foto de cilindro de elevación de hoja D10T'),
    specs: renyiHydraulicSpecs('推土机', 'Bulldozer', 'Бульдозер', 'Bulldozer', 'D10T', '铲刀提升缸', 'Blade lift cylinder', 'Цилиндр подъема отвала', 'Cilindro de elevación de hoja'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-d375a6-bulldozer-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('D375A-6推土机油缸', 'D375A-6 Bulldozer Cylinder', 'Гидроцилиндр бульдозера D375A-6', 'Cilindro para bulldozer D375A-6'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('D375A-6推土机油缸实拍图', 'D375A-6 bulldozer cylinder product photo', 'Фото гидроцилиндра D375A-6', 'Foto de cilindro D375A-6'),
    specs: renyiHydraulicSpecs('推土机', 'Bulldozer', 'Бульдозер', 'Bulldozer', 'D375A-6', '铲刀/松土器油缸', 'Blade/ripper cylinder', 'Цилиндр отвала/рыхлителя', 'Cilindro de hoja/escarificador'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-14m-lift-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('14M提升缸', '14M Lift Cylinder', 'Цилиндр подъема 14M', 'Cilindro de elevación 14M'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('14M提升缸实拍图', '14M lift cylinder product photo', 'Фото цилиндра подъема 14M', 'Foto de cilindro de elevación 14M'),
    specs: renyiHydraulicSpecs('平地机', 'Grader', 'Грейдер', 'Motoniveladora', '14M', '提升缸', 'Lift cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-zgyx460-drill-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('ZGYX460潜孔钻机油缸', 'ZGYX460 DTH Drill Rig Cylinder', 'Гидроцилиндр буровой ZGYX460', 'Cilindro para perforadora ZGYX460'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('ZGYX460潜孔钻机油缸实拍图', 'ZGYX460 DTH drill rig cylinder product photo', 'Фото гидроцилиндра ZGYX460', 'Foto de cilindro ZGYX460'),
    specs: renyiHydraulicSpecs('钻机', 'Drill rig', 'Буровая установка', 'Perforadora', 'ZGYX460', '钻机油缸', 'Drill rig cylinder', 'Гидроцилиндр буровой', 'Cilindro de perforadora'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-crusher-push-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('破碎机推动缸', 'Crusher Push Cylinder', 'Толкающий цилиндр дробилки', 'Cilindro de empuje para trituradora'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('破碎机推动缸实拍图', 'Crusher push cylinder product photo', 'Фото толкающего цилиндра дробилки', 'Foto de cilindro de empuje para trituradora'),
    specs: renyiHydraulicSpecs('破碎机', 'Crusher', 'Дробилка', 'Trituradora', '破碎机', '推动缸', 'Push cylinder', 'Толкающий цилиндр', 'Cilindro de empuje'),
  },
  {
    href: '/yougang-01/',
    image: '/renyi/product-hydraulic-engineering-crusher-release-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('破碎机释放缸', 'Crusher Release Cylinder', 'Разгрузочный цилиндр дробилки', 'Cilindro de liberación para trituradora'),
    category: RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    imageAlt: renyiLocalizedText('破碎机释放缸实拍图', 'Crusher release cylinder product photo', 'Фото разгрузочного цилиндра дробилки', 'Foto de cilindro de liberación para trituradora'),
    specs: renyiHydraulicSpecs('破碎机', 'Crusher', 'Дробилка', 'Trituradora', '破碎机', '释放缸', 'Release cylinder', 'Разгрузочный цилиндр', 'Cilindro de liberación'),
  },
];

const RENYI_HYDRAULIC_SPECIAL_VEHICLE_CARDS: RenyiHydraulicCard[] = [
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-730e-front-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('矿用电动轮车型前悬挂', '矿用电动轮车型 Front Suspension', 'Передняя подвеска 矿用电动轮车型', 'Suspensión delantera 矿用电动轮车型'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('矿用电动轮车型前悬挂实拍图', '矿用电动轮车型 front suspension product photo', 'Фото передней подвески 矿用电动轮车型', 'Foto de suspensión delantera 矿用电动轮车型'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '矿用电动轮车型', '前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-730e-hoist-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('矿用电动轮车型举升缸', '矿用电动轮车型 Hoist Cylinder', 'Цилиндр подъема 矿用电动轮车型', 'Cilindro de elevación 矿用电动轮车型'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('矿用电动轮车型举升缸实拍图', '矿用电动轮车型 hoist cylinder product photo', 'Фото цилиндра подъема 矿用电动轮车型', 'Foto de cilindro de elevación 矿用电动轮车型'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '矿用电动轮车型', '举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-830e-front-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('重载矿用车型前悬挂', '重载矿用车型 Front Suspension', 'Передняя подвеска 重载矿用车型', 'Suspensión delantera 重载矿用车型'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('重载矿用车型前悬挂实拍图', '重载矿用车型 front suspension product photo', 'Фото передней подвески 重载矿用车型', 'Foto de suspensión delantera 重载矿用车型'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '重载矿用车型', '前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-830e-rear-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('重载矿用车型后悬挂', '重载矿用车型 Rear Suspension', 'Задняя подвеска 重载矿用车型', 'Suspensión trasera 重载矿用车型'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('重载矿用车型后悬挂实拍图', '重载矿用车型 rear suspension product photo', 'Фото задней подвески 重载矿用车型', 'Foto de suspensión trasera 重载矿用车型'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '重载矿用车型', '后悬挂缸', 'Rear suspension cylinder', 'Задний цилиндр подвески', 'Cilindro de suspensión trasera'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-mt4400-hoist-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('大吨位矿卡举升缸', '大吨位矿卡 Hoist Cylinder', 'Цилиндр подъема 大吨位矿卡', 'Cilindro de elevación 大吨位矿卡'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('大吨位矿卡举升缸实拍图', '大吨位矿卡 hoist cylinder product photo', 'Фото цилиндра подъема 大吨位矿卡', 'Foto de cilindro de elevación 大吨位矿卡'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '大吨位矿卡', '举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-mt4400-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('大吨位矿卡悬挂', '大吨位矿卡 Suspension', 'Подвеска 大吨位矿卡', 'Suspensión 大吨位矿卡'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('大吨位矿卡悬挂实拍图', '大吨位矿卡 suspension product photo', 'Фото подвески 大吨位矿卡', 'Foto de suspensión 大吨位矿卡'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', '大吨位矿卡', '悬挂缸', 'Suspension cylinder', 'Цилиндр подвески', 'Cilindro de suspensión'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-tr100-hoist-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('TR100举升缸', 'TR100 Hoist Cylinder', 'Цилиндр подъема TR100', 'Cilindro de elevación TR100'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('TR100举升缸实拍图', 'TR100 hoist cylinder product photo', 'Фото цилиндра подъема TR100', 'Foto de cilindro de elevación TR100'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', 'TR100', '举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-tr100-rear-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('TR100后悬挂', 'TR100 Rear Suspension', 'Задняя подвеска TR100', 'Suspensión trasera TR100'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('TR100后悬挂实拍图', 'TR100 rear suspension product photo', 'Фото задней подвески TR100', 'Foto de suspensión trasera TR100'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', 'TR100', '后悬挂缸', 'Rear suspension cylinder', 'Задний цилиндр подвески', 'Cilindro de suspensión trasera'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-tr100-steering-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('TR100转向缸', 'TR100 Steering Cylinder', 'Рулевой цилиндр TR100', 'Cilindro de dirección TR100'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('TR100转向缸实拍图', 'TR100 steering cylinder product photo', 'Фото рулевого цилиндра TR100', 'Foto de cilindro de dirección TR100'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', 'TR100', '转向缸', 'Steering cylinder', 'Рулевой цилиндр', 'Cilindro de dirección'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-tr50-front-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('TR50前悬挂', 'TR50 Front Suspension', 'Передняя подвеска TR50', 'Suspensión delantera TR50'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('TR50前悬挂实拍图', 'TR50 front suspension product photo', 'Фото передней подвески TR50', 'Foto de suspensión delantera TR50'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', 'TR50', '前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-a40e-shock-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('articulated mining truck减震油缸', 'articulated mining truck Shock Absorber Cylinder', 'Амортизационный цилиндр articulated mining truck', 'Cilindro amortiguador articulated mining truck'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('articulated mining truck减震油缸实拍图', 'articulated mining truck shock absorber cylinder product photo', 'Фото амортизационного цилиндра articulated mining truck', 'Foto de cilindro amortiguador articulated mining truck'),
    specs: renyiHydraulicSpecs('铰卡', 'Articulated truck', 'Сочлененный самосвал', 'Camión articulado', 'articulated mining truck', '减震油缸', 'Shock absorber cylinder', 'Амортизационный цилиндр', 'Cilindro amortiguador'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-cat740-suspension.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('铰接式矿用车辆悬挂', '铰接式矿用车辆 Suspension', 'Подвеска 铰接式矿用车辆', 'Suspensión 铰接式矿用车辆'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('铰接式矿用车辆悬挂实拍图', '铰接式矿用车辆 suspension product photo', 'Фото подвески 铰接式矿用车辆', 'Foto de suspensión 铰接式矿用车辆'),
    specs: renyiHydraulicSpecs('铰卡', 'Articulated truck', 'Сочлененный самосвал', 'Camión articulado', '铰接式矿用车辆', '悬挂缸', 'Suspension cylinder', 'Цилиндр подвески', 'Cilindro de suspensión'),
  },
  {
    href: '/yougang-02/',
    image: '/renyi/product-hydraulic-special-mcc400a-steering-cylinder.jpg?v=20260513-imagegen-all',
    title: renyiLocalizedText('MCC400A转向缸', 'MCC400A Steering Cylinder', 'Рулевой цилиндр MCC400A', 'Cilindro de dirección MCC400A'),
    category: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    imageAlt: renyiLocalizedText('MCC400A转向缸实拍图', 'MCC400A steering cylinder product photo', 'Фото рулевого цилиндра MCC400A', 'Foto de cilindro de dirección MCC400A'),
    specs: renyiHydraulicSpecs('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero', 'MCC400A', '转向缸', 'Steering cylinder', 'Рулевой цилиндр', 'Cilindro de dirección'),
  },
];

function renyiHydraulicVariant(
  columnHeader: RenyiLocalizedText,
  equipmentType: RenyiLocalizedText,
  matchedHost: string,
  mainProduct: RenyiLocalizedText,
  application: RenyiLocalizedText,
  image: string,
  imageAlt: RenyiLocalizedText,
): RenyiHydraulicProductVariant {
  return { columnHeader, equipmentType, matchedHost, mainProduct, application, image, imageAlt };
}

function renyiHydraulicProductConfig(
  detailHref: string,
  parentHref: string,
  bodyClass: string,
  category: RenyiLocalizedText,
  title: RenyiLocalizedText,
  variants: RenyiHydraulicProductVariant[],
  galleryImages?: string[],
): RenyiHydraulicProductConfig {
  const images = galleryImages ?? variants.map((variant) => variant.image);

  return {
    paths: RENYI_LOCALES.map((locale) => withRenyiLocalePath(detailHref, locale)),
    detailHref,
    parentHref,
    bodyClass,
    category,
    title,
    cardImage: images[0] ?? variants[0]?.image ?? '/renyi/product-category-hydraulic-suspension-cylinders.png?v=20260429',
    images: Array.from(new Set(images)),
    variants,
  };
}

function renyiJoinUnique(values: string[]) {
  return Array.from(new Set(values)).join(' / ');
}

type RenyiHydraulicProductBodyCopy = Record<RenyiLocale, { intro: string[]; advantages: string[] }>;

const RENYI_HYDRAULIC_PRODUCT_BODY_COPY: Record<string, RenyiHydraulicProductBodyCopy> = {
  '/yougang-01-01/': {
    zh: {
      intro: [
        '挖掘机大臂油缸用于驱动动臂升降，是大型挖掘机前端工作装置的核心执行部件。产品适配 EC700C、EC480D 等机型，可用于整机维修、旧件替换和国产化配套供应。',
        '针对矿山剥离、土石方开挖和长时间连续作业场景，油缸在缸筒强度、活塞杆表面处理、密封耐久性和耳环连接可靠性方面进行强化设计。',
      ],
      advantages: [
        '承载能力强，适合大吨位挖掘机动臂频繁举升和重载冲击工况。',
        '密封与导向结构可按工况优化，降低渗漏、爬行和异常磨损风险。',
        '可按原机安装距、销孔尺寸、行程和连接结构进行测绘定制。',
      ],
    },
    en: {
      intro: [
        'The excavator boom cylinder drives boom lifting and is a key actuator in the front working equipment of large excavators. It fits models such as EC700C and EC480D for repair, replacement, and localized supply.',
        'For mining stripping, earthmoving, and continuous-duty operation, the cylinder is reinforced in barrel strength, piston rod surface treatment, seal durability, and eye-end connection reliability.',
      ],
      advantages: [
        'High load capacity for frequent boom lifting and heavy impact conditions on large excavators.',
        'Seal and guide structures can be optimized to reduce leakage, creeping, and abnormal wear.',
        'Custom production is available by mounting length, pin-hole size, stroke, and connection structure.',
      ],
    },
    ru: {
      intro: [
        'Гидроцилиндр стрелы экскаватора управляет подъемом стрелы и является ключевым исполнительным узлом рабочего оборудования крупного экскаватора. Изделие подходит для EC700C, EC480D и аналогичных моделей при ремонте, замене и локализованной поставке.',
        'Для вскрышных работ, земляных работ и длительной непрерывной эксплуатации усилены гильза, поверхность штока, ресурс уплотнений и надежность проушин.',
      ],
      advantages: [
        'Высокая несущая способность для частого подъема стрелы и ударных нагрузок крупного экскаватора.',
        'Уплотнения и направляющие могут подбираться под условия, снижая риск течи, рывков и износа.',
        'Возможно изготовление по монтажной длине, диаметру пальцев, ходу и соединительной конструкции.',
      ],
    },
    es: {
      intro: [
        'El cilindro de pluma acciona la elevación del brazo y es un actuador clave del implemento frontal de excavadoras grandes. Es compatible con EC700C, EC480D y modelos similares para reparación, sustitución y suministro localizado.',
        'Para minería, movimiento de tierras y trabajo continuo, se refuerzan la resistencia del tubo, el tratamiento del vástago, la durabilidad de sellos y la fiabilidad de las orejetas.',
      ],
      advantages: [
        'Alta capacidad de carga para elevación frecuente de pluma e impactos severos.',
        'Sellos y guías optimizables para reducir fugas, movimientos irregulares y desgaste.',
        'Fabricación a medida según distancia de montaje, diámetro de pasador, carrera y conexión.',
      ],
    },
  },
  '/yougang-01-02/': {
    zh: {
      intro: [
        '装载机油缸覆盖 大型装载机 举升油缸和倾斜油缸，主要用于铲斗升降、翻转和物料装卸控制。产品面向矿山装载、料场转运和大方量铲装等高频作业。',
        '该类油缸对同步性、抗弯能力和密封稳定性要求高，可根据原机结构提供举升缸、倾斜缸的维修替换与成套配套。',
      ],
      advantages: [
        '适合装载机反复举升、翻斗和满载转运工况，动作平稳可靠。',
        '活塞杆和缸筒可按粉尘、泥水和高冲击环境进行防护设计。',
        '支持单支替换或左右成对供应，便于现场维修和库存管理。',
      ],
    },
    en: {
      intro: [
        'Loader cylinders cover 大型装载机 lift and tilt cylinders for bucket lifting, dumping, and material handling control. They are intended for mining loading, yard transfer, and high-cycle loading operations.',
        'These cylinders require good synchronization, bending resistance, and sealing stability, and can be supplied for repair replacement or matched sets.',
      ],
      advantages: [
        'Built for repeated lifting, bucket tilting, and loaded transfer with stable movement.',
        'Rod and barrel protection can be adapted for dust, mud, water, and impact conditions.',
        'Available as single replacement units or paired sets for easier maintenance and inventory.',
      ],
    },
    ru: {
      intro: [
        'Гидроцилиндры погрузчика включают цилиндры подъема и наклона 大型装载机 для подъема ковша, разгрузки и управления погрузкой материалов. Они рассчитаны на карьерную погрузку, складскую перевалку и интенсивные циклы.',
        'Для таких цилиндров важны синхронность, стойкость к изгибу и стабильность уплотнений; возможна поставка как замены или комплектом.',
      ],
      advantages: [
        'Подходят для повторного подъема, опрокидывания ковша и перемещения с полной нагрузкой.',
        'Защита штока и гильзы подбирается для пыли, грязи, воды и ударных нагрузок.',
        'Поставка возможна одиночными цилиндрами или парными комплектами для обслуживания.',
      ],
    },
    es: {
      intro: [
        'Los cilindros para cargadora incluyen cilindros de elevación e inclinación 大型装载机 para levantar, voltear y controlar el cucharón. Están orientados a carga minera, transferencia en patios y ciclos de trabajo intensivos.',
        'Este tipo exige buena sincronización, resistencia a flexión y estabilidad de sellado; se puede suministrar para sustitución o como conjunto emparejado.',
      ],
      advantages: [
        'Adecuados para elevación repetida, volteo de cuchara y traslado con carga completa.',
        'Protección de vástago y tubo adaptable a polvo, lodo, agua e impactos.',
        'Suministro por unidad o en pares para facilitar mantenimiento e inventario.',
      ],
    },
  },
  '/yougang-01-03/': {
    zh: {
      intro: [
        '推土机油缸用于铲刀提升、角度调整或松土器动作控制，适配 D10T、D375A-6 等重型推土机。产品面向矿山道路、排土场、土石方整平和硬岩松动等场景。',
        '推土机工作时冲击载荷大、粉尘多、姿态变化频繁，油缸需要兼顾结构强度、焊接可靠性和活塞杆抗污染能力。',
      ],
      advantages: [
        '适合铲刀和松土器高冲击、高频动作工况。',
        '耳环、销孔和焊缝结构可加强处理，提高抗疲劳能力。',
        '可根据原机铲刀系统或松土器布置进行尺寸复核和定制。',
      ],
    },
    en: {
      intro: [
        'Bulldozer cylinders control blade lifting, blade angle adjustment, or ripper movement, fitting heavy models such as D10T and D375A-6. They serve mine roads, dump areas, earthmoving grading, and hard-rock ripping.',
        'Bulldozer work brings high impact loads, dust, and frequent posture changes, so the cylinder must combine structural strength, weld reliability, and rod contamination resistance.',
      ],
      advantages: [
        'Suitable for high-impact and high-cycle blade or ripper operation.',
        'Eye ends, pin holes, and welded joints can be reinforced for fatigue resistance.',
        'Dimensions can be checked and customized to the original blade or ripper layout.',
      ],
    },
    ru: {
      intro: [
        'Гидроцилиндры бульдозера управляют подъемом отвала, изменением угла или работой рыхлителя и подходят для D10T, D375A-6 и аналогичной тяжелой техники. Применяются на карьерных дорогах, отвалах, планировке и рыхлении твердых пород.',
        'При работе бульдозера возникают сильные удары, пыль и частые изменения положения, поэтому важны прочность, качество сварки и защита штока от загрязнений.',
      ],
      advantages: [
        'Подходят для ударных и циклических нагрузок отвала и рыхлителя.',
        'Проушины, отверстия под пальцы и сварные соединения могут усиливаться.',
        'Размеры подбираются по штатной системе отвала или компоновке рыхлителя.',
      ],
    },
    es: {
      intro: [
        'Los cilindros para bulldozer controlan elevación de hoja, ajuste de ángulo o movimiento del escarificador, compatibles con D10T, D375A-6 y equipos pesados similares. Se usan en caminos mineros, botaderos, nivelación y ripado de roca dura.',
        'El trabajo del bulldozer implica impactos, polvo y cambios frecuentes de posición, por lo que se refuerzan estructura, soldaduras y protección del vástago.',
      ],
      advantages: [
        'Adecuados para operación de hoja y escarificador con alto impacto y ciclos frecuentes.',
        'Orejetas, pasadores y soldaduras pueden reforzarse contra fatiga.',
        'Dimensiones personalizadas según sistema de hoja o disposición del escarificador.',
      ],
    },
  },
  '/yougang-01-04/': {
    zh: {
      intro: [
        '平地机提升缸用于控制铲刀升降和作业姿态，适配 14M 等平地机。产品主要服务道路修整、矿区道路维护、场地精平和边坡整理等工况。',
        '该类油缸要求动作响应细腻、定位稳定，能够帮助铲刀在连续调整中保持平顺作业效果。',
      ],
      advantages: [
        '动作平稳，适合平地机铲刀高度频繁微调。',
        '密封和导向结构注重低速稳定性，减少抖动和爬行。',
        '可按左右安装位置、耳环方向和铲刀连杆结构定制。',
      ],
    },
    en: {
      intro: [
        'The grader lift cylinder controls blade lifting and working posture for graders such as 14M. It is used in road finishing, mine road maintenance, site leveling, and slope shaping.',
        'This cylinder requires smooth response and stable positioning so the blade can maintain consistent grading during continuous adjustment.',
      ],
      advantages: [
        'Smooth movement for frequent fine adjustment of grader blade height.',
        'Seal and guide design emphasizes low-speed stability to reduce jitter and creeping.',
        'Customizable by left/right mounting position, eye-end direction, and blade linkage layout.',
      ],
    },
    ru: {
      intro: [
        'Цилиндр подъема грейдера управляет высотой отвала и рабочим положением техники типа 14M. Применяется при ремонте дорог, обслуживании карьерных дорог, планировке площадок и откосов.',
        'Для такого цилиндра важны плавная реакция и стабильное позиционирование, чтобы отвал работал ровно при постоянной регулировке.',
      ],
      advantages: [
        'Плавное движение для частой точной регулировки высоты отвала.',
        'Уплотнения и направляющие рассчитаны на стабильность на малой скорости.',
        'Возможна настройка по стороне установки, направлению проушин и рычажной схеме.',
      ],
    },
    es: {
      intro: [
        'El cilindro de elevación para motoniveladora controla la altura y postura de la hoja en modelos como 14M. Se aplica en acabado de caminos, mantenimiento de vías mineras, nivelación y conformación de taludes.',
        'Requiere respuesta suave y posicionamiento estable para mantener un acabado uniforme durante ajustes continuos.',
      ],
      advantages: [
        'Movimiento suave para ajustes finos frecuentes de altura de hoja.',
        'Sellos y guías enfocados en estabilidad a baja velocidad, reduciendo vibración y arrastre.',
        'Personalizable por posición izquierda/derecha, dirección de orejetas y varillaje.',
      ],
    },
  },
  '/yougang-01-05/': {
    zh: {
      intro: [
        '钻机油缸适用于 ZGYX460、YZ35 等钻机设备，用于推进、变幅、支腿、夹持或辅助机构动作。产品面向露天矿山、采石场和工程钻孔等作业环境。',
        '钻机工况粉尘重、振动强、动作切换频繁，油缸需在密封防护、抗冲击和安装紧凑性方面保持可靠。',
      ],
      advantages: [
        '适合钻机推进、定位和支撑机构的连续动作需求。',
        '防尘密封和活塞杆表面处理可按岩粉环境加强。',
        '可根据钻机空间布置提供短行程、高推力或特殊连接方案。',
      ],
    },
    en: {
      intro: [
        'Drill rig cylinders fit equipment such as ZGYX460 and YZ35 for feed, luffing, outrigger, clamping, or auxiliary movements. They are used in open-pit mines, quarries, and engineering drilling.',
        'Drilling conditions involve dust, vibration, and frequent action changes, requiring reliable sealing protection, impact resistance, and compact mounting.',
      ],
      advantages: [
        'Suitable for continuous feed, positioning, and support actions on drill rigs.',
        'Dust seals and rod surface treatment can be strengthened for rock-dust environments.',
        'Short-stroke, high-thrust, or special connection designs are available for compact layouts.',
      ],
    },
    ru: {
      intro: [
        'Гидроцилиндры буровых установок подходят для ZGYX460, YZ35 и аналогичных машин, выполняя подачу, изменение угла, работу опор, зажимов и вспомогательных механизмов. Применяются на открытых карьерах, каменоломнях и инженерном бурении.',
        'В бурении присутствуют пыль, вибрация и частые переключения движений, поэтому важны защита уплотнений, ударостойкость и компактная установка.',
      ],
      advantages: [
        'Подходят для подачи, позиционирования и опорных механизмов буровой установки.',
        'Пылезащитные уплотнения и покрытие штока усиливаются для каменной пыли.',
        'Возможны короткий ход, высокая тяга или специальные соединения для тесной компоновки.',
      ],
    },
    es: {
      intro: [
        'Los cilindros para perforadora son compatibles con equipos ZGYX460, YZ35 y similares para avance, basculación, estabilizadores, sujeción y mecanismos auxiliares. Se usan en minas a cielo abierto, canteras y perforación de obra.',
        'Las condiciones de perforación tienen polvo, vibración y cambios frecuentes de movimiento, exigiendo sellado confiable, resistencia a impactos y montaje compacto.',
      ],
      advantages: [
        'Adecuados para avance, posicionamiento y soporte continuo en perforadoras.',
        'Sellos antipolvo y tratamiento del vástago reforzables para polvo de roca.',
        'Disponibles diseños de carrera corta, alto empuje o conexión especial.',
      ],
    },
  },
  '/yougang-01-06/': {
    zh: {
      intro: [
        '破碎机油缸用于推动、释放、调节和保护等机构动作，适用于矿山破碎、砂石骨料和工程破碎设备。产品覆盖推动缸、释放缸等关键执行部件。',
        '破碎设备载荷波动大、冲击强，对油缸的压力稳定性、密封可靠性和结构安全余量要求较高。',
      ],
      advantages: [
        '适合破碎机高压力、强冲击和频繁调节工况。',
        '可按设备保护逻辑配置推动、释放或调节类油缸。',
        '结构尺寸和压力等级可根据破碎腔、机架和液压系统要求定制。',
      ],
    },
    en: {
      intro: [
        'Crusher cylinders perform pushing, releasing, adjustment, and protection functions for mining crushing, aggregate, and construction crushing equipment. The range includes push and release cylinders.',
        'Crusher loads fluctuate sharply and generate strong impacts, requiring pressure stability, reliable sealing, and sufficient structural safety margin.',
      ],
      advantages: [
        'Suitable for high-pressure, high-impact, and frequent adjustment conditions.',
        'Push, release, or adjustment cylinders can be configured to match equipment protection logic.',
        'Dimensions and pressure ratings can be customized to crushing chamber, frame, and hydraulic system requirements.',
      ],
    },
    ru: {
      intro: [
        'Гидроцилиндры дробилки выполняют функции толкания, разгрузки, регулировки и защиты в горнодобывающем, щебеночном и строительном дробильном оборудовании. Ассортимент включает толкающие и разгрузочные цилиндры.',
        'Нагрузки дробилки резко меняются и сопровождаются ударами, поэтому требуются стабильное давление, надежные уплотнения и запас прочности конструкции.',
      ],
      advantages: [
        'Подходят для высокого давления, ударов и частой регулировки.',
        'Толкающие, разгрузочные или регулировочные цилиндры подбираются под защитную логику машины.',
        'Размеры и давление адаптируются к камере дробления, раме и гидросистеме.',
      ],
    },
    es: {
      intro: [
        'Los cilindros para trituradora realizan funciones de empuje, liberación, ajuste y protección en equipos de trituración minera, agregados y construcción. Incluyen cilindros de empuje y liberación.',
        'Las cargas de trituración fluctúan y generan impactos fuertes, por lo que se requieren presión estable, sellado fiable y margen estructural suficiente.',
      ],
      advantages: [
        'Adecuados para alta presión, impacto fuerte y ajustes frecuentes.',
        'Cilindros de empuje, liberación o ajuste configurables según la lógica de protección del equipo.',
        'Dimensiones y presión personalizables según cámara, bastidor y sistema hidráulico.',
      ],
    },
  },
  '/yougang-02-01/': {
    zh: {
      intro: [
        '前悬挂缸用于矿用自卸车前桥悬挂系统，适配 矿用电动轮车型、重载矿用车型、TR50 等车型。它承担支撑车身、吸收路面冲击和保持车辆转向稳定的重要作用。',
        '矿卡长期运行在重载、颠簸和坡道工况下，前悬挂缸需要在承载能力、密封寿命和缓冲性能上保持稳定。',
      ],
      advantages: [
        '适合矿区重载运输道路的冲击吸收和车身支撑。',
        '密封、导向和充油结构可按车型悬挂参数匹配。',
        '可提供维修替换、成对供应及旧件测绘定制服务。',
      ],
    },
    en: {
      intro: [
        'Front suspension cylinders are used in mining truck front axle suspension systems for models such as 矿用电动轮车型, 重载矿用车型, and TR50. They support the truck body, absorb road impact, and help maintain steering stability.',
        'Mining trucks operate under heavy loads, rough roads, and grades, so the front suspension cylinder must maintain load capacity, seal life, and cushioning performance.',
      ],
      advantages: [
        'Designed for impact absorption and body support on heavy mine haul roads.',
        'Seals, guides, and oil-charging structures can be matched to suspension parameters.',
        'Available for repair replacement, paired supply, and reverse-engineered customization.',
      ],
    },
    ru: {
      intro: [
        'Передние цилиндры подвески применяются в передней подвеске карьерных самосвалов 矿用电动轮车型, 重载矿用车型, TR50 и аналогичных моделей. Они поддерживают кузов, гасят удары дороги и помогают сохранять устойчивость рулевого управления.',
        'Карьерные самосвалы работают с большой нагрузкой, на неровных дорогах и уклонах, поэтому важны грузоподъемность, ресурс уплотнений и демпфирование.',
      ],
      advantages: [
        'Предназначены для поглощения ударов и поддержки кузова на карьерных дорогах.',
        'Уплотнения, направляющие и масляная схема подбираются под параметры подвески.',
        'Возможна поставка для ремонта, парными комплектами и по образцу старой детали.',
      ],
    },
    es: {
      intro: [
        'Los cilindros de suspensión delantera se usan en el eje delantero de camiones mineros 矿用电动轮车型, 重载矿用车型, TR50 y similares. Soportan la carrocería, absorben impactos del camino y ayudan a mantener la estabilidad de dirección.',
        'Los camiones mineros trabajan con cargas pesadas, caminos irregulares y pendientes, por lo que se exige capacidad de carga, vida de sellos y amortiguación estable.',
      ],
      advantages: [
        'Diseñados para absorción de impactos y soporte de carrocería en vías mineras.',
        'Sellos, guías y estructura de aceite adaptables a parámetros de suspensión.',
        'Disponibles para reparación, suministro por pares y fabricación por muestra.',
      ],
    },
  },
  '/yougang-02-02/': {
    zh: {
      intro: [
        '举升缸用于矿用自卸车货箱举升系统，适配 矿用电动轮车型、大吨位矿卡、TR100、TR50 等车型。它负责在满载状态下完成货箱举升、卸料和回落控制。',
        '该类油缸行程长、受力大，对多级伸缩稳定性、密封保持能力和抗侧载能力要求高。',
      ],
      advantages: [
        '适合矿卡满载举升和高频卸料工况。',
        '伸缩结构可按举升角度、货箱重量和液压系统压力匹配。',
        '重点控制内泄、抖动和不同级伸缩不同步等现场问题。',
      ],
    },
    en: {
      intro: [
        'Hoist cylinders are used in mining truck dump-body lifting systems for models such as 矿用电动轮车型, 大吨位矿卡, TR100, and TR50. They lift, dump, and lower the body under loaded conditions.',
        'These cylinders feature long strokes and high forces, requiring stable telescopic movement, seal retention, and side-load resistance.',
      ],
      advantages: [
        'Suitable for loaded body lifting and frequent dumping on mining trucks.',
        'Telescopic structures can be matched to lifting angle, body weight, and hydraulic pressure.',
        'Designed to control internal leakage, shaking, and asynchronous stage movement.',
      ],
    },
    ru: {
      intro: [
        'Цилиндры подъема применяются в системе подъема кузова карьерных самосвалов 矿用电动轮车型, 大吨位矿卡, TR100, TR50 и аналогичных моделей. Они обеспечивают подъем, разгрузку и опускание кузова с грузом.',
        'Для таких цилиндров характерны большой ход и высокая нагрузка, поэтому важны стабильность телескопических секций, удержание уплотнений и стойкость к боковым нагрузкам.',
      ],
      advantages: [
        'Подходят для подъема кузова с грузом и частой разгрузки.',
        'Телескопическая конструкция подбирается по углу подъема, массе кузова и давлению.',
        'Снижает риск внутренних утечек, вибрации и несинхронного движения секций.',
      ],
    },
    es: {
      intro: [
        'Los cilindros de elevación se usan en el sistema de volteo de camiones mineros 矿用电动轮车型, 大吨位矿卡, TR100, TR50 y similares. Elevan, descargan y bajan la tolva en condición cargada.',
        'Este tipo tiene carrera larga y grandes fuerzas, exigiendo estabilidad telescópica, retención de sellos y resistencia a cargas laterales.',
      ],
      advantages: [
        'Adecuados para elevación con carga y descarga frecuente de camiones mineros.',
        'La estructura telescópica se adapta al ángulo, peso de caja y presión hidráulica.',
        'Controla fugas internas, vibración y desincronización entre etapas.',
      ],
    },
  },
  '/yougang-02-03/': {
    zh: {
      intro: [
        '后悬挂缸用于矿卡后桥和车架之间的悬挂支撑，适配 重载矿用车型、TR100 等车型。它承受车辆满载运输时的垂向冲击和车架摆动载荷。',
        '后悬挂缸对抗疲劳强度和密封寿命要求高，直接影响车辆行驶平顺性、轮胎受力和车架保护。',
      ],
      advantages: [
        '适合矿卡后桥重载支撑和连续颠簸运输工况。',
        '结构设计注重抗疲劳、抗偏载和密封可靠性。',
        '可按车型高度、安装端形式和悬挂充油参数进行定制。',
      ],
    },
    en: {
      intro: [
        'Rear suspension cylinders support the rear axle and frame of mining trucks such as 重载矿用车型 and TR100. They absorb vertical impacts and frame oscillation loads during loaded haulage.',
        'Rear suspension cylinders require high fatigue strength and seal life, directly affecting ride smoothness, tire loading, and frame protection.',
      ],
      advantages: [
        'Suitable for rear axle support and continuous rough-road haulage.',
        'Designed for fatigue resistance, side-load tolerance, and reliable sealing.',
        'Customizable by vehicle height, mounting end type, and suspension oil parameters.',
      ],
    },
    ru: {
      intro: [
        'Задние цилиндры подвески поддерживают задний мост и раму карьерных самосвалов 重载矿用车型, TR100 и аналогичных моделей. Они воспринимают вертикальные удары и колебания рамы при перевозке груза.',
        'Для задней подвески важны усталостная прочность и ресурс уплотнений, влияющие на плавность хода, нагрузку шин и защиту рамы.',
      ],
      advantages: [
        'Подходят для поддержки заднего моста и движения по неровным дорогам с грузом.',
        'Конструкция рассчитана на усталость, боковые нагрузки и надежное уплотнение.',
        'Изготовление возможно по высоте машины, типу крепления и параметрам подвески.',
      ],
    },
    es: {
      intro: [
        'Los cilindros de suspensión trasera soportan eje trasero y bastidor en camiones mineros 重载矿用车型, TR100 y similares. Absorben impactos verticales y oscilaciones del bastidor durante transporte cargado.',
        'Requieren alta resistencia a fatiga y vida de sellos, afectando la suavidad de marcha, carga de neumáticos y protección del bastidor.',
      ],
      advantages: [
        'Adecuados para soporte de eje trasero y transporte continuo en caminos irregulares.',
        'Diseño enfocado en fatiga, cargas laterales y sellado fiable.',
        'Personalizable por altura del vehículo, tipo de montaje y parámetros de suspensión.',
      ],
    },
  },
  '/yougang-02-04/': {
    zh: {
      intro: [
        '悬挂缸适用于 大吨位矿卡 矿卡和 铰接式矿用车辆 铰卡等特种车辆，用于车桥与车架之间的支撑、缓冲和姿态稳定。产品兼顾矿卡大载荷和铰卡复杂路况适应性。',
        '在湿滑、碎石、坡道和连续转弯工况下，悬挂缸需要保持稳定阻尼和可靠支撑，减少结构冲击传递。',
      ],
      advantages: [
        '适合矿卡和铰卡复杂道路下的缓冲支撑。',
        '可根据车辆重量、悬挂行程和路况冲击调整结构方案。',
        '有利于提升行驶稳定性，降低车架、桥壳和轮胎异常受力。',
      ],
    },
    en: {
      intro: [
        'Suspension cylinders fit special vehicles such as 大吨位矿卡 mining trucks and 铰接式矿用车辆 articulated trucks, supporting and cushioning the axle-to-frame connection while stabilizing vehicle posture.',
        'On wet, rocky, sloped, and turning haul roads, the suspension cylinder must provide stable damping and reliable support to reduce impact transfer.',
      ],
      advantages: [
        'Suitable for cushioning and support on rough mining and articulated truck roads.',
        'Structural design can be adjusted by vehicle weight, suspension stroke, and road impact.',
        'Helps improve driving stability and reduce abnormal loads on frame, axle housing, and tires.',
      ],
    },
    ru: {
      intro: [
        'Цилиндры подвески подходят для 大吨位矿卡 и сочлененных самосвалов 铰接式矿用车辆, поддерживая соединение моста с рамой, смягчая удары и стабилизируя положение машины.',
        'На мокрых, каменистых, наклонных и извилистых дорогах цилиндр должен обеспечивать стабильное демпфирование и надежную опору.',
      ],
      advantages: [
        'Подходят для амортизации и поддержки на сложных карьерных дорогах.',
        'Конструкция подбирается по массе машины, ходу подвески и ударным нагрузкам.',
        'Помогает повысить устойчивость и снизить нагрузки на раму, мост и шины.',
      ],
    },
    es: {
      intro: [
        'Los cilindros de suspensión son compatibles con camiones mineros 大吨位矿卡 y articulados 铰接式矿用车辆, soportando y amortiguando la conexión eje-bastidor y estabilizando la postura del vehículo.',
        'En caminos mojados, rocosos, con pendiente y curvas, deben ofrecer amortiguación estable y soporte fiable para reducir transmisión de impactos.',
      ],
      advantages: [
        'Adecuados para amortiguación y soporte en rutas difíciles de mina y camiones articulados.',
        'Diseño ajustable por peso, carrera de suspensión e impactos del camino.',
        'Mejora estabilidad y reduce cargas anormales en bastidor, eje y neumáticos.',
      ],
    },
  },
  '/yougang-02-05/': {
    zh: {
      intro: [
        '转向缸用于矿卡转向系统，适配 TR100、MCC400A 等车型。它将液压系统输出转换为车轮转向动作，关系到车辆低速重载转向和狭窄道路通过能力。',
        '矿区道路转弯半径大、轮胎阻力高，转向缸需要具备足够推拉力、良好导向性和稳定的密封性能。',
      ],
      advantages: [
        '适合矿卡重载低速转向和频繁倒车调头工况。',
        '活塞杆抗弯和导向结构可按转向受力优化。',
        '可按转向桥布置、销轴规格和左右安装方向定制。',
      ],
    },
    en: {
      intro: [
        'Steering cylinders are used in mining truck steering systems for models such as TR100 and MCC400A. They convert hydraulic power into wheel steering, affecting loaded low-speed maneuvering and narrow-road passability.',
        'Mine roads create large turning resistance and high tire forces, so the steering cylinder needs sufficient push-pull force, good guidance, and stable sealing.',
      ],
      advantages: [
        'Suitable for loaded low-speed steering, reversing, and turning operations.',
        'Rod bending resistance and guide structures can be optimized for steering loads.',
        'Customizable by steering axle layout, pin specification, and left/right mounting direction.',
      ],
    },
    ru: {
      intro: [
        'Рулевые цилиндры применяются в системе рулевого управления карьерных самосвалов TR100, MCC400A и аналогичных машин. Они преобразуют давление гидросистемы в поворот колес, влияя на маневренность при малой скорости и большой нагрузке.',
        'На карьерных дорогах сопротивление повороту и нагрузка на шины высоки, поэтому цилиндру нужны достаточное усилие, хорошее направление и стабильные уплотнения.',
      ],
      advantages: [
        'Подходят для руления с грузом на малой скорости, разворотов и движения назад.',
        'Шток и направляющие могут усиливаться под рулевые нагрузки.',
        'Изготавливаются по схеме моста, размерам пальцев и направлению установки.',
      ],
    },
    es: {
      intro: [
        'Los cilindros de dirección se usan en sistemas de camiones mineros TR100, MCC400A y similares. Convierten la potencia hidráulica en giro de ruedas, afectando maniobra cargada a baja velocidad y paso por caminos estrechos.',
        'Las vías mineras generan alta resistencia de giro y fuerzas en neumáticos, por lo que el cilindro requiere empuje suficiente, buena guía y sellado estable.',
      ],
      advantages: [
        'Adecuados para dirección cargada a baja velocidad, marcha atrás y giros frecuentes.',
        'Vástago y guías optimizables para cargas de dirección.',
        'Personalizable por eje de dirección, pasadores y sentido de montaje.',
      ],
    },
  },
  '/yougang-02-06/': {
    zh: {
      intro: [
        '减震油缸适用于 articulated mining truck 等铰接式卡车，用于吸收车辆在非铺装道路、坡道和坑洼路面行驶时产生的冲击。产品关系到驾驶平顺性、结构保护和整车稳定性。',
        '铰卡工况转弯多、车架摆动大，减震油缸需要在缓冲阻尼、密封可靠性和连接强度上保持长期稳定。',
      ],
      advantages: [
        '适合铰卡复杂道路、频繁转向和长距离运输工况。',
        '缓冲特性可按车辆载荷、速度和路况进行匹配。',
        '可按原件尺寸和安装端结构进行维修替换或定制生产。',
      ],
    },
    en: {
      intro: [
        'Shock absorber cylinders fit articulated trucks such as articulated mining truck, absorbing impacts from unpaved roads, slopes, and potholes. They affect ride comfort, structural protection, and vehicle stability.',
        'Articulated trucks turn frequently and experience large frame movement, so the cylinder must maintain stable damping, reliable sealing, and strong connections over time.',
      ],
      advantages: [
        'Suitable for rough roads, frequent steering, and long-distance articulated truck haulage.',
        'Damping characteristics can be matched to vehicle load, speed, and road condition.',
        'Available for repair replacement or custom production by original dimensions and mounting ends.',
      ],
    },
    ru: {
      intro: [
        'Амортизационные цилиндры подходят для сочлененных самосвалов articulated mining truck и аналогичных машин, поглощая удары на грунтовых дорогах, уклонах и выбоинах. Они влияют на плавность хода, защиту конструкции и устойчивость машины.',
        'Сочлененные самосвалы часто поворачивают и испытывают большие перемещения рамы, поэтому важны стабильное демпфирование, надежные уплотнения и прочные соединения.',
      ],
      advantages: [
        'Подходят для сложных дорог, частого руления и длительных перевозок.',
        'Характеристики демпфирования подбираются под нагрузку, скорость и дорогу.',
        'Возможна замена или изготовление по исходным размерам и креплениям.',
      ],
    },
    es: {
      intro: [
        'Los cilindros amortiguadores son compatibles con camiones articulados articulated mining truck y similares, absorbiendo impactos en caminos sin pavimentar, pendientes y baches. Influyen en confort, protección estructural y estabilidad del vehículo.',
        'Los articulados giran con frecuencia y presentan gran movimiento del bastidor, por lo que se exige amortiguación estable, sellado fiable y conexiones resistentes.',
      ],
      advantages: [
        'Adecuados para caminos difíciles, dirección frecuente y transporte de larga distancia.',
        'Amortiguación ajustable según carga, velocidad y condición del camino.',
        'Sustitución o fabricación personalizada por dimensiones originales y extremos de montaje.',
      ],
    },
  },
  '/xuanji-01/': {
    zh: {
      intro: [
        '充气搅拌式浮选机既装有机械搅拌装置，又利用外部特设风机强制吹入空气，矿浆充气与搅拌分开完成，适合大处理量选矿流程。',
        '设备可覆盖 CHF-X型、XJC型、SB-X型、KYF型、BS-K型、LCH-X型、CLF型等型号，适用于有色金属、黑色金属及非金属矿物浮选。',
        '浮选机本机充气通路可采用侧边进气或顶部进气；随着浮选机大型化发展，顶部进气式使用效果更好，需要可靠回转阀保障气路稳定。',
      ],
      advantages: [
        '充气量可根据工艺需要增减并保持恒定，有利于提高处理能力和选别指标。',
        '叶轮不起吸气作用，转速低、功率消耗少、磨损小，脆性矿物不易产生泥化。',
        '我司专利回转阀寿命长、不漏气，可降低充气能耗，减少跑冒滴漏，保持现场干净整洁。',
      ],
    },
    en: {
      intro: [
        'The forced-air mechanical flotation machine combines mechanical agitation with an external air supply, separating slurry agitation from air injection for high-throughput mineral processing.',
        'It covers CHF-X, XJC, SB-X, KYF, BS-K, LCH-X, CLF, and similar models for non-ferrous, ferrous, and non-metallic mineral flotation.',
        'Air can be introduced from the side or from the top; as flotation machines become larger, the top-air-inlet arrangement requires a reliable rotary valve to keep airflow stable.',
      ],
      advantages: [
        'Adjustable and stable aeration helps improve processing capacity and flotation performance.',
        'The impeller does not draw air, so speed, power consumption, wear, and brittle-mineral sludging are reduced.',
        'Renyi’s patented rotary valve offers long service life, reliable sealing, lower aeration energy use, and a cleaner operating site.',
      ],
    },
    ru: {
      intro: [
        'Пневмомеханическая флотационная машина сочетает механическое перемешивание с внешней подачей воздуха, разделяя перемешивание пульпы и нагнетание воздуха для процессов большой производительности.',
        'Оборудование покрывает модели CHF-X, XJC, SB-X, KYF, BS-K, LCH-X, CLF и аналоги для флотации цветных, черных и неметаллических минералов.',
        'Подача воздуха может выполняться сбоку или сверху; для крупных машин верхняя подача требует надежного поворотного клапана для стабильного воздушного тракта.',
      ],
      advantages: [
        'Регулируемая и стабильная аэрация помогает повысить производительность и показатели обогащения.',
        'Импеллер не всасывает воздух, поэтому ниже скорость, расход энергии, износ и ошламование хрупких минералов.',
        'Запатентованный поворотный клапан Renyi имеет длительный ресурс, надежное уплотнение, снижает энергозатраты на аэрацию и поддерживает чистоту площадки.',
      ],
    },
    es: {
      intro: [
        'La máquina de flotación mecánica con aire forzado combina agitación mecánica y suministro externo de aire, separando la mezcla de pulpa y la inyección de aire para procesos de gran capacidad.',
        'Cubre modelos CHF-X, XJC, SB-X, KYF, BS-K, LCH-X, CLF y similares para flotación de minerales no ferrosos, ferrosos y no metálicos.',
        'El aire puede entrar por el lateral o por la parte superior; en equipos de gran tamaño, la entrada superior exige una válvula rotativa fiable para mantener estable el flujo.',
      ],
      advantages: [
        'La aireación ajustable y estable mejora la capacidad de tratamiento y los indicadores de flotación.',
        'El impulsor no aspira aire, por lo que baja la velocidad, el consumo, el desgaste y la generación de lamas.',
        'La válvula rotativa patentada de Renyi ofrece larga vida útil, sellado fiable, menor consumo de aireación y un sitio de trabajo más limpio.',
      ],
    },
  },
  '/zhuanyong-01/': {
    zh: {
      intro: [
        'RY-LTCZ系列轮辋（多件式轮辋）拆装机面向矿用汽车、铲运机、装载机等工程机械轮辋维修场景，用于大型轮胎轮辋拆卸、安装、维修和轮毂修复。',
        '设备采用液压压装方式，按工艺顺序分离内轮辋、锥套和轮辋组件，减少人工敲击、撬装和高风险拆换动作，提高现场维修效率。',
        '液压站可配置380V/50-60Hz、7.5kW电机，额定工作压力20MPa、最大流量40L/min、油箱容量360L，适合矿山维修车间连续作业。',
      ],
      advantages: [
        '依据国内矿山和工程机械维修现场研发，结构简单、安全实用，培训后可由两人配合完成规范操作。',
        '覆盖DLCJ-36、DLCJ-37、27.00-49、22-25、18.00R25、21.00R35等多种多件式轮辋规格。',
        '液压分离过程受力更稳定，可降低轮辋损伤、人员伤害和事故风险。',
        '可结合升降杆、旋臂吊、护栏、激光围栏等配置，提升重载轮辋拆装的安全性和便利性。',
      ],
    },
    en: {
      intro: [
        'The RY-LTCZ series multi-piece rim dismounting machine is designed for rim maintenance on mining trucks, LHD loaders, wheel loaders, and other heavy engineering equipment.',
        'Using hydraulic pressing, it separates the inner rim, conical sleeve, and rim components in a controlled sequence, reducing hammering, prying, and other high-risk manual operations.',
        'The hydraulic station can be configured for 380V/50-60Hz with a 7.5kW motor, 20MPa rated working pressure, 40L/min maximum flow, and a 360L tank for continuous workshop service.',
      ],
      advantages: [
        'Developed for mining and heavy-equipment maintenance sites, with a simple, safe, and practical structure for two-person operation after training.',
        'Covers multi-piece rim sizes including DLCJ-36, DLCJ-37, 27.00-49, 22-25, 18.00R25, and 21.00R35.',
        'Controlled hydraulic separation helps reduce rim damage, manual labor intensity, and accident risk.',
        'Optional lift rods, jib cranes, guardrails, and laser fence protection can improve safety and handling convenience.',
      ],
    },
    ru: {
      intro: [
        'Станок демонтажа многоэлементных ободов серии RY-LTCZ предназначен для обслуживания ободов карьерных самосвалов, подземных погрузчиков, фронтальных погрузчиков и другой тяжелой техники.',
        'Гидравлическое прессование по заданной последовательности разделяет внутренний обод, конусную втулку и элементы обода, снижая необходимость ударных и монтажных работ вручную.',
        'Гидростанция может комплектоваться под 380 В / 50-60 Гц, двигатель 7,5 кВт, рабочее давление 20 МПа, максимальный расход 40 л/мин и бак 360 л для непрерывной работы в мастерской.',
      ],
      advantages: [
        'Разработан для горных и ремонтных площадок тяжелой техники: простая, безопасная и практичная конструкция для работы двух операторов после обучения.',
        'Охватывает размеры многоэлементных ободов DLCJ-36, DLCJ-37, 27.00-49, 22-25, 18.00R25, 21.00R35 и аналогичные.',
        'Контролируемое гидравлическое разделение снижает повреждения обода, трудоемкость и риск несчастных случаев.',
        'Возможны подъемные штанги, консольный кран, ограждения и лазерная защита для более безопасной работы с тяжелыми ободами.',
      ],
    },
    es: {
      intro: [
        'La desmontadora de llantas multipieza serie RY-LTCZ está diseñada para mantenimiento de llantas en camiones mineros, cargadores LHD, cargadoras y otros equipos pesados.',
        'Mediante prensado hidráulico separa de forma controlada la llanta interior, el casquillo cónico y los componentes de la llanta, reduciendo golpes, palanqueo y operaciones manuales de alto riesgo.',
        'La central hidráulica puede configurarse para 380V/50-60Hz, motor de 7,5kW, presión nominal de 20MPa, caudal máximo de 40L/min y tanque de 360L para servicio continuo en taller.',
      ],
      advantages: [
        'Desarrollada para talleres mineros y mantenimiento de maquinaria pesada, con estructura simple, segura y práctica para operación por dos personas tras capacitación.',
        'Cubre tamaños de llanta multipieza como DLCJ-36, DLCJ-37, 27.00-49, 22-25, 18.00R25 y 21.00R35.',
        'La separación hidráulica controlada reduce daños en la llanta, esfuerzo manual y riesgo de accidentes.',
        'Puede combinar varillas de elevación, grúa de pluma, barandillas y protección láser para mejorar seguridad y manejo.',
      ],
    },
  },
  '/zhuanyong-02/': {
    zh: {
      intro: [
        '门架式轮辋拆装机面向大型矿山高频轮胎维修，用于 MT5500、大吨位矿卡、930E、SF33900 矿用汽车以及 L2350 前装机等大型设备的轮辋拆卸和安装。',
        '设备采用门架式液压压装结构，配合移动平台、轮辋夹具和可视化操作平台，可覆盖 45"-63" 轮辋及 45/65-45 至 70/70-57 轮胎规格。',
        '整机额定拆卸能力不低于 400T，电机功率 37kW，系统工作压力 28MPa，支持遥控或控制杆操作，适合矿山维修车间连续作业。',
      ],
      advantages: [
        '门架结构刚性强，适合大型矿卡、港口机械和工程机械重载轮辋拆装。',
        '可视系统与遥控操作降低人员近距离干预，减轻劳动强度并提升维修效率。',
        '液压压装过程受力稳定，结合过载和断电保护可降低事故风险。',
        '适配轮辋和轮胎规格范围大，便于大型矿山集中维护多型号设备。',
      ],
    },
    en: {
      intro: [
        'The gantry-type rim dismounting machine is built for high-frequency tire service in large mines, supporting rim removal and installation on MT5500, 大吨位矿卡, 930E, SF33900 mining trucks, L2350 front loaders, and similar heavy equipment.',
        'A portal hydraulic pressing structure works with a rail-mounted platform, rim fixtures, and a visualized operation station to cover 45"-63" rims and 45/65-45 to 70/70-57 tire sizes.',
        'Rated dismounting capacity is at least 400T, with a 37kW motor, 28MPa system working pressure, and remote or lever control for continuous workshop operation.',
      ],
      advantages: [
        'Rigid gantry structure suits heavy rim service on mining trucks, port machinery, and engineering equipment.',
        'Visual monitoring and remote operation reduce close-range manual intervention, labor intensity, and service time.',
        'Stable hydraulic pressing, together with overload and power-off protection, helps reduce accident risk.',
        'Wide rim and tire adaptability makes it suitable for centralized maintenance of multiple large-equipment models.',
      ],
    },
    ru: {
      intro: [
        'Портальный станок демонтажа ободов предназначен для частого обслуживания шин на крупных рудниках и подходит для демонтажа и монтажа ободов самосвалов MT5500, 大吨位矿卡, 930E, SF33900, фронтального погрузчика L2350 и аналогичной техники.',
        'Портальная гидравлическая прессовая конструкция работает с передвижной платформой, зажимами обода и визуализированной станцией управления, охватывая ободы 45"-63" и шины 45/65-45 до 70/70-57.',
        'Номинальное усилие демонтажа не менее 400 т, двигатель 37 кВт, рабочее давление системы 28 МПа, управление дистанционное или рычажное для непрерывной работы в мастерской.',
      ],
      advantages: [
        'Жесткая портальная конструкция подходит для тяжелых ободов карьерных самосвалов, портовой и строительной техники.',
        'Визуальный контроль и дистанционное управление уменьшают работу оператора рядом с опасной зоной и повышают эффективность.',
        'Стабильное гидравлическое прессование с защитой от перегрузки и отключения питания снижает риск аварий.',
        'Широкий диапазон ободов и шин удобен для централизованного обслуживания разных моделей крупной техники.',
      ],
    },
    es: {
      intro: [
        'La desmontadora de llantas tipo pórtico está pensada para mantenimiento frecuente de neumáticos en minas grandes, con desmontaje e instalación de llantas en camiones MT5500, 大吨位矿卡, 930E, SF33900, cargadores frontales L2350 y equipos similares.',
        'La estructura hidráulica tipo pórtico trabaja con plataforma móvil sobre rieles, útiles de sujeción y estación de operación visualizada, cubriendo llantas de 45"-63" y neumáticos de 45/65-45 a 70/70-57.',
        'La capacidad nominal de desmontaje es de al menos 400T, con motor de 37kW, presión de trabajo de 28MPa y operación por control remoto o palancas para servicio continuo en taller.',
      ],
      advantages: [
        'La estructura rígida de pórtico es adecuada para llantas pesadas de camiones mineros, maquinaria portuaria y equipos de ingeniería.',
        'La visualización y el control remoto reducen la intervención cercana, el esfuerzo y el tiempo de mantenimiento.',
        'El prensado hidráulico estable, junto con protección contra sobrecarga y corte de energía, ayuda a reducir riesgos.',
        'El amplio rango de llantas y neumáticos facilita el mantenimiento centralizado de múltiples equipos grandes.',
      ],
    },
  },
  '/zhuanyong-03/': {
    zh: {
      intro: [
        '电动轮轮马达拆装机面向大型矿用电动轮自卸车轮边马达维护，适用于江铜德兴铜矿等现场的 矿用车型、矿用电动轮车型、重载矿用车型、R170 等车型。',
        '资料中的轮马达覆盖 GE776、GE788、GEB25 等型号，其中 GE776 约 6.85 吨，GE788 约 10.6 吨，GEB25 约 12.12 吨，设备需要适应不同重量和外形尺寸的轮边马达。',
        '传统轮马达更换需要拆车斗、移车、行车叉车配合，前后约 4 天。该设备可在不拆除车斗的前提下直接拆装轮边马达，缩短停机时间并降低高风险吊装作业。',
      ],
      advantages: [
        '低位移动底盘配合灰色托架支承轮边马达，便于在矿卡轮边位置进行重载定位和移运。',
        '液压托举、摆动与多操纵杆控制帮助操作人员更平稳地完成对位、托举、拆卸和安装。',
        '减少吊车、行车、叉车和人工撬装依赖，降低维修成本和现场安全隐患。',
        '以柴油机为动力源，经过工业试验与评审，并围绕轮边马达拆装机取得多项实用新型专利。',
      ],
    },
    en: {
      intro: [
        'The electric wheel motor dismounting machine is designed for wheel motor maintenance on large mining electric-drive dump trucks, including 矿用车型, 矿用电动轮车型, 重载矿用车型, R170, and similar models used at sites such as Jiangxi Copper Dexing Copper Mine.',
        'The documented wheel motors include GE776, GE788, and GEB25. GE776 weighs about 6.85 t, GE788 about 10.6 t, and GEB25 about 12.12 t, requiring the equipment to handle different motor weights and envelopes.',
        'Traditional replacement can require removing the truck body, moving the truck, and coordinating cranes, overhead cranes, forklifts, and manual work, taking about four days. This machine allows direct wheel motor service without removing the truck body, reducing downtime and high-risk lifting operations.',
      ],
      advantages: [
        'A low mobile chassis and grey cradle support the wheel motor for heavy positioning and transfer near the truck wheel end.',
        'Hydraulic lifting, swinging, and multi-lever control help operators align, support, remove, and install the motor more steadily.',
        'Reduced dependence on cranes, overhead cranes, forklifts, and manual prying helps lower maintenance cost and safety risk.',
        'Diesel-powered configuration, completed industrial testing and review, with multiple utility-model patents around wheel motor dismounting technology.',
      ],
    },
    ru: {
      intro: [
        'Станок демонтажа мотор-колес предназначен для обслуживания мотор-колес крупных карьерных электросамосвалов, включая 矿用车型, 矿用电动轮车型, 重载矿用车型, R170 и аналогичные модели на площадках вроде медного рудника Dexing.',
        'В материалах указаны мотор-колеса GE776, GE788 и GEB25. GE776 весит около 6,85 т, GE788 около 10,6 т, GEB25 около 12,12 т, поэтому оборудование должно работать с разной массой и габаритами.',
        'Обычная замена требует снятия кузова, перемещения самосвала, кранов, мостовых кранов, погрузчиков и ручных операций, занимая около четырех дней. Этот станок позволяет обслуживать мотор-колесо без снятия кузова, сокращая простой и опасные подъемные операции.',
      ],
      advantages: [
        'Низкое мобильное шасси и серая люлька поддерживают мотор-колесо при тяжелом позиционировании и перемещении у колесного узла.',
        'Гидравлический подъем, поворот и многорычажное управление помогают точнее выполнять выравнивание, поддержку, демонтаж и монтаж.',
        'Меньшая зависимость от кранов, мостовых кранов, погрузчиков и ручного монтажа снижает стоимость ремонта и риски.',
        'Дизельный источник энергии, промышленные испытания и оценка, а также несколько патентов на полезные модели по технологии демонтажа мотор-колес.',
      ],
    },
    es: {
      intro: [
        'La desmontadora de motor de rueda eléctrica está diseñada para mantenimiento de motores de rueda en grandes camiones mineros eléctricos, incluidos 矿用车型, 矿用电动轮车型, 重载矿用车型, R170 y modelos similares usados en sitios como la mina de cobre Dexing.',
        'Los materiales cubren motores GE776, GE788 y GEB25. El GE776 pesa unos 6,85 t, el GE788 unos 10,6 t y el GEB25 unos 12,12 t, por lo que el equipo debe adaptarse a distintos pesos y tamaños.',
        'El método tradicional puede exigir retirar la caja, mover el camión y coordinar grúas, puentes grúa, montacargas y trabajo manual, con alrededor de cuatro días de intervención. Este equipo permite desmontar el motor de rueda sin retirar la caja, reduciendo parada y riesgos de izaje.',
      ],
      advantages: [
        'El chasis móvil bajo y la cuna gris soportan el motor de rueda para posicionamiento pesado y traslado cerca del extremo de rueda.',
        'La elevación hidráulica, el giro y el control por múltiples palancas ayudan a alinear, sostener, desmontar e instalar con mayor estabilidad.',
        'Reduce dependencia de grúas, puentes grúa, montacargas y palanqueo manual, bajando coste de mantenimiento y riesgo operativo.',
        'Configuración con motor diésel, pruebas industriales y evaluación completadas, con varias patentes de modelo de utilidad relacionadas con desmontaje de motores de rueda.',
      ],
    },
  },
  '/zhuanyong-04/': {
    zh: {
      intro: [
        '炮孔填塞机用于矿山爆破工程中的炮孔填塞工序，可替代传统人工填塞，减少爆破区人员数量和现场劳动强度。',
        '该设备基于工程机械 LW300FV 型轮式装载机改装，在装载机前部安装液压驱动的双臂刮板，刮板通过支座、销轴和油缸与车辆执行机构连接。',
        '双臂刮板可将碎石等填塞料推送到炮孔区域，提高填塞速度、密实性和一致性，从而改善炸药能量利用率和岩石爆破破碎效果。',
      ],
      advantages: [
        '机械化填塞替代人工填塞，减少爆破区近距离作业人员，降低跌落、碰撞和误操作风险。',
        '前置双臂刮板由液压缸驱动，可根据炮孔位置和料堆状态进行开合与推料，适合露天矿山连续作业。',
        '支座、销轴、油缸和装载机液压系统配合，改装路径清晰，便于利用现有轮式装载机形成专用填孔设备。',
        '一个作业循环即可完成大部分炮孔填塞需求，未达到要求时可继续第二循环，帮助缩短爆破准备时间。',
      ],
    },
    en: {
      intro: [
        'The blasthole stemming machine is used in mine blasting operations to replace manual stemming, reducing the number of people working inside the blasting area and lowering labor intensity.',
        'It is modified from an construction machinery LW300FV wheel loader, with a hydraulically driven double-arm scraper blade mounted at the front and connected through a support frame, pins, cylinders, and the loader work mechanism.',
        'The double-arm blade pushes crushed rock or other stemming material into the blasthole area, improving filling speed, compaction consistency, explosive energy utilization, and rock breakage results.',
      ],
      advantages: [
        'Mechanized stemming replaces manual work, reducing close-range personnel exposure in the blasting area and lowering fall, collision, and operation risks.',
        'The front double-arm scraper is driven by hydraulic cylinders and can open, close, and push material according to hole position and material pile condition for continuous open-pit work.',
        'The support frame, pins, cylinders, and loader hydraulic system provide a clear retrofit route for turning an existing wheel loader into special stemming equipment.',
        'Most holes can be stemmed in one work cycle; when needed, a second cycle can be used to meet the required stemming depth, shortening blast preparation time.',
      ],
    },
    ru: {
      intro: [
        'Машина для забойки взрывных скважин применяется в горных взрывных работах вместо ручной забойки, сокращая число людей в зоне взрыва и снижая трудоемкость.',
        'Оборудование выполнено на базе колесного погрузчика construction machinery LW300FV: спереди устанавливается гидравлический двухрычажный скребковый отвал, соединенный с рабочим органом через опору, пальцы и гидроцилиндры.',
        'Двухрычажный отвал подает щебень или другой забоечный материал к скважинам, повышая скорость, равномерность и плотность забойки, а также эффективность использования энергии взрыва.',
      ],
      advantages: [
        'Механизированная забойка заменяет ручной труд, уменьшая присутствие людей в опасной зоне и снижая риски падений, столкновений и ошибок оператора.',
        'Передний двухрычажный скребок приводится гидроцилиндрами и может раскрывать створки и перемещать материал под положение скважин для непрерывной работы на карьере.',
        'Опора, пальцы, цилиндры и гидросистема погрузчика образуют понятную схему переоборудования существующего колесного погрузчика в специальную машину.',
        'Обычно один рабочий цикл закрывает большую часть потребности в забойке; при необходимости выполняется второй цикл, что сокращает подготовку взрывных работ.',
      ],
    },
    es: {
      intro: [
        'La máquina de retacado de barrenos se usa en voladuras mineras para sustituir el retacado manual, reduciendo el personal dentro de la zona de voladura y la intensidad del trabajo.',
        'El equipo se modifica a partir de una cargadora de ruedas construction machinery LW300FV, con una hoja raspadora hidráulica de doble brazo instalada en la parte frontal y conectada mediante soporte, pasadores, cilindros y el mecanismo de trabajo de la cargadora.',
        'La hoja de doble brazo empuja piedra triturada u otro material de retacado hacia los barrenos, mejorando velocidad, compactación, uniformidad, aprovechamiento de la energía explosiva y resultado de fragmentación.',
      ],
      advantages: [
        'El retacado mecanizado sustituye el trabajo manual, reduce la presencia cercana de personal en la zona de voladura y baja riesgos de caída, choque y error operativo.',
        'El raspador frontal de doble brazo, accionado por cilindros hidráulicos, puede abrirse, cerrarse y empujar material según la posición del barreno y el estado del acopio.',
        'El soporte, pasadores, cilindros y sistema hidráulico de la cargadora ofrecen una ruta clara para convertir una cargadora existente en equipo especial de retacado.',
        'En la mayoría de los casos un ciclo de trabajo completa el retacado; si hace falta, se realiza un segundo ciclo para alcanzar el requisito y acortar la preparación de la voladura.',
      ],
    },
  },
  '/zhuanyong-05/': {
    zh: {
      intro: [
        '轮胎拆卸手是用于大型车辆轮胎拆装、搬运、旋转和对位的前端属具，本体由两条长箱形夹臂、黑色圆形夹持盘、中心回转结构、后端挂接耳板和液压执行机构组成。',
        '设备可装配在大型轮式装载机前端使用，装载机只是承载与移动平台，核心产品是前端轮胎机械手本体。',
        '两侧圆形夹盘夹持大型矿山轮胎侧面，通过液压控制完成抓取、卸下、安装、旋转和转运，减少人工近距离接触重型轮胎。',
      ],
      advantages: [
        '机械化夹持、旋转和搬运大型轮胎，降低人工撬装、吊装和近距离扶持带来的安全风险。',
        '长箱形夹臂、黑色圆形夹盘、齿形防滑块和中心回转结构配合，适合矿卡、装载机等大型设备轮胎维护。',
        '后端挂接耳板、横向销轴、油缸和管路与装载机前端机构连接，便于在维修车间或矿山现场进行装车使用。',
        '可根据轮胎直径、重量及是否带防滑链等工况匹配规格，提高拆装效率和轮胎、轮毂保护性。',
      ],
    },
    en: {
      intro: [
        'The tire handler is a front-end attachment for removing, installing, handling, rotating, and positioning large vehicle tires. Its body consists of two long box-section clamp arms, black circular clamping discs, a central rotating structure, rear mounting brackets, and hydraulic actuators.',
        'It can be mounted to the front of a large wheel loader; the loader is the carrier and moving platform, while the core product is the front tire-manipulator attachment itself.',
        'The two circular discs clamp the sidewalls of large mining tires and use hydraulic control to grip, remove, install, rotate, and transfer tires with less close-range manual handling.',
      ],
      advantages: [
        'Mechanized clamping, rotation, and handling reduce manual prying, lifting, and close-range support risks around heavy tires.',
        'Long box-section arms, black circular clamping discs, anti-slip teeth, and a central rotating structure suit tire service on mining trucks, wheel loaders, and other large equipment.',
        'Rear mounting brackets, transverse pins, cylinders, and hoses connect with the loader front mechanism for workshop or mine-site use.',
        'Specifications can be matched to tire diameter, tire weight, and chain-wrapped tires to improve service efficiency and protect tires and rims.',
      ],
    },
    ru: {
      intro: [
        'Манипулятор для шин - это переднее навесное оборудование для демонтажа, монтажа, перемещения, поворота и позиционирования крупных шин. Узел включает две длинные коробчатые зажимные балки, черные круглые зажимные диски, центральный поворотный механизм, задние кронштейны крепления и гидроприводы.',
        'Оборудование может устанавливаться на переднюю часть крупного колесного погрузчика; погрузчик служит носителем, а основной продукт - сам передний шинный манипулятор.',
        'Два круглых диска зажимают боковины крупных карьерных шин и гидравлически выполняют захват, снятие, установку, поворот и перенос с меньшим участием людей рядом с тяжелой шиной.',
      ],
      advantages: [
        'Механизированный зажим, поворот и перемещение снижают риски ручного монтажа, подъема и удержания тяжелых шин.',
        'Длинные коробчатые балки, черные круглые зажимные диски, противоскользящие зубья и центральный поворотный узел подходят для обслуживания шин карьерных самосвалов и погрузчиков.',
        'Задние кронштейны, поперечные пальцы, цилиндры и рукава соединяются с передним механизмом погрузчика для работы в цехе или на площадке.',
        'Исполнение подбирается по диаметру и массе шины, а также по наличию защитных цепей, повышая эффективность обслуживания и защиту шины и обода.',
      ],
    },
    es: {
      intro: [
        'El manipulador de neumáticos es un accesorio frontal para desmontar, montar, trasladar, girar y posicionar neumáticos grandes. Su cuerpo incluye dos brazos largos de sección cajón, discos circulares negros de sujeción, estructura central giratoria, soportes traseros de montaje y actuadores hidráulicos.',
        'Puede montarse en la parte frontal de una cargadora grande; la cargadora es el portador y plataforma móvil, mientras que el producto principal es el manipulador frontal de neumáticos.',
        'Los dos discos circulares sujetan los flancos de neumáticos mineros grandes y, mediante control hidráulico, realizan agarre, desmontaje, montaje, giro y traslado con menos intervención manual cercana.',
      ],
      advantages: [
        'La sujeción, rotación y manipulación mecanizadas reducen riesgos de palanqueo, izaje y apoyo manual cerca de neumáticos pesados.',
        'Los brazos de sección cajón, discos negros, dientes antideslizantes y estructura giratoria central son adecuados para mantenimiento de neumáticos en camiones mineros y cargadoras.',
        'Los soportes traseros, pasadores transversales, cilindros y mangueras se conectan al mecanismo frontal de la cargadora para uso en taller o sitio minero.',
        'La especificación puede adaptarse al diámetro, peso y presencia de cadenas del neumático, mejorando eficiencia y protección de neumático y llanta.',
      ],
    },
  },
};

const RENYI_HYDRAULIC_PRODUCT_TOP_SPEC_LABELS: Record<
  RenyiLocale,
  { models: string; equipment: string; products: string }
> = {
  zh: { models: '覆盖型号', equipment: '设备类型', products: '主要产品' },
  en: { models: 'Covered models', equipment: 'Equipment type', products: 'Main products' },
  ru: { models: 'Модели', equipment: 'Тип техники', products: 'Основные изделия' },
  es: { models: 'Modelos cubiertos', equipment: 'Tipo de equipo', products: 'Productos principales' },
};

const RENYI_HYDRAULIC_GENERIC_MODEL_TEXT: RenyiLocalizedText = {
  zh: '适配多数型号',
  en: 'Fits most models',
  ru: 'Подходит для большинства моделей',
  es: 'Compatible con la mayoría de modelos',
};

const RENYI_HYDRAULIC_PRODUCT_COPY: Record<
  RenyiLocale,
  {
    inquiry: string;
    tabs: [string, string, string];
    introTitle: string;
    advantagesTitle: string;
    specsTitle: string;
    specSectionTitle: string;
    tableRows: {
      equipment: string;
      matchedHost: string;
      mainProduct: string;
      application: string;
    };
    advantages: string[];
  }
> = {
  zh: {
    inquiry: '在线留言',
    tabs: ['产品介绍', '应用特点', '型号参数'],
    introTitle: '产品介绍',
    advantagesTitle: '应用特点',
    specsTitle: '型号参数',
    specSectionTitle: '适配型号',
    tableRows: {
      equipment: '设备类型',
      matchedHost: '适用主机',
      mainProduct: '主要产品',
      application: '应用类别',
    },
    advantages: [
      '按适用主机和现场工况匹配安装接口、结构尺寸与密封方案，便于维修替换和配套供应。',
      '缸筒、活塞杆、耳环及焊接结构按重载工况设计，兼顾承载能力、耐磨性和使用寿命。',
      '可按原厂安装尺寸、连接方式、行程、压力等级及现场工况进行定制生产。',
    ],
  },
  en: {
    inquiry: 'Contact Us',
    tabs: ['Introduction', 'Application Features', 'Model Parameters'],
    introTitle: 'Introduction',
    advantagesTitle: 'Application Features',
    specsTitle: 'Model Parameters',
    specSectionTitle: 'Matched Models',
    tableRows: {
      equipment: 'Equipment type',
      matchedHost: 'Matched model',
      mainProduct: 'Main product',
      application: 'Application category',
    },
    advantages: [
      'Mounting interfaces, structural dimensions, and sealing solutions are matched to the host machine and working conditions for easier replacement and supply.',
      'Cylinder barrels, piston rods, eye ends, and welded structures are designed for heavy-duty service, balancing load capacity, wear resistance, and service life.',
      'Products can be customized by mounting dimensions, connection style, stroke, pressure rating, and site conditions.',
    ],
  },
  ru: {
    inquiry: 'Связаться с нами',
    tabs: ['Описание', 'Особенности применения', 'Параметры моделей'],
    introTitle: 'Описание',
    advantagesTitle: 'Особенности применения',
    specsTitle: 'Параметры моделей',
    specSectionTitle: 'Совместимые модели',
    tableRows: {
      equipment: 'Тип техники',
      matchedHost: 'Модель',
      mainProduct: 'Основное изделие',
      application: 'Категория применения',
    },
    advantages: [
      'Установочные интерфейсы, конструктивные размеры и уплотнения подбираются под модель машины и условия эксплуатации, что упрощает замену и поставку.',
      'Гильза, шток, проушины и сварные элементы рассчитаны на тяжелые режимы работы с учетом грузоподъемности, износостойкости и срока службы.',
      'Изделия могут изготавливаться по установочным размерам, соединениям, ходу, давлению и условиям площадки.',
    ],
  },
  es: {
    inquiry: 'Contáctenos',
    tabs: ['Introducción', 'Características de aplicación', 'Parámetros por modelo'],
    introTitle: 'Introducción',
    advantagesTitle: 'Características de aplicación',
    specsTitle: 'Parámetros por modelo',
    specSectionTitle: 'Modelos compatibles',
    tableRows: {
      equipment: 'Tipo de equipo',
      matchedHost: 'Modelo compatible',
      mainProduct: 'Producto principal',
      application: 'Categoría de aplicación',
    },
    advantages: [
      'Las interfaces de montaje, dimensiones estructurales y soluciones de sellado se adaptan al equipo y a las condiciones de trabajo para facilitar la sustitución y el suministro.',
      'El tubo del cilindro, vástago, orejetas y estructuras soldadas están diseñados para servicio pesado, equilibrando capacidad de carga, resistencia al desgaste y vida útil.',
      'Los productos pueden personalizarse por dimensiones de montaje, conexión, carrera, presión y condiciones de obra.',
    ],
  },
};

const RENYI_HYDRAULIC_PRODUCT_CONFIGS: RenyiHydraulicProductConfig[] = [
  renyiHydraulicProductConfig(
    '/yougang-01-01/',
    '/yougang-01/',
    'renyi-hydraulic-excavator-boom-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('挖掘机大臂油缸', 'Excavator Boom Cylinder', 'Гидроцилиндр стрелы экскаватора', 'Cilindro de pluma para excavadora'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('EC700C 大臂油缸', 'EC700C Boom Cylinder', 'EC700C цилиндр стрелы', 'Cilindro de pluma EC700C'),
        renyiLocalizedText('挖掘机', 'Excavator', 'Экскаватор', 'Excavadora'),
        'EC700C',
        renyiLocalizedText('大臂油缸', 'Boom cylinder', 'Цилиндр стрелы', 'Cilindro de pluma'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-ec700c-boom-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('EC700C挖机大臂油缸实拍图', 'EC700C excavator boom cylinder product photo', 'Фото гидроцилиндра стрелы EC700C', 'Foto de cilindro de pluma EC700C'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('EC480D 大臂油缸', 'EC480D Boom Cylinder', 'EC480D цилиндр стрелы', 'Cilindro de pluma EC480D'),
        renyiLocalizedText('挖掘机', 'Excavator', 'Экскаватор', 'Excavadora'),
        'EC480D',
        renyiLocalizedText('大臂油缸', 'Boom cylinder', 'Цилиндр стрелы', 'Cilindro de pluma'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-ec480d-boom-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('EC480D挖掘机大臂油缸实拍图', 'EC480D excavator boom cylinder product photo', 'Фото гидроцилиндра стрелы EC480D', 'Foto de cilindro de pluma EC480D'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-01-02/',
    '/yougang-01/',
    'renyi-hydraulic-loader-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('装载机油缸', 'Loader Cylinders', 'Гидроцилиндры погрузчика', 'Cilindros para cargadora'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('大型装载机 举升油缸', '大型装载机 Lift Cylinder', '大型装载机 цилиндр подъема', 'Cilindro de elevación 大型装载机'),
        renyiLocalizedText('装载机', 'Loader', 'Погрузчик', 'Cargadora'),
        '大型装载机',
        renyiLocalizedText('举升油缸', 'Lift cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-cat988h-lift-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('大型装载机装载机举升油缸实拍图', '大型装载机 loader lift cylinder product photo', 'Фото цилиндра подъема 大型装载机', 'Foto de cilindro de elevación 大型装载机'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('大型装载机 倾斜油缸', '大型装载机 Tilt Cylinder', '大型装载机 цилиндр наклона', 'Cilindro de inclinación 大型装载机'),
        renyiLocalizedText('装载机', 'Loader', 'Погрузчик', 'Cargadora'),
        '大型装载机',
        renyiLocalizedText('倾斜油缸', 'Tilt cylinder', 'Цилиндр наклона', 'Cilindro de inclinación'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-cat988h-tilt-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('大型装载机装载机倾斜油缸实拍图', '大型装载机 loader tilt cylinder product photo', 'Фото цилиндра наклона 大型装载机', 'Foto de cilindro de inclinación 大型装载机'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-01-03/',
    '/yougang-01/',
    'renyi-hydraulic-bulldozer-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('推土机油缸', 'Bulldozer Cylinders', 'Гидроцилиндры бульдозера', 'Cilindros para bulldozer'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('D10T 铲刀提升缸', 'D10T Blade Lift Cylinder', 'D10T цилиндр подъема отвала', 'Cilindro de elevación de hoja D10T'),
        renyiLocalizedText('推土机', 'Bulldozer', 'Бульдозер', 'Bulldozer'),
        'D10T',
        renyiLocalizedText('铲刀提升缸', 'Blade lift cylinder', 'Цилиндр подъема отвала', 'Cilindro de elevación de hoja'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-d10t-blade-lift-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('D10T铲刀提升缸实拍图', 'D10T blade lift cylinder product photo', 'Фото цилиндра подъема отвала D10T', 'Foto de cilindro de elevación de hoja D10T'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('D375A-6 推土机油缸', 'D375A-6 Bulldozer Cylinder', 'D375A-6 гидроцилиндр бульдозера', 'Cilindro para bulldozer D375A-6'),
        renyiLocalizedText('推土机', 'Bulldozer', 'Бульдозер', 'Bulldozer'),
        'D375A-6',
        renyiLocalizedText('铲刀/松土器油缸', 'Blade/ripper cylinder', 'Цилиндр отвала/рыхлителя', 'Cilindro de hoja/escarificador'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-d375a6-bulldozer-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('D375A-6推土机油缸实拍图', 'D375A-6 bulldozer cylinder product photo', 'Фото гидроцилиндра D375A-6', 'Foto de cilindro D375A-6'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-01-04/',
    '/yougang-01/',
    'renyi-hydraulic-grader-lift-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('平地机提升缸', 'Grader Lift Cylinder', 'Цилиндр подъема грейдера', 'Cilindro de elevación para motoniveladora'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('14M 提升缸', '14M Lift Cylinder', '14M цилиндр подъема', 'Cilindro de elevación 14M'),
        renyiLocalizedText('平地机', 'Grader', 'Грейдер', 'Motoniveladora'),
        '14M',
        renyiLocalizedText('提升缸', 'Lift cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-14m-lift-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('14M提升缸实拍图', '14M lift cylinder product photo', 'Фото цилиндра подъема 14M', 'Foto de cilindro de elevación 14M'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-01-05/',
    '/yougang-01/',
    'renyi-hydraulic-drill-rig-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('钻机油缸', 'Drill Rig Cylinders', 'Гидроцилиндры буровой установки', 'Cilindros para perforadora'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('ZGYX460 钻机油缸', 'ZGYX460 Drill Rig Cylinder', 'ZGYX460 гидроцилиндр буровой', 'Cilindro de perforadora ZGYX460'),
        renyiLocalizedText('钻机', 'Drill rig', 'Буровая установка', 'Perforadora'),
        'ZGYX460',
        renyiLocalizedText('钻机油缸', 'Drill rig cylinder', 'Гидроцилиндр буровой', 'Cilindro de perforadora'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-zgyx460-drill-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('ZGYX460潜孔钻机油缸实拍图', 'ZGYX460 DTH drill rig cylinder product photo', 'Фото гидроцилиндра ZGYX460', 'Foto de cilindro ZGYX460'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('YZ35 钻机油缸', 'YZ35 Drill Rig Cylinder', 'YZ35 гидроцилиндр буровой', 'Cilindro de perforadora YZ35'),
        renyiLocalizedText('钻机', 'Drill rig', 'Буровая установка', 'Perforadora'),
        'YZ35',
        renyiLocalizedText('钻机油缸', 'Drill rig cylinder', 'Гидроцилиндр буровой', 'Cilindro de perforadora'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-yz35-drill-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('YZ35钻机油缸实拍图', 'YZ35 drill rig cylinder product photo', 'Фото гидроцилиндра YZ35', 'Foto de cilindro YZ35'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-01-06/',
    '/yougang-01/',
    'renyi-hydraulic-crusher-cylinder-product',
    RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
    renyiLocalizedText('破碎机油缸', 'Crusher Cylinders', 'Гидроцилиндры дробилки', 'Cilindros para trituradora'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('破碎机推动缸', 'Crusher Push Cylinder', 'Толкающий цилиндр дробилки', 'Cilindro de empuje para trituradora'),
        renyiLocalizedText('破碎机', 'Crusher', 'Дробилка', 'Trituradora'),
        '破碎机',
        renyiLocalizedText('推动缸', 'Push cylinder', 'Толкающий цилиндр', 'Cilindro de empuje'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-crusher-push-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('破碎机推动缸实拍图', 'Crusher push cylinder product photo', 'Фото толкающего цилиндра дробилки', 'Foto de cilindro de empuje para trituradora'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('破碎机释放缸', 'Crusher Release Cylinder', 'Разгрузочный цилиндр дробилки', 'Cilindro de liberación para trituradora'),
        renyiLocalizedText('破碎机', 'Crusher', 'Дробилка', 'Trituradora'),
        '破碎机',
        renyiLocalizedText('释放缸', 'Release cylinder', 'Разгрузочный цилиндр', 'Cilindro de liberación'),
        RENYI_HYDRAULIC_ENGINEERING_CATEGORY,
        '/renyi/product-hydraulic-engineering-crusher-release-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('破碎机释放缸实拍图', 'Crusher release cylinder product photo', 'Фото разгрузочного цилиндра дробилки', 'Foto de cilindro de liberación para trituradora'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-01/',
    '/yougang-02/',
    'renyi-hydraulic-front-suspension-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('前悬挂缸', 'Front Suspension Cylinders', 'Передние цилиндры подвески', 'Cilindros de suspensión delantera'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('矿用电动轮车型 前悬挂缸', '矿用电动轮车型 Front Suspension Cylinder', '矿用电动轮车型 передний цилиндр подвески', 'Cilindro de suspensión delantera 矿用电动轮车型'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '矿用电动轮车型',
        renyiLocalizedText('前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-730e-front-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('矿用电动轮车型前悬挂实拍图', '矿用电动轮车型 front suspension product photo', 'Фото передней подвески 矿用电动轮车型', 'Foto de suspensión delantera 矿用电动轮车型'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('重载矿用车型 前悬挂缸', '重载矿用车型 Front Suspension Cylinder', '重载矿用车型 передний цилиндр подвески', 'Cilindro de suspensión delantera 重载矿用车型'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '重载矿用车型',
        renyiLocalizedText('前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-830e-front-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('重载矿用车型前悬挂实拍图', '重载矿用车型 front suspension product photo', 'Фото передней подвески 重载矿用车型', 'Foto de suspensión delantera 重载矿用车型'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('TR50 前悬挂缸', 'TR50 Front Suspension Cylinder', 'TR50 передний цилиндр подвески', 'Cilindro de suspensión delantera TR50'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'TR50',
        renyiLocalizedText('前悬挂缸', 'Front suspension cylinder', 'Передний цилиндр подвески', 'Cilindro de suspensión delantera'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-tr50-front-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('TR50前悬挂实拍图', 'TR50 front suspension product photo', 'Фото передней подвески TR50', 'Foto de suspensión delantera TR50'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-02/',
    '/yougang-02/',
    'renyi-hydraulic-hoist-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('举升缸', 'Hoist Cylinders', 'Цилиндры подъема', 'Cilindros de elevación'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('矿用电动轮车型 举升缸', '矿用电动轮车型 Hoist Cylinder', '矿用电动轮车型 цилиндр подъема', 'Cilindro de elevación 矿用电动轮车型'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '矿用电动轮车型',
        renyiLocalizedText('举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-730e-hoist-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('矿用电动轮车型举升缸实拍图', '矿用电动轮车型 hoist cylinder product photo', 'Фото цилиндра подъема 矿用电动轮车型', 'Foto de cilindro de elevación 矿用电动轮车型'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('大吨位矿卡 举升缸', '大吨位矿卡 Hoist Cylinder', '大吨位矿卡 цилиндр подъема', 'Cilindro de elevación 大吨位矿卡'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '大吨位矿卡',
        renyiLocalizedText('举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-mt4400-hoist-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('大吨位矿卡举升缸实拍图', '大吨位矿卡 hoist cylinder product photo', 'Фото цилиндра подъема 大吨位矿卡', 'Foto de cilindro de elevación 大吨位矿卡'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('TR100 举升缸', 'TR100 Hoist Cylinder', 'TR100 цилиндр подъема', 'Cilindro de elevación TR100'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'TR100',
        renyiLocalizedText('举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-tr100-hoist-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('TR100举升缸实拍图', 'TR100 hoist cylinder product photo', 'Фото цилиндра подъема TR100', 'Foto de cilindro de elevación TR100'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('TR50 举升缸', 'TR50 Hoist Cylinder', 'TR50 цилиндр подъема', 'Cilindro de elevación TR50'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'TR50',
        renyiLocalizedText('举升缸', 'Hoist cylinder', 'Цилиндр подъема', 'Cilindro de elevación'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-tr50-hoist-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('TR50举升缸实拍图', 'TR50 hoist cylinder product photo', 'Фото цилиндра подъема TR50', 'Foto de cilindro de elevación TR50'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-03/',
    '/yougang-02/',
    'renyi-hydraulic-rear-suspension-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('后悬挂缸', 'Rear Suspension Cylinders', 'Задние цилиндры подвески', 'Cilindros de suspensión trasera'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('重载矿用车型 后悬挂缸', '重载矿用车型 Rear Suspension Cylinder', '重载矿用车型 задний цилиндр подвески', 'Cilindro de suspensión trasera 重载矿用车型'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '重载矿用车型',
        renyiLocalizedText('后悬挂缸', 'Rear suspension cylinder', 'Задний цилиндр подвески', 'Cilindro de suspensión trasera'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-830e-rear-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('重载矿用车型后悬挂实拍图', '重载矿用车型 rear suspension product photo', 'Фото задней подвески 重载矿用车型', 'Foto de suspensión trasera 重载矿用车型'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('TR100 后悬挂缸', 'TR100 Rear Suspension Cylinder', 'TR100 задний цилиндр подвески', 'Cilindro de suspensión trasera TR100'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'TR100',
        renyiLocalizedText('后悬挂缸', 'Rear suspension cylinder', 'Задний цилиндр подвески', 'Cilindro de suspensión trasera'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-tr100-rear-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('TR100后悬挂实拍图', 'TR100 rear suspension product photo', 'Фото задней подвески TR100', 'Foto de suspensión trasera TR100'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-04/',
    '/yougang-02/',
    'renyi-hydraulic-suspension-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('悬挂缸', 'Suspension Cylinders', 'Цилиндры подвески', 'Cilindros de suspensión'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('大吨位矿卡 悬挂缸', '大吨位矿卡 Suspension Cylinder', '大吨位矿卡 цилиндр подвески', 'Cilindro de suspensión 大吨位矿卡'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        '大吨位矿卡',
        renyiLocalizedText('悬挂缸', 'Suspension cylinder', 'Цилиндр подвески', 'Cilindro de suspensión'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-mt4400-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('大吨位矿卡悬挂实拍图', '大吨位矿卡 suspension product photo', 'Фото подвески 大吨位矿卡', 'Foto de suspensión 大吨位矿卡'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('铰接式矿用车辆 悬挂缸', '铰接式矿用车辆 Suspension Cylinder', '铰接式矿用车辆 цилиндр подвески', 'Cilindro de suspensión 铰接式矿用车辆'),
        renyiLocalizedText('铰卡', 'Articulated truck', 'Сочлененный самосвал', 'Camión articulado'),
        '铰接式矿用车辆',
        renyiLocalizedText('悬挂缸', 'Suspension cylinder', 'Цилиндр подвески', 'Cilindro de suspensión'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-cat740-suspension.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('铰接式矿用车辆悬挂实拍图', '铰接式矿用车辆 suspension product photo', 'Фото подвески 铰接式矿用车辆', 'Foto de suspensión 铰接式矿用车辆'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-05/',
    '/yougang-02/',
    'renyi-hydraulic-steering-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('转向缸', 'Steering Cylinders', 'Рулевые цилиндры', 'Cilindros de dirección'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('TR100 转向缸', 'TR100 Steering Cylinder', 'TR100 рулевой цилиндр', 'Cilindro de dirección TR100'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'TR100',
        renyiLocalizedText('转向缸', 'Steering cylinder', 'Рулевой цилиндр', 'Cilindro de dirección'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-tr100-steering-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('TR100转向缸实拍图', 'TR100 steering cylinder product photo', 'Фото рулевого цилиндра TR100', 'Foto de cilindro de dirección TR100'),
      ),
      renyiHydraulicVariant(
        renyiLocalizedText('MCC400A 转向缸', 'MCC400A Steering Cylinder', 'MCC400A рулевой цилиндр', 'Cilindro de dirección MCC400A'),
        renyiLocalizedText('矿卡', 'Mining truck', 'Карьерный самосвал', 'Camión minero'),
        'MCC400A',
        renyiLocalizedText('转向缸', 'Steering cylinder', 'Рулевой цилиндр', 'Cilindro de dirección'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-mcc400a-steering-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('MCC400A转向缸实拍图', 'MCC400A steering cylinder product photo', 'Фото рулевого цилиндра MCC400A', 'Foto de cilindro de dirección MCC400A'),
      ),
    ],
  ),
  renyiHydraulicProductConfig(
    '/yougang-02-06/',
    '/yougang-02/',
    'renyi-hydraulic-shock-absorber-cylinder-product',
    RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
    renyiLocalizedText('减震油缸', 'Shock Absorber Cylinder', 'Амортизационный цилиндр', 'Cilindro amortiguador'),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('articulated mining truck 减震油缸', 'articulated mining truck Shock Absorber Cylinder', 'articulated mining truck амортизационный цилиндр', 'Cilindro amortiguador articulated mining truck'),
        renyiLocalizedText('铰卡', 'Articulated truck', 'Сочлененный самосвал', 'Camión articulado'),
        'articulated mining truck',
        renyiLocalizedText('减震油缸', 'Shock absorber cylinder', 'Амортизационный цилиндр', 'Cilindro amortiguador'),
        RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY,
        '/renyi/product-hydraulic-special-a40e-shock-cylinder.jpg?v=20260513-imagegen-all',
        renyiLocalizedText('articulated mining truck减震油缸实拍图', 'articulated mining truck shock absorber cylinder product photo', 'Фото амортизационного цилиндра articulated mining truck', 'Foto de cilindro amortiguador articulated mining truck'),
      ),
    ],
  ),
];

const RENYI_MINERAL_PRODUCT_CONFIGS: RenyiHydraulicProductConfig[] = [
  renyiHydraulicProductConfig(
    '/xuanji-01/',
    '/pro_category/qiaomaotaiche/',
    'renyi-mineral-forced-air-flotation-product',
    RENYI_FLOTATION_CATEGORY,
    renyiLocalizedText(
      '充气搅拌式浮选机',
      'Forced-Air Mechanical Flotation Machine',
      'Пневмомеханическая флотационная машина',
      'Máquina de flotación mecánica con aire forzado',
    ),
    [
      renyiHydraulicVariant(
        renyiLocalizedText('充气搅拌式浮选机', 'Forced-Air Flotation Machine', 'Пневмомеханическая флотационная машина', 'Flotación mecánica con aire forzado'),
        renyiLocalizedText('选矿设备', 'Mineral processing equipment', 'Обогатительное оборудование', 'Equipo de beneficio mineral'),
        'CHF-X / XJC / SB-X / KYF / BS-K / LCH-X / CLF',
        renyiLocalizedText('充气搅拌式浮选机', 'Forced-air mechanical flotation machine', 'Пневмомеханическая флотационная машина', 'Máquina de flotación mecánica con aire forzado'),
        RENYI_FLOTATION_CATEGORY,
        '/renyi/product-mineral-forced-air-flotation-machine.jpg?v=20260514-outdoor-base',
        renyiLocalizedText('充气搅拌式浮选机室外现场主图', 'Forced-air mechanical flotation machine outdoor main image', 'Главное изображение пневмомеханической флотационной машины на площадке', 'Imagen principal exterior de máquina de flotación mecánica con aire forzado'),
      ),
    ],
    [
      '/renyi/product-mineral-forced-air-flotation-machine.jpg?v=20260514-outdoor-base',
      '/renyi/product-mineral-forced-air-flotation-indoor-01.png?v=20260514-imagegen-indoor-gallery',
      '/renyi/product-mineral-forced-air-flotation-indoor-02.png?v=20260514-imagegen-indoor-gallery',
      '/renyi/product-mineral-forced-air-flotation-indoor-03.png?v=20260514-imagegen-indoor-gallery',
      '/renyi/product-mineral-forced-air-flotation-indoor-04.png?v=20260514-imagegen-indoor-gallery',
    ],
  ),
];

function getRenyiHydraulicProductTopSpecs(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const labels = RENYI_HYDRAULIC_PRODUCT_TOP_SPEC_LABELS[locale];
  const modelValues = getRenyiHydraulicProductModelValues(config, locale);

  return [
    [labels.models, renyiJoinUnique(modelValues)],
    [labels.equipment, renyiJoinUnique(config.variants.map((variant) => variant.equipmentType[locale]))],
    [labels.products, renyiJoinUnique(config.variants.map((variant) => variant.mainProduct[locale]))],
  ] as Array<[string, string]>;
}

function renyiHydraulicProductCard(config: RenyiHydraulicProductConfig, category = config.category): RenyiHydraulicCard {
  const imageAlt = config.variants[0]?.imageAlt ?? config.title;

  return {
    href: config.detailHref,
    image: config.cardImage,
    title: config.title,
    category,
    imageAlt,
    specs: Object.fromEntries(
      RENYI_LOCALES.map((locale) => [locale, getRenyiHydraulicProductTopSpecs(config, locale)]),
    ) as Record<RenyiLocale, Array<[string, string]>>,
  };
}

function isRenyiHydraulicCylinderConfig(config: RenyiHydraulicProductConfig) {
  return config.detailHref.startsWith('/yougang-') || config.parentHref === '/yougang-01/' || config.parentHref === '/yougang-02/';
}

function getRenyiHydraulicProductModelValues(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  if (isRenyiHydraulicCylinderConfig(config)) {
    return [RENYI_HYDRAULIC_GENERIC_MODEL_TEXT[locale]];
  }

  if (config.bodyClass === 'renyi-mineral-forced-air-flotation-product') {
    return config.variants.map((variant) => variant.matchedHost);
  }

  return config.variants.map((variant) => variant.columnHeader[locale]);
}

const RENYI_HYDRAULIC_ENGINEERING_GROUP_CARDS = RENYI_HYDRAULIC_PRODUCT_CONFIGS
  .filter((config) => config.parentHref === '/yougang-01/')
  .map((config) => renyiHydraulicProductCard(config));
const RENYI_HYDRAULIC_SPECIAL_VEHICLE_GROUP_CARDS = RENYI_HYDRAULIC_PRODUCT_CONFIGS
  .filter((config) => config.parentHref === '/yougang-02/')
  .map((config) => renyiHydraulicProductCard(config));
const RENYI_HYDRAULIC_PRODUCT_GROUP_CARDS = RENYI_HYDRAULIC_PRODUCT_CONFIGS.map((config) =>
  renyiHydraulicProductCard(config, {
    zh: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.zh.title,
    en: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.en.title,
    ru: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.ru.title,
    es: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY.es.title,
  }),
);
const RENYI_MINERAL_PRODUCT_GROUP_CARDS = RENYI_MINERAL_PRODUCT_CONFIGS.map((config) =>
  renyiHydraulicProductCard(config, RENYI_MINERAL_SERIES_CATEGORY),
);
const RENYI_MINERAL_FLOTATION_GROUP_CARDS = RENYI_MINERAL_PRODUCT_CONFIGS.map((config) =>
  renyiHydraulicProductCard(config, RENYI_FLOTATION_CATEGORY),
);

const RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY: Record<
  RenyiLocale,
  { title: string; subtitle?: string; inquiry: string; more: string }
> = {
  zh: { title: '专用设备系列', subtitle: 'SPECIAL EQUIPMENT SERIES', inquiry: '在线留言', more: '了解更多' },
  en: { title: 'Special Equipment Series', inquiry: 'Inquiry', more: 'More' },
  ru: { title: 'Серия специального оборудования', inquiry: 'Запрос', more: 'Подробнее' },
  es: { title: 'Serie de equipos especiales', inquiry: 'Consulta', more: 'Más información' },
};

const RENYI_SPECIAL_EQUIPMENT_CATEGORY = renyiLocalizedText(
  '专用设备系列',
  'Special Equipment Series',
  'Серия специального оборудования',
  'Serie de equipos especiales',
);

function renyiSpecialEquipmentCard(
  href: string,
  image: string,
  title: RenyiLocalizedText,
  imageAlt: RenyiLocalizedText,
  application: RenyiLocalizedText,
  productType: RenyiLocalizedText,
): RenyiHydraulicCard {
  return {
    href,
    image,
    title,
    category: RENYI_SPECIAL_EQUIPMENT_CATEGORY,
    imageAlt,
    specs: {
      zh: [
        ['应用场景', application.zh],
        ['产品类型', productType.zh],
      ],
      en: [
        ['Application', application.en],
        ['Product Type', productType.en],
      ],
      ru: [
        ['Применение', application.ru],
        ['Тип изделия', productType.ru],
      ],
      es: [
        ['Aplicación', application.es],
        ['Tipo de producto', productType.es],
      ],
    },
  };
}

const RENYI_SPECIAL_RIM_MULTI_TITLE = renyiLocalizedText(
  '轮辋拆装机（多条件式轮辋）',
  'Rim Dismounting Machine (Multi-Condition Rim)',
  'Станок демонтажа ободов (многоусловный тип)',
  'Desmontadora de llantas (tipo multicondición)',
);
const RENYI_SPECIAL_RIM_MULTI_CARD_ALT = renyiLocalizedText(
  '多条件式轮辋拆装机用于大型轮胎和多件式轮辋维护',
  'Multi-condition rim dismounting machine for large tires and multi-piece rims',
  'Станок демонтажа многоэлементных ободов для крупных шин',
  'Desmontadora de llantas multicondición para neumáticos grandes y llantas multipieza',
);
const RENYI_SPECIAL_RIM_GANTRY_TITLE = renyiLocalizedText(
  '轮辋拆装机（门架式）',
  'Rim Dismounting Machine (Gantry Type)',
  'Станок демонтажа ободов (портальный тип)',
  'Desmontadora de llantas (tipo pórtico)',
);
const RENYI_SPECIAL_RIM_GANTRY_CARD_ALT = renyiLocalizedText(
  '门架式轮辋拆装机用于45至63英寸矿山大型轮辋维护',
  'Gantry-type rim dismounting machine for 45 to 63 inch mining rim maintenance',
  'Портальный станок демонтажа ободов для обслуживания горных ободов 45-63 дюйма',
  'Desmontadora de llantas tipo pórtico para mantenimiento de llantas mineras de 45 a 63 pulgadas',
);
const RENYI_SPECIAL_MOTOR_DISMOUNTING_TITLE = renyiLocalizedText(
  '马达拆装机',
  'Motor Dismounting Machine',
  'Станок демонтажа моторов',
  'Desmontadora de motores',
);
const RENYI_SPECIAL_MOTOR_DISMOUNTING_CARD_ALT = renyiLocalizedText(
  '马达拆装机用于矿用车辆轮边马达维护作业',
  'Motor dismounting machine for wheel motor maintenance on mining vehicles',
  'Станок демонтажа моторов для обслуживания мотор-колес горных машин',
  'Desmontadora de motores para mantenimiento de motores de rueda en vehículos mineros',
);
const RENYI_SPECIAL_BLASTHOLE_STEMMING_TITLE = renyiLocalizedText(
  '炮孔填塞机',
  'Blasthole Stemming Machine',
  'Установка забойки скважин',
  'Equipo de retacado de barrenos',
);
const RENYI_SPECIAL_BLASTHOLE_STEMMING_CARD_ALT = renyiLocalizedText(
  '炮孔填塞机用于矿山爆破孔填塞作业',
  'Blasthole stemming machine for mine blast-hole stemming operations',
  'Установка забойки скважин для горных взрывных работ',
  'Equipo de retacado para barrenos de voladura en minería',
);
const RENYI_SPECIAL_TIRE_HANDLER_TITLE = renyiLocalizedText(
  '轮胎拆卸手',
  'Tire Handler',
  'Манипулятор для шин',
  'Manipulador de neumáticos',
);
const RENYI_SPECIAL_TIRE_HANDLER_CARD_ALT = renyiLocalizedText(
  '轮胎拆卸手本体用于大型车辆轮胎拆装、旋转与转运',
  'Tire handler attachment for large vehicle tire removal, rotation, and handling',
  'Навесной манипулятор для демонтажа, поворота и перемещения крупных шин',
  'Accesorio manipulador para desmontaje, giro y traslado de neumáticos grandes',
);
const RENYI_SPECIAL_RIM_MULTI_IMAGE_MAIN = '/renyi/product-special-rim-multi-imagegen-main.jpg?v=20260515-outdoor-no-station';
const RENYI_SPECIAL_RIM_MULTI_IMAGE_PRESS_HEAD = '/renyi/product-special-rim-multi-imagegen-press-head.jpg?v=20260515-outdoor-no-station';
const RENYI_SPECIAL_RIM_MULTI_IMAGE_OPERATION = '/renyi/product-special-rim-multi-imagegen-operation.jpg?v=20260515-outdoor-no-station';
const RENYI_SPECIAL_RIM_MULTI_IMAGE_HYDRAULIC_STATION = '/renyi/product-special-rim-multi-imagegen-hydraulic-station.jpg?v=20260515-outdoor-no-station';
const RENYI_SPECIAL_RIM_MULTI_IMAGE_RIM_DETAIL = '/renyi/product-special-rim-multi-imagegen-rim-detail.jpg?v=20260515-outdoor-no-station';
const RENYI_SPECIAL_RIM_MULTI_CARD_IMAGE = RENYI_SPECIAL_RIM_MULTI_IMAGE_MAIN;
const RENYI_SPECIAL_RIM_GANTRY_IMAGE_MAIN = '/renyi/product-special-rim-gantry-imagegen-main.jpg?v=20260515-gantry-imagegen-mixed-v3';
const RENYI_SPECIAL_RIM_GANTRY_IMAGE_PRESS_FRAME = '/renyi/product-special-rim-gantry-imagegen-press-frame.jpg?v=20260515-gantry-imagegen-mixed-v3';
const RENYI_SPECIAL_RIM_GANTRY_IMAGE_OPERATION = '/renyi/product-special-rim-gantry-imagegen-operation.jpg?v=20260515-gantry-imagegen-mixed-v3';
const RENYI_SPECIAL_RIM_GANTRY_IMAGE_CONTROL_STATION = '/renyi/product-special-rim-gantry-imagegen-control-station.jpg?v=20260515-gantry-imagegen-mixed-v3';
const RENYI_SPECIAL_RIM_GANTRY_IMAGE_RIM_FIXTURE = '/renyi/product-special-rim-gantry-imagegen-rim-fixture.jpg?v=20260515-gantry-imagegen-mixed-v3';
const RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MAIN = '/renyi/product-special-motor-dismounting-imagegen-main.jpg?v=20260515-motor-imagegen-v1';
const RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_SIDE = '/renyi/product-special-motor-dismounting-imagegen-side.jpg?v=20260515-motor-imagegen-v1';
const RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_OPERATION = '/renyi/product-special-motor-dismounting-imagegen-operation.jpg?v=20260515-motor-imagegen-v1';
const RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_CONTROL = '/renyi/product-special-motor-dismounting-imagegen-control.jpg?v=20260515-motor-imagegen-v1';
const RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MOTOR_CRADLE = '/renyi/product-special-motor-dismounting-imagegen-motor-cradle.jpg?v=20260515-motor-imagegen-v1';
const RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_MAIN = '/renyi/product-special-blasthole-stemming-imagegen-main.jpg?v=20260515-stemming-imagegen-v4';
const RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_BLADE = '/renyi/product-special-blasthole-stemming-imagegen-blade.jpg?v=20260515-stemming-imagegen-v4';
const RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_HYDRAULIC = '/renyi/product-special-blasthole-stemming-imagegen-hydraulic.jpg?v=20260515-stemming-imagegen-v4';
const RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_OPERATION = '/renyi/product-special-blasthole-stemming-imagegen-operation.jpg?v=20260515-stemming-imagegen-v4';
const RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_SIDE = '/renyi/product-special-blasthole-stemming-imagegen-side.jpg?v=20260515-stemming-imagegen-v4';
const RENYI_SPECIAL_TIRE_HANDLER_IMAGE_MAIN = '/renyi/product-special-tire-handler-imagegen-main.jpg?v=20260516-tire-handler-v5';
const RENYI_SPECIAL_TIRE_HANDLER_IMAGE_OPERATION = '/renyi/product-special-tire-handler-imagegen-operation.jpg?v=20260516-tire-handler-v5';
const RENYI_SPECIAL_TIRE_HANDLER_IMAGE_CLAMP = '/renyi/product-special-tire-handler-imagegen-clamp.jpg?v=20260516-tire-handler-v5';
const RENYI_SPECIAL_TIRE_HANDLER_IMAGE_WORKSHOP = '/renyi/product-special-tire-handler-imagegen-workshop.jpg?v=20260516-tire-handler-v5';
const RENYI_SPECIAL_TIRE_HANDLER_IMAGE_SIDE = '/renyi/product-special-tire-handler-imagegen-side.jpg?v=20260516-tire-handler-v5';

const RENYI_SPECIAL_RIM_MULTI_PRODUCT_CONFIG = renyiHydraulicProductConfig(
  '/zhuanyong-01/',
  RENYI_PRODUCT_SERIES_HREFS.special,
  'renyi-special-rim-multi-product',
  RENYI_SPECIAL_EQUIPMENT_CATEGORY,
  RENYI_SPECIAL_RIM_MULTI_TITLE,
  [
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-01', 'RY-LTCZ-01', 'RY-LTCZ-01', 'RY-LTCZ-01'),
      renyiLocalizedText('多件式轮辋拆装机', 'Multi-piece rim dismounting machine', 'Станок демонтажа многоэлементных ободов', 'Desmontadora de llantas multipieza'),
      '矿用电动轮车型',
      renyiLocalizedText('DLCJ-36"轮辋', 'DLCJ-36" rim', 'Обод DLCJ-36"', 'Llanta DLCJ-36"'),
      renyiLocalizedText('矿用汽车轮辋维护', 'Mining truck rim maintenance', 'Обслуживание ободов карьерных самосвалов', 'Mantenimiento de llantas de camiones mineros'),
      RENYI_SPECIAL_RIM_MULTI_IMAGE_MAIN,
      renyiLocalizedText('多件式轮辋拆装机整机图', 'Full multi-piece rim dismounting machine', 'Общий вид станка демонтажа многоэлементных ободов', 'Vista general de desmontadora de llantas multipieza'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-02', 'RY-LTCZ-02', 'RY-LTCZ-02', 'RY-LTCZ-02'),
      renyiLocalizedText('多件式轮辋拆装机', 'Multi-piece rim dismounting machine', 'Станок демонтажа многоэлементных ободов', 'Desmontadora de llantas multipieza'),
      '重载矿用车型',
      renyiLocalizedText('DLCJ-37"轮辋', 'DLCJ-37" rim', 'Обод DLCJ-37"', 'Llanta DLCJ-37"'),
      renyiLocalizedText('矿用汽车轮辋维护', 'Mining truck rim maintenance', 'Обслуживание ободов карьерных самосвалов', 'Mantenimiento de llantas de camiones mineros'),
      RENYI_SPECIAL_RIM_MULTI_IMAGE_PRESS_HEAD,
      renyiLocalizedText('轮辋拆装机液压压头细节', 'Hydraulic press head detail for rim dismounting', 'Деталь гидравлической прессовой головки', 'Detalle del cabezal hidráulico de prensado'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-03', 'RY-LTCZ-03', 'RY-LTCZ-03', 'RY-LTCZ-03'),
      renyiLocalizedText('多件式轮辋拆装机', 'Multi-piece rim dismounting machine', 'Станок демонтажа многоэлементных ободов', 'Desmontadora de llantas multipieza'),
      'TR100',
      renyiLocalizedText('27.00-49轮辋', '27.00-49 rim', 'Обод 27.00-49', 'Llanta 27.00-49'),
      renyiLocalizedText('矿用汽车轮辋拆装', 'Mining truck rim removal and installation', 'Демонтаж и монтаж ободов карьерных самосвалов', 'Desmontaje e instalación de llantas mineras'),
      RENYI_SPECIAL_RIM_MULTI_IMAGE_OPERATION,
      renyiLocalizedText('多件式轮辋液压分离工况图', 'Hydraulic separation of a multi-piece rim', 'Гидравлическое разделение многоэлементного обода', 'Separación hidráulica de llanta multipieza'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-04/05', 'RY-LTCZ-04/05', 'RY-LTCZ-04/05', 'RY-LTCZ-04/05'),
      renyiLocalizedText('多件式轮辋拆装机', 'Multi-piece rim dismounting machine', 'Станок демонтажа многоэлементных ободов', 'Desmontadora de llantas multipieza'),
      '1400 / Underground LHD',
      renyiLocalizedText('22-25 / 25-11.25/2.0轮辋', '22-25 / 25-11.25/2.0 rims', 'Ободы 22-25 / 25-11.25/2.0', 'Llantas 22-25 / 25-11.25/2.0'),
      renyiLocalizedText('铲运机轮辋维护', 'LHD loader rim maintenance', 'Обслуживание ободов ПДМ', 'Mantenimiento de llantas de cargadores LHD'),
      RENYI_SPECIAL_RIM_MULTI_IMAGE_HYDRAULIC_STATION,
      renyiLocalizedText('轮辋拆装机液压管路与侧向执行机构细节', 'Hydraulic hose routing and side actuator detail for rim dismounting machine', 'Деталь гидравлических рукавов и бокового исполнительного механизма станка демонтажа ободов', 'Detalle de mangueras hidráulicas y actuador lateral de desmontadora de llantas'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-09', 'RY-LTCZ-09', 'RY-LTCZ-09', 'RY-LTCZ-09'),
      renyiLocalizedText('多件式轮辋拆装机', 'Multi-piece rim dismounting machine', 'Станок демонтажа многоэлементных ободов', 'Desmontadora de llantas multipieza'),
      'TR35 / TR50D / TR60 / CAT773',
      renyiLocalizedText('18.00R25 / 21.00R35 / 24.00R35轮辋', '18.00R25 / 21.00R35 / 24.00R35 rims', 'Ободы 18.00R25 / 21.00R35 / 24.00R35', 'Llantas 18.00R25 / 21.00R35 / 24.00R35'),
      renyiLocalizedText('水泥矿山车辆轮辋维护', 'Cement mine vehicle rim maintenance', 'Обслуживание ободов техники цементных карьеров', 'Mantenimiento de llantas para vehículos de canteras de cemento'),
      RENYI_SPECIAL_RIM_MULTI_IMAGE_RIM_DETAIL,
      renyiLocalizedText('多件式轮辋组件分离细节', 'Separated multi-piece rim component detail', 'Деталь разделенных компонентов многоэлементного обода', 'Detalle de componentes separados de llanta multipieza'),
    ),
  ],
  [
    RENYI_SPECIAL_RIM_MULTI_IMAGE_MAIN,
    RENYI_SPECIAL_RIM_MULTI_IMAGE_PRESS_HEAD,
    RENYI_SPECIAL_RIM_MULTI_IMAGE_OPERATION,
    RENYI_SPECIAL_RIM_MULTI_IMAGE_HYDRAULIC_STATION,
    RENYI_SPECIAL_RIM_MULTI_IMAGE_RIM_DETAIL,
  ],
);

const RENYI_SPECIAL_RIM_GANTRY_PRODUCT_CONFIG = renyiHydraulicProductConfig(
  '/zhuanyong-02/',
  RENYI_PRODUCT_SERIES_HREFS.special,
  'renyi-special-rim-gantry-product',
  RENYI_SPECIAL_EQUIPMENT_CATEGORY,
  RENYI_SPECIAL_RIM_GANTRY_TITLE,
  [
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-G01', 'RY-LTCZ-G01', 'RY-LTCZ-G01', 'RY-LTCZ-G01'),
      renyiLocalizedText('门架式轮辋拆装机', 'Gantry-type rim dismounting machine', 'Портальный станок демонтажа ободов', 'Desmontadora de llantas tipo pórtico'),
      'MT5500 / 大吨位矿卡',
      renyiLocalizedText('45"-63"轮辋', '45"-63" rims', 'Ободы 45"-63"', 'Llantas de 45"-63"'),
      renyiLocalizedText('大型矿用汽车轮辋维护', 'Large mining truck rim maintenance', 'Обслуживание ободов крупных карьерных самосвалов', 'Mantenimiento de llantas de grandes camiones mineros'),
      RENYI_SPECIAL_RIM_GANTRY_IMAGE_MAIN,
      renyiLocalizedText('门架式轮辋拆装机整机与轨道平台', 'Full gantry rim dismounting machine with rail-mounted platform', 'Общий вид портального станка с рельсовой платформой', 'Vista general de desmontadora tipo pórtico con plataforma sobre rieles'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-G02', 'RY-LTCZ-G02', 'RY-LTCZ-G02', 'RY-LTCZ-G02'),
      renyiLocalizedText('门架式轮辋拆装机', 'Gantry-type rim dismounting machine', 'Портальный станок демонтажа ободов', 'Desmontadora de llantas tipo pórtico'),
      '930E / SF33900',
      renyiLocalizedText('45/65-45至70/70-57轮胎', '45/65-45 to 70/70-57 tires', 'Шины 45/65-45 до 70/70-57', 'Neumáticos de 45/65-45 a 70/70-57'),
      renyiLocalizedText('矿用汽车轮胎拆装', 'Mining truck tire removal and installation', 'Демонтаж и монтаж шин карьерных самосвалов', 'Desmontaje e instalación de neumáticos mineros'),
      RENYI_SPECIAL_RIM_GANTRY_IMAGE_PRESS_FRAME,
      renyiLocalizedText('门架式轮辋拆装机压装框架与油缸', 'Gantry press frame and hydraulic cylinders', 'Портальная прессовая рама и гидроцилиндры', 'Bastidor de prensado y cilindros hidráulicos tipo pórtico'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-G03', 'RY-LTCZ-G03', 'RY-LTCZ-G03', 'RY-LTCZ-G03'),
      renyiLocalizedText('门架式轮辋拆装机', 'Gantry-type rim dismounting machine', 'Портальный станок демонтажа ободов', 'Desmontadora de llantas tipo pórtico'),
      'L2350 Front Loader',
      renyiLocalizedText('大型轮辋与轮胎总成', 'Large rim and tire assembly', 'Крупный узел обода и шины', 'Conjunto grande de llanta y neumático'),
      renyiLocalizedText('前装机轮辋维修', 'Front loader rim maintenance', 'Обслуживание ободов фронтального погрузчика', 'Mantenimiento de llantas de cargador frontal'),
      RENYI_SPECIAL_RIM_GANTRY_IMAGE_OPERATION,
      renyiLocalizedText('门架式轮辋拆装机矿卡轮胎作业场景', 'Mining tire service under a gantry rim dismounting machine', 'Работа с карьерной шиной на портальном станке', 'Servicio de neumático minero bajo desmontadora tipo pórtico'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-G04', 'RY-LTCZ-G04', 'RY-LTCZ-G04', 'RY-LTCZ-G04'),
      renyiLocalizedText('门架式轮辋拆装机', 'Gantry-type rim dismounting machine', 'Портальный станок демонтажа ободов', 'Desmontadora de llantas tipo pórtico'),
      'Remote / Lever Control',
      renyiLocalizedText('可视化操作平台', 'Visualized operation station', 'Визуализированная станция управления', 'Estación de operación visualizada'),
      renyiLocalizedText('遥控与控制杆操作', 'Remote and lever operation', 'Дистанционное и рычажное управление', 'Operación remota y por palancas'),
      RENYI_SPECIAL_RIM_GANTRY_IMAGE_CONTROL_STATION,
      renyiLocalizedText('门架式轮辋拆装机上部压装框架与油缸细节', 'Upper press frame and hydraulic cylinder detail for gantry rim dismounting machine', 'Деталь верхней прессовой рамы и гидроцилиндров портального станка', 'Detalle del bastidor superior de prensado y cilindros hidráulicos de desmontadora tipo pórtico'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('RY-LTCZ-G05', 'RY-LTCZ-G05', 'RY-LTCZ-G05', 'RY-LTCZ-G05'),
      renyiLocalizedText('门架式轮辋拆装机', 'Gantry-type rim dismounting machine', 'Портальный станок демонтажа ободов', 'Desmontadora de llantas tipo pórtico'),
      'Port Machinery / Large Equipment',
      renyiLocalizedText('≥400T拆卸能力', '>=400T dismounting capacity', 'Усилие демонтажа >=400 т', 'Capacidad de desmontaje >=400T'),
      renyiLocalizedText('大型轮辋压装分离', 'Heavy rim pressing and separation', 'Прессование и разделение тяжелых ободов', 'Prensado y separación de llantas pesadas'),
      RENYI_SPECIAL_RIM_GANTRY_IMAGE_RIM_FIXTURE,
      renyiLocalizedText('门架式轮辋拆装机轨道移动平台与轮辋夹具', 'Rail-mounted moving platform and rim fixture for gantry dismounting', 'Рельсовая передвижная платформа и зажим обода портального станка', 'Plataforma móvil sobre rieles y útil de sujeción de desmontadora tipo pórtico'),
    ),
  ],
  [
    RENYI_SPECIAL_RIM_GANTRY_IMAGE_MAIN,
    RENYI_SPECIAL_RIM_GANTRY_IMAGE_PRESS_FRAME,
    RENYI_SPECIAL_RIM_GANTRY_IMAGE_OPERATION,
    RENYI_SPECIAL_RIM_GANTRY_IMAGE_CONTROL_STATION,
    RENYI_SPECIAL_RIM_GANTRY_IMAGE_RIM_FIXTURE,
  ],
);

const RENYI_SPECIAL_MOTOR_DISMOUNTING_PRODUCT_CONFIG = renyiHydraulicProductConfig(
  '/zhuanyong-03/',
  RENYI_PRODUCT_SERIES_HREFS.special,
  'renyi-special-motor-dismounting-product',
  RENYI_SPECIAL_EQUIPMENT_CATEGORY,
  RENYI_SPECIAL_MOTOR_DISMOUNTING_TITLE,
  [
    renyiHydraulicVariant(
      renyiLocalizedText('GE776', 'GE776', 'GE776', 'GE776'),
      renyiLocalizedText('电动轮轮马达拆装机', 'Electric wheel motor dismounting machine', 'Станок демонтажа мотор-колес', 'Desmontadora de motor de rueda eléctrica'),
      '适配多数矿用车型',
      renyiLocalizedText('GE776轮边马达', 'GE776 wheel motor', 'Мотор-колесо GE776', 'Motor de rueda GE776'),
      renyiLocalizedText('轮边马达拆卸与更换', 'Wheel motor removal and replacement', 'Демонтаж и замена мотор-колеса', 'Desmontaje y sustitución de motor de rueda'),
      RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MAIN,
      renyiLocalizedText('马达拆装机蓝色移动底盘与灰色托架整机', 'Blue mobile chassis and grey cradle of the motor dismounting machine', 'Синий мобильный ходовой блок и серая люлька станка демонтажа моторов', 'Chasis móvil azul y cuna gris de la desmontadora de motores'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('GE788', 'GE788', 'GE788', 'GE788'),
      renyiLocalizedText('电动轮轮马达拆装机', 'Electric wheel motor dismounting machine', 'Станок демонтажа мотор-колес', 'Desmontadora de motor de rueda eléctrica'),
      '适配多数矿用车型',
      renyiLocalizedText('GE788轮边马达', 'GE788 wheel motor', 'Мотор-колесо GE788', 'Motor de rueda GE788'),
      renyiLocalizedText('矿用电动轮轮马达维护', 'Mining electric-drive wheel motor maintenance', 'Обслуживание мотор-колес карьерных электросамосвалов', 'Mantenimiento de motor de rueda en camión minero eléctrico'),
      RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_SIDE,
      renyiLocalizedText('马达拆装机侧向整机与液压托架', 'Side view of the motor dismounting machine and hydraulic cradle', 'Боковой вид станка и гидравлической люльки', 'Vista lateral de la desmontadora y cuna hidráulica'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('GEB25', 'GEB25', 'GEB25', 'GEB25'),
      renyiLocalizedText('电动轮轮马达拆装机', 'Electric wheel motor dismounting machine', 'Станок демонтажа мотор-колес', 'Desmontadora de motor de rueda eléctrica'),
      '重载矿用车型 / R170',
      renyiLocalizedText('GEB25轮边马达', 'GEB25 wheel motor', 'Мотор-колесо GEB25', 'Motor de rueda GEB25'),
      renyiLocalizedText('大型轮边马达原位拆装', 'In-situ service of large wheel motors', 'Демонтаж крупных мотор-колес на месте', 'Servicio in situ de motores de rueda grandes'),
      RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_OPERATION,
      renyiLocalizedText('马达拆装机托举大型轮边马达作业场景', 'Motor dismounting machine supporting a large wheel motor in service', 'Станок поддерживает крупное мотор-колесо при обслуживании', 'Desmontadora soportando un motor de rueda grande en servicio'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('原位拆装', 'In-situ Service', 'Работа на месте', 'Servicio in situ'),
      renyiLocalizedText('电动轮轮马达拆装机', 'Electric wheel motor dismounting machine', 'Станок демонтажа мотор-колес', 'Desmontadora de motor de rueda eléctrica'),
      '大型矿用自卸车',
      renyiLocalizedText('轮边马达与后桥壳', 'Wheel motor and rear axle housing', 'Мотор-колесо и картер заднего моста', 'Motor de rueda y carcasa de eje trasero'),
      renyiLocalizedText('无需拆除车斗的现场维护', 'On-site maintenance without removing the truck body', 'Обслуживание без снятия кузова самосвала', 'Mantenimiento sin desmontar la caja del camión'),
      RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_CONTROL,
      renyiLocalizedText('马达拆装机操纵杆与液压管路细节', 'Control levers and hydraulic hose detail of the motor dismounting machine', 'Деталь рычагов управления и гидролиний станка', 'Detalle de palancas de control y mangueras hidráulicas'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('重载定位', 'Heavy Positioning', 'Тяжелое позиционирование', 'Posicionamiento pesado'),
      renyiLocalizedText('电动轮轮马达拆装机', 'Electric wheel motor dismounting machine', 'Станок демонтажа мотор-колес', 'Desmontadora de motor de rueda eléctrica'),
      '矿山维修车间 / 露天维修场',
      renyiLocalizedText('液压托举与移运', 'Hydraulic lifting and transfer', 'Гидравлический подъем и перемещение', 'Elevación y traslado hidráulico'),
      renyiLocalizedText('轮边马达安全支承与移位', 'Safe support and positioning of wheel motors', 'Безопасная опора и позиционирование мотор-колес', 'Soporte y posicionamiento seguro de motores de rueda'),
      RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MOTOR_CRADLE,
      renyiLocalizedText('马达拆装机灰色托架支承轮边马达', 'Grey cradle supporting a wheel motor on the motor dismounting machine', 'Серая люлька удерживает мотор-колесо на станке', 'Cuna gris soportando un motor de rueda en la desmontadora'),
    ),
  ],
  [
    RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MAIN,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_SIDE,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_OPERATION,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_CONTROL,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_IMAGE_MOTOR_CRADLE,
  ],
);

const RENYI_SPECIAL_BLASTHOLE_STEMMING_PRODUCT_CONFIG = renyiHydraulicProductConfig(
  '/zhuanyong-04/',
  RENYI_PRODUCT_SERIES_HREFS.special,
  'renyi-special-blasthole-stemming-product',
  RENYI_SPECIAL_EQUIPMENT_CATEGORY,
  RENYI_SPECIAL_BLASTHOLE_STEMMING_TITLE,
  [
    renyiHydraulicVariant(
      renyiLocalizedText('LW300FV改装', 'LW300FV Retrofit', 'Переоборудование LW300FV', 'Modificación LW300FV'),
      renyiLocalizedText('装载机改装炮孔填塞机', 'Loader-mounted blasthole stemming machine', 'Машина забойки на базе погрузчика', 'Máquina de retacado sobre cargadora'),
      'LW300FV',
      renyiLocalizedText('液压双臂刮板', 'Hydraulic double-arm scraper blade', 'Гидравлический двухрычажный скребковый отвал', 'Hoja raspadora hidráulica de doble brazo'),
      renyiLocalizedText('露天矿炮孔填塞', 'Open-pit blasthole stemming', 'Забойка скважин на карьере', 'Retacado de barrenos a cielo abierto'),
      RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_MAIN,
      renyiLocalizedText('炮孔填塞机整机与前置双臂刮板', 'Full blasthole stemming machine with front double-arm blade', 'Общий вид машины забойки с передним двухрычажным отвалом', 'Vista general de máquina de retacado con hoja frontal de doble brazo'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('双臂刮板', 'Double-Arm Blade', 'Двухрычажный отвал', 'Hoja de doble brazo'),
      renyiLocalizedText('炮孔填塞机前端执行机构', 'Front stemming attachment', 'Передний рабочий орган забойки', 'Accesorio frontal de retacado'),
      '露天矿爆破台阶',
      renyiLocalizedText('左右开合刮板', 'Left-right opening scraper boards', 'Левая и правая раскрывающиеся створки', 'Tablas raspadoras de apertura izquierda-derecha'),
      renyiLocalizedText('碎石填塞推料', 'Crushed-rock stemming push-in', 'Подача щебня для забойки', 'Empuje de grava para retacado'),
      RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_BLADE,
      renyiLocalizedText('炮孔填塞机双臂刮板与炮孔现场', 'Double-arm blade and blastholes on the bench', 'Двухрычажный отвал и скважины на уступе', 'Hoja de doble brazo y barrenos en banco'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('液压铰接', 'Hydraulic Hinge', 'Гидравлический шарнир', 'Bisagra hidráulica'),
      renyiLocalizedText('炮孔填塞机液压驱动机构', 'Hydraulic drive mechanism', 'Гидропривод рабочего органа', 'Mecanismo hidráulico de accionamiento'),
      '装载机前端执行机构',
      renyiLocalizedText('支座 / 销轴 / 油缸 / 管路', 'Support / pins / cylinders / hoses', 'Опора / пальцы / цилиндры / рукава', 'Soporte / pasadores / cilindros / mangueras'),
      renyiLocalizedText('刮板开合与推料控制', 'Blade opening and material pushing control', 'Управление раскрытием и подачей материала', 'Control de apertura y empuje de material'),
      RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_HYDRAULIC,
      renyiLocalizedText('炮孔填塞机液压油缸与铰接支座细节', 'Hydraulic cylinder and hinged support detail', 'Деталь гидроцилиндра и шарнирной опоры', 'Detalle de cilindro hidráulico y soporte articulado'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('快速填塞', 'Fast Stemming', 'Быстрая забойка', 'Retacado rápido'),
      renyiLocalizedText('机械化炮孔填塞作业', 'Mechanized blasthole stemming operation', 'Механизированная забойка скважин', 'Operación mecanizada de retacado'),
      '露天矿炮孔',
      renyiLocalizedText('碎石填塞料', 'Crushed-rock stemming material', 'Щебеночный забоечный материал', 'Material de retacado de grava'),
      renyiLocalizedText('爆破准备作业', 'Blast preparation', 'Подготовка взрывных работ', 'Preparación de voladura'),
      RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_OPERATION,
      renyiLocalizedText('炮孔填塞机推送碎石填塞料工况', 'Blasthole stemming machine pushing crushed rock in service', 'Машина подает щебень при забойке скважин', 'Máquina de retacado empujando grava en operación'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('现场改装', 'Site Retrofit', 'Переоборудование на площадке', 'Modificación en sitio'),
      renyiLocalizedText('轮式装载机专用填孔附件', 'Special stemming attachment for wheel loader', 'Специальное навесное оборудование для погрузчика', 'Accesorio especial de retacado para cargadora'),
      'LW300FV / 同级装载机',
      renyiLocalizedText('前置填塞刮板总成', 'Front stemming blade assembly', 'Передний узел скребкового отвала', 'Conjunto frontal de hoja de retacado'),
      renyiLocalizedText('矿山爆破施工', 'Mine blasting operations', 'Горные взрывные работы', 'Voladura minera'),
      RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_SIDE,
      renyiLocalizedText('炮孔填塞机侧向整机与前置刮板总成', 'Side view of the loader-mounted stemming blade assembly', 'Боковой вид погрузчика с передним узлом забойки', 'Vista lateral de cargadora con conjunto frontal de retacado'),
    ),
  ],
  [
    RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_MAIN,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_BLADE,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_HYDRAULIC,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_OPERATION,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_IMAGE_SIDE,
  ],
);

const RENYI_SPECIAL_TIRE_HANDLER_PRODUCT_CONFIG = renyiHydraulicProductConfig(
  '/zhuanyong-05/',
  RENYI_PRODUCT_SERIES_HREFS.special,
  'renyi-special-tire-handler-product',
  RENYI_SPECIAL_EQUIPMENT_CATEGORY,
  RENYI_SPECIAL_TIRE_HANDLER_TITLE,
  [
    renyiHydraulicVariant(
      renyiLocalizedText('TCM12K416', 'TCM12K416', 'TCM12K416', 'TCM12K416'),
      renyiLocalizedText('轮胎拆卸手本体', 'Tire handler attachment body', 'Корпус шинного манипулятора', 'Cuerpo del manipulador de neumáticos'),
      '大型矿卡 / 装载机轮胎',
      renyiLocalizedText('双臂圆盘夹持机构', 'Dual-arm circular clamp mechanism', 'Двухрычажный дисковый зажим', 'Mecanismo de doble brazo con discos'),
      renyiLocalizedText('轮胎拆装与转运', 'Tire removal, installation, and handling', 'Демонтаж, монтаж и перемещение шин', 'Desmontaje, montaje y traslado de neumáticos'),
      RENYI_SPECIAL_TIRE_HANDLER_IMAGE_MAIN,
      renyiLocalizedText('轮胎拆卸手本体与双臂圆盘夹持结构', 'Standalone tire handler attachment with dual circular clamp discs', 'Манипулятор для шин с двумя круглыми зажимными дисками', 'Manipulador de neumáticos con dos discos circulares de sujeción'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('抱胎夹持', 'Tire Clamping', 'Зажим шины', 'Sujeción de neumático'),
      renyiLocalizedText('装载机前置轮胎机械手', 'Loader-mounted tire manipulator', 'Передний шинный манипулятор на погрузчике', 'Manipulador frontal de neumáticos sobre cargadora'),
      '矿山维修车间',
      renyiLocalizedText('大型矿山轮胎', 'Large mining tire', 'Крупная карьерная шина', 'Neumático minero grande'),
      renyiLocalizedText('轮胎抓取、旋转与对位', 'Tire gripping, rotation, and positioning', 'Захват, поворот и позиционирование шины', 'Agarre, giro y posicionamiento de neumático'),
      RENYI_SPECIAL_TIRE_HANDLER_IMAGE_OPERATION,
      renyiLocalizedText('轮胎拆卸手夹持大型矿山轮胎作业', 'Tire handler clamping a large mining tire', 'Манипулятор зажимает крупную карьерную шину', 'Manipulador sujetando un neumático minero grande'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('圆盘夹头', 'Circular Clamp Disc', 'Круглый зажимной диск', 'Disco circular de sujeción'),
      renyiLocalizedText('轮胎拆卸手前端夹持头', 'Front clamping head of tire handler', 'Передняя зажимная головка манипулятора', 'Cabezal frontal de sujeción del manipulador'),
      'TCM12K416',
      renyiLocalizedText('黑色齿形夹盘', 'Black toothed clamp disc', 'Черный зубчатый зажимной диск', 'Disco negro dentado de sujeción'),
      renyiLocalizedText('轮胎侧壁夹持保护', 'Sidewall clamping and protection', 'Зажим и защита боковины шины', 'Sujeción y protección del flanco'),
      RENYI_SPECIAL_TIRE_HANDLER_IMAGE_CLAMP,
      renyiLocalizedText('轮胎拆卸手黑色圆形夹盘与液压臂细节', 'Black circular clamp disc and hydraulic arm detail', 'Деталь круглого зажимного диска и гидравлической балки', 'Detalle de disco circular negro y brazo hidráulico'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('车间维护', 'Workshop Service', 'Работа в цехе', 'Servicio en taller'),
      renyiLocalizedText('轮胎拆卸手装车状态', 'Mounted tire handler for workshop service', 'Манипулятор в установленном состоянии', 'Manipulador montado para servicio en taller'),
      '矿山维修车间',
      renyiLocalizedText('前置夹臂总成', 'Front clamp-arm assembly', 'Передний узел зажимных балок', 'Conjunto frontal de brazos de sujeción'),
      renyiLocalizedText('大型轮胎拆装准备', 'Large tire service preparation', 'Подготовка обслуживания крупных шин', 'Preparación de servicio de neumáticos grandes'),
      RENYI_SPECIAL_TIRE_HANDLER_IMAGE_WORKSHOP,
      renyiLocalizedText('轮胎拆卸手车间内前置双臂夹盘状态', 'Front dual-disc clamp state in workshop', 'Передний двухдисковый зажим в цехе', 'Estado de doble disco frontal en taller'),
    ),
    renyiHydraulicVariant(
      renyiLocalizedText('装车连接', 'Loader Mounting', 'Крепление к погрузчику', 'Montaje en cargadora'),
      renyiLocalizedText('轮胎拆卸手后端挂接结构', 'Rear mounting structure of tire handler', 'Задняя структура крепления манипулятора', 'Estructura trasera de montaje del manipulador'),
      '大型轮式装载机',
      renyiLocalizedText('挂接耳板 / 销轴 / 油缸 / 管路', 'Mounting brackets / pins / cylinders / hoses', 'Кронштейны / пальцы / цилиндры / рукава', 'Soportes / pasadores / cilindros / mangueras'),
      renyiLocalizedText('装载机前端属具连接', 'Wheel-loader front attachment connection', 'Соединение с передним навесным оборудованием погрузчика', 'Conexión frontal con cargadora'),
      RENYI_SPECIAL_TIRE_HANDLER_IMAGE_SIDE,
      renyiLocalizedText('轮胎拆卸手侧向连接结构与装载机前端', 'Side connection structure between tire handler and loader front', 'Боковой вид соединения манипулятора с погрузчиком', 'Vista lateral de conexión entre manipulador y cargadora'),
    ),
  ],
  [
    RENYI_SPECIAL_TIRE_HANDLER_IMAGE_MAIN,
    RENYI_SPECIAL_TIRE_HANDLER_IMAGE_OPERATION,
    RENYI_SPECIAL_TIRE_HANDLER_IMAGE_CLAMP,
    RENYI_SPECIAL_TIRE_HANDLER_IMAGE_WORKSHOP,
    RENYI_SPECIAL_TIRE_HANDLER_IMAGE_SIDE,
  ],
);

const RENYI_SPECIAL_EQUIPMENT_PRODUCT_CONFIGS: RenyiHydraulicProductConfig[] = [
  RENYI_SPECIAL_RIM_MULTI_PRODUCT_CONFIG,
  RENYI_SPECIAL_RIM_GANTRY_PRODUCT_CONFIG,
  RENYI_SPECIAL_MOTOR_DISMOUNTING_PRODUCT_CONFIG,
  RENYI_SPECIAL_BLASTHOLE_STEMMING_PRODUCT_CONFIG,
  RENYI_SPECIAL_TIRE_HANDLER_PRODUCT_CONFIG,
];

const RENYI_SPECIAL_EQUIPMENT_CARDS: RenyiHydraulicCard[] = [
  renyiSpecialEquipmentCard(
    '/zhuanyong-01/',
    RENYI_SPECIAL_RIM_MULTI_CARD_IMAGE,
    RENYI_SPECIAL_RIM_MULTI_TITLE,
    RENYI_SPECIAL_RIM_MULTI_CARD_ALT,
    renyiLocalizedText('大型轮胎维护', 'Large tire maintenance', 'Обслуживание крупных шин', 'Mantenimiento de neumáticos grandes'),
    renyiLocalizedText('多条件式轮辋拆装', 'Multi-condition rim dismounting', 'Демонтаж ободов', 'Desmontaje de llantas'),
  ),
  renyiSpecialEquipmentCard(
    '/zhuanyong-02/',
    RENYI_SPECIAL_RIM_GANTRY_PRODUCT_CONFIG.cardImage,
    RENYI_SPECIAL_RIM_GANTRY_TITLE,
    RENYI_SPECIAL_RIM_GANTRY_CARD_ALT,
    renyiLocalizedText('矿卡与港口机械', 'Mining trucks and port machinery', 'Карьерная и портовая техника', 'Camiones mineros y maquinaria portuaria'),
    renyiLocalizedText('门架式轮辋拆装', 'Gantry-type rim dismounting', 'Портальный демонтаж ободов', 'Desmontaje de llantas tipo pórtico'),
  ),
  renyiSpecialEquipmentCard(
    '/zhuanyong-03/',
    RENYI_SPECIAL_MOTOR_DISMOUNTING_PRODUCT_CONFIG.cardImage,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_TITLE,
    RENYI_SPECIAL_MOTOR_DISMOUNTING_CARD_ALT,
    renyiLocalizedText('轮边马达维护', 'Wheel motor maintenance', 'Обслуживание мотор-колес', 'Mantenimiento de motores de rueda'),
    renyiLocalizedText('电动轮马达拆装车', 'Electric wheel motor service cart', 'Тележка демонтажа мотор-колес', 'Carro de servicio para motor de rueda eléctrica'),
  ),
  renyiSpecialEquipmentCard(
    '/zhuanyong-04/',
    RENYI_SPECIAL_BLASTHOLE_STEMMING_PRODUCT_CONFIG.cardImage,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_TITLE,
    RENYI_SPECIAL_BLASTHOLE_STEMMING_CARD_ALT,
    renyiLocalizedText('矿山爆破施工', 'Mine blasting operations', 'Горные взрывные работы', 'Voladura minera'),
    renyiLocalizedText('炮孔填塞装备', 'Blasthole stemming equipment', 'Оборудование забойки скважин', 'Equipo de retacado'),
  ),
  renyiSpecialEquipmentCard(
    '/zhuanyong-05/',
    RENYI_SPECIAL_TIRE_HANDLER_PRODUCT_CONFIG.cardImage,
    RENYI_SPECIAL_TIRE_HANDLER_TITLE,
    RENYI_SPECIAL_TIRE_HANDLER_CARD_ALT,
    renyiLocalizedText('大型车辆维修', 'Large vehicle maintenance', 'Обслуживание крупной техники', 'Mantenimiento de vehículos grandes'),
    renyiLocalizedText('轮胎拆装机械手', 'Tire handling manipulator', 'Манипулятор для шин', 'Manipulador de neumáticos'),
  ),
];

const RENYI_SPECIAL_EQUIPMENT_LEGACY_CHILD_PATHS = [
  '/pro_category/fls-5sashuiche/',
  '/pro_category/baopoqicaiyunshuche/',
  '/pro_category/hunningtujiaobanche/',
  '/pro_category/youliaoyunshuche/',
  '/pro_category/yidongshisuishiji/',
];

const RENYI_SPECIAL_EQUIPMENT_CATEGORY_CONFIGS: RenyiHydraulicCategoryConfig[] = [
  {
    paths: [
      '/zhuanyongxilie/',
      '/en/zhuanyongxilie/',
      '/ru/zhuanyongxilie/',
      '/es/zhuanyongxilie/',
      '/pro_category/dexiafuwuche/',
      '/en/pro_category/dexiafuwuche/',
      '/ru/pro_category/dexiafuwuche/',
      '/es/pro_category/dexiafuwuche/',
    ],
    bodyClass: 'renyi-special-equipment-category',
    copy: RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY,
    cards: RENYI_SPECIAL_EQUIPMENT_CARDS,
  },
  ...RENYI_SPECIAL_EQUIPMENT_CARDS.slice(2).map((card, index) => {
    const legacyPath = RENYI_SPECIAL_EQUIPMENT_LEGACY_CHILD_PATHS[index + 2] ?? '';

    return {
      paths: [
        card.href,
        `/en${card.href}`,
        `/ru${card.href}`,
        `/es${card.href}`,
        legacyPath,
        `/en${legacyPath}`,
        `/ru${legacyPath}`,
        `/es${legacyPath}`,
      ],
      bodyClass: 'renyi-special-equipment-child-category',
      copy: {
        zh: { ...RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY.zh, title: card.title.zh },
        en: { ...RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY.en, title: card.title.en },
        ru: { ...RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY.ru, title: card.title.ru },
        es: { ...RENYI_SPECIAL_EQUIPMENT_CATEGORY_COPY.es, title: card.title.es },
      },
      cards: [card],
    };
  }),
];

const RENYI_HYDRAULIC_CATEGORY_CONFIGS: RenyiHydraulicCategoryConfig[] = [
  {
    paths: [
      '/yougangxuangua/',
      '/en/yougangxuangua/',
      '/ru/yougangxuangua/',
      '/es/yougangxuangua/',
      '/pro_category/yunkuangkache/',
      '/en/pro_category/yunkuangkache/',
      '/ru/pro_category/yunkuangkache/',
      '/es/pro_category/yunkuangkache/',
    ],
    bodyClass: 'renyi-hydraulic-series-category',
    copy: RENYI_HYDRAULIC_SERIES_CATEGORY_COPY,
    cards: RENYI_HYDRAULIC_PRODUCT_GROUP_CARDS,
  },
  {
    paths: [
      '/yougang-01/',
      '/en/yougang-01/',
      '/ru/yougang-01/',
      '/es/yougang-01/',
      '/pro_category/yunliaoche/',
      '/en/pro_category/yunliaoche/',
      '/ru/pro_category/yunliaoche/',
      '/es/pro_category/yunliaoche/',
    ],
    bodyClass: 'renyi-hydraulic-engineering-category',
    copy: RENYI_HYDRAULIC_ENGINEERING_CATEGORY_COPY,
    cards: RENYI_HYDRAULIC_ENGINEERING_GROUP_CARDS,
  },
  {
    paths: [
      '/yougang-02/',
      '/en/yougang-02/',
      '/ru/yougang-02/',
      '/es/yougang-02/',
      '/pro_category/guandaoanzhuangche/',
      '/en/pro_category/guandaoanzhuangche/',
      '/ru/pro_category/guandaoanzhuangche/',
      '/es/pro_category/guandaoanzhuangche/',
    ],
    bodyClass: 'renyi-hydraulic-special-vehicle-category',
    copy: RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY_COPY,
    cards: RENYI_HYDRAULIC_SPECIAL_VEHICLE_GROUP_CARDS,
  },
];

const RENYI_MINERAL_CATEGORY_CONFIGS: RenyiHydraulicCategoryConfig[] = [
  {
    paths: [
      '/fuxuanjixilie/',
      '/en/fuxuanjixilie/',
      '/ru/fuxuanjixilie/',
      '/es/fuxuanjixilie/',
    ],
    bodyClass: 'renyi-mineral-series-category',
    copy: RENYI_MINERAL_CATEGORY_COPY,
    cards: RENYI_MINERAL_PRODUCT_GROUP_CARDS,
  },
  {
    paths: [
      '/pro_category/qiaomaotaiche/',
      '/en/pro_category/qiaomaotaiche/',
      '/ru/pro_category/qiaomaotaiche/',
      '/es/pro_category/qiaomaotaiche/',
    ],
    bodyClass: 'renyi-flotation-category',
    copy: RENYI_FLOTATION_CATEGORY_COPY,
    cards: RENYI_MINERAL_FLOTATION_GROUP_CARDS,
  },
];

function withRenyiLocalePath(pathname: string, locale: RenyiLocale) {
  return locale === 'zh' ? pathname : `/${locale}${pathname}`;
}

export function getRenyiLocale(pathname: string): RenyiLocale {
  const cleanPath = pathname.split('#')[0]?.split('?')[0] ?? '/';
  const normalized = cleanPath.replace(/\/+/g, '/');

  if (normalized === '/en' || normalized.startsWith('/en/')) {
    return 'en';
  }

  if (normalized === '/ru' || normalized.startsWith('/ru/')) {
    return 'ru';
  }

  if (normalized === '/es' || normalized.startsWith('/es/')) {
    return 'es';
  }

  return 'zh';
}

export function getRenyiLogoCopy(pathname: string) {
  const locale = getRenyiLocale(pathname);
  return {
    locale,
    homePath: locale === 'zh' ? '/' : `/${locale}/`,
    companyName: RENYI_COMPANY_NAMES[locale],
  };
}

export function getRenyiAboutBannerTitle(pathname: string) {
  return RENYI_ABOUT_BANNER_TITLES[getRenyiLocale(pathname)];
}

export function getRenyiAboutBannerSlogan(pathname: string) {
  return RENYI_ABOUT_BANNER_SLOGANS[getRenyiLocale(pathname)];
}

export function getRenyiAboutBannerSubtitle(pathname: string) {
  return '';
}

export function getRenyiAboutBannerTextHtml(pathname: string) {
  const locale = getRenyiLocale(pathname);
  const subtitle = getRenyiAboutBannerSubtitle(pathname);

  return [
    locale === 'zh' ? `<div class="tit">${getRenyiAboutBannerTitle(pathname)}</div>` : '',
    `<div class="txt1">${getRenyiAboutBannerSlogan(pathname)}</div>`,
    subtitle ? `<div class="txt2">${subtitle}</div>` : '',
  ].join(' ');
}

export function getRenyiNewsBannerTextHtml(pathname: string) {
  const locale = getRenyiLocale(pathname);
  const title = locale === 'zh' ? `<div class="tit">${RENYI_NEWS_BANNER_TITLES.zh}</div>` : '';

  return `${title} <div class="txt1">${RENYI_NEWS_BANNER_SLOGANS[locale]}</div>`;
}

const RENYI_TEXT_REPLACEMENTS: Array<[string, string]> = [
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

function patchRenyiLogoHtml(html: string, pathname: string) {
  const logo = getRenyiLogoCopy(pathname);

  return html.replace(
    /<a href="[^"]*" title="[^"]*" class="logo navbar-brand">[\s\S]*?<\/a>/,
    `<a href="${logo.homePath}" title="${logo.companyName}" class="logo navbar-brand renyi-brand renyi-brand--${logo.locale}" aria-label="${logo.companyName} home"><span class="renyi-brand__mark" aria-hidden="true"></span><span class="renyi-brand__title">${logo.companyName}</span></a>`,
  );
}

function patchRenyiCultureBannerHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const imagePath = RENYI_CULTURE_BANNER_IMAGES[locale];

  return html.replace(
    /<div class="swiper-slide"\s+style="background-image:\s*url\(https:\/\/(?:www|en|ru|es)\.ytxingye\.com\s*\/wp-content\/uploads\/2022\/09\/b1\.jpg\)">\s*<div class="banner-container">/,
    `<div class="swiper-slide renyi-culture-banner-slide" style="background-image: none"><img class="img-w renyi-culture-banner-img" src="${imagePath}" alt=""><div class="banner-container">`,
  );
}

function patchRenyiVideoFallbackHtml(html: string, pathname: string) {
  return html.replaceAll('您的浏览器不支持 video 标签。', RENYI_VIDEO_FALLBACK_TEXT[getRenyiLocale(pathname)]);
}

function patchRenyiAboutMenuBackgroundHtml(html: string) {
  return html.replaceAll(
    /background-image:\s*url\(https:\/\/(?:www|en|ru|es)\.ytxingye\.com\/wp-content\/uploads\/2022\/09\/menubg\.jpg\);/g,
    `background-image: url(${RENYI_ABOUT_MENU_BACKGROUND_IMAGE});`,
  );
}

function isRenyiNewsPath(pathname: string) {
  const normalized = normalizeSitePath(pathname);
  return (
    normalized.includes('/category/renyixinwen/') ||
    normalized.includes('/category/xinwenzhongxin/renyixinwen/') ||
    normalized.includes('/category/xingyexinwen/') ||
    normalized.includes('/category/xinwenzhongxin/')
  );
}

function isRenyiAboutPath(pathname: string) {
  const normalized = normalizeSitePath(pathname);
  return ['/guanyuxingye/', '/en/guanyuxingye/', '/ru/guanyuxingye/', '/es/guanyuxingye/'].includes(normalized);
}

function isRenyiServicePath(pathname: string) {
  return RENYI_SERVICE_PAGE_PATHS.has(normalizeSitePath(pathname));
}

function isRenyiRaiseBoringCategoryPath(pathname: string) {
  const normalized = normalizeSitePath(pathname);
  return RENYI_RAISE_BORING_CATEGORY_PATHS.includes(normalized);
}

function getRenyiRaiseBoringBannerTextHtml(pathname: string) {
  const locale = getRenyiLocale(pathname);
  const copy = RENYI_RAISE_BORING_BANNER_TEXT[locale];
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = copy.subtitle ? `<div class="txt2">${copy.subtitle}</div>` : '';

  return `${title} <div class="txt1">${copy.title}</div> ${subtitle}`;
}

function getRenyiRaiseBoringTrialProductConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_RAISE_BORING_PRODUCT_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function renderRenyiProductImageSlidesHtml(images: string[], alts: string[], fallbackAlt: string, useLinks: boolean) {
  return images
    .map((image, index) => {
      const imageSrc = escapeHtmlAttribute(image);
      const imageAlt = escapeHtmlAttribute(alts[index] ?? fallbackAlt);
      const imageTag = `<img class="${useLinks ? '' : 'img-w'}" src="${imageSrc}" alt="${imageAlt}" title="${imageAlt}" />`;

      return `<div class="swiper-slide"> ${useLinks ? `<a href="${imageSrc}" target="_blank">${imageTag}</a>` : imageTag} </div>`;
    })
    .join(' ');
}

function renderRenyiRaiseBoringGalleryHtml(config: RenyiRaiseBoringProductConfig, locale: RenyiLocale) {
  const copy = config.copy[locale];

  return `<div class="product-imgs clearfix wow fadeInUp"> <div class="imgbox-large"> <div class="swiper-container"> <div class="swiper-wrapper"> ${renderRenyiProductImageSlidesHtml(
    config.images,
    copy.imageAlts,
    copy.title,
    true,
  )} </div> </div> </div> <div class="imgbox-Small"> <div class="swiper-container"> <div class="swiper-wrapper"> ${renderRenyiProductImageSlidesHtml(
    config.images,
    copy.imageAlts,
    copy.title,
    false,
  )} </div> </div> <a class="arrow-left" href="#"><i class="fa fa-angle-left"></i></a> <a class="arrow-right" href="#"><i class="fa fa-angle-right"></i></a> </div> </div>`;
}

function renderRenyiRaiseBoringTopBoxHtml(config: RenyiRaiseBoringProductConfig, locale: RenyiLocale) {
  const copy = config.copy[locale];
  const href = withRenyiLocalePath(config.detailHref, locale);
  const specsHtml = copy.topSpecs
    .map(([label, value]) => `<div class="txt">${escapeHtmlText(label)}:${escapeHtmlText(value)}</div>`)
    .join('');

  return `<div class="pro-topbox"> <div class="txt"><h1 class="pro-tit"><a href="${escapeHtmlAttribute(href)}">${escapeHtmlText(copy.title)}</a></h1></div> ${specsHtml} </div>`;
}

function localizeRenyiRailRaiseBoringSpecValue(value: string, locale: RenyiLocale) {
  const replacements: Record<Exclude<RenyiLocale, 'zh'>, Array<[string, string]>> = {
    en: [
      ['扩孔：', 'Reaming: '],
      ['钻孔：', 'Drilling: '],
      ['副泵系统：', 'Auxiliary pump: '],
      ['主泵系统：', 'Main pump: '],
      ['(细牙)', ' (fine thread)'],
      ['（粗牙，加厚）', ' (coarse thread, reinforced)'],
      ['或', ' or '],
      ['可调', ' adjustable'],
      ['可选', ' optional'],
    ],
    ru: [
      ['扩孔：', 'Расширение: '],
      ['钻孔：', 'Бурение: '],
      ['副泵系统：', 'Вспомогательный насос: '],
      ['主泵系统：', 'Главный насос: '],
      ['(细牙)', ' (мелкая резьба)'],
      ['（粗牙，加厚）', ' (крупная резьба, усиленная)'],
      ['或', ' или '],
      ['可调', ' регулируемая'],
      ['可选', ' по выбору'],
    ],
    es: [
      ['扩孔：', 'Escariado: '],
      ['钻孔：', 'Perforación: '],
      ['副泵系统：', 'Bomba auxiliar: '],
      ['主泵系统：', 'Bomba principal: '],
      ['(细牙)', ' (rosca fina)'],
      ['（粗牙，加厚）', ' (rosca gruesa reforzada)'],
      ['或', ' o '],
      ['可调', ' ajustable'],
      ['可选', ' opcional'],
    ],
  };

  if (locale === 'zh') {
    return value;
  }

  return replacements[locale].reduce((contents, [source, replacement]) => contents.replaceAll(source, replacement), value);
}

function renderRenyiHtmlWithLineBreaks(value: string, locale: RenyiLocale) {
  return escapeHtmlText(localizeRenyiRailRaiseBoringSpecValue(value, locale)).replaceAll('&lt;br&gt;', '<br>');
}

function renderRenyiRaiseBoringSpecTableHtml(config: RenyiRaiseBoringProductConfig, locale: RenyiLocale) {
  const copy = config.copy[locale];
  const headerLabel = locale === 'zh' ? '参数' : locale === 'en' ? 'Parameter' : locale === 'ru' ? 'Параметр' : 'Parámetro';
  const columnHeaders = config.tableColumnHeaders?.[locale] ?? ['AT1500', 'AT2000', 'AT3000'];
  const tableSections = Array.isArray(config.tableSections) ? config.tableSections : config.tableSections[locale];
  const columnHeadersHtml = columnHeaders
    .map((header) => `<td><strong>${escapeHtmlText(header)}</strong></td>`)
    .join('');
  const rowsHtml = tableSections.map((section) => {
    const sectionTitle = copy.tableSections[section.key] ?? section.key;
    const sectionHeader = `<tr><td style="width: 100%;" colspan="${columnHeaders.length + 1}" width="561"><strong>${escapeHtmlText(sectionTitle)}</strong></td></tr>`;
    const sectionRows = section.rows
      .map((row) => {
        const label = copy.tableRows[row.key] ?? row.key;
        const values = row.values.map((value) => `<td>${renderRenyiHtmlWithLineBreaks(value, locale)}</td>`).join('');

        return `<tr><td>${escapeHtmlText(label)}</td>${values}</tr>`;
      })
      .join('');

    return `${sectionHeader}${sectionRows}`;
  }).join('');

  return `<table style="width: 100%;"> <tbody> <tr><td><strong>${escapeHtmlText(headerLabel)}</strong></td>${columnHeadersHtml}</tr> ${rowsHtml} </tbody> </table>`;
}

function renderRenyiRaiseBoringProductBodyHtml(config: RenyiRaiseBoringProductConfig, locale: RenyiLocale) {
  const copy = config.copy[locale];
  const introHtml = copy.introParagraphs.map((paragraph) => `<p>${escapeHtmlText(paragraph)}</p>`).join('');
  const advantagesHtml = `<p>${copy.advantages.map(escapeHtmlText).join('<br>')}</p>`;

  return `<div class="pro-v-body"> <div class="pro-v-body-t"> <div class="container"> <a href="#b1" class="item cur">${escapeHtmlText(copy.tabs[0])}</a> <a href="#b2" class="item">${escapeHtmlText(copy.tabs[1])}</a> <a href="#b3" class="item">${escapeHtmlText(copy.tabs[2])}</a> </div> </div> <div class="pro-v-body-b"> <div class="container"> <div class="maodian"><a name="b1"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(copy.introTitle)}</div> ${introHtml} </div> <div class="maodian"><a name="b2"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(copy.advantagesTitle)}</div> ${advantagesHtml} </div> <div class="maodian"><a name="b3"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(copy.specsTitle)}</div> ${renderRenyiRaiseBoringSpecTableHtml(config, locale)} </div> </div> </div> </div>`;
}

function replaceRenyiFirstTagHtml(html: string, marker: string, tagName: string, replacement: string) {
  const start = html.indexOf(marker);
  const range = start === -1 ? null : findRenyiMatchingTagRange(html, start, tagName);

  if (!range) {
    return html;
  }

  return `${html.slice(0, start)}${replacement}${html.slice(range.end)}`;
}

function renderRenyiWhatsappInquiryAnchorHtml(label: string, className?: string) {
  const classAttr = className ? ` class="${escapeHtmlAttribute(className)}"` : '';

  return `<a${classAttr} href="${escapeHtmlAttribute(RENYI_WHATSAPP_URL)}" target="_blank" rel="noopener">${escapeHtmlText(
    label,
  )}</a>`;
}

function patchRenyiProductInquiryButtonHtml(html: string, label: string) {
  return html.replace(
    /<a class="go-inquiry" href="#a2">[\s\S]*?<\/a>/,
    renderRenyiWhatsappInquiryAnchorHtml(label, 'go-inquiry'),
  );
}

function patchRenyiProductInquiryLinksHtml(html: string) {
  const getLabel = (value: unknown) => String(value).replace(/<[^>]*>/g, '').trim() || '在线留言';

  return html
    .replace(/<a class="go-inquiry" href="#a2">([\s\S]*?)<\/a>/g, (_match, label: string) =>
      renderRenyiWhatsappInquiryAnchorHtml(getLabel(label), 'go-inquiry'),
    )
    .replace(/<div class="btn-box"><a href="[^"]*#a2">([\s\S]*?)<\/a>/g, (_match, label: string) =>
      `<div class="btn-box">${renderRenyiWhatsappInquiryAnchorHtml(getLabel(label))}`,
    );
}

function patchRenyiRaiseBoringTrialProductHtml(html: string, pathname: string) {
  const config = getRenyiRaiseBoringTrialProductConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy = config.copy[locale];
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_RAISE_BORING_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiRaiseBoringBannerTextHtml(pathname)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="product-imgs clearfix wow fadeInUp">',
    'div',
    renderRenyiRaiseBoringGalleryHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-topbox">',
    'div',
    renderRenyiRaiseBoringTopBoxHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-v-body">',
    'div',
    renderRenyiRaiseBoringProductBodyHtml(config, locale),
  );
  patchedHtml = patchRenyiProductInquiryButtonHtml(patchedHtml, copy.inquiry);

  return patchedHtml;
}

function patchRenyiRaiseBoringSampleInnerLinkHtml(html: string, pathname: string) {
  const normalized = normalizeSitePath(pathname);

  if (
    !RENYI_RAISE_BORING_CATEGORY_PATHS.includes(normalized) ||
    html.includes('renyi-sample-inner-link')
  ) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy: Record<
    RenyiLocale,
    {
      category: string;
      inquiry: string;
      more: string;
      specs: [string, string, string, string, string];
    }
  > = {
    zh: {
      category: '内燃铲运机',
      inquiry: '我要询价',
      more: '了解更多',
      specs: ['最大铲取力:', '外形尺寸(mm):', '标准斗容:', '额定载重量:', '最大牵引力:'],
    },
    en: {
      category: 'Internal combustion loader',
      inquiry: 'Inquiry',
      more: 'Learn more',
      specs: [
        'Maximum digging force:',
        'Dimensions (mm):',
        'Standard bucket capacity:',
        'Rated load capacity:',
        'Maximum traction force:',
      ],
    },
    ru: {
      category: 'погрузчик внутреннего сгорания',
      inquiry: 'Запрос цены',
      more: 'Узнать больше',
      specs: [
        'Максимальная тяга лопаты:',
        'Внешний размер (mm):',
        'стандартный ковш:',
        'Номинальная грузоподъемность:',
        'Максимальная тяга:',
      ],
    },
    es: {
      category: 'Scooptram diésel subterráneo',
      inquiry: 'Investigación',
      more: 'Aprende más',
      specs: [
        'Fuerza máxima de pala:',
        'Tamaño exterior (mm):',
        'Capacidad de combate estándar:',
        'Capacidad nominal:',
        'Tracción Máxima:',
      ],
    },
  };
  const railRaiseBoringCopy = RENYI_RAIL_RAISE_BORING_PRODUCT_COPY[locale];
  const tracklessRaiseBoringCopy = RENYI_TRACKLESS_RAISE_BORING_PRODUCT_COPY[locale];
  const drillRodsStabilizersCopy = RENYI_DRILL_RODS_STABILIZERS_PRODUCT_COPY[locale];
  const reamingCutterheadCopy = RENYI_REAMING_CUTTERHEAD_PRODUCT_COPY[locale];
  const rollerCutterAssemblyCopy = RENYI_ROLLER_CUTTER_ASSEMBLY_PRODUCT_COPY[locale];
  const triconeDrillBitCopy = RENYI_TRICONE_DRILL_BIT_PRODUCT_COPY[locale];
  const sampleCards = [
    {
      name: railRaiseBoringCopy.title,
      href: '/zuanji-01/',
      image: RENYI_RAIL_RAISE_BORING_CARD_IMAGE,
      imageAlt: railRaiseBoringCopy.imageAlts[0],
      category: railRaiseBoringCopy.category,
      specs: railRaiseBoringCopy.topSpecs.map(([label]) => label),
      values: railRaiseBoringCopy.topSpecs.map(([, value]) => value),
    },
    {
      name: tracklessRaiseBoringCopy.title,
      href: '/zuanji-02/',
      image: RENYI_TRACKLESS_RAISE_BORING_CARD_IMAGE,
      imageAlt: tracklessRaiseBoringCopy.imageAlts[0],
      category: tracklessRaiseBoringCopy.category,
      specs: tracklessRaiseBoringCopy.topSpecs.map(([label]) => label),
      values: tracklessRaiseBoringCopy.topSpecs.map(([, value]) => value),
    },
    {
      name: drillRodsStabilizersCopy.title,
      href: '/zuanji-03/',
      image: RENYI_DRILL_RODS_STABILIZERS_CARD_IMAGE,
      imageAlt: drillRodsStabilizersCopy.imageAlts[0],
      category: drillRodsStabilizersCopy.category,
      specs: drillRodsStabilizersCopy.topSpecs.map(([label]) => label),
      values: drillRodsStabilizersCopy.topSpecs.map(([, value]) => value),
    },
    {
      name: reamingCutterheadCopy.title,
      href: '/zuanji-04/',
      image: RENYI_REAMING_CUTTERHEAD_CARD_IMAGE,
      imageAlt: reamingCutterheadCopy.imageAlts[0],
      category: reamingCutterheadCopy.category,
      specs: reamingCutterheadCopy.topSpecs.map(([label]) => label),
      values: reamingCutterheadCopy.topSpecs.map(([, value]) => value),
    },
    {
      name: rollerCutterAssemblyCopy.title,
      href: '/zuanji-05/',
      image: RENYI_ROLLER_CUTTER_ASSEMBLY_CARD_IMAGE,
      imageAlt: rollerCutterAssemblyCopy.imageAlts[0],
      category: rollerCutterAssemblyCopy.category,
      specs: rollerCutterAssemblyCopy.topSpecs.map(([label]) => label),
      values: rollerCutterAssemblyCopy.topSpecs.map(([, value]) => value),
    },
    {
      name: triconeDrillBitCopy.title,
      href: '/zuanji-06/',
      image: RENYI_TRICONE_DRILL_BIT_CARD_IMAGE,
      imageAlt: triconeDrillBitCopy.imageAlts[0],
      category: triconeDrillBitCopy.category,
      specs: triconeDrillBitCopy.topSpecs.map(([label]) => label),
      values: triconeDrillBitCopy.topSpecs.map(([, value]) => value),
    },
  ];
  const cardHtml = sampleCards
    .map((card) => {
      const href = withRenyiLocalePath(card.href, locale);
      const category = card.category ?? copy[locale].category;
      const imageAlt = escapeHtmlAttribute(card.imageAlt ?? card.name);
      const specsHtml = card.values
        .map((value, index) => {
          const label = card.specs?.[index] ?? (copy[locale].specs[index] ?? '').replace(/:$/, '');

          return `<div class="sub-item"><span class="sub-t">${label}:</span>${value}</div>`;
        })
        .join('');

      return `<div class="col-xs-24 col-sm-12 col-md-8"> <div class="item wow fadeInUp img-hover" title="${card.name}"> <div class="img-box oh"> <a href="${href}"> <div class="img-h-9"> <img src="${card.image}" class="img-w" title="${imageAlt}" alt="${imageAlt}"> </div> </a> </div> <div class="txt-box"> <div class="category">${category}</div> <h3 class="tit"><a href="${href}">${card.name}</a></h3> <div class="txt"> ${specsHtml} </div> <div class="btn-box">${renderRenyiWhatsappInquiryAnchorHtml(copy[locale].inquiry)}<a href="${href}">${copy[locale].more}</a></div> </div> </div> </div>`;
    })
    .join(' ');
  const sampleCardHtml = `<div class="page-box list-pro-box renyi-sample-inner-link"> <div class="container"> <div class="row row-40 list-pro clearfix wow fadeInUp"> ${cardHtml} </div> </div> </div>`;
  const productListStart = html.indexOf('<div class="product-ind5">');
  const productListRange = productListStart === -1 ? null : findRenyiMatchingTagRange(html, productListStart, 'div');

  if (!productListRange) {
    return html;
  }

  return `${html.slice(0, productListStart)}${sampleCardHtml}${html.slice(productListRange.end)}`;
}

function patchRenyiPageBannerHtml(html: string, pathname: string) {
  if (!isRenyiAboutPath(pathname)) {
    return html;
  }

  const patchedBanner = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-about-page-banner renyi-about-page-banner--${getRenyiLocale(pathname)}" style="background-image: url(${RENYI_NEWS_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  return patchedBanner.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiAboutBannerTextHtml(pathname)} </div> </div> </div> <div class="container">`,
  );
}

function patchRenyiRaiseBoringCategoryBannerHtml(html: string, pathname: string) {
  if (!isRenyiRaiseBoringCategoryPath(pathname)) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const patchedBanner = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_RAISE_BORING_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  return patchedBanner.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiRaiseBoringBannerTextHtml(pathname)} </div> </div> </div> <div class="container">`,
  );
}

function getRenyiServiceBannerTextHtml(pathname: string) {
  const locale = getRenyiLocale(pathname);
  const copy = RENYI_SERVICE_BANNER_COPY[locale];

  return `<div class="tit">${escapeHtmlText(copy.title)}</div> <div class="txt1">${escapeHtmlText(copy.headline)}</div> <div class="txt2">${escapeHtmlText(
    copy.subtitle,
  )}</div>`;
}

function renderRenyiQualityControlSectionHtml(locale: RenyiLocale) {
  const copy = RENYI_QUALITY_CONTROL_SECTION_COPY[locale];
  const cardsHtml = copy.cards
    .map((card) => {
      const paragraphsHtml = card.paragraphs.map((paragraph) => `<p class="mb30">${escapeHtmlText(paragraph)}</p>`).join('');

      return `<div class="server01-list-item renyi-quality-card"> <div class="imgbox"> <img class="img-w imgshow" src="${escapeHtmlAttribute(
        card.image,
      )}" alt="${escapeHtmlAttribute(card.alt)}" loading="lazy"> </div> <div class="txtbox"> <h4>${escapeHtmlText(card.title)}</h4> ${paragraphsHtml} </div> </div>`;
    })
    .join(' ');

  return `<section class="server01 page-col-space wow fadeInUp renyi-quality-section"> <div class="container"> <div class="page-tit-box"> <h3 class="tit mb20">${escapeHtmlText(
    copy.sectionTitle,
  )}</h3> </div> <div class="page-txtbig mb50"> <div class="txt01">${escapeHtmlText(copy.headline)}</div> <div class="txt02">${escapeHtmlText(
    copy.summary,
  )}</div> </div> <div class="server01-list"> ${cardsHtml} </div> </div> </section>`;
}

function renderRenyiAfterSalesSectionHtml(locale: RenyiLocale) {
  const copy = RENYI_AFTER_SALES_SECTION_COPY[locale];
  const cardsHtml = copy.cards
    .map((card, index) => {
      const isActive = false;
      const paragraphsHtml = card.paragraphs
        .map((paragraph) => `<span class="renyi-after-sales-paragraph">${escapeHtmlText(paragraph)}</span>`)
        .join('');

      return `<button type="button" class="renyi-after-sales-card${isActive ? ' is-active' : ''}" aria-expanded="${String(
        isActive,
      )}" style="background-image: url(${escapeHtmlAttribute(card.image)});"> <span class="renyi-after-sales-overlay"></span> <span class="renyi-after-sales-content"> <span class="renyi-after-sales-index">${String(
        index + 1,
      ).padStart(2, '0')}</span> <strong>${escapeHtmlText(card.title)}</strong> <span class="renyi-after-sales-eyebrow">${escapeHtmlText(
        card.eyebrow,
      )}</span> <span class="renyi-after-sales-detail">${paragraphsHtml}</span> </span> <span class="sr-only">${escapeHtmlText(card.alt)}</span> </button>`;
    })
    .join(' ');

  return `<section class="server02 wow fadeInUp renyi-after-sales-section"> <div class="container"> <div class="page-tit-box"> <h3 class="tit mb20">${escapeHtmlText(
    copy.sectionTitle,
  )}</h3> </div> </div> <div class="renyi-after-sales-grid">${cardsHtml}</div> </section>`;
}

function patchRenyiServiceQualityHtml(html: string, pathname: string) {
  if (!isRenyiServicePath(pathname)) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-service-page-banner renyi-quality-control-banner renyi-service-page-banner--${locale}" style="background-image: url(${RENYI_QUALITY_CONTROL_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiServiceBannerTextHtml(pathname)} </div> </div> </div> <div class="container">`,
  );

  patchedHtml = replaceRenyiFirstTagHtml(patchedHtml, '<section class="server01', 'section', renderRenyiQualityControlSectionHtml(locale));

  return replaceRenyiFirstTagHtml(patchedHtml, '<section class="server02', 'section', renderRenyiAfterSalesSectionHtml(locale));
}

function getRenyiHydraulicCategoryConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_HYDRAULIC_CATEGORY_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiHydraulicProductConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_HYDRAULIC_PRODUCT_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiMineralCategoryConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_MINERAL_CATEGORY_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiSpecialEquipmentCategoryConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_SPECIAL_EQUIPMENT_CATEGORY_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiSpecialEquipmentProductConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_SPECIAL_EQUIPMENT_PRODUCT_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiMineralProductConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_MINERAL_PRODUCT_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function getRenyiHydraulicBannerTextHtml(config: RenyiHydraulicCategoryConfig, locale: RenyiLocale) {
  const copy = config.copy[locale];
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = copy.subtitle ? `<div class="txt2">${escapeHtmlText(copy.subtitle)}</div>` : '';

  return `${title} <div class="txt1">${escapeHtmlText(copy.title)}</div> ${subtitle}`;
}

function getRenyiHydraulicProductBannerTextHtml(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = `<div class="txt2">${escapeHtmlText(config.category[locale])}</div>`;

  return `${title} <div class="txt1">${escapeHtmlText(config.title[locale])}</div> ${subtitle}`;
}

function renderRenyiHydraulicCardHtml(card: RenyiHydraulicCard, config: RenyiHydraulicCategoryConfig, locale: RenyiLocale) {
  const title = card.title[locale];
  const category = card.category[locale];
  const image = escapeHtmlAttribute(card.image);
  const imageAlt = escapeHtmlAttribute(card.imageAlt[locale] ?? title);
  const normalizedCardHref = normalizeSitePath(card.href);
  const isShowcaseCard = config.paths.includes(normalizedCardHref);
  const href = isShowcaseCard ? image : escapeHtmlAttribute(withRenyiLocalePath(normalizedCardHref, locale));
  const hrefTarget = isShowcaseCard ? ' target="_blank"' : '';
  const moreHref = href;
  const moreTarget = hrefTarget;
  const specsHtml = card.specs[locale]
    .map(([label, value]) => `<div class="sub-item"><span class="sub-t">${escapeHtmlText(label)}:</span>${escapeHtmlText(value)}</div>`)
    .join('');

  return `<div class="col-xs-24 col-sm-12 col-md-8"> <div class="item wow fadeInUp img-hover" title="${escapeHtmlAttribute(
    title,
  )}" data-card-href="${href}" data-card-target="${hrefTarget ? '_blank' : ''}"> <div class="img-box oh"> <a href="${href}"${hrefTarget}> <div class="img-h-9"> <img src="${image}" class="img-w" title="${imageAlt}" alt="${imageAlt}"> </div> </a> </div> <div class="txt-box"> <div class="category">${escapeHtmlText(
    category,
  )}</div> <h3 class="tit"><a href="${href}"${hrefTarget}>${escapeHtmlText(title)}</a></h3> <div class="txt"> ${specsHtml} </div> <div class="btn-box">${renderRenyiWhatsappInquiryAnchorHtml(
    config.copy[locale].inquiry,
  )}<a href="${moreHref}"${moreTarget}>${escapeHtmlText(config.copy[locale].more)}</a></div> </div> </div> </div>`;
}

function renderRenyiHydraulicCategoryGridHtml(config: RenyiHydraulicCategoryConfig, locale: RenyiLocale) {
  return `<div class="row row-40 list-pro clearfix wow fadeInUp"> ${config.cards
    .map((card) => renderRenyiHydraulicCardHtml(card, config, locale))
    .join(' ')} </div>`;
}

function patchRenyiHydraulicCategoryHtml(html: string, pathname: string) {
  const config = getRenyiHydraulicCategoryConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-hydraulic-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_HYDRAULIC_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  const gridHtml = renderRenyiHydraulicCategoryGridHtml(config, locale);
  if (patchedHtml.includes('<div class="row row-40 list-pro clearfix wow fadeInUp">')) {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="row row-40 list-pro clearfix wow fadeInUp">',
      'div',
      gridHtml,
    );
  } else {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="product-ind5">',
      'div',
      `<div class="page-box list-pro-box"> <div class="container"> ${gridHtml} </div> </div>`,
    );
  }

  return patchedHtml;
}

function patchRenyiMineralCategoryHtml(html: string, pathname: string) {
  const config = getRenyiMineralCategoryConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-mineral-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_MINERAL_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  const gridHtml = renderRenyiHydraulicCategoryGridHtml(config, locale);
  if (patchedHtml.includes('<div class="row row-40 list-pro clearfix wow fadeInUp">')) {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="row row-40 list-pro clearfix wow fadeInUp">',
      'div',
      gridHtml,
    );
  } else {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="product-ind5">',
      'div',
      `<div class="page-box list-pro-box"> <div class="container"> ${gridHtml} </div> </div>`,
    );
  }

  return patchedHtml;
}

function patchRenyiSpecialEquipmentCategoryHtml(html: string, pathname: string) {
  const config = getRenyiSpecialEquipmentCategoryConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-special-equipment-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_SPECIAL_EQUIPMENT_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  const gridHtml = renderRenyiHydraulicCategoryGridHtml(config, locale);
  if (patchedHtml.includes('<div class="row row-40 list-pro clearfix wow fadeInUp">')) {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="row row-40 list-pro clearfix wow fadeInUp">',
      'div',
      gridHtml,
    );
  } else {
    patchedHtml = replaceRenyiFirstTagHtml(
      patchedHtml,
      '<div class="product-ind5">',
      'div',
      `<div class="page-box list-pro-box"> <div class="container"> ${gridHtml} </div> </div>`,
    );
  }

  return patchedHtml;
}

function getRenyiStructuralCategoryConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_STRUCTURAL_CATEGORY_CONFIG.paths.includes(normalized) ? RENYI_STRUCTURAL_CATEGORY_CONFIG : null;
}

function getRenyiStructuralBannerTextHtml(locale: RenyiLocale) {
  const copy = RENYI_STRUCTURAL_CATEGORY_COPY[locale];
  const title = locale === 'zh' ? '<div class="tit">产品</div>' : '';
  const subtitle = copy.subtitle ? `<div class="txt2">${escapeHtmlText(copy.subtitle)}</div>` : '';

  return `${title} <div class="txt1">${escapeHtmlText(copy.title)}</div> ${subtitle}`;
}

function patchRenyiStructuralBannerImageTags(html: string, locale: RenyiLocale) {
  const imageAlt = escapeHtmlText(
    renyiLocalizedText(
      '结构件系列横幅图',
      'Structural components series banner',
      'Баннер серии металлоконструкций',
      'Banner de la serie de componentes estructurales',
    )[locale],
  );

  return html.replace(
    /<img class="img-w hidden-xs hidden-sm" src="[^"]*" alt="">\s*<img class="img-w hidden-md hidden-lg mt60" src="[^"]*" alt="">/,
    `<img class="img-w hidden-xs hidden-sm" src="${RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE}" alt="${imageAlt}"> <img class="img-w hidden-md hidden-lg mt60" src="${RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE}" alt="${imageAlt}">`,
  );
}

function patchRenyiStructuralCategoryHtml(html: string, pathname: string) {
  const config = getRenyiStructuralCategoryConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-structural-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiStructuralBannerTextHtml(locale)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = patchRenyiStructuralBannerImageTags(patchedHtml, locale);
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="row row-40 list-pro clearfix wow fadeInUp">',
    'div',
    renderRenyiHydraulicCategoryGridHtml(config, locale),
  );

  return patchedHtml;
}

function getRenyiStructuralProductConfig(pathname: string) {
  const normalized = normalizeSitePath(pathname);

  return RENYI_STRUCTURAL_PRODUCT_CONFIGS.find((config) => config.paths.includes(normalized)) ?? null;
}

function patchRenyiStructuralProductHtml(html: string, pathname: string) {
  const config = getRenyiStructuralProductConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy = config.copy[locale];
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-structural-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_STRUCTURAL_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiStructuralBannerTextHtml(locale)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = patchRenyiStructuralBannerImageTags(patchedHtml, locale);
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="product-imgs clearfix wow fadeInUp">',
    'div',
    renderRenyiRaiseBoringGalleryHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-topbox">',
    'div',
    renderRenyiRaiseBoringTopBoxHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-v-body">',
    'div',
    renderRenyiRaiseBoringProductBodyHtml(config, locale),
  );
  patchedHtml = patchRenyiProductInquiryButtonHtml(patchedHtml, copy.inquiry);

  return patchedHtml;
}

function getRenyiHydraulicProductImageAlts(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  return config.images.map((image) => {
    const variant = config.variants.find((item) => item.image === image);

    return variant?.imageAlt[locale] ?? config.title[locale];
  });
}

function renderRenyiHydraulicProductGalleryHtml(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const imageAlts = getRenyiHydraulicProductImageAlts(config, locale);
  const fallbackAlt = config.title[locale];

  return `<div class="product-imgs clearfix wow fadeInUp"> <div class="imgbox-large"> <div class="swiper-container"> <div class="swiper-wrapper"> ${renderRenyiProductImageSlidesHtml(
    config.images,
    imageAlts,
    fallbackAlt,
    true,
  )} </div> </div> </div> <div class="imgbox-Small"> <div class="swiper-container"> <div class="swiper-wrapper"> ${renderRenyiProductImageSlidesHtml(
    config.images,
    imageAlts,
    fallbackAlt,
    false,
  )} </div> </div> <a class="arrow-left" href="#"><i class="fa fa-angle-left"></i></a> <a class="arrow-right" href="#"><i class="fa fa-angle-right"></i></a> </div> </div>`;
}

function renderRenyiHydraulicProductTopBoxHtml(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const href = withRenyiLocalePath(config.detailHref, locale);
  const specsHtml = getRenyiHydraulicProductTopSpecs(config, locale)
    .map(([label, value]) => `<div class="txt">${escapeHtmlText(label)}:${escapeHtmlText(value)}</div>`)
    .join('');

  return `<div class="pro-topbox"> <div class="txt"><h1 class="pro-tit"><a href="${escapeHtmlAttribute(href)}">${escapeHtmlText(
    config.title[locale],
  )}</a></h1></div> ${specsHtml} </div>`;
}

function renderRenyiHydraulicProductSpecTableHtml(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const copy = RENYI_HYDRAULIC_PRODUCT_COPY[locale];
  const parameterLabel = locale === 'zh' ? '参数' : locale === 'en' ? 'Parameter' : locale === 'ru' ? 'Параметр' : 'Parámetro';
  const isForcedAirFlotation = config.bodyClass === 'renyi-mineral-forced-air-flotation-product';
  const specSectionTitle = isForcedAirFlotation
    ? locale === 'zh'
      ? '产品型号'
      : locale === 'en'
        ? 'Product Models'
        : locale === 'ru'
          ? 'Модели'
          : 'Modelos de producto'
    : copy.specSectionTitle;
  const matchedHostLabel = isForcedAirFlotation
    ? locale === 'zh'
      ? '浮选机型号'
      : locale === 'en'
        ? 'Flotation machine model'
        : locale === 'ru'
          ? 'Модель флотационной машины'
          : 'Modelo de máquina de flotación'
    : copy.tableRows.matchedHost;
  const isHydraulicCylinderConfig = isRenyiHydraulicCylinderConfig(config);
  const columnHeadersHtml = config.variants
    .map((variant) => {
      const columnHeader = isHydraulicCylinderConfig ? RENYI_HYDRAULIC_GENERIC_MODEL_TEXT[locale] : variant.columnHeader[locale];

      return `<td><strong>${escapeHtmlText(columnHeader)}</strong></td>`;
    })
    .join('');
  const matchedHostValues = isHydraulicCylinderConfig
    ? config.variants.map(() => RENYI_HYDRAULIC_GENERIC_MODEL_TEXT[locale])
    : config.variants.map((variant) => variant.matchedHost);
  const rows = [
    ['equipment', copy.tableRows.equipment, config.variants.map((variant) => variant.equipmentType[locale])],
    ['matchedHost', matchedHostLabel, matchedHostValues],
    ['mainProduct', copy.tableRows.mainProduct, config.variants.map((variant) => variant.mainProduct[locale])],
    ['application', copy.tableRows.application, config.variants.map((variant) => variant.application[locale])],
  ] as const;
  const rowsHtml = rows
    .map(([_key, label, values]) => `<tr><td>${escapeHtmlText(label)}</td>${values.map((value) => `<td>${escapeHtmlText(value)}</td>`).join('')}</tr>`)
    .join('');

  return `<table style="width: 100%;"> <tbody> <tr><td><strong>${escapeHtmlText(parameterLabel)}</strong></td>${columnHeadersHtml}</tr> <tr><td style="width: 100%;" colspan="${
    config.variants.length + 1
  }" width="561"><strong>${escapeHtmlText(specSectionTitle)}</strong></td></tr> ${rowsHtml} </tbody> </table>`;
}

function renderRenyiHydraulicProductBodyHtml(config: RenyiHydraulicProductConfig, locale: RenyiLocale) {
  const copy = RENYI_HYDRAULIC_PRODUCT_COPY[locale];
  const bodyCopy = RENYI_HYDRAULIC_PRODUCT_BODY_COPY[config.detailHref]?.[locale];
  if (!bodyCopy) {
    throw new Error(`Missing hydraulic product body copy for ${config.detailHref} (${locale})`);
  }

  const introParagraphs = bodyCopy.intro;
  const advantageParagraphs = bodyCopy.advantages;
  const introHtml = introParagraphs.map((paragraph) => `<p>${escapeHtmlText(paragraph)}</p>`).join('');
  const advantagesHtml = `<p>${advantageParagraphs.map(escapeHtmlText).join('<br>')}</p>`;

  return `<div class="pro-v-body"> <div class="pro-v-body-t"> <div class="container"> <a href="#b1" class="item cur">${escapeHtmlText(
    copy.tabs[0],
  )}</a> <a href="#b2" class="item">${escapeHtmlText(copy.tabs[1])}</a> <a href="#b3" class="item">${escapeHtmlText(
    copy.tabs[2],
  )}</a> </div> </div> <div class="pro-v-body-b"> <div class="container"> <div class="maodian"><a name="b1"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(
    copy.introTitle,
  )}</div> ${introHtml} </div> <div class="maodian"><a name="b2"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(
    copy.advantagesTitle,
  )}</div> ${advantagesHtml} </div> <div class="maodian"><a name="b3"></a></div> <div class="item "> <div class="item-tit">${escapeHtmlText(
    copy.specsTitle,
  )}</div> ${renderRenyiHydraulicProductSpecTableHtml(config, locale)} </div> </div> </div> </div>`;
}

function patchRenyiHydraulicProductHtml(html: string, pathname: string) {
  const config = getRenyiHydraulicProductConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy = RENYI_HYDRAULIC_PRODUCT_COPY[locale];
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-hydraulic-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_HYDRAULIC_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicProductBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="product-imgs clearfix wow fadeInUp">',
    'div',
    renderRenyiHydraulicProductGalleryHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-topbox">',
    'div',
    renderRenyiHydraulicProductTopBoxHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-v-body">',
    'div',
    renderRenyiHydraulicProductBodyHtml(config, locale),
  );
  patchedHtml = patchRenyiProductInquiryButtonHtml(patchedHtml, copy.inquiry);

  return patchedHtml;
}

function patchRenyiMineralProductHtml(html: string, pathname: string) {
  const config = getRenyiMineralProductConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy = RENYI_HYDRAULIC_PRODUCT_COPY[locale];
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-mineral-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_MINERAL_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicProductBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="product-imgs clearfix wow fadeInUp">',
    'div',
    renderRenyiHydraulicProductGalleryHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-topbox">',
    'div',
    renderRenyiHydraulicProductTopBoxHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-v-body">',
    'div',
    renderRenyiHydraulicProductBodyHtml(config, locale),
  );
  patchedHtml = patchRenyiProductInquiryButtonHtml(patchedHtml, copy.inquiry);

  return patchedHtml;
}

function patchRenyiSpecialEquipmentProductHtml(html: string, pathname: string) {
  const config = getRenyiSpecialEquipmentProductConfig(pathname);

  if (!config) {
    return html;
  }

  const locale = getRenyiLocale(pathname);
  const copy = RENYI_HYDRAULIC_PRODUCT_COPY[locale];
  let patchedHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-raise-boring-page-banner renyi-special-equipment-page-banner renyi-raise-boring-page-banner--${locale}" style="background-image: url(${RENYI_SPECIAL_EQUIPMENT_CATEGORY_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  patchedHtml = patchedHtml.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiHydraulicProductBannerTextHtml(config, locale)} </div> </div> </div> <div class="container">`,
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="product-imgs clearfix wow fadeInUp">',
    'div',
    renderRenyiHydraulicProductGalleryHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-topbox">',
    'div',
    renderRenyiHydraulicProductTopBoxHtml(config, locale),
  );
  patchedHtml = replaceRenyiFirstTagHtml(
    patchedHtml,
    '<div class="pro-v-body">',
    'div',
    renderRenyiHydraulicProductBodyHtml(config, locale),
  );
  patchedHtml = patchRenyiProductInquiryButtonHtml(patchedHtml, copy.inquiry);

  return patchedHtml;
}

function patchRenyiNewsBannerHtml(html: string, pathname: string) {
  if (!isRenyiNewsPath(pathname)) {
    return html;
  }

  const patchedBanner = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-news-page-banner renyi-news-page-banner--${getRenyiLocale(pathname)}" style="background-image: url(${RENYI_NEWS_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );

  return patchedBanner.replace(
    /<div class="banner-tit-box">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="container">/,
    `<div class="banner-tit-box"> ${getRenyiNewsBannerTextHtml(pathname)} </div> </div> </div> <div class="container">`,
  );
}

function patchRenyiFooterContactsHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const copy = RENYI_FOOTER_CONTACTS[locale];
  const contactHtml = `<div class="footer-contacts"> <h3>${copy.title}</h3> <div> ${copy.items
    .map((item) => `<p>${item}</p>`)
    .join(' ')} </div> </div>`;

  return html.replace(
    /(<div class="footer-contacts-nav">[\s\S]*?<div class="col-md-[^"]*">\s*)<div class="footer-contacts">[\s\S]*?<\/h3>\s*(?:<p class="tel">[\s\S]*?<\/p>\s*)?<div>[\s\S]*?<\/div>\s*<\/div>(\s*<\/div>\s*<div class="col-md-)/,
    `$1${contactHtml}$2`,
  );
}

function patchRenyiFooterQrHtml(html: string) {
  return RENYI_LEGACY_FOOTER_QR_IMAGES.reduce(
    (contents, imageUrl) => contents.replaceAll(imageUrl, RENYI_WHATSAPP_QR_IMAGE),
    html,
  );
}

function renderRenyiFooterLegalRecordsHtml() {
  return `<span><a href="/">${escapeHtmlText(RENYI_COPYRIGHT_TEXT)}</a></span> <span><a href="${escapeHtmlAttribute(
    RENYI_ICP_URL,
  )}" target="_blank" rel="nofollow noopener noreferrer">${escapeHtmlText(RENYI_ICP_RECORD)}</a></span>`;
}

function patchRenyiFooterLegalRecordsHtml(html: string) {
  const cleanedHtml = html
    .replace(/<span>\s*<a\b(?=[^>]*beian\.miit\.gov\.cn)[\s\S]*?ICP备[\s\S]*?<\/a>\s*<\/span>/g, '')
    .replace(
      /<span>\s*<a\b(?=[^>]*beian\.gov\.cn\/portal\/registerSystemInfo)[\s\S]*?公网安备[\s\S]*?<\/a>\s*<\/span>/g,
      '',
    );

  return cleanedHtml.replace(
    /(<div class="col-md-16 footer-copy-col2">\s*)[\s\S]*?(\s*<\/div>)/,
    `$1${renderRenyiFooterLegalRecordsHtml()}$2`,
  );
}

function isRenyiContactPath(pathname: string) {
  return normalizeSitePath(pathname).replace(/^\/(?:en|ru|es)/, '') === '/lianxiwomen/';
}

function renderRenyiContactPageHtml(locale: RenyiLocale) {
  const copy = RENYI_CONTACT_PAGE_COPY[locale];
  const cardsHtml = copy.cards
    .map(
      (card) =>
        `<div class="col-md-8"> <div class="contact01-item"> <div class="contact01-item-top"> <strong>${escapeHtmlText(
          card.title,
        )}</strong> </div> <div class="contact01-item-body"> ${card.lines.map(escapeHtmlText).join('<br>')} </div> </div> </div>`,
    )
    .join(' ');

  return `<section class="contact01 page-col-space wow fadeInUp"> <div class="container"> <div class="page-tit-box"> <h3 class="tit mb20">${escapeHtmlText(
    copy.sectionTitle,
  )}</h3> </div> <div class="page-txtbig mb50"> <div class="txt01">${escapeHtmlText(copy.headline)}</div> <div class="txt02">${escapeHtmlText(
    copy.subtitle,
  )}</div> </div> <div class="contact01-list"> <div class="row "> ${cardsHtml} </div> </div> </div> </section>`;
}

function patchRenyiContactPageHtml(html: string, pathname: string) {
  if (!isRenyiContactPath(pathname)) {
    return html;
  }

  return html.replace(/<section class="contact01 page-col-space wow fadeInUp">[\s\S]*?<\/section>/, renderRenyiContactPageHtml(getRenyiLocale(pathname)));
}

function patchRenyiLegacyCaptchaHtml(html: string) {
  return html.replace(/<form\b[\s\S]*?<\/form>/g, (formHtml) => {
    const withoutCaptcha = formHtml.replace(
      /<div class="col-md-12">\s*<div class="contact-page__form-input-box text-code-box">[\s\S]*?<\/div>\s*<\/div>/g,
      '',
    );

    if (withoutCaptcha === formHtml) {
      return formHtml;
    }

    return withoutCaptcha.replace(
      /<div class="col-md-12">\s*<div class="contact-page__btn-box">/,
      '<div class="col-md-12 col-md-offset-12"> <div class="contact-page__btn-box">',
    );
  });
}

function patchRenyiWhatsappFormActionHtml(html: string) {
  return html.replace(/<form\b([^>]*\bclass=(["'])[^"']*\bwpcf7-form\b[^"']*\2[^>]*)>/g, (_match, attrs: string) => {
    const patchedAttrs = /\saction=(["'])[^"']*\1/.test(attrs)
      ? attrs.replace(/\saction=(["'])[^"']*\1/, ` action="${escapeHtmlAttribute(RENYI_WHATSAPP_URL)}"`)
      : `${attrs} action="${escapeHtmlAttribute(RENYI_WHATSAPP_URL)}"`;

    return `<form${patchedAttrs}>`;
  });
}

function patchRenyiContactPageBannerHtml(html: string, pathname: string) {
  if (!isRenyiContactPath(pathname)) {
    return html;
  }

  return html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-contact-page-banner renyi-contact-page-banner--${getRenyiLocale(
      pathname,
    )}" style="background-image: url(${RENYI_CONTACT_PAGE_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );
}

function getRenyiProductSeriesLabel(locale: RenyiLocale, hrefPart: string) {
  return (
    (RENYI_PRODUCT_SERIES_CARD_LABELS[locale] as Record<string, string>)[hrefPart] ??
    (RENYI_PRODUCT_SERIES_CARD_LABELS.zh as Record<string, string>)[hrefPart] ??
    ''
  );
}

function renderRenyiFooterProductListHtml(locale: RenyiLocale) {
  return RENYI_FOOTER_PRODUCT_SERIES_HREFS.map((hrefPart) => {
    const label = getRenyiProductSeriesLabel(locale, hrefPart);
    const escapedLabel = escapeHtmlText(label);
    const escapedTitle = escapeHtmlAttribute(label);
    const href = escapeHtmlAttribute(withRenyiLocalePath(hrefPart, locale));

    return `<li><a href="${href}" title="${escapedTitle}">${escapedLabel}</a></li>`;
  }).join(' ');
}

function patchRenyiFooterProductHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);

  return html.replace(
    /(<footer class="footer">[\s\S]*?<ul class="b-menu">[\s\S]*?<li class="m-1 has-sub[^"]*">\s*<a\b[\s\S]*?<\/a>\s*<ul class="sub-btn">)([\s\S]*?)(<\/ul>\s*<\/li>)/,
    (_match, before: string, _list: string, after: string) => `${before}${renderRenyiFooterProductListHtml(locale)}${after}`,
  );
}

function findRenyiFooterMenuItemStart(html: string, className: string) {
  const footerStart = html.indexOf('<footer class="footer">');

  if (footerStart === -1) {
    return -1;
  }

  const itemMatch = new RegExp(`<li class="${escapeRegExp(className)}[^"]*"[^>]*>`).exec(html.slice(footerStart));

  return itemMatch ? footerStart + itemMatch.index : -1;
}

function patchRenyiFooterMenuTopAnchorHtml(html: string, itemStart: number, label: string, href: string) {
  const itemRange = itemStart === -1 ? null : findRenyiMatchingTagRange(html, itemStart, 'li');

  if (!itemRange) {
    return html;
  }

  const escapedLabel = escapeHtmlText(label);
  const escapedTitle = escapeHtmlAttribute(label);
  const escapedHref = escapeHtmlAttribute(href);
  const itemHtml = html.slice(itemStart, itemRange.end);
  const patchedItemHtml = itemHtml.replace(
    /<a\b[^>]*>[\s\S]*?<\/a>/,
    `<a href="${escapedHref}" title="${escapedTitle}">${escapedLabel}</a>`,
  );

  return `${html.slice(0, itemStart)}${patchedItemHtml}${html.slice(itemRange.end)}`;
}

function patchRenyiFooterMenuHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);

  return Object.values(RENYI_FOOTER_MENU_COPY).reduce((contents, item) => {
    const start = findRenyiFooterMenuItemStart(contents, item.className);
    const withAnchor = patchRenyiFooterMenuTopAnchorHtml(
      contents,
      start,
      item.labels[locale],
      withRenyiLocalePath(item.href, locale),
    );
    const nextStart = findRenyiFooterMenuItemStart(withAnchor, item.className);

    return patchRenyiMenuItemSubListHtml(withAnchor, nextStart, locale, 'submenu' in item ? item.submenu : undefined);
  }, html);
}

function patchRenyiProductSeriesCardLabelsHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const labels = RENYI_PRODUCT_SERIES_CARD_LABELS[locale];
  const alts = RENYI_PRODUCT_SERIES_CARD_ALTS[locale];
  const descriptions = RENYI_PRODUCT_SERIES_CARD_DESCRIPTIONS[locale];

  const hrefParts = [
    ...Object.keys(labels),
    ...Object.keys(RENYI_PRODUCT_SERIES_CARD_HREF_ALIASES),
  ];

  return hrefParts.reduce((contents, hrefPart) => {
    const canonicalHrefPart = RENYI_PRODUCT_SERIES_CARD_HREF_ALIASES[hrefPart] ?? hrefPart;
    const label = (labels as Record<string, string>)[canonicalHrefPart];

    if (!label) {
      return contents;
    }

    const escapedLabel = escapeHtmlText(label);
    const escapedDescription = escapeHtmlText((descriptions as Record<string, string>)[canonicalHrefPart] ?? '');
    const image = RENYI_PRODUCT_SERIES_CARD_IMAGES[canonicalHrefPart];
    const alt = (alts as Record<string, string>)[canonicalHrefPart] ?? label;

    if (!image) {
      return contents;
    }

    const cardPattern = new RegExp(
      `(<a\\b[^>]*class="[^"]*\\bitem\\b[^"]*\\bimg-hover\\b[^"]*"[^>]*href="[^"]*${escapeRegExp(hrefPart)}"[^>]*>)([\\s\\S]*?)(<\\/a>)`,
      'g',
    );

    return contents.replace(cardPattern, (_match, openTag: string, cardHtml: string, closeTag: string) => {
      const href = escapeHtmlAttribute(withRenyiLocalePath(canonicalHrefPart, locale));
      const updatedOpenTag = openTag.replace(/\bhref=(["'])[^"']*\1/, `href="${href}"`);
      const updatedCard = cardHtml
        .replace(/<img\b[^>]*>/i, (imgTag) => upsertImageAltAttribute(upsertImageSrcAttribute(imgTag, image), alt))
        .replace(/(<h3 class="tit">)[\s\S]*?(<\/h3>)/, `$1${escapedLabel}$2`)
        .replace(/(<p class="txt">)[\s\S]*?(<\/p>)/, `$1${escapedDescription}$2`);

      return `${updatedOpenTag}${updatedCard}${closeTag}`;
    });
  }, html);
}

function escapeHtmlText(value: unknown) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceFirstTopLevelProductAnchor(listItemHtml: string, label: string) {
  return listItemHtml.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/, (anchorMatch, attributes: string, innerHtml: string) => {
    const escapedLabel = escapeHtmlText(label);
    const escapedTitle = escapeHtmlAttribute(label);
    const iconHtml = innerHtml.match(/<i\b[\s\S]*?<\/i>/)?.[0] ?? '';
    const nextAttributes = /\btitle=/.test(attributes)
      ? attributes.replace(/\btitle=(["'])[^"']*\1/, `title="${escapedTitle}"`)
      : `${attributes} title="${escapedTitle}"`;

    return `<a${nextAttributes}>${escapedLabel}${iconHtml}</a>`;
  });
}

function patchProductMenuListItems(listHtml: string, labels: string[]) {
  const openTagEnd = listHtml.indexOf('>') + 1;
  const closeTagStart = listHtml.lastIndexOf('</ul>');

  if (openTagEnd <= 0 || closeTagStart === -1) {
    return listHtml;
  }

  const prefix = listHtml.slice(0, openTagEnd);
  const innerHtml = listHtml.slice(openTagEnd, closeTagStart);
  const suffix = listHtml.slice(closeTagStart);
  const tagPattern = /<\/?li\b[^>]*>/gi;
  const parts: string[] = [];
  let depth = 0;
  let cursor = 0;
  let itemStart = -1;
  let labelIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(innerHtml))) {
    const tag = match[0];

    if (!tag.startsWith('</')) {
      if (depth === 0) {
        parts.push(innerHtml.slice(cursor, match.index));
        itemStart = match.index;
      }
      depth += 1;
      continue;
    }

    depth -= 1;

    if (depth === 0 && itemStart !== -1) {
      const itemEnd = tagPattern.lastIndex;
      const label = labels[labelIndex];
      const itemHtml = innerHtml.slice(itemStart, itemEnd);

      parts.push(label ? replaceFirstTopLevelProductAnchor(itemHtml, label) : itemHtml);
      labelIndex += 1;
      cursor = itemEnd;
      itemStart = -1;
    }
  }

  parts.push(innerHtml.slice(cursor));

  return `${prefix}${parts.join('')}${suffix}`;
}

const RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE: Record<RenyiLocale, Record<string, string>> = {
  zh: {
    '/yougang-01/': RENYI_HYDRAULIC_ENGINEERING_CATEGORY.zh,
    '/yougang-02/': RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY.zh,
  },
  en: {
    '/yougang-01/': RENYI_HYDRAULIC_ENGINEERING_CATEGORY.en,
    '/yougang-02/': RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY.en,
  },
  ru: {
    '/yougang-01/': RENYI_HYDRAULIC_ENGINEERING_CATEGORY.ru,
    '/yougang-02/': RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY.ru,
  },
  es: {
    '/yougang-01/': RENYI_HYDRAULIC_ENGINEERING_CATEGORY.es,
    '/yougang-02/': RENYI_HYDRAULIC_SPECIAL_VEHICLE_CATEGORY.es,
  },
};
const RENYI_HYDRAULIC_SERIES_CHILD_LABELS: Record<string, string> =
  RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE.zh;

const RENYI_STRUCTURAL_SERIES_CHILD_HREFS = [
  '/jiegou-01/',
  '/jiegou-03/',
  '/jiegou-05/',
] as const;

const RENYI_STRUCTURAL_SERIES_CHILD_LABELS: Record<string, string> = {
  '/jiegou-01/': '后桥壳',
  '/jiegou-03/': '副车架',
  '/jiegou-05/': '车斗',
};

const RENYI_SPECIAL_EQUIPMENT_CHILD_HREFS = [
  '/zhuanyong-01/',
  '/zhuanyong-02/',
  '/zhuanyong-03/',
  '/zhuanyong-04/',
  '/zhuanyong-05/',
] as const;

const RENYI_SPECIAL_EQUIPMENT_CHILD_LABELS: Record<string, string> = {
  '/zhuanyong-01/': '轮辋拆装机（多条件式轮辋）',
  '/zhuanyong-02/': '轮辋拆装机（门架式）',
  '/zhuanyong-03/': '马达拆装机',
  '/zhuanyong-04/': '炮孔填塞机',
  '/zhuanyong-05/': '轮胎拆卸手',
};

const RENYI_RAISE_BORING_SERIES_CHILD_LABELS: Record<string, string> = {
  '/zuanji-01/': '有轨式天（反）井钻机',
  '/zuanji-02/': '无轨式天（反）井钻机',
  '/zuanji-03/': '钻杆、稳定杆',
  '/zuanji-04/': '扩孔刀盘',
};

const RENYI_MINERAL_PROCESSING_SERIES_CHILD_LABELS: Record<string, string> = {
  '/xuanji-01/': '充气搅拌式浮选机',
};

const RENYI_HEADER_PRODUCT_CHILD_LABELS: Record<string, Record<string, string>> = {
  [RENYI_PRODUCT_SERIES_HREFS.raiseBoring]: RENYI_RAISE_BORING_SERIES_CHILD_LABELS,
  [RENYI_PRODUCT_SERIES_HREFS.hydraulic]: RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE.zh,
  [RENYI_PRODUCT_SERIES_HREFS.mineral]: RENYI_MINERAL_PROCESSING_SERIES_CHILD_LABELS,
  [RENYI_PRODUCT_SERIES_HREFS.special]: RENYI_SPECIAL_EQUIPMENT_CHILD_LABELS,
  [RENYI_PRODUCT_SERIES_HREFS.structural]: RENYI_STRUCTURAL_SERIES_CHILD_LABELS,
};
const RENYI_HEADER_PRODUCT_CHILD_LABELS_BY_LOCALE: Record<RenyiLocale, Record<string, Record<string, string>>> = {
  zh: RENYI_HEADER_PRODUCT_CHILD_LABELS,
  en: {
    [RENYI_PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Rail-Mounted Raise Boring Rig',
      '/zuanji-02/': 'Trackless Raise Boring Rig',
      '/zuanji-03/': 'Drill Rods and Stabilizers',
      '/zuanji-04/': 'Reaming Cutterhead',
    },
    [RENYI_PRODUCT_SERIES_HREFS.hydraulic]: RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE.en,
    [RENYI_PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Forced-Air Mechanical Flotation Machine',
    },
    [RENYI_PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-01/': 'Rim Dismounting Machine (Multi-Condition Rim)',
      '/zhuanyong-02/': 'Rim Dismounting Machine (Gantry Type)',
      '/zhuanyong-03/': 'Motor Dismounting Machine',
      '/zhuanyong-04/': 'Blasthole Stemming Machine',
      '/zhuanyong-05/': 'Tire Handler',
    },
    [RENYI_PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Rear Axle Housing',
      '/jiegou-03/': 'Subframe',
      '/jiegou-05/': 'Truck Body',
    },
  },
  ru: {
    [RENYI_PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Рельсовая установка восстающего бурения',
      '/zuanji-02/': 'Безрельсовая установка восстающего бурения',
      '/zuanji-03/': 'Буровые штанги и стабилизаторы',
      '/zuanji-04/': 'Расширительная буровая головка',
    },
    [RENYI_PRODUCT_SERIES_HREFS.hydraulic]: RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE.ru,
    [RENYI_PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Пневмомеханическая флотационная машина',
    },
    [RENYI_PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-01/': 'Станок демонтажа ободов (многоусловный тип)',
      '/zhuanyong-02/': 'Станок демонтажа ободов (портальный тип)',
      '/zhuanyong-03/': 'Станок демонтажа моторов',
      '/zhuanyong-04/': 'Установка забойки скважин',
      '/zhuanyong-05/': 'Манипулятор для шин',
    },
    [RENYI_PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Корпус заднего моста',
      '/jiegou-03/': 'Подрамник',
      '/jiegou-05/': 'Кузов самосвала',
    },
  },
  es: {
    [RENYI_PRODUCT_SERIES_HREFS.raiseBoring]: {
      '/zuanji-01/': 'Equipo raise boring sobre carriles',
      '/zuanji-02/': 'Equipo raise boring sin carriles',
      '/zuanji-03/': 'Barras de perforación y estabilizadores',
      '/zuanji-04/': 'Cabezal de escariado',
    },
    [RENYI_PRODUCT_SERIES_HREFS.hydraulic]: RENYI_HYDRAULIC_SERIES_CHILD_LABELS_BY_LOCALE.es,
    [RENYI_PRODUCT_SERIES_HREFS.mineral]: {
      '/xuanji-01/': 'Máquina de flotación mecánica con aire forzado',
    },
    [RENYI_PRODUCT_SERIES_HREFS.special]: {
      '/zhuanyong-01/': 'Desmontadora de llantas (tipo multicondición)',
      '/zhuanyong-02/': 'Desmontadora de llantas (tipo pórtico)',
      '/zhuanyong-03/': 'Desmontadora de motores',
      '/zhuanyong-04/': 'Equipo de retacado de barrenos',
      '/zhuanyong-05/': 'Manipulador de neumáticos',
    },
    [RENYI_PRODUCT_SERIES_HREFS.structural]: {
      '/jiegou-01/': 'Carcasa de eje trasero',
      '/jiegou-03/': 'Subchasis',
      '/jiegou-05/': 'Caja de camión',
    },
  },
};

function renderRenyiProductMenuChildItemsHtml(locale: RenyiLocale, labels: Record<string, string>) {
  return Object.entries(labels)
    .map(([hrefPart, label]) => {
      const href = escapeHtmlAttribute(withRenyiLocalePath(hrefPart, locale));
      const escapedLabel = escapeHtmlText(label);
      const escapedTitle = escapeHtmlAttribute(label);

      return `<li><a href="${href}" title="${escapedTitle}">${escapedLabel}</a></li>`;
    })
    .join(' ');
}

function renderRenyiHeaderProductMenuListHtml(locale: RenyiLocale) {
  const items = RENYI_HEADER_PRODUCT_SERIES_HREFS.map((hrefPart) => {
    const label = getRenyiProductSeriesLabel(locale, hrefPart);
    const escapedLabel = escapeHtmlText(label);
    const escapedTitle = escapeHtmlAttribute(label);
    const href = escapeHtmlAttribute(withRenyiLocalePath(hrefPart, locale));
    const childLabels = RENYI_HEADER_PRODUCT_CHILD_LABELS_BY_LOCALE[locale][hrefPart] ?? {};
    const childItems = renderRenyiProductMenuChildItemsHtml(locale, childLabels);
    const children = childItems ? ` <ul class="sub-btn3"> ${childItems} </ul>` : '';

    return `<li><a href="${href}" title="${escapedTitle}">${escapedLabel}<i class="ifa ifa-youjiantou1"></i></a>${children}</li>`;
  }).join(' ');

  return `<ul class="sub-btn2"> ${items} </ul>`;
}

function renameProductMenuItemHtml(itemHtml: string, hrefPart: string) {
  const label =
    RENYI_HYDRAULIC_SERIES_CHILD_LABELS[hrefPart] ??
    RENYI_SPECIAL_EQUIPMENT_CHILD_LABELS[hrefPart];

  if (!label) {
    return itemHtml;
  }

  const escapedLabel = escapeHtmlText(label);
  const escapedTitle = escapeHtmlAttribute(label);

  return itemHtml.replace(
    /<a\b([^>]*)>([\s\S]*?)<\/a>/,
    (anchorMatch, attributes: string) => {
      const nextAttributes = /\btitle=/.test(attributes)
        ? attributes.replace(/\btitle=(["'])[^"']*\1/, `title="${escapedTitle}"`)
        : `${attributes} title="${escapedTitle}"`;

      return `<a${nextAttributes}>${escapedLabel}</a>`;
    },
  );
}

function replaceProductMenuChildLabelsByHref(listHtml: string, labels: Record<string, string>) {
  return Object.entries(labels).reduce((html, [hrefPart, label]) => {
    const escapedLabel = escapeHtmlText(label);
    const escapedTitle = escapeHtmlAttribute(label);
    const pattern = new RegExp(
      `(<a\\b[^>]*href="[^"]*${escapeRegExp(hrefPart)}"[^>]*>)([\\s\\S]*?)(<\\/a>)`,
      'g',
    );

    return html.replace(pattern, (_match, openTag: string, _contents: string, closeTag: string) => {
      const nextOpenTag = /\btitle=/.test(openTag)
        ? openTag.replace(/\btitle=(["'])[^"']*\1/, `title="${escapedTitle}"`)
        : openTag.replace(/>$/, ` title="${escapedTitle}">`);

      return `${nextOpenTag}${escapedLabel}${closeTag}`;
    });
  }, listHtml);
}

function moveProductMenuItemToHydraulicSeries(listHtml: string, hrefPart: string) {
  const itemPattern = new RegExp(
    `\\s*<li><a href="[^"]*${escapeRegExp(hrefPart)}"[^>]*>[\\s\\S]*?<\\/a><\\/li>`,
  );
  const itemMatch = listHtml.match(itemPattern);

  if (!itemMatch) {
    return listHtml;
  }

  const movedItem = renameProductMenuItemHtml(itemMatch[0].trim(), hrefPart);
  const withoutItem = listHtml.replace(itemPattern, '');
  const hydraulicItemPattern = new RegExp(
    `(<li><a href="[^"]*\\/yougangxuangua\\/"[^>]*>(?:(?!<\\/a>)[\\s\\S])*<\\/a>)(\\s*)(<\\/li>)`,
  );
  const hydraulicSubListPattern = new RegExp(
    `(<li><a href="[^"]*\\/yougangxuangua\\/"[^>]*>(?:(?!<\\/a>)[\\s\\S])*<\\/a>\\s*<ul class="sub-btn3">)([\\s\\S]*?)(<\\/ul>\\s*<\\/li>)`,
  );

  if (hydraulicSubListPattern.test(withoutItem)) {
    return withoutItem.replace(
      hydraulicSubListPattern,
      (_match, before: string, existingItems: string, after: string) => `${before} ${existingItems.trim()} ${movedItem} ${after}`,
    );
  }

  return withoutItem.replace(
    hydraulicItemPattern,
    (_match, anchor: string, space: string, close: string) =>
      `${anchor}${space}<ul class="sub-btn3"> ${movedItem} </ul>${close}`,
  );
}

function moveProductMenuItemsToHydraulicSeries(listHtml: string) {
  return Object.keys(RENYI_HYDRAULIC_SERIES_CHILD_LABELS).reduce(
    (html, hrefPart) => moveProductMenuItemToHydraulicSeries(html, hrefPart),
    listHtml,
  );
}

function extractProductMenuChildItem(listHtml: string, hrefPart: string) {
  const itemPattern = new RegExp(
    `\\s*<li><a href="[^"]*${escapeRegExp(hrefPart)}"[^>]*>[\\s\\S]*?<\\/a><\\/li>`,
  );
  const itemMatch = listHtml.match(itemPattern);

  if (!itemMatch) {
    return { listHtml, itemHtml: '' };
  }

  return {
    listHtml: listHtml.replace(itemPattern, ''),
    itemHtml: itemMatch[0].trim(),
  };
}

function addStructuralSeriesChildLinks(itemHtml: string, childItemsHtml: string[]) {
  if (!childItemsHtml.length) {
    return itemHtml;
  }

  const childListHtml = childItemsHtml.join(' ');

  if (/<ul class="sub-btn3">/.test(itemHtml)) {
    return itemHtml.replace(/(<ul class="sub-btn3">)([\s\S]*?)(<\/ul>)/, (_match, before: string, existing: string, after: string) =>
      `${before} ${existing.trim()} ${childListHtml} ${after}`,
    );
  }

  return itemHtml.replace(/(<\/a>)(\s*<\/li>)/, `$1 <ul class="sub-btn3"> ${childListHtml} </ul>$2`);
}

function moveSpecialEquipmentChildrenIntoSpecialSeries(listHtml: string) {
  const childItemsHtml: string[] = [];
  let listHtmlWithoutMovedChildren = listHtml;
  RENYI_SPECIAL_EQUIPMENT_CHILD_HREFS.forEach((hrefPart) => {
    const result = extractProductMenuChildItem(listHtmlWithoutMovedChildren, hrefPart);
    listHtmlWithoutMovedChildren = result.listHtml;
    if (result.itemHtml) {
      childItemsHtml.push(result.itemHtml);
    }
  });

  if (!childItemsHtml.length) {
    return replaceProductMenuChildLabelsByHref(listHtmlWithoutMovedChildren, RENYI_SPECIAL_EQUIPMENT_CHILD_LABELS);
  }

  const specialItemPattern =
    /\s*<li><a href="[^"]*\/pro_category\/dexiafuwuche\/"[^>]*>(?:(?!<\/a>)[\s\S])*<\/a>(?:\s*<ul class="sub-btn3">[\s\S]*?<\/ul>)?\s*<\/li>/;

  const withMovedChildren = listHtmlWithoutMovedChildren.replace(specialItemPattern, (specialItemHtml: string) =>
    addStructuralSeriesChildLinks(specialItemHtml.trim(), childItemsHtml),
  );

  return replaceProductMenuChildLabelsByHref(withMovedChildren, RENYI_SPECIAL_EQUIPMENT_CHILD_LABELS);
}

function moveStructuralSeriesAfterSpecialEquipment(listHtml: string) {
  const childItemsHtml: string[] = [];
  let listHtmlWithoutStructuralChildren = listHtml;
  RENYI_STRUCTURAL_SERIES_CHILD_HREFS.forEach((hrefPart) => {
    const result = extractProductMenuChildItem(listHtmlWithoutStructuralChildren, hrefPart);
    listHtmlWithoutStructuralChildren = result.listHtml;
    if (result.itemHtml) {
      childItemsHtml.push(result.itemHtml);
    }
  });
  const structuralItemPattern =
    /\s*<li><a href="[^"]*\/pro_category\/zaoyantaiche\/"[^>]*>(?:(?!<\/a>)[\s\S])*<\/a>(?:\s*<ul class="sub-btn3">[\s\S]*?<\/ul>)?\s*<\/li>/;
  const structuralItemMatch = listHtmlWithoutStructuralChildren.match(structuralItemPattern);

  if (!structuralItemMatch) {
    return listHtmlWithoutStructuralChildren;
  }

  const structuralItemHtml = addStructuralSeriesChildLinks(structuralItemMatch[0].trim(), childItemsHtml);
  const withoutStructuralItem = listHtmlWithoutStructuralChildren.replace(structuralItemPattern, '');
  const specialItemPattern =
    /(<li><a href="[^"]*\/pro_category\/dexiafuwuche\/"[^>]*>(?:(?!<\/a>)[\s\S])*<\/a>(?:\s*<ul class="sub-btn3">[\s\S]*?<\/ul>)?\s*<\/li>)/;

  const withMovedStructural = withoutStructuralItem.replace(
    specialItemPattern,
    (_match, specialItemHtml: string) => `${specialItemHtml} ${structuralItemHtml}`,
  );

  return replaceProductMenuChildLabelsByHref(withMovedStructural, RENYI_STRUCTURAL_SERIES_CHILD_LABELS);
}

function findRenyiMatchingTagRange(html: string, openTagStart: number, tagName: string) {
  const tagPattern = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi');
  tagPattern.lastIndex = openTagStart;
  let depth = 0;
  let match: RegExpExecArray | null;

  while ((match = tagPattern.exec(html))) {
    if (match[0].startsWith('</')) {
      depth -= 1;
    } else {
      depth += 1;
    }

    if (depth === 0) {
      return { start: match.index, end: tagPattern.lastIndex };
    }
  }

  return null;
}

function findRenyiHeaderProductStart(html: string) {
  const menuBoxStart = html.indexOf('<div class="menu-box">');

  if (menuBoxStart === -1) {
    return -1;
  }

  const productMatch = /<li class="m-1 has-sub[^"]*"[^>]*>/.exec(html.slice(menuBoxStart));

  return productMatch ? menuBoxStart + productMatch.index : -1;
}

function patchRenyiHeaderHomeMenuHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const label = RENYI_HOME_NAV_LABELS[locale];
  const href = escapeHtmlAttribute(withRenyiLocalePath('/', locale));
  const escapedLabel = escapeHtmlText(label);
  const escapedTitle = escapeHtmlAttribute(label);

  return html.replace(
    /<li class="m-0(\s+current)?\s*">[\s\S]*?<\/li>/,
    (_match, currentClass = '') =>
      `<li class="m-0${currentClass}"> <a href="${href}" title="${escapedTitle}"><span data-title="${escapedTitle}">${escapedLabel}</span></a> </li>`,
  );
}

function findRenyiHeaderMenuItemStart(html: string, className: string) {
  const menuBoxStart = html.indexOf('<div class="menu-box">');

  if (menuBoxStart === -1) {
    return -1;
  }

  const itemMatch = new RegExp(`<li class="${escapeRegExp(className)}[^"]*"[^>]*>`).exec(html.slice(menuBoxStart));

  return itemMatch ? menuBoxStart + itemMatch.index : -1;
}

function patchRenyiMenuItemTopAnchorHtml(html: string, itemStart: number, label: string, href: string) {
  const itemRange = itemStart === -1 ? null : findRenyiMatchingTagRange(html, itemStart, 'li');

  if (!itemRange) {
    return html;
  }

  const escapedLabel = escapeHtmlText(label);
  const escapedTitle = escapeHtmlAttribute(label);
  const escapedHref = escapeHtmlAttribute(href);
  const itemHtml = html.slice(itemStart, itemRange.end);
  const patchedItemHtml = itemHtml.replace(
    /<a\b[^>]*>\s*<span\b[^>]*>[\s\S]*?<\/span>\s*<\/a>/,
    `<a href="${escapedHref}" title="${escapedTitle}"><span data-title="${escapedTitle}">${escapedLabel}</span></a>`,
  );

  return `${html.slice(0, itemStart)}${patchedItemHtml}${html.slice(itemRange.end)}`;
}

function renderRenyiMenuSubItemsHtml(locale: RenyiLocale, items: ReadonlyArray<readonly [string, string]>) {
  return items
    .map(([label, href]) => {
      const localizedHref = escapeHtmlAttribute(withRenyiLocalePath(href, locale));
      const escapedLabel = escapeHtmlText(label);
      const escapedTitle = escapeHtmlAttribute(label);

      return `<li><a href="${localizedHref}" title="${escapedTitle}">${escapedLabel}</a></li>`;
    })
    .join(' ');
}

function patchRenyiMenuItemSubListHtml(
  html: string,
  itemStart: number,
  locale: RenyiLocale,
  items?: Readonly<Record<RenyiLocale, ReadonlyArray<readonly [string, string]>>>,
) {
  if (!items) {
    return html;
  }

  const listStart = itemStart === -1 ? -1 : html.indexOf('<ul class="sub-btn"', itemStart);
  const listRange = listStart === -1 ? null : findRenyiMatchingTagRange(html, listStart, 'ul');

  if (!listRange) {
    return html;
  }

  const listHtml = `<ul class="sub-btn"> ${renderRenyiMenuSubItemsHtml(locale, items[locale])} </ul>`;

  return `${html.slice(0, listStart)}${listHtml}${html.slice(listRange.end)}`;
}

function patchRenyiHeaderTopNavHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);

  return RENYI_HEADER_NAV_ITEMS.reduce((contents, item) => {
    const start = findRenyiHeaderMenuItemStart(contents, item.className);
    const withAnchor = patchRenyiMenuItemTopAnchorHtml(
      contents,
      start,
      item.labels[locale],
      withRenyiLocalePath(item.href, locale),
    );
    const nextStart = findRenyiHeaderMenuItemStart(withAnchor, item.className);

    return patchRenyiMenuItemSubListHtml(withAnchor, nextStart, locale, 'submenu' in item ? item.submenu : undefined);
  }, html);
}

function patchRenyiHeaderLanguageLabelHtml(html: string, pathname: string) {
  const label = escapeHtmlText(RENYI_LANGUAGE_LABELS[getRenyiLocale(pathname)]);

  return html.replace(
    /(<ul class="top-block">[\s\S]*?<a class="a1"[\s\S]*?<span class="hidden-sm hidden-xs">)[\s\S]*?(<\/span>)/,
    `$1${label}$2`,
  );
}

function findRenyiHeaderAboutStart(html: string) {
  const menuBoxStart = html.indexOf('<div class="menu-box">');

  if (menuBoxStart === -1) {
    return -1;
  }

  const aboutMatch = /<li class="m-0 has-sub[^"]*"[^>]*>/.exec(html.slice(menuBoxStart));

  return aboutMatch ? menuBoxStart + aboutMatch.index : -1;
}

function findRenyiHeaderContactStart(html: string) {
  const menuBoxStart = html.indexOf('<div class="menu-box">');

  if (menuBoxStart === -1) {
    return -1;
  }

  const contactMatch = /<li class="m-5 has-sub[^"]*"[^>]*>/.exec(html.slice(menuBoxStart));

  return contactMatch ? menuBoxStart + contactMatch.index : -1;
}

function patchRenyiHeaderAboutMenuTextHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const aboutStart = findRenyiHeaderAboutStart(html);
  const textBoxStart = aboutStart === -1 ? -1 : html.indexOf('<div class="sub-txtbox">', aboutStart);
  const textBoxOpenEnd = textBoxStart === -1 ? -1 : html.indexOf('>', textBoxStart) + 1;
  const textBoxRange = textBoxStart === -1 ? null : findRenyiMatchingTagRange(html, textBoxStart, 'div');

  if (!textBoxRange || textBoxOpenEnd <= textBoxStart) {
    return html;
  }

  const copy = RENYI_ABOUT_MENU_COPY[locale];
  const href = escapeHtmlAttribute(withRenyiLocalePath('/guanyuxingye/', locale));
  const contents = `<h3>${escapeHtmlText(copy.title)}</h3> <p>${escapeHtmlText(copy.text)}</p> <a href="${href}">${escapeHtmlText(copy.more)}<i class="ifa ifa-arrow-right-bold"></i></a>`;

  return `${html.slice(0, textBoxOpenEnd)} ${contents} ${html.slice(textBoxRange.start)}`;
}

function patchRenyiHeaderProductMenuHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const htmlWithBackground = html.replace(
    /https?:\/\/(?:www|en|ru|es)\.ytxingye\.com\/wp-content\/uploads\/2022\/10\/chanpin\.jpg/g,
    RENYI_PRODUCT_MENU_BACKGROUND_IMAGE,
  );
  const productStart = findRenyiHeaderProductStart(htmlWithBackground);
  const listStart = productStart === -1 ? -1 : htmlWithBackground.indexOf('<ul class="sub-btn2"', productStart);
  const listRange = listStart === -1 ? null : findRenyiMatchingTagRange(htmlWithBackground, listStart, 'ul');

  if (!listRange) {
    return htmlWithBackground;
  }

  return `${htmlWithBackground.slice(0, listStart)}${renderRenyiHeaderProductMenuListHtml(locale)}${htmlWithBackground.slice(listRange.end)}`;
}

function patchRenyiHeaderJoinMenuBackgroundHtml(html: string) {
  return html.replace(
    /https?:\/\/(?:www|en|ru|es)\.ytxingye\.com\/wp-content\/uploads\/2022\/10\/jiaru\.jpg/g,
    RENYI_JOIN_MENU_BACKGROUND_IMAGE,
  );
}

function patchRenyiHeaderServiceMenuBackgroundHtml(html: string) {
  return html.replace(
    /background-image:\s*url\(\s*(?:https?:\/\/(?:www|en|ru|es)\.ytxingye\.com\/wp-content\/uploads\/2022\/10\/fueu\.jpg|\/legacy-assets\/ytxingye-12dmmw4\.jpg)\s*\);?/g,
    `background-image: linear-gradient(90deg, rgba(244, 244, 242, 0.96) 0%, rgba(244, 244, 242, 0.88) 28%, rgba(244, 244, 242, 0.54) 42%, rgba(244, 244, 242, 0.08) 60%, rgba(244, 244, 242, 0) 74%), url(${RENYI_SERVICE_MENU_BACKGROUND_IMAGE});`,
  );
}

function patchRenyiHeaderContactMenuBackgroundHtml(html: string) {
  return html.replace(
    /background-image:\s*url\(\s*https?:\/\/(?:www|en|ru|es)\.ytxingye\.com\/wp-content\/uploads\/2022\/10\/lianxi\.jpg\s*\);?/g,
    `background-image: ${RENYI_CONTACT_MENU_BACKGROUND_CSS};`,
  );
}

function patchRenyiHeaderMenuTextBoxHtml(
  html: string,
  className: string,
  pathname: string,
  copyByLocale: Record<RenyiLocale, { title: string; text: string; more: string }>,
  hrefPart: string,
) {
  const locale = getRenyiLocale(pathname);
  const itemStart = findRenyiHeaderMenuItemStart(html, className);
  const textBoxStart = itemStart === -1 ? -1 : html.indexOf('<div class="sub-txtbox">', itemStart);
  const textBoxOpenEnd = textBoxStart === -1 ? -1 : html.indexOf('>', textBoxStart) + 1;
  const textBoxRange = textBoxStart === -1 ? null : findRenyiMatchingTagRange(html, textBoxStart, 'div');

  if (!textBoxRange || textBoxOpenEnd <= textBoxStart) {
    return html;
  }

  const copy = copyByLocale[locale];
  const href = escapeHtmlAttribute(withRenyiLocalePath(hrefPart, locale));
  const contents = `<h3>${escapeHtmlText(copy.title)}</h3> <p>${escapeHtmlText(copy.text)}</p> <a href="${href}">${escapeHtmlText(copy.more)}<i class="ifa ifa-arrow-right-bold"></i></a>`;

  return `${html.slice(0, textBoxOpenEnd)} ${contents} ${html.slice(textBoxRange.start)}`;
}

function patchRenyiHeaderServiceMenuTextHtml(html: string, pathname: string) {
  return patchRenyiHeaderMenuTextBoxHtml(html, 'm-3 has-sub', pathname, RENYI_SERVICE_MENU_COPY, '/fuwuzhichi/');
}

function patchRenyiHeaderJoinMenuTextHtml(html: string, pathname: string) {
  return patchRenyiHeaderMenuTextBoxHtml(html, 'm-4 has-sub', pathname, RENYI_JOIN_MENU_COPY, '/jiaruwomen/');
}

function patchRenyiHeaderContactMenuTextHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const contactStart = findRenyiHeaderContactStart(html);
  const textBoxStart = contactStart === -1 ? -1 : html.indexOf('<div class="sub-txtbox">', contactStart);
  const textBoxOpenEnd = textBoxStart === -1 ? -1 : html.indexOf('>', textBoxStart) + 1;
  const textBoxRange = textBoxStart === -1 ? null : findRenyiMatchingTagRange(html, textBoxStart, 'div');

  if (!textBoxRange || textBoxOpenEnd <= textBoxStart) {
    return html;
  }

  const copy = RENYI_CONTACT_MENU_COPY[locale];
  const href = escapeHtmlAttribute(withRenyiLocalePath('/lianxiwomen/', locale));
  const contents = `<h3>${escapeHtmlText(copy.title)}</h3> <p>${escapeHtmlText(copy.text)}</p> <a href="${href}">${escapeHtmlText(copy.more)}<i class="ifa ifa-arrow-right-bold"></i></a>`;

  return `${html.slice(0, textBoxOpenEnd)} ${contents} ${html.slice(textBoxRange.start)}`;
}

function renderRenyiQuickNavQrHtml(locale: RenyiLocale) {
  const label = 'WhatsApp';
  const alt = renyiLocalizedText(
    '长沙仁毅 WhatsApp 联系二维码',
    'Changsha Renyi WhatsApp contact QR code',
    'QR-код WhatsApp для связи с Changsha Renyi',
    'Código QR de contacto de WhatsApp de Changsha Renyi',
  )[locale];

  return `<div class="txt03"> <img class="img-w" src="${RENYI_WHATSAPP_QR_IMAGE}" alt="${escapeHtmlAttribute(
    alt,
  )}" title="${escapeHtmlAttribute(alt)}"> <p>${escapeHtmlText(label)}</p> </div>`;
}

function renderRenyiQuickNavBodyHtml(locale: RenyiLocale) {
  const copy = RENYI_QUICK_NAV_COPY[locale];
  const itemsHtml = copy.items
    .map(
      (item) =>
        `<strong><a href="${escapeHtmlAttribute(withRenyiLocalePath(item.href, locale))}">${escapeHtmlText(
          item.title,
        )}</a></strong> <p>${escapeHtmlText(item.text)}</p>`,
    )
    .join(' ');
  const contactHtml = `<div class="txt02"> <strong>${escapeHtmlText(copy.contactTitle)}</strong> <p>${copy.contactLines
    .map(escapeHtmlText)
    .join('<br>')}</p> </div>`;

  return `<div class="txt01"> ${itemsHtml} </div> ${contactHtml} ${renderRenyiQuickNavQrHtml(locale)}`;
}

function patchRenyiQuickNavHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const withTitle = html.replace(
    /(<strong class="right-win-title">)[\s\S]*?(<\/strong>)/,
    `$1${escapeHtmlText(RENYI_QUICK_NAV_TITLES[locale])}$2`,
  );
  const bodyStart = withTitle.indexOf('<div class="right-win-body">');
  const bodyOpenEnd = bodyStart === -1 ? -1 : withTitle.indexOf('>', bodyStart) + 1;
  const bodyRange = bodyStart === -1 ? null : findRenyiMatchingTagRange(withTitle, bodyStart, 'div');

  if (!bodyRange || bodyOpenEnd <= bodyStart) {
    return withTitle;
  }

  const contents = renderRenyiQuickNavBodyHtml(locale);

  return `${withTitle.slice(0, bodyOpenEnd)} ${contents} ${withTitle.slice(bodyRange.start)}`;
}

const RENYI_JOIN_PAGE_PATHS = new Set(['/jiaruwomen/', '/en/jiaruwomen/', '/ru/jiaruwomen/', '/es/jiaruwomen/']);

const RENYI_JOIN_PAGE_BANNER_COPY: Record<RenyiLocale, { title: string; headline: string; subtitle?: string }> = {
  zh: {
    title: '加入',
    headline: '精铸基石，智联全球',
    subtitle: 'Precision Forges Foundations, Intelligence Connects the World',
  },
  en: {
    title: 'JOIN',
    headline: 'Precision Forges Foundations, Intelligence Connects the World',
  },
  ru: {
    title: 'ПРИСОЕДИНИТЬСЯ',
    headline: 'Точность создает основу, интеллект соединяет мир',
  },
  es: {
    title: 'ÚNETE',
    headline: 'Precisión que forja bases, inteligencia que conecta el mundo',
  },
};

const RENYI_JOIN_TALENT_CONCEPT_COPY: Record<RenyiLocale, string> = {
  zh: '仁毅坚持以人为本，重视每一位员工的成长与价值实现，通过完善岗位培训、技能提升和发展通道，不断夯实专业制造与服务能力，让员工在精益生产、可靠交付中成长成才，与企业携手共进、共享成果。',
  en: 'Renyi is people-oriented and values the growth of every employee. Through job training, skill development, and clear career paths, we strengthen professional manufacturing and service capabilities, helping employees grow through lean production and reliable delivery while sharing progress with the company.',
  ru: 'Renyi придерживается принципа ориентации на людей и ценит рост каждого сотрудника. Через обучение, развитие навыков и карьерные возможности мы укрепляем производственные и сервисные компетенции, помогая сотрудникам расти вместе с компанией.',
  es: 'Renyi mantiene una orientación centrada en las personas y valora el crecimiento de cada empleado. Mediante formación laboral, desarrollo de habilidades y canales de promoción, fortalecemos la fabricación profesional y el servicio para crecer junto con el equipo.',
};

const RENYI_JOIN_TRAINING_MODE_ALT: Record<RenyiLocale, string> = {
  zh: '仁毅机械车间技术培训，员工围绕液压油缸和精密零部件交流工艺',
  en: 'Renyi workshop skills training with technicians discussing hydraulic cylinders and precision components',
  ru: 'Обучение сотрудников Renyi в цехе с обсуждением гидроцилиндров и точных деталей',
  es: 'Formación técnica en el taller de Renyi con empleados revisando cilindros hidráulicos y componentes de precisión',
};

const RENYI_JOIN_PRODUCTION_PRACTICE_COPY: Record<RenyiLocale, { title: string; text: string }> = {
  zh: {
    title: '规范的生产实践',
    text: '围绕天井钻机、特种油缸及结构件制造，在生产、装配、检测一线积累经验，强化质量意识、安全意识和可靠交付能力。',
  },
  en: {
    title: 'Standardized Production Practice',
    text: 'Employees build experience on the front line of raise boring machinery, special hydraulic cylinders, structural fabrication, assembly and inspection, strengthening quality, safety and delivery awareness.',
  },
  ru: {
    title: 'Стандартизированная производственная практика',
    text: 'Сотрудники получают опыт в производстве, сборке и контроле оборудования, гидроцилиндров и металлоконструкций, укрепляя культуру качества, безопасности и надежной поставки.',
  },
  es: {
    title: 'Práctica de producción estandarizada',
    text: 'El equipo adquiere experiencia en fabricación, montaje e inspección de equipos raise boring, cilindros hidráulicos y estructuras, reforzando calidad, seguridad y entrega confiable.',
  },
};

const RENYI_JOIN_PRODUCTION_PRACTICE_ALT: Record<RenyiLocale, string> = {
  zh: '仁毅机械员工在车间进行大型液压油缸装配和质量检查',
  en: 'Renyi employees assembling and inspecting a large hydraulic cylinder in the workshop',
  ru: 'Сотрудники Renyi собирают и проверяют крупный гидроцилиндр в цехе',
  es: 'Empleados de Renyi montando e inspeccionando un gran cilindro hidráulico en el taller',
};

export function getRenyiJoinPageBannerTextHtml(pathname: string) {
  const copy = RENYI_JOIN_PAGE_BANNER_COPY[getRenyiLocale(pathname)];
  const subtitle = copy.subtitle ? ` <div class="txt2">${escapeHtmlText(copy.subtitle)}</div>` : '';

  return `<div class="tit">${escapeHtmlText(copy.title)}</div> <div class="txt1">${escapeHtmlText(copy.headline)}</div>${subtitle}`;
}

function patchRenyiJoinPageBannerHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (!RENYI_JOIN_PAGE_PATHS.has(normalizedPath)) {
    return html;
  }

  const locale = getRenyiLocale(normalizedPath);

  const bannerHtml = html.replace(
    /<div class="page-banner"\s+style="background-image:\s*url\([^)]+\);?">/,
    `<div class="page-banner renyi-join-page-banner renyi-join-page-banner--${locale}" style="background-image: url(${RENYI_JOIN_PAGE_BANNER_IMAGE}); background-position: center center; background-size: 100% 100%; background-repeat: no-repeat;">`,
  );
  const bannerStart = bannerHtml.indexOf('<div class="page-banner');
  const titleBoxStart = bannerStart === -1 ? -1 : bannerHtml.indexOf('<div class="banner-tit-box">', bannerStart);
  const titleBoxOpenEnd = titleBoxStart === -1 ? -1 : bannerHtml.indexOf('>', titleBoxStart) + 1;
  const titleBoxRange = titleBoxStart === -1 ? null : findRenyiMatchingTagRange(bannerHtml, titleBoxStart, 'div');

  if (!titleBoxRange || titleBoxOpenEnd <= titleBoxStart) {
    return bannerHtml;
  }

  return `${bannerHtml.slice(0, titleBoxOpenEnd)} ${getRenyiJoinPageBannerTextHtml(normalizedPath)} ${bannerHtml.slice(titleBoxRange.start)}`;
}

function patchRenyiJoinTalentConceptHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (!RENYI_JOIN_PAGE_PATHS.has(normalizedPath)) {
    return html;
  }

  const sectionStart = html.indexOf('<section class="job01');
  const paragraphMatch = sectionStart === -1 ? null : /<p class="mb30">[\s\S]*?<\/p>/.exec(html.slice(sectionStart));

  if (!paragraphMatch) {
    return html;
  }

  const paragraphStart = sectionStart + paragraphMatch.index;
  const paragraphEnd = paragraphStart + paragraphMatch[0].length;
  const copy = RENYI_JOIN_TALENT_CONCEPT_COPY[getRenyiLocale(normalizedPath)];
  const paragraphHtml = `<p class="mb30">${escapeHtmlText(copy)}</p>`;

  return `${html.slice(0, paragraphStart)}${paragraphHtml}${html.slice(paragraphEnd)}`;
}

function patchRenyiJoinTrainingModeImageHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (!RENYI_JOIN_PAGE_PATHS.has(normalizedPath)) {
    return html;
  }

  const sectionStart = html.indexOf('<section class="job01');
  const imageMatch = sectionStart === -1 ? null : /<img class="img-w imgshow"[^>]*>/.exec(html.slice(sectionStart));

  if (!imageMatch) {
    return html;
  }

  const imageStart = sectionStart + imageMatch.index;
  const imageEnd = imageStart + imageMatch[0].length;
  const alt = RENYI_JOIN_TRAINING_MODE_ALT[getRenyiLocale(normalizedPath)];
  const imageHtml = `<img class="img-w imgshow" src="${escapeHtmlAttribute(RENYI_JOIN_TRAINING_MODE_IMAGE)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy">`;

  return `${html.slice(0, imageStart)}${imageHtml}${html.slice(imageEnd)}`;
}

function renderRenyiJoinProductionPracticeImageHtml(locale: RenyiLocale) {
  const alt = RENYI_JOIN_PRODUCTION_PRACTICE_ALT[locale];

  return `<img class="img-w imgshow" src="${escapeHtmlAttribute(RENYI_JOIN_PRODUCTION_PRACTICE_IMAGE)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy">`;
}

function patchRenyiJoinProductionPracticeTextCardHtml(cardHtml: string, locale: RenyiLocale) {
  const copy = RENYI_JOIN_PRODUCTION_PRACTICE_COPY[locale];

  return cardHtml
    .replace(/<strong>[\s\S]*?<\/strong>/, `<strong>${escapeHtmlText(copy.title)}</strong>`)
    .replace(/<p>[\s\S]*?<\/p>/, `<p>${escapeHtmlText(copy.text)}</p>`);
}

function patchRenyiJoinProductionPracticeCardHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (!RENYI_JOIN_PAGE_PATHS.has(normalizedPath)) {
    return html;
  }

  const sectionStart = html.indexOf('<section class="job01');
  const sectionRange = sectionStart === -1 ? null : findRenyiMatchingTagRange(html, sectionStart, 'section');

  if (!sectionRange) {
    return html;
  }

  const itemRanges: Array<{ start: number; end: number; hasText: boolean }> = [];
  const itemPattern = /<div class="job01-item img-hover">/g;
  itemPattern.lastIndex = sectionStart;
  let itemMatch: RegExpExecArray | null;

  while ((itemMatch = itemPattern.exec(html)) && itemMatch.index < sectionRange.end) {
    const itemCloseRange = findRenyiMatchingTagRange(html, itemMatch.index, 'div');

    if (!itemCloseRange || itemCloseRange.end > sectionRange.end) {
      break;
    }

    const itemRange = { start: itemMatch.index, end: itemCloseRange.end };
    const hasText = html.slice(itemRange.start, itemRange.end).includes('job01-item-txt');

    itemRanges.push({ ...itemRange, hasText });

    itemPattern.lastIndex = itemRange.end;
  }

  const imageCardRange = itemRanges.find((itemRange) => !itemRange.hasText);
  const textCardRange = itemRanges.filter((itemRange) => itemRange.hasText).at(-1);

  if (!imageCardRange || !textCardRange) {
    return html;
  }

  const locale = getRenyiLocale(normalizedPath);
  const imageCardHtml = html
    .slice(imageCardRange.start, imageCardRange.end)
    .replace(/<img class="img-w imgshow"[^>]*>/, renderRenyiJoinProductionPracticeImageHtml(locale));
  const withImage = `${html.slice(0, imageCardRange.start)}${imageCardHtml}${html.slice(imageCardRange.end)}`;
  const delta = imageCardHtml.length - (imageCardRange.end - imageCardRange.start);
  const adjustedTextCardRange =
    textCardRange.start > imageCardRange.start
      ? { start: textCardRange.start + delta, end: textCardRange.end + delta }
      : textCardRange;
  const textCardHtml = patchRenyiJoinProductionPracticeTextCardHtml(
    withImage.slice(adjustedTextCardRange.start, adjustedTextCardRange.end),
    locale,
  );

  return `${withImage.slice(0, adjustedTextCardRange.start)}${textCardHtml}${withImage.slice(adjustedTextCardRange.end)}`;
}

type RenyiRecruitmentJob = {
  position: string;
  major: string;
  count: string;
  age: string;
  education: string;
  date: string;
  detail: string;
};

const RENYI_RECRUITMENT_JOBS_ZH: RenyiRecruitmentJob[] = [
  {
    position: '机械设计主管工程师',
    major: '机械（电）类',
    count: '3',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail:
      '1. 3年以上同行业工作经历，具备本岗位同等水平要求的综合素质、制图能力、专业技术知识及实际应用能力；2. 能独立承担总成及简单产品结构件的整机设计、调试和应用，具备较全面的机加、铆焊、装配工艺能力及一定的液压、电气、控制系统知识。',
  },
  {
    position: '实习技术员',
    major: '机械（电）类',
    count: '10',
    age: '30周岁以下',
    education: '本科（不限）',
    date: '长期招聘',
    detail: '本科及以上学历，应届毕业生可培养，熟练运用 SolidWorks 三维制图软件。',
  },
  {
    position: '工艺技术员',
    major: '机械（电）类',
    count: '2',
    age: '45周岁以下',
    education: '本科（不限）',
    date: '长期招聘',
    detail: '懂机加、钣金、焊接等工艺者优先，应届生可培养。',
  },
  {
    position: '电焊工',
    major: '不限',
    count: '20',
    age: '45周岁以下',
    education: '中专及以上（不限）',
    date: '长期招聘',
    detail: '熟练工优先，会气保焊，能看懂图纸，吃苦耐劳。',
  },
  {
    position: '装配钳工',
    major: '不限',
    count: '10',
    age: '45周岁以下',
    education: '中专及以上（不限）',
    date: '长期招聘',
    detail: '有装配钳工基础，熟练工优先。',
  },
  {
    position: '软件工程师',
    major: '机械（电）类',
    count: '1',
    age: '45周岁以下',
    education: '本科（不限）',
    date: '长期招聘',
    detail:
      '1. 本科及以上学历，具备3-5年相关工作经验，能独立完成程序设计及架构工作；2. 有程序标准化设计经验，熟悉2-3种编程语言，会 CODESYS 编程者优先。',
  },
  {
    position: '液压工程师',
    major: '机械（电）类',
    count: '1',
    age: '45周岁以下',
    education: '本科（不限）',
    date: '长期招聘',
    detail:
      '1. 本科及以上学历，具备3-5年液压设计经验，能独立完成液压系统设计计算；2. 熟悉常用液压元件的使用及液压阀块设计。',
  },
  {
    position: '电气工程师',
    major: '电气化专业',
    count: '1',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail:
      '1. 大专及以上学历，具备3-5年相关经验，能独立完成电气设计工作，熟悉常用电器元件及电子成品；2. 要求有强电操作证，懂电气设计安装工艺及标准化。',
  },
  {
    position: '机械设计项目工程师',
    major: '机械（电）类',
    count: '2',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail:
      '1. 6年以上同行业工作经历，具备较强制图能力、专业技术知识及实际应用能力；2. 能独立完成系列单元产品及高难度产品设计，具备电气、液压、控制系统基础；3. 具备产品规划、优化、制造和成本控制能力。',
  },
  {
    position: '机修工',
    major: '机械（电）类',
    count: '1',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail: '2-3年机械维修工作经验，擅长车床、行车等设备维修保养，具备通用设备维修保养经验者优先。',
  },
  {
    position: '机加工艺工程师',
    major: '机械（电）类',
    count: '2',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail: '1. 两年以上机加工艺工程师工作经验；2. 熟练使用三维制图软件。',
  },
  {
    position: '机械设计助理工程师',
    major: '机械（电）类',
    count: '2',
    age: '30周岁以下',
    education: '本科（不限）',
    date: '长期招聘',
    detail:
      '1. 本科及以上学历（全日制），机械（电）类相关专业毕业；2. 2年以上同行业工作经历，具备制图能力、专业技术知识及实际应用能力；3. 能独立承担部件设计，并能在指导下完成总成设计任务。',
  },
  {
    position: '采购工程师',
    major: '机械（电）类',
    count: '1',
    age: '45周岁以下',
    education: '大专（不限）',
    date: '长期招聘',
    detail:
      '1. 大专以上学历，机械类相关专业毕业；2. 5年以上企业采购工作经验，有一定电器、液压、机加技术背景；3. 能组织供应商评审，主持过物料采购招标全过程者优先。',
  },
];

const RENYI_RECRUITMENT_POSITION_TRANSLATIONS: Record<Exclude<RenyiLocale, 'zh'>, Record<string, string>> = {
  en: {
    机械设计主管工程师: 'Lead Mechanical Design Engineer',
    实习技术员: 'Trainee Technician',
    工艺技术员: 'Process Technician',
    电焊工: 'Welder',
    装配钳工: 'Assembly Fitter',
    软件工程师: 'Software Engineer',
    液压工程师: 'Hydraulic Engineer',
    电气工程师: 'Electrical Engineer',
    机械设计项目工程师: 'Mechanical Design Project Engineer',
    机修工: 'Maintenance Mechanic',
    机加工艺工程师: 'Machining Process Engineer',
    机械设计助理工程师: 'Assistant Mechanical Design Engineer',
    采购工程师: 'Procurement Engineer',
  },
  ru: {},
  es: {},
};

function getRenyiRecruitmentJobs(locale: RenyiLocale) {
  if (locale === 'zh') {
    return RENYI_RECRUITMENT_JOBS_ZH;
  }

  const translations = RENYI_RECRUITMENT_POSITION_TRANSLATIONS[locale];

  return RENYI_RECRUITMENT_JOBS_ZH.map((job) => ({
    ...job,
    position: translations[job.position] ?? job.position,
    date: locale === 'en' ? 'Long-term' : job.date,
  }));
}

const RENYI_RECRUITMENT_COPY: Record<
  RenyiLocale,
  {
    sectionTitle: string;
    intro: string;
    columns: [string, string, string, string, string, string, string];
    requirementLabel: string;
  }
> = {
  zh: {
    sectionTitle: '招聘信息',
    intro: '公司长期招聘车工、镗工、焊工、装配工及研发、工艺、采购等岗位。招聘详情请联系：刘言 13907488783；陈志勇 137 8779 3512。',
    columns: ['岗位列表', '专业要求', '招聘人数', '年龄要求', '学历（性别）', '招聘状态', '查看详情'],
    requirementLabel: '详细要求',
  },
  en: {
    sectionTitle: 'Recruitment',
    intro:
      'Renyi is continuously recruiting machining, welding, assembly, engineering, process and procurement talent. For details, please contact our recruitment team.',
    columns: ['Position', 'Major', 'Openings', 'Age', 'Education', 'Status', 'Details'],
    requirementLabel: 'Requirements',
  },
  ru: {
    sectionTitle: 'Вакансии',
    intro: 'Renyi ведет постоянный набор специалистов по механообработке, сварке, сборке, инженерии, технологии и закупкам.',
    columns: ['Должность', 'Специальность', 'Кол-во', 'Возраст', 'Образование', 'Статус', 'Подробнее'],
    requirementLabel: 'Требования',
  },
  es: {
    sectionTitle: 'Contratación',
    intro: 'Renyi mantiene contratación continua para mecanizado, soldadura, montaje, ingeniería, procesos y compras.',
    columns: ['Puesto', 'Especialidad', 'Vacantes', 'Edad', 'Educación', 'Estado', 'Detalles'],
    requirementLabel: 'Requisitos',
  },
};

function renderRenyiRecruitmentRows(locale: RenyiLocale) {
  const copy = RENYI_RECRUITMENT_COPY[locale];

  return getRenyiRecruitmentJobs(locale)
    .map((job) => {
      return [
        '<tr class="text-center">',
        `<td>${escapeHtmlText(job.position)}</td>`,
        `<td>${escapeHtmlText(job.major)}</td>`,
        `<td>${escapeHtmlText(job.count)}</td>`,
        `<td>${escapeHtmlText(job.age)}</td>`,
        `<td>${escapeHtmlText(job.education)}</td>`,
        `<td>${escapeHtmlText(job.date)}</td>`,
        '<td><a class="job-btn" href="javascript:;"><i class="ifa ifa-add-bold"></i><i class="ifa ifa-minus-bold"></i></a></td>',
        '</tr>',
        '<tr class="job-show ">',
        '<td colspan="7">',
        '<div class="txtbox">',
        `<strong>${escapeHtmlText(copy.requirementLabel)}：</strong>`,
        `<div class="mb30"><p>${escapeHtmlText(job.detail)}</p></div>`,
        '</div>',
        '</td>',
        '</tr>',
      ].join(' ');
    })
    .join(' ');
}

function renderRenyiRecruitmentSectionHtml(locale: RenyiLocale) {
  const copy = RENYI_RECRUITMENT_COPY[locale];
  const [position, major, count, age, education, date, detail] = copy.columns.map(escapeHtmlText);

  return [
    '<section class="job02 wow fadeInUp">',
    '<div class="container">',
    '<div class="page-tit-box">',
    `<h3 class="tit mb20">${escapeHtmlText(copy.sectionTitle)}</h3>`,
    '</div>',
    `<p class="renyi-recruitment-intro">${escapeHtmlText(copy.intro)}</p>`,
    '<div class="table-responsive">',
    '<table class="table job-table ">',
    '<thead>',
    '<tr>',
    `<th class="text-center">${position}</th>`,
    `<th width="150" class="text-center">${major}</th>`,
    `<th width="110" class="text-center">${count}</th>`,
    `<th width="140" class="text-center">${age}</th>`,
    `<th width="150" class="text-center">${education}</th>`,
    `<th width="130" class="text-center">${date}</th>`,
    `<th width="110" class="text-center">${detail}</th>`,
    '</tr>',
    '</thead>',
    '<tbody>',
    renderRenyiRecruitmentRows(locale),
    '</tbody>',
    '</table>',
    '</div>',
    '</div>',
    '</section>',
  ].join(' ');
}

export function patchRenyiJoinRecruitmentHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (!RENYI_JOIN_PAGE_PATHS.has(normalizedPath)) {
    return html;
  }

  const sectionMatch = /<section class="job02\b[^"]*"[^>]*>/.exec(html);
  const sectionStart = sectionMatch?.index ?? -1;
  const sectionRange = sectionStart === -1 ? null : findRenyiMatchingTagRange(html, sectionStart, 'section');

  if (!sectionRange) {
    return html;
  }

  return `${html.slice(0, sectionStart)}${renderRenyiRecruitmentSectionHtml(getRenyiLocale(normalizedPath))}${html.slice(sectionRange.end)}`;
}

function getRenyiProductMenuMoreLinkHtml(locale: RenyiLocale) {
  const labels: Record<RenyiLocale, string> = {
    zh: '查看更多',
    en: 'More',
    ru: 'Подробнее',
    es: 'Ver más',
  };
  const label = labels[locale];

  return `<a href="${escapeHtmlAttribute(withRenyiLocalePath('/chanpinzhanshi/', locale))}">${escapeHtmlText(label)}<i class="ifa ifa-arrow-right-bold"></i></a>`;
}

function patchRenyiHeaderProductMenuTextHtml(html: string, pathname: string) {
  const locale = getRenyiLocale(pathname);
  const productStart = findRenyiHeaderProductStart(html);
  const textBoxStart = productStart === -1 ? -1 : html.indexOf('<div class="sub-txtbox">', productStart);
  const textBoxOpenEnd = textBoxStart === -1 ? -1 : html.indexOf('>', textBoxStart) + 1;
  const textBoxRange = textBoxStart === -1 ? null : findRenyiMatchingTagRange(html, textBoxStart, 'div');

  if (!textBoxRange || textBoxOpenEnd <= textBoxStart) {
    return html;
  }

  const copy = RENYI_PRODUCT_MENU_COPY[locale];
  const contents = `<h3>${escapeHtmlText(copy.title)}</h3> <p>${escapeHtmlText(copy.text)}</p> ${getRenyiProductMenuMoreLinkHtml(locale)}`;

  return `${html.slice(0, textBoxOpenEnd)} ${contents} ${html.slice(textBoxRange.start)}`;
}

function patchRenyiHeaderMenuNativeTooltipHtml(html: string) {
  const menuStart = html.indexOf('<ul class="menu">');
  const menuRange = menuStart === -1 ? null : findRenyiMatchingTagRange(html, menuStart, 'ul');

  if (!menuRange) {
    return html;
  }

  const menuHtml = html.slice(menuStart, menuRange.end).replace(/\s+title="[^"]*"|\s+title='[^']*'/g, '');

  return `${html.slice(0, menuStart)}${menuHtml}${html.slice(menuRange.end)}`;
}

function removeRenyiListItemByHref(html: string, hrefPart: string) {
  let nextHtml = html;
  let searchStart = 0;

  while (searchStart < nextHtml.length) {
    const hrefIndex = nextHtml.indexOf(hrefPart, searchStart);

    if (hrefIndex === -1) {
      break;
    }

    const liStart = nextHtml.lastIndexOf('<li', hrefIndex);
    const previousLiClose = nextHtml.lastIndexOf('</li>', hrefIndex);

    if (liStart === -1 || previousLiClose > liStart) {
      searchStart = hrefIndex + hrefPart.length;
      continue;
    }

    const range = findRenyiMatchingTagRange(nextHtml, liStart, 'li');

    if (!range) {
      searchStart = hrefIndex + hrefPart.length;
      continue;
    }

    nextHtml = `${nextHtml.slice(0, liStart)}${nextHtml.slice(range.end)}`;
    searchStart = liStart;
  }

  return nextHtml;
}

function patchRenyiRemoveSparePartsSeriesHtml(html: string) {
  return removeRenyiListItemByHref(html, RENYI_SPARE_PARTS_SERIES_HREF);
}

function patchRenyiShortPathAliasLinksHtml(html: string, pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);
  const templatePath = RENYI_SHORT_PATH_TEMPLATE_ALIASES[normalizedPath];

  if (!templatePath) {
    return html;
  }

  const replacements: Array<[string, string]> = [
    [templatePath, normalizedPath],
    [trimRenyiInternalPath(templatePath), trimRenyiInternalPath(normalizedPath)],
  ];

  return replacements.reduce((contents, [source, replacement]) => {
    const pattern = new RegExp(`\\b(href|action)=(["'])${escapeRegExp(source)}\\2`, 'g');

    return contents.replace(pattern, `$1=$2${replacement}$2`);
  }, html);
}

export function patchRenyiHtml(html: string, pathname: string) {
  let patchedHtml = html.replaceAll('https://www.ytxingye.com/banner.mp4', RENYI_PROMO_VIDEO_PATH);
  patchedHtml = patchedHtml
    .replaceAll(
      'https://www.ytxingye.com/wp-content/themes/phoenix/static/images/banner-0.png',
      RENYI_PROMO_VIDEO_POSTER_IMAGE,
    )
    .replaceAll(
      'https://www.ytxingye.com/wp-content/themes/phoenix/static/images/banner-1.png',
      RENYI_PROMO_VIDEO_POSTER_IMAGE,
    );

  patchedHtml = patchRenyiVideoFallbackHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiAboutMenuBackgroundHtml(patchedHtml);
  patchedHtml = patchRenyiPageBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiRaiseBoringSampleInnerLinkHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiRaiseBoringCategoryBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiRaiseBoringTrialProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHydraulicProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHydraulicCategoryHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiMineralProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiMineralCategoryHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiSpecialEquipmentProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiSpecialEquipmentCategoryHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiStructuralCategoryHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiStructuralProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiProductInquiryLinksHtml(patchedHtml);
  patchedHtml = patchRenyiNewsBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiServiceQualityHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiNewsPageHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderHomeMenuHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderTopNavHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderLanguageLabelHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderAboutMenuTextHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderProductMenuHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderProductMenuTextHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderServiceMenuBackgroundHtml(patchedHtml);
  patchedHtml = patchRenyiHeaderServiceMenuTextHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderJoinMenuBackgroundHtml(patchedHtml);
  patchedHtml = patchRenyiHeaderJoinMenuTextHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHeaderContactMenuBackgroundHtml(patchedHtml);
  patchedHtml = patchRenyiHeaderContactMenuTextHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiQuickNavHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiContactPageBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiContactPageHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiLegacyCaptchaHtml(patchedHtml);
  patchedHtml = patchRenyiWhatsappFormActionHtml(patchedHtml);
  patchedHtml = patchRenyiJoinPageBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiJoinTalentConceptHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiJoinTrainingModeImageHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiJoinProductionPracticeCardHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiJoinRecruitmentHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiRemoveSparePartsSeriesHtml(patchedHtml);
  patchedHtml = patchRenyiLogoHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiCultureBannerHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiFooterContactsHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiFooterProductHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiFooterMenuHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiFooterQrHtml(patchedHtml);
  patchedHtml = patchRenyiFooterLegalRecordsHtml(patchedHtml);
  patchedHtml = patchRenyiRemoveSparePartsSeriesHtml(patchedHtml);
  patchedHtml = patchRenyiAboutHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiLegalFooterLinksHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiLegalPageHtml(patchedHtml, pathname);
  patchedHtml = patchRenyiHomeHtml(patchedHtml, pathname);

  const localizedHtml = RENYI_TEXT_REPLACEMENTS.reduce(
    (contents, [source, replacement]) => contents.replaceAll(source, replacement),
    patchedHtml,
  );
  const productSeriesHtml = patchRenyiProductSeriesCardLabelsHtml(localizedHtml, pathname);
  const shortPathHtml = patchRenyiShortPathAliasLinksHtml(productSeriesHtml, pathname);
  const localAssetHtml = localizeRenyiLegacyAssetUrlsHtml(shortPathHtml);
  const seoH1Html = patchRenyiSeoH1Html(localAssetHtml, pathname);

  return patchRenyiImageAltHtml(patchRenyiInternalNewsPathsHtml(patchRenyiHeaderMenuNativeTooltipHtml(seoH1Html)), pathname);
}

function patchRenyiTitle(title: string) {
  return RENYI_TEXT_REPLACEMENTS.reduce(
    (contents, [source, replacement]) => contents.replaceAll(source, replacement),
    title,
  );
}

function getRenyiCanonicalPathname(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);
  const canonicalPath = getRenyiCanonicalNewsPath(normalizedPath) ?? getRenyiLegacyPathAlias(normalizedPath) ?? normalizedPath;

  return normalizeSitePath(canonicalPath);
}

function getRenyiBareLocalePath(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  return normalizeSitePath(normalizedPath.replace(/^\/(?:en|ru|es)(?=\/|$)/, '') || '/');
}

function getRenyiAbsoluteUrl(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);
  const publicPath = normalizedPath === '/' ? normalizedPath : normalizedPath.replace(/\/$/, '');

  return `${RENYI_SITE_ORIGIN}${publicPath}`;
}

function getRenyiAlternateLinks(pathname: string) {
  const barePath = getRenyiBareLocalePath(pathname);
  const alternates = RENYI_LOCALES.flatMap((locale) => {
    const localizedPath = withRenyiLocalePath(barePath, locale);
    const page = getSitePage(localizedPath);

    return page
      ? [
          {
            hrefLang: RENYI_HTML_LANGS[locale],
            href: getRenyiAbsoluteUrl(localizedPath),
          },
        ]
      : [];
  });
  const defaultPath = withRenyiLocalePath(barePath, 'zh');

  return [
    ...alternates,
    {
      hrefLang: 'x-default',
      href: getRenyiAbsoluteUrl(defaultPath),
    },
  ];
}

function cleanRenyiTitleForSeo(title: string) {
  return title
    .replace(/\s*\|\s*/g, ' - ')
    .replace(/\s+-\s+-\s*/g, ' - ')
    .replace(/\s+/g, ' ')
    .replace(/\s+-\s*$/g, '')
    .trim();
}

function getRenyiSeoHeading(title: string, locale: RenyiLocale) {
  const companyNames = new Set([...Object.values(RENYI_COMPANY_NAMES), RENYI_COMPANY_NAME, '长沙仁毅机械有限公司']);
  let heading = cleanRenyiTitleForSeo(title);

  for (const companyName of companyNames) {
    heading = heading
      .replace(new RegExp(`\\s+-\\s+${escapeRegExp(companyName)}\\s*$`), '')
      .replace(new RegExp(`^${escapeRegExp(companyName)}\\s+-\\s+`), '')
      .replace(new RegExp(`\\s+-\\s+${escapeRegExp(companyName)}\\s+-\\s+官网\\s*$`), '')
      .trim();
  }

  heading = heading.replace(/\s+-\s+官网$/g, '').trim();

  return heading || RENYI_COMPANY_NAMES[locale];
}

function getRenyiSeoPageType(pathname: string) {
  const barePath = getRenyiBareLocalePath(pathname);

  if (barePath === '/') {
    return 'home';
  }

  if (barePath.startsWith('/pro/') || /\/(?:zuanji|yougang|xuanji|jiegou|zhuanyong)-/.test(barePath)) {
    return 'product';
  }

  if (barePath.startsWith('/pro_category/') || /\/(?:zuanjixilie|yougangxuangua|fuxuanjixilie|jiegouxilie|zhuanyongxilie)\//.test(barePath)) {
    return 'category';
  }

  if (barePath.startsWith('/category/') || barePath.startsWith('/xinwenzhongxin/')) {
    return 'news';
  }

  return 'page';
}

function getRenyiMetaDescription(pathname: string, title: string, locale: RenyiLocale) {
  const heading = getRenyiSeoHeading(title, locale);
  const pageType = getRenyiSeoPageType(pathname);
  const company = RENYI_COMPANY_NAMES[locale];

  if (locale === 'en') {
    if (pageType === 'home') {
      return `${company} manufactures raise boring machinery, hydraulic cylinders, structural components, mineral processing equipment, and dedicated solutions for demanding mining and engineering worksites.`;
    }

    if (pageType === 'product') {
      return `${heading} from ${company}. Review product capabilities, key parameters, applications, and delivery support for mining and engineering machinery projects.`;
    }

    if (pageType === 'category') {
      return `${heading} product solutions from ${company}, covering equipment features, application scenarios, configurations, and reliable delivery for industrial projects.`;
    }

    if (pageType === 'news') {
      return `${heading} from ${company}, with company updates, technical records, certifications, and industry information for mining and engineering equipment customers.`;
    }

    return `${heading} at ${company}, introducing manufacturing capabilities, quality control, service support, and cooperation information for global industrial customers.`;
  }

  if (locale === 'ru') {
    if (pageType === 'home') {
      return `${company} производит оборудование raise boring, гидроцилиндры, металлоконструкции, обогатительное и специальное оборудование для горных и инженерных объектов.`;
    }

    if (pageType === 'product') {
      return `${heading} от ${company}: возможности продукта, ключевые параметры, области применения и поддержка поставки для горной и инженерной техники.`;
    }

    if (pageType === 'category') {
      return `${heading}: решения ${company} по оборудованию, техническим особенностям, сценариям применения и надежной поставке для промышленных проектов.`;
    }

    if (pageType === 'news') {
      return `${heading}: новости, технические материалы, сертификаты и отраслевые сведения ${company} для заказчиков горного и инженерного оборудования.`;
    }

    return `${heading}: производственные возможности, контроль качества, сервисная поддержка и информация о сотрудничестве с ${company}.`;
  }

  if (locale === 'es') {
    if (pageType === 'home') {
      return `${company} fabrica equipos raise boring, cilindros hidráulicos, componentes estructurales, equipos de beneficio mineral y soluciones especiales para minería e ingeniería.`;
    }

    if (pageType === 'product') {
      return `${heading} de ${company}: capacidades del producto, parámetros clave, aplicaciones y soporte de entrega para maquinaria minera e ingeniería.`;
    }

    if (pageType === 'category') {
      return `${heading}: soluciones de ${company} con características técnicas, aplicaciones, configuraciones y entrega confiable para proyectos industriales.`;
    }

    if (pageType === 'news') {
      return `${heading}: noticias, registros técnicos, certificaciones e información industrial de ${company} para clientes de equipos mineros e ingeniería.`;
    }

    return `${heading}: capacidades de fabricación, control de calidad, soporte de servicio e información de cooperación de ${company}.`;
  }

  if (pageType === 'home') {
    return `${RENYI_COMPANY_NAME}专注天井钻机、特种油缸、结构件、选矿设备与矿山专用装备制造，提供研发设计、精密加工、质量检测和可靠交付支持。`;
  }

  if (pageType === 'product') {
    return `${heading}由${RENYI_COMPANY_NAME}提供，面向矿山与工程机械复杂工况，展示产品能力、核心参数、应用场景和定制交付支持。`;
  }

  if (pageType === 'category') {
    return `${heading}汇总${RENYI_COMPANY_NAME}相关产品与解决方案，覆盖技术特点、应用场景、关键配置和矿山工程项目交付能力。`;
  }

  if (pageType === 'news') {
    return `${heading}介绍${RENYI_COMPANY_NAME}企业动态、技术资料、资质证书与行业信息，服务矿山装备和工程机械客户选型参考。`;
  }

  return `${heading}介绍${RENYI_COMPANY_NAME}制造能力、质量检测、服务支持和合作信息，为矿山与工程机械客户提供可靠交付依据。`;
}

function patchRenyiSeoH1Html(html: string, pathname: string) {
  const metadata = getDocumentMetadata(pathname);
  const h1 = escapeHtmlText(metadata.h1);
  const demotedHtml = html.replace(/<h1\b([^>]*)>/gi, '<div$1 data-renyi-demoted-heading="h1">').replace(/<\/h1>/gi, '</div>');
  const h1Html = `<h1 class="renyi-seo-h1">${h1}</h1>`;

  if (demotedHtml.includes('renyi-seo-h1')) {
    return demotedHtml;
  }

  return demotedHtml.replace(/(<div class="page-root\b[^>]*>)/, `$1${h1Html}`);
}

export function normalizeSitePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const cleanPath = pathname.split('#')[0]?.split('?')[0] ?? '/';
  const normalized = cleanPath.replace(/\/+/g, '/');

  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

const RENYI_SHORT_PATH_TEMPLATE_ALIASES = {
  ...Object.fromEntries(
    [
      ['/zuanjixilie/', '/pro_category/chanyunjixilie/'],
      ['/zuanji-01/', '/pro/wj-06/'],
      ['/zuanji-02/', '/pro/wj-1/'],
      ['/zuanji-03/', '/pro/wj-15/'],
      ['/zuanji-04/', '/pro/wj-2/'],
      ['/zuanji-05/', '/pro/wj-25/'],
      ['/zuanji-06/', '/pro/wj-3/'],
      ['/yougangxuangua/', '/pro_category/yunkuangkache/'],
      ['/yougang-01/', '/pro_category/yunliaoche/'],
      ['/yougang-02/', '/pro_category/guandaoanzhuangche/'],
      ['/yougang-01-01/', '/pro/wj-06/'],
      ['/yougang-01-02/', '/pro/wj-06/'],
      ['/yougang-01-03/', '/pro/wj-06/'],
      ['/yougang-01-04/', '/pro/wj-06/'],
      ['/yougang-01-05/', '/pro/wj-06/'],
      ['/yougang-01-06/', '/pro/wj-06/'],
      ['/yougang-02-01/', '/pro/wj-06/'],
      ['/yougang-02-02/', '/pro/wj-06/'],
      ['/yougang-02-03/', '/pro/wj-06/'],
      ['/yougang-02-04/', '/pro/wj-06/'],
      ['/yougang-02-05/', '/pro/wj-06/'],
      ['/yougang-02-06/', '/pro/wj-06/'],
      ['/xuanji-01/', '/pro/wj-06/'],
      ['/jiegouxilie/', '/pro_category/zaoyantaiche/'],
      ['/jiegou-01/', '/pro_category/xianchanghunzhuangruhuazhayaoche/'],
      ['/jiegou-03/', '/pro_category/shengjiangpingtaiche/'],
      ['/jiegou-05/', '/pro_category/yunrenxilie/'],
      ['/zhuanyongxilie/', '/pro_category/dexiafuwuche/'],
      ['/zhuanyong-01/', '/pro/wj-06/'],
      ['/zhuanyong-02/', '/pro/wj-06/'],
      ['/zhuanyong-03/', '/pro_category/hunningtujiaobanche/'],
      ['/zhuanyong-04/', '/pro_category/youliaoyunshuche/'],
      ['/zhuanyong-05/', '/pro_category/yidongshisuishiji/'],
    ].flatMap(([shortPath, templatePath]) =>
      ['', '/en', '/ru', '/es'].map((prefix) => [`${prefix}${shortPath}`, `${prefix}${templatePath}`]),
    ),
  ),
  '/en/yougang-01/': '/en/pro_category/yunkuangkache/',
  '/ru/yougang-01/': '/ru/pro_category/yunkuangkache/',
  '/es/yougang-01/': '/es/pro_category/yunkuangkache/',
  '/en/yougang-02/': '/en/pro_category/yunkuangkache/',
  '/ru/yougang-02/': '/ru/pro_category/yunkuangkache/',
  '/es/yougang-02/': '/es/pro_category/yunkuangkache/',
  '/en/pro_category/yunliaoche/': '/en/pro_category/yunkuangkache/',
  '/ru/pro_category/yunliaoche/': '/ru/pro_category/yunkuangkache/',
  '/es/pro_category/yunliaoche/': '/es/pro_category/yunkuangkache/',
  '/en/pro_category/guandaoanzhuangche/': '/en/pro_category/yunkuangkache/',
  '/ru/pro_category/guandaoanzhuangche/': '/ru/pro_category/yunkuangkache/',
  '/es/pro_category/guandaoanzhuangche/': '/es/pro_category/yunkuangkache/',
  '/en/pro_category/dexiafuwuche/': '/pro_category/dexiafuwuche/',
  '/ru/pro_category/dexiafuwuche/': '/pro_category/dexiafuwuche/',
  '/es/pro_category/dexiafuwuche/': '/pro_category/dexiafuwuche/',
} as Record<string, string>;

const RENYI_NEWS_PATH_ALIASES: Record<string, string> = {
  '/xinwenzhongxin/renyixinwen/1018/': '/xinwenzhongxin/xingyexinwen/1426/',
  '/en/xinwenzhongxin/renyixinwen/1018/': '/en/xinwenzhongxin/xingyexinwen/676/',
  '/ru/xinwenzhongxin/renyixinwen/1018/': '/ru/xinwenzhongxin/xingyexinwen/332/',
  '/es/xinwenzhongxin/renyixinwen/1018/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1019/': '/xinwenzhongxin/xingyexinwen/1415/',
  '/en/xinwenzhongxin/renyixinwen/1019/': '/en/xinwenzhongxin/xingyexinwen/676/',
  '/ru/xinwenzhongxin/renyixinwen/1019/': '/ru/xinwenzhongxin/xingyexinwen/332/',
  '/es/xinwenzhongxin/renyixinwen/1019/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1020/': '/xinwenzhongxin/1373/',
  '/en/xinwenzhongxin/renyixinwen/1020/': '/en/xinwenzhongxin/xingyexinwen/676/',
  '/ru/xinwenzhongxin/renyixinwen/1020/': '/ru/xinwenzhongxin/xingyexinwen/332/',
  '/es/xinwenzhongxin/renyixinwen/1020/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1021/': '/xinwenzhongxin/1366/',
  '/en/xinwenzhongxin/renyixinwen/1021/': '/en/xinwenzhongxin/xingyexinwen/676/',
  '/ru/xinwenzhongxin/renyixinwen/1021/': '/ru/xinwenzhongxin/xingyexinwen/332/',
  '/es/xinwenzhongxin/renyixinwen/1021/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1022/': '/xinwenzhongxin/1364/',
  '/en/xinwenzhongxin/renyixinwen/1022/': '/en/xinwenzhongxin/xingyexinwen/755/',
  '/ru/xinwenzhongxin/renyixinwen/1022/': '/ru/xinwenzhongxin/xingyexinwen/328/',
  '/es/xinwenzhongxin/renyixinwen/1022/': '/es/xinwenzhongxin/xingyexinwen/329/',
  '/xinwenzhongxin/renyixinwen/1023/': '/uncategorized/1371/',
  '/en/xinwenzhongxin/renyixinwen/1023/': '/en/xinwenzhongxin/xingyexinwen/329/',
  '/ru/xinwenzhongxin/renyixinwen/1023/': '/ru/xinwenzhongxin/xingyexinwen/325/',
  '/es/xinwenzhongxin/renyixinwen/1023/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1024/': '/xinwenzhongxin/xingyexinwen/1359/',
  '/en/xinwenzhongxin/renyixinwen/1024/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1024/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1024/': '/es/xinwenzhongxin/xingyexinwen/331/',
  '/xinwenzhongxin/renyixinwen/1025/': '/xinwenzhongxin/776/',
  '/en/xinwenzhongxin/renyixinwen/1025/': '/en/xinwenzhongxin/xingyexinwen/331/',
  '/ru/xinwenzhongxin/renyixinwen/1025/': '/ru/xinwenzhongxin/xingyexinwen/331/',
  '/es/xinwenzhongxin/renyixinwen/1025/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1026/': '/xinwenzhongxin/749/',
  '/en/xinwenzhongxin/renyixinwen/1026/': '/en/xinwenzhongxin/xingyexinwen/332/',
  '/ru/xinwenzhongxin/renyixinwen/1026/': '/ru/xinwenzhongxin/xingyexinwen/330/',
  '/es/xinwenzhongxin/renyixinwen/1026/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1027/': '/xinwenzhongxin/744/',
  '/en/xinwenzhongxin/renyixinwen/1027/': '/en/xinwenzhongxin/xingyexinwen/332/',
  '/ru/xinwenzhongxin/renyixinwen/1027/': '/ru/xinwenzhongxin/xingyexinwen/330/',
  '/es/xinwenzhongxin/renyixinwen/1027/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1028/': '/xinwenzhongxin/740/',
  '/en/xinwenzhongxin/renyixinwen/1028/': '/en/xinwenzhongxin/xingyexinwen/332/',
  '/ru/xinwenzhongxin/renyixinwen/1028/': '/ru/xinwenzhongxin/xingyexinwen/330/',
  '/es/xinwenzhongxin/renyixinwen/1028/': '/es/xinwenzhongxin/xingyexinwen/332/',
  '/xinwenzhongxin/renyixinwen/1029/': '/xinwenzhongxin/xingyexinwen/731/',
  '/en/xinwenzhongxin/renyixinwen/1029/': '/en/xinwenzhongxin/xingyexinwen/329/',
  '/ru/xinwenzhongxin/renyixinwen/1029/': '/ru/xinwenzhongxin/xingyexinwen/325/',
  '/es/xinwenzhongxin/renyixinwen/1029/': '/es/xinwenzhongxin/xingyexinwen/329/',
  '/xinwenzhongxin/renyixinwen/1030/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1030/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1030/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1030/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1031/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1031/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1031/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1031/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1032/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1032/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1032/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1032/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1033/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1033/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1033/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1033/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1034/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1034/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1034/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1034/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1035/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1035/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1035/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1035/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1036/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1036/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1036/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1036/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1037/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1037/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1037/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1037/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1038/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1038/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1038/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1038/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1039/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1039/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1039/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1039/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1040/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1040/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1040/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1040/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1041/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1041/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1041/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1041/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1042/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1042/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1042/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1042/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1043/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1043/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1043/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1043/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1044/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1044/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1044/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1044/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1045/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1045/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1045/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1045/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1046/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1046/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1046/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1046/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1047/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1047/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1047/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1047/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1048/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1048/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1048/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1048/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1049/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1049/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1049/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1049/': '/es/xinwenzhongxin/xingyexinwen/330/',
  '/xinwenzhongxin/renyixinwen/1050/': '/xinwenzhongxin/xingyexinwen/720/',
  '/en/xinwenzhongxin/renyixinwen/1050/': '/en/xinwenzhongxin/xingyexinwen/330/',
  '/ru/xinwenzhongxin/renyixinwen/1050/': '/ru/xinwenzhongxin/xingyexinwen/329/',
  '/es/xinwenzhongxin/renyixinwen/1050/': '/es/xinwenzhongxin/xingyexinwen/330/',
};

const RENYI_NEWS_ALIAS_POST_IDS: Record<string, string> = {
  '/xinwenzhongxin/renyixinwen/1018/': 'postid-1018',
  '/en/xinwenzhongxin/renyixinwen/1018/': 'postid-1018',
  '/ru/xinwenzhongxin/renyixinwen/1018/': 'postid-1018',
  '/es/xinwenzhongxin/renyixinwen/1018/': 'postid-1018',
  '/xinwenzhongxin/renyixinwen/1019/': 'postid-1019',
  '/en/xinwenzhongxin/renyixinwen/1019/': 'postid-1019',
  '/ru/xinwenzhongxin/renyixinwen/1019/': 'postid-1019',
  '/es/xinwenzhongxin/renyixinwen/1019/': 'postid-1019',
  '/xinwenzhongxin/renyixinwen/1020/': 'postid-1020',
  '/en/xinwenzhongxin/renyixinwen/1020/': 'postid-1020',
  '/ru/xinwenzhongxin/renyixinwen/1020/': 'postid-1020',
  '/es/xinwenzhongxin/renyixinwen/1020/': 'postid-1020',
  '/xinwenzhongxin/renyixinwen/1021/': 'postid-1021',
  '/en/xinwenzhongxin/renyixinwen/1021/': 'postid-1021',
  '/ru/xinwenzhongxin/renyixinwen/1021/': 'postid-1021',
  '/es/xinwenzhongxin/renyixinwen/1021/': 'postid-1021',
  '/xinwenzhongxin/renyixinwen/1022/': 'postid-1022',
  '/en/xinwenzhongxin/renyixinwen/1022/': 'postid-1022',
  '/ru/xinwenzhongxin/renyixinwen/1022/': 'postid-1022',
  '/es/xinwenzhongxin/renyixinwen/1022/': 'postid-1022',
  '/xinwenzhongxin/renyixinwen/1023/': 'postid-1023',
  '/en/xinwenzhongxin/renyixinwen/1023/': 'postid-1023',
  '/ru/xinwenzhongxin/renyixinwen/1023/': 'postid-1023',
  '/es/xinwenzhongxin/renyixinwen/1023/': 'postid-1023',
  '/xinwenzhongxin/renyixinwen/1024/': 'postid-1024',
  '/en/xinwenzhongxin/renyixinwen/1024/': 'postid-1024',
  '/ru/xinwenzhongxin/renyixinwen/1024/': 'postid-1024',
  '/es/xinwenzhongxin/renyixinwen/1024/': 'postid-1024',
  '/xinwenzhongxin/renyixinwen/1025/': 'postid-1025',
  '/en/xinwenzhongxin/renyixinwen/1025/': 'postid-1025',
  '/ru/xinwenzhongxin/renyixinwen/1025/': 'postid-1025',
  '/es/xinwenzhongxin/renyixinwen/1025/': 'postid-1025',
  '/xinwenzhongxin/renyixinwen/1026/': 'postid-1026',
  '/en/xinwenzhongxin/renyixinwen/1026/': 'postid-1026',
  '/ru/xinwenzhongxin/renyixinwen/1026/': 'postid-1026',
  '/es/xinwenzhongxin/renyixinwen/1026/': 'postid-1026',
  '/xinwenzhongxin/renyixinwen/1027/': 'postid-1027',
  '/en/xinwenzhongxin/renyixinwen/1027/': 'postid-1027',
  '/ru/xinwenzhongxin/renyixinwen/1027/': 'postid-1027',
  '/es/xinwenzhongxin/renyixinwen/1027/': 'postid-1027',
  '/xinwenzhongxin/renyixinwen/1028/': 'postid-1028',
  '/en/xinwenzhongxin/renyixinwen/1028/': 'postid-1028',
  '/ru/xinwenzhongxin/renyixinwen/1028/': 'postid-1028',
  '/es/xinwenzhongxin/renyixinwen/1028/': 'postid-1028',
  '/xinwenzhongxin/renyixinwen/1029/': 'postid-1029',
  '/en/xinwenzhongxin/renyixinwen/1029/': 'postid-1029',
  '/ru/xinwenzhongxin/renyixinwen/1029/': 'postid-1029',
  '/es/xinwenzhongxin/renyixinwen/1029/': 'postid-1029',
  '/xinwenzhongxin/renyixinwen/1030/': 'postid-1030',
  '/en/xinwenzhongxin/renyixinwen/1030/': 'postid-1030',
  '/ru/xinwenzhongxin/renyixinwen/1030/': 'postid-1030',
  '/es/xinwenzhongxin/renyixinwen/1030/': 'postid-1030',
  '/xinwenzhongxin/renyixinwen/1031/': 'postid-1031',
  '/en/xinwenzhongxin/renyixinwen/1031/': 'postid-1031',
  '/ru/xinwenzhongxin/renyixinwen/1031/': 'postid-1031',
  '/es/xinwenzhongxin/renyixinwen/1031/': 'postid-1031',
  '/xinwenzhongxin/renyixinwen/1032/': 'postid-1032',
  '/en/xinwenzhongxin/renyixinwen/1032/': 'postid-1032',
  '/ru/xinwenzhongxin/renyixinwen/1032/': 'postid-1032',
  '/es/xinwenzhongxin/renyixinwen/1032/': 'postid-1032',
  '/xinwenzhongxin/renyixinwen/1033/': 'postid-1033',
  '/en/xinwenzhongxin/renyixinwen/1033/': 'postid-1033',
  '/ru/xinwenzhongxin/renyixinwen/1033/': 'postid-1033',
  '/es/xinwenzhongxin/renyixinwen/1033/': 'postid-1033',
  '/xinwenzhongxin/renyixinwen/1034/': 'postid-1034',
  '/en/xinwenzhongxin/renyixinwen/1034/': 'postid-1034',
  '/ru/xinwenzhongxin/renyixinwen/1034/': 'postid-1034',
  '/es/xinwenzhongxin/renyixinwen/1034/': 'postid-1034',
  '/xinwenzhongxin/renyixinwen/1035/': 'postid-1035',
  '/en/xinwenzhongxin/renyixinwen/1035/': 'postid-1035',
  '/ru/xinwenzhongxin/renyixinwen/1035/': 'postid-1035',
  '/es/xinwenzhongxin/renyixinwen/1035/': 'postid-1035',
  '/xinwenzhongxin/renyixinwen/1036/': 'postid-1036',
  '/en/xinwenzhongxin/renyixinwen/1036/': 'postid-1036',
  '/ru/xinwenzhongxin/renyixinwen/1036/': 'postid-1036',
  '/es/xinwenzhongxin/renyixinwen/1036/': 'postid-1036',
  '/xinwenzhongxin/renyixinwen/1037/': 'postid-1037',
  '/en/xinwenzhongxin/renyixinwen/1037/': 'postid-1037',
  '/ru/xinwenzhongxin/renyixinwen/1037/': 'postid-1037',
  '/es/xinwenzhongxin/renyixinwen/1037/': 'postid-1037',
  '/xinwenzhongxin/renyixinwen/1038/': 'postid-1038',
  '/en/xinwenzhongxin/renyixinwen/1038/': 'postid-1038',
  '/ru/xinwenzhongxin/renyixinwen/1038/': 'postid-1038',
  '/es/xinwenzhongxin/renyixinwen/1038/': 'postid-1038',
  '/xinwenzhongxin/renyixinwen/1039/': 'postid-1039',
  '/en/xinwenzhongxin/renyixinwen/1039/': 'postid-1039',
  '/ru/xinwenzhongxin/renyixinwen/1039/': 'postid-1039',
  '/es/xinwenzhongxin/renyixinwen/1039/': 'postid-1039',
  '/xinwenzhongxin/renyixinwen/1040/': 'postid-1040',
  '/en/xinwenzhongxin/renyixinwen/1040/': 'postid-1040',
  '/ru/xinwenzhongxin/renyixinwen/1040/': 'postid-1040',
  '/es/xinwenzhongxin/renyixinwen/1040/': 'postid-1040',
  '/xinwenzhongxin/renyixinwen/1041/': 'postid-1041',
  '/en/xinwenzhongxin/renyixinwen/1041/': 'postid-1041',
  '/ru/xinwenzhongxin/renyixinwen/1041/': 'postid-1041',
  '/es/xinwenzhongxin/renyixinwen/1041/': 'postid-1041',
  '/xinwenzhongxin/renyixinwen/1042/': 'postid-1042',
  '/en/xinwenzhongxin/renyixinwen/1042/': 'postid-1042',
  '/ru/xinwenzhongxin/renyixinwen/1042/': 'postid-1042',
  '/es/xinwenzhongxin/renyixinwen/1042/': 'postid-1042',
  '/xinwenzhongxin/renyixinwen/1043/': 'postid-1043',
  '/en/xinwenzhongxin/renyixinwen/1043/': 'postid-1043',
  '/ru/xinwenzhongxin/renyixinwen/1043/': 'postid-1043',
  '/es/xinwenzhongxin/renyixinwen/1043/': 'postid-1043',
  '/xinwenzhongxin/renyixinwen/1044/': 'postid-1044',
  '/en/xinwenzhongxin/renyixinwen/1044/': 'postid-1044',
  '/ru/xinwenzhongxin/renyixinwen/1044/': 'postid-1044',
  '/es/xinwenzhongxin/renyixinwen/1044/': 'postid-1044',
  '/xinwenzhongxin/renyixinwen/1045/': 'postid-1045',
  '/en/xinwenzhongxin/renyixinwen/1045/': 'postid-1045',
  '/ru/xinwenzhongxin/renyixinwen/1045/': 'postid-1045',
  '/es/xinwenzhongxin/renyixinwen/1045/': 'postid-1045',
  '/xinwenzhongxin/renyixinwen/1046/': 'postid-1046',
  '/en/xinwenzhongxin/renyixinwen/1046/': 'postid-1046',
  '/ru/xinwenzhongxin/renyixinwen/1046/': 'postid-1046',
  '/es/xinwenzhongxin/renyixinwen/1046/': 'postid-1046',
  '/xinwenzhongxin/renyixinwen/1047/': 'postid-1047',
  '/en/xinwenzhongxin/renyixinwen/1047/': 'postid-1047',
  '/ru/xinwenzhongxin/renyixinwen/1047/': 'postid-1047',
  '/es/xinwenzhongxin/renyixinwen/1047/': 'postid-1047',
  '/xinwenzhongxin/renyixinwen/1048/': 'postid-1048',
  '/en/xinwenzhongxin/renyixinwen/1048/': 'postid-1048',
  '/ru/xinwenzhongxin/renyixinwen/1048/': 'postid-1048',
  '/es/xinwenzhongxin/renyixinwen/1048/': 'postid-1048',
  '/xinwenzhongxin/renyixinwen/1049/': 'postid-1049',
  '/en/xinwenzhongxin/renyixinwen/1049/': 'postid-1049',
  '/ru/xinwenzhongxin/renyixinwen/1049/': 'postid-1049',
  '/es/xinwenzhongxin/renyixinwen/1049/': 'postid-1049',
  '/xinwenzhongxin/renyixinwen/1050/': 'postid-1050',
  '/en/xinwenzhongxin/renyixinwen/1050/': 'postid-1050',
  '/ru/xinwenzhongxin/renyixinwen/1050/': 'postid-1050',
  '/es/xinwenzhongxin/renyixinwen/1050/': 'postid-1050',
};

const RENYI_NEWS_ARTICLE_PATHS: Record<string, string> = {
  '/xinwenzhongxin/xingyexinwen/1426/': '/xinwenzhongxin/renyixinwen/1018',
  '/xinwenzhongxin/renyixinwen/1426/': '/xinwenzhongxin/renyixinwen/1018',
  '/en/xinwenzhongxin/xingyexinwen/676/': '/en/xinwenzhongxin/renyixinwen/1018',
  '/en/xinwenzhongxin/renyixinwen/676/': '/en/xinwenzhongxin/renyixinwen/1018',
  '/ru/xinwenzhongxin/xingyexinwen/332/': '/ru/xinwenzhongxin/renyixinwen/1018',
  '/ru/xinwenzhongxin/renyixinwen/332/': '/ru/xinwenzhongxin/renyixinwen/1018',
  '/es/xinwenzhongxin/xingyexinwen/332/': '/es/xinwenzhongxin/renyixinwen/1018',
  '/es/xinwenzhongxin/renyixinwen/332/': '/es/xinwenzhongxin/renyixinwen/1018',
  '/xinwenzhongxin/xingyexinwen/1415/': '/xinwenzhongxin/renyixinwen/1019',
  '/xinwenzhongxin/renyixinwen/1415/': '/xinwenzhongxin/renyixinwen/1019',
  '/en/xinwenzhongxin/xingyexinwen/1415/': '/en/xinwenzhongxin/renyixinwen/1019',
  '/en/xinwenzhongxin/renyixinwen/1415/': '/en/xinwenzhongxin/renyixinwen/1019',
  '/ru/xinwenzhongxin/xingyexinwen/1415/': '/ru/xinwenzhongxin/renyixinwen/1019',
  '/ru/xinwenzhongxin/renyixinwen/1415/': '/ru/xinwenzhongxin/renyixinwen/1019',
  '/es/xinwenzhongxin/xingyexinwen/1415/': '/es/xinwenzhongxin/renyixinwen/1019',
  '/es/xinwenzhongxin/renyixinwen/1415/': '/es/xinwenzhongxin/renyixinwen/1019',
  '/xinwenzhongxin/1373/': '/xinwenzhongxin/renyixinwen/1020',
  '/xinwenzhongxin/renyixinwen/1373/': '/xinwenzhongxin/renyixinwen/1020',
  '/en/xinwenzhongxin/1373/': '/en/xinwenzhongxin/renyixinwen/1020',
  '/en/xinwenzhongxin/renyixinwen/1373/': '/en/xinwenzhongxin/renyixinwen/1020',
  '/ru/xinwenzhongxin/1373/': '/ru/xinwenzhongxin/renyixinwen/1020',
  '/ru/xinwenzhongxin/renyixinwen/1373/': '/ru/xinwenzhongxin/renyixinwen/1020',
  '/es/xinwenzhongxin/1373/': '/es/xinwenzhongxin/renyixinwen/1020',
  '/es/xinwenzhongxin/renyixinwen/1373/': '/es/xinwenzhongxin/renyixinwen/1020',
  '/xinwenzhongxin/1366/': '/xinwenzhongxin/renyixinwen/1021',
  '/xinwenzhongxin/renyixinwen/1366/': '/xinwenzhongxin/renyixinwen/1021',
  '/en/xinwenzhongxin/1366/': '/en/xinwenzhongxin/renyixinwen/1021',
  '/en/xinwenzhongxin/renyixinwen/1366/': '/en/xinwenzhongxin/renyixinwen/1021',
  '/ru/xinwenzhongxin/1366/': '/ru/xinwenzhongxin/renyixinwen/1021',
  '/ru/xinwenzhongxin/renyixinwen/1366/': '/ru/xinwenzhongxin/renyixinwen/1021',
  '/es/xinwenzhongxin/1366/': '/es/xinwenzhongxin/renyixinwen/1021',
  '/es/xinwenzhongxin/renyixinwen/1366/': '/es/xinwenzhongxin/renyixinwen/1021',
  '/xinwenzhongxin/1364/': '/xinwenzhongxin/renyixinwen/1022',
  '/xinwenzhongxin/renyixinwen/1364/': '/xinwenzhongxin/renyixinwen/1022',
  '/en/xinwenzhongxin/xingyexinwen/755/': '/en/xinwenzhongxin/renyixinwen/1022',
  '/en/xinwenzhongxin/renyixinwen/755/': '/en/xinwenzhongxin/renyixinwen/1022',
  '/ru/xinwenzhongxin/xingyexinwen/328/': '/ru/xinwenzhongxin/renyixinwen/1022',
  '/ru/xinwenzhongxin/renyixinwen/328/': '/ru/xinwenzhongxin/renyixinwen/1022',
  '/es/xinwenzhongxin/xingyexinwen/329/': '/es/xinwenzhongxin/renyixinwen/1022',
  '/es/xinwenzhongxin/renyixinwen/329/': '/es/xinwenzhongxin/renyixinwen/1022',
  '/uncategorized/1371/': '/xinwenzhongxin/renyixinwen/1023',
  '/xinwenzhongxin/renyixinwen/1371/': '/xinwenzhongxin/renyixinwen/1023',
  '/en/xinwenzhongxin/xingyexinwen/329/': '/en/xinwenzhongxin/renyixinwen/1023',
  '/en/xinwenzhongxin/renyixinwen/329/': '/en/xinwenzhongxin/renyixinwen/1023',
  '/ru/xinwenzhongxin/xingyexinwen/325/': '/ru/xinwenzhongxin/renyixinwen/1023',
  '/ru/xinwenzhongxin/renyixinwen/325/': '/ru/xinwenzhongxin/renyixinwen/1023',
  '/es/xinwenzhongxin/xingyexinwen/330/': '/es/xinwenzhongxin/renyixinwen/1023',
  '/es/xinwenzhongxin/renyixinwen/330/': '/es/xinwenzhongxin/renyixinwen/1023',
  '/xinwenzhongxin/xingyexinwen/1359/': '/xinwenzhongxin/renyixinwen/1024',
  '/xinwenzhongxin/renyixinwen/1359/': '/xinwenzhongxin/renyixinwen/1024',
  '/en/xinwenzhongxin/xingyexinwen/330/': '/en/xinwenzhongxin/renyixinwen/1024',
  '/en/xinwenzhongxin/renyixinwen/330/': '/en/xinwenzhongxin/renyixinwen/1024',
  '/ru/xinwenzhongxin/xingyexinwen/329/': '/ru/xinwenzhongxin/renyixinwen/1024',
  '/ru/xinwenzhongxin/renyixinwen/329/': '/ru/xinwenzhongxin/renyixinwen/1024',
  '/es/xinwenzhongxin/xingyexinwen/331/': '/es/xinwenzhongxin/renyixinwen/1024',
  '/es/xinwenzhongxin/renyixinwen/331/': '/es/xinwenzhongxin/renyixinwen/1024',
  '/xinwenzhongxin/776/': '/xinwenzhongxin/renyixinwen/1025',
  '/xinwenzhongxin/renyixinwen/776/': '/xinwenzhongxin/renyixinwen/1025',
  '/en/xinwenzhongxin/xingyexinwen/331/': '/en/xinwenzhongxin/renyixinwen/1025',
  '/en/xinwenzhongxin/renyixinwen/331/': '/en/xinwenzhongxin/renyixinwen/1025',
  '/ru/xinwenzhongxin/xingyexinwen/331/': '/ru/xinwenzhongxin/renyixinwen/1025',
  '/ru/xinwenzhongxin/renyixinwen/331/': '/ru/xinwenzhongxin/renyixinwen/1025',
  '/es/xinwenzhongxin/xingyexinwen/328/': '/es/xinwenzhongxin/renyixinwen/1025',
  '/es/xinwenzhongxin/renyixinwen/328/': '/es/xinwenzhongxin/renyixinwen/1025',
  '/xinwenzhongxin/749/': '/xinwenzhongxin/renyixinwen/1026',
  '/xinwenzhongxin/renyixinwen/749/': '/xinwenzhongxin/renyixinwen/1026',
  '/en/xinwenzhongxin/xingyexinwen/332/': '/en/xinwenzhongxin/renyixinwen/1026',
  '/en/xinwenzhongxin/renyixinwen/332/': '/en/xinwenzhongxin/renyixinwen/1026',
  '/ru/xinwenzhongxin/xingyexinwen/330/': '/ru/xinwenzhongxin/renyixinwen/1026',
  '/ru/xinwenzhongxin/renyixinwen/330/': '/ru/xinwenzhongxin/renyixinwen/1026',
  '/es/xinwenzhongxin/xingyexinwen/327/': '/es/xinwenzhongxin/renyixinwen/1026',
  '/es/xinwenzhongxin/renyixinwen/327/': '/es/xinwenzhongxin/renyixinwen/1026',
  '/xinwenzhongxin/744/': '/xinwenzhongxin/renyixinwen/1027',
  '/xinwenzhongxin/renyixinwen/744/': '/xinwenzhongxin/renyixinwen/1027',
  '/en/xinwenzhongxin/xingyexinwen/327/': '/en/xinwenzhongxin/renyixinwen/1027',
  '/en/xinwenzhongxin/renyixinwen/327/': '/en/xinwenzhongxin/renyixinwen/1027',
  '/ru/xinwenzhongxin/xingyexinwen/327/': '/ru/xinwenzhongxin/renyixinwen/1027',
  '/ru/xinwenzhongxin/renyixinwen/327/': '/ru/xinwenzhongxin/renyixinwen/1027',
  '/es/xinwenzhongxin/xingyexinwen/326/': '/es/xinwenzhongxin/renyixinwen/1027',
  '/es/xinwenzhongxin/renyixinwen/326/': '/es/xinwenzhongxin/renyixinwen/1027',
  '/xinwenzhongxin/740/': '/xinwenzhongxin/renyixinwen/1028',
  '/xinwenzhongxin/renyixinwen/740/': '/xinwenzhongxin/renyixinwen/1028',
  '/en/xinwenzhongxin/xingyexinwen/326/': '/en/xinwenzhongxin/renyixinwen/1028',
  '/en/xinwenzhongxin/renyixinwen/326/': '/en/xinwenzhongxin/renyixinwen/1028',
  '/ru/xinwenzhongxin/xingyexinwen/326/': '/ru/xinwenzhongxin/renyixinwen/1028',
  '/ru/xinwenzhongxin/renyixinwen/326/': '/ru/xinwenzhongxin/renyixinwen/1028',
  '/es/xinwenzhongxin/xingyexinwen/325/': '/es/xinwenzhongxin/renyixinwen/1028',
  '/es/xinwenzhongxin/renyixinwen/325/': '/es/xinwenzhongxin/renyixinwen/1028',
  '/xinwenzhongxin/xingyexinwen/731/': '/xinwenzhongxin/renyixinwen/1029',
  '/xinwenzhongxin/renyixinwen/731/': '/xinwenzhongxin/renyixinwen/1029',
  '/xinwenzhongxin/xingyexinwen/720/': '/xinwenzhongxin/renyixinwen/1030',
  '/xinwenzhongxin/renyixinwen/720/': '/xinwenzhongxin/renyixinwen/1030',
};

function escapeHtmlAttribute(value: unknown) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function trimRenyiInternalPath(pathname: string) {
  if (!pathname || pathname === '/') {
    return pathname || '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function getRenyiImageAlt(src: string, pathname: string) {
  if (!src) {
    return null;
  }

  const cleanSrc = (src.split('?')[0] ?? src).split('#')[0] ?? src;
  const locale = getRenyiLocale(pathname);
  const match = RENYI_IMAGE_ALT_SUFFIXES[locale].find(([suffix]) => {
    const cleanSuffix = (suffix.split('?')[0] ?? suffix).split('#')[0] ?? suffix;
    const pathSuffix = cleanSuffix.startsWith('/') ? cleanSuffix : `/${cleanSuffix}`;

    return cleanSrc === cleanSuffix || cleanSrc.endsWith(pathSuffix);
  });

  return match?.[1] ?? null;
}

function getRenyiFallbackImageAlt(src: string, pathname: string) {
  if (!src || /wpcf7_captcha|captcha/i.test(src)) {
    return null;
  }

  const locale = getRenyiLocale(pathname);
  const page = getSitePage(pathname);
  const pageTitle = getRenyiSeoHeading(patchRenyiTitle(page?.title || DEFAULT_SITE_TITLE), locale);
  const cleanSrc = (src.split('?')[0] ?? src).split('#')[0] ?? src;
  const fileName = cleanSrc.split('/').pop()?.replace(/\.(png|jpe?g|gif|webp|svg)$/i, '') ?? '';
  const suffixLabels: Record<RenyiLocale, string> = {
    zh: '图片',
    en: 'image',
    ru: 'изображение',
    es: 'imagen',
  };

  if (/banner|page-banner/i.test(fileName)) {
    const bannerLabels: Record<RenyiLocale, string> = {
      zh: `${pageTitle}横幅图`,
      en: `${pageTitle} banner image`,
      ru: `${pageTitle} баннер`,
      es: `${pageTitle} imagen de banner`,
    };

    return bannerLabels[locale];
  }

  if (/qr|wechat|whatsapp|2m|wx|dy/i.test(fileName)) {
    const qrLabels: Record<RenyiLocale, string> = {
      zh: `${RENYI_COMPANY_NAME}联系二维码`,
      en: `${RENYI_COMPANY_NAMES.en} contact QR code`,
      ru: `QR-код для связи с ${RENYI_COMPANY_NAMES.ru}`,
      es: `Código QR de contacto de ${RENYI_COMPANY_NAMES.es}`,
    };

    return qrLabels[locale];
  }

  return `${pageTitle}${locale === 'zh' ? '' : ' '}${suffixLabels[locale]}`;
}

function upsertImageAltAttribute(imgTag: string, alt: string) {
  const escapedAlt = escapeHtmlAttribute(alt);

  if (/\salt\s*=/.test(imgTag)) {
    return imgTag.replace(/\s+alt\s*=\s*(["'])(.*?)\1/i, (_match, quote: string) => ` alt=${quote}${escapedAlt}${quote}`);
  }

  return imgTag.replace(/<img\b/i, `<img alt="${escapedAlt}"`);
}

function upsertImageSrcAttribute(imgTag: string, src: string) {
  const escapedSrc = escapeHtmlAttribute(src);

  if (/\ssrc\s*=/.test(imgTag)) {
    return imgTag.replace(/\s+src\s*=\s*(["'])(.*?)\1/i, (_match, quote: string) => ` src=${quote}${escapedSrc}${quote}`);
  }

  return imgTag.replace(/<img\b/i, `<img src="${escapedSrc}"`);
}

function patchRenyiImageAltHtml(html: string, pathname: string) {
  return html.replace(/<img\b[^>]*>/gi, (imgTag) => {
    const src = imgTag.match(/\bsrc\s*=\s*(["'])([^"']+)\1/i)?.[2] ?? '';
    const currentAlt = imgTag.match(/\balt\s*=\s*(["'])(.*?)\1/i)?.[2] ?? null;
    const alt = getRenyiImageAlt(src, pathname) ?? (currentAlt?.trim() ? null : getRenyiFallbackImageAlt(src, pathname));

    return alt ? upsertImageAltAttribute(imgTag, alt) : imgTag;
  });
}

function getRenyiSiteTemplatePath(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  if (getRenyiStructuralProductConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro/wj-06/', getRenyiLocale(normalizedPath));
  }

  if (getRenyiSpecialEquipmentProductConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro/wj-06/', getRenyiLocale(normalizedPath));
  }

  if (getRenyiMineralProductConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro/wj-06/', getRenyiLocale(normalizedPath));
  }

  if (getRenyiMineralCategoryConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro_category/yidongshiqiaomaotaiche/', getRenyiLocale(normalizedPath));
  }

  if (getRenyiStructuralCategoryConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro_category/zaoyantaiche/', getRenyiLocale(normalizedPath));
  }

  if (getRenyiSpecialEquipmentCategoryConfig(normalizedPath)) {
    return withRenyiLocalePath('/pro_category/dexiafuwuche/', getRenyiLocale(normalizedPath));
  }

  const aliasPath = RENYI_SHORT_PATH_TEMPLATE_ALIASES[normalizedPath] ?? RENYI_NEWS_PATH_ALIASES[normalizedPath];

  if (aliasPath) {
    return aliasPath;
  }

	  return normalizedPath
	    .replace('/category/xinwenzhongxin/renyixinwen/', '/category/xinwenzhongxin/xingyexinwen/')
	    .replace('/category/renyixinwen/', '/category/xingyexinwen/')
	    .replace('/xinwenzhongxin/renyixinwen/', '/xinwenzhongxin/xingyexinwen/');
}

const RENYI_LEGACY_MINERAL_CATEGORY_PATH_ALIASES: Record<string, string> = {
  '/pro_category/yidongshiqiaomaotaiche/': '/fuxuanjixilie/',
  '/en/pro_category/yidongshiqiaomaotaiche/': '/en/fuxuanjixilie/',
  '/ru/pro_category/yidongshiqiaomaotaiche/': '/ru/fuxuanjixilie/',
  '/es/pro_category/yidongshiqiaomaotaiche/': '/es/fuxuanjixilie/',
  '/pro_category/fls-5sashuiche/': '/zhuanyong-01/',
  '/en/pro_category/fls-5sashuiche/': '/en/zhuanyong-01/',
  '/ru/pro_category/fls-5sashuiche/': '/ru/zhuanyong-01/',
  '/es/pro_category/fls-5sashuiche/': '/es/zhuanyong-01/',
  '/pro_category/baopoqicaiyunshuche/': '/zhuanyong-02/',
  '/en/pro_category/baopoqicaiyunshuche/': '/en/zhuanyong-02/',
  '/ru/pro_category/baopoqicaiyunshuche/': '/ru/zhuanyong-02/',
  '/es/pro_category/baopoqicaiyunshuche/': '/es/zhuanyong-02/',
  '/pro_category/hunningtujiaobanche/': '/zhuanyong-03/',
  '/en/pro_category/hunningtujiaobanche/': '/en/zhuanyong-03/',
  '/ru/pro_category/hunningtujiaobanche/': '/ru/zhuanyong-03/',
  '/es/pro_category/hunningtujiaobanche/': '/es/zhuanyong-03/',
  '/pro_category/youliaoyunshuche/': '/zhuanyong-04/',
  '/en/pro_category/youliaoyunshuche/': '/en/zhuanyong-04/',
  '/ru/pro_category/youliaoyunshuche/': '/ru/zhuanyong-04/',
  '/es/pro_category/youliaoyunshuche/': '/es/zhuanyong-04/',
  '/pro_category/yidongshisuishiji/': '/zhuanyong-05/',
  '/en/pro_category/yidongshisuishiji/': '/en/zhuanyong-05/',
  '/ru/pro_category/yidongshisuishiji/': '/ru/zhuanyong-05/',
  '/es/pro_category/yidongshisuishiji/': '/es/zhuanyong-05/',
};

const RENYI_LEGACY_PRODUCT_PATH_ALIASES = Object.fromEntries(
  (
    [
      ['/pro_category/products/', '/chanpinzhanshi/'],
      ['/pro_category/products/page/2/', '/chanpinzhanshi/'],
      ['/pro_category/products/page/3/', '/chanpinzhanshi/'],
      ['/pro_category/products/page/4/', '/chanpinzhanshi/'],
      ['/pro_category/products/page/5/', '/chanpinzhanshi/'],
      ['/pro_category/chanyunjixilie/', '/zuanjixilie/'],
      ['/pro_category/neiranchanyunji/', '/chanpinzhanshi/'],
      ['/pro_category/diandongchanyunji/', '/chanpinzhanshi/'],
      ['/pro_category/xudianchichanyunji/', '/chanpinzhanshi/'],
      ['/pro_category/diaishichanyunji/', '/chanpinzhanshi/'],
      ['/pro_category/yunkuangkache/', '/yougangxuangua/'],
      ['/pro_category/yunliaoche/', '/yougang-01/'],
      ['/pro_category/guandaoanzhuangche/', '/yougang-02/'],
      ['/pro_category/zaoyantaiche/', '/jiegouxilie/'],
      ['/pro_category/xianchanghunzhuangruhuazhayaoche/', '/jiegou-01/'],
      ['/pro_category/shengjiangpingtaiche/', '/jiegou-03/'],
      ['/pro_category/yunrenxilie/', '/jiegou-05/'],
      ['/pro_category/yidongshiqiaomaotaiche/', '/fuxuanjixilie/'],
      ['/pro_category/qiaomaotaiche/', '/fuxuanjixilie/'],
      ['/pro_category/dexiafuwuche/', '/zhuanyongxilie/'],
      ['/pro_category/fuwuchexilie/', '/zhuanyongxilie/'],
      ['/pro_category/shuipaoche/', '/zhuanyong-01/'],
      ['/pro_category/fls-5sashuiche/', '/zhuanyong-01/'],
      ['/pro_category/baopoqicaiyunshuche/', '/zhuanyong-02/'],
      ['/pro_category/hunningtujiaobanche/', '/zhuanyong-03/'],
      ['/pro_category/youliaoyunshuche/', '/zhuanyong-04/'],
      ['/pro_category/yidongshisuishiji/', '/zhuanyong-05/'],
      ['/pro_category/beijianzhongxin/', '/chanpinzhanshi/'],
      ['/pro_category/yeyajian/', '/yougangxuangua/'],
      ['/pro_category/dianqijian/', '/chanpinzhanshi/'],
      ['/pro_category/donglichuandongjian/', '/chanpinzhanshi/'],
      ['/pro_category/qita/', '/chanpinzhanshi/'],
      ['/pro/wj-06/', '/zuanji-01/'],
      ['/pro/wj-1/', '/zuanji-02/'],
      ['/pro/wj-15/', '/zuanji-03/'],
      ['/pro/wj-2/', '/zuanji-04/'],
      ['/pro/wj-25/', '/zuanji-05/'],
      ['/pro/wj-3/', '/zuanji-06/'],
      ['/pro/wj-4/', '/chanpinzhanshi/'],
      ['/pro/wj-6/', '/chanpinzhanshi/'],
      ['/pro/wj-8-2/', '/chanpinzhanshi/'],
      ['/pro/wjd-06/', '/chanpinzhanshi/'],
      ['/pro/wjd-1/', '/chanpinzhanshi/'],
      ['/pro/wjd-15/', '/chanpinzhanshi/'],
      ['/pro/wjd-25/', '/chanpinzhanshi/'],
      ['/pro/wjd-3-2/', '/chanpinzhanshi/'],
      ['/pro/wjd-4/', '/chanpinzhanshi/'],
      ['/pro/wjd-6/', '/chanpinzhanshi/'],
      ['/pro/wjdd-2/', '/chanpinzhanshi/'],
      ['/pro/dc-5/', '/chanpinzhanshi/'],
      ['/pro/dc-10/', '/chanpinzhanshi/'],
      ['/pro/uc-2/', '/chanpinzhanshi/'],
      ['/pro/uk-65/', '/chanpinzhanshi/'],
      ['/pro/uk-5/', '/chanpinzhanshi/'],
      ['/pro/uk-10/', '/chanpinzhanshi/'],
      ['/pro/uk-12/', '/chanpinzhanshi/'],
      ['/pro/uk-15/', '/chanpinzhanshi/'],
      ['/pro/uk-20/', '/chanpinzhanshi/'],
      ['/pro/uk-30/', '/chanpinzhanshi/'],
      ['/pro/uk-40/', '/chanpinzhanshi/'],
      ['/pro/uk-50/', '/chanpinzhanshi/'],
      ['/pro/uka20/', '/chanpinzhanshi/'],
      ['/pro/cytj45-2/', '/zuanjixilie/'],
      ['/pro/cytj45-2-2/', '/zuanjixilie/'],
      ['/pro/xmpyt-108700/', '/chanpinzhanshi/'],
      ['/pro/xmpyt-104700/', '/chanpinzhanshi/'],
      ['/pro/xmpyt-54450/', '/chanpinzhanshi/'],
      ['/pro/sj2800/', '/chanpinzhanshi/'],
      ['/pro/sj-700/', '/chanpinzhanshi/'],
      ['/pro/upt-125-2800/', '/chanpinzhanshi/'],
      ['/pro/upt-119-2800/', '/chanpinzhanshi/'],
      ['/pro/upt-74-1800/', '/chanpinzhanshi/'],
      ['/pro/fls-5sashuiche/', '/chanpinzhanshi/'],
      ['/pro/fcb-6/', '/chanpinzhanshi/'],
      ['/pro/fh-8/', '/chanpinzhanshi/'],
      ['/pro/fh-5/', '/chanpinzhanshi/'],
      ['/pro/ucb-03/', '/jiegou-03/'],
      ['/pro/cb-05/', '/jiegou-03/'],
      ['/pro/uc-5/', '/jiegou-03/'],
      ['/pro/bcj-4000/', '/jiegou-01/'],
      ['/pro/cy-4000/', '/chanpinzhanshi/'],
      ['/pro/ru-16/', '/jiegou-05/'],
      ['/pro/ru-40yunrenche/', '/jiegou-05/'],
      ['/pro/fl-10-yunliaoche/', '/chanpinzhanshi/'],
      ['/pro/ua-5guandaoanzhuangche/', '/chanpinzhanshi/'],
      ['/pro/fls-10dexiashuipaoche/', '/chanpinzhanshi/'],
    ] satisfies Array<[string, string]>
  ).flatMap(([legacyPath, targetPath]) =>
    RENYI_LOCALE_PATH_PREFIXES.map((prefix) => [`${prefix}${legacyPath}`, `${prefix}${targetPath}`]),
  ),
) as Record<string, string>;

function getRenyiLegacyPathAlias(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);

  return RENYI_LEGACY_PRODUCT_PATH_ALIASES[normalizedPath] ?? RENYI_LEGACY_MINERAL_CATEGORY_PATH_ALIASES[normalizedPath] ?? null;
}

export function getRenyiCanonicalNewsPath(pathname: string) {
  const normalizedPath = normalizeSitePath(pathname);
  const legacyPath = getRenyiLegacyPathAlias(normalizedPath);

  if (legacyPath) {
    return legacyPath;
  }

  const articlePath = RENYI_NEWS_ARTICLE_PATHS[normalizedPath];

  if (articlePath) {
    return articlePath;
  }

  const nextPath = normalizedPath
    .replace('/category/xinwenzhongxin/xingyexinwen/', '/category/xinwenzhongxin/renyixinwen/')
    .replace('/category/xingyexinwen/', '/category/renyixinwen/');

  return nextPath === normalizedPath ? null : trimRenyiInternalPath(nextPath);
}

function rewriteRenyiInternalNewsUrl(value: string) {
  if (!value || value.startsWith('#') || value.startsWith('javascript:') || value.startsWith('mailto:') || value.startsWith('tel:')) {
    return value;
  }

  const absoluteMatch = value.match(/^https:\/\/(www|en|ru|es)\.ytxingye\.com(\/[^?#]*)?([?#].*)?$/);
  let pathname = value;
  let suffix = '';

  if (absoluteMatch) {
    const localePrefix = absoluteMatch[1] === 'www' ? '' : `/${absoluteMatch[1]}`;
    pathname = `${localePrefix}${absoluteMatch[2] || '/'}`;
    suffix = absoluteMatch[3] || '';
  } else {
    const suffixMatch = value.match(/^([^?#]*)([?#].*)$/);
    if (suffixMatch) {
      pathname = suffixMatch[1] || '/';
      suffix = suffixMatch[2] || '';
    }
  }

  if (!pathname.startsWith('/')) {
    return value;
  }

	const normalizedPath = normalizeSitePath(pathname);
  if (isRenyiRemovedSparePartsPath(normalizedPath)) {
    return `${getRenyiProductLandingPath(normalizedPath)}${suffix}`;
  }

  const legacyPath = getRenyiLegacyPathAlias(normalizedPath);

  if (legacyPath) {
    return `${legacyPath}${suffix}`;
  }

  const articlePath = RENYI_NEWS_ARTICLE_PATHS[normalizedPath];

  if (articlePath) {
    return `${articlePath}${suffix}`;
  }

  const rewrittenPath = pathname
    .replace('/category/xinwenzhongxin/xingyexinwen/', '/category/xinwenzhongxin/renyixinwen/')
    .replace('/category/xingyexinwen/', '/category/renyixinwen/')
    .replace('/xinwenzhongxin/xingyexinwen/', '/xinwenzhongxin/renyixinwen/');

  return `${rewrittenPath === pathname ? pathname : trimRenyiInternalPath(rewrittenPath)}${suffix}`;
}

function patchRenyiInternalNewsPathsHtml(html: string) {
  return html.replace(/\bhref=(["'])([^"']+)\1/g, (match, quote: string, href: string) => {
    const nextHref = rewriteRenyiInternalNewsUrl(href);
    return `href=${quote}${nextHref}${quote}`;
  });
}

function getRenyiTemplatePage(templatePath: string) {
  const unlocalizedTemplatePath = templatePath.replace(/^\/(?:en|ru|es)(?=\/)/, '');

  return sitePages[templatePath] ?? sitePages[unlocalizedTemplatePath] ?? null;
}

export function getSitePage(pathname: string): SitePageData | null {
  const normalizedPath = normalizeSitePath(getRenyiLegacyPathAlias(pathname) ?? pathname);

  if (isRenyiRemovedSparePartsPath(normalizedPath)) {
    return null;
  }

  const templatePath = getRenyiSiteTemplatePath(normalizedPath);
  const templatePage = getRenyiTemplatePage(templatePath);
  const structuralProductTemplate = getRenyiStructuralProductConfig(normalizedPath) ? templatePage : null;
  const mineralProductTemplate = getRenyiMineralProductConfig(normalizedPath) ? templatePage : null;
  const specialEquipmentProductTemplate = getRenyiSpecialEquipmentProductConfig(normalizedPath) ? templatePage : null;
  const page =
    structuralProductTemplate ?? mineralProductTemplate ?? specialEquipmentProductTemplate ?? sitePages[normalizedPath] ?? templatePage;

  if (page) {
    if (structuralProductTemplate || mineralProductTemplate || specialEquipmentProductTemplate) {
      return {
        ...page,
        path: normalizedPath,
      };
    }

    if (RENYI_SHORT_PATH_TEMPLATE_ALIASES[normalizedPath]) {
      return {
        ...page,
        path: normalizedPath,
      };
    }

    if (RENYI_NEWS_PATH_ALIASES[normalizedPath]) {
      const postIdClass = RENYI_NEWS_ALIAS_POST_IDS[normalizedPath] ?? 'postid-1018';

      return {
        ...page,
        path: normalizedPath,
        bodyClass: page.bodyClass.replace(/\bpostid-\d+\b/g, postIdClass),
      };
    }

    return page;
  }

  const legalTemplate = sitePages['/faluwenjian/1361/'] ?? sitePages['/'];

  return legalTemplate ? createRenyiLegalPageData(legalTemplate, normalizedPath) : null;
}

export function getDocumentMetadata(pathname: string) {
  const canonicalPath = getRenyiCanonicalPathname(pathname);
  const page = getSitePage(canonicalPath);
  const raiseBoringProductConfig = getRenyiRaiseBoringTrialProductConfig(canonicalPath);
  const hydraulicProductConfig = getRenyiHydraulicProductConfig(canonicalPath);
  const hydraulicCategoryConfig = getRenyiHydraulicCategoryConfig(canonicalPath);
  const mineralProductConfig = getRenyiMineralProductConfig(canonicalPath);
  const mineralCategoryConfig = getRenyiMineralCategoryConfig(canonicalPath);
  const specialEquipmentProductConfig = getRenyiSpecialEquipmentProductConfig(canonicalPath);
  const specialEquipmentCategoryConfig = getRenyiSpecialEquipmentCategoryConfig(canonicalPath);
  const structuralCategoryConfig = getRenyiStructuralCategoryConfig(canonicalPath);
  const structuralProductConfig = getRenyiStructuralProductConfig(canonicalPath);
  const isServicePage = isRenyiServicePath(canonicalPath);
  const isRaiseBoringCategoryPage = isRenyiRaiseBoringCategoryPath(canonicalPath);
  const locale = getRenyiLocale(canonicalPath);
  const title = raiseBoringProductConfig
    ? `${raiseBoringProductConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
    : hydraulicProductConfig
      ? `${hydraulicProductConfig.title[locale]} - ${RENYI_COMPANY_NAMES[locale]}`
      : hydraulicCategoryConfig
        ? `${hydraulicCategoryConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
        : mineralProductConfig
          ? `${mineralProductConfig.title[locale]} - ${RENYI_COMPANY_NAMES[locale]}`
          : mineralCategoryConfig
            ? `${mineralCategoryConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
            : specialEquipmentProductConfig
              ? `${specialEquipmentProductConfig.title[locale]} - ${RENYI_COMPANY_NAMES[locale]}`
              : specialEquipmentCategoryConfig
                ? `${specialEquipmentCategoryConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
                : structuralProductConfig
                  ? `${structuralProductConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
                  : structuralCategoryConfig
                    ? `${structuralCategoryConfig.copy[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
                    : isRaiseBoringCategoryPage
                      ? `${RENYI_RAISE_BORING_BANNER_TEXT[locale].title} - ${RENYI_COMPANY_NAMES[locale]}`
                    : patchRenyiTitle(page?.title || DEFAULT_SITE_TITLE);
  const bodyClass = page?.bodyClass || 'home blog ind';

  const seoTitle = cleanRenyiTitleForSeo(patchRenyiNewsPageTitle(title, canonicalPath));
  const h1 = getRenyiSeoPageType(canonicalPath) === 'home' ? RENYI_COMPANY_NAMES[locale] : getRenyiSeoHeading(seoTitle, locale);

  return {
    title: seoTitle,
    description: getRenyiMetaDescription(canonicalPath, seoTitle, locale),
    keywords: [
      RENYI_COMPANY_NAMES[locale],
      'Renyi Machinery',
      '天井钻机',
      'raise boring machinery',
      '矿山机械',
      'hydraulic cylinders',
      '工程机械专用设备',
    ].join(', '),
    h1,
    htmlLang: RENYI_HTML_LANGS[locale],
    canonicalUrl: getRenyiAbsoluteUrl(canonicalPath),
    alternates: getRenyiAlternateLinks(canonicalPath),
    bodyClass: raiseBoringProductConfig
      ? `${bodyClass} renyi-raise-boring-product ${raiseBoringProductConfig.bodyClass}`
      : hydraulicProductConfig
        ? `${bodyClass} renyi-hydraulic-category renyi-hydraulic-product ${hydraulicProductConfig.bodyClass}`
      : hydraulicCategoryConfig
        ? `${bodyClass} renyi-hydraulic-category ${hydraulicCategoryConfig.bodyClass}`
        : mineralProductConfig
          ? `${bodyClass} renyi-hydraulic-category renyi-hydraulic-product ${mineralProductConfig.bodyClass}`
          : mineralCategoryConfig
            ? `${bodyClass} renyi-hydraulic-category ${mineralCategoryConfig.bodyClass}`
            : specialEquipmentProductConfig
              ? `${bodyClass} renyi-hydraulic-category renyi-hydraulic-product ${specialEquipmentProductConfig.bodyClass}`
              : specialEquipmentCategoryConfig
                ? `${bodyClass} renyi-hydraulic-category ${specialEquipmentCategoryConfig.bodyClass}`
                : structuralProductConfig
                  ? `${bodyClass} renyi-structural-category renyi-hydraulic-product ${structuralProductConfig.bodyClass}`
                  : structuralCategoryConfig
                    ? `${bodyClass} renyi-hydraulic-category ${structuralCategoryConfig.bodyClass}`
                  : isServicePage
                    ? `${bodyClass} renyi-service-quality-page`
                    : bodyClass,
    bodyStyle: page?.bodyStyle ? localizeRenyiLegacyAssetUrlsHtml(page.bodyStyle) : undefined,
  };
}
