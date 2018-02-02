var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
var myChart23 = echarts.init(document.getElementById('main23'));
var myChart24 = echarts.init(document.getElementById('main24'));
var myChart32 = echarts.init(document.getElementById('main32'));

//// judge the browser, select 'show' or 'do not show' the legend.
//var browser=navigator.appName; // browser name
////alert(browser);
//var ieBrowser = 'Microsoft Internet Explorer';
var legendMode = true;
//if(ieBrowser==browser){
//    legendMode = false;
//}
//// 上述代码主要用于解决在ie下：legend开关操作造成显示错乱的情况。

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

// echart22 - date, data
var base22 = +new Date(2018, 1, 22, 8, 0, 0);
var quaMinute22 = 5 * 60 * 1000;
var date22 = [];
var data22 = [];
var myDate22 = new Date(base22);
var Minute22 = 60;
var nowRe22 = new RegExp("a");
var nowRe22 = /\d+:\d+/;

//        now = [myDate.getHours(), myDate.getMinutes() + 1, myDate.getSeconds()].join(':');

function addData22(shift) {
    now22 = myDate22.toTimeString().match(nowRe22);

    date22.push(now22);
    data22.push((Math.random()-0.03) * 925 + (Math.random()+0.8) * 275 + (Math.random()-0.58) * 480 + (Math.random()+0.36) * 52);
    if (shift) {
        //console.log(data22);
        date22.shift();
        data22.shift();
    }
    myDate22 = new Date(+new Date(myDate22) + quaMinute22);
}

for (var i22 = 0; i22 < 20; i22++) {
    addData22();
}
// end22

var option21 = {
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
        data: ['资源1', '资源2', '资源3', '资源4', '资源5', '资源6', '资源7', '资源8', '资源9', '资源10', '资源11', '资源12', '资源13', '资源14', '资源15', '资源16', '资源17', '资源18', '资源19', '资源20'],
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
        data: [23, 44, 30, 48, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22]
            }]
};

var option22 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date22
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        axisPointer: {
            snap: true
        }
    },
    color: ['#89CA94'],
    grid: {
        left: '4%',
        right: '5%',
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
    series: [{
        name: '交换量',
        type: 'line',
        smooth: true,
        data: data22,
        areaStyle: {
            normal: {
                color: '#BEE1C0'
            }
        }
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
        data: ['法人', '企业', '公共服务', '政府部门', '其他'],
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80'],
    series: [{
        name: '访问数量',
        type: 'pie',
        radius: ['45%', '67%'],
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '法人'
                },
            {
                value: 310,
                name: '企业'
                },
            {
                value: 234,
                name: '公共服务'
                },
            {
                value: 135,
                name: '政府部门'
                },
            {
                value: 1548,
                name: '其他'
                }
            ],
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
        name: '访问数量',
        type: 'pie',
        radius: ['75%', '76%'],
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '法人'
                },
            {
                value: 310,
                name: '企业'
                },
            {
                value: 234,
                name: '公共服务'
                },
            {
                value: 135,
                name: '政府部门'
                },
            {
                value: 1548,
                name: '其他'
                }
            ],
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
        name: '访问数量',
        type: 'pie',
        radius: ['36%', '37%'],
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '法人'
                },
            {
                value: 310,
                name: '企业'
                },
            {
                value: 234,
                name: '公共服务'
                },
            {
                value: 135,
                name: '政府部门'
                },
            {
                value: 1548,
                name: '其他'
                }
            ],
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
        data: ['质监', '公安', '环保', '水利', '工商', '其他'],
        textStyle: {
            color: '#555'
        },
        selectedMode: legendMode
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80', '#81C884'],
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['18%', '72%'],
        center: ['50%', '50%'],
        data: [{
                value: 400,
                name: '质监'
                    },
            {
                value: 335,
                name: '公安'
                    },
            {
                value: 310,
                name: '环保'
                    },
            {
                value: 275,
                name: '水利'
                    },
            {
                value: 263,
                name: '工商'
                    },
            {
                value: 631,
                name: '其他'
                    }
                ],
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
        name: '访问数量',
        type: 'pie',
        radius: ['10%', '11%'],
        center: ['50%', '50%'],
        data: [{
                value: 400,
                name: '质监'
                    },
            {
                value: 335,
                name: '公安'
                    },
            {
                value: 310,
                name: '环保'
                    },
            {
                value: 275,
                name: '水利'
                    },
            {
                value: 263,
                name: '工商'
                    },
            {
                value: 631,
                name: '其他'
                    }
                ],
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
        x: 'left',// percent is OK
        y: 'center',// percent is OK
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

myChart21.setOption(option21);
myChart22.setOption(option22);
myChart23.setOption(option23);
myChart24.setOption(option24);
myChart32.setOption(option32);

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        myChart23.resize();
        myChart24.resize();
        myChart32.resize();
    }
}, 200);

setInterval(function () {
    addData22(true);
    myChart22.setOption({
        xAxis: {
            data: date22
        },
        series: [{
            name: '交换量',
            data: data22
                }]
    });
}, 1000)
