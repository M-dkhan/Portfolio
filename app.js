
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const connectBtn = document.getElementById("connectBtn");

    connectBtn.addEventListener("click", function () {
        // Show the overlay
        overlay.classList.remove("hidden");
        // Disable scrolling on the main content
        document.body.style.overflow = "hidden";
    });

    // Function to hide the overlay
    function closeOverlay() {
        overlay.classList.add("hidden");
        // Enable scrolling on the main content
        document.body.style.overflow = "auto";
    }

    // Close the overlay when clicking outside of the sections
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Add more functionality as needed for your sections

    // Example: Close the overlay when a "Close" button is clicked in one of the sections
    const closeBtn = document.getElementById("closeBtn"); // Add an id to your close button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            closeOverlay();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const connectBtn = document.getElementById("connectBtn");
    const closeBtn = document.getElementById("closeBtn");

    connectBtn.addEventListener("click", function () {
        // Show the overlay
        overlay.classList.remove("hidden");
        // Disable scrolling on the main content
        document.body.style.overflow = "hidden";
        // Show the close button
        closeBtn.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", function () {
        // Hide the overlay
        overlay.classList.add("hidden");
        // Enable scrolling on the main content
        document.body.style.overflow = "auto";
        // Hide the close button
        closeBtn.classList.add("hidden");
    });

    // Add more functionality as needed for your sections

    // Example: Close the overlay when a "Close" button is clicked in one of the sections
    const closeSectionBtn = document.getElementById("closeSectionBtn"); // Add an id to your close section button
    if (closeSectionBtn) {
        closeSectionBtn.addEventListener("click", function () {
            closeBtn.click(); // Trigger the close button click event
        });
    }
});
const text = "LET'S BUILD SOMETHING AMAZING TOGETHER";
const animatedText = document.getElementById("animated-text");
let index = 0;

function animateText() {
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(animateText, 100);
    }
}

animateText();
function makeColorful(element) {
    element.style.filter = 'grayscale(0%)';
}

function makeGrayscale(element) {
    element.style.filter = 'grayscale(100%)';
}
// JavaScript to handle scrolling and toggle the "scrolled-past" class
const overviewSection = document.querySelector('section');
const arrowImage = document.querySelector('.arrow-image');

window.addEventListener('scroll', () => {
    const overviewBottom = overviewSection.getBoundingClientRect().bottom;
    if (overviewBottom <= window.innerHeight) {
        // The overview section is scrolled past
        overviewSection.classList.add('scrolled-past');
    } else {
        overviewSection.classList.remove('scrolled-past');
    }
});
// Select the parallax container element
const parallaxContainer = document.querySelector('.parallax-container');

// Function to update the background position based on scroll
function updateParallax() {
    const scrollY = window.scrollY;
    parallaxContainer.style.backgroundPosition = `center calc(50% + ${scrollY * 0.5}px)`;
}

// Attach the updateParallax function to the window's scroll event
window.addEventListener('scroll', updateParallax);

// Initial call to set the initial background position
updateParallax();
