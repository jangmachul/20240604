```sh
cd 2024

# git 초기화
git init

# 깃 원격 저장소 만들고

git config --global user.name "jangmachul"

git config --global user.email "https://github.com/jangmachul"

git remote add origin https://github.com/jangmachul/study20240509.git
git push -u origin master

# 깃에 올려서 일일 일 커밋을 습관화 하면 좋다.
```

# 동기와 비동기 이벤트 루프

## 동기
> 직렬적으로 작업을 수행한다.

## 비동기
> 병렬적으로 작업을 수행한다.

## 스레드
> 일 하는 사람의 숫자
> 혼자 일을 처리한다.

> 내가 빨래를 널고 > 밥도 차리고 > 티비를 켜고

## 자바스크립트의 비동기 처리

1. Web api == DOM , settimeout
2. Task Queue == 이벤트 발생 후 호출 되어야 할 콜백이 쌓이는 공간 evnet loop 가 정한대로 순서대로 기다린다.(콜백 큐)
3. Event loop == 이벤트 발생하고 호출될 콜백 함수를 관리 , 순서를 결정해 준다.

```js
function a() {
console.log("hello1");
console.log("hello2");
console.log("hello3");
}

a();

// 함수 a 가 먼저 실행 된 뒤 함수 안에 있는 hello1 부터 2, 3 으로 출력 된다.
```

```js
function a() {
console.log("hello1");
console.log("hello2");
console.log("hello3");
}
settimeout(() =>{
    console.log("hello1");
}),1000 // 1초 뒤에 실행할 함수

settimeout(() =>{
    console.log("hello2"); 
}),500 // 0.5초 뒤에 실행할 함수

a();
```
## 이벤트 루프
> 정한 순서 대로 나열되어 있는 콜백 함수 들을 콜스택이 비워지면 순서대로 호출해서 실행한다. `콜백 큐`
> 실행 순서를 정해준다.
> 비동기적 자바 스크립트 처리 코드가 종료되지 않아도 대기하지 않고 다음 코드줄을 실행하는 자바스크립트 특성(싱글 스레드)
> 이벤트 루프 특성을 사용한다 비동기 처리를 위해서

### setTimeout
> 콜스택에 쌓여잇는 내용을 모두 처리하고 호출을 하기 때문에 정확하지 않다.

### 비동기 처리
> 서버로 데이터 요청을 보내고 응답을 받고 처리해야 하는 코드를 기다리고 처리하고 
> 웹페이지의 다른 코드들은 우리가 서버의 데이터를 받는동안 웹페이지가 안뜨거나 다른 코드들이 멈춰 있을 수 없기 때문에

## promise 객체
> 비동기 처리를 할 때 사용을 하고
> 대기, 성공, 실패의 반환값과 매서드를 가지고 있는 객체
```js
const promise = new Promise((res, rej) => { // 매개변수 이름 고정아님
    //비동기 처리 구문
    // setTimeout
    if("성공"){
        res("성공했어");
    }
    if(
        rej("실패했어");
    )
}); // promise 객체 생성
// 인자로 생성자 함수에 콜백 함수를 전달한다.
// res 성공의 결과를 반환해줄 함수(첫번째 매개변수)
// rej 실패의 결과를 반환해줄 함수(두번째 매개변수)

const promise = new promise((res, rej) => { // 매개변수 이름 고정아님
    //비동기 처리 구문
    // setTimeout
    setTimeout(() =>{
        console.log("hello");
    }, 5000);



const promise = new promise((res, rej) => { // 매개변수 이름 고정아님
    //비동기 처리 구문
    // setTimeout
    setTimeout(() =>{
        res("성공했어");
    }, 5000);
    setTimeout(() =>{
        rej("실패했어");
    }, 3000);
});

promise
.then((result) => { console.log(result) }) // 비동기 처리 이후에 반환된 값도 비동기 처리를 해야 하는 경우
.then((result2) => {console.log(result2)}) // 비동기 처리를 한번 더 하고 result2에 반환한다.
.catch((error) => { console.log(error) });


function callback(fn) {
    fn();
}


// callback(() =>{
//     console.log("hi1");
//     callback(() =>{
//         console.log("hi2"))
// })
promise.then((result) => (console.log(result))); // 비동기 처리를 한 뒤에 성공 결과를 반환한다.
promise.catch((error) => (console.log(error))); // 비동기 처리를 한 뒤에 실패 결과를 반환한다.


const num = 10;
const promise2 = new Promise((res, rej) =>{
    if(num>5) {
        res("num이 5보다 크다");
    }else {
        rej("num이 5보다 작아")
    }
});

promise2.then((result) => {console.log(result)}) .catch((error) => {console.log(error) });

promise2.catch((error) => (console.log(error)));




const callbackkpromise = (text, time) =>{
    return new Promise((res, rej) =>{
        try {
            // 정상적으로 코드가 실행되면
            // 비동기 처리
            setTimeout(()=> {
                res(text);
            },time);
        }catch(e){
            // 코드가 정상적으로 실행되지 않으면
            rej(e);
        }  
    })
}

callbackpromise("text 1",1000)
.then((result) =>{
    // then 은 promise가 성공하면 전달한 콜백함수 호출
    console.log(result);
    return result; // 반환되는 promise 객체 안에 result 값으로 할당한다.
})
.then((result) => {
    console.log(result);
    return callbackpromise("text 2", 1000);
})
.then((result) => {
    console.log(result);
    return callbackpromise("text 3", 1000);
})
.catch((result)=>{
    // catch는 실패가 되면 호출되면 실행되는 콜백 함수
    console.log(result);
});

// 대기 -> 응답을 받으면
// 서버에서 요청을 받는 경우에도 promise
// 대기 상태가 끝날때까지 대기 시키고 이후에 정상적으로 응답 받은 값을 가지고
// 데이터를 사용
```

## async 와 await
> ES8에서 탄생한 문법
> async 와 await는 꼭 붙어야 한다
```js
async function () {

}
// async 를 붙힌 함수는 반환이 promise
const asyncFn = async () => {
    try{
        const test1 = await callbackpromise("text1",1000);
        // await 뒤에 promise 대기상태이면 코드를 밑으로 진행 시키지 않는다.
            console.log(test1)
        // promise 객체의 대기상태
        // promise 객체의 대기 이후의 처리 결과를 반환
        const text2 = await callbakcpromise("text2",1000);
            console.log(text2)
        const text3 = await callbakcpromise("text3",1000);
            console.log(text3)
        return test1;
    };
    catch(e){
        console.log(e);
    }
}
console.log(asyncFn());

async function a() {
    await asyncFn();
    console.log("안녕")
}
a();
```
주의 할 점
then
catch
-------------------------------------------------
async await
// 같이 쓰면 잘 모르고 사용했다.

// 실습 1초마다 1씩 증가되는 비동기 처리를 해서 함수로 작성을 해보자. 5까지 증가