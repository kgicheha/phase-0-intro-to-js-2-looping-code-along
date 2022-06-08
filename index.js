// Code your solutions in this file
function writeCards(arr, event) {
    let messageArr = []
    for(let i = 0; i < arr.length; i++ ) {
        messageArr.push( `Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return messageArr;
}

function countDown () {
    for (let i = 0; i <11; i++) {
        console.log(i);
    }
}