
//Button on homepage that can change light or dark mode
const modeButton = document.getElementById("mode-button")
modeButton.addEventListener("click", displaySettingSwitch)

let isDay = true;

//Changes the display setting.
function displaySettingSwitch() {

    isDay = !isDay;
    const rootElement = document.querySelector(':root')
    rootElement.classList.toggle("dark-mode")
    document.getElementById("header-logo").src = "images/dark-mode-logo.png";
    document.getElementById("footer-logo").src = "images/logo.png";

    //if toggled back to isDay, change back to original images.
    if(isDay) {
        document.getElementById("header-logo").src = "images/logo.png";
        document.getElementById("footer-logo").src = "images/logo-swapped-colors.png";
    }
}


//Hamburger Navigation variables
const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-links")
hamburgerButton.addEventListener('click', toggleNav)

//Toggle function for the hamburger button
function toggleNav() {
    navList.classList.toggle('show')
}


//Code Block Variables
const languageSelectors = document.getElementsByClassName("language-button")
const codeBlock = document.getElementById("code-block")
const javaSnippet = document.getElementById("java-snippet")
const javascriptSnippet = document.getElementById("javascript-snippet")
const kotlinSnippet = document.getElementById("kotlin-snippet")

//initializing the code block display with "Java".
javascriptSnippet.style.display = "none"
kotlinSnippet.style.display = "none"

//Based on user clicking a language, this function displays certain code.
function selectLanguage(language) {

    const code = document.getElementById("code")

        switch(language) {
            case "java":
                javaSnippet.style.display = "block"
                javascriptSnippet.style.display = "none"
                kotlinSnippet.style.display = "none"
                break;
            case "kotlin":
                kotlinSnippet.style.display = "block"
                javaSnippet.style.display = "none"
                javascriptSnippet.style.display = "none"
                break;
            case "javascript":
                javascriptSnippet.style.display = "block"
                kotlinSnippet.style.display = "none"
                javaSnippet.style.display = "none"
                break;
        }
    
}