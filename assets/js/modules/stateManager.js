export const state = {
    user: null,
    theme: 'light', // light or dark theme
};

// Update state function
export const setState = (key, value) => {
    state[key] = value;
    console.log(`State updated: ${key} =`, value);
    // Dispatch state change if needed for re-rendering, etc.
};