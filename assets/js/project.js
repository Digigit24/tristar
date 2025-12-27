// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Amenities data
const amenitiesData = [
    {
        icon: 'fas fa-swimming-pool',
        title: 'Infinity Pool',
        description: 'Stunning infinity-edge swimming pool with panoramic city views'
    },
    {
        icon: 'fas fa-dumbbell',
        title: 'Fitness Center',
        description: 'State-of-the-art gym with personal training facilities'
    },
    {
        icon: 'fas fa-spa',
        title: 'Spa & Wellness',
        description: 'Luxury spa with massage rooms and sauna'
    },
    {
        icon: 'fas fa-utensils',
        title: 'Fine Dining',
        description: 'Gourmet restaurants and private dining rooms'
    },
    {
        icon: 'fas fa-child',
        title: 'Kids Play Area',
        description: 'Safe and fun play area for children'
    },
    {
        icon: 'fas fa-film',
        title: 'Private Theater',
        description: 'Cinema-style theater with surround sound'
    },
    {
        icon: 'fas fa-wine-glass-alt',
        title: 'Wine Cellar',
        description: 'Temperature-controlled wine storage'
    },
    {
        icon: 'fas fa-car',
        title: 'Valet Parking',
        description: 'Concierge and valet parking services'
    },
    {
        icon: 'fas fa-concierge-bell',
        title: '24/7 Concierge',
        description: 'Round-the-clock concierge services'
    },
    {
        icon: 'fas fa-gamepad',
        title: 'Games Room',
        description: 'Entertainment room with pool table and games'
    },
    {
        icon: 'fas fa-book',
        title: 'Library',
        description: 'Quiet reading room with extensive collection'
    },
    {
        icon: 'fas fa-network-wired',
        title: 'Business Center',
        description: 'Fully equipped business facilities'
    },
    {
        icon: 'fas fa-leaf',
        title: 'Green Spaces',
        description: 'Beautifully landscaped gardens'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Security',
        description: '24/7 security with CCTV surveillance'
    },
    {
        icon: 'fas fa-dog',
        title: 'Pet Care',
        description: 'Pet grooming and walking services'
    },
    {
        icon: 'fas fa-basketball-ball',
        title: 'Sports Court',
        description: 'Multi-purpose sports court'
    },
    {
        icon: 'fas fa-users',
        title: 'Community Lounge',
        description: 'Elegant lounge for social gatherings'
    },
    {
        icon: 'fas fa-cocktail',
        title: 'Rooftop Bar',
        description: 'Sky bar with breathtaking views'
    },
    {
        icon: 'fas fa-hot-tub',
        title: 'Jacuzzi',
        description: 'Outdoor jacuzzi with seating area'
    },
    {
        icon: 'fas fa-music',
        title: 'Music Room',
        description: 'Sound-proof music practice room'
    },
    {
        icon: 'fas fa-running',
        title: 'Jogging Track',
        description: 'Outdoor jogging track'
    },
    {
        icon: 'fas fa-paw',
        title: 'Pet Park',
        description: 'Dedicated area for pets'
    },
    {
        icon: 'fas fa-chess',
        title: 'Game Room',
        description: 'Board games and card room'
    },
    {
        icon: 'fas fa-bicycle',
        title: 'Bike Storage',
        description: 'Secure bicycle storage'
    },
    {
        icon: 'fas fa-first-aid',
        title: 'Medical Room',
        description: 'First aid and medical assistance'
    }
];

// Initialize amenities
function initializeAmenities() {
    const amenitiesGrid = document.getElementById('amenitiesGrid');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    
    // Show first 8 amenities
    const initialAmenities = amenitiesData.slice(0, 8);
    const remainingAmenities = amenitiesData.slice(8);
    
    // Render initial amenities
    renderAmenities(initialAmenities, amenitiesGrid);
    
    // View more functionality
    let showingAll = false;
    viewMoreBtn.addEventListener('click', function() {
        if (!showingAll) {
            // Show all amenities
            amenitiesGrid.innerHTML = '';
            renderAmenities(amenitiesData, amenitiesGrid);
            viewMoreBtn.innerHTML = '<span>Show Less</span><i class="fas fa-chevron-up"></i>';
            showingAll = true;
        } else {
            // Show only initial amenities
            amenitiesGrid.innerHTML = '';
            renderAmenities(initialAmenities, amenitiesGrid);
            viewMoreBtn.innerHTML = '<span>View All Amenities</span><i class="fas fa-chevron-down"></i>';
            showingAll = false;
        }
        
        // Scroll to amenities section
        document.querySelector('.amenities-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Render amenities
function renderAmenities(amenities, container) {
    amenities.forEach(amenity => {
        const amenityCard = document.createElement('div');
        amenityCard.className = 'amenity-card fade-in';
        amenityCard.innerHTML = `
            <div class="amenity-icon">
                <i class="${amenity.icon}"></i>
            </div>
            <h3 class="amenity-title">${amenity.title}</h3>
            <p class="amenity-description">${amenity.description}</p>
        `;
        container.appendChild(amenityCard);
    });
}

// Gallery hover effect
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
}

// Smooth scroll for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// CTA button handlers
function initializeCTAButtons() {
    // Schedule Tour Button
    const scheduleTourBtn = document.querySelector('.key-details-card .cta-button');
    scheduleTourBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Our sales team will contact you shortly to schedule a private tour.');
    });
    
    // Contact Sales Button
    const contactSalesBtn = document.querySelector('.cta-button.primary');
    contactSalesBtn.addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
    
    // Download Brochure Button
    const downloadBrochureBtn = document.querySelector('.cta-button.secondary');
    downloadBrochureBtn.addEventListener('click', function() {
        alert('Brochure download will begin shortly...');
        // In real implementation, this would trigger a file download
        // window.open('/brochure.pdf', '_blank');
    });
}

// Mobile menu close on click
function initializeMobileMenu() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAmenities();
    initializeGallery();
    initializeSmoothScroll();
    initializeCTAButtons();
    initializeMobileMenu();
    
    // Add scroll animation to elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.amenity-card, .feature-item, .detail-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Bootstrap initialization
    if (typeof bootstrap !== 'undefined') {
        // Initialize tooltips if needed
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});



// ================================================= //
// project list
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.projects-tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Animate stats on scroll
    const statCards = document.querySelectorAll('.stat-card');
    const observerOptions = {
        threshold: 0.2,
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
    
    statCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Animate project cards on tab switch
    const animateCards = () => {
        const cards = document.querySelectorAll('.projects-tab-content.active .project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    };
    
    // Initial animation
    setTimeout(animateCards, 300);
    
    // Re-animate on tab switch
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(animateCards, 300);
        });
    });
});





// ========================================//
// hero section
