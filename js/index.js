function init(){

    let scroll_height;
    let text_height = $(window).height();
    let scrollTop;

    // (스크롤높이)
    // (문서높이)
    // (브라우져높이)

    $(window).on('scroll',function(){  
        
        scrollTop = $(window).scrollTop();
        // 브라우져 높이 = 
        $('.T1').each(function(i){

            scroll_height = $('.T1').eq(i).offset().top;
            // 스크롤 높이 = 
            if(scroll_height - text_height < scrollTop){
                $('.T1').eq(i).addClass('active');
            }
            //  스크롤 높이 - 문서 높이 < 브라우져 높이 
        });
});
}
$(window).on('load',init);


