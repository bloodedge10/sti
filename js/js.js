// Cargar nav.html dinámicamente
document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // Inicializar EmailJS después de cargar nav.html
            emailjs.init("RsW2-eMcZNCCPIBrI");

            // Obtener el formulario de contacto ahora que está en el DOM
            const contactForm = document.getElementById("contact-form");
            if (contactForm) {
                contactForm.addEventListener("submit", function (event) {
                    event.preventDefault();

                    const serviceID = "service_opxz2no";
                    const templateID = "template_vs7rtda";

                    emailjs.sendForm(serviceID, templateID, this).then(
                        (response) => {
                            console.log("Correo enviado:", response.status, response.text);
                            alert("Correo enviado exitosamente!");
                            this.reset();
                        },
                        (error) => {
                            console.error("Error al enviar el correo:", error);
                            alert("Error al enviar el correo.");
                        }
                    );
                });
            } else {
                console.error("Formulario de contacto no encontrado en el DOM.");
            }
        });
});

// Función para manejar el slideover desde la derecha
function toggleSlideover() {
    const slideover = document.getElementById("slideover");
    slideover.classList.toggle("active");
}
// Sticky Navbar
window.onscroll = function() {
    stickyNavbar();
};

function stickyNavbar() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Expandir/colapsar Service Cards
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Función para manejar el slideover desde la izquierda
function toggleSlideoverLeft() {
    const slideoverLeft = document.getElementById("slideover-left");
    slideoverLeft.classList.toggle("active");
}


 // Inicializar EmailJS después de cargar nav.html
 emailjs.init("RsW2-eMcZNCCPIBrI");

 // Obtener el formulario de contacto ahora que está en el DOM
 const contactForm = document.getElementById("contact-form");
 if (contactForm) {
     contactForm.addEventListener("submit", function (event) {
         event.preventDefault();

         const serviceID = "service_opxz2no";
         const templateID = "template_vs7rtda";

         emailjs.sendForm(serviceID, templateID, this).then(
             (response) => {
                 console.log("Correo enviado:", response.status, response.text);
                 alert("Correo enviado exitosamente!");
                 this.reset();
             },
             (error) => {
                 console.error("Error al enviar el correo:", error);
                 alert("Error al enviar el correo.");
             }
         );
     });
 } else {
     console.error("Formulario de contacto no encontrado en el DOM.");
 }


//Configurar el botón de WhatsApp
document.getElementById("contact-form").addEventListener("input", function () {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const whatsappURL = `https://wa.me/56956282768?text=Hola, soy ${name}. ${message}`;
    document.getElementById("whatsapp-button").href = whatsappURL;
});


document.addEventListener("DOMContentLoaded", () => {
    const submenuParent = document.querySelectorAll("#menu li.submenu > a");

    submenuParent.forEach((parent) => {
        parent.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            const submenu = parent.nextElementSibling; // Encuentra el submenú
            submenu.classList.toggle("active");
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}