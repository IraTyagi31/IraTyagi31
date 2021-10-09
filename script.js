function over(x){
    x.style.backgroundColor="transparent";
}
function myhome(){
    document.getElementById("home").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("edu").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("cont").style.display="none";
    document.getElementById("1").className="active";
    document.getElementById("2").className="inactive";
    document.getElementById("3").className="inactive";
    document.getElementById("4").className="inactive";
    document.getElementById("5").className="inactive";
}

function myabout(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="flex";
    document.getElementById("edu").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("cont").style.display="none";
    document.getElementById("1").className="inactive";
    document.getElementById("2").className="active";
    document.getElementById("3").className="inactive";
    document.getElementById("4").className="inactive";
    document.getElementById("5").className="inactive";
}

function myedu(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("edu").style.display="block";
    document.getElementById("skills").style.display="none";
    document.getElementById("cont").style.display="none";
    document.getElementById("1").className="inactive";
    document.getElementById("2").className="inactive";
    document.getElementById("3").className="active";
    document.getElementById("4").className="inactive";
    document.getElementById("5").className="inactive";
}

function myskills(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("edu").style.display="none";
    document.getElementById("skills").style.display="flex";
    document.getElementById("cont").style.display="none";
    document.getElementById("1").className="inactive";
    document.getElementById("2").className="inactive";
    document.getElementById("3").className="inactive";
    document.getElementById("4").className="active";
    document.getElementById("5").className="inactive";
}

function mycontact(){
    document.getElementById("home").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("edu").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("cont").style.display="block";
    document.getElementById("1").className="inactive";
    document.getElementById("2").className="inactive";
    document.getElementById("3").className="inactive";
    document.getElementById("4").className="inactive";
    document.getElementById("5").className="active";
}



function clock1(){
    var re=1000;
    time=setTimeout('clock2()',re)
}

function clock2(){
    var c=new Date()
    document.getElementById("time").innerHTML=c;
    clock1();
}