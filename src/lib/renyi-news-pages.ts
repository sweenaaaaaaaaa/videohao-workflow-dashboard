type RenyiNewsLocale = 'zh' | 'en' | 'ru' | 'es';

export const RENYI_HIGH_TECH_CERTIFICATE_IMAGE = '/renyi/renyi-news-high-tech-certificate-web.jpg';
export const RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE = '/renyi/renyi-news-high-tech-enterprise-plaque-web.jpg';
export const RENYI_ISO9001_CERTIFICATE_IMAGE = '/renyi/renyi-news-iso9001-certificate-web.jpg';
export const RENYI_ISO9001_CERTIFICATE_CN_IMAGE = '/renyi/renyi-news-iso9001-certificate-cn-web.jpg';
export const RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE = '/renyi/renyi-news-jiangxi-copper-localization-award-web.jpg';
export const RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE = '/renyi/renyi-news-at1500-mining-safety-certificate-web.jpg';
export const RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE = '/renyi/renyi-news-at2000-mining-safety-certificate-web.jpg';
export const RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE = '/renyi/renyi-news-mining-truck-remote-fault-detection-software-copyright-web.jpg';
export const RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE = '/renyi/renyi-news-hydraulic-cylinder-test-bench-plc-software-copyright-web.jpg';
export const RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE = '/renyi/renyi-news-wheel-motor-dismantling-machine-swing-mechanism-patent-web.jpg';
export const RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE = '/renyi/renyi-news-wheel-motor-dismantling-machine-floating-tray-patent-web.jpg';
export const RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE = '/renyi/renyi-news-wheel-motor-dismantling-machine-patent-web.jpg';
export const RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE = '/renyi/renyi-news-multi-body-wheel-rim-dismantling-machine-patent-web.jpg';
export const RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-flotation-agitator-main-shaft-support-fixing-device-patent-web.jpg';
export const RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE = '/renyi/renyi-news-center-aeration-flotation-high-speed-rotary-valve-patent-web.jpg';
export const RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-hydraulic-cylinder-inner-wall-rolling-device-patent-web.jpg';
export const RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-lathe-shaft-grinding-polishing-head-device-patent-web.jpg';
export const RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-hydraulic-cylinder-inner-wall-grinding-device-patent-web.jpg';
export const RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-flotation-agitator-upper-lower-shaft-positioning-connection-device-patent-web.jpg';
export const RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE = '/renyi/renyi-news-large-material-transfer-u-shaped-carriage-patent-web.jpg';
export const RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE = '/renyi/renyi-news-large-material-transfer-vehicle-patent-web.jpg';
export const RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE = '/renyi/renyi-news-raise-boring-machine-detachable-cleaning-host-patent-web.jpg';
export const RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE = '/renyi/renyi-news-raise-boring-machine-deformation-resistant-cutterhead-patent-web.jpg';
export const RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE = '/renyi/renyi-news-combinable-wear-resistant-reaming-cutterhead-patent-web.jpg';
export const RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE = '/renyi/renyi-news-heat-dissipation-stable-pump-station-patent-web.jpg';
export const RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE = '/renyi/renyi-news-large-vehicle-wheel-tire-dismounting-hoist-plate-patent-web.jpg';
export const RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE = '/renyi/renyi-news-large-tire-wheel-hub-hoisting-dismantling-machine-hook-device-patent-web.jpg';
export const RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE = '/renyi/renyi-news-multi-station-large-tire-wheel-hub-hoisting-dismantling-machine-patent-web.jpg';
export const RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE = '/renyi/renyi-news-removable-raise-boring-machine-cutter-base-patent-web.jpg';
export const RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE = '/renyi/renyi-news-raise-boring-machine-load-transfer-vertical-horizontal-placement-system-patent-web.jpg';
export const RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE = '/renyi/renyi-news-zega-remanufacturing-authorization-web.jpg';
export const RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE = '/renyi/renyi-news-zega-sales-authorization-web.jpg';
export const RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE = '/renyi/renyi-news-zega-remanufacturing-center-web.jpg';

type RenyiNewsArticle = {
  date: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  listSummary: string;
  paragraphs: string[];
  title: string;
};

const highTechCertificateArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2020-09-11',
    href: '/xinwenzhongxin/renyixinwen/1018',
    imageSrc: RENYI_HIGH_TECH_CERTIFICATE_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司2020年高新技术企业证书，证书编号GR202043000240',
    title: '长沙仁毅获高新技术企业证书，创新制造实力获认可',
    listSummary:
      '证书显示，长沙仁毅机械制造有限公司于2020年9月11日获得高新技术企业认定，证书编号为GR202043000240。这一资质体现了公司在技术研发、制造能力和规范管理方面的综合实力。',
    paragraphs: [
      '近日，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>高新技术企业证书资料完成网站展示更新。证书显示，公司于2020年9月11日获得高新技术企业认定，证书编号为GR202043000240，有效期三年。',
      '高新技术企业认定不仅关注企业研发投入、技术成果转化和自主创新能力，也体现企业在产品技术、组织管理和持续发展方面的综合基础。对于长期深耕矿山装备与<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>的仁毅机械而言，这一<a href="/guanyuxingye#a3">资质荣誉</a>是公司技术积累和研发制造能力的重要体现。',
      '长沙仁毅机械制造有限公司专注<a href="/zuanjixilie">天井钻机系列</a>、<a href="/pro_category/yeyajian">特种油缸</a>、结构件及工程机械关键部件修复改进等产品与服务，持续围绕矿山、工程施工和重型装备应用场景开展技术改进，以可靠制造能力服务客户现场需求。',
      '未来，仁毅机械将继续坚持技术创新和质量优先，围绕专业矿山装备和工程机械备件国产化方向，提升研发、制造、检测和<a href="/fuwuzhichi">服务支持</a>能力，为客户提供更加稳定、可靠的工业级解决方案。',
    ],
  },
  en: {
    date: '2020-09-11',
    href: '/en/xinwenzhongxin/renyixinwen/1018',
    imageSrc: RENYI_HIGH_TECH_CERTIFICATE_IMAGE,
    imageAlt: '2020 High-Tech Enterprise Certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number GR202043000240',
    title: 'Changsha Renyi Recognized with High-Tech Enterprise Certificate',
    listSummary:
      'The certificate shows that Changsha Renyi Machinery Manufacturing Co., Ltd. received High-Tech Enterprise recognition on September 11, 2020, under certificate number GR202043000240.',
    paragraphs: [
      '<a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> has updated its High-Tech Enterprise certificate information on the website. The certificate shows that the company received High-Tech Enterprise recognition on September 11, 2020, under certificate number GR202043000240, with a validity period of three years.',
      'High-Tech Enterprise recognition reflects a company’s foundation in R&D investment, technology commercialization, innovation capability, and standardized management. For Renyi Machinery, which has long focused on mining equipment and <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a>, the certificate represents an important recognition of its technical accumulation and manufacturing capability.',
      'Changsha Renyi Machinery Manufacturing Co., Ltd. focuses on <a href="/en/zuanjixilie">raise boring rigs</a>, <a href="/en/pro_category/yeyajian">special hydraulic cylinders</a>, structural components, and repair and improvement services for key engineering machinery parts. The company continues to improve products around mining, construction, and heavy-equipment application scenarios.',
      'Looking ahead, Renyi Machinery will continue to prioritize technology innovation and quality, strengthening R&D, manufacturing, inspection, and <a href="/en/fuwuzhichi">delivery capabilities</a> to provide stable and reliable industrial solutions for customers.',
    ],
  },
  ru: {
    date: '2020-09-11',
    href: '/ru/xinwenzhongxin/renyixinwen/1018',
    imageSrc: RENYI_HIGH_TECH_CERTIFICATE_IMAGE,
    imageAlt: 'Сертификат высокотехнологичного предприятия Changsha Renyi Machinery Manufacturing Co., Ltd. 2020 года, номер GR202043000240',
    title: 'Changsha Renyi получила сертификат высокотехнологичного предприятия',
    listSummary:
      'Согласно сертификату, Changsha Renyi Machinery Manufacturing Co., Ltd. получила статус высокотехнологичного предприятия 11 сентября 2020 года. Номер сертификата: GR202043000240.',
    paragraphs: [
      '<a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> обновила на сайте информацию о сертификате высокотехнологичного предприятия. Согласно сертификату, компания получила соответствующее признание 11 сентября 2020 года. Номер сертификата: GR202043000240, срок действия - три года.',
      'Статус высокотехнологичного предприятия отражает основу компании в области НИОКР, трансформации технологических результатов, инновационного потенциала и стандартизированного управления. Для Renyi Machinery, которая специализируется на горном оборудовании и <a href="/ru/pro_category/beijianzhongxin">локализации запасных частей для инженерной техники</a>, этот сертификат является важным подтверждением технических накоплений и производственных возможностей.',
      'Changsha Renyi Machinery Manufacturing Co., Ltd. работает с <a href="/ru/zuanjixilie">установками для восстающих выработок</a>, <a href="/ru/pro_category/yeyajian">специальными гидроцилиндрами</a>, металлоконструкциями, а также ремонтом и модернизацией ключевых компонентов инженерной техники. Компания продолжает совершенствовать продукцию для горных, строительных и тяжелых промышленных сценариев.',
      'В дальнейшем Renyi Machinery продолжит придерживаться технологических инноваций и приоритета качества, усиливая возможности разработки, производства, контроля и <a href="/ru/fuwuzhichi">поставки</a>, чтобы предоставлять клиентам стабильные и надежные промышленные решения.',
    ],
  },
  es: {
    date: '2020-09-11',
    href: '/es/xinwenzhongxin/renyixinwen/1018',
    imageSrc: RENYI_HIGH_TECH_CERTIFICATE_IMAGE,
    imageAlt: 'Certificado de empresa de alta tecnología 2020 de Changsha Renyi Machinery Manufacturing Co., Ltd., número GR202043000240',
    title: 'Changsha Renyi obtiene el certificado de empresa de alta tecnología',
    listSummary:
      'El certificado muestra que Changsha Renyi Machinery Manufacturing Co., Ltd. obtuvo el reconocimiento de empresa de alta tecnología el 11 de septiembre de 2020, con el número GR202043000240.',
    paragraphs: [
      '<a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> ha actualizado en el sitio web la información de su certificado de empresa de alta tecnología. El certificado muestra que la empresa obtuvo este reconocimiento el 11 de septiembre de 2020, con el número GR202043000240 y una validez de tres años.',
      'El reconocimiento de empresa de alta tecnología refleja la base de una compañía en inversión en I+D, transformación de resultados técnicos, capacidad de innovación y gestión estandarizada. Para Renyi Machinery, enfocada durante años en equipos mineros y <a href="/es/pro_category/beijianzhongxin">piezas localizadas para maquinaria de ingeniería</a>, este certificado representa una importante validación de su acumulación técnica y capacidad de fabricación.',
      'Changsha Renyi Machinery Manufacturing Co., Ltd. se centra en <a href="/es/zuanjixilie">equipos raise boring</a>, <a href="/es/pro_category/yeyajian">cilindros hidráulicos especiales</a>, componentes estructurales y servicios de reparación y mejora de piezas clave de maquinaria de ingeniería. La empresa sigue mejorando sus productos para escenarios de minería, construcción y equipos pesados.',
      'De cara al futuro, Renyi Machinery continuará priorizando la innovación tecnológica y la calidad, reforzando sus capacidades de I+D, fabricación, inspección y <a href="/es/fuwuzhichi">entrega</a> para ofrecer soluciones industriales estables y fiables a sus clientes.',
    ],
  },
};

const highTechEnterprisePlaqueArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2020',
    href: '/xinwenzhongxin/renyixinwen/1022',
    imageSrc: RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司国家高新技术企业牌匾，湖南省科学技术厅、湖南省财政厅、国家税务总局湖南省税务局，2020年',
    title: '长沙仁毅国家高新技术企业牌匾展示，创新资质持续夯实',
    listSummary:
      '国家高新技术企业牌匾显示，长沙仁毅机械制造有限公司于2020年获得国家高新技术企业认定，该荣誉由湖南省科学技术厅、湖南省财政厅、国家税务总局湖南省税务局联合颁发。',
    paragraphs: [
      '根据国家高新技术企业牌匾资料，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>于2020年获得国家高新技术企业认定。该牌匾由湖南省科学技术厅、湖南省财政厅、国家税务总局湖南省税务局联合颁发，与公司此前展示的<a href="/xinwenzhongxin/renyixinwen/1018">高新技术企业证书</a>共同构成企业创新资质的重要证明。',
      '国家高新技术企业认定重点考察企业研发投入、核心技术、成果转化能力和持续创新基础。对于长期服务矿山装备和工程机械应用场景的仁毅机械而言，该荣誉体现了公司在<a href="/zuanjixilie">天井钻机系列</a>、<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>及关键部件修复改进方面的技术积累。',
      '围绕矿山施工、设备维修和重型装备配套需求，长沙仁毅持续完善<a href="/pro_category/yeyajian">油缸与液压件</a>、结构件、专用设备和现场服务能力，将技术创新转化为更稳定的产品质量和更可控的交付体验。',
      '未来，仁毅机械将继续把国家高新技术企业资质作为<a href="/guanyuxingye#a3">企业荣誉</a>和研发管理的重要支撑，持续提升<a href="/fuwuzhichi#a1">产品质量控制</a>、制造工艺和<a href="/fuwuzhichi">服务支持</a>能力，为矿山与工程机械客户提供可靠的工业级解决方案。',
    ],
  },
  en: {
    date: '2020',
    href: '/en/xinwenzhongxin/renyixinwen/1022',
    imageSrc: RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE,
    imageAlt: 'National High-Tech Enterprise plaque for Changsha Renyi Machinery Manufacturing Co., Ltd., issued by Hunan provincial authorities in 2020',
    title: 'Changsha Renyi Displays National High-Tech Enterprise Plaque',
    listSummary:
      'The National High-Tech Enterprise plaque shows that Changsha Renyi Machinery Manufacturing Co., Ltd. received this recognition in 2020, jointly issued by Hunan provincial science, finance, and taxation authorities.',
    paragraphs: [
      'According to the National High-Tech Enterprise plaque, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> received National High-Tech Enterprise recognition in 2020. Together with the company’s <a href="/en/xinwenzhongxin/renyixinwen/1018">High-Tech Enterprise certificate</a>, the plaque is an important record of Renyi Machinery’s innovation qualifications.',
      'National High-Tech Enterprise recognition evaluates R&D investment, core technologies, commercialization of technical achievements, and sustained innovation capability. For Renyi Machinery, which serves mining equipment and engineering machinery applications, the honor reflects technical accumulation in <a href="/en/zuanjixilie">raise boring rig equipment</a>, <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a>, and key component repair and improvement.',
      'Around mining construction, equipment maintenance, and heavy-equipment support needs, Changsha Renyi continues to strengthen <a href="/en/pro_category/yeyajian">hydraulic cylinders and hydraulic parts</a>, structural components, dedicated equipment, and field service capabilities, turning technical innovation into more stable product quality and controlled delivery.',
      'Looking ahead, Renyi Machinery will continue using its National High-Tech Enterprise qualification as an important part of its <a href="/en/guanyuxingye#a3">corporate honors</a> and R&D management foundation, improving <a href="/en/fuwuzhichi#a1">product quality control</a>, manufacturing processes, and <a href="/en/fuwuzhichi">service support</a> for customers in mining and engineering machinery markets.',
    ],
  },
  ru: {
    date: '2020',
    href: '/ru/xinwenzhongxin/renyixinwen/1022',
    imageSrc: RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE,
    imageAlt: 'Памятная табличка национального высокотехнологичного предприятия Changsha Renyi Machinery Manufacturing Co., Ltd., выданная органами провинции Хунань в 2020 году',
    title: 'Changsha Renyi представляет табличку национального высокотехнологичного предприятия',
    listSummary:
      'Табличка национального высокотехнологичного предприятия подтверждает, что Changsha Renyi Machinery Manufacturing Co., Ltd. получила это признание в 2020 году от органов науки, финансов и налоговой службы провинции Хунань.',
    paragraphs: [
      'Согласно табличке национального высокотехнологичного предприятия, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> получила это признание в 2020 году. Вместе с ранее опубликованным <a href="/ru/xinwenzhongxin/renyixinwen/1018">сертификатом высокотехнологичного предприятия</a> табличка является важным подтверждением инновационной квалификации Renyi Machinery.',
      'Статус национального высокотехнологичного предприятия учитывает инвестиции в НИОКР, ключевые технологии, коммерциализацию технических результатов и устойчивую инновационную базу. Для Renyi Machinery, обслуживающей горное оборудование и инженерную технику, эта награда отражает технический опыт в области <a href="/ru/zuanjixilie">оборудования для восстающих выработок</a>, <a href="/ru/pro_category/beijianzhongxin">локализации запасных частей для инженерной техники</a> и модернизации ключевых компонентов.',
      'Для задач горного строительства, ремонта оборудования и поддержки тяжелой техники Changsha Renyi продолжает развивать <a href="/ru/pro_category/yeyajian">гидроцилиндры и гидравлические детали</a>, металлоконструкции, специальное оборудование и сервис на объекте, превращая технические разработки в стабильное качество продукции и управляемую поставку.',
      'В дальнейшем Renyi Machinery будет использовать квалификацию национального высокотехнологичного предприятия как важную часть <a href="/ru/guanyuxingye#a3">корпоративных наград</a> и системы управления разработками, совершенствуя <a href="/ru/fuwuzhichi#a1">контроль качества продукции</a>, производственные процессы и <a href="/ru/fuwuzhichi">сервисную поддержку</a> для клиентов в горной и строительной отраслях.',
    ],
  },
  es: {
    date: '2020',
    href: '/es/xinwenzhongxin/renyixinwen/1022',
    imageSrc: RENYI_HIGH_TECH_ENTERPRISE_PLAQUE_IMAGE,
    imageAlt: 'Placa de Empresa Nacional de Alta Tecnología de Changsha Renyi Machinery Manufacturing Co., Ltd., emitida por autoridades de Hunan en 2020',
    title: 'Changsha Renyi exhibe la placa de Empresa Nacional de Alta Tecnología',
    listSummary:
      'La placa de Empresa Nacional de Alta Tecnología muestra que Changsha Renyi Machinery Manufacturing Co., Ltd. recibió este reconocimiento en 2020, emitido por las autoridades provinciales de ciencia, finanzas y tributación de Hunan.',
    paragraphs: [
      'Según la placa de Empresa Nacional de Alta Tecnología, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> recibió este reconocimiento en 2020. Junto con el <a href="/es/xinwenzhongxin/renyixinwen/1018">certificado de empresa de alta tecnología</a> publicado anteriormente, la placa constituye una prueba importante de la calificación innovadora de Renyi Machinery.',
      'El reconocimiento de Empresa Nacional de Alta Tecnología evalúa inversión en I+D, tecnologías clave, transformación de resultados técnicos y capacidad de innovación continua. Para Renyi Machinery, que atiende aplicaciones de equipos mineros y maquinaria de ingeniería, este honor refleja acumulación técnica en <a href="/es/zuanjixilie">equipos raise boring</a>, <a href="/es/pro_category/beijianzhongxin">repuestos localizados para maquinaria de ingeniería</a> y mejora de componentes clave.',
      'En torno a la construcción minera, el mantenimiento de equipos y el soporte para maquinaria pesada, Changsha Renyi sigue fortaleciendo <a href="/es/pro_category/yeyajian">cilindros hidráulicos y componentes hidráulicos</a>, estructuras, equipos dedicados y servicio en campo, convirtiendo la innovación técnica en calidad de producto más estable y entregas más controladas.',
      'De cara al futuro, Renyi Machinery seguirá utilizando la calificación de Empresa Nacional de Alta Tecnología como parte importante de sus <a href="/es/guanyuxingye#a3">honores corporativos</a> y su gestión de I+D, mejorando el <a href="/es/fuwuzhichi#a1">control de calidad del producto</a>, los procesos de fabricación y el <a href="/es/fuwuzhichi">soporte de servicio</a> para clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const jiangxiCopperLocalizationAwardArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2014-01',
    href: '/xinwenzhongxin/renyixinwen/1023',
    imageSrc: RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE,
    imageAlt: '江铜股份材料设备部授予长沙仁毅机械制造有限公司优秀国产化合作伙伴奖杯，2014年1月',
    title: '长沙仁毅获江铜优秀国产化合作伙伴认可，备件协作能力获肯定',
    listSummary:
      '奖杯显示，江铜股份材料设备部授予长沙仁毅机械制造有限公司“优秀国产化合作伙伴”荣誉，时间为2014年1月，体现了仁毅在矿山装备备件国产化和客户现场协作中的服务能力。',
    paragraphs: [
      '根据江铜优秀国产化合作伙伴奖杯资料，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>于2014年1月获得江铜股份材料设备部“优秀国产化合作伙伴”认可。这一荣誉来自客户侧供应链与设备管理场景，记录了仁毅机械在矿山装备备件配套和国产化协作中的长期服务基础。',
      '矿山装备国产化合作不仅是单一零部件供应，更涉及现场工况理解、材质与工艺匹配、试制验证、交付响应和使用反馈闭环。仁毅机械围绕<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>、<a href="/pro_category/yeyajian">液压件与油缸维修</a>以及关键结构件改进，持续服务矿山企业设备保障需求。',
      '面向大型矿山客户，稳定的备件保障能力需要研发、加工、检验和售后服务协同推进。此次江铜相关荣誉，也从客户合作维度补充了公司<a href="/guanyuxingye#a3">资质荣誉</a>体系，体现出仁毅机械在矿山设备使用场景中的问题响应和技术配合能力。',
      '未来，长沙仁毅将继续围绕<a href="/zuanjixilie">天井钻机系列装备</a>、备件国产化和维修支持，完善<a href="/fuwuzhichi#a1">产品质量控制</a>与<a href="/fuwuzhichi">服务支持流程</a>，为矿山、冶金和工程机械客户提供更可靠的设备生命周期服务。',
    ],
  },
  en: {
    date: '2014-01',
    href: '/en/xinwenzhongxin/renyixinwen/1023',
    imageSrc: RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE,
    imageAlt: 'Excellent Localization Partner trophy awarded by Jiangxi Copper Co., Ltd. Materials and Equipment Department to Changsha Renyi Machinery Manufacturing Co., Ltd. in January 2014',
    title: 'Changsha Renyi Recognized by Jiangxi Copper as Excellent Localization Partner',
    listSummary:
      'The trophy records that the Materials and Equipment Department of Jiangxi Copper Co., Ltd. recognized Changsha Renyi Machinery Manufacturing Co., Ltd. as an “Excellent Localization Partner” in January 2014.',
    paragraphs: [
      'According to the Excellent Localization Partner trophy, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> was recognized by the Materials and Equipment Department of Jiangxi Copper Co., Ltd. in January 2014. The honor reflects customer-side acknowledgement of Renyi Machinery’s work in mining equipment parts support and localization cooperation.',
      'Localization cooperation for mining equipment parts is more than component supply. It requires understanding site operating conditions, matching materials and processes, trial production, inspection, delivery response, and feedback from field use. Renyi Machinery has continued to support mining customers through <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a>, <a href="/en/pro_category/yeyajian">hydraulic parts and cylinder repair</a>, and key structural component improvements.',
      'For large mining customers, reliable parts support depends on coordinated R&D, machining, quality inspection, and after-sales response. This Jiangxi Copper-related recognition adds a customer cooperation perspective to Renyi Machinery’s <a href="/en/guanyuxingye#a3">corporate honors</a>, showing its practical support capability in equipment maintenance scenarios.',
      'Renyi Machinery will continue improving services around <a href="/en/zuanjixilie">raise boring equipment</a>, localized parts, and maintenance support, strengthening <a href="/en/fuwuzhichi#a1">product quality control</a> and <a href="/en/fuwuzhichi">service workflows</a> to provide more dependable equipment lifecycle support for mining, metallurgy, and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2014-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1023',
    imageSrc: RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE,
    imageAlt: 'Награда Excellent Localization Partner, врученная отделом материалов и оборудования Jiangxi Copper Co., Ltd. компании Changsha Renyi Machinery Manufacturing Co., Ltd. в январе 2014 года',
    title: 'Changsha Renyi получила признание Jiangxi Copper как партнер по локализации',
    listSummary:
      'На награде указано, что отдел материалов и оборудования Jiangxi Copper Co., Ltd. отметил Changsha Renyi Machinery Manufacturing Co., Ltd. как “Excellent Localization Partner” в январе 2014 года.',
    paragraphs: [
      'Согласно награде Excellent Localization Partner, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> получила признание отдела материалов и оборудования Jiangxi Copper Co., Ltd. в январе 2014 года. Эта награда отражает оценку клиента за поддержку запасных частей для горного оборудования и сотрудничество по локализации.',
      'Локализация запасных частей для горной техники не ограничивается поставкой отдельных компонентов. Она включает понимание условий эксплуатации, подбор материалов и процессов, опытное изготовление, контроль, оперативную поставку и обратную связь с площадки. Renyi Machinery развивает направления <a href="/ru/pro_category/beijianzhongxin">локализации запасных частей для инженерной техники</a>, <a href="/ru/pro_category/yeyajian">гидравлических деталей и ремонта цилиндров</a>, а также доработки ключевых металлоконструкций.',
      'Для крупных горнодобывающих клиентов надежное обеспечение запасными частями требует совместной работы разработки, механообработки, проверки качества и сервиса. Признание Jiangxi Copper дополняет <a href="/ru/guanyuxingye#a3">корпоративные награды</a> Renyi Machinery с точки зрения клиентского сотрудничества и практической поддержки эксплуатации оборудования.',
      'Renyi Machinery продолжит развивать услуги вокруг <a href="/ru/zuanjixilie">оборудования для восстающих выработок</a>, локализованных запасных частей и ремонтной поддержки, усиливая <a href="/ru/fuwuzhichi#a1">контроль качества продукции</a> и <a href="/ru/fuwuzhichi">сервисные процессы</a> для клиентов горной, металлургической и инженерной отраслей.',
    ],
  },
  es: {
    date: '2014-01',
    href: '/es/xinwenzhongxin/renyixinwen/1023',
    imageSrc: RENYI_JIANGXI_COPPER_LOCALIZATION_AWARD_IMAGE,
    imageAlt: 'Trofeo Excellent Localization Partner otorgado por el Departamento de Materiales y Equipos de Jiangxi Copper Co., Ltd. a Changsha Renyi Machinery Manufacturing Co., Ltd. en enero de 2014',
    title: 'Changsha Renyi reconocida por Jiangxi Copper como socio destacado de localización',
    listSummary:
      'El trofeo muestra que el Departamento de Materiales y Equipos de Jiangxi Copper Co., Ltd. reconoció a Changsha Renyi Machinery Manufacturing Co., Ltd. como “Excellent Localization Partner” en enero de 2014.',
    paragraphs: [
      'Según el trofeo Excellent Localization Partner, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> recibió en enero de 2014 el reconocimiento del Departamento de Materiales y Equipos de Jiangxi Copper Co., Ltd. La distinción refleja la valoración del cliente por el soporte de repuestos mineros y la cooperación de localización.',
      'La localización de repuestos para equipos mineros no se limita al suministro de componentes. Implica comprender las condiciones de operación, adaptar materiales y procesos, realizar pruebas, controlar calidad, responder en la entrega y cerrar el ciclo con comentarios de uso en campo. Renyi Machinery trabaja en <a href="/es/pro_category/beijianzhongxin">repuestos localizados para maquinaria de ingeniería</a>, <a href="/es/pro_category/yeyajian">componentes hidráulicos y reparación de cilindros</a>, y mejora de piezas estructurales clave.',
      'Para clientes mineros de gran escala, la estabilidad del suministro de repuestos depende de la coordinación entre I+D, mecanizado, inspección y servicio posventa. Este reconocimiento relacionado con Jiangxi Copper añade una perspectiva de cooperación con clientes a los <a href="/es/guanyuxingye#a3">honores corporativos</a> de Renyi Machinery y demuestra su capacidad de apoyo práctico en mantenimiento de equipos.',
      'Renyi Machinery seguirá mejorando sus servicios para <a href="/es/zuanjixilie">equipos raise boring</a>, repuestos localizados y soporte de mantenimiento, reforzando el <a href="/es/fuwuzhichi#a1">control de calidad del producto</a> y los <a href="/es/fuwuzhichi">procesos de servicio</a> para clientes de minería, metalurgia y maquinaria de ingeniería.',
    ],
  },
};

const iso9001CertificateArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2020-05-19',
    href: '/xinwenzhongxin/renyixinwen/1019',
    imageSrc: RENYI_ISO9001_CERTIFICATE_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司ISO 9001:2015质量管理体系认证英文证书，证书编号U91912Q030594R1S',
    title: '长沙仁毅通过ISO 9001:2015质量管理体系认证',
    listSummary:
      '证书显示，长沙仁毅机械制造有限公司质量管理体系符合ISO 9001:2015标准，认证范围覆盖天井钻机、潜孔钻机、油缸、销轴、高强度结构件、轮胎拆卸设备及工程机械维修技术支持。',
    paragraphs: [
      '根据英文版管理体系认证证书，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>的质量管理体系符合ISO 9001:2015标准。证书签发日期为2020年5月19日，证书编号为U91912Q030594R1S，有效期至2023年5月18日。',
      '该证书覆盖范围包括天井/反井钻机、潜孔钻机、油缸、销轴、高强度结构件、轮胎拆卸设备、电动轮轮毂电机拆装台车，以及工程机械维修与技术支持。相关内容与公司长期面向矿山工程场景提供<a href="/zuanjixilie">天井钻机系列装备</a>、<a href="/pro_category/yeyajian">油缸与液压件</a>和<a href="/pro_category/beijianzhongxin">工程机械备件国产化服务</a>的业务方向一致。',
      'ISO 9001:2015质量管理体系认证强调过程管理、质量控制和持续改进。对于仁毅机械而言，这一证书既是<a href="/guanyuxingye#a3">企业资质荣誉</a>的重要组成部分，也为产品研发、制造加工、检验交付和现场服务提供了规范化管理依据。',
      '未来，仁毅机械将继续围绕专业矿山装备和工程机械关键部件，完善<a href="/fuwuzhichi#a1">产品质量控制</a>与<a href="/fuwuzhichi">服务支持体系</a>，为矿山、工程施工和重型装备客户提供更稳定的工业级解决方案。',
    ],
  },
  en: {
    date: '2020-05-19',
    href: '/en/xinwenzhongxin/renyixinwen/1019',
    imageSrc: RENYI_ISO9001_CERTIFICATE_IMAGE,
    imageAlt: 'ISO 9001:2015 Quality Management System certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number U91912Q030594R1S',
    title: 'Changsha Renyi Holds ISO 9001:2015 Quality Management Certification',
    listSummary:
      'The certificate shows that Changsha Renyi Machinery Manufacturing Co., Ltd. conforms to ISO 9001:2015, covering raise boring rigs, in-the-hole drills, oil cylinders, pin shafts, high-strength structural parts, tyre dismantling equipment, and engineering machinery maintenance support.',
    paragraphs: [
      'According to the English management system certificate, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> conforms to the ISO 9001:2015 quality management system standard. The certificate was issued on May 19, 2020, under certificate number U91912Q030594R1S, and was valid until May 18, 2023.',
      'The certified scope covers day and reverse drilling rigs, in-the-hole drills, oil cylinders, pin shafts, high-strength structural parts, tyre dismantling machines, electric wheel motor dismantling trolleys, and engineering machinery maintenance and technical support. This scope matches Renyi Machinery’s focus on <a href="/en/zuanjixilie">raise boring equipment</a>, <a href="/en/pro_category/yeyajian">hydraulic cylinders and hydraulic parts</a>, and <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts services</a> for mining and construction applications.',
      'ISO 9001:2015 certification emphasizes process management, quality control, and continual improvement. For Renyi Machinery, the certificate is an important part of its <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, while also supporting standardized management across product development, machining, inspection, delivery, and field service.',
      'Looking ahead, Renyi Machinery will continue to improve <a href="/en/fuwuzhichi#a1">product quality control</a> and its <a href="/en/fuwuzhichi">service support system</a> around specialized mining equipment and key engineering machinery components, providing reliable industrial solutions for customers.',
    ],
  },
  ru: {
    date: '2020-05-19',
    href: '/ru/xinwenzhongxin/renyixinwen/1019',
    imageSrc: RENYI_ISO9001_CERTIFICATE_IMAGE,
    imageAlt: 'Сертификат системы менеджмента качества ISO 9001:2015 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер U91912Q030594R1S',
    title: 'Changsha Renyi имеет сертификацию ISO 9001:2015',
    listSummary:
      'Сертификат подтверждает соответствие системы менеджмента качества Changsha Renyi Machinery Manufacturing Co., Ltd. стандарту ISO 9001:2015 и охватывает буровые установки, гидроцилиндры, высокопрочные конструкции, оборудование для демонтажа шин и техническую поддержку инженерной техники.',
    paragraphs: [
      'Согласно англоязычному сертификату системы менеджмента, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> соответствует стандарту ISO 9001:2015. Сертификат выдан 19 мая 2020 года, номер U91912Q030594R1S, срок действия - до 18 мая 2023 года.',
      'Область сертификации включает буровые установки для прямого и обратного бурения, погружные буровые установки, масляные цилиндры, пальцы, высокопрочные конструкционные детали, оборудование для демонтажа шин, тележки для демонтажа мотор-колес, а также обслуживание и техническую поддержку инженерной техники. Это соответствует направлениям Renyi Machinery в области <a href="/ru/zuanjixilie">оборудования для восстающих выработок</a>, <a href="/ru/pro_category/yeyajian">гидроцилиндров и гидравлических деталей</a> и <a href="/ru/pro_category/beijianzhongxin">локализации запасных частей для инженерной техники</a>.',
      'Сертификация ISO 9001:2015 уделяет особое внимание управлению процессами, контролю качества и постоянному улучшению. Для Renyi Machinery этот сертификат является важной частью <a href="/ru/guanyuxingye#a3">квалификаций и наград компании</a> и поддерживает стандартизированное управление разработкой, обработкой, контролем, поставкой и сервисом.',
      'В дальнейшем Renyi Machinery продолжит совершенствовать <a href="/ru/fuwuzhichi#a1">контроль качества продукции</a> и <a href="/ru/fuwuzhichi">систему сервисной поддержки</a>, предоставляя надежные промышленные решения для горнодобывающих, строительных и тяжелых машин.',
    ],
  },
  es: {
    date: '2020-05-19',
    href: '/es/xinwenzhongxin/renyixinwen/1019',
    imageSrc: RENYI_ISO9001_CERTIFICATE_IMAGE,
    imageAlt: 'Certificado ISO 9001:2015 del sistema de gestión de calidad de Changsha Renyi Machinery Manufacturing Co., Ltd., número U91912Q030594R1S',
    title: 'Changsha Renyi cuenta con certificación ISO 9001:2015',
    listSummary:
      'El certificado muestra que el sistema de gestión de calidad de Changsha Renyi Machinery Manufacturing Co., Ltd. cumple con ISO 9001:2015 y cubre equipos de perforación, cilindros hidráulicos, piezas estructurales de alta resistencia, equipos de desmontaje de neumáticos y soporte técnico para maquinaria de ingeniería.',
    paragraphs: [
      'Según el certificado de gestión en inglés, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> cumple con la norma ISO 9001:2015 del sistema de gestión de calidad. El certificado fue emitido el 19 de mayo de 2020, con el número U91912Q030594R1S, y tuvo validez hasta el 18 de mayo de 2023.',
      'El alcance certificado incluye equipos de perforación directa e inversa, perforadoras en fondo, cilindros de aceite, pasadores, piezas estructurales de alta resistencia, máquinas desmontadoras de neumáticos, carros para desmontaje de motores de rueda eléctrica, así como mantenimiento y soporte técnico para maquinaria de ingeniería. Este alcance corresponde al enfoque de Renyi Machinery en <a href="/es/zuanjixilie">equipos raise boring</a>, <a href="/es/pro_category/yeyajian">cilindros hidráulicos y componentes hidráulicos</a> y <a href="/es/pro_category/beijianzhongxin">servicios de localización de repuestos para maquinaria de ingeniería</a>.',
      'La certificación ISO 9001:2015 destaca la gestión de procesos, el control de calidad y la mejora continua. Para Renyi Machinery, este certificado forma parte importante de sus <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a> y respalda la gestión estandarizada en desarrollo de productos, mecanizado, inspección, entrega y servicio en campo.',
      'De cara al futuro, Renyi Machinery continuará mejorando el <a href="/es/fuwuzhichi#a1">control de calidad del producto</a> y su <a href="/es/fuwuzhichi">sistema de soporte de servicio</a>, ofreciendo soluciones industriales fiables para minería, construcción y maquinaria pesada.',
    ],
  },
};

const iso9001ChineseCertificateArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2020-05-19',
    href: '/xinwenzhongxin/renyixinwen/1020',
    imageSrc: RENYI_ISO9001_CERTIFICATE_CN_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司中文ISO 9001:2015管理体系认证证书，证书编号U91912Q030594R1S',
    title: '长沙仁毅中文ISO 9001证书展示，质量管理体系持续完善',
    listSummary:
      '中文证书显示，长沙仁毅机械制造有限公司质量管理体系符合ISO 9001:2015标准，覆盖工程机械天/反井钻机、潜孔钻机、油缸、销轴、高强度结构件、轮胎拆卸设备及工程机械维修技术支持。',
    paragraphs: [
      '根据中文管理体系认证证书，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>质量管理体系符合ISO 9001:2015标准。证书编号为U91912Q030594R1S，本次发证日期为2020年5月19日，有效期至2023年5月18日。',
      '证书覆盖范围包括工程机械天/反井钻机、潜孔钻机、油缸、销轴类、高强度结构件、轮胎拆卸机、电动轮轮马达拆装小车的设计和制造，以及工程机械维修与技术支持。该范围与仁毅机械围绕<a href="/zuanjixilie">天井钻机系列</a>、<a href="/pro_category/yeyajian">特种油缸与液压件</a>、<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>开展的产品和服务形成对应。',
      'ISO 9001:2015管理体系认证强调以过程为基础的质量管理、风险控制和持续改进。对于长期服务矿山、工程施工和重型装备场景的仁毅机械而言，这张中文证书进一步说明公司在<a href="/fuwuzhichi#a1">产品质量管理</a>、制造流程和交付服务方面具备规范化基础。',
      '仁毅机械将继续把质量管理体系要求落实到研发设计、加工制造、检测验证和<a href="/fuwuzhichi">售后服务支持</a>全过程，持续提升矿山装备与工程机械关键部件的稳定性和可靠性。',
    ],
  },
  en: {
    date: '2020-05-19',
    href: '/en/xinwenzhongxin/renyixinwen/1020',
    imageSrc: RENYI_ISO9001_CERTIFICATE_CN_IMAGE,
    imageAlt: 'Chinese ISO 9001:2015 management system certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., certificate number U91912Q030594R1S',
    title: 'Changsha Renyi Chinese ISO 9001 Certificate Shows Quality System Strength',
    listSummary:
      'The Chinese certificate confirms that Changsha Renyi Machinery Manufacturing Co., Ltd. conforms to ISO 9001:2015, covering raise boring rigs, in-the-hole drills, oil cylinders, pin shafts, high-strength structural parts, tyre dismantling equipment, and engineering machinery service support.',
    paragraphs: [
      'According to the Chinese management system certificate, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> conforms to ISO 9001:2015. The certificate number is U91912Q030594R1S, with an issue date of May 19, 2020 and validity until May 18, 2023.',
      'The certified scope includes construction machinery day/reverse drilling rigs, in-the-hole drills, oil cylinders, pin shaft parts, high-strength structural components, tyre dismantling machines, electric wheel motor dismantling trolleys, as well as engineering machinery maintenance and technical support. This scope corresponds with Renyi Machinery’s <a href="/en/zuanjixilie">raise boring rig series</a>, <a href="/en/pro_category/yeyajian">special hydraulic cylinders and hydraulic parts</a>, and <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a> business.',
      'ISO 9001:2015 emphasizes process-based quality management, risk control, and continual improvement. For Renyi Machinery, which serves mining, construction, and heavy-equipment applications, the Chinese certificate further supports its standardized foundation in <a href="/en/fuwuzhichi#a1">product quality management</a>, manufacturing processes, and delivery service.',
      'Renyi Machinery will continue applying quality management requirements across R&D, machining, inspection, and <a href="/en/fuwuzhichi">after-sales service support</a>, improving the stability and reliability of mining equipment and key engineering machinery components.',
    ],
  },
  ru: {
    date: '2020-05-19',
    href: '/ru/xinwenzhongxin/renyixinwen/1020',
    imageSrc: RENYI_ISO9001_CERTIFICATE_CN_IMAGE,
    imageAlt: 'Китайский сертификат системы менеджмента ISO 9001:2015 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер U91912Q030594R1S',
    title: 'Китайский сертификат ISO 9001 Changsha Renyi подтверждает систему качества',
    listSummary:
      'Китайский сертификат подтверждает соответствие Changsha Renyi Machinery Manufacturing Co., Ltd. стандарту ISO 9001:2015 и охватывает буровые установки, гидроцилиндры, пальцы, высокопрочные конструкции, оборудование для демонтажа шин и техническую поддержку инженерной техники.',
    paragraphs: [
      'Согласно китайскому сертификату системы менеджмента, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> соответствует стандарту ISO 9001:2015. Номер сертификата U91912Q030594R1S, дата выдачи - 19 мая 2020 года, срок действия - до 18 мая 2023 года.',
      'Область сертификации включает буровые установки прямого и обратного бурения для инженерной техники, погружные буровые установки, масляные цилиндры, пальцы, высокопрочные конструкционные детали, машины для демонтажа шин, тележки для демонтажа мотор-колес, а также ремонт и техническую поддержку инженерной техники. Это соответствует направлениям Renyi Machinery: <a href="/ru/zuanjixilie">установки для восстающих выработок</a>, <a href="/ru/pro_category/yeyajian">специальные гидроцилиндры и гидравлические детали</a>, а также <a href="/ru/pro_category/beijianzhongxin">локализация запасных частей для инженерной техники</a>.',
      'ISO 9001:2015 подчеркивает процессный подход к управлению качеством, контроль рисков и постоянное улучшение. Для Renyi Machinery, обслуживающей горнодобывающие, строительные и тяжелые промышленные сценарии, этот сертификат подтверждает стандартизированную основу <a href="/ru/fuwuzhichi#a1">управления качеством продукции</a>, производственных процессов и поставки.',
      'Renyi Machinery продолжит внедрять требования системы качества в разработку, механическую обработку, контроль и <a href="/ru/fuwuzhichi">послепродажную сервисную поддержку</a>, повышая стабильность и надежность горного оборудования и ключевых компонентов инженерной техники.',
    ],
  },
  es: {
    date: '2020-05-19',
    href: '/es/xinwenzhongxin/renyixinwen/1020',
    imageSrc: RENYI_ISO9001_CERTIFICATE_CN_IMAGE,
    imageAlt: 'Certificado chino del sistema de gestión ISO 9001:2015 de Changsha Renyi Machinery Manufacturing Co., Ltd., número U91912Q030594R1S',
    title: 'El certificado chino ISO 9001 de Changsha Renyi confirma su sistema de calidad',
    listSummary:
      'El certificado chino confirma que Changsha Renyi Machinery Manufacturing Co., Ltd. cumple con ISO 9001:2015 y cubre equipos raise boring, perforadoras en fondo, cilindros, pasadores, piezas estructurales de alta resistencia, equipos de desmontaje de neumáticos y soporte técnico de maquinaria de ingeniería.',
    paragraphs: [
      'Según el certificado chino del sistema de gestión, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> cumple con ISO 9001:2015. El número de certificado es U91912Q030594R1S, emitido el 19 de mayo de 2020 y válido hasta el 18 de mayo de 2023.',
      'El alcance certificado incluye equipos de perforación directa e inversa para maquinaria de ingeniería, perforadoras en fondo, cilindros de aceite, pasadores, piezas estructurales de alta resistencia, máquinas desmontadoras de neumáticos, carros para desmontaje de motores de rueda eléctrica, así como mantenimiento y soporte técnico de maquinaria de ingeniería. Este alcance coincide con las áreas de Renyi Machinery en <a href="/es/zuanjixilie">equipos raise boring</a>, <a href="/es/pro_category/yeyajian">cilindros hidráulicos especiales y componentes hidráulicos</a> y <a href="/es/pro_category/beijianzhongxin">localización de repuestos para maquinaria de ingeniería</a>.',
      'ISO 9001:2015 enfatiza la gestión de calidad basada en procesos, el control de riesgos y la mejora continua. Para Renyi Machinery, que atiende aplicaciones de minería, construcción y equipos pesados, este certificado respalda su base estandarizada en <a href="/es/fuwuzhichi#a1">gestión de calidad del producto</a>, procesos de fabricación y servicio de entrega.',
      'Renyi Machinery continuará aplicando los requisitos del sistema de calidad en I+D, mecanizado, inspección y <a href="/es/fuwuzhichi">soporte posventa</a>, mejorando la estabilidad y fiabilidad de los equipos mineros y componentes clave de maquinaria de ingeniería.',
    ],
  },
};

const at1500MiningSafetyCertificateArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2020-04-09',
    href: '/xinwenzhongxin/renyixinwen/1026',
    imageSrc: RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司AT-1500天井钻机矿用产品安全标志证书，安全标志编号KED200014，签发日期2020年4月9日，有效期至2025年4月8日',
    title: '长沙仁毅AT-1500天井钻机取得矿用产品安全标志证书',
    listSummary:
      '证书显示，长沙仁毅机械制造有限公司AT-1500天井钻机取得矿用产品安全标志证书，安全标志编号KED200014，签发日期为2020年4月9日，有效期至2025年4月8日。',
    paragraphs: [
      '根据矿用产品安全标志证书资料，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>AT-1500天井钻机取得矿用产品安全标志证书，安全标志编号为KED200014。证书签发日期为2020年4月9日，有效期至2025年4月8日。',
      '证书列明产品名称为天井钻机，规格型号为AT-1500，产品标准及技术条件包括GB/T 12761-2010、Q/RY 03-2019，适用范围为严格按《金属非金属矿山安全规程》有关规定使用。这一证书与公司面向矿山场景的<a href="/zuanjixilie">天井钻机系列装备</a>研发制造方向相匹配。',
      '矿用产品安全标志强调产品在矿山应用中的合规准入、安全性能和关键技术要求。对于仁毅机械而言，AT-1500天井钻机相关证书既是<a href="/guanyuxingye#a3">企业资质荣誉</a>的重要记录，也体现公司在矿山装备制造、质量控制和安全应用标准方面的持续积累。',
      '未来，长沙仁毅将继续围绕天井钻机、矿山装备和关键零部件，强化<a href="/fuwuzhichi#a1">产品质量控制</a>、制造检验与<a href="/fuwuzhichi">服务支持</a>，为金属与非金属矿山客户提供更可靠的设备与技术保障。',
    ],
  },
  en: {
    date: '2020-04-09',
    href: '/en/xinwenzhongxin/renyixinwen/1026',
    imageSrc: RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'AT-1500 raise boring rig Mining Product Safety Mark certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., safety mark number KED200014, issued on April 9, 2020 and valid until April 8, 2025',
    title: 'Changsha Renyi AT-1500 Raise Boring Rig Receives Mining Product Safety Mark Certificate',
    listSummary:
      'The certificate shows that Changsha Renyi Machinery Manufacturing Co., Ltd. obtained the Mining Product Safety Mark certificate for its AT-1500 raise boring rig, safety mark number KED200014, issued on April 9, 2020.',
    paragraphs: [
      'According to the Mining Product Safety Mark certificate, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> obtained safety mark certification for its AT-1500 raise boring rig. The safety mark number is KED200014, issued on April 9, 2020, and valid until April 8, 2025.',
      'The certificate identifies the product as a raise boring rig, model AT-1500, with product standards and technical conditions including GB/T 12761-2010 and Q/RY 03-2019. Its application scope requires use in accordance with relevant provisions of metal and non-metal mine safety regulations, matching Renyi’s focus on <a href="/en/zuanjixilie">raise boring equipment</a> for mining applications.',
      'The Mining Product Safety Mark emphasizes compliance access, safety performance, and key technical requirements for products used in mine environments. For Renyi Machinery, the AT-1500 certificate is a concrete record within its <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, reflecting continued work in mining equipment manufacturing, quality control, and safety-oriented standards.',
      'Renyi will continue strengthening <a href="/en/fuwuzhichi#a1">product quality control</a>, manufacturing inspection, and <a href="/en/fuwuzhichi">service support</a> around raise boring rigs, mining equipment, and key components, providing more dependable equipment and technical support for metal and non-metal mining customers.',
    ],
  },
  ru: {
    date: '2020-04-09',
    href: '/ru/xinwenzhongxin/renyixinwen/1026',
    imageSrc: RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'Сертификат знака безопасности горной продукции для установки AT-1500 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер KED200014, выдан 9 апреля 2020 года, действовал до 8 апреля 2025 года',
    title: 'Установка AT-1500 Changsha Renyi получила сертификат безопасности горной продукции',
    listSummary:
      'Сертификат подтверждает, что установка AT-1500 компании Changsha Renyi Machinery Manufacturing Co., Ltd. получила знак безопасности горной продукции KED200014, выданный 9 апреля 2020 года.',
    paragraphs: [
      'Согласно сертификату знака безопасности горной продукции, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> получила сертификацию для установки AT-1500. Номер знака безопасности - KED200014, дата выдачи - 9 апреля 2020 года, срок действия - до 8 апреля 2025 года.',
      'В сертификате указаны наименование продукции - установка для восстающих выработок, модель AT-1500, а также стандарты и технические условия GB/T 12761-2010 и Q/RY 03-2019. Область применения требует строгого соблюдения правил безопасности для металлических и неметаллических рудников, что соответствует направлению Renyi в области <a href="/ru/zuanjixilie">оборудования для восстающих выработок</a>.',
      'Знак безопасности горной продукции отражает требования к допуску, безопасности и ключевым техническим параметрам оборудования для шахтных условий. Для Renyi Machinery сертификат AT-1500 является важной частью <a href="/ru/guanyuxingye#a3">корпоративных квалификаций и наград</a> и показывает накопленный опыт в производстве горной техники, контроле качества и применении стандартов безопасности.',
      'Renyi продолжит усиливать <a href="/ru/fuwuzhichi#a1">контроль качества продукции</a>, производственную проверку и <a href="/ru/fuwuzhichi">сервисную поддержку</a> в области установок для восстающих выработок, горного оборудования и ключевых компонентов для клиентов металлических и неметаллических рудников.',
    ],
  },
  es: {
    date: '2020-04-09',
    href: '/es/xinwenzhongxin/renyixinwen/1026',
    imageSrc: RENYI_AT1500_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'Certificado de marca de seguridad para producto minero AT-1500 de Changsha Renyi Machinery Manufacturing Co., Ltd., número KED200014, emitido el 9 de abril de 2020 y válido hasta el 8 de abril de 2025',
    title: 'El equipo AT-1500 de Changsha Renyi obtiene certificado de seguridad para producto minero',
    listSummary:
      'El certificado muestra que el equipo AT-1500 de Changsha Renyi Machinery Manufacturing Co., Ltd. obtuvo la marca de seguridad para productos mineros KED200014, emitida el 9 de abril de 2020.',
    paragraphs: [
      'Según el certificado de marca de seguridad para productos mineros, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> obtuvo la certificación para su equipo AT-1500. El número de marca de seguridad es KED200014, con emisión el 9 de abril de 2020 y validez hasta el 8 de abril de 2025.',
      'El documento identifica el producto como equipo raise boring, modelo AT-1500, con normas y condiciones técnicas GB/T 12761-2010 y Q/RY 03-2019. Su alcance de uso exige cumplir estrictamente las disposiciones de seguridad para minas metálicas y no metálicas, en línea con la experiencia de Renyi en <a href="/es/zuanjixilie">equipos raise boring</a>.',
      'La marca de seguridad para productos mineros destaca el acceso conforme, el desempeño de seguridad y los requisitos técnicos clave para equipos utilizados en entornos mineros. Para Renyi Machinery, el certificado AT-1500 aporta un registro concreto a sus <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, reflejando su trabajo en fabricación, control de calidad y aplicación de estándares de seguridad.',
      'Renyi seguirá reforzando el <a href="/es/fuwuzhichi#a1">control de calidad del producto</a>, la inspección de fabricación y el <a href="/es/fuwuzhichi">soporte de servicio</a> para equipos raise boring, maquinaria minera y componentes clave destinados a clientes de minería metálica y no metálica.',
    ],
  },
};

const at2000MiningSafetyCertificateArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2019-06-04',
    href: '/xinwenzhongxin/renyixinwen/1027',
    imageSrc: RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司AT-2000天井钻机矿用产品安全标志证书，安全标志编号KED190015，签发日期2019年6月4日，有效期至2024年6月3日',
    title: '长沙仁毅AT-2000天井钻机矿用产品安全标志证书展示',
    listSummary:
      '矿用产品安全标志证书显示，长沙仁毅机械制造有限公司AT-2000天井钻机取得安全标志编号KED190015，证书有效期为2019年6月4日至2024年6月3日，适用于不存在爆炸危险的金属与非金属矿山。',
    paragraphs: [
      '根据矿用产品安全标志证书资料，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>AT-2000天井钻机取得矿用产品安全标志证书，安全标志编号为KED190015。证书签发日期为2019年6月4日，有效期至2024年6月3日。',
      '证书列明产品名称为天井钻机，规格型号为AT-2000，执行标准和技术条件包括GB/T 12761-2010、Q/RY03-2018，适用范围为不存在爆炸危险的金属与非金属矿山。与<a href="/xinwenzhongxin/renyixinwen/1026">AT-1500天井钻机矿安证</a>相比，这份资料进一步补充了公司不同型号天井钻机的安全准入记录。',
      'AT-2000型号资料展示了仁毅机械围绕<a href="/zuanjixilie">天井钻机系列装备</a>形成的规格延展能力。矿用产品安全标志关注产品设计、制造条件、使用范围和关键安全要求，对矿山客户选型、设备进场和后续技术服务具有重要参考意义。',
      '长沙仁毅将继续结合矿山现场工况，推进<a href="/fuwuzhichi#a1">产品质量管理</a>、制造检验、技术资料沉淀和<a href="/fuwuzhichi">服务支持</a>能力建设，为金属与非金属矿山提供更稳定的天井钻机与关键部件解决方案。',
    ],
  },
  en: {
    date: '2019-06-04',
    href: '/en/xinwenzhongxin/renyixinwen/1027',
    imageSrc: RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'AT-2000 raise boring rig Safety Certificate of Approval for Mining Products for Changsha Renyi Machinery Manufacturing Co., Ltd., approval number KED190015, issued on June 4, 2019 and valid until June 3, 2024',
    title: 'Changsha Renyi Displays AT-2000 Raise Boring Rig Mining Safety Approval Certificate',
    listSummary:
      'The certificate records the AT-2000 raise boring rig of Changsha Renyi Machinery Manufacturing Co., Ltd. under approval number KED190015, issued on June 4, 2019 and valid until June 3, 2024 for metal and non-metal mines without explosion hazards.',
    paragraphs: [
      'According to the Safety Certificate of Approval for Mining Products, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> obtained approval for its AT-2000 raise boring rig. The approval number is KED190015, issued on June 4, 2019 and valid until June 3, 2024.',
      'The document identifies the product as a raise boring rig, model AT-2000, with standards and technical conditions GB/T 12761-2010 and Q/RY03-2018. Its stated application range is metal and non-metal mines without explosion hazards. Together with the <a href="/en/xinwenzhongxin/renyixinwen/1026">AT-1500 mining safety certificate</a>, this page records another model-specific approval in Renyi Machinery’s raise boring portfolio.',
      'For mine raise boring applications, safety approval information helps customers review equipment scope, applicable working conditions, and compliance references before selection and site deployment. The AT-2000 certificate also supports Renyi’s broader work around <a href="/en/zuanjixilie">raise boring equipment</a>, manufacturing control, and technical documentation.',
      'Renyi Machinery will continue improving <a href="/en/fuwuzhichi#a1">product quality management</a>, inspection routines, documentation, and <a href="/en/fuwuzhichi">service support</a>, providing more dependable raise boring equipment and key component solutions for metal and non-metal mining customers.',
    ],
  },
  ru: {
    date: '2019-06-04',
    href: '/ru/xinwenzhongxin/renyixinwen/1027',
    imageSrc: RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'Сертификат допуска по безопасности горной продукции для установки AT-2000 компании Changsha Renyi Machinery Manufacturing Co., Ltd., номер KED190015, выдан 4 июня 2019 года, действовал до 3 июня 2024 года',
    title: 'Changsha Renyi показывает сертификат безопасности горной продукции для AT-2000',
    listSummary:
      'Сертификат указывает, что установка AT-2000 компании Changsha Renyi Machinery Manufacturing Co., Ltd. получила допуск KED190015. Документ выдан 4 июня 2019 года и действовал до 3 июня 2024 года для металлических и неметаллических рудников без взрывоопасности.',
    paragraphs: [
      'Согласно сертификату допуска по безопасности горной продукции, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> получила документ для установки AT-2000. Номер допуска - KED190015, дата выдачи - 4 июня 2019 года, срок действия - до 3 июня 2024 года.',
      'В документе указаны продукция - установка для восстающих выработок, модель AT-2000, стандарты и технические условия GB/T 12761-2010 и Q/RY03-2018. Область применения - металлические и неметаллические рудники без взрывоопасности. Вместе с <a href="/ru/xinwenzhongxin/renyixinwen/1026">сертификатом AT-1500</a> эта страница дополняет архив Renyi Machinery по разным моделям оборудования.',
      'Для оборудования восстающего бурения такие сертификаты помогают заказчикам оценивать границы применения, условия эксплуатации и соответствие требованиям перед выбором техники и вводом ее на площадку. Материалы AT-2000 также поддерживают направление Renyi в области <a href="/ru/zuanjixilie">оборудования для восстающих выработок</a>, производственного контроля и технической документации.',
      'Renyi Machinery продолжит развивать <a href="/ru/fuwuzhichi#a1">управление качеством продукции</a>, производственные проверки, накопление технических материалов и <a href="/ru/fuwuzhichi">сервисную поддержку</a>, предлагая более надежные решения для металлических и неметаллических рудников.',
    ],
  },
  es: {
    date: '2019-06-04',
    href: '/es/xinwenzhongxin/renyixinwen/1027',
    imageSrc: RENYI_AT2000_MINING_SAFETY_CERTIFICATE_IMAGE,
    imageAlt: 'Certificado de aprobación de seguridad para producto minero AT-2000 de Changsha Renyi Machinery Manufacturing Co., Ltd., número KED190015, emitido el 4 de junio de 2019 y válido hasta el 3 de junio de 2024',
    title: 'Changsha Renyi presenta el certificado de seguridad minera del equipo AT-2000',
    listSummary:
      'El certificado muestra que el equipo raise boring AT-2000 de Changsha Renyi Machinery Manufacturing Co., Ltd. obtuvo la aprobación KED190015, emitida el 4 de junio de 2019 y válida hasta el 3 de junio de 2024 para minas metálicas y no metálicas sin riesgo de explosión.',
    paragraphs: [
      'Según el certificado de aprobación de seguridad para productos mineros, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> obtuvo la aprobación para su equipo AT-2000. El número de aprobación es KED190015, con emisión el 4 de junio de 2019 y validez hasta el 3 de junio de 2024.',
      'El documento identifica el producto como equipo raise boring, modelo AT-2000, con normas y condiciones técnicas GB/T 12761-2010 y Q/RY03-2018. Su ámbito de aplicación son minas metálicas y no metálicas sin peligro de explosión. Junto con el <a href="/es/xinwenzhongxin/renyixinwen/1026">certificado minero AT-1500</a>, esta ficha añade otro registro por modelo dentro de la serie de equipos de Renyi Machinery.',
      'En proyectos de raise boring, la información de aprobación ayuda a revisar el alcance de uso, las condiciones aplicables y las referencias de cumplimiento antes de seleccionar y desplegar equipos. El certificado AT-2000 también refuerza la documentación técnica de Renyi en <a href="/es/zuanjixilie">equipos raise boring</a>, fabricación y control de calidad.',
      'Renyi Machinery seguirá fortaleciendo la <a href="/es/fuwuzhichi#a1">gestión de calidad del producto</a>, las inspecciones de fabricación, la documentación técnica y el <a href="/es/fuwuzhichi">soporte de servicio</a>, ofreciendo soluciones más fiables para minas metálicas y no metálicas.',
    ],
  },
};

const miningTruckRemoteFaultDetectionSoftwareCopyrightArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-05-31',
    href: '/xinwenzhongxin/renyixinwen/1028',
    imageSrc: RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司矿用汽车运行故障远程检测系统V1.0计算机软件著作权登记证书，登记号2017SR219771，发证日期2017年5月31日',
    title: '长沙仁毅矿用汽车运行故障远程检测系统获软件著作权登记',
    listSummary:
      '计算机软件著作权登记证书显示，长沙仁毅机械制造有限公司“矿用汽车运行故障远程检测系统V1.0”完成软件著作权登记，登记号为2017SR219771，开发完成日期为2017年3月13日。',
    paragraphs: [
      '中华人民共和国国家版权局计算机软件著作权登记证书显示，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>“矿用汽车运行故障远程检测系统V1.0”完成软件著作权登记，证书号为软著登字第1805055号，登记号为2017SR219771。',
      '证书资料显示，该软件开发完成日期为2017年3月13日，首次发表日期为未发表，权利取得方式为原始取得，权利范围为全部权利。这类软件著作权记录不同于矿安证或质量体系证书，更侧重于企业在设备运行数据、远程诊断和控制系统软件方面的自主技术成果。',
      '矿用汽车运行故障远程检测系统面向矿山车辆运行状态与故障识别场景，能够与仁毅机械在<a href="/zuanjixilie">矿山装备应用</a>、<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>和现场维修支持方面的积累形成呼应，为设备维护、故障判断和服务响应提供技术资料基础。',
      '围绕软件著作权、产品证书和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续推进机电液一体化、运行监测和<a href="/fuwuzhichi#a2">售后服务支持</a>能力建设，提升矿山与工程机械客户的设备使用可靠性。',
    ],
  },
  en: {
    date: '2017-05-31',
    href: '/en/xinwenzhongxin/renyixinwen/1028',
    imageSrc: RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Computer Software Copyright Registration Certificate for Mining Truck Operating Fault Remote Detection System V1.0 by Changsha Renyi Machinery Manufacturing Co., Ltd., registration number 2017SR219771, issued on May 31, 2017',
    title: 'Changsha Renyi Registers Software Copyright for Mining Truck Remote Fault Detection System',
    listSummary:
      'The software copyright certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the copyright owner of Mining Truck Operating Fault Remote Detection System V1.0, registration number 2017SR219771, completed on March 13, 2017.',
    paragraphs: [
      'The Computer Software Copyright Registration Certificate issued by the National Copyright Administration of China records <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> as the copyright owner of Mining Truck Operating Fault Remote Detection System V1.0. The certificate number is 1805055 and the registration number is 2017SR219771.',
      'According to the certificate, the software was completed on March 13, 2017, had not been first published at the time of registration, was acquired originally, and covers all rights. Unlike a mining safety approval or quality system certificate, this record highlights Renyi’s own software work around operating data, remote diagnosis, and control-system support.',
      'A remote fault detection system for mining trucks relates directly to equipment operating status, fault recognition, maintenance planning, and field service response. It complements Renyi Machinery’s experience in <a href="/en/zuanjixilie">mining equipment applications</a>, <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a>, and technical maintenance support.',
      'With software copyright records, product certificates, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue improving electromechanical-hydraulic integration, condition monitoring, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-05-31',
    href: '/ru/xinwenzhongxin/renyixinwen/1028',
    imageSrc: RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Свидетельство о регистрации авторского права на программное обеспечение Mining Truck Operating Fault Remote Detection System V1.0 компании Changsha Renyi Machinery Manufacturing Co., Ltd., регистрационный номер 2017SR219771, выдано 31 мая 2017 года',
    title: 'Changsha Renyi зарегистрировала авторское право на систему удаленной диагностики карьерных автомобилей',
    listSummary:
      'Свидетельство о регистрации ПО указывает, что Changsha Renyi Machinery Manufacturing Co., Ltd. зарегистрировала Mining Truck Operating Fault Remote Detection System V1.0, регистрационный номер 2017SR219771, дата завершения разработки - 13 марта 2017 года.',
    paragraphs: [
      'Свидетельство о регистрации авторского права на программное обеспечение, выданное Государственным управлением авторского права КНР, указывает <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> правообладателем Mining Truck Operating Fault Remote Detection System V1.0. Номер свидетельства - 1805055, регистрационный номер - 2017SR219771.',
      'По данным свидетельства, разработка программного обеспечения была завершена 13 марта 2017 года, первая публикация на момент регистрации отсутствовала, права получены первоначально, объем прав - все права. В отличие от сертификатов безопасности или системы качества, этот документ отражает собственные разработки Renyi в сфере данных эксплуатации, удаленной диагностики и программной поддержки систем управления.',
      'Система удаленного выявления неисправностей карьерных автомобилей связана с мониторингом состояния техники, диагностикой отказов, планированием ремонта и сервисной реакцией на площадке. Это дополняет опыт Renyi Machinery в <a href="/ru/zuanjixilie">горном оборудовании</a>, <a href="/ru/pro_category/beijianzhongxin">локализации запчастей инженерной техники</a> и техническом обслуживании.',
      'Опираясь на авторские права на ПО, продуктовые сертификаты и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать мехатронно-гидравлическую интеграцию, мониторинг состояния и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a> для клиентов горной и инженерной техники.',
    ],
  },
  es: {
    date: '2017-05-31',
    href: '/es/xinwenzhongxin/renyixinwen/1028',
    imageSrc: RENYI_MINING_TRUCK_REMOTE_FAULT_DETECTION_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Certificado de registro de derechos de autor de software para Mining Truck Operating Fault Remote Detection System V1.0 de Changsha Renyi Machinery Manufacturing Co., Ltd., número de registro 2017SR219771, emitido el 31 de mayo de 2017',
    title: 'Changsha Renyi registra derechos de autor de software para detección remota de fallos en camiones mineros',
    listSummary:
      'El certificado de derechos de autor de software registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de Mining Truck Operating Fault Remote Detection System V1.0, número 2017SR219771, con desarrollo terminado el 13 de marzo de 2017.',
    paragraphs: [
      'El certificado de registro de derechos de autor de software emitido por la Administración Nacional de Derechos de Autor de China registra a <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> como titular de Mining Truck Operating Fault Remote Detection System V1.0. El número de certificado es 1805055 y el número de registro es 2017SR219771.',
      'Según el documento, el software se terminó el 13 de marzo de 2017, no había sido publicado por primera vez en el momento del registro, los derechos se obtuvieron de forma original y el alcance cubre todos los derechos. A diferencia de un certificado de seguridad minera o de sistema de calidad, este registro destaca el trabajo propio de Renyi en datos operativos, diagnóstico remoto y soporte de sistemas de control.',
      'Un sistema de detección remota de fallos para camiones mineros se relaciona con el estado operativo del equipo, el reconocimiento de averías, la planificación de mantenimiento y la respuesta de servicio en campo. Este contenido complementa la experiencia de Renyi Machinery en <a href="/es/zuanjixilie">aplicaciones de maquinaria minera</a>, <a href="/es/pro_category/beijianzhongxin">localización de repuestos para maquinaria de ingeniería</a> y soporte técnico.',
      'Con registros de software, certificados de producto y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá mejorando la integración electromecánica e hidráulica, el monitoreo de condiciones y el <a href="/es/fuwuzhichi#a2">servicio posventa</a> para clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const hydraulicCylinderTestBenchPlcSoftwareCopyrightArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-05-31',
    href: '/xinwenzhongxin/renyixinwen/1029',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司液压油缸实验台PLC控制系统V1.0计算机软件著作权登记证书，登记号2017SR219765，发证日期2017年5月31日',
    title: '长沙仁毅液压油缸实验台PLC控制系统获软件著作权登记',
    listSummary:
      '计算机软件著作权登记证书显示，长沙仁毅机械制造有限公司“液压油缸实验台PLC控制系统V1.0”完成软件著作权登记，登记号为2017SR219765，开发完成日期为2017年2月6日。',
    paragraphs: [
      '中华人民共和国国家版权局计算机软件著作权登记证书显示，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>“液压油缸实验台PLC控制系统V1.0”完成软件著作权登记，证书号为软著登字第1805049号，登记号为2017SR219765。',
      '证书资料显示，该软件开发完成日期为2017年2月6日，首次发表日期为未发表，权利取得方式为原始取得，权利范围为全部权利。与<a href="/xinwenzhongxin/renyixinwen/1028">矿用汽车运行故障远程检测系统</a>相比，本项软件更聚焦液压油缸实验台控制、测试流程和设备状态采集等场景。',
      '液压油缸实验台PLC控制系统与仁毅机械长期开展的<a href="/pro_category/yeyajian">特种油缸与液压件</a>制造、维修和检测工作相互支撑。通过控制系统软件沉淀测试逻辑和过程数据，有助于提升油缸性能验证、出厂检测和售后维修判断的规范性。',
      '围绕软件著作权、检测装备和<a href="/fuwuzhichi#a1">质量控制</a>体系，长沙仁毅将继续加强机电液一体化技术积累，将自主软件能力转化为更稳定的产品测试、制造管理和<a href="/fuwuzhichi#a2">服务支持</a>能力。',
    ],
  },
  en: {
    date: '2017-05-31',
    href: '/en/xinwenzhongxin/renyixinwen/1029',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Computer Software Copyright Registration Certificate for Hydraulic Cylinder Test Bench PLC Control System V1.0 by Changsha Renyi Machinery Manufacturing Co., Ltd., registration number 2017SR219765, issued on May 31, 2017',
    title: 'Changsha Renyi Registers Software Copyright for Hydraulic Cylinder Test Bench PLC Control System',
    listSummary:
      'The certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the copyright owner of Hydraulic Cylinder Test Bench PLC Control System V1.0, registration number 2017SR219765, completed on February 6, 2017.',
    paragraphs: [
      'The Computer Software Copyright Registration Certificate issued by the National Copyright Administration of China records <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> as the copyright owner of Hydraulic Cylinder Test Bench PLC Control System V1.0. The certificate number is 1805049 and the registration number is 2017SR219765.',
      'According to the certificate, the software was completed on February 6, 2017, had not been first published at the time of registration, was acquired originally, and covers all rights. Compared with the <a href="/en/xinwenzhongxin/renyixinwen/1028">Mining Truck Remote Fault Detection System</a>, this software focuses more directly on hydraulic cylinder test bench control, test procedures, and equipment status collection.',
      'The PLC control system supports Renyi Machinery’s work in <a href="/en/pro_category/yeyajian">special hydraulic cylinders and hydraulic components</a>, including manufacturing, repair, and inspection. By documenting control logic and process data in software, it helps improve hydraulic cylinder performance verification, final inspection, and service diagnosis.',
      'With software copyright records, test equipment, and a <a href="/en/fuwuzhichi#a1">quality control</a> system, Renyi Machinery will continue strengthening electromechanical-hydraulic integration and turning software capability into more stable product testing, manufacturing management, and <a href="/en/fuwuzhichi#a2">service support</a>.',
    ],
  },
  ru: {
    date: '2017-05-31',
    href: '/ru/xinwenzhongxin/renyixinwen/1029',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Свидетельство о регистрации авторского права на программное обеспечение Hydraulic Cylinder Test Bench PLC Control System V1.0 компании Changsha Renyi Machinery Manufacturing Co., Ltd., регистрационный номер 2017SR219765, выдано 31 мая 2017 года',
    title: 'Changsha Renyi зарегистрировала авторское право на PLC-систему стенда испытаний гидроцилиндров',
    listSummary:
      'Свидетельство о регистрации ПО указывает, что Changsha Renyi Machinery Manufacturing Co., Ltd. зарегистрировала Hydraulic Cylinder Test Bench PLC Control System V1.0, регистрационный номер 2017SR219765, дата завершения разработки - 6 февраля 2017 года.',
    paragraphs: [
      'Свидетельство о регистрации авторского права на программное обеспечение, выданное Государственным управлением авторского права КНР, указывает <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> правообладателем Hydraulic Cylinder Test Bench PLC Control System V1.0. Номер свидетельства - 1805049, регистрационный номер - 2017SR219765.',
      'По данным свидетельства, разработка программного обеспечения была завершена 6 февраля 2017 года, первая публикация на момент регистрации отсутствовала, права получены первоначально, объем прав - все права. По сравнению с <a href="/ru/xinwenzhongxin/renyixinwen/1028">системой удаленной диагностики карьерных автомобилей</a>, эта программа ориентирована на управление испытательным стендом гидроцилиндров, процедуры испытаний и сбор состояния оборудования.',
      'PLC-система испытательного стенда связана с направлениями Renyi Machinery в области <a href="/ru/pro_category/yeyajian">специальных гидроцилиндров и гидравлических компонентов</a>, включая производство, ремонт и контроль. Программное закрепление логики управления и технологических данных помогает стандартизировать проверку характеристик цилиндров, приемочный контроль и сервисную диагностику.',
      'Опираясь на авторские права на ПО, испытательное оборудование и систему <a href="/ru/fuwuzhichi#a1">контроля качества</a>, Renyi Machinery продолжит развивать мехатронно-гидравлическую интеграцию и превращать программные возможности в более стабильные испытания продукции, управление производством и <a href="/ru/fuwuzhichi#a2">сервисную поддержку</a>.',
    ],
  },
  es: {
    date: '2017-05-31',
    href: '/es/xinwenzhongxin/renyixinwen/1029',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_TEST_BENCH_PLC_SOFTWARE_COPYRIGHT_IMAGE,
    imageAlt: 'Certificado de registro de derechos de autor de software para Hydraulic Cylinder Test Bench PLC Control System V1.0 de Changsha Renyi Machinery Manufacturing Co., Ltd., número de registro 2017SR219765, emitido el 31 de mayo de 2017',
    title: 'Changsha Renyi registra derechos de autor de software para el sistema PLC de banco de pruebas de cilindros hidráulicos',
    listSummary:
      'El certificado registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de Hydraulic Cylinder Test Bench PLC Control System V1.0, número 2017SR219765, con desarrollo terminado el 6 de febrero de 2017.',
    paragraphs: [
      'El certificado de registro de derechos de autor de software emitido por la Administración Nacional de Derechos de Autor de China registra a <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> como titular de Hydraulic Cylinder Test Bench PLC Control System V1.0. El número de certificado es 1805049 y el número de registro es 2017SR219765.',
      'Según el documento, el software se terminó el 6 de febrero de 2017, no había sido publicado por primera vez en el momento del registro, los derechos se obtuvieron de forma original y el alcance cubre todos los derechos. En comparación con el <a href="/es/xinwenzhongxin/renyixinwen/1028">sistema de detección remota de fallos para camiones mineros</a>, este software se centra en el control PLC del banco de pruebas de cilindros hidráulicos, los procedimientos de ensayo y la recopilación del estado del equipo.',
      'El sistema PLC del banco de pruebas respalda el trabajo de Renyi Machinery en <a href="/es/pro_category/yeyajian">cilindros hidráulicos especiales y componentes hidráulicos</a>, incluyendo fabricación, reparación e inspección. Al registrar la lógica de control y los datos de proceso en software, ayuda a mejorar la verificación de rendimiento, la inspección final y el diagnóstico de servicio.',
      'Con registros de software, equipos de prueba y un sistema de <a href="/es/fuwuzhichi#a1">control de calidad</a>, Renyi Machinery seguirá reforzando la integración electromecánica e hidráulica, convirtiendo la capacidad de software en pruebas de producto, gestión de fabricación y <a href="/es/fuwuzhichi#a2">soporte de servicio</a> más estables.',
    ],
  },
};

const wheelMotorDismantlingMachineSwingMechanismPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2013-12-04',
    href: '/xinwenzhongxin/renyixinwen/1030',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司轮边马达拆装机的摆动机构实用新型专利证书，专利号ZL 2013 2 0372262.1，授权公告日2013年12月4日',
    title: '长沙仁毅轮边马达拆装机摆动机构获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“轮边马达拆装机的摆动机构”获得授权，专利号为ZL 2013 2 0372262.1，授权公告日为2013年12月4日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>“轮边马达拆装机的摆动机构”获得实用新型专利授权，证书号为第3288963号，专利号为ZL 2013 2 0372262.1。',
      '证书资料显示，该专利申请日为2013年6月27日，授权公告日为2013年12月4日，专利权人为长沙仁毅机械制造有限公司，发明人包括左俊、彭亮、杨立群。该专利围绕轮边马达拆装设备的摆动机构展开，属于重型装备维修工装和<a href="/pro_category/beijianzhongxin">工程机械备件维修支持</a>相关技术积累。',
      '轮边马达拆装作业通常面向矿用车辆、电动轮设备及大型工程机械维修场景，对工装的承载、定位、摆动和操作稳定性有较高要求。该项专利体现了仁毅机械在<a href="/pro_category/yeyajian">液压与机械执行机构</a>、专用维修设备和现场服务工具方面的研发思路。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2013-12-04',
    href: '/en/xinwenzhongxin/renyixinwen/1030',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for Swing Mechanism of a Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372262.1, authorized on December 4, 2013',
    title: 'Changsha Renyi Receives Utility Model Patent for Wheel Motor Dismantling Machine Swing Mechanism',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Swing Mechanism of a Wheel Motor Dismantling Machine”, patent number ZL 2013 2 0372262.1, authorized on December 4, 2013.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> as the patentee of “Swing Mechanism of a Wheel Motor Dismantling Machine”. The certificate number is 3288963 and the patent number is ZL 2013 2 0372262.1.',
      'According to the certificate, the application date was June 27, 2013 and the authorization announcement date was December 4, 2013. The listed inventors include Zuo Jun, Peng Liang, and Yang Liqun. The patent focuses on the swing mechanism of wheel motor dismantling equipment, relating to heavy-equipment maintenance tooling and <a href="/en/pro_category/beijianzhongxin">engineering machinery parts service support</a>.',
      'Wheel motor dismantling work is often connected with mining vehicles, electric-wheel equipment, and large engineering machinery maintenance. These tasks place high demands on tooling load capacity, positioning, swing movement, and operating stability. The patent reflects Renyi Machinery’s technical thinking around <a href="/en/pro_category/yeyajian">hydraulic and mechanical actuating mechanisms</a>, dedicated maintenance equipment, and field service tools.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2013-12-04',
    href: '/ru/xinwenzhongxin/renyixinwen/1030',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель Swing Mechanism of a Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372262.1, дата авторизации 4 декабря 2013 года',
    title: 'Changsha Renyi получила патент на механизм поворота установки демонтажа колесного мотора',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки Swing Mechanism of a Wheel Motor Dismantling Machine, номер ZL 2013 2 0372262.1, дата авторизации - 4 декабря 2013 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> патентообладателем разработки “Swing Mechanism of a Wheel Motor Dismantling Machine”. Номер свидетельства - 3288963, номер патента - ZL 2013 2 0372262.1.',
      'Согласно свидетельству, дата подачи заявки - 27 июня 2013 года, дата объявления о выдаче - 4 декабря 2013 года. В числе изобретателей указаны Zuo Jun, Peng Liang и Yang Liqun. Патент относится к поворотному механизму оборудования для демонтажа колесных моторов и связан с ремонтной оснасткой тяжелой техники и <a href="/ru/pro_category/beijianzhongxin">поддержкой запасных частей инженерной техники</a>.',
      'Демонтаж колесных моторов применяется при обслуживании карьерных автомобилей, электромотор-колес и крупной инженерной техники. Такие работы требуют от оснастки грузоподъемности, точного позиционирования, устойчивого поворота и безопасной работы. Данный патент отражает опыт Renyi Machinery в области <a href="/ru/pro_category/yeyajian">гидравлических и механических исполнительных механизмов</a>, специального ремонтного оборудования и сервисных инструментов.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2013-12-04',
    href: '/es/xinwenzhongxin/renyixinwen/1030',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_SWING_MECHANISM_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para Swing Mechanism of a Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372262.1, autorizada el 4 de diciembre de 2013',
    title: 'Changsha Renyi obtiene patente de modelo de utilidad para mecanismo oscilante de desmontadora de motor de rueda',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Swing Mechanism of a Wheel Motor Dismantling Machine”, número ZL 2013 2 0372262.1, autorizado el 4 de diciembre de 2013.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> como titular de “Swing Mechanism of a Wheel Motor Dismantling Machine”. El número de certificado es 3288963 y el número de patente es ZL 2013 2 0372262.1.',
      'Según el certificado, la fecha de solicitud fue el 27 de junio de 2013 y la fecha de anuncio de autorización fue el 4 de diciembre de 2013. Los inventores indicados incluyen a Zuo Jun, Peng Liang y Yang Liqun. La patente se centra en el mecanismo oscilante de equipos de desmontaje de motores de rueda, relacionado con utillaje de mantenimiento pesado y <a href="/es/pro_category/beijianzhongxin">soporte de repuestos para maquinaria de ingeniería</a>.',
      'El desmontaje de motores de rueda suele aplicarse a vehículos mineros, equipos de rueda motriz eléctrica y mantenimiento de maquinaria pesada. Estas operaciones requieren capacidad de carga, posicionamiento, movimiento oscilante y estabilidad de operación. La patente refleja la experiencia de Renyi Machinery en <a href="/es/pro_category/yeyajian">mecanismos hidráulicos y mecánicos</a>, equipos de mantenimiento dedicados y herramientas de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const wheelMotorDismantlingMachineFloatingTrayPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2014-01-08',
    href: '/xinwenzhongxin/renyixinwen/1031',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司轮边马达拆装机的浮动托盘实用新型专利证书，专利号ZL 2013 2 0372233.5，授权公告日2014年1月8日',
    title: '长沙仁毅轮边马达拆装机浮动托盘获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“轮边马达拆装机的浮动托盘”获得授权，专利号为ZL 2013 2 0372233.5，授权公告日为2014年1月8日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>“轮边马达拆装机的浮动托盘”获得实用新型专利授权，证书号为第3353621号，专利号为ZL 2013 2 0372233.5。',
      '证书资料显示，该专利申请日为2013年6月27日，授权公告日为2014年1月8日，专利权人为长沙仁毅机械制造有限公司，发明人包括左俊、彭亮、杨立群。该专利围绕轮边马达拆装设备中的浮动托盘结构展开，属于重型装备维修工装和<a href="/pro_category/beijianzhongxin">工程机械备件维修支持</a>相关技术积累。',
      '轮边马达拆装作业通常需要稳定承托、定位和装配协同，对专用工装的承载能力、调整便利性和现场操作稳定性有较高要求。该项专利与<a href="/xinwenzhongxin/renyixinwen/1030">轮边马达拆装机摆动机构专利</a>相互补充，体现了仁毅机械围绕<a href="/pro_category/yeyajian">液压与机械执行机构</a>、维修设备和现场服务工具的持续研发。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2014-01-08',
    href: '/en/xinwenzhongxin/renyixinwen/1031',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for Floating Tray of a Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372233.5, authorized on January 8, 2014',
    title: 'Changsha Renyi Receives Utility Model Patent for Wheel Motor Dismantling Machine Floating Tray',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Floating Tray of a Wheel Motor Dismantling Machine”, patent number ZL 2013 2 0372233.5, authorized on January 8, 2014.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> as the patentee of “Floating Tray of a Wheel Motor Dismantling Machine”. The certificate number is 3353621 and the patent number is ZL 2013 2 0372233.5.',
      'According to the certificate, the application date was June 27, 2013 and the authorization announcement date was January 8, 2014. The listed inventors include Zuo Jun, Peng Liang, and Yang Liqun. The patent focuses on the floating tray structure used in wheel motor dismantling equipment, relating to heavy-equipment maintenance tooling and <a href="/en/pro_category/beijianzhongxin">engineering machinery parts service support</a>.',
      'Wheel motor dismantling work usually requires stable support, positioning, and assembly coordination, placing high demands on tooling load capacity, adjustability, and operating stability. This patent complements Renyi’s <a href="/en/xinwenzhongxin/renyixinwen/1030">wheel motor dismantling machine swing mechanism patent</a> and reflects continued R&D around <a href="/en/pro_category/yeyajian">hydraulic and mechanical actuating mechanisms</a>, maintenance equipment, and field service tools.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2014-01-08',
    href: '/ru/xinwenzhongxin/renyixinwen/1031',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель Floating Tray of a Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372233.5, дата авторизации 8 января 2014 года',
    title: 'Changsha Renyi получила патент на плавающий поддон установки демонтажа колесного мотора',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки Floating Tray of a Wheel Motor Dismantling Machine, номер ZL 2013 2 0372233.5, дата авторизации - 8 января 2014 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> патентообладателем разработки “Floating Tray of a Wheel Motor Dismantling Machine”. Номер свидетельства - 3353621, номер патента - ZL 2013 2 0372233.5.',
      'Согласно свидетельству, дата подачи заявки - 27 июня 2013 года, дата объявления о выдаче - 8 января 2014 года. В числе изобретателей указаны Zuo Jun, Peng Liang и Yang Liqun. Патент относится к конструкции плавающего поддона оборудования для демонтажа колесных моторов и связан с ремонтной оснасткой тяжелой техники и <a href="/ru/pro_category/beijianzhongxin">поддержкой запасных частей инженерной техники</a>.',
      'Демонтаж колесных моторов обычно требует устойчивой опоры, позиционирования и согласованной сборки, поэтому к оснастке предъявляются высокие требования по грузоподъемности, регулировке и стабильности работы. Этот патент дополняет <a href="/ru/xinwenzhongxin/renyixinwen/1030">патент на механизм поворота установки демонтажа колесного мотора</a> и отражает продолжение разработок Renyi в области <a href="/ru/pro_category/yeyajian">гидравлических и механических исполнительных механизмов</a>, ремонтного оборудования и сервисных инструментов.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2014-01-08',
    href: '/es/xinwenzhongxin/renyixinwen/1031',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_FLOATING_TRAY_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para Floating Tray of a Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372233.5, autorizada el 8 de enero de 2014',
    title: 'Changsha Renyi obtiene patente de modelo de utilidad para bandeja flotante de desmontadora de motor de rueda',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Floating Tray of a Wheel Motor Dismantling Machine”, número ZL 2013 2 0372233.5, autorizado el 8 de enero de 2014.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> como titular de “Floating Tray of a Wheel Motor Dismantling Machine”. El número de certificado es 3353621 y el número de patente es ZL 2013 2 0372233.5.',
      'Según el certificado, la fecha de solicitud fue el 27 de junio de 2013 y la fecha de anuncio de autorización fue el 8 de enero de 2014. Los inventores indicados incluyen a Zuo Jun, Peng Liang y Yang Liqun. La patente se centra en la estructura de bandeja flotante utilizada en equipos de desmontaje de motores de rueda, relacionada con utillaje de mantenimiento pesado y <a href="/es/pro_category/beijianzhongxin">soporte de repuestos para maquinaria de ingeniería</a>.',
      'El desmontaje de motores de rueda suele requerir soporte estable, posicionamiento y coordinación de montaje, por lo que el utillaje debe ofrecer capacidad de carga, ajuste y estabilidad de operación. Esta patente complementa la <a href="/es/xinwenzhongxin/renyixinwen/1030">patente del mecanismo oscilante de desmontadora de motor de rueda</a> y refleja el desarrollo continuo de Renyi en <a href="/es/pro_category/yeyajian">mecanismos hidráulicos y mecánicos</a>, equipos de mantenimiento y herramientas de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const wheelMotorDismantlingMachinePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2014-01-08',
    href: '/xinwenzhongxin/renyixinwen/1032',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司轮边马达拆装机实用新型专利证书，专利号ZL 2013 2 0372249.6，授权公告日2014年1月8日',
    title: '长沙仁毅轮边马达拆装机获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“轮边马达拆装机”获得授权，专利号为ZL 2013 2 0372249.6，授权公告日为2014年1月8日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“轮边马达拆装机”获得实用新型专利授权，证书号为第3354755号，专利号为ZL 2013 2 0372249.6。',
      '证书资料显示，该专利申请日为2013年6月27日，授权公告日为2014年1月8日，专利权人为长沙仁毅机械制造有限公司，发明人包括左俊、彭亮、杨立群。该专利围绕轮边马达拆装设备整体结构展开，是公司面向重型装备维修场景形成的专用工装技术积累。',
      '轮边马达拆装作业通常面向矿用车辆、电动轮设备及大型工程机械维修场景，对工装承载、定位、调整、装配协同和现场操作稳定性有较高要求。该项专利与轮边马达拆装机浮动托盘、摆动机构等专利相互补充，体现了仁毅机械围绕专用维修设备和现场服务工具的持续研发。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2014-01-08',
    href: '/en/xinwenzhongxin/renyixinwen/1032',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for Wheel Motor Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2013 2 0372249.6, authorized on January 8, 2014',
    title: 'Changsha Renyi Receives Utility Model Patent for Wheel Motor Dismantling Machine',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Wheel Motor Dismantling Machine”, patent number ZL 2013 2 0372249.6, authorized on January 8, 2014.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Wheel Motor Dismantling Machine”. The certificate number is 3354755 and the patent number is ZL 2013 2 0372249.6.',
      'According to the certificate, the application date was June 27, 2013 and the authorization announcement date was January 8, 2014. The listed inventors include Zuo Jun, Peng Liang, and Yang Liqun. The patent focuses on the overall structure of wheel motor dismantling equipment and represents Renyi’s dedicated tooling development for heavy-equipment maintenance scenarios.',
      'Wheel motor dismantling work is often connected with mining vehicles, electric-wheel equipment, and large engineering machinery maintenance. These tasks place high demands on tooling load capacity, positioning, adjustment, assembly coordination, and operating stability. The patent complements Renyi’s floating tray and swing mechanism patents for wheel motor dismantling machines, reflecting continued R&D around dedicated maintenance equipment and field service tools.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2014-01-08',
    href: '/ru/xinwenzhongxin/renyixinwen/1032',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель Wheel Motor Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2013 2 0372249.6, дата авторизации 8 января 2014 года',
    title: 'Changsha Renyi получила патент на установку демонтажа колесного мотора',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки Wheel Motor Dismantling Machine, номер ZL 2013 2 0372249.6, дата авторизации - 8 января 2014 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки “Wheel Motor Dismantling Machine”. Номер свидетельства - 3354755, номер патента - ZL 2013 2 0372249.6.',
      'Согласно свидетельству, дата подачи заявки - 27 июня 2013 года, дата объявления о выдаче - 8 января 2014 года. В числе изобретателей указаны Zuo Jun, Peng Liang и Yang Liqun. Патент относится к общей конструкции оборудования для демонтажа колесных моторов и отражает разработку специальной оснастки Renyi для обслуживания тяжелой техники.',
      'Демонтаж колесных моторов применяется при обслуживании карьерных автомобилей, электромотор-колес и крупной инженерной техники. Такие работы требуют от оснастки грузоподъемности, позиционирования, регулировки, согласованной сборки и стабильной работы. Этот патент дополняет патенты Renyi на плавающий поддон и механизм поворота установки демонтажа колесного мотора, показывая продолжение разработок в области ремонтного оборудования и сервисных инструментов.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2014-01-08',
    href: '/es/xinwenzhongxin/renyixinwen/1032',
    imageSrc: RENYI_WHEEL_MOTOR_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para Wheel Motor Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2013 2 0372249.6, autorizada el 8 de enero de 2014',
    title: 'Changsha Renyi obtiene patente de modelo de utilidad para desmontadora de motor de rueda',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Wheel Motor Dismantling Machine”, número ZL 2013 2 0372249.6, autorizado el 8 de enero de 2014.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Wheel Motor Dismantling Machine”. El número de certificado es 3354755 y el número de patente es ZL 2013 2 0372249.6.',
      'Según el certificado, la fecha de solicitud fue el 27 de junio de 2013 y la fecha de anuncio de autorización fue el 8 de enero de 2014. Los inventores indicados incluyen a Zuo Jun, Peng Liang y Yang Liqun. La patente se centra en la estructura general del equipo de desmontaje de motores de rueda y forma parte del desarrollo de utillaje especializado de Renyi para mantenimiento pesado.',
      'El desmontaje de motores de rueda suele aplicarse a vehículos mineros, equipos de rueda motriz eléctrica y mantenimiento de maquinaria pesada. Estas operaciones requieren capacidad de carga, posicionamiento, ajuste, coordinación de montaje y estabilidad de operación. Esta patente complementa las patentes de bandeja flotante y mecanismo oscilante de Renyi para desmontadoras de motor de rueda, reflejando el desarrollo continuo de equipos de mantenimiento y herramientas de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const multiBodyWheelRimDismantlingMachinePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2014-07-02',
    href: '/xinwenzhongxin/renyixinwen/1033',
    imageSrc: RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司多体式车轮辋拆卸机实用新型专利证书，专利号ZL 2014 2 0027912.3，授权公告日2014年7月2日',
    title: '长沙仁毅多体式车轮辋拆卸机获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“多体式车轮辋拆卸机”获得授权，专利号为ZL 2014 2 0027912.3，授权公告日为2014年7月2日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“多体式车轮辋拆卸机”获得实用新型专利授权，证书号为第3663504号，专利号为ZL 2014 2 0027912.3。',
      '证书资料显示，该专利申请日为2014年1月17日，授权公告日为2014年7月2日，专利权人为长沙仁毅机械制造有限公司，发明人包括罗亮、左俊、杨立群。该专利围绕车轮辋拆卸设备结构展开，是公司面向大型轮辋维修、拆卸和工装协同场景形成的专用设备技术积累。',
      '多体式车轮辋拆卸作业通常需要兼顾承载、定位、分体协同和现场操作稳定性，对设备结构、装夹方式和维修效率提出较高要求。该项专利与公司此前的轮边马达拆装机相关专利共同补充了重型车辆轮端部件拆装和维修保障方面的技术资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2014-07-02',
    href: '/en/xinwenzhongxin/renyixinwen/1033',
    imageSrc: RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for Multi-Body Wheel Rim Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2014 2 0027912.3, authorized on July 2, 2014',
    title: 'Changsha Renyi Receives Utility Model Patent for Multi-Body Wheel Rim Dismantling Machine',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Multi-Body Wheel Rim Dismantling Machine”, patent number ZL 2014 2 0027912.3, authorized on July 2, 2014.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of “Multi-Body Wheel Rim Dismantling Machine”. The certificate number is 3663504 and the patent number is ZL 2014 2 0027912.3.',
      'According to the certificate, the application date was January 17, 2014 and the authorization announcement date was July 2, 2014. The listed inventors include Luo Liang, Zuo Jun, and Yang Liqun. The patent focuses on the structure of wheel rim dismantling equipment and reflects dedicated equipment development for large wheel-rim repair, dismantling, and tooling coordination scenarios.',
      'Multi-body wheel rim dismantling work typically needs to balance load bearing, positioning, divided-body coordination, and stable field operation, placing higher requirements on equipment structure, clamping methods, and maintenance efficiency. This patent complements Renyi’s earlier wheel motor dismantling machine patents and adds technical documentation for heavy vehicle wheel-end dismantling and maintenance assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2014-07-02',
    href: '/ru/xinwenzhongxin/renyixinwen/1033',
    imageSrc: RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель Multi-Body Wheel Rim Dismantling Machine компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2014 2 0027912.3, дата авторизации 2 июля 2014 года',
    title: 'Changsha Renyi получила патент на многосекционную установку демонтажа колесного обода',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки Multi-Body Wheel Rim Dismantling Machine, номер ZL 2014 2 0027912.3, дата авторизации - 2 июля 2014 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем разработки “Multi-Body Wheel Rim Dismantling Machine”. Номер свидетельства - 3663504, номер патента - ZL 2014 2 0027912.3.',
      'Согласно свидетельству, дата подачи заявки - 17 января 2014 года, дата объявления о выдаче - 2 июля 2014 года. В числе изобретателей указаны Luo Liang, Zuo Jun и Yang Liqun. Патент относится к конструкции оборудования для демонтажа колесных ободов и отражает разработку специального оборудования для ремонта крупных ободов, демонтажа и согласованной работы оснастки.',
      'Многосекционный демонтаж колесных ободов обычно требует сочетания несущей способности, позиционирования, согласованной работы отдельных частей и стабильности полевых операций. Поэтому к конструкции оборудования, способу зажима и эффективности обслуживания предъявляются повышенные требования. Этот патент дополняет ранее оформленные патенты Renyi на установки демонтажа колесных моторов и расширяет техническую базу по обслуживанию колесных узлов тяжелой техники.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2014-07-02',
    href: '/es/xinwenzhongxin/renyixinwen/1033',
    imageSrc: RENYI_MULTI_BODY_WHEEL_RIM_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para Multi-Body Wheel Rim Dismantling Machine de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2014 2 0027912.3, autorizada el 2 de julio de 2014',
    title: 'Changsha Renyi obtiene patente de modelo de utilidad para desmontadora multicomponente de llantas de rueda',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Multi-Body Wheel Rim Dismantling Machine”, número ZL 2014 2 0027912.3, autorizado el 2 de julio de 2014.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Multi-Body Wheel Rim Dismantling Machine”. El número de certificado es 3663504 y el número de patente es ZL 2014 2 0027912.3.',
      'Según el certificado, la fecha de solicitud fue el 17 de enero de 2014 y la fecha de anuncio de autorización fue el 2 de julio de 2014. Los inventores indicados incluyen a Luo Liang, Zuo Jun y Yang Liqun. La patente se centra en la estructura de equipos de desmontaje de llantas de rueda y forma parte del desarrollo de equipos dedicados para reparación de llantas grandes, desmontaje y coordinación de utillaje.',
      'El desmontaje multicomponente de llantas de rueda suele requerir capacidad de carga, posicionamiento, coordinación entre cuerpos separados y estabilidad de operación en campo, lo que eleva las exigencias sobre la estructura del equipo, el método de sujeción y la eficiencia de mantenimiento. Esta patente complementa las patentes anteriores de Renyi sobre desmontadoras de motores de rueda y añade documentación técnica para el desmontaje y mantenimiento de extremos de rueda en vehículos pesados.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const flotationAgitatorMainShaftSupportFixingDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-12-08',
    href: '/xinwenzhongxin/renyixinwen/1034',
    imageSrc: RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种新型浮选机、搅拌机轴承体内主轴支撑固定装置实用新型专利证书，专利号ZL 2017 2 0415470.3，授权公告日2017年12月8日',
    title: '长沙仁毅浮选机、搅拌机主轴支撑固定装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种新型浮选机、搅拌机轴承体内主轴支撑固定装置”获得授权，专利号为ZL 2017 2 0415470.3，授权公告日为2017年12月8日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种新型浮选机、搅拌机轴承体内主轴支撑固定装置”获得实用新型专利授权，证书号为第6706320号，专利号为ZL 2017 2 0415470.3。',
      '证书资料显示，该专利申请日为2017年4月20日，授权公告日为2017年12月8日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕浮选机、搅拌机轴承体内主轴支撑和固定结构展开，是公司面向选矿设备关键部件稳定运行形成的技术积累。',
      '浮选机和搅拌机在矿物处理、浆体搅拌和连续运行场景中，对主轴支撑、轴承体稳定性、密封与维护便利性有较高要求。该项专利补充了仁毅机械在选矿装备、传动支撑结构和设备可靠性保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-12-08',
    href: '/en/xinwenzhongxin/renyixinwen/1034',
    imageSrc: RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a New Main Shaft Support and Fixing Device inside the Bearing Body of a Flotation Machine and Agitator by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415470.3, authorized on December 8, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for Flotation Machine and Agitator Main Shaft Support Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a new main shaft support and fixing device inside the bearing body of a flotation machine and agitator, patent number ZL 2017 2 0415470.3, authorized on December 8, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “New Main Shaft Support and Fixing Device inside the Bearing Body of a Flotation Machine and Agitator”. The certificate number is 6706320 and the patent number is ZL 2017 2 0415470.3.',
      'According to the certificate, the application date was April 20, 2017 and the authorization announcement date was December 8, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on the support and fixing structure for the main shaft inside the bearing body of flotation machines and agitators, reflecting technical accumulation for stable operation of key mineral-processing equipment components.',
      'Flotation machines and agitators used in mineral processing, slurry mixing, and continuous operation place high demands on main shaft support, bearing-body stability, sealing, and maintenance convenience. This patent adds to Renyi Machinery’s R&D documentation around mineral-processing equipment, transmission support structures, and equipment reliability assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-12-08',
    href: '/ru/xinwenzhongxin/renyixinwen/1034',
    imageSrc: RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для нового устройства опоры и фиксации главного вала внутри корпуса подшипника флотационной машины и мешалки компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415470.3, дата авторизации 8 декабря 2017 года',
    title: 'Changsha Renyi получила патент на опорно-фиксирующее устройство главного вала флотационной машины и мешалки',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем нового устройства опоры и фиксации главного вала внутри корпуса подшипника флотационной машины и мешалки, номер ZL 2017 2 0415470.3, дата авторизации - 8 декабря 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “New Main Shaft Support and Fixing Device inside the Bearing Body of a Flotation Machine and Agitator”. Номер свидетельства - 6706320, номер патента - ZL 2017 2 0415470.3.',
      'Согласно свидетельству, дата подачи заявки - 20 апреля 2017 года, дата объявления о выдаче - 8 декабря 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к опоре и фиксации главного вала внутри корпуса подшипника флотационных машин и мешалок, отражая технический опыт компании по стабильной работе ключевых узлов обогатительного оборудования.',
      'Флотационные машины и мешалки в процессах переработки минералов, перемешивания пульпы и непрерывной эксплуатации предъявляют высокие требования к опоре главного вала, устойчивости корпуса подшипника, уплотнению и удобству обслуживания. Этот патент дополняет разработки Renyi Machinery в области обогатительного оборудования, опорных структур передачи и надежности оборудования.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-12-08',
    href: '/es/xinwenzhongxin/renyixinwen/1034',
    imageSrc: RENYI_FLOTATION_AGITATOR_MAIN_SHAFT_SUPPORT_FIXING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un nuevo dispositivo de soporte y fijación del eje principal dentro del cuerpo de rodamientos de una máquina de flotación y agitador de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415470.3, autorizada el 8 de diciembre de 2017',
    title: 'Changsha Renyi obtiene patente para dispositivo de soporte del eje principal de máquina de flotación y agitador',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un nuevo dispositivo de soporte y fijación del eje principal dentro del cuerpo de rodamientos de una máquina de flotación y agitador, número ZL 2017 2 0415470.3, autorizado el 8 de diciembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “New Main Shaft Support and Fixing Device inside the Bearing Body of a Flotation Machine and Agitator”. El número de certificado es 6706320 y el número de patente es ZL 2017 2 0415470.3.',
      'Según el certificado, la fecha de solicitud fue el 20 de abril de 2017 y la fecha de anuncio de autorización fue el 8 de diciembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en la estructura de soporte y fijación del eje principal dentro del cuerpo de rodamientos de máquinas de flotación y agitadores, y refleja acumulación técnica para la operación estable de componentes clave de equipos de procesamiento mineral.',
      'Las máquinas de flotación y los agitadores utilizados en procesamiento mineral, mezcla de pulpa y operación continua exigen soporte del eje principal, estabilidad del cuerpo de rodamientos, sellado y facilidad de mantenimiento. Esta patente complementa la documentación de I+D de Renyi Machinery en equipos de procesamiento mineral, estructuras de soporte de transmisión y fiabilidad del equipo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const centerAerationFlotationHighSpeedRotaryValvePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-11-17',
    href: '/xinwenzhongxin/renyixinwen/1035',
    imageSrc: RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种用于中心充气浮选机的高速回转阀实用新型专利证书，专利号ZL 2017 2 0412134.3，授权公告日2017年11月17日',
    title: '长沙仁毅中心充气浮选机高速回转阀获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于中心充气浮选机的高速回转阀”获得授权，专利号为ZL 2017 2 0412134.3，授权公告日为2017年11月17日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于中心充气浮选机的高速回转阀”获得实用新型专利授权，证书号为第6624939号，专利号为ZL 2017 2 0412134.3。',
      '证书资料显示，该专利申请日为2017年4月19日，授权公告日为2017年11月17日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕中心充气浮选机的高速回转阀结构展开，是公司面向选矿设备气流控制和连续运行稳定性形成的技术积累。',
      '中心充气浮选机在矿物分选和浆体处理过程中，对充气均匀性、回转阀响应、密封可靠性和运行维护效率有较高要求。该项专利与浮选机、搅拌机主轴支撑固定装置相关专利共同补充了仁毅机械在选矿装备关键部件和可靠性保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-11-17',
    href: '/en/xinwenzhongxin/renyixinwen/1035',
    imageSrc: RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a High-Speed Rotary Valve for a Center-Aeration Flotation Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0412134.3, authorized on November 17, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for High-Speed Rotary Valve for Center-Aeration Flotation Machine',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a high-speed rotary valve for a center-aeration flotation machine, patent number ZL 2017 2 0412134.3, authorized on November 17, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “High-Speed Rotary Valve for a Center-Aeration Flotation Machine”. The certificate number is 6624939 and the patent number is ZL 2017 2 0412134.3.',
      'According to the certificate, the application date was April 19, 2017 and the authorization announcement date was November 17, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on the high-speed rotary valve structure of a center-aeration flotation machine, reflecting technical accumulation for air-flow control and continuous operating stability in mineral-processing equipment.',
      'Center-aeration flotation machines used in mineral separation and slurry processing place high demands on aeration uniformity, rotary valve response, sealing reliability, and maintenance efficiency. This patent complements Renyi’s patent for the main shaft support and fixing device of flotation machines and agitators, adding R&D documentation around key mineral-processing equipment components and reliability assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-11-17',
    href: '/ru/xinwenzhongxin/renyixinwen/1035',
    imageSrc: RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для высокоскоростного поворотного клапана центроаэрационной флотационной машины компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0412134.3, дата авторизации 17 ноября 2017 года',
    title: 'Changsha Renyi получила патент на высокоскоростной поворотный клапан центроаэрационной флотационной машины',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем высокоскоростного поворотного клапана для центроаэрационной флотационной машины, номер ZL 2017 2 0412134.3, дата авторизации - 17 ноября 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “High-Speed Rotary Valve for a Center-Aeration Flotation Machine”. Номер свидетельства - 6624939, номер патента - ZL 2017 2 0412134.3.',
      'Согласно свидетельству, дата подачи заявки - 19 апреля 2017 года, дата объявления о выдаче - 17 ноября 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к конструкции высокоскоростного поворотного клапана центроаэрационной флотационной машины и отражает технический опыт компании в управлении воздушным потоком и стабильности непрерывной работы обогатительного оборудования.',
      'Центроаэрационные флотационные машины в процессах разделения минералов и обработки пульпы предъявляют высокие требования к равномерности аэрации, отклику поворотного клапана, надежности уплотнения и эффективности обслуживания. Этот патент дополняет патент Renyi на устройство опоры и фиксации главного вала флотационных машин и мешалок, расширяя документацию по ключевым узлам обогатительного оборудования и обеспечению надежности.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-11-17',
    href: '/es/xinwenzhongxin/renyixinwen/1035',
    imageSrc: RENYI_CENTER_AERATION_FLOTATION_HIGH_SPEED_ROTARY_VALVE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una válvula rotativa de alta velocidad para máquina de flotación de aireación central de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0412134.3, autorizada el 17 de noviembre de 2017',
    title: 'Changsha Renyi obtiene patente para válvula rotativa de alta velocidad de máquina de flotación de aireación central',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una válvula rotativa de alta velocidad para máquina de flotación de aireación central, número ZL 2017 2 0412134.3, autorizado el 17 de noviembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “High-Speed Rotary Valve for a Center-Aeration Flotation Machine”. El número de certificado es 6624939 y el número de patente es ZL 2017 2 0412134.3.',
      'Según el certificado, la fecha de solicitud fue el 19 de abril de 2017 y la fecha de anuncio de autorización fue el 17 de noviembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en la estructura de válvula rotativa de alta velocidad de una máquina de flotación de aireación central, y refleja acumulación técnica para control de flujo de aire y operación continua estable en equipos de procesamiento mineral.',
      'Las máquinas de flotación de aireación central utilizadas en separación de minerales y procesamiento de pulpa exigen uniformidad de aireación, respuesta de la válvula rotativa, fiabilidad de sellado y eficiencia de mantenimiento. Esta patente complementa la patente de Renyi sobre el dispositivo de soporte y fijación del eje principal de máquinas de flotación y agitadores, ampliando la documentación de I+D sobre componentes clave de equipos de procesamiento mineral y garantía de fiabilidad.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const hydraulicCylinderInnerWallRollingDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-11-17',
    href: '/xinwenzhongxin/renyixinwen/1036',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种用于加工液压油缸内壁的滚压装置实用新型专利证书，专利号ZL 2017 2 0415579.7，授权公告日2017年11月17日',
    title: '长沙仁毅液压油缸内壁滚压装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于加工液压油缸内壁的滚压装置”获得授权，专利号为ZL 2017 2 0415579.7，授权公告日为2017年11月17日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于加工液压油缸内壁的滚压装置”获得实用新型专利授权，证书号为第6624926号，专利号为ZL 2017 2 0415579.7。',
      '证书资料显示，该专利申请日为2017年4月20日，授权公告日为2017年11月17日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕液压油缸内壁加工过程中的滚压装置结构展开，是公司面向液压油缸制造、修复和精加工质量提升形成的技术积累。',
      '液压油缸内壁加工通常关系到表面质量、尺寸控制、密封配合和长期运行可靠性，对加工装备的稳定性和一致性有较高要求。该项专利补充了仁毅机械在液压油缸加工工艺、专用设备和质量保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-11-17',
    href: '/en/xinwenzhongxin/renyixinwen/1036',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Rolling Device for Machining the Inner Wall of a Hydraulic Cylinder by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415579.7, authorized on November 17, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for Hydraulic Cylinder Inner-Wall Rolling Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a rolling device for machining the inner wall of a hydraulic cylinder, patent number ZL 2017 2 0415579.7, authorized on November 17, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Rolling Device for Machining the Inner Wall of a Hydraulic Cylinder”. The certificate number is 6624926 and the patent number is ZL 2017 2 0415579.7.',
      'According to the certificate, the application date was April 20, 2017 and the authorization announcement date was November 17, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on the rolling-device structure used in hydraulic cylinder inner-wall machining and reflects technical accumulation for hydraulic cylinder manufacturing, repair, and finishing quality improvement.',
      'Hydraulic cylinder inner-wall machining is closely related to surface quality, dimensional control, sealing fit, and long-term operating reliability, placing high demands on processing equipment stability and consistency. This patent adds to Renyi Machinery’s R&D documentation around hydraulic cylinder machining processes, dedicated equipment, and quality assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-11-17',
    href: '/ru/xinwenzhongxin/renyixinwen/1036',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для раскатного устройства обработки внутренней стенки гидроцилиндра компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415579.7, дата авторизации 17 ноября 2017 года',
    title: 'Changsha Renyi получила патент на раскатное устройство обработки внутренней стенки гидроцилиндра',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем раскатного устройства для обработки внутренней стенки гидроцилиндра, номер ZL 2017 2 0415579.7, дата авторизации - 17 ноября 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Rolling Device for Machining the Inner Wall of a Hydraulic Cylinder”. Номер свидетельства - 6624926, номер патента - ZL 2017 2 0415579.7.',
      'Согласно свидетельству, дата подачи заявки - 20 апреля 2017 года, дата объявления о выдаче - 17 ноября 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к конструкции раскатного устройства, применяемого при обработке внутренней стенки гидроцилиндра, и отражает технический опыт компании в производстве, восстановлении и финишной обработке гидроцилиндров.',
      'Обработка внутренней стенки гидроцилиндра напрямую связана с качеством поверхности, точностью размеров, сопряжением уплотнений и надежностью длительной работы. Поэтому к стабильности и повторяемости технологического оборудования предъявляются высокие требования. Этот патент дополняет разработки Renyi Machinery в области процессов обработки гидроцилиндров, специального оборудования и обеспечения качества.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-11-17',
    href: '/es/xinwenzhongxin/renyixinwen/1036',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_ROLLING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un dispositivo de bruñido por rodillos para mecanizar la pared interior de un cilindro hidráulico de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415579.7, autorizada el 17 de noviembre de 2017',
    title: 'Changsha Renyi obtiene patente para dispositivo de bruñido por rodillos de pared interior de cilindro hidráulico',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un dispositivo de bruñido por rodillos para mecanizar la pared interior de un cilindro hidráulico, número ZL 2017 2 0415579.7, autorizado el 17 de noviembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Rolling Device for Machining the Inner Wall of a Hydraulic Cylinder”. El número de certificado es 6624926 y el número de patente es ZL 2017 2 0415579.7.',
      'Según el certificado, la fecha de solicitud fue el 20 de abril de 2017 y la fecha de anuncio de autorización fue el 17 de noviembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en la estructura del dispositivo de bruñido por rodillos utilizado en el mecanizado de la pared interior de cilindros hidráulicos, y refleja acumulación técnica para fabricación, reparación y mejora de calidad de acabado.',
      'El mecanizado de la pared interior de cilindros hidráulicos está estrechamente relacionado con la calidad superficial, el control dimensional, el ajuste de sellado y la fiabilidad de operación a largo plazo, por lo que exige estabilidad y consistencia del equipo de proceso. Esta patente complementa la documentación de I+D de Renyi Machinery sobre procesos de mecanizado de cilindros hidráulicos, equipos dedicados y garantía de calidad.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const latheShaftGrindingPolishingHeadDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-11-24',
    href: '/xinwenzhongxin/renyixinwen/1037',
    imageSrc: RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种能安装在车床上对轴进行磨削、抛光加工的磨头装置实用新型专利证书，专利号ZL 2017 2 0415481.1，授权公告日2017年11月24日',
    title: '长沙仁毅车床轴类磨削抛光磨头装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种能安装在车床上对轴进行磨削、抛光加工的磨头装置”获得授权，专利号为ZL 2017 2 0415481.1，授权公告日为2017年11月24日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种能安装在车床上对轴进行磨削、抛光加工的磨头装置”获得实用新型专利授权，证书号为第6651890号，专利号为ZL 2017 2 0415481.1。',
      '证书资料显示，该专利申请日为2017年4月20日，授权公告日为2017年11月24日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕可安装在车床上的轴类磨削、抛光加工磨头装置展开，是公司面向轴类零件加工、修复和表面质量提升形成的技术积累。',
      '轴类零件的磨削和抛光加工通常关系到尺寸精度、表面粗糙度、装配配合和使用寿命，对加工设备的安装便利性、稳定性和一致性有较高要求。该项专利与液压油缸内壁滚压装置等专利共同补充了仁毅机械在零部件精加工、修复工艺和质量保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-11-24',
    href: '/en/xinwenzhongxin/renyixinwen/1037',
    imageSrc: RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Grinding Head Device Mounted on a Lathe for Shaft Grinding and Polishing by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415481.1, authorized on November 24, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for Lathe-Mounted Shaft Grinding and Polishing Head Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a grinding head device mounted on a lathe for shaft grinding and polishing, patent number ZL 2017 2 0415481.1, authorized on November 24, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Grinding Head Device Mounted on a Lathe for Shaft Grinding and Polishing”. The certificate number is 6651890 and the patent number is ZL 2017 2 0415481.1.',
      'According to the certificate, the application date was April 20, 2017 and the authorization announcement date was November 24, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on a lathe-mounted grinding head device for shaft grinding and polishing, reflecting technical accumulation for shaft-part machining, repair, and surface quality improvement.',
      'Grinding and polishing of shaft parts is closely related to dimensional accuracy, surface roughness, assembly fit, and service life, placing high demands on equipment installation convenience, stability, and consistency. This patent complements Renyi’s hydraulic cylinder inner-wall rolling device patent and adds to its R&D documentation around component finishing, repair processes, and quality assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-11-24',
    href: '/ru/xinwenzhongxin/renyixinwen/1037',
    imageSrc: RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для шлифовально-полировальной головки, устанавливаемой на токарный станок для обработки валов, компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415481.1, дата авторизации 24 ноября 2017 года',
    title: 'Changsha Renyi получила патент на шлифовально-полировальную головку для обработки валов на токарном станке',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем шлифовально-полировальной головки, устанавливаемой на токарный станок для обработки валов, номер ZL 2017 2 0415481.1, дата авторизации - 24 ноября 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Grinding Head Device Mounted on a Lathe for Shaft Grinding and Polishing”. Номер свидетельства - 6651890, номер патента - ZL 2017 2 0415481.1.',
      'Согласно свидетельству, дата подачи заявки - 20 апреля 2017 года, дата объявления о выдаче - 24 ноября 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к шлифовально-полировальной головке, устанавливаемой на токарный станок для обработки валов, и отражает технический опыт компании в обработке, восстановлении и повышении качества поверхности валовых деталей.',
      'Шлифование и полирование валовых деталей напрямую связаны с точностью размеров, шероховатостью поверхности, посадкой при сборке и сроком службы. Поэтому к удобству установки, стабильности и повторяемости оборудования предъявляются высокие требования. Этот патент дополняет патент Renyi на раскатное устройство обработки внутренней стенки гидроцилиндра и расширяет документацию по финишной обработке деталей, ремонтным процессам и обеспечению качества.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-11-24',
    href: '/es/xinwenzhongxin/renyixinwen/1037',
    imageSrc: RENYI_LATHE_SHAFT_GRINDING_POLISHING_HEAD_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un cabezal de rectificado y pulido montado en torno para mecanizar ejes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415481.1, autorizada el 24 de noviembre de 2017',
    title: 'Changsha Renyi obtiene patente para cabezal de rectificado y pulido de ejes montado en torno',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un cabezal de rectificado y pulido montado en torno para mecanizar ejes, número ZL 2017 2 0415481.1, autorizado el 24 de noviembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Grinding Head Device Mounted on a Lathe for Shaft Grinding and Polishing”. El número de certificado es 6651890 y el número de patente es ZL 2017 2 0415481.1.',
      'Según el certificado, la fecha de solicitud fue el 20 de abril de 2017 y la fecha de anuncio de autorización fue el 24 de noviembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en un cabezal de rectificado montado en torno para rectificar y pulir ejes, y refleja acumulación técnica para mecanizado, reparación y mejora de calidad superficial de piezas tipo eje.',
      'El rectificado y pulido de ejes está estrechamente relacionado con la precisión dimensional, la rugosidad superficial, el ajuste de montaje y la vida útil, por lo que exige facilidad de instalación, estabilidad y consistencia del equipo. Esta patente complementa la patente de Renyi sobre el dispositivo de bruñido por rodillos de la pared interior de cilindros hidráulicos, ampliando la documentación de I+D sobre acabado de componentes, procesos de reparación y garantía de calidad.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const hydraulicCylinderInnerWallGrindingDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-11-24',
    href: '/xinwenzhongxin/renyixinwen/1038',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种用于加工液压油缸内壁的磨削装置实用新型专利证书，专利号ZL 2017 2 0415660.5，授权公告日2017年11月24日',
    title: '长沙仁毅液压油缸内壁磨削装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于加工液压油缸内壁的磨削装置”获得授权，专利号为ZL 2017 2 0415660.5，授权公告日为2017年11月24日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种用于加工液压油缸内壁的磨削装置”获得实用新型专利授权，证书号为第6651978号，专利号为ZL 2017 2 0415660.5。',
      '证书资料显示，该专利申请日为2017年4月20日，授权公告日为2017年11月24日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕液压油缸内壁加工过程中的磨削装置结构展开，是公司面向液压油缸制造、修复和精加工质量提升形成的技术积累。',
      '液压油缸内壁磨削加工通常关系到尺寸精度、表面质量、密封配合和长期运行可靠性，对磨削设备的稳定性、加工一致性和维护便利性有较高要求。该项专利与液压油缸内壁滚压装置专利相互补充，完善了仁毅机械在液压油缸加工工艺、专用设备和质量保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-11-24',
    href: '/en/xinwenzhongxin/renyixinwen/1038',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Grinding Device for Machining the Inner Wall of a Hydraulic Cylinder by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415660.5, authorized on November 24, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for Hydraulic Cylinder Inner-Wall Grinding Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a grinding device for machining the inner wall of a hydraulic cylinder, patent number ZL 2017 2 0415660.5, authorized on November 24, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Grinding Device for Machining the Inner Wall of a Hydraulic Cylinder”. The certificate number is 6651978 and the patent number is ZL 2017 2 0415660.5.',
      'According to the certificate, the application date was April 20, 2017 and the authorization announcement date was November 24, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on the grinding-device structure used in hydraulic cylinder inner-wall machining and reflects technical accumulation for hydraulic cylinder manufacturing, repair, and finishing quality improvement.',
      'Hydraulic cylinder inner-wall grinding is closely related to dimensional accuracy, surface quality, sealing fit, and long-term operating reliability, placing high demands on grinding equipment stability, processing consistency, and maintenance convenience. This patent complements Renyi’s inner-wall rolling device patent and improves its R&D documentation around hydraulic cylinder machining processes, dedicated equipment, and quality assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-11-24',
    href: '/ru/xinwenzhongxin/renyixinwen/1038',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для шлифовального устройства обработки внутренней стенки гидроцилиндра компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415660.5, дата авторизации 24 ноября 2017 года',
    title: 'Changsha Renyi получила патент на шлифовальное устройство обработки внутренней стенки гидроцилиндра',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем шлифовального устройства для обработки внутренней стенки гидроцилиндра, номер ZL 2017 2 0415660.5, дата авторизации - 24 ноября 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Grinding Device for Machining the Inner Wall of a Hydraulic Cylinder”. Номер свидетельства - 6651978, номер патента - ZL 2017 2 0415660.5.',
      'Согласно свидетельству, дата подачи заявки - 20 апреля 2017 года, дата объявления о выдаче - 24 ноября 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к конструкции шлифовального устройства, применяемого при обработке внутренней стенки гидроцилиндра, и отражает технический опыт компании в производстве, восстановлении и финишной обработке гидроцилиндров.',
      'Шлифование внутренней стенки гидроцилиндра напрямую связано с точностью размеров, качеством поверхности, сопряжением уплотнений и надежностью длительной работы. Поэтому к стабильности шлифовального оборудования, повторяемости обработки и удобству обслуживания предъявляются высокие требования. Этот патент дополняет патент Renyi на раскатное устройство обработки внутренней стенки гидроцилиндра и расширяет документацию по процессам обработки, специальному оборудованию и обеспечению качества.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-11-24',
    href: '/es/xinwenzhongxin/renyixinwen/1038',
    imageSrc: RENYI_HYDRAULIC_CYLINDER_INNER_WALL_GRINDING_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un dispositivo de rectificado para mecanizar la pared interior de un cilindro hidráulico de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415660.5, autorizada el 24 de noviembre de 2017',
    title: 'Changsha Renyi obtiene patente para dispositivo de rectificado de pared interior de cilindro hidráulico',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un dispositivo de rectificado para mecanizar la pared interior de un cilindro hidráulico, número ZL 2017 2 0415660.5, autorizado el 24 de noviembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Grinding Device for Machining the Inner Wall of a Hydraulic Cylinder”. El número de certificado es 6651978 y el número de patente es ZL 2017 2 0415660.5.',
      'Según el certificado, la fecha de solicitud fue el 20 de abril de 2017 y la fecha de anuncio de autorización fue el 24 de noviembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en la estructura del dispositivo de rectificado utilizado en el mecanizado de la pared interior de cilindros hidráulicos, y refleja acumulación técnica para fabricación, reparación y mejora de calidad de acabado.',
      'El rectificado de la pared interior de cilindros hidráulicos está estrechamente relacionado con la precisión dimensional, la calidad superficial, el ajuste de sellado y la fiabilidad de operación a largo plazo, por lo que exige estabilidad del equipo, consistencia del proceso y facilidad de mantenimiento. Esta patente complementa la patente de Renyi sobre el dispositivo de bruñido por rodillos de la pared interior de cilindros hidráulicos, ampliando la documentación de I+D sobre procesos de mecanizado, equipos dedicados y garantía de calidad.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const flotationAgitatorUpperLowerShaftPositioningConnectionDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2017-12-19',
    href: '/xinwenzhongxin/renyixinwen/1039',
    imageSrc: RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司大型浮选机、搅拌机上下轴准确定位连接装置实用新型专利证书，专利号ZL 2017 2 0415482.6，授权公告日2017年12月19日',
    title: '长沙仁毅大型浮选机、搅拌机上下轴定位连接装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“大型浮选机、搅拌机上下轴准确定位连接装置”获得授权，专利号为ZL 2017 2 0415482.6，授权公告日为2017年12月19日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“大型浮选机、搅拌机上下轴准确定位连接装置”获得实用新型专利授权，证书号为第6745951号，专利号为ZL 2017 2 0415482.6。',
      '证书资料显示，该专利申请日为2017年4月20日，授权公告日为2017年12月19日，专利权人为长沙仁毅机械制造有限公司，发明人包括杨立群、汤亮、左俊。该专利围绕大型浮选机、搅拌机上下轴连接和准确定位结构展开，是公司面向选矿装备关键传动部件稳定运行形成的技术积累。',
      '大型浮选机和搅拌机在连续运行场景中，对上下轴同轴度、连接可靠性、装配效率和维护便利性有较高要求。该项专利与浮选机、搅拌机主轴支撑固定装置等专利共同补充了仁毅机械在选矿装备关键部件、传动连接结构和可靠性保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2017-12-19',
    href: '/en/xinwenzhongxin/renyixinwen/1039',
    imageSrc: RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for an Accurate Positioning Connection Device for Upper and Lower Shafts of Large Flotation Machines and Agitators by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2017 2 0415482.6, authorized on December 19, 2017',
    title: 'Changsha Renyi Receives Utility Model Patent for Upper and Lower Shaft Positioning Connection Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of an accurate positioning connection device for upper and lower shafts of large flotation machines and agitators, patent number ZL 2017 2 0415482.6, authorized on December 19, 2017.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of an “Accurate Positioning Connection Device for Upper and Lower Shafts of Large Flotation Machines and Agitators”. The certificate number is 6745951 and the patent number is ZL 2017 2 0415482.6.',
      'According to the certificate, the application date was April 20, 2017 and the authorization announcement date was December 19, 2017. The listed inventors include Yang Liqun, Tang Liang, and Zuo Jun. The patent focuses on the connection and accurate positioning structure for upper and lower shafts of large flotation machines and agitators, reflecting technical accumulation for stable operation of key transmission components in mineral-processing equipment.',
      'Large flotation machines and agitators used in continuous operation place high demands on upper and lower shaft coaxiality, connection reliability, assembly efficiency, and maintenance convenience. This patent complements Renyi’s patents for main shaft support and fixing devices for flotation machines and agitators, adding R&D documentation around key mineral-processing equipment components, transmission connection structures, and reliability assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2017-12-19',
    href: '/ru/xinwenzhongxin/renyixinwen/1039',
    imageSrc: RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для устройства точного позиционирования и соединения верхнего и нижнего валов крупных флотационных машин и мешалок компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2017 2 0415482.6, дата авторизации 19 декабря 2017 года',
    title: 'Changsha Renyi получила патент на устройство позиционирования соединения верхнего и нижнего валов',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем устройства точного позиционирования и соединения верхнего и нижнего валов крупных флотационных машин и мешалок, номер ZL 2017 2 0415482.6, дата авторизации - 19 декабря 2017 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Accurate Positioning Connection Device for Upper and Lower Shafts of Large Flotation Machines and Agitators”. Номер свидетельства - 6745951, номер патента - ZL 2017 2 0415482.6.',
      'Согласно свидетельству, дата подачи заявки - 20 апреля 2017 года, дата объявления о выдаче - 19 декабря 2017 года. В числе изобретателей указаны Yang Liqun, Tang Liang и Zuo Jun. Патент относится к соединению и точному позиционированию верхнего и нижнего валов крупных флотационных машин и мешалок, отражая технический опыт компании по стабильной работе ключевых передаточных узлов обогатительного оборудования.',
      'Крупные флотационные машины и мешалки в условиях непрерывной эксплуатации предъявляют высокие требования к соосности верхнего и нижнего валов, надежности соединения, эффективности сборки и удобству обслуживания. Этот патент дополняет патенты Renyi на устройства опоры и фиксации главного вала флотационных машин и мешалок, расширяя документацию по ключевым узлам обогатительного оборудования, передаточным соединениям и обеспечению надежности.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2017-12-19',
    href: '/es/xinwenzhongxin/renyixinwen/1039',
    imageSrc: RENYI_FLOTATION_AGITATOR_UPPER_LOWER_SHAFT_POSITIONING_CONNECTION_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un dispositivo de conexión y posicionamiento preciso de ejes superior e inferior de grandes máquinas de flotación y agitadores de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2017 2 0415482.6, autorizada el 19 de diciembre de 2017',
    title: 'Changsha Renyi obtiene patente para dispositivo de conexión posicionada de ejes superior e inferior',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un dispositivo de conexión y posicionamiento preciso de ejes superior e inferior de grandes máquinas de flotación y agitadores, número ZL 2017 2 0415482.6, autorizado el 19 de diciembre de 2017.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Accurate Positioning Connection Device for Upper and Lower Shafts of Large Flotation Machines and Agitators”. El número de certificado es 6745951 y el número de patente es ZL 2017 2 0415482.6.',
      'Según el certificado, la fecha de solicitud fue el 20 de abril de 2017 y la fecha de anuncio de autorización fue el 19 de diciembre de 2017. Los inventores indicados incluyen a Yang Liqun, Tang Liang y Zuo Jun. La patente se centra en la conexión y posicionamiento preciso de los ejes superior e inferior de grandes máquinas de flotación y agitadores, y refleja acumulación técnica para la operación estable de componentes de transmisión clave en equipos de procesamiento mineral.',
      'Las grandes máquinas de flotación y los agitadores utilizados en operación continua exigen coaxialidad entre ejes superior e inferior, fiabilidad de conexión, eficiencia de montaje y facilidad de mantenimiento. Esta patente complementa las patentes de Renyi sobre dispositivos de soporte y fijación del eje principal de máquinas de flotación y agitadores, ampliando la documentación de I+D sobre componentes clave de equipos de procesamiento mineral, estructuras de conexión de transmisión y garantía de fiabilidad.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const largeMaterialTransferUShapedCarriagePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2018-08-31',
    href: '/xinwenzhongxin/renyixinwen/1040',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种大型物料转运U型车厢实用新型专利证书，专利号ZL 2018 2 0197138.9，授权公告日2018年8月31日',
    title: '长沙仁毅大型物料转运U型车厢获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种大型物料转运U型车厢”获得授权，专利号为ZL 2018 2 0197138.9，授权公告日为2018年8月31日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种大型物料转运U型车厢”获得实用新型专利授权，证书号为第7770376号，专利号为ZL 2018 2 0197138.9，授权公告号为CN 207790444 U。',
      '证书资料显示，该专利申请日为2018年2月5日，授权公告日为2018年8月31日，专利权人为长沙仁毅机械制造有限公司，发明人包括左俊、杨立群、罗良、于侗。该专利围绕大型物料转运场景中的U型车厢结构展开，是公司面向矿山和工程机械物料运输、转运效率与承载可靠性形成的技术积累。',
      '大型物料转运通常对车厢结构强度、装载稳定性、卸料便利性和现场适应性有较高要求。该项专利补充了仁毅机械在重型物料转运装备、结构件设计和现场服务保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2018-08-31',
    href: '/en/xinwenzhongxin/renyixinwen/1040',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Large Material Transfer U-Shaped Carriage by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 0197138.9, authorized on August 31, 2018',
    title: 'Changsha Renyi Receives Utility Model Patent for Large Material Transfer U-Shaped Carriage',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a large material transfer U-shaped carriage, patent number ZL 2018 2 0197138.9, authorized on August 31, 2018.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Large Material Transfer U-Shaped Carriage”. The certificate number is 7770376, the patent number is ZL 2018 2 0197138.9, and the authorization publication number is CN 207790444 U.',
      'According to the certificate, the application date was February 5, 2018 and the authorization announcement date was August 31, 2018. The listed inventors include Zuo Jun, Yang Liqun, Luo Liang, and Yu Tong. The patent focuses on the U-shaped carriage structure used in large material transfer scenarios, reflecting technical accumulation around material transportation, transfer efficiency, and load-bearing reliability for mining and engineering machinery applications.',
      'Large material transfer typically places high demands on carriage structural strength, loading stability, unloading convenience, and adaptability to worksite conditions. This patent adds to Renyi Machinery’s R&D documentation around heavy material transfer equipment, structural component design, and field service assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2018-08-31',
    href: '/ru/xinwenzhongxin/renyixinwen/1040',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для U-образного кузова перевозки крупных материалов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 0197138.9, дата авторизации 31 августа 2018 года',
    title: 'Changsha Renyi получила патент на U-образный кузов для перевозки крупных материалов',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем U-образного кузова для перевозки крупных материалов, номер ZL 2018 2 0197138.9, дата авторизации - 31 августа 2018 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Large Material Transfer U-Shaped Carriage”. Номер свидетельства - 7770376, номер патента - ZL 2018 2 0197138.9, номер публикации о выдаче - CN 207790444 U.',
      'Согласно свидетельству, дата подачи заявки - 5 февраля 2018 года, дата объявления о выдаче - 31 августа 2018 года. В числе изобретателей указаны Zuo Jun, Yang Liqun, Luo Liang и Yu Tong. Патент относится к конструкции U-образного кузова для перевозки крупных материалов и отражает технический опыт компании в области транспортировки материалов, эффективности перегрузки и надежности несущих конструкций для горной и инженерной техники.',
      'Перевозка крупных материалов обычно предъявляет высокие требования к прочности кузова, устойчивости загрузки, удобству разгрузки и адаптации к условиям площадки. Этот патент дополняет документацию Renyi Machinery по тяжелому транспортному оборудованию, проектированию металлоконструкций и обеспечению сервисной поддержки на объекте.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2018-08-31',
    href: '/es/xinwenzhongxin/renyixinwen/1040',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_U_SHAPED_CARRIAGE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una carrocería en U de transferencia de materiales grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 0197138.9, autorizada el 31 de agosto de 2018',
    title: 'Changsha Renyi obtiene patente para carrocería en U de transferencia de materiales grandes',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una carrocería en U de transferencia de materiales grandes, número ZL 2018 2 0197138.9, autorizada el 31 de agosto de 2018.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Large Material Transfer U-Shaped Carriage”. El número de certificado es 7770376, el número de patente es ZL 2018 2 0197138.9 y el número de publicación de autorización es CN 207790444 U.',
      'Según el certificado, la fecha de solicitud fue el 5 de febrero de 2018 y la fecha de anuncio de autorización fue el 31 de agosto de 2018. Los inventores indicados incluyen a Zuo Jun, Yang Liqun, Luo Liang y Yu Tong. La patente se centra en la estructura de carrocería en U utilizada en escenarios de transferencia de materiales grandes, reflejando acumulación técnica en transporte de materiales, eficiencia de transferencia y fiabilidad de carga para aplicaciones de minería y maquinaria de ingeniería.',
      'La transferencia de materiales grandes suele exigir resistencia estructural de la carrocería, estabilidad de carga, facilidad de descarga y adaptación a las condiciones del sitio. Esta patente complementa la documentación de I+D de Renyi Machinery sobre equipos pesados de transferencia de materiales, diseño de componentes estructurales y garantía de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const largeMaterialTransferVehiclePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2018-09-11',
    href: '/xinwenzhongxin/renyixinwen/1041',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种大型物料转运车实用新型专利证书，专利号ZL 2018 2 0197137.4，授权公告日2018年9月11日',
    title: '长沙仁毅大型物料转运车获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种大型物料转运车”获得授权，专利号为ZL 2018 2 0197137.4，授权公告日为2018年9月11日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种大型物料转运车”获得实用新型专利授权，证书号为第7834635号，专利号为ZL 2018 2 0197137.4，授权公告号为CN 207845058 U。',
      '证书资料显示，该专利申请日为2018年2月5日，授权公告日为2018年9月11日，专利权人为长沙仁毅机械制造有限公司，发明人包括左俊、杨立群、罗亮、于侗。该专利围绕大型物料转运车整车结构与转运场景展开，是公司面向矿山和工程机械物料运输、现场转运效率与承载可靠性形成的技术积累。',
      '大型物料转运车通常需要兼顾承载能力、结构稳定性、通过性、维护便利性和不同工况下的现场适应性。该项专利与大型物料转运U型车厢专利共同补充了仁毅机械在重型物料转运装备、结构件设计和现场服务保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2018-09-11',
    href: '/en/xinwenzhongxin/renyixinwen/1041',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Large Material Transfer Vehicle by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 0197137.4, authorized on September 11, 2018',
    title: 'Changsha Renyi Receives Utility Model Patent for Large Material Transfer Vehicle',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a large material transfer vehicle, patent number ZL 2018 2 0197137.4, authorized on September 11, 2018.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Large Material Transfer Vehicle”. The certificate number is 7834635, the patent number is ZL 2018 2 0197137.4, and the authorization publication number is CN 207845058 U.',
      'According to the certificate, the application date was February 5, 2018 and the authorization announcement date was September 11, 2018. The listed inventors include Zuo Jun, Yang Liqun, Luo Liang, and Yu Tong. The patent focuses on the complete vehicle structure and transfer scenarios for large material transport, reflecting technical accumulation around material transportation, site transfer efficiency, and load-bearing reliability for mining and engineering machinery applications.',
      'Large material transfer vehicles typically need to balance load capacity, structural stability, passability, maintenance convenience, and adaptability to different worksite conditions. Together with Renyi’s U-shaped carriage patent for large material transfer, this patent adds R&D documentation around heavy material transfer equipment, structural component design, and field service assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2018-09-11',
    href: '/ru/xinwenzhongxin/renyixinwen/1041',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для транспортного средства перевозки крупных материалов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 0197137.4, дата авторизации 11 сентября 2018 года',
    title: 'Changsha Renyi получила патент на транспортное средство для перевозки крупных материалов',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем транспортного средства для перевозки крупных материалов, номер ZL 2018 2 0197137.4, дата авторизации - 11 сентября 2018 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Large Material Transfer Vehicle”. Номер свидетельства - 7834635, номер патента - ZL 2018 2 0197137.4, номер публикации о выдаче - CN 207845058 U.',
      'Согласно свидетельству, дата подачи заявки - 5 февраля 2018 года, дата объявления о выдаче - 11 сентября 2018 года. В числе изобретателей указаны Zuo Jun, Yang Liqun, Luo Liang и Yu Tong. Патент относится к конструкции транспортного средства для перевозки крупных материалов и отражает технический опыт компании в области транспортировки материалов, эффективности перемещения на площадке и надежности несущих конструкций для горной и инженерной техники.',
      'Транспортные средства для перевозки крупных материалов обычно должны сочетать грузоподъемность, устойчивость конструкции, проходимость, удобство обслуживания и адаптацию к различным условиям площадки. Вместе с патентом Renyi на U-образный кузов для перевозки крупных материалов этот патент расширяет документацию по тяжелому транспортному оборудованию, проектированию металлоконструкций и обеспечению сервисной поддержки на объекте.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2018-09-11',
    href: '/es/xinwenzhongxin/renyixinwen/1041',
    imageSrc: RENYI_LARGE_MATERIAL_TRANSFER_VEHICLE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un vehículo de transferencia de materiales grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 0197137.4, autorizada el 11 de septiembre de 2018',
    title: 'Changsha Renyi obtiene patente para vehículo de transferencia de materiales grandes',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un vehículo de transferencia de materiales grandes, número ZL 2018 2 0197137.4, autorizado el 11 de septiembre de 2018.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Large Material Transfer Vehicle”. El número de certificado es 7834635, el número de patente es ZL 2018 2 0197137.4 y el número de publicación de autorización es CN 207845058 U.',
      'Según el certificado, la fecha de solicitud fue el 5 de febrero de 2018 y la fecha de anuncio de autorización fue el 11 de septiembre de 2018. Los inventores indicados incluyen a Zuo Jun, Yang Liqun, Luo Liang y Yu Tong. La patente se centra en la estructura integral del vehículo y los escenarios de transferencia de materiales grandes, reflejando acumulación técnica en transporte de materiales, eficiencia de transferencia en sitio y fiabilidad de carga para aplicaciones de minería y maquinaria de ingeniería.',
      'Los vehículos de transferencia de materiales grandes suelen necesitar equilibrar capacidad de carga, estabilidad estructural, transitabilidad, facilidad de mantenimiento y adaptación a diferentes condiciones del sitio. Junto con la patente de Renyi sobre carrocería en U de transferencia de materiales grandes, esta patente amplía la documentación de I+D sobre equipos pesados de transferencia de materiales, diseño de componentes estructurales y garantía de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const raiseBoringMachineDetachableCleaningHostPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2019-04-05',
    href: '/xinwenzhongxin/renyixinwen/1042',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种天井钻机用便于拆装清洗的主机实用新型专利证书，专利号ZL 2018 2 1461083.4，授权公告日2019年4月5日',
    title: '长沙仁毅天井钻机便于拆装清洗主机获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机用便于拆装清洗的主机”获得授权，专利号为ZL 2018 2 1461083.4，授权公告日为2019年4月5日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机用便于拆装清洗的主机”获得实用新型专利授权，证书号为第8691881号，专利号为ZL 2018 2 1461083.4，授权公告号为CN 208707437 U。',
      '证书资料显示，该专利申请日为2018年9月6日，授权公告日为2019年4月5日，专利权人为长沙仁毅机械制造有限公司，发明人为左俊。该专利围绕天井钻机主机的拆装与清洗便利性展开，是公司面向矿山装备维护效率、设备清洁和现场检修便利性形成的技术积累。',
      '天井钻机主机作为关键工作部件，对结构可靠性、维护可达性、清洗便利性和长期运行稳定性有较高要求。该项专利补充了仁毅机械在矿山钻机装备结构优化、维修工艺和现场服务保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2019-04-05',
    href: '/en/xinwenzhongxin/renyixinwen/1042',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Raise Boring Machine Main Unit Designed for Convenient Disassembly and Cleaning by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461083.4, authorized on April 5, 2019',
    title: 'Changsha Renyi Receives Utility Model Patent for Raise Boring Machine Main Unit',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a raise boring machine main unit designed for convenient disassembly and cleaning, patent number ZL 2018 2 1461083.4, authorized on April 5, 2019.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Raise Boring Machine Main Unit Designed for Convenient Disassembly and Cleaning”. The certificate number is 8691881, the patent number is ZL 2018 2 1461083.4, and the authorization publication number is CN 208707437 U.',
      'According to the certificate, the application date was September 6, 2018 and the authorization announcement date was April 5, 2019. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventor is Zuo Jun. The patent focuses on improving the convenience of disassembly and cleaning for the main unit of a raise boring machine, reflecting technical accumulation around maintenance efficiency, equipment cleanliness, and field serviceability for mining equipment.',
      'As a key working component, the main unit of a raise boring machine places high demands on structural reliability, maintenance access, cleaning convenience, and long-term operating stability. This patent adds to Renyi Machinery’s R&D documentation around structural optimization of mining drilling equipment, maintenance processes, and field service assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2019-04-05',
    href: '/ru/xinwenzhongxin/renyixinwen/1042',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для главного блока установки восстающего бурения с удобной разборкой и очисткой компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461083.4, дата авторизации 5 апреля 2019 года',
    title: 'Changsha Renyi получила патент на главный блок установки восстающего бурения',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем главного блока установки восстающего бурения с удобной разборкой и очисткой, номер ZL 2018 2 1461083.4, дата авторизации - 5 апреля 2019 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Raise Boring Machine Main Unit Designed for Convenient Disassembly and Cleaning”. Номер свидетельства - 8691881, номер патента - ZL 2018 2 1461083.4, номер публикации о выдаче - CN 208707437 U.',
      'Согласно свидетельству, дата подачи заявки - 6 сентября 2018 года, дата объявления о выдаче - 5 апреля 2019 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателем указан Zuo Jun. Патент направлен на повышение удобства разборки и очистки главного блока установки восстающего бурения, отражая технический опыт компании в области эффективности обслуживания, чистоты оборудования и удобства полевого ремонта горного оборудования.',
      'Главный блок установки восстающего бурения как ключевой рабочий узел предъявляет высокие требования к надежности конструкции, доступности обслуживания, удобству очистки и стабильности длительной эксплуатации. Этот патент дополняет документацию Renyi Machinery по оптимизации конструкции горного бурового оборудования, ремонтным процессам и обеспечению сервисной поддержки на объекте.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2019-04-05',
    href: '/es/xinwenzhongxin/renyixinwen/1042',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DETACHABLE_CLEANING_HOST_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una unidad principal de máquina raise boring diseñada para desmontaje y limpieza convenientes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461083.4, autorizada el 5 de abril de 2019',
    title: 'Changsha Renyi obtiene patente para unidad principal de máquina raise boring',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una unidad principal de máquina raise boring diseñada para desmontaje y limpieza convenientes, número ZL 2018 2 1461083.4, autorizada el 5 de abril de 2019.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Raise Boring Machine Main Unit Designed for Convenient Disassembly and Cleaning”. El número de certificado es 8691881, el número de patente es ZL 2018 2 1461083.4 y el número de publicación de autorización es CN 208707437 U.',
      'Según el certificado, la fecha de solicitud fue el 6 de septiembre de 2018 y la fecha de anuncio de autorización fue el 5 de abril de 2019. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y el inventor indicado es Zuo Jun. La patente se centra en mejorar la facilidad de desmontaje y limpieza de la unidad principal de una máquina raise boring, reflejando acumulación técnica en eficiencia de mantenimiento, limpieza del equipo y servicio en campo para equipos mineros.',
      'Como componente de trabajo clave, la unidad principal de una máquina raise boring exige fiabilidad estructural, accesibilidad de mantenimiento, facilidad de limpieza y estabilidad operativa a largo plazo. Esta patente complementa la documentación de I+D de Renyi Machinery sobre optimización estructural de equipos de perforación minera, procesos de mantenimiento y garantía de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const raiseBoringMachineDeformationResistantCutterheadPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2019-04-12',
    href: '/xinwenzhongxin/renyixinwen/1043',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种天井钻机用不易变形且便于换刀的刀盘实用新型专利证书，专利号ZL 2018 2 1461082.X，授权公告日2019年4月12日',
    title: '长沙仁毅天井钻机不易变形便于换刀刀盘获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机用不易变形且便于换刀的刀盘”获得授权，专利号为ZL 2018 2 1461082.X，授权公告日为2019年4月12日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机用不易变形且便于换刀的刀盘”获得实用新型专利授权，证书号为第8710529号，专利号为ZL 2018 2 1461082.X，授权公告号为CN 208734332 U。',
      '证书资料显示，该专利申请日为2018年9月6日，授权公告日为2019年4月12日，专利权人为长沙仁毅机械制造有限公司，发明人为左俊。该专利围绕天井钻机刀盘结构的抗变形能力和换刀便利性展开，是公司面向矿山钻进装备关键部件耐用性、维护效率和现场检修便利性形成的技术积累。',
      '天井钻机刀盘在施工中需要承受冲击、扭矩、磨损和复杂岩层工况，对结构强度、刀具布置、换刀效率和长期运行稳定性有较高要求。该项专利补充了仁毅机械在矿山钻机关键工作部件、刀盘结构优化和维修保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2019-04-12',
    href: '/en/xinwenzhongxin/renyixinwen/1043',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Deformation-Resistant Cutterhead with Convenient Cutter Replacement for Raise Boring Machines by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461082.X, authorized on April 12, 2019',
    title: 'Changsha Renyi Receives Utility Model Patent for Raise Boring Machine Cutterhead',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a deformation-resistant cutterhead with convenient cutter replacement for raise boring machines, patent number ZL 2018 2 1461082.X, authorized on April 12, 2019.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Deformation-Resistant Cutterhead with Convenient Cutter Replacement for Raise Boring Machines”. The certificate number is 8710529, the patent number is ZL 2018 2 1461082.X, and the authorization publication number is CN 208734332 U.',
      'According to the certificate, the application date was September 6, 2018 and the authorization announcement date was April 12, 2019. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventor is Zuo Jun. The patent focuses on deformation resistance and cutter replacement convenience in the cutterhead structure of raise boring machines, reflecting technical accumulation around durability, maintenance efficiency, and field serviceability of key mining drilling components.',
      'A raise boring machine cutterhead must withstand impact, torque, wear, and complex rock conditions during operation, placing high demands on structural strength, cutter arrangement, replacement efficiency, and long-term operating stability. This patent adds to Renyi Machinery’s R&D documentation around key working components of mining drilling equipment, cutterhead structural optimization, and maintenance assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2019-04-12',
    href: '/ru/xinwenzhongxin/renyixinwen/1043',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для устойчивой к деформации буровой головки установки восстающего бурения с удобной заменой резцов компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461082.X, дата авторизации 12 апреля 2019 года',
    title: 'Changsha Renyi получила патент на буровую головку установки восстающего бурения',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем устойчивой к деформации буровой головки установки восстающего бурения с удобной заменой резцов, номер ZL 2018 2 1461082.X, дата авторизации - 12 апреля 2019 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Deformation-Resistant Cutterhead with Convenient Cutter Replacement for Raise Boring Machines”. Номер свидетельства - 8710529, номер патента - ZL 2018 2 1461082.X, номер публикации о выдаче - CN 208734332 U.',
      'Согласно свидетельству, дата подачи заявки - 6 сентября 2018 года, дата объявления о выдаче - 12 апреля 2019 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателем указан Zuo Jun. Патент относится к устойчивости к деформации и удобству замены резцов в конструкции буровой головки установки восстающего бурения, отражая технический опыт компании в области долговечности, эффективности обслуживания и удобства полевого ремонта ключевых узлов горного бурового оборудования.',
      'Буровая головка установки восстающего бурения в работе должна выдерживать ударные нагрузки, крутящий момент, износ и сложные горно-геологические условия, поэтому требует высокой прочности конструкции, рационального размещения резцов, эффективности их замены и стабильности длительной эксплуатации. Этот патент дополняет документацию Renyi Machinery по ключевым рабочим узлам горного бурового оборудования, оптимизации конструкции буровой головки и обеспечению ремонтной поддержки.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2019-04-12',
    href: '/es/xinwenzhongxin/renyixinwen/1043',
    imageSrc: RENYI_RAISE_BORING_MACHINE_DEFORMATION_RESISTANT_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un cabezal de corte resistente a la deformación y con cambio de cortadores conveniente para máquinas raise boring de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461082.X, autorizada el 12 de abril de 2019',
    title: 'Changsha Renyi obtiene patente para cabezal de corte de máquina raise boring',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un cabezal de corte resistente a la deformación y con cambio de cortadores conveniente para máquinas raise boring, número ZL 2018 2 1461082.X, autorizado el 12 de abril de 2019.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Deformation-Resistant Cutterhead with Convenient Cutter Replacement for Raise Boring Machines”. El número de certificado es 8710529, el número de patente es ZL 2018 2 1461082.X y el número de publicación de autorización es CN 208734332 U.',
      'Según el certificado, la fecha de solicitud fue el 6 de septiembre de 2018 y la fecha de anuncio de autorización fue el 12 de abril de 2019. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y el inventor indicado es Zuo Jun. La patente se centra en la resistencia a la deformación y la facilidad de cambio de cortadores en la estructura del cabezal de corte de máquinas raise boring, reflejando acumulación técnica en durabilidad, eficiencia de mantenimiento y servicio en campo de componentes clave de perforación minera.',
      'El cabezal de corte de una máquina raise boring debe soportar impactos, par, desgaste y condiciones complejas de roca durante la operación, por lo que exige resistencia estructural, disposición adecuada de cortadores, eficiencia de reemplazo y estabilidad operativa a largo plazo. Esta patente complementa la documentación de I+D de Renyi Machinery sobre componentes de trabajo clave de equipos de perforación minera, optimización estructural del cabezal de corte y garantía de mantenimiento.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const combinableWearResistantReamingCutterheadPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2019-04-12',
    href: '/xinwenzhongxin/renyixinwen/1044',
    imageSrc: RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种可自由组合耐磨的扩孔刀盘实用新型专利证书，专利号ZL 2018 2 1461084.9，授权公告日2019年4月12日',
    title: '长沙仁毅可自由组合耐磨扩孔刀盘获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种可自由组合耐磨的扩孔刀盘”获得授权，专利号为ZL 2018 2 1461084.9，授权公告日为2019年4月12日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种可自由组合耐磨的扩孔刀盘”获得实用新型专利授权，证书号为第8710171号，专利号为ZL 2018 2 1461084.9，授权公告号为CN 208734282 U。',
      '证书资料显示，该专利申请日为2018年9月6日，授权公告日为2019年4月12日，专利权人为长沙仁毅机械制造有限公司，发明人为左俊。该专利围绕扩孔刀盘的自由组合、耐磨性能和施工适配性展开，是公司面向矿山钻进装备关键工作部件耐用性、维护效率和现场工况适应性形成的技术积累。',
      '扩孔刀盘在天井钻进和扩孔作业中需要承受冲击、扭矩、磨损和复杂岩层条件，对刀具组合、耐磨结构、维修更换便利性和长期运行稳定性有较高要求。该项专利与不易变形且便于换刀的刀盘专利共同补充了仁毅机械在矿山钻机刀盘结构优化和维修保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2019-04-12',
    href: '/en/xinwenzhongxin/renyixinwen/1044',
    imageSrc: RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Freely Combinable Wear-Resistant Reaming Cutterhead by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461084.9, authorized on April 12, 2019',
    title: 'Changsha Renyi Receives Utility Model Patent for Combinable Wear-Resistant Reaming Cutterhead',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a freely combinable wear-resistant reaming cutterhead, patent number ZL 2018 2 1461084.9, authorized on April 12, 2019.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Freely Combinable Wear-Resistant Reaming Cutterhead”. The certificate number is 8710171, the patent number is ZL 2018 2 1461084.9, and the authorization publication number is CN 208734282 U.',
      'According to the certificate, the application date was September 6, 2018 and the authorization announcement date was April 12, 2019. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventor is Zuo Jun. The patent focuses on free combination, wear resistance, and construction adaptability of the reaming cutterhead, reflecting technical accumulation around durability, maintenance efficiency, and field adaptability of key mining drilling components.',
      'A reaming cutterhead used in raise boring and reaming work must withstand impact, torque, wear, and complex rock conditions, placing high demands on cutter combination, wear-resistant structure, maintenance convenience, and long-term operating stability. Together with Renyi’s patent for a deformation-resistant cutterhead with convenient cutter replacement, this patent adds to the company’s R&D documentation around mining drilling cutterhead optimization and maintenance assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2019-04-12',
    href: '/ru/xinwenzhongxin/renyixinwen/1044',
    imageSrc: RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для комбинируемой износостойкой расширительной буровой головки компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461084.9, дата авторизации 12 апреля 2019 года',
    title: 'Changsha Renyi получила патент на комбинируемую износостойкую расширительную буровую головку',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем комбинируемой износостойкой расширительной буровой головки, номер ZL 2018 2 1461084.9, дата авторизации - 12 апреля 2019 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Freely Combinable Wear-Resistant Reaming Cutterhead”. Номер свидетельства - 8710171, номер патента - ZL 2018 2 1461084.9, номер публикации о выдаче - CN 208734282 U.',
      'Согласно свидетельству, дата подачи заявки - 6 сентября 2018 года, дата объявления о выдаче - 12 апреля 2019 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателем указан Zuo Jun. Патент относится к свободной компоновке, износостойкости и адаптации расширительной буровой головки к условиям работ, отражая технический опыт компании в долговечности, эффективности обслуживания и приспособленности ключевых узлов горного бурового оборудования к площадке.',
      'Расширительная буровая головка в работах по восстающему бурению и расширению должна выдерживать ударные нагрузки, крутящий момент, износ и сложные горно-геологические условия, поэтому требует рациональной компоновки резцов, износостойкой конструкции, удобства обслуживания и стабильности длительной эксплуатации. Вместе с патентом Renyi на устойчивую к деформации буровую головку с удобной заменой резцов этот патент дополняет документацию по оптимизации буровых головок и ремонтному обеспечению.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2019-04-12',
    href: '/es/xinwenzhongxin/renyixinwen/1044',
    imageSrc: RENYI_COMBINABLE_WEAR_RESISTANT_REAMING_CUTTERHEAD_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un cabezal de escariado resistente al desgaste y combinable de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461084.9, autorizada el 12 de abril de 2019',
    title: 'Changsha Renyi obtiene patente para cabezal de escariado resistente al desgaste y combinable',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un cabezal de escariado resistente al desgaste y combinable, número ZL 2018 2 1461084.9, autorizado el 12 de abril de 2019.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Freely Combinable Wear-Resistant Reaming Cutterhead”. El número de certificado es 8710171, el número de patente es ZL 2018 2 1461084.9 y el número de publicación de autorización es CN 208734282 U.',
      'Según el certificado, la fecha de solicitud fue el 6 de septiembre de 2018 y la fecha de anuncio de autorización fue el 12 de abril de 2019. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y el inventor indicado es Zuo Jun. La patente se centra en la combinación libre, la resistencia al desgaste y la adaptabilidad de construcción del cabezal de escariado, reflejando acumulación técnica en durabilidad, eficiencia de mantenimiento y adaptación al sitio de componentes clave de perforación minera.',
      'Un cabezal de escariado utilizado en trabajos de raise boring y ampliación debe soportar impactos, par, desgaste y condiciones complejas de roca, por lo que exige combinación adecuada de cortadores, estructura resistente al desgaste, facilidad de mantenimiento y estabilidad operativa a largo plazo. Junto con la patente de Renyi sobre un cabezal resistente a la deformación y con cambio conveniente de cortadores, esta patente complementa la documentación de I+D sobre optimización de cabezales de perforación minera y garantía de mantenimiento.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const heatDissipationStablePumpStationPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2019-04-26',
    href: '/xinwenzhongxin/renyixinwen/1045',
    imageSrc: RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种具有散热功能的稳定型泵站实用新型专利证书，专利号ZL 2018 2 1461085.3，授权公告日2019年4月26日',
    title: '长沙仁毅具有散热功能稳定型泵站获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种具有散热功能的稳定型泵站”获得授权，专利号为ZL 2018 2 1461085.3，授权公告日为2019年4月26日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种具有散热功能的稳定型泵站”获得实用新型专利授权，证书号为第8772853号，专利号为ZL 2018 2 1461085.3，授权公告号为CN 208792422 U。',
      '证书资料显示，该专利申请日为2018年9月6日，授权公告日为2019年4月26日，专利权人为长沙仁毅机械制造有限公司，发明人为左俊。该专利围绕泵站散热能力、结构稳定性和持续运行适应性展开，是公司面向液压动力单元、矿山装备维护和现场服务工况形成的技术积累。',
      '泵站作为液压系统的动力与控制单元，通常需要兼顾散热、油温控制、结构支撑、安装维护便利性和长期运行稳定性。该项专利补充了仁毅机械在液压系统配套装置、专用维修装备和现场可靠运行保障方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2019-04-26',
    href: '/en/xinwenzhongxin/renyixinwen/1045',
    imageSrc: RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Heat-Dissipation Stable Pump Station by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2018 2 1461085.3, authorized on April 26, 2019',
    title: 'Changsha Renyi Receives Utility Model Patent for Heat-Dissipation Stable Pump Station',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a heat-dissipation stable pump station, patent number ZL 2018 2 1461085.3, authorized on April 26, 2019.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Heat-Dissipation Stable Pump Station”. The certificate number is 8772853, the patent number is ZL 2018 2 1461085.3, and the authorization publication number is CN 208792422 U.',
      'According to the certificate, the application date was September 6, 2018 and the authorization announcement date was April 26, 2019. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventor is Zuo Jun. The patent focuses on heat dissipation, structural stability, and continuous operation adaptability of the pump station, reflecting technical accumulation around hydraulic power units, mining equipment maintenance, and field service conditions.',
      'As a power and control unit for hydraulic systems, a pump station usually needs to balance heat dissipation, oil temperature control, structural support, installation and maintenance convenience, and long-term operating stability. This patent adds to Renyi Machinery’s R&D documentation around hydraulic system supporting devices, dedicated maintenance equipment, and reliable field operation assurance.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2019-04-26',
    href: '/ru/xinwenzhongxin/renyixinwen/1045',
    imageSrc: RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для стабильной насосной станции с функцией теплоотвода компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2018 2 1461085.3, дата авторизации 26 апреля 2019 года',
    title: 'Changsha Renyi получила патент на стабильную насосную станцию с теплоотводом',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем стабильной насосной станции с функцией теплоотвода, номер ZL 2018 2 1461085.3, дата авторизации - 26 апреля 2019 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Heat-Dissipation Stable Pump Station”. Номер свидетельства - 8772853, номер патента - ZL 2018 2 1461085.3, номер публикации о выдаче - CN 208792422 U.',
      'Согласно свидетельству, дата подачи заявки - 6 сентября 2018 года, дата объявления о выдаче - 26 апреля 2019 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателем указан Zuo Jun. Патент относится к теплоотводу, устойчивости конструкции и адаптации насосной станции к непрерывной работе, отражая технический опыт компании в гидравлических силовых блоках, обслуживании горного оборудования и условиях полевого сервиса.',
      'Насосная станция как силовой и управляющий узел гидравлической системы обычно должна сочетать теплоотвод, контроль температуры масла, конструктивную опору, удобство монтажа и обслуживания, а также стабильность длительной эксплуатации. Этот патент дополняет документацию Renyi Machinery по вспомогательным устройствам гидравлических систем, специальному ремонтному оборудованию и обеспечению надежной работы на объекте.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2019-04-26',
    href: '/es/xinwenzhongxin/renyixinwen/1045',
    imageSrc: RENYI_HEAT_DISSIPATION_STABLE_PUMP_STATION_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una estación de bombeo estable con función de disipación de calor de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2018 2 1461085.3, autorizada el 26 de abril de 2019',
    title: 'Changsha Renyi obtiene patente para estación de bombeo estable con disipación de calor',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una estación de bombeo estable con función de disipación de calor, número ZL 2018 2 1461085.3, autorizado el 26 de abril de 2019.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Heat-Dissipation Stable Pump Station”. El número de certificado es 8772853, el número de patente es ZL 2018 2 1461085.3 y el número de publicación de autorización es CN 208792422 U.',
      'Según el certificado, la fecha de solicitud fue el 6 de septiembre de 2018 y la fecha de anuncio de autorización fue el 26 de abril de 2019. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y el inventor indicado es Zuo Jun. La patente se centra en la disipación de calor, la estabilidad estructural y la adaptabilidad de operación continua de la estación de bombeo, reflejando acumulación técnica en unidades de potencia hidráulica, mantenimiento de equipos mineros y condiciones de servicio en campo.',
      'Como unidad de potencia y control para sistemas hidráulicos, una estación de bombeo suele necesitar equilibrar disipación de calor, control de temperatura del aceite, soporte estructural, facilidad de instalación y mantenimiento, y estabilidad operativa a largo plazo. Esta patente complementa la documentación de I+D de Renyi Machinery sobre dispositivos auxiliares de sistemas hidráulicos, equipos dedicados de mantenimiento y garantía de funcionamiento fiable en sitio.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const largeVehicleWheelTireDismountingHoistPlatePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-06-01',
    href: '/xinwenzhongxin/renyixinwen/1046',
    imageSrc: RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司大型汽车车轮轮胎装拆轮胎吊盘实用新型专利证书，专利号ZL 2020 2 2278917.1，授权公告日2021年6月1日',
    title: '长沙仁毅大型汽车车轮轮胎装拆轮胎吊盘获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“大型汽车车轮轮胎装拆轮胎吊盘”获得授权，专利号为ZL 2020 2 2278917.1，授权公告日为2021年6月1日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“大型汽车车轮轮胎装拆轮胎吊盘”获得实用新型专利授权，证书号为第13319734号，专利号为ZL 2020 2 2278917.1，授权公告号为CN 213326427 U。',
      '证书资料显示，该专利申请日为2020年10月14日，授权公告日为2021年6月1日，专利权人为长沙仁毅机械制造有限公司，发明人为蔡远臻、左俊、杨立群、罗亮、夏国文。该专利围绕大型汽车车轮轮胎装拆过程中的吊装承载、定位辅助和作业稳定性展开，是公司面向重型车辆维修工装和现场服务效率形成的技术积累。',
      '大型汽车车轮和轮胎自重大、装拆难度高，维修作业中通常需要兼顾承载安全、吊装稳定、定位效率和操作便利性。该项专利补充了仁毅机械在大型轮胎轮毂装拆辅助工装、维修装备和现场保障能力方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2021-06-01',
    href: '/en/xinwenzhongxin/renyixinwen/1046',
    imageSrc: RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Large Vehicle Wheel and Tire Mounting/Dismounting Hoist Plate by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2278917.1, authorized on June 1, 2021',
    title: 'Changsha Renyi Receives Utility Model Patent for Large Vehicle Tire Hoist Plate',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a large vehicle wheel and tire mounting/dismounting hoist plate, patent number ZL 2020 2 2278917.1, authorized on June 1, 2021.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Large Vehicle Wheel and Tire Mounting/Dismounting Hoist Plate”. The certificate number is 13319734, the patent number is ZL 2020 2 2278917.1, and the authorization publication number is CN 213326427 U.',
      'According to the certificate, the application date was October 14, 2020 and the authorization announcement date was June 1, 2021. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventors are Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang, and Xia Guowen. The patent focuses on lifting load support, positioning assistance, and operating stability during large vehicle wheel and tire mounting and dismounting, reflecting technical accumulation around heavy vehicle maintenance tooling and field service efficiency.',
      'Large vehicle wheels and tires are heavy and difficult to mount or dismount, so maintenance work usually needs to balance load safety, lifting stability, positioning efficiency, and operating convenience. This patent adds to Renyi Machinery’s R&D documentation around auxiliary tooling for large tire and wheel hub service, maintenance equipment, and field support capability.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2021-06-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1046',
    imageSrc: RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для подъемной плиты монтажа и демонтажа колес и шин крупногабаритных автомобилей компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2278917.1, дата авторизации 1 июня 2021 года',
    title: 'Changsha Renyi получила патент на подъемную плиту для колес и шин крупногабаритных автомобилей',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем подъемной плиты для монтажа и демонтажа колес и шин крупногабаритных автомобилей, номер ZL 2020 2 2278917.1, дата авторизации - 1 июня 2021 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Large Vehicle Wheel and Tire Mounting/Dismounting Hoist Plate”. Номер свидетельства - 13319734, номер патента - ZL 2020 2 2278917.1, номер публикации о выдаче - CN 213326427 U.',
      'Согласно свидетельству, дата подачи заявки - 14 октября 2020 года, дата объявления о выдаче - 1 июня 2021 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателями указаны Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang и Xia Guowen. Патент относится к несущей способности при подъеме, вспомогательному позиционированию и устойчивости операций при монтаже и демонтаже колес и шин крупногабаритных автомобилей, отражая технический опыт компании в ремонтной оснастке для тяжелых транспортных средств и эффективности полевого сервиса.',
      'Колеса и шины крупногабаритных автомобилей имеют большую массу и сложны в монтаже и демонтаже, поэтому ремонтные операции обычно требуют безопасности грузоподъема, устойчивости подвешивания, эффективности позиционирования и удобства работы. Этот патент дополняет документацию Renyi Machinery по вспомогательной оснастке для обслуживания крупных шин и ступиц, ремонтному оборудованию и возможностям поддержки на объекте.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2021-06-01',
    href: '/es/xinwenzhongxin/renyixinwen/1046',
    imageSrc: RENYI_LARGE_VEHICLE_WHEEL_TIRE_DISMOUNTING_HOIST_PLATE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una placa de izaje de montaje y desmontaje de ruedas y neumáticos de vehículos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2278917.1, autorizada el 1 de junio de 2021',
    title: 'Changsha Renyi obtiene patente para placa de izaje de neumáticos de vehículos grandes',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una placa de izaje para montaje y desmontaje de ruedas y neumáticos de vehículos grandes, número ZL 2020 2 2278917.1, autorizado el 1 de junio de 2021.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Large Vehicle Wheel and Tire Mounting/Dismounting Hoist Plate”. El número de certificado es 13319734, el número de patente es ZL 2020 2 2278917.1 y el número de publicación de autorización es CN 213326427 U.',
      'Según el certificado, la fecha de solicitud fue el 14 de octubre de 2020 y la fecha de anuncio de autorización fue el 1 de junio de 2021. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y los inventores indicados son Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang y Xia Guowen. La patente se centra en soporte de carga para izaje, asistencia de posicionamiento y estabilidad operativa durante el montaje y desmontaje de ruedas y neumáticos de vehículos grandes, reflejando acumulación técnica en utillaje de mantenimiento para vehículos pesados y eficiencia de servicio en campo.',
      'Las ruedas y neumáticos de vehículos grandes tienen gran peso y son difíciles de montar o desmontar, por lo que el mantenimiento suele requerir seguridad de carga, estabilidad de izaje, eficiencia de posicionamiento y facilidad de operación. Esta patente complementa la documentación de I+D de Renyi Machinery sobre utillaje auxiliar para servicio de neumáticos y cubos grandes, equipos de mantenimiento y capacidad de soporte en sitio.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const largeTireWheelHubHoistingDismantlingMachineHookDevicePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-06-01',
    href: '/xinwenzhongxin/renyixinwen/1047',
    imageSrc: RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司大型轮胎轮毂吊装拆破机轮毂吊勾装置实用新型专利证书，专利号ZL 2020 2 2278918.6，授权公告日2021年6月1日',
    title: '长沙仁毅大型轮胎轮毂吊装拆破机轮毂吊勾装置获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“大型轮胎轮毂吊装拆破机轮毂吊勾装置”获得授权，专利号为ZL 2020 2 2278918.6，授权公告日为2021年6月1日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“大型轮胎轮毂吊装拆破机轮毂吊勾装置”获得实用新型专利授权，证书号为第13306449号，专利号为ZL 2020 2 2278918.6，授权公告号为CN 213326428 U。',
      '证书资料显示，该专利申请日为2020年10月14日，授权公告日为2021年6月1日，专利权人为长沙仁毅机械制造有限公司，发明人为蔡远臻、左俊、杨立群、罗亮、夏国文。该专利围绕大型轮胎轮毂吊装拆破作业中的轮毂吊勾承载、连接定位和操作稳定性展开，是公司面向重型车辆轮胎轮毂维修工装形成的技术积累。',
      '大型轮胎和轮毂装拆作业对吊装安全、受力可靠、定位效率和现场操作便利性要求较高。该项专利与大型汽车车轮轮胎装拆轮胎吊盘专利共同补充了仁毅机械在大型轮胎轮毂装拆辅助工装、维修装备和现场保障能力方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2021-06-01',
    href: '/en/xinwenzhongxin/renyixinwen/1047',
    imageSrc: RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Wheel Hub Hook Device for a Large Tire and Wheel Hub Hoisting/Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2278918.6, authorized on June 1, 2021',
    title: 'Changsha Renyi Receives Utility Model Patent for Large Tire Wheel Hub Hook Device',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a wheel hub hook device for a large tire and wheel hub hoisting/dismantling machine, patent number ZL 2020 2 2278918.6, authorized on June 1, 2021.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Wheel Hub Hook Device for a Large Tire and Wheel Hub Hoisting/Dismantling Machine”. The certificate number is 13306449, the patent number is ZL 2020 2 2278918.6, and the authorization publication number is CN 213326428 U.',
      'According to the certificate, the application date was October 14, 2020 and the authorization announcement date was June 1, 2021. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventors are Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang, and Xia Guowen. The patent focuses on load support, connection positioning, and operating stability of the wheel hub hook during large tire and wheel hub hoisting and dismantling work, reflecting technical accumulation around heavy vehicle tire and wheel hub maintenance tooling.',
      'Large tire and wheel hub service places high demands on lifting safety, reliable force bearing, positioning efficiency, and on-site operating convenience. Together with Renyi’s patent for a large vehicle wheel and tire mounting/dismounting hoist plate, this patent adds to the company’s R&D documentation around auxiliary tooling, maintenance equipment, and field support capability for large tire and wheel hub service.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2021-06-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1047',
    imageSrc: RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для крюкового устройства ступицы машины подъема и демонтажа крупных шин и колесных ступиц компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2278918.6, дата авторизации 1 июня 2021 года',
    title: 'Changsha Renyi получила патент на крюковое устройство для ступиц крупных шин и колес',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем крюкового устройства ступицы машины подъема и демонтажа крупных шин и колесных ступиц, номер ZL 2020 2 2278918.6, дата авторизации - 1 июня 2021 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Wheel Hub Hook Device for a Large Tire and Wheel Hub Hoisting/Dismantling Machine”. Номер свидетельства - 13306449, номер патента - ZL 2020 2 2278918.6, номер публикации о выдаче - CN 213326428 U.',
      'Согласно свидетельству, дата подачи заявки - 14 октября 2020 года, дата объявления о выдаче - 1 июня 2021 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателями указаны Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang и Xia Guowen. Патент относится к несущей способности, соединительному позиционированию и устойчивости работы крюка ступицы при подъеме и демонтаже крупных шин и колесных ступиц, отражая технический опыт компании в ремонтной оснастке для шин и ступиц тяжелых транспортных средств.',
      'Обслуживание крупных шин и колесных ступиц предъявляет высокие требования к безопасности подъема, надежности восприятия нагрузки, эффективности позиционирования и удобству работы на площадке. Вместе с патентом Renyi на подъемную плиту для монтажа и демонтажа колес и шин крупногабаритных автомобилей этот патент дополняет документацию по вспомогательной оснастке, ремонтному оборудованию и возможностям полевой поддержки.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2021-06-01',
    href: '/es/xinwenzhongxin/renyixinwen/1047',
    imageSrc: RENYI_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_HOOK_DEVICE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un dispositivo de gancho de cubo de rueda de una máquina de izaje y desmontaje de neumáticos y cubos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2278918.6, autorizada el 1 de junio de 2021',
    title: 'Changsha Renyi obtiene patente para gancho de cubo de rueda de neumáticos grandes',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un dispositivo de gancho de cubo de rueda para una máquina de izaje y desmontaje de neumáticos y cubos grandes, número ZL 2020 2 2278918.6, autorizado el 1 de junio de 2021.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Wheel Hub Hook Device for a Large Tire and Wheel Hub Hoisting/Dismantling Machine”. El número de certificado es 13306449, el número de patente es ZL 2020 2 2278918.6 y el número de publicación de autorización es CN 213326428 U.',
      'Según el certificado, la fecha de solicitud fue el 14 de octubre de 2020 y la fecha de anuncio de autorización fue el 1 de junio de 2021. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y los inventores indicados son Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang y Xia Guowen. La patente se centra en soporte de carga, posicionamiento de conexión y estabilidad operativa del gancho de cubo durante trabajos de izaje y desmontaje de neumáticos y cubos grandes, reflejando acumulación técnica en utillaje de mantenimiento para neumáticos y cubos de vehículos pesados.',
      'El servicio de neumáticos y cubos grandes exige alta seguridad de izaje, fiabilidad de carga, eficiencia de posicionamiento y facilidad de operación en sitio. Junto con la patente de Renyi sobre una placa de izaje para montaje y desmontaje de ruedas y neumáticos de vehículos grandes, esta patente complementa la documentación de I+D sobre utillaje auxiliar, equipos de mantenimiento y capacidad de soporte en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const multiStationLargeTireWheelHubHoistingDismantlingMachinePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-06-04',
    href: '/xinwenzhongxin/renyixinwen/1048',
    imageSrc: RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司多工位大型轮胎轮毂吊装拆破机实用新型专利证书，专利号ZL 2020 2 2290188.1，授权公告日2021年6月4日',
    title: '长沙仁毅多工位大型轮胎轮毂吊装拆破机获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“多工位大型轮胎轮毂吊装拆破机”获得授权，专利号为ZL 2020 2 2290188.1，授权公告日为2021年6月4日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“多工位大型轮胎轮毂吊装拆破机”获得实用新型专利授权，证书号为第13339723号，专利号为ZL 2020 2 2290188.1，授权公告号为CN 213354094 U。',
      '证书资料显示，该专利申请日为2020年10月15日，授权公告日为2021年6月4日，专利权人为长沙仁毅机械制造有限公司，发明人为蔡远臻、左俊、杨立群、罗亮、夏国文。该专利围绕大型轮胎轮毂吊装、拆装和拆破作业中的多工位协同、承载定位和维修效率展开，是公司面向重型车辆轮胎轮毂维修装备形成的技术积累。',
      '大型轮胎轮毂维修作业通常涉及吊装、定位、拆卸和转运等多个环节，对工装承载、作业稳定性、工位切换和现场安全保障要求较高。该项专利与轮胎吊盘、轮毂吊勾装置等证书共同补充了仁毅机械在大型轮胎轮毂装拆装备和现场服务工具方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2021-06-04',
    href: '/en/xinwenzhongxin/renyixinwen/1048',
    imageSrc: RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Multi-Station Large Tire and Wheel Hub Hoisting/Dismantling Machine by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2290188.1, authorized on June 4, 2021',
    title: 'Changsha Renyi Receives Utility Model Patent for Multi-Station Large Tire and Wheel Hub Machine',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a multi-station large tire and wheel hub hoisting/dismantling machine, patent number ZL 2020 2 2290188.1, authorized on June 4, 2021.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Multi-Station Large Tire and Wheel Hub Hoisting/Dismantling Machine”. The certificate number is 13339723, the patent number is ZL 2020 2 2290188.1, and the authorization publication number is CN 213354094 U.',
      'According to the certificate, the application date was October 15, 2020 and the authorization announcement date was June 4, 2021. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventors are Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang, and Xia Guowen. The patent focuses on multi-station coordination, load positioning, and maintenance efficiency during large tire and wheel hub hoisting, dismantling, and disassembly work, reflecting technical accumulation around heavy vehicle tire and wheel hub maintenance equipment.',
      'Large tire and wheel hub service usually involves lifting, positioning, dismantling, and transfer steps, placing high demands on tooling load capacity, operating stability, station switching, and on-site safety assurance. Together with the certificates for Renyi’s tire hoist plate and wheel hub hook device, this patent adds to the company’s R&D documentation around large tire and wheel hub service equipment and field service tooling.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2021-06-04',
    href: '/ru/xinwenzhongxin/renyixinwen/1048',
    imageSrc: RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для многостанционной машины подъема и демонтажа крупных шин и колесных ступиц компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2290188.1, дата авторизации 4 июня 2021 года',
    title: 'Changsha Renyi получила патент на многостанционную машину для крупных шин и ступиц',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем многостанционной машины подъема и демонтажа крупных шин и колесных ступиц, номер ZL 2020 2 2290188.1, дата авторизации - 4 июня 2021 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Multi-Station Large Tire and Wheel Hub Hoisting/Dismantling Machine”. Номер свидетельства - 13339723, номер патента - ZL 2020 2 2290188.1, номер публикации о выдаче - CN 213354094 U.',
      'Согласно свидетельству, дата подачи заявки - 15 октября 2020 года, дата объявления о выдаче - 4 июня 2021 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателями указаны Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang и Xia Guowen. Патент относится к многостанционной координации, позиционированию под нагрузкой и эффективности ремонта при подъеме, демонтаже и разборке крупных шин и колесных ступиц, отражая технический опыт компании в оборудовании для обслуживания шин и ступиц тяжелых транспортных средств.',
      'Обслуживание крупных шин и колесных ступиц обычно включает подъем, позиционирование, демонтаж и перемещение, поэтому предъявляет высокие требования к несущей способности оснастки, устойчивости работы, переключению рабочих позиций и безопасности на площадке. Вместе со свидетельствами Renyi на подъемную плиту шин и крюковое устройство ступицы этот патент дополняет документацию по оборудованию и инструментам полевого обслуживания крупных шин и ступиц.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2021-06-04',
    href: '/es/xinwenzhongxin/renyixinwen/1048',
    imageSrc: RENYI_MULTI_STATION_LARGE_TIRE_WHEEL_HUB_HOISTING_DISMANTLING_MACHINE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una máquina multiestación de izaje y desmontaje de neumáticos y cubos grandes de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2290188.1, autorizada el 4 de junio de 2021',
    title: 'Changsha Renyi obtiene patente para máquina multiestación de neumáticos y cubos grandes',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una máquina multiestación de izaje y desmontaje de neumáticos y cubos grandes, número ZL 2020 2 2290188.1, autorizada el 4 de junio de 2021.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Multi-Station Large Tire and Wheel Hub Hoisting/Dismantling Machine”. El número de certificado es 13339723, el número de patente es ZL 2020 2 2290188.1 y el número de publicación de autorización es CN 213354094 U.',
      'Según el certificado, la fecha de solicitud fue el 15 de octubre de 2020 y la fecha de anuncio de autorización fue el 4 de junio de 2021. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y los inventores indicados son Cai Yuanzhen, Zuo Jun, Yang Liqun, Luo Liang y Xia Guowen. La patente se centra en coordinación multiestación, posicionamiento con carga y eficiencia de mantenimiento durante trabajos de izaje, desmontaje y despiece de neumáticos y cubos grandes, reflejando acumulación técnica en equipos de mantenimiento para neumáticos y cubos de vehículos pesados.',
      'El servicio de neumáticos y cubos grandes suele incluir izaje, posicionamiento, desmontaje y traslado, por lo que exige capacidad de carga del utillaje, estabilidad operativa, cambio de estaciones y seguridad en sitio. Junto con los certificados de Renyi sobre la placa de izaje de neumáticos y el dispositivo de gancho de cubo, esta patente complementa la documentación de I+D sobre equipos de servicio para neumáticos y cubos grandes y herramientas de soporte en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const removableRaiseBoringMachineCutterBasePatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-06-04',
    href: '/xinwenzhongxin/renyixinwen/1049',
    imageSrc: RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种便于拆卸的天井钻机刀具底座实用新型专利证书，专利号ZL 2020 2 2284164.5，授权公告日2021年6月4日',
    title: '长沙仁毅便于拆卸的天井钻机刀具底座获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种便于拆卸的天井钻机刀具底座”获得授权，专利号为ZL 2020 2 2284164.5，授权公告日为2021年6月4日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种便于拆卸的天井钻机刀具底座”获得实用新型专利授权，证书号为第13349991号，专利号为ZL 2020 2 2284164.5，授权公告号为CN 213360013 U。',
      '证书资料显示，该专利申请日为2020年10月14日，授权公告日为2021年6月4日，专利权人为长沙仁毅机械制造有限公司，发明人为夏国文、左俊、杨立群、罗亮、蔡远臻。该专利围绕天井钻机刀具底座的拆卸维护、连接定位和换装效率展开，是公司在天井钻机关键部件维修便利性方面形成的技术积累。',
      '天井钻机刀具部件在现场维护中常需要拆卸、检查、更换和重新定位，对结构可靠性、维护效率和现场操作安全性要求较高。该项专利补充了仁毅机械在天井钻机刀盘、刀具支撑结构和维护工装方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2021-06-04',
    href: '/en/xinwenzhongxin/renyixinwen/1049',
    imageSrc: RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for an Easily Removable Raise Boring Machine Cutter Base by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2284164.5, authorized on June 4, 2021',
    title: 'Changsha Renyi Receives Utility Model Patent for Removable Raise Boring Machine Cutter Base',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of an easily removable raise boring machine cutter base, patent number ZL 2020 2 2284164.5, authorized on June 4, 2021.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of an “Easily Removable Raise Boring Machine Cutter Base”. The certificate number is 13349991, the patent number is ZL 2020 2 2284164.5, and the authorization publication number is CN 213360013 U.',
      'According to the certificate, the application date was October 14, 2020 and the authorization announcement date was June 4, 2021. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventors are Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang, and Cai Yuanzhen. The patent focuses on disassembly maintenance, connection positioning, and replacement efficiency for a raise boring machine cutter base, reflecting technical accumulation around serviceability of key raise boring machine components.',
      'Raise boring machine cutter assemblies often need disassembly, inspection, replacement, and repositioning during field maintenance, placing high demands on structural reliability, maintenance efficiency, and on-site operating safety. This patent adds to Renyi Machinery’s R&D documentation around raise boring machine cutterheads, cutter support structures, and maintenance tooling.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2021-06-04',
    href: '/ru/xinwenzhongxin/renyixinwen/1049',
    imageSrc: RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для легко демонтируемого основания резцов установки восстающего бурения компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2284164.5, дата авторизации 4 июня 2021 года',
    title: 'Changsha Renyi получила патент на съемное основание резцов установки восстающего бурения',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем легко демонтируемого основания резцов установки восстающего бурения, номер ZL 2020 2 2284164.5, дата авторизации - 4 июня 2021 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Easily Removable Raise Boring Machine Cutter Base”. Номер свидетельства - 13349991, номер патента - ZL 2020 2 2284164.5, номер публикации о выдаче - CN 213360013 U.',
      'Согласно свидетельству, дата подачи заявки - 14 октября 2020 года, дата объявления о выдаче - 4 июня 2021 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателями указаны Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang и Cai Yuanzhen. Патент относится к обслуживанию при демонтаже, соединительному позиционированию и эффективности замены основания резцов установки восстающего бурения, отражая технический опыт компании в повышении ремонтопригодности ключевых узлов таких установок.',
      'Режущие узлы установок восстающего бурения при полевом обслуживании часто требуют демонтажа, осмотра, замены и повторного позиционирования, поэтому важны надежность конструкции, эффективность обслуживания и безопасность работ на площадке. Этот патент дополняет документацию Renyi Machinery по буровым головкам, опорным конструкциям резцов и ремонтной оснастке.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2021-06-04',
    href: '/es/xinwenzhongxin/renyixinwen/1049',
    imageSrc: RENYI_REMOVABLE_RAISE_BORING_MACHINE_CUTTER_BASE_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para una base de herramienta de máquina raise boring fácilmente desmontable de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2284164.5, autorizada el 4 de junio de 2021',
    title: 'Changsha Renyi obtiene patente para base desmontable de herramienta de máquina raise boring',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de una base de herramienta de máquina raise boring fácilmente desmontable, número ZL 2020 2 2284164.5, autorizada el 4 de junio de 2021.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Easily Removable Raise Boring Machine Cutter Base”. El número de certificado es 13349991, el número de patente es ZL 2020 2 2284164.5 y el número de publicación de autorización es CN 213360013 U.',
      'Según el certificado, la fecha de solicitud fue el 14 de octubre de 2020 y la fecha de anuncio de autorización fue el 4 de junio de 2021. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y los inventores indicados son Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang y Cai Yuanzhen. La patente se centra en mantenimiento por desmontaje, posicionamiento de conexión y eficiencia de reemplazo de una base de herramienta de máquina raise boring, reflejando acumulación técnica en facilidad de mantenimiento de componentes clave.',
      'Los conjuntos de herramientas de máquinas raise boring suelen requerir desmontaje, inspección, reemplazo y reposicionamiento durante el mantenimiento en campo, por lo que exigen fiabilidad estructural, eficiencia de mantenimiento y seguridad operativa en sitio. Esta patente complementa la documentación de I+D de Renyi Machinery sobre cabezales de corte, estructuras de soporte de herramientas y utillaje de mantenimiento.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const raiseBoringMachineLoadTransferVerticalHorizontalPlacementSystemPatentArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-06-04',
    href: '/xinwenzhongxin/renyixinwen/1050',
    imageSrc: RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE,
    imageAlt: '长沙仁毅机械制造有限公司一种天井钻机承载转运及竖直卧放系统实用新型专利证书，专利号ZL 2020 2 2371279.8，授权公告日2021年6月4日',
    title: '长沙仁毅天井钻机承载转运及竖直卧放系统获实用新型专利',
    listSummary:
      '实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机承载转运及竖直卧放系统”获得授权，专利号为ZL 2020 2 2371279.8，授权公告日为2021年6月4日。',
    paragraphs: [
      '中华人民共和国国家知识产权局实用新型专利证书显示，长沙仁毅机械制造有限公司“一种天井钻机承载转运及竖直卧放系统”获得实用新型专利授权，证书号为第13348304号，专利号为ZL 2020 2 2371279.8，授权公告号为CN 213360111 U。',
      '证书资料显示，该专利申请日为2020年10月22日，授权公告日为2021年6月4日，专利权人为长沙仁毅机械制造有限公司，发明人为夏国文、左俊、杨立群、罗亮、蔡远臻。该专利围绕天井钻机承载、转运以及竖直和卧放状态切换展开，是公司在大型设备转运支撑和现场布置保障方面形成的技术积累。',
      '天井钻机在制造、维修、转场和现场安装过程中，需要兼顾承载稳定、转运安全、状态切换和空间适配。该项专利补充了仁毅机械在天井钻机整机支撑、运输辅助和现场服务保障工具方面的研发资料。',
      '围绕专利技术、软件著作权和<a href="/guanyuxingye#a3">企业资质荣誉</a>，长沙仁毅将继续完善专用工装、检测装备和<a href="/fuwuzhichi#a2">售后服务支持</a>能力，为矿山与工程机械客户提供更可靠的维修保障和设备生命周期服务。',
    ],
  },
  en: {
    date: '2021-06-04',
    href: '/en/xinwenzhongxin/renyixinwen/1050',
    imageSrc: RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE,
    imageAlt: 'Utility Model Patent Certificate for a Raise Boring Machine Load Transfer and Vertical/Horizontal Placement System by Changsha Renyi Machinery Manufacturing Co., Ltd., patent number ZL 2020 2 2371279.8, authorized on June 4, 2021',
    title: 'Changsha Renyi Receives Patent for Raise Boring Machine Load Transfer and Placement System',
    listSummary:
      'The utility model patent certificate records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a raise boring machine load transfer and vertical/horizontal placement system, patent number ZL 2020 2 2371279.8, authorized on June 4, 2021.',
    paragraphs: [
      'The Utility Model Patent Certificate issued by the China National Intellectual Property Administration records Changsha Renyi Machinery Manufacturing Co., Ltd. as the patentee of a “Raise Boring Machine Load Transfer and Vertical/Horizontal Placement System”. The certificate number is 13348304, the patent number is ZL 2020 2 2371279.8, and the authorization publication number is CN 213360111 U.',
      'According to the certificate, the application date was October 22, 2020 and the authorization announcement date was June 4, 2021. The patentee is Changsha Renyi Machinery Manufacturing Co., Ltd., and the listed inventors are Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang, and Cai Yuanzhen. The patent focuses on load bearing, transfer, and switching between vertical and horizontal placement states for raise boring machines, reflecting technical accumulation around large-equipment transfer support and on-site layout assurance.',
      'During manufacturing, maintenance, relocation, and field installation, raise boring machines require stable load support, safe transfer, reliable state switching, and space adaptability. This patent adds to Renyi Machinery’s R&D documentation around whole-machine support, transport assistance, and field service assurance tooling for raise boring machines.',
      'With patents, software copyright records, and <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a>, Renyi Machinery will continue strengthening dedicated tooling, inspection equipment, and <a href="/en/fuwuzhichi#a2">after-sales service support</a> to provide more dependable maintenance assurance and equipment lifecycle services for mining and engineering machinery customers.',
    ],
  },
  ru: {
    date: '2021-06-04',
    href: '/ru/xinwenzhongxin/renyixinwen/1050',
    imageSrc: RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE,
    imageAlt: 'Свидетельство на полезную модель для системы несущего перемещения и вертикально-горизонтального размещения установки восстающего бурения компании Changsha Renyi Machinery Manufacturing Co., Ltd., патент ZL 2020 2 2371279.8, дата авторизации 4 июня 2021 года',
    title: 'Changsha Renyi получила патент на систему перемещения и размещения установки восстающего бурения',
    listSummary:
      'Свидетельство на полезную модель указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем системы несущего перемещения и вертикально-горизонтального размещения установки восстающего бурения, номер ZL 2020 2 2371279.8, дата авторизации - 4 июня 2021 года.',
    paragraphs: [
      'Свидетельство на полезную модель, выданное Государственным управлением интеллектуальной собственности КНР, указывает Changsha Renyi Machinery Manufacturing Co., Ltd. патентообладателем “Raise Boring Machine Load Transfer and Vertical/Horizontal Placement System”. Номер свидетельства - 13348304, номер патента - ZL 2020 2 2371279.8, номер публикации о выдаче - CN 213360111 U.',
      'Согласно свидетельству, дата подачи заявки - 22 октября 2020 года, дата объявления о выдаче - 4 июня 2021 года. Патентообладателем является Changsha Renyi Machinery Manufacturing Co., Ltd., изобретателями указаны Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang и Cai Yuanzhen. Патент относится к несущей способности, перемещению и переключению между вертикальным и горизонтальным положением установки восстающего бурения, отражая технический опыт компании в поддержке транспортировки крупного оборудования и обеспечении размещения на площадке.',
      'При изготовлении, ремонте, перебазировании и монтаже установки восстающего бурения требуют устойчивой опоры, безопасного перемещения, надежного переключения положения и адаптации к пространству. Этот патент дополняет документацию Renyi Machinery по опоре машины в сборе, вспомогательным транспортным средствам и инструментам полевого обслуживания.',
      'Опираясь на патенты, авторские права на ПО и <a href="/ru/guanyuxingye#a3">корпоративные квалификации и награды</a>, Renyi Machinery продолжит развивать специальную оснастку, испытательное оборудование и <a href="/ru/fuwuzhichi#a2">послепродажную поддержку</a>, предоставляя клиентам горной и инженерной техники более надежное обслуживание жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2021-06-04',
    href: '/es/xinwenzhongxin/renyixinwen/1050',
    imageSrc: RENYI_RAISE_BORING_MACHINE_LOAD_TRANSFER_VERTICAL_HORIZONTAL_PLACEMENT_SYSTEM_PATENT_IMAGE,
    imageAlt: 'Certificado de patente de modelo de utilidad para un sistema de transferencia de carga y colocación vertical/horizontal de máquina raise boring de Changsha Renyi Machinery Manufacturing Co., Ltd., patente ZL 2020 2 2371279.8, autorizada el 4 de junio de 2021',
    title: 'Changsha Renyi obtiene patente para sistema de transferencia y colocación de máquina raise boring',
    listSummary:
      'El certificado de patente de modelo de utilidad registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de un sistema de transferencia de carga y colocación vertical/horizontal de máquina raise boring, número ZL 2020 2 2371279.8, autorizada el 4 de junio de 2021.',
    paragraphs: [
      'El certificado de patente de modelo de utilidad emitido por la Administración Nacional de Propiedad Intelectual de China registra a Changsha Renyi Machinery Manufacturing Co., Ltd. como titular de “Raise Boring Machine Load Transfer and Vertical/Horizontal Placement System”. El número de certificado es 13348304, el número de patente es ZL 2020 2 2371279.8 y el número de publicación de autorización es CN 213360111 U.',
      'Según el certificado, la fecha de solicitud fue el 22 de octubre de 2020 y la fecha de anuncio de autorización fue el 4 de junio de 2021. El titular es Changsha Renyi Machinery Manufacturing Co., Ltd. y los inventores indicados son Xia Guowen, Zuo Jun, Yang Liqun, Luo Liang y Cai Yuanzhen. La patente se centra en soporte de carga, transferencia y cambio entre estados de colocación vertical y horizontal para máquinas raise boring, reflejando acumulación técnica en soporte de traslado de equipos grandes y garantía de disposición en sitio.',
      'Durante fabricación, mantenimiento, traslado e instalación en campo, las máquinas raise boring requieren soporte estable de carga, transferencia segura, cambio fiable de estado y adaptación espacial. Esta patente complementa la documentación de I+D de Renyi Machinery sobre soporte de máquina completa, asistencia de transporte y utillaje de servicio en campo.',
      'Con patentes, registros de software y <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a>, Renyi Machinery seguirá fortaleciendo el utillaje dedicado, los equipos de inspección y el <a href="/es/fuwuzhichi#a2">soporte posventa</a> para ofrecer mantenimiento más fiable y servicios de ciclo de vida de equipos a clientes de minería y maquinaria de ingeniería.',
    ],
  },
};

const zegaRemanufacturingCenterArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2022-01',
    href: '/xinwenzhongxin/renyixinwen/1021',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE,
    imageAlt: '志高掘进ZEGA系列产品授权再制造中心通知，授权长沙仁毅机械制造有限公司为长沙授权再制造中心，2022年元月',
    title: '长沙仁毅获授权成立ZEGA系列产品再制造中心',
    listSummary:
      '志高掘进通知显示，长沙仁毅机械制造有限公司被授权为长沙地区ZEGA系列产品授权再制造中心，可围绕ZEGA系列钻机提供大修、翻新、再制造、二手机租赁与再销售等服务支持。',
    paragraphs: [
      '根据志高掘进（上海）国际贸易有限公司2022年元月发布的通知，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>获授权成为长沙地区“志高掘进ZEGA系列产品授权再制造中心”。',
      '通知指出，ZEGA系列一体式大钻机在市场上已销售数百台，部分设备使用率较高，陆续进入大修和翻新周期。为让售后大修、翻新和再制造服务更贴近客户需求，志高掘进对长期合作经销商进行评估和授权，第一批授权长沙仁毅机械制造有限公司和河南凯隆工程机械有限公司分别作为长沙、郑州的ZEGA系列产品授权再制造中心。',
      '此次授权与仁毅机械长期服务矿山装备和工程机械现场的能力相匹配。公司可围绕<a href="/zuanjixilie">钻机设备与矿山装备</a>、<a href="/pro_category/beijianzhongxin">工程机械备件国产化</a>和<a href="/fuwuzhichi">维修技术支持服务</a>，为客户提供设备评估、报价、维修、翻新、再制造以及二手机租赁和再销售相关支持。',
      '授权再制造中心资质进一步丰富了仁毅机械的<a href="/guanyuxingye#a3">企业资质荣誉</a>和服务体系。未来，公司将继续提升<a href="/fuwuzhichi#a1">产品质量控制</a>、维修工艺和现场响应能力，为矿山客户提供更稳定、可靠的装备生命周期服务。',
    ],
  },
  en: {
    date: '2022-01',
    href: '/en/xinwenzhongxin/renyixinwen/1021',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE,
    imageAlt: 'ZEGA authorized remanufacturing center notice authorizing Changsha Renyi Machinery Manufacturing Co., Ltd. as the Changsha authorized remanufacturing center, January 2022',
    title: 'Changsha Renyi Authorized as ZEGA Series Remanufacturing Center',
    listSummary:
      'The ZEGA notice authorizes Changsha Renyi Machinery Manufacturing Co., Ltd. as the Changsha authorized remanufacturing center for ZEGA series products, supporting overhaul, refurbishment, remanufacturing, used-equipment rental, and resale services.',
    paragraphs: [
      'According to the January 2022 notice issued by Zega Machinery (Shanghai) Int’l Trading Co., Ltd., <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> was authorized as the Changsha “ZEGA Series Authorized Remanufacturing Center”.',
      'The notice states that hundreds of ZEGA series integrated large drilling rigs had been sold in the market, and some units with high utilization were approaching overhaul and refurbishment cycles. To bring after-sales overhaul, refurbishment, and remanufacturing services closer to customer needs, ZEGA evaluated and authorized long-term partners, with Changsha Renyi Machinery Manufacturing Co., Ltd. and Henan Kailong Engineering Machinery Co., Ltd. selected as the first authorized remanufacturing centers in Changsha and Zhengzhou respectively.',
      'This authorization matches Renyi Machinery’s long-term service capabilities for mining equipment and engineering machinery applications. Around <a href="/en/zuanjixilie">drilling equipment and mining machinery</a>, <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts</a>, and <a href="/en/fuwuzhichi">maintenance and technical support services</a>, the company can support equipment assessment, quotation, repair, refurbishment, remanufacturing, used-equipment rental, and resale.',
      'The authorized remanufacturing center qualification further enriches Renyi Machinery’s <a href="/en/guanyuxingye#a3">corporate qualifications and honors</a> and service system. The company will continue improving <a href="/en/fuwuzhichi#a1">product quality control</a>, maintenance processes, and field response capabilities to provide more reliable equipment lifecycle services for mining customers.',
    ],
  },
  ru: {
    date: '2022-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1021',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE,
    imageAlt: 'Уведомление об авторизованном центре ремануфактуринга продукции ZEGA, назначающее Changsha Renyi Machinery Manufacturing Co., Ltd. авторизованным центром в Чанше, январь 2022 года',
    title: 'Changsha Renyi авторизована как центр ремануфактуринга серии ZEGA',
    listSummary:
      'В уведомлении ZEGA Changsha Renyi Machinery Manufacturing Co., Ltd. уполномочена как авторизованный центр ремануфактуринга продукции ZEGA в Чанше, включая капитальный ремонт, восстановление, ремануфактуринг, аренду и перепродажу бывшей в употреблении техники.',
    paragraphs: [
      'Согласно уведомлению Zega Machinery (Shanghai) Int’l Trading Co., Ltd. от января 2022 года, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> была авторизована как “Авторизованный центр ремануфактуринга продукции серии ZEGA” в Чанше.',
      'В уведомлении указано, что на рынке уже проданы сотни интегрированных буровых установок серии ZEGA, а часть оборудования с высокой загрузкой подходит к периоду капитального ремонта и восстановления. Чтобы приблизить сервис капитального ремонта, восстановления и ремануфактуринга к потребностям клиентов, ZEGA провела оценку долгосрочных партнеров и первой партией авторизовала Changsha Renyi Machinery Manufacturing Co., Ltd. и Henan Kailong Engineering Machinery Co., Ltd. как центры в Чанше и Чжэнчжоу соответственно.',
      'Эта авторизация соответствует опыту Renyi Machinery в обслуживании горного оборудования и инженерной техники. По направлениям <a href="/ru/zuanjixilie">бурового и горного оборудования</a>, <a href="/ru/pro_category/beijianzhongxin">локализации запасных частей для инженерной техники</a> и <a href="/ru/fuwuzhichi">ремонтной и технической поддержки</a> компания может предоставлять оценку оборудования, расчет стоимости, ремонт, восстановление, ремануфактуринг, аренду и перепродажу бывшей в употреблении техники.',
      'Статус авторизованного центра ремануфактуринга дополняет <a href="/ru/guanyuxingye#a3">квалификации и награды компании</a> и ее сервисную систему. Renyi Machinery продолжит усиливать <a href="/ru/fuwuzhichi#a1">контроль качества продукции</a>, ремонтные процессы и скорость реагирования на месте, предоставляя более надежные услуги жизненного цикла оборудования для горнодобывающих клиентов.',
    ],
  },
  es: {
    date: '2022-01',
    href: '/es/xinwenzhongxin/renyixinwen/1021',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_NOTICE_IMAGE,
    imageAlt: 'Aviso de centro autorizado de remanufactura de productos ZEGA que autoriza a Changsha Renyi Machinery Manufacturing Co., Ltd. como centro autorizado en Changsha, enero de 2022',
    title: 'Changsha Renyi autorizada como centro de remanufactura de la serie ZEGA',
    listSummary:
      'El aviso de ZEGA autoriza a Changsha Renyi Machinery Manufacturing Co., Ltd. como centro autorizado de remanufactura de productos ZEGA en Changsha, cubriendo reparación mayor, reacondicionamiento, remanufactura, alquiler y reventa de equipos usados.',
    paragraphs: [
      'Según el aviso emitido en enero de 2022 por Zega Machinery (Shanghai) Int’l Trading Co., Ltd., <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> fue autorizada como “Centro autorizado de remanufactura de productos de la serie ZEGA” en Changsha.',
      'El aviso señala que cientos de equipos integrados de perforación de gran tamaño de la serie ZEGA ya se habían vendido en el mercado, y que algunas unidades con alta utilización estaban entrando en ciclos de reparación mayor y reacondicionamiento. Para acercar los servicios posventa de reparación mayor, reacondicionamiento y remanufactura a las necesidades de los clientes, ZEGA evaluó y autorizó a socios de largo plazo, seleccionando a Changsha Renyi Machinery Manufacturing Co., Ltd. y Henan Kailong Engineering Machinery Co., Ltd. como los primeros centros autorizados en Changsha y Zhengzhou respectivamente.',
      'Esta autorización corresponde a la experiencia de Renyi Machinery en servicio para equipos mineros y maquinaria de ingeniería. En torno a <a href="/es/zuanjixilie">equipos de perforación y maquinaria minera</a>, <a href="/es/pro_category/beijianzhongxin">localización de repuestos para maquinaria de ingeniería</a> y <a href="/es/fuwuzhichi">servicios de mantenimiento y soporte técnico</a>, la empresa puede apoyar evaluación de equipos, cotización, reparación, reacondicionamiento, remanufactura, alquiler y reventa de equipos usados.',
      'La calificación de centro autorizado de remanufactura enriquece las <a href="/es/guanyuxingye#a3">calificaciones y honores corporativos</a> y el sistema de servicio de Renyi Machinery. La empresa continuará fortaleciendo el <a href="/es/fuwuzhichi#a1">control de calidad del producto</a>, los procesos de mantenimiento y la respuesta en campo para ofrecer servicios de ciclo de vida de equipos más fiables a clientes mineros.',
    ],
  },
};

const zegaRemanufacturingAuthorizationArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2022-01-01',
    href: '/xinwenzhongxin/renyixinwen/1025',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE,
    imageAlt: '志高掘进ZEGA系列产品授权再制造中心经销授权书，授权长沙仁毅机械制造有限公司，证书有效期2022年1月1日至2023年12月31日',
    title: '长沙仁毅获ZEGA系列产品授权再制造中心证书',
    listSummary:
      '经销授权书显示，长沙仁毅机械制造有限公司获志高掘进ZEGA系列产品授权再制造中心资质，授权地址为长沙经济技术开发区南2路27号国顺科技园，证书有效期为2022年1月1日至2023年12月31日。',
    paragraphs: [
      '根据志高掘进经销授权书，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>获授权作为“志高掘进ZEGA系列产品授权再制造中心”。证书列明授权地址为长沙经济技术开发区南2路27号国顺科技园，有效期自2022年1月1日至2023年12月31日。',
      '这份证书是对再制造中心资质的正式凭证，侧重授权身份、有效期和服务依据；它与此前发布的<a href="/xinwenzhongxin/renyixinwen/1021">ZEGA系列产品授权再制造中心通知</a>相互印证，也不同于面向设备销售渠道的<a href="/xinwenzhongxin/renyixinwen/1024">志高掘进经销授权书</a>。',
      '围绕ZEGA系列产品的授权服务，仁毅机械可结合<a href="/zuanjixilie">矿山装备服务经验</a>、<a href="/pro_category/beijianzhongxin">工程机械备件国产化能力</a>和<a href="/fuwuzhichi">维修技术支持体系</a>，为客户提供设备状态沟通、维修方案协同、再制造配套和零部件保障。',
      '该证书进一步完善了仁毅机械在<a href="/guanyuxingye#a3">企业荣誉与合作资质</a>中的售后服务能力展示。公司将继续围绕设备全生命周期服务，提升<a href="/fuwuzhichi#a1">质量控制</a>、维修工艺和现场响应效率，为矿山客户提供更稳定的设备保障。',
    ],
  },
  en: {
    date: '2022-01-01',
    href: '/en/xinwenzhongxin/renyixinwen/1025',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE,
    imageAlt: 'ZEGA Series Authorized Remanufacturing Center distributor authorization certificate for Changsha Renyi Machinery Manufacturing Co., Ltd., valid from January 1, 2022 to December 31, 2023',
    title: 'Changsha Renyi Holds ZEGA Series Authorized Remanufacturing Center Certificate',
    listSummary:
      'The authorization certificate confirms Changsha Renyi Machinery Manufacturing Co., Ltd. as a ZEGA Series Authorized Remanufacturing Center, with the certificate valid from January 1, 2022 to December 31, 2023.',
    paragraphs: [
      'According to the ZEGA distributor authorization certificate, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> was authorized as a “ZEGA Series Authorized Remanufacturing Center”. The certificate lists the authorized address in Guoshun Technology Park, Changsha Economic and Technological Development Zone, and is valid from January 1, 2022 to December 31, 2023.',
      'This certificate serves as a formal qualification document for the remanufacturing center, focusing on identity, validity period, and service basis. It supports the earlier <a href="/en/xinwenzhongxin/renyixinwen/1021">ZEGA remanufacturing center notice</a>, while remaining distinct from Renyi’s <a href="/en/xinwenzhongxin/renyixinwen/1024">ZEGA sales distributor authorization</a>.',
      'For ZEGA product service work, Renyi can combine its <a href="/en/zuanjixilie">mining equipment service experience</a>, <a href="/en/pro_category/beijianzhongxin">localized engineering machinery parts capability</a>, and <a href="/en/fuwuzhichi">maintenance support system</a> to assist customers with equipment condition communication, repair-plan coordination, remanufacturing support, and parts assurance.',
      'The certificate strengthens the after-sales service dimension within Renyi Machinery’s <a href="/en/guanyuxingye#a3">corporate honors and cooperation qualifications</a>. Renyi will continue improving <a href="/en/fuwuzhichi#a1">quality control</a>, maintenance processes, and field response efficiency for equipment lifecycle support.',
    ],
  },
  ru: {
    date: '2022-01-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1025',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE,
    imageAlt: 'Дистрибьюторский сертификат авторизованного центра ремануфактуринга продукции ZEGA для Changsha Renyi Machinery Manufacturing Co., Ltd., срок действия с 1 января 2022 года по 31 декабря 2023 года',
    title: 'Changsha Renyi получила сертификат авторизованного центра ремануфактуринга ZEGA',
    listSummary:
      'Сертификат подтверждает статус Changsha Renyi Machinery Manufacturing Co., Ltd. как авторизованного центра ремануфактуринга продукции серии ZEGA, действующий с 1 января 2022 года по 31 декабря 2023 года.',
    paragraphs: [
      'Согласно дистрибьюторскому сертификату ZEGA, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> получила статус “Авторизованный центр ремануфактуринга продукции серии ZEGA”. В сертификате указан адрес в Guoshun Technology Park в зоне экономического и технологического развития Чанши, срок действия - с 1 января 2022 года по 31 декабря 2023 года.',
      'Этот сертификат является официальным документом, подтверждающим квалификацию центра ремануфактуринга, с акцентом на статус, срок действия и сервисную основу. Он дополняет ранее опубликованное <a href="/ru/xinwenzhongxin/renyixinwen/1021">уведомление о центре ремануфактуринга ZEGA</a> и отличается от <a href="/ru/xinwenzhongxin/renyixinwen/1024">дистрибьюторской авторизации ZEGA</a>, связанной с продажами.',
      'Для обслуживания продукции ZEGA Renyi объединяет <a href="/ru/zuanjixilie">опыт работы с горным оборудованием</a>, <a href="/ru/pro_category/beijianzhongxin">возможности локализации запасных частей</a> и <a href="/ru/fuwuzhichi">систему ремонтной поддержки</a>, помогая клиентам в оценке состояния оборудования, согласовании ремонта, ремануфактуринге и обеспечении деталей.',
      'Сертификат усиливает сервисное направление в составе <a href="/ru/guanyuxingye#a3">корпоративных наград и партнерских квалификаций</a> Renyi Machinery. Компания продолжит совершенствовать <a href="/ru/fuwuzhichi#a1">контроль качества</a>, ремонтные процессы и скорость реагирования на площадке для поддержки жизненного цикла оборудования.',
    ],
  },
  es: {
    date: '2022-01-01',
    href: '/es/xinwenzhongxin/renyixinwen/1025',
    imageSrc: RENYI_ZEGA_REMANUFACTURING_AUTHORIZATION_IMAGE,
    imageAlt: 'Certificado de autorización de distribuidor del Centro Autorizado de Remanufactura de productos ZEGA para Changsha Renyi Machinery Manufacturing Co., Ltd., válido del 1 de enero de 2022 al 31 de diciembre de 2023',
    title: 'Changsha Renyi obtiene certificado de Centro Autorizado de Remanufactura ZEGA',
    listSummary:
      'El certificado confirma a Changsha Renyi Machinery Manufacturing Co., Ltd. como Centro Autorizado de Remanufactura de productos de la serie ZEGA, con validez del 1 de enero de 2022 al 31 de diciembre de 2023.',
    paragraphs: [
      'Según el certificado de autorización de ZEGA, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> fue autorizada como “Centro Autorizado de Remanufactura de productos de la serie ZEGA”. El documento indica la dirección autorizada en Guoshun Technology Park, zona de desarrollo económico y tecnológico de Changsha, y es válido del 1 de enero de 2022 al 31 de diciembre de 2023.',
      'Este certificado funciona como prueba formal de la calificación del centro de remanufactura, destacando identidad autorizada, periodo de validez y base de servicio. Complementa el <a href="/es/xinwenzhongxin/renyixinwen/1021">aviso del centro de remanufactura ZEGA</a> publicado anteriormente y se diferencia de la <a href="/es/xinwenzhongxin/renyixinwen/1024">autorización de distribuidor ZEGA</a> orientada al canal de ventas.',
      'Para el servicio de productos ZEGA, Renyi combina su <a href="/es/zuanjixilie">experiencia en equipos mineros</a>, su <a href="/es/pro_category/beijianzhongxin">capacidad de repuestos localizados</a> y su <a href="/es/fuwuzhichi">sistema de soporte de mantenimiento</a> para apoyar evaluación de equipos, coordinación de reparación, remanufactura y suministro de piezas.',
      'El certificado refuerza la dimensión de servicio posventa dentro de los <a href="/es/guanyuxingye#a3">honores corporativos y calificaciones de cooperación</a> de Renyi Machinery. La empresa seguirá mejorando el <a href="/es/fuwuzhichi#a1">control de calidad</a>, los procesos de mantenimiento y la respuesta en campo para el soporte del ciclo de vida de equipos.',
    ],
  },
};

const zegaSalesAuthorizationArticles: Record<RenyiNewsLocale, RenyiNewsArticle> = {
  zh: {
    date: '2021-07-01',
    href: '/xinwenzhongxin/renyixinwen/1024',
    imageSrc: RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE,
    imageAlt: '志高掘进ZEGA经销授权书，授权长沙仁毅机械制造有限公司为战略客户经销商，授权期2021年7月1日至2022年12月31日',
    title: '长沙仁毅获志高掘进经销授权，服务ZEGA设备销售与配件支持',
    listSummary:
      '经销授权书显示，长沙仁毅机械制造有限公司被授权为志高掘进战略客户经销商，代理产品涵盖ZEGA系列露天钻机、空压机、凿岩台车、采矿台车及零配件，授权期为2021年7月1日至2022年12月31日。',
    paragraphs: [
      '根据志高掘进经销授权书，<a href="/guanyuxingye#a1">长沙仁毅机械制造有限公司</a>自2021年7月1日起获得志高掘进（上海）国际贸易有限公司授权，代理身份为“志高掘进战略客户经销商”，授权期至2022年12月31日。',
      '该授权面向的是销售与服务渠道，不同于后续<a href="/xinwenzhongxin/renyixinwen/1021">ZEGA系列产品授权再制造中心</a>资质。授权书所列产品覆盖ZEGA系列露天钻机和空压机、凿岩台车、采矿台车及零配件，说明仁毅机械能够在客户选型、设备销售、配套零件和现场沟通环节承担更前置的渠道服务角色。',
      '对于矿山和工程施工客户来说，设备采购往往需要与后续备件、维修和技术支持联动。长沙仁毅结合自身<a href="/zuanjixilie">矿山装备服务经验</a>、<a href="/pro_category/beijianzhongxin">备件国产化能力</a>和<a href="/fuwuzhichi">服务支持体系</a>，可为客户提供从设备需求沟通到配件供应的连续协作。',
      '此次经销授权丰富了仁毅机械在<a href="/guanyuxingye#a3">企业荣誉与合作资质</a>中的渠道服务维度。公司将继续围绕专业矿山设备、关键部件供应和售后响应能力，提升客户项目落地效率与设备运行保障水平。',
    ],
  },
  en: {
    date: '2021-07-01',
    href: '/en/xinwenzhongxin/renyixinwen/1024',
    imageSrc: RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE,
    imageAlt: 'ZEGA distributor authorization certificate appointing Changsha Renyi Machinery Manufacturing Co., Ltd. as a strategic customer distributor, valid from July 1, 2021 to December 31, 2022',
    title: 'Changsha Renyi Receives ZEGA Distributor Authorization for Sales and Service',
    listSummary:
      'The distributor authorization certificate appoints Changsha Renyi Machinery Manufacturing Co., Ltd. as a strategic customer distributor for ZEGA products, covering open-pit drilling rigs, air compressors, rock drilling jumbos, mining jumbos, and spare parts.',
    paragraphs: [
      'According to the ZEGA distributor authorization certificate, <a href="/en/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> was authorized by Zega Machinery (Shanghai) Int’l Trading Co., Ltd. as a strategic customer distributor from July 1, 2021 to December 31, 2022.',
      'This certificate focuses on sales and service distribution, which is different from Renyi’s later <a href="/en/xinwenzhongxin/renyixinwen/1021">ZEGA Series Authorized Remanufacturing Center</a> qualification. The authorized product scope includes ZEGA open-pit drilling rigs, air compressors, rock drilling jumbos, mining jumbos, and spare parts, placing Renyi closer to customer selection, product supply, and channel support work.',
      'For mining and engineering customers, equipment procurement is closely connected with parts availability, repair response, and technical communication. Renyi combines its <a href="/en/zuanjixilie">mining equipment service experience</a>, <a href="/en/pro_category/beijianzhongxin">localized parts capability</a>, and <a href="/en/fuwuzhichi">service support system</a> to support customers from equipment demand discussion through parts coordination.',
      'The distributor authorization adds a sales-channel cooperation dimension to Renyi Machinery’s <a href="/en/guanyuxingye#a3">corporate honors and partner qualifications</a>. The company will continue strengthening equipment supply coordination, key component support, and service response for mining projects.',
    ],
  },
  ru: {
    date: '2021-07-01',
    href: '/ru/xinwenzhongxin/renyixinwen/1024',
    imageSrc: RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE,
    imageAlt: 'Дистрибьюторский сертификат ZEGA, назначающий Changsha Renyi Machinery Manufacturing Co., Ltd. стратегическим дистрибьютором, срок действия с 1 июля 2021 года по 31 декабря 2022 года',
    title: 'Changsha Renyi получила дистрибьюторскую авторизацию ZEGA для продаж и сервиса',
    listSummary:
      'Дистрибьюторский сертификат назначает Changsha Renyi Machinery Manufacturing Co., Ltd. стратегическим дистрибьютором ZEGA для буровых установок открытых работ, компрессоров, буровых и горных машин, а также запасных частей.',
    paragraphs: [
      'Согласно дистрибьюторскому сертификату ZEGA, <a href="/ru/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> была авторизована Zega Machinery (Shanghai) Int’l Trading Co., Ltd. как стратегический дистрибьютор с 1 июля 2021 года по 31 декабря 2022 года.',
      'Этот документ относится к продажам и сервисному каналу и отличается от последующего статуса <a href="/ru/xinwenzhongxin/renyixinwen/1021">авторизованного центра ремануфактуринга серии ZEGA</a>. В область авторизации входят буровые установки ZEGA для открытых работ, воздушные компрессоры, буровые установки, горные машины и запасные части, что усиливает роль Renyi в подборе оборудования, поставке продукции и поддержке канала.',
      'Для горных и строительных заказчиков закупка оборудования тесно связана с обеспечением запасными частями, ремонтом и технической коммуникацией. Renyi объединяет <a href="/ru/zuanjixilie">опыт обслуживания горного оборудования</a>, <a href="/ru/pro_category/beijianzhongxin">возможности локализации запасных частей</a> и <a href="/ru/fuwuzhichi">систему сервисной поддержки</a>, помогая клиентам от обсуждения потребности до координации поставки деталей.',
      'Дистрибьюторская авторизация дополняет <a href="/ru/guanyuxingye#a3">корпоративные награды и партнерские квалификации</a> Renyi Machinery направлением каналов продаж. Компания продолжит укреплять координацию поставок оборудования, поддержку ключевых компонентов и сервисную реакцию для горных проектов.',
    ],
  },
  es: {
    date: '2021-07-01',
    href: '/es/xinwenzhongxin/renyixinwen/1024',
    imageSrc: RENYI_ZEGA_SALES_AUTHORIZATION_IMAGE,
    imageAlt: 'Certificado de autorización de distribuidor ZEGA que nombra a Changsha Renyi Machinery Manufacturing Co., Ltd. como distribuidor estratégico, válido del 1 de julio de 2021 al 31 de diciembre de 2022',
    title: 'Changsha Renyi recibe autorización de distribuidor ZEGA para ventas y servicio',
    listSummary:
      'El certificado de distribuidor autoriza a Changsha Renyi Machinery Manufacturing Co., Ltd. como distribuidor estratégico de productos ZEGA, cubriendo perforadoras de cielo abierto, compresores, jumbos de perforación, equipos mineros y repuestos.',
    paragraphs: [
      'Según el certificado de autorización de distribuidor ZEGA, <a href="/es/guanyuxingye#a1">Changsha Renyi Machinery Manufacturing Co., Ltd.</a> fue autorizada por Zega Machinery (Shanghai) Int’l Trading Co., Ltd. como distribuidor estratégico desde el 1 de julio de 2021 hasta el 31 de diciembre de 2022.',
      'Este certificado se centra en el canal de ventas y servicio, y es distinto de la posterior calificación de <a href="/es/xinwenzhongxin/renyixinwen/1021">Centro autorizado de remanufactura de la serie ZEGA</a>. El alcance incluye perforadoras ZEGA de cielo abierto, compresores de aire, jumbos de perforación, equipos mineros y repuestos, situando a Renyi más cerca de la selección de equipos, el suministro y el soporte de canal.',
      'Para clientes de minería e ingeniería, la compra de equipos suele estar vinculada con disponibilidad de repuestos, respuesta de reparación y comunicación técnica. Renyi combina su <a href="/es/zuanjixilie">experiencia en servicio de equipos mineros</a>, su <a href="/es/pro_category/beijianzhongxin">capacidad de repuestos localizados</a> y su <a href="/es/fuwuzhichi">sistema de soporte de servicio</a> para apoyar desde la definición de necesidades hasta la coordinación de piezas.',
      'La autorización de distribuidor añade una dimensión de canal comercial a los <a href="/es/guanyuxingye#a3">honores corporativos y calificaciones de socio</a> de Renyi Machinery. La empresa seguirá reforzando la coordinación de suministro de equipos, el soporte de componentes clave y la respuesta de servicio para proyectos mineros.',
    ],
  },
};

const highTechCertificateTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/1426/',
  en: '/en/xinwenzhongxin/xingyexinwen/676/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/332/',
  es: '/es/xinwenzhongxin/xingyexinwen/332/',
};

const highTechEnterprisePlaqueTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/1364/',
  en: '/en/xinwenzhongxin/xingyexinwen/755/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/328/',
  es: '/es/xinwenzhongxin/xingyexinwen/329/',
};

const jiangxiCopperLocalizationAwardTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/uncategorized/1371/',
  en: '/en/xinwenzhongxin/xingyexinwen/329/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/325/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const zegaSalesAuthorizationTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/1359/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/331/',
};

const zegaRemanufacturingAuthorizationTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/776/',
  en: '/en/xinwenzhongxin/xingyexinwen/331/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/331/',
  es: '/es/xinwenzhongxin/xingyexinwen/328/',
};

const at1500MiningSafetyCertificateTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/749/',
  en: '/en/xinwenzhongxin/xingyexinwen/332/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/330/',
  es: '/es/xinwenzhongxin/xingyexinwen/327/',
};

const at2000MiningSafetyCertificateTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/744/',
  en: '/en/xinwenzhongxin/xingyexinwen/332/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/330/',
  es: '/es/xinwenzhongxin/xingyexinwen/332/',
};

const miningTruckRemoteFaultDetectionSoftwareCopyrightTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/740/',
  en: '/en/xinwenzhongxin/xingyexinwen/332/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/330/',
  es: '/es/xinwenzhongxin/xingyexinwen/332/',
};

const hydraulicCylinderTestBenchPlcSoftwareCopyrightTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/731/',
  en: '/en/xinwenzhongxin/xingyexinwen/329/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/325/',
  es: '/es/xinwenzhongxin/xingyexinwen/329/',
};

const wheelMotorDismantlingMachineSwingMechanismPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const wheelMotorDismantlingMachineFloatingTrayPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const wheelMotorDismantlingMachinePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const multiBodyWheelRimDismantlingMachinePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const flotationAgitatorMainShaftSupportFixingDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const centerAerationFlotationHighSpeedRotaryValvePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const hydraulicCylinderInnerWallRollingDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const latheShaftGrindingPolishingHeadDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const hydraulicCylinderInnerWallGrindingDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const flotationAgitatorUpperLowerShaftPositioningConnectionDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const largeMaterialTransferUShapedCarriagePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const largeMaterialTransferVehiclePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const raiseBoringMachineDetachableCleaningHostPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const raiseBoringMachineDeformationResistantCutterheadPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const combinableWearResistantReamingCutterheadPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const heatDissipationStablePumpStationPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const largeVehicleWheelTireDismountingHoistPlatePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const largeTireWheelHubHoistingDismantlingMachineHookDevicePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const multiStationLargeTireWheelHubHoistingDismantlingMachinePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const removableRaiseBoringMachineCutterBasePatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const raiseBoringMachineLoadTransferVerticalHorizontalPlacementSystemPatentTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/720/',
  en: '/en/xinwenzhongxin/xingyexinwen/330/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/329/',
  es: '/es/xinwenzhongxin/xingyexinwen/330/',
};

const iso9001CertificateTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/xingyexinwen/1415/',
  en: '/en/xinwenzhongxin/xingyexinwen/1415/',
  ru: '/ru/xinwenzhongxin/xingyexinwen/1415/',
  es: '/es/xinwenzhongxin/xingyexinwen/1415/',
};

const iso9001ChineseCertificateTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/1373/',
  en: '/en/xinwenzhongxin/1373/',
  ru: '/ru/xinwenzhongxin/1373/',
  es: '/es/xinwenzhongxin/1373/',
};

const zegaRemanufacturingCenterTemplatePaths: Record<RenyiNewsLocale, string> = {
  zh: '/xinwenzhongxin/1366/',
  en: '/en/xinwenzhongxin/1366/',
  ru: '/ru/xinwenzhongxin/1366/',
  es: '/es/xinwenzhongxin/1366/',
};

const renyiNewsArticleGroups = [
  { articles: highTechCertificateArticles, templatePaths: highTechCertificateTemplatePaths },
  { articles: highTechEnterprisePlaqueArticles, templatePaths: highTechEnterprisePlaqueTemplatePaths },
  { articles: jiangxiCopperLocalizationAwardArticles, templatePaths: jiangxiCopperLocalizationAwardTemplatePaths },
  { articles: zegaSalesAuthorizationArticles, templatePaths: zegaSalesAuthorizationTemplatePaths },
  { articles: zegaRemanufacturingAuthorizationArticles, templatePaths: zegaRemanufacturingAuthorizationTemplatePaths },
  { articles: at1500MiningSafetyCertificateArticles, templatePaths: at1500MiningSafetyCertificateTemplatePaths },
  { articles: at2000MiningSafetyCertificateArticles, templatePaths: at2000MiningSafetyCertificateTemplatePaths },
  {
    articles: miningTruckRemoteFaultDetectionSoftwareCopyrightArticles,
    templatePaths: miningTruckRemoteFaultDetectionSoftwareCopyrightTemplatePaths,
  },
  {
    articles: hydraulicCylinderTestBenchPlcSoftwareCopyrightArticles,
    templatePaths: hydraulicCylinderTestBenchPlcSoftwareCopyrightTemplatePaths,
  },
  {
    articles: wheelMotorDismantlingMachineSwingMechanismPatentArticles,
    templatePaths: wheelMotorDismantlingMachineSwingMechanismPatentTemplatePaths,
  },
  {
    articles: wheelMotorDismantlingMachineFloatingTrayPatentArticles,
    templatePaths: wheelMotorDismantlingMachineFloatingTrayPatentTemplatePaths,
  },
  {
    articles: wheelMotorDismantlingMachinePatentArticles,
    templatePaths: wheelMotorDismantlingMachinePatentTemplatePaths,
  },
  {
    articles: multiBodyWheelRimDismantlingMachinePatentArticles,
    templatePaths: multiBodyWheelRimDismantlingMachinePatentTemplatePaths,
  },
  {
    articles: flotationAgitatorMainShaftSupportFixingDevicePatentArticles,
    templatePaths: flotationAgitatorMainShaftSupportFixingDevicePatentTemplatePaths,
  },
  {
    articles: centerAerationFlotationHighSpeedRotaryValvePatentArticles,
    templatePaths: centerAerationFlotationHighSpeedRotaryValvePatentTemplatePaths,
  },
  {
    articles: hydraulicCylinderInnerWallRollingDevicePatentArticles,
    templatePaths: hydraulicCylinderInnerWallRollingDevicePatentTemplatePaths,
  },
  {
    articles: latheShaftGrindingPolishingHeadDevicePatentArticles,
    templatePaths: latheShaftGrindingPolishingHeadDevicePatentTemplatePaths,
  },
  {
    articles: hydraulicCylinderInnerWallGrindingDevicePatentArticles,
    templatePaths: hydraulicCylinderInnerWallGrindingDevicePatentTemplatePaths,
  },
  {
    articles: flotationAgitatorUpperLowerShaftPositioningConnectionDevicePatentArticles,
    templatePaths: flotationAgitatorUpperLowerShaftPositioningConnectionDevicePatentTemplatePaths,
  },
  {
    articles: largeMaterialTransferUShapedCarriagePatentArticles,
    templatePaths: largeMaterialTransferUShapedCarriagePatentTemplatePaths,
  },
  {
    articles: largeMaterialTransferVehiclePatentArticles,
    templatePaths: largeMaterialTransferVehiclePatentTemplatePaths,
  },
  {
    articles: raiseBoringMachineDetachableCleaningHostPatentArticles,
    templatePaths: raiseBoringMachineDetachableCleaningHostPatentTemplatePaths,
  },
  {
    articles: raiseBoringMachineDeformationResistantCutterheadPatentArticles,
    templatePaths: raiseBoringMachineDeformationResistantCutterheadPatentTemplatePaths,
  },
  {
    articles: combinableWearResistantReamingCutterheadPatentArticles,
    templatePaths: combinableWearResistantReamingCutterheadPatentTemplatePaths,
  },
  {
    articles: heatDissipationStablePumpStationPatentArticles,
    templatePaths: heatDissipationStablePumpStationPatentTemplatePaths,
  },
  {
    articles: largeVehicleWheelTireDismountingHoistPlatePatentArticles,
    templatePaths: largeVehicleWheelTireDismountingHoistPlatePatentTemplatePaths,
  },
  {
    articles: largeTireWheelHubHoistingDismantlingMachineHookDevicePatentArticles,
    templatePaths: largeTireWheelHubHoistingDismantlingMachineHookDevicePatentTemplatePaths,
  },
  {
    articles: multiStationLargeTireWheelHubHoistingDismantlingMachinePatentArticles,
    templatePaths: multiStationLargeTireWheelHubHoistingDismantlingMachinePatentTemplatePaths,
  },
  {
    articles: removableRaiseBoringMachineCutterBasePatentArticles,
    templatePaths: removableRaiseBoringMachineCutterBasePatentTemplatePaths,
  },
  {
    articles: raiseBoringMachineLoadTransferVerticalHorizontalPlacementSystemPatentArticles,
    templatePaths: raiseBoringMachineLoadTransferVerticalHorizontalPlacementSystemPatentTemplatePaths,
  },
  { articles: iso9001CertificateArticles, templatePaths: iso9001CertificateTemplatePaths },
  { articles: iso9001ChineseCertificateArticles, templatePaths: iso9001ChineseCertificateTemplatePaths },
  { articles: zegaRemanufacturingCenterArticles, templatePaths: zegaRemanufacturingCenterTemplatePaths },
];

const newsTitleBrands: Record<RenyiNewsLocale, string> = {
  zh: '长沙仁毅机械制造有限公司',
  en: 'Changsha Renyi Machinery Manufacturing Co., Ltd.',
  ru: 'Changsha Renyi Machinery Manufacturing Co., Ltd.',
  es: 'Changsha Renyi Machinery Manufacturing Co., Ltd.',
};

function normalizeNewsPath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const cleanPath = pathname.split('#')[0]?.split('?')[0] ?? '/';
  const normalized = cleanPath.replace(/\/+/g, '/');

  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

function getNewsLocale(pathname: string): RenyiNewsLocale {
  const normalized = normalizeNewsPath(pathname);

  if (normalized.startsWith('/en/')) {
    return 'en';
  }

  if (normalized.startsWith('/ru/')) {
    return 'ru';
  }

  if (normalized.startsWith('/es/')) {
    return 'es';
  }

  return 'zh';
}

function getRenyiNewsArticle(pathname: string) {
  const normalized = normalizeNewsPath(pathname);
  const locale = getNewsLocale(pathname);

  for (const group of renyiNewsArticleGroups) {
    if (
      normalizeNewsPath(group.articles[locale].href) === normalized ||
      Object.values(group.templatePaths).some((templatePath) => templatePath === normalized)
    ) {
      return group.articles[locale];
    }
  }

  return null;
}

function buildNewsTopCard(article: RenyiNewsArticle) {
  return `<a class="item-a img-hover" href="${article.href}" title="${article.title}"> <div class="img-box oh"> <div class="img-box-img"> <img src="${article.imageSrc}" class="img-w imgshow wp-post-image renyi-news-certificate-thumb" alt="${article.imageAlt}" title="${article.imageAlt}" decoding="async" fetchpriority="high" /> </div> </div> <div class="txtbox"> <p class="date">${article.date}</p> <h3 class="tit ellipsis">${article.title}</h3> <p class="txt">${article.listSummary}</p> </div> </a>`;
}

function buildNewsListCard(article: RenyiNewsArticle) {
  return `<a class="item clearfix img-hover wow fadeInUp" href="${article.href}" title="${article.title}"> <div class="img-box-m"> <div class="img-box oh"> <div class="img-box-img"> <img src="${article.imageSrc}" class="img-w imgshow wp-post-image renyi-news-certificate-thumb" alt="${article.imageAlt}" title="${article.imageAlt}" decoding="async" loading="lazy" /> </div> </div> </div> <div class="txt-box"> <h3 class="tit ellipsis">${article.title} </h3> <p class="date">${article.date}</p> <p class="txt">${article.listSummary}</p> </div> </a>`;
}

function buildNewsTextCard(article: RenyiNewsArticle) {
  return `<a class="item-a img-hover" href="${article.href}" title="${article.title}"> <div class="txtbox"> <p class="date">${article.date}</p> <h3 class="tit ellipsis">${article.title}</h3> <p class="txt">${article.listSummary}</p> </div> </a>`;
}

function shouldKeepNewsBodyLink(href: string) {
  return href.includes('/guanyuxingye#a3') || href.includes('/fuwuzhichi');
}

function filterNewsBodyLinks(paragraph: string) {
  return paragraph.replace(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_match, href: string, text: string) => {
    return shouldKeepNewsBodyLink(href) ? `<a href="${href}">${text}</a>` : text;
  });
}

function getNewsDateRank(date: string) {
  const [year = 0, month = 1, day = 1] = date.split('-').map((part) => Number(part));

  return year * 10000 + month * 100 + day;
}

function getOrderedNewsArticles(locale: RenyiNewsLocale) {
  return [
    highTechCertificateArticles[locale],
    iso9001CertificateArticles[locale],
    iso9001ChineseCertificateArticles[locale],
    zegaRemanufacturingCenterArticles[locale],
    zegaRemanufacturingAuthorizationArticles[locale],
    zegaSalesAuthorizationArticles[locale],
    largeVehicleWheelTireDismountingHoistPlatePatentArticles[locale],
    largeTireWheelHubHoistingDismantlingMachineHookDevicePatentArticles[locale],
    multiStationLargeTireWheelHubHoistingDismantlingMachinePatentArticles[locale],
    removableRaiseBoringMachineCutterBasePatentArticles[locale],
    raiseBoringMachineLoadTransferVerticalHorizontalPlacementSystemPatentArticles[locale],
    highTechEnterprisePlaqueArticles[locale],
    jiangxiCopperLocalizationAwardArticles[locale],
    at1500MiningSafetyCertificateArticles[locale],
    at2000MiningSafetyCertificateArticles[locale],
    heatDissipationStablePumpStationPatentArticles[locale],
    combinableWearResistantReamingCutterheadPatentArticles[locale],
    raiseBoringMachineDeformationResistantCutterheadPatentArticles[locale],
    raiseBoringMachineDetachableCleaningHostPatentArticles[locale],
    largeMaterialTransferVehiclePatentArticles[locale],
    largeMaterialTransferUShapedCarriagePatentArticles[locale],
    flotationAgitatorUpperLowerShaftPositioningConnectionDevicePatentArticles[locale],
    flotationAgitatorMainShaftSupportFixingDevicePatentArticles[locale],
    latheShaftGrindingPolishingHeadDevicePatentArticles[locale],
    hydraulicCylinderInnerWallGrindingDevicePatentArticles[locale],
    centerAerationFlotationHighSpeedRotaryValvePatentArticles[locale],
    hydraulicCylinderInnerWallRollingDevicePatentArticles[locale],
    miningTruckRemoteFaultDetectionSoftwareCopyrightArticles[locale],
    hydraulicCylinderTestBenchPlcSoftwareCopyrightArticles[locale],
    multiBodyWheelRimDismantlingMachinePatentArticles[locale],
    wheelMotorDismantlingMachinePatentArticles[locale],
    wheelMotorDismantlingMachineFloatingTrayPatentArticles[locale],
    wheelMotorDismantlingMachineSwingMechanismPatentArticles[locale],
  ]
    .map((article, index) => ({ article, index }))
    .sort((left, right) => {
      const dateDiff = getNewsDateRank(right.article.date) - getNewsDateRank(left.article.date);

      return dateDiff || left.index - right.index;
    })
    .map(({ article }) => article);
}

const NEWS_LIST_PAGE_SIZE_BY_LOCALE: Record<RenyiNewsLocale, number> = {
  zh: 12,
  en: 6,
  ru: 6,
  es: 4,
};

const newsPaginationLabels: Record<RenyiNewsLocale, { aria: string; heading: string; next: string; prev: string }> = {
  zh: { aria: '文章分页', heading: '文章分页', next: '下一页 »', prev: '« 上一页' },
  en: { aria: 'Post pagination', heading: 'Post pagination', next: 'Next »', prev: '« Previous' },
  ru: { aria: 'Навигация по страницам', heading: 'Навигация по страницам', next: 'Далее »', prev: '« Назад' },
  es: { aria: 'Paginación de entradas', heading: 'Paginación de entradas', next: 'Siguiente »', prev: '« Anterior' },
};

const newsDetailSideLabels: Record<
  RenyiNewsLocale,
  { back: string; next: string; prev: string; share: string; qq: string; qzone: string; wechat: string }
> = {
  zh: { back: '返回列表', next: '下一条', prev: '上一条', share: '分享到', qq: '分享到QQ好友', qzone: '分享到QQ空间', wechat: '分享到微信' },
  en: { back: 'Back to list', next: 'Next', prev: 'Previous', share: 'Share', qq: 'Share to QQ', qzone: 'Share to Qzone', wechat: 'Share to WeChat' },
  ru: { back: 'К списку', next: 'Следующая', prev: 'Предыдущая', share: 'Поделиться', qq: 'Поделиться в QQ', qzone: 'Поделиться в Qzone', wechat: 'Поделиться в WeChat' },
  es: { back: 'Volver a la lista', next: 'Siguiente', prev: 'Anterior', share: 'Compartir', qq: 'Compartir en QQ', qzone: 'Compartir en Qzone', wechat: 'Compartir en WeChat' },
};

const newsListHrefs: Record<RenyiNewsLocale, string> = {
  zh: '/category/renyixinwen',
  en: '/en/category/renyixinwen',
  ru: '/ru/category/renyixinwen',
  es: '/es/category/renyixinwen',
};

function getNewsListPageNumber(pathname: string) {
  const pageMatch = normalizeNewsPath(pathname).match(/\/page\/(\d+)\//);
  const pageNumber = pageMatch ? Number(pageMatch[1]) : 1;

  return Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;
}

function getNewsListPageHref(pathname: string, pageNumber: number) {
  const basePath = normalizeNewsPath(pathname).replace(/\/page\/\d+\/$/, '/');
  const href = pageNumber <= 1 ? basePath : `${basePath}page/${pageNumber}`;

  return href.endsWith('/') ? href.slice(0, -1) : href;
}

function getNewsListContentBounds(html: string) {
  const startMarker = '<div class="row row-30 list-news clearfix wow fadeInUp">';
  const start = html.indexOf(startMarker);

  if (start === -1) {
    return null;
  }

  const paginationStart = html.indexOf('<nav class="navigation pagination"', start);
  const footerStart = html.indexOf('<footer class="footer">', start);
  const end = [paginationStart, footerStart]
    .filter((index) => index !== -1)
    .sort((left, right) => left - right)[0];

  if (end === undefined) {
    return null;
  }

  return { start, end };
}

function countNewsListCards(html: string) {
  const bounds = getNewsListContentBounds(html);

  if (!bounds) {
    return 0;
  }

  return (html.slice(bounds.start, bounds.end).match(/<a class="item clearfix img-hover wow fadeInUp"/g) ?? []).length;
}

function getNewsListPageSize(html: string, locale: RenyiNewsLocale) {
  const cardCount = countNewsListCards(html);

  if (cardCount === 0) {
    return 0;
  }

  return Math.max(cardCount, NEWS_LIST_PAGE_SIZE_BY_LOCALE[locale]);
}

function replaceNewsSectionCards(
  html: string,
  startMarker: string,
  endMarker: string,
  cardPattern: RegExp,
  buildCard: (article: RenyiNewsArticle, index: number) => string,
  articles: RenyiNewsArticle[],
) {
  const start = html.indexOf(startMarker);

  if (start === -1) {
    return html;
  }

  const end = html.indexOf(endMarker, start);

  if (end === -1) {
    return html;
  }

  let index = 0;
  const section = html.slice(start, end).replace(cardPattern, (match) => {
    const article = articles[index];

    if (!article) {
      return match;
    }

    const card = buildCard(article, index);
    index += 1;

    return card;
  });

  return `${html.slice(0, start)}${section}${html.slice(end)}`;
}

function patchNewsListCardsHtml(html: string, articles: RenyiNewsArticle[]) {
  const bounds = getNewsListContentBounds(html);

  if (!bounds) {
    return html;
  }

  const cards = articles
    .map((article) => `<div class="col-xs-24 col-sm-24 col-md-24"> ${buildNewsListCard(article)} </div>`)
    .join('\n');
  const section = `<div class="row row-30 list-news clearfix wow fadeInUp">\n${cards}\n</div>\n`;

  return `${html.slice(0, bounds.start)}${section}${html.slice(bounds.end)}`;
}

function patchNewsPaginationHtml(
  html: string,
  pathname: string,
  pageNumber: number,
  pageSize: number,
  totalArticles: number,
  locale: RenyiNewsLocale,
) {
  const totalPages = pageSize > 0 ? Math.ceil(totalArticles / pageSize) : 0;
  const labels = newsPaginationLabels[locale];
  const navPattern = /<nav class="navigation pagination"[\s\S]*?<\/nav>/;

  if (!navPattern.test(html)) {
    return html;
  }

  if (totalPages <= 1 || pageNumber > totalPages) {
    return html.replace(navPattern, '');
  }

  const prevLink = pageNumber > 1
    ? `<a class="prev page-numbers" href="${getNewsListPageHref(pathname, pageNumber - 1)}">${labels.prev}</a>`
    : '';
  const pageLinks = Array.from({ length: totalPages }, (_value, index) => {
    const currentPage = index + 1;

    return currentPage === pageNumber
      ? `<span aria-current="page" class="page-numbers current">${currentPage}</span>`
      : `<a class="page-numbers" href="${getNewsListPageHref(pathname, currentPage)}">${currentPage}</a>`;
  }).join('\n');
  const nextLink = pageNumber < totalPages
    ? `<a class="next page-numbers" href="${getNewsListPageHref(pathname, pageNumber + 1)}">${labels.next}</a>`
    : '';
  const pagination = `<nav class="navigation pagination" aria-label="${labels.aria}"> <h2 class="screen-reader-text">${labels.heading}</h2> <div class="nav-links">${prevLink}${pageLinks}${nextLink}</div> </nav>`;

  return html.replace(navPattern, pagination);
}

function patchNewsListHtml(html: string, pathname: string) {
  const locale = getNewsLocale(pathname);
  const articles = getOrderedNewsArticles(locale);
  const pageSize = getNewsListPageSize(html, locale);
  const pageNumber = getNewsListPageNumber(pathname);
  const listArticles = pageSize > 0
    ? articles.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    : articles;
  const withOrderedTop = replaceNewsSectionCards(
    html,
    '<div class="news-top page-col-space wow fadeInUp">',
    '<div class="container page-col-space wow fadeInUp">',
    /<a class="item-a img-hover"[\s\S]*?<\/a>/g,
    (article, index) => (index < 2 ? buildNewsTopCard(article) : buildNewsTextCard(article)),
    articles,
  );

  return patchNewsPaginationHtml(
    patchNewsListCardsHtml(withOrderedTop, listArticles),
    pathname,
    pageNumber,
    pageSize,
    articles.length,
    locale,
  );
}

function buildDetailBody(article: RenyiNewsArticle) {
  const paragraphs = article.paragraphs
    .map((paragraph, index) => {
      const bodyText = filterNewsBodyLinks(paragraph);

      if (index === 1) {
        return `<p style="text-align: center;"><img fetchpriority="high" decoding="async" class="alignnone size-full renyi-news-detail-certificate" src="${article.imageSrc}" alt="${article.imageAlt}" title="${article.imageAlt}" /></p> <p>${bodyText}</p>`;
      }

      return `<p>${bodyText}</p>`;
    })
    .join(' ');

  return `<div class="news-v-body content-txt renyi-news-detail-body">${paragraphs}</div>`;
}

function buildNewsDetailSideItem(className: string, label: string, article: RenyiNewsArticle | null, rel: string) {
  const link = article
    ? ` <a href="${article.href}" rel="${rel}">${article.title}</a>`
    : '';

  return `<div class="${className} item"> <strong>${label}</strong>${link} </div>`;
}

function buildNewsDetailSideHtml(article: RenyiNewsArticle, pathname: string) {
  const locale = getNewsLocale(pathname);
  const labels = newsDetailSideLabels[locale];
  const articles = getOrderedNewsArticles(locale);
  const currentIndex = articles.findIndex((candidate) => normalizeNewsPath(candidate.href) === normalizeNewsPath(article.href));
  const previousArticle = currentIndex > 0 ? (articles[currentIndex - 1] ?? null) : null;
  const nextArticle = currentIndex >= 0 && currentIndex < articles.length - 1 ? (articles[currentIndex + 1] ?? null) : null;

  return [
    '<div class="detail-prevnext renyi-news-detail-prevnext">',
    buildNewsDetailSideItem('prev', labels.prev, previousArticle, 'prev'),
    buildNewsDetailSideItem('next', labels.next, nextArticle, 'next'),
    '</div>',
    '<div class="news-b renyi-news-detail-actions">',
    `<strong>${labels.share}</strong>`,
    '<div class="news-b-share share-box bdsharebuttonbox hidden-sm hidden-xs">',
    `<a href="javascript:;" class="bds_sqq" data-cmd="sqq" title="${labels.qq}"></a>`,
    `<a href="javascript:;" class="bds_tqq" data-cmd="qzone" title="${labels.qzone}"></a>`,
    `<a href="javascript:;" class="bds_weixin" data-cmd="weixin" title="${labels.wechat}"></a>`,
    '</div>',
    `<a class="btn01" href="${newsListHrefs[locale]}">${labels.back}</a>`,
    '</div>',
  ].join(' ');
}

function patchNewsDetailHtml(html: string, pathname: string) {
  const article = getRenyiNewsArticle(pathname);

  if (!article) {
    return html;
  }

  return html
    .replace(
      /<header class="news-v-head">[\s\S]*?<\/header>/,
      `<header class="news-v-head"> <h1 class="title"><a href="${article.href}">${article.title}</a></h1> <div class="news-v-state">${article.date}</div> </header>`,
    )
    .replace(
      /<div class="news-v-body content-txt">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="col-md-6">/,
      `${buildDetailBody(article)} </div> </div> <div class="col-md-6 renyi-news-side-col">`,
    )
    .replace(
      /<div class="detail-prevnext">[\s\S]*?<div class="news-b">[\s\S]*?<a class="btn01"[\s\S]*?<\/a>\s*<\/div>/,
      buildNewsDetailSideHtml(article, pathname),
    )
    .replace('<div class="col-md-18"> <div class="news-v">', '<div class="col-md-18 renyi-news-main-col"> <div class="news-v">')
    .replace('<div class="col-md-6"> <div class="detail-prevnext">', '<div class="col-md-6 renyi-news-side-col"> <div class="detail-prevnext">');
}

export function patchRenyiNewsPageHtml(html: string, pathname: string) {
  return patchNewsDetailHtml(patchNewsListHtml(html, pathname), pathname);
}

export function patchRenyiNewsPageTitle(title: string, pathname: string) {
  const article = getRenyiNewsArticle(pathname);

  if (!article) {
    return title;
  }

  return `${article.title} | ${newsTitleBrands[getNewsLocale(pathname)]}`;
}
