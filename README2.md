<<<<<<< HEAD
# nodeJS

> 자바 스크립트 런타임 환경(자바스크립트를 실행 할 수 있다.)
> 여러 OS 에서 실행이 가능하다. 윈도우 맥 리눅스

## nodejs의 역사

> 2009년에 node.js가 출시 이때 npm 도 같이 생성
> 지속적으로 업데이트를 하고 있고 출시하고 2년뒤에 바로 대형 웹 플랫폼에서 사용되었다.(LinkedIn)
> 2020년 github npm을 인수 등 
> nodejs를 사용하는 기업 즉 시장도 많이 증가하고 있다
> 서버 구축에 정말 많이 사용되며 마이크로 서비스 아키텍쳐를 설계하는데 중요한 역할을 하는 엔진이다.

## nodejs 등장
> 자바스크립트로 서버측 활용이 가능한 본격적 시작은 nodejs(javascript v8엔진)

## nodejs의 인기
> nodejs는 싱글 스레드인 자바스크립트를 활용한 서버측 로직을 작성하기 위해 비동기 이벤트 기반
아키텍쳐를 사용 성능이 좋고 확장성을 제공한다.

## nodejs 가 서버?
> nodejs 자체가 웹서버가 아니고
> nodejs 는 js를 사용해서 서버측 로직 코드를 작성하고
> 서버를 구축 할 수 있게 제공한다.
> 개발의 생산성을 위해 npm을 통해 모듈을 설치 받거나 제공 할 수 있다.

## npm(node package manager)
> 개발자들이 작성한 자신의 소스코드를 공유 할 수 있는 패키지 저장소 npm을 사용하면 모듈의 쉽게 설치 받아서 사용할 수 있다. nodejs 가 개발된 이유는 웹서버 개발을 하기 위해서도 있지만
> 방대한 오픈소스 생태계를 구축하기 위해서 개발자들이 편하게 개발을 할 수 있도록 개발 생산성을 항상 하기 위해서

## v8 javascript 엔진
> 크롬 v8 javascript 엔진으로 빌드된 서버 측 자바스크립트 런타임 환경
> 브라우저와 런타임 환경이 다르다.

> 빌드가 되었다는건 구글에서 개발한 v8 엔진을 사용해서 코드를 컴파일러를 통해 실행 파일로 변환 하는 작업 이라고 보면 됨.

## nodejs 의 블로킹과 논블로킹
> nodejs 에서 `비동기I/O` 작업을 진행하는 동안 또 다른 작업을 실행 할 수 있다.(nodejs 장점)
>I/O 작업이 완료 될 때 까지 기다리면서 다른 코드도 실행 시켜 줄 수 있다.
>Input / Output : 파일 시스템(브라우저에서 파일을 조작 할 순 없고) 네트워크 디스크 등 테이터를 읽거나 쓰거나 작업(nodejs는 이런 무거운 작업의 속도가 빠르다.)

> 블로킹이란 한 작업이 끝날 때 까지 다른 작업을 수행 하지 않는것.
> 블로킹 I/O 작업은 수행하는 동안 다른 코드의 중단을 시킬 수 있다.

논 블로킹이란 I/O 작업을 수행하는 동안 다른 코드들을 실행 할 수 있게 하는것
>nodejs는 모든 I/O 작업을 비동적으로 실행 하고 블로킹 하지 않는다.

## nodejs의 이벤트 기반의 아키텍쳐
> nodejs 의 가장큰 특징으로 이벤트 기반의 아키텍쳐가 있고
> 이벤트 기반의 프로그래밍은 이벤트가 발생하면 콜백 함수를 실행 시키는 방식
> 이벤트 기반의 프로그래밍을 작성하면 비동기 처리가 가능하고 좋은 성능과 확장성을 가질 수 있다.

## 이벤트 기반
> 이벤트를 실행하면 이벤트로 등록한 작업을 수행
> 우리가 자바스크립트로 클릭 같은 이벤트에 콜백함수를 작성하고
> 이벤트 기반의 특정 이벤트가 발생하면 전달한 콜백함수를 호출해서 실행 시킨다.
> 이런 내용을 `이벤트 리스너에 콜백함수를 등록한다.` 라고 한다.
=======
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
>>>>>>> fd9cef1f2fa4a0be71408a3d25172b7c05217f81
