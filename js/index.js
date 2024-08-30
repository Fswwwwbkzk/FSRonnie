
// function loadHTML(id, url) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(id).innerHTML = data;
//         });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     loadHTML('header', 'header.html');
//     loadHTML('footer', 'footer.html');
// });



// 定義 shuffleLetters 函數
function shuffleLetters() {
    var fsrShuffle = $(".fsrShuffle");
    fsrShuffle.shuffleLetters();
    // console.log("shuffleLetters function executed");
}

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    // 定義一個函數來檢查並處理每個區塊
    function checkBlock(id) {
        var block = $('#' + id);
        var blockOffset = block.offset().top;

        // 檢查區塊是否已經觸發過 shuffleLetters()
        if (!block.data('shuffled') && scrollTop + windowHeight > blockOffset && scrollTop < blockOffset + block.height()) {
            block.find('.projectTitle').addClass('fsrShuffle');
            shuffleLetters(); // 執行函數
            block.data('shuffled', true); // 標記已經執行過
        } else if (scrollTop + windowHeight < blockOffset || scrollTop > blockOffset + block.height()) {
            block.find('.projectTitle').removeClass('fsrShuffle');
            block.data('shuffled', false); // 重置標記，允許再次執行
        }
    }

    // 分別檢查每個 block
    checkBlock('fsBlock1');
    checkBlock('fsBlock2');
    checkBlock('fsBlock3');
    checkBlock('fsBlock4');
    checkBlock('fsBlock5');
    checkBlock('fsBlock6');
    checkBlock('fsBlock7');
});


// window.addEventListener('scroll', function () {
//     var navbarLogo = document.getElementById('header');
//     let scrollTop = $(this).scrollTop();

//     if (scrollTop > 520) { // 超過100像素時縮小
//         navbarLogo.classList.add('scrolled');
//     } else {
//         navbarLogo.classList.remove('scrolled');
//     }
// });











