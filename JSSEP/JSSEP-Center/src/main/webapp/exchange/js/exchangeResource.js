require(['jquery', 'bootstrap-grid','table-toolbar','daterangepicker','daterangepicker-zh-CN'], function($,grid,toolbar,datetimepicker) {
	var toolbarc = $(".table-toolbar").toolbar();
	$('#grids').bootstrapGrid({
		url:'ExchangeNodeController/findNodeInfo',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		height:650,									 //表格高度
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
	        title: '资源名称',
	        width: '8%',
	        sortable:true
	    }, {
	        field: 'DEPTNAME',
	        title: '资源代码',
	        width: '20%'
	    }, {
	        field: 'USERNAME',
	        title: '发布日期',
	        width: '8%'
	    }, {
	        field: 'MOBLE',
	        title: '资源提供方',
	        width: '8%'
	    }, {
	        field: 'EMAIL',
	        title: '资源提供方代码',
	        width: '15%'
	    }, {
	        field: 'POSION',
	        title: '资源需求方',
	        width: '15%'
	    }, {
	        field: 'DATE',
	        title: '资源需求方代码',
	        width: '8%'
	    }, {
	        field: 'DATE',
	        title: '是否生效',
	        width: '8%'
	    },{
	    	 field: 'ID',
	         title: '操作 ',
	    	formatter:function(value,row,index){
    		 return ['<div style="width:50px;">',
    		         ' <a class="edit" href="javascript:void(0)" title="Edit">',
    		         '<i class="glyphicon glyphicon-edit"></i>',
    		         '</a>',
    		         ' <a class="remove" href="javascript:void(0)" title="Remove">',
    		         '<i class="glyphicon glyphicon-remove"></i>',
    		         '</a></div>'].join('');
	        }
	    }],
	    onLoadSuccess:function(str){
	    }
	});
	$("#publishDate").daterangepicker({
		autoApply: true,
		singleDatePicker: true,
		opens:'left',
		locale: {
            format: 'YYYY-MM-DD'
        }
	});
});