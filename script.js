// JavaScript for Wellness Tracker
document.getElementById('wellnessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mood = document.getElementById('mood').value;
    const sleep = document.getElementById('sleep').value;
    const activity = document.getElementById('activity').value;
    const mindfulness = document.getElementById('mindfulness').value;
    
    // Store the values in local storage
    localStorage.setItem('mood', mood);
    localStorage.setItem('sleep', sleep);
    localStorage.setItem('activity', activity);
    localStorage.setItem('mindfulness', mindfulness);

    displayWellnessData();
});

// Function to display wellness data from local storage
function displayWellnessData() {
    const mood = localStorage.getItem('mood');
    const sleep = localStorage.getItem('sleep');
    const activity = localStorage.getItem('activity');
    const mindfulness = localStorage.getItem('mindfulness');
    
    if (mood && sleep && activity && mindfulness) {
        document.getElementById('trackerDisplay').innerHTML = `
            Mood: ${mood}<br>
            Sleep: ${sleep} hours<br>
            Activity: ${activity}<br>
            Mindfulness: ${mindfulness} minutes
        `;
    } else {
        document.getElementById('trackerDisplay').innerHTML = 'No data recorded yet.';
    }
}

// Display wellness data when the page loads
document.addEventListener('DOMContentLoaded', displayWellnessData);

// JavaScript for Wellness Plan
document.getElementById('wellnessPlanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const goal = document.getElementById('goal').value;
    const activities = document.getElementById('activities').value;
    
    // Store the wellness plan in local storage
    localStorage.setItem('goal', goal);
    localStorage.setItem('activities', activities);

    displayWellnessPlan();
});

// Function to display wellness plan
function displayWellnessPlan() {
    const goal = localStorage.getItem('goal');
    const activities = localStorage.getItem('activities');
    
    if (goal && activities) {
        document.getElementById('planDisplay').innerHTML = `
            Goal: ${goal}<br>
            Activities: ${activities}
        `;
    } else {
        document.getElementById('planDisplay').innerHTML = 'No plan created yet.';
    }
}

// Display wellness plan when the page loads
document.addEventListener('DOMContentLoaded', displayWellnessPlan);
