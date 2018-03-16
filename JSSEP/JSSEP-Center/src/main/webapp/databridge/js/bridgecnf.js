require(['jquery','Util','jquery-validate','jquery-validate-messages-zh'], function($,Util) {
	
	var bridgeCnfForm = $("#bridgecnf");
	var anchorParam = Util.getAnchorObject();
	if(anchorParam.option == 'view'){
		bridgeCnfForm.find(".form-control").attr("disabled","disabled");
		bridgeCnfForm.find(".control-label .red").hide();
		$("#selectFile").attr("disabled","disabled");
		$("#backBtn").show();
	}else{
		$(".for-edit").show();
	}
	
	//文件选择
	var filename = $('#filename');
	$('#file').on('change', function(e){
		var name=this.value;
		if(name != null && name != ''){
	    	name = name.substring(name.lastIndexOf('\\') + 1); 
		}
	    filename.val(name);
	    bridgeCnfForm.validate().element(filename);
	});
	$("#selectFile").click(function(){
		$("#file").click();
	});
	
	//重置
	$("#resetBtn").click(function(){
		Util.questionDialog('确定重置？',function(dialogRef, result){
			dialogRef.close();
			if(result){
				validator.resetForm();
				bridgeCnfForm[0].reset();
			}
		});
		
	});
	
	//取消
	$("#cancelBtn").click(function(){
		Util.questionDialog('确定取消？',function(dialogRef, result){
			dialogRef.close();
			if(result){
				location.href="#/bridgerun";
			}
		});
	});
	
	// 表单验证
	$("#submitBtn").click(function(){
		if(!bridgeCnfForm.valid()){
			validator.focusInvalid();
			return;
		}
		Util.questionDialog('确定提交？',function(dialogRef, result){
			dialogRef.close();
			if(result){
				//TODO　这里调用后台
				Util.promptSuccessDialog('提交桥接配置成功！');
				location.href="#/bridgerun";
			}
		});
	});
	// IP地址验证   
    $.validator.addMethod("ip", function(value, element) {    
      return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
    }, "请填写正确的IP地址。");
	var validator = Util.validate("bridgecnf",{
		messages:{
			taskName:{
				required:"请输入任务名称"
			},
			filename:{
				required:"请上传KTR文件"
			},
			sourceType:{
				required:"请选择数据库类型"
			},
			sourceIp:{
				required:"请输入IP地址"
			},
			sourceDBName:{
				required:"请输入数据库实例名"
			},
			sourcePort:{
				required:"请输入端口号",
				digits:"请输入合法的端口号"
			},
			sourceUsername:{
				required:"请输入用户名"
			},
			sourcePassword:{
				required:"请输入密码"
			},
			targetType:{
				required:"请输入任务名称"
			},
			targetIp:{
				required:"请输入IP地址"
			},
			targetDBName:{
				required:"请输入数据库实例名"
			},
			targetPort:{
				required:"请输入端口号",
				digits:"请输入合法的端口号"
			},
			targetUsername:{
				required:"请输入用户名"
			},
			targetPassword:{
				required:"请输入密码"
			},
			time:{
				required:"请输入执行周期"
			}
		}
	});
	
	//点击进行连接测试
	$('.test-connect').tooltip();
	$(".icon-connect").click(function(){
		var $this = $(this);
		$this.next().show();
		$this.hide();
		setTimeout(function(){
			$this.next().hide();
			$this.show();
			Util.promptSuccessDialog("连接成功！");
		},1000);
	});
});