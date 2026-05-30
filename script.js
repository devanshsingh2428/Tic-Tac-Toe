let ticTac = document.querySelector(".ticTac");
let box = document.querySelectorAll(".box")
let h3 = document.querySelector("h3");
let current = 'X';
let h1 = document.querySelector("h1");
let count = 0;
let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function startgame(dets) {

    if (dets.target.textContent === '') {
        dets.target.textContent = current;
        count++
        winner();
        current = (current === 'X') ? 'O' : 'X';
        console.log(count)
    }
    h3.textContent = `${current}'s turn`;
    if(count===9 && h1.textContent==="Tic Tac Toe"){
        h1.textContent = "Match Draw"
        h1.style.color="Orange"
        console.log("Match Draw")
    }
}

ticTac.addEventListener("click", startgame)

function winner() {
    winningCondition.forEach((item) => {
        let index0 = item[0]
        let index1 = item[1]
        let index2 = item[2];
        // console.log(index0,index1,index2)
        let val0 = box[index0].innerText
        let val1 = box[index1].innerText
        let val2 = box[index2].innerText
        // console.log(index0, val0, index1, val1, index2, val2)
        if (val0 !== '' && val1 !== '' && val2 !== '') {
            if (val0 === val1 && val0 === val2) {
                h1.textContent = `Winner is ${val0}`
                // console.log("Winner is ", val0)
                h1.style.color = "Orange"
                ticTac.removeEventListener("click", startgame)
            }
        }
    })
}