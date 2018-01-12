define(['jquery','Router'],function($,Router){
	return {
		inint:function(){
			// 创建用户发布正确路由时执行的一些功能。
			/*目录管理*/
			//目录编目
			var catalogprepare = function() {
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录编目");
				$('#secondMenu').attr('href','#/catalogprepare');
				$('#rightContent').load("catalog/catalogprepare.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录注册
			var catalogregistration = function() {
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录注册");
				$('#secondMenu').attr('href','#/catalogregistration');
				$('#rightContent').load("catalog/catalogregistration.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录审核
			var catalogcheck = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录审核");
				$('#secondMenu').attr('href','#/catalogcheck');
				$('#rightContent').load("catalog/catalogcheck.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录发布
			var catalogrelease = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录发布");
				$('#secondMenu').attr('href','#/catalogrelease');
				$('#rightContent').load("catalog/catalogrelease.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			};
			//目录维护
			var catalogmaintenance = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录维护");
				$('#secondMenu').attr('href','#/catalogmaintenance');
				$('#rightContent').load("catalog/catalogmaintenance.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//新建编目
			var newcatalog = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("新建编目");
				$('#secondMenu').attr('href','#/newcatalog');
				$('#rightContent').load("catalog/newcatalog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//资源分类
			var resourceclassify = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("资源分类");
				$('#secondMenu').attr('href','#/resourceclassify');
				$('#rightContent').load("catalog/resourceclassify.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录注册审核
			var catalogregistrationsingle = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录注册审核");
				$('#secondMenu').attr('href','#/catalogregistrationsingle');
				$('#rightContent').load("catalog/catalogregistrationsingle.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//目录发布-待发布
			var catalogtobereleased = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录发布/待发布");
				$('#secondMenu').attr('href','#/catalogtobereleased');
				$('#rightContent').load("catalog/catalogtobereleased.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			var catalogcheckdetails = function(){
				$("#firstMenu").text("目录管理");
				$("#secondMenu").text("目录审核/审核详情");
				$('#secondMenu').attr('href','#/catalogcheckdetails');
				$('#rightContent').load("catalog/catalogcheckdetails.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			
			/*交换管理*/
			//交换节点
			var exchangenode = function(){
				$("#firstMenu").text("交换管理");
				$("#secondMenu").text("交换节点");
				$('#secondMenu').attr('href','#/exchangenode');
				$('#rightContent').load("exchange/exchangeNode.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//交换资源
			var exchangeresource = function(){
				$("#firstMenu").text("交换管理");
				$("#secondMenu").text("交换资源");
				$('#secondMenu').attr('href','#/exchangeresource');
				$('#rightContent').load("exchange/exchangeResource.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//统计分析
			var statisticalanalysis = function(){
				$("#firstMenu").text("交换管理");
				$("#secondMenu").text("统计分析");
				$('#secondMenu').attr('href','#/statisticalanalysis');
				$('#rightContent').load("exchange/statisticalAnalysis.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//交换日志
			var exchangelog = function(){
				$("#firstMenu").text("交换管理");
				$("#secondMenu").text("交换日志");
				$('#secondMenu').attr('href','#/exchangelog');
				$('#rightContent').load("exchange/exchangeLog.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			/*平台管理*/
			//机构管理
			var organization = function(){
				$("#firstMenu").text("平台管理");
				$("#secondMenu").text("机构管理");
				$('#secondMenu').attr('href','#/organization');
				$('#rightContent').load("manage/organization.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//部门管理
			var department = function(){
				$("#firstMenu").text("平台管理");
				$("#secondMenu").text("部门管理");
				$('#secondMenu').attr('href','#/department');
				$('#rightContent').load("manage/department.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//用户管理
			var user = function(){
				$("#firstMenu").text("平台管理");
				$("#secondMenu").text("用户管理");
				$('#secondMenu').attr('href','#/user');
				$('#rightContent').load("manage/user.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//字典管理
			var dictionary = function(){
				$("#firstMenu").text("平台管理");
				$("#secondMenu").text("字典管理");
				$('#secondMenu').attr('href','#/dictionary');
				$('#rightContent').load("manage/dictionary.jsp",null,function(response,status){
					if (status=="success"){
			            document.getElementById('rightContent').innerHTML=response;
			        }
				});
			}
			//字典子项管理
			var dictionarychildren = function(){
				$("#firstMenu").text("平台管理");
				$("#secondMenu").text("字典子项");
				$('#secondMenu').attr('href','#/dictionarychildren');
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
				'/catalogprepare': catalogprepare,
				'/catalogregistration': catalogregistration,
				'/catalogcheck': catalogcheck,
				'/catalogrelease': catalogrelease,
				'/catalogmaintenance': catalogmaintenance,
				'/resourceclassify': resourceclassify,
				'/newcatalog': newcatalog,
				"/catalogregistrationsingle":catalogregistrationsingle,
				"/catalogtobereleased":catalogtobereleased,
				"/catalogcheckdetails":catalogcheckdetails,
				'/exchangenode': exchangenode,
				'/exchangeresource': exchangeresource,
				'/statisticalanalysis': statisticalanalysis,
				'/exchangelog': exchangelog,
				'/organization': organization,
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