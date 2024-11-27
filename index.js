
const card = document.getElementById("card");

window.addEventListener("mousemove", (e) => {
    card.style.transform = `translate(calc(-25% - ${e.clientX/30}px), 0px)`;

})