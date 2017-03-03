/**
 * Created by snowlee on 16/3/29.
 */
//require.config({
//    paths:{
//        'jquery':'jquery.min'
//    }
//
//});
require(['jquery','module1'],function($,xx){
    //alert($().jquery);//版本号 $为形参
    //alert($().jquery);
    $('#btn').on('click',function(){
        //alert(2134);
        var $num1 = $('#num1'),
            $num2 = $('#num2'),
            $result = $('#result');

        var yy=xx($num1.val(),$num2.val());
        //alert(yy);
        $result.val(yy);
    });
});




















