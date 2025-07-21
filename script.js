// Mock Data
const mockFlights = [
    {
        id: 1,
        flightNumber: 'SL001',
        origin: 'Madrid',
        destination: 'Barcelona',
        departure: '10:30',
        arrival: '11:45',
        duration: '1h 15m',
        price: '415.000',
        airline: 'Sky Lidier Airlines',
        aircraft: 'A320',
        date: '2024-01-15',
        status: 'On Time'
    },
    {
        id: 2,
        flightNumber: 'SL002',
        origin: 'Madrid',
        destination: 'París',
        departure: '14:20',
        arrival: '16:35',
        duration: '2h 15m',
        price: '677.00',
        airline: 'Sky Lidier Airlines',
        aircraft: 'A321',
        date: '2024-01-15',
        status: 'On Time'
    },
    {
        id: 3,
        flightNumber: 'SL003',
        origin: 'Barcelona',
        destination: 'Roma',
        departure: '18:45',
        arrival: '20:30',
        duration: '1h 45m',
        price: '560.000',
        airline: 'Sky Lidier Airlines',
        aircraft: 'A320',
        date: '2024-01-15',
        status: 'Delayed'
    },
    {
        id: 4,
        flightNumber: 'SL004',
        origin: 'Madrid',
        destination: 'Londres',
        departure: '09:15',
        arrival: '11:30',
        duration: '2h 15m',
        price: '770.000',
        airline: 'Sky Lidier Airlines',
        aircraft: 'A330',
        date: '2024-01-16',
        status: 'On Time'
    },
    {
        id: 5,
        flightNumber: 'SL005',
        origin: 'Barcelona',
        destination: 'Ámsterdam',
        departure: '16:40',
        arrival: '19:25',
        duration: '2h 45m',
        price: '630.000',
        airline: 'Sky Lidier Airlines',
        aircraft: 'A321',
        date: '2024-01-16',
        status: 'On Time'
    }
];

const mockDestinations = [
    {
        id: 1,
        name: 'Barcelona',
        country: 'España',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxhaXJwbGFuZXxlbnwwfHx8fDE3NTI2MDMzNTF8MA&ixlib=rb-4.1.0&q=85',
        price: '415.000',
        duration: '1h 15m',
        rating: 4.8,
        description: 'Ciudad cosmopolita con arquitectura única, playas mediterráneas y rica cultura catalana.'
    },
    {
        id: 2,
        name: 'París',
        country: 'Francia',
        image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg',
        price: '677.000',
        duration: '2h 30m',
        rating: 4.9,
        description: 'La ciudad del amor con monumentos icónicos, arte de clase mundial y gastronomía exquisita.'
    },
    {
        id: 3,
        name: 'Roma',
        country: 'Italia',
        image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0fGVufDB8fHx8MTc1MjYwMzM1OHww&ixlib=rb-4.1.0&q=85',
        price: '560.000',
        duration: '2h 45m',
        rating: 4.7,
        description: 'Historia milenaria, arte renacentista y la auténtica cocina italiana en cada esquina.'
    },
    {
        id: 4,
        name: 'Londres',
        country: 'Reino Unido',
        image: 'https://images.unsplash.com/photo-1558204692-5f402fe220b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxhaXJwb3J0fGVufDB8fHx8MTc1MjYwMzM1OHww&ixlib=rb-4.1.0&q=85',
        price: '770.000',
        duration: '2h 15m',
        rating: 4.6,
        description: 'Metrópolis moderna con rica historia, museos de renombre mundial y cultura vibrante.'
    },
    {
        id: 5,
        name: 'Ámsterdam',
        country: 'Países Bajos',
        image: 'https://images.unsplash.com/photo-1483375801503-374c5f660610?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZXxlbnwwfHx8fDE3NTI2MDMzNTF8MA&ixlib=rb-4.1.0&q=85',
        price: '630.000',
        duration: '2h 45m',
        rating: 4.8,
        description: 'Canales pintorescos, museos de arte excepcionales y ambiente acogedor único.'
    },
    {
        id: 6,
        name: 'Berlín',
        country: 'Alemania',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxhaXJwbGFuZXxlbnwwfHx8fDE3NTI2MDMzNTF8MA&ixlib=rb-4.1.0&q=85',
        price: '580.000',
        duration: '2h 30m',
        rating: 4.5,
        description: 'Historia fascinante, vida nocturna vibrante y escena artística contemporánea.'
    }
];

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.classList.add('active');
}

function hideLoading() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.classList.remove('active');
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('active');
    setTimeout(() => {
        successMessage.classList.remove('active');
    }, 3000);
}

function simulateApiDelay(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Header Functionality
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    // Handle scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        // Re-initialize lucide icons
        lucide.createIcons();
    });
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileNav.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
}

// Flight Search Functionality
function initFlightSearch() {
    const flightSearchForm = document.getElementById('flightSearchForm');
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    
    flightSearchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const departure = document.getElementById('departure').value;
        const returnDate = document.getElementById('return').value;
        const passengers = document.getElementById('passengers').value;
        
        if (!origin || !destination || !departure) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        // Show loading
        const submitBtn = flightSearchForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></div>
            Buscando...
        `;
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await simulateApiDelay(1500);
            
            // Filter flights based on search criteria
            const filteredFlights = mockFlights.filter(flight => 
                flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
                flight.destination.toLowerCase().includes(destination.toLowerCase())
            );
            
            // Display results
            displayFlightResults(filteredFlights);
            
        } catch (error) {
            console.error('Error searching flights:', error);
            alert('Error al buscar vuelos. Inténtalo de nuevo.');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function displayFlightResults(flights) {
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    
    if (flights.length === 0) {
        resultsList.innerHTML = '<p>No se encontraron vuelos para tu búsqueda.</p>';
    } else {
        resultsList.innerHTML = flights.map(flight => `
            <div class="result-card">
                <div class="result-content">
                    <div class="flight-info">
                        <div class="flight-time">
                            <div class="time">${flight.departure}</div>
                            <div class="city">${flight.origin}</div>
                        </div>
                        <div class="flight-duration">
                            <div class="duration-line"></div>
                            <div class="duration-text">${flight.duration}</div>
                        </div>
                        <div class="flight-time">
                            <div class="time">${flight.arrival}</div>
                            <div class="city">${flight.destination}</div>
                        </div>
                    </div>
                    <div class="flight-price">
                        <div class="price">COP ${flight.price}</div>
                        <button class="btn btn-primary" onclick="selectFlight(${flight.id})">
                            Seleccionar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
    
    // Scroll to results
    setTimeout(() => {
        searchResults.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function selectFlight(flightId) {
    const flight = mockFlights.find(f => f.id === flightId);
    if (flight) {
        alert(`Has seleccionado el vuelo ${flight.flightNumber} de ${flight.origin} a ${flight.destination} por COP ${flight.price}`);
    }
}

// Destinations Functionality
function initDestinations() {
    const destinationsGrid = document.getElementById('destinationsGrid');
    
    destinationsGrid.innerHTML = mockDestinations.map(destination => `
        <div class="destination-card">
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.name}">
                <div class="destination-overlay"></div>
                <div class="destination-rating">
                    <i data-lucide="star" style="width: 12px; height: 12px; fill: currentColor;"></i>
                    ${destination.rating}
                </div>
                <div class="destination-info">
                    <div class="destination-name">${destination.name}</div>
                    <div class="destination-location">
                        <i data-lucide="map-pin" style="width: 16px; height: 16px;"></i>
                        ${destination.country}
                    </div>
                </div>
            </div>
            <div class="destination-content">
                <p class="destination-description">${destination.description}</p>
                <div class="destination-details">
                    <div class="destination-duration">
                        <i data-lucide="plane" style="width: 16px; height: 16px;"></i>
                        ${destination.duration}
                    </div>
                    <div class="destination-price">
                        <div class="price-label">Desde</div>
                        <div class="price-value">COP ${destination.price}</div>
                    </div>
                </div>
                <button class="btn btn-primary btn-full" onclick="viewFlights('${destination.name}')">
                    Ver Vuelos
                </button>
            </div>
        </div>
    `).join('');
    
    // Re-initialize lucide icons
    lucide.createIcons();
}

function viewFlights(destination) {
    // Pre-fill the search form and scroll to it
    document.getElementById('destination').value = destination;
    scrollToSection('#flights');
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!name || !email || !message) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }
        
        // Show loading
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></div>
            Enviando...
        `;
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await simulateApiDelay(1200);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Newsletter Functionality
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (!email) {
            alert('Por favor ingresa tu email');
            return;
        }
        
        // Show loading
        const submitBtn = newsletterForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await simulateApiDelay(1000);
            
            alert('¡Suscripción exitosa! Gracias por suscribirte.');
            emailInput.value = '';
            
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Error al suscribirse. Inténtalo de nuevo.');
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    // Navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            scrollToSection(targetId);
        });
    });
}

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.section-header, .destination-card, .feature-card, .contact-info, .contact-form-container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(2rem)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all functionalities
    initHeader();
    initFlightSearch();
    initDestinations();
    initContactForm();
    initNewsletter();
    initSmoothScrolling();
    initAnimations();
    
    // Set minimum date for date inputs to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('departure').min = today;
    document.getElementById('return').min = today;
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});

// Add CSS animation for spinning loader
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);