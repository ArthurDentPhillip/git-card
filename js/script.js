$ (document). ready (function(){   	

$( ".start" ).click(function() {
    var one = false;
    var two = false;
    var four = false;
    var five = false;
    var counter = 0;

    // Перетасовывание карточек
    let x = rand();
    mix(x);
    
    // Переворачивание карточек лицевой сторонй вниз и появление кнопки финиш
    $(".back").css("display", "block");
    $(".front").css("display", "none");
    $(".start").css("display", "none");
    $(".finish").css("display", "block");

    // Основной блок (нижние карточки должны совпасть с верхними, иначе все они закрываются)
    $("#one").click(function() {
        one = true;
        let $front = $(this).children().first();
        let $back = $(this).children().last();
        $front.css("display", "none");
        $back.css({ 
            display:"block",
            opacity: "0.6"
            });
    });
    $("#two").click(function() {
        two=true;
        let $front = $(this).children().first();
        let $back = $(this).children().last();
        console.log($back);
        $front.css("display", "none");
        $back.css({ 
            display:"block",
            opacity: "0.6"
            });
    });
    $("#four").click(function() {
        four=true;
        let $front = $(this).children().first();
        let $back = $(this).children().last();
        console.log($back);
        $front.css("display", "none");
        $back.css({ 
            display:"block",
            opacity: "0.6"
            });
    });
    $("#five").click(function() {
        five=true;
        let $front = $(this).children().first();
        let $back = $(this).children().last();
        console.log($back);
        $front.css("display", "none");
        $back.css({ 
            display:"block",
            opacity: "0.6"
            });
    });
$("#one_one").click(function() {
        var $front = $(this).children().first();
        var $back = $(this).children().last();
        if(one===true){
            console.log($back);
            $front.css("display", "none");
            $back.css({ 
                display:"block",
                opacity: "0.6"
            });
            counter++;
        }
        else{
            $front.css("display", "none");
            $back.css({ 
                display:"block",
            });
            function set($front, $back) {
                $front.css("display", "block");
                $back.css("display", "none");
                $('.front').css("display", "none");
                $('.back').css("display", "block");
              }
            setTimeout(set, 2000, $front, $back);
            one=false;
        }
        
    });
$("#two_two").click(function() {
        var $front = $(this).children().first();
        var $back = $(this).children().last();
        if(two===true){
            console.log($back);
            $front.css("display", "none");
            $back.css({ 
                display:"block",
                opacity: "0.6"
            });
            counter++;
        }
        else{
            $front.css("display", "none");
            $back.css({ 
                display:"block",
            });
            function set($front, $back) {
                $front.css("display", "block");
                $back.css("display", "none");
                $('.front').css("display", "none");
                $('.back').css("display", "block");
              }
            setTimeout(set, 2000, $front, $back);
            two=false;
        }
    });
$("#four_four").click(function() {
        var $front = $(this).children().first();
        var $back = $(this).children().last();
        if(four===true){
            console.log($back);
            $front.css("display", "none");
            $back.css({ 
                display:"block",
                opacity: "0.6"
            });
            counter++;
        }
        else{
            $front.css("display", "none");
            $back.css({ 
                display:"block",
            });
            function set($front, $back) {
                $front.css("display", "block");
                $back.css("display", "none");
                $('.front').css("display", "none");
                $('.back').css("display", "block");
              }
            setTimeout(set, 2000, $front, $back);
            four=false;
        }
    });
$("#five_five").click(function() {
        var $front = $(this).children().first();
        var $back = $(this).children().last();
        if(five===true){
            console.log($back);
            $front.css("display", "none");
            $back.css({ 
                display:"block",
                opacity: "0.6"
            });
            counter++;
        }
        else{
            $front.css("display", "none");
            $back.css({ 
                display:"block",
            });
            function set($front, $back) {
                $front.css("display", "block");
                $back.css("display", "none");
                $('.front').css("display", "none");
                $('.back').css("display", "block");
              }
            setTimeout(set, 2000, $front, $back);
            five=false;
        }
    });
 //   Блок выхода из игры/Окончания игры
 $( ".finish" ).click(function() {
    function set() {
    // Переворачивание карточек задней сторонй вниз, появление кнопки старт и возвращение прозрачности картам
    $(".back").css({ 
        display:"none",
        opacity: "1"
    });
    $(".front").css({ 
        display:"block",
        opacity: "1"
    });
    $(".start").css({ 
        display:"block",
        opacity: "1"
    });
    $(".finish").css({ 
        display:"none",
        opacity: "1"
    });
    $(".popup").css({ 
        display:"none",
        opacity: "1"
    });
      }
    setTimeout(set, 1500);
    // popup окно 
    if(counter===4){
        $(".popup").css("display", "block");
    }
  });
  });


});
// Генерация рандомных чисел для перемешивания картинок;
function rand (){
    let arr = [];
    for (let i = 0; i<4; i++){
       let tmp = Math.floor((Math.random() * 4) + 1);
       if(arr.includes(tmp)===false){
        arr.push(tmp);
       }
       else{
        i--;
       }
    }
    return arr;
}

// Перемешивание карточек
function mix (n){
    msg1 = "img/" + n[0] + ".jpg";
    msg2 = "img/" + n[1] + ".jpg";
    msg3 = "img/" + n[2] + ".jpg";
    msg4 = "img/" + n[3] + ".jpg";
    $("#one").children().last().children().attr("src", msg1);
    $("#one_one").children().last().children().attr("src",msg1);
    $("#two").children().last().children().attr("src",msg2);
    $("#two_two").children().last().children().attr("src", msg2);
    $("#four").children().last().children().attr("src", msg3);
    $("#four_four").children().last().children().attr("src", msg3);
    $("#five").children().last().children().attr("src", msg4);
    $("#five_five").children().last().children().attr("src", msg4);
}

