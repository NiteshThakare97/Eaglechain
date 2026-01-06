document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".typewriter-title");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.setProperty("--chars", el.textContent.length);
                el.classList.add("animate");
                observer.unobserve(el); // run only once
            }
        });
    }, {
        threshold: 0.6
    });

    titles.forEach(title => observer.observe(title));
});