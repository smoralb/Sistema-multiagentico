// FESTIVO - Event Detail Page Scripts

document.addEventListener('DOMContentLoaded', function() {
    initializeFavoriteButton();
    initializeHotelButton();
    checkFavoriteStatus();
    initializeLogoClick();
});

// Favorite Button Toggle
function initializeFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteBtn');

    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            const icon = this.querySelector('.material-icons');
            const eventTitle = document.querySelector('.event-title').textContent;

            if (icon.textContent === 'favorite_border') {
                // Add to favorites
                icon.textContent = 'favorite';
                this.classList.add('active');
                saveFavorite(eventTitle);
                console.log('Added to favorites:', eventTitle);

                // Show feedback (optional toast message)
                showFeedback('Added to favorites!');
            } else {
                // Remove from favorites
                icon.textContent = 'favorite_border';
                this.classList.remove('active');
                removeFavorite(eventTitle);
                console.log('Removed from favorites:', eventTitle);

                showFeedback('Removed from favorites');
            }
        });
    }
}

// Check if event is already in favorites
function checkFavoriteStatus() {
    const favoriteBtn = document.getElementById('favoriteBtn');
    const eventTitle = document.querySelector('.event-title').textContent;

    if (favoriteBtn && isFavorite(eventTitle)) {
        const icon = favoriteBtn.querySelector('.material-icons');
        icon.textContent = 'favorite';
        favoriteBtn.classList.add('active');
    }
}

// Save favorite to localStorage
function saveFavorite(eventTitle) {
    let favorites = JSON.parse(localStorage.getItem('festivoFavorites') || '[]');
    if (!favorites.includes(eventTitle)) {
        favorites.push(eventTitle);
        localStorage.setItem('festivoFavorites', JSON.stringify(favorites));
    }
}

// Remove favorite from localStorage
function removeFavorite(eventTitle) {
    let favorites = JSON.parse(localStorage.getItem('festivoFavorites') || '[]');
    favorites = favorites.filter(fav => fav !== eventTitle);
    localStorage.setItem('festivoFavorites', JSON.stringify(favorites));
}

// Check if event is in favorites
function isFavorite(eventTitle) {
    let favorites = JSON.parse(localStorage.getItem('festivoFavorites') || '[]');
    return favorites.includes(eventTitle);
}

// Show feedback message
function showFeedback(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #1A1A1A;
        color: #FFFFFF;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Hotel Button Click Handler
function initializeHotelButton() {
    const hotelBtn = document.querySelector('.btn-hotel');

    if (hotelBtn) {
        hotelBtn.addEventListener('click', function() {
            const eventTitle = document.querySelector('.event-title').textContent;
            const location = document.querySelector('.meta-text').textContent;

            console.log('Searching hotels for:', eventTitle, 'in', location);

            // In a real implementation, this would open Booking.com with search parameters
            // For now, we'll show a message
            showFeedback('Redirecting to hotel search...');

            // Simulate redirect (in production, use actual Booking.com affiliate link)
            setTimeout(() => {
                // window.location.href = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(location)}`;
                console.log('Would redirect to Booking.com with location:', location);
            }, 1500);
        });
    }
}

// Share Event Functionality (could be added later)
function shareEvent() {
    const eventTitle = document.querySelector('.event-title').textContent;
    const eventUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: eventTitle + ' - FESTIVO',
            text: 'Check out this amazing festival!',
            url: eventUrl
        }).then(() => {
            console.log('Event shared successfully');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(eventUrl).then(() => {
            showFeedback('Link copied to clipboard!');
        });
    }
}

// Related Events Click Handler
const relatedEventCards = document.querySelectorAll('.related-section .event-card');
relatedEventCards.forEach(card => {
    card.addEventListener('click', function() {
        const eventTitle = this.querySelector('.card-title').textContent;
        console.log('Related event clicked:', eventTitle);

        // In a real implementation, this would navigate to the event detail page
        // For now, we'll reload the page (simulate navigation)
        showFeedback('Loading event details...');

        // Simulate navigation
        setTimeout(() => {
            // window.location.href = `/event/${eventSlug}`;
            console.log('Would navigate to:', eventTitle);
        }, 500);
    });
});

// Logo Click Handler - Navigate to homepage
function initializeLogoClick() {
    const logo = document.querySelector('.logo');

    if (logo) {
        logo.addEventListener('click', function() {
            console.log('Navigating to homepage...');
        });
    }
}

// Console welcome message for event detail page
console.log('%c🎉 Event Detail Page - FESTIVO', 'color: #FF6B35; font-size: 18px; font-weight: bold;');
console.log('%cExploring: Carnival of Rio de Janeiro', 'color: #666; font-size: 14px;');
