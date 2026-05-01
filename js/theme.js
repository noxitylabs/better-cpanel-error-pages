(function () {
    const STORAGE_KEY = 'noxity-theme';
    const DEFAULT_THEME = 'dark';

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
    }

    function readStoredTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (err) {
            console.warn('Theme storage read failed:', err.message);
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (err) {
            console.warn('Theme storage write failed:', err.message);
        }
    }

    const initial = readStoredTheme() || DEFAULT_THEME;
    applyTheme(initial);

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.querySelector('[data-theme-toggle]');
        if (!btn) return;

        btn.addEventListener('click', function () {
            const current = document.documentElement.dataset.theme || DEFAULT_THEME;
            const next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            storeTheme(next);
            btn.setAttribute('aria-pressed', String(next === 'light'));
        });

        btn.setAttribute('aria-pressed', String(initial === 'light'));
    });
})();
