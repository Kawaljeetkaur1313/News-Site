document.addEventListener('DOMContentLoaded', () => {
    const ham = document.querySelector('.ham');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const moreToggles = document.querySelectorAll('.more-toggle');

    ham.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


    if (window.innerWidth < 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdownMenu = toggle.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            });
        });

        moreToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const moreMenu = toggle.nextElementSibling;
                moreMenu.classList.toggle('active');
            });
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            dropdownToggles.forEach(toggle => {
                toggle.removeEventListener('click', toggleDropdown);
            });
            moreToggles.forEach(toggle => {
                toggle.removeEventListener('click', toggleMore);
            });
        } else {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', toggleDropdown);
            });
            moreToggles.forEach(toggle => {
                toggle.addEventListener('click', toggleMore);
            });
        }
    });

    function toggleDropdown(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('active');
    }

    function toggleMore(e) {
        e.preventDefault();
        const moreMenu = this.nextElementSibling;
        moreMenu.classList.toggle('active');
    }


    document.addEventListener('click', (e) => {
        if (window.innerWidth < 768 && !e.target.closest('.nav-menu') && !e.target.closest('.ham')) {
            navMenu.classList.remove('active');
            document.querySelectorAll('.dropdown-menu, .more-menu').forEach(menu => {
                menu.classList.remove('active');
            });
        }
    });
});