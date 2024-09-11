var currentYear = document.getElementById("currentyear");
    currentYear.innerHTML= new Date().getFullYear().toString();

  
    
    document.querySelectorAll(".navbar-nav li a").forEach(function(anchor) {
      anchor.addEventListener("click", function(event) {
          if (!anchor.parentElement.classList.contains('dropdown')) {
              document.querySelector(".navbar-collapse").classList.remove('show');
          }
      });
  });
  

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     document.querySelector(this.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   });
  // });