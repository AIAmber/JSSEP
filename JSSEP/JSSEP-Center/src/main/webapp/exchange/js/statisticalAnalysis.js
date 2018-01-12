require(['jquery', 'bootstrap-grid','echarts'], function($,grid,echarts) {
	
		 var requestResourceCountChart = echarts.init(document.getElementById('requestResourceCountChart'));
		 option = {
		    color: ['#FF7878'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
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
		            data : ['资源1', '资源2', '资源3', '资源4', '资源5', '资源6', '资源7','资源8'],
		            axisTick: {
		                alignWithLabel: false
		            }
		        }
		    ],
		    yAxis : [{
		            type : 'value',
		            min:0,
	                max:5000,
		    }],
		    series : [
		        {
		            name:'请求资源总数',
		            type:'bar',
		            barWidth: '40%',
		            data:[100, 520, 2000, 3340, 3900, 3300, 2200,2000]
		        }
		    ]
		};
		requestResourceCountChart.setOption(option);
		
		var requestResourceFlowChart = echarts.init(document.getElementById('requestResourceFlowChart'));
		 option = {
		    color: ['#FF7878'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            
		            type : 'shadow' 
		        }
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
		            data : ['资源1', '资源2', '资源3', '资源4', '资源5', '资源6', '资源7','资源8','资源9','资源10','资源11'],
		            boundaryGap: false,
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [{
		            type : 'value',
		            min:0,
	               max:6000,
		    }],
		    series : [
		        {
		            name:'请求资源总数',
		            type:'line',
		            barWidth: '40%',
		            data:[0, 0, 5300, 3340, 3900, 3300, 2200,2000,5890,4351,4723]
		        }
		    ]
		};
		requestResourceFlowChart.setOption(option);
		
		var provideResourceCount = echarts.init(document.getElementById('provideResourceCountChart'));
		option = {
				title : {
			        text: '某站点用户访问来源',
			        subtext: '纯属虚构',
			        x:'center',
			        left:'80%'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)",
			    },
			    legend: {
			        orient: 'vertical',
			        right:'20%',
			        top:'20%',
			        data: ['前置管理系统','综合管理系统'],
			        formatter: function (name) {
			            return echarts.format.truncateText(name, 100, '1px Microsoft Yahei', '…');
			        },
			        tooltip: {
			            show: true
			        }
			    },
			    grid:{
			    	left:'20%'
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'前置管理系统'},
			                {value:310, name:'综合管理系统'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
		provideResourceCount.setOption(option);
		
		var provideResourceFlow = echarts.init(document.getElementById('provideResourceFlowChart'));
		option = {
			    title : {
			        /*text: '某站点用户访问来源',
			        subtext: '纯属虚构',*/
			        x:'center'
			        //left:'80%'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        right:'20%',
			        top:'40%',
			        data: ['公安局','工商局','税务局','社保局']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'公安局'},
			                {value:310, name:'工商局'},
			                {value:234, name:'税务局'},
			                {value:135, name:'社保局'},
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
		provideResourceFlow.setOption(option);
		$(document).ready(function() {
			$("#tubiao").height($(window).height() - $(".nav.navbar-default.navbar-mystyle.navbar-fixed-top").height() - $(".breadcrumbs").height() - $(".footer").height());
		});
});