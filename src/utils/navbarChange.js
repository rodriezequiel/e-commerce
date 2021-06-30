
export default function navbarChange(){     
    var nav = document.querySelector('nav');
    console.log(nav.classList);

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });
}