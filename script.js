const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
const viewer = document.querySelector("img.imageViewer");
const thumbs = document.querySelectorAll("img.thumbnails");
const wrapper = document.querySelector("section.wrapper");
const loop = document.querySelector("button#looping");

thumbs.forEach((item, index) =>
  item.addEventListener("click", function () {
    viewer.src = `./assets/images/${images[index]}`;
    wrapper.style.backgroundImage = `url(./assets/images/${images[index]})`;
  })
);

loop.addEventListener("click", Loop);

function Loop() {
  var i = 1;
  loop.style.backgroundColor = "#ffffff";
  loop.style.color = "#232323";
  setInterval(function () {
    if (i <= 3) {
      viewer.src = `./assets/images/${images[i]}`;
      wrapper.style.backgroundImage = `url(./assets/images/${images[i]})`;

      //    document.querySelector(
      //      `img.thumbnails[src="./assets/images/${images[i]}"]`
      //   ).style.transform = "scale(1.3)";

      i++;
    } else {
      i = 0;
      viewer.src = `./assets/images/${images[i]}`;
      wrapper.style.backgroundImage = `url(./assets/images/${images[i]})`;
    }
  }, 5000);
}

window.onload = () => {
  viewer.src = `./assets/images/${images[0]}`;
  wrapper.style.backgroundImage = `url(./assets/images/${images[0]})`;

  for (i = 0; i <= 3; i++) {
    thumbs[i].src = `./assets/images/${images[i]}`;
  }
};
