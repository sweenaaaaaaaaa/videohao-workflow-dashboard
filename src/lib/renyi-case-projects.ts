export type RenyiCaseLocale = 'zh' | 'en' | 'ru' | 'es';

type LocalizedText = Record<RenyiCaseLocale, string>;

export type RenyiCaseProject = {
  slug: string;
  code: string;
  title: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
  facts: Record<RenyiCaseLocale, Array<[string, string]>>;
  coverImage: string;
  images: string[];
  videos: string[];
};

function localized(zh: string, en: string, ru: string, es: string): LocalizedText {
  return { zh, en, ru, es };
}

function caseAssets(caseNumber: number, imageCount: number, videoCount = 0) {
  const directory = `/renyi/cases/case-${String(caseNumber).padStart(2, '0')}`;
  const images = Array.from({ length: imageCount }, (_, index) =>
    `${directory}/image-${String(index + 1).padStart(2, '0')}.jpg`,
  );
  const videos = Array.from({ length: videoCount }, (_, index) =>
    `${directory}/video-${String(index + 1).padStart(2, '0')}.mp4`,
  );

  return { images, videos };
}

const case01 = caseAssets(1, 4);
const case02 = caseAssets(2, 5, 1);
const case03 = caseAssets(3, 3);
const case04 = caseAssets(4, 4);
const case05 = caseAssets(5, 3);
const case06 = caseAssets(6, 3);
const case07 = caseAssets(7, 2);
const case08 = caseAssets(8, 4, 1);
const case09 = caseAssets(9, 17, 1);
const case10 = caseAssets(10, 1, 1);

export const RENYI_CASE_PROJECTS: RenyiCaseProject[] = [
  {
    slug: 'case-01',
    code: '3.1',
    title: localized(
      'AT2000天井钻机在山东宏达矿业施工',
      'AT2000 Raise Boring Rig at Shandong Hongda Mining',
      'AT2000 на объекте Shandong Hongda Mining',
      'Equipo AT2000 en Shandong Hongda Mining',
    ),
    category: localized('天井钻机施工', 'Raise boring', 'Бурение восстающих', 'Perforación raise boring'),
    location: localized('山东宏达矿业', 'Shandong, China', 'Шаньдун, Китай', 'Shandong, China'),
    summary: localized(
      'AT2000天井钻机用于地下垂直井施工，井深100米，成井直径2米。',
      'The AT2000 completed a 100 m underground vertical shaft with a 2 m finished diameter.',
      'AT2000 применялся для проходки подземного вертикального ствола глубиной 100 м и диаметром 2 м.',
      'El AT2000 ejecutó un pozo vertical subterráneo de 100 m de profundidad y 2 m de diámetro.',
    ),
    facts: {
      zh: [['施工性质', '地下施工'], ['井深', '100米'], ['直径', '2米'], ['角度', '90度'], ['岩石硬度', 'F12-F14']],
      en: [['Work type', 'Underground'], ['Shaft depth', '100 m'], ['Diameter', '2 m'], ['Angle', '90 degrees'], ['Rock hardness', 'F12-F14']],
      ru: [['Тип работ', 'Подземные'], ['Глубина', '100 м'], ['Диаметр', '2 м'], ['Угол', '90 градусов'], ['Крепость породы', 'F12-F14']],
      es: [['Tipo de obra', 'Subterránea'], ['Profundidad', '100 m'], ['Diámetro', '2 m'], ['Ángulo', '90 grados'], ['Dureza de roca', 'F12-F14']],
    },
    coverImage: case01.images[2]!,
    ...case01,
  },
  {
    slug: 'case-02',
    code: '3.2',
    title: localized(
      'AT2000天井钻机在广东阳江水电站施工',
      'AT2000 Raise Boring Rig at Yangjiang Hydropower Station',
      'AT2000 на объекте ГЭС Yangjiang',
      'Equipo AT2000 en la central hidroeléctrica de Yangjiang',
    ),
    category: localized('水电站斜井施工', 'Hydropower inclined shaft', 'Наклонный ствол ГЭС', 'Pozo inclinado hidroeléctrico'),
    location: localized('广东阳春阳江水电站', 'Guangdong, China', 'Гуандун, Китай', 'Guangdong, China'),
    summary: localized(
      'AT2000天井钻机在地下完成33度斜井施工，成井直径2米，岩石硬度F12。',
      'The AT2000 worked underground on a 33-degree inclined shaft with a 2 m diameter in F12 rock.',
      'AT2000 выполнял подземную проходку наклонного ствола под углом 33 градуса, диаметром 2 м, в породе F12.',
      'El AT2000 trabajó en un pozo subterráneo inclinado 33 grados, de 2 m de diámetro, en roca F12.',
    ),
    facts: {
      zh: [['施工性质', '地下施工'], ['直径', '2米'], ['角度', '33度'], ['岩石硬度', 'F12']],
      en: [['Work type', 'Underground'], ['Diameter', '2 m'], ['Angle', '33 degrees'], ['Rock hardness', 'F12']],
      ru: [['Тип работ', 'Подземные'], ['Диаметр', '2 м'], ['Угол', '33 градуса'], ['Крепость породы', 'F12']],
      es: [['Tipo de obra', 'Subterránea'], ['Diámetro', '2 m'], ['Ángulo', '33 grados'], ['Dureza de roca', 'F12']],
    },
    coverImage: case02.images[2]!,
    ...case02,
  },
  {
    slug: 'case-03',
    code: '3.3',
    title: localized(
      'AT1500天井钻机在河北大溪沟金矿施工',
      'AT1500 Raise Boring Rig at Hebei Daxigou Gold Mine',
      'AT1500 на золотом руднике Daxigou',
      'Equipo AT1500 en la mina de oro Daxigou',
    ),
    category: localized('金矿井筒施工', 'Gold mine shaft', 'Ствол золотого рудника', 'Pozo de mina de oro'),
    location: localized('河北大溪沟金矿', 'Hebei, China', 'Хэбэй, Китай', 'Hebei, China'),
    summary: localized(
      'AT1500天井钻机用于地下垂直井施工，井深187.4米，成井直径1.5米。',
      'The AT1500 completed a 187.4 m underground vertical shaft with a 1.5 m diameter.',
      'AT1500 применялся для подземного вертикального ствола глубиной 187,4 м и диаметром 1,5 м.',
      'El AT1500 ejecutó un pozo vertical subterráneo de 187,4 m de profundidad y 1,5 m de diámetro.',
    ),
    facts: {
      zh: [['施工性质', '地下施工'], ['井深', '187.4米'], ['直径', '1.5米'], ['角度', '90度'], ['岩石硬度', 'F12']],
      en: [['Work type', 'Underground'], ['Shaft depth', '187.4 m'], ['Diameter', '1.5 m'], ['Angle', '90 degrees'], ['Rock hardness', 'F12']],
      ru: [['Тип работ', 'Подземные'], ['Глубина', '187,4 м'], ['Диаметр', '1,5 м'], ['Угол', '90 градусов'], ['Крепость породы', 'F12']],
      es: [['Tipo de obra', 'Subterránea'], ['Profundidad', '187,4 m'], ['Diámetro', '1,5 m'], ['Ángulo', '90 grados'], ['Dureza de roca', 'F12']],
    },
    coverImage: case03.images[0]!,
    ...case03,
  },
  {
    slug: 'case-04',
    code: '3.4',
    title: localized(
      'AT1500天井钻机在西藏日喀则施工',
      'AT1500 Raise Boring Rig in Shigatse, Tibet',
      'AT1500 на объекте в Шигадзе, Тибет',
      'Equipo AT1500 en Shigatse, Tíbet',
    ),
    category: localized('高海拔井筒施工', 'High-altitude shaft', 'Высокогорный ствол', 'Pozo a gran altitud'),
    location: localized('西藏日喀则', 'Shigatse, Tibet', 'Шигадзе, Тибет', 'Shigatse, Tíbet'),
    summary: localized(
      'AT1500天井钻机在海拔5100米的地面工况下完成140米垂直井施工，成井直径2米。',
      'The AT1500 worked at an elevation of 5,100 m on a 140 m vertical shaft with a 2 m diameter.',
      'AT1500 работал на высоте 5100 м при проходке вертикального ствола глубиной 140 м и диаметром 2 м.',
      'El AT1500 trabajó a 5.100 m de altitud en un pozo vertical de 140 m de profundidad y 2 m de diámetro.',
    ),
    facts: {
      zh: [['施工性质', '地面施工'], ['井深', '140米'], ['直径', '2米'], ['角度', '90度'], ['岩石硬度', 'F12'], ['海拔高度', '5100米']],
      en: [['Work type', 'Surface'], ['Shaft depth', '140 m'], ['Diameter', '2 m'], ['Angle', '90 degrees'], ['Rock hardness', 'F12'], ['Elevation', '5,100 m']],
      ru: [['Тип работ', 'Наземные'], ['Глубина', '140 м'], ['Диаметр', '2 м'], ['Угол', '90 градусов'], ['Крепость породы', 'F12'], ['Высота', '5100 м']],
      es: [['Tipo de obra', 'En superficie'], ['Profundidad', '140 m'], ['Diámetro', '2 m'], ['Ángulo', '90 grados'], ['Dureza de roca', 'F12'], ['Altitud', '5.100 m']],
    },
    coverImage: case04.images[0]!,
    ...case04,
  },
  {
    slug: 'case-05',
    code: '3.5',
    title: localized(
      'AT2000天井钻机在山西太白金矿施工',
      'AT2000 Raise Boring Rig at Shanxi Taibai Gold Mine',
      'AT2000 на золотом руднике Taibai',
      'Equipo AT2000 en la mina de oro Taibai',
    ),
    category: localized('金矿井筒施工', 'Gold mine shaft', 'Ствол золотого рудника', 'Pozo de mina de oro'),
    location: localized('山西太白金矿', 'Shanxi, China', 'Шаньси, Китай', 'Shanxi, China'),
    summary: localized(
      'AT2000天井钻机用于地下垂直井施工，井深260米，成井直径2米。',
      'The AT2000 completed a 260 m underground vertical shaft with a 2 m diameter.',
      'AT2000 применялся для подземного вертикального ствола глубиной 260 м и диаметром 2 м.',
      'El AT2000 ejecutó un pozo vertical subterráneo de 260 m de profundidad y 2 m de diámetro.',
    ),
    facts: {
      zh: [['施工性质', '地下施工'], ['井深', '260米'], ['直径', '2米'], ['角度', '90度'], ['岩石硬度', 'F12-F14']],
      en: [['Work type', 'Underground'], ['Shaft depth', '260 m'], ['Diameter', '2 m'], ['Angle', '90 degrees'], ['Rock hardness', 'F12-F14']],
      ru: [['Тип работ', 'Подземные'], ['Глубина', '260 м'], ['Диаметр', '2 м'], ['Угол', '90 градусов'], ['Крепость породы', 'F12-F14']],
      es: [['Tipo de obra', 'Subterránea'], ['Profundidad', '260 m'], ['Diámetro', '2 m'], ['Ángulo', '90 grados'], ['Dureza de roca', 'F12-F14']],
    },
    coverImage: case05.images[2]!,
    ...case05,
  },
  {
    slug: 'case-06',
    code: '3.6',
    title: localized(
      'AT1500天井钻机在非洲施工',
      'AT1500 Raise Boring Rig Project in Africa',
      'Проект AT1500 в Африке',
      'Proyecto AT1500 en África',
    ),
    category: localized('电站井筒施工', 'Power station shaft', 'Ствол электростанции', 'Pozo de central eléctrica'),
    location: localized('非洲项目现场', 'Africa', 'Африка', 'África'),
    summary: localized(
      'AT1500天井钻机用于电站井筒施工，井深120米，成井直径1.5米。',
      'The AT1500 completed a 120 m power station shaft with a 1.5 m diameter.',
      'AT1500 применялся для ствола электростанции глубиной 120 м и диаметром 1,5 м.',
      'El AT1500 ejecutó un pozo de central eléctrica de 120 m de profundidad y 1,5 m de diámetro.',
    ),
    facts: {
      zh: [['施工性质', '电站井筒施工'], ['井深', '120米'], ['直径', '1.5米'], ['角度', '90度'], ['岩石硬度', 'F12']],
      en: [['Work type', 'Power station shaft'], ['Shaft depth', '120 m'], ['Diameter', '1.5 m'], ['Angle', '90 degrees'], ['Rock hardness', 'F12']],
      ru: [['Тип работ', 'Ствол электростанции'], ['Глубина', '120 м'], ['Диаметр', '1,5 м'], ['Угол', '90 градусов'], ['Крепость породы', 'F12']],
      es: [['Tipo de obra', 'Pozo de central eléctrica'], ['Profundidad', '120 m'], ['Diámetro', '1,5 m'], ['Ángulo', '90 grados'], ['Dureza de roca', 'F12']],
    },
    coverImage: case06.images[2]!,
    ...case06,
  },
  {
    slug: 'case-07',
    code: '3.7',
    title: localized(
      '630E后桥壳尾梁改造',
      '630E Rear Axle Housing and Tail Beam Retrofit',
      'Модернизация корпуса заднего моста и балки 630E',
      'Modernización de carcasa de eje y viga trasera 630E',
    ),
    category: localized('结构件制造与改造', 'Structural retrofit', 'Модернизация металлоконструкций', 'Modernización estructural'),
    location: localized('仁毅制造与项目现场', 'Renyi workshop and worksite', 'Цех Renyi и объект', 'Taller de Renyi y obra'),
    summary: localized(
      '围绕630E电动轮矿用车辆后桥壳与尾梁开展制造和现场改造。',
      'Manufacturing and on-site retrofit work for the rear axle housing and tail beam of a 630E electric-drive mining truck.',
      'Изготовление и модернизация корпуса заднего моста и задней балки карьерного самосвала 630E.',
      'Fabricación y modernización de la carcasa del eje trasero y la viga posterior de un camión minero 630E.',
    ),
    facts: {
      zh: [['设备型号', '630E电动轮矿用车辆'], ['工作内容', '后桥壳制造、尾梁改造']],
      en: [['Equipment', '630E electric-drive mining truck'], ['Work scope', 'Axle housing manufacturing and tail beam retrofit']],
      ru: [['Оборудование', 'Карьерный самосвал 630E'], ['Объем работ', 'Изготовление корпуса моста и модернизация балки']],
      es: [['Equipo', 'Camión minero eléctrico 630E'], ['Alcance', 'Fabricación de carcasa y modernización de viga']],
    },
    coverImage: case07.images[1]!,
    ...case07,
  },
  {
    slug: 'case-08',
    code: '3.8',
    title: localized(
      '铰接式卡车维修与厂内试车',
      'Articulated Truck Repair and Workshop Test',
      'Ремонт и цеховые испытания сочлененного самосвала',
      'Reparación y prueba de camión articulado',
    ),
    category: localized('大型车辆维修', 'Heavy vehicle repair', 'Ремонт тяжелой техники', 'Reparación de vehículos pesados'),
    location: localized('仁毅维修车间', 'Renyi workshop', 'Ремонтный цех Renyi', 'Taller de Renyi'),
    summary: localized(
      '铰接式卡车在仁毅车间完成维修、装配检查与厂内试车。',
      'An articulated truck completed repair, assembly inspection, and workshop testing at Renyi.',
      'Сочлененный самосвал прошел ремонт, сборочный контроль и цеховые испытания в Renyi.',
      'Un camión articulado completó reparación, inspección de montaje y pruebas en el taller de Renyi.',
    ),
    facts: {
      zh: [['工作内容', '车辆维修、装配检查、厂内试车'], ['资料内容', '4张照片、1段视频']],
      en: [['Work scope', 'Repair, assembly inspection, workshop test'], ['Media', '4 photos and 1 video']],
      ru: [['Объем работ', 'Ремонт, сборочный контроль, испытания'], ['Материалы', '4 фото и 1 видео']],
      es: [['Alcance', 'Reparación, inspección y prueba'], ['Contenido', '4 fotos y 1 video']],
    },
    coverImage: case08.images[1]!,
    ...case08,
  },
  {
    slug: 'case-09',
    code: '3.9',
    title: localized(
      '轮胎拆装机在华润水泥红水河公司的安装调试',
      'Tire Dismounting Machine Commissioning at China Resources Cement',
      'Монтаж шиномонтажного станка на China Resources Cement',
      'Puesta en marcha de desmontadora en China Resources Cement',
    ),
    category: localized('专用设备安装调试', 'Equipment commissioning', 'Монтаж и наладка', 'Instalación y puesta en marcha'),
    location: localized('广西华润水泥红水河公司', 'Guangxi, China', 'Гуанси, Китай', 'Guangxi, China'),
    summary: localized(
      '2022年4月22日，仁毅团队在广西完成轮胎拆装机安装、调试与现场操作确认。',
      'On 22 April 2022, the Renyi team completed installation, commissioning, and operation checks for a tire dismounting machine in Guangxi.',
      '22 апреля 2022 года команда Renyi выполнила монтаж, наладку и проверку работы шиномонтажного станка в Гуанси.',
      'El 22 de abril de 2022, el equipo de Renyi completó instalación, puesta en marcha y verificación operativa en Guangxi.',
    ),
    facts: {
      zh: [['客户', '华润水泥红水河公司'], ['日期', '2022年4月22日'], ['工作内容', '安装、调试、操作确认']],
      en: [['Customer', 'China Resources Cement Hongshuihe'], ['Date', '22 April 2022'], ['Work scope', 'Installation, commissioning, operation check']],
      ru: [['Заказчик', 'China Resources Cement Hongshuihe'], ['Дата', '22 апреля 2022'], ['Объем работ', 'Монтаж, наладка, проверка работы']],
      es: [['Cliente', 'China Resources Cement Hongshuihe'], ['Fecha', '22 de abril de 2022'], ['Alcance', 'Instalación, puesta en marcha y verificación']],
    },
    coverImage: case09.images[3]!,
    ...case09,
  },
  {
    slug: 'case-10',
    code: '3.10',
    title: localized(
      '炮孔填塞机在新疆准东煤田的应用',
      'Blasthole Stemming Machine at Xinjiang Zhundong Coalfield',
      'Забоечная машина на месторождении Zhundong',
      'Equipo de retacado en el yacimiento Zhundong',
    ),
    category: localized('露天矿专用设备', 'Open-pit mining equipment', 'Оборудование открытых работ', 'Equipo para minería a cielo abierto'),
    location: localized('新疆准东煤田', 'Xinjiang, China', 'Синьцзян, Китай', 'Xinjiang, China'),
    summary: localized(
      '炮孔填塞机在新疆准东煤田开展现场应用，用于露天矿爆破孔填塞作业。',
      'The blasthole stemming machine was used for blast-hole stemming operations at the Zhundong coalfield in Xinjiang.',
      'Забоечная машина применялась для заполнения взрывных скважин на месторождении Zhundong в Синьцзяне.',
      'El equipo se utilizó para el retacado de barrenos de voladura en el yacimiento Zhundong de Xinjiang.',
    ),
    facts: {
      zh: [['应用地点', '新疆准东煤田'], ['设备', '炮孔填塞机'], ['应用场景', '露天矿爆破孔填塞']],
      en: [['Location', 'Xinjiang Zhundong Coalfield'], ['Equipment', 'Blasthole stemming machine'], ['Application', 'Open-pit blast-hole stemming']],
      ru: [['Место', 'Месторождение Zhundong, Синьцзян'], ['Оборудование', 'Забоечная машина'], ['Применение', 'Заполнение взрывных скважин']],
      es: [['Lugar', 'Yacimiento Zhundong, Xinjiang'], ['Equipo', 'Equipo de retacado'], ['Aplicación', 'Retacado de barrenos']],
    },
    coverImage: case10.images[0]!,
    ...case10,
  },
];

export const RENYI_CASE_DETAILS: Record<
  string,
  Record<RenyiCaseLocale, [string, string, string]>
> = {
  'case-01': {
    zh: [
      '项目位于山东宏达矿业地下作业区，施工任务为100米垂直天井，设计成井直径2米。项目采用AT2000天井钻机，设备需在地下巷道条件下完成安装与施工组织。',
      '井筒角度为90度，岩石硬度达到F12-F14。现场工作围绕导向孔、扩孔施工以及设备在硬岩工况下的稳定运行展开，工程参数均来自项目原始资料。',
      '现场图片记录了AT2000主机、动力与液压管路、井下作业空间及设备施工状态，可用于了解设备在地下矿山环境中的实际布置。',
    ],
    en: [
      'The project was carried out in the underground workings of Shandong Hongda Mining. The task was a 100 m vertical raise with a finished diameter of 2 m, using an AT2000 raise boring rig installed within the underground drift.',
      'The shaft angle was 90 degrees and the recorded rock hardness was F12-F14. Site work covered pilot-hole and reaming operations while maintaining stable equipment operation in hard-rock conditions.',
      'The site photographs document the AT2000 main unit, power and hydraulic lines, the available underground workspace, and the rig in its working position.',
    ],
    ru: [
      'Проект выполнялся в подземных выработках Shandong Hongda Mining. Задача включала проходку вертикального восстающего глубиной 100 м и конечным диаметром 2 м с применением установки AT2000.',
      'Угол ствола составлял 90 градусов, крепость породы — F12-F14. Работы включали пилотное бурение и расширение с учетом устойчивой эксплуатации оборудования в крепких породах.',
      'Фотографии показывают основную установку AT2000, силовые и гидравлические линии, пространство подземной выработки и рабочее положение оборудования.',
    ],
    es: [
      'El proyecto se ejecutó en las labores subterráneas de Shandong Hongda Mining. La tarea consistió en un pozo vertical de 100 m y 2 m de diámetro final mediante un equipo AT2000.',
      'El ángulo del pozo fue de 90 grados y la dureza registrada de la roca fue F12-F14. Los trabajos abarcaron perforación piloto y escariado en condiciones de roca dura.',
      'Las fotografías muestran la unidad AT2000, las líneas hidráulicas y de potencia, el espacio de trabajo subterráneo y la disposición real del equipo.',
    ],
  },
  'case-02': {
    zh: [
      '项目服务于广东阳春阳江水电站地下斜井施工，采用AT2000天井钻机形成直径2米、倾角33度的斜井。原始项目资料未填写井深，因此页面不对该数据作推测。',
      '与垂直井相比，33度斜井对导向控制、设备定位和扩孔过程的连续性提出了不同要求。现场资料记录的岩石硬度为F12，施工参数按项目文件原值呈现。',
      '本案例收录5张现场图片和1段施工视频，集中展示地下空间、钻机布置及设备在斜井作业中的实际状态。',
    ],
    en: [
      'This project supported an underground inclined shaft at the Yangjiang Hydropower Station in Guangdong. An AT2000 was used for a 2 m diameter shaft at an angle of 33 degrees; the source record did not state the shaft depth.',
      'Compared with a vertical shaft, the 33-degree alignment changes the requirements for guidance, rig positioning, and continuity during reaming. The recorded rock hardness was F12.',
      'Five site photographs and one construction video document the underground workspace, rig arrangement, and the AT2000 operating in the inclined-shaft application.',
    ],
    ru: [
      'Проект связан с подземным наклонным стволом ГЭС Yangjiang в провинции Гуандун. Установка AT2000 применялась для ствола диаметром 2 м под углом 33 градуса; глубина в исходных материалах не указана.',
      'Наклон 33 градуса предъявляет особые требования к направлению пилотной скважины, позиционированию установки и непрерывности расширения. Указанная крепость породы — F12.',
      'Пять фотографий и одно видео показывают подземное пространство, размещение оборудования и работу AT2000 на наклонном стволе.',
    ],
    es: [
      'El proyecto corresponde a un pozo inclinado subterráneo de la central hidroeléctrica de Yangjiang, Guangdong. Se utilizó un AT2000 para un diámetro de 2 m y un ángulo de 33 grados; la fuente no indica la profundidad.',
      'La inclinación de 33 grados exige un control específico de la guía, el posicionamiento del equipo y la continuidad del escariado. La dureza registrada de la roca fue F12.',
      'Cinco fotografías y un video documentan el espacio subterráneo, la instalación del equipo y el AT2000 durante el trabajo del pozo inclinado.',
    ],
  },
  'case-03': {
    zh: [
      '河北大溪沟金矿项目采用AT1500天井钻机进行地下垂直井施工，井深187.4米，成井直径1.5米，属于较深的矿山井筒作业。',
      '井筒角度为90度，岩石硬度F12。项目参数体现了AT1500在地下硬岩、长距离垂直施工场景中的设备配置与应用范围。',
      '现场图片记录了钻机主体、作业平台和地下安装环境，展示设备在有限巷道空间中的施工布置。',
    ],
    en: [
      'At Hebei Daxigou Gold Mine, an AT1500 was used for a 187.4 m underground vertical shaft with a finished diameter of 1.5 m, representing a relatively deep mining-shaft application.',
      'The shaft angle was 90 degrees and the recorded rock hardness was F12. These parameters show the AT1500 configuration used for long vertical work in underground hard rock.',
      'The photographs record the main rig, work platform, and underground installation environment, including the equipment arrangement within the available drift space.',
    ],
    ru: [
      'На золотом руднике Daxigou установка AT1500 применялась для вертикального подземного ствола глубиной 187,4 м и диаметром 1,5 м.',
      'Угол ствола составлял 90 градусов, крепость породы — F12. Параметры показывают применение AT1500 при протяженной вертикальной проходке в подземных крепких породах.',
      'Фотографии фиксируют основную установку, рабочую платформу и условия монтажа оборудования в ограниченном пространстве выработки.',
    ],
    es: [
      'En la mina de oro Daxigou de Hebei se utilizó un AT1500 para un pozo vertical subterráneo de 187,4 m de profundidad y 1,5 m de diámetro final.',
      'El ángulo fue de 90 grados y la dureza de roca registrada fue F12. Los parámetros muestran la aplicación del AT1500 en perforación vertical prolongada en roca dura.',
      'Las fotografías registran el equipo principal, la plataforma de trabajo y la disposición del conjunto dentro del espacio disponible en la galería.',
    ],
  },
  'case-04': {
    zh: [
      '西藏日喀则项目在海拔5100米的地面工况下开展，采用AT1500天井钻机施工140米垂直井，成井直径2米。高海拔是该项目最突出的现场条件。',
      '井筒角度90度，岩石硬度F12。设备布置、现场保障和施工组织均需结合高海拔露天环境，页面仅呈现项目资料中已确认的参数。',
      '4张现场图片记录了高原地貌、钻机整机、作业平台和施工区域，可直观看到设备在高海拔项目中的安装状态。',
    ],
    en: [
      'The Shigatse project was carried out at a surface site 5,100 m above sea level. An AT1500 was used for a 140 m vertical shaft with a finished diameter of 2 m, with altitude being the defining site condition.',
      'The shaft angle was 90 degrees and the recorded rock hardness was F12. Equipment arrangement and site support had to be organized around the exposed high-altitude environment.',
      'Four site photographs document the plateau terrain, complete rig, work platform, and construction area, showing the installed condition of the equipment.',
    ],
    ru: [
      'Проект в Шигадзе выполнялся с поверхности на высоте 5100 м. Установка AT1500 использовалась для вертикального ствола глубиной 140 м и диаметром 2 м.',
      'Угол ствола составлял 90 градусов, крепость породы — F12. Размещение оборудования и обеспечение площадки организовывались с учетом открытых высокогорных условий.',
      'Четыре фотографии показывают высокогорный рельеф, установку в сборе, рабочую платформу и строительную площадку.',
    ],
    es: [
      'El proyecto de Shigatse se desarrolló en superficie a 5.100 m de altitud. Se utilizó un AT1500 para un pozo vertical de 140 m y 2 m de diámetro final.',
      'El ángulo fue de 90 grados y la dureza registrada de la roca fue F12. La disposición del equipo y el apoyo de obra se organizaron para un entorno abierto de gran altitud.',
      'Cuatro fotografías muestran el terreno de altiplano, el equipo completo, la plataforma de trabajo y el área de construcción.',
    ],
  },
  'case-05': {
    zh: [
      '山西太白金矿项目采用AT2000天井钻机进行地下井筒施工，井深260米、成井直径2米，是本批案例中井深数据最大的天井钻机项目。',
      '井筒为90度垂直布置，岩石硬度F12-F14。项目同时具有深井、大直径和硬岩条件，现场施工围绕设备稳定运行与井筒参数控制展开。',
      '现场图片展示AT2000在地下工作区的安装位置、主机结构和施工环境，为设备在深井硬岩项目中的应用提供实物记录。',
    ],
    en: [
      'At Shanxi Taibai Gold Mine, an AT2000 was used for a 260 m underground shaft with a finished diameter of 2 m. It has the greatest recorded depth among the raise-boring cases in this collection.',
      'The shaft was vertical at 90 degrees and the rock hardness was F12-F14. The project combined deep-shaft, large-diameter, and hard-rock conditions.',
      'The site photographs show the installed AT2000, main machine structure, and underground work environment, providing a direct record of the deep hard-rock application.',
    ],
    ru: [
      'На золотом руднике Taibai установка AT2000 применялась для подземного ствола глубиной 260 м и диаметром 2 м. Это наибольшая указанная глубина среди представленных проектов бурения восстающих.',
      'Ствол имел вертикальный угол 90 градусов, крепость породы составляла F12-F14. Проект сочетал большую глубину, крупный диаметр и крепкие породы.',
      'Фотографии показывают установленную AT2000, конструкцию основной машины и условия подземной рабочей зоны.',
    ],
    es: [
      'En la mina de oro Taibai de Shanxi se utilizó un AT2000 para un pozo subterráneo de 260 m y 2 m de diámetro final. Es la mayor profundidad registrada entre estos casos de raise boring.',
      'El pozo fue vertical, a 90 grados, y la dureza de roca fue F12-F14. El proyecto combinó gran profundidad, diámetro amplio y roca dura.',
      'Las fotografías muestran el AT2000 instalado, la estructura principal y el entorno de trabajo subterráneo.',
    ],
  },
  'case-06': {
    zh: [
      '非洲项目采用AT1500天井钻机服务电站井筒施工，设计井深120米、成井直径1.5米，设备在海外项目现场完成部署。',
      '井筒角度为90度，岩石硬度F12。项目资料反映了AT1500在电站垂直井筒和海外施工环境中的应用参数。',
      '现场图片记录设备运输到位后的安装、井口周边环境及钻机作业状态，形成海外项目的施工资料。',
    ],
    en: [
      'The Africa project used an AT1500 for a power-station shaft 120 m deep with a finished diameter of 1.5 m, with the equipment deployed at an overseas worksite.',
      'The shaft angle was 90 degrees and the recorded rock hardness was F12. The data documents the AT1500 configuration for a vertical power-station shaft.',
      'The photographs record equipment installation after delivery, the shaft-area environment, and the rig in working condition at the overseas site.',
    ],
    ru: [
      'В африканском проекте установка AT1500 использовалась для ствола электростанции глубиной 120 м и диаметром 1,5 м.',
      'Угол ствола составлял 90 градусов, крепость породы — F12. Параметры отражают применение AT1500 на вертикальном стволе энергетического объекта.',
      'Фотографии фиксируют монтаж после доставки, обстановку вокруг устья и рабочее состояние установки на зарубежном объекте.',
    ],
    es: [
      'El proyecto africano utilizó un AT1500 para un pozo de central eléctrica de 120 m de profundidad y 1,5 m de diámetro final.',
      'El ángulo fue de 90 grados y la dureza registrada de la roca fue F12. Los datos documentan la configuración del AT1500 para un pozo vertical de generación eléctrica.',
      'Las fotografías registran la instalación tras la entrega, el entorno del pozo y el equipo en condición de trabajo en la obra internacional.',
    ],
  },
  'case-07': {
    zh: [
      '该项目面向630E电动轮矿用车辆后桥壳与尾梁结构，工作范围包括后桥壳制造和尾梁现场改造，属于大型矿用车辆关键结构件业务。',
      '项目内容覆盖结构件加工制造、改造部位处理以及成品状态确认。现有资料未提供尺寸、公差和载荷数据，因此页面不增加未经确认的技术指标。',
      '两张项目图片分别记录大型后桥壳结构和改造后的车辆尾部区域，便于查看部件尺度、结构形式与现场装配关系。',
    ],
    en: [
      'This project concerned the rear axle housing and tail-beam structure of a 630E electric-drive mining truck. The recorded scope included axle-housing manufacturing and on-site tail-beam retrofit work.',
      'Work covered structural fabrication, treatment of the retrofit area, and confirmation of the completed condition. No dimensions, tolerances, or load data were included in the source material.',
      'Two project photographs document the large axle-housing structure and the modified rear area of the truck, showing component scale and assembly relationships.',
    ],
    ru: [
      'Проект относился к корпусу заднего моста и задней балке карьерного самосвала 630E. Объем включал изготовление корпуса моста и модернизацию балки на объекте.',
      'Работы охватывали изготовление металлоконструкции, обработку зоны модернизации и контроль готового состояния. Размеры, допуски и нагрузки в исходных данных не указаны.',
      'Две фотографии показывают крупный корпус моста и модернизированную заднюю часть машины, позволяя оценить масштаб и взаимное расположение узлов.',
    ],
    es: [
      'El proyecto abordó la carcasa del eje trasero y la viga posterior de un camión minero eléctrico 630E. El alcance registrado incluyó fabricación de la carcasa y modernización de la viga en obra.',
      'Los trabajos cubrieron fabricación estructural, tratamiento de la zona modificada y comprobación del estado final. La fuente no aporta dimensiones, tolerancias ni cargas.',
      'Dos fotografías muestran la gran carcasa del eje y la zona posterior modificada del vehículo, con la escala y relación de montaje de los componentes.',
    ],
  },
  'case-08': {
    zh: [
      '铰接式卡车进入仁毅维修车间后开展车辆维修、部件装配检查和厂内试车，项目属于大型矿用车辆维修服务。',
      '现有资料以维修过程照片和试车视频为主，记录车辆进场后的整机状态、车身与底盘区域以及维修后运行检查。未提供的故障原因和更换清单不作推测。',
      '4张照片展示车辆在车间不同阶段的状态，1段视频用于记录厂内试车，可连续查看维修后车辆的实际运行表现。',
    ],
    en: [
      'An articulated truck entered the Renyi workshop for repair, assembly inspection, and an in-house running test as part of the company’s heavy mining-vehicle service work.',
      'The available material focuses on process photographs and the test video, recording the complete vehicle, body and chassis areas, and post-repair operation. Unstated fault causes and replacement lists are not assumed.',
      'Four photographs show the truck at different workshop stages, while one video records the running test and the vehicle’s actual movement after repair.',
    ],
    ru: [
      'Сочлененный самосвал поступил в ремонтный цех Renyi для ремонта, проверки сборки и ходовых испытаний в рамках обслуживания тяжелой горной техники.',
      'Материалы включают фотографии процесса и видео испытаний: состояние машины, элементы кузова и шасси, а также работу после ремонта. Причины неисправности и перечень замен не указаны.',
      'Четыре фотографии показывают машину на разных этапах в цехе, а одно видео фиксирует ее движение во время контрольного испытания.',
    ],
    es: [
      'Un camión articulado ingresó en el taller de Renyi para reparación, inspección de montaje y prueba de marcha dentro del servicio para vehículos mineros pesados.',
      'El material disponible se centra en fotografías del proceso y el video de prueba, mostrando el vehículo, la carrocería, el chasis y la operación posterior. No se suponen averías ni repuestos no documentados.',
      'Cuatro fotografías muestran distintas etapas en el taller y un video registra la prueba de marcha tras la reparación.',
    ],
  },
  'case-09': {
    zh: [
      '2022年4月22日，仁毅团队在广西华润水泥红水河公司开展轮胎拆装机安装调试。设备面向大型工程车辆轮胎拆卸与安装作业。',
      '现场工作包括设备到位、部件安装、系统调试和操作确认。图片资料完整记录设备由安装准备到现场操作的多个环节，便于查看设备结构和使用方式。',
      '本案例包含17张现场图片和1段视频，是现有案例中资料最完整的一组，覆盖设备、控制区域、轮胎夹持与现场操作过程。',
    ],
    en: [
      'On 22 April 2022, the Renyi team installed and commissioned a tire dismounting machine at China Resources Cement Hongshuihe in Guangxi. The equipment is intended for handling tires on large industrial vehicles.',
      'Site work included positioning, component installation, system commissioning, and operation checks. The image sequence records multiple stages from preparation through on-site use.',
      'With 17 photographs and one video, this is the most extensively documented case in the collection, covering the machine, control area, tire handling, and operator interaction.',
    ],
    ru: [
      '22 апреля 2022 года команда Renyi выполнила монтаж и наладку шиномонтажного станка на предприятии China Resources Cement Hongshuihe в Гуанси.',
      'Работы включали установку оборудования, монтаж узлов, наладку системы и проверку операций. Серия изображений показывает этапы от подготовки до практического использования.',
      'Проект представлен 17 фотографиями и одним видео — наиболее полным комплектом материалов, охватывающим станок, управление, работу с шиной и действия оператора.',
    ],
    es: [
      'El 22 de abril de 2022, el equipo de Renyi instaló y puso en marcha una desmontadora de neumáticos en China Resources Cement Hongshuihe, Guangxi.',
      'El trabajo incluyó posicionamiento, montaje de componentes, ajuste del sistema y comprobación operativa. La secuencia de imágenes registra desde la preparación hasta el uso en obra.',
      'Con 17 fotografías y un video, es el caso mejor documentado de la colección y cubre la máquina, el área de control, la manipulación del neumático y la operación.',
    ],
  },
  'case-10': {
    zh: [
      '炮孔填塞机在新疆准东煤田露天矿现场投入应用，设备用于爆破孔填塞作业，将专用设备与露天矿爆破施工流程衔接。',
      '案例重点记录设备在真实矿区环境中的作业状态。现有资料未提供填塞效率、孔径或单班工作量，因此页面仅说明已确认的设备用途和应用地点。',
      '1张现场图片展示设备外观与矿区环境，1段视频记录炮孔填塞机的现场运行过程，可用于观察车辆移动和作业状态。',
    ],
    en: [
      'A blasthole stemming machine was deployed at the open-pit operation of the Xinjiang Zhundong Coalfield to connect dedicated equipment with the blast-hole stemming workflow.',
      'The case records the machine operating in a real mine environment. The source material does not state stemming rate, hole diameter, or shift output, so no such performance figures are added.',
      'One photograph shows the machine and mine setting, while one video records on-site operation, including vehicle movement and the working condition of the equipment.',
    ],
    ru: [
      'Забоечная машина применялась на открытых работах месторождения Zhundong в Синьцзяне для механизации заполнения взрывных скважин.',
      'Материалы фиксируют работу машины в реальных условиях разреза. Производительность, диаметр скважин и сменный объем в источнике не указаны, поэтому такие показатели не добавлялись.',
      'Одна фотография показывает машину и обстановку карьера, а одно видео — движение и рабочее состояние оборудования на площадке.',
    ],
    es: [
      'Un equipo de retacado se utilizó en la explotación a cielo abierto del yacimiento de Zhundong, Xinjiang, para integrar maquinaria especializada en el proceso de relleno de barrenos.',
      'El caso registra la máquina en un entorno minero real. La fuente no indica rendimiento, diámetro de barreno ni producción por turno, por lo que no se añaden cifras no confirmadas.',
      'Una fotografía muestra el equipo y el entorno de la mina, mientras un video registra el movimiento del vehículo y su estado de trabajo en obra.',
    ],
  },
};

export function getRenyiCaseProject(pathname: string) {
  const normalizedPath = `/${pathname.split('#')[0]?.split('?')[0]?.replace(/^\/+|\/+$/g, '') ?? ''}/`;
  const unlocalizedPath = normalizedPath.replace(/^\/(en|ru|es)(?=\/)/, '');

  return RENYI_CASE_PROJECTS.find((project) => unlocalizedPath === `/anlizhanshi/${project.slug}/`) ?? null;
}
