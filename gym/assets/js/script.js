
// menu
  const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuIcon = document.getElementById('menu-icon');

btn.addEventListener("click", () => {
	menu.classList.toggle('menu-open');
	
	
	if (menu.classList.contains('menu-open')) {
      menuIcon.classList.remove('bi-list'); 
      menuIcon.classList.add('bi-x');
    } else {
      menuIcon.classList.remove('bi-x');
      menuIcon.classList.add('bi-list');
    }
});

	const menuLinks = menu.querySelectorAll('a');
	 menuLinks.forEach(link => {
	   link.addEventListener('click', () => {
	     menu.classList.remove('menu-open');
	     menuIcon.classList.remove('bi-x');
	     menuIcon.classList.add('bi-list');
	   });
	 });





// year
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
})



// checked
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navItems.forEach(item => {
          item.classList.remove("text-[#E86764]");
        });
        
        item.classList.add("text-[#E86764]");
      });
    });
  });
  // navbar
var nav = document.querySelector("header");
window.addEventListener("scroll",function(event){
    if(this.window.scrollY >=100){
        
        nav.style.transition ='all';
        nav.style.transitionDuration = '0.7s';
        nav.style.transformStyle ='ease-in';
        nav.style.backgroundColor ='black';
        nav.style.boxShadow='0px 10px 10px -17px #111';
        
    }
    else{
       
          nav.style.transition ='all';
        nav.style.transitionDuration = '0.7s';
        nav.style.transformStyle ='ease-in';
        nav.style.backgroundColor ='transparent';
          nav.style.boxShadow='none';
        
    };
});