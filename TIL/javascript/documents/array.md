# Array
<br>

###  push
- 배열의 제일 마지막에 값을 넣는다.
```js
var arr = ["첫번째", "두번째", "세번째"];
arr.push("네번째");
console.log(arr); // ["첫번째", "두번째", "세번째", "네번째"]

arr.push("다섯번째", "여섯번째", "일곱번째");
console.log(arr); // ["첫번째", "두번째", "세번째", "네번째", "다섯번째", "여섯번째", "일곱번째"]

```

### pop
- 배열의 제일 마지막 값을 뺀다.
```js
var arr = ["첫번째", "두번째", "세번째"];
arr.pop();

console.log(arr); // ["첫번째", "두번째"]
```

### shift
- 배열의 제일 첫번째 값을 뺀다.
```js
var arr = ["첫번째", "두번째", "세번째"];
arr.shift();

console.log(arr); // ["두번째", "세번째"]
```

### unshift
- 배열의 제일 첫칸에 값을 넣는다.
```js
var arr = ["첫번째", "두번째", "세번째"];
arr.unshift("-1번째", "ZERO번째");

console.log(arr); // [ '-1번째', 'ZERO번째', '첫번째', '두번째', '세번째' ]
```

### splice
- arr.splice(시작 인덱스, 제거할 갯수, [삽입할 값], ...);
- 지정한 인덱스부터 값을 지운다. 지운 부분에 새로운 값을 넣을 수 있다.
- 본래 변수의 배열과 리턴값이 저장된 변수의 차이에 주의.
```js
var arr = [0, 1, 2, 3, 4, 5];
var result = arr.splice(1,4); // 1번째 인덱스에서부터 4개 제거

console.log(arr); // splice 함수로 제거 당한 배열. // [ 0, 5 ]
console.log(result); // splice 함수로 제거 당한 후 남은 배열 // [ 1, 2, 3, 4 ]

var arr2 = ["a", "b", "c", "d", "e"];
var result2 = arr2.splice(1,3,"ㄱ","ㄴ");

console.log(arr2); // splice 함수로 제거 당한 후 세번째 이후 매개변수를 삽입 // [ 'a', 'ㄱ', 'ㄴ', 'e' ]
console.log(result2); // splice 함수로 제거 당한 후 남은 배열 // [ 'b', 'c', 'd' ]
```

### split
- string.split(분할 기준, [분할 갯수]])
- 문자열을 배열로 분할한다.
```js
var str = "가나다라마바사아자차카";
var arr = str.split("", 5);

console.log(str2); // [ '가', '나', '다', '라', '마' ]
```

### join
- arr.join(배열을 이어줄 문자));
- 배열을 문자열로 합친다.
```js
var arr = [0, 1, 2, 3, 4, 5, "육"];
var str = arr.join("ㅋ");

console.log(str); // 0ㅋ1ㅋ2ㅋ3ㅋ4ㅋ5ㅋ육
```


