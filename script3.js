function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeBtn = document.getElementById('themeBtn');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Toggle Light Mode';
    } else {
        themeBtn.textContent = 'Toggle Dark Mode';
    }
}

document.getElementById('themeBtn').addEventListener('click', toggleTheme);


function editJobTitle() {
    const jobTitleElement = document.getElementById('jobTitle');
    const newTitle = prompt('Enter the new job title:');

    if (newTitle !== null && newTitle.trim() !== '') {
        jobTitleElement.textContent = newTitle.trim();
    } else if (newTitle !== null) {
        alert('Job title update cancelled or was left blank.');
    }
}

document.getElementById('editJobBtn').addEventListener('click', editJobTitle);


function toggleSkills() {
    const skillsSection = document.getElementById('skillsSection');
    const toggleBtn = document.getElementById('toggleSkillsBtn');
    
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Show Skills';
    }
}

document.getElementById('toggleSkillsBtn').addEventListener('click', toggleSkills);


function updateCharCounter() {
    const messageBox = document.getElementById('msgBox');
    const counterSpan = document.getElementById('counter');
    
    const maxLength = parseInt(messageBox.getAttribute('maxlength'));
    const currentLength = messageBox.value.length;
    
    const remaining = maxLength - currentLength;
    
    counterSpan.textContent = remaining;
}

document.getElementById('msgBox').addEventListener('keyup', updateCharCounter);


function validateForm() {
    const nameField = document.getElementById('nameField');
    const emailField = document.getElementById('emailField');
    
    if (nameField.value.trim() === '') {
        alert('Please enter your Name.');
        return false; 
    }
    
    if (emailField.value.trim() === '') {
        alert('Please enter your Email.');
        return false;
    }
    
    alert('Thank you for your message! (Form submission allowed)');
    
    return true; 
}


function displayCurrentDate() {
    const dateDisplay = document.getElementById('dateDisplay');
    const currentDate = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    dateDisplay.textContent = `Last Updated: ${formattedDate}`;
}

displayCurrentDate();


function displayTimeGreeting() {
    const greetingElement = document.getElementById('timeGreeting');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingElement.textContent = `${greeting} Welcome to my profile!`;
}

displayTimeGreeting();