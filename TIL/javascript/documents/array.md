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
- arr.splice(**시작 인덱스**, **제거할 갯수**, [삽입할 값], ...);
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
- string.split(**분할 기준**, [분할 갯수]])
- 문자열을 배열로 분할한다.
```js
var str = "가나다라마바사아자차카";
var arr = str.split("", 5);

console.log(str2); // [ '가', '나', '다', '라', '마' ]
```

### join
- arr.join(**배열을 이어줄 문자**));
- 배열을 문자열로 합친다.
```js
var arr = [0, 1, 2, 3, 4, 5, "육"];
var str = arr.join("ㅋ");

console.log(str); // 0ㅋ1ㅋ2ㅋ3ㅋ4ㅋ5ㅋ육
```

### fill
- arr.fill([채울 문자], [시작 인덱스], [끝 인덱스+1])
- 배열에 값을 채운다.
```js
arr.fill();
console.log(arr); // 7개의 인덱스 모두 undefined

arr.fill("S", 2);
console.log(arr); // [ '월', '화', 'S', 'S', 'S', 'S', 'S' ]

arr.fill("Y", 3, 5);
console.log(arr); // [ '월', '화', '수', 'Y', 'Y', '토', '일' ]
```

### map
- arr.map((***엘리먼트***, ***인덱스***, [배열본체])=>{})
- 배열을 순회하여 리턴한 값을 배열에 다시 넣어준다.
```js
var map = arr.map((element, indexnnnnnnnnnnnnnnnn j)=>{
    return element+1;
})
console.log(map); // [ '월1', '화1', '수1', '목1', '금1', '토1', '일1' ]

var map2 = arr.map((element, index)=>{
    return index+1;
})
console.log(map2); // [ 1, 2, 3, 4, 5, 6, 7 ]

```

### filter
```js

```

### reduce
```js

```

### sort
- 오름차순, 내림차순 정렬
- 문자열로 변환하여 정렬하는 방식이여서 숫자의 경우 추가 코드를 작성해야한다.
```js
var arr = [31, 22, 36, 1, 8, 5, 11]

var result = arr.sort();
console.log(result); // [ 1, 11, 22, 31, 36, 5, 8 ]

/*
p, c에 배열의 0번째 인덱스부터 하나씩 대입하여 0보다크면 순서를 변경하는 방법으로 정렬한다.
ex)
31 - 22 = 9 (순서를 바꾼다.) => [22, 31, 36, 1, 8, 5, 11]
31 - 36 = -5 (순서를 바꾸지 않는다.) => [22, 31, 36, 1, 8, 5, 11]
36 - 1 = 35 (순서를 바꾸고 다음번엔 전 인덱스의 값과 비교한다.) => [22, 31, 1, 36, 8, 5, 11] 
*/
var result2 = arr.sort((p, c)=>p-c) 
console.log(result2); // [ 1, 5, 8, 11, 22, 31, 36 ]

var result3 = arr.sort((p, c)=>c-p)
console.log(result3); // [ 36, 31, 22, 11, 8, 5, 1 ]

// 문자열 역정렬
function compStringReverse(a, b){
    if(a>b) return -1;
    if(b>a) return 1;
    return 0;
}
var day = ["월", "화", "수", "목", "금", "토", "일"];

console.log(day.sort(compStringReverse)); // [ '화', '토', '일', '월', '수', '목', '금' ]

```