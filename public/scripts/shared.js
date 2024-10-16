/*! For license information please see shared.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/scripts/shared.js":()=>{eval("/*\r\nThis script handles all the front-end logic that's shared across pages in the site:\r\n- Menu\r\n\r\nAuthor: Hristo Hristov (Milkeles)\r\nDate:   22/09/2024 (dd/mm/yyyy)\r\n*/\r\n\r\n\r\n/*====== MENU ======*/\r\nconst toggleMenuButton = document.getElementById(\"toggle-menu\");\r\nconst slideoverContainer = document.getElementById('slideover-container');\r\nconst slideoverBg = document.getElementById('slideover-bg');\r\nconst slideover = document.getElementById('slideover');\r\nconst horizontalMenu = document.getElementById(\"horizontal-menu\");\r\nconst dynamicNavigation = document.getElementById(\"mobile-navigation\");\r\n\r\nlet isOpen = false;\r\n\r\n// Make the dynamic menu visible or invisible.\r\nconst toggleDynamicMenu = () => {\r\n    toggleMenuButton.classList.toggle('hamburger-toggle');\r\n\r\n    if (isOpen) {\r\n\r\n        // Ensure animations play before the element is removed from the DOM.\r\n        setTimeout(() => {\r\n            dynamicNavigation.classList.add('hidden');\r\n            slideoverContainer.classList.add('invisible');\r\n            toggleMenuButton.disabled = false;\r\n        }, 300);\r\n\r\n        toggleMenuButton.disabled = true;\r\n        slideoverBg.classList.add('opacity-0');\r\n        slideoverBg.classList.remove('opacity-50');\r\n        slideover.classList.add('translate-x-full');\r\n        slideover.classList.remove('translate-x-0');\r\n        slideover.classList.add('opacity-0');\r\n        slideover.classList.remove('opacity-100');\r\n        isOpen = false;\r\n    } else {\r\n        dynamicNavigation.classList.remove('hidden');\r\n        slideoverContainer.classList.remove('invisible');\r\n\r\n        // Ensure animations play after the element is added to the DOM.\r\n        requestAnimationFrame(() => {\r\n            slideoverBg.classList.remove('opacity-0');\r\n            slideoverBg.classList.add('opacity-50');\r\n            slideover.classList.remove('translate-x-full');\r\n            slideover.classList.add('translate-x-0');\r\n            slideover.classList.remove('opacity-0');\r\n            slideover.classList.add('opacity-100');\r\n        });\r\n\r\n        isOpen = true;\r\n    }\r\n};\r\n\r\n// Add click event listener for the mobile button\r\nif (toggleMenuButton) {\r\n    toggleMenuButton.addEventListener('click', toggleDynamicMenu);\r\n}\r\n\r\n// Handle Scroll evenets\r\nconst handleScroll = () => {\r\n    const isSmallScreen = window.innerWidth <= 768;\r\n\r\n    if (isSmallScreen) {\r\n        toggleMenuButton.classList.remove('hidden');\r\n        horizontalMenu.classList.add('hidden');\r\n    } else {\r\n        if (window.scrollY >= 50) {\r\n            toggleMenuButton.classList.remove('hidden');\r\n            horizontalMenu.classList.add('hidden');\r\n        } else {\r\n            toggleMenuButton.classList.add('hidden');\r\n            horizontalMenu.classList.remove('hidden');\r\n\r\n            // Close the dynamic menu when the user is on top of the page.\r\n            if(isOpen) {\r\n                toggleDynamicMenu();\r\n                isOpen = false;\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    handleScroll();\r\n\r\n    window.addEventListener('scroll', handleScroll);\r\n\r\n    window.addEventListener('resize', handleScroll);\r\n});\r\n\r\n/*====== LANGUAGE DROPDOWN ======*/\r\nconst languageButton = document.getElementById('lang-button');\r\nconst languageDropdown = document.getElementById('lang-dropdown');\r\n\r\nconst toggleDropdown = (event) => {\r\n    event.stopPropagation();\r\n\r\n    languageDropdown.classList.toggle('hidden');\r\n\r\n    if (!languageDropdown.classList.contains('hidden')) {\r\n        \r\n        languageDropdown.classList.remove('opacity-0', 'scale-95');\r\n        languageDropdown.classList.add('opacity-100', 'scale-100');\r\n        languageButton.setAttribute('aria-expanded', 'true');\r\n    } else {\r\n        languageDropdown.classList.remove('opacity-100', 'scale-100');\r\n        languageDropdown.classList.add('opacity-0', 'scale-95');\r\n        languageButton.setAttribute('aria-expanded', 'false');\r\n    }\r\n};\r\n\r\nconst closeDropdown = () => {\r\n    if (!languageDropdown.classList.contains('hidden')) {\r\n        languageDropdown.classList.add('hidden');\r\n        languageDropdown.classList.remove('opacity-100', 'scale-100');\r\n        languageDropdown.classList.add('opacity-0', 'scale-95');\r\n        languageButton.setAttribute('aria-expanded', 'false');\r\n    }\r\n};\r\n\r\nlanguageButton.addEventListener('click', toggleDropdown);\r\n\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Escape') {\r\n        closeDropdown();\r\n    }\r\n});\n\n//# sourceURL=webpack://siteproject/./src/scripts/shared.js?")}},__webpack_exports__={};__webpack_modules__["./src/scripts/shared.js"]()})();