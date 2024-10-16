/*
This script handles all the front-end logic that's shared across different pages in the site:
- Menu
- Language dropdown

Author: Hristo Hristov (Milkeles)
Creation date:   22/09/2024 (dd/mm/yyyy)
*/

// Ensures that no variables go in the global scope to prevent overwriting.
(function main() {
    "use strict";

    /*====== MENU ======*/
    const toggleMenuButton = document.getElementById('toggle-menu');
    const slideoverContainer = document.getElementById('slideover-container');
    const slideoverBg = document.getElementById('slideover-bg');
    const slideover = document.getElementById('slideover');
    const horizontalMenu = document.getElementById('horizontal-menu');
    const dynamicNavigation = document.getElementById('mobile-navigation');

    let isOpen = false;

    /*
    Manages the visibility of the toggable dynamic menu that can be opened via the hamburger button:
    - Makes the menu either visible or invisible depending on its current state.
    - Ensures its opening and closing animations play properly.
    */
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

    // Add click event listener for the mobile hamburger button
    if (toggleMenuButton) {
        toggleMenuButton.addEventListener('click', toggleDynamicMenu);
    }

    /*
    A function that controls the visibility of the dynamic menu:
    - When the user is on top of the page, close and hide the hamburger menu.
    - When the user scrolls, show the hamburger and allow them to open the menu.
    - Hides the static menu and enables only the toggleble hamburger menu on mobile devices.
    */
    const MOBILE_BREAKPOINT = 768;
    const handleScroll = () => {
        const isSmallScreen = window.innerWidth <= MOBILE_BREAKPOINT;

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
                if (isOpen) {
                    toggleDynamicMenu();
                }
            }
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        window.addEventListener('resize', handleScroll);
    });

    /*====== LANGUAGE DROPDOWN ======*/
    const languageButton = document.getElementById('lang-button');
    const languageDropdown = document.getElementById('lang-dropdown');

    /*
    Closes the language dropdown and handles Escape keypress to close it.
    */
    const closeDropdown = () => {
        if (!languageDropdown.classList.contains('hidden')) {
            languageDropdown.classList.add('hidden');
            languageDropdown.classList.remove('opacity-100', 'scale-100');
            languageDropdown.classList.add('opacity-0', 'scale-95');
            languageButton.setAttribute('aria-expanded', 'false');
        }
    };

    /*
    Opens the language dropdown.
    */
    const openDropdown = () => {
        languageDropdown.classList.remove('hidden');
        languageDropdown.classList.remove('opacity-0', 'scale-95');
        languageDropdown.classList.add('opacity-100', 'scale-100');
        languageButton.setAttribute('aria-expanded', 'true');
    };

    /*
    A function that either opens or closes the dropdown depending on its
    current state. 
    */
    const toggleDropdown = (event) => {
        event.stopPropagation();

        if (languageDropdown.classList.contains('hidden')) {
            openDropdown();
        } else {
            closeDropdown();
        }
    };

    if (languageButton) {
        languageButton.addEventListener('click', toggleDropdown);
    }

    // Closes the language dropdown if the user clicks escape.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeDropdown();
        }
    });
})();