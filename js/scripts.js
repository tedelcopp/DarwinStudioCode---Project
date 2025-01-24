$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

$(document).ready(function () {
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      var headerHeight = $(".navbar").outerHeight();
      var additionalOffset = -47;
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - headerHeight - additionalOffset,
          },
          1000
        );
    }
  });
});

(function () {
  emailjs.init("LbUJ2NNvj98WobDek");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Lógica para validación y envío de formulario
  });

document.addEventListener("DOMContentLoaded", function () {
  var goToTopBtn = document.getElementById("goToTopBtn");

  goToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
