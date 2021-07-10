 // slider for lastestnew
 var owl = $(".lastest-new__list");
 owl.owlCarousel({
   items: 3,
   loop: true,
   nav: false,
   dots: false,
   margin: 30,
   autoplay: true,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   animateOut: "fadeOut",
   responsive: {
     0: {
       items: 1,
     },
     600: {
       items: 2,
     },
     850: {
       items: 3,
     },
   },
 });
 $(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [4000]);
 });
 $(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
 });
 // slider for popular-course
 var owl = $(".popular-courses__list");
 owl.owlCarousel({
   items: 3,
   loop: true,
   nav: false,
   dots: true,
   margin: 30,
   autoplay: false,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   responsive: {
     0: {
       items: 1,
     },
     600: {
       items: 2,
     },
     850: {
       items: 3,
     },
   },
 });
 $(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [4000]);
 });
 $(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
 });
 // slide for header img
 var owl = $(".header__img-list");
 owl.owlCarousel({
   items: 1,
   loop: true,
   nav: true,
   dots: false,
   margin: 0,
   autoplay: true,
   autoplayTimeout: 4000,
   autoplayHoverPause: true,
   animateOut: "fadeOut",
 });
 $(".play").on("click", function () {
   owl.trigger("play.owl.autoplay", [4000]);
 });
 $(".stop").on("click", function () {
   owl.trigger("stop.owl.autoplay");
 });