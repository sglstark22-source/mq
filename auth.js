// Authentication System for MCQ Website

// Default users (in a real application, these would be stored securely on a server)
const defaultUsers = {
    admin: {
        username: 'admin',
        password: 'admin123',
        role: 'admin',
        name: 'Administrator'
    },
    student: {
        username: 'student',
        password: 'student123',
        role: 'student',
        name: 'Student'
    }
};

// Initialize users in localStorage if not exists
function initializeUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Get all users
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : defaultUsers;
}

// Save users
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Check if user exists and validate credentials
function authenticateUser(username, password) {
    const users = getUsers();
    const user = users[username];
    
    if (user && user.password === password) {
        return {
            success: true,
            user: {
                username: user.username,
                role: user.role,
                name: user.name
            }
        };
    }
    
    return {
        success: false,
        message: 'Invalid username or password'
    };
}

// Register new user (student only)
function registerUser(username, password, name) {
    const users = getUsers();
    
    if (users[username]) {
        return {
            success: false,
            message: 'Username already exists'
        };
    }
    
    if (username.length < 3) {
        return {
            success: false,
            message: 'Username must be at least 3 characters'
        };
    }
    
    if (password.length < 6) {
        return {
            success: false,
            message: 'Password must be at least 6 characters'
        };
    }
    
    users[username] = {
        username: username,
        password: password,
        role: 'student',
        name: name || username
    };
    
    saveUsers(users);
    
    return {
        success: true,
        user: users[username]
    };
}

// Get current logged in user
function getCurrentUser() {
    const userStr = sessionStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Set current logged in user
function setCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

// Clear current user (logout)
function clearCurrentUser() {
    sessionStorage.removeItem('currentUser');
}

// Check if user is authenticated
function isAuthenticated() {
    return getCurrentUser() !== null;
}

// Check if user is admin
function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

// Initialize on load
initializeUsers();

