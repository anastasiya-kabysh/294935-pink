mainApp();

function mainApp() {
  var btns = document.querySelectorAll('.js-toggle');
  var menu = document.getElementById('nav');
  var header = document.getElementById('header');

  header.classList.add('page-header--js');
  header.classList.remove('page-header--active');

  menu.classList.add('navigation--closed');
  menu.classList.add('navigation--positioned');

  handleMenu(header, menu, btns);
  svg4everybody();
};

function handleMenu(header, menu, buttons) {

  function onToggleClick(event) {
    event.preventDefault();

    header.classList.toggle('page-header--active');
    menu.classList.toggle('navigation--closed');

    for (var i = buttons.length - 1; i >= 0; i--) {
      buttons[i].classList.toggle('page-header__btn-burger--active');
    }
  }

  for (var i = buttons.length - 1; i >= 0; i--) {
    var button = buttons[i];
    button.classList.add('page-header__btn-burger--show');
    button.addEventListener('click', onToggleClick);
  }
}
