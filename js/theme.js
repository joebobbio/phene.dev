var app = document.getElementsByTagName("BODY")[0]
if(localStorage.lightMode == "light"){
    app.setAttribute("light-mode", "light")
}
window.addEventListener('load',function(){
    if(localStorage.lightMode == "light"){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1]?'black':'green')
        document.getElementById("theToggle").innerHTML = "Toggle dark mode"
        document.getElementById("theToggle").ariaLabel = "Toggle dark mode"
    }else if(localStorage.lightMode == "dark"){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = 'white')
    } else if(localStorage.lightMode == undefined){
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = 'white')
    }
})
function toggle_light_mode(){
    var app = document.getElementsByTagName("BODY")[0]
    if (localStorage.lightMode == "light"){
        localStorage.lightMode = "dark"
        app.setAttribute("light-mode", "dark");
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = 'white')
        document.getElementById("theToggle").innerHTML = "Toggle light mode"
        document.getElementById("theToggle").ariaLabel = "Toggle light mode"
    }else{
        localStorage.lightMode = "light"
        app.setAttribute("light-mode", "light");
        [...document.getElementsByTagName('a'),...document.getElementsByTagName('h1'),...document.getElementsByTagName('h2')].forEach(e => e.style.color = e.tagName[1] ? 'black' : 'green')
        document.getElementById("theToggle").innerHTML = "Toggle dark mode"
        document.getElementById("theToggle").ariaLabel = "Toggle dark mode"
    }
}
window.addEventListener("storage",function(){
    if(localStorage.lightMode == "dark"){
        app.setAttribute("light-mode", "dark");
    }
    else{
        app.setAttribute("light-mode", "light")
    }
}, false)
//
