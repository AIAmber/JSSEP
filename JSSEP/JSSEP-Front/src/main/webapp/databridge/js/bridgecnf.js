require(['jquery','Util'], function($,Util) {
	var filename = $('#filename');
	$('#file').on('change', function(e){
		var files = e.currentTarget.files
		var name=null;
		if(files.length > 0){
	    	name = files[0].name;
		}

	    filename.val(name);
	});
	
	$("#selectFile").click(function(){
		$("#file").click();
	});
	
	$("#submitBtn").click(function(){
		Util.questionDialog('确定需要提交表单？',function(dialog, result){
			if(result){
				//TODO　这里调用后台
				Util.successDialog('表单提交成功！',function(dialogRef){
					dialogRef.close();
					location.href="#/bridgerun";
				});
			}
			dialog.close();
		});
	});
	
	$("#revokebtn").click(function(){
		Util.questionDialog('确定需要清空表单？',function(dialog, result){
			if(result){
				$("form")[0].reset();
			}
			dialog.close();
		});
	});
});