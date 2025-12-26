// Service Hero Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    // Counter Animation for Stats
    function animateCounter() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // Lower number = faster animation
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const current = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            const increment = target / speed;
            let currentCount = 0;
            
            // Only animate if element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const updateCount = () => {
                            if (currentCount < target) {
                                currentCount += increment;
                                counter.textContent = Math.floor(currentCount) + 
                                    (counter.textContent.includes('+') ? '+' : 
                                     counter.textContent.includes('%') ? '%' : '');
                                setTimeout(updateCount, 1);
                            } else {
                                counter.textContent = target + 
                                    (counter.textContent.includes('+') ? '+' : 
                                     counter.textContent.includes('%') ? '%' : '');
                            }
                        };
                        updateCount();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // Interactive Hover Effects for Cards
    function initCardInteractions() {
        const cards = document.querySelectorAll('.stat-card, .highlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '100';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });
    }
    
    // Parallax Effect for Background
    function initParallaxEffect() {
        const heroSection = document.querySelector('.service-hero');
        const backgroundContainer = document.querySelector('.background-container');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (backgroundContainer) {
                backgroundContainer.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Button Click Animation
    function initButtonAnimations() {
        const premiumBtn = document.querySelector('.premium-btn');
        
        if (premiumBtn) {
            premiumBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Simulate navigation (replace with actual navigation)
                console.log('Navigate to services page');
            });
        }
    }
    
    // Dynamic Background Image Loading
    function loadBackgroundImages() {
        const mainBg = document.querySelector('.main-bg');
        const overlayBg = document.querySelector('.overlay-bg');
        
        // Preload images for better performance
        const imageUrls = [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
    
    // Initialize all functions
    function initHeroSection() {
        loadBackgroundImages();
        setTimeout(animateCounter, 500); // Delay for dramatic effect
        initCardInteractions();
        initParallaxEffect();
        initButtonAnimations();
        
        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroSection);
    } else {
        initHeroSection();
    }
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            // Handle scroll-dependent animations here
        });
    });
});






// ---------------------- service piller  ----------------------//
// Service Section Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const serviceImages = document.querySelectorAll('.card-image img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src') || img.src;
                
                if (!img.src.includes('unsplash')) {
                    img.src = src;
                }
                
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    serviceImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(img);
    });
    
    // Service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });
    
    // Service card hover effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Service link interactions
    const serviceLinks = document.querySelectorAll('.service-link');
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Get service type from badge
            const card = this.closest('.service-card');
            const badge = card.querySelector('.service-badge');
            const serviceType = badge ? badge.textContent : 'Service';
            
            console.log(`Navigating to ${serviceType} service page`);
            
            // In production, this would navigate to the specific service page
            // window.location.href = `services/${serviceType.toLowerCase().replace(/\s+/g, '-')}.html`;
        });
    });
    
    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Button ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: ${this.classList.contains('btn-primary') ? 'rgba(255, 255, 255, 0.3)' : 'rgba(16, 100, 148, 0.1)'};
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions
            if (this.classList.contains('btn-primary')) {
                console.log('Opening consultation form');
                // In production: window.location.href = 'contact.html';
            } else {
                console.log('Initiating call');
                // In production: window.location.href = 'tel:+1234567890';
            }
        });
    });
    
    // Add CSS for animations
    if (!document.querySelector('#service-animations')) {
        const style = document.createElement('style');
        style.id = 'service-animations';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Preload hover images
    const preloadImages = () => {
        const imageUrls = [
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    };
    
    // Preload after page loads
    window.addEventListener('load', preloadImages);
});
