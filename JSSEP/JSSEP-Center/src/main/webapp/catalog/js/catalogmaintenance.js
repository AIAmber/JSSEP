require(['jquery','Util', 'bootstrap-grid','table-toolbar','daterangepicker-zh-CN'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
		searchBarWidth:787,
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
	        field: 'sourceCode',
	        title: '资源代码',
	        formatter:function(value,row,index){
	        	return '<a href="#/catalogmaintenanceinfoedit/view/'+row.id+'">'+value+'</a>'; 
	        }
	    }, {
	        field: 'sourceName',
	        title: '资源名称'
	    }, {
	        field: 'sourceProviderCode',
	        title: '资源提供方代码'
	    }, {
	        field: 'sourceProvider',
	        title: '资源提供方'
	    }, {
	        field: 'isStop',
	        title: '是否启用',
	        width: '70',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<div class="img-switch img-close" title="停用"></div>';
	        	}else{
	        		return '<div class="img-switch img-open" title="启用"></div>';
	        	}
	        }
	    }, {
	    	field: 'id',
	        title: '操作',
	        width: '95',
	    	formatter:function(value,row,index){
	    		var disable = '';
	    		if(row.isStop==false){
	    			disable='disable';
	    		}
    			return [
	    		         '<a data-id="'+value+'" class="table-operation table-operation-edit fa fa-arrow-circle-o-up '+disable+'" href="javascript:void(0)" title="修改"></a>',
	    		         '<a data-id="'+value+'" class="table-operation table-operation-del fa fa-trash-o '+disable+'" href="javascript:void(0)" title="删除"></a>'
	    		     ].join('');
	        }
	    }]
	});
	
	$(".bootstrap-table").on("click",".table-operation-del",function(){
		var $this = $(this);
		if($this.hasClass("disable")){
			return;
		}
		Util.questionDialog('确定删除数据？',function(dialog, result){
			if(result){
				var id = $this.attr("data-id");
				var row = gridTable.table("getRowByUniqueId",id);
				//TODO　这里调用后台
				Util.promptSuccessDialog('删除资源信息成功！');
			}
			dialog.close();
		});
	});
	
	$(".bootstrap-table").on("click",".table-operation-edit",function(){
		var $this = $(this);
		if($this.hasClass("disable")){
			return;
		}
		location.href="#/catalogmaintenanceinfoedit/edit/"+$this.attr("data-id");
	});
	
	$("#grids").on("click",".img-switch",function(e){
		var $this = $(this);
		var isOpen = $this.hasClass("img-open");
		var parent = $this.parent();
		if(isOpen){
			Util.questionDialog('确定停用该资源？',function(dialog, result){
				if(result){
					parent.empty();
					parent.append('<div class="img-switch img-close" title="停用"></div>');
					parent.next().find(".table-operation").removeClass("disable");
					Util.promptSuccessDialog("停用成功！");
				}
				dialog.close();
			});
		}else{
			parent.empty();
			parent.append('<div class="img-switch img-open" title="启用"></div>');
			parent.next().find(".table-operation-edit").addClass("disable");
			parent.next().find(".table-operation-del").addClass("disable");
			Util.promptSuccessDialog("开启成功！");
		}
		
	});
	
	$("#btn-delete").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('尚未选择数据，请选择！');
		}else{
			Util.questionDialog('确定删除数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.promptSuccessDialog('删除资源信息成功！');
				}
				dialog.close();
			});
		}
	});
	
	$("#btn-download").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('尚未选择数据，请选择！');
		}else{
			Util.questionDialog('确定下载数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.promptErrorDialog("下载失败！");
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
	
	Util.datecustomRangePicker();
});