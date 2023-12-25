
//membuat header sticky ketika di scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function name() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

//membuat tampilah humberger
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x-circle");
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove("bx-x-circle");
    navbar.classList.remove("active");
}


// membuat animasi saat elemen masuk ke dalam viewport
// membuat ojeck bru pd scrollreveal, lalu konfigurasi
const sr = ScrollReveal ({
    distance: "25px",
    duration: 2500,
    reset: true
})

// memberikan animasi pada bagian2 utama
sr.reveal(".home-text", {delay:210, origin:"bottom"})
sr.reveal(".about, .skill, .project, .contact", {delay:220, origin:"bottom"})


//mengirim formulir dan memberikan pesan sukses
$(document).ready(function () {
    $(".send").click(function (e) {
        e.preventDefault();

        setTimeout(function() {
            $("#submit-message").text("Message sent successfully").addClass("success-message");
        
            $(".contact-form form")[0].reset();

            setTimeout(function() {
                $("#submit-message").text("").removeClass("success-message");
            }, 3000);
    },);
    });
});


