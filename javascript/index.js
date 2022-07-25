
//Hamburger Navigation variables
const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-links")

//Toggle function for the hamburger button
function toggleNav() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleNav)


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
            case "sql":
                code.textContent = "Hello             SQL"  
            break;
    
        }
    
}