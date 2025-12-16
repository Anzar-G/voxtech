import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the window to the top
 * whenever the pathname changes.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Disable browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // CRITICAL FIX: Immediate scroll reset using layout effect (before paint)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // BACKUP: Force scroll after a tick (handles async cases)
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);

        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
