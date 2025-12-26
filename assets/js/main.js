// main.js
// Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
    
//     // Navbar scroll effect
//     const navbar = document.querySelector('.navbar');
    
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             if (targetId === '#') return;
            
//             const targetElement = document.querySelector(targetId);
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
                
//                 // Close mobile menu if open
//                 const navbarToggler = document.querySelector('.navbar-toggler');
//                 const navbarCollapse = document.querySelector('.navbar-collapse');
                
//                 if (navbarCollapse.classList.contains('show')) {
//                     navbarToggler.click();
//                 }
//             }
//         });
//     });
    
//     // Property card quick view functionality
//     const viewButtons = document.querySelectorAll('.view-btn');
    
//     viewButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             e.stopPropagation();
            
//             const propertyCard = this.closest('.property-card');
//             const propertyTitle = propertyCard.querySelector('.property-title').textContent;
//             const propertyPrice = propertyCard.querySelector('.property-price').textContent;
            
//             // In a real implementation, this would open a modal with more details
//             alert(`Quick view for: ${propertyTitle}\nPrice: ${propertyPrice}\n\nThis would open a detailed modal with more information, images, and a contact form.`);
//         });
//     });
    
//     // Form submission (basic example)
//     const contactForm = document.querySelector('.contact-form');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const name = this.querySelector('input[type="text"]').value;
//             const email = this.querySelector('input[type="email"]').value;
//             const message = this.querySelector('textarea').value;
            
//             // Basic validation
//             if (!name || !email || !message) {
//                 alert('Please fill in all fields');
//                 return;
//             }
            
//             // In a real implementation, you would send this data to a server
//             alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            
//             // Reset form
//             this.reset();
//         });
//     }
    
//     // Property card hover animation enhancement
//     const propertyCards = document.querySelectorAll('.property-card');
    
//     propertyCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-10px)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//         });
//     });
    
//     // Animate elements on scroll
//     const animateOnScroll = function() {
//         const elements = document.querySelectorAll('.property-card, .service-card');
        
//         elements.forEach(element => {
//             const elementPosition = element.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.2;
            
//             if (elementPosition < screenPosition) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     };
    
//     // Set initial state for animation
//     const animatedElements = document.querySelectorAll('.property-card, .service-card');
//     animatedElements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(30px)';
//         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//     });
    
//     window.addEventListener('scroll', animateOnScroll);
//     // Trigger once on load
//     animateOnScroll();
// });



// navbar
// Enhanced Navigation JavaScript
function initEnhancedNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
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
    
    // Add animation to nav items on page load
    window.addEventListener('load', function() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.animation = `navItemFadeIn 0.5s ease forwards ${index * 0.1}s`;
            item.style.opacity = '0';
        });
    });
    
    // Add hover effect to logo
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        navbarBrand.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize enhanced navigation
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedNavigation();
});




// hero banner
// Add to your existing script.js

// Hero Section Enhancements
function initHeroSection() {
    // Background slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    if (slides.length > 0) {
        // Start with first slide active
        slides[currentSlide].classList.add('active');
        
        // Rotate slides every 5 seconds
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
    
    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const suffix = element.textContent.includes('B') ? 'B' : '';
        const isDecimal = element.getAttribute('data-count').includes('.');
        
        let count = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            count += increment;
            
            if (isDecimal) {
                element.textContent = count.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(count) + suffix;
            }
            
            if (count >= target) {
                clearInterval(timer);
                if (isDecimal) {
                    element.textContent = target.toFixed(1) + suffix;
                } else {
                    element.textContent = target + suffix;
                }
            }
        }, 20);
    };
    
    // Trigger stats animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(animateCount);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.premium-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Premium search button hover effect
    const premiumSearchBtn = document.querySelector('.btn-premium-search');
    if (premiumSearchBtn) {
        premiumSearchBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        premiumSearchBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Form select hover effects
    const premiumSelects = document.querySelectorAll('.premium-select');
    premiumSelects.forEach(select => {
        select.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        select.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize hero section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroSection();
    
    // Add existing navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
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
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
});




// our vision & mission 
// JavaScript for Vision & Mission Section

function initVisionMissionSection() {
    // Animate counters when section comes into view
    const counterElements = document.querySelectorAll('.counter');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.nextElementSibling?.classList.contains('counter-suffix') ? element.nextElementSibling.textContent : '';
        const duration = 2000; // Animation duration in ms
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                element.textContent = target.toLocaleString();
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    };
    
    // Observe when stats section comes into view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counterElements.forEach(animateCounter);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const statsSection = document.querySelector('.premium-stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Enhanced hover effects for vision/mission cards
    const visionMissionCards = document.querySelectorAll('.vision-mission-card');
    visionMissionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Interactive value tags
    const valueTags = document.querySelectorAll('.value-tag');
    valueTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            // Add a subtle pulse effect
            this.style.animation = 'pulseEffect 0.5s ease';
        });
        
        tag.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseEffect {
            0% { transform: translateY(-3px) scale(1); }
            50% { transform: translateY(-3px) scale(1.05); }
            100% { transform: translateY(-3px) scale(1); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initVisionMissionSection();
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});




// services
// JavaScript for Bento Grid Interactions
function initBentoGrid() {
    const bentoCards = document.querySelectorAll('.bento-card');
    
    // Enhanced hover effects with delay
    bentoCards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                this.style.zIndex = '100';
                
                // Add floating effect to adjacent cards
                const adjacentCards = getAdjacentCards(this);
                adjacentCards.forEach(adjCard => {
                    adjCard.style.transform = 'translateY(-5px)';
                });
            }, 100);
        });
        
        card.addEventListener('mouseleave', function() {
            clearTimeout(hoverTimeout);
            this.style.zIndex = '1';
            
            // Reset adjacent cards
            const adjacentCards = getAdjacentCards(this);
            adjacentCards.forEach(adjCard => {
                adjCard.style.transform = 'translateY(0)';
            });
        });
    });
    
    // Get adjacent cards in the grid
    function getAdjacentCards(card) {
        const allCards = Array.from(bentoCards);
        const currentIndex = allCards.indexOf(card);
        const adjacentIndices = [
            currentIndex - 1, // left
            currentIndex + 1, // right
            currentIndex - 4, // above (for desktop grid)
            currentIndex + 4  // below (for desktop grid)
        ];
        
        return adjacentIndices
            .filter(index => index >= 0 && index < allCards.length)
            .map(index => allCards[index])
            .filter(adjCard => adjCard !== card);
    }
    
    // Card click interactions
    bentoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.card-link')) {
                // For cards without specific links, add a visual feedback
                this.classList.add('card-clicked');
                setTimeout(() => {
                    this.classList.remove('card-clicked');
                }, 300);
            }
        });
    });
    
    // Add CSS for click animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardClick {
            0% { transform: translateY(-15px) scale(1.02); }
            50% { transform: translateY(-15px) scale(0.98); }
            100% { transform: translateY(-15px) scale(1.02); }
        }
        .card-clicked {
            animation: cardClick 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initBentoGrid();
});





// projects 
// JavaScript for Projects Section
function initProjectsSection() {
    const projectsTrack = document.getElementById('projectsTrack');
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const currentProjectEl = document.getElementById('currentProject');
    const totalProjectsEl = document.getElementById('totalProjects');
    const navDotsContainer = document.getElementById('projectDots');
    
    let currentIndex = 0;
    const totalProjects = projectCards.length;
    
    // Initialize navigation dots
    function initNavigationDots() {
        navDotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalProjects; i++) {
            const dot = document.createElement('div');
            dot.className = `nav-dot ${i === 0 ? 'active' : ''}`;
            dot.dataset.index = i;
            
            dot.addEventListener('click', () => {
                goToProject(i);
            });
            
            navDotsContainer.appendChild(dot);
        }
        
        totalProjectsEl.textContent = totalProjects.toString().padStart(2, '0');
    }
    
    // Go to specific project
    function goToProject(index) {
        // Ensure index is within bounds
        if (index < 0) index = totalProjects - 1;
        if (index >= totalProjects) index = 0;
        
        // Update current index
        currentIndex = index;
        
        // Update track position
        projectsTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active states
        projectCards.forEach((card, i) => {
            card.classList.toggle('active', i === currentIndex);
        });
        
        // Update navigation dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Update current project number
        currentProjectEl.textContent = (currentIndex + 1).toString().padStart(2, '0');
        
        // Update button states
        updateButtonStates();
    }
    
    // Update button states
    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalProjects - 1;
    }
    
    // Next project
    nextBtn.addEventListener('click', () => {
        goToProject(currentIndex + 1);
    });
    
    // Previous project
    prevBtn.addEventListener('click', () => {
        goToProject(currentIndex - 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('#our-projects').matches(':hover')) {
            if (e.key === 'ArrowRight') {
                goToProject(currentIndex + 1);
            } else if (e.key === 'ArrowLeft') {
                goToProject(currentIndex - 1);
            }
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    projectsTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    projectsTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next project
                goToProject(currentIndex + 1);
            } else {
                // Swipe right - previous project
                goToProject(currentIndex - 1);
            }
        }
    }
    
    // Auto-advance (optional, can be disabled)
    let autoAdvanceInterval;
    
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(() => {
            if (currentIndex < totalProjects - 1) {
                goToProject(currentIndex + 1);
            } else {
                goToProject(0); // Loop back to first
            }
        }, 8000); // Change project every 8 seconds
    }
    
    function stopAutoAdvance() {
        clearInterval(autoAdvanceInterval);
    }
    
    // Start auto-advance on section hover
    const projectsSection = document.querySelector('.projects-section');
    projectsSection.addEventListener('mouseenter', stopAutoAdvance);
    projectsSection.addEventListener('mouseleave', startAutoAdvance);
    
    // Initialize
    initNavigationDots();
    updateButtonStates();
    startAutoAdvance(); // Start auto-advance
    
    // Add parallax effect to project images
    function initParallax() {
        projectCards.forEach((card, index) => {
            if (index === currentIndex) {
                const img = card.querySelector('.project-image img');
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    
                    img.style.transform = `scale(1.05) translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1.05)';
                });
            }
        });
    }
    
    // Reinitialize parallax on project change
    const observer = new MutationObserver(initParallax);
    observer.observe(projectsTrack, { attributes: true, attributeFilter: ['style'] });
    
    // Initial parallax setup
    setTimeout(initParallax, 100);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjectsSection();
});






// What Makes Us Different
// JavaScript for Difference Section
function initDifferenceSection() {
    const differencePoints = document.querySelectorAll('.difference-point');
    
    // Animate points on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state and observe
    differencePoints.forEach((point, index) => {
        point.style.opacity = '0';
        point.style.transform = 'translateY(20px)';
        point.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(point);
    });
    
    // Point click interaction
    differencePoints.forEach(point => {
        point.addEventListener('click', function() {
            // Remove active class from all points
            differencePoints.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked point
            this.classList.add('active');
            
            // Add visual feedback
            this.style.transform = 'translateY(-10px) translateX(10px) scale(1.02)';
            setTimeout(() => {
                if (this.classList.contains('active')) {
                    this.style.transform = 'translateY(-10px) translateX(10px)';
                }
            }, 300);
            
            // Log interaction (in production, this could trigger analytics or more complex behavior)
            const pointTitle = this.querySelector('h3').textContent;
            console.log(`Point selected: ${pointTitle}`);
        });
    });
    
    // Hover effect for stats
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(16, 100, 148, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Achievement badge interaction
    const achievementBadge = document.querySelector('.achievement-badge');
    if (achievementBadge) {
        achievementBadge.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'floatBadge 6s ease-in-out infinite';
            }, 10);
        });
    }
    
    // Add keyboard navigation for points
    document.addEventListener('keydown', (e) => {
        const activePoint = document.querySelector('.difference-point.active');
        let nextPoint;
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (activePoint) {
                nextPoint = activePoint.nextElementSibling;
            } else {
                nextPoint = differencePoints[0];
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (activePoint) {
                nextPoint = activePoint.previousElementSibling;
            } else {
                nextPoint = differencePoints[differencePoints.length - 1];
            }
        }
        
        if (nextPoint && nextPoint.classList.contains('difference-point')) {
            nextPoint.click();
            nextPoint.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initDifferenceSection();
});




// company scroller
// JavaScript for Premium Client Scroller
function initClientScroller() {
    const scrollerTrack = document.getElementById('scrollerTrack');
    const pauseBtn = document.getElementById('pauseBtn');
    const playBtn = document.getElementById('playBtn');
    const speedButtons = document.querySelectorAll('.speed-btn');
    const progressFill = document.getElementById('progressFill');
    const currentGroupEl = document.getElementById('currentGroup');
    const totalGroupsEl = document.getElementById('totalGroups');
    
    let isPaused = false;
    let scrollSpeed = 1;
    let animationId;
    let scrollPosition = 0;
    const groups = document.querySelectorAll('.scroller-group');
    const totalGroups = groups.length / 2; // We have duplicate groups for seamless loop
    
    // Initialize
    totalGroupsEl.textContent = totalGroups;
    
    // Calculate track width for seamless loop
    function calculateTrackWidth() {
        const groupWidth = groups[0].offsetWidth + 30; // Including gap
        scrollerTrack.style.width = `${groupWidth * groups.length}px`;
    }
    
    // Animate scroll
    function animateScroll() {
        if (!isPaused) {
            scrollPosition -= 0.5 * scrollSpeed;
            
            // Reset position when scrolled halfway (seamless loop)
            const trackWidth = scrollerTrack.scrollWidth / 2;
            if (Math.abs(scrollPosition) >= trackWidth) {
                scrollPosition = 0;
            }
            
            scrollerTrack.style.transform = `translateX(${scrollPosition}px)`;
            
            // Update progress
            updateProgress();
        }
        
        animationId = requestAnimationFrame(animateScroll);
    }
    
    // Update progress bar and group indicator
    function updateProgress() {
        const trackWidth = scrollerTrack.scrollWidth / 2;
        const progress = Math.abs(scrollPosition) / trackWidth;
        
        progressFill.style.width = `${progress * 100}%`;
        
        // Calculate current group (1-based)
        const groupProgress = progress * totalGroups;
        const currentGroup = Math.floor(groupProgress) + 1;
        currentGroupEl.textContent = Math.min(currentGroup, totalGroups);
    }
    
    // Control functions
    pauseBtn.addEventListener('click', () => {
        isPaused = true;
        pauseBtn.classList.add('active');
        playBtn.classList.remove('active');
        pauseBtn.style.background = 'var(--primary-blue)';
        playBtn.style.background = 'var(--steel-gray)';
    });
    
    playBtn.addEventListener('click', () => {
        isPaused = false;
        playBtn.classList.add('active');
        pauseBtn.classList.remove('active');
        playBtn.style.background = 'var(--primary-blue)';
        pauseBtn.style.background = 'var(--steel-gray)';
    });
    
    // Speed control
    speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            speedButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            scrollSpeed = parseFloat(btn.dataset.speed);
        });
    });
    
    // Pause on hover
    scrollerTrack.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    scrollerTrack.addEventListener('mouseleave', () => {
        if (!pauseBtn.classList.contains('active')) {
            isPaused = false;
        }
    });
    
    // Client card click interaction
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add active class and remove from others
            clientCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Pause scrolling temporarily
            const wasPaused = isPaused;
            isPaused = true;
            
            // Reset after 2 seconds
            setTimeout(() => {
                if (!wasPaused) {
                    isPaused = false;
                }
                this.classList.remove('active');
            }, 2000);
            
            // Get client info
            const clientName = this.querySelector('h4').textContent;
            const clientType = this.querySelector('p').textContent;
            
            // Show notification (in production, this could trigger a modal)
            showClientNotification(clientName, clientType);
        });
    });
    
    // Client notification function
    function showClientNotification(name, type) {
        const notification = document.createElement('div');
        notification.className = 'client-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${name}</h4>
                <p>${type}</p>
                <small>Click anywhere to dismiss</small>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            border: 1px solid var(--border-color);
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Click to dismiss
        notification.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize
    calculateTrackWidth();
    window.addEventListener('resize', calculateTrackWidth);
    animateScroll();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationId);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initClientScroller();
});








// leader 
// JavaScript for Premium Leadership Cards
function initLeadershipCards() {
    const leadershipCards = document.querySelectorAll('.leadership-card');
    const leaderImages = document.querySelectorAll('.leader-image-container');
    
    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add entrance animation to image
                    const imageContainer = entry.target.querySelector('.leader-image-container');
                    if (imageContainer) {
                        setTimeout(() => {
                            imageContainer.style.transform = 'scale(1)';
                            imageContainer.style.opacity = '1';
                        }, 200);
                    }
                    
                    // Add entrance animation to name
                    const name = entry.target.querySelector('.leader-name');
                    if (name) {
                        setTimeout(() => {
                            name.style.opacity = '1';
                            name.style.transform = 'translateY(0)';
                        }, 400);
                    }
                }, index * 300);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial states
    leadershipCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
        
        // Set initial states for child elements
        const imageContainer = card.querySelector('.leader-image-container');
        if (imageContainer) {
            imageContainer.style.transform = 'scale(0.8)';
            imageContainer.style.opacity = '0';
            imageContainer.style.transition = 'transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s';
        }
        
        const name = card.querySelector('.leader-name');
        if (name) {
            name.style.opacity = '0';
            name.style.transform = 'translateY(20px)';
            name.style.transition = 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s';
        }
    });
    
    // Image hover parallax effect
    leaderImages.forEach(imageContainer => {
        const portrait = imageContainer.querySelector('.leader-portrait');
        
        imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            portrait.style.transform = `scale(1.1) translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)`;
            
            // Move corner accent
            const cornerAccent = imageContainer.querySelector('.image-corner-accent');
            if (cornerAccent) {
                cornerAccent.style.transform = `rotate(135deg) scale(1.2) translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px)`;
            }
        });
        
        imageContainer.addEventListener('mouseleave', () => {
            portrait.style.transform = 'scale(1.1) translate(0, 0)';
            
            const cornerAccent = imageContainer.querySelector('.image-corner-accent');
            if (cornerAccent) {
                cornerAccent.style.transform = 'rotate(135deg) scale(1.2)';
            }
        });
    });
    
    // Card click interaction
    leadershipCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.animation = 'cardClick 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
            
            const name = this.querySelector('.leader-name').textContent;
            const position = this.querySelector('.leader-position').textContent;
            
            console.log(`Selected: ${name} - ${position}`);
        });
    });
    
    // Add custom animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardClick {
            0% { transform: translateY(-15px) scale(1); }
            50% { transform: translateY(-15px) scale(0.98); }
            100% { transform: translateY(-15px) scale(1); }
        }
        
        @keyframes nameReveal {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Optional: Add ripple effect on image hover
    leaderImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const ripple = document.createElement('div');
            ripple.className = 'image-ripple';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                border: 2px solid rgba(16, 100, 148, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: rippleEffect 0.6s ease-out;
                z-index: 1;
            `;
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode === this) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLeadershipCards();
});








// contact 

// Enhanced Contact Form with Premium Interactions
document.addEventListener('DOMContentLoaded', function() {
    const consultationForm = document.getElementById('consultationForm');
    const submitBtn = consultationForm.querySelector('.btn-submit-consultation');
    
    // Form validation and submission
    consultationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate API call (replace with actual fetch in production)
        try {
            await simulateApiCall();
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            consultationForm.reset();
            
        } catch (error) {
            showErrorMessage('Submission failed. Please try again.');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
    
    // Form validation
    function validateForm() {
        const nameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('emailAddress');
        const phoneInput = document.getElementById('phoneNumber');
        const inquirySelect = document.getElementById('inquiryType');
        
        let isValid = true;
        
        // Reset all error states
        consultationForm.querySelectorAll('.floating-form-group').forEach(group => {
            group.classList.remove('has-error');
        });
        
        // Validate name
        if (!nameInput.value.trim()) {
            showFieldError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value.trim()) {
            showFieldError(emailInput, 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone
        if (!phoneInput.value.trim()) {
            showFieldError(phoneInput, 'Please enter your phone number');
            isValid = false;
        } else if (!isValidPhone(phoneInput.value)) {
            showFieldError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate inquiry type
        if (!inquirySelect.value) {
            showFieldError(inquirySelect, 'Please select an inquiry type');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Phone validation (simple)
    function isValidPhone(phone) {
        return phone.length >= 10;
    }
    
    // Show field error
    function showFieldError(input, message) {
        const formGroup = input.closest('.floating-form-group');
        formGroup.classList.add('has-error');
        
        // Create or update error message
        let errorElement = formGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
    }
    
    // Simulate API call
    function simulateApiCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // For demo purposes, always succeed
                // In production, you'd handle actual API response
                resolve({ success: true });
            }, 1500);
        });
    }
    
    // Show success message
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success alert-dismissible fade show';
        successMessage.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-check-circle me-3" style="font-size: 1.5rem;"></i>
                <div>
                    <h5 class="mb-1">Request Submitted Successfully!</h5>
                    <p class="mb-0">Our real estate expert will contact you within 24 hours.</p>
                </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Insert after form header
        const formHeader = consultationForm.querySelector('.form-header');
        formHeader.parentNode.insertBefore(successMessage, formHeader.nextSibling);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.parentNode.removeChild(successMessage);
                }
            }, 300);
        }, 8000);
    }
    
    // Show error message
    function showErrorMessage(message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger alert-dismissible fade show';
        errorMessage.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-exclamation-triangle me-3" style="font-size: 1.5rem;"></i>
                <div>
                    <h5 class="mb-1">Submission Error</h5>
                    <p class="mb-0">${message}</p>
                </div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Insert after form header
        const formHeader = consultationForm.querySelector('.form-header');
        formHeader.parentNode.insertBefore(errorMessage, formHeader.nextSibling);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
            setTimeout(() => {
                if (errorMessage.parentNode) {
                    errorMessage.parentNode.removeChild(errorMessage);
                }
            }, 300);
        }, 8000);
    }
    
    // Real-time validation on blur
    consultationForm.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('blur', function() {
            const formGroup = this.closest('.floating-form-group');
            formGroup.classList.remove('has-error');
            
            // Remove existing error message
            const errorElement = formGroup.querySelector('.error-message');
            if (errorElement) {
                errorElement.remove();
            }
            
            // Validate specific field
            if (this.id === 'emailAddress' && this.value && !isValidEmail(this.value)) {
                showFieldError(this, 'Please enter a valid email');
            } else if (this.id === 'phoneNumber' && this.value && !isValidPhone(this.value)) {
                showFieldError(this, 'Please enter a valid phone number');
            }
        });
    });
    
    // Add focus effects
    consultationForm.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('focus', function() {
            const formGroup = this.closest('.floating-form-group');
            formGroup.classList.add('is-focused');
        });
        
        input.addEventListener('blur', function() {
            const formGroup = this.closest('.floating-form-group');
            formGroup.classList.remove('is-focused');
        });
    });
});
