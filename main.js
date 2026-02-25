document.addEventListener("DOMContentLoaded", () => {
    const authView = document.getElementById("auth-view");
    const portfolioView = document.getElementById("portfolio-view");
    const authForm = document.getElementById("authForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");
    const formTitle = document.getElementById("formTitle");
    const submitBtn = document.getElementById("submitBtn");
    const toggleLink = document.getElementById("toggleLink");
    const toggleText = document.getElementById("toggleText");
    const logoutBtn = document.getElementById("logoutBtn");

    let isLoginMode = true;

    if (localStorage.getItem("isLoggedIn") === "true") {
        showPortfolio();
    }

    toggleLink.addEventListener("click", () => {
        isLoginMode = !isLoginMode;
        resetForm();
        
        if (isLoginMode) {
            formTitle.innerText = "Login";
            submitBtn.innerText = "Login";
            toggleText.innerHTML = 'Don\'t have an account? <span id="toggleLink" class="toggle-link">Sign Up</span>';
        } else {
            formTitle.innerText = "Sign Up";
            submitBtn.innerText = "Sign Up";
            toggleText.innerHTML = 'Already have an account? <span id="toggleLink" class="toggle-link">Login</span>';
        }
        
        document.getElementById("toggleLink").addEventListener("click", toggleLink.click); 
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        userError.innerText = "";
        passError.innerText = "";

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (username === "") {
            userError.innerText = "Username is required";
            isValid = false;
        } else if (username.length < 3) {
            userError.innerText = "Username must be at least 3 characters";
            isValid = false;
        }

        if (password === "") {
            passError.innerText = "Password is required";
            isValid = false;
        } else if (password.length < 4) {
            passError.innerText = "Password must be at least 4 characters";
            isValid = false;
        }

        if (!isValid) return;

        if (isLoginMode) {
            const storedUser = localStorage.getItem("storedUser");
            const storedPass = localStorage.getItem("storedPass");

            if (!storedUser) {
                userError.innerText = "No account found. Please Sign Up first.";
            } else if (username === storedUser && password === storedPass) {
                localStorage.setItem("isLoggedIn", "true");
                showPortfolio();
            } else {
                passError.innerText = "Invalid username or password";
            }

        } else {
            if (localStorage.getItem("storedUser") === username) {
                userError.innerText = "User already exists! Please Login.";
            } else {
                localStorage.setItem("storedUser", username);
                localStorage.setItem("storedPass", password);
                alert("Signup Successful! Please login.");
                
                toggleLink.click(); 
            }
        }
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        location.reload();
    });

    function showPortfolio() {
        authView.style.display = "none";
        portfolioView.style.display = "block";
    }

    function resetForm() {
        authForm.reset();
        userError.innerText = "";
        passError.innerText = "";
    }
});