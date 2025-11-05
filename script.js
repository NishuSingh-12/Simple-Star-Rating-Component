const stars = document.querySelectorAll(".fa-star");
const starValueOutput = document.querySelector(".value");

let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseenter", () => {
    resetHover();
    const value = +star.dataset.value;
    highlightStars(value);
  });
  star.addEventListener("mouseleave", () => {
    resetHover();
    highlightStars(currentRating);
  });
  star.addEventListener("click", () => {
    currentRating = +star.dataset.value;
    starValueOutput.textContent = `${currentRating}/5`;
    resetHover();
    highlightStars(currentRating);
  });
});

function highlightStars(limit) {
  stars.forEach((star, index) => {
    if (index < limit) {
      star.classList.add("hover");
    }
  });
}

function resetHover() {
  stars.forEach((star) => {
    star.classList.remove("hover");
  });
}
