
$(function(){
    // 顶部的中英文切换
    $('.lang_cn').click(function(){
        $('.lang_eng').removeClass('active')
        $('.lang_cn').addClass('active')
    })
    $('.lang_eng').click(function(){
        $('.lang_cn').removeClass('active')
        $('.lang_eng').addClass('active')
    })

    // 页码切换的点击事件
    $('.trans_tab').click(function(){
        $(this).css({
            "color":"#fff",
            "background-color":"#F67605"
        }).siblings().css({
            "color":"#969696",
            "background-color":"#E6E6E6"
        })
    })
})