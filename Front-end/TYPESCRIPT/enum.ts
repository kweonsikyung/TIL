enum Belt {
    White="흰띠",
    Blue="파란띠",
    Brown="갈색띠",
    Black="검은띠"
}

let myBelt = Belt.White;
let nextBelt = Belt.Blue;

console.log(myBelt);
console.log(nextBelt);

//비교해보자 - enum
enum Answer{
    YES = 'Y',
    NO = 'N',
}

function Question(answer: Answer){
    if (answer == Answer.YES){
        console.log('you are correct!');
    }
    if (answer == Answer.NO){
        console.log('you are failed');
    }
}

Question(Answer.YES);
Question(Answer.NO);
