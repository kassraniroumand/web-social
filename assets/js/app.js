import { setState, state } from './modules/stateManager.js';
import {loadTemplate} from "./modules/templateLoader";

document.addEventListener('DOMContentLoaded', async () => {
    // Load Header Template
    // const headerHTML = await loadTemplate('/templates/header.html');
    // document.body.insertAdjacentHTML('afterbegin', headerHTML);
    //
    // // Load Footer Template
    // const footerHTML = await loadTemplate('/templates/footer.html');
    // document.body.insertAdjacentHTML('beforeend', footerHTML);
    //
    // // Example: Handle User State
    // if (!state.user) {
    //     setState('user', { name: 'Kassra', loggedIn: true });
    // }
    // console.log('User info:', state.user);

    // Render Dynamic Content
    const mainContent = document.createElement('main');
    mainContent.className = 'p-6';
    mainContent.innerHTML = `
        <h2 class="text-2xl">Welcome, ${state.user.name}</h2>
        <p class="mt-4">You are ${state.user.loggedIn ? 'logged in' : 'not logged in'}.</p>
    `;
    document.body.appendChild(mainContent);
});
