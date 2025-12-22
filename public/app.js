/**
 * GameBridge Core Engine
 * Version: 1.0.0
 * Description: Handles Auth State, UI Transitions, and Firebase Integration
 */

import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1. Configuration & State Management
const state = {
    isAuthorized: false,
    user: null,
    serverStatus: 'OPTIMIZED'
};

// 2. Initialization
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initAnimations();
});

function initApp() {
    const auth = getAuth();
    const enterBtn = document.getElementById('enter-bridge');

    // Monitor Auth State
    onAuthStateChanged(auth, (user) => {
        if (user) {
            state.user = user;
            state.isAuthorized = true;
            handleUserArrival(user);
        } else {
            console.log("Status: Guest Mode / Awaiting Authentication");
        }
    });

    // Event Listeners
    if (enterBtn) {
        enterBtn.addEventListener('click', loginSequence);
    }
}

// 3. The "VIP Gateway" Login Sequence
async function loginSequence() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    // Add a haptic/visual feedback trigger
    triggerButtonEffect();

    try {
        const result = await signInWithPopup(auth, provider);
        // Successful login
        console.log("Access Granted:", result.user.displayName);
        // Redirect to Dashboard (Phase 4)
        window.location.href = "/dashboard.html"; 
    } catch (error) {
        console.error("Auth Error:", error.code, error.message);
        alert("Authentication Failed. Please contact GameBridge Support.");
    }
}

// 4. UI & Animation Logic
function initAnimations() {
    // Ticker Logic: Infinite scroll for the "Live Feed"
    const ticker = document.querySelector('.ticker-wrapper');
    if (ticker) {
        ticker.style.animationDuration = '25s';
    }

    // Hover effect for Feature Cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

function triggerButtonEffect() {
    const btn = document.getElementById('enter-bridge');
    btn.innerHTML = "AUTHENTICATING...";
    btn.style.filter = "brightness(1.5) contrast(1.2)";
    btn.classList.add('scanning');
}

function handleUserArrival(user) {
    const loginBtn = document.querySelector('.btn-sm');
    if (loginBtn) {
        loginBtn.innerHTML = `<img src="${user.photoURL}" class="user-avatar"> Profile`;
    }
}

// 5. Security Guard (Enterprise Standard)
// Prevent console injection and basic scraping
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
        console.warn("Security Alert: Developer Tools Restricted on VIP Entry.");
    }
});
