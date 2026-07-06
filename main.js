// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
      });
    });
  }

  // Contact form -> composes an email (static site, no backend)
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#f-name").value;
      var company = form.querySelector("#f-company").value;
      var phone = form.querySelector("#f-phone").value;
      var email = form.querySelector("#f-email").value;
      var service = form.querySelector("#f-service").value;
      var message = form.querySelector("#f-message").value;

      var body =
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Service Required: " + service + "\n\n" +
        "Message / Details:\n" + message;

      var mailto =
        "mailto:andre@ici.com.na" +
        "?subject=" + encodeURIComponent("Inspection Enquiry — " + (service || "General")) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
