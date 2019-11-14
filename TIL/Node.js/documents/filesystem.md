# File System
- 디렉터리 생성
```js
fs.mkdir('.temp', err => {

});
```
- 디렉터리 삭제
```js
fs.rmdir('./temp', err => {
    if(err) throw err
});
```
- 파일 생성
```js
fs.open('./text.txt', 'wx', (err, fd){
    if(err) throw err;
});
```
- 파일 삭제
```js
fs.unlink('./text.txt', err => {
    if(err) throw err;
}
```
- 이름 변경
```js
fs.rename('temp', 'temp2', err => {
    if(err) throw err;
});
```
- 파일 읽기
```js
fs.readFile('./temp/newFile', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
```
- 파일 쓰기
```js
fs.writeFile('./temp/new', 'Node js Practice', err => {
    if(err) throw err;
    console.log("생성 완료");
});
```