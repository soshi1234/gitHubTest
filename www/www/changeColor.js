// This is a JavaScript file

$(function(){

    console.log(window.localStorage.getItem('return'));
setup();


    function setup(){
            console.log("herf"+window.localStorage.getItem('situ'))
        if(window.localStorage.getItem('return')!='return'){
            if(window.localStorage.getItem('situ')=='tyuurinn.PNG'){
            
                window.location.href = 'bike.html';
            }else if(window.localStorage.getItem('situ')=='picture/kousui.PNG'){
                window.location.href = 'weather.html';
            }else if(window.localStorage.getItem('situ')=='picture/sisetu.PNG'){
                window.location.href = 'sisetu.html';
            }
        }
        window.localStorage.setItem('return','no');
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
    $('#blueMenu').on('click', function() {
        changeBlue();
    });
    $('#redMenu').on('click', function() {
        changeRed();
    });
    $('#blackMenu').on('click', function() {
        changeBlack();
    });


        $('.defImg').on('click',function(){
        let vaa=$(this).attr('src');
//       console.log(vaa);
        window.localStorage.setItem('situ',vaa);
//        console.log(window.localStorage.getItem('situ'));
        $('.defImg').removeAttr('id', 'Imgs');

        $(this).attr('id', 'Imgs');

 
    });


function changeBlue(){
    $('body').css('background-color','#D6E5ED');
    $('header').css('background-color','#5D70A3');
    window.localStorage.setItem('color','blue');
    //$('.content-1,.content-2,.content-3').css('color','#F6E1E1');

}
function changeRed(){
    $('body').css('background-color','#F6E1E1');
    $('header').css('background-color','#E57373');
    //$('.content-1,.content-2,.content-3').css('color','#F6E1E1');
    window.localStorage.setItem('color',null);
}
function changeBlack(){
    $('body').css('background-color','#817F7F');
    $('header').css('background-color','#000000');
    // $('.content-1').css('color','#000000');
    // $('.content-2').css('color','#000000');
    // $('.content-3').css('color','#000000');
    window.localStorage.setItem('color','black');
    

}

});
