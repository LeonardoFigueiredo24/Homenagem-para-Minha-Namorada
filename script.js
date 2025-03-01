document.addEventListener("DOMContentLoaded", function () {
    // Elementos para a surpresa e animação dos corações
    const surpriseButton = document.getElementById("surprise");
    const hiddenMessage = document.getElementById("hidden-message");
    const heartsContainer = document.getElementById("hearts-container");

    surpriseButton.addEventListener("click", function () {
        // Exibe a mensagem
        hiddenMessage.classList.remove("hidden");
        hiddenMessage.style.animation = "fadeIn 2s forwards";

        // Animação dos corações espalhados pela tela
        for (let i = 0; i < 15; i++) {
            createHeart();
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heartsContainer.appendChild(heart);

        // Posição inicial espalhada por toda a tela
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;

        // Animação para subir e desaparecer
        heart.animate(
            [
                { transform: `translateY(0px) scale(1)`, opacity: 1 },
                { transform: `translateY(-300px) scale(1.5)`, opacity: 0 }
            ],
            {
                duration: 4000 + Math.random() * 2000,
                easing: "linear",
                iterations: 1
            }
        );

        // Remove o coração após a animação
        setTimeout(() => heart.remove(), 5000);
    }

    // Elementos para abrir imagem ou vídeo em tela cheia
    const modal = document.getElementById('fullscreen-modal');
    const closeModal = document.querySelector('.close');
    const fullscreenImg = document.getElementById('fullscreen-img');
    const fullscreenVideo = document.getElementById('fullscreen-video');
    const galleryElements = document.querySelectorAll('.gallery img, .videos video');

    // Função para abrir a imagem ou vídeo em fullscreen
    function openFullscreen(element) {
        if (element.tagName.toLowerCase() === 'img') {
            fullscreenImg.src = element.src;
            fullscreenImg.style.display = 'block';
            fullscreenVideo.style.display = 'none';
        } else if (element.tagName.toLowerCase() === 'video') {
            fullscreenVideo.src = element.querySelector('source').src;
            fullscreenImg.style.display = 'none';
            fullscreenVideo.style.display = 'block';
        }
        modal.style.display = 'flex'; // Exibe o modal
    }

    // Adicionar evento de clique para abrir modal nas imagens e vídeos
    galleryElements.forEach(element => {
        element.addEventListener('click', () => openFullscreen(element));
    });

    // Fechar o modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});