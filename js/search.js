// Кнопка ПОИСКА
const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');
const searchInput = searchForm.querySelector('input');

// Клик по кнопке Поиск
searchButton.addEventListener('click', function (e) {
   location.hash = "";
   if (searchForm.classList.contains('search--visible')) { //если инпут открыт
      if (searchInput.value == '') {  // а инпут пустой,
         e.preventDefault();  // убираем дефолтное поведение кнопки
         searchForm.classList.remove('search--visible');  //и сворачиваем инпут
      }
   } else {
      e.preventDefault();
      searchForm.classList.add('search--visible');
   }
});
