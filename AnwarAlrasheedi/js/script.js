//JavaScript code

window.onload = function() {
    const logo = document.querySelector('.logo img');
      logo.addEventListener('click', function() {
        location.href=("./html/home_v2.html")
    
      });
    }
    
    document.addEventListener('DOMContentLoaded', function () {
      const navToggle = document.querySelector('.nav-toggle');
      const navList = document.querySelector('.nav-list');
    
      navToggle.addEventListener('click', function () {
          navList.classList.toggle('nav-active');
      });
    });
    
    
    
    
    
    
      