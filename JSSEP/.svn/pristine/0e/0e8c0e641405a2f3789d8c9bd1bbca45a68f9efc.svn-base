require(['jquery','Util', 'bootstrap-grid','table-toolbar','daterangepicker'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
			searchEvent:function(){
				gridTable.resetSearch();
			}
		});
	
	$("#reservation").daterangepicker({
		autoApply: true,
		locale: {
            format: 'YY/MM/DD'
        }
	});
	
	var gridTable = $('#grids').bootstrapGrid({
		url:"./databridge/data/bridgelog.json",
		uniqueId:'id',								 //主键标识
		toolbarc:tableToolbar,
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    }, {
	        field: 'taskName',
	        title: '任务名称'
	    }, {
	        field: 'excuteTime',
	        title: '执行时间'
	    }, {
	        field: 'excuteResult',
	        title: '执行结果',
	        width: '40',
	        formatter:function(value,row,index){
	        	if(value==0){
	        		return '<i class="fa fa-check-circle bridge-success" title="成功"></i>';
	        	}else if(value==1){
	        		return '<i class="fa fa-times-circle bridge-danger" title="失败"></i>';
	        	}else {
	        		return '<i class="glyphicon glyphicon-time bridge-warning" title="正在执行"></i>';
	        	}
	        }
	    }, {
	        field: 'excuteDesc',
	        title: '执行描述'
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
				Util.successDialog('删除日志成功！');
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
					Util.successDialog('删除桥接日志成功！');
				}
				dialog.close();
			});
		}
	});
});