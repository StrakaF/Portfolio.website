document.addEventListener('DOMContentLoaded', function() {
    // Close navbar on click
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  });

// Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));




