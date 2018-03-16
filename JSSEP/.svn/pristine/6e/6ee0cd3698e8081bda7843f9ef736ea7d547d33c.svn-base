require(['jquery','Util', 'bootstrap-grid','table-toolbar','bootstrap-dialog'], function($,Util,grid,toolbar,BootstrapDialog) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
		searchEvent:function(){
			gridTable.resetSearch();
		}
	});
	
	var gridTable = $('#grids').bootstrapGrid({
		url:"./catalog/data/data.json",
		uniqueId:'id',								 //主键标识
		toolbarc:tableToolbar,
		customHeight:64,
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
	        field: 'shareType',
	        title: '共享类型',
	        width:'120'
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
	
	$("#navtab").on("click","li",function(){
		if($(this).hasClass("active") == false){
			$("#navtab li").removeClass("active");
			$(this).addClass("active");
			gridTable.resetSearch();
		}
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
});