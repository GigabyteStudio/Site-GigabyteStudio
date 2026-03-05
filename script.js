document.getElementById("year").textContent = new Date().getFullYear();

const backTop = document.getElementById("backTop");
backTop?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});