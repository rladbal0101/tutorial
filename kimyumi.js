/**
 * Created by Administrator on 2017-08-29.
 */

(function(){

  function cal(){

    var input = '+';

    var a = [1,2,3,4,5];
    var result = 0;

    if( input == '+'){

      for (var i=0; i< a.length; i++){
        result += a[i];
      }

    } else if( input == '*'){

      for (var j=1; j<a.length; j++){
        a[0] *= a[j];
      }
      result = a[0];

    } else if( input == '-'){

      for (var k=0; k< a.length; k++){
        result -= a[k];
      }

    }

    console.log('결과 : ' + result);

  }

  cal();

})();