$(function(){
    $('.left').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.right').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $(".new_out_box").mouseover(function(){
        $(this).css("background-color","#F0F0F0");
      }).mouseout(function(){
        $(this).css("background-color","#fff");
      });
})