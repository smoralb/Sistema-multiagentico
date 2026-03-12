// FESTIVO - Interactive Carousel and UI Scripts

// Carousel Navigation with Dots
document.addEventListener('DOMContentLoaded', function() {
    initializeCarouselDots();
    initializeSmoothScroll();
    initializeHeaderScroll();
    initializeLogoClick();
});

// Initialize Carousel Dots Navigation
function initializeCarouselDots() {
    const dots = document.querySelectorAll('.carousel-dots .dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));

            // Add active class to clicked dot
            this.classList.add('active');

            // In a real implementation, this would switch the displayed card
            console.log(`Switching to carousel item ${index + 1}`);
        });
    });
}

// Smooth Horizontal Scroll for Carousels
function initializeSmoothScroll() {
    const carouselContainers = document.querySelectorAll('.cards-grid');

    carouselContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - container.offsetLeft;
            touchScrollLeft = container.scrollLeft;
        });

        container.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - touchStartX) * 2;
            container.scrollLeft = touchScrollLeft - walk;
        });
    });
}

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Search Functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = this.value.trim();
            if (searchTerm) {
                console.log('Searching for:', searchTerm);
                // In a real implementation, this would trigger a search
                // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            }
        }
    });

    // Focus effect
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.borderColor = '#FF6B35';
        this.parentElement.style.backgroundColor = '#FFFFFF';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.borderColor = '#E0E0E0';
        this.parentElement.style.backgroundColor = '#F5F5F5';
    });
}

// Event Cards Click Handler
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('click', function() {
        const eventTitle = this.querySelector('.card-title').textContent;
        console.log('Event clicked:', eventTitle);

        // Navigate to event detail page
        // In a real implementation, this would use dynamic routing based on event slug
        window.location.href = 'event-detail.html';
    });
});

// Country Cards Click Handler
const countryCards = document.querySelectorAll('.country-card');
countryCards.forEach(card => {
    card.addEventListener('click', function() {
        const countryName = this.querySelector('.country-name').textContent;
        console.log('Country clicked:', countryName);
        // In a real implementation, this would navigate to country page
        // window.location.href = `/country/${countrySlug}`;
    });
});

// Hero CTA Button
const heroCta = document.querySelector('.btn-hero-cta');
if (heroCta) {
    heroCta.addEventListener('click', function() {
        console.log('Hero CTA clicked');
        // In a real implementation, this would navigate to explore page
        // window.location.href = '/explore';
    });
}

// Login and Signup Buttons
const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');

if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        console.log('Login clicked');
        // In a real implementation, this would open login modal or navigate to login page
        // window.location.href = '/login';
    });
}

if (signupBtn) {
    signupBtn.addEventListener('click', function() {
        console.log('Signup clicked');
        // In a real implementation, this would open signup modal or navigate to signup page
        // window.location.href = '/signup';
    });
}

// View All Links
const viewAllLinks = document.querySelectorAll('.view-all, .view-all-btn');
viewAllLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionTitle = this.closest('.carousel-section, .carousel-hero').querySelector('.carousel-title').textContent.trim();
        console.log('View all clicked for:', sectionTitle);
        // In a real implementation, this would navigate to category page
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('.carousel-section, .happening-section, .country-section, .hero-cta');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Happening This Month Cards
const happeningCards = document.querySelectorAll('.happening-card');
happeningCards.forEach(card => {
    card.addEventListener('click', function() {
        const eventTitle = this.querySelector('.happening-title').textContent;
        console.log('Happening event clicked:', eventTitle);

        // Navigate to event detail page
        window.location.href = 'event-detail.html';
    });
});

// Logo Click Handler - Smooth scroll to top
function initializeLogoClick() {
    const logo = document.querySelector('.logo');

    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Console welcome message
console.log('%c🎉 Welcome to FESTIVO!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cDiscover the world\'s most vibrant festivals', 'color: #666; font-size: 14px;');
