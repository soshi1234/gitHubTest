'use strict';


// タブメニュー
{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickeditem => {
    clickeditem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      })
      clickeditem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickeditem.dataset.id).classList.add('active');
    });
  });
}




