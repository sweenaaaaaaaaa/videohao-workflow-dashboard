//弹出fun
$=jQuery;
function openwin(_html,_w,_h){
	var $winbox = $('.win-box');
	var $winContainer = $winbox.find('.win-container');
	var $winContent = $winbox.find('.win-content');
	$winContainer.css({ 'width': _w+'px', 'height': _h+'px', 'marginTop': -_h/2+'px', 'marginLeft': -_w/2+'px', });
	$winContent.html(_html);
	$winbox.addClass('win-box-show');
	$('body').css('overflow','hidden');
}
$(document)
.on('click', '.win-bg', function(){
	var $this = $(this);
	var $winBox = $this.parents('.win-box');
	$winBox.removeClass('win-box-show');
	$winBox.find('.win-content').html('');
	$('body').css('overflow','auto');
})
.on('click', '.win-box .win-close', function(){
	$('.win-bg').trigger('click');
});

$(function(){

    var $w_width = $(window).width();
	var $w_height = $(window).height();
    $(window).resize(function(){
        auto_js();
    });
    auto_js();
    function auto_js(){
        $w_width = $(window).width();
    	$w_height = $(window).height();
   
    }
    function _is_scroll(){
    	if ( $(document).scrollTop() > 10 ) {
    	    $('body').addClass('is_scroll');
    	}else{
    	    $('body').removeClass('is_scroll');
    	}
    }
    $(window).scroll(function() {
        _is_scroll()
    });
    _is_scroll()

    //WOW组件
    new WOW().init();

    //导航
	$('.m-btn').on('click', function(){
		$('.menu-box').addClass('show');
		$('.menu-box-bg').removeClass('hide');
		$('body').css('overflow','hidden');
		return false;
	});
	$('.menu-box-bg').on('click', function(){
		$('.menu-box').removeClass('show');
		$('.menu-box-bg').addClass('hide');
		$('.top-block .item').removeClass('cur');
		$('body').css('overflow','auto');
	});
	$('.header').click(function(event){
        event.stopPropagation();
    });
	$('.top-block .item').click(function(event){
        $(this).toggleClass('cur');
        $(this).siblings('.item').removeClass('cur');

    });
    $('body').on('click', function(){
		$('.top-block .item').removeClass('cur');
	});

	$('.menu-box .menu > li').mouseover(function(){
		if($w_width > 991) $(this).find('.sub-nav').stop().slideDown(500);
		// if($w_width > 991) $(this).siblings('li').stop().slideDown(500);
    });
    $('.menu-box .menu > li').mouseleave(function(){
        if($w_width > 991) $(this).find('.sub-nav').stop().slideUp(200);
    });

    $('.right_btn').on('click', function(){
		$('.header-right-win').addClass('win-show');
	});
	$('.header-right-win .right-win-close').on('click', function(){
		$('.header-right-win').removeClass('win-show');
	});


	//主页BANNER
	var video = document.getElementById('banner_video');
	var bannerTimer = null;
	var bannerVideoEndedHandler = null;

	function clear_banner_timer(){
	  if(bannerTimer){
	    clearTimeout(bannerTimer);
	    bannerTimer = null;
	  }
	}

	function schedule_banner_next(swiper, delay){
	  clear_banner_timer();
	  bannerTimer = setTimeout(function () {
	    console.log("Play2");
	    swiper.slideNext();
	    swiper.startAutoplay();
	  }, delay);
	}

	function schedule_banner_home(swiper, delay){
	  clear_banner_timer();
	  bannerTimer = setTimeout(function () {
	    console.log("Play1");
	    swiper.slideTo(0, 1000, false);
	    video_js(swiper);
	  }, delay);
	}

	var ind_banner = new Swiper ('.banner .swiper-container', {
	    // loop: true,
	    // autoplay : 5000,
	    speed:600,
	    pagination: '.banner-pagination',
	    nextButton: '.banner-next',
	    prevButton: '.banner-prev',
	    paginationClickable :true,
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    	swiperAnimateCache(swiper); //隐藏动画元素 
	    	swiperAnimate(swiper); //初始化完成开始动画
			if(swiper.activeIndex==0){
			  video_js(swiper);
			}else{
				schedule_banner_next(swiper, 6000);
			}
	    },
	    onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if(swiper.activeIndex==0){
	    		video_js(swiper);
    		}else if( swiper.activeIndex ==  swiper.slides.length - 1 ){
	    		schedule_banner_home(swiper, 6000);
	    	}else{
				schedule_banner_next(swiper, 6000);
			}
	    },
	   
	
	});

	function video_js(_this){
	  clear_banner_timer();
	  _this.stopAutoplay();
	  if(!video){
	    schedule_banner_next(_this, 6000);
	    return;
	  }
	  if(bannerVideoEndedHandler){
	    video.removeEventListener('ended', bannerVideoEndedHandler);
	  }
	  video.loop = false;
	  video.removeAttribute('loop');
	  video.muted = true;
	  video.playsInline = true;
	  video.setAttribute('playsinline', '');

	  var finishVideoSlide = function () {
	    clear_banner_timer();
	    video.removeEventListener('ended', finishVideoSlide);
	    console.log("Play ends");
	    _this.slideNext();
	    _this.startAutoplay();
	  };
	  bannerVideoEndedHandler = finishVideoSlide;
	  video.addEventListener('ended', finishVideoSlide, { once: true });

	  var armVideoFallback = function(){
	    var duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 35;
	    clear_banner_timer();
	    bannerTimer = setTimeout(finishVideoSlide, Math.ceil(duration * 1000) + 800);
	  };

	  video.load();
	  if(video.readyState > 0){
	    video.currentTime = 0;
	    armVideoFallback();
	  }else{
	    video.addEventListener('loadedmetadata', function(){
	      video.currentTime = 0;
	      armVideoFallback();
	    }, { once: true });
	  }
	  var playPromise = video.play();
	  if(playPromise && playPromise.catch){
	    playPromise.catch(function(){});
	  }
	}


	// $('.banner-a-btns .item').hover(function(){
	// 	$(this).addClass('cur').siblings().removeClass('cur');
	// });


	if( $('.ind02').length > 0 ){
		var ind02 = new Swiper ('.ind02 .swiper-container', {
			nextButton: '.s-btn-next',
    		prevButton: '.s-btn-prev',
			onInit: function(swiper){
	    		$('.ind02-btn-box a').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
		    },
	        onSlideChangeEnd: function(swiper){
	        	$('.ind02-btn-box a').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
	        },
	  	});
	  	$('.ind02-btn-box a').on('click', function(){
	  		ind02.slideTo( $(this).index() , 1000, false);
        	$(this).addClass('cur').siblings().removeClass('cur');
	  	});
  	}

	if( $('.ind04-workshop').length > 0 ){
		var ind04 = new Swiper ('.ind04-workshop .swiper-container', {
			loop: true,
		    // prevButton: '.swiper-btn-prev',
			nextButton: '.swiper-btn-next',
	  	});
  	}

	if ($(".gallery").length) {
	  	$('.gallery').each(function() {
	  		$(this).magnificPopup({
	  			delegate: 'a',
	  			type: 'image',
	  			gallery: {
	  			  enabled:true
	  			}
	  		});
	  	});
	}

	if ($(".video-popup").length) {
	    $(".video-popup").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: true,

			fixedContentPos: false
	    });
	}


	if( $('.about04').length > 0 ){
		var about04_swiper_tit = new Swiper ('.about04-swiper-tit .swiper-container', {
			slidesPerView : 5,
			// slidesPerGroup : 5,
			spaceBetween : 20,
			onInit: function(swiper){
		      $('.about04-swiper-tit .swiper-slide').eq(0).addClass('cur');
		    }
		});
		var about04_swiper_img = new Swiper ('.about04-swiper-img', {
			effect : 'cube',
			noSwiping : true,
			noSwipingClass : 'stop-swiping',
		});
		var about04_swiper_text = new Swiper ('.about04-swiper-text', {
			noSwiping : true,
			noSwipingClass : 'stop-swiping',
		});

		$('.about04-swiper-tit .swiper-slide').on('click', function(){
			$this = $(this);
			about04_swiper_tit.slideTo($this.index(), 1000, false);
			about04_swiper_img.slideTo($this.index(), 1000, false);
			about04_swiper_text.slideTo($this.index(), 1000, false);
			$this.addClass('cur').siblings().removeClass('cur');
		});

		$('.swiper-btn-prev').on('click', function(e) {
			var _activeIndex = $('.about04-swiper-tit .swiper-slide').index($('.about04-swiper-tit .swiper-slide.cur'));
			if (_activeIndex == 0) {
				about04_swiper_tit.slideTo(about04_swiper_tit.slides.length - 1, 1000);
				about04_swiper_img.slideTo(about04_swiper_tit.slides.length - 1, 1000);
				about04_swiper_text.slideTo(about04_swiper_tit.slides.length - 1, 1000);
				$('.about04-swiper-tit .swiper-slide').eq(about04_swiper_tit.slides.length - 1).addClass('cur').siblings().removeClass('cur');
				return
			}else{
				about04_swiper_tit.slideTo(_activeIndex - 1, 1000);
				about04_swiper_img.slideTo(_activeIndex - 1, 1000);
				about04_swiper_text.slideTo(_activeIndex - 1, 1000);
				$('.about04-swiper-tit .swiper-slide').eq(_activeIndex - 1).addClass('cur').siblings().removeClass('cur');
				return
			}
		});
		$('.swiper-btn-next').on('click', function(e) {
			var _activeIndex = $('.about04-swiper-tit .swiper-slide').index($('.about04-swiper-tit .swiper-slide.cur'));
			if (_activeIndex == about04_swiper_tit.slides.length - 1) {
				about04_swiper_tit.slideTo(0, 1000);
				about04_swiper_img.slideTo(0, 1000);
				about04_swiper_text.slideTo(0, 1000);
				$('.about04-swiper-tit .swiper-slide').eq(0).addClass('cur').siblings().removeClass('cur');
				return
			}else{
				about04_swiper_tit.slideTo(_activeIndex + 1, 1000);
				about04_swiper_img.slideTo(_activeIndex + 1, 1000);
				about04_swiper_text.slideTo(_activeIndex + 1, 1000);
				$('.about04-swiper-tit .swiper-slide').eq(_activeIndex + 1).addClass('cur').siblings().removeClass('cur');
				return
			}
		});
		
	}

	if( $('.job-btn').length > 0 ){
		$('.job-btn').on('click',function(){
			var $this = $(this);
			if(!$this.hasClass('jobdown')){
				$this.addClass('jobdown');
				$this.parents('tr').next('.job-show').addClass('jobdown');
			}else{
				$this.removeClass('jobdown');
				$this.parents('tr').next('.job-show').removeClass('jobdown');
			}
		});
	}

	$('.tab-head').each(function(){
		var $this = $(this);
		$this.find('.tab-head-item').on('click',function(){
			var $this = $(this);
			$this.addClass('cur').siblings('.tab-head-item').removeClass('cur');
			$this.parents('.tab-head').next('.tab-body').find('.tab-body-item').eq($this.index()).addClass('cur').siblings('.tab-body-item').removeClass('cur');
		});
		if( $this.find('.cur').length > 0 ){
			$this.find('.tab-head-item.cur').trigger('click');
		}else{
			$this.find('.tab-head-item').eq(0).trigger('click');
		}
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 50) {
			$(".goto-top").fadeIn(200);
		} else {
			$(".goto-top").fadeOut(200);
		}
	});
	$(".goto-top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		},
		500);
		return false;
	});

	var _aboutData = 0;
	$(window).scroll(function (event) {
        if( $('.js-number').length > 0 &&  _aboutData == 0){
        	if( $(document).scrollTop() + $(window).height()/4*3 > $('.js-number').offset().top ){
	    		var scroll1 = new CountUp("number01", 0, 31, 0, 2);
	    		var scroll2 = new CountUp("number02", 0, 72, 0, 1);
	    		var scroll3 = new CountUp("number03", 0, 34, 0, 1);
	    		var scroll4 = new CountUp("number04", 0, 2, 0, 1);
	    		var scroll5 = new CountUp("number05", 0, 8, 0, 1);
	    		var scroll6 = new CountUp("number06", 0, 16, 0, 1);
	            scroll1.start();
	    		scroll2.start();
	    		scroll3.start();
	    		scroll4.start();
	    		scroll5.start();
	    		scroll6.start();
	    		_aboutData = 1;
    		}
    	}
	});



	//视频弹出
	$(document).on('click', '.video-win-btn , .play-box', function(){
		var $win_w = $(window).width();
		var $this = $(this);
		var $this_video = $this.data('videourl');
		if( $win_w > 1000 ){ $win_w = 1000; }
		var _html = '<video autoplay="autoplay" controls="controls" width="'+$win_w*0.9+'" height="'+$win_w*0.9*0.7+'" style="background:#000;"><source src="'+$this_video+'" type="video/mp4">您的浏览器不支持 video 标签。</source></video>';
		openwin(_html,$win_w*0.9,$win_w*0.9*0.7);
	});

	var imgbox_large_Swiper = new Swiper('.imgbox-large .swiper-container', {
		// autoplay: 3000,
		speed: 100,
		// autoHeight: true, 
		onSlideChangeStart: function() {
			$('.imgbox-Small .active-nav').removeClass('active-nav')
			var activeNav = $('.imgbox-Small .swiper-slide').eq(imgbox_large_Swiper.activeIndex).addClass('active-nav')
			if (!activeNav.hasClass('swiper-slide-visible')) {
				if (activeNav.index() > imgbox_Small_Swiper.activeIndex) {
					var thumbsPerNav = Math.floor(imgbox_Small_Swiper.width / activeNav.width()) - 1
					imgbox_Small_Swiper.slideTo(activeNav.index() - thumbsPerNav)
				} else {
					imgbox_Small_Swiper.slideTo(activeNav.index())
				}
			}
		}
	})
	$('.imgbox-large .arrow-left, .imgbox-Small .arrow-left').on('click', function(e) {
		e.preventDefault()
		if (imgbox_large_Swiper.activeIndex == 0) {
			imgbox_large_Swiper.slideTo(imgbox_large_Swiper.slides.length - 1, 1000);
			return
		}
		imgbox_large_Swiper.slidePrev()
	})
	$('.imgbox-large .arrow-right, .imgbox-Small .arrow-right').on('click', function(e) {
		e.preventDefault()
		if (imgbox_large_Swiper.activeIndex == imgbox_large_Swiper.slides.length - 1) {
			imgbox_large_Swiper.slideTo(0, 1000);
			return
		}
		imgbox_large_Swiper.slideNext()
	})
	var imgbox_Small_Swiper = new Swiper('.imgbox-Small .swiper-container', {
		// direction: 'vertical',
		speed: 200,
		// slidesPerView: 'auto',
		allowTouchMove: false,
		slidesPerView: 5,
		spaceBetween: 4,
		simulateTouch : false,
		// onTap: function() {
		//  imgbox_large_Swiper.slideTo(imgbox_Small_Swiper.clickedIndex);
		// }
	});
	$('.imgbox-Small .swiper-slide').on('click', function() {
		var _index = $(this).index();
		imgbox_large_Swiper.slideTo(_index);
	});

	// Legacy Baidu share is disabled: the old HTTP endpoint is unreliable on HTTPS pages.

});

(function () {
	var monthLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	var renyiCatTradingViewPreset = {
		autosize: true,
		symbol: 'NYSE:CAT',
		interval: 'D',
		range: '12M',
		timezone: 'Etc/UTC',
		theme: 'light',
		style: '3',
		locale: 'en',
		withdateranges: true,
		hide_side_toolbar: false,
		hide_top_toolbar: false,
		hide_legend: false,
		allow_symbol_change: false,
		save_image: false,
		details: false,
		calendar: false,
		news: [],
		backgroundColor: '#fffaf0',
		gridColor: 'rgba(228, 171, 56, 0.24)',
		support_host: 'https://www.tradingview.com'
	};

	function getDateBadge(datetime) {
		var date = datetime ? new Date(datetime) : new Date();

		if (Number.isNaN(date.getTime())) {
			date = new Date();
		}

		return {
			day: String(date.getDate()).padStart(2, '0'),
			monthYear: monthLabels[date.getMonth()] + ' / ' + date.getFullYear()
		};
	}

	function readFallbackNews(container) {
		var items = [];
		var rows = container.querySelectorAll('.renyi-news-row-link');

		rows.forEach(function (row) {
			var title = row.querySelector('.renyi-news-copy h3');
			var summary = row.querySelector('.renyi-news-copy p');
			var day = row.querySelector('.renyi-news-date-day');
			var meta = row.querySelector('.renyi-news-date-meta');

			if (!title || !summary) {
				return;
			}

			items.push({
				title: title.textContent.trim(),
				summary: summary.textContent.trim(),
				href: row.getAttribute('href') || '#',
				dateBadge: {
					day: day ? day.textContent.trim() : '',
					monthYear: meta ? meta.textContent.trim() : ''
				}
			});
		});

		return items;
	}

	function createNewsRow(item) {
		var badge = item.dateBadge || getDateBadge(item.datetime);
		var article = document.createElement('article');
		var link = document.createElement('a');
		var dateBadge = document.createElement('div');
		var day = document.createElement('span');
		var meta = document.createElement('span');
		var copy = document.createElement('div');
		var title = document.createElement('h3');
		var summary = document.createElement('p');
		var rawHref = item.href || '#';

		article.className = 'renyi-news-row group flex flex-row border-b border-[#e5e7eb] last:border-b-0';
		link.className = 'renyi-news-row-link';
		link.href = rawHref;
		if (/^https?:\/\//i.test(rawHref)) {
			link.target = '_blank';
			link.rel = 'noopener noreferrer';
		}
		dateBadge.className = 'renyi-news-date-badge w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100';
		dateBadge.setAttribute('aria-hidden', 'true');
		day.className = 'renyi-news-date-day';
		meta.className = 'renyi-news-date-meta';
		copy.className = 'renyi-news-copy min-w-0';
		title.className = 'text-xl font-bold leading-snug text-slate-900';
		summary.className = 'mt-3 text-base leading-7 text-slate-600';

		day.textContent = badge.day;
		meta.textContent = badge.monthYear;
		title.textContent = item.title || '';
		summary.textContent = item.summary || '';

		dateBadge.appendChild(day);
		dateBadge.appendChild(meta);
		copy.appendChild(title);
		copy.appendChild(summary);
		link.appendChild(dateBadge);
		link.appendChild(copy);
		article.appendChild(link);

		return article;
	}

	function renderRenyiNews(container, liveItems) {
		var limit = Number(container.dataset.renyiNewsLimit || 5);
		var fallbackItems = container.renyiFallbackItems || readFallbackNews(container);
		var seen = {};
		var combined = [];

		container.renyiFallbackItems = fallbackItems;

		(liveItems || []).concat(fallbackItems).forEach(function (item) {
			var title = item && item.title ? item.title.trim() : '';

			if (!title || seen[title] || combined.length >= limit) {
				return;
			}

			seen[title] = true;
			combined.push(item);
		});

		if (!combined.length) {
			return;
		}

		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		var fragment = document.createDocumentFragment();
		combined.forEach(function (item) {
			fragment.appendChild(createNewsRow(item));
		});

		container.appendChild(fragment);
	}

	function initRenyiLiveNews() {
		var containers = document.querySelectorAll('.renyi-news-list[data-renyi-live-news="cat"]');

		if (!containers.length || !window.fetch) {
			return;
		}

		function load() {
			containers.forEach(function (container) {
				var locale = container.dataset.renyiNewsLocale || 'zh';

				fetch('/api/cat-news?locale=' + encodeURIComponent(locale), {
					cache: 'no-store',
					headers: {
						accept: 'application/json'
					}
				})
					.then(function (response) {
						if (!response.ok) {
							throw new Error('Unable to load live news');
						}

						return response.json();
					})
					.then(function (data) {
						var items = Array.isArray(data.items) ? data.items : [];

						if (!items.length) {
							return;
						}

						renderRenyiNews(container, items);
						container.dataset.renyiLiveLoaded = 'true';
						container.dataset.renyiLiveSource = data.source || '';
					})
					.catch(function () {
						delete container.dataset.renyiLiveLoaded;
					});
			});
		}

		containers.forEach(function (container) {
			if (!container.renyiFallbackItems) {
				container.renyiFallbackItems = readFallbackNews(container);
			}
		});

		load();
		window.setInterval(load, 5 * 60 * 1000);
	}

	function initRenyiCatTradingView() {
		var containers = document.querySelectorAll('.renyi-cat-chart[data-renyi-tradingview-cat="true"]');

		function render(container) {
			container.dataset.tradingviewReady = String(Date.now());
			container.innerHTML =
				'<div class="tradingview-widget-container__widget"></div>' +
				'<div class="tradingview-widget-copyright">' +
				'<a href="https://www.tradingview.com/symbols/NYSE-CAT/?utm_source=renyi.local&amp;utm_medium=widget_new&amp;utm_campaign=advanced-chart" rel="noopener nofollow" target="_blank">' +
						'<span class="blue-text">CAT stock chart</span>' +
					'</a>' +
					'<span class="trademark"> by TradingView</span>' +
				'</div>';

			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = true;
			script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js?renyi=' + Date.now();
			script.textContent = JSON.stringify(renyiCatTradingViewPreset);

			container.appendChild(script);
		}

		containers.forEach(function (container) {
			if (container.renyiTradingViewRefreshTimer) {
				window.clearInterval(container.renyiTradingViewRefreshTimer);
			}

			render(container);

			container.renyiTradingViewRefreshTimer = window.setInterval(function () {
				if (document.visibilityState === 'visible') {
					render(container);
				}
			}, 60 * 1000);
		});
	}

	function initRenyiNewsCenterEnhancements() {
		initRenyiLiveNews();
		initRenyiCatTradingView();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initRenyiNewsCenterEnhancements);
	} else {
		initRenyiNewsCenterEnhancements();
	}
})();
