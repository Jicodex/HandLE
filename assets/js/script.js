// Banner Slider JS 
$('.banner_slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1200,
  cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)', // smooth slide effect
  pauseOnHover: false,
});

// ======= CHART.JS SCRIPT ======= 
const ctx = document.getElementById("venueChart");
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Maintenance",
          "Logistic Management",
          "Event Management",
          "Marketing",
          "Visitor Experience",
          "Technology Integration",
        ],
        datasets: [
          {
            label: "Traditional FM",
            data: [9, 4, 2, 3, 5, 2],
            borderColor: "#4A90E2",
            backgroundColor: "rgba(74, 144, 226, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Integrated VM",
            data: [8, 7, 8, 8, 9, 8],
            borderColor: "#00A753",
            backgroundColor: "rgba(0, 167, 83, 0.2)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: { color: "#ccc" },
            grid: { color: "#eee" },
            pointLabels: { color: "#333", font: { size: 12 } },
          },
        },
        plugins: { legend: { display: false } },
      },
    });

// Smooth scroll with offset and active menu
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.navbar-nav .nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = targetSection.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  });
});

// Navbar fixed on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if(window.scrollY > 50){ // scroll threshold
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }

  // Update active link on scroll
  let scrollPos = window.scrollY + 110;
  document.querySelectorAll('section').forEach(section => {
    if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){
      document.querySelectorAll('.navbar-nav .nav-link').forEach(el => el.classList.remove('active'));
      const activeLink = document.querySelector('.navbar-nav .nav-link[href="#' + section.id + '"]');
      if(activeLink) activeLink.classList.add('active');
    }
  });
});



document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');

    // যদি toggler visible থাকে (mobile view), তাহলে collapse close করবে
    if(window.getComputedStyle(navbarToggler).display !== 'none'){
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});