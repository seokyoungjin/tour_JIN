$(function(){

    $(".tittle").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.header__burger').on('click',function(){
        $('header').css('opacity','0');
        $('.header__wrap').addClass('in');
        
    });
    $('.closed__btn').on('click',function(){
        $('header').css('opacity','0');
        $('.header__wrap').addClass('out');
        setTimeout(()=>{
            $('.header__wrap').removeClass('out').removeClass('in');
            $('header').css('opacity','1');
        },500);
        
    });
    //  out 들어갈때 header 로고랑 x버튼 없어지게 해서 중첩되는 모습 없애주기
    //  버거메뉴 클릭했을떄
    let scrollTop;
    $(window).on('scroll',function(){

        console.log(  $('.section__00').offset().top  )


        let scrollTop = $(this).scrollTop();
        if(scrollTop > 10 ){
            $('header').css('background-color','white');
            $('header > h1 > a > img').attr('src','./img/logo-vac-nav-bk.png');
            $('.header__burger').css('color','black');
        }else{
            $('header').css('background-color','');
            $('header > h1 > a > img ').attr('src','./img/logo-vac-nav.png');
            $('.header__burger').css('color','#fff');
        }

        // if(scrollTop == 0){
        //     $('header').addClass('black');
        // }else{
        //     $('header').removeClass('black');
        // }
    });

    $('.tittle .slick-prev').on('click',function(){
        $('.tittle .slick-prev').addClass('active');
        $('.tittle .slick-prev').css('color','#fff');
    });
    // 좌 버튼 or 우 버튼 을 누르면 버튼에 svg 효과가 나오면서 토글도 같이 움직임
    // 클릭을 했을때 흰색 sgv가 나오면서 클릭을 하면 흰색 boder가 반달로 변함 

    let btn_next = `<svg class="svg-circle" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="30" cy="30" r="29" fill="none" data-svg-origin="30 30"></circle>
                    </svg>`;
    $('.slick-next').html(btn_next);
});




// $('img').attr('src'.'./img.jpg')
// J쿼리에서 이미지를 바꾸고 싶을때
// $('.section__00').offset().top
// 높이를 알고 싶을때

// 스크롤이 = 0 일때는 투명하고
// 스크롤이 0 보다 크다면 배경화면이 생긴다.




