// @ts-nocheck
import {
  RENYI_CULTURE_BANNER_IMAGES,
  RENYI_COPYRIGHT_TEXT,
  RENYI_ICP_RECORD,
  RENYI_ICP_URL,
  RENYI_PROMO_VIDEO_PATH,
  RENYI_PROMO_VIDEO_POSTER_IMAGE,
  RENYI_WHATSAPP_QR_IMAGE,
} from '@/lib/site-pages';
import { HeaderBox } from './header-box';
import { PageContent } from './page-content';

const RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE = '/renyi/renyi-wechat-official-account-qr.jpg';

export const PageRoot = () => {
  return (
    <div className="page-root ind">
      <HeaderBox />
      <div className="header-right-win hidden-sm hidden-xs">
        <div className="right-win-top">
          <strong className="right-win-title">快捷导航</strong>
          <a className="right-win-close" href="javascript:;">
            <i className="ifa ifa-close-bold" />
          </a>
        </div>
        <div className="right-win-body">
          <div className="txt01">
            <strong>
              <a href="/jiaruwomen/">加入仁毅</a>
            </strong>
            <p>在天井钻机、特种油缸与专用设备制造一线，和团队一起成长成才。</p>
            <strong>
              <a href="/category/renyixinwen/">仁毅动态</a>
            </strong>
            <p>实时动态，敬请关注</p>
            <strong>
              <a href="/lianxiwomen/">合作咨询</a>
            </strong>
            <p>携手共进，共赢未来,合作从倾听开始</p>
            <strong>
              <a href="/fuwuzhichi/">服务支持</a>
            </strong>
            <p>围绕研发设计、精密加工、焊接装配和质量检测，为客户现场提供可靠支持。</p>
          </div>
          <div className="txt02">
            <strong>销售电话:</strong>
            <p>
              0731-84033881 <br />
              0731-84033872
            </p>
          </div>
          <div className="txt03">
            <img
              className="img-w"
              src={RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE}
              alt="微信公众号二维码"
            />
            <p>微信公众号</p>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <video
                id="banner_video"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                poster={RENYI_PROMO_VIDEO_POSTER_IMAGE}
              >
                <source src={RENYI_PROMO_VIDEO_PATH} type="video/mp4" />
                您的浏览器不支持 video 标签。
              </video>
              <img
                className="img-w hidden-xs hidden-sm"
                src={RENYI_PROMO_VIDEO_POSTER_IMAGE}
                alt=""
              />
              <img
                className="img-w hidden-md hidden-lg"
                src={RENYI_PROMO_VIDEO_POSTER_IMAGE}
                alt=""
              />
            </div>
            <div
              className="swiper-slide renyi-culture-banner-slide"
              style={{
                backgroundImage: 'none',
              }}
            >
              <img
                className="img-w renyi-culture-banner-img"
                src="/renyi/renyi-banner-culture-zh-1920x832.png"
                alt=""
              />
              <div className="banner-container">
                <div className="container">
                  <div
                    className="banner-textbox ani"
                    swiper-animate-effect="amShowInRight"
                    swiper-animate-duration="1s"
                    swiper-animate-delay="0.6s"
                  >
                    <div className="tit">企业文化</div>
                    <div className="txt1">
                      格物 <span>|</span> 致知 <span>|</span> 诚意 <span>|</span> 正心
                    </div>
                    <div className="txt2">Quality first · Service first · Honest operation</div>
                  </div>
                </div>
              </div>
              <img
                className="img-w hidden-xs hidden-sm"
                src={RENYI_CULTURE_BANNER_IMAGES.zh}
                alt=""
              />
              <img
                className="img-w hidden-md hidden-lg"
                src={RENYI_CULTURE_BANNER_IMAGES.zh}
                alt=""
              />
            </div>
          </div>
          <div className="banner-pagination-box">
            <div className="container">
              <div className="swiper-pagination banner-pagination" />
            </div>
          </div>
        </div>
        <div className="swiper-button-prev banner-prev">
          <svg
            className="icon"
            style={{
              width: '1em',
              height: '1em',
              verticalAlign: 'middle',
              fill: 'currentColor',
              overflow: 'hidden',
            }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M350 512l392.4-392.9a32 32 0 1 0-45.3-45.3L281.6 489.4a31.9 31.9 0 0 0 0 45.2L697.1 950a32 32 0 0 0 45.3-45.3z" />
          </svg>
        </div>
        <div className="swiper-button-next banner-next">
          <svg
            className="icon"
            style={{
              width: '1em',
              height: '1em',
              verticalAlign: 'middle',
              fill: 'currentColor',
              overflow: 'hidden',
            }}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M304.2 960a32 32 0 0 1-22.6-54.6L674.5 512 281.6 119.1a32 32 0 1 1 45.3-45.3l415.5 415.6a31.9 31.9 0 0 1 0 45.2L326.9 950a32.3 32.3 0 0 1-22.7 10z" />
          </svg>
        </div>
        <div className="banner-a-btns">
          <div className="container">
            <a className="item cur video-popup" href={RENYI_PROMO_VIDEO_PATH}>
              <div className="showbox">
                <strong>
                  宣传视频
                  <i className="ifa ifa-jia" />
                </strong>
                <i className="ifa ifa-dianying" />
                <p>聚焦天井钻机、特种油缸、结构件、选矿设备及专用装备制造，为矿山与工程机械客户提供可靠方案。</p>
              </div>
              <div className="showbox2">宣传视频</div>
            </a>
            <a className="item" href="/guanyuxingye/#a2">
              <div className="showbox">
                <strong>
                  企业文化
                  <i className="ifa ifa-jia" />
                </strong>
                <i className="ifa ifa-shuji" />
                <p>秉持“格物、致知、诚意、正心”的宗旨，坚持质量第一、服务第一、诚信经营，把每一项制造与交付做实。</p>
              </div>
              <div className="showbox2">企业文化</div>
            </a>
            <a className="item" href="/jiaruwomen/#a1">
              <div className="showbox">
                <strong>
                  人才理念
                  <i className="ifa ifa-jia" />
                </strong>
                <i className="ifa ifa-dengpao" />
                <p>坚持以人为本，重视员工成长与价值实现，让团队在精益生产、可靠交付和专业制造中成长成才。</p>
              </div>
              <div className="showbox2">人才理念</div>
            </a>
            <a className="item" href="/lianxiwomen/#a2">
              <div className="showbox">
                <strong>
                  咨询产品
                  <i className="ifa ifa-jia" />
                </strong>
                <i className="ifa ifa-wajueji" />
                <p>提供天井钻机、特种油缸、结构件及专用设备的研发设计、精密加工、质量检测和可靠交付支持。</p>
              </div>
              <div className="showbox2">咨询产品</div>
            </a>
            <a className="item" href="/category/renyixinwen/">
              <div className="showbox">
                <strong>
                  了解更多
                  <i className="ifa ifa-jia" />
                </strong>
                <i className="ifa ifa-gengduo" />
                <p>关注产品案例、资质荣誉与技术动态，持续了解仁毅的研发制造能力。</p>
              </div>
              <div className="showbox2">了解更多</div>
            </a>
          </div>
        </div>
      </div>
      <PageContent />
      <footer className="footer">
        <div className="footer-contacts-nav">
          <div className="container">
            <div className="row row-30">
              <div className="col-md-8 col-sm-24">
                <div className="footer-contacts">
                  <h3>联系我们</h3>
                  <div>
                    <p>地 址: 中国湖南长沙经济技术开发区漓湘路98号</p>
                    <p>销售电话: 0731-84033881</p>
                    <p>招聘电话: +86 139 0848 9376</p>
                    <p>营销中心: 0731-84033872</p>
                    <p>销售经理：+86 139 0848 9376</p>
                    <p>邮件至：info@csrenyi.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-16 col-sm-12 hidden-xs hidden-sm">
                <div>
                  <ul className="b-menu">
                    <li className="m-0 has-sub current">
                      <a href="/guanyuxingye/" title="关于仁毅">
                        关于仁毅
                      </a>
                      <ul className="sub-btn">
                        <li>
                          <a href="/guanyuxingye/#a1" title="公司简介">
                            公司简介
                          </a>
                        </li>
                        <li>
                          <a href="/guanyuxingye/#a2" title="企业文化">
                            企业文化
                          </a>
                        </li>
                        <li>
                          <a href="/guanyuxingye/#a3" title="资质荣誉">
                            资质荣誉
                          </a>
                        </li>
                        <li>
                          <a href="/guanyuxingye/#a4" title="发展历程">
                            发展历程
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="m-1 has-sub">
                      <a href="/chanpinzhanshi/" title="产品展示">
                        产品展示
                      </a>
                      <ul className="sub-btn">
                        <li>
                          <a
                            href="/zuanjixilie/"
                            title="天井钻机系列"
                          >
                            天井钻机系列
                          </a>
                        </li>
                        <li>
                          <a
                            href="/yougangxuangua/"
                            title="油缸悬挂系列"
                          >
                            油缸悬挂系列
                          </a>
                        </li>
                        <li>
                          <a
                            href="/jiegouxilie/"
                            title="结构件系列"
                          >
                            结构件系列
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fuxuanjixilie/"
                            title="选矿设备系列"
                          >
                            选矿设备系列
                          </a>
                        </li>
                        <li>
                          <a
                            href="/zhuanyongxilie/"
                            title="专用设备系列"
                          >
                            专用设备系列
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="m-2 has-sub">
                      <a href="/fuwuzhichi/" title="服务支持">
                        服务支持
                      </a>
                      <ul className="sub-btn">
                        <li>
                          <a href="/fuwuzhichi/#a1" title="产品质量">
                            产品质量
                          </a>
                        </li>
                        <li>
                          <a href="/fuwuzhichi/#a2" title="售后服务">
                            售后服务
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="m-3 has-sub">
                      <a
                        href="/category/renyixinwen/"
                        title="新闻中心"
                      >
                        新闻中心
                      </a>
                      <ul className="sub-btn">
                        <li>
                          <a href="/category/renyixinwen/" title="仁毅新闻">
                            仁毅新闻
                          </a>
                        </li>
                        <li>
                          <a
                            href="/xinwenzhongxin/renyixinwen/1018"
                            title="资质荣誉"
                          >
                            资质荣誉
                          </a>
                        </li>
                        <li>
                          <a
                            href="/xinwenzhongxin/renyixinwen/1021"
                            title="授权服务"
                          >
                            授权服务
                          </a>
                        </li>
                        <li>
                          <a href="/fuwuzhichi/" title="服务支持">
                            服务支持
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="m-4 has-sub">
                      <a href="/lianxiwomen/" title="联系我们">
                        联系我们
                      </a>
                      <ul className="sub-btn">
                        <li>
                          <a href="/lianxiwomen/#a1" title="联系我们">
                            联系我们
                          </a>
                        </li>
                        <li>
                          <a href="/lianxiwomen/#a2" title="在线留言">
                            在线留言
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contacts-nav1">
          <div className="container">
            <div className="row row-30">
              <div className="col-md-18 col-sm-14">
                <div className="footer-contacts">
                  <div style={{ paddingTop: '40px' }}>
                    <a href="/faluwenjian/1361/">隐私政策</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/faluwenjian/1362/">广告法声明</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/faluwenjian/1363/">法律声明</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-14 hidden-sm">
                <div>
	                  <ul className="b-menu">
	                    <li>
	                      <img
	                        src={RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE}
	                        width="130"
	                        alt="微信公众号二维码"
	                      />
	                    </li>
	                    <li>
	                      <img
	                        src="/renyi/renyi-whatsapp-qr.png"
	                        width="130"
	                        alt="WhatsApp二维码"
	                      />
	                    </li>
	                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-copy">
          <div className="container">
            <div className="row">
              <div className="col-md-8 footer-copy-col1">
                <div className="txt01">
                  <a href="/" style={{ color: '#fff' }}>
                    长沙仁毅机械制造有限公司
                  </a>
                </div>
                <div className="txt02">CHANGSHA RENYI MACHINERY MANUFACTURING CO., LTD</div>
              </div>
              <div className="col-md-16 footer-copy-col2">
                <span>
                  <a href="/">{RENYI_COPYRIGHT_TEXT}</a>
                </span>
                <span>
                  <a href={RENYI_ICP_URL} target="_blank" rel="nofollow noopener noreferrer">
                    {RENYI_ICP_RECORD}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
