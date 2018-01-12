require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar'], function($,bootstrapDialog,grid,toolbar) {
	var toolbarc = $(".table-toolbar").toolbar();
	$('#deptGrids').bootstrapGrid({
		url:'./manage/data/deptSource.json',   //请求的URL
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
	        field: 'id',
	        title: '主键',
	    }, {
	        field: 'num',
	        title: '顺序号',
	        width: '5%'
	    }, {
	        field: 'deptCode',
	        title: '部门代码',
	        width: '8%',
	        sortable:true
	    }, {
	        field: 'deptSName',
	        title: '部门简称',
	        width: '8%'
	    }, {
	        field: 'deptName',
	        title: '部门名称',
	        width: '10%'
	    }, {
	        field: 'deptFrom',
	        title: '所属机构',
	        width: '10%'
	    }, {
	        field: 'deptUp',
	        title: '上级部门',
	        width: '10%'
	    }, {
	        field: 'userName',
	        title: '联系人姓名',
	        width: '10%'
	    }, {
	        field: 'userPhone',
	        title: '联系人电话',
	        width: '10%'
	    }, {
	    	 field: 'userEmail',
		        title: '联系人邮箱',
		        width: '10%'
		 }, {
	        field: 'userAddress',
	        title: '办公地址',
	        width: '10%'
	     }, {
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
	
	var dialog=new bootstrapDialog({
		title:'新增部门管理',
		type:'type-primary',
        message: $("#deptAddForm"),
        closeByBackdrop: false,
        closeByKeyboard: false,
        cssClass:'nodeAdd-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:' col-sm-1 btn-primary btn-sm',
            action: function(dialogRef){
            	dialog.close();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-warning btn-sm',
            action: function(dialogRef){
            	dialog.close();
            }
        }]
	})
	$("#btn-add").on("click",function(){
		dialog.open();
	   });
	$("#btn-delete").on("click",function(){
		bootstrapDialog.show({
            message: "确认删除这条信息吗？",
            closeByBackdrop: false,
            closeByKeyboard: false,
            cssClass:'nodeAdd-dialog',
            buttons: [{
            	id:"savebtn",
                label: '确认',
                autospin: false,
                icon: 'glyphicon glyphicon-check',    
                cssClass:' col-sm-1 btn-primary btn-sm',
                action: function(dialogRef){
                    dialogRef.close();
                }
            },{
                label: '取消',
                autospin: false,
                icon:'glyphicon glyphicon-remove',
                cssClass:' col-sm-1 btn-warning btn-sm',
                action: function(dialogRef){
                    dialogRef.close();
                }
            }]
        });
	   });
});