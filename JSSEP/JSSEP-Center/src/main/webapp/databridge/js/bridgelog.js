require(['jquery','Util', 'bootstrap-grid','table-toolbar','daterangepicker'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
			searchBarWidth:835,
			searchEvent:function(){
				gridTable.resetSearch();
			}
		});
	
	Util.datecustomRangePicker();
	
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
	        field: 'excuteDesc',
	        title: '执行描述'
	    }, {
	        field: 'excuteTime',
	        title: '执行时间',
	        sortable:true,
	        width: '150'
	    }, {
	        field: 'excuteResult',
	        title: '执行结果',
	        width: '40',
	        formatter:function(value,row,index){
	        	if(value==0){
	        		return '<i class="fa fa-check-circle bridge-success" title="成功"></i>';
	        	}else{
	        		return '<i class="fa fa-exclamation-circle bridge-danger" title="失败"></i>';
	        	}
	        }
	    }, {
	    	field: 'id',
	        title: '操作',
	        width: '64',
	    	formatter:function(value,row,index){
    		 return [
    		         '<a data-id="'+value+'" class="table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
    		     ].join('');
	        }
	    }]
	});
	
	$(".bootstrap-table").on("click",".table-operation-del",function(){
		var $this = $(this);
		Util.questionDialog('确定删除数据？',function(dialog, result){
			if(result){
				var id = $this.attr("data-id");
				var row = gridTable.table("getRowByUniqueId",id);
				//TODO　这里调用后台
				Util.promptSuccessDialog('删除桥接日志信息成功！');
			}
			dialog.close();
		});
	});
	
	$("#btn-delete").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('尚未选择数据，请选择！');
		}else{
			Util.questionDialog('确定删除数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.promptSuccessDialog('删除桥接日志信息成功！');
				}
				dialog.close();
			});
		}
	});
	
	//按钮组效果
	$("#btn-group-tab").on("click","a",function(){
		var $this = $(this);
		if(!$this.hasClass("active")){
			$this.parent().find("a.active").removeClass("active");
			$this.addClass("active");
		}
	});
});