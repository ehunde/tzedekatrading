var currentYear = document.getElementById("currentyear");
    currentYear.innerHTML= new Date().getFullYear().toString();

  
    
    document.querySelectorAll(".navbar-nav li a").forEach(function(anchor) {
      anchor.addEventListener("click", function(event) {
          if (!anchor.parentElement.classList.contains('dropdown')) {
              document.querySelector(".navbar-collapse").classList.remove('show');
          }
      });
  });
  

 