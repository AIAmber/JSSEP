require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','Util'], function($,bootstrapDialog,grid,toolbar,Util) {
	var toolbarc = $(".table-toolbar").toolbar();
	var gridChildTable=$('#dicChildGrids').bootstrapGrid({
		url:'./manage/data/dictionary.json',   //请求的URL
		uniqueId:'id',								 //主键标识
		toolbarc:toolbarc,
		columns:getChildColumns()
	})
	function getChildColumns(){
		return [{
			 checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键',
	    }, {
	    	field:'codeValue',
	    	title:'代码值',
	    	width:'22%'
	    },{
	    	field:'strValue',
	    	title:'字符值',
	    	width:'22%'
	    },{
	    	field:'fileValue',
	    	title:'文本值',
	    	width:'25%',
	    	formatter:function(value,row,index){
	    		return "<a class='openFileValue' href='javascript:void(0)'>查看</a>";
	    	}
	    }
	    , {
	        field: 'textValue',
	        title: '文件值',
	        width: '20%',
	        formatter:function(value,row,index){
	        	return "<a href='javascript:void(0)'>下载</a>"
	        }
	    },{
	    	 field: 'id',
	         title: '操作',
	    	formatter:function(value,row,index){
	    		return [
	    			'<a class=" correctDialog table-operation table-operation-edit fa fa-pencil-square-o" href="javascript:void(0)" title="修改"></a>',
   		         '<a  data-id="'+value+'" class="table-delete table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
	   		     ].join('');
	    	}
		}]
	};
	
	     //  查看文本值详细信息
	     var fileDialog=new bootstrapDialog({
	    	 title:'文本值详细信息',
				type:'type-default',
			    message:"jdafgk;algka;lfjka;fdakfadDSADSvcx",
			    closeByBackdrop: false,
			    closeByKeyboard: false,
			    autodestroy:false,
			    draggable:true,
			    cssClass:'dictionaryChildDialog',
			    buttons: [{
			        label: '关闭',
			        autospin: false,
			        icon:'glyphicon glyphicon-remove',
			        cssClass:' btn-default btn-sm',
			        action: function(dialogRef){
			        	dialogRef.close();
			        }
			    }]
	    	 
	     });
	    	 $(".openFileValue").on("click",function(){
	    		  fileDialog.open(); 
	    	 });
	    	//文件上传功能
	    		$("#fileContent").on("change", function(){
	    			var name=this.value;
	    			if(name != null && name != ''){
	    		    	name = name.substring(name.lastIndexOf('\\') + 1); 
	    			}
	    		    $("#fileName").val(name);
	    		});
	    		$("#selectFile").click(function(){
	    			$("#fileContent").click();
	    		});
	     //新增字典子项管理模态框
	        var childAddForm=$("#childAddForm"); 
			var dialog=new bootstrapDialog({
				type:'type-default',
			    message: $("#childAddForm"),
			    closeByBackdrop: false,
			    closeByKeyboard: false,
			    autodestroy:false,
			    draggable:true,
			    cssClass:'dictionaryDialog',
			    buttons: [{
			        label: '保存',
			        autospin: false,
			        icon: 'glyphicon glyphicon-check',    
			        cssClass:'  btn-success btn-sm',
			        action: function(dialogRef){
			        	if(!childAddForm.valid()){
		     				childAddInfo.focusInvalid()
		     				return;
		     			}
			        	dialogRef.close();
			        	$("#childAddForm")[0].reset();
			        }
			    },{
			        label: '取消',
			        autospin: false,
			        icon:'glyphicon glyphicon-remove',
			        cssClass:' btn-default btn-sm',
			        action: function(dialogRef){
			        	dialogRef.close();
			        	childAddInfo.resetForm();
			        	$("#childAddForm")[0].reset();
			        }
			    }]
			});
			
			$("#btn-add").on("click",function(){
				dialog.setTitle("新增字典子项管理");
				dialog.open();
			   });
			
			$(".correctDialog").on("click",function(){
				dialog.setTitle("修改字典子项管理");
				dialog.open();
			});
			
			//表单校验
		var childAddInfo=Util.validate("childAddForm",{
				rules:{
					codeValue:{
						required:true
					},
					strValue:{
						required:true
					},
					fileValue:{
						required:true
					},
					dicNum:{
						required:true
					}
				},
				messages:{
					codeValue:{
						required:"请输入代码值"
					},
					strValue:{
						required:"请输入字符值"
					},
					fileValue:{
						required:"请输入文本值"
					},
					dicNum:{
						required:"请输入顺序号"
					}
				}
			});
		
			$(".bootstrap-table").on("click",".table-delete",function(){
				var $this = $(this);
				Util.questionDialog('确定删除数据？',function(dialog, result){
					if(result){
						var id = $this.attr("data-id");
						var row = gridChildTable.table("getRowByUniqueId",id);
						//TODO　这里调用后台
						Util.promptSuccessDialog('删除字典子项信息成功！');
					}
					dialog.close();
				});
			});
			
			$("#btn-delete").click(function(){
				var items = gridChildTable.table('getSelections');
				if(items.length==0){
					Util.warningDialog('尚未选择数据，请选择！');
				}else{
					Util.questionDialog('确定删除数据？',function(dialog, result){
						if(result){
							//TODO　这里调用后台
							Util.promptSuccessDialog('删除字典子项信息成功！');
						}
						dialog.close();
					});
				}
			});
});
