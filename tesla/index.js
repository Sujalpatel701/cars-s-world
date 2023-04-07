var header=document.getElementById("header");
var mod1=document.getElementById("mod1");
var mod2=document.getElementById("mod2");
var mod3=document.getElementById("mod3");
var mod4=document.getElementById("mod4");
var mod5=document.getElementById("mod5");
var modle=document.getElementById("models");

function change(a,b,c,d,e,f,i,j){
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
    h5.innerHTML=i;
    p5.innerHTML=j;
}
function myfunction(){
    let mynum=69400;
    mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
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
    modle.innerHTML="MODEL S";
    price.innerHTML="PRICE"
    change("2.3 s","60mps","220 mph","Top speed","360 mi","Max range","14 Hours","Charging Time(Wallbox)");
    price1.onclick=function(){
        let mynum=69400;
        mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
        price.innerHTML=mynum;
    }
}
mod2.onclick=function(){
    header.style.backgroundImage="url('image-2.png')";
    modle.innerHTML="MODEL 3";
    price.innerHTML="PRICE"
    change("3.5 s","60mps","180 mph","Top speed","410 mi","Max range","08 Hours","Charging Time(Wallbox)");
    price2.onclick=function(){
        let mynum=38400;
        mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
        price.innerHTML=mynum;
    }
}
mod3.onclick=function(){
    header.style.backgroundImage="url('image-3.png')";
    modle.innerHTML="MODEL Y";
    price.innerHTML="PRICE"
    change("3.2 s","60mps","190 mph","Top speed","380 mi","Max range","09 Hours","Charging Time(Wallbox)");
    price3.onclick=function(){
        let mynum=56400;
        mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
        price.innerHTML=mynum;
        }
}
mod4.onclick=function(){
    header.style.backgroundImage="url('image-4.jpg')";
    modle.innerHTML="Roadster";
    price.innerHTML="PRICE"
    change("1.9 s","60mps","250 mph","Top speed","340 mi","Max range","17 Hours","Charging Time(Wallbox)");
    price4.onclick=function(){
        let mynum=200400;
        mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
        price.innerHTML=mynum;
        }
}
mod5.onclick=function(){
    header.style.backgroundImage="url('image-5.jpg')";
    modle.innerHTML="CyberTruck";
    price.innerHTML="PRICE"
    change("3.3 s","60mps","200 mph","Top speed","375 mi","Max range","12 Hours","Charging Time(Wallbox)");
    price5.onclick=function(){
        let mynum=150400;
        mynum=mynum.toLocaleString("en-us",{style:"currency",currency:"USD"})
        price.innerHTML=mynum;
        }
}