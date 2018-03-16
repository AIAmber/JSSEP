require(['jquery','Util', 'bootstrap-grid','table-toolbar'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
		searchEvent:function(){
			gridTable.resetSearch();
		}
	});
	
	var gridTable = $('#grids').bootstrapGrid({
		url:"./databridge/data/bridgerun.json",
		uniqueId:'id',
		toolbarc:tableToolbar,
		columns:[{
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    }, {
	        field: 'taskName',
	        title: '任务名称'
	    }, {
	        field: 'sourceIp',
	        title: '源库地址'
	    }, {
	        field: 'sourceName',
	        title: '源库实例名'
	    }, {
	        field: 'targetIp',
	        title: '目标库地址'
	    }, {
	        field: 'targetName',
	        title: '目标库实例名'
	    }, {
	        field: 'cycle',
	        title: '执行周期'
	    }, {
	        field: 'isRunning',
	        title: '是否运行',
	        width: '40',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<i class="fa fa-play-circle bridge-success" title="正在运行"></i>';
	        	}else{
	        		return '<i class="fa fa-stop-circle bridge-danger" title="已停止"></i>';
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
				Util.successDialog('删除任务成功！');
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
					Util.successDialog('删除桥接信息成功！');
				}
				dialog.close();
			});
		}
	});
	
});