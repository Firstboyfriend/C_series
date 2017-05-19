var title = "�人��·��2013-2014��";
var startdate = dateNowStr();
var enddate = datehhssNowStr();
//����ͼ
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
                category: "�人�����",
                id: "123",
                value: 20,
                color: "#9de219"
            }, {
                category: "����ϻ����",
                value: 16.1,
                id: "123",
                color: "#90cc38"
            }, {
                category: "���������",
                value: 11.3,
                id: "123",
                color: "#068c35"
            }, {
                category: "���������",
                value: 5.2,
                id: "123",
                color: "#004d38"
            }, {
                category: "���������",
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
                category: "��ǹ��糵��",
                id: "TOPBOSS-WHJ-WH-MC",
                value: 41,
                color: "#9de219"
            }, {
                category: "�괨���糵��",
                value: 32.5,
                id: "TOPBOSS-WHJ-WH-HC",
                color: "#90cc38"
            }, {
                category: "ޭ�����糵��",
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
                category: "�괨�������",
                id: "TOPBOSS-WHJ-WH-MC",
                value: 41,
                color: "#9de219"
            }, {
                category: "�����������",
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
            text: "�人��·��14�����ȱ������ͼ"
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
            name: "�人�����",
            data: [33, 24, 54, 17, 66, 98, 38, 82, 95, 68]
        }, {
            name: "���������",
            data: [19, 27, 39, 34, 41, 39, 13, 22, 43, 27]
        }, {
            name: "���������",
            data: [47, 72, 71, 63, 81, 85, 52, 78, 43, 40]
        }, {
            name: "���������",
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
            text: "14�����ȱ�ݷ���ͳ��"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "column"
        },
        series: [{
            name: "һ��",
            stack: "Female",
            data: [{ value: 130, id: 1 }, 258, 493, 104, 110, 118]
        }, {
            name: "����",
            stack: "Female",
            data: [231, 569, 627, 185, 101, 305]
        }, {
            name: "����",
            stack: "Female",
            data: [379, 411, 447, 484, 395, 435]
        }],
        valueAxis: {
            line: {
                visible: false
            }
        },
        categoryAxis: {
            categories: ["����ϻ����", "���������", "���������", "�人�����", "���������", "���������"],
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
            text: "14���������/�����ͳ��"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "��������",
            data: [230, 221, 150, 117, 98, 54]
        }, {
            name: "�����",
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
            categories: ["����ϻ����", "���������", "���������", "�人�����", "���������", "���������"],
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
//�����б���
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
//������ȱ���豸
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
//�����м���豸
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
//����������
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

