document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const profileImage = document.getElementById('profileImage');
    const userName = document.getElementById('userName');
    const contactBtn = document.getElementById('contactBtn');
    const backBtn = document.getElementById('backBtn');
    const portfolioPage = document.getElementById('portfolioPage');
    const contactPage = document.getElementById('contactPage');
    const contactForm = document.getElementById('contactForm');
    let colorTimeout;
    
    // Array of possible colors to cycle through
    const colors = [
        'name-color-1',
        'name-color-2',
        'name-color-3',
        'name-color-4',
        'name-color-5'
    ];
    
    // Function to reset name color to white
    function resetNameColor() {
        userName.classList.remove(...colors);
    }
    
    // Function to change name color with a random color from the array
    function changeNameColor() {
        // Clear any existing timeout
        if (colorTimeout) {
            clearTimeout(colorTimeout);
        }
        
        // Remove all color classes first
        resetNameColor();
        
        // Get a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Add the selected color class
        userName.classList.add(randomColor);
        
        // Set timeout to revert back to white after 20 seconds (60000 milliseconds)
        colorTimeout = setTimeout(resetNameColor, 5000);
    }
    
    // Function to switch to contact page
    function showContactPage() {
        portfolioPage.classList.remove('active');
        contactPage.classList.add('active');
    }
    
    // Function to switch back to portfolio page
    function showPortfolioPage() {
        contactPage.classList.remove('active');
        portfolioPage.classList.add('active');
    }
    
    // Event Listeners
    profileImage.addEventListener('click', changeNameColor);
    contactBtn.addEventListener('click', showContactPage);
    backBtn.addEventListener('click', showPortfolioPage);
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a toast
        console.log({ name, email, subject, message });
        
        // Show toast instead of alert
        const toast = new bootstrap.Toast(document.getElementById('formToast'));
        toast.show();
        
        contactForm.reset();
        
        // Optional: Automatically return to portfolio after showing toast
        setTimeout(showPortfolioPage, 3000);
    });
    
    // Optional: Add a small indicator that the image is clickable
    profileImage.title = "Click me to change name color!";
});

// Disable certain key combinations
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});