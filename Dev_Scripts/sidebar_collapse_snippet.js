// ============================================================
// SIDEBAR COLLAPSE / EXPAND - Tinh nang thu gon thanh menu
// ============================================================
(function initSidebarCollapse() {
    const sidebar      = document.getElementById('sidebar');
    const collapseBtn  = document.getElementById('sidebar-collapse-btn');
    const collapseIcon = document.getElementById('sidebar-collapse-icon');
    const openFab      = document.getElementById('sidebar-open-fab');

    if (!sidebar || !collapseBtn || !openFab) return;

    const STORAGE_KEY = 'sidebarCollapsed';
    const wasCollapsed = localStorage.getItem(STORAGE_KEY) === 'true';

    function applyState(collapsed, animate) {
        if (!animate) {
            sidebar.style.transition = 'none';
            requestAnimationFrame(() => { sidebar.style.transition = ''; });
        }

        if (collapsed) {
            sidebar.classList.add('collapsed');
            openFab.classList.add('visible');
            if (collapseIcon) {
                collapseIcon.classList.remove('fa-chevron-left');
                collapseIcon.classList.add('fa-chevron-right');
            }
        } else {
            sidebar.classList.remove('collapsed');
            openFab.classList.remove('visible');
            if (collapseIcon) {
                collapseIcon.classList.remove('fa-chevron-right');
                collapseIcon.classList.add('fa-chevron-left');
            }
        }

        localStorage.setItem(STORAGE_KEY, collapsed ? 'true' : 'false');
    }

    applyState(wasCollapsed, false);

    collapseBtn.addEventListener('click', () => {
        const isCollapsed = sidebar.classList.contains('collapsed');
        applyState(!isCollapsed, true);
    });

    openFab.addEventListener('click', () => {
        applyState(false, true);
    });

    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'm') {
            e.preventDefault();
            const isCollapsed = sidebar.classList.contains('collapsed');
            applyState(!isCollapsed, true);
        }
    });
})();
