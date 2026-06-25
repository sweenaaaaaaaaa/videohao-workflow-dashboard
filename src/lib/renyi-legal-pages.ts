type LegalLocale = 'zh' | 'en' | 'ru' | 'es';
type LegalPageKey = 'privacy' | 'advertising' | 'legal';

type LegalPageCopy = {
  title: string;
  text: string;
};

const LEGAL_PAGE_IDS: Record<string, LegalPageKey> = {
  '1361': 'privacy',
  '1362': 'advertising',
  '1363': 'legal',
};

const LOCALE_PREFIXES: Record<LegalLocale, string> = {
  zh: '',
  en: '/en',
  ru: '/ru',
  es: '/es',
};
const RENYI_WHATSAPP_QR_IMAGE = '/renyi/renyi-whatsapp-qr.png';
const RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE = '/renyi/renyi-wechat-official-account-qr.jpg';

const LEGAL_FOOTER_LINKS: Record<LegalLocale, Array<{ key: LegalPageKey; label: string; id: string }>> = {
  zh: [
    { key: 'privacy', label: '隐私政策', id: '1361' },
    { key: 'advertising', label: '广告法声明', id: '1362' },
    { key: 'legal', label: '法律声明', id: '1363' },
  ],
  en: [
    { key: 'privacy', label: 'Privacy Policy', id: '1361' },
    { key: 'advertising', label: 'Advertising Law Statement', id: '1362' },
    { key: 'legal', label: 'Legal Statement', id: '1363' },
  ],
  ru: [
    { key: 'privacy', label: 'Политика конфиденциальности', id: '1361' },
    { key: 'advertising', label: 'Заявление о рекламе', id: '1362' },
    { key: 'legal', label: 'Правовое заявление', id: '1363' },
  ],
  es: [
    { key: 'privacy', label: 'Política de privacidad', id: '1361' },
    { key: 'advertising', label: 'Declaración publicitaria', id: '1362' },
    { key: 'legal', label: 'Aviso legal', id: '1363' },
  ],
};

const LEGAL_PAGE_COPY: Record<LegalLocale, Record<LegalPageKey, LegalPageCopy>> = {
  zh: {
    privacy: {
      title: '隐私政策',
      text: `
隐私政策
本隐私政策描述了当您访问本网站或从本网站购买商品时，csrenyi.com（“本网站”或“我们”）如何收集、使用和披露您的个人信息。

收集个人信息
当您访问本网站时，我们会收集有关您设备、您与本网站互动以及处理您的购买所需的信息。如果您联系我们寻求客户支持，我们也可能会收集其他信息。在本隐私政策中，我们将任何能够唯一识别个人的信息（包括以下信息）称为“个人信息”。请参阅以下列表，了解更多关于我们收集哪些个人信息以及收集原因的信息。

设备信息
收集的个人信息示例：网络浏览器版本、IP 地址、时区、cookie 信息、您浏览的网站或产品、搜索词以及您与网站的互动方式。
收集目的：为了准确地为您加载网站，并对网站使用情况进行分析以优化我们的网站。
收集来源：当您使用 cookie、日志文件、网络信标、标签或像素访问我们的网站时自动收集。
出于商业目的披露：与我们的处理商 Shopify 共享。

订单信息
收集的个人信息示例：姓名、账单地址、收货地址、付款信息、电子邮件地址和电话号码。
收集目的：向您提供产品或服务以履行我们的合同，处理您的付款信息，安排发货，并向您提供发票和/或订单确认，与您沟通，筛查我们的订单是否存在潜在风险或欺诈，并在符合您与我们分享的偏好时，向您提供与我们的产品或服务相关的信息或广告。
数据来源：从您处收集。
出于商业目的披露：与我们的处理商 Shopify，以及为订单履约所需的销售渠道、支付网关、运输和履行服务共享。

客户支持信息
收集的个人信息示例：姓名、联系方式、订单信息以及您在咨询中主动提供的内容。
收集目的：为客户提供支持。
数据来源：从您处收集。
出于商业目的披露：与提供客户支持所需的服务提供商共享。

未成年人
本网站不面向未满 18 岁的个人。我们不会故意收集儿童的个人信息。如果您是家长或监护人，并且认为您的孩子已向我们提供了个人信息，请通过本网站公布的联系方式联系我们，要求删除。

分享个人信息
我们会与服务提供商共享您的个人信息，以帮助我们向您提供服务并履行与您签订的合同。例如：
我们使用 Shopify 为我们的在线商店提供技术支持。您可以点击此处了解更多关于 Shopify 如何使用您的个人信息的信息：https://www.shopify.com/legal/privacy。
我们可能会共享您的个人信息，以遵守适用的法律法规，回应我们收到的传票、搜查令或其他合法的信息请求，或以其他方式保护我们的权利。

行为广告
如上所述，我们可能会使用您的个人信息，向您提供我们认为您可能感兴趣的定向广告或营销信息。有关定向广告如何运作的更多信息，您可以访问网络广告联盟 (“NAI”) 的教育页面：http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work。
您可以通过相关广告平台提供的设置页面选择退出定向广告，例如 Facebook、Google、Bing，或访问数字广告联盟退出门户：http://optout.aboutads.info/。

使用个人信息
我们使用您的个人信息为您提供服务，包括：提供产品销售、处理付款、发货和完成您的订单，以及让您及时了解新产品、服务和优惠。

法律依据
根据《通用数据保护条例》（“GDPR”），如果您是欧洲经济区（“EEA”）的居民，我们将基于以下合法依据处理您的个人信息：您的同意；您与本网站之间合同的履行；遵守我们的法律义务；保护您的切身利益；执行符合公共利益的任务；以及我们的合法利益，但这不会凌驾于您的基本权利和自由之上。

保留
当您通过本网站下单时，我们会保留您的个人信息以作记录，除非您要求我们删除这些信息。

自动决策
如果您是欧洲经济区居民，当仅基于自动化决策（包括用户画像）的处理对您产生法律效力或以其他方式对您造成重大影响时，您有权反对该处理。我们的支付处理商 Shopify 使用有限的自动化决策来防止欺诈，但这不会对您造成法律或其他方面的重大影响。

您的权利
如果您是欧洲经济区或加利福尼亚州居民，您有权访问我们持有的关于您的个人信息，将其转移到新的服务，并要求更正、更新或删除您的个人信息。如需行使这些权利，请通过本网站公布的联系方式与我们联系。

Cookie
Cookie 是您访问我们网站时下载到您的计算机或设备上的一小段信息。我们使用功能性 Cookie、性能 Cookie、广告 Cookie 以及社交媒体或内容 Cookie，以改善浏览体验、记住偏好、分析网站使用情况并提供服务。
我们使用 Shopify 商店运行所必需的 Cookie，以及报告和分析相关 Cookie，包括 _ab、_secure_session_id、cart、cart_sig、checkout_token、_tracking_consent、_landing_page、_orig_referrer、_s、_shopify_fs、_shopify_s、_shopify_sa_p、_shopify_sa_t、_shopify_y 和 _y 等。
您可以通过浏览器设置控制和管理 Cookie。删除或阻止 Cookie 可能会影响您的用户体验，并导致您无法完全访问网站的部分内容。

请勿追踪
由于业界对于如何响应“请勿追踪”信号尚无统一共识，因此，当我们在您的浏览器中检测到此类信号时，我们不会改变我们的数据收集和使用做法。

变化
我们可能会不时更新本隐私政策，例如，为了反映我们做法的变化，或者出于其他运营、法律或监管方面的原因。
`.trim(),
    },
    advertising: {
      title: '广告法声明',
      text: `
广告法声明
本网站页面信息仅用于展示长沙仁毅机械制造有限公司的企业情况、产品与服务信息。我们尽力避免使用绝对化、极限化或可能引起误解的宣传用语。
如果您发现本网站存在任何可能违反广告相关法律法规的内容，请通过 info@csrenyi.com 与我们联系。我们将在核实后及时修正。
`.trim(),
    },
    legal: {
      title: '法律声明',
      text: `
法律声明
欢迎访问 csrenyi.com。本网站由长沙仁毅机械制造有限公司运营。您访问、浏览或使用本网站，即表示您已阅读、理解并同意本法律声明。

网站使用
您应遵守适用法律法规和社会公共秩序，不得利用本网站从事违法违规活动，不得攻击、干扰或破坏本网站的正常运行。

内容声明
本网站发布的产品图片、参数、文字和其他资料仅供参考，不构成任何形式的承诺或保证。具体产品配置、供货范围和技术参数以双方最终确认的合同或技术文件为准。

知识产权
本网站的文字、图片、版式、商标、标识及其他内容受相关法律保护。未经授权，任何单位或个人不得擅自复制、转载、传播、改编或用于商业用途。

免责声明
我们会尽力维护网站内容的准确性和及时性，但不保证网站内容完全无误或持续可用。因使用或无法使用本网站而产生的损失，本网站在法律允许范围内不承担责任。

法律适用
本声明的解释、执行及争议解决适用中华人民共和国法律。
`.trim(),
    },
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      text: `
Privacy Policy
This Privacy Policy describes how csrenyi.com (the “Site”, “we”, “us” or “our”) collects, uses and discloses your personal information when you visit the Site or purchase goods from the Site.

Collecting Personal Information
When you visit the Site, we collect information about your device, your interaction with the Site, and information needed to process your purchases. We may also collect additional information if you contact us for customer support. In this policy, “personal information” means any information that can uniquely identify an individual.

Device Information
Examples of personal information collected: web browser version, IP address, time zone, cookie information, pages or products viewed, search terms and how you interact with the Site.
Purpose of collection: to load the Site accurately for you and to perform analytics on Site usage so that we can optimize our Site.
Source of collection: collected automatically when you access our Site using cookies, log files, web beacons, tags or pixels.
Disclosure for a business purpose: shared with our processor Shopify and other service providers required to operate the Site.

Order Information
Examples of personal information collected: name, billing address, shipping address, payment information, email address and phone number.
Purpose of collection: to provide products or services to fulfill our contract with you, process payment information, arrange shipping, provide invoices and/or order confirmations, communicate with you, screen orders for risk or fraud, and provide information or advertising relating to our products or services when consistent with your preferences.
Source of collection: collected from you.
Disclosure for a business purpose: shared with Shopify, sales channels, payment gateways, shipping and fulfillment service providers as needed.

Customer Support Information
Examples of personal information collected: name, contact details, order information and the information you provide in your request.
Purpose of collection: to provide customer support.
Source of collection: collected from you.
Disclosure for a business purpose: shared with service providers needed to provide customer support.

Minors
The Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us through the contact details published on the Site to request deletion.

Sharing Personal Information
We share your personal information with service providers to help us provide our services and fulfill our contracts with you. For example, we use Shopify to power our online store. You can read more about how Shopify uses personal information here: https://www.shopify.com/legal/privacy.
We may also share your personal information to comply with applicable laws and regulations, respond to subpoenas, search warrants or other lawful requests for information, or otherwise protect our rights.

Behavioural Advertising
We may use your personal information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. You can learn more about how targeted advertising works at the Network Advertising Initiative educational page: http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
You may opt out of targeted advertising through the relevant advertising platforms, including Facebook, Google and Bing, or through the Digital Advertising Alliance opt-out portal: http://optout.aboutads.info/.

Using Personal Information
We use your personal information to provide our services, including offering products for sale, processing payments, shipping and fulfilling your orders, and keeping you informed about new products, services and offers.

Lawful Basis
If you are a resident of the European Economic Area, we process your personal information under the General Data Protection Regulation (“GDPR”) based on your consent, performance of a contract, compliance with legal obligations, protection of vital interests, public interest tasks, and our legitimate interests where they do not override your fundamental rights and freedoms.

Retention
When you place an order through the Site, we retain your personal information for our records unless and until you ask us to delete it.

Automatic Decision-Making
If you are an EEA resident, you have the right to object to processing based solely on automated decision-making where that decision has a legal or similarly significant effect on you. Shopify uses limited automated decision-making to prevent fraud, which does not have a legal or similarly significant effect on you.

Your Rights
If you are a resident of the EEA or California, you have the right to access the personal information we hold about you, port it to a new service, and ask that your personal information be corrected, updated or deleted. To exercise these rights, please contact us through the contact details published on the Site.

Cookies
A cookie is a small amount of information downloaded to your computer or device when you visit our Site. We use functional, performance, advertising, social media and content cookies to improve your browsing experience, remember preferences, analyze Site usage and provide our services.
We use cookies necessary for Shopify store operation and analytics, including _ab, _secure_session_id, cart, cart_sig, checkout_token, _tracking_consent, _landing_page, _orig_referrer, _s, _shopify_fs, _shopify_s, _shopify_sa_p, _shopify_sa_t, _shopify_y and _y.
You can control and manage cookies through your browser settings. Removing or blocking cookies may negatively impact your user experience and parts of the Site may no longer be fully accessible.

Do Not Track
Because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.

Changes
We may update this Privacy Policy from time to time to reflect changes to our practices or for operational, legal or regulatory reasons.
`.trim(),
    },
    advertising: {
      title: 'Advertising Law Statement',
      text: `
Advertising Law Statement
The information on this Site is provided to introduce Changsha Renyi Machinery Manufacturing Co., Ltd., its products and services. We make reasonable efforts to avoid absolute, exaggerated or misleading advertising expressions.
If you find any content on this Site that may violate advertising laws or regulations, please contact us at info@csrenyi.com. We will review and correct the content promptly when appropriate.
`.trim(),
    },
    legal: {
      title: 'Legal Statement',
      text: `
Legal Statement
Welcome to csrenyi.com. This Site is operated by Changsha Renyi Machinery Manufacturing Co., Ltd. By accessing, browsing or using this Site, you acknowledge that you have read, understood and agreed to this Legal Statement.

Use of the Site
You must comply with applicable laws and public order. You may not use this Site for illegal activities or attack, interfere with or damage the normal operation of the Site.

Content Statement
Product images, parameters, text and other materials published on this Site are for reference only and do not constitute any commitment or warranty. Specific product configuration, scope of supply and technical parameters are subject to the final contract or technical documents confirmed by both parties.

Intellectual Property
Text, images, layouts, trademarks, logos and other content on this Site are protected by law. No organization or individual may copy, reproduce, distribute, adapt or use them commercially without authorization.

Disclaimer
We make reasonable efforts to maintain the accuracy and timeliness of Site content, but we do not guarantee that the content is error-free or continuously available. To the extent permitted by law, we are not liable for losses arising from use of, or inability to use, this Site.

Governing Law
The interpretation, execution and dispute resolution of this statement are governed by the laws of the People’s Republic of China.
`.trim(),
    },
  },
  ru: {
    privacy: {
      title: 'Политика конфиденциальности',
      text: `
Политика конфиденциальности
Настоящая Политика конфиденциальности описывает, как csrenyi.com («Сайт», «мы», «нас» или «наш») собирает, использует и раскрывает ваши персональные данные при посещении Сайта или покупке товаров через Сайт.

Сбор персональных данных
При посещении Сайта мы собираем сведения о вашем устройстве, взаимодействии с Сайтом и информацию, необходимую для обработки покупок. Мы также можем собирать дополнительную информацию, если вы обращаетесь за поддержкой клиентов. В этой политике «персональные данные» означают любую информацию, позволяющую идентифицировать конкретное лицо.

Информация об устройстве
Примеры собираемых данных: версия браузера, IP-адрес, часовой пояс, сведения cookie, просмотренные страницы или товары, поисковые запросы и способы взаимодействия с Сайтом.
Цель сбора: корректная загрузка Сайта для вас и анализ использования Сайта для его оптимизации.
Источник сбора: автоматически при доступе к Сайту с использованием cookie, файлов журнала, веб-маяков, тегов или пикселей.
Раскрытие в деловых целях: передается нашему обработчику Shopify и поставщикам услуг, необходимым для работы Сайта.

Информация о заказе
Примеры собираемых данных: имя, платежный адрес, адрес доставки, платежная информация, адрес электронной почты и номер телефона.
Цель сбора: предоставление товаров или услуг, обработка оплаты, организация доставки, предоставление счетов и/или подтверждений заказа, связь с вами, проверка заказов на риск или мошенничество, а также предоставление информации или рекламы о наших товарах и услугах в соответствии с вашими предпочтениями.
Источник сбора: от вас.
Раскрытие в деловых целях: передается Shopify, каналам продаж, платежным шлюзам, службам доставки и исполнения заказов по мере необходимости.

Информация поддержки клиентов
Примеры собираемых данных: имя, контактные данные, информация о заказе и сведения, которые вы предоставляете в обращении.
Цель сбора: предоставление поддержки клиентов.
Источник сбора: от вас.
Раскрытие в деловых целях: передается поставщикам услуг, необходимым для предоставления поддержки.

Несовершеннолетние
Сайт не предназначен для лиц младше 18 лет. Мы сознательно не собираем персональные данные детей. Если вы являетесь родителем или опекуном и считаете, что ребенок предоставил нам персональные данные, свяжитесь с нами через контактные данные на Сайте для запроса удаления.

Передача персональных данных
Мы передаем ваши персональные данные поставщикам услуг, чтобы предоставлять сервисы и исполнять договоры с вами. Например, мы используем Shopify для работы интернет-магазина. Подробнее о том, как Shopify использует персональные данные: https://www.shopify.com/legal/privacy.
Мы также можем раскрывать персональные данные для соблюдения применимых законов и правил, ответа на повестки, ордера на обыск или иные законные запросы, либо для защиты наших прав.

Поведенческая реклама
Мы можем использовать ваши персональные данные для показа целевой рекламы или маркетинговых сообщений, которые могут быть вам интересны. Подробнее о работе целевой рекламы: http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
Вы можете отказаться от целевой рекламы через настройки соответствующих рекламных платформ, включая Facebook, Google и Bing, или через портал Digital Advertising Alliance: http://optout.aboutads.info/.

Использование персональных данных
Мы используем персональные данные для предоставления услуг, включая продажу товаров, обработку платежей, доставку и выполнение заказов, а также информирование о новых товарах, услугах и предложениях.

Правовое основание
Если вы являетесь резидентом Европейской экономической зоны, мы обрабатываем персональные данные в соответствии с GDPR на основании вашего согласия, исполнения договора, соблюдения юридических обязанностей, защиты жизненно важных интересов, задач общественного интереса и наших законных интересов, если они не преобладают над вашими основными правами и свободами.

Хранение
Когда вы оформляете заказ через Сайт, мы сохраняем персональные данные для наших записей, пока вы не попросите нас удалить их.

Автоматизированное принятие решений
Если вы являетесь резидентом ЕЭЗ, вы имеете право возражать против обработки, основанной исключительно на автоматизированном принятии решений, если она имеет юридические или аналогично значимые последствия. Shopify использует ограниченные автоматизированные решения для предотвращения мошенничества, которые не имеют таких последствий.

Ваши права
Если вы являетесь резидентом ЕЭЗ или Калифорнии, вы имеете право получить доступ к персональным данным, которые мы храним о вас, перенести их в другой сервис, а также запросить исправление, обновление или удаление. Для реализации этих прав свяжитесь с нами через контактные данные, опубликованные на Сайте.

Cookie
Cookie — это небольшой объем информации, загружаемый на ваш компьютер или устройство при посещении Сайта. Мы используем функциональные, аналитические, рекламные, социальные и контентные cookie для улучшения просмотра, запоминания предпочтений, анализа использования Сайта и предоставления услуг.
Мы используем cookie, необходимые для работы магазина Shopify и аналитики, включая _ab, _secure_session_id, cart, cart_sig, checkout_token, _tracking_consent, _landing_page, _orig_referrer, _s, _shopify_fs, _shopify_s, _shopify_sa_p, _shopify_sa_t, _shopify_y и _y.
Вы можете управлять cookie через настройки браузера. Удаление или блокировка cookie может ухудшить пользовательский опыт, и некоторые разделы Сайта могут быть недоступны полностью.

Do Not Track
Поскольку в отрасли нет единого подхода к сигналам «Do Not Track», мы не изменяем практики сбора и использования данных при обнаружении такого сигнала в браузере.

Изменения
Мы можем время от времени обновлять настоящую Политику конфиденциальности, чтобы отразить изменения практик или по операционным, юридическим либо регуляторным причинам.
`.trim(),
    },
    advertising: {
      title: 'Заявление о рекламе',
      text: `
Заявление о рекламе
Информация на этом Сайте предназначена для представления компании Changsha Renyi Machinery Manufacturing Co., Ltd., ее продукции и услуг. Мы прилагаем разумные усилия, чтобы избегать абсолютных, преувеличенных или вводящих в заблуждение рекламных формулировок.
Если вы обнаружите на Сайте материалы, которые могут нарушать законы или правила о рекламе, свяжитесь с нами по адресу info@csrenyi.com. После проверки мы своевременно исправим соответствующий контент.
`.trim(),
    },
    legal: {
      title: 'Правовое заявление',
      text: `
Правовое заявление
Добро пожаловать на csrenyi.com. Сайт управляется компанией Changsha Renyi Machinery Manufacturing Co., Ltd. Получая доступ, просматривая или используя Сайт, вы подтверждаете, что прочитали, поняли и согласны с настоящим Правовым заявлением.

Использование сайта
Вы обязаны соблюдать применимые законы и общественный порядок. Запрещено использовать Сайт для незаконной деятельности, атаковать, вмешиваться или нарушать нормальную работу Сайта.

Заявление о содержании
Изображения продукции, параметры, тексты и другие материалы на Сайте предоставлены только для справки и не являются обязательством или гарантией. Конкретная конфигурация продукции, объем поставки и технические параметры определяются окончательным договором или техническими документами, подтвержденными сторонами.

Интеллектуальная собственность
Тексты, изображения, макеты, товарные знаки, логотипы и другой контент Сайта защищены законом. Любое копирование, воспроизведение, распространение, изменение или коммерческое использование без разрешения запрещено.

Отказ от ответственности
Мы принимаем разумные меры для поддержания точности и актуальности содержимого Сайта, но не гарантируем отсутствие ошибок или постоянную доступность. В пределах, разрешенных законом, мы не несем ответственности за убытки, возникшие в результате использования или невозможности использования Сайта.

Применимое право
Толкование, исполнение и разрешение споров по настоящему заявлению регулируются законодательством Китайской Народной Республики.
`.trim(),
    },
  },
  es: {
    privacy: {
      title: 'Política de privacidad',
      text: `
Política de privacidad
Esta Política de privacidad describe cómo csrenyi.com (el “Sitio”, “nosotros” o “nuestro”) recopila, utiliza y divulga su información personal cuando visita el Sitio o compra productos en el Sitio.

Recopilación de información personal
Cuando visita el Sitio, recopilamos información sobre su dispositivo, su interacción con el Sitio y la información necesaria para procesar sus compras. También podemos recopilar información adicional si se comunica con nosotros para obtener atención al cliente. En esta política, “información personal” significa cualquier información que pueda identificar de forma única a una persona.

Información del dispositivo
Ejemplos de información recopilada: versión del navegador, dirección IP, zona horaria, información de cookies, páginas o productos vistos, términos de búsqueda y forma en que interactúa con el Sitio.
Finalidad de la recopilación: cargar el Sitio correctamente para usted y realizar análisis del uso del Sitio para optimizarlo.
Fuente de recopilación: recopilada automáticamente cuando accede al Sitio mediante cookies, archivos de registro, balizas web, etiquetas o píxeles.
Divulgación con fines comerciales: compartida con nuestro procesador Shopify y otros proveedores de servicios necesarios para operar el Sitio.

Información del pedido
Ejemplos de información recopilada: nombre, dirección de facturación, dirección de envío, información de pago, correo electrónico y número de teléfono.
Finalidad de la recopilación: proporcionarle productos o servicios para cumplir nuestro contrato con usted, procesar pagos, organizar envíos, proporcionar facturas y/o confirmaciones de pedido, comunicarnos con usted, revisar pedidos por riesgo o fraude y proporcionarle información o publicidad relacionada con nuestros productos o servicios cuando sea coherente con sus preferencias.
Fuente de recopilación: recopilada de usted.
Divulgación con fines comerciales: compartida con Shopify, canales de venta, pasarelas de pago, servicios de envío y cumplimiento según sea necesario.

Información de atención al cliente
Ejemplos de información recopilada: nombre, datos de contacto, información del pedido y la información que proporcione en su consulta.
Finalidad de la recopilación: prestar atención al cliente.
Fuente de recopilación: recopilada de usted.
Divulgación con fines comerciales: compartida con proveedores de servicios necesarios para prestar atención al cliente.

Menores
El Sitio no está dirigido a personas menores de 18 años. No recopilamos intencionalmente información personal de menores. Si usted es padre, madre o tutor y cree que su hijo nos ha proporcionado información personal, contáctenos mediante los datos publicados en el Sitio para solicitar su eliminación.

Compartir información personal
Compartimos su información personal con proveedores de servicios para ayudarnos a prestar nuestros servicios y cumplir nuestros contratos con usted. Por ejemplo, usamos Shopify para impulsar nuestra tienda en línea. Puede obtener más información sobre cómo Shopify utiliza la información personal aquí: https://www.shopify.com/legal/privacy.
También podemos compartir su información personal para cumplir las leyes y regulaciones aplicables, responder a citaciones, órdenes de registro u otras solicitudes legales de información, o proteger nuestros derechos.

Publicidad conductual
Podemos utilizar su información personal para ofrecerle anuncios dirigidos o comunicaciones de marketing que creemos que pueden interesarle. Puede obtener más información sobre cómo funciona la publicidad dirigida en la página educativa de Network Advertising Initiative: http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
Puede optar por no recibir publicidad dirigida mediante la configuración de las plataformas correspondientes, incluidas Facebook, Google y Bing, o a través del portal de exclusión de Digital Advertising Alliance: http://optout.aboutads.info/.

Uso de información personal
Utilizamos su información personal para prestar nuestros servicios, incluida la venta de productos, el procesamiento de pagos, el envío y cumplimiento de pedidos, y para mantenerlo informado sobre nuevos productos, servicios y ofertas.

Base legal
Si reside en el Espacio Económico Europeo, procesamos su información personal conforme al Reglamento General de Protección de Datos (“GDPR”) con base en su consentimiento, la ejecución de un contrato, el cumplimiento de obligaciones legales, la protección de intereses vitales, tareas de interés público y nuestros intereses legítimos cuando no prevalezcan sobre sus derechos y libertades fundamentales.

Retención
Cuando realiza un pedido a través del Sitio, conservamos su información personal en nuestros registros salvo que nos solicite eliminarla.

Toma de decisiones automatizada
Si reside en el EEE, tiene derecho a oponerse al tratamiento basado únicamente en decisiones automatizadas cuando produzca efectos legales o de importancia similar. Shopify utiliza decisiones automatizadas limitadas para prevenir el fraude, lo que no produce tales efectos.

Sus derechos
Si reside en el EEE o California, tiene derecho a acceder a la información personal que conservamos sobre usted, transferirla a un nuevo servicio y solicitar su corrección, actualización o eliminación. Para ejercer estos derechos, contáctenos mediante los datos publicados en el Sitio.

Cookies
Una cookie es una pequeña cantidad de información que se descarga en su computadora o dispositivo cuando visita nuestro Sitio. Utilizamos cookies funcionales, de rendimiento, publicitarias, de redes sociales y de contenido para mejorar su experiencia, recordar preferencias, analizar el uso del Sitio y prestar nuestros servicios.
Utilizamos cookies necesarias para el funcionamiento de la tienda Shopify y análisis, incluidas _ab, _secure_session_id, cart, cart_sig, checkout_token, _tracking_consent, _landing_page, _orig_referrer, _s, _shopify_fs, _shopify_s, _shopify_sa_p, _shopify_sa_t, _shopify_y y _y.
Puede controlar y administrar las cookies mediante la configuración de su navegador. Eliminar o bloquear cookies puede afectar negativamente su experiencia y algunas partes del Sitio pueden dejar de estar plenamente disponibles.

No rastrear
Dado que no existe un consenso uniforme en la industria sobre cómo responder a las señales “Do Not Track”, no modificamos nuestras prácticas de recopilación y uso de datos cuando detectamos dicha señal en su navegador.

Cambios
Podemos actualizar esta Política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por razones operativas, legales o regulatorias.
`.trim(),
    },
    advertising: {
      title: 'Declaración publicitaria',
      text: `
Declaración publicitaria
La información de este Sitio se proporciona para presentar a Changsha Renyi Machinery Manufacturing Co., Ltd., sus productos y servicios. Hacemos esfuerzos razonables para evitar expresiones publicitarias absolutas, exageradas o engañosas.
Si encuentra contenido en este Sitio que pueda infringir leyes o regulaciones publicitarias, contáctenos en info@csrenyi.com. Revisaremos y corregiremos el contenido de manera oportuna cuando corresponda.
`.trim(),
    },
    legal: {
      title: 'Aviso legal',
      text: `
Aviso legal
Bienvenido a csrenyi.com. Este Sitio es operado por Changsha Renyi Machinery Manufacturing Co., Ltd. Al acceder, navegar o utilizar este Sitio, usted reconoce que ha leído, entendido y aceptado este Aviso legal.

Uso del sitio
Debe cumplir con las leyes aplicables y el orden público. No puede utilizar este Sitio para actividades ilegales ni atacar, interferir o dañar el funcionamiento normal del Sitio.

Declaración de contenido
Las imágenes, parámetros, textos y otros materiales publicados en este Sitio son solo de referencia y no constituyen ningún compromiso ni garantía. La configuración específica del producto, el alcance del suministro y los parámetros técnicos estarán sujetos al contrato final o a los documentos técnicos confirmados por ambas partes.

Propiedad intelectual
Los textos, imágenes, diseños, marcas, logotipos y demás contenido de este Sitio están protegidos por la ley. Ninguna organización o persona puede copiarlos, reproducirlos, distribuirlos, adaptarlos o utilizarlos comercialmente sin autorización.

Descargo de responsabilidad
Hacemos esfuerzos razonables para mantener la precisión y actualidad del contenido del Sitio, pero no garantizamos que esté libre de errores o disponible de forma continua. En la medida permitida por la ley, no somos responsables por pérdidas derivadas del uso o la imposibilidad de uso de este Sitio.

Ley aplicable
La interpretación, ejecución y resolución de disputas de este aviso se regirán por las leyes de la República Popular China.
`.trim(),
    },
  },
};

const HEADING_LINES = new Set([
  '收集个人信息',
  '设备信息',
  '订单信息',
  '客户支持信息',
  '未成年人',
  '分享个人信息',
  '行为广告',
  '使用个人信息',
  '法律依据',
  '保留',
  '自动决策',
  '您的权利',
  'Cookie',
  '请勿追踪',
  '变化',
  '网站使用',
  '内容声明',
  '知识产权',
  '免责声明',
  '法律适用',
  'Collecting Personal Information',
  'Device Information',
  'Order Information',
  'Customer Support Information',
  'Minors',
  'Sharing Personal Information',
  'Behavioural Advertising',
  'Using Personal Information',
  'Lawful Basis',
  'Retention',
  'Automatic Decision-Making',
  'Your Rights',
  'Cookies',
  'Do Not Track',
  'Changes',
  'Use of the Site',
  'Content Statement',
  'Intellectual Property',
  'Disclaimer',
  'Governing Law',
  'Сбор персональных данных',
  'Информация об устройстве',
  'Информация о заказе',
  'Информация поддержки клиентов',
  'Несовершеннолетние',
  'Передача персональных данных',
  'Поведенческая реклама',
  'Использование персональных данных',
  'Правовое основание',
  'Хранение',
  'Автоматизированное принятие решений',
  'Ваши права',
  'Do Not Track',
  'Изменения',
  'Использование сайта',
  'Заявление о содержании',
  'Интеллектуальная собственность',
  'Отказ от ответственности',
  'Применимое право',
  'Recopilación de información personal',
  'Información del dispositivo',
  'Información del pedido',
  'Información de atención al cliente',
  'Menores',
  'Compartir información personal',
  'Publicidad conductual',
  'Uso de información personal',
  'Base legal',
  'Retención',
  'Toma de decisiones automatizada',
  'Sus derechos',
  'Cookies',
  'No rastrear',
  'Cambios',
  'Uso del sitio',
  'Declaración de contenido',
  'Propiedad intelectual',
  'Descargo de responsabilidad',
  'Ley aplicable',
]);

function normalizePath(pathname: string) {
  const cleanPath = pathname.split('#')[0]?.split('?')[0] ?? '/';
  const normalized = cleanPath.replace(/\/+/g, '/');

  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

function getLocaleAndBarePath(pathname: string): { locale: LegalLocale; barePath: string } {
  const normalized = normalizePath(pathname);

  for (const locale of ['en', 'ru', 'es'] satisfies LegalLocale[]) {
    const prefix = LOCALE_PREFIXES[locale];

    if (normalized === `${prefix}/` || normalized.startsWith(`${prefix}/`)) {
      return {
        locale,
        barePath: normalizePath(normalized.slice(prefix.length) || '/'),
      };
    }
  }

  return { locale: 'zh', barePath: normalized };
}

function getLegalPageKey(pathname: string): LegalPageKey | null {
  const { barePath } = getLocaleAndBarePath(pathname);
  const match = barePath.match(/^\/faluwenjian\/(136[123])\/$/);
  const pageId = match?.[1];

  return pageId ? (LEGAL_PAGE_IDS[pageId] ?? null) : null;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildLegalContentHtml(copy: LegalPageCopy) {
  const lines = copy.text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const bodyLines = lines[0] === copy.title ? lines.slice(1) : lines;

  return bodyLines
    .map((line) => {
      const escapedLine = escapeHtml(line);

      if (HEADING_LINES.has(line)) {
        return `<h2><strong><b>${escapedLine}</b></strong></h2>`;
      }

      return `<p>${escapedLine}</p>`;
    })
    .join(' ');
}

function buildLegalFooterLinksHtml(locale: LegalLocale) {
  const prefix = LOCALE_PREFIXES[locale];
  const links = LEGAL_FOOTER_LINKS[locale]
    .map((link) => `<a href="${prefix}/faluwenjian/${link.id}/">${link.label}</a>`)
    .join('&nbsp;&nbsp;&nbsp;&nbsp;');

  return `<div class="footer-contacts-nav1"> <div class="container"> <div class="row row-30"> <div class="col-md-18 col-sm-14 "> <div class="footer-contacts"> <div style="padding-top:40px;"> ${links} </div> </div> </div> <div class="col-md-6 col-sm-14 hidden-sm"> <div> <ul class="b-menu"> <li><img src="${RENYI_WHATSAPP_QR_IMAGE}" width="130" alt="WhatsApp二维码" /></li> <li><img src="${RENYI_WECHAT_OFFICIAL_ACCOUNT_QR_IMAGE}" width="130" alt="微信公众号二维码" /></li> </ul> </div> </div> </div> </div> </div>`;
}

export function getRenyiLegalPaths() {
  return (['zh', 'en', 'ru', 'es'] satisfies LegalLocale[]).flatMap((locale) =>
    Object.values(LEGAL_FOOTER_LINKS[locale]).map((link) => `${LOCALE_PREFIXES[locale]}/faluwenjian/${link.id}/`),
  );
}

export function getRenyiLegalPageTitle(pathname: string) {
  const { locale } = getLocaleAndBarePath(pathname);
  const pageKey = getLegalPageKey(pathname);

  return pageKey ? LEGAL_PAGE_COPY[locale][pageKey].title : null;
}

export function createRenyiLegalPageData<T extends { path: string; sourceUrl: string; title: string }>(
  template: T,
  pathname: string,
) {
  const title = getRenyiLegalPageTitle(pathname);

  if (!title) {
    return null;
  }

  return {
    ...template,
    path: normalizePath(pathname),
    sourceUrl: `https://csrenyi.com${normalizePath(pathname)}`,
    title: `${title} | 长沙仁毅机械制造有限公司 | 官网`,
  };
}

export function patchRenyiLegalPageHtml(html: string, pathname: string) {
  const { locale } = getLocaleAndBarePath(pathname);
  const pageKey = getLegalPageKey(pathname);

  if (!pageKey) {
    return html;
  }

  const copy = LEGAL_PAGE_COPY[locale][pageKey];

  return html
    .replace(
      /<h2 class="title02"><span>[\s\S]*?<\/span><\/h2>/,
      `<h2 class="title02"><span>${copy.title}</span></h2>`,
    )
    .replace(
      /<div class="content-text clearfix">[\s\S]*?<\/div>/,
      `<div class="content-text clearfix renyi-legal-content">${buildLegalContentHtml(copy)}</div>`,
    );
}

export function patchRenyiLegalFooterLinksHtml(html: string, pathname = '/') {
  const { locale } = getLocaleAndBarePath(pathname);
  const footerLinksHtml = buildLegalFooterLinksHtml(locale);

  if (html.includes('footer-contacts-nav1')) {
    return html.replace(
      /<div class="footer-contacts-nav1">[\s\S]*?(?=<div class="container-fluid footer-copy">)/,
      `${footerLinksHtml} `,
    );
  }

  return html.replace(
    /(<div class="container-fluid footer-copy">)/,
    `${footerLinksHtml} $1`,
  );
}
