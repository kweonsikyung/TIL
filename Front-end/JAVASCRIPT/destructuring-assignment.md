## 구조 분해 할당 (destructuring assignment)
구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

```js
const { name, age, school } = obj; //객체 구조 분해할당
const [ child1, child2, child3 ] = arr; //배열 구조 분해 할당
```

### 1. 배열 구조 분해
```js
let [a, b] = [1, 2];
console.log(a); //1
console.log(b); //2

let users = [ 'cookie', 'kitkat', 'icecream' ];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);
```
### split()과 같이쓰면?
```js
let date = "2022-06-30";
let [y, m, d] = date.split("-");
console.log(y); // 2022
console.log(m); // 06
console.log(d); // 30
```

### 할당하고자 하는 값이 부족할 경우에는?
```js
let [a, b, c] = [1, 2];
console.log(a);
console.log(b);
console.log(c); //undefinded
```

### 기본 값을 미리 할당해주면 됨
```js
let [user1, , user3] = ['cookie', 'kitkat', 'icecream']
console.log(user1);
console.log(user3);
```

### 구조분해할당을 사용하지 않은 경우에 두 변수의 값을 바꾸기 위해서는 임시변수를 하나 더 만들어 사용했어야 했다.
```js 
let a = 1;
let b = 2;
let tmp = 0;
tmp = b;
b = a;
a = tmp;

console.log(a); //2
console.log(b); //1
```
```js
[a, b] = [b, a];
```

### 2. 객체 구조 분해
```js
let user = { name : "cookie", age:23};
let { name, age } = user;

console.log(name);
console.log(age);
```