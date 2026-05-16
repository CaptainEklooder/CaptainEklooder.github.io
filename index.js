let username = "Guest";

document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}`;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome to CaptainEklooder's website, ${username}!`;
    document.getElementById("myText").style.display = 'none';   // Hides the input box
    document.getElementById("myButton").style.display = 'none'; // Hides the button
    document.getElementById("myLabel").style.display = 'none';  // Hides the "username:" text
}

const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const activeTheme = savedTheme || preferredTheme;

document.body.classList.toggle('dark-mode', activeTheme === 'dark');
if (themeToggle) {
    themeToggle.textContent = activeTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    themeToggle.onclick = () => {
        const isDark = document.body.classList.toggle('dark-mode');
        const newTheme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };
}
