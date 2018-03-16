require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','Util','daterangepicker','daterangepicker-zh-CN'], function($,BootstrapDialog,grid,toolbar,Util,daterangepicker) {
	var toolbarc = $(".table-toolbar").toolbar({});
	var nodeGrid = $('#nodeGrids').bootstrapGrid({
		url:'ExchangeNodeController/findNodeInfo',   //请求的URL
		dataType:'json',							 //参数类型
		singleSelect:false,
		queryParams:{},
		uniqueId:'id',								 //主键标识
		toolbarc:toolbarc,
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    }, {
	        field: 'orgCode',
	        title: '部门代码',
	        width: '8%',
	        formatter:function(value,row,index){
	        	return '<a href="#/newexchangenode/view/'+row.id+'" class="table-operation table-operation-detail"  href="javascript:void(0)">'+value+'</a>';
	        }
	    }, {
	        field: 'orgName',
	        title: '部门名称'
	    }, {
	        field: 'linkName',
	        title: '联系人姓名'
	    }, {
	        field: 'linkPhone',
	        title: '联系人电话'
	    }, {
	        field: 'linkEmail',
	        title: '联系人邮箱'
	    }, {
	        field: 'accessTime',
	        title: '创建时间',
	        sortable:true
	    }, {
	    	 field: 'id',
	         title: '操作',
	         width: '90',
	    	formatter:function(value,row,index){
    		 return [ '<a href="#/newexchangenode/update/'+row.id+'" class="table-operation table-operation-edit fa fa-pencil-square-o" href="javascript:void(0)" title="修改"></a>',
    		         '<a class="table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
    		     ].join('');
	        }
	    }],
	    onDblClickRow:function(row, $element){
	    	location.href='#/newexchangenode/update/'+row.id;
	    }
	});
	
	
	$("#exchangeDate").daterangepicker({
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
		var selectData = nodeGrid.table("getSelections");
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
	$('#nodeGrids').on('click','.table-operation-del',function(){
		Util.questionDialog('确定删除数据？',function(dialog, result){
				if(result==true){
					dialog.close();
					Util.promptSuccessDialog('数据删除成功！');
				}else{
					dialog.close();
				}
		});
	});
});