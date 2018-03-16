require(['jquery','Util', 'bootstrap-grid','table-toolbar'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
		searchEvent:function(){
			gridTable.resetSearch();
		}
	});
	
	var gridTable = $('#grids').bootstrapGrid({
		url:"./catalog/data/data.json",
		uniqueId:'id',								 //主键标识
		toolbarc:tableToolbar,
		columns:[{
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    }, {
	        field: 'sourceName',
	        title: '资源名称'
	    }, {
	        field: 'sourceCode',
	        title: '资源代码'
	    }, {
	        field: 'sourceProvider',
	        title: '资源提供方'
	    }, {
	        field: 'sourceProviderCode',
	        title: '资源提供方代码'
	    }, {
	        field: 'isStop',
	        title: '停用',
	        width: '70',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<img class="img-switch img-stop" src="'+Util.getPath()+'/catalog/img/switch_close.png" width="35px" title="停用">';
	        	}else{
	        		return '<img class="img-switch img-start" src="'+Util.getPath()+'/catalog/img/switch_open.png" width="35px" title="启用">';
	        	}
	        }
	    }, {
	    	field: 'id',
	        title: '操作',
	        width: '64',
	    	formatter:function(value,row,index){
    		 return [
    		         '<a class="table-operation table-operation-edit fa fa-pencil-square-o" href="javascript:void(0)" title="修改"></a>',
    		         '<a data-id="'+value+'" class="catalog-prepare-delete table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
    		     ].join('');
	        }
	    }]
	});
	
	$(".bootstrap-table").on("click",".catalog-prepare-delete",function(){
		var $this = $(this);
		Util.questionDialog('确定需要删除该条数据？',function(dialog, result){
			if(result){
				var id = $this.attr("data-id");
				var row = gridTable.table("getRowByUniqueId",id);
				//TODO　这里调用后台
				Util.successDialog('删除目录信息成功！');
			}
			dialog.close();
		});
	});
	
	$("#grids").on("click",".img-switch",function(e){
		var $this = $(this);
		var isStart = $this.hasClass("img-start");
		var message = isStart == true ? '确定需要停用该资源？':'确定需要启用该资源？'
		Util.questionDialog(message,function(dialog, result){
			if(result){
				var parent = $this.parent();
				parent.empty();
				if(isStart){
					parent.append('<img class="img-switch img-stop" src="'+Util.getPath()+'/catalog/img/switch_close.png" width="35px" title="停用">');
				}else{
					parent.append('<img class="img-switch img-start" src="'+Util.getPath()+'/catalog/img/switch_open.png" width="35px" title="启用">');
				}
			}
			dialog.close();
		});
	});
	
	$("#btn-delete").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('请选择一项或多项数据进行删除！');
		}else{
			Util.questionDialog('确定需要删除已选择的数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.successDialog('删除目录信息成功！');
				}
				dialog.close();
			});
		}
	});
	
	$("#btn-download").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('请选择一项或多项数据进行下载！');
		}else{
			Util.questionDialog('确定需要下载已选择的数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.dangerDialog("下载失败！");
				}
				dialog.close();
			});
		}
	});
	
	$("#btn-backup").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('请选择一项或多项数据进行备份！');
		}else{
			Util.questionDialog('确定需要备份已选择的数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.dangerDialog("备份失败！");
				}
				dialog.close();
			});
		}
	});
});