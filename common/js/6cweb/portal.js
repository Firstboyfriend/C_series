var title = "武汉铁路局2013-2014年";
var startdate = dateNowStr();
var enddate = datehhssNowStr();
//画饼图
function createPieChart() {
    document.getElementById('pieback').style.display = 'none';
    $("#piechart").kendoChart({
        title: {
            position: "bottom",
            text: title
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "武汉供电段",
                id: "123",
                value: 20,
                color: "#9de219"
            }, {
                category: "武昌南机务段",
                value: 16.1,
                id: "123",
                color: "#90cc38"
            }, {
                category: "江岸机务段",
                value: 11.3,
                id: "123",
                color: "#068c35"
            }, {
                category: "襄阳供电段",
                value: 5.2,
                id: "123",
                color: "#004d38"
            }, {
                category: "信阳供电段",
                value: 37.8,
                id: "123",
                color: "#033939"
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        },
        seriesClick: loadPieCJ
    });
};
function loadPieCJ(e) {
    document.getElementById('pieback').style.display = '';
    document.getElementById('piesy').value = '1';
    if (e != undefined) {
        document.getElementById('pieid').value = e.category;
    }
    var title;
    if (document.getElementById('pieid').value != undefined && document.getElementById('pieid').value != "") {
        title = document.getElementById('pieid').value;
    }
    $("#piechart").kendoChart({
        title: {
            position: "bottom",
            text: title
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "麻城供电车间",
                id: "TOPBOSS-WHJ-WH-MC",
                value: 41,
                color: "#9de219"
            }, {
                category: "潢川供电车间",
                value: 32.5,
                id: "TOPBOSS-WHJ-WH-HC",
                color: "#90cc38"
            }, {
                category: "蕲春供电车间",
                value: 26.5,
                id: "TOPBOSS-WHJ-WH-QC",
                color: "#068c35"
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        },
        seriesClick: loadPieBZ
    });
};
function loadPieBZ(e) {
    document.getElementById('pieback').style.display = '';
    document.getElementById('piesy').value = '2';
    if (e != undefined) {
        document.getElementById('pieid').value = e.category;
    }
    var title;
    if (document.getElementById('pieid').value != undefined && document.getElementById('pieid').value != "") {
        title = document.getElementById('pieid').value;
    }
    $("#piechart").kendoChart({
        title: {
            position: "bottom",
            text: title
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "潢川供电班组",
                id: "TOPBOSS-WHJ-WH-MC",
                value: 41,
                color: "#9de219"
            }, {
                category: "淮滨供电班组",
                value: 59,
                id: "TOPBOSS-WHJ-WH-HC",
                color: "#068c35"
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });
};
///
function gotobackpie() {
    var jib = document.getElementById('piesy').value;
    if (jib == "1") {
        createPieChart();
    } else if (jib == "2") {
        loadPieCJ();
    }
};

function createLineChart() {
    $("#linechart").kendoChart({
        title: {
            text: "武汉铁路局14年各段缺陷趋势图"
        },
        legend: {
            position: "bottom"
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            type: "line"
        },
        series: [{
            name: "武汉供电段",
            data: [33, 24, 54, 17, 66, 98, 38, 82, 95, 68]
        }, {
            name: "襄阳供电段",
            data: [19, 27, 39, 34, 41, 39, 13, 22, 43, 27]
        }, {
            name: "信阳供电段",
            data: [47, 72, 71, 63, 81, 85, 52, 78, 43, 40]
        }, {
            name: "江岸机务段",
            data: [25, 36, 35, 17, 22, 33, 84, 28, 54, 59]
        }],
        valueAxis: {
            labels: {
                format: "{0}"
            },
            line: {
                visible: false
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });
};

function createBarChart() {
    $("#barchart").kendoChart({
        title: {
            text: "14年各段缺陷分类统计"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "一类",
            stack: "Female",
            data: [{ value: 130, id: 1 }, 258, 493, 104, 110, 118]
        }, {
            name: "二类",
            stack: "Female",
            data: [231, 569, 627, 185, 101, 305]
        }, {
            name: "三类",
            stack: "Female",
            data: [379, 411, 447, 484, 395, 435]
        }],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: ["武昌南机务段", "江岸机务段", "襄阳机务段", "武汉供电段", "襄阳供电段", "信阳供电段"],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });
};
function createTaskChart() {
    $("#taskchart").kendoChart({
        title: {
            text: "14年各段任务/完成数统计"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "总任务数",
            data: [230, 221, 150, 117, 98, 54]
        }, {
            name: "完成数",
            data: [133, 221, 100, 83, 90, 54]
        }],
        valueAxis: {

            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            }
        },
        categoryAxis: {
            categories: ["武昌南机务段", "江岸机务段", "襄阳机务段", "武汉供电段", "襄阳供电段", "信阳供电段"],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name #: #= value #"
        }
    });
};
//绑定所有报警
function loadAllAlarmCount() {
    responseData = XmlHttpHelper.transmit(false, "get", "text", "RemoteHandlers/Portal.ashx?type=alarmcount", null, null);
    if (responseData != undefined && responseData != "") {
        document.getElementById('alarmcount').innerHTML = responseData;
    } else {
        document.getElementById('alarmcount').innerHTML = 0;
    }
    var alarmurl = 'Monitor/MonitorAlarmList.htm?dllzt=AFSTATUS01&v=' + version;
    document.getElementById('alarmurl').href = alarmurl;
};
//绑定所有缺陷设备
function loadAllDeviceCount() {
    responseData = XmlHttpHelper.transmit(false, "get", "text", "RemoteHandlers/Portal.ashx?type=devicecount", null, null);
    if (responseData != undefined && responseData != "") {
        document.getElementById('devicecount').innerHTML = responseData;
    } else {
        document.getElementById('devicecount').innerHTML = 0;
    }
    var deviceurl = 'Monitor/MonitorDeviceList.htm?ly=2&v=' + version;
    document.getElementById('deviceurl').href = deviceurl;
};
//绑定所有监控设备
function loadAllLocCount() {
    responseData = XmlHttpHelper.transmit(false, "get", "text", "RemoteHandlers/Portal.ashx?type=loccount", null, null);
    if (responseData != undefined && responseData != "") {
        document.getElementById('loccount').innerHTML = responseData;
    } else {
        document.getElementById('loccount').innerHTML = 0;
    }
    var locurl = 'Monitor/MonitorLocoStateList.htm?v=' + version;
    document.getElementById('locurl').href = locurl;
};
//绑定所有任务
function loadAllTaskCount() {
    responseData = XmlHttpHelper.transmit(false, "get", "text", "RemoteHandlers/Portal.ashx?type=taskcount", null, null);
    if (responseData != undefined && responseData != "") {
        document.getElementById('taskcount').innerHTML = responseData;
    } else {
        document.getElementById('taskcount').innerHTML = 0;
    }
    var taskurl = 'Task/TaskList.htm?v=' + version;
    document.getElementById('taskurl').href = taskurl;
};

