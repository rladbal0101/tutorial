/**
 * Created by Administrator on 2017-06-28.
 */

/**
 *
 * 반복 횟수를 정해서 반복 시키는 명령
 *
 * for( 변수=초기값; 조건식; 증감값 ) {
 *
 *  실행문
 *
 * }
 *
 */

/**
 *
 * 증감 연산
 *
 * a = 1
 *
 * a = a + 1 => a++ : a 변수의 값을 1씩 증가 시킴(반복 실행 시)
 *
 * b = a + 1 => a 변수의 값에 1을 더한 후 b 변수에 대입
 *
 * a = a + b => a 변수의 값에 b 변수의 값 만큼씩 증가 시킴(반복 실행 시)
 *
 * a = a - 1 => a-- : a 변수의 값을 1씩 감소 시킴(반복 실행 시)
 *
 * a = a - b => a 변수의 값에 b 변수의 값 만큼씩 감소 시킴(반복 실행 시)
 *
 * */

var hap = 0;

for(var i=0; i<=10; i++){ // i : integer, iterate 단어의 첫글자

  hap = hap + i;

}

console.log(hap);