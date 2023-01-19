1. 함수 선언문

```ts
function 함수이름(매개변수1: 타입1, 매개변수2: 타입2[, ...]): 반환값 타입{
    함수 몸통
}
```

2. void타입
+ 값을 반환하지 않는 함수의 반환 타입: void => 함수 반환 타입으로만 사용 가능

```ts
fucntion printMe(name: string, age: number): void{
    console.log(`name: ${name}, age: ${age}`)
}
```

3. 함수 시그니처
+ 변수에 타입이 있듯이 함수에도 타입이 있다. => 함수의 타입
+ 표현식과 예제
```ts
//표현식: (매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입

let printMe: (string, number) => void 
    = function(name: string, age: number): void{}
```
```ts

const sayHello: (name: string, age: number) => void 
    = function(name: string, age: number): void {}


type sayHello = (name: string, age: number) => void


const hello: sayHello = (a, b) => {
    console.log(`이름: ${a}, 나이: ${b}`)
}
```
+ () => void : 매개변수도 반환값도 없는 함수 시그니처

4. 선택적 매개변수
+ 표현식과 예제
```ts
//표현식: function fn(arg1: string, arg?: number): void{}

function fn(arg1: string, arg?: number) {
    console.log(`arg: ${arg}`)
}

fn('hello', 1) //arg: 1
fn('hello') //arg: undefined

```

5. 콜백함수
+ 함수 표현식을 매개변수로 받을 수 있다. => 매개변수 형태로 동작하는 함수
+ 표현식과 예제
```ts
const f = (callback: () => void): void => callback()

//init.ts
export const init = (callback: ()=> void): void =>{
    console.log('default initialzation finished')
    callback()
    console.log('all initialization finished')
}

//callback.ts
import {init} from './init'
init(()=>console.log('custom initialization finished.'))
```

6. 클래스 메서드
+ function 함수와 this 메서드
: 타입스크립트의 function 키워드로 만든 함수는 Function이란 클래스의 인스턴스, 즉 함수는 객체이다. 객체지향언어에서 인스턴스는 this를 사용할 수 있다. => function 키워드로 만든 함수에 this 키워드를 사용할 수 있다. 
+ 반면에 화살표 함수에는 this키워드를 사용할 수 없다.
```ts
//A.ts
export class A{
    value: number = 1
    method: () => void = function(): void{
        console.log(`value: ${this.value}`)
    }
}
//testA.ts
import {A} from './A'
let a: A = new A
a.method //value: 1
```
```ts
//B.ts
export class B{
    constructor(public value: number = 1){}
    method(): void{
        console.log(`value: ${this.value}`)
    }
}
//testB.ts
import {B} from './B'
let b: B = new B(2)
b.method() //value: 2
```

7. 콜백에서의 this
```ts
interface UIElement {
    // 아래 함수의 `this: void` 코드는 함수에 `this` 타입을 선언할 필요가 없다는 의미입니다.
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
  
class Handler {
    info: string;
    onClick(this: void, e: Event) {
    // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
    console.log('clicked!');
    }
}

let handler = new Handler();
UIElement.addClickListener(handler.onClick);
```