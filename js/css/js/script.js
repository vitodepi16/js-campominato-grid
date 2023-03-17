/*`
<div class="square"> 1 </div>
easy = 100 quadrati
medium 81 quadrati
hard 49 quadrati

    width: calc(100% / 10);
    height: calc(100% / 10) ;
`*/

const formLevel = document.getElementById('formLevel');
formLevel.addEventListener('submit', play);



//  FUNZIONE PER CREARE CELLE


function drawSquare(index, numSquare ){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquare}) `
    square.style.height = square.style.width;
    square.innerHTML = index;
    return square;

}


//  FUNZIONE PER GENERARE L'ARRAY DELLE BOMBE

function generateBombs(numBomb, numSquare){
    const bombs = [];
    while (bombs.length < numBomb){
       const bomb =  getRndNumber(1, numSquare);
       if (bombs.indexOf(bomb) === -1){
        bombs.push(bomb);
       }
    } 
    return bombs;

}




//  FUNZIONE PER FAR PARTIRE IL GIOCO
function play(e){
    e.preventDefault();
    const NUM_BOMBS = 16;
    const playground = document.getElementById('playground');
    playground.innerHTML = ' ';
    const numBombs = 16;
    //  selezione livello 
    const level = document.getElementById('level').value;
 
    let squareNmr;
   
    switch(level){
        case 'easy':
            squareNmr = 100;
            break
            case 'medium':
            squareNmr = 81;
            break
            case 'hard':
                squareNmr = 49;
                break;
        
    };
    
    // celle per lato


    let squareRow =  Math.sqrt(squareNmr);

     const bombs = generateBombs(NUM_BOMBS , squareNmr);
     console.log(bombs);


    // num celle creo la cella con funzione drawSquare


    for(let i = 1; i <= squareNmr; i++ ){
        const  square = drawSquare(i,squareRow );
        const contentSquare = parseInt(square.innerText);
  
        square.addEventListener('click', function(){
            
            if (bombs.includes(contentSquare)){
                square.classList.add('unsafe');
                
            } else {
                square.classList.add('safe');
            }
            console.log(contentSquare);

        })
        playground.appendChild(square);
    }


}