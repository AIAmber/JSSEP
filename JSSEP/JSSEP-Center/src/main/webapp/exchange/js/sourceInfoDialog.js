require(['jquery','bootstrap','paginator','bootstrap-table','bootstrap-grid','ztree','Util','bootstrap-dialog','daterangepicker'],function($,bootstrap,paginator,bootstrapTable,bootstrapGrid,ztree,Util,BootstrapDialog){
	//创建对象
	var SourceInfo=function(options){
		//加载默认配置信息
		this.settings=$.extend({},SourceInfo.DEFAULTS,options);
		this.el=$(this.settings.rendTo);
		//初始化整个弹框
		this._initTreeGrid();
	}
	//树的基本信息配置
	SourceInfo.DEFAULTS={
		view:{
			dblClickExpand: false,
			showLine: false,
			showIcon: false
		},
		async: {
			enable: true,
			url:Util.getPath()+"/catalog/data/tree.json",
			autoParam:["id", "name=n"],
			otherParam:{"otherParam":"zTreeAsyncTest"},
			dataFilter: function(treeId, parentNode, childNodes){
				return childNodes.rows;
			}
		}, 
		data: {
		    simpleData: {
		        enable: true
		    }
		},
		callback:{
			onClick:function(event, treeId, treeNode){
				if(treeNode.level == 0){
					gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('itemName','itemNum','项名称')});
				}else if(treeNode.level == 1){
					gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('catalogName','catalogNum','目名称')});
				}else{
					gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('detailCatalogName','detailCatalogNum','细目名称')});
				}
			}
		}
	}
	//配置对象属性
	SourceInfo.prototype={
		//初始换树控件
		_initTree:function(){
			var that = this;
//			debugger;
			$.fn.zTree.init($('resourceInfo').find("#treeContent"), $.extend({},that.settings,{callback:{
				onClick:function(event, treeId, treeNode){
					//刷新列表
					//console.log(treeNode.name);
				}
			}}));
		},
		//初始换列表控件
		_initGrid:function(){
			var that=this;
//			debugger;
			var grid = $('resourceInfo').find('#resourceInfoList').bootstrapGrid({
				url:Util.getPath()+"/exchange/data/data.json",
				method:'post',
				dataType:'json',
				clickToSelect:true,
				singleSelect:true,
				height:385,
				pageShowSize:'small',					//分页样式大小显示
				pageShowTotal:true,						//是否显示总页数
				pageShowCurrentCount:false,   			//当前页显示条数
				autoAdapt:false,						//是否自适应高度
				skipPart:false,  						//跳转模块是否添加
				uniqueId:'id',
				columns:[{							    //数据列
		        		radio: true
				    }, {
				    	visible:false,
				        field: 'id',
				        title: '主键'
				    }, {
				        field: 'sourceName',
				        title: '资源名称'
				    },{
				        field: 'sourceCode',
				        title: '资源代码',
				        width: '20%'
				    },{
				    	field: 'sourceProvider',
				        title: '资源提供方',
				        width: '20%',
				        visible:false
				    	
				    },{
				    	field: 'sourceProviderCode',
				        title: '资源提供方代码',
				        width: '20%',
				        visible:false
				    },{
				    	field: 'publishDate',
				        title: '发布时间',
				        width: '20%',
				        visible:false
				    }
				],
				onDblClickRow:function(row, $element){
			    	that.settings.callback(that.TreeDialog,[row]);
			    }
			});
			this.grid=grid;
		},
		//资源信息弹框对象初始换
		_initTreeGrid:function(){
			this._initTree();		//初始树
			this._initGrid();		//初始换列表
		},
	};
	//提供创建入库
	new SourceInfo();
});