"use strict";

// MENU
const toggleMenuButton = document.getElementById("toggle-menu");
const slideoverContainer = document.getElementById('slideover-container');
const slideoverBg = document.getElementById('slideover-bg');
const slideover = document.getElementById('slideover');
const horizontalMenu = document.getElementById("horizontal-menu");
const dynamicNavigation = document.getElementById("mobile-navigation");

// Handle scroll events
let isOpen = false;
const toggleSidebarMenu = () => {
    toggleMenuButton.classList.toggle("hamburger-toggle");
    dynamicNavigation.classList.toggle("md:hidden");
    slideoverContainer.classList.toggle('invisible');
    slideoverBg.classList.toggle('opacity-0');
    slideoverBg.classList.toggle('opacity-50');
    slideover.classList.toggle('translate-x-full');
    slideover.classList.toggle('translate-x-0');
    isOpen = !isOpen;
};

// Add click event listener for the mobile button
if (toggleMenuButton) {
    toggleMenuButton.addEventListener('click', toggleSidebarMenu);
}


const handleScroll = () => {
    const isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
        toggleMenuButton.classList.remove('hidden');
        horizontalMenu.classList.add('hidden');
    } else {
        if (window.scrollY >= 50) {
            toggleMenuButton.classList.remove('hidden');
            horizontalMenu.classList.add('hidden');
        } else {
            toggleMenuButton.classList.add('hidden');
            horizontalMenu.classList.remove('hidden');
            if(isOpen) {
                toggleMenuButton.classList.toggle("hamburger-toggle");
                slideoverContainer.classList.toggle('invisible');
                slideoverBg.classList.toggle('opacity-0');
                slideoverBg.classList.toggle('opacity-50');
                slideover.classList.toggle('translate-x-full');
                slideover.classList.toggle('translate-x-0');
                isOpen = false;
            }
            
        }
    }

};

document.addEventListener('DOMContentLoaded', () => {
    // Initial check to set the correct state
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add resize event listener to handle screen size changes
    window.addEventListener('resize', handleScroll);
});
