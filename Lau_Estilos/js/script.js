document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false; // Desactiva el checkbox
        });
    });

    // Cerrar el menú al hacer clic fuera del menú
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !event.target.closest('.nav-toggle-label')) {
            navToggle.checked = false; // Desactiva el checkbox
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Bienvenido a Lau Estilos!');

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile Menu Handling
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navToggle && navMenu) {
        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = event.target.closest('.nav-toggle-label');
            if (!isClickInsideNav && !isClickOnToggle && navToggle.checked) {
                navToggle.checked = false;
            }
        });
    }

    // Animación de scroll para secciones y elementos
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Si quieres que desaparezcan
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.servicio, section h2, .video-container, .contacto-info');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div style="text-align: center;">
            <h2>Lau Estilos</h2>
            <p>Cargando...</p>
        </div>
    `;
    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    });

    // Validación de formulario básica
    const contactForm = document.querySelector('.contacto-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const mensaje = this.querySelector('textarea');

            if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
                alert('Por favor, complete todos los campos');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email.value)) {
                alert('Por favor, ingrese un correo válido');
                return;
            }

            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            this.reset();
        });
    }
});
