const accordeonBtns = document.querySelectorAll(".accordeon-btn");
const accordeonTexts = document.querySelectorAll(".accordeon-text");

// Проходим циклом по всем кнопкам
accordeonBtns.forEach((btn) => {
  // Для каждой добавляем слушатель событий
  btn.addEventListener("click", () => {
    // Через родителя достаем соответствующий текст
    let targetText = btn.parentElement.querySelector(".accordeon-text");

    // Проверяем
    // Если у текста соответстующего нажимаемой кнопке уже есть класс open,
    // То есть мы хотим просто закрыть открытый аккордеон
    if (targetText.classList.contains("open")) {
      // То просто его убираем
      targetText.classList.remove("open");

      // Если же нет
    } else {
      // То убираем этот класс у всех
      accordeonTexts.forEach((text) => {
        text.classList.remove("open");
      });

      // А потом добавляем нужному тексту
      targetText.classList.add("open");
    }
  });
});
