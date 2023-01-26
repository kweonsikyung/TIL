//1. 기본

function add1(num1: number, num2: number) : void{
    //return num1 + num2
    console.log(num1+ num2);
}
add1(1,2);

//2. optional function
function hello1(name?: string): string{
    return `hello, ${ name || 'world'}`;
}

hello1('sikyung');
hello1();

//js에서 매개변수 default 값 주기
function hello2(name='world'){
    return `hello, ${ name }`;
}

//optional의 위치 //OK
function loc1(name: string, age?: number): string{
    if (age != undefined){
        return `hello, My name is ${name}.`;
    } else{
        return `hello, ${name}. I am ${age}.`;
    }
}

console.log(loc1('sikyung'));
console.log(loc1('sikyung', 22));

//optional의 위치 //NO
/*
function loc2( age?: number, name: string): string{
    if (age == undefined){
        return `hello, My name is ${name}.`;
    } else{
        return `hello, ${name}. I am ${age}.`;
    }
}

console.log(loc2('sikyung'));
console.log(loc2(22, 'sikyung'));
*/
function loc2( age: number | undefined, name: string): string{
    if (age == undefined){
        return `hello, My name is ${name}.`;
    } else{
        return `hello, ${name}. I am ${age}.`;
    }
}

console.log(loc2(undefined, 'sikyung'));
console.log(loc2(22, 'sikyung'));


//3. rest paramiters: 전달받은 매개변수를 배열로 반환
function add2(...nums: number[]){
    return nums.reduce((result, num)=> result + num, 0);
}
console.log(add2(1,2,3));
console.log(add2(1,2,3,4,5,6,7,8,9,10));

//4. this 
//-> this 타입도 정의해줘야 함 
// 매개변수 맨 앞에

interface User{
    name: string;
}
const Bob: User = { name: "Bob"};

function Info(this: User, age: number, gender: 'm'|'f') {
    console.log(this.name, age, gender)
}

//this로 Bob 객체를 강제함
const a = Info.bind(Bob);
a(30, 'm');


// 5. 함수 오버로드: 동일한 함수지만 매개변수의 타입/갯수에 따라 다르게 동작하게 하려면
interface Info{
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): Info;
function join(name:string, age: number | string): Info | string {
    if (typeof age === "number"){
        return { name, age };
    } else{
        return "나이는 숫자로 입력해주세요";
    }
}

const Mike: Info = join("Mike", 20);
const Anna: String = join("Anna", "25");