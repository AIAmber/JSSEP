var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
var myChart23 = echarts.init(document.getElementById('main23'));
var myChart24 = echarts.init(document.getElementById('main24'));
var myChart31 = echarts.init(document.getElementById('main31'));
var myChart32 = echarts.init(document.getElementById('main32'));
var myChart41 = echarts.init(document.getElementById('main41'));

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

var dataAxis31 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
var data31 = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax31 = 500;
var dataShadow31 = [];

for (var i = 0; i < data31.length; i++) {
    dataShadow31.push(yMax31);
}

var option21 = {
    tooltip: {
        show: true
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        data: ['资源1', '资源2', '资源3', '资源4', '资源5']
    },
    color: ['#4DB7AD', '#C3B5E1', '#5BB0F0', '#FFB880', '#D97A80'],
    series: [{
        name: '访问数量',
        type: 'pie',
        radius: ['40%', '62%'],
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '资源1'
                },
            {
                value: 310,
                name: '资源2'
                },
            {
                value: 234,
                name: '资源3'
                },
            {
                value: 135,
                name: '资源4'
                },
            {
                value: 1548,
                name: '资源5'
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
        radius: ['70%', '71%'],
        center: ['50%', '50%'],
        data: [335, 310, 234, 135, 1548],
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
        name: '访问数量',
        type: 'pie',
        radius: ['31%', '32%'],
        center: ['50%', '50%'],
        data: [335, 310, 234, 135, 1548],
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

var option22 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
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
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: '#97D09A'
                }, {
            gt: 6,
            lte: 8,
            color: '#97D09A'
                }, {
            gt: 8,
            lte: 14,
            color: '#97D09A'
                }, {
            gt: 14,
            lte: 17,
            color: '#97D09A'
                }, {
            gt: 17,
            color: '#97D09A'
                }]
    },
    series: [{
        name: '交换量',
        type: 'line',
        smooth: true,
        data: [300, 280, 250, 260, 270, 300, 550, 1600, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#BEE1C0'
                        }])
            }
        }
            }]
};
var option23 = {
    color: ['#5BB0F0'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
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
        data: [23, 44, 30, 48, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22, 64, 41, 20, 22]
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
        data: ['质监', '公安', '环保', '水利', '工商']
    },
    color: ['#9AD6D1', '#C3B5E1', '#86C4F3', '#FECDA1', '#E3A0A5'],
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['15%', '62%'],
        center: ['50%', '50%'],
        data: [{
                value: 335,
                name: '质监'
                    },
            {
                value: 310,
                name: '公安'
                    },
            {
                value: 274,
                name: '环保'
                    },
            {
                value: 235,
                name: '水利'
                    },
            {
                value: 400,
                name: '工商'
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
        radius: ['70%', '71%'],
        center: ['50%', '50%'],
        data: [335, 310, 274, 235, 400],
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
        name: '访问数量',
        type: 'pie',
        radius: ['7%', '8%'],
        center: ['50%', '50%'],
        data: [335, 310, 274, 235, 400],
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

var option31 = {
    xAxis: {
        data: dataAxis31,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [{
        type: 'inside'
            }],
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow31,
            animation: false
                },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#81C683'
                                    },
                            {
                                offset: 0.5,
                                color: '#81C683'
                                    },
                            {
                                offset: 1,
                                color: '#81C683'
                                    }
                                ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2378f7'
                                    },
                            {
                                offset: 0.7,
                                color: '#2378f7'
                                    },
                            {
                                offset: 1,
                                color: '#83bff6'
                                    }
                                ]
                    )
                }
            },
            data: data31
                }
            ]
};

var option32 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: '75%',
        y: '33%',
        data: ['JVM内存消耗', '系统内存消耗', '剩余可用内存']
    },
    color: ['#5BB0F0', '#EBEFF2', '#81C683'],
    series: [{
        name: '内存使用情况',
        type: 'pie',
        center: ['21%', '50%'],
        radius: ['34%', '59%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '20',
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
                            color: '#5BB0F0'
                        }
                    }
                }
                },
            {
                value: 689,
                name: '剩余可用内存'
                }
            ]
        }, {
        name: '内存使用情况',
        type: 'pie',
        center: ['59%', '50%'],
        radius: ['34%', '59%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '20',
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
                            color: '#81C683'
                        }
                    }
                }
                },
            {
                value: 325,
                name: '剩余可用内存'
                }
            ]
        }]
};


var option41 = {
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        itemGap: 12,
        data: ['系统占用', 'JVMAA占用', 'CPU综合负载']
    },
    color: ['#81C683', '#EBEFF2', '#D97A80', '#EBEFF2', '#FFC899', '#EBEFF2', '#E8E8E8', '#E8E8E8'],
    series: [{
            name: 'CPU使用率',
            type: 'pie',
            clockWise: false,
            radius: [64, 80],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            data: [{
                    value: 68,
                    name: '系统占用'
                    },
                {
                    value: 32,
                    name: '系统闲置',
                    //                    itemStyle: placeHolderStyle
                    }
                ]
            },
        {
            name: 'CPU使用率',
            type: 'pie',
            clockWise: false,
            radius: [48, 64],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            data: [{
                    value: 46,
                    name: 'JVMAA占用'
                    },
                {
                    value: 54,
                    name: 'JVMAA闲置',
                    //                    itemStyle: placeHolderStyle
                    }
                ]
            },
        {
            name: 'CPU使用率',
            type: 'pie',
            clockWise: false,
            radius: [32, 48],
            center: ['50%', '50%'],
            itemStyle: dataStyle,
            data: [{
                    value: 52,
                    name: 'CPU综合负载'
                    },
                {
                    value: 48,
                    name: 'CPU综合闲置',
                    //                    itemStyle: placeHolderStyle
                    }
                ]
            }, {
            name: 'CPU',
            type: 'pie',
            radius: ['75%', '76%'],
            center: ['50%', '50%'],
            data: [{
                    value: 100,
                    name: 'CPU'
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
            }, {
            name: 'C',
            type: 'pie',
            radius: ['21%', '22%'],
            center: ['50%', '50%'],
            data: [{
                    value: 100,
                    name: 'C'
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
            }
        ]
};

myChart21.setOption(option21);
myChart22.setOption(option22);
myChart23.setOption(option23);
myChart24.setOption(option24);
myChart31.setOption(option31);
myChart32.setOption(option32);
myChart41.setOption(option41);

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        myChart23.resize();
        myChart24.resize();
        myChart31.resize();
        myChart32.resize();
        myChart41.resize();
    }
}, 200);
