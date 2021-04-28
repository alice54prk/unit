$(document).ready(function(){
   // Находим блок с слайдами
   const owl = $('#clients-slider');

   // Запускаем карусель
   owl.owlCarousel({
      items: 1,
      loop: true
   });

   // Находим кастомные кнопки
   const prev = $('#sliderPrev');
   const next = $('#sliderNext');

   // Вешаем событие "клик" на кнопку НАЗАД и прокрутка карусели
   prev.click(function() {
      owl.trigger('prev.owl.carousel');
   });

   // Вешаем событие "клик" на кнопку ВПЕРЕД и прокрутка карусели
   next.click(function() {
      owl.trigger('next.owl.carousel');
   });
});

