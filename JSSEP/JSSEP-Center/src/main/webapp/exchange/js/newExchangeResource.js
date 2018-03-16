require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','daterangepicker','Util','sourceInfoDialog',
		 'bootstrap-switch','jquery-validate','jquery-validate-messages-zh','daterangepicker-zh-CN'], 
function($,BootstrapDialog,grid,toolbar,daterangepicker,Util,sourceInfoDialog,bootstrapSwitch,jqueryValidate) {
	var params = Util.getAnchorObject();
	//查看
	if(params.option=="view"){
		$('#btn_submit').hide();
		$('#btn_resetForm').hide();
		$('#btn_cancel').hide();
		$('#btn_back').show();
		$('.form-control').attr("disabled",true);
		$('.addRequersData span').css('pointer-events','none');
		$('#resourceName').css('cursor','not-allowed');
		$('#releaseDate').css('cursor','not-allowed');
	//新增、修改
	}else{
		$('#btn_submit').show();
		$('#btn_resetFrom').show();
		$('#btn_cancel').show();
		$('#btn_back').hide();
		$('.form-control').attr("disabled",false);
		$('.addRequersData span').css('pointer-events','auto');
		$('#resourceName').css('cursor','pointer');
		$('#releaseDate').css('cursor','pointer');
	}
	//是否按钮	
	$("[name='inlineRadioOptions']").bootstrapSwitch({
		 onText:"是",  
	     offText:"否",
	     onColor:"success",  
         offColor:"warning",  
         size:"small",
         animate:false,
         onSwitchChange:function(event,state){  
            if(state==true){  
                $(this).val("1");  
            }else{  
                $(this).val("2");
            }  
        }  
	});
	//发布日期
	$("#releaseDate").daterangepicker({
		autoUpdateInput:false,
		autoApply: true,
		singleDatePicker: true,
		opens:'left',
		locale: {
            format: 'YYYY-MM-DD'
        }
	});
	//标记位：标记是否是初次打开弹框
	var flag=false;
	//选择容器
	var sourceRequestContar= {};
	//资源名称选择事件
	$("#resourceName").click(function(){
		var sourceInfo = sourceInfoDialog.createSourceInfo({
			rendTo:'#sourceDialog',
			callback:function(dialogRef,selectData){
				if(selectData.length>0){
					$('#resourceName').val(selectData[0].sourceName);
					$('#resourceCode').val(selectData[0].sourceCode);
					$('#resourceProvider').val(selectData[0].sourceProvider);
					$('#resourceProviderCode').val(selectData[0].sourceProviderCode);
					$('#releaseDate').val(selectData[0].publishDate);
					var newExchangeNodeForm = $("#newExchangeResourceForm");
					newExchangeNodeForm.validate().element($("#resourceName"));
					dialogRef.close();
				}else{
					Util.warningDialog('尚未选择数据，请选择！',function(dialog, result){
						dialog.close();
					});
				}
			}
		});
		sourceInfo.open();
	});
	//部门信息弹框
	var orgInfoGrid = $('#orgInfo').bootstrapGrid({
		url:'ExchangeNodeController/findNodeInfo',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		singleSelect:false,
		skipPart:false,
		pageShowSizeEnum:'small',
		height:390,
		pageShowTotal:true,
		clickToSelect:true,
		pageShowCurrentCount:false,
		autoAdapt:false,
		//全选事件
		onCheckAll:function(rows){
			$.each(rows,function(key,value){
				sourceRequestContar[value.id]=value;
			});
		},
		//取消全选事件
		onUncheckAll:function(rows){
			if(flag==true){
				$.each(rows,function(key,value){
					delete sourceRequestContar[value.id];
				});
			}
			
		},
		//取消选中事件
		onUncheck:function(row){
			delete sourceRequestContar[row.id];
		},
		//选中事件
		onCheck:function(row){
			sourceRequestContar[row.id]=row;
		},
		//数据加载后事件
		loaded:function(rows,that){
			var params =  new Array();
			$.each(sourceRequestContar,function(key,value){
				params.push(key);
			});
			that.bootstrapTable.bootstrapTable('checkBy',{field:'id',values:params});
		},
		uniqueId:'id',								 //主键标识
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    },{
	        field: 'orgCode',
	        title: '部门代码',
	        width: '8%'
	    }, {
	        field: 'orgName',
	        title: '部门名称'
	    }, {
	        field: 'linkName',
	        title: '联系人姓名',
	        width: '8%'
	    }, {
	        field: 'linkPhone',
	        title: '联系人电话',
	        width: '8%'
	    }, {
	        field: 'linkEmail',
	        title: '联系人邮箱',
	        width: '15%'
	    }]
	});
		//新增需求方列表
	 var sourceRequesGrid = $('#resourceReques').bootstrapGrid({
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		queryParams:{},
		singleSelect:false,
		uniqueId:'id',	
		autoAdapt:false,
		paginator:false,
		height:9,//主键标识
		columns:[{
	    	visible:false,
	        field: 'id',
	        title: '主键'
	    }, {
	        field: 'orgName',
	        title: '部门名称'
	    }, {
	        field: 'orgCode',	
	        title: '部门代码',
	        width:  '20%'
	    },{
	        field: 'linkName',
	        title: '联系人姓名',
	         width:  '15%'
	    },{
	        field: 'linkPhone',
	        title: '联系人电话',
	        width: '20%'
	    },{
	    	 field: 'remove',
	         title: '移除 ',
	         width:  '1%',
	    	 formatter:function(value,row,index){
    		 return ['<a class="table-operation table-operation-del fa fa-trash-o" id="'+row.id+'"  href="javascript:void(0)" title="删除"></a>'].join('');
	        }
	    }]
	});
	//需求方弹框
	var Dialog = new BootstrapDialog({
		title: '选择资源需求方',
		type:'type-default',
        message: $('#orgInfoContainer'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        draggable: true,
        autodestroy:false,
        cssClass:'choose-dialog',
        buttons: [{
            label: '确定',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'btn-success btn-sm',
            action: function(dialogRef){
            	var selectData = new Array();
            	$.each(sourceRequestContar,function(key,value){
            		selectData.push(value);
            	})
            	if(selectData.length>0){
					dialogRef.close();
					sourceRequesGrid.table('removeAll');
					sourceRequesGrid.table('load',selectData);
					$('.checkTableData').css('display','none');
					$('.addList .bootstrap-table').css('border','0px');
            		$('.addList .fixed-table-body').css('height',37*selectData.length-selectData.length);
            		$('.addList').css('height',32+36*selectData.length-selectData.length);
            		flag=false;
				}else{
					Util.warningDialog('尚未选择数据，请选择！',function(dialog, result){
						dialog.close();
					});
				}
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:'btn-default btn-sm',
            action: function(dialogRef){
            	Dialog.close();
            }
        }]
    });
	$('.addRequersData').on('click','span',function(){
		//更新当前也的选中项
		//格式化选中项
		orgInfoGrid.table('uncheckAll');
		//选中项选中
		var params =  new Array();
		$.each(sourceRequestContar,function(key,value){
			params.push(key);
		});
		orgInfoGrid.table('checkBy',{field:'id',values:params});
		Dialog.open();
		flag=true;
	});
	$('#resourceReques').on('click','.table-operation-del',function(even){
		//根据主键从列表中删除需求方
		sourceRequesGrid.table('removeByUniqueId',even.currentTarget.id);
		//对应的选中容器里的数据也删除掉
		delete sourceRequestContar[even.currentTarget.id];
		//重新渲染表格的高度
		$('.addList .fixed-table-body').css('height',$('.addList .fixed-table-body').height()-36+1);
		$('.addList').css('height',$('.addList').height()-36+1);
	});
	//设置表单校验规则
	var resourceValidator= Util.validate("newExchangeResourceForm",{
		    rules:{
		    	resourceName:{required: true}
		    }
		});
	//校验并提交表单
 	$('#btn_submit').on('click',function(){
 		if(!$("#newExchangeResourceForm").valid()||JSON.stringify(sourceRequestContar) == "{}"){
			resourceValidator.focusInvalid();
			if(JSON.stringify(sourceRequestContar) == "{}"){
				$('.checkTableData').css('display','block');
				$('.addList .bootstrap-table').css({'border':'1px solid #A94442','':''});
			}
			return;
		}else{
			$('.checkTableData').css('display','none');
			$('.addList .bootstrap-table').css('border','0px');
			Util.questionDialog('确定提交？',function(dialog, result){
				dialog.close();
				if(result==true){
					location.href="#/exchangeresource";
					Util.promptSuccessDialog('新增交换资源成功！');
				}
			});
		}
	});
	//重置表单
	$('#btn_resetForm').on('click',function(){
		$("#newExchangeResourceForm")[0].reset();
		resourceValidator.resetForm();
	});
	//取消按钮
	$('#btn_cancel').on('click',function(){
		Util.questionDialog('确定取消？',function(dialog, result){
				dialog.close();
				if(result==true){
					location.href="#/exchangeresource";
				}
		});
	});
	//返回按钮
	$('#btn_back').on('click',function(){
			location.href="#/exchangeresource";
	});
	
	
});