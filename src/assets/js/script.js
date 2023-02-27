'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidd'); 
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidd');
    } 
  });

  document.querySelector('body').addEventListener('click', e => {
	  
    if (e.target.closest('.main-menu__link')) {
      e.preventDefault();

      const collLinks = document.querySelectorAll('.main-menu__link');
      collLinks.forEach(element => element.classList.remove('selected'));
      const collBlocks = document.querySelectorAll('.main-menu__dropdown');
      collBlocks.forEach(element => element.classList.remove('show'));

      const targetBlock = e.target.closest('.main-menu__item').querySelector('.main-menu__dropdown');
      if (targetBlock) {
        targetBlock.classList.add('show');
        e.target.classList.add('selected');
      }
    }
    if (!e.target.closest('.main-menu__item')) {
      const collLinks = document.querySelectorAll('.main-menu__link');
      collLinks.forEach(element => element.classList.remove('selected'));
      const collBlocks = document.querySelectorAll('.main-menu__dropdown');
      collBlocks.forEach(element => element.classList.remove('show'));
    }

    if (e.target.closest('.left-menu__link_sub')) {
      e.preventDefault();
      
      const collLinks = document.querySelectorAll('.left-menu__link_sub');
      // collLinks.forEach(element => element.classList.remove('selected'));
      const collBlocks = document.querySelectorAll('.left-menu__dropdown');
      //collBlocks.forEach(element => element.classList.remove('show'));
     
      const targetBlock = e.target.closest('.left-menu__item').querySelector('.left-menu__dropdown');
      if (targetBlock) {
        targetBlock.classList.toggle('show');
        e.target.classList.toggle('selected');
		    collBlocks.forEach(element => {if(element!=targetBlock) element.classList.remove('show')});
        collLinks.forEach(element =>  {if(element!=e.target) element.classList.remove('selected')})      
      }
    }
	
    if (!e.target.closest('.left-menu__link_sub') && !e.target.closest('.left-menu__dropdown')) {
      const collLinks = document.querySelectorAll('.left-menu__link_sub');
      collLinks.forEach(element => element.classList.remove('selected'));
      const collBlocks = document.querySelectorAll('.left-menu__dropdown');
      collBlocks.forEach(element => element.classList.remove('show'));
    }

    if (e.target.closest('.button-basket')) {
      e.preventDefault();
      e.target.closest('.button-basket').classList.add('active');
    }

    if (e.target.closest('.in-basket')) {
      e.target.closest('.in-basket').classList.add('active');
    }

    if (e.target.closest('.accordion-button')) {
      const collBlock = document.querySelectorAll('.accordion-item');
      collBlock.forEach(element => element.classList.remove('accordion-item-active'));

      const collContent = document.querySelectorAll('.main-services__images');
      
      e.target.closest('.accordion-item').classList.add('accordion-item-active');

      const targetLink = e.target.closest('.accordion-header').id.toString().slice(-1);
     
      collContent.forEach(element => {
        const targetBlock = element.id.toString().slice(-1);
        if (targetBlock === targetLink) {
          element.classList.add('show')
        } else {
          element.classList.remove('show')
        }
      });

    }

    if (e.target.closest('.filter-properties__item')) {
      const block = document.querySelectorAll('.filter-properties__item');
      block.forEach(element => element.classList.remove('active'));
      e.target.closest('.filter-properties__item').classList.add('active');
    }

    if (e.target.closest('.button-filter')) {
      e.preventDefault();

      const targetBlock = e.target.closest('.filter-properties__item').querySelector('.chekbox');
      if (targetBlock) {
        const check = e.target.closest('.filter-properties__item').querySelectorAll('input[type=checkbox]');
        const target = e.target.closest('.filter-properties__item').querySelector('span.count');
        let count = 0;
        check.forEach(element => {
          if (element.checked) {
            count++;          
          }
        });
        if (count != 0) {
          target.textContent = count;
          e.target.closest('.filter-properties__item').classList.add('filter-active');
        } else {
          target.textContent = '';
          e.target.closest('.filter-properties__item').classList.remove('filter-active');
        }
        
        const block = document.querySelectorAll('.filter-properties__item');
        block.forEach(element => element.classList.remove('active'));  
      }

      const targetPrice = e.target.closest('.filter-properties__item').querySelector('.filter-price');
      if (targetPrice) {
        const minValue = e.target.closest('.filter-properties__item').querySelector('.price-input-min').value;
        const maxValue = e.target.closest('.filter-properties__item').querySelector('.price-input-max').value;

        const target = e.target.closest('.filter-properties__item').querySelector('span.count');
        target.textContent = `${minValue} - ${maxValue}`;
        e.target.closest('.filter-properties__item').classList.remove('active');
        e.target.closest('.filter-properties__item').classList.add('filter-active');
      }
      
    }

    if (e.target.closest('.filter-color li')) {
      const blocks = e.target.closest('.filter-color').querySelectorAll('li');
      blocks.forEach(element => element.classList.remove('selected'));
      e.target.classList.add('selected')
      const target = e.target.closest('.filter-properties__item').querySelector('span.count');
      target.textContent = e.target.textContent;
      e.target.closest('.filter-properties__item').classList.remove('active');
    }

    if (e.target.closest('.filter-properties__item__clear')) {
      e.preventDefault();
      e.target.closest('.filter-properties__item').classList.remove('active');
      e.target.closest('.filter-properties__item').classList.remove('filter-active');
      e.target.closest('.filter-properties__item').querySelector('span.count').textContent = '';
      const check = e.target.closest('.filter-properties__item').querySelectorAll('input[type=checkbox]');
      check.forEach(element => element.checked = false);
    }

    if (!e.target.closest('.filter-properties__item')) {
      const block = document.querySelectorAll('.filter-properties__item');
      block.forEach(element => element.classList.remove('active'));
    }

    if (e.target.closest('.button-all-clear')) {
      e.preventDefault();
      const check = document.querySelectorAll('.chekbox input[type=checkbox]');
      check.forEach(element => element.checked = false);
      const blocks = document.querySelectorAll('.filter-color li');
      blocks.forEach(element => element.classList.remove('selected'));
      const block = document.querySelectorAll('.filter-properties__item');
      block.forEach(element => element.classList.remove('filter-active'));
      const blockValue = document.querySelectorAll('.filter-properties__item span.count')
      blockValue.forEach(element => element.textContent = '');
    }

  });

	const swiper1 = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".main-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-next",
      prevEl: ".main-prev",
    },
  });

  (function ($) {
		$.fn.HvrSlider = function () {
		  return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
			  var hvr = $('<div>', {
				class: 'hvr',
				append: [
				  $('<div>', {
					class: 'hvr__images',
					append: $('<div>', {
					  class: 'hvr__sectors',
					}),
				  }),
				  $('<div>', {
					class: 'hvr__dots',
				  }),
				],
				insertAfter: el,
				prepend: el,
			  });
			  var hvrImages = $('.hvr__images', hvr);
			  var hvrImage = $('.swiper-slide', hvr);
			  var hvrSectors = $('.hvr__sectors', hvr);
			  var hvrDots = $('.hvr__dots', hvr);
			  el.prependTo(hvrImages);
			  hvrImage.each(function () {
				hvrSectors.prepend('<div class="hvr__sector"></div>');
				hvrDots.append('<div class="hvr__dot"></div>');
			  });
			  $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
			  var setActiveEl = function (el) {
				hvrImage.hide().eq(el.index()).show();
				$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
			  };
			  $('.hvr__sector', hvrSectors).hover(function () {
				setActiveEl($(this));
			  });
			  hvrSectors.on('touchmove', function (e) {
				e.preventDefault();
				var position = e.originalEvent.changedTouches[0];
				var target = document.elementFromPoint(position.clientX, position.clientY);
				if ($(target).is('.hvr__sector')) {
				  setActiveEl($(target));
				}
			  });
			}
		  });
		};
	})(jQuery);

  const widthScreen = window.screen.width; 
   
    if (widthScreen > 991) {
        $('.images-preview').HvrSlider();
    } else {
        const productSlider = new Swiper(".images-preview", {
            allowTouchMove: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 0,
            speed: 800,
            pagination: {
                el: ".images-preview-pagination",
                clickable: true,
            },
        });     
    }

  setTimeout(function() {
    $('select').styler();
  }, 100)

  const swiper2 = new Swiper(".portfolio-slider", {
    allowTouchMove: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: ".portfolio-next",
      prevEl: ".portfolio-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  const swiper3 = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews-next",
      prevEl: ".reviews-prev",
    },
  });

  $(window).scroll(function(){ if($(this).scrollTop() > 550) $('#scroller').fadeIn(700); else $('#scroller').fadeOut(700); });
  $('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 0); return false;});

  $('.sidebar-button').click(function (e) {
    // $(this).toggleClass('active'); 
    $('.sidebar').slideToggle(); 
  });

  const swiper4 = new Swiper(".text-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".text-next",
      prevEl: ".text-prev",
    },
  });

  if (document.querySelector('.input-count')) {
    const collection = document.querySelectorAll('.input-count');
    collection.forEach((element) => {
      element.addEventListener('focus', e => {
        const value = element.value.replace(' шт.', ' ');
        element.value = value;
      });
    });
  }
  if (document.querySelector('.input-count')) {
    const collection = document.querySelectorAll('.input-count');
    collection.forEach((element) => {
      element.addEventListener('blur', e => {
        const value = element.value;
        element.value = value.trim() + ' шт.';
      });
    });
  }
  if (document.querySelector('.input-count')) {
    const collection = document.querySelectorAll('.input-count');
    collection.forEach((element) => {
      element.addEventListener('input', e => {
        element.value = element.value.replace(/[^\d]/g, '');
      }); 
    });
  }
  
  jQuery(function($){
    $(".phone").mask("8 (999) 999 - 99 - 99");
  });

  if (document.getElementById('file')) {
    document.getElementById('file').addEventListener('change', function (e) {
      if (this.files && this.files.length == 1) {
          const textContainer = this.nextElementSibling.querySelector('.field-file__label--text');
          const fileName = e.target.value.split('\\').pop();
          if (textContainer) {
              document.querySelector('a.clear').classList.add('show');
              textContainer.textContent = fileName || 'Прикрепить реквизиты и макет';
              return true;
          }
      }
      return false;
    });
    document.querySelector('a.clear').addEventListener('click', e => {
      document.getElementById('file').value = '';
      document.querySelector('.field-file__label--text').textContent = 'Прикрепить реквизиты и макет';
      document.querySelector('a.clear').classList.remove('show');
    });
  }

  if (document.querySelector('.price-input')) {
    const collection = document.querySelectorAll('.price-input');
    collection.forEach((element) => {
      element.addEventListener('focus', e => {
        const value = element.value.replace(' p.', ' ');
        element.value = value;
      });
    });
  }
  if (document.querySelector('.price-input')) {
    const collection = document.querySelectorAll('.price-input');
    collection.forEach((element) => {
      element.addEventListener('blur', e => {
        const value = element.value;
        element.value = value + ' p.';
      });
    });
  }
  if (document.querySelector('.price-input')) {
    const collection = document.querySelectorAll('.price-input');
    collection.forEach((element) => {
      element.addEventListener('input', e => {
        element.value = element.value.replace(/[^\d]/g, '');
      }); 
    });
  }

  $('.filter-button').click(function (e) {
    // $(this).toggleClass('active'); 
    $('.filter-content').slideToggle(); 
  });

  const swiper6 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 7,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".basket-next",
      prevEl: ".basket-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
      }
    }
  });

  const swiper5 = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    thumbs: {
      swiper: swiper6,
      clickable: true,
    },
  });

  $(".basket-page__content_about").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 0);
  });


});
