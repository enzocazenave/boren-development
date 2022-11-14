window.onload = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.header');
        const sections = document.querySelectorAll('section');
        const nav_items = document.querySelectorAll('.header-nav_li--a');

        // FIJAR NAVBAR
        navbar.classList.toggle('active', scrollY > 0);

        // NAVBAR ITEMS SELECTED
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section;
            }
        });

        nav_items.forEach(a => {
            a.classList.remove('header-nav_li--a__selected');

            if (a.id == (`${current.getAttribute('id')}-item`)) {
                a.classList.add('header-nav_li--a__selected');
            }
        });
    });
}