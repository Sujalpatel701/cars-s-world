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
    let mynum=17500000;
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
    modle.innerHTML="M5";
    price.innerHTML="PRICE";
    change("3.4 s","100km/h","310 km/h","Top speed","4395 cc","Engine","616bhp to 750Nm","Power And Torque");
    price1.onclick=function(){
        let mynum=17500000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod2.onclick=function(){
    header.style.backgroundImage="url('image-2.jpg')";
    modle.innerHTML="8 Series";
    price.innerHTML="PRICE";
    change("5.2 s","100km/h","290 km/h","Top speed","2998 cc","Engine","335bhp to 500Nm","Power And Torque");
    price2.onclick=function(){
        let mynum=15100000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
    }
}
mod3.onclick=function(){
    header.style.backgroundImage="url('image-3.jpg')";
    modle.innerHTML="3 Series";
    price.innerHTML="PRICE"
    change("6.8 s","100km/h","250 km/h","Top speed","1995 cc","Engine","255bhp to 400Nm","Power And Torque");
    price3.onclick=function(){
        let mynum=5400000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod4.onclick=function(){
    header.style.backgroundImage="url('image-4.jpg')";
    modle.innerHTML="M4";
    price.innerHTML="PRICE";
    change("3.5 s","100km/h","290 km/h","Top speed","2993 cc","Engine","505bhp to 650Nm","Power And Torque");
    price4.onclick=function(){
        let mynum=15700000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}
mod5.onclick=function(){
    header.style.backgroundImage="url('image-5.jpg')";
    modle.innerHTML="E30";
    price.innerHTML="PRICE"
    change("7.1 s","100km/h","270 km/h","Top speed","2550 cc","Engine","235bhp to 700Nm","Power And Torque");
    price5.onclick=function(){
        let mynum=6000000;
        mynum=mynum.toLocaleString("hi-IN",{style:"currency",currency:"INR"})
        price.innerHTML=mynum;
        }
}