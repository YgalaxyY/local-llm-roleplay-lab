// CleanUI: presentation controls only. This is not authentication.
// SPDX-License-Identifier: AGPL-3.0-only
(() => {
    const key = 'cleanui_advanced_ui';
    const body = document.body;
    if (document.getElementById('cleanui-toggle')) return;
    const toggle = document.createElement('button');
    toggle.id = 'cleanui-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toggle advanced interface controls');
    const readPreference = () => {
        try { return localStorage.getItem(key) === 'true'; } catch { return false; }
    };
    const render = (advanced) => {
        body.classList.toggle('cleanui-advanced-mode', advanced);
        toggle.textContent = advanced ? 'Simple UI' : 'Advanced UI';
        toggle.setAttribute('aria-pressed', String(advanced));
        try { localStorage.setItem(key, String(advanced)); } catch { /* Session-only mode. */ }
    };
    toggle.addEventListener('click', () => render(!body.classList.contains('cleanui-advanced-mode')));
    document.addEventListener('keydown', (event) => {
        if (event.altKey && event.shiftKey && event.code === 'KeyU' && !event.repeat) {
            event.preventDefault();
            toggle.click();
        }
    });
    body.appendChild(toggle);
    render(readPreference());
})();
