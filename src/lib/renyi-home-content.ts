import { RENYI_CASE_PROJECTS } from './renyi-case-projects';

type Locale = 'zh' | 'en' | 'ru' | 'es';

type HomeIntroCopy = {
  company: string;
  title: string;
  subtitle: string;
  paragraph: string;
  moreText: string;
  links: Array<{ text: string; href: string }>;
};

type ProductCategoryCopy = {
  label: string;
  title: string;
  description: string;
  buttons: string[];
  buttonHrefs: string[];
  imageAlts: string[];
  slideDescriptions?: Partial<Record<number, string>>;
};

type NewsCenterCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  marketEyebrow: string;
  marketTitle: string;
  marketSubtitle: string;
  chartPlaceholder: string;
  news: Array<{
    title: string;
    datetime: string;
    summary: string;
    href: string;
  }>;
};

type SolutionCopy = {
  title: string;
  paragraph: string;
};

type HomeCaseCopy = {
  eyebrow: string;
  title: string;
  paragraph: string;
  link: string;
};

const HOME_PATH_LOCALES: Record<string, Locale> = {
  '/': 'zh',
  '/en': 'en',
  '/en/': 'en',
  '/ru': 'ru',
  '/ru/': 'ru',
  '/es': 'es',
  '/es/': 'es',
};

const PRODUCT_CATEGORY_SITE_IMAGE = '/renyi/product-category-raise-boring-site.png?v=20260428';
const PRODUCT_CATEGORY_SUSPENSION_IMAGE = '/renyi/product-category-hydraulic-suspension-cylinders.jpg?v=20260801';
const PRODUCT_CATEGORY_SPECIAL_IMAGE = '/renyi/product-category-special-equipment-yard.jpg?v=20260801';
const PRODUCT_CATEGORY_MINERAL_IMAGE = '/renyi/product-category-mineral-processing-fill.jpg?v=20260801';
const PRODUCT_CATEGORY_STRUCTURAL_IMAGE = '/renyi/product-category-structural-components-fill.jpg?v=20260801';
const HOME_INTRO_FACTORY_IMAGE = '/renyi/renyi-home-intro-factory.avif';
const SOLUTION_MAP_IMAGE = '/renyi/renyi-ind03-map-changsha-v2.svg';
const NEWS_MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const homeCaseCopies: Record<Locale, HomeCaseCopy> = {
  zh: {
    eyebrow: '项目实践与交付经验',
    title: '案例展示',
    paragraph:
      '从矿山井筒施工、大型车辆维修，到结构件改造和专用设备安装调试，查看仁毅设备在不同现场条件下的实际应用。',
    link: '查看全部案例',
  },
  en: {
    eyebrow: 'Projects and delivery experience',
    title: 'Case Studies',
    paragraph:
      'Explore Renyi equipment in real applications, from mine-shaft construction and heavy-vehicle repair to structural retrofit and specialized equipment commissioning.',
    link: 'View all cases',
  },
  ru: {
    eyebrow: 'Проекты и опыт поставок',
    title: 'Реализованные проекты',
    paragraph:
      'Практическое применение оборудования Renyi: шахтные стволы, ремонт тяжелой техники, модернизация конструкций, монтаж и наладка спецоборудования.',
    link: 'Все проекты',
  },
  es: {
    eyebrow: 'Proyectos y experiencia de entrega',
    title: 'Casos de éxito',
    paragraph:
      'Aplicaciones reales de equipos Renyi: pozos mineros, reparación de vehículos pesados, modernización estructural e instalación de equipos especiales.',
    link: 'Ver todos los casos',
  },
};

const solutionCopies: Record<Locale, SolutionCopy> = {
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

const productCategoryCopies: Record<Locale, ProductCategoryCopy> = {
  zh: {
    label: '产品分类',
    title: '天井钻机系列',
    description:
      '有轨式天井钻机，又称反井钻机，是专门为地下矿山及竖井工程而设计的一种全液压驱动、滚刀破岩、远程遥控的全断面成井设备，既可以用于向下钻导向孔、向上扩孔，又可以直接切割一次成井，还能利用配备的接卸杆机械手自动提取和运送钻杆。水电、冶金、地铁、交通等地下工程的竖井施工也可以使用，用途十分广泛。',
    buttons: ['天井钻机系列', '油缸悬挂系列', '专用设备系列', '选矿设备系列', '结构件系列'],
    buttonHrefs: ['/zuanjixilie/', '/yougangxuangua/', '/pro_category/dexiafuwuche/', '/fuxuanjixilie/', '/pro_category/zaoyantaiche/'],
    imageAlts: [
      '全液压有轨式天井钻机又称反井钻机在地下矿山竖井工程现场作业',
      '矿山设备油缸悬挂系统与工程机械部件实拍图',
      '矿山专用设备及重型机械维修辅助设备在矿区现场展示图',
      '矿山选矿设备及管路系统在矿区现场的安装应用图',
      '矿山工程机械结构件、铲斗和大型焊接部件展示图',
    ],
    slideDescriptions: {
      1: '仁毅机械专注于大型机械设备液压缸和油气悬挂系统制造，产品覆盖工程机械与特种车辆两大应用方向。我们可为挖掘机、推土机、装载机、平地机，以及30-60吨铰卡、50-400吨矿卡提供大臂油缸、小臂油缸、铲斗油缸、前后悬挂缸、举升缸、转向缸等总成及配件。产品可适配主流工程机械与矿用车辆，并可承担从备件国产化替代到新产品定制开发，为矿山、工程施工及重型运输设备提供可靠液压解决方案。',
      2: '仁毅机械为您提供专业的大型轮胎维护解决方案，主营门架式与多条件式轮辋拆装机。该系列设备专为解决矿卡、港口机械等特种车辆可覆盖20-63英寸等大型轮胎的拆卸难题而设计。凭借高强度结构与自动化/液压驱动技术，我们的拆装机能实现安全、无损、高效的轮胎维护，大幅降低维修劳动强度与时间成本。广泛应用于汽车维修厂、矿山修理厂及轮胎制造领域，是您提升车队运营效率的必备维护利器。',
      3: '仁毅机械专业生产高效充气搅拌式浮选机，广泛应用于有色金属、黑色金属及非金属矿物的选别作业。该设备采用外部强制充气与机械搅拌分离的独特设计，有效提升矿浆混合效果，确保稳定的泡沫层。具备处理能力强、精矿回收率高及低能耗等核心优势。其占地面积小、备件磨损少，是您实现低品位矿石高效回收、降低选矿成本、提升矿山经济效益的理想环保节能选矿设备。',
      4: '仁毅机械专业承接大型矿用车辆及工程机械的高强度结构件定制与生产。我们的核心产品涵盖矿用电动轮自卸车后桥壳、铰接式矿用车辆车斗以及各类高承载副车架等关键部件。依托精湛的重型焊接工艺与大型机加工能力，我们的结构件均采用优质高强度钢材制造，具备卓越的抗疲劳与抗冲击性能。我们致力于为矿山及工程客户提供高精度的结构件国产化替代方案，全面保障您重型设备在极端恶劣工况下的结构安全与长效运行。',
    },
  },
  en: {
    label: 'Product Category',
    title: 'Raise Boring Machinery Series',
    description:
      'Rail-mounted raise boring rigs are full-face shaft construction machines designed for underground mines and shaft engineering. With full hydraulic drive, cutter-based rock breaking, and remote-control operation, they can drill pilot holes downward, ream upward, directly cut a shaft in one pass, and automatically extract and transport drill rods with the equipped rod-handling manipulator. They are also suitable for shaft construction in underground works such as hydropower, metallurgy, metro, and transportation projects.',
    buttons: [
      'Raise Boring Machinery Series',
      'Hydraulic Cylinder & Suspension Series',
      'Special Equipment Series',
      'Mineral Processing Equipment Series',
      'Structural Components Series',
    ],
    buttonHrefs: ['/zuanjixilie/', '/yougangxuangua/', '/pro_category/dexiafuwuche/', '/fuxuanjixilie/', '/pro_category/zaoyantaiche/'],
    imageAlts: [
      'Full hydraulic rail-mounted raise boring machine for underground mine shaft construction',
      'Mining machinery hydraulic cylinder and suspension components for heavy equipment',
      'Special mining equipment and heavy machinery maintenance support systems at a mine site',
      'Mineral processing equipment and slurry pipeline system installed at a mining site',
      'Structural components, buckets, and welded assemblies for mining and engineering machinery',
    ],
    slideDescriptions: {
      1: 'Renyi Machinery specializes in hydraulic cylinders and hydro-pneumatic suspension systems for large machinery, covering both construction machinery and special vehicles. We supply boom cylinders, arm cylinders, bucket cylinders, front and rear suspension cylinders, hoist cylinders, steering cylinders, assemblies, and spare parts for excavators, bulldozers, loaders, graders, 30-60 ton articulated trucks, and 50-400 ton mining trucks. Our products support mainstream construction and mining vehicle platforms, and we support localized spare-part replacement and custom development of new products for mining, engineering construction, and heavy-duty transport equipment.',
      2: 'Renyi Machinery provides professional large tire maintenance solutions, specializing in gantry-type and multi-condition rim dismounting machines. This series is designed to solve the challenges of dismantling large tires covering 20-63 inches and similar sizes for mining trucks, port machinery, and other special vehicles. With high-strength structures and automated/hydraulic drive technology, our machines deliver safe, damage-free, and efficient tire maintenance, greatly reducing repair labor intensity and time costs. Widely used in automotive repair shops, mine repair workshops, and tire manufacturing, they are essential maintenance equipment for improving fleet operating efficiency.',
      3: 'Renyi Machinery manufactures efficient forced-air mechanical flotation machines for the separation of non-ferrous metals, ferrous metals, and non-metallic minerals. The equipment adopts a distinctive design that separates external forced aeration from mechanical agitation, improving slurry mixing and maintaining a stable froth layer. With strong processing capacity, high concentrate recovery, and low energy consumption, it also features a compact footprint and reduced wear of spare parts. It is an ideal energy-saving and environmentally friendly mineral processing solution for efficient recovery of low-grade ores, lower processing costs, and improved mine economics.',
      4: 'Renyi Machinery undertakes the customization and production of high-strength structural components for large mining vehicles and construction machinery. Core products include heavy rear axle housings for mining electric-drive truck rear axle housings, articulated mining truck bodies, and high-load subframes. Supported by heavy-duty welding expertise and large-scale machining capabilities, our structural parts are manufactured from premium high-strength steel and deliver excellent fatigue and impact resistance. We provide mining and engineering customers with high-precision localized replacement solutions that help ensure structural safety and long-term operation of heavy equipment under extreme conditions.',
    },
  },
  ru: {
    label: 'Категория продукции',
    title: 'Серия установок для восстающих выработок',
    description:
      'Рельсовые установки для проходки восстающих и обратных стволов предназначены для подземных рудников и шахтного строительства. Это полнопрофильное оборудование с полностью гидравлическим приводом, разрушением породы шарошечными резцами и дистанционным управлением. Оно может бурить направляющие скважины вниз, расширять их вверх, выполнять одноэтапную проходку ствола, а также автоматически извлекать и перемещать буровые штанги с помощью механического манипулятора. Оборудование также применяется при строительстве вертикальных стволов в подземных объектах гидроэнергетики, металлургии, метро и транспорта.',
    buttons: [
      'Серия установок для восстающих выработок',
      'Серия гидроцилиндров и подвесок',
      'Серия специального оборудования',
      'Серия обогатительного оборудования',
      'Серия металлоконструкций',
    ],
    buttonHrefs: ['/zuanjixilie/', '/yougangxuangua/', '/pro_category/dexiafuwuche/', '/fuxuanjixilie/', '/pro_category/zaoyantaiche/'],
    imageAlts: [
      'Полностью гидравлическая рельсовая установка raise boring для строительства шахтных стволов',
      'Гидроцилиндры и подвеска горной техники для тяжелого оборудования',
      'Специальное горное оборудование и вспомогательные системы обслуживания тяжелой техники на горной площадке',
      'Обогатительное оборудование и трубопроводная система на горнодобывающей площадке',
      'Металлоконструкции, ковши и сварные узлы для горной и инженерной техники',
    ],
    slideDescriptions: {
      1: 'Renyi Machinery специализируется на производстве гидроцилиндров и гидропневматических подвесных систем для крупной техники, охватывая строительную технику и специальные транспортные средства. Мы поставляем цилиндры стрелы, рукояти и ковша, передние и задние цилиндры подвески, подъемные и рулевые цилиндры, узлы и комплектующие для экскаваторов, бульдозеров, погрузчиков, грейдеров, сочлененных самосвалов 30-60 тонн и карьерных самосвалов 50-400 тонн. Продукция может применяться на оборудовании основных строительных и карьерных машинах, а также поддерживает локализованную замену запасных частей и индивидуальную разработку новых изделий для горнодобывающей, строительной и тяжелой транспортной техники.',
      2: 'Renyi Machinery предлагает профессиональные решения для обслуживания крупногабаритных шин, специализируясь на портальных и многофункциональных станках для демонтажа ободов. Эта серия предназначена для решения задач демонтажа крупных шин, включая размеры 20-63 дюйма и аналогичные, на карьерных самосвалах, портовой технике и других специальных транспортных средствах. Благодаря высокопрочной конструкции и автоматизированному/гидравлическому приводу оборудование обеспечивает безопасное, эффективное обслуживание шин без повреждений, значительно снижая трудоемкость ремонта и затраты времени. Оно широко применяется в автосервисах, ремонтных мастерских рудников и производстве шин, помогая повышать эффективность эксплуатации автопарка.',
      3: 'Renyi Machinery производит эффективные флотационные машины с принудительной аэрацией и механическим перемешиванием для обогащения цветных, черных и неметаллических минералов. Оборудование использует конструкцию с разделением внешней принудительной подачи воздуха и механического перемешивания, что улучшает смешивание пульпы и обеспечивает стабильный пенный слой. Оно отличается высокой производительностью, высоким извлечением концентрата и низким энергопотреблением, а также компактной площадью установки и меньшим износом запасных частей. Это энергосберегающее и экологичное решение для эффективного извлечения низкосортных руд, снижения затрат на обогащение и повышения экономической эффективности рудника.',
      4: 'Компания Renyi Machinery выполняет изготовление на заказ и производство высокопрочных металлоконструкций для крупногабаритных карьерных автомобилей и строительной техники. Основная продукция включает тяжелые корпуса задних мостов для карьерных электросамосвалов, кузова сочлененных карьерных самосвалов, а также различные высоконагруженные подрамники и другие ключевые узлы. Благодаря отработанной технологии тяжелой сварки и возможностям крупногабаритной механической обработки наши конструкционные детали изготавливаются из качественной высокопрочной стали и обладают высокой усталостной прочностью и ударостойкостью. Мы предлагаем горнодобывающим и строительным заказчикам высокоточные решения локализованной замены структурных компонентов, обеспечивая безопасность конструкции и длительную эксплуатацию тяжелого оборудования в крайне тяжелых условиях.',
    },
  },
  es: {
    label: 'Categoría de producto',
    title: 'Serie de equipos raise boring',
    description:
      'Las perforadoras sobre carriles para chimeneas y pozos están diseñadas para minas subterráneas y obras de pozos verticales. Son equipos de excavación de sección completa con accionamiento hidráulico, rotura de roca mediante cortadores y control remoto. Pueden perforar taladros piloto hacia abajo, escariar hacia arriba, cortar directamente el pozo en una sola operación y extraer y transportar automáticamente las barras de perforación mediante el manipulador incorporado. También se aplican en pozos de obras subterráneas de hidroenergía, metalurgia, metro y transporte.',
    buttons: [
      'Serie de equipos raise boring',
      'Serie de cilindros hidráulicos y suspensión',
      'Serie de equipos especiales',
      'Serie de equipos de beneficio mineral',
      'Serie de componentes estructurales',
    ],
    buttonHrefs: ['/zuanjixilie/', '/yougangxuangua/', '/pro_category/dexiafuwuche/', '/fuxuanjixilie/', '/pro_category/zaoyantaiche/'],
    imageAlts: [
      'Equipo raise boring hidráulico sobre carriles para construcción de pozos en minas subterráneas',
      'Cilindros hidráulicos y componentes de suspensión para maquinaria minera pesada',
      'Equipos especiales mineros y sistemas auxiliares de mantenimiento de maquinaria pesada en una mina',
      'Equipo de beneficio mineral y sistema de tuberías instalado en una mina',
      'Componentes estructurales, cucharones y conjuntos soldados para maquinaria minera e ingeniería',
    ],
    slideDescriptions: {
      1: 'Renyi Machinery se especializa en cilindros hidráulicos y sistemas de suspensión hidroneumática para maquinaria pesada, cubriendo maquinaria de construcción y vehículos especiales. Suministramos cilindros de pluma, brazo y cuchara, cilindros de suspensión delanteros y traseros, cilindros de elevación, cilindros de dirección, conjuntos y repuestos para excavadoras, bulldozers, cargadoras, motoniveladoras, camiones articulados de 30-60 toneladas y camiones mineros de 50-400 toneladas. Los productos pueden adaptarse a equipos principales de maquinaria de construcción y vehículos mineros convencionales, y cubrimos la sustitución localizada de repuestos y el desarrollo personalizado de nuevos productos para minería, construcción y transporte pesado.',
      2: 'Renyi Machinery ofrece soluciones profesionales para el mantenimiento de neumáticos de gran tamaño, especializada en desmontadoras de llantas tipo pórtico y para múltiples condiciones de trabajo. Esta serie está diseñada para resolver la dificultad de desmontar neumáticos grandes que cubren 20-63 pulgadas y tamaños similares en camiones mineros, maquinaria portuaria y otros vehículos especiales. Gracias a su estructura de alta resistencia y a la tecnología de accionamiento automatizado/hidráulico, nuestros equipos permiten un mantenimiento de neumáticos seguro, sin daños y eficiente, reduciendo considerablemente la intensidad del trabajo y el tiempo de reparación. Se utilizan ampliamente en talleres de reparación automotriz, talleres de mantenimiento minero y fabricación de neumáticos, como equipos esenciales para mejorar la eficiencia operativa de las flotas.',
      3: 'Renyi Machinery fabrica máquinas de flotación eficientes con aireación forzada y agitación mecánica, ampliamente utilizadas en la separación de metales no ferrosos, metales ferrosos y minerales no metálicos. El equipo adopta un diseño especial que separa la aireación forzada externa de la agitación mecánica, mejorando la mezcla de la pulpa y asegurando una capa de espuma estable. Ofrece gran capacidad de procesamiento, alta recuperación de concentrado y bajo consumo energético, además de ocupar poco espacio y reducir el desgaste de repuestos. Es una solución de beneficio mineral ecológica y de bajo consumo para recuperar minerales de baja ley, reducir costos de procesamiento y mejorar la rentabilidad minera.',
      4: 'Renyi Machinery realiza la personalización y producción de componentes estructurales de alta resistencia para grandes vehículos mineros y maquinaria de ingeniería. Nuestros productos principales incluyen carcasas de eje trasero para camiones mineros eléctricos, cajas de camión minero articulado y diversos subchasis de alta carga. Con procesos avanzados de soldadura pesada y capacidad de mecanizado de gran tamaño, nuestras piezas estructurales se fabrican con acero de alta resistencia de primera calidad y ofrecen excelente resistencia a la fatiga y al impacto. Ofrecemos a clientes mineros y de ingeniería soluciones de sustitución localizada de componentes estructurales de alta precisión, ayudando a garantizar la seguridad estructural y la operación prolongada de equipos pesados en condiciones extremas.',
    },
  },
};

const homeIntroCopies: Record<Locale, HomeIntroCopy> = {
  zh: {
    company: '长沙仁毅机械制造有限公司',
    title: '矿山与工程专用设备制造商',
    subtitle: 'Specialized machinery for demanding worksites',
    paragraph:
      '长沙仁毅机械制造有限公司秉持“仁者弘毅”精神，专注专业矿山装备研发制造与工程机械备件国产化。公司拥有勇于开拓创新的研发制造团队，配套大型加工设备和完善检测手段，可提供天井钻机、潜孔钻机、特种油缸、结构件及进口工程机械部件修复改进等产品与服务。',
    moreText: '提交工况',
    links: [
      { text: '公司简介', href: '/guanyuxingye/#a1' },
      { text: '企业文化', href: '/guanyuxingye/#a2' },
      { text: '发展历程', href: '/guanyuxingye/#a4' },
    ],
  },
  en: {
    company: 'Changsha Renyi Machinery Manufacturing Co., Ltd',
    title: 'Specialized Equipment for Mining & Engineering',
    subtitle: 'R&D and manufacturing for demanding worksites',
    paragraph:
      'Changsha Renyi Machinery Manufacturing Co., Ltd. is a high-tech enterprise guided by perseverance and responsibility. The company focuses on professional mining equipment and localized engineering machinery parts, supported by senior engineers, skilled technicians, large-scale machining equipment, and complete inspection capabilities for demanding industrial worksites.',
    moreText: 'Submit Requirements',
    links: [
      { text: 'Company Profile', href: '/en/guanyuxingye/#a1' },
      { text: 'Corporate Culture', href: '/en/guanyuxingye/#a2' },
      { text: 'Development History', href: '/en/guanyuxingye/#a4' },
    ],
  },
  ru: {
    company: 'Changsha Renyi Machinery Manufacturing Co., Ltd',
    title: 'Спецоборудование для горных и инженерных работ',
    subtitle: 'Разработка и производство для сложных условий эксплуатации',
    paragraph:
      'Changsha Renyi Machinery Manufacturing Co., Ltd. — высокотехнологичное предприятие, ориентированное на профессиональное горное оборудование и локализацию запасных частей для строительной техники. Команда инженеров и техников, крупное обрабатывающее оборудование и система контроля качества обеспечивают решения для сложных промышленных объектов.',
    moreText: 'Отправить задачу',
    links: [
      { text: 'О компании', href: '/ru/guanyuxingye/#a1' },
      { text: 'Корпоративная культура', href: '/ru/guanyuxingye/#a2' },
      { text: 'История развития', href: '/ru/guanyuxingye/#a4' },
    ],
  },
  es: {
    company: 'Changsha Renyi Machinery Manufacturing Co., Ltd',
    title: 'Equipos especializados para minería e ingeniería',
    subtitle: 'Investigación y fabricación para trabajos exigentes',
    paragraph:
      'Changsha Renyi Machinery Manufacturing Co., Ltd. es una empresa de alta tecnología dedicada a equipos mineros profesionales y repuestos localizados para maquinaria de ingeniería. Con ingenieros y técnicos senior, equipos de mecanizado de gran escala y control de calidad completo, ofrece soluciones para entornos industriales exigentes.',
    moreText: 'Enviar requisitos',
    links: [
      { text: 'Perfil de la empresa', href: '/es/guanyuxingye/#a1' },
      { text: 'Cultura corporativa', href: '/es/guanyuxingye/#a2' },
      { text: 'Historia de desarrollo', href: '/es/guanyuxingye/#a4' },
    ],
  },
};

const newsCenterCopies: Record<Locale, NewsCenterCopy> = {
  zh: {
    eyebrow: '精铸基石，智联全球',
    title: '新闻中心',
    intro: '同步捕捉中国与全球矿山装备、工程机械、资本市场与制造业升级动态，为出口型 B2B 客户提供可检索、可分发的行业信息入口。',
    marketEyebrow: 'MACRO MARKET WATCH',
    marketTitle: '矿山装备与制造业行情观察',
    marketSubtitle: '用于嵌入 TradingView Advanced Chart Widget，展示宏观行情与制造业市场走势。',
    chartPlaceholder: 'TradingView Advanced Chart Widget 占位区域',
    news: [
      {
        title: '全球地下矿山项目持续关注天井钻机与竖井装备',
        datetime: '2026-04-12',
        summary:
          '随着深部开采、竖井建设和跨区域矿山投资推进，具备远程控制、全液压驱动和稳定扩孔能力的专用装备正在成为海外项目方关注重点。',
        href: '/category/renyixinwen/',
      },
      {
        title: '海外工程机械客户更重视交付一致性与质量追溯',
        datetime: '2026-03-28',
        summary:
          '面向跨境采购和复杂工况设备，制造企业正在从单点加工能力转向工艺、检测、追溯一体化管理，帮助客户降低后期维护风险。',
        href: '/category/renyixinwen/',
      },
      {
        title: '全球矿山设备运营更关注液压系统长期可靠性',
        datetime: '2026-02-19',
        summary:
          '在高载荷、高粉尘和连续作业环境下，油缸、阀组及管路系统的设计与维护能力直接影响海外矿山设备出勤率和项目安全边界。',
        href: '/category/renyixinwen/',
      },
      {
        title: '工程机械备件国产化为海外矿山维修提供替代选择',
        datetime: '2026-01-30',
        summary:
          '具备制造和修复能力的中国供应商可为海外客户缩短采购周期，并提供更灵活的结构件、油缸及专用设备改进方案。',
        href: '/category/renyixinwen/',
      },
      {
        title: '智能制造与预测性维护正在影响全球矿山装备服务',
        datetime: '2025-12-18',
        summary:
          '设备联网、运行数据分析和预测性维护正在成为全球矿山客户降低停机风险、提升全生命周期价值的重要抓手。',
        href: '/category/renyixinwen/',
      },
    ],
  },
  en: {
    eyebrow: 'Built in China. Serving global worksites.',
    title: 'News Center',
    intro: 'Industry news, equipment insights, and market context for B2B buyers in mining and heavy machinery.',
    marketEyebrow: 'MACRO MARKET WATCH',
    marketTitle: 'Mining Equipment & Manufacturing Market Watch',
    marketSubtitle: 'Reserved for the TradingView Advanced Chart Widget and macro market context.',
    chartPlaceholder: 'TradingView Advanced Chart Widget placeholder',
    news: [
      {
        title: 'Raise boring equipment demand expands across underground mining projects',
        datetime: '2026-04-12',
        summary:
          'Deeper mine development and shaft construction are increasing demand for remote-controlled, hydraulic, full-face raise boring solutions.',
        href: '/en/category/renyixinwen/',
      },
      {
        title: 'Digital manufacturing improves heavy machinery consistency and delivery quality',
        datetime: '2026-03-28',
        summary:
          'Manufacturers are connecting machining, inspection, and traceability to help industrial customers reduce maintenance risk.',
        href: '/en/category/renyixinwen/',
      },
      {
        title: 'Hydraulic reliability becomes a key metric for long-cycle mining equipment',
        datetime: '2026-02-19',
        summary:
          'Cylinder, valve, and piping design quality directly affects uptime, safety, and lifecycle service in demanding worksites.',
        href: '/en/category/renyixinwen/',
      },
      {
        title: 'Localized spare parts speed up mining equipment maintenance response',
        datetime: '2026-01-30',
        summary:
          'Localized manufacturing and repair programs shorten lead times while supporting flexible improvement plans for customers.',
        href: '/en/category/renyixinwen/',
      },
      {
        title: 'Smart manufacturing and predictive maintenance reshape mining equipment service',
        datetime: '2025-12-18',
        summary:
          'Connected equipment, operating data, and predictive service programs help mining customers reduce downtime risk across the lifecycle.',
        href: '/en/category/renyixinwen/',
      },
    ],
  },
  ru: {
    eyebrow: 'Производство в Китае. Решения для глобальных объектов.',
    title: 'Новости',
    intro: 'Новости отрасли, технические материалы и рыночный контекст для B2B-заказчиков горной и тяжелой техники.',
    marketEyebrow: 'MACRO MARKET WATCH',
    marketTitle: 'Обзор рынка горного оборудования и машиностроения',
    marketSubtitle: 'Зона для виджета TradingView Advanced Chart и рыночного контекста.',
    chartPlaceholder: 'Место для TradingView Advanced Chart Widget',
    news: [
      {
        title: 'Спрос на raise boring оборудование растет в подземных горных проектах',
        datetime: '2026-04-12',
        summary:
          'Развитие глубоких рудников и шахтных объектов усиливает потребность в дистанционно управляемом гидравлическом оборудовании.',
        href: '/ru/category/renyixinwen/',
      },
      {
        title: 'Цифровое производство повышает стабильность тяжелого машиностроения',
        datetime: '2026-03-28',
        summary:
          'Интеграция обработки, контроля и прослеживаемости помогает промышленным клиентам снижать риски обслуживания.',
        href: '/ru/category/renyixinwen/',
      },
      {
        title: 'Надежность гидравлики становится ключевым показателем для горной техники',
        datetime: '2026-02-19',
        summary:
          'Качество цилиндров, клапанов и трубопроводов напрямую влияет на готовность оборудования и безопасность объекта.',
        href: '/ru/category/renyixinwen/',
      },
      {
        title: 'Локализация запчастей ускоряет обслуживание горного оборудования',
        datetime: '2026-01-30',
        summary:
          'Местное производство и ремонт сокращают сроки поставки и поддерживают гибкие программы модернизации.',
        href: '/ru/category/renyixinwen/',
      },
      {
        title: 'Умное производство и прогнозное обслуживание обновляют сервис горной техники',
        datetime: '2025-12-18',
        summary:
          'Подключенное оборудование, анализ данных и прогнозное обслуживание помогают снижать риски простоя на всем жизненном цикле.',
        href: '/ru/category/renyixinwen/',
      },
    ],
  },
  es: {
    eyebrow: 'Fabricado en China. Para obras globales.',
    title: 'Centro de noticias',
    intro: 'Noticias industriales, análisis técnico y contexto de mercado para compradores B2B de minería y maquinaria pesada.',
    marketEyebrow: 'MACRO MARKET WATCH',
    marketTitle: 'Vista del mercado de equipos mineros y manufactura',
    marketSubtitle: 'Espacio reservado para TradingView Advanced Chart Widget y contexto macro.',
    chartPlaceholder: 'Marcador para TradingView Advanced Chart Widget',
    news: [
      {
        title: 'La demanda de equipos raise boring crece en proyectos mineros subterráneos',
        datetime: '2026-04-12',
        summary:
          'El desarrollo de minas profundas y pozos incrementa la demanda de soluciones hidráulicas de sección completa con control remoto.',
        href: '/es/category/renyixinwen/',
      },
      {
        title: 'La fabricación digital mejora la consistencia de maquinaria pesada',
        datetime: '2026-03-28',
        summary:
          'La conexión entre mecanizado, inspección y trazabilidad ayuda a reducir riesgos de mantenimiento para clientes industriales.',
        href: '/es/category/renyixinwen/',
      },
      {
        title: 'La fiabilidad hidráulica es clave para maquinaria minera de largo ciclo',
        datetime: '2026-02-19',
        summary:
          'El diseño de cilindros, válvulas y tuberías impacta directamente en disponibilidad, seguridad y servicio de ciclo de vida.',
        href: '/es/category/renyixinwen/',
      },
      {
        title: 'Los repuestos localizados aceleran la respuesta de mantenimiento minero',
        datetime: '2026-01-30',
        summary:
          'La fabricación y reparación localizadas acortan plazos y permiten programas flexibles de mejora para clientes.',
        href: '/es/category/renyixinwen/',
      },
      {
        title: 'La fabricación inteligente y el mantenimiento predictivo elevan el servicio minero',
        datetime: '2025-12-18',
        summary:
          'Los equipos conectados, los datos operativos y el servicio predictivo ayudan a reducir riesgos de parada durante el ciclo de vida.',
        href: '/es/category/renyixinwen/',
      },
    ],
  },
};

function getLocale(pathname: string) {
  const clean = pathname.split('#')[0]?.split('?')[0] || '/';
  const normalized = clean.replace(/\/+/g, '/');
  const path = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return HOME_PATH_LOCALES[path] ?? null;
}

function withLocalePath(pathname: string, locale: Locale) {
  return locale === 'zh' ? pathname : `/${locale}${pathname}`;
}

function homeIntroSection(copy: HomeIntroCopy, locale: Locale) {
  return `
    <div class="ind01 page-col-space renyi-home-intro renyi-home-intro-${locale}">
      <div class="container">
        <div class="row row-40">
          <div class="col-md-11 mb30">
            <div class="ind01-txt">
              <p>${copy.company}</p>
              <div class="page-txtbig mb30">
                <div class="txt01">${copy.title}</div>
                <div class="txt02">${copy.subtitle}</div>
              </div>
              <p class="ind01-text mb40">${copy.paragraph}</p>
              <a class="ind01-more go-inquiry" href="${withLocalePath('/lianxiwomen/#a2', locale)}"><span>${copy.moreText}</span></a>
            </div>
          </div>
          <div class="col-md-12 col-md-offset-1">
            <div class="ind01-img">
              <img class="img-w" src="${HOME_INTRO_FACTORY_IMAGE}" alt="">
              <ul>
                ${copy.links.map((link) => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function newsDateBadge(datetime: string) {
  const [year = '', month = '', day = ''] = datetime.split('-');
  const monthNumber = Number(month);
  const monthLabel = NEWS_MONTH_LABELS[monthNumber - 1] ?? month;

  return {
    day,
    monthYear: `${monthLabel} / ${year}`,
  };
}

function homeCaseMarqueeSection(locale: Locale) {
  const copy = homeCaseCopies[locale];
  const indexHref = withLocalePath('/anlizhanshi/', locale);
  const renderGroup = (duplicate: boolean) => `
    <div class="renyi-home-cases__group"${duplicate ? ' aria-hidden="true"' : ''}>
      ${RENYI_CASE_PROJECTS.map((project) => {
        const title = project.title[locale];
        const href = withLocalePath(`/anlizhanshi/${project.slug}/`, locale);

        return `
          <a class="renyi-home-case" href="${escapeHtmlAttribute(href)}"${duplicate ? ' tabindex="-1"' : ''}>
            <span class="renyi-home-case__media">
              <img src="${escapeHtmlAttribute(project.coverImage)}" alt="${escapeHtmlAttribute(title)}" loading="lazy">
            </span>
            <span class="renyi-home-case__copy">
              <span class="renyi-home-case__category">${escapeHtmlText(project.category[locale])}</span>
              <strong>${escapeHtmlText(title)}</strong>
            </span>
          </a>
        `;
      }).join('')}
    </div>
  `;

  return `
    <section class="renyi-home-cases renyi-home-cases--${locale}" aria-labelledby="renyi-home-cases-title">
      <div class="container renyi-home-cases__layout">
        <div class="renyi-home-cases__intro">
          <div class="renyi-home-cases__heading">
            <p class="renyi-home-cases__eyebrow">${escapeHtmlText(copy.eyebrow)}</p>
            <h2 id="renyi-home-cases-title">${escapeHtmlText(copy.title)}</h2>
          </div>
          <p class="renyi-home-cases__description">${escapeHtmlText(copy.paragraph)}</p>
          <a class="renyi-home-cases__link" href="${escapeHtmlAttribute(indexHref)}">${escapeHtmlText(copy.link)}<span aria-hidden="true">›</span></a>
        </div>
        <div class="renyi-home-cases__marquee" aria-label="${escapeHtmlAttribute(copy.title)}">
          <div class="renyi-home-cases__track">
            ${renderGroup(false)}
            ${renderGroup(true)}
          </div>
        </div>
      </div>
    </section>
  `;
}

function homeNewsSection(copy: NewsCenterCopy, locale: Locale) {
  const liveNewsAttr = ' data-renyi-live-news="cat"';

  return `
    <section class="renyi-news-center bg-white text-slate-900" aria-labelledby="renyi-news-title">
      <div class="renyi-news-shell mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="renyi-news-two-column" style="display:grid;grid-template-columns:minmax(320px,34%) minmax(0,66%);gap:32px;align-items:stretch;">
          <section class="renyi-news-panel rounded-md border border-[#e5e7eb] bg-white shadow-sm" aria-label="${copy.title}">
            <div class="renyi-news-heading border-b border-[#e5e7eb]">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#003366]">${copy.eyebrow}</p>
              <h2 id="renyi-news-title" class="mt-3 text-4xl font-bold text-slate-900">${copy.title}</h2>
              <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">${copy.intro}</p>
            </div>

            <div class="renyi-news-list" aria-label="${copy.title}" data-renyi-news-locale="${locale}"${liveNewsAttr} data-renyi-news-limit="5">
              ${copy.news
                .map((item) => {
                  const dateBadge = newsDateBadge(item.datetime);

                  return `
                    <article class="renyi-news-row group flex flex-row border-b border-[#e5e7eb] last:border-b-0">
                      <a class="renyi-news-row-link" href="${item.href}">
                        <div class="renyi-news-date-badge w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                          <span class="renyi-news-date-day">${dateBadge.day}</span>
                          <span class="renyi-news-date-meta">${dateBadge.monthYear}</span>
                        </div>
                        <div class="renyi-news-copy min-w-0">
                          <h3 class="text-xl font-bold leading-snug text-slate-900">${item.title}</h3>
                          <p class="mt-3 text-base leading-7 text-slate-600">${item.summary}</p>
                        </div>
                      </a>
                    </article>
                  `;
                })
                .join('')}
            </div>
          </section>

          <aside class="renyi-market-card rounded-md border border-[#e5e7eb] bg-white shadow-sm">
            <div class="renyi-market-card-header border-b border-[#e5e7eb]">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#003366]">${copy.marketEyebrow}</p>
              <h2 class="mt-2 text-2xl font-bold text-slate-900">${copy.marketTitle}</h2>
              <p class="mt-3 text-sm leading-6 text-slate-500">${copy.marketSubtitle}</p>
            </div>
            <div class="renyi-tradingview-shell">
              <div class="tradingview-widget-container renyi-cat-chart" data-renyi-tradingview-cat="true">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright">
                  <a href="https://www.tradingview.com/symbols/NYSE-CAT/?utm_source=renyi.local&amp;utm_medium=widget_new&amp;utm_campaign=advanced-chart" rel="noopener nofollow" target="_blank">
                    <span class="blue-text">CAT stock chart</span>
                  </a>
                  <span class="trademark"> by TradingView</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function homeAcquisitionSection(locale: Locale) {
  const copies = {
    zh: {
      title: '从现场问题开始匹配方案',
      intro: '不局限于现有产品。提交设备型号、故障或目标工况，我们按设计、制造、修复和现场服务能力评估。',
      items: ['非标设备与新产品定制', '进口备件国产化', '大型部件修复与再制造', '整车维修与现场维保', '矿山专用拆装与改造装备'],
      primary: '提交工况',
      secondary: '查看全部产品',
    },
    en: {
      title: 'Start with the worksite problem',
      intro: 'Send the equipment model, failure, or target condition. We assess it across engineering, manufacturing, repair, and field service.',
      items: ['Custom equipment development', 'Localization of imported parts', 'Large-component repair and remanufacturing', 'Vehicle overhaul and field maintenance', 'Dedicated dismantling and retrofit equipment'],
      primary: 'Submit Requirements',
      secondary: 'View All Products',
    },
    ru: {
      title: 'Начните с задачи на площадке',
      intro: 'Отправьте модель оборудования, неисправность или условия работы. Мы оценим проектирование, производство, ремонт и сервис.',
      items: ['Разработка нестандартного оборудования', 'Локализация импортных деталей', 'Ремонт и восстановление крупных узлов', 'Капремонт техники и выездной сервис', 'Спецоборудование для демонтажа и модернизации'],
      primary: 'Отправить задачу',
      secondary: 'Вся продукция',
    },
    es: {
      title: 'Empiece por el problema de campo',
      intro: 'Envíe el modelo, la avería o la condición objetivo. Evaluamos diseño, fabricación, reparación y servicio en campo.',
      items: ['Desarrollo de equipos a medida', 'Localización de repuestos importados', 'Reparación y remanufactura de grandes componentes', 'Revisión de vehículos y mantenimiento en campo', 'Equipos especiales de desmontaje y modernización'],
      primary: 'Enviar requisitos',
      secondary: 'Ver productos',
    },
  } as const;
  const copy = copies[locale];

  return `
    <section class="renyi-acquisition" aria-labelledby="renyi-acquisition-title">
      <div class="container renyi-acquisition-layout">
        <div class="renyi-acquisition-intro">
          <h2 id="renyi-acquisition-title">${escapeHtmlText(copy.title)}</h2>
          <p>${escapeHtmlText(copy.intro)}</p>
          <div class="renyi-acquisition-actions">
            <a class="renyi-acquisition-primary go-inquiry" href="${withLocalePath('/lianxiwomen/#a2', locale)}">${escapeHtmlText(copy.primary)}</a>
            <a class="renyi-acquisition-secondary" href="${withLocalePath('/chanpinzhanshi/', locale)}">${escapeHtmlText(copy.secondary)}</a>
          </div>
        </div>
        <ol class="renyi-acquisition-list">
          ${copy.items.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtmlText(item)}</strong></li>`).join('')}
        </ol>
      </div>
    </section>
  `;
}

function replaceHtmlElement(html: string, openingTag: string, replacement: string) {
  const start = html.indexOf(openingTag);
  if (start === -1) {
    return html;
  }

  const tagPattern = /<\/?div\b[^>]*>/gi;
  tagPattern.lastIndex = start;

  let depth = 0;
  let match: RegExpExecArray | null = tagPattern.exec(html);

  while (match) {
    const tag = match[0];
    if (tag.startsWith('</')) {
      depth -= 1;
    } else if (!tag.endsWith('/>')) {
      depth += 1;
    }

    if (depth === 0) {
      return `${html.slice(0, start)}${replacement}${html.slice(match.index + tag.length)}`;
    }

    match = tagPattern.exec(html);
  }

  return html;
}

function escapeHtmlAttribute(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function patchProductCategorySemantics(html: string, locale: Locale, copy: ProductCategoryCopy) {
  const openingTag = `<div class="ind02 renyi-ind02 renyi-ind02--${locale}">`;
  const start = html.indexOf(openingTag);

  if (start === -1) {
    return html;
  }

  const end = findClosingDiv(html, start);

  if (end === -1) {
    return html;
  }

  let imageIndex = 0;
  let headingIndex = 0;
  let descriptionIndex = 0;
  let buttonIndex = 0;
  const section = html.slice(start, end);
  const updatedSection = section
    .replace(
      /<strong>\s*<span>([^<]*)<\/span>\s*([^<]*?)\s*<\/strong>/g,
      '<h2 class="renyi-product-category-heading"><span>$1</span>$2</h2>',
    )
    .replace(/<h2 class="renyi-product-category-heading"><span>[^<]*<\/span>[\s\S]*?<\/h2>/g, (match) => {
      const title = copy.buttons[headingIndex];
      headingIndex += 1;

      if (!title) {
        return match;
      }

      return `<h2 class="renyi-product-category-heading"><span>${escapeHtmlText(copy.label)}</span>${escapeHtmlText(title)}</h2>`;
    })
    .replace(/<div class="txt">[\s\S]*?<\/div>/g, (match) => {
      const description = copy.slideDescriptions?.[descriptionIndex];
      descriptionIndex += 1;

      if (!description) {
        return match;
      }

      return `<div class="txt"> ${escapeHtmlText(description)} </div>`;
    })
    .replace(/(<img\b[^>]*\bclass="[^"]*\bimgshow\b[^"]*"[^>]*\balt=")[^"]*("[^>]*>)/g, (match, before, after) => {
      const alt = copy.imageAlts[imageIndex];
      imageIndex += 1;

      if (!alt) {
        return match;
      }

      return `${before}${escapeHtmlAttribute(alt)}${after}`;
    })
    .replace(/(<div class="ind02-btn">\s*<a\b[^>]*\bhref=")[^"]*("[^>]*>)/g, (match, before, after) => {
      const href = copy.buttonHrefs[buttonIndex];
      buttonIndex += 1;

      if (!href) {
        return match;
      }

      return `${before}${escapeHtmlAttribute(withLocalePath(href, locale))}${after}`;
    });

  return `${html.slice(0, start)}${updatedSection}${html.slice(end)}`;
}

function patchProductCategoryHero(html: string, locale: Locale) {
  const copy = productCategoryCopies[locale];
  const htmlWithLocaleClass = html.replace(
    /<div class="ind02(?![^"]*\brenyi-ind02\b)([^"]*)">/,
    `<div class="ind02 renyi-ind02 renyi-ind02--${locale}$1">`,
  );
  const firstSlidePattern =
    /(<div class="ind02[^"]*">[\s\S]*?<img class="img-w imgshow" src=")[^"]*("[^>]*>[\s\S]*?<div class="titbox">\s*)<strong><span>[^<]*<\/span>[^<]*<\/strong>\s*<div class="txt">[\s\S]*?<\/div>/;
  const buttonBoxPattern = /(<div class="ind02-btn-box[^"]*">)[\s\S]*?(<\/div>)/;
  const buttonsHtml = copy.buttons
    .map(
      (label, index) =>
        `<a href="javascript:;"${index === 0 ? ' class="cur"' : ''}><i class="ifa ifa-icon-test1"></i>${escapeHtmlText(label)}</a>`,
    )
    .join(' ');

  const updatedHtml = htmlWithLocaleClass
    .replace(
      firstSlidePattern,
      `$1${PRODUCT_CATEGORY_SITE_IMAGE}$2<h2 class="renyi-product-category-heading"><span>${escapeHtmlText(copy.label)}</span>${escapeHtmlText(copy.title)}</h2> <div class="txt"> ${copy.description} </div>`,
    )
    .replace(
      /src="https:\/\/snapshot\.local(?:\/(?:en|ru|es))?\/wp-content\/uploads\/2024\/11\/UK-50\.jpg"/,
      `src="${PRODUCT_CATEGORY_SUSPENSION_IMAGE}"`,
    )
    .replace(
      /(<img class="img-w imgshow" src="[^"]*product-category-mining-dozer-1600x1067\.jpg\?v=20260428"[^>]*>[\s\S]*?<div class="titbox">\s*<strong><span>[^<]*<\/span>)[^<]*(<\/strong>)/,
      `$1${escapeHtmlText(copy.buttons[1] ?? '')}$2`,
    )
    .replace(
      /src="https:\/\/snapshot\.local(?:\/(?:en|ru|es))?\/wp-content\/uploads\/2024\/11\/CYTJ45-2\.jpg"/,
      `src="${PRODUCT_CATEGORY_SPECIAL_IMAGE}"`,
    )
    .replace(
      /src="https:\/\/snapshot\.local(?:\/(?:en|ru|es))?\/wp-content\/uploads\/2024\/11\/XMPYT-104-700\.jpg"/,
      `src="${PRODUCT_CATEGORY_MINERAL_IMAGE}"`,
    )
    .replace(
      /src="https:\/\/snapshot\.local(?:\/(?:en|ru|es))?\/wp-content\/uploads\/2024\/11\/FH-8\.jpg"/,
      `src="${PRODUCT_CATEGORY_STRUCTURAL_IMAGE}"`,
    )
    .replace(buttonBoxPattern, `$1 ${buttonsHtml} $2`);

  return patchProductCategorySemantics(updatedHtml, locale, copy);
}

function patchNewsCenter(html: string, locale: Locale) {
  return replaceHtmlElement(
    html,
    '<div class="ind04 page-col-space">',
    homeAcquisitionSection(locale),
  );
}

function patchHomeCaseMarquee(html: string, locale: Locale) {
  if (html.includes('class="renyi-home-cases')) {
    return html;
  }

  return html.replace(
    '<div class="ind03 page-col-space">',
    `${homeCaseMarqueeSection(locale)}<div class="ind03 page-col-space">`,
  );
}

function patchSolutionMapImage(html: string) {
  return html.replace(
    /(<div class="ind03 page-col-space">[\s\S]*?<div class="ind03-map">\s*<img class="img-w" src=")[^"]*ind03-bg\.jpg("[^>]*>)/,
    `$1${SOLUTION_MAP_IMAGE}$2`,
  );
}

function patchSolutionCopy(html: string, locale: Locale) {
  const copy = solutionCopies[locale];

  return html.replace(
    /(<div class="ind03 page-col-space">[\s\S]*?<div class="page-txtbig mb50">\s*<div class="txt01 fn">)[\s\S]*?(<\/div>\s*<div class="mt10">)[\s\S]*?(<\/div>\s*<\/div>)/,
    `$1${escapeHtmlText(copy.title)}$2${escapeHtmlText(copy.paragraph)}$3`,
  );
}

function findClosingDiv(html: string, startIndex: number) {
  const divTagPattern = /<\/?div\b[^>]*>/g;
  divTagPattern.lastIndex = startIndex;
  let depth = 0;
  let match: RegExpExecArray | null;

  while ((match = divTagPattern.exec(html))) {
    if (match[0].startsWith('</')) {
      depth -= 1;
    } else {
      depth += 1;
    }

    if (depth === 0) {
      return divTagPattern.lastIndex;
    }
  }

  return -1;
}

function removeLegacySolutionMapHotspots(html: string) {
  return ['btn01', 'btn02', 'btn03'].reduce((updatedHtml, className) => {
    const startNeedle = `<div class="btn-box ${className}">`;
    const startIndex = updatedHtml.indexOf(startNeedle);

    if (startIndex === -1) {
      return updatedHtml;
    }

    const endIndex = findClosingDiv(updatedHtml, startIndex);

    if (endIndex === -1) {
      return updatedHtml;
    }

    return `${updatedHtml.slice(0, startIndex)}${updatedHtml.slice(endIndex)}`;
  }, html);
}

export function patchRenyiHomeHtml(html: string, pathname: string) {
  const locale = getLocale(pathname);
  if (!locale) {
    return html;
  }

  const pattern = /<div class="ind01 page-col-space">[\s\S]*?<div class="ind02">/;
  return removeLegacySolutionMapHotspots(
    patchNewsCenter(
      patchSolutionCopy(
        patchSolutionMapImage(
          patchHomeCaseMarquee(
            patchProductCategoryHero(
              html.replace(pattern, `${homeIntroSection(homeIntroCopies[locale], locale)}<div class="ind02">`),
              locale,
            ),
            locale,
          ),
        ),
        locale,
      ),
      locale,
    ),
  );
}
