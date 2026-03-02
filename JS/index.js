// Inicializa os ícones do Lucide
lucide.createIcons();

// Lógica de saudação dinâmica
const hour = new Date().getHours();
const greetingElement = document.getElementById('greeting');

if (hour >= 5 && hour < 12) greetingElement.innerText = "Bom dia, Gestor!";
else if (hour >= 12 && hour < 18) greetingElement.innerText = "Boa tarde, Gestor!";
else greetingElement.innerText = "Boa noite, Gestor!";

// Adiciona um efeito suave de entrada nos cards
document.querySelectorAll('.card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 100);
});
