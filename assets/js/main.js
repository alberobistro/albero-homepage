const translations = {
  DE: {
    home: 'Home',
    about: 'Über uns',
    gallery: 'Galerie',
    menu: 'Speisekarte',
    contact: 'Kontakt',
    welcome: 'Willkommen in <span>Albero</span',
    'welcome-subtitle':
      'Speisen aus nachhaltigen Lebensmitteln, hergestellt von regionalen Erzeugern!',
    'about-text': `Speisen aus nachhaltigen Lebensmitteln, hergestellt von regionalen Erzeugern. Darauf legen wir besonderen Wert. Unsere Tomatensauce Gustarosso wird 100% aus Tomaten von traditionellen Erzeugern einer landwirtschaftlichen Genossenschaft aus der Region Kampanien (Italien) hergestellt. Für unsere Pizzen verwenden wir feinste Fior di  Latte, ebenfalls von Erzeugern aus dieser Region. Unser hochwertiger Büffelmozzarella und Burrata wird aus der Milch der Wasserbüffel hergestellt, die auf einem Bauernhof in Brandenburg mit freiem Auslauf auf grünem Weideland leben.`,
    all: 'Alles',
    starters: 'Vorspeisen',
    salads: 'Salate',
    dessert: 'Nachtisch',
    drinks: 'Getränke',
    location: 'Standort',
    opening: 'Öffnungszeiten',
    'opening-times': `
      Montag-Freitag:</br>
      12:00 - 22:00</br>
      Samstag-Sonntag:</br>
      16:00 - 22:00</br>
    `,
    'opening-times-short': 'Mo-Fr: 12 - 22, Sam-Sonn: 16 - 22',
    phone: 'Telefon',
  },
  EN: {
    home: 'Home',
    about: 'About',
    gallery: 'Gallery',
    menu: 'Menu',
    contact: 'Contact',
    welcome: 'Welcome to <span>Albero</span',
    'welcome-subtitle': 'Dishes made from sustainable food, by local producers!',
    'about-text': `Dishes made from sustainable food, made by local producers. On it we attach particular importance. Our Gustarosso tomato sauce is made from 100% tomatoes traditional producers of an agricultural cooperative from the region Made in Campania (Italy). We use the finest Fior di for our pizzas Latte, also from producers in this region. Our high quality Buffalo mozzarella and burrata is made from the milk of the water buffalo that live on a farm in Brandenburg with free exercise on green pastureland.`,
    all: 'All',
    starters: 'Starters',
    salads: 'Salads',
    dessert: 'Dessert',
    drinks: 'Drinks',
    location: 'Location',
    opening: 'Opening times',
    'opening-times': `
      Monday-Friday:</br>
      12:00 - 22:00<br/>
      Saturday-Sunday:</br>
      16:00 - 22:00</br>
    `,
    'opening-times-short': 'Mo-Fr: 12 - 22, Sat-Sun: 16 - 22',
    phone: 'Phone',
  },
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
const translateElement = (locale) => (element) => {
  const key = element.getAttribute('data-i18n')
  const translation = translations[locale][key]
  element.innerHTML = translation
}

/**
 * Template Name: Restaurantly - v3.1.0
 * Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
;(function () {
  'use strict'

  const languageBtn = document.getElementById('language-btn')
  const currentLanguage = localStorage.getItem('language') || 'DE'
  const availableLanguage = currentLanguage === 'DE' ? 'EN' : 'DE'
  languageBtn.innerHTML = availableLanguage

  languageBtn.onclick = (e) => {
    const selectedLanguage = e.target.innerHTML
    localStorage.setItem('language', selectedLanguage)
    location.reload()
  }

  // When the page content is ready...
  document.addEventListener('DOMContentLoaded', () => {
    document
      // Find all elements that have the key attribute
      .querySelectorAll('[data-i18n]')
      .forEach(translateElement(currentLanguage))
  })

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth',
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on(
    'click',
    '.navbar .dropdown > a',
    function (e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    },
    true
  )

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    'click',
    '.scrollto',
    function (e) {
      if (select(this.hash)) {
        e.preventDefault()

        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    },
    true
  )

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  })

  /**
   * Preloader
   */
  let preloader = select('#preloader')
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    })
  }

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    const pdf = document.querySelector('#menu-container')
    pdf.setAttribute('data', 'assets/menu/PLACEHOLDER.pdf')
  })

  /**
   * Events slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  })

  /**
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox',
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  })
})()
