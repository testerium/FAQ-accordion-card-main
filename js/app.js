const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        // Remove .active class for all active elements
        faqs.forEach(faq => {
            faq.classList.remove('active');
        });

        faq.classList.toggle("active");
    })
});
