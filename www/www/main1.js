'use strict';

{
  const main = document.querySelector('main');
  const slides = main.children;

    
  one.classList.add('change');

  document.getElementById('one').addEventListener('click', () => {

    const slideWidth = slides[0].getBoundingClientRect().width;
    main.style.transform = `translateX(${-1 * slideWidth * 0}px)`;
    one.classList.add('change');
    two.classList.remove('change');
    
  })


  

    document.getElementById('two').addEventListener('click', () => {

    const slideWidth = slides[0].getBoundingClientRect().width;
    main.style.transform = `translateX(${-1 * slideWidth * 1}px)`;
    one.classList.remove('change');
    two.classList.add('change');

  })

}










