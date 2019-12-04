// 点击切换图标和字体颜色
// $('.platform_tab_area').click(function(){
    // 截取部分字符串然后返回
    // var changeImg1=$(this).find('img').attr("src")
    // changeImg1=changeImg1.substring(0,changeImg1.length-5)
    // console.log(changeImg1);
    // $(this).addClass('active').siblings().removeClass('active')
    // $(this).siblings().find('img').attr("src",changeImg1+'1.png')
    // $(this).find("img").attr("src", changeImg1+'2.png')
    // $(this).siblings().find('img').attr("src")
    // console.log($(this).find('img').attr("src"));
// })
$(function(){
    // 点击切换颜色和图片
    $('.platform .platform_tab_area').click(function(){
        $(this).find('.active').css({
            "display":"block"
        })
        $(this).siblings().find('.active').css({
            "display":"none"
        })
        $(this).addClass('active').siblings().removeClass('active')
    })

})