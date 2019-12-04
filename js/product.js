$(function(){
    $('.product_text').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
})