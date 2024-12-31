if (window.matchMedia("(max-width: 750px)").matches){
    var mainHead = document.getElementsByClassName("mainhead")[0];
    mainHead.style.width = '0px';
    showThreeBars=()=>{
        var mainLeft = document.getElementsByClassName("mainLeft")[0];
        mainLeft.style.width = '320px';
        mainLeft.style.transition = 'all 0.3s ease';
    }
    hideThreeBars=()=>{
        var mainLeft = document.getElementsByClassName("mainLeft")[0];
        mainLeft.style.width = '0px';
        mainLeft.style.transition = 'all 0.5s ease';
    }
}

const logout = () =>{
    location.href = "/index.html"
}

const search = () =>{
    location.href = "../../Searchpage/Searchpage/api.html";
}
const cart = () =>{
    if(localStorage.length <=  2){
      location.href = "../../CartPage1/CartPage/cartpage.html"
    }
    else{
      location.href = "../../Catpage2/catpage2.html"
    }
}
hover=()=>{
    var cimg = document.getElementsByTagName("img")[1];
    cimg.src = "../assets/images/girl/girl.png";
    var burger = document.getElementById("burger");
    burger.style.transition = "all .8s ease";
    burger.style.top = '72%'
    burger.style.left = '72%';
    var icecream = document.getElementById("icecream");
    icecream.style.transition = "all .8s ease";
    icecream.style.top = '10%';
    icecream.style.left = '70%';
    var pizza = document.getElementById("pizza");
    pizza.style.transition = "all .8s ease";
    pizza.style.top = '10%';
    pizza.style.left = '5%';
    var biriyani = document.getElementById("biriyani");
    biriyani.style.transition = "all .8s ease";
    biriyani.style.top = '72%';
    biriyani.style.left = '5%';
}

nonhover=()=>{
    var cimg = document.getElementsByTagName("img")[1];
    cimg.src = "../assets/images/girl/girl3.png";
    var burger = document.getElementById("burger");
    burger.style.transition = "all .8s ease";
    burger.style.top = '10%'
    burger.style.left = '5%';
    var icecream = document.getElementById("icecream");
    icecream.style.transition = "all .8s ease";
    icecream.style.top = '70%';
    icecream.style.left = '5%';
    var pizza = document.getElementById("pizza");
    pizza.style.transition = "all .8s ease";
    pizza.style.top = '72%';
    pizza.style.left = '72%';
    var biriyani = document.getElementById("biriyani");
    biriyani.style.transition = "all .8s ease";
    biriyani.style.top = '10%';
    biriyani.style.left = '72%';
}

var cir = document.getElementById("cir");
cir.addEventListener("mouseenter",hover);
cir.addEventListener("mouseleave",nonhover);


email=()=>{
    setTimeout(() => {
        location = 'mailto:saichanduadapa951@gmail.com';
    }, 500);
}

linkedIn=()=>{
    setTimeout(() => {
        location = 'https://www.linkedin.com/in/saichandu-adapa-143b41254/';
    }, 500);
}

insta=()=>{
    setTimeout(() => {
        location = 'https://www.instagram.com/saichandu_adapa/';
    }, 500);
}

