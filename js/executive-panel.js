document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather Icons after the DOM is fully loaded
  if (typeof feather !== 'undefined') {
    feather.replace();
  } else {
    console.warn('Feather icons library not loaded');
  }
  
  // Calculate timeline progress
  calculateTimelineProgress();
  
  // Update current date display
  updateCurrentDate();
});

/**
 * Calculates and updates the timeline progress bar based on current date
 * relative to the council term (Oct 10, 2024 - Dec 31, 2025)
 */
function calculateTimelineProgress() {
  // Council start and end dates
  const startDate = new Date('2024-10-10');
  const endDate = new Date('2025-12-31');
  
  // For demo purposes, use March 15, 2025 as the current date
  // In production, use the actual current date
  const demoDate = new Date('2025-03-15');
  const currentDate = new Date(); // Actual current date (unused in demo)
  
  // Calculate progress percentage
  const totalDuration = endDate - startDate;
  const elapsedDuration = demoDate - startDate;
  const progressPercentage = Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
  
  // Update progress bar width
  const progressBar = document.getElementById('timeline-progress');
  if (progressBar) {
    // Delay to allow for animation
    setTimeout(() => {
      progressBar.style.width = `${progressPercentage}%`;
    }, 300);
  }
}

/**
 * Updates the current date display in the timeline
 */
function updateCurrentDate() {
  const currentDateElement = document.getElementById('current-date');
  if (currentDateElement) {
    // For demo purposes, display March 15, 2025
    // In production, use the actual current date formatted
    currentDateElement.textContent = 'Mar 15, 2025';
    
    // Uncomment the line below to use actual current date in production
    // currentDateElement.textContent = formatDate(new Date());
  }
}

/**
 * Format a date object to a readable string (MMM DD, YYYY)
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Add event listeners for accordion functionality if present on the page
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
        
        // Rotate the chevron icon
        const icon = this.querySelector('svg');
        if (icon) {
          icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
        }
      });
    });
  }
});