require(['jquery','Util', 'bootstrap-grid','table-toolbar'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar();
	
	$('#grids').bootstrapGrid({
		url:"./catalog/data/data.json",
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		toolbar:'toolbar',
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		toolbar:tableToolbar,
		columns:[{									 //数据列
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
	        field: 'isStop',
	        title: '停用',
	        width: '70',
	        formatter:function(value,row,index){
	        	if(value==true){
	        		return '<img src="'+Util.getPath()+'/common/img/catalog/switch_close.png" width="35px" title="停用">';
	        	}else{
	        		return '<img src="'+Util.getPath()+'/common/img/catalog/switch_open.png" width="35px" title="启用">';
	        	}
	        }
	    }, {
	    	field: 'ID',
	        title: '操作',
	        width: '40',
	    	formatter:function(value,row,index){
    		 return [
    		 		'<div style="min-width:60px">'+
    		         ' <a class="edit" href="javascript:void(0)" title="Edit">',
    		         '<i class="glyphicon glyphicon-edit"></i>',
    		         '</a>',
    		         ' <a class="remove" href="javascript:void(0)" title="Remove">',
    		         '<i class="glyphicon glyphicon-remove"></i>',
    		         '</a>',
    		         '</div>'
    		     ].join('');
	        }
	    }],
	    onLoadSuccess:function(str){
	    }
	});
});