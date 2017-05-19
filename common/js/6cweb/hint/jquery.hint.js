/**
* Created by Tang Yueming on 2014-12-25.
*/
(function ($) {
    /**
    * applay an UI
    * @param settings setting of the plugin
    * @returns {*}
    */
    $.fn.jHint = function (settings) {
        // get parameters form the user
        //  var ps = $.extend({}, $.fn.jHint.defauts, settings);
        var ps = $.extend($.fn.jHint.defauts, settings);
        // get the element which the plugin will append to

        // ps.renderTo = typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo;

        ps.renderTo = $(this);

        // create the UI element of the plugin

        //var resultContainer = $('<input type="text" />').addClass(ps.resultContainerCSSName).appendTo(ps.renderTo);

        var resultContainer = $(this);



        // add class to ul element

        var txt_id = $(this).attr('id');


        $('<ul id="ul_' + txt_id + '"></ul>').addClass(ps.listContainerCSSName).appendTo($(this).parent());
        var listContainer = $('#ul_' + txt_id);


        var suggestion = resultContainer;

        //添加文本框变化事件，控制清除公里标提醒内容 by lc 2015-11-30
        if (ps.km == true) {
            resultContainer.bind('change', ps, function (e) {
                setKmMarkValue(e);
            });
        }
        // bind evnets of the input box
        resultContainer.bind('keyup click', { ps: ps, suggestion: suggestion }, resultContainerEvent);
        // bind events of the ul element
        resultContainer.bind('blur', ps, function (e) {
            //   var hilightItem = $(this).next('ul').find('li.hilight');
            var hilightItem = listContainer.find('li.hilight');
            if (hilightItem.length > 0) {
                hilightItem.removeClass('hilight');
            }
            // $(this).next('ul').hide();
            listContainer.hide();
            setKmMarkValue(e);
        });
        // bind thd blur event when the mouse leaves the listContainer
        listContainer.bind('mouseleave', function () {
            resultContainer.bind('blur', ps, function () {
                //   var hilightItem = $(this).next('ul').find('li.hilight');
                var hilightItem = listContainer.find('li.hilight');
                if (hilightItem.length > 0) {
                    hilightItem.removeClass('hilight');
                }
                // $(this).next('ul').hide();
                listContainer.hide();
            });
        });

        return suggestion;
    };
    /**
    * get the string value of the input box
    * @returns {string} the hinting string
    */
    $.fn.getHintValue = function () {
        return this[0].value;
    };
    /**
    * get the string code of the input box
    * @returns {string} code of the hinting string
    */
    $.fn.getHintCode = function () {
        var value = this[0].value;
        var code = '';
        for (item in this.data) {
            if (this.data[item].name == value) {
                code = this.data[item].code;
                break;
            }
        }
        return code;
    };
    /**
    * default ini parameters of the plugin
    */
    $.fn.jHint.defauts = {
        // object which will conatins the plugin
        renderTo: $(document.body),
        // class name of the input box
        resultContainerCSSName: 'resultContainer',
        // class name of the list
        listContainerCSSName: 'listContainer',
        // class name of the list item
        listItemCssName: 'listItem',
        // whether update according the list automatically or not
        autoUpdate: false,
        // whether thd plugin is enabled
        enabled: true,
        // type of the data source of the hinting list
        type: 'org',
        // line code
        line: '',
        // indentify whether the list existed, no need to be configed
        flag: false
    };
    /**
    * callback to response the evnets of the input box
    * @param e parameters of the event
    */
    function resultContainerEvent(e) {
        // dealed when the input box is not empty
        if (this.value.length >= 0) {
            var ps = e.data.ps;
            // get the ul object
            // var listContainer = $(this).next('ul.' + ps.listContainerCSSName);

            var txt_id = $(this).attr('id');
            var listContainer = $('#ul_' + txt_id);

            // escape key
            if (e.keyCode == 27) {
                listContainer.hide();
                return;
            }
            // enter key
            if (e.keyCode == 13) {
                var hilightItem = listContainer.find('li.hilight');
                if (hilightItem.length > 0) {
                    $(this).val(hilightItem[0].innerHTML);
                    hilightItem.removeClass('hilight');
                }
                listContainer.hide();
                return;
            }
            // get the suggestion list
            if (e.keyCode != 38 && e.keyCode != 40) {
                var url = getUrl(ps, this.value);
                var listItemsJson;
                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: true,
                    success: function (result) {
                        listItemsJson = eval('(' + result + ')');
                    }
                });
                // if list has existed, clear it
                if (listContainer.children().length > 0) {
                    listContainer.children().remove();
                }
                // update json string of the plugin
                e.data.suggestion.data = listItemsJson.result;

                var len = listItemsJson.result.length;
                // no result
                if (len < 0) {
                    return;
                }
                var listItems = '';
                for (var i = 0; i < len; ++i) {
                    listItems += '<li idx=\"' + i + '\">' + listItemsJson.result[i].name + '</li>';
                }

                $(listItems).addClass('listItem').appendTo(listContainer)
                    .bind('click mouseover', ps, listItemEvent);
            }
            listContainer.show();
            // down key
            if (e.keyCode == 40) {
                var hilightItem = listContainer.find('li.hilight');
                if (hilightItem.length == 0) {
                    listContainer.find('li:first').addClass('hilight');
                }
                else {
                    hilightItem.removeClass('hilight');
                    hilightItem = hilightItem.next();
                    if (hilightItem.length == 0) {
                        listContainer.find('li:first').addClass('hilight');
                    }
                    else {
                        hilightItem.addClass('hilight');
                    }
                }
                changeScrollPostionAndValue(listContainer.find('li.hilight'), ps);
            }
            // up key
            else if (e.keyCode == 38) {
                var hilightItem = listContainer.find('li.hilight');
                if (hilightItem.length == 0) {
                    listContainer.find('li:last').addClass('hilight');
                }
                else {
                    hilightItem.removeClass('hilight');
                    hilightItem = hilightItem.prev();
                    if (hilightItem.length == 0) {
                        listContainer.find('li:last').addClass('hilight');
                    }
                    else {
                        hilightItem.addClass('hilight');
                    }
                }
                changeScrollPostionAndValue(listContainer.find('li.hilight'), ps);
            }
        }
        else {
            // $(this).next('ul').find('li').removeClass('hilight');
            listContainer.find('li').removeClass('hilight');
            listContainer.hide();
            //$(this).next('ul').hide();
        }
    }
    /**
    * callback to response the evnets of the list items
    * @param e parameters of the event
    */
    function listItemEvent(e) {
        if (e.type == 'click') {
            e.data.renderTo.val(this.innerHTML);
            $(this).siblings('.hilight').removeClass('hilight');
            $(this).parent().hide();
            setKmMarkValue(e);
        }
        else {
            $(this).siblings('.hilight').removeClass('hilight');
            $(this).addClass('hilight');
            if (e.data.autoUpdate) {
                e.data.renderTo.val(this.innerHTML);
            }
            e.data.renderTo.unbind('blur');
        }
    };
    /**
    * get the url
    * @param type data type
    * @param value parameters used for requesting data
    * @returns {string} requested data, json formatted
    */
    function getUrl(ps, value) {
        var url = '';
        switch (ps.type) {
            case 'StationSection':
                url = '/Common/RemoteHandlers/GetSelects.ashx?tag=STATIONSECTION&flag=true&name=' + value + '&code=' + ps.line;
                break;
            case 'loca':
                url = '/Common/RemoteHandlers/GetSelects.ashx?tag=LOCOMOTIVE&flag=true&name=' + value;
                break;
            default:
                break;
        }
        return url;
    }
    /**
    * change the position of the scroll bar and the value of the input box
    * @param obj jQuery object of the li item
    * @param ps configuration of the plugin
    */
    function changeScrollPostionAndValue(obj, ps) {
        var parentNode = obj.parent();
        var idx = eval(obj.attr('idx'));
        var step = obj.outerHeight();
        parentNode.get(0).scrollTop = (idx + 1) * step - parentNode.outerHeight();
        if (ps.autoUpdate) {
            parentNode.siblings('input').val(obj.get(0).innerHTML);
        }
    }
    /***根据选择区站来提醒公里标
    调用时需提供参数 km  值为true
    提供公里标需赋值 ID   kmMarkID
    并给该控件start,end属性赋值
    by lc 2015-11-30
    ***/
    function setKmMarkValue(e) {
        if (e.data.km == true) {
            var url = "/Common/RemoteHandlers/GetSelects.ashx?tag=KM&name=" + e.data.renderTo.val();
            $.ajax({
                type: 'GET',
                url: url,
                async: false,
                cache: true,
                success: function (result) {
                    var json = eval('(' + result + ')');
                    if (json == false) {
                        $("#" + e.data.kmMarkID).text("").attr("start", 0).attr("end", 0);
                        return;
                    }
                    var val = "该区站公里标范围为" + strToKm(json.start_km) + "至" + strToKm(json.end_km);
                    $("#" + e.data.kmMarkID).text(val).attr("start", json.start_km).attr("end", json.end_km);
                }
            });
        }
    }
})(jQuery);