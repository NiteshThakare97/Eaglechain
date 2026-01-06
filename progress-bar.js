// Script Tag for Progress Bar starts
const cards = document.querySelectorAll('.progress-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCard(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

cards.forEach(card => observer.observe(card));

function animateCard(card) {
    const percent = +card.dataset.percent;
    const bar = card.querySelector('.bar span');
    const number = card.querySelector('.percent');

    bar.style.width = percent + '%';

    let count = 0;
    const interval = setInterval(() => {
        count++;
        number.textContent = count + '%';
        if (count >= percent) clearInterval(interval);
    }, 15);
}

// Script Tag for Progress Bar ends


// Script Tag for Counter starts
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));

function animateCounter(counter) {
    const target = +counter.dataset.target;
    let count = 0;

    const speed = 20; // smaller = faster

    const update = () => {
        count++;
        counter.textContent = count;
        if (count < target) {
            setTimeout(update, speed);
        } else {
            counter.textContent = target;
        }
    };

    update();
}

// Script Tag for Counter ends