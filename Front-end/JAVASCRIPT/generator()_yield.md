## 제너레이터 Generator 함수와 yield문

### 제너레이터 Generator
제너레이터는 함수이다. 하지만, 그냥 함수가 아니라 좀 특수한 함수이다.
중간에 원하는 부분에서 멈추었다가, 그 부분부터 다시 실행할 수 있는 능력을 가진 함수이다. 

### 제너레이터 함수 사용하기
<b>function* </b>키워드 사용

```js
function* generatorFunc1() {...}
const generator = function* () {...}
```

+ 제너레이터 함수는 화살표 함수를 사용할 수 없다.

### 제너레이터 함수 vs 일반 함수
1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도(yield)할 수 있다. </br>
 -> 제너레이터 함수는 <b>함수 실행의 제어권을 함수 호출자에게 양도</b>할 수 있다. 즉, 함수 호출자는 함수 실행을 실행을 일시 중지시키거나 다시 시작하게 하도록 할 수 있다.

2. 제너레이터 함수는 함수 호출자와 함수 상태를 주고 받을 수 있다</br>
-> 일반 함수는 호출되는 순간에 매개변수를 통해 함수 외부에서부터 값을 전달받고 실행된다. 이는 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경할 수 없다는 것을 뜻한다. 
<b>반면 제너레이터 함수는 함수 호출자와 양방향으로 함수의 상태를 주고 받을 수 있다. </b> 즉, 제너레이터 함수는 함수 호출자에게 자신의 상태를 전달할 수 있고, 함수 호출자로부터 추가적으로 상태를 전달받을 수도 있다.

### 