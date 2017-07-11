/**
 * Created by Administrator on 2017-06-29.
 */

// 주석종류
/**
 *
 * */

/*

 */

// 매개변수를 사용하는 함수 연습

/*

  매개변수 함수를 사용하는 경우

  1. 전역변수, 지역변수의 적용 범위를 개선하기 위해 사용

  2. 함수의 재사용성을 높이기 위해 사용

 */


// 두 수의 합을 계산하는 코딩

// 1) 매개변수를 사용하지 않는 경우
(function(){

  // 변수 선언
  var a = 10;
  var b = 20;
  var c = 40;
  var d = 50;

  // 함수 선언
  function sum1(){
    console.log(a+b);
  }

  function sum2(){
    console.log(b+c);
  }

  function sum3(){
    console.log((a+b)+d);
  }

  //함수 실행
  sum1();
  sum2();
  sum3();

})();


// 2) 매개변수를 사용하는 경우
(function(){

  // 매개변수는 var 을 사용해 변수선언을 할 필요 없음

  // 함수 선언
  function sumArg(arg1, arg2){
    console.log(arg1 + arg2);
  }

  // 함수 실행
  sumArg(10, 20);
  sumArg(20, 40);
  sumArg(30, 50);

})();


// 매개변수를 사용하여
// 문제1) 안녕하세요~ OO 님! 출력하기!
(function(){

  function speakArg(name){
    console.log('안녕하세요~ '+ name + ' 님!');
  }

  speakArg('유미');
  speakArg('혜은');
  speakArg('혜지');
  speakArg('지원');
  speakArg('수연');

})();

// 매개변수를 사용하여
// 문제2) 이름, 나이, 성별, 키, 지역(시도) 출력하기!

(function(){

  function info(name, age, gender, height, city){
    console.log('이름 : ' + name);
    console.log('나이 : ' + age + '세');
    console.log('성별 : ' + gender);
    console.log('신장 : ' + height + 'cm');
    console.log('지역 : ' + city);
  }

  info('랄랄라', 23, '여', 163, '서울');
  info('하핳하', 26, '남', 182, '대구');
  info('야호호', 25, '여', 172, '인천');

})();
