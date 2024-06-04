// nodejs의 stream 내장 모듈

// Transfrom 스트림 데이터를 읽고 데이터를 변환한 뒤 다른 스트림으로 전달하는데 사용
const {Transform} = require("stream");

// nodejs 의 내장 모듈 파일을 읽거나 쓰거나 삭제하거나
// 파일 시스템
const fs = require("fs")
// 청크의 크기
// stream 에서 작업 할 때 데이터를 받고 처리할 떄 마다 각 청크를 조작한다.

const chunkSize = 64 * 1024; // 64KB

// 스트림으로 파일의 데이터를 읽어보자
// 스트림 데이터를 읽어온다. 매개변수로 파일의 경로
// highWaterMark : 청크의 크기를 설정해서 읽는 스트림을 만든다.
const text = fs.createReadStream("text.txt", {highWaterMark : chunkSize})

console.log(text)
const transformData = new Transform({
    highWaterMark : chunkSize,
    // transform 청크를 변환한다.
    transform(chunk, en, callback){
        // 받아온 청크를 문자열로 변환 대문자로 변경해서 스트림 전달
        this.push(chunk.toString().toUpperCase());
        // 변환이 완료되면 콜백 호출
        callback();
    }
})

// 파일 쓰기 스트림 생성 text2.txt 에 작성할 스트림
const text2 = fs.createWriteStream("text2.txt");

// 스트림으로 내용을 파일에서 파일로 이동

// pipe : 메서드를 호출한 객체의 내용을 매개변수로 전달한 스트림 객체에 내용을 이동시킨다.
text.pipe(transformData).pipe(text2);


