require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','daterangepicker','Util',
		 'jquery-validate','jquery-validate-messages-zh','daterangepicker-zh-CN'],
function($,BootstrapDialog,grid,toolbar,daterangepicker,Util,jqueryValidate) {
	//获取参数
	var params = Util.getAnchorObject();
	//查看
	if(params.option=="view"){
		$('#btn_submit').hide();
		$('#btn_resetFrom').hide();
		$('#btn_cancel').hide();
		$('#btn_back').show();
		$('.form-control').attr("disabled",true);
		$('#orgName').css('cursor','not-allowed');
		$('#accessTime').css('cursor','not-allowed');
	//新增、修改
	}else{
		$('#btn_submit').show();
		$('#btn_resetFrom').show();
		$('#btn_cancel').show();
		$('#btn_back').hide();
		$('.form-control').attr("disabled",false);
		$('#orgName').css('cursor','pointer');
		$('#accessTime').css('cursor','pointer');
	}
	//日期控件
	$("#accessTime").daterangepicker({
		autoApply: true,
		singleDatePicker: true,
		opens:'left',
		locale: {
            format: 'YYYY/MM/DD'
        }
	});
	//列表
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
		uniqueId:'id',								 //主键标识
		columns:[{									 //数据列
	        radio: true
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
	    }],
	    onDblClickRow:function(row, $element){
	    	$('#orgName').val(row.orgName);
			$('#orgCode').val(row.orgCode);
			$('#linkName').val(row.linkName);
			$('#linkPhone').val(row.linkPhone);
			$('#linkEmail').val(row.linkEmail);
			var newExchangeNodeForm = $("#newExchangeNodeForm");
			newExchangeNodeForm.validate().element($("#orgName"));
			newExchangeNodeForm.validate().element($("#orgCode"));
			newExchangeNodeForm.validate().element($("#linkName"));
			newExchangeNodeForm.validate().element($("#linkPhone"));
			newExchangeNodeForm.validate().element($("#linkEmail"));
			Dialog.close();
	    }
	});
	//弹框
	var Dialog = new BootstrapDialog({
		title: '请选择部门',
		type:'type-default',
        message: $('#orgInfoContainer'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        draggable: true,
        autodestroy:false,
        onshown : function(dialogRef){
        	$(".fixed-table-container").css("padding-bottom","32px");
        },
        cssClass:'choose-dialog',
        buttons: [{
            label: '确定',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'btn-success btn-sm',
            action: function(dialogRef){
            	var selectData = orgInfoGrid.table('getSelections');
            	if(selectData.length>0){
					$('#orgName').val(selectData[0].orgName);
					$('#orgCode').val(selectData[0].orgCode);
					$('#linkName').val(selectData[0].linkName);
					$('#linkPhone').val(selectData[0].linkPhone);
					$('#linkEmail').val(selectData[0].linkEmail);
					var newExchangeNodeForm = $("#newExchangeNodeForm");
					newExchangeNodeForm.validate().element($("#orgName"));
					newExchangeNodeForm.validate().element($("#orgCode"));
					newExchangeNodeForm.validate().element($("#linkName"));
					newExchangeNodeForm.validate().element($("#linkPhone"));
					newExchangeNodeForm.validate().element($("#linkEmail"));
					dialogRef.close();
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
	$('#orgName').on('click',function(){
		Dialog.open();
	});
	//设置表单校验规则
	var nodeValidator= Util.validate("newExchangeNodeForm",{
	    rules:{
	    	orgName:{required: true}
	    }
	});
	//提交校验表单规则
 	$('#btn_submit').on('click',function(){
 		if(!$("#newExchangeNodeForm").valid()){
			nodeValidator.focusInvalid()
			return;
		}else{
			Util.questionDialog('确定提交？',function(dialog, result){
				dialog.close();
				if(result==true){
					location.href="#/exchangenode";
					Util.promptSuccessDialog('新增交换节点成功！');
				}
			});
		}
	});
	//重置表单
	$('#btn_resetFrom').on('click',function(){
		$("#newExchangeNodeForm")[0].reset();
		nodeValidator.resetForm();
	});
	//取消提示
	$('#btn_cancel').on('click',function(){
		Util.questionDialog('确定取消？',function(dialog, result){
			dialog.close();
			if(result==true){
				location.href="#/exchangenode";
			}
		});
	});
	//返回
	$('#btn_back').on('click',function(){
		location.href="#/exchangenode";
	});
});