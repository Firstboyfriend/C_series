/*========================================================================================*
* 功能说明：放大镜
* 作    者： zzj
* 版本日期：2014.11.13
* 参数说明：

float: 'left'|"right"   放大效果在左，还是右
defaultImg: '../MAlarmMonitoring/ImgTmp/big.jpg',  //大图片原地址 
ImgW: 2448,                  //原始图片宽
ImgH: 2050,                 //原始图片高
dispW: w,                  //显示容器宽
dispH: h,                  //显示容器高
TopAdd:50                //放大镜区域top调整。 
*=======================================================================================*/


function change2(obj, img) {

    obj.find('.myzoom_show').find('img').attr('src', img);
    obj.find('.myzoom').find('img').attr('src', img);

}

//$(function () {



//    $(".showbox").myZoom({
//        float: 'left',
//        defaultImg: 'img/big.jpg',
//        ImgW: 2448,                  //原始图片宽
//        ImgH: 2050,                 //原始图片高
//        dispW: 300,                  //显示容器大小
//        dispH: 300
//    });


//});


; (function ($) {
    $.fn.myZoom = function (options) {
        var defs = {
            markSize: [200, 200],          //放大镜宽高,
            float: 'right',
            zoomSize: [400, 400],          //需要放大的区域宽高               
            zoomImg: [800, 800],            //需要放大的区域的图片的宽高            
            defaultImg: '/img/big.jpg',      //默认图片,用于计算放大镜大小。
            ImgW: 2448,                  //原始图片宽
            ImgH: 2050,                  //原始图片高        
            TopAdd:0                    //放大镜区域调整。 
        };
        var opt = $.fn.extend({}, defs, options);
        return this.each(function () {

            var thisID=$(this).attr('id');

            $(this).html('<div class="myzoom_show"></div><div class="myzoom"></div>');
            $(this).find('.myzoom_show').html('<img src="img/big.jpg"/>');
            $(this).find('.myzoom').html('<img src="img/big.jpg"/>');


            var w = opt.dispW;
            var h = opt.dispH;

            $(this).find('.myzoom_show').css({ width: opt.dispW + 'px', height: opt.dispH + 'px', overflow: 'hidden', position: 'relative', left: '0' });
            $(this).find('.myzoom_show').find('img').css({ width: opt.dispW + 'px', height: opt.dispH + 'px' }).attr('src', opt.defaultImg);
            $(this).find('.myzoom').css({ position: 'absolute', left: (opt.dispW + 5) + 'px', top: '0', 'z-index': '3', width: opt.dispW + 'px', height: opt.dispH + 'px', display: 'none', overflow: 'hidden', border: '1px solid #eee' });
            $(this).find('.myzoom').find('img').css({ position: 'absolute', left: '0', top: '0' }).attr('src', opt.defaultImg);


            var markBox = $(this).find('.myzoom_show');
            var zoomBox = $(this).find('.myzoom'); //(opt.zoomBox);
            var zoom_img = zoomBox.find("img");
            var markBoxSize = [markBox.width(), markBox.height(), markBox.offset().left, markBox.offset().top];
            var markSize = opt.markSize;
            //   var zoomSize = opt.zoomSize;
            var zoomImg = opt.zoomImg;

            var baseW = w; //$(this).width();
            var baseH = h; //$(this).height();


            //            if(opt.autoCountmarkSizeSize)
            //            {
            //                var theImage = new Image();
            //                $('#tempImg').attr('src',opt.defaultImg);
            //                theImage.src = $('#tempImg').attr('src');
            //                zoomImg[0] = theImage.width;
            //                zoomImg[1] = theImage.height;
            //                //计算marksize
            //            }

            zoomImg[0] = opt.ImgW;
            zoomImg[1] = opt.ImgH;

            //计算marksize
            markSize[0] = baseW / zoomImg[0] * baseW;
            markSize[1] = baseH / zoomImg[1] * baseH;

            var mark_ele = "<i class='myzoom_mark'></i>";
            var mark_css = { position: "absolute", top: 0, left: 0, width: markSize[0] + "px", height: markSize[1] + "px", backgroundColor: "#000", opacity: .5, filter: "alpha(opacity=50)", display: "none", cursor: "crosshair" };



            var show_w = markBoxSize[0] - markSize[0];
            var show_h = markBoxSize[1] - markSize[1];


            //created mark element and add cascading style sheets
            zoomBox.css({ width: baseW + "px", height: baseH + "px" });

            if (opt.float == "left") {
                var p = getPosition(this);
                zoomBox.css({ left: p.left - $(this).find('.myzoom_show').width() + "px", top: p.top });
            }

            markBox.append(mark_ele);


            var markObj = markBox.find('.myzoom_mark');
            markObj.css(mark_css);

            markBox.mouseover(function () {
                markObj.show();
                zoomBox.show();
            }).mouseout(function () {
                markObj.hide();
                zoomBox.hide();
            }).mousemove(function (e) {
                var l = e.pageX - markBoxSize[2] - (markSize[0] / 2);
                var t = e.pageY - markBoxSize[3] - (markSize[1] / 2);
                if (l < 0) {
                    l = 0;
                } else if (l > show_w) {
                    l = show_w;
                }
                if (t < 0) {
                    t = 0;
                } else if (t > show_h) {
                    t = show_h;
                }

                t=t+opt.TopAdd;

                markObj.css({ left: l + "px", top: t + "px" });

                var z_x = -(l / show_w) * (zoomImg[0] - baseW);
                var z_y = -(t / show_h) * (zoomImg[1] - baseH);
                zoom_img.css({ left: z_x + "px", top: z_y + "px" });
            });
        });



    }

    $.fn.myZoom.setImg = function (big, small) {

        var markBox = $(this).find('.myzoom_show').find('img').attr('src', small);
        var zoomBox = $(this).find('.myzoom').find('img').attr('src', big);

    }

    function getPosition(obj) {
    var topValue = 0, leftValue = 0;
    while (obj) {
        leftValue += obj.offsetLeft;
        topValue += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return {
        left: leftValue,
        top: topValue
    };
}

})(jQuery);


