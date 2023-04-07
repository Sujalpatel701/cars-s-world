var header=document.getElementById("header");
var mod1=document.getElementById("mod1");
var mod2=document.getElementById("mod2");
var mod3=document.getElementById("mod3");
var mod4=document.getElementById("mod4");
var mod5=document.getElementById("mod5");
var modle=document.getElementById("models");

function change(a,b,c,d,e,f,g,h){
    let h2=document.getElementById("h2");
    let p2=document.getElementById("p2");
    let h3=document.getElementById("h3");
    let p3=document.getElementById("p3");
    let h4=document.getElementById("h4");
    let p4=document.getElementById("p4");
    let h5=document.getElementById("h5");
    let p5=document.getElementById("p5");
    h2.innerHTML=a;
    p2.innerHTML=b;
    h3.innerHTML=c;
    p3.innerHTML=d;
    h4.innerHTML=e;
    p4.innerHTML=f;
    h5.innerHTML=g;
    p5.innerHTML=h;
}
function myfunction(){
    let mynum=20400000;
    mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
    price.innerHTML=mynum;
}
var price=document.getElementById("price");
var price1=document.getElementById("price");
var price2=document.getElementById("price");
var price3=document.getElementById("price");
var price4=document.getElementById("price");
var price5=document.getElementById("price");
mod1.onclick=function(){
    header.style.backgroundImage="url('image-1.jpg')";
    modle.innerHTML="911";
    price.innerHTML="PRICE";
    change("4.4 s","100km/h","330 km/h","Top speed","3996 cc","Engine","450bhp to 800Nm","Power And Torque");
    price1.onclick=function(){
        let mynum=20400000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod2.onclick=function(){
    header.style.backgroundImage="url('image-2.jpg')";
    modle.innerHTML="Cayenne";
    price.innerHTML="PRICE";
    change("6.2 s","100km/h","290 km/h","Top speed","2995 cc","Engine","450bhp to 770Nm","Power And Torque");
    price2.onclick=function(){
        let mynum=15100000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
    }
}
mod3.onclick=function(){
    header.style.backgroundImage="url('image-3.jpg')";
    modle.innerHTML="Macan";
    price.innerHTML="PRICE"
    change("6.8 s","100km/h","275 km/h","Top speed","2894 cc","Engine","370bhp to 550Nm","Power And Torque");
    price3.onclick=function(){
        let mynum=8517000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod4.onclick=function(){
    header.style.backgroundImage="url('image-4.jpg')";
    modle.innerHTML="718";
    price.innerHTML="PRICE";
    change("4.1 s","100km/h","295 km/h","Top speed","3996 cc","Engine","395bhp to 700Nm","Power And Torque");
    price4.onclick=function(){
        let mynum=16200000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod5.onclick=function(){
    header.style.backgroundImage="url('image-5.jpg')";
    modle.innerHTML="Panamera";
    price.innerHTML="PRICE"
    change("3.1 s","100km/h","315 km/h","Top speed","3996 cc","Engine","450bhp to 820Nm","Power And Torque");
    price5.onclick=function(){
        let mynum=32600000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}