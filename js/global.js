// ============================================================
// GLOBAL — entry point JavaScript do site
// Este é o único arquivo JS referenciado nas páginas HTML.
// O atributo type="module" no <script> do HTML permite usar import/export.
// Sem esse atributo, o import abaixo causaria um erro de sintaxe no navegador.
// ============================================================

// Importa a função que inicializa o seletor de idioma EN/PT.
// O caminho './langHandler.js' é relativo à localização deste arquivo (pasta js/).
import { setupLangToggle } from './langHandler.js';

// Inicializa o sistema de tradução assim que o script carrega.
// setupLangToggle() lê o idioma salvo no localStorage e aplica os textos corretos na página.
setupLangToggle();

// Hamburger menu — toggle da classe nav-open no nav e animação ☰ → ✕
const navEl = document.querySelector('.nav-principal');
const hamburgerBtn = document.querySelector('.nav-hamburger');
if (navEl && hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navEl.classList.toggle('nav-open');
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
    // Fechar o menu ao clicar em qualquer link da lista
    navEl.querySelectorAll('ul a').forEach(a => {
        a.addEventListener('click', () => {
            navEl.classList.remove('nav-open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });
}
