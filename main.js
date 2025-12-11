const regOnTour = document.getElementById("tourReg");
const tourButton = document.getElementById("regButton");
const formEmail = document.getElementById("email");
const videoFirst = document.querySelector(".first");
const videoSecond = document.querySelector(".second");
const videoThird = document.querySelector(".third");
const swap = document.getElementById("swap");

regOnTour.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  const country = formData.get("country");
  const dateFrom = formData.get("dateFirst");
  const dateUntil = formData.get("dateSecond");
  const people = formData.get("people");

  const data = Object.fromEntries(formData);

  alert(`
    Страна: ${data.country}
    Дата заезда: ${data.dateFirst}
    Дата выезда: ${data.dateSecond}
    Количество человек: ${data.people}
  `);
});

formEmail.addEventListener("submit", function () {
  event.preventDefault();
  const formData = new FormData(this);

  const email = formData.get("email");

  const data = Object.fromEntries(formData);

  alert(data.email);
});

videoFirst.addEventListener("mouseenter", function () {
  videoFirst.play();
});

videoFirst.addEventListener("mouseleave", function () {
  videoFirst.pause();
});
