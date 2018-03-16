require(['jquery','Util', 'bootstrap-grid','table-toolbar'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar({
		searchBarWidth:833,
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
	        field: 'isOpen',
	        title: '启用状态',
	        width: '60',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<i class="fa fa-pause-circle-o bridge-warning bridge-switch bridge-switch-open" title="点击关闭"></i>';
	        	}else{
	        		return '<i class="fa fa-play-circle bridge-success bridge-switch bridge-switch-close" title="点击开启"></i>';
	        	}
	        }
	    }, {
	    	field: 'id',
	        title: '操作',
	        width: '95',
	    	formatter:function(value,row,index){
    			var disable = "";
	    		if(row.isOpen==true){
	    			disable = "disable";
	    		}
	    		return [
	    		        '<a href="#/bridgecnf/view/'+value+'" class="table-operation table-operation-detail fa fa-file-text-o" title="查看"></a>',
	    		 		'<a data-id="'+value+'" class="table-operation table-operation-edit fa fa-pencil-square-o '+disable+'" href="javascript:void(0)" title="修改"></a>',
	    		        '<a data-id="'+value+'" class="table-operation table-operation-del fa fa-trash-o '+disable+'" title="删除"></a>'
	    		     ].join('');
	        }
	    }]
	});
	
	$(".bootstrap-table").on("click",".table-operation-edit",function(){
		var $this = $(this);
		if($this.hasClass("disable")){
			return;
		}
		location.href="#/bridgecnf";
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
				Util.promptSuccessDialog('删除桥接任务信息成功！');
			}
			dialog.close();
		});
	});
	$(".bootstrap-table").on("click",".bridge-switch",function(){
		var $this = $(this);
		var isStart = $this.hasClass("bridge-switch-open");
		var parent = $this.parent();
		if(isStart){
			Util.questionDialog('确定关闭？',function(dialog, result){
				if(result){
					parent.empty();
	        		parent.append('<i class="fa fa-play-circle bridge-success bridge-switch bridge-switch-close" title="点击开启"></i>');
	        		parent.next().find(".table-operation").removeClass("disable");
	        		Util.promptSuccessDialog("关闭成功！");
				}
				dialog.close();
			});
		}else{
			parent.empty();
			parent.append('<i class="fa fa-pause-circle-o bridge-warning bridge-switch bridge-switch-open" title="点击关闭"></i>');
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
					Util.promptSuccessDialog('删除桥接任务信息成功！');
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