require(['jquery', 'bootstrap-grid','echarts'], function($,grid,echarts) {
	
	     $("#tubiao").height($('#rightContent').height()-80);
		 var requestResourceCountChart = echarts.init(document.getElementById('requestResourceCountChart'));
		 option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    containLabel: true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		            boundaryGap: false
		        }
		    ],
		    yAxis : [{
		            type : 'value',
		            min:0,
	                max:5000
	                
		    }],
		    series : [
		        {
		            name:'请求资源总数量',
		            type:'line',
		            barWidth: '40%',
		            data:[100, 4500, 2000, 3340, 3900, 1300, 2200],
		            markLine : {
				                data : [
				                    {type : 'average', name : '平均值'}
				                ]
		        	}
		        }
		    ],
		    toolbox: { //可视化的工具箱
                show: true,
                feature: {
                   /* dataView: { //数据视图
                        show: true
                    },*/
                    restore: { //重置
                        show: true
                    },
                    dataZoom: { //数据缩放视图
                        show: true
                    },
                    saveAsImage: {//保存图片
                        show: true
                    },
                    magicType: {//动态类型切换
                        type: ['bar', 'line']
                    }
                }
            }
		};
		requestResourceCountChart.setOption(option);
		
		var requestResourceFlowChart = echarts.init(document.getElementById('requestResourceFlowChart'));
		 option = {
		    color: ['#5CB85C'],
		    tooltip : {
		        trigger: 'axis'
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		            boundaryGap: false,
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [{
		            type : 'value',
		            min:0,
	               max:6000
		    }],
		    series : [
		        {
		            name:'请求资源总流量',
		            type:'line',
		            barWidth: '40%',
		            smooth:true,
            		itemStyle: {normal: {lineStyle : {color:'#89CA94'}}
            				   },
		            data:[2000, 1000, 1300, 3340, 2000, 3300, 2200]
		        }
		    ],
		    calculable : true,
		    toolbox: { //可视化的工具箱
                show: true,
                feature: {
                    restore: { //重置
                        show: true
                    },
                    dataZoom: { //数据缩放视图
                        show: true
                    },
                    saveAsImage: {//保存图片
                        show: true
                    },
                    magicType: {//动态类型切换
                        type: ['bar', 'line']
                    }
                }
            }
		};
		requestResourceFlowChart.setOption(option);
		
		var provideResourceCount = echarts.init(document.getElementById('provideResourceCountChart'));
		option = {
		    tooltip : {
		        trigger: 'axis'
		        /*axisPointer : {            
		            type : 'shadow' 
		        }*/
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		            boundaryGap: false
		        }
		    ],
		    yAxis : [{
		            type : 'value',
		            min:0,
	               max:6000
		    }],
		    series : [
		        {
		            name:'基础信息资源',
		            type:'line',
		            //barWidth: '40%',
		            smooth:true,
            		itemStyle: {normal: {lineStyle : {color:'#9A7FD1'}}},
		            data:[4000, 1000, 5300, 2700, 2000, 5000, 1200],
		            markLine : {
				                data : [
				                    {type : 'average', name : '平均值'}
				                ],
				                itemStyle: {normal: {lineStyle : {color:'#9A7FD1'}}}
		        	}
		        },
		         {
		            name:'主题信息资源',
		            type:'line',
		            barWidth: '40%',
		            smooth:true,
            		itemStyle: {normal: {lineStyle : {color:'#FBB367'}}
            				   },
		            data:[0, 0, 5300, 3340, 2000, 3300, 2200],
		             markLine : {
				                data : [{type : 'average', name : '平均值'}],
				                itemStyle: {normal: {lineStyle : {color:'#FBB367'}}}
		        	}
		        },
		         {
		            name:'部门信息资源',
		            type:'line',
		            barWidth: '40%',
		            smooth:true,
            		itemStyle: {normal: {lineStyle : {color:'#99CC66'}}
            				   },
		            data:[1600, 500, 5300, 3340, 5000, 3300, 4200],
		             markLine : {
				                data : [{type : 'average', name : '平均值'}],
				                itemStyle: {normal: {lineStyle : {color:'#99CC66'}}}
		        	}
		        }
		    ],
		    calculable : true,
		    toolbox: { //可视化的工具箱
                show: true,
                feature: {
                    restore: { //重置
                        show: true
                    },
                    dataZoom: { //数据缩放视图
                        show: true
                    },
                    saveAsImage: {//保存图片
                        show: true
                    },
                    magicType: {//动态类型切换
                        type: ['bar', 'line']
                    }
                }
            }
		};
		provideResourceCount.setOption(option);
		
		var provideResourceFlow = echarts.init(document.getElementById('provideResourceFlowChart'));
		option = {  
                tooltip : {  
                    trigger: 'axis'  
                },  
                legend: {  
                    data:['基础信息资源','主题信息资源','部门信息资源']  
                },  
                toolbox: {  
	                    show : true,  
	                    feature: {
		                    restore: { //重置
		                        show: true
		                    },
		                    dataZoom: { //数据缩放视图
		                        show: true
		                    },
		                    saveAsImage: {//保存图片
		                        show: true
		                    },
		                    magicType: {//动态类型切换
		                        type: ['bar', 'line']
		                    }
	                   }
                },  
                calculable : true,  
                xAxis : [  
                    {  
                        type : 'category',  
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']  
                    }  
                ],  
                yAxis : [  
                    {  
                        type : 'value'
                       // splitArea : {show : true}  
                    }  
                ],  
                series : [  
                    {  
                        name:'基础信息资源',  
                        type:'bar',  
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]  
                    },  
                    {  
                        name:'主题信息资源',  
                        type:'bar',  
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]  
                    }  
                ]  
            };
		provideResourceFlow.setOption(option);
		$(window).resize(function() {
			$("#tubiao").height($('#rightContent').height()-80);
			requestResourceCountChart.resize();
	        requestResourceFlowChart.resize();
	        provideResourceCount.resize();
	        provideResourceFlow.resize();
			
		});
});