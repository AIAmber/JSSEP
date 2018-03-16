require(['jquery', 'bootstrap-grid','table-toolbar','daterangepicker','daterangepicker-zh-CN'], function($,grid,toolbar,daterangepicker) {
	var toolbarc =  $(".table-toolbar").toolbar({
		defaultFormControlWidth:190
	});
	$('#logGrids').bootstrapGrid({
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
	    }, {
	        field: 'ord',
	        title: '序号',
	        width: '2%'
	    }, {
	        field: 'sourceName',
	        title: '资源名称'
	    }, {
	        field: 'sourceProvider',
	        title: '资源提供方',
	        width: '15%'
	    },{
	        field: 'sourceRequest',
	        title: '资源需求方',
	        width: '15%'
	    }, {
	        field: 'publishDate',
	        title: '交换时间',
	        width: '8%',
	        sortable:true
	    }, {
	        field: 'exchangeVolume',
	        title: '交换量',
	        width: '8%'
	    }, {
	        field: 'exchangeFlow',
	        title: '交换流量',
	        width: '8%'
	    }, {
	        field: 'isStop',
	        title: '交换结果',
	        width: '8%'
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
		autoApply: true,
		opens:'right',
		locale: {
            format: 'YYYY/MM/DD'
        }
	});
});