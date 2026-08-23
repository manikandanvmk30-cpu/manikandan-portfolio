window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow =
        "0px 5px 20px rgba(0,0,0,0.5)";
    }
    else{
        nav.style.boxShadow = "none";
    }

});

const cards = document.querySelectorAll(
".project-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform =
        "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
        "translateY(0px)";
    });

});