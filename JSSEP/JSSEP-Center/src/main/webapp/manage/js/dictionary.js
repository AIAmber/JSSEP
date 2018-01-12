require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','ztree'], function($,bootstrapDialog,grid,toolbar,zTree) {
	var toolbarc = $(".table-toolbar").toolbar();
	var gridTable=$('#dicGrids').bootstrapGrid({
		url:'./manage/data/dictionary.json',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		toolbar:'toolbar',
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		toolbar:toolbarc,
		columns:getColumns()
	});
	var gridChildTable=$('#dicChildGrids').bootstrapGrid({
		url:'./manage/data/dictionary.json',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		toolbar:toolbarc,
		columns:getChildColumns()
	})
	function getChildColumns(){
		return [{
			 checkbox: true
	    }, {
	    	visible:false,
	        field: 'ID',
	        title: '主键',
	    }, {
	        field: 'num',
	        title: '顺序号',
	        width: '40%'
	    }, {
	        field: 'fileValue',
	        title: '文本值',
	        width: '40%'
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
		}]
	}
	function getColumns(){
	 return	 [{									
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'ID',
	        title: '主键',
	    }, {
	        field: 'num',
	        title: '顺序号',
	        width: '5%'
	    }, {
	        field: 'dicCode',
	        title: '字典代码',
	        width: '10%',
	    }, {
	        field: 'dicName',
	        title: '字典名称',
	        width: '10%'
	    }, {
	        field: 'dicDiscribe',
	        title: '字典描述',
	        width: '10%'
	    }, {
	        field: 'codeValue',
	        title: '代码值',
	        width: '10%'
	    }, {
	        field: 'strValue',
	        title: '字符值',
	        width: '10%'
	    }, {
	        field: 'fileValue',
	        title: '文本值',
	        width: '10%'
	    }, {
	        field: 'textValue',
	        title: '文件值',
	        width: '10%'
	    }, {
	        field: 'setting',
	        title: '设置',
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
	    }];
	}
	var dialog=new bootstrapDialog({
		title:'新增字典管理',
		type:'type-primary',
        message: $("#dicAddForm"),
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

