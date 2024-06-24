const chk = document.getElementById("chk");
const text = document.getElementsByClassName("main-heading");
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.main.classList.toggle("dark");
});
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");

const social_panel_container = document.querySelector(
  ".social-panel-container"
);
floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
