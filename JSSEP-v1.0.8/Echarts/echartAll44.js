var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
var myChart23 = echarts.init(document.getElementById('main23'));
var myChart24 = echarts.init(document.getElementById('main24'));
var myChart32 = echarts.init(document.getElementById('main32'));
var myChartAddCPU = echarts.init(document.getElementById('mainAddCPU'));
var myChartAddDisc = echarts.init(document.getElementById('mainAddDisc'));

// 'show' or 'not show' the legend. 是否展示legend
var legendMode = true;

// main21, data, click button to show
var main21Mod = 2;

var data2101x = ['行政许可审批', '环境监测报告', '法人信息', '环保局公文', '社会保险'];
var data2101y = [23, 44, 30, 48, 64];
var data2102x = ['行政许可审批', '环境监测报告', '法人信息', '企业服务', '环境监测报告', '水务报告', '企业信息', '企业纳税记录', '个人征信报告', '法人信用记录'];
var data2102y = [23, 44, 30, 48, 64, 41, 20, 22, 64, 41];
var data2103x = ['行政许可审批', '环境监测报告', '法人信息', '环保局公文', '社会保险', '社会救助', '便民服务事项', '发改委公文', '财政部公文', '北京市公文', '河北省公文', '工商登记', '企业服务', '环境监测报告', '水务报告', '企业信息', '企业纳税记录', '个人征信报告', '法人信用记录', '工商局公文'];
var data2103y = [23, 44, 30, 48, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22];
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
var main22Mod = 3;

var base22 = +new Date(2018, 2, 28, 8, 0, 0);
var quaMinute22 = 5 * 60 * 1000;
var date22 = [];
var data22 = [];
var dataA22 = [];
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
    timeSetBase22Mod30 = timeSetBase22.setTime(timeBase22 - 720 * 60 * 60 * 1000 + 36 * 60 * 60 * 1000 * i22mod);
    MyDate22Mod3 = new Date(timeSetBase22Mod3);
    MyDate22Mod7 = new Date(timeSetBase22Mod7);
    MyDate22Mod30 = new Date(timeSetBase22Mod30);
    Date22Mod3 = MyDate22Mod3.getFullYear() + "." + MyDate22Mod3.getMonth() + "." + MyDate22Mod3.getDate();
    Date22Mod7 = MyDate22Mod7.getFullYear() + "." + MyDate22Mod7.getMonth() + "." + MyDate22Mod7.getDate();
    Date22Mod30 = MyDate22Mod30.getFullYear() + "." + MyDate22Mod30.getMonth() + "." + MyDate22Mod30.getDate();
    Now22Mod3 = MyDate22Mod3.toTimeString();
    Now22Mod7 = MyDate22Mod7.toTimeString();
    Now22Mod30 = MyDate22Mod30.toTimeString();
    checkDate22Mod3.push(Date22Mod3);
    checkDate22Mod7.push(Date22Mod7);
    checkDate22Mod30.push(Date22Mod30);
}

var data2202x = checkDate22Mod3;
var data2202y = [1720, 1344, 1230, 948, 764, 1141, 1620, 1722, 1664, 1541, 1320, 1222, 764, 441, 220, 922, 1564, 1741, 1520, 1322];
var data2203x = checkDate22Mod7;
var data2203y = [3720, 2344, 3230, 1948, 1764, 2141, 2620, 2722, 3664, 2541, 3320, 4222, 2764, 1441, 1220, 1922, 2564, 1741, 2520, 3322];
var data2204x = checkDate22Mod30;
var data2204y = [1720, 3344, 4230, 3948, 2764, 1141, 620, 1722, 2664, 3541, 3320, 4222, 3764, 2441, 2220, 1922, 1564, 1741, 1520, 1322];
var dashData22x = data2203x;
var dashData22y = data2203y;
$("#dash-realtime").click(function () {
    main22Mod = 1;
});
$("#dash-realtime-3days").click(function () {
    main22Mod = 2;
    dashData22x = data2202x;
    dashData22y = data2202y;
});
$("#dash-realtime-7days").click(function () {
    main22Mod = 3;
    dashData22x = data2203x;
    dashData22y = data2203y;
});
$("#dash-realtime-30days").click(function () {
    main22Mod = 4;
    dashData22x = data2204x;
    dashData22y = data2204y;
});
// end22

// main23, data
var data2301x = ['法人信息', '企业信息', '公共服务', '其他'];
var data2301y = [{
    value: 335,
    name: '法人信息'
}, {
    value: 310,
    name: '企业信息'
}, {
    value: 234,
    name: '公共服务'
}, {
    value: 1548,
    name: '其他'
}];
var data2302x = ['法人信息', '企业信息', '公共服务', '社会保险', '行政审批', '其他'];
var data2302y = [{
    value: 335,
    name: '法人信息'
}, {
    value: 310,
    name: '企业信息'
}, {
    value: 234,
    name: '公共服务'
}, {
    value: 135,
    name: '社会保险'
}, {
    value: 335,
    name: '行政审批'
}, {
    value: 1248,
    name: '其他'
}];
var data2302xBy = ['法人信息', '企业信息', '公共服务', '社会保险', '行政审批', '其他'];
var data2302yBy = [{
    value: 365,
    name: '法人信息'
}, {
    value: 320,
    name: '企业信息'
}, {
    value: 244,
    name: '公共服务'
}, {
    value: 165,
    name: '社会保险'
}, {
    value: 385,
    name: '行政审批'
}, {
    value: 1098,
    name: '其他'
}];
var data2303x = ['法人信息', '企业信息', '公共服务', '社会保险', '监测报告', '行政审批', '便民服务', '政府公文', '其他'];
var data2303y = [{
    value: 335,
    name: '法人信息'
}, {
    value: 310,
    name: '企业信息'
}, {
    value: 234,
    name: '公共服务'
}, {
    value: 135,
    name: '社会保险'
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
var main23Mod = 2;
var main23Title = 1;
var dashTitle23 = "资源请求占比";
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

// main24, data
var data2401x = ['质监', '公安', '工商', '其他'];
var data2401y = [{
    value: 400,
    name: '质监'
}, {
    value: 335,
    name: '公安'
}, {
    value: 263,
    name: '工商'
}, {
    value: 631,
    name: '其他'
}];
var data2402x = ['质监', '公安', '环保', '工商', '财政', '其他'];
var data2402y = [{
    value: 400,
    name: '质监'
}, {
    value: 335,
    name: '公安'
}, {
    value: 310,
    name: '环保'
}, {
    value: 275,
    name: '工商'
}, {
    value: 263,
    name: '财政'
}, {
    value: 631,
    name: '其他'
}];
var data2402xBy = ['质监', '公安', '环保', '工商', '财政', '其他'];
var data2402yBy = [{
    value: 359,
    name: '质监'
}, {
    value: 285,
    name: '公安'
}, {
    value: 260,
    name: '环保'
}, {
    value: 245,
    name: '工商'
}, {
    value: 213,
    name: '财政'
}, {
    value: 461,
    name: '其他'
}];
var data2403x = ['质监', '公安', '环保', '水利', '工商', '财政', '教育', '医疗', '其他'];
var data2403y = [{
    value: 400,
    name: '质监'
}, {
    value: 335,
    name: '公安'
}, {
    value: 310,
    name: '环保'
}, {
    value: 275,
    name: '水利'
}, {
    value: 263,
    name: '工商'
}, {
    value: 163,
    name: '财政'
}, {
    value: 563,
    name: '教育'
}, {
    value: 463,
    name: '医疗'
}, {
    value: 631,
    name: '其他'
}];
var dashData24x = data2402x;
var dashData24y = data2402y;
var main24Mod = 2;
var main24Title = 1;
var dashTitle24 = "各部门请求资源占比";
$("#dash-reqPub-req").click(function () {
    main24Title = 1;
    dashTitle24 = "各部门请求资源占比";
    dashData24x = data2402x;
    dashData24y = data2402y;
});
$("#dash-reqPub-pub").click(function () {
    main24Title = 2;
    dashTitle24 = "各部门发布资源占比";
    dashData24x = data2402xBy;
    dashData24y = data2402yBy;
});
$("#dash-request-top3").click(function () {
    main24Mod = 1;
    dashData24x = data2401x;
    dashData24y = data2401y;
});
$("#dash-request-top5").click(function () {
    main24Mod = 2;
    dashData24x = data2402x;
    dashData24y = data2402y;
});
$("#dash-request-top8").click(function () {
    main24Mod = 3;
    dashData24x = data2403x;
    dashData24y = data2403y;
});
// end main24

// main32 btn

var dashData32B = [{
        value: 699,
        name: '系统内存消耗'
                },
    {
        value: 325,
        name: '剩余系统内存'
                }
            ];
var dashData32A = [{
        value: 368,
        name: 'JVM内存消耗'
                },
    {
        value: 725,
        name: '剩余JVM内存'
                }
            ];
var dashData32 = dashData32B;
var main32Mod = 2;
var dashTitle32 = "系统内存";
$("#dash-ram-jvm").click(function () {
    main32Mod = 1;
    dashTitle32 = "JVM内存";
    dashData32 = dashData32A;
});
$("#dash-ram-sys").click(function () {
    main32Mod = 2;
    dashTitle32 = "系统内存";
    dashData32 = dashData32B;
});

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

var option21 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次"
    },
    color: ['#5BB0F0'],
    grid: {
        left: '4%',
        right: '5%',
        top: '7%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: dashData21x,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 0,
            rotate: 20,
            margin: 8,
            textStyle: {
                color: "#555",
                fontsize: "10px"
            }
        }
            }],
    yAxis: [{
        type: 'value',
        name: '访问次数',
        axisLabel: {
            formatter: '{value}次'
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
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data2203x
    },
    yAxis: [{
        type: 'value',
        name: '交换流量',
        position: 'left',
        axisLabel: {
            formatter: '{value} Mb'
        },
        axisPointer: {
            snap: true
        }
    }, {
        type: 'value',
        name: '交换次数',
        position: 'right',
        axisLabel: {
            formatter: '{value} 次'
        },
        axisPointer: {
            snap: true
        }
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
        data: data2203y
            }, {
        name: '交换次数',
        type: 'bar',
        yAxisIndex: 1,
        data: dataA22,
        barCategoryGap: '48%',
            }]
};

var option23 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次 ({d}%)"
    },
    title: {
        text: dashTitle23,
        left: 'left',
        textStyle: {
            color: '#555'
        }
    },
    legend: {
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
        radius: ['45%', '67%'],
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
        radius: ['75%', '76%'],
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
        radius: ['36%', '37%'],
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

var option24 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} 次 ({d}%)"
    },
    title: {
        text: dashTitle24,
        left: 'left',
        textStyle: {
            color: '#555'
        }
    },
    legend: {
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
        name: '产生行为部门',
        type: 'pie',
        radius: ['18%', '72%'],
        center: ['50%', '50%'],
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
        radius: ['10%', '11%'],
        center: ['50%', '50%'],
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

var option32 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} MB ({d}%)"
    },
    graphic: [{
        type: 'text',
        left: '44%',
        top: '51%',
        style: {
            text: '系统内存\n 68%',
            textAlign: 'center',
            fill: '#D97A80'
        }
    }],
    color: ['#D97A80', '#F2D5D6', '#4DB7AD', '#C4E7E4'],
    series: [{
        name: '内存使用情况',
        type: 'pie',
        center: ['50%', '55%'],
        radius: [55, 85],
        avoidLabelOverlap: false,
        data: [{
                value: 699,
                name: '系统内存消耗'
                },
            {
                value: 325,
                name: '剩余系统内存'
                }
            ]
        }]
};

var optionAddCPU = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            name: 'CPU使用率',
            type: 'gauge',
            radius: 60,
            pointer: {
                width: 3
            },
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#89CA94'], [0.8, '#5BB0F0'], [1, '#D97A80']],
                    width: 6
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 8,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 12,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            detail: {
                formatter: '{value}%',
                fontSize: 10,
                fontWeight: 'bolder'
            },
            data: [{
                value: 46,
//                name: 'CPU'
            }]
        }
    ]
}

var optionAddDisc = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
        //        formatter: "{a} <br/>{b} : {c} MB"
    },
    legend: {
        data: ['图片', '文档', '其他', '剩余容量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}Gb'
        },
    },
    yAxis: {
        type: 'category',
        data: ['oradata7', 'oradata6', 'oradata5', 'oradata4', 'oradata3', 'oradata2', 'oradata1']
    },
    color: ['#4DB7AD', '#D97A80', '#FFB880', '#B5BFCE'],
    series: [
        {
            name: '图片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '文档',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '剩余容量',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [603, 648, 671, 564, 495, 375, 425]
        }
    ]
};

myChart21.setOption(option21);
myChart22.setOption(option22);
myChart23.setOption(option23);
myChart24.setOption(option24);
myChart32.setOption(option32);
myChartAddCPU.setOption(optionAddCPU);
myChartAddDisc.setOption(optionAddDisc);

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        myChart23.resize();
        myChart24.resize();
        myChart32.resize();
        myChartAddCPU.resize();
        myChartAddDisc.resize();
    }
}, 200);

// main21, check
setInterval(function () {
    if (1 == main21Mod) {
        myChart21.setOption({
            xAxis: [{
                data: dashData21x,
                axisLabel: {
                    rotate: 0
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
                    rotate: 20
                }
            }],
            grid: {
                bottom: '5%'
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
                    rotate: 35
                }
            }],
            grid: {
                left: '7%',
                bottom: '13%'
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
                }]
        });
        main22Mod = 991;
    }
}, 200)

setInterval(function () {
    if (2 == main22Mod) {
        myChart22.setOption({
            xAxis: {
                data: dashData22x
            },
            color: ['#FFB74E'],
            series: [{
                name: '交换流量',
                data: dashData22y
                }]
        });
        main22Mod = 992; // stop freshing...
    }
    if (3 == main22Mod) {
        myChart22.setOption({
            xAxis: {
                data: dashData22x
            },
            color: ['#FFB74E'],
            series: [{
                name: '交换流量',
                data: dashData22y
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

// main24, check
setInterval(function () {
    if (1 == main24Mod) {
        myChart24.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        main24Mod = 991; // stop freshing...
    }
    if (2 == main24Mod) {
        myChart24.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        main24Mod = 992; // stop freshing...
    }
    if (3 == main24Mod) {
        myChart24.setOption({
            legend: {
                data: dashData24x
            },
            series: [{
                data: dashData24y
                }, {
                data: dashData24y
                }]
        });
        main24Mod = 993; // stop freshing...
    }
}, 200)

// main24, title
setInterval(function () {
    if (1 == main24Title) {
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
        main24Title = 881; // stop freshing...
    }
    if (2 == main24Title) {
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
        main24Title = 882; // stop freshing...
    }
}, 200)

// main32, dash
setInterval(function () {
    if (1 == main32Mod) {
        myChart32.setOption({
            color: ['#4DB7AD', '#C4E7E4'],
            graphic: [{
                type: 'text',
                left: '44%',
                top: '51%',
                style: {
                    text: 'JVM内存\n 33%',
                    textAlign: 'center',
                    fill: '#4DB7AD'
                }
    }],
            series: [{
                data: dashData32
                }]
        });
        main32Mod = 991; // stop freshing...
    }
    if (2 == main32Mod) {
        myChart32.setOption({
            color: ['#D97A80', '#F2D5D6'],
            graphic: [{
                type: 'text',
                left: '44%',
                top: '51%',
                style: {
                    text: '系统内存\n 68%',
                    textAlign: 'center',
                    fill: '#D97A80'
                }
    }],
            series: [{
                data: dashData32
                }]
        });
        main32Mod = 992; // stop freshing...
    }
}, 200)
