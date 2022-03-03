function myFunction(){
    var x = document.getElementById("navBar")
    if(x.className === "topnav"){
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
}