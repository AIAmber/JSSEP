var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
var myChart23 = echarts.init(document.getElementById('main23'));
var myChart24 = echarts.init(document.getElementById('main24'));
//var myChart32 = echarts.init(document.getElementById('main32'));
//var myChartAddCPU = echarts.init(document.getElementById('mainAddCPU'));
var myChartAddSif = echarts.init(document.getElementById('mainAddSif'));

// 'show' or 'not show' the legend. 是否展示legend
var legendMode = true;

// main21, data, click button to show
var main21Mod = 1;

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
    main21Mod = 1; // shift control...
    dashColor21 = ['#5BB0F0'];
    dashData21x = data2102x;
    dashData21y = data2102y;
});
$("#dash-count-top20").click(function () {
    main21Mod = 1; // shift control...
    dashColor21 = ['#81C884'];
    dashData21x = data2103x;
    dashData21y = data2103y;
});
// end21

// main22 - realtime, date, data
var main22Mod = 2;

var base22 = +new Date(2018, 1, 28, 8, 0, 0);
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
    nowNumA22 = (Math.random() - 0.03) * 105 + (Math.random() + 0.8) * 26 + (Math.random() - 0.58) * 49 + (Math.random() + 0.36) * 5;
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
var timeBase22 = myDate22.getTime();
var timeSetBase22 = new Date(base22);

timeSetBase22Mod3 = timeSetBase22.setTime(timeBase22 - 3.6 * 60 * 60 * 1000);
timeSetBase22Mod7 = timeSetBase22.setTime(timeBase22 - 8.4 * 60 * 60 * 1000);
var MyDate22Mod3 = new Date(timeSetBase22Mod3);
var MyDate22Mod7 = new Date(timeSetBase22Mod7);

for (var i22mod = 0; i22mod < 20; i22mod++) {
    timeSetBase22Mod3 = timeSetBase22.setTime(timeBase22 - 72 * 60 * 60 * 1000 + 3.6 * 60 * 60 * 1000 * i22mod);
    timeSetBase22Mod7 = timeSetBase22.setTime(timeBase22 - 168 * 60 * 60 * 1000 + 8.4 * 60 * 60 * 1000 * i22mod);
    MyDate22Mod3 = new Date(timeSetBase22Mod3);
    MyDate22Mod7 = new Date(timeSetBase22Mod7);
    Date22Mod3 = MyDate22Mod3.getFullYear() + "." + MyDate22Mod3.getMonth() + "." + MyDate22Mod3.getDate();
    Date22Mod7 = MyDate22Mod7.getFullYear() + "." + MyDate22Mod7.getMonth() + "." + MyDate22Mod7.getDate();
    Now22Mod3 = MyDate22Mod3.toTimeString();
    Now22Mod7 = MyDate22Mod7.toTimeString();
    checkDate22Mod3.push(Date22Mod3 + " " + Now22Mod3.match(nowRe22));
    checkDate22Mod7.push(Date22Mod7 + " " + Now22Mod7.match(nowRe22));
}

var data2202x = checkDate22Mod3;
var data2202y = [1720, 1344, 1230, 948, 764, 1141, 1620, 1722, 1664, 1541, 1320, 1222, 764, 441, 220, 922, 1564, 1741, 1520, 1322];
var data2203x = checkDate22Mod7;
var data2203y = [3720, 2344, 3230, 1948, 1764, 2141, 2620, 2722, 3664, 2541, 3320, 4222, 2764, 1441, 1220, 1922, 2564, 1741, 2520, 3322];
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
var data2302x = ['法人信息', '企业信息', '公共服务', '政府部门', '行政审批', '其他'];
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
    name: '政府部门'
}, {
    value: 335,
    name: '行政审批'
}, {
    value: 1248,
    name: '其他'
}];
var data2303x = ['法人信息', '企业信息', '公共服务', '政府部门', '监测报告', '行政审批', '便民服务', '政府公文', '其他'];
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
    name: '政府部门'
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

// sif
var cpu_r = 100;
var cpu_y = '85%';
var cpu_title = '-25%';
var cpu_detail = 21;

var option21 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%) 次"
    },
    color: ['#5BB0F0'],
    grid: {
        left: '4%',
        right: '5%',
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: dashData21x,
        axisTick: {
            alignWithLabel: true
        }
            }],
    yAxis: [{
        type: 'value'
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
        data: date22
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
    color: ['#89CA94', '#5BB0F0'],
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
        data: data22,
        areaStyle: {
            normal: {
                color: '#BEE1C0'
            }
        }
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
        show: true
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        data: dashData23x,
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [{
        name: '请求数量',
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
        name: '请求数量',
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
        name: '请求数量',
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
        show: true
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        data: dashData24x,
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#97b552', '#e5cf0d', '#95706d', '#8d98b3'],
    series: [{
        name: '部门请求',
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
        name: '部门请求',
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
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left', // percent is OK
        y: 'center', // percent is OK
        data: ['JVM内存消耗', '系统内存消耗', '剩余JVM内存', '剩余系统内存'],
        selectedMode: legendMode
    },
    color: ['#D97A80', '#F2D5D6', '#4DB7AD', '#C4E7E4'],
    series: [{
        name: '内存使用情况',
        type: 'pie',
        center: ['45%', '50%'],
        radius: [39, 75],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '21',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: 'JVM内存消耗',
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'normal',
                            color: '#E09196'
                        }
                    }
                }
                },
            {
                value: 689,
                name: '剩余JVM内存'
                }
            ]
        }, {
        name: '内存使用情况',
        type: 'pie',
        center: ['82%', '50%'],
        radius: [39, 75],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '21',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 699,
                name: '系统内存消耗',
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'normal',
                            color: '#71C6BE'
                        }
                    }
                }
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
            radius: 100,
            pointer: {
                width: 5
            },
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']],
                    width: 8
                }
            },
            detail: {
                formatter: '{value}%'
            },
            data: [{
                value: 50,
                name: 'CPU'
            }]
        }
    ]
}

var optionAddSif = {
    backgroundColor: 'white',
    title: {
        text: "最近10次CPU采样结果",
        itemGap: 270,
        subtext: "当前CPU采样",
        subtextStyle: {
            fontSize: 15,
            fontWeight: 'bolder',
            color: '#333'
        },
        sublink: "http://www.baidu.com"
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ["空闲率", "系统使用率", "用户使用率", "I/O等待率", "告警阀值"]
    },
    toolbox: {
        show: true,
        feature: {
            //mark : {show : true},  
            //dataView : {show : true,readOnly : false},  
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            //restore : {show : true},  
            saveAsImage: {
                show: true
            }
        }
    },

    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['第1次采样', '第2次采样', '第3次采样', '第4次采样', '第5次采样', '第6次采样', '第7次采样', '第8次采样', '第9次采样', '第10次采样']
            }],

    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        },
        splitArea: {
            show: true
        }
            }],

    grid: {
        width: '80%', //直角坐标轴占整页的百分比  
        height: '43%'
    },

    series: [
        {
            name: '空闲率',
            type: 'gauge',
            center: ['15%', cpu_y], //圆心坐标，支持绝对值（px）和百分比  
            radius: cpu_r, //仪表盘的半径  
            splitNumber: 10, // 分割段数，默认为5  
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#ff4500'],
                                        [0.8, '#48b'], [1, '#228b22']],
                    width: 8
                }
            },
            axisTick: { // 坐标轴小标记  
                splitNumber: 10, // 每份split细分多少段  
                length: 12, // 属性length控制线长  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: 'auto'
                }
            },
            axisLabel: { // 坐标轴文本标签，详见axis.axisLabel  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto'
                }
            },
            splitLine: { // 分隔线  
                show: true, // 默认显示，属性show控制显示与否  
                length: 30, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                show: true,
                offsetCenter: [0, cpu_title], // x, y，单位px  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    fontWeight: 'bolder',
                    fontSize: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize: cpu_detail
                }
            },
            data: [{
                value: 10,
                name: '空闲率'
                        }]
                    },
        {
            name: '系统使用率',
            type: 'gauge',
            center: ['39%', cpu_y], //圆心坐标，支持绝对值（px）和百分比  
            radius: cpu_r, //仪表盘的半径  
            splitNumber: 10, // 分割段数，默认为5  
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#228b22'],
                                        [0.8, '#48b'], [1, '#ff4500']],
                    width: 8
                }
            },
            axisTick: { // 坐标轴小标记  
                splitNumber: 10, // 每份split细分多少段  
                length: 12, // 属性length控制线长  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: 'auto'
                }
            },
            axisLabel: { // 坐标轴文本标签，详见axis.axisLabel  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto'
                }
            },
            splitLine: { // 分隔线  
                show: true, // 默认显示，属性show控制显示与否  
                length: 30, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                show: true,
                offsetCenter: [0, cpu_title], // x, y，单位px  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    fontWeight: 'bolder',
                    fontSize: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize: cpu_detail
                }
            },
            data: [{
                value: 20,
                name: '系统使用率'
                        }]
                    },
        {
            name: '用户使用率',
            type: 'gauge',
            center: ['62%', cpu_y], //圆心坐标，支持绝对值（px）和百分比  
            radius: cpu_r, //仪表盘的半径  
            splitNumber: 10, // 分割段数，默认为5  
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#228b22'],
                                        [0.8, '#48b'], [1, '#ff4500']],
                    width: 8
                }
            },
            axisTick: { // 坐标轴小标记  
                splitNumber: 10, // 每份split细分多少段  
                length: 12, // 属性length控制线长  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: 'auto'
                }
            },
            axisLabel: { // 坐标轴文本标签，详见axis.axisLabel  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto'
                }
            },
            splitLine: { // 分隔线  
                show: true, // 默认显示，属性show控制显示与否  
                length: 30, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                show: true,
                offsetCenter: [0, cpu_title], // x, y，单位px  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    fontWeight: 'bolder',
                    fontSize: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize: cpu_detail
                }
            },
            data: [{
                value: 40,
                name: '用户使用率'
                        }]
                    },
        {
            name: 'IO等待率',
            type: 'gauge',
            center: ['85%', cpu_y], //圆心坐标，支持绝对值（px）和百分比  
            radius: cpu_r, //仪表盘的半径  
            splitNumber: 10, // 分割段数，默认为5  
            axisLine: { // 坐标轴线  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: [[0.2, '#228b22'],
                                        [0.8, '#48b'], [1, '#ff4500']],
                    width: 8
                }
            },
            axisTick: { // 坐标轴小标记  
                splitNumber: 10, // 每份split细分多少段  
                length: 12, // 属性length控制线长  
                lineStyle: { // 属性lineStyle控制线条样式  
                    color: 'auto'
                }
            },
            axisLabel: { // 坐标轴文本标签，详见axis.axisLabel  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto',
                    //fontSize : 12  
                }
            },
            splitLine: { // 分隔线  
                show: true, // 默认显示，属性show控制显示与否  
                length: 30, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                show: true,
                offsetCenter: [0, cpu_title], // x, y，单位px  
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    fontWeight: 'bolder',
                    fontSize: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE  
                    color: 'auto',
                    fontWeight: 'bolder',
                    fontSize: cpu_detail
                }
            },
            data: [{
                value: 70,
                name: 'I/O等待率'
                        }]
                    },


//============================================================================================================            

        {
            name: '空闲率',
            type: 'line',
            data: [21, 22, 23, 27, 25, 28, 31, 25, 25, 25] //必须是Integer类型的,String计算平均值会出错  
                    },
        {
            name: '系统使用率',
            type: 'line',
            data: [13, 12, 13, 11, 14, 18, 21, 14, 14, 14] //必须是Integer类型的,String计算平均值会出错  
                    },
        {
            name: '用户使用率',
            type: 'line',
            data: [32, 33, 32, 31, 32, 38, 21, 32, 32, 32] //必须是Integer类型的,String计算平均值会出错  
                    },
        {
            name: 'I/O等待率',
            type: 'line',
            data: [22, 21, 23, 24, 25, 22, 11, 22, 22, 22] //必须是Integer类型的,String计算平均值会出错  
                    },
        {
            name: '告警阀值',
            type: 'line',
            itemStyle: {
                normal: {
                    color: 'red',
                    lineStyle: {
                        width: 5
                    }
                }
            },
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70] //必须是Integer类型的,String计算平均值会出错  

                    }
            ]
};

myChart21.setOption(option21);
myChart22.setOption(option22);
myChart23.setOption(option23);
myChart24.setOption(option24);
//myChart32.setOption(option32);
//myChartAddCPU.setOption(optionAddCPU);
myChartAddSif.setOption(optionAddSif);

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        myChart23.resize();
        myChart24.resize();
        //        myChart32.resize();
        //        myChartAddCPU.resize();
        myChartAddSif.resize();
    }
}, 200);

// main21, check
setInterval(function () {
    if (1 == main21Mod) {
        myChart21.setOption({
            xAxis: {
                data: dashData21x
            },
            color: dashColor21,
            series: [{
                name: 'test',
                data: dashData21y
        }]
        });
        main21Mod = 991; // stop freshing...
    }
}, 200)

// main22, check
setInterval(function () {
    if (1 == main22Mod) {
        addData22(true);
        myChart22.setOption({
            xAxis: {
                data: date22
            },
            color: ['#89CA94'],
            series: [{
                name: '交换量',
                data: data22,
                areaStyle: {
                    normal: {
                        color: '#BEE1C0'
                    }
                }
                }]
        });
    }
}, 1000)

setInterval(function () {
    if (2 == main22Mod) {
        myChart22.setOption({
            xAxis: {
                data: dashData22x
            },
            color: ['#5BB0F0'],
            series: [{
                name: '交换量',
                data: dashData22y,
                areaStyle: {
                    normal: {
                        color: '#B2DAF8'
                    }
                }
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
                name: '交换量',
                data: dashData22y,
                areaStyle: {
                    normal: {
                        color: '#FFC878'
                    }
                }
                }]
        });
        main22Mod = 993; // stop freshing...
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