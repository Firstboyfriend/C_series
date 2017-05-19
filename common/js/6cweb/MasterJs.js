//document.write('<link rel="shortcut icon" type="image/ico" href="/favicon.ico">');
IS_POWER_SECTION_USER = false;
var M_DC_ShowSpeed = true;
var version = "v_3.7.10.87"; //JS版本号
IsVersion();

//document.write('<link href="/Common/css/6cweb/alarmWindow.css?r=' + version + '" rel="stylesheet" type="text/css"/>');
document.write('<link href="/C3/PC/css/scrollStyle.css?r=' + version + '" rel="stylesheet" type="text/css"/>');
// 车头上标签样式
var labelMark_style = {
    color: "#3436D9",
    fontSize: "14px",
    'border-radius': '5px',
    backgroundColor: "rgba(250,249,249,0.8)",
    padding: "3px",
    border: "0",
    fontWeight: "bold"
};

var Ico_Loca_DC = "/C3/PC/MRTA/css/img/动车.png";
var Ico_Loca_JC = "/C3/PC/MRTA/css/img/机车.png";
var Ico_Loca_Width = 29.6;
var Ico_Loca_Height = 32;

var Ico_alarm_width = 25;
var Ico_alarm_heigth = 25;
var Ico_alarm_left = 0;
var Ico_alarm_top = -15;


$(function () {
    $('.btn-minimize').click(function (e) {
        e.preventDefault();
        var $target = $(this).parent().parent().next('.box-content');
        if ($target.is(':visible')) $('i', $(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
        else $('i', $(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
        $target.slideToggle();
    });
    urlControl_new();
});

//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};


//版本号判断
function IsVersion() {

    var p_v = getQueryString("v");


    if (p_v == null) {

        if (location.href.indexOf('?') > -1) {
            window.location.href = location.href + '&v=' + version;
        }
        else {
            window.location.href = location.href + '?v=' + version;
        }

    }
    else if (p_v != version) {
        window.location.href = location.href.replace('v=' + getQueryString("v"), 'v=' + version);
    }
    else {

    }

};


function showBox(_title, _src, _w, _h) {

    if ($('#MyShowBox').length == 0) {

        $("body").append('<div id="MyShowBox" style="display:none"  class="modal fade"  role="dialog" >        <div style="width:800px" class="modal-dialog ">            <div class="modal-header">                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>                <h4 class="modal-title" >' + _title + '</h4>            </div>            <div class="modal-content">                <iframe id="iframe_MyShowBox" src="' + _src + '" frameborder="0" height="180" width="100%"></iframe>            </div>        </div>    </div>');


        //<div class="modal-footer">\
        //    <button type="button" id="btn_closeMyShowBox" class="btn btn-default" data-dismiss="modal">关闭</button>\
        //</div>\

    }
    else {
        $('#iframe_MyShowBox').attr('src', _src);
    }


    if (_w != undefined)
        $('#MyShowBox>modal-dialog').width(_w);

    if (_h != undefined)
        $('#iframe_MyShowBox').height(_h);


    $('#MyShowBox').modal().css({
        width: 'auto',
        'margin-left': function () {
            return -($(this).width() / 2);
        },
        'margin-top': function () {
            return -($(this).height() / 2);
        }
    });

};


//打开图片
function showImg(str) {
    top.location = str;
    //window.open(str, 'imgnewwindow', 'height=200, width=380,top=200,left=200,toolbar=no,scrollbars=no,menubar=no,resizable=no,status=no,location=no')
};

//打开图片
function show1Img(str) {

    window.open(str, 'imgnewwindow', 'height=200, width=380,top=200,left=200,toolbar=no,scrollbars=no,menubar=no,resizable=no,status=no,location=no');
};
//打开全屏窗口
function ShowWinOpen(str) {
    window.open(str, "_blank");
    //var h = window.screen.height;
    //var w = window.screen.width;
    //window.open(str, 'newwindow', 'height=' + h + ', width=' + w + ',top=0,left=0,toolbar=no,scrollbars=yes,fullscreen=yes,menubar=no,resizable=no,status=no,location=no')
};
//打开全屏窗口
function ShowWinOpenNew(str, name) {
    var h = window.screen.height;
    var w = window.screen.width;
    window.open(str, name, 'height=' + h + ', width=' + w + ',top=0,left=0,toolbar=no,scrollbars=yes,fullscreen=yes,menubar=no,resizable=no,status=no,location=no');
};
//打开屏幕一半窗口
function ShowWinOpenhw1(str) {
    var w2 = window.screen.width / 1.5;
    var h = window.screen.height - 300;
    var w = window.screen.width;
    window.open(str, 'newwindows', 'height=' + h + ', width=' + w2 + ',top=0,left=' + w2 + ',toolbar=no,scrollbars=yes,menubar=no,resizable=no,status=no,location=no');
};

//打开屏幕一半窗口
function ShowWinOpenhw(str) {
    var w2 = window.screen.width / 2;
    var h = window.screen.height - 200;
    var w = window.screen.width;
    window.open(str, 'newwindows', 'height=' + h + ', width=' + w2 + ',top=0,left=' + w2 + ',toolbar=no,scrollbars=yes,menubar=no,resizable=no,status=no,location=no');
};

//全选
function selectAll(f, mode) {
    if (mode == true) {
        for (i = 0; i < f.length; i++) {
            if (f.elements[i].type == "checkbox") {
                f.elements[i].checked = true;
            }
        }
    }
    else {
        for (i = 0; i < f.length; i++) {
            if (f.elements[i].type == "checkbox") {
                f.elements[i].checked = false;
            }
        }
    }
};
//JS获取URL参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};

//指定页面区域内容导出Word str 为控件ID
function AllAreaWord(str) {
    try {
        var oWD = new ActiveXObject("Word.Application"); //创建Word应用程序对象oWD
    } catch (e) {
        alert("无法调用Office对象，请确保您的机器已安装了Office并已将本系统的站点名加入到IE的信任站点列表中！");
        return;
    }
    var oDC = oWD.Documents.Add("", 0, 1);
    var oRange = oDC.Range(0, 1);
    var sel = document.body.createTextRange(); ;
    sel.moveToElementText(str);
    sel.select();
    sel.execCommand("Copy");
    oRange.Paste();
    oWD.Application.Visible = true;
    oWD.ActiveWindow.ActivePane.View.Type = 3;
    oWD.Application.close;
};

//指定页面区域内容导出Excel str 为控件ID
function AllAreaExcel(str) {
    try {
        var oXL = new ActiveXObject("Excel.Application"); //创建Excel应用程序对象oXL
    } catch (e) {
        alert("无法调用Office对象，请确保您的机器已安装了Office并已将本系统的站点名加入到IE的信任站点列表中！");
        return;
    }
    var oWB = oXL.Documents.Add("", 0, 1);
    var oRange = oWB.Range(0, 1);
    var sel = document.body.createTextRange(); ;
    sel.moveToElementText(str);
    sel.select();
    sel.execCommand("Copy");
    oRange.Paste();
    oXL.Application.Visible = true;
    oXL.ActiveWindow.ActivePane.View.Type = 3;
    oXL.Application.close;
};
//屏蔽JS错误
//window.onerror = function () { return true; };
//获取样式
//src css地址
//i 需要替换bootstrapcss的地址 j需要替换flexigridcss的地址
function setActiveStyleSheet(src, i, j, k) {
    var h = window.screen.width;
    var title;
    if (h == "1600") {
        title = src + "bootstrap.css";
    }
    else {
        title = src + "bootstrap.css";
    }
    document.getElementsByTagName("link")[i].href = title;
    if (j != -1) {
        var url;
        if (h == "1600") {
            url = src + "flexigrid.pack.css";
        }
        else {
            url = src + "flexigrid.pack.css";
        }
        document.getElementsByTagName("link")[j].href = url;
    }
    if (k != undefined) {
        var treecss;
        if (h == "1600") {
            treecss = src + "zTreeStyle/zTreeStyle.css";
        }
        else {
            treecss = src + "zTreeStyle/zTreeStyle.css";
        }
        document.getElementsByTagName("link")[k].href = treecss;
    }
};
//列表控件高
var flexTableh;
if (window.screen.height == 768) {
    flexTableh = window.screen.height - 390;
} else {
    flexTableh = window.screen.height - 410;
};
//
var flexTablebh = 380;
//列表控件宽12
var flexTablew = window.screen.width - 50;
//占页面10
var flextablespan10 = window.screen.width / 12 * 10 - 70;
//占页面一半
var flexTablebw = window.screen.width / 2 - 70;
//显示数据条数
var PageNum = 30;
//无菜单表高度
var flexTableballh = window.screen.height - 100;

var heightspan6 = window.screen.height / 2 - 50;
//获取当前页Url
function GetwindowUrl() {
    alert(window.location.href);
};

//获取当前系统日期
function dateNowStr() {
    var d = new Date();
    d.setDate(d.getDate());
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + d.getDate()).slice(-2) + " ";
    return ret;
};
//获取当前系统日期
function dateMonthNowStr() {
    var d = new Date();
    d.setDate(d.getDate());
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2);
    return ret;
};

//获取当前系统日期
function _dateMonthNowStr() {
    //    var d = new Date();
    //    d.setDate(d.getDate());
    //    var ret = d.getFullYear() + "-"
    //    ret += ("00" + (d.getMonth() - 5)).slice(-2)

    var d = DateAddORSub("m", "-", 5);

    var ret = d.getFullYear() + "-" + d.getMonth();

    return ret;
};


//获取当前系统日期前后几天  --2015-11-21 by lc
function getDateStr(date, day) {
    if (day == null)
        day = 0;
    var d = new Date(date);
    d.setDate(d.getDate() + day);
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + (d.getDate())).slice(-2);
    return ret;
};
//获取当前系统日期前后几天  --2015-11-21 by lc
function getDateStr_day(date, day) {
    if (day == null)
        day = 0;
    var d = new Date(date);
    d.setDate(d.getDate() + day);
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + d.getDate()).slice(-2) + " ";
    ret += ("00" + d.getHours()).slice(-2) + ":";
    ret += ("00" + d.getMinutes()).slice(-2) + ":";
    ret += ("00" + d.getSeconds()).slice(-2) + " ";
    return ret;
};
//获取当前系统日期 传递任意后缀
function datehhmm00NowStr(str) {
    var d = new Date();
    d.setDate(d.getDate());
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + d.getDate()).slice(-2) + " ";
    ret += str;
    return ret;
};
//获取当前系统日期
function datehhssNowStr() {
    var d = new Date();
    d.setDate(d.getDate());
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + d.getDate()).slice(-2) + " ";
    ret += ("00" + d.getHours()).slice(-2) + ":";
    ret += ("00" + d.getMinutes()).slice(-2) + ":";
    ret += ("00" + d.getSeconds()).slice(-2) + " ";
    return ret;
};
//获取当前系统次日日期
function CdatehhssNowStr() {
    var d = new Date();
    d.setDate(d.getDate());
    var ret = d.getFullYear() + "-";
    ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
    ret += ("00" + (d.getDate() + 1)).slice(-2) + " ";
    ret += ("00" + d.getHours()).slice(-2) + ":";
    ret += ("00" + d.getMinutes()).slice(-2) + ":";
    ret += ("00" + d.getSeconds()).slice(-2) + " ";
    return ret;
};
//获取一个月前日期
function dateLastMonthStr() {
    var beforeDate = new Date();
    beforeDate.setTime(beforeDate.getTime() - 1000 * 60 * 60 * 24 * 30);
    var strYear2 = beforeDate.getFullYear();
    var strMon2 = beforeDate.getMonth() + 1;
    var strDate2 = beforeDate.getDate();
    var ret = strYear2 + "-" + ("00" + strMon2).slice(-2) + "-" + ("00" + strDate2).slice(-2) + " ";
    return ret;
};

//获取一周前日期
function datelastMonthhhssNowStr() {
    var beforeDate = new Date();
    beforeDate.setTime(beforeDate.getTime() - 1000 * 60 * 60 * 24 * 7);
    var strYear2 = beforeDate.getFullYear();
    var strMon2 = beforeDate.getMonth() + 1;
    var strDate2 = beforeDate.getDate();
    var ret = strYear2 + "-" + ("00" + strMon2).slice(-2) + "-" + ("00" + strDate2).slice(-2) + " ";
    ret += ("00" + beforeDate.getHours()).slice(-2) + ":";
    ret += ("00" + beforeDate.getMinutes()).slice(-2) + ":";
    ret += ("00" + beforeDate.getSeconds()).slice(-2) + " ";
    return ret;
};

//获取一周前日期
function datelastWeekNowStr() {
    var beforeDate = new Date();
    beforeDate.setTime(beforeDate.getTime() - 1000 * 60 * 60 * 24 * 7);
    var strYear2 = beforeDate.getFullYear();
    var strMon2 = beforeDate.getMonth() + 1;
    var strDate2 = beforeDate.getDate();
    var ret = strYear2 + "-" + ("00" + strMon2).slice(-2) + "-" + ("00" + strDate2).slice(-2) + " ";
    return ret;
};
//加载下拉默认值
function LoadDropdSelected(dropdid, selectedStr) {
    var dropd = document.getElementById(dropdid);
    for (var i = 0; i < dropd.length; i++) {
        if (dropd[i].text == selectedStr) {
            dropd[i].selected = true;
        }
    }
};
//加载下拉默认值
function LoadDropdSelectedByValue(dropdid, selectedValue) {
    var dropd = document.getElementById(dropdid);
    for (var i = 0; i < dropd.length; i++) {
        if (dropd[i].value == selectedValue) {
            dropd[i].selected = true;
        }
    }
};

//设置DIV高度超出出现滚动条
function setDivheight(divid) {
    var div = document.getElementById(divid);
    div.style.height = heightspan6;
    div.style.overflow = "auto";
};

//////////////////////////设置DIV位置//////////////////////
var tips; var theTop = 10/*这是默认高度*/; var old = theTop;
function initFloatTips(divid) {
    tips = document.getElementById(divid);
    moveTips();
};
//改变DIV位置
function moveTips() {
    var tt = 10;
    if (window.innerHeight) {
        pos = window.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop) {
        pos = document.documentElement.scrollTop;
    }
    else if (document.body) {
        pos = document.body.scrollTop;
    }
    pos = pos - tips.offsetTop + theTop;
    pos = tips.offsetTop + pos / 10;
    if (pos < theTop) pos = theTop;
    if (pos != old) {
        tips.style.top = pos + "px";
        tt = 10;
    }
    old = pos;
    setTimeout(moveTips, tt);
};





//
//  下拉综合类
//

(function ($) {
    $.fn.mySelect = function (p) {
        p = $.extend({
            ////下拉实体类型(不区分大小写) 
            //tag:“ORGANIZATION”：组织机构    //   code:机构编码       //  type:机构类型
            //tag:“USER”:用户                 //   code:机构编码       //  type：true查询机构下（包含下属机构）所有用户，false查询当前机构下的用户
            //tag:"LOCOMOTIVE":机车             //   code:机构编码
            //tag:“STATIONSECTION”：区站      //   code:线路编码       //  type:区站类型 S（站） Q（区间） // name:下拉模糊查询名称

            //tag:“SUBSTATION”：变电所        //   code:线路编码
            //tag:“SUBSTATIONBYORG”：变电所   //   code:组织机构编码
            //tag:“LINE”：线路 （无参数）
            //tag:“BRIDGETUNE”：桥隧          //   code:区站编码
            //tag:"SYSDICTIONARY":字典          //   code:字典编码
            defaultValue: "0",          //默认选择项的值
            defaultText: "全部",        //默认选择项的名称
            tag: "ORGANIZATION",
            code: "",                   //代码
            type: "",                   //类型
            name: "",                   //名称（模态查询参数）
            flag: false,                //HINT标志
            url: "/Common/RemoteHandlers/GetSelects.ashx",
            async: true,
            callback: false,
            onError: false              //错误事件
        }, p);
        var t = this;
        var param = [{ name: 'tag', value: p.tag },
                    { name: 'code', value: p.code },
                    { name: 'type', value: p.type },
                    { name: 'name', value: p.name },
                    { name: 'defaultValue', value: p.defaultValue },
                    { name: 'defaultText', value: p.defaultText },
                    { name: 'flag', value: p.flag}];
        $.ajax({
            type: "POST",
            url: p.url,
            async: p.async,
            cache: true,
            data: param,
            success: function (result) {
                if (result == "-1") {
                    ymPrompt.errorInfo('服务器发生错误，请与系统管理员联系！', null, null, '错误信息', null); return;
                }
                t.html(result);
                if (p.callback) {
                    p.callback(result);
                }
            }
        });
        return t;
    };
})(jQuery);


//
//  下拉组织机构联动封装
//  jid:局下拉控件
//  did:段下拉控件
//  cid：车间下拉控件
//  gid：工区下拉控件
//  dtype:段类型
//  ctype:车间类型
//  可缺省参数 null
function loadOrgSelect(jid, did, cid, gid, dtype) {
    var null_option = "<option value='0'>全部</option>";
    $("#" + jid).mySelect({
        tag: "Organization", code: "TOPBOSS", type: "J"
    }).change(function () {
        if (!jid) return;
        var jcode = $(this).val();
        if (jcode == "0") {
            $("#" + did).html(null_option);
            $("#" + cid).html(null_option);
            $("#" + gid).html(null_option);
        }
        else {
            $("#" + did).mySelect({
                tag: "Organization",
                code: jcode,
                type: dtype || "GDD",
                callback: function (rs) {
                    $("#" + cid).html(null_option);
                    $("#" + gid).html(null_option);
                }
            }).change(function () {
                if (!cid) return;
                var dcode = $(this).val();
                if (dcode == "0") {
                    $("#" + cid).html(null_option);
                    $("#" + gid).html(null_option);
                }
                else {
                    $("#" + cid).mySelect({
                        tag: "Organization",
                        code: dcode,
                        callback: function (rs) {
                            $("#" + gid).html(null_option);
                        }
                    }).change(function () {
                        if (!gid) return;
                        var gcode = $(this).val();
                        if (gcode == "0") {
                            $("#" + gid).html(null_option);
                        }
                        else {
                            $("#" + gid).mySelect({
                                tag: "Organization",
                                code: gcode
                            });
                        }
                    });
                }
            });
        }
    });
};

//  下拉组织机构联动封装
//  jid:局下拉控件
//  did:段下拉控件
//  cid：线路下拉控件
//  可缺省参数 null
function loadOrgSelect1(jid, did, cid, dtype) {
    var null_option = "<option value='0'>全部</option>";
    $("#" + jid).mySelect({
        tag: "Organization", code: "TOPBOSS", type: "J"
    }).change(function () {
        if (!jid) return;
        var jcode = $(this).val();
        if (jcode == "0") {
            $("#" + did).html(null_option);
            $("#" + cid).html(null_option);
        }
        else {
            $("#" + did).mySelect({
                tag: "Organization",
                code: jcode,
                type: dtype || "GDD",
                callback: function (rs) {
                    $("#" + cid).html(null_option);
                }
            }).change(function () {
                if (!cid) return;
                var dcode = $(this).val();
                if (dcode == "0") {
                    $("#" + cid).html(null_option);
                }
                else {
                    $("#" + cid).mySelect({
                        tag: "Line6C",
                        code: dcode
                    });
                }
            });
        }
    });
};


function toUrl(url, name) {
    // alert(url);
    document.getElementById('url').src = url;
    if (url == "MGIS/GIS.htm" || url == "MTopo/MainTopo.html") {
        ShutdownTime();
    } else {
        OnlodAlarm();
    }
    if (name != undefined) {
        document.getElementById('Iname').innerText = name;
    } else { document.getElementById('Iname').innerText = ""; }
};

//获取范围内的随机数
function random(min, max) {

    return Math.floor(min + Math.random() * (max - min));

};

///全屏
function toFullScreen(type) {
    if (type == "1") {
        document.getElementById("divcontent").style.display = "none";
        document.getElementById("divFunMenu").style.display = "none";
        document.getElementById("url").style.height = (window.screen.height - 100).toString() + "px";

    } else {
        document.getElementById("divcontent").style.display = "block";
        document.getElementById("divFunMenu").style.display = "block";
        document.getElementById("url").style.height = (window.screen.height - 220).toString() + "px";
    }
};

function getParamter() {
    var url = "/Common/RemoteHandlers/GetParamter.ashx?param=";
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });
    for (var i = 0; i < json.length; i++) {
        localStorage["Paramter_" + json[i].KEY] = json[i].VALUE;
    }
}

///获取配置参数
function getConfig(paramName) {

    switch (paramName) {
        case "debug":
            if (GetQueryString(paramName) != undefined) {
                return "1";
            }

            break;
    }

    var v = localStorage["Paramter_" + paramName];

    if (v != undefined) {
        return v;
    }
    var url = "/Common/RemoteHandlers/GetParamter.ashx?param=" + paramName;
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });

    localStorage["Paramter_" + paramName] = "";

    for (var i = 0; i < json.length; i++) {
        localStorage["Paramter_" + json[i].KEY] = json[i].VALUE;
    }
    v = localStorage["Paramter_" + paramName];
    return v;
};

function getLocalStorage(code) {
    return window.localStorage[code];
}

//获取当前用户
function getCurUser() {
    var url = "/Common/RemoteHandlers/DataPermissonControl.ashx?type=curuser";
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });
    return json;
};
//获取当前用户
function _getCurUser() {
    var url = "/Common/RemoteHandlers/DataPermissonControl.ashx?type=curuser";
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });
    return json;
};

//判断是否是供电段用户。
function GetIsPowerOrg() {
    //由于本地存储会自动转为字符串所以比较  字符串 "true"
    if (getLocalStorage("IS_POWER_SECTION_USER") == "True") {
        return "1";
    }
    else {
        return "";
    }
    //    var url = "/Common/RemoteHandlers/Pubic.ashx?type=IsPowerOrg";
    //    var json;
    //    $.ajax({
    //        type: "POST",
    //        url: url,
    //        async: false,
    //        cache: false,
    //        success: function (result) {
    //            json = result;
    //        }
    //    });
    //    return json;
};
//判断是否是几何参数缺陷。
function IsJHCS(dicName) {
    //    if ("AFJHCS,AFCODEDGZ,AFCODELCZ,AFCODEKNGC,AFCODELYLH".indexOf(dicName) > -1) {
    //        return true;
    //    }
    if ("几何参数缺陷,导高值超限,拉出值超限,跨内高差,压力和".indexOf(dicName) > -1) {
        return true;
    }
    return false;
}

function hideNoNeed() {
    if (getConfig('EnableTask') == '0') {
        document.getElementById("btnTask").style.display = "none";
        document.getElementById("mistask").style.display = "none";
    }

    var json = getCurUser();
    if (json == undefined) { json = _getCurUser(); }
    if (json != undefined) {
        if (json.role == 'READ_ONLY') {
            document.getElementById("btnOk").style.display = "none";
            document.getElementById("btnCan").style.display = "none";
            document.getElementById("btnTask").style.display = "none";
        }
    }
};
function getXbyLon(lon, CenterLon, CenterX, XUnit) {
    if (CenterX == "" || CenterX == undefined || CenterX == "null") {
        CenterX = getConfig('CenterX');
    }
    CenterX = parseFloat(CenterX);
    if (CenterLon == "" || CenterLon == undefined || CenterLon == "null")
        CenterLon = parseFloat(getConfig('CenterLon'));
    if (XUnit == "" || XUnit == undefined || XUnit == "null")
        XUnit = parseFloat(getConfig('XUnit'));
    var float_lon = parseFloat(lon);
    return CenterX + (float_lon - CenterLon) * XUnit;
}

function getYbyLat(lat, CenterLat, CenterY, YUnit) {
    if (CenterY == "" || CenterY == undefined || CenterY == "null") {
        CenterY = getConfig('CenterY');
    }
    CenterY = parseFloat(CenterY);
    if (CenterLat == "" || CenterLat == undefined || CenterLat == "null")
        CenterLat = parseFloat(getConfig('CenterLat'));
    if (YUnit == "" || YUnit == undefined || YUnit == "null")
        YUnit = parseFloat(getConfig('YUnit'));
    var float_lat = parseFloat(lat);
    return CenterY + (float_lat - CenterLat) * YUnit;
};

function addCookie(name, value, days, path) {   /**添加设置cookie**/
    var name = escape(name);
    var value = escape(value);
    var expires = new Date();
    expires.setTime(expires.getTime() + days * 3600000 * 24);
    //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用  
    path = path == "" ? "" : ";path=" + path;
    //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC  
    //参数days只能是数字型  
    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();
    document.cookie = name + "=" + value + _expires + path;
};

function getCookieValue(name) {  /**获取cookie的值，根据cookie的键获取值**/

    if (name == "SaveAlarms") {

        var _v = window.localStorage[name];

        if (_v == undefined) {
            _v = '';
        }

        return _v;
    }

    //用处理字符串的方式查找到key对应value  
    var name = escape(name);
    //读cookie属性，这将返回文档的所有cookie  
    var allcookies = document.cookie;
    //查找名为name的cookie的开始位置  
    name += "=";
    var pos = allcookies.indexOf(name);
    //如果找到了具有该名字的cookie，那么提取并使用它的值  
    if (pos != -1) {                                             //如果pos值为-1则说明搜索"version="失败  
        var start = pos + name.length;                  //cookie值开始的位置  
        var end = allcookies.indexOf(";", start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置  
        if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie  
        var value = allcookies.substring(start, end); //提取cookie的值  
        return (value);                           //对它解码        
    } else {  //搜索失败，返回空字符串  
        return "";
    }
};

function deleteCookie(name, path) {   /**根据cookie的键，删除cookie，其实就是设置其失效**/
    var name = escape(name);
    var expires = new Date(0);
    path = path == "" ? "" : ";path=" + path;
    document.cookie = name + "=" + ";expires=" + expires.toUTCString() + path;
};

var marcar = getConfig("marcar");    //  1; //是否为动车1/是0/否 未用 变量还需存在



function hideC3infobyID(divid) {
    if (marcar == 1) {
        document.getElementById(divid).style.display = "none";
    }
};
function MonitorindexJtopo() {
    window.location.href = "/Common/MTopo/LogicTopo.html?TPSmall=small&Category_Code=" + GetQueryString('Category_Code') + '&v=' + version;
    addCookie("TPSmall", "small", 1, "");
};
function MonitorindexGIS() {
    window.location.href = "/Common/MGIS/SmallGIS.htm?Category_Code=" + GetQueryString('Category_Code') + '&v=' + version;
};
function MonitorindexRepeatJtopo() {
    var alarmid = GetQueryString("alarmid");
    var linecode = GetQueryString("linecode");
    var xb = GetQueryString("xb");
    var startdate = GetQueryString("startdate");
    var enddate = GetQueryString("enddate");
    var distance = GetQueryString("distance");
    var count = GetQueryString("count");
    window.location.href = "../MTopo/RepeatJtopo.htm?linecode=" + linecode + "&xb=" + escape(xb) + "&startdate=" + startdate + "&enddate=" + enddate + "&distance=" + distance + "&count=" + count + '&v=' + version;
};
function MonitorindexRepeatGIS() {
    var alarmid = GetQueryString("alarmid");
    var linecode = GetQueryString("linecode");
    var xb = GetQueryString("xb");
    var startdate = GetQueryString("startdate");
    var enddate = GetQueryString("enddate");
    var distance = GetQueryString("distance");
    var count = GetQueryString("count");
    window.location.href = "/Common/MGIS/RepeatGIS.htm?Category_Code=DPC&linecode=" + linecode + "&xb=" + escape(xb) + "&startdate=" + startdate + "&enddate=" + enddate + "&distance=" + distance + "&count=" + count + '&v=' + version;
};
function MonitorindexOrbitJtopo(x, y) {
    var centerLon = x;
    var centerLat = y;
    var deviceid = GetQueryString("deviceid");
    var startdate = GetQueryString("startdate");
    var enddate = GetQueryString("enddate");
    window.location.href = "/Common/MTopo/OrbitTopo.htm?Category_Code=DPC&deviceid=" + deviceid + "&startdate=" + startdate + "&enddate=" + enddate + "&centerLon=" + centerLon + "&centerLat=" + centerLat + '&v=' + version;
};
function MonitorindexOrbitGIS() {
    var deviceid = GetQueryString("deviceid");
    var startdate = GetQueryString("startdate");
    var enddate = GetQueryString("enddate");
    window.location.href = "/Common/MGIS/OrbitGIS.htm?Category_Code=DPC&deviceid=" + deviceid + "&startdate=" + startdate + "&enddate=" + enddate + '&v=' + version;
};

///获取服务器时间
//type 加减时间类型Years,Months,Days,Hours,Minutes,Seconds
//number加减时间数 没有写0
function ServerTime(type, number) {
    var Time = XmlHttpHelper.transmit(false, "get", "text", "../../../Common/RemoteHandlers/ServerTime.ashx?type=" + type + "&number=" + number + '&temp=' + Math.random(), null, null);
    return Time;
};

function SetWinHeight(obj) {
    var win = obj;
    win.height = window.screen.height / 2 - 10;
};


function getCookie(cookie_name) {
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度  
    // 如果找到了索引，就代表cookie存在，  
    // 反之，就说明不存在。  
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可。  

        cookie_pos += cookie_name.length + 1;      //这里我自己试过，容易出问题，所以请大家参考的时候自己好好研究一下。。。  

        var cookie_end = allcookies.indexOf("&", cookie_pos);

        if (cookie_end == -1) {

            cookie_end = allcookies.length;

        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
};

//判断权限
function buttonControl() {
    //    var userjson = getCookieValue("cookloginName");
    //    if (userjson != "admin") {
    //        var inputArray = $("input[type=submit]");
    //        var powerList = getUrlControl("button", window.location.href);
    //        if (powerList.length == 0) { powerList = _getUrlControl("button", window.location.href); }
    //        for (var i = 0; i < inputArray.length; i++) {//循环整个input数组
    //            var input = inputArray[i]; //取到每一个input
    //            input.style.display = "none";
    //            if (powerList.length > 0) {
    //                if (powerList[0].SELECT == "1") {
    //                    //查看权限
    //                    if (input.id.indexOf("S_") == 0) {
    //                        input.style.display = "";
    //                    }
    //                }
    //                if (powerList[0].UPDATE == "1") {
    //                    //修改权限
    //                    if (input.id.indexOf("E_") == 0) {
    //                        input.style.display = "";
    //                    }
    //                }
    //                if (powerList[0].DELETE == "1") {
    //                    //删除权限
    //                    if (input.id.indexOf("D_") == 0) {
    //                        input.style.display = "";
    //                    }
    //                } 
    //                
    //                if (powerList[0].INSERT == "1") {
    //                    //新增权限
    //                    if (input.id.indexOf("A_") == 0) {
    //                        input.style.display = "";
    //                    }
    //                }
    //            }
    //        }
    //    }
};

function urlControl_new() {
    var loginfile = "/Common/login.htm";


    var _localurl = window.location.toString();



    var n = _localurl.indexOf(loginfile);
    if (n > -1) {
        if (top.location !== self.location) { top.location = self.location; }
        return;
    }

    _localurl = _localurl.replace(/\&/g, "%26");

    var urls = "/Common/RemoteHandlers/Power.ashx?type=IsAllowVisited&url=" + _localurl;
    $.ajax({
        type: "POST",
        url: urls,
        async: false,
        cache: true,
        success: function (result) {

            var powerList = eval("(" + result + ")");


            for (var i = 0; i < powerList.json.length; i++) {
                if (powerList.json[i].BUT_AUTH_BUT_VISIBLE == "0") {
                    if (exist(powerList.json[i].XT_BUTTON_OBJ_ID))
                        $("#" + powerList.json[i].XT_BUTTON_OBJ_ID).hide();
                }
            }


            switch (powerList.Visit) {
                case "0":
                    window.location = "/Common/error.htm?display=no" + '&v=' + version; // loginfile;
                    break;
                case "-1":
                    window.location = '/Common/login.htm?v=' + version; // loginfile;
                    break;


            }

        }
    });

};
function exist(id) {
    var s = document.getElementById(id);
    if (s) { return true; }
    else { return false; }
};

//URL权限判断
function urlControl() {
    //    var userjson = getCookieValue("cookloginName");
    //    if (userjson != "admin") {
    //        var AArray = $("a"); //获取页面所有超链接
    //        var urlList = getUrlControl("url", ""); //存在权限数组
    //        if (urlList.length == 0) { urlList = _getUrlControl("url", ""); }
    //        for (var i = 0; i < AArray.length; i++) {//循环整个A数组
    //            var aurl = AArray[i]; //取到每一个A
    //            var isurl = 0;
    //            for (var j = 0; j < urlList.length; j++) {
    //                if (aurl.href.indexOf(urlList[j].url) >= 0) {
    //                    isurl = 1;
    //                }
    //            }
    //            if (isurl == 0 && aurl.href.indexOf("C3index") < 0 && aurl.href.indexOf("login") < 0 && aurl.href.indexOf("#") < 0) {
    //                if (aurl.className == "") {
    //                    aurl.href = "../../Common/error.htm?display=no";
    //                } else {
    //                    aurl.href = "../../Common/error.htm?lightbox[iframe]=true&lightbox[width]=95p&lightbox[height]=95p&lightbox[modal]=true";
    //                }
    //            }
    //        }
    //    }
};

//取得权限数据的JSON
function getUrlControl(type, url) {
    var urls = "../../Common/RemoteHandlers/Power.ashx?type=" + type + "&url=" + url; //+ "&LoginName=" + getCookieValue("cookloginName");
    var json = "";
    $.ajax({
        type: "POST",
        url: urls,
        async: false,
        cache: true,
        success: function (result) {
            if (result != "") {
                json = eval('(' + result + ')');
            }
        }
    });
    return json;
};
//取得权限数据的JSON
function _getUrlControl(type, url) {
    var urls = "../../../Common/RemoteHandlers/Power.ashx?type=" + type + "&url=" + url; //+ "&LoginName=" + getCookieValue("cookloginName");
    var json = "";
    $.ajax({
        type: "POST",
        url: urls,
        async: false,
        cache: true,
        success: function (result) {
            if (result != "") {
                json = eval('(' + result + ')');
            }
        }
    });
    return json;
};


function fullShow() {
    CommonPerson.Base.LoadingPic.FullScreenShow(); //开始加载 
};

function Showloging() {
    CommonPerson.Base.LoadingPic.FullScreenShow(); //开始加载
    setTimeout("fullHide()", 1000);
};

function fullHide() {
    CommonPerson.Base.LoadingPic.FullScreenHide();
};
//js里取公里标
function strToKm(km) {
    var kmStr = km;
    if (kmStr.length == 0) {
        return "0";
    }
    else if (kmStr.length <= 3) {
        return "K0+" + kmStr;
    }
    else {
        return "K" + kmStr.substr(0, kmStr.length - 3) + "+" + kmStr.substr(kmStr.length - 3, 3);
    }
};

function GetDataType() {
    var url = window.location.href;
    if (url.indexOf('/C1/') >= 0) {
        return '1C';
    } else if (url.indexOf('/C2/') >= 0) {
        return '2C';
    } else if (url.indexOf('/C3/') >= 0) {
        return '3C';
    } else if (url.indexOf('/C4/') >= 0) {
        return '4C';
    } else if (url.indexOf('/C5/') >= 0) {
        return '5C';
    } else if (url.indexOf('/C6/') >= 0) {
        return '6C';
    } else { return '6C'; }
};






function DateAddORSub(interval, type, number) {
    /*
    * 功能:实现Script的Date加减功能.
    * 参数:interval,字符串表达式，表示要添加的时间间隔.
    * 参数:number,数值表达式，表示要添加的时间间隔的个数.
    * 参数:type,加减类型.
    * 返回:新的时间对象.
    * var newDate =DateAddORSub("d","+",5);
    */
    var date = new Date();
    switch (interval) {
        case "y":
            {
                if (type == "+") {
                    date.setFullYear(date.getFullYear() + number);
                } else {
                    date.setFullYear(date.getFullYear() - number);
                }
                return date;
                break;
            }
        case "q":
            {
                if (type == "+") {
                    date.setMonth(date.getMonth() + number * 3);
                } else {
                    date.setMonth(date.getMonth() - number * 3);
                }
                return date;
                break;
            }
        case "m":
            {
                if (type == "+") {
                    date.setMonth(date.getMonth() + number);
                } else {
                    date.setMonth(date.getMonth() - number);
                }
                return date;
                break;
            }
        case "w":
            {
                if (type == "+") {
                    date.setDate(date.getDate() + number * 7);
                } else {
                    date.setDate(date.getDate() - number * 7);
                }
                return date;
                break;
            }
        case "d":
            {
                if (type == "+") {
                    date.setDate(date.getDate() + number);
                } else {
                    date.setDate(date.getDate() - number);
                }
                return date;
                break;
            }
        case "h":
            {
                if (type == "+") {
                    date.setHours(date.getHours() + number);
                } else {
                    date.setHours(date.getHours() - number);
                }
                return date;
                break;
            }
        case "m":
            {
                if (type == "+") {
                    date.setMinutes(date.getMinutes() + number);
                } else {
                    date.setMinutes(date.getMinutes() - number);
                }
                return date;
                break;
            }
        case "s":
            {
                if (type == "+") {
                    date.setSeconds(date.getSeconds() + number);
                } else {
                    date.setSeconds(date.getSeconds() - number);
                }
                return date;
                break;
            }
        default:
            {
                if (type == "+") {
                    date.setDate(d.getDate() + number);
                } else {
                    date.setDate(d.getDate() - number);
                }
                return date;
                break;
            }
    }
};

function formatDate(date) {
    ;
    var year = date.getFullYear();       //年
    var month = date.getMonth() + 1;     //月
    var day = date.getDate();            //日
    return year + "-" + month + "-" + day;
};

function iFrameHeight(obj) {
    var subWeb = document.frames ? document.frames[obj.id].document : obj.contentDocument;
    if (obj != null && subWeb != null) {
        obj.height = subWeb.body.scrollHeight;
    }
};

function GetSaveAlarms() {
    var SaveAlarms = getCookieValue("SaveAlarms").replace(/_/g, ",");
    return SaveAlarms;
};

function DelSaveAlarms(_ids) {
    var arr = _ids.split(',');

    var SaveAlarms = GetSaveAlarms();
    // alert(SaveAlarms);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '') continue;

        SaveAlarms = SaveAlarms.replace("," + arr[i], "");
        SaveAlarms = SaveAlarms.replace(arr[i] + ",", "");
        SaveAlarms = SaveAlarms.replace(arr[i], "");
    }

    SaveAlarms = SaveAlarms.replace(/,/g, "_");

    //  alert(SaveAlarms);

    deleteCookie("SaveAlarms", "/");
    addCookie("SaveAlarms", SaveAlarms, 30, "/");


};
//
function DelStorageSaveAlarms(_ids) {
    var arr = _ids.split(',');

    var SaveAlarms = getCookieValue("SaveAlarms").replace(/_/g, ",");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '') continue;

        SaveAlarms = SaveAlarms.replace("," + arr[i], "");
        SaveAlarms = SaveAlarms.replace(arr[i] + ",", "");
        SaveAlarms = SaveAlarms.replace(arr[i], "");
    }

    SaveAlarms = SaveAlarms.replace(/,/g, "_");
    //更新Storage
    window.localStorage.SaveAlarms = SaveAlarms;


};
//height:图例高度,width:图例宽度,isShowSuffix:是否显示后缀,checkStr:控制勾选缺陷类型 如123则勾选一类二类三类,对应的是级别编码CODE
function GetSeverityLegend(height, width, isShowSuffix, checkStr) {
    var json = GetSeverityJson();
    var severityHtml = "";
    var suffix = "";
    var check;
    for (var i = 0; i < json.length; i++) {
        check = "";
        if (isShowSuffix) {
            suffix = '&nbsp;(<span id="number' + (i + 1) + '">0</span>)';
        }
        if (checkStr.indexOf(i + 1) > -1) {
            check = 'checked="checked"';
        }
        severityHtml = severityHtml + '<div id="div_type' + (i + 1) + '">\
                <input id="cb_type' + (i + 1) + '" code="' + json[i].code + '" type="checkbox" ' + check + ' style="vertical-align: middle;\
                    display: inline;" /><span style="vertical-align: middle; color: White; display: inline;">\
                        <label style="display: inline;" for="cb_type' + (i + 1) + '">\
                            <span id="sp_type' + (i + 1) + '">' + json[i].name + '</span>\
                            <img style="width: ' + width + 'px; height: ' + height + 'px; display: inline;" align="absmiddle" src="/Common/MGIS/img/ico' + (i + 1) + '.png" />\
                        </label>\
                    </span>' + suffix + '\
            </div>';
    }
    return severityHtml;
}

function GetSeverityJson() {
    var url = "/Common/RemoteHandlers/Pubic.ashx?type=getSeverity";
    var json = "";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: true,
        success: function (result) {
            if (result != "") {
                json = eval('(' + result + ')');
            }
        }
    });
    return json;
};
function GetSeverityName(code) {
    var name = "";
    var json = GetSeverityJson();
    for (var i = 0; i < json.length; i++) {
        if (code == json[i].code) {
            name = json[i].name;
        }
    }
    return name;
};
function GetSeverityCode(name) {
    var code = "";
    var json = GetSeverityJson();
    for (var i = 0; i < json.length; i++) {
        if (name == json[i].name) {
            code = json[i].code;
        }
    }
    return code;
};

function GetSeverityCode2(name, json) {
    var code = "";
    for (var i = 0; i < json.length; i++) {
        if (name == json[i].name) {
            code = json[i].code;
        }
    }
    return code;
};
function GetSeverityName2(code, json) {
    var name = "";
    for (var i = 0; i < json.length; i++) {
        if (code == json[i].code) {
            name = json[i].name;
        }
    }
    return name;
};


//输入验证类

function StringHelper() { };


StringHelper.trim = function (s) {
    s += "";
    return s.replace(/^\s+|\s+$/g, '');
};

StringHelper.isInt = function (s) {
    return new RegExp(/^(0|[1-9][0-9]*)$/).test(this.trim(s));
};

StringHelper.isFloat = function (s) {
    return new RegExp(/^[0-9]+(\.[0-9]+){0,1}$/).test(this.trim(s));
};


StringHelper.isEmpty = function (s) {
    return this.trim(s).length == 0;
};

///本地存储所有的自定义功能
function ReLoadFunEnable() {
    var url = "/Common/RemoteHandlers/GeFunEnable.ashx?param=";
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });
    for (var i = 0; i < json.length; i++) {
        localStorage["FunCustom_" + json[i].FunCode] = json[i].Enable;
    }
};

///从本地存储中获取功能是否启用
function FunEnable(funcode) {
    var v = localStorage["FunCustom_" + funcode];
    return v;
};

function GetLocomotive(loca) {
    var url = "/Common/RemoteHandlers/GetLocomotive.ashx?loca=" + loca;
    var json;
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        cache: false,
        success: function (result) {
            json = eval('(' + result + ')');
        }
    });
    return json;
};
//获取一周前日期
function DateLastWeekTime() {
    var beforeDate = new Date();
    beforeDate.setTime(beforeDate.getTime() - 1000 * 60 * 60 * 24 * (parseInt(getConfig("AlarmListDefaultTime")) - 1));
    var strYear2 = beforeDate.getFullYear();
    var strMon2 = beforeDate.getMonth() + 1;
    var strDate2 = beforeDate.getDate();
    var ret = strYear2 + "-" + ("00" + strMon2).slice(-2) + "-" + ("00" + strDate2).slice(-2) + " ";
    return ret;
};

jQuery(function ($) {
  
    var _ajax = $.ajax;

    $.ajax = function (opt) {
        var _success = opt && opt.success || function (a, b) { };
        var _error = opt && opt.error || function (a, b) { };
        var _opt = $.extend(opt, {
            success: function (data, textStatus) {
            //    alert(data);
                if (data!=null && data.toString().indexOf('-登录') != -1) {
                    window.location.href = "/Common/login.htm";
                    return;
                }
                _success(data, textStatus);
            },
            error: function (data, textStatus) {
                        
                if ('responseText' in data) {
                    data = data.responseText;
                } 

                if (data.toString().indexOf('-登录') != -1) {
                    window.location.href = "/Common/login.htm";
                    return;
                }
                _error(data, textStatus);
            }
        });
        _ajax(_opt);
    };
});


//加载控件
function loadControl(name) {

    switch (name) {
        case "jqueryUI":
            loadCss("/Common/css/jquery/jquery-ui-1.8.21.custom.css");
            loadJs("/Common/js/jquery/jquery-ui-1.8.21.custom.min.js");
            break;
        case "jqueryUI_2":
            loadCss("/Common/css/jquery/ui-lightness/jquery-ui-1.8.16.custom.css");
            loadJs("/Common/js/jquery/jquery-ui-1.8.21.custom.min.js");
            break;
        case "ztree": //树
            loadCss("/Common/css/zTreeStyle/zTreeStyle.css");
            loadJs("/Common/js/ztree/jquery.ztree.core-3.5.min.js");
            loadJs("/Common/js/ztree/jquery.ztree.exhide.js");
            break;
        case "mytree": //树
            loadCss("/Common/css/zTreeStyle/zTreeStyle.css");
            loadJs("/Common/js/ztree/jquery.ztree.core-3.5.min.js");
            loadJs("/Common/js/ztree/jquery.ztree.exhide.js");
            loadJs("/Common/js/6cweb/myTree.js?v=" + version);
            loadJs("/Common/js/ztree/jquery.ztree.exhide.js");
            break;
        case "mySelectTree": //树
            loadCss("/Common/css/zTreeStyle/zTreeStyle.css");
            loadJs("/Common/js/ztree/jquery.ztree.core-3.5.min.js");
            loadJs("/Common/js/6cweb/myTree.js?v=" + version);
            loadJs("/Common/js/6cweb/mySelectTree.js?v=" + version);
            loadJs("/Common/js/6cweb/mySelectTree_Level2.js?v=" + version);
            loadJs("/Common/js/ztree/jquery.ztree.excheck-3.5.js");
            loadJs("/Common/js/ztree/jquery.ztree.exhide.js");
            break;
        case "flexigrid": //列表
            loadCss("/Common/css/flexigrid/flexigrid.pack.css");
            loadJs("/Common/js/flexigrid/flexigrid.pack.js");
            break;
        case "Echarts": //图表   
            loadJs("/Common/js/Echarts/2.0/esl.js");
            loadJs("/Common/js/Echarts/2.0/dark.js?v=" + version);
            break;
        case "uploadify": //上传
            loadCss("/Common/css/6cweb/uploadify.css");
            loadJs("/Common/js/jquery/jquery.uploadify-3.1.min.js");
            break;
        case "editor": //编辑器
            loadCss("/Common/css/jquery/jquery.cleditor.css");
            loadJs("/Common/js/jquery/jquery.cleditor.min.js");
            loadCss("/Common/css/6cweb/elfinder.min.css");
            loadCss("/Common/css/6cweb/elfinder.theme.css");
            loadJs("/Common/js/jquery/jquery.elfinder.min.js");
            break;
        case "iphoneToggle":
            loadCss("/Common/css/jquery/jquery.iphone.toggle.css");
            loadJs("/Common/js/jquery/jquery.iphone.toggle.js");
            break;
        case "fullCalendar":
            loadCss("/Common/css/6cweb/fullcalendar.css");
            loadJs("/Common/js/jquery/fullcalendar.min.js");
            break;
        case "multiSelect": //多选下拉框 , 需要jqueryUI
            loadCss("/Common/js/jb51/multiselectSrc/jquery.multiselect.css");
            loadJs("/Common/js/jb51/multiselectSrc/jquery.multiselect.js");

            break;
        case "lightbox": //弹出窗口


            break;
        case "elevatezoom": //放大镜
            loadJs("/Common/js/jquery.elevatezoom-2.5.5/jquery.elevatezoom.js");
            break;
        case "cloudzoom": //放大镜2
            loadCss("/Common/js/6cweb/cloudzoom/cloudzoom.css");
            loadJs("/Common/js/6cweb/cloudzoom/cloudzoom.js");
            break;
        case "hint": //自动完成控件。
            loadCss("/Common/js/6cweb/hint/jquery.hint.css");
            loadJs("/Common/js/6cweb/hint/jquery.hint.js");
            break;
        case "Validation": //验证类
            loadCss("/Common/js/validation/validationEngine.jquery.css");
            loadJs("/Common/js/validation/jquery.validationEngine.js", "utf-8");
            loadJs("/Common/js/validation/jquery.validationEngine-zh_CN.js", "utf-8");

            break;
        case "kendo":
            loadCss("/Common/css/kendo/kendo.dataviz.min.css");
            loadJs("/Common/js/kendo/kendo.dataviz.min.js");
            break;
        case "form":
            loadJs("/Common/js/jquery/jquery.form.js");
            break;
        case "layer":
            loadCss("/Common/js//layer/skin/layer.css");
            loadJs("/Common/js/layer/layer.js");
            break;
        case "trainselect": //自动完成控件和自主选择设备编号
            loadCss("/C3/PC/css/trainselect.css");
            loadCss("/Common/js/6cweb/hint/jquery.hint.css");
            loadCss("/Common/js/bootstrap/Validator/bootstrap/css/bootstrap-glyphicon.css");
            loadJs("/C3/PC/MAlarmMonitoring/js/trainselect.js");
            loadJs("/C3/PC/MAlarmMonitoring/js/jquery.hintnew.js");
            break;
        case "progress": //加入进度条
            loadJs("/Common/js/progress/progress.js");
            break;
        case "paging": //加入分页
            loadCss("/Common/js/paging/paging.css");
            loadJs("/Common/js/paging/paging.js");
            break
        case "webuploader": //加入上传图片
            loadCss("/Common/js/webuploader-0.1.5/webuploader.css",'utf-8');
            loadJs("/Common/js/webuploader-0.1.5/webuploader.js",'utf-8');
            break;
    }

};


//获取url数据
function GetRequest() {
    var url = location.search; //获取url中'?'符后的字串 
    var theRequest = new Object();
    if (url.indexOf('?') != -1) {
        var str = url.substr(1);
        strs = str.split('&');
        for (var i = 1; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
        }
    }
    return theRequest;
}

/**
 * @desc 在本页面弹出iframe层
 * @param 
 */
function showDialogIframe($iframeUrl, width, height) {
    layer.open({
        type: 2,
        title: false,
        skin: 'dialog_iframe_box', //加上边框
        closeBtn: 1, //不显示关闭按钮
        shade: [0.3, '#4c4c4c'],//遮罩层颜色
        area: [width, height], //宽，高
        //offset: 'rb', //右下角弹出
        //time: 2000, //2秒后自动关闭
        shift: 2,  //弹出时的动画
        scrollbar: true,
        content: [$iframeUrl, 'yes'], //iframe的url，no代表不显示滚动条
        //end: function () { //此处用于演示
        //    layer.open({
        //        type: 2,
        //        title: '很多时候，我们想最大化看，比如像这个页面。',
        //        shadeClose: false,
        //        shade: [0.3, '#4c4c4c'],//遮罩层颜色
        //        maxmin: false, //开启最大化最小化按钮
        //        area: [width, height],
        //        content: 'http://fly.layui.com/'
        //    });
        //}
        success: function (layero, index) {
            //var body = layer.getChildFrame('body', index);
            //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            //var iframeWin = window[layero.find('iframe')[0]['id']]; 
            //重新设置iframe的高度
            var iframe = layero.find('iframe')[0]['id'];
            $('#' + iframe).height(height);
        }
    });
}