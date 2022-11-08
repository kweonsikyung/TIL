## array에서 사용하는 메소드 : map, array, filter
보통 배열이 주어졌을 때 각 원소를 순회하며 방문할 때는 for문을 사용한다
그러나 map, reduce, filter 와 같은 메소드를 사용하면 배열을 이용한 작업을 간단히 할 수 있다. 

### 1. map
<b>map은 인풋으로 배열을 받고 아웃풋으로 배열을 내놓는다.</b>

```js
const numbers1 = [1,2,3,4,5];
const numbers2 = numbers1.map(val => val*2);
console.log(numbers2)
```

+) map의 full version </br>
사실 map 메소드의 매개변수는 value 하나만 들어가는게 아니라 value, index, array가 들어간다. </br>
    -value : 배열의 원소 </br>
    -index : 해당 원소의 인덱스 </br>
    -array : 배열
```js
const numbers3 = [1,2,3,4,5];
const numbers4 = numbers3.map((value, index, array) =>{
    console.log(value, index, array);
    return value*2;
})
console.log(numbers4);
```

### 2. reduce
<b>reduce는 인풋으로 배열을 받고 아웃풋으로 배열이 아닌 하나의 값을 내놓는다.</b>
주로 원소의 덧셈을 할 때 많이 사용한다.

```js
const numbers1 = [1,2,3,4,5];
const sumArray = numbers1.reduce((acc, current) => {
    console.log(acc, current, acc+current);
    return acc+current; //누적값 acc의 값이 됨
});
console.log(sumArray)
```
결과값을 살펴보면,</br>
1 2 3 -> 첫번째 acc값은 배열의 첫번째 값에 해당, current값은 두번째 원소부터 차례로 방문, acc+current </br>
3 3 6 -> 누적값이 acc, 세번째 원소 방문, acc+current </br>
6 4 10 </br>
10 5 15 </br>
+) acc의 초기값 설정하기 ex.1000
```js
const numbers1 = [1,2,3,4,5];
const sumArray = numbers1.reduce((acc, current) => {
    console.log(acc, current, acc+current);
    return acc+current; 
},1000); //reduce의 두번째 인자
```

### 3. filter 
<b>map은 인풋으로 배열을 받고 아웃풋으로 배열을 내놓는다.</b> filter메소드는 이름 그대로 배열을 받아서 특정 조건으로 각 원소를 검사한 후 조건에 맞는 원소들만 출력해준다.

```js
const numberArray = ['one', 'two', 'three', 'four', 'five']
const numberFilter = numberArray.filter(val => val.length > 3);
console.log(numberFilter)
```

+) filter의 full version </br>
사실 filter 메소드의 매개변수는 value 하나만 들어가는게 아니라 value, index, array가 들어간다. </br> 의미하는 바는 map과 동일하다
```js
const numberArray = ['one', 'two', 'three', 'four', 'five']
const numberFilter = numberArray.filter((val, idx, array) => {
    console.log(val, idx, array);
    return val.length > 3;
});
console.log(numberFilter)
```
