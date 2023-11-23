
$(function(){
    
    setInterval(function(){
    $('#bike').fadeOut(500).fadeIn(500);
    },1000)
    setInterval(function(){
    $('.tapsi').fadeOut(800).fadeIn(800);
    },1600)
    colorSetup();
    setup();


    document.getElementById( "screen" ).onclick = function( event ) {
        $('#bike').fadeIn();
    var result = window.confirm('ここの場所を保存しますか？');

    if(result){
        x = event.pageX ;	// 水平の位置座標
        y = event.pageY ;	// 垂直の位置座標
        $("#bike").css("left",x-40+"px");
        $("#bike").css("top",y-20+"px");
        $("#bike").show();
        localStorage.setItem('bike-x', x);
        localStorage.setItem('bike-y', y);
        console.log(x);
        console.log(y);
        $('.tapsii').removeClass("tapsi");
        }else{}
        
        
    }

    $('#botton-A').click(function(){
        scrolls(0);
    });
    $('#botton-B').click(function(){
        scrolls(240);
    });
    $('#botton-C').click(function(){
        scrolls(500);
    });
    $('#botton-D').click(function(){
        scrolls(880);
    });
    $('#botton-E').click(function(){
        scrolls(2000);

    });


//ここから設定
    $('.defImg').on('click',function(){
        let vaa=$(this).attr('src');
//       console.log(vaa);
        window.localStorage.setItem('situ',vaa);
//        console.log(window.localStorage.getItem('situ'));
        $('.defImg').removeAttr('id', 'Imgs');

        $(this).attr('id', 'Imgs');

 
    });
    $('#botton-bike').click(function(){
        scrolls(x-300);
    });

     $('#blueMenu').on('click', function() {
        changeBlue();
    });
    $('#redMenu').on('click', function() {
        changeRed();
    });
    $('#blackMenu').on('click', function() {
        changeBlack();
    });


function changeBlue(){
    $('.top,.right,.left,.bottom').css('background-color','#D6E5ED');
    $('.header').css('background-color','#5D70A3');
    $('.botton').css('box-shadow','2px 2px 2px 2px #bbb');
    window.localStorage.setItem('color','blue');
}
function changeRed(){
    $('.top,.right,.left,.bottom').css('background-color','#F6E1E1');
    $('.header').css('background-color','#EB5A5A');
    $('.botton').css('box-shadow','2px 2px 2px 2px #bbb');
    window.localStorage.setItem('color',null);
}
function changeBlack(){
    $('.top,.right,.left,.bottom').css('background-color','#817F7F');
    $('.header').css('background-color','#000000');
    $('.botton').css('box-shadow','2px 2px 2px 2px rgb(88, 88, 88');
    window.localStorage.setItem('color','black');

    

}
//ここまで設定
    
    function setup(){


        xxxx=localStorage.getItem('bike-x');

        if(xxxx==null){
            console.log("データがねえ");
            $('.tapsii').addClass("tapsi");
            
            
        }else{
            x=localStorage.getItem('bike-x');
            y=localStorage.getItem('bike-y');
            console.log('保存'+x);
            console.log('保存'+y);
            x=x-40;
            y=y-20;
            console.log('x='+x);
            console.log('y='+y);
            $("#bike").css("left",x+"px");
            $("#bike").css("top",y+"px");
            $("#bike").show();
            
        }
    console.log("85");
    }
    function scrolls(t){
        window.scrollTo(t, 0)
    }
    function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

function colorSetup(){
    if(!window.localStorage.getItem('color')){}else if(window.localStorage.getItem('color')=='blue'){
        changeBlue();}else if(window.localStorage.getItem('color')=='black'){
            changeBlack();}

    if(window.localStorage.getItem('situ')=='tyuurinn.PNG'){
        
            $('#bikehtml').attr('id', 'Imgs');
        }else if(window.localStorage.getItem('situ')=='def.PNG'){
            $('#indexhtml').attr('id', 'Imgs');
        }else if(window.localStorage.getItem('situ')=='picture/kousui.PNG'){
            $('#weatherhtml').attr('id', 'Imgs');
        }else if(window.localStorage.getItem('situ')=='picture/sisetu.PNG'){
            $('#sisetuhtml').attr('id', 'Imgs');
        }
}

});