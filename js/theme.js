(function () {
    var STORAGE_KEY = 'noxity-theme';
    var DEFAULT_THEME = 'dark';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function readStoredTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (err) {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (err) { /* private mode, no-op */ }
    }

    var initial = readStoredTheme() || DEFAULT_THEME;
    applyTheme(initial);

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.querySelector('[data-theme-toggle]');
        if (!btn) return;

        btn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
            var next = current === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            storeTheme(next);
            btn.setAttribute('aria-pressed', String(next === 'light'));
        });

        btn.setAttribute('aria-pressed', String(initial === 'light'));
    });
})();
