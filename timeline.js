const events = document.querySelectorAll(".event");
const tooltip = document.getElementById("tooltip");

events.forEach(event => {
    event.addEventListener("mouseover", (e) => {
        const info = e.target.closest(".event").dataset.info;
        tooltip.style.display = "block";
        tooltip.textContent = info;

        // Posiciona el tooltip cerca del punto
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 40}px`;
    });

    event.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY - 40}px`;
    });

    event.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});
