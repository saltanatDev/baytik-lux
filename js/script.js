const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const btn = document.querySelector(".hero--general__title-btn button")
btn.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "block"
})
const close = document.querySelector(".hero-modal-bg-square")
close.addEventListener("click", () => {
    document.querySelector(".hero-modal").style.display = "none"
})
