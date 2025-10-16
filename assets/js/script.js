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