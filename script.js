var lien = document.querySelector("nav").querySelectorAll("a");

 for (var i = 0; i < lien.length; i++) {
    lien[i].addEventListener("click", fond);
 }

    function fond(event) {
        var menuSelection = event.target;
        var menuActive = document.querySelector(".menuactive");
        menuSelection.classList.add("menuactive");
        menuActive.classList.remove("menuactive");
    }

    /* vignette */ 
var un = document.querySelector(".un");
var deux = document.querySelector(".deux");
var trois = document.querySelector(".trois");
var quatre = document.querySelector(".quatre");
var liens = document.querySelector("nav").querySelectorAll("a");


liens[0].addEventListener("click", projets);
    function projets(){
        un.style.display = "block";
        deux.style.display = "block";
        trois.style.display = "block";
        quatre.style.display = "block";
    }

liens[1].addEventListener("click", creative);
    function creative(){
        un.style.display = "none";
        deux.style.display = "block";
        trois.style.display = "none";
        quatre.style.display = "none";
    }

liens[2].addEventListener("click", corporate);
    function corporate(){
        un.style.display = "none";
        deux.style.display = "none";
        trois.style.display = "block";
        quatre.style.display = "none";
    }

liens[3].addEventListener("click", responsive);
    function responsive(){
        un.style.display = "none";
        deux.style.display = "none";
        trois.style.display = "none";
        quatre.style.display = "block";
    }


for (var i = 0; i < liens.length; i++ ){
    liens[i].addEventListener("click", triage);
}

function triage(event){
    console.log(event.target.textContent);
    console.log(event);
}


    
    

        
