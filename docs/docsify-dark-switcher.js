function docsifyDarkSwitcher() {
    const body = document.body;
    body.classList.toggle("docsify-dark-mode");

    if (body.classList.contains("docsify-dark-mode")) {
        localStorage.setItem('docsify-dark-mode', 'true');
    } else {
        localStorage.removeItem('docsify-dark-mode');
    }

    updateDarkSwitcherIcon();
}

function applyInitialMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkModeSaved = localStorage.getItem('docsify-dark-mode') === 'true';

    if (darkModeSaved || prefersDark) {
        document.body.classList.add("docsify-dark-mode");
    } else {
        document.body.classList.remove("docsify-dark-mode");
    }

    updateDarkSwitcherIcon();
}

function updateDarkSwitcherIcon() {
    const button = document.getElementById('DarkSwitcherButton');
    if (!button) return;

    if (document.body.classList.contains("docsify-dark-mode")) {
        button.style.background = 'var(--dark-sun-color)';
        button.style.maskImage = 'var(--dark-sun-icon)';
    } else {
        button.style.background = 'var(--dark-moon-color)';
        button.style.maskImage = 'var(--dark-moon-icon)';
    }
}

function injectDarkSwitcherButton() {
    if (!document.getElementById('DarkSwitcherButton')) {
        const button = document.createElement('button');
        button.id = 'DarkSwitcherButton';
        button.setAttribute('onclick', 'docsifyDarkSwitcher()');
        button.setAttribute('aria-label', 'Modo Oscuro');
        button.setAttribute('title', 'Modo Oscuro');

        button.style.position = 'fixed';
        button.style.top = '15px';
        button.style.right = '10px';
        button.style.width = 'var(--dark-icon-size)';
        button.style.height = 'var(--dark-icon-size)';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.zIndex = '1000';
        button.style.background = 'var(--dark-moon-color)';
        button.style.maskImage = 'var(--dark-moon-icon)';
        button.style.maskSize = 'var(--dark-icon-size) var(--dark-icon-size)';
        button.style.transition = 'var(--dark-icon-transition)';

        document.body.appendChild(button);
    }
}

// Inicialización completa
document.addEventListener('DOMContentLoaded', () => {
    injectDarkSwitcherButton();
    applyInitialMode();
});

// Reaplicar modo oscuro al cambiar de página en Docsify
window.addEventListener('hashchange', applyInitialMode);
