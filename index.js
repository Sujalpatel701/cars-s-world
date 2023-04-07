function submitfunction(){
    var x=document.forms['myform']['name'].value;
    if(x==""){
        alert("name is required");
        return false;
    }
    var d=document.getElementById("cars");
    if(d.value==""){
        alert("Car Brand is required");
        return false;
    }
    var s=document.forms['myform']['email'].value;
    if(s==""){
        alert("Email is required");
        return false;
    }
    var p=document.forms['myform']['pass'].value;
    if(p==""){
        alert("Password is required");
        return false;
    }
    const selectElement = document.getElementById('cars');
    const selectedValue = selectElement.options[selectElement.selectedIndex].value;
    window.open(selectedValue, '_blank');
}
function focusevent(element){
    element.style.background="pink";
}
function onblurevent(element){
    element.style.background="#CBC3E3";
}
let sigin=document.getElementById("signinBtn");
let sigup=document.getElementById("signupBtn");
let namef=document.getElementById("nameField");
let title=document.getElementById("title");
let cares=document.getElementById("cares");

sigup.onclick=function(){
    namef.style.maxHeight="0";
    title.innerHTML="Sign In";
    sigin.classList.add("disables");
    sigup.classList.remove("disables");
}
sigin.onclick=function(){
    namef.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    sigin.classList.remove("disables");
    sigup.classList.add("disables");
}