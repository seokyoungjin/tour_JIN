//common.js

    $('header').load('inc.html header > div',menu);
    //                                      콜백함수 사용한 이유 - 
    $('footer').load('inc.html footer .footer-warp');

    $('aside').load('inc.html aside .side-meun');

    
    let idx;
    $('div > nav > ul > li > a').click(function(){
        event.preventDefault();
        // 브라우저 명령을 차단하는 명령어 // 차단하는이유= 페이지이동작업을 해주어야하는 상황
        let pageUrl = $(this).attr('href');
        $('mainintroduction').load(pageUrl);

        
        $('div > nav > ul > li > a').eq(idx).removeClass('active');
        $(this).addClass('active');
        
        idx = $(this).index();
        
    });

    
function menu(){
    $('.ba-menu').on('click',function(){

        $('body').css({overflow:'hidden'})
        $('.click-menu').addClass('active');
        

        $('.close_btn').on('click',function(){
            $('.click-menu').removeClass('active');
            $('body').css({overflow:'auto'})
        });
    });


    
}
