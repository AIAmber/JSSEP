require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar'], function($,BootstrapDialog,grid,toolbar) {
	var toolbarc = $(".table-toolbar").toolbar();
	$('#nodeGrids').bootstrapGrid({
		url:'ExchangeNodeController/findNodeInfo',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		toolbar:'toolbar',
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		toolbar:toolbarc,
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'ID',
	        title: '主键',
	    }, {
	        field: 'ORD',
	        title: '序号',
	        width: '2%'
	    }, {
	        field: 'DEPTCODE',
	        title: '部门代码',
	        width: '8%',
	        sortable:true
	    }, {
	        field: 'DEPTNAME',
	        title: '部门名称',
	        width: '20%'
	    }, {
	        field: 'USERNAME',
	        title: '用户名',
	        width: '8%'
	    }, {
	        field: 'MOBLE',
	        title: '联系电话',
	        width: '8%'
	    }, {
	        field: 'EMAIL',
	        title: '邮箱地址',
	        width: '15%'
	    }, {
	        field: 'POSION',
	        title: '职位',
	        width: '15%'
	    }, {
	        field: 'DATE',
	        title: '时间',
	        width: '8%'
	    },{
	    	 field: 'ID',
	         title: '操作',
	    	formatter:function(value,row,index){
    		 return [
    		         '<div style="width:50px;">',
    		         ' <a class="edit" href="javascript:void(0)" title="Edit">',
    		         '<i class="glyphicon glyphicon-edit"></i>',
    		         '</a>',
    		         ' <a class="remove" href="javascript:void(0)" title="Remove">',
    		         '<i class="glyphicon glyphicon-remove"></i>',
    		         '</a></div>'
    		     ].join('');
	        }
	    }],
	});
	var Dialog = new BootstrapDialog({
		title: '添加交换节点',
		type:'type-primary',
        message: $('#modelContent'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        cssClass:'nodeAdd-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'col-sm-1 btn-success btn-sm',
            action: function(dialogRef){
            	
            	
            	Dialog.close();
            }
        },{
            label: '重置',
            autospin: false,
            icon:'glyphicon glyphicon-repeat',
            cssClass:' col-sm-1 btn-primary btn-sm',
            action: function(dialogRef){
            	
            	
            	Dialog.realize();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm',
            action: function(dialogRef){
            	
            	Dialog.close();
            }
        }]
    });
	$("#btn-add").on("click",function(){
		Dialog.open();
	});
	$("#btn-delete").on("click",function(){
		BootstrapDialog.confirm({
			id:"modelRemove",
	        title: '<span class="glyphicon glyphicon-alert"></span>&nbsp;&nbsp;提示',
	        message: '确实是否删除？',
	        type: BootstrapDialog.TYPE_WARNING,
	        closable: false, 
	        cssClass:'node-dialog',
	        draggable: true, 
	        btnCancelLabel: '取消', 
	        btnCancelClass: 'btn-default btn-sm',
	        btnOKLabel: '确认', 
	        btnOKClass: 'btn-warning btn-sm',
	        callback: function(result) {
	            if(result) {
	            	Dialog.close();
	            }else {
	            	Dialog.close();
	            }
	        }
	    });
	});
});