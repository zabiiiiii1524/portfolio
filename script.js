const images = document.querySelectorAll(".work-image");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");


/* 画像をクリック */

images.forEach((image) => {

  image.addEventListener("click", () => {

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    modal.classList.add("is-open");

    document.body.style.overflow = "hidden";

  });

});


/* 閉じるボタン */

modalClose.addEventListener("click", closeModal);


/* 背景をクリックして閉じる */

modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});


/* ESCキーで閉じる */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


function closeModal() {

  modal.classList.remove("is-open");

  document.body.style.overflow = "";

}