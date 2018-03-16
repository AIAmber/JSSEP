define(['jquery','Router'],function($,Router){
	return {
		inint:function(){
			// 创建用户发布正确路由时执行的一些功能。
			//主页
			var home = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>首页</span>");
				$('#rightContent').load("dashboard/dashboard.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			/*目录管理*/
			//目录编目
			var catalogprepare = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录编目</span>");
				$('#rightContent').load("catalog/catalogprepare.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录注册
			var catalogregistration = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录注册</span>");
				$('#rightContent').load("catalog/catalogregistration.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录维护
			var catalogmaintenance = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录维护</span>");
				$('#rightContent').load("catalog/catalogmaintenance.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//新建编目
			var newcatalog = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录编目&nbsp;/&nbsp;新建编目</span>");
				$('#rightContent').load("catalog/newcatalog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录注册-注册审核
			var catalogregistrationsingle = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录注册&nbsp;/&nbsp;注册审核</span>");
				$('#rightContent').load("catalog/catalogregistrationsingle.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录注册-注册审核
			var catalogregistrationfail = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录注册&nbsp;/&nbsp;注册失败</span>");
				$('#rightContent').load("catalog/catalogregistrationfail.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录审核-审核详情
			var catalogcheckdetails = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录审核&nbsp;/&nbsp;审核详情</span>");
				$('#rightContent').load("catalog/catalogcheckdetails.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			/*交换管理*/
			//交换节点
			//统计分析
			var statisticalanalysis = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;统计分析</span>");
				$('#rightContent').load("exchange/statisticalAnalysis.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//交换日志
			var exchangelog = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;交换日志</span>");
				$('#rightContent').load("exchange/exchangeLog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			/*数据桥接*/
			//桥接运行
			var bridgelog = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>数据桥接&nbsp;/&nbsp;桥接运行</span>");
				$('#rightContent').load("databridge/bridgelog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//桥接配置
			var bridgecnf = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>数据桥接&nbsp;/&nbsp;桥接配置</span>");
				$('#rightContent').load("databridge/bridgecnf.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//桥接日志
			var bridgerun = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>数据桥接&nbsp;/&nbsp;桥接日志</span>");
				$('#rightContent').load("databridge/bridgerun.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			var allroutes = function() {
				var route = window.location.hash.slice(2);
			};
			// 定义路由表。
			var routes = {
				'/home': home,
				'/catalogprepare': catalogprepare,
				'/catalogregistration': catalogregistration,
				'/catalogmaintenance': catalogmaintenance,
				'/statisticalanalysis': statisticalanalysis,
				'/catalogregistrationsingle':catalogregistrationsingle,
				'/newcatalog':newcatalog,
				'/exchangelog': exchangelog,
				'/bridgelog': bridgelog,
				'/bridgecnf': bridgecnf,
				'/bridgerun': bridgerun
			};
			// 实例化路由器
			var router = Router(routes);
			// 全局配置设置.
			router.configure({
				on: allroutes
			});
			router.init();
		}
	}
});