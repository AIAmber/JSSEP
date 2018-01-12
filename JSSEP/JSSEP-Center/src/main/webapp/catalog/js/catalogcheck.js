require(['jquery','Util', 'bootstrap-grid','table-toolbar'], function($,Util,grid,toolbar) {
	
	var tableToolbar = $(".table-toolbar").toolbar();
	
	var gridTable = $('#grids').bootstrapGrid({
		url:"./catalog/data/data.json",
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		toolbar:tableToolbar,
		customHeight:64,
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
	        field: 'shareType',
	        title: '共享类型',
	        width:'120'
	    }, {
	    	field: 'ID',
	        title: '操作',
	        width: '40',
	    	formatter:function(value,row,index){
    		 return [
    		 		'<div style="min-width:40px">'+
    		         ' <a class="edit" href="#/catalogcheckdetails" title="Edit">',
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
	$("#navtab").on("click","li",function(){
		if($(this).hasClass("active") == false){
			$("#navtab li").removeClass("active");
			$(this).addClass("active");
			gridTable.bootstrapTable('refresh', {query: {abc: 123}});
		}
	})
});