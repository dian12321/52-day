// 토글
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

// 클로즈
function closeNav(){
    document.getElementById("myNav").style.width = "0";
}

// popup 
$(function(){
    $(".btn").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });
});