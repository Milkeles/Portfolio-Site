/*
This script handles all the front-end logic that's shared across pages in the site:
- Menu

Author: Hristo Hristov (Milkeles)
Date:   22/09/2024 (dd/mm/yyyy)
*/
"use strict";

/*====== MENU ======*/
const toggleMenuButton = document.getElementById("toggle-menu");
const slideoverContainer = document.getElementById('slideover-container');
const slideoverBg = document.getElementById('slideover-bg');
const slideover = document.getElementById('slideover');
const horizontalMenu = document.getElementById("horizontal-menu");
const dynamicNavigation = document.getElementById("mobile-navigation");

let isOpen = false;

// Make the dynamic menu visible or invisible.
const toggleDynamicMenu = () => {
    toggleMenuButton.classList.toggle('hamburger-toggle');

    if (isOpen) {

        // Ensure animations play before the element is removed from the DOM.
        setTimeout(() => {
            dynamicNavigation.classList.add('hidden');
            slideoverContainer.classList.add('invisible');
            toggleMenuButton.disabled = false;
        }, 300);

        toggleMenuButton.disabled = true;
        slideoverBg.classList.add('opacity-0');
        slideoverBg.classList.remove('opacity-50');
        slideover.classList.add('translate-x-full');
        slideover.classList.remove('translate-x-0');
        slideover.classList.add('opacity-0');
        slideover.classList.remove('opacity-100');
        isOpen = false;
    } else {
        dynamicNavigation.classList.remove('hidden');
        slideoverContainer.classList.remove('invisible');

        // Ensure animations play after the element is added to the DOM.
        requestAnimationFrame(() => {
            slideoverBg.classList.remove('opacity-0');
            slideoverBg.classList.add('opacity-50');
            slideover.classList.remove('translate-x-full');
            slideover.classList.add('translate-x-0');
            slideover.classList.remove('opacity-0');
            slideover.classList.add('opacity-100');
        });

        isOpen = true;
    }
};

// Add click event listener for the mobile button
if (toggleMenuButton) {
    toggleMenuButton.addEventListener('click', toggleDynamicMenu);
}

// Handle Scroll evenets
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

            // Close the dynamic menu when the user is on top of the page.
            if(isOpen) {
                toggleDynamicMenu();
                isOpen = false;
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('resize', handleScroll);
});