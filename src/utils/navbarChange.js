
export default function navbarChange(){     
    var nav = document.querySelector('nav');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100 && !nav.classList.contains('bg-transparent')) {
          nav.classList.add('bg-dark', 'shadow');
        } else if(!nav.classList.contains('')){
          nav.classList.remove('bg-dark', 'shadow');
        }
      });
}