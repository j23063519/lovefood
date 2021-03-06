// fullpage.js控制項目：全局
$(function () {
    $('#main').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        menu: true,
        anchors: ['WhatIsLoveFood', 'HowMuchWeWasted', 'WasteHarmsTheEarth', 'CherishFromThisMeal', 'DonateToUs', 'ContactUs'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrowColor: '#FBFFE0',
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        responsiveSlides: true,
        responsiveHeight: 568,

        // 垂直滾動至該章節時，header樣式及色彩的各種變化
        afterLoad: function (origin, destination, direction) {
            // console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh01');
                    $('#logo').attr('src', '../img/22/index/ch01_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#FDFBBA');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFE45E');
                    }, function () {
                        $(this).css('color', '#FDFBBA');
                    });
                    $('#navSepcialAnchor').css('color', '#858585');
                    $('#navSepcialAnchor div').css('background-color', '#FFFF9B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#FFE45E');
                    }, function () {
                        $(this).css('background-color', '#FFFF9B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch01_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member.png');
                    });
                    break;
                case 1:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh02');
                    $('#logo').attr('src', '../img/22/index/ch02_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#5C6254');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFFFFF');
                    }, function () {
                        $(this).css('color', '#5C6254');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#CDD3C3');
                    }, function () {
                        $(this).css('background-color', '#717E5B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch02_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch02_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch02_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch02_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch02_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member.png');
                    });
                    // 食物浪費體積換算動畫
                    $('.conversionNum').counterUp({
                        delay: 10,
                        time: 2000
                    });
                    break;
                case 2:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh03');
                    $('#logo').attr('src', '../img/22/index/ch03_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_header_logo.png');
                    });
                    $('#header').css('background-color', 'transparent');
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#808F87');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFFFFF');
                    }, function () {
                        $(this).css('color', '#808F87');
                    });
                    $('#navSepcialAnchor').css('color', '#F7F7F7');
                    $('#navSepcialAnchor div').css('background-color', '#96B3A3');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#BFD4C8');
                    }, function () {
                        $(this).css('background-color', '#96B3A3');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch03_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch03_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch03_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch03_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch03_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch02_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch03_nav_member.png');
                    });
                    break;
                case 3:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh04');
                    $('#logo').attr('src', '../img/22/index/ch04_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_header_logo.png');
                    });
                    $('#header').css({ 'background-color': '#D3E4C6', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#8F8770');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#F2F0D7');
                    }, function () {
                        $(this).css('color', '#8F8770');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#887664');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#F2F0D7');
                    }, function () {
                        $(this).css('background-color', '#887664');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch04_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch04_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch04_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch04_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch04_nav_member.png');
                    });
                    break;
                case 4:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh05');
                    $('#logo').attr('src', '../img/22/index/ch05_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#887664');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#CEC2B6');
                    }, function () {
                        $(this).css('color', '#887664');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#717E5B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#CEC2B6');
                    }, function () {
                        $(this).css('background-color', '#717E5B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch05_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch05_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch05_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch05_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch05_nav_member.png');
                    });
                    break;
                case 5:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh06');
                    $('#logo').attr('src', '../img/22/index/ch06_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_header_logo.png');
                    });
                    $('#header').css({ 'background-color': '#F6EEE5', 'border-bottom': 'none', 'box-shadow': '0px 6px 6px 6px rgba(0, 0, 0, 0.2)' });
                    $('.navGeneralAnchors').css('color', '#96908A');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#DAD1C8');
                    }, function () {
                        $(this).css('color', '#96908A');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#B6ADA5');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#D9D0C7');
                    }, function () {
                        $(this).css('background-color', '#B6ADA5');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch06_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch06_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart.png');
                    });
                    $('#navIcons03 img').attr('src', '../img/22/index/ch06_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch06_nav_cart.png');
                    $('#navIcons04 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_cart.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch06_nav_member.png');
                    $('#navIcons05 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch06_nav_member.png');
                    });
                    break;
            }
        },

        // 水平滑動至該頁面時，header樣式及色彩的各種變化
        afterSlideLoad: function (section, origin, destination, direction) {
            console.log(destination);
            switch (destination.index) {
                case 0:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh01');
                    $('#logo').attr('src', '../img/22/index/ch01_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none', 'box-shadow': 'none' });
                    $('.navGeneralAnchors').css('color', '#FDFBBA');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#FFE45E');
                    }, function () {
                        $(this).css('color', '#FDFBBA');
                    });
                    $('#navSepcialAnchor').css('color', '#858585');
                    $('#navSepcialAnchor div').css('background-color', '#FFFF9B');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#FFE45E');
                    }, function () {
                        $(this).css('background-color', '#FFFF9B');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch01_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch01_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch01_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch01_nav_member.png');
                    break;
                case 1:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                case 2:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                case 3:
                    $('#hamburgerMenuButton').removeClass();
                    $('#hamburgerMenuButton').addClass('hamburgerMenuColorForCh0102');
                    $('#logo').attr('src', '../img/22/index/ch0102_header_logo.png');
                    $('#logo').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_header_logo_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch02_header_logo.png');
                    });
                    $('#header').css({ 'background-color': 'transparent', 'border-bottom': 'none' });
                    $('.navGeneralAnchors').css('color', '#946C1E');
                    $('.navGeneralAnchors').hover(function () {
                        $(this).css('color', '#E0C38B');
                    }, function () {
                        $(this).css('color', '#946C1E');
                    });
                    $('#navSepcialAnchor').css('color', '#FFFFFF');
                    $('#navSepcialAnchor div').css('background-color', '#946C1E');
                    $('#navSepcialAnchor div').hover(function () {
                        $(this).css('background-color', '#E0C38B');
                    }, function () {
                        $(this).css('background-color', '#946C1E');
                    });
                    $('#navIcons01 img').attr('src', '../img/22/index/ch0102_nav_search.png');
                    $('#navIcons01 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_search.png');
                    });
                    $('#navIcons02 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons02 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_cart.png');
                    });
                    $('#navIcons04 img').attr('src', '../img/22/index/ch0102_nav_cart.png');
                    $('#navIcons03 img').attr('src', '../img/22/index/ch0102_nav_member.png');
                    $('#navIcons03 img').hover(function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member_hover.png');
                    }, function () {
                        $(this).attr('src', '../img/22/index/ch0102_nav_member.png');
                    });
                    $('#navIcons05 img').attr('src', '../img/22/index/ch0102_nav_member.png');
            }
        },
    });
});

// 浪費換算切換項目：第二章
$(function () {

    $('#elephantIcon').click(function () {
        $(this).attr('src', '../img/22/index/ch02_icon_elephant_light.png');
        $('#cruiseShipIcon').attr('src', '../img/22/index/ch02_icon_cruise_ship_dark.png');
        $('#planeIcon').attr('src', '../img/22/index/ch02_icon_plane_dark.png');
        $('#carIcon').attr('src', '../img/22/index/ch02_icon_car_dark.png');
        $('#conversionNumBlock02, #conversionNumBlock03, #conversionNumBlock04, #ch02Bg02, #ch02Bg03, #ch02Bg04').css({ 'display': 'none' });
        $('#ch02Bg01, #conversionNumBlock01').css({ 'display': 'flex' });
    });

    $('#cruiseShipIcon').click(function () {
        $('#elephantIcon').attr('src', '../img/22/index/ch02_icon_elephant_dark.png');
        $(this).attr('src', '../img/22/index/ch02_icon_cruise_ship_light.png');
        $('#planeIcon').attr('src', '../img/22/index/ch02_icon_plane_dark.png');
        $('#carIcon').attr('src', '../img/22/index/ch02_icon_car_dark.png');
        $('#conversionNumBlock01, #conversionNumBlock03, #conversionNumBlock04, #ch02Bg01, #ch02Bg03, #ch02Bg04').css({ 'display': 'none' });
        $('#ch02Bg02, #conversionNumBlock02').css({ 'display': 'flex' });
    });

    $('#planeIcon').click(function () {
        $('#elephantIcon').attr('src', '../img/22/index/ch02_icon_elephant_dark.png');
        $('#cruiseShipIcon').attr('src', '../img/22/index/ch02_icon_cruise_ship_dark.png');
        $(this).attr('src', '../img/22/index/ch02_icon_plane_light.png');
        $('#carIcon').attr('src', '../img/22/index/ch02_icon_car_dark.png');
        $('#conversionNumBlock02, #conversionNumBlock04, #conversionNumBlock01, #ch02Bg02, #ch02Bg04, #ch02Bg01').css({ 'display': 'none' });
        $('#ch02Bg03, #conversionNumBlock03').css({ 'display': 'flex' });
    });

    $('#carIcon').click(function () {
        $('#elephantIcon').attr('src', '../img/22/index/ch02_icon_elephant_dark.png');
        $('#cruiseShipIcon').attr('src', '../img/22/index/ch02_icon_cruise_ship_dark.png');
        $('#planeIcon').attr('src', '../img/22/index/ch02_icon_plane_dark.png');
        $(this).attr('src', '../img/22/index/ch02_icon_car_light.png');
        $('#conversionNumBlock01, #conversionNumBlock02, #conversionNumBlock03, #ch02Bg01, #ch02Bg02, #ch02Bg03').css({ 'display': 'none' });
        $('#ch02Bg04, #conversionNumBlock04').css({ 'display': 'flex' });
    });

});

// lightslider控制項目：第三章
$(document).ready(function () {
    $('#solganCarouselList').lightSlider({
        item: 3,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        auto: false,
        controls: false,
        pager: false,
        speed: 1000,
        freeMove: false,
        enableDrag: false,
        responsive: [
            {
                breakpoint: 1299,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                    controls: true,
                    pager: true,
                    freeMove: true,
                    enableDrag: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 6,
                    controls: true,
                    pager: true,
                    freeMove: true,
                    enableDrag: true,
                }
            }
        ]
    });
});


const vm = new Vue({
    el: '#productCarouselList',
    data: {
        tableData: null
    },

    mounted() {

        const self = this;

        // 取得商城商品
        this.queryData('../PHP/Frontend/EC_07/storeCard.php');

    },
    updated() {

        // lightslider控制項目：第四章
        $('#productCarouselList').lightSlider({
            item: 3,
            loop: true,
            slideMove: 1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 3000,
            pause: 5000,
            auto: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        item: 2,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        item: 1,
                        slideMove: 1
                    }
                }
            ]
        });
    },

    methods: {

        queryData(url, data = null) {
            const self = this

            if (self.tableData !== null) {
                // 清除 interval
                for (let index = 0; index < self.tableData.length; index++) {
                    clearInterval(self.tableData[index].timer)
                    self.tableData[index].timer = null
                }
            }

            $.ajax({
                url,
                data,
                type: 'POST',
                success: function (res) {

                    // console.log(res);

                    res.splice(6);

                    for (let index = 0; index < res.length; index++) {

                        res[index].quantity = 0
                        res[index].hours = 0
                        res[index].days = 0
                        res[index].minutes = 0
                        res[index].seconds = 0
                        res[index].timer = null
                        res[index].PRODUCT_IMG = window.atob(res[index].PRODUCT_IMG)

                        // console.log(window.btoa(res[index].PRODUCT_IMG) )
                    }
                    // self.$forceUpdate() 強制更新 vue data

                    self.tableData = res;

                    for (let index = 0; index < self.tableData.length; index++) {


                        const updateTime = () => {
                            var now = new Date();
                            var difference = new Date(self.tableData[index].PRODUCT_EXP_DATE) - now.getTime();

                            if (difference <= 0) {

                            } else {

                                var seconds = Math.floor(difference / 1000);
                                var minutes = Math.floor(seconds / 60);
                                var hours = Math.floor(minutes / 60);
                                var days = Math.floor(hours / 24);

                                hours %= 24;
                                minutes %= 60;
                                seconds %= 60;

                                self.tableData[index].hours = hours
                                self.tableData[index].days = days
                                self.tableData[index].minutes = minutes
                                self.tableData[index].seconds = seconds
                            }
                        }
                        clearInterval(self.tableData[index].timer)

                        self.tableData[index].timer = setInterval(updateTime, 1000)

                    }
                },
                error: function (res, error) {
                    console.log(res, error);
                },
                dataType: 'JSON',
            })
        }

    }

})