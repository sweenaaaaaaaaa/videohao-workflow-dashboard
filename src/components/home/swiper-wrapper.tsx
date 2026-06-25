// @ts-nocheck
const slides = [
  {
    title: '天井钻机系列',
    href: '/zuanjixilie/',
    image: '/renyi/product-category-raise-boring-site.png?v=20260428',
    alt: '全液压有轨式天井钻机又称反井钻机在地下矿山竖井工程现场作业',
    description:
      '有轨式天井钻机，又称反井钻机，是专门为地下矿山及竖井工程而设计的一种全液压驱动、滚刀破岩、远程遥控的全断面成井设备，既可以用于向下钻导向孔、向上扩孔，又可以直接切割一次成井，还能利用配备的接卸杆机械手自动提取和运送钻杆。',
  },
  {
    title: '油缸悬挂系列',
    href: '/yougangxuangua/',
    image: '/renyi/product-category-hydraulic-suspension-cylinders.png?v=20260429',
    alt: '矿山设备油缸悬挂系统与工程机械部件实拍图',
    description:
      '仁毅机械专注于大型机械设备液压缸和油气悬挂系统制造，产品覆盖工程机械与特种车辆两大应用方向。我们可为挖掘机、推土机、装载机、平地机，以及30-60吨铰卡、50-400吨矿卡提供大臂油缸、小臂油缸、铲斗油缸、前后悬挂缸、举升缸、转向缸等总成及配件。产品可适配卡特、小松、沃尔沃、特雷克斯、日立、徐工等主流设备，并可承担从备件国产化替代到新产品定制开发，为矿山、工程施工及重型运输设备提供可靠液压解决方案。',
  },
  {
    title: '专用设备系列',
    href: '/zhuanyongxilie/',
    image: '/renyi/product-category-special-equipment-yard.png?v=20260429',
    alt: '矿山专用设备及重型机械维修辅助设备在矿区现场展示图',
    description:
      '仁毅机械为您提供专业的大型轮胎维护解决方案，主营门架式与多条件式轮辋拆装机。该系列设备专为解决矿卡、港口机械等特种车辆可覆盖20-63英寸等大型轮胎的拆卸难题而设计。凭借高强度结构与自动化/液压驱动技术，我们的拆装机能实现安全、无损、高效的轮胎维护，大幅降低维修劳动强度与时间成本。广泛应用于汽车维修厂、矿山修理厂及轮胎制造领域，是您提升车队运营效率的必备维护利器。',
  },
  {
    title: '选矿设备系列',
    href: '/fuxuanjixilie/',
    image: '/renyi/product-category-mineral-processing-fill.png?v=20260429-fill',
    alt: '矿山选矿设备及管路系统在矿区现场的安装应用图',
    description:
      '仁毅机械专业生产高效充气搅拌式浮选机，广泛应用于有色金属、黑色金属及非金属矿物的选别作业。该设备采用外部强制充气与机械搅拌分离的独特设计，有效提升矿浆混合效果，确保稳定的泡沫层。具备处理能力强、精矿回收率高及低能耗等核心优势。其占地面积小、备件磨损少，是您实现低品位矿石高效回收、降低选矿成本、提升矿山经济效益的理想环保节能选矿设备。',
  },
  {
    title: '结构件系列',
    href: '/jiegouxilie/',
    image: '/renyi/product-category-structural-components-fill.png?v=20260429-fill',
    alt: '矿山工程机械结构件、铲斗和大型焊接部件展示图',
    description:
      '仁毅机械专业承接大型矿用车辆及工程机械的高强度结构件定制与生产。我们的核心产品涵盖小松（KOMATSU）电动轮730E重型后桥壳、沃尔沃（VOLVO）A40E铰卡车斗以及各类高承载副车架等关键部件。依托精湛的重型焊接工艺与大型机加工能力，我们的结构件均采用优质高强度钢材制造，具备卓越的抗疲劳与抗冲击性能。我们致力于为矿山及工程客户提供高精度的结构件国产化替代方案，全面保障您重型设备在极端恶劣工况下的结构安全与长效运行。',
  },
];

export const SwiperWrapper = () => {
  return (
    <div className="swiper-wrapper">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`swiper-slide${index === 0 ? ' swiper-slide-active' : ''}`}
          style={index === 0 ? { width: '1317px' } : undefined}
        >
          <div className="ind02-box">
            <div className="imgbox img-hover oh img-h">
              <div className="img-h1">
                <div className="img-h2">
                  <img className="img-w imgshow" src={slide.image} alt={slide.alt} />
                </div>
              </div>
            </div>
            <div className="titbox">
              <h2 className="renyi-product-category-heading">
                <span>产品分类</span>
                {slide.title}
              </h2>
              <div className="txt">{slide.description}</div>
              <div className="ind02-btn">
                <a href={slide.href}>
                  <i className="ifa ifa-icon-test1" />
                  查看主要产品{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
