function myFunction(){
    var x = document.getElementById("navBar")
    var y = document.getElementById('bottom')
    if(x.className === "topnav"){
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
    if(y.className === 'privacy'){
        y.className += ' responsive';
    }else{
        y.className = 'privacy'
    }
}