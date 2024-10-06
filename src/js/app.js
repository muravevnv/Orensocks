import fslightbox from "fslightbox";
import Choices from "choices.js";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import noUiSlider from 'nouislider';

import './modules/accordeon.js'

var rangeSlider = document.querySelector('.js-range-slider');

if(rangeSlider) {

  var formatForSlider = {
    from: function (formatValues) {
        return Number(formatValues);
    },
    to: function(numericValue) {
        return Math.round(numericValue);
    }
  };

  noUiSlider.create(rangeSlider, {
      start: [20, 80],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      },
      format: formatForSlider,
      tooltips: {
        // tooltips are output only, so only a "to" is needed
        to: function(numericValue) {
            return numericValue.toFixed(0);
        }
    }
  });



  var formatValues = [
    document.querySelector('.js-range-input-min'),
    document.querySelector('.js-range-input-max')
  ];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    formatValues[handle].value = values[handle];
  });
}

const menu = document.querySelector(".js-menu");
const menuOpenBtn = document.querySelector('.js-menu-btn');

if (menu) {
  menuOpenBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  menuOpenBtn.classList.toggle("is-active");
  menu.classList.toggle("is-open");
}

function stickyHeader() {
  const header = document.querySelector('.header');
  const stickyPoint = 100; // точка, после которой хэдер становится залипающим

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= stickyPoint) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

stickyHeader();

if(document.querySelector('.js-hero-links-slider')) {
  const heroLinksSlider = new Swiper('.js-hero-links-slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      prevEl: '.js-hero-links-slider-prev',
      nextEl: '.js-hero-links-slider-next',
    },
  })
}

if(document.querySelector('.js-product-slider')) {
  const productSlider = new Swiper('.js-product-slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
      prevEl: '.js-product-slider-prev',
      nextEl: '.js-product-slider-next',
    },
    pagination: {
      el: '.swiper-pagination'
    }
  })
}

if(document.querySelector('.js-categories-slider')) {
  const productSlider = new Swiper('.js-categories-slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 8,
    navigation: {
      prevEl: '.js-categories-slider-prev',
      nextEl: '.js-categories-slider-next',
    },
    breakpoints: {
      768: {
        spaceBetween: 16,
      }
    }
  })
}

if(document.querySelector('.js-advantages-slider')) {
  const advantagesSlider = new Swiper('.js-advantages-slider', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    autoHeight: false,
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  })
}

if(document.querySelector('.js-serts-slider')) {
  const sertsSlider = new Swiper('.js-serts-slider', {
    modules: [Pagination],
    slidesPerView: 1.5,
    spaceBetween: 8,
    pagination:{
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  })
}

if(document.querySelector('.js-about-slider')) {
  const sertsSlider = new Swiper('.js-about-slider', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    pagination:{
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  })
}

const productCardsSliders = document.querySelectorAll('.js-product-cards-slider');

if(productCardsSliders.length) {
  productCardsSliders.forEach((slider) => {
    
    const productCardsSlider = new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 2.4,
      spaceBetween: 8,
      navigation: {
        prevEl: '.js-product-cards-slider-prev',
        nextEl: '.js-product-cards-slider-next',
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768:{ 
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
    })
  })
}


if(document.querySelector('.js-recent-slider')) {
    const recentSlider = new Swiper('.js-recent-slider', {
      modules: [Navigation],
      slidesPerView: 2.4,
      breakpoints: {
        560: {
          slidesPerView: 2,
        },
        768:{ 
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        }
      }
    })
}

const catalogBtn = document.querySelectorAll('.js-catalog-menu-btn');
const catalogMenu = document.querySelector('.js-catalog-menu');
const catalogMenuClose = document.querySelector('.js-catalog-menu-close');

if(catalogBtn.length) {

  catalogBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-active')
      catalogMenu.classList.toggle('is-open');
    })
  })

  catalogMenuClose.addEventListener('click', () => {
    catalogMenu.classList.remove('is-open');
  })

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if(!catalogBtn[0].contains(e.target) && !catalogBtn[1].contains(e.target) && !catalogMenu.contains(e.target)) {
      catalogMenu.classList.remove('is-open'); 
    }
  })

}

const catalogMenuItems = document.querySelectorAll('.js-catalog-menu-item');

if(catalogMenuItems.length) {

  const catalogMenuSection = document.querySelectorAll('.js-catalog-section');
  const catalogMenuSectionBack = document.querySelectorAll('.js-catalog-section-back');

  catalogMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      catalogMenuSection.forEach((section) => {
        section.classList.remove('is-open');
      })
      catalogMenuItems.forEach((item) => {
        item.classList.remove('is-active');
      })

      item.classList.add('is-active');
      document.querySelector(`.js-catalog-section[data-section="${item.dataset.id}"]`).classList.add('is-open');
    })
  })

  catalogMenuSectionBack.forEach((item) => {
    item.addEventListener('click', () => {
      catalogMenuSection.forEach((section) => {
        section.classList.remove('is-open');
      })
      catalogMenuItems.forEach((item) => {
        item.classList.remove('is-active');
      })
    })
  })
}

const handler = () => {
  const handlerItems = document.querySelectorAll('.js-handler');
  const handlerItemsContent = document.querySelectorAll('.js-handler-content');
  const handlerItemsClose = document.querySelectorAll('.js-handler-close');
  
  if(handlerItems.length) {
    handlerItems.forEach((item) => {
      item.addEventListener('click', () => {
        const handlerDataId = item.dataset.id;
        handlerItemsContent.forEach((content) => {
          content.classList.remove('is-active');
        })
        item.classList.add('is-active');
        document.querySelector(`.js-handler-content[data-id="${handlerDataId}"]`).classList.add('is-active');
      })
    })

    handlerItemsClose.forEach((item) => {
      item.addEventListener('click', () => {
        const handlerDataId = item.dataset.id;
        item.closest('.js-handler-content').classList.remove('is-active');
      })
    })

    document.addEventListener( 'click', (e) => {
      if (!e.target.closest('.js-handler') && !e.target.closest('.js-handler-content')) {
        handlerItemsContent.forEach((content) => {
          content.classList.remove('is-active');
        })

        handlerItems.forEach((item) => {
          item.classList.remove('is-active');
        })
      }
    })
  }
}

handler();

const formSelects = document.querySelectorAll('.js-form-select');
if(formSelects.length) {
  formSelects.forEach((select) => {
    const choices = new Choices(select, {
      searchEnabled: false,
    });
  })
}

const tabsSections = document.querySelectorAll('.js-tabs');

if(tabsSections.length > 0) {
  
tabsSections.forEach( (section) => {
  const tabControls = section.querySelectorAll('.js-tabs-control');
  const tabContents = section.querySelectorAll('.js-tabs-content');

  console.log(tabControls);

  tabControls.forEach((tab) => {
    tab.addEventListener('click', () => {
      removeActiveTab();
      tab.classList.add('is-selected');
      const dataControl = tab.dataset.control;
      document.querySelector(`.js-tabs-content[data-content="${dataControl}"]`).classList.add('is-active');
    })
  })

  function removeActiveTab() {
    tabControls.forEach((tab) => {
      tab.classList.remove('is-selected');
    })
    tabContents.forEach((tab) => {
      tab.classList.remove('is-active');
    })
  }
})
}


if(document.querySelector('.js-catalog')) {
  const catalog = document.querySelector('.js-catalog');
  const catalogFilter = document.querySelector('.js-catalog-filter');
  const catalogFilterOpen = document.querySelector('.js-catalog-filter-open');
  const catalogFilterClose = document.querySelectorAll('.js-catalog-filter-close');
  const catalogFilterClear = document.querySelector('.js-catalog-filter-clear');

  function openCatalogFilter () {
    catalogFilter.classList.add('is-open');

    if(window.matchMedia("(max-width: 992px)")) {
      catalog.classList.add('is-filter-open')
    }
  }

  function closeCatalogFilter () {
    catalogFilter.classList.remove('is-open');

    if(window.matchMedia("(max-width: 992px)")) {
      catalog.classList.remove('is-filter-open')
    }
  }

  catalogFilterOpen.addEventListener('click', openCatalogFilter)
  catalogFilterClose.forEach((item) => {
    item.addEventListener('click', closeCatalogFilter)
  })
}

const catalogItemInfo = document.querySelectorAll('.js-cat-item-info');
const catalogItemInfoBtns = document.querySelectorAll('.js-cat-item-info-open');
const catalogItemInfoCloseBtns = document.querySelectorAll('.js-cat-item-info-close');

catalogItemInfoBtns.forEach((item) => {
  item.addEventListener('click', () => {
    const dataId = item.dataset.id;
    catalogItemInfo.forEach((info) => {
      info.classList.remove('is-open');
    })
    document.querySelector(`.js-cat-item-info[data-id="${dataId}"]`).classList.add('is-open');
  })
})

catalogItemInfoCloseBtns.forEach((item) => {
  item.addEventListener('click', () => {
    item.closest('.js-cat-item-info').classList.remove('is-open');
  })
})

const catalogSorting = document.querySelector('.js-catalog-sort');
const catalogSortBtn = document.querySelector('.js-catalog-sort-btn');
const catalogSortBtnClose = document.querySelector('.js-catalog-sort-close');
const catalogSortItems = document.querySelectorAll('.js-catalog-sort-item');

if(catalogSorting) {
  function openCatalogSorting () {
    catalogSorting.classList.add('is-open');
  }
  
  function closeCatalogSorting () {
    catalogSorting.classList.remove('is-open');
  }
  
  catalogSortBtn.addEventListener('click', openCatalogSorting);
  catalogSortBtnClose.addEventListener('click', closeCatalogSorting);
  
  catalogSortBtnClose.addEventListener('click', closeCatalogSorting);
  
  catalogSortItems.forEach((item) => {
    item.addEventListener('click', () => {
      const itemContent = item.innerHTML;
      catalogSortBtn.innerHTML = itemContent;
      closeCatalogSorting();
    })
  })
}

const searchBlock = document.querySelectorAll('.js-search');

if(searchBlock.length > 0) {
  searchBlock.forEach((item) => {
    const search = item.querySelector('.js-search-input');
    const searchClear = item.querySelector('.js-search-clear');
    const catalogBack = document.querySelector('.js-catalog-menu-back');
    
    search.addEventListener('input', () => {
      if(search.value !== '') {
        item.classList.add('is-active');
        search.classList.add('is-filled');

        if(document.querySelector('.js-catalog-menu.is-open')) {
          document.querySelector('.js-catalog-menu').classList.add('search-active')
        }

      } else {
        item.classList.remove('is-active');
        search.classList.remove('is-filled');
        
        if(document.querySelector('.js-catalog-menu.is-open')) {
          document.querySelector('.js-catalog-menu').classList.remove('search-active')
        }
      }
    })

    function searchReset() {
      search.value = '';
      search.classList.remove('is-filled');
      item.classList.remove('is-active');
    }

    catalogBack.addEventListener('click', () => {
      searchReset();
      document.querySelector('.js-catalog-menu').classList.remove('search-active');
    })
  
    searchClear.addEventListener('click', () => {

      if(document.querySelector('.js-catalog-menu.is-open')) {
        document.querySelector('.js-catalog-menu').classList.remove('search-active')
      }
      searchReset();
    })
  })
}

const reviewsWrite = document.querySelector('.js-reviews-write');

if(reviewsWrite) {
  const reviewsWriteClose = document.querySelector('.js-reviews-write-close');
  const reviewsWriteBtn = document.querySelector('.js-reviews-write-add');
  const reviewsWriteHide = document.querySelector('.js-reviews-write-hide');

  reviewsWriteBtn.addEventListener('click', () => {
    reviewsWrite.classList.add('is-open');
    reviewsWriteHide.classList.add('is-hidden');
  })

  reviewsWriteClose.addEventListener('click', () => {
    reviewsWrite.classList.remove('is-open');
    reviewsWriteHide.classList.remove('is-hidden');
  })
}


const modals = document.querySelectorAll('[data-modal]');
const body = document.querySelector('body');

if(modals.length > 0) {

  const modalCloseBtn = document.querySelectorAll('[data-modal-close]');

  function openModal(modal) {
    modal.classList.add('is-open');
    body.classList.add('no-scroll');
  }
  
  // Функция закрытия модального окна
  function closeModal(modal) {
    modal.classList.remove('is-open');
    body.classList.remove('no-scroll');
  }
  
  modals.forEach((modal) => {
    const modalInner = modal.querySelector('.popup__inner');
    const openButton = document.querySelector(`[data-modal-target="${modal.id}"]`);
    openButton.addEventListener('click', () => {
      openModal(modal);
    });

    document.addEventListener('click', (e) => {
      if(e.target === modalInner) {
        closeModal(modal);
      }
    })
  });
  
  modalCloseBtn.forEach((btn) => {
    const modal = btn.closest('[data-modal]');
    btn.addEventListener('click', () => {
      closeModal(modal);
    });
  });
} 

const scrollBtnUp = document.querySelector('[data-scroll-up]')

if(scrollBtnUp) {
  scrollBtnUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

// const map = document.querySelector('.js-map');

// if(map) {

//   const mapScript = document.createElement("script");
//   mapScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
//   document.body.appendChild(mapScript);

//   mapScript.addEventListener("load", () => {
//     ymaps.ready(function () {
//       var myMap = new ymaps.Map(map, {
//         center: [59.938049, 30.318556], // Координаты метки в Санкт-Петербурге
//         zoom: 13
//       });
    
//       var myPlacemark = new ymaps.Placemark([59.938049, 30.318556], {
//         hintContent: 'Метка в Санкт-Петербурге'
//       }, {
//         iconLayout: 'default#image',
//         iconImageHref: '../img/icons/map-pin.svg',
//         iconImageSize: [28, 32],
//         iconImageOffset: [-14, -14]
//       });
    
//       myMap.geoObjects.add(myPlacemark);
//     }); 
//   });
// }

