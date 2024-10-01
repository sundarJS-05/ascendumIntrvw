

let player1
let player1Obj = "0"
let player2Obj = "X"
let player2

// let playGame = false


let arr1 = []
let arr2 = []

let playGame = (arr1, arr2)=>{

for (let turns = 0; turns < 5; turns++) {

    let play1 = arr1.push("0")

    let play2 = arr2.push("X")

    return `player1 array ${play1} || player2 array ${play2}`
   
}

}

console.log("arr - after pushing", playGame( [2,3], [1,4]))


let startBtn = document.querySelector('.start')

let pauseBtn = document.querySelector('.pause')

let resetBtn = document.querySelector('.reset')


let playedSoFar = document.querySelector('.playedsofar')

let score = document.querySelector('.score')


let turns = 0


startBtn.addEventListener('click', (event)=>{
    event.target
    playGame()
})


let playGame = ()=>{

    if(turns<=5){


    }

    else{
        return `turns over`
    }



}


let startGame = (canPlay)=>{

    if(canPlay){
        player1.playGame()
        
    }

}



let pauseGame = ()=>{

    pauseBtn.addEventListener( 'click', (event)=>{
        console.log(event.target.value)

    })


    
}

let resetGame = ()=>{

}


let gameBox = document.querySelector('.game')

gameBox.addEventListener('click', ()=>{
    

})

