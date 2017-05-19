loadCss("../../../Common/css/bootstrap/bootstrap-cerulean.css");
loadCss("../../../Common/css/bootstrap/bootstrap-responsive.css");
loadCss("../../../Common/css/bootstrap/charisma-app.css");
loadCss("../../../Common/css/jquery/jquery-ui-1.8.21.custom.css");
loadCss("../../../Common/css/6cweb/fullcalendar.css");
loadCss("../../../Common/css/6cweb/fullcalendar.print.css");
loadCss("../../../Common/css/6cweb/chosen.css");
loadCss("../../../Common/css/6cweb/uniform.default.css");
loadCss("../../../Common/css/6cweb/colorbox.css");
loadCss("../../../Common/css/jquery/jquery.cleditor.css");
loadCss("../../../Common/css/jquery/jquery.noty.css");
loadCss("../../../Common/css/6cweb/noty_theme_default.css");
loadCss("../../../Common/css/6cweb/elfinder.min.css");
loadCss("../../../Common/css/6cweb/elfinder.theme.css");
loadCss("../../../Common/css/jquery/jquery.iphone.toggle.css");
loadCss("../../../Common/css/6cweb/opa-icons.css");
loadCss("../../../Common/css/6cweb/uploadify.css");
loadCss("../../../Common/css/flexigrid/flexigrid.pack.css");
loadCss("../../../Common/css/zTreeStyle/zTreeStyle.css");
loadCss("../../../Common/js/jb51/multiselectSrc/jquery.multiselect.css");


loadJs("../../../Common/js/jquery/jquery-1.7.2.min.js");
loadJs("../../../Common/js/Echarts/2.0/esl.js");
loadJs("../../../Common/js/jquery/jquery-ui-1.8.21.custom.min.js");
loadJs("../../../Common/js/bootstrap/bootstrap-modal.js");
loadJs("../../../Common/js/bootstrap/bootstrap-tab.js");
loadJs("../../../Common/js/bootstrap/bootstrap-tooltip.js");
loadJs("../../../Common/js/bootstrap/bootstrap-popover.js");
loadJs("../../../Common/js/bootstrap/bootstrap-button.js");
loadJs("../../../Common/js/bootstrap/bootstrap-collapse.js");
loadJs("../../../Common/js/jquery/jquery.cookie.js");
loadJs("../../../Common/js/jquery/fullcalendar.min.js");
loadJs("../../../Common/js/jquery/jquery.dataTables.min.js");
loadJs("../../../Common/js/jquery/jquery.chosen.min.js");
loadJs("../../../Common/js/jquery/jquery.uniform.min.js");
loadJs("../../../Common/js/jquery/jquery.colorbox.min.js");
loadJs("../../../Common/js/jquery/jquery.cleditor.min.js");
loadJs("../../../Common/js/jquery/jquery.elfinder.min.js");
loadJs("../../../Common/js/jquery/jquery.raty.min.js");
loadJs("../../../Common/js/jquery/jquery.iphone.toggle.js");
loadJs("../../../Common/js/jquery/jquery.autogrow-textarea.js");
loadJs("../../../Common/js/jquery/jquery.uploadify-3.1.min.js");
loadJs("../../../Common/js/jquery/jquery.history.js");
loadJs("../../../Common/js/My97DatePicker/WdatePicker.js");
loadJs("../../../Common/js/6cweb/xmlHttpHelper.js");
loadJs("../../../Common/js/6cweb/MasterJs.js");
loadJs("../../../Common/js/flexigrid/flexigrid.pack.js");

function loadJs(url, callback) {
//    var done = false;
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.language = 'javascript';
//    script.src = url;
//    script.onload = script.onreadystatechange = function () {
//        if (!done && (!script.readyState || script.readyState == 'loaded' || script.readyState == 'complete')) {
//            done = true;
//            script.onload = script.onreadystatechange = null;
//            if (callback) {
//                callback.call(script);
//            }
//        }
//    }
    //    document.getElementsByTagName("head")[0].appendChild(script);


    document.write('<script src="' + url + '" type="text/javascript"></sc' + 'ript>');
   

}

function runJs(url, callback) {
    loadJs(url, function () {
        document.getElementsByTagName("head")[0].removeChild(this);
        if (callback) {
            callback();
        }
    });
}

function loadCss(url, callback) {
//    var link = document.createElement('link');
//    link.rel = 'stylesheet';
//    link.type = 'text/css';
//    link.media = 'screen';
//    link.href = url;
//    document.getElementsByTagName('head')[0].appendChild(link);
//    if (callback) {
//        callback.call(link);
    //    }
     
    document.write('<link href="' + url+'" rel="stylesheet" type="text/css" />');

}