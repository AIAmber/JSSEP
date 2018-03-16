require(['jquery', 'bootstrap', 'echarts'], function ($, bootstrap, echarts) {
// data all, start
// main21, data, click button to show
var main21Mod = 2;

var data2101x = ['行政许可审批', '环保项目审批', '法人基本信息', '市环保局公文', '全民社会保障'];
var data2101y = [235, 441, 306, 482, 643];
var data2102x = ['行政许可审批', '环保项目审批', '法人基本信息', '食品经营许可', '投资项目建设', '不动产登记', '企业注册登记', '税务登记', '药品经营许可', '法人信用记录'];
var data2102y = [235, 441, 306, 482, 643, 412, 206, 225, 649, 411];
var data2103x = ['行政许可审批', '环保项目审批', '法人基本信息', '市环保局公文', '全民社会保障', '社会救助', '便民服务事项', '教育局公文', '财政局公文', '南京市公文', '江苏省公文', '工商登记', '食品经营许可', '投资项目建设', '不动产登记'];
var data2103y = [235, 441, 306, 482, 643, 412, 206, 225, 649, 411, 201, 223, 648, 415, 206];
var dashData21x = data2102x;
var dashData21y = data2102y;
var dashColor21 = ['#5BB0F0'];
$("#dash-count-top5").click(function () {
    main21Mod = 1; // shift control...
    dashColor21 = ['#FFB74E'];
    dashData21x = data2101x;
    dashData21y = data2101y;
});
$("#dash-count-top10").click(function () {
    main21Mod = 2; // shift control...
    dashColor21 = ['#5BB0F0'];
    dashData21x = data2102x;
    dashData21y = data2102y;
});
$("#dash-count-top20").click(function () {
    main21Mod = 3; // shift control...
    dashColor21 = ['#81C884'];
    dashData21x = data2103x;
    dashData21y = data2103y;
});
// end21

// main22 - realtime, date, data
var main22Mod = 4;

var base22 = +new Date(2018, 2, 28, 8, 0, 0);
var quaMinute22 = 5 * 60 * 1000;
var date22 = [];
var data22 = [];
var dataA22 = [];
var dataA22B7 = [];
var myDate22 = new Date(base22);
var Minute22 = 60;
var nowRe22 = new RegExp("a");
var nowRe22 = /\d+:\d+/;

//        now = [myDate.getHours(), myDate.getMinutes() + 1, myDate.getSeconds()].join(':');

function addData22(shift) {
    now22 = myDate22.toTimeString().match(nowRe22);
    nowNum22 = (Math.random() - 0.03) * 925 + (Math.random() + 0.8) * 275 + (Math.random() - 0.58) * 480 + (Math.random() + 0.36) * 52;
    nowNumA22 = parseInt((Math.random() + 0.36) * 100);
    //nowNumStr22 = nowNum22 + "ss"; // 转换成String类型，添加单位，不适用于echarts。

    date22.push(now22);
    data22.push(nowNum22);
    dataA22.push(nowNumA22);
    if (shift) {
        //console.log(data22);
        date22.shift();
        data22.shift();
        dataA22.shift();
    }
    myDate22 = new Date(+new Date(myDate22) + quaMinute22);
}

for (var i22 = 0; i22 < 20; i22++) {
    addData22();
}

// main22 - 3 days(7 days), date, data
var checkDate22Mod3 = [];
var checkDate22Mod7 = [];
var checkDate22Mod30 = [];
var timeBase22 = myDate22.getTime();
var timeSetBase22 = new Date(base22);

timeSetBase22Mod3 = timeSetBase22.setTime(timeBase22 - 3.6 * 60 * 60 * 1000);
timeSetBase22Mod7 = timeSetBase22.setTime(timeBase22 - 8.4 * 60 * 60 * 1000);
timeSetBase22Mod30 = timeSetBase22.setTime(timeBase22 - 36 * 60 * 60 * 1000);
var MyDate22Mod3 = new Date(timeSetBase22Mod3);
var MyDate22Mod7 = new Date(timeSetBase22Mod7);
var MyDate22Mod30 = new Date(timeSetBase22Mod30);

for (var i22mod = 0; i22mod < 20; i22mod++) {
    timeSetBase22Mod3 = timeSetBase22.setTime(timeBase22 - 72 * 60 * 60 * 1000 + 3.6 * 60 * 60 * 1000 * i22mod);
    timeSetBase22Mod7 = timeSetBase22.setTime(timeBase22 - 168 * 60 * 60 * 1000 + 8.4 * 60 * 60 * 1000 * i22mod);
    timeSetBase22Mod30 = timeSetBase22.setTime(timeBase22 - 480 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000 * i22mod);
    MyDate22Mod3 = new Date(timeSetBase22Mod3);
    MyDate22Mod7 = new Date(timeSetBase22Mod7);
    MyDate22Mod30 = new Date(timeSetBase22Mod30);
    Date22Mod3 = MyDate22Mod3.getMonth() + "-" + MyDate22Mod3.getDate();
    Date22Mod7 = MyDate22Mod7.getMonth() + "-" + MyDate22Mod7.getDate();
    Date22Mod30 = MyDate22Mod30.getMonth() + "-" + MyDate22Mod30.getDate();
    Now22Mod3 = MyDate22Mod3.toTimeString();
    Now22Mod7 = MyDate22Mod7.toTimeString();
    Now22Mod30 = MyDate22Mod30.toTimeString();
    checkDate22Mod3.push(Date22Mod3);
    checkDate22Mod7.push(Date22Mod7);
    checkDate22Mod30.push(Date22Mod30);
}

/*checkDate22Mod3.unshift("");
checkDate22Mod7.unshift("");
checkDate22Mod30.unshift("");
checkDate22Mod3.push("");
checkDate22Mod7.push("");
checkDate22Mod30.push("");*/

var data2202x = checkDate22Mod3;
var data2202y = [1720, 1344, 1230, 948, 764, 1141, 1620, 1722, 1664, 1541, 1320, 1222, 764, 441, 220, 922, 1564, 1741, 1520, 1322];
var data2203x = checkDate22Mod7;
var data2203y = [3720, 2344, 3230, 1948, 1764, 2141, 2620];
dataA22B7 = [20, 55, 33, 66, 46, 37, 52];
var data2204x = checkDate22Mod30;
var data2204y = [1720, 3344, 4230, 3948, 2764, 1141, 620, 1722, 2664, 3541, 3320, 4222, 3764, 2441, 2220, 1922, 1564, 1741, 1520, 1322];
var dashData22x = data2204x; // use '30days', slice(13,20) to show 7days
var dashData22y = data2204y;
$("#dash-realtime").click(function () {
    main22Mod = 1;
});
$("#dash-realtime-7days").click(function () {
    main22Mod = 3;
    dashData22x = data2204x; // use '30days', slice(13,20) to show 7days
    dashData22y = data2203y;
});
$("#dash-realtime-30days").click(function () {
    main22Mod = 4;
    dashData22x = data2204x;
    dashData22y = data2204y;
});
// end22

// main23, data
var data2301x = ['法人基本信息', '企业注册登记', '公共服务事项', '其他'];
var data2301y = [{
    value: 335,
    name: '法人基本信息'
}, {
    value: 310,
    name: '企业注册登记'
}, {
    value: 234,
    name: '公共服务事项'
}, {
    value: 1548,
    name: '其他'
}];
var data2302x = ['法人基本信息', '企业注册登记', '公共服务事项', '全民社会保障', '行政审批', '其他'];
var data2302y = [{
    value: 335,
    name: '法人基本信息'
}, {
    value: 310,
    name: '企业注册登记'
}, {
    value: 234,
    name: '公共服务事项'
}, {
    value: 135,
    name: '全民社会保障'
}, {
    value: 335,
    name: '行政审批'
}, {
    value: 1248,
    name: '其他'
}];
var data2302xBy = ['法人基本信息', '企业注册登记', '公共服务事项', '全民社会保障', '行政审批', '其他'];
var data2302yBy = [{
    value: 365,
    name: '法人基本信息'
}, {
    value: 320,
    name: '企业注册登记'
}, {
    value: 244,
    name: '公共服务事项'
}, {
    value: 165,
    name: '全民社会保障'
}, {
    value: 385,
    name: '行政审批'
}, {
    value: 1098,
    name: '其他'
}];
var data2303x = ['法人基本信息', '企业注册登记', '公共服务事项', '全民社会保障', '监测报告', '行政审批', '便民服务', '政府公文', '其他'];
var data2303y = [{
    value: 335,
    name: '法人基本信息'
}, {
    value: 310,
    name: '企业注册登记'
}, {
    value: 234,
    name: '公共服务事项'
}, {
    value: 135,
    name: '全民社会保障'
}, {
    value: 247,
    name: '监测报告'
}, {
    value: 174,
    name: '行政审批'
}, {
    value: 265,
    name: '便民服务'
}, {
    value: 335,
    name: '政府公文'
}, {
    value: 648,
    name: '其他'
}];
var dashData23x = data2302x;
var dashData23y = data2302y;
var main23Mod = 992;
var main23Title = 881;
var dashTitle23 = "资源请求占比";
// button req_or_pub start
// req or pub, click to change
var req_or_pub_echarts_clickTimes23 = 0;
$('#dash-resource-reqOrPub').click(function () {
    req_or_pub_echarts_clickTimes23 = req_or_pub_echarts_clickTimes23 + 1;
    if (req_or_pub_echarts_clickTimes23 % 2 == 0) {
        main23Title = 1;
        dashTitle23 = "资源请求占比";
        dashData23x = data2302x;
        dashData23y = data2302y;
    }
    if (req_or_pub_echarts_clickTimes23 % 2 == 1) {
        main23Title = 2;
        dashTitle23 = "资源发布占比";
        dashData23x = data2302xBy;
        dashData23y = data2302yBy;
    }
})
// button req_or_pub end
$("#dash-resource-req").click(function () {
    main23Title = 1;
    dashTitle23 = "资源请求占比";
    dashData23x = data2302x;
    dashData23y = data2302y;
});
$("#dash-resource-pub").click(function () {
    main23Title = 2;
    dashTitle23 = "资源发布占比";
    dashData23x = data2302xBy;
    dashData23y = data2302yBy;
});
$("#dash-publish-top3").click(function () {
    main23Mod = 1;
    dashData23x = data2301x;
    dashData23y = data2301y;
});
$("#dash-publish-top5").click(function () {
    main23Mod = 2;
    dashData23x = data2302x;
    dashData23y = data2302y;
});
$("#dash-publish-top8").click(function () {
    main23Mod = 3;
    dashData23x = data2303x;
    dashData23y = data2303y;
});
// end23

// dashResourceCP
var dashTitleResourceCP = "资源交换分类占比";
var dashDataResourceCPx = ['基础信息资源类', '主题信息资源类', '部门信息资源类'];
var dashDataResourceCPy = [{
    value: 4226,
    name: '基础信息资源类'
}, {
    value: 2666,
    name: '主题信息资源类'
}, {
    value: 3318,
    name: '部门信息资源类'
}];

var dashDataResourceCPy_label = [{
    value: 4226,
    name: '基础信息资源类',
    label: {
        normal: {
            formatter: '基础信息资源类 \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 2666,
    name: '主题信息资源类',
    label: {
        normal: {
            formatter: ' 主题信息资源类   \n ({d}%)   ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 3318,
    name: '部门信息资源类',
    label: {
        normal: {
            formatter: ' 部门信息资源类 \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}];
// dashResourceCP - child, A
var dashTitleResourceCPChildA = "基础信息资源类"; //4226
var dashDataResourceCPChildAx = ['法人单位信息', '人口信息', '空间地理信息'];
var dashDataResourceCPChildAy = [{
    value: 1146,
    name: '法人单位信息'
}, {
    value: 857,
    name: '人口信息'
}, {
    value: 2222,
    name: '空间地理信息'
}];

var dashDataResourceCPChildAy_label = [{
    value: 1146,
    name: '法人单位信息',
    label: {
        normal: {
            formatter: '法人单位信息 \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 857,
    name: '人口信息',
    label: {
        normal: {
            formatter: ' 人口信息   \n ({d}%)   ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 2222,
    name: '空间地理信息',
    label: {
        normal: {
            formatter: ' 空间地理信息 \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}];
// dashResourceCP - child, B
var dashTitleResourceCPChildB = "主题信息资源类"; //2666
var dashDataResourceCPChildBx = ['审批改革', '全民社会保障', '市场价格监督', '公共服务事项'];
var dashDataResourceCPChildBy = [{
    value: 474,
    name: '审批改革'
}, {
    value: 354,
    name: '全民社会保障'
}, {
    value: 922,
    name: '市场价格监督'
}, {
    value: 916,
    name: '公共服务事项'
}];

var dashDataResourceCPChildBy_label = [{
    value: 474,
    name: '审批改革',
    label: {
        normal: {
            formatter: '  审批改革 \n  ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 354,
    name: '全民社会保障',
    label: {
        normal: {
            formatter: ' 全民社会保障   \n ({d}%)   ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 922,
    name: '市场价格监督',
    label: {
        normal: {
            formatter: '   市场价格监督 \n   ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 916,
    name: '公共服务事项',
    label: {
        normal: {
            formatter: ' 公共服务事项 \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}];
// dashResourceCP - child, C
var dashTitleResourceCPChildC = "部门信息资源类"; //3318
var dashDataResourceCPChildCx = ['党中央', '全国人大委员会', '国务院', '地方'];
var dashDataResourceCPChildCy = [{
    value: 499,
    name: '党中央'
}, {
    value: 743,
    name: '全国人大委员会'
}, {
    value: 1021,
    name: '国务院'
}, {
    value: 1055,
    name: '地方'
}];

var dashDataResourceCPChildCy_label = [{
    value: 499,
    name: '党中央',
    label: {
        normal: {
            formatter: '     党中央 \n   ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 743,
    name: '全国人大委员会',
    label: {
        normal: {
            formatter: ' 全国人大委员会   \n ({d}%)   ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 1021,
    name: '国务院',
    label: {
        normal: {
            formatter: ' 国务院   \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}, {
    value: 1055,
    name: '地方',
    label: {
        normal: {
            formatter: ' 地方   \n ({d}%) ',
            position: 'outside',
            show: true,
            textStyle: {
                fontSize: '11',
                fontWeight: 'normal'
            }
        }
    }
}];

// mainDepartExchange, data
var data2401x = ['市质监局', '市公安局', '市工商局', '其他'];
var data2401y = [{
    value: 400,
    name: '市质监局'
}, {
    value: 335,
    name: '市公安局'
}, {
    value: 263,
    name: '市工商局'
}, {
    value: 631,
    name: '其他'
}];
var data2402x = ['市质监局', '市公安局', '市环保局', '市工商局', '市财政局', '其他'];
var data2402y = [{
    value: 400,
    name: '市质监局'
}, {
    value: 335,
    name: '市公安局'
}, {
    value: 310,
    name: '市环保局'
}, {
    value: 275,
    name: '市工商局'
}, {
    value: 263,
    name: '市财政局'
}, {
    value: 631,
    name: '其他'
}];
var data2402xBy = ['市质监局', '市公安局', '市环保局', '市工商局', '市财政局', '其他'];
var data2402yBy = [{
    value: 359,
    name: '市质监局'
}, {
    value: 285,
    name: '市公安局'
}, {
    value: 260,
    name: '市环保局'
}, {
    value: 245,
    name: '市工商局'
}, {
    value: 213,
    name: '市财政局'
}, {
    value: 461,
    name: '其他'
}];
var data2403x = ['市质监局', '市公安局', '市环保局', '市水利局', '市工商局', '市财政局', '市教育局', '市卫生局', '其他'];
var data2403y = [{
    value: 400,
    name: '市质监局'
}, {
    value: 335,
    name: '市公安局'
}, {
    value: 310,
    name: '市环保局'
}, {
    value: 275,
    name: '市水利局'
}, {
    value: 263,
    name: '市工商局'
}, {
    value: 163,
    name: '市财政局'
}, {
    value: 563,
    name: '市教育局'
}, {
    value: 463,
    name: '市卫生局'
}, {
    value: 631,
    name: '其他'
}];
var dashData24x = data2402x;
var dashData24y = data2402y;
var mainDepartExchangeMod = 992;
var mainDepartExchangeTitle = 881;
var dashTitle24 = "各部门请求资源占比";
// button req_or_pub start
// req or pub, click to change
var req_or_pub_echarts_clickTimes24 = 0;
$('#dash-reqPub-reqOrPub').click(function () {
    req_or_pub_echarts_clickTimes24 = req_or_pub_echarts_clickTimes24 + 1;
    if (req_or_pub_echarts_clickTimes24 % 2 == 0) {
        mainDepartExchangeTitle = 1;
        dashTitle24 = "各部门请求资源占比";
        dashData24x = data2402x;
        dashData24y = data2402y;
    }
    if (req_or_pub_echarts_clickTimes24 % 2 == 1) {
        mainDepartExchangeTitle = 2;
        dashTitle24 = "各部门发布资源占比";
        dashData24x = data2402xBy;
        dashData24y = data2402yBy;
    }
})
// button req_or_pub end
$("#dash-reqPub-req").click(function () {
    mainDepartExchangeTitle = 1;
    dashTitle24 = "各部门请求资源占比";
    dashData24x = data2402x;
    dashData24y = data2402y;
});
$("#dash-reqPub-pub").click(function () {
    mainDepartExchangeTitle = 2;
    dashTitle24 = "各部门发布资源占比";
    dashData24x = data2402xBy;
    dashData24y = data2402yBy;
});
$("#dash-request-top3").click(function () {
    mainDepartExchangeMod = 1;
    dashData24x = data2401x;
    dashData24y = data2401y;
});
$("#dash-request-top5").click(function () {
    mainDepartExchangeMod = 2;
    dashData24x = data2402x;
    dashData24y = data2402y;
});
$("#dash-request-top8").click(function () {
    mainDepartExchangeMod = 3;
    dashData24x = data2403x;
    dashData24y = data2403y;
});
// end mainDepartExchange

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
}; //41 31
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
}; //41 31
// data all, end

// main start
var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
//var myChart23 = echarts.init(document.getElementById('main23')); // to mychartResourceCP
var myChartDepartExchange = echarts.init(document.getElementById('mainDepartExchange'));
//var myChart32 = echarts.init(document.getElementById('main32'));
var mychartResourceCP = echarts.init(document.getElementById('mainResourceCP'));
var mychartResourceShare = echarts.init(document.getElementById('mainResourceShare'));
//var mychartDataStorage = echarts.init(document.getElementById('mainDataStorage'));
//var mychartDataShare = echarts.init(document.getElementById('mainDataShare'));
//var myChartAddCPU = echarts.init(document.getElementById('mainAddCPU'));
//var myChartAddDisc = echarts.init(document.getElementById('mainAddDisc'));

// 'show' or 'not show' the legend. 是否展示legend
var legendMode = true;

var option21 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次"
    },
    color: ['#5BB0F0'],
    grid: {
        left: '4%',
        right: '5%',
        top: '13%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: dashData21x,
        // x, font color
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 20,
            margin: 8,
            textStyle: {
                color: "#555",
                fontsize: "10px"
            },
            color: '#555'
        },
        // x, line color
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        }
            }],
    yAxis: [{
        type: 'value',
        name: '访问次数',
        axisLabel: {
            formatter: '{value} 次'
        },
        // y, line color
        splitLine: {
            lineStyle: {
                color: ['#EFF3F8']
            }
        },
        nameTextStyle: {
            color: ['#555']
        },
        axisLine: {
            lineStyle: {
                color: '#EFF3F8',
                width: 1
            }
        },
        axisLabel: {
            color: '#555'
        }
            }],
    series: [{
        name: '资源请求次数',
        type: 'bar',
        barCategoryGap: '48%',
        data: dashData21y
            }]
};

var option22 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: "{a} <br/>{b} : {c} M"
    },
    legend: {
        data: ['交换流量', '交换次数']
    },
    xAxis: {
        type: 'category',
        data: dashData22x,
        // x, line color
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        },
        axisLabel: {
            color: '#555'
        }
    },
    yAxis: [{
        type: 'value',
        name: '交换流量',
        position: 'left',
        axisLabel: {
            formatter: '{value} M',
            color: '#555'
        },
        axisPointer: {
            snap: true
        },
        // y, line style
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#EFF3F8']
            }
        },
        nameTextStyle: {
            color: ['#555']
        },
    }, {
        type: 'value',
        name: '交换次数',
        position: 'right',
        axisLabel: {
            formatter: '{value} 次',
            color: '#555'
        },
        axisPointer: {
            snap: true
        },
        // y, line style
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#EFF3F8']
            }
        },
        nameTextStyle: {
            color: ['#555']
        },
    }],
    color: ['#FFB74E', '#89CA94'],
    grid: {
        left: '4%',
        right: '1%',
        top: '15%',
        bottom: '3%',
        containLabel: true
    },
    series: [{
        name: '交换流量',
        type: 'line',
        smooth: true,
        data: dashData22y
            }, {
        name: '交换次数',
        type: 'bar',
        yAxisIndex: 1,
        data: dataA22,
        barCategoryGap: '48%'
            }]
};

// 资源交换分类占比, change
var option23 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次 ({d}%)"
    },
    title: {
        show: false,
        text: dashTitle23,
        left: 'left',
        textStyle: {
            color: '#555'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        y: '30%',
        data: dashData23x,
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [{
        name: '热门资源',
        type: 'pie',
        radius: ['35%', '52%'],
        center: ['50%', '50%'],
        data: dashData23y,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
        }, {
        name: '热门资源',
        type: 'pie',
        radius: ['55%', '56%'],
        center: ['50%', '50%'],
        data: dashData23y,
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }, {
        name: '热门资源',
        type: 'pie',
        radius: ['31%', '32%'],
        center: ['50%', '50%'],
        data: dashData23y,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }]
};

var optionResourceCP = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次 ({d}%)"
    },
    title: {
        show: false,
        text: dashTitleResourceCP,
        left: 'left',
        textStyle: {
            color: '#555'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        y: '30%',
        data: dashDataResourceCPx,
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [{
        name: '热门资源',
        type: 'pie',
        radius: ['30%', '47%'],
        center: ['50%', '50%'],
        data: dashDataResourceCPy,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
        }, {
        name: '热门资源',
        type: 'pie',
        radius: ['50%', '51%'],
        center: ['50%', '50%'],
        data: dashDataResourceCPy,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }, {
        name: '热门资源',
        type: 'pie',
        radius: ['26%', '27%'],
        center: ['50%', '50%'],
        data: dashDataResourceCPy_label,
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }]
};

var optionDepartExchange = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次 ({d}%)"
    },
    title: {
        show: false,
        text: dashTitle24,
        left: 'left',
        textStyle: {
            color: '#555'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        y: '30%',
        data: dashData24x,
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [{
        name: '交换资源次数',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['48%', '58%'],
        data: dashData24y,
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }, {
        name: '产生行为部门',
        type: 'pie',
        radius: ['12%', '13%'],
        center: ['48%', '58%'],
        data: dashData24y,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        }
                }]
};

var optionResourceShare = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{a} <br/>{b} : {c} M"
    },
    legend: {
        data: ['共享资源']
    },
    grid: {
        left: '2%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        // x, line color
        axisLabel: {
            color: '#555'
        },
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['市财政局', '市公安局', '市质监局', '市工商局', '市水利局'],
        // y, line color
        axisLabel: {
            color: '#555'
        },
        axisLine: {
            lineStyle: {
                color: '#EFF3F8'
            }
        }
    },
    color: ['#FFB880', '#4DB7AD', '#C3B5E1', '#5BB0F0', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [
        {
            name: '共享资源',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [612, 802, 951, 1134, 1290]
        }
    ]
};

myChart21.setOption(option21);
myChart22.setOption(option22);
//myChart23.setOption(option23); // change
myChartDepartExchange.setOption(optionDepartExchange);
mychartResourceCP.setOption(optionResourceCP);
mychartResourceShare.setOption(optionResourceShare);

// mychartResourceCP, pie click
var rcpClickMod = 999;
// (1) click -> back
function rcpClickBack() {
    mychartResourceCP.on('click', function (param) {
        location.reload();
    });
}
// (2) click
mychartResourceCP.on('click', function (param) {

    //    alert(param.dataIndex + ':' + optionResourceCP.series[0].data[param.dataIndex].name);
    rcpClickMod = param.dataIndex;
    // click 0:基础信息资源类
    if (0 == rcpClickMod) {
        mychartResourceCP.setOption({
            graphic: [{
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: '点击图形\n刷新',
                    textAlign: 'center',
                    fill: '#D97A80'
                }
            }],
            color: ['#FFB880', '#D97A80', '#e5cf0d', '#95706d'],
            series: [{
                data: dashDataResourceCPChildAy
                }, {
                data: dashDataResourceCPChildAy
                }, {
                data: dashDataResourceCPChildAy_label
                }]
        });
        rcpClickBack();
    }
    // click 1:主题信息资源类
    if (1 == rcpClickMod) {
        mychartResourceCP.setOption({
            graphic: [{
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: '点击图形\n刷新',
                    textAlign: 'center',
                    fill: '#D97A80'
                }
            }],
            color: ['#FFB880', '#D97A80', '#e5cf0d', '#95706d'],
            series: [{
                data: dashDataResourceCPChildBy
                }, {
                data: dashDataResourceCPChildBy
                }, {
                data: dashDataResourceCPChildBy_label
                }]
        });
        rcpClickBack();
    }
    // click 2:部门信息资源类
    if (2 == rcpClickMod) {
        mychartResourceCP.setOption({
            graphic: [{
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: '点击图形\n刷新',
                    textAlign: 'center',
                    fill: '#D97A80'
                }
            }],
            color: ['#FFB880', '#D97A80', '#e5cf0d', '#95706d'],
            series: [{
                data: dashDataResourceCPChildCy
                }, {
                data: dashDataResourceCPChildCy
                }, {
                data: dashDataResourceCPChildCy_label
                }]
        });
        rcpClickBack();
    }

});

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        //        myChart23.resize();
        myChartDepartExchange.resize();
        mychartResourceCP.resize();
        mychartResourceShare.resize();
    }
}, 200);

// main end

// button checking, start
// main21, check
setInterval(function () {
    if (1 == main21Mod) {
        myChart21.setOption({
            xAxis: [{
                data: dashData21x,
                axisLabel: {
                    rotate: 20,
                    color: '#555'
                },
                // x, line color
                axisLine: {
                    lineStyle: {
                        color: '#EFF3F8'
                    }
                }
            }],
            grid: {
                bottom: '0%'
            },
            color: dashColor21,
            series: [{
                name: '该资源被访问次数',
                data: dashData21y
        }]
        });
        main21Mod = 991; // stop freshing...
    }
    if (2 == main21Mod) {
        myChart21.setOption({
            xAxis: [{
                data: dashData21x,
                axisLabel: {
                    rotate: 30,
                    color: '#555'
                },
                // x, line color
                axisLine: {
                    lineStyle: {
                        color: '#EFF3F8'
                    }
                }
            }],
            grid: {
                bottom: '2%'
            },
            color: dashColor21,
            series: [{
                name: '该资源被访问次数',
                data: dashData21y
        }]
        });
        main21Mod = 992; // stop freshing...
    }
    if (3 == main21Mod) {
        myChart21.setOption({
            xAxis: [{
                data: dashData21x,
                axisLabel: {
                    rotate: 45,
                    color: '#555'
                },
                // x, line color
                axisLine: {
                    lineStyle: {
                        color: '#EFF3F8'
                    }
                }
            }],
            grid: {
                left: '6%',
                bottom: '10%'
            },
            color: dashColor21,
            series: [{
                name: '该资源被访问次数',
                data: dashData21y
        }]
        });
        main21Mod = 993; // stop freshing...
    }
}, 200)

// main22, check
setInterval(function () {
    if (1 == main22Mod) {
        //        addData22(true);
        myChart22.setOption({
            xAxis: {
                data: date22
            },
            color: ['#FFB74E'],
            series: [{
                name: '交换流量',
                data: data22
                }, {
                name: '交换次数',
                data: dataA22
                }]
        });
        main22Mod = 991;
    }
}, 200)

setInterval(function () {
    if (3 == main22Mod) {
        myChart22.setOption({
            xAxis: {
                data: dashData22x.slice(13, 20)
            },
            color: ['#FFB74E'],
            series: [{
                name: '交换流量',
                data: dashData22y
                }, {
                name: '交换次数',
                data: dataA22.slice(0, 7)
                }]
        });
        main22Mod = 993; // stop freshing...
    }
    if (4 == main22Mod) {
        myChart22.setOption({
            xAxis: {
                data: dashData22x
            },
            color: ['#FFB74E'],
            series: [{
                name: '交换流量',
                data: dashData22y
                }, {
                name: '交换次数',
                data: dataA22
                }]
        });
        main22Mod = 994; // stop freshing...
    }
}, 200)

// main23, check
setInterval(function () {
    if (1 == main23Mod) {
        myChart23.setOption({
            legend: {
                data: dashData23x
            },
            series: [{
                data: dashData23y
                }, {
                data: dashData23y
                }, {
                data: dashData23y
                }]
        });
        main23Mod = 991; // stop freshing...
    }
    if (2 == main23Mod) {
        myChart23.setOption({
            legend: {
                data: dashData23x
            },
            series: [{
                data: dashData23y
                }, {
                data: dashData23y
                }, {
                data: dashData23y
                }]
        });
        main23Mod = 992; // stop freshing...
    }
    if (3 == main23Mod) {
        myChart23.setOption({
            legend: {
                data: dashData23x
            },
            series: [{
                data: dashData23y
                }, {
                data: dashData23y
                }, {
                data: dashData23y
                }]
        });
        main23Mod = 993; // stop freshing...
    }
}, 200)

// main23, title
setInterval(function () {
    if (1 == main23Title) {
        myChart23.setOption({
            title: {
                text: dashTitle23
            },
            legend: {
                data: dashData23x
            },
            series: [{
                data: dashData23y
                }, {
                data: dashData23y
                }, {
                data: dashData23y
                }]
        });
        main23Title = 881; // stop freshing...
    }
    if (2 == main23Title) {
        myChart23.setOption({
            title: {
                text: dashTitle23
            },
            legend: {
                data: dashData23x
            },
            series: [{
                data: dashData23y
                }, {
                data: dashData23y
                }, {
                data: dashData23y
                }]
        });
        main23Title = 882; // stop freshing...
    }
}, 200)

// mainDepartExchange, check
setInterval(function () {
    if (1 == mainDepartExchangeMod) {
        myChartDepartExchange.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        mainDepartExchangeMod = 991; // stop freshing...
    }
    if (2 == mainDepartExchangeMod) {
        myChartDepartExchange.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        mainDepartExchangeMod = 992; // stop freshing...
    }
    if (3 == mainDepartExchangeMod) {
        myChartDepartExchange.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        mainDepartExchangeMod = 993; // stop freshing...
    }
}, 200)

// mainDepartExchange, title
setInterval(function () {
    if (1 == mainDepartExchangeTitle) {
        myChart24.setOption({
            title: {
                text: dashTitle24
            },
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        mainDepartExchangeTitle = 881; // stop freshing...
    }
    if (2 == mainDepartExchangeTitle) {
        myChart24.setOption({
            title: {
                text: dashTitle24
            },
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        mainDepartExchangeTitle = 882; // stop freshing...
    }
}, 200)

});
