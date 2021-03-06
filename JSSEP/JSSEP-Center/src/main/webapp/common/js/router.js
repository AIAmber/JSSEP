define(['jquery','Router'],function($,Router){
	return {
		inint:function(){
			// 创建用户发布正确路由时执行的一些功能。
			//主页
			var home = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>首页</span>");
				$('#rightContent').load("dashboard/dashboardTest.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//测试主页
			var homePlus = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>首页</span>");
				$('#rightContent').load("dashboard/dashboardPlus.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
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
			var newcatalogview = function() {
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录编目&nbsp;/&nbsp;查看编目</span>");
				$('#rightContent').load("catalog/newcatalogview.jsp",null,function(response,status){
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
			//目录注册-待注册
			var catalogtoberegistration = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录注册&nbsp;/&nbsp;待注册</span>");
				$('#rightContent').load("catalog/catalogtoberegistration.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录注册-已注册
			var catalogalreadyregistration = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录注册&nbsp;/&nbsp;已注册</span>");
				$('#rightContent').load("catalog/catalogalreadyregistration.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录审核
			var catalogcheck = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录审核</span>");
				$('#rightContent').load("catalog/catalogcheck.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录审核-待审核
			var catalogtobecheck = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录审核&nbsp;/&nbsp;待审核</span>");
				$('#rightContent').load("catalog/catalogtobecheck.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录审核-已审核
			var catalogalreadycheck = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录审核&nbsp;/&nbsp;已审核</span>");
				$('#rightContent').load("catalog/catalogalreadycheck.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录发布
			var catalogrelease = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录发布</span>");
				$('#rightContent').load("catalog/catalogrelease.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录发布-待发布
			var catalogtobereleased = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录发布&nbsp;/&nbsp;待发布</span>");
				$('#rightContent').load("catalog/catalogtobereleased.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录发布-已发布
			var catalogalreadyrereleased = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录发布&nbsp;/&nbsp;已发布</span>");
				$('#rightContent').load("catalog/catalogalreadyrereleased.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
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
			//目录维护编辑
			var catalogmaintenanceinfoedit = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;目录维护&nbsp;/&nbsp;目录编辑</span>");
				$('#rightContent').load("catalog/catalogmaintenanceinfoedit.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//资源分类
			var resourceclassify = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>目录管理&nbsp;/&nbsp;资源分类</span>");
				$('#rightContent').load("catalog/resourceclassify.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			/*交换管理*/
			//交换节点
			var exchangenode = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;交换节点</span>");
				$('#rightContent').load("exchange/exchangeNode.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//新增交换节点
			var newexchangenode = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;交换节点&nbsp;/&nbsp;新增交换节点</span>");
				$('#rightContent').load("exchange/newExchangeNode.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			//交换资源
			var exchangeresource = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;交换资源</span>");
				$('#rightContent').load("exchange/exchangeResource.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//新增交换资源节点
			var newexchangeresource = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;交换资源&nbsp;/&nbsp;新增交换资源</span>");
				$('#rightContent').load("exchange/newExchangeResource.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//落地数据查询
			var exchangeDetailed = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;落地数据查询</span>");
				$('#rightContent').load("exchange/exchangeDetailed.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//落地数据详情
            var exchangeDetailInfo = function(){
                $("#headnavigation").empty();
                $("#headnavigation").append("<span>交换管理&nbsp;/&nbsp;落地数据详情</span>");
                $('#rightContent').load("exchange/exchangeDetailInfo.jsp",null,function(response,status){
                    if (status=="success"){
                        document.getElementById('rightContent').innerHTML=response;
                    }
                });
            }
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
			var bridgerun = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>数据桥接&nbsp;/&nbsp;桥接运行</span>");
				$('#rightContent').load("databridge/bridgerun.jsp",null,function(response,status){
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
			var bridgelog = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>数据桥接&nbsp;/&nbsp;桥接日志</span>");
				$('#rightContent').load("databridge/bridgelog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			/*平台管理*/
			//部门管理
			var department = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>平台管理&nbsp;/&nbsp;部门管理</span>");
				$('#rightContent').load("manage/department.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//用户管理
			var user = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>平台管理&nbsp;/&nbsp;用户管理</span>");
				$('#rightContent').load("manage/user.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//字典管理
			var dictionary = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>平台管理&nbsp;/&nbsp;字典管理</span>");
				$('#rightContent').load("manage/dictionary.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//字典子项管理
			var dictionarychildren = function(){
				$("#headnavigation").empty();
				$("#headnavigation").append("<span>平台管理&nbsp;/&nbsp;字典子项</span>");
				$('#rightContent').load("manage/dictionarychildren.jsp",null,function(response,status){
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
				'/homePlus': homePlus,
				'/catalogprepare': catalogprepare,
				'/catalogregistration': catalogregistration,
				'/catalogcheck': catalogcheck,
				'/catalogrelease': catalogrelease,
				'/catalogmaintenance': catalogmaintenance,
				"/catalogmaintenanceinfoedit/:option/:value":catalogmaintenanceinfoedit,
				'/resourceclassify': resourceclassify,
				'/newcatalog': newcatalog,
				'/newcatalogview/:option/:value':newcatalogview,
				"/catalogtoberegistration":catalogtoberegistration,
				"/catalogalreadyregistration":catalogalreadyregistration,
				"/catalogtobereleased":catalogtobereleased,
				"/catalogalreadyrereleased":catalogalreadyrereleased,
				"/catalogtobecheck":catalogtobecheck,
				"/catalogalreadycheck":catalogalreadycheck,
				'/exchangenode': exchangenode,
				'/newexchangenode/:option/:value': newexchangenode,
				'/exchangeresource': exchangeresource,
				'/newexchangeresource/:option/:value': newexchangeresource,
				'/statisticalanalysis': statisticalanalysis,
				'/exchangelog': exchangelog,
				'/exchangeDetailed': exchangeDetailed,
				'/exchangeDetailInfo/:option/:value': exchangeDetailInfo,
				'/bridgelog': bridgelog,
				'/bridgecnf': bridgecnf,
				'/bridgecnf/:option/:value': bridgecnf,
				'/bridgerun': bridgerun,
				'/department': department,
				'/user': user,
				'/dictionary': dictionary,
				'/dictionarychildren':dictionarychildren
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