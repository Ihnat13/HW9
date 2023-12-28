const arrImg = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg`, `9.jpg`, `10.jpg` ]
const randomArrImage = () => {
    const randomIndex = Math.floor(Math.random() * arrImg.length);
    return arrImg[randomIndex];
  };

  const simpleImage = document.createElement(`img`);
  const btn = document.getElementById(`toggleButton`);
  const imgContainer = document.getElementById(`main-container`)
  const allImages = document.querySelectorAll('.image');
  simpleImage.src = `./img/${randomArrImage()}`;
  simpleImage.classList.add(`hidden`);

  imgContainer.appendChild(simpleImage);

  btn.addEventListener(`click`, () => {
      simpleImage.classList.remove(`active`);
      simpleImage.classList.add(`hidden`);
      simpleImage.src = `./img/${randomArrImage()}`;
  
      // Отображаем новое изображение
      simpleImage.classList.remove(`hidden`);
      simpleImage.classList.add(`active`);
  });
  

