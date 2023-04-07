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
    let mynum=270000;
    mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
    price.innerHTML=mynum;
}
var price=document.getElementById("price");
var price1=document.getElementById("price");
var price2=document.getElementById("price");
var price3=document.getElementById("price");
var price4=document.getElementById("price");
var price5=document.getElementById("price");
mod1.onclick=function(){
    header.style.backgroundImage="url('image-2.jpg')";
    modle.innerHTML="AMG GT";
    price.innerHTML="PRICE"
    change("3.8 s","100km/h","320 km/h","Top speed","3982 cc","Engine","580bhp to 680Nm","Power And Torque");
    price1.onclick=function(){
        let mynum=270000;
        mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
        price.innerHTML=mynum;
    }
}
mod2.onclick=function(){
    header.style.backgroundImage="url('image-1.jpg')";
    modle.innerHTML="AMG E63";
    price.innerHTML="PRICE"
    change("4.0 s","100km/h","330 km/h","Top speed","3982 cc","Engine","603bhp to 850Nm","Power And Torque");
    price2.onclick=function(){
        let mynum=193000;
        mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
        price.innerHTML=mynum;
    }
}
mod3.onclick=function(){
    header.style.backgroundImage="url('image-3.jpg')";
    modle.innerHTML="AMG G63";
    price.innerHTML="PRICE"
    change("4.9 s","100km/h","290 km/h","Top speed","5461 cc","Engine","576bhp to 850Nm","Power And Torque");
    price3.onclick=function(){
        let mynum=330000;
        mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
        price.innerHTML=mynum;
    }
}
mod4.onclick=function(){
    header.style.backgroundImage="url('image-4.jpg')";
    modle.innerHTML="GLE";
    price.innerHTML="PRICE"
    change("4.8 s","100km/h","300 km/h","Top speed","2999 cc","Engine","435bhp to 650Nm","Power And Torque");
    price4.onclick=function(){
        let mynum=164000;
        mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
        price.innerHTML=mynum;
    }
}
mod5.onclick=function(){
    header.style.backgroundImage="url('image-5.jpg')";
    modle.innerHTML="Maybach";
    price.innerHTML="PRICE"
    change("6.1 s","100km/h","320 km/h","Top speed","5980 cc","Engine","605bhp to 900Nm","Power And Torque");
    price5.onclick=function(){
        let mynum=295000;
        mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})
        price.innerHTML=mynum;
    }
}