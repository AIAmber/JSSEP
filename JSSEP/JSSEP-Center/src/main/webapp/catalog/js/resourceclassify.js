require(['jquery','ztree','Util','bootstrap-dialog','bootstrap-grid','table-toolbar'], function($,ztree,Util,BootstrapDialog) {
	var setting = {
			view:{
				dblClickExpand: false
			},
			async: {
				enable: true,
				url:Util.getPath()+"/catalog/data/tree.json",
				autoParam:["id", "name=n"],
				otherParam:{"otherParam":"zTreeAsyncTest"},
				dataFilter: function(treeId, parentNode, childNodes){
					return childNodes.rows;
				}
			}, 
			data: {
			    simpleData: {
			        enable: true
			    }
			},
			callback:{
				onClick:function(event, treeId, treeNode){
					if(treeNode.level == 0){
						gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('itemName','itemNum','项名称')});
					}else if(treeNode.level == 1){
						gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('catalogName','catalogNum','目名称')});
					}else{
						gridTable.bootstrapTable('refreshOptions', {query: {abc: 123},columns:getColumns('detailCatalogName','detailCatalogNum','细目名称')});
					}
				}
			}
        };
	$.fn.zTree.init($("#treeDemo"), setting);
	
	var tableToolbar = $(".table-toolbar").toolbar();
	
	var gridTable = $('#grids').bootstrapGrid({
			url:"./catalog/data/source.json",
			method:'get',
			dataType:'json',
			queryParams:{},
			singleSelect:false,
			uniqueId:'id',
			toolbar:tableToolbar,
			columns:getColumns('categoryName','categoryNum','类名称'),
		    onLoadSuccess:function(str){
		    }
		});
		
		function getColumns(nameField,numField,title){
			return [{									 //数据列
		        checkbox: true
		    }, {
		    	visible:false,
		        field: 'id',
		        title: '主键'
		    }, {
		        field: nameField,
		        title: title
		    }, {
		        field: numField,
		        title: '数值'
		    }, {
		    	field: 'ID',
		        title: '操作',
		        width: '40',
		    	formatter:function(value,row,index){
	    		 return [
	    		 		'<div style="min-width:40px">'+
	    		         ' <a class="edit" href="javascript:void(0)" title="Edit">',
	    		         '<i class="glyphicon glyphicon-edit"></i>',
	    		         '</a>',
	    		         ' <a class="remove" href="javascript:void(0)" title="Remove">',
	    		         '<i class="glyphicon glyphicon-remove"></i>',
	    		         '</a>',
	    		         '</div>'
	    		     ].join('');
		        }
		    }];
		}
	
	var dialog = new BootstrapDialog({
		title: '添加交换节点',
		type:'type-primary',
        message: $('#modelContent'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        autodestroy:false,
        cssClass:'catalog-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',
            cssClass:'btn-success btn-sm',
            action: function(dialogRef){
            	dialogRef.close();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:'btn-default btn-sm',
            action: function(dialogRef){
            	dialogRef.close();
            }
        }]
    });
    $.fn.zTree.init($("#treeContentDemo"), $.extend({},setting,{callback:{
		onClick:function(event, treeId, treeNode){
			selectTree.close();
			$("#btn-show-select-tree").val(treeNode.name);
		}
	}}));
    var selectTree = new BootstrapDialog({
		title: '添加交换节点',
		type:'type-primary',
		autodestroy:false,
        message: $("#treeContent"),
        closeByBackdrop: false,
        closeByKeyboard: false,
        cssClass:'catalog-dialog-tree catalog-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',
            cssClass:'btn-success btn-sm',
            action: function(dialogRef){
            	dialogRef.close();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:'btn-default btn-sm',
            action: function(dialogRef){
            	dialogRef.close();
            }
        }]
    });
	$("#btn-add").on("click",function(){
		dialog.open();
	});
	$("#btn-show-select-tree").click(function(){
		selectTree.open();
	});
});