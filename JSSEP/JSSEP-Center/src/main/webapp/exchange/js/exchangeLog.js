require(['jquery', 'bootstrap-grid','table-toolbar','daterangepicker','Util','daterangepicker-zh-CN'], function($,grid,toolbar,daterangepicker,Util) {
	var toolbarc =  $(".table-toolbar").toolbar();
	var logGrid = $('#logGrids').bootstrapGrid({
		url:"./exchange/data/data.json",   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		toolbarc:toolbarc,
		queryParams:{},
		singleSelect:false,
		uniqueId:'id',								 //主键标识
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    },{
	        field: 'sourceName',
	        title: '资源名称'
	    }, {
	        field: 'sourceProvider',
	        title: '资源提供方'
	    },{
	        field: 'sourceRequest',
	        title: '资源需求方'
	    }, {
	        field: 'submitTime',
	        title: '交换时间',
	        sortable:true
	    }, {
	        field: 'exchangeVolume',
	        title: '交换量',
	        visible:false
	    }, {
	        field: 'exchangeFlow',
	        title: '交换流量',
	        width: '90'
	    }, {
	        field: 'isStop',
	        title: '交换结果',
	        width: '90',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<i class="fa fa-check-circle" style="color:#6AC180;font-size:18px;" title="交换成功" ></i>';
	        	}else{
	        		return '<i class="fa fa-exclamation-circle" style="color:#E1615F;font-size:18px;" title="交换失败"></i>';
	        	}
	    		
	        }
	    },{
	         title: '操作',
	         width: '64',
	    	formatter:function(value,row,index){
    		 return [
    		         '<a class="table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
    		     ].join('');
	        }
	    }],
	    onLoadSuccess:function(str){
	    }
	});
	$("#reservation").daterangepicker({
		autoUpdateInput: false,
		timePicker: true,
    	timePicker24Hour: true,
		locale: {
            format: 'YYYY-MM-DD HH:mm',
            applyLabel: "确定",
    		cancelLabel: "取消"
        }
	}).on('apply.daterangepicker',function(ev, picker){
		if(picker.singleDatePicker){
			$(this).val(picker.startDate.format(picker.locale.format));
		}else{
			$(this).val(picker.startDate.format(picker.locale.format)+' ~ '+picker.endDate.format(picker.locale.format));
		}
	});
	
	$("#btn-delete").on("click",function(){
		var selectData = logGrid.table("getSelections");
		if(selectData.length>0){
			Util.questionDialog('确定删除数据？',function(dialog, result){
				dialog.close();
				if(result==true){
					Util.promptSuccessDialog('数据删除成功！');
				}
			});
		}else{
			Util.warningDialog('尚未选择数据，请选择！',function(dialog, result){
					dialog.close();
			});
		}
	});
	$('#logGrids').on('click','.table-operation-del',function(){
		Util.questionDialog('确定删除数据？',function(dialog, result){
				if(result==true){
					dialog.close();
					Util.promptSuccessDialog('数据删除成功！');
				}else{
					dialog.close();
				}
		});
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