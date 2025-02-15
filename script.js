document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("surprise").addEventListener("click", function() {
        document.getElementById("hidden-message").classList.remove("hidden");
        createHearts(); 
    });
});

function createHearts() {
    const container = document.getElementById("hearts-container");

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY + 100}px`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
