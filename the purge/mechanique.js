            // déclarations de variables


let boss = document.querySelectorAll(".méchant")
let bossScore = document.querySelector("#bossScore")
let purifyScore = document.querySelector("#purifyScore")
let bossHealth1 = 10
let bossHealth2 = 500
let bossHealth3 = 1000
let bossHealth4 = 10000000  
let bossHealth5 = 100000000  
let purifyLevel = 0
let attack=1
let compteur = 0
let bonus = 0

       
            // fonctions pour switcher de boss

function punch1() {
    if(bossHealth1>0){
     bossHealth1=bossHealth1-attack
     bossScore.innerHTML=bossHealth1
    }
     else if(bossHealth1<1){
        console.log('you win')
        purifyLevel+=1
        purifyScore.innerHTML=purifyLevel
        attack=attack+10
        boss[0].classList.add("bossHide")
        boss[1].classList.remove("bossHide")
        
     }
 }


 function punch2() {
     boss[1].classList.remove("bossHide")
    if(bossHealth2>0){
     bossHealth2=bossHealth2-attack
     bossScore.innerHTML=bossHealth2
    }
     else if(bossHealth2<1){
        console.log('you win')
        purifyLevel+=1
        purifyScore.innerHTML=purifyLevel
        attack=attack+50
        boss[1].classList.add("bossHide")
        boss[2].classList.remove("bossHide")
   

     }
 }


 function punch3() {
    
    boss[2].classList.remove('bossHide')

    if(bossHealth3>0){
     bossHealth3=bossHealth3-attack
     bossScore.innerHTML=bossHealth3
    }
     else if(bossHealth3<1){
        console.log('you win')
        purifyLevel+=1
        purifyScore.innerHTML=purifyLevel
        attack=attack+500
        boss[2].classList.add("bossHide")
   

     }
 }



            // tous les déclencheurs 




         boss[0].addEventListener("click",punch1)
         boss[1].addEventListener("click",punch2)
         boss[2].addEventListener("click",punch3)
         boss[2].addEventListener("click",gain)
         



            // les bonus et gain à acheter pour farmer

// les lettres de menace

// haters sur les réseaux

// appel anonyme au CSA

// découverte d'un compte en suisse



