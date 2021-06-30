
export default function navbarChange(){   
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
        console.log(nav.classList);  
        if (window.pageYOffset > 100) {
          nav.classList.remove('bg-trasparent')
          nav.classList.add('bg-dark', 'shadow');
        } else if(!nav.classList.contains('bg-dark')){
          nav.classList.remove('bg-dark', 'shadow');
        }
      });
}