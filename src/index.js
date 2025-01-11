let bar = document.getElementById("bars"),
    menu = document.getElementById("menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})