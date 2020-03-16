// Options do plugins https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
  $('.owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots: false,
  margin:10,
  slideBy: 4,
  responsiveClass:true,
  responsive:{
      0:{
        items:1,
        nav:true
      },
      992:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
    }
  })
