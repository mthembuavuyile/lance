// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
});

function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!navToggle || !mainNav) return; // Guard clause for missing elements
    
    // Toggle mobile navigation
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        mainNav.classList.toggle('active');
        
        // Toggle icon between bars and times
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(e.target) && 
            !navToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            
            // Reset icon
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) { // Adjust breakpoint as needed
                mainNav.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        }, 250);
    });
}
