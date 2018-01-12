require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar'], function($,bootstrapDialog,grid,toolbar) {
	var toolbarc = $(".table-toolbar").toolbar();
	$('#userGrids').bootstrapGrid({
		url:'./manage/data/user.json',   //请求的URL
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
	        field: 'num',
	        title: '顺序号',
	        width: '10%'
	    }, {
	        field: 'userName',
	        title: '用户名',
	        width: '10%',
	    }, {
	        field: 'password',
	        title: '密码',
	        width: '10%'
	    }, {
	        field: 'deptFrom',
	        title: '所属部门',
	        width: '15%'
	    }, {
	        field: 'userType',
	        title: '用户类型',
	        width: '15%'
	    }, {
	        field: 'phone',
	        title: '电话',
	        width: '15%'
	    }, {
	        field: 'email',
	        title: '邮箱',
	        width: '15%'
	    }, {
	        field: 'photo',
	        title: '头像',
	        width: '15%'
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
	var dialog=new bootstrapDialog({
		title:'新增用户管理',
		type:'type-primary',
        message: $("#userAddForm"),
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