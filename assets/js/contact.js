// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form validation functions
function validateName(name, errorElement) {
    if (!name.trim()) {
        errorElement.textContent = 'This field is required';
        return false;
    }
    if (name.length < 2) {
        errorElement.textContent = 'Name must be at least 2 characters';
        return false;
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
        errorElement.textContent = 'Name can only contain letters, spaces, hyphens, and apostrophes';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateEmail(email, errorElement) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        errorElement.textContent = 'Email is required';
        return false;
    }
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Please enter a valid email address';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validatePhone(phone, errorElement) {
    if (phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ''))) {
        errorElement.textContent = 'Please enter a valid phone number';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateSubject(subject, errorElement) {
    if (!subject || subject === '') {
        errorElement.textContent = 'Please select a subject';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

function validateMessage(message, errorElement) {
    if (!message.trim()) {
        errorElement.textContent = 'Message is required';
        return false;
    }
    if (message.length < 10) {
        errorElement.textContent = 'Message must be at least 10 characters';
        return false;
    }
    errorElement.textContent = '';
    return true;
}

// Real-time validation
function setupRealTimeValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Remove existing event listeners
        const newInput = input.cloneNode(true);
        input.parentNode.replaceChild(newInput, input);
        
        newInput.addEventListener('blur', function() {
            validateField(this);
        });
        
        newInput.addEventListener('input', function() {
            const errorElement = document.getElementById(this.id + 'Error');
            if (errorElement && errorElement.textContent) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value;
    const errorElement = document.getElementById(field.id + 'Error');
    if (!errorElement) return;
    
    switch(field.id) {
        case 'firstName':
        case 'lastName':
            validateName(value, errorElement);
            break;
        case 'email':
            validateEmail(value, errorElement);
            break;
        case 'phone':
            validatePhone(value, errorElement);
            break;
        case 'subject':
            validateSubject(value, errorElement);
            break;
        case 'message':
            validateMessage(value, errorElement);
            break;
    }
    
    // Update field styling
    if (errorElement.textContent) {
        field.classList.add('error');
        field.classList.remove('success');
    } else if (value.trim()) {
        field.classList.add('success');
        field.classList.remove('error');
    } else {
        field.classList.remove('error', 'success');
    }
}

// Form submission handler
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const submitBtn = form.querySelector('.submit-btn');
    
    // Validate all fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    const isValid = [
        validateName(firstName.value, document.getElementById('firstNameError')),
        validateName(lastName.value, document.getElementById('lastNameError')),
        validateEmail(email.value, document.getElementById('emailError')),
        validatePhone(phone.value, document.getElementById('phoneError')),
        validateSubject(subject.value, document.getElementById('subjectError')),
        validateMessage(message.value, document.getElementById('messageError'))
    ].every(result => result === true);
    
    if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Remove validation classes
        form.querySelectorAll('.error, .success').forEach(el => {
            el.classList.remove('error', 'success');
        });
        
        // Clear error messages
        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Show success modal
        showSuccessModal();
        
        // Log form data (in real app, this would be sent to server)
        const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value
        };
        console.log('Form submitted:', formData);
    }, 1500);
}

// Success modal functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Map Functions
function openGoogleMaps() {
    // Coordinates for the location
    const lat = 40.7058316;
    const lng = -73.9856635;
    const address = "123+Premium+Avenue+Suite+500+New+York+NY+10001";
    
    // Open in Google Maps in a new tab
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=ChIJN1t_tDeuEmsRUsoyG83frY4`;
    
    window.open(googleMapsUrl, '_blank');
    
    // Log the action (for analytics in real implementation)
    console.log('Opening Google Maps for location:', address);
}

// Contact options links
function setupContactOptions() {
    document.querySelectorAll('.option-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.trim().toLowerCase();
            
            switch(action) {
                case 'request valuation':
                    alert('Property valuation request form would open here.');
                    break;
                case 'view agents':
                    alert('Our team of agents would be displayed here.');
                    break;
                case 'book now':
                    alert('Appointment scheduling calendar would open here.');
                    break;
            }
        });
    });
}

// Mobile menu close on click
function initializeMobileMenu() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse) {
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
    // Setup form validation
    setupRealTimeValidation();
    
    // Add submit event listener
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Setup map button
    const mapBtn = document.getElementById('openMapsBtn');
    if (mapBtn) {
        mapBtn.addEventListener('click', openGoogleMaps);
    }
    
    // Setup contact options
    setupContactOptions();
    
    // Setup mobile menu
    initializeMobileMenu();
    
    // Setup modal close buttons
    const closeModalBtn = document.querySelector('.close-modal');
    const closeModalBtn2 = document.getElementById('closeModalBtn');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeSuccessModal);
    }
    
    if (closeModalBtn2) {
        closeModalBtn2.addEventListener('click', closeSuccessModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeSuccessModal();
            }
        });
    }
    
    // Add fade-in animation to elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.option-card, .contact-info-item, .form-group');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Close mobile menu when clicking on contact button
    const getInTouchBtn = document.querySelector('.nav-btn');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    }
    
    // Lazy load iframe for better performance
    const mapIframe = document.querySelector('.google-map iframe');
    if (mapIframe) {
        // Add loading attribute for lazy loading
        mapIframe.setAttribute('loading', 'lazy');
        
        // Add loading animation
        mapIframe.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
        
        mapIframe.style.opacity = '0.5';
    }
});

// Bootstrap initialization
if (typeof bootstrap !== 'undefined') {
    // Initialize tooltips if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}