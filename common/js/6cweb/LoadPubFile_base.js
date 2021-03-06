﻿/// <reference path="../../../C3/PC/MAlarmMonitoring/js/locoselect.js" />
/// <reference path="../../../C3/PC/MAlarmMonitoring/js/locoselect.js" />


loadJs("/Common/js/jquery/jquery-1.7.2.min.js"); //jquery主文件
loadJs("/Common/js/6cweb/xmlHttpHelper.js"); //ajax
loadJs("/Common/js/6cweb/MasterJs.js?r=" + Math.random()); //公共方法
loadCss("/Common/css/bootstrap/bootstrap-cerulean.css");
loadCss("/Common/css/bootstrap/bootstrap-responsive.css");
loadCss("/Common/css/bootstrap/charisma-app.css");
loadCss("/Common/css/master.css");
loadJs("/Common/js/bootstrap/bootstrap.min.js");

loadJs("/Common/js/jquery/jquery.cookie.js"); //cookie

loadJs("/Common/js/My97DatePicker/WdatePicker.js"); //日期控件
loadJs("/Common/js/progress/lib.js"); //下载控件

//弹出框
loadCss("/Common/css/skin/qq/ymPrompt.css");
loadJs("/Common/js/6cweb/ymPrompt.js");

//全屏加载效果
loadJs("/Common/js/CommonPerson/CommonPerson.js");
loadCss("/Common/js/CommonPerson/CommonPerson.css");

//弹出窗口，加载效果也需要。
loadCss("/Common/js/lightbox/themes/default/jquery.lightbox.css");
loadJs("/Common/js/lightbox/jquery.lightbox.min.js");




function SetEchart() {
    require.config({
        paths: {
            'echarts': '/Common/js/Echarts/2.0/echarts',
            'echarts/chart/line': '/Common/js/Echarts/2.0/echarts'
        }
    });
};


//loadJs("/Common/js/bootstrap/bootstrap-modal.js");
//loadJs("/Common/js/bootstrap/bootstrap-tab.js");
//loadJs("/Common/js/bootstrap/bootstrap-tooltip.js");
//loadJs("/Common/js/bootstrap/bootstrap-popover.js");
//loadJs("/Common/js/bootstrap/bootstrap-button.js");
//loadJs("/Common/js/bootstrap/bootstrap-collapse.js");

//loadCss("/Common/css/6cweb/fullcalendar.css");
//loadJs("/Common/js/jquery/fullcalendar.min.js"); // calander plugin 依赖

//loadCss("/Common/css/jquery/jquery.cleditor.css");
//loadJs("/Common/js/jquery/jquery.cleditor.min.js"); //rich text editor library 依赖

//loadCss("/Common/css/6cweb/elfinder.min.css");
//loadCss("/Common/css/6cweb/elfinder.theme.css");
//loadJs("/Common/js/jquery/jquery.elfinder.min.js"); //file manager library 依赖

//loadCss("/Common/css/jquery/jquery.iphone.toggle.css");
//loadJs("/Common/js/jquery/jquery.iphone.toggle.js"); // for iOS style toggle switch 依赖

//loadJs("/Common/js/jquery/jquery.autogrow-textarea.js"); //autogrowing textarea plugin 依赖

//loadCss("/Common/css/6cweb/colorbox.css");
//loadJs("/Common/js/jquery/jquery.colorbox.min.js"); //plugin for gallery image view 依赖

//loadJs("/Common/js/jquery/jquery.dataTables.min.js"); //data table plugin 依赖

//loadCss("/Common/css/6cweb/chosen.css");
//loadJs("/Common/js/jquery/jquery.chosen.min.js"); //select or dropdown enhancer 依赖

//loadCss("/Common/css/6cweb/uniform.default.css");
//loadJs("/Common/js/jquery/jquery.uniform.min.js"); //checkbox, radio, and file input styler 依赖

//loadJs("/Common/js/jquery/jquery.history.js"); //history.js for cross-browser state change on ajax 依赖

//loadJs("/Common/js/jquery/jquery.raty.min.js"); //star rating plugin 依赖

//loadCss("/Common/css/6cweb/uploadify.css");
//loadJs("/Common/js/jquery/jquery.uploadify-3.1.min.js"); //multiple file upload plugin 依赖








function loadJs(url, charset) {
    if (charset == undefined)
        document.write('<script src="' + url + '" type="text/javascript" charset="gbk"></script>');
    else
        document.write('<script src="' + url + '" type="text/javascript" charset="' + charset + '"></script>');
};


function loadCss(url, callback) {
    document.write('<link href="' + url + '" rel="stylesheet" type="text/css" />');

     
};
