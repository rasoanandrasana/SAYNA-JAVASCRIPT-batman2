
let questions = [
    {
        "question": "Quel est l’autre nom de l’Homme-Mystère ?",
        "response": [
            {
                "text": "Le Saphinx",
                "isGood": true
            },
            {
                "text": "Le Saphir",
                "isGood": true
            },
            {
                "text": "Le Joker",
                "isGood": true
            }
        ]
    },
    {
        "question": "Quelle est l’ancienne profession de Harley Quinn ?",
        "response": [
            {
                "text": "Infimière",
                "isGood": false
            },
            {
                "text": "Psychiatre",
                "isGood": true
            },
            {
                "text": "Dentiste",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est l’objet fétiche de Double Face ?",
        "response": [
            {
                "text": "Une pièce",
                "isGood": true
            },
            {
                "text": "Un livre",
                "isGood": false
            },
            {
                "text": "Un couteau",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quelle ville Batman défend-il ?",
        "response": [
            {
                "text": "Gotham City",
                "isGood": true
            },
            {
                "text": "Starling City",
                "isGood": false
            },
            {
                "text": "Tananarive",
                "isGood": false
            }
        ]
    },
    {
        "question": "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        "response": [
            {
                "text": "Georges Clooney",
                "isGood": false
            },
            {
                "text": "Val Kilmer",
                "isGood": false
            },
            {
                "text": "Mickael Keaton",
                "isGood": false
            }
        ]
    },
    {
        "question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
        "response": [
            {
                "text": "Matina et Adam",
                "isGood": false
            },
            {
                "text": "Elaine et Georges",
                "isGood": true
            },
            {
                "text": "Martha et James",
                "isGood": false
            }
        ]
    },
    {
        "question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
        "response": [
            {
                "text": "Le Pingouin",
                "isGood": false
            },
            {
                "text": "L'Homme mystère",
                "isGood": true
            },
            {
                "text": "Le Geek",
                "isGood": false
            }
        ]
    },
    {
        "question": " Qui interprète le Joker en 2008 ?",
        "response": [
            {
                "text": "Heath Legder",
                "isGood": false
            },
            {
                "text": "Haeth Ledger",
                "isGood": false
            },
            {
                "text": "Heath Ledger",
                "isGood": true
            }
        ]
    },
    {
        "question": "En quelle année Robin fait il sa première apparition ?",
        "response": [
            {
                "text": "1940",
                "isGood": true
            },
            {
                "text": "1936",
                "isGood": false
            },
            {
                "text": "1941",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        "response": [
            {
                "text": "Oracle Huntress",
                "isGood": true
            },
            {
                "text": "Black Canary",
                "isGood": false
            },
            {
                "text": "L'Epouvantail",
                "isGood": false
            }
        ]
    },
    {
        "question": "Batman c’est aussi le nom d’une ville en...",
        "response": [
            {
                "text": "Islande",
                "isGood": false
            },
            {
                "text": "Turquie",
                "isGood": true
            },
            {
                "text": "Allemagne",
                "isGood": false
            }
        ]
    },
    {
        "question": "Qui a realisé Batman en 1966 ?",
        "response": [
            {
                "text": "Stanley Kubrick",
                "isGood": false
            },
            {
                "text": "Andy Warhol",
                "isGood": false
            },
            {
                "text": "Leslie Martinson",
                "isGood": true
            }
        ]
    },
    {
        "question": "Qui interprète le Joker en 2008 ?\n",
        "response": [
            {
                "text": "Heath Legder\n",
                "isGood": false
            },
            {
                "text": "Haeth Ledger\n",
                "isGood": false
            },
            {
                "text": "Heath Ledger\n",
                "isGood": true
            }
        ]
    }
];

let sujet = document.querySelector("#sujet");
let demarerLeQuiz = document.querySelector("#btn-change");
let box = document.querySelectorAll(".box");
let rps = document.querySelectorAll(".reponse");
let image = document.querySelector("#perso1");
let questionSuivant = document.querySelector(".btn-change1");
let debutCompteur = document.querySelector(".debut-compteur");
let finCompteur = document.querySelector(".fin-compteur");
let case1 = document.querySelector("#case1");
finCompteur.innerText = questions.length;
let i=0;
let r=0;
let score;
let valiny = true;





// fonction de la question
function changeValue(){
    if (i<=questions.length){
        let element = questions[i].question;
        sujet.innerText=element;

        if (r<=questions[i].response.length){
            let valeurRps0 = questions[i].response[0].text;
            let valeurRps1 = questions[i].response[1].text;
            let valeurRps2 = questions[i].response[2].text;
            rps[0].innerText = valeurRps0;
            rps[1].innerText = valeurRps1;
            rps[2].innerText = valeurRps2;
        };
        let db=1;
        db = 1+i;
        debutCompteur.innerText = db;

        // box[i].addEventListener("change", function (){
        //     if (box[i].checked){
        //         valiny = true;
        //         alert("cochez");
        //
        //         if (questions[i].response[r].isGood){
        //             score = score + 1;
        //         }
        //     }
        //     else
        //         alert("decochez");
        //     valiny =  false;
        // });




        if (i===0){

        }

        else if (i===1){
            image.src='../Images/game/Batgame_4.png';
        }        else if (i===2){
            image.src='../Images/game/Batgame_5.png';
        }        else if (i===3){
            image.src='../Images/game/Batgame_6.png';
        }        else if (i===4){
            image.src='../Images/game/Batgame_7.png';
        }        else if (i===5){
            image.src='../Images/game/Batgame_8.png';
        }        else if (i===6){
            image.src='../Images/game/Batgame_10.png';
        }        else if (i===7){
            image.src='../Images/game/Batgame_11.png';
        }        else if (i===8){
            image.src='../Images/game/Batgame_12.png';
        }        else if (i===9){
            image.src='../Images/game/Batgame_14.png';
        }
        else if (i===10){
            image.src='../Images/game/Batgame_17.png';
        }
        else if (i===11){
            image.src='../Images/game/Batgame_18.png';
        }
        else if (i===12){
            image.src='../Images/game/Batgame_19.png';
        }
        else if (i===13){
            image.src='../Images/game/Batgame_20.png';
        }
        else if (i===14){
            image.src='../Images/game/Batgame_21.png';
        }

        i++;
    }
    else
        alert("vous avez une erreur");
};




// if (questions[i].response[r].isGood){
//
// }


demarerLeQuiz.addEventListener("click", changeValue);
questionSuivant.addEventListener("click", changeValue);






