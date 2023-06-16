$(document).ready(function () {
  /* ================== start scroll to sections  ============================================================ */
  // $("nav li a").on("click", function () {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
  //     },
  //     1000
  //   );
  // });

  //add class icon-active to li a
  $("nav ul li").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });
  /* =============================== end scroll to sections  ================================================= */
  /* =============================== start button up ========================================================= */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".up").fadeIn(2000);
      $(".up").css("right", "45px");
    } else {
      $(".up").fadeOut(2000);
      $(".up").css("right", "-45px");
    }
  });
  $(".up").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  /* =============================== end button up ============================================================ */

  /* ===============================  control radio  =============================== */
  $('input:radio[name="payment"]').change(function () {
    if (this.checked && this.value === "paybal") {
      $("#firstpayment").slideDown();
      $("#secondpayment").slideUp();
    } else if (this.checked && this.value === "visa") {
      $("#firstpayment").slideUp();
      $("#secondpayment").slideDown();
    }
  });

  /* ===============================  control radio  =============================== */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".auct").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active_tab").siblings().removeClass("active_tab");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("activeTab")
      .siblings()
      .removeClass("activeTab");
  });

  $(".paginate ul li").on("click", function (e) {
    // e.preventDefault();

    $(this)
      .addClass("active-paginate")
      .siblings()
      .removeClass("active-paginate");
  });

  /* =============================== end Settings of content tabs (payment) =================================== */

  /*=================== start side menu ======================================================================= */

  $(".navbar-toggler").on("click", function (e) {
    e.stopPropagation();
    $(".side-bar").toggleClass("open");
  });

  $("body").click(function (e) {
    if ($(".side-bar").hasClass("open")) {
      $(".side-bar").toggleClass("open");
      $("nav .one").toggleClass("top");
      $("nav .two").toggleClass("hidden");
      $("nav .three").toggleClass("bottom");
    }
  });

  /*=================== end side menu ========================================================================= */
  /*============================ start navbar toggler ========================================================= */
  $("nav .navbar-toggler").on("click", function () {
    $("nav .one").toggleClass("top");
    $("nav .two").toggleClass("hidden");
    $("nav .three").toggleClass("bottom");
  });

  /*============================ end navbar toggler =========================================================== */

  /* =============================== start  WOW.js  =========================================================== */
  new WOW().init();
  /* =============================== end  WOW.js  ============================================================= */
  /* =============================== start AOS.js  ============================================================ */
  $(function () {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  });
  /* =============================== end  AOS.js  ============================================================= */
  /*============================== start mixitup plugin======================================================== */
  // var mixitup = require('mixitup');
  /*============================== end mixitup plugin========================================================== */

  /* =============================== start Settings of content tabs (payment) ================================= */
  $(".muo_tab").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
    var id = $(this).attr("data-content");
    $('.box_content[id="' + id + '"]')
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  /* =============================== end Settings of content tabs (payment) =================================== */

  /* =============================== start nice select  ======================================================= */
  $(".nice-select").niceSelect();
  /* =============================== end nice select  ========================================================= */
  /* ===============================  start slick library section  ============================================ */

  /* =============================== end slick library section  ===================================================== */

  /* =============================== start intlTelInput ===================================================== */
  // $("#phone").intlTelInput({
  //   preferredCountries: ["sa", "gb"],
  //   separateDialCode: true,
  //   initialCountry: "auto",
  //   geoIpLookup: function (success, failure) {
  //     $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
  //       resp
  //     ) {
  //       var countryCode = resp && resp.country ? resp.country : "us";
  //       success(countryCode);
  //     });
  //   },
  // });

  /* =============================== end intlTelInput ===================================================== */

  $(".not").on("click", function (e) {
    e.stopPropagation();
    $(".notification").toggleClass("show-cart");
  });

  $(".notification .close-cart").on("click", function (e) {
    e.stopPropagation();
    $(".notification").removeClass("show-cart");
  });
});

/*==================== start spinner ========================================================================== */
/*==================== start spinner ========================================================================== */
$(window).on("load", function () {
  $(".loading-spinner").fadeOut(1500);
});

/*==================== end spinner ============================================================================ */

/* ======================== start js ========================================================================== */

/* =============================== start show password =====================================================  */

// tabs

/* =============================== end show password =====================================================  */

/* ==================================== end js ================================================================ */

$(".header .owl-carousel").owlCarousel({
  loop: true,
  // autoplay: true,
  nav: false,
  dots: true,
  items: 1,
});

// =========================== sync slider ======================

$(".modal").on("show.bs.modal", function () {
  $(document).ready(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
      })
      .on("changed.owl.carousel", syncPosition);

    sync2
      .on("initialized.owl.carousel", function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100,
      })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2.find(".owl-item.active").first().index();
      var end = sync2.find(".owl-item.active").last().index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
    });
  });
  $(".modal").modal("show");
});
