// Função para gerenciar o comportamento do botão e dos modais
export function handleSwitch() {
    const switchButton = document.getElementById('switch-shadow');
    const devModal = document.getElementById('prog');
    const agroModal = document.getElementById('agro');

    // Função para adicionar a transição de fade
    const fadeOut = (element) => {
        element.style.transition = 'opacity 0.1s ease-out';
        element.style.opacity = 0;
    };

    const fadeIn = (element) => {
        element.style.transition = 'opacity 0.1s ease-in';
        element.style.opacity = 1;
    };

    // Adiciona o evento de clique no botão
    switchButton.addEventListener('change', () => {
        if (switchButton.checked) {
            // Fade out no modal "dev" e fade in no modal "agro"
            fadeOut(devModal);
            setTimeout(() => {
                devModal.style.display = 'none';
                agroModal.style.display = 'block';
                fadeIn(agroModal);
            }, 300); // Tempo do fadeOut antes de trocar o display
        } else {
            // Fade out no modal "agro" e fade in no modal "dev"
            fadeOut(agroModal);
            setTimeout(() => {
                agroModal.style.display = 'none';
                devModal.style.display = 'block';
                fadeIn(devModal);
            }, 300); // Tempo do fadeOut antes de trocar o display
        }
    });

    // Configuração inicial (caso o estado inicial do botão seja relevante)
    if (switchButton.checked) {
        agroModal.style.display = 'block';
        agroModal.style.opacity = 1; // Garantir que o agroModal esteja visível inicialmente
    } else {
        devModal.style.display = 'block';
        devModal.style.opacity = 1; // Garantir que o devModal esteja visível inicialmente
    }
}
