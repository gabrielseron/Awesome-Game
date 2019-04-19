            // déclarations de variables
            let knob = document.querySelectorAll(".boutton")
            const boss = document.querySelectorAll(".méchant")
            const bossScore = document.querySelector("#bossScore")
            const purifyScore = document.querySelector("#purifyScore")
            const purifyPoints = document.querySelector("#argent")
            const clicImprove = document.querySelectorAll(".clicImprove")
            const investissements = document.querySelectorAll(".moneyImprove")
            const pro = document.querySelectorAll(".luck")
            const hitZone = document.querySelectorAll(".bossPicture")
            const audio = new Audio('../sounds/punch.mp3')
            const flouz = new Audio('../sounds/flouz.wav')
            const sarkozy = new Audio('../sounds/Sarkozy.mp3')
            const menes = new Audio('../sounds/Menes.mp3')
            const melenchon = new Audio('../sounds/Melenchon.mp3')
            const mlp = new Audio('../sounds/Mlp.mp3')
            const macron = new Audio('../sounds/Macron.mp3')
            const cahuzac = new Audio('../sounds/Cahuzac.mp3')
            const ardisson = new Audio('../sounds/Ardisson.mp3')
            const hanouna = new Audio('../sounds/Hanouna.mp3')
            const soral = new Audio('../sounds/Soral.mp3')
            const bouttonAugmentez = document.querySelector(".amelioration")
            const bouttonInvestir = document.querySelector(".investissement")
            const bouttonEngager = document.querySelector(".profession")
            const attackCompteur = document.querySelector("#force")
            let bossHealth1 = 10
            let bossHealth2 = 500
            let bossHealth3 = 10000
            let bossHealth4 = 100000
            let bossHealth5 = 1000000
            let bossHealth6 = 10000000
            let bossHealth7 = 100000000
            let bossHealth8 = 5000000000
            let bossHealth9 = 100000000000
            let bossHealth10 = 1000000000000
            let purifyLevel = 0
            let attack = 1
            let compteur = 0


            // fonctions pour switcher de boss et baisser leurs vies

            function punch1() {
                if (bossHealth1 > 1) {
                    audio.play()
                    bossHealth1 = bossHealth1 - attack
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    bossScore.innerHTML = bossHealth1.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth1)
                } else if (bossHealth1 <= 1) {
                    console.log('you win')
                    purifyLevel += 1
                    bossHealth1 = 0
                    bossScore.innerHTML = bossHealth2.toLocaleString('fr')
                    compteur = compteur + attack
                    boss[0].classList.add("bossHide")
                    boss[1].classList.remove("bossHide")
                    purifyScore.innerHTML = purifyLevel
                    bossScore.innerHTML = bossHealth2.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth2)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth2)
                    menes.play()

                }
            }


            function punch2() {
                if (bossHealth2 > 1) {
                    audio.play()
                    bossHealth2 = bossHealth2 - attack
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    bossScore.innerHTML = bossHealth2.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth2)
                } else if (bossHealth2 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth3.toLocaleString('fr')
                    purifyLevel += 1
                    boss[1].classList.add("bossHide")
                    boss[2].classList.remove("bossHide")
                    bossScore.innerHTML = bossHealth3.toLocaleString('fr')
                    purifyScore.innerHTML = purifyLevel
                    bossHealth1 = 0
                    bossHealth2 = 0
                    document.querySelector('#bossScore').setAttribute('value', bossHealth3)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth3)
                    ardisson.play()

                }
            }


            function punch3() {

                boss[2].classList.remove('bossHide')

                if (bossHealth3 > 1) {
                    audio.play()
                    bossHealth3 = bossHealth3 - attack
                    bossScore.innerHTML = bossHealth3.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth3)
                } else if (bossHealth3 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth4.toLocaleString('fr')
                    boss[2].classList.add("bossHide")
                    boss[3].classList.remove('bossHide')
                    purifyLevel += 1
                    bossHealth3 = 0
                    purifyScore.innerHTML = purifyLevel
                    document.querySelector('#bossScore').setAttribute('value', bossHealth4)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth4)
                    soral.play()

                }
            }


            function punch4() {


                if (bossHealth4 > 1) {
                    audio.play()
                    bossHealth4 = bossHealth4 - attack
                    bossScore.innerHTML = bossHealth4.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth4)
                } else if (bossHealth4 <= 1) {
                    bossScore.innerHTML = bossHealth5.toLocaleString('fr')
                    boss[3].classList.add("bossHide")
                    boss[4].classList.remove('bossHide')
                    console.log('you win')
                    purifyLevel += 1
                    bossHealth4 = 0
                    purifyScore.innerHTML = purifyLevel
                    document.querySelector('#bossScore').setAttribute('value', bossHealth5)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth5)
                    hanouna.play()

                }
            }

            function punch5() {


                if (bossHealth5 > 1) {
                    audio.play()
                    bossHealth5 = bossHealth5 - attack
                    bossScore.innerHTML = bossHealth5.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth5)
                } else if (bossHealth5 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth6.toLocaleString('fr')
                    purifyLevel += 1
                    bossHealth5 = 0
                    boss[4].classList.add("bossHide")
                    boss[5].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    document.querySelector('#bossScore').setAttribute('value', bossHealth6)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth6)
                    sarkozy.play()

                }
            }

            function punch6() {


                if (bossHealth6 > 1) {
                    audio.play()
                    bossHealth6 = bossHealth6 - attack
                    bossScore.innerHTML = bossHealth6.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth6)
                } else if (bossHealth6 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth7.toLocaleString('fr')
                    purifyLevel += 1
                    bossHealth6 = 0
                    boss[5].classList.add("bossHide")
                    boss[6].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    document.querySelector('#bossScore').setAttribute('value', bossHealth7)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth7)
                    cahuzac.play()

                }
            }

            function punch7() {


                if (bossHealth7 > 1) {
                    audio.play()
                    bossHealth7 = bossHealth7 - attack
                    bossScore.innerHTML = bossHealth7.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth7)
                } else if (bossHealth7 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth8.toLocaleString('fr')
                    purifyLevel += 1
                    bossHealth7 = 0
                    boss[6].classList.add("bossHide")
                    boss[7].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    document.querySelector('#bossScore').setAttribute('value', bossHealth8)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth8)
                    macron.play()

                }
            }

            function punch8() {


                if (bossHealth8 > 1) {
                    audio.play()
                    bossHealth8 = bossHealth8 - attack
                    bossScore.innerHTML = bossHealth8.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth8)
                } else if (bossHealth8 <= 1) {
                    console.log('you win')
                    purifyLevel += 1
                    bossHealth9 = bossHealth9 - attack
                    bossHealth8 = 0
                    boss[7].classList.add("bossHide")
                    boss[8].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    bossHealth3 = 0
                    document.querySelector('#bossScore').setAttribute('value', bossHealth9)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth9)
                    melenchon.play()

                }
            }

            function punch9() {


                if (bossHealth9 > 1) {
                    audio.play()
                    bossHealth9 = bossHealth9 - attack
                    bossScore.innerHTML = bossHealth9.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth9)
                } else if (bossHealth9 <= 1) {
                    console.log('you win')
                    bossScore.innerHTML = bossHealth10.toLocaleString('fr')
                    purifyLevel += 1
                    bossHealth9 = 0
                    boss[8].classList.add("bossHide")
                    boss[9].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    bossHealth3 = 0
                    document.querySelector('#bossScore').setAttribute('value', bossHealth10)
                    document.querySelector('#bossScore').setAttribute('max', bossHealth10)
                    mlp.play()

                }
            }

            function punch10() {


                if (bossHealth10 > 1) {
                    audio.play()
                    bossHealth10 = bossHealth10 - attack
                    bossScore.innerHTML = bossHealth10.toLocaleString('fr')
                    compteur = compteur + attack
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    document.querySelector('#bossScore').setAttribute('value', bossHealth10)
                } else if (bossHealth10< 1) {
                    console.log('you win')
                    purifyLevel += 1
                    bossHealth10 = 0
                    boss[9].classList.add("bossHide")
                    boss[10].classList.remove('bossHide')
                    purifyScore.innerHTML = purifyLevel
                    finalDiv.classList.remove("showHide")
                    bossHealth3 = 0
                }
            }






            // tous les déclencheurs

            boss[0].addEventListener("click", punch1)
            boss[1].addEventListener("click", punch2)
            boss[2].addEventListener("click", punch3)
            boss[3].addEventListener("click", punch4)
            boss[4].addEventListener("click", punch5)
            boss[5].addEventListener("click", punch6)
            boss[6].addEventListener("click", punch7)
            boss[7].addEventListener("click", punch8)
            boss[8].addEventListener("click", punch9)
            boss[9].addEventListener("click", punch10)

            // _____________________________________________________________________________________________________


            // améliorer votre force de frappe au clic

            // le blog pour 50$

            knob[0].addEventListener("click", function () {
                if (compteur > 19) {
                    flouz.play()
                    compteur = compteur - 20
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("blog")
                    console.log(compteur)
                    attack = attack + 1

                }
            })


            // les haters pour 100$

            knob[1].addEventListener("click", function () {
                if (compteur > 99) {
                    flouz.play()
                    compteur = compteur +400
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de haters")
                    for (i = 0; i < investissements.length; i++) {
                        investissements[i].classList.add(".showHide")

                    }
                    knob[1].style.display = "none";
                    acompteur=compteur+500

                }
            })


            // imprimerie de lettres 100$

            knob[2].addEventListener("click", function () {
                if (compteur > 99) {
                    flouz.play()
                    compteur = compteur - 100
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de lettres menaçantes")
                    console.log(compteur)
                    attack = attack + 3

                }
            })





            // tribunal pour 5 000$

            knob[3].addEventListener("click", function () {
                if (compteur > 4999) {
                    flouz.play()
                    compteur = compteur - 5000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("le csa n'est pas content")
                    console.log(compteur)
                    attack = attack + 170

                }
            })

            //  fake news 20 000$

            knob[4].addEventListener("click", function () {
                if (compteur > 19999) {
                    flouz.play()
                    compteur = compteur - 20000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("fake newssssss")
                    console.log(compteur)
                    attack = attack + 700
                }
            })


            // suisse compte pour 100 000$

            knob[5].addEventListener("click", function () {
                if (compteur > 99999) {
                    flouz.play()
                    compteur = compteur - 100000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("fake newssssss")
                    console.log(compteur)
                    attack = attack + 3600

                }
            })


            // attaque DDos 1 000 000$

            knob[6].addEventListener("click", function () {
                if (compteur > 999999) {
                    flouz.play()
                    compteur = compteur - 1000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("fake newssssss")
                    console.log(compteur)
                    attack = attack + 40000

                }
            })



            // kidnapping 50 000 000$

            knob[7].addEventListener("click", function () {
                if (compteur > 49999999) {
                    flouz.play()
                    compteur = compteur - 50000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("fake newssssss")
                    console.log(compteur)
                    attack = attack + 2200000

                }
            })




            //tueur pour 10 000 000 000$

            knob[8].addEventListener("click", function () {
                if (compteur > 9999999999) {
                    flouz.play()
                    compteur = compteur - 10000000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    attack = attack + 450000000

                }
            })



            // ----------------------------------------------------------------------------------------

            // les bonus et gain à acheter pour farmer



            // la petite vieille finie avec quelques points de suture :,( pour 20$

            knob[9].addEventListener("click", function () {
                if (compteur > 19) {
                    flouz.play()
                    compteur = compteur - 20
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    setInterval(function () {
                        compteur = compteur + 1
                    }, 1000)
                }
            })

            // revente de timbres pour 100$

            knob[10].addEventListener("click", function () {
                if (compteur > 99) {
                    flouz.play()
                    compteur = compteur - 100
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    setInterval(function () {
                        compteur = compteur + 5
                    }, 1000)
                }
            })




            // jackpot 1 000$

            knob[11].addEventListener("click", function () {
                if (compteur > 999) {
                    flouz.play()
                    compteur = compteur - 1000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    knob[11].style.display = "none";
                    for (i = 0; i < pro.length; i++) {
                        pro[i].classList.add("showHide")
                    }
                    setInterval(function () {
                        compteur = compteur + 60
                    }, 1000)
                }
            })


            // investire dans la pierre 10 000$

            knob[12].addEventListener("click", function () {
                if (compteur > 9999) {
                    flouz.play()
                    compteur = compteur - 10000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de haters enragés")
                    setInterval(function () {
                        compteur = compteur + 600
                    }, 1000)
                }
            })

            // braquage de bijoux 100 000$

            knob[13].addEventListener("click", function () {
                if (compteur > 99999) {
                    flouz.play()
                    compteur = compteur - 100000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de haters enragés")
                    setInterval(function () {
                        compteur = compteur + 6500
                    }, 1000)
                }
            })


            // yacht pour 1 000 000$

            knob[14].addEventListener("click", function () {
                if (compteur > 999999) {
                    flouz.play()
                    compteur = compteur - 1000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de haters enragés")
                    setInterval(function () {
                        compteur = compteur + 70000
                    }, 1000)
                }
            })


            // îles caïmans pour 10 000 000$

            knob[15].addEventListener("click", function () {
                if (compteur > 9999999) {
                    flouz.play()
                    compteur = compteur - 10000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("achat de haters enragés")
                    setInterval(function () {
                        compteur = compteur + 1000000
                    }, 1000)
                }
            })



            //appeler poutine 1 000 000 000$

            knob[16].addEventListener("click", function () {
                if (compteur > 999999999) {
                    flouz.play()
                    compteur = compteur - 1000000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("poutine")
                    setInterval(function () {
                        compteur = compteur + 200000000



                    }, 1000)

                }
            })



            //             // _____________________________________________________________________________________________
            // les professionnels


            //enquêteur 1 000 000 000 $

            knob[17].addEventListener("click", function () {
                if (compteur > 999999999) {
                    flouz.play()
                    compteur = compteur - 1000000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("poutine")
                    attack = attack * 1.5
                }
            })



            //hacker 100 000 000 000 $

            knob[18].addEventListener("click", function () {
                if (compteur > 99999999999) {
                    flouz.play()
                    compteur = compteur - 100000000000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("poutine")
                    attack = attack * 5
                }
            })


            //paparazzi 10 000$

            knob[19].addEventListener("click", function () {
                if (compteur > 9999) {
                    flouz.play()
                    compteur = compteur - 10000
                    purifyPoints.innerHTML = compteur.toLocaleString('fr')
                    console.log("poutine")
                    setInterval(function () {
                        compteur = compteur + 2500



                    }, 1000)

                }
            })




            // _____________________________________________________________________________________________

            // code de triche argent +10 000 000

            function cheat() {
                compteur = compteur + 10000000
                console.log("tu triche")

            }
            // code de triche argent +100 000 000 000 000


            function cheat1() {
                compteur = compteur + 100000000000000
                console.log("tu triche")

            }

            // fonction pour load l'argent chaque seconde sur le compteur dédié

            setInterval(function () {
                purifyPoints.innerHTML = compteur.toLocaleString('fr')
                document.title= compteur.toLocaleString('fr')
            }, 700)
            setInterval(function () {
                attackCompteur.innerHTML = attack.toLocaleString('fr')
            }, 200)




            // volets déroulants pur js une fois les compétences débloqués

            bouttonAugmentez.addEventListener("click", function () {
                for (i = 0; i < clicImprove.length; i++) {
                    clicImprove[i].classList.toggle("showHide")
                }
            })

            bouttonInvestir.addEventListener("click", function () {
                if (window.getComputedStyle(knob[1]).display === "none") {
                    for (i = 0; i < investissements.length; i++) {
                        investissements[i].classList.toggle("showHide")
                    }

                }
            })

            bouttonEngager.addEventListener("click", function () {
                if (window.getComputedStyle(knob[11]).display === "none") {
                    for (i = 0; i < pro.length; i++) {
                        pro[i].classList.toggle("showHide")
                    }

                }
            })
