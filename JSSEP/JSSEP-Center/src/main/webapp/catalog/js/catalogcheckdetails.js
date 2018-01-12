require(['jquery','daterangepicker','daterangepicker-zh-CN'], function($,datetimepicker) {
	//目录审核 审核详情 模块
	$(function() {
		function reposition() {
			var modal = $(this),
				dialog = modal.find('.modal-dialog');
			modal.css('display', 'block');
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
		}
		$('#resourceformat').on('show.bs.modal', reposition);
		$(window).on('resize', function() {
			$('#resourceformat:visible').each(reposition);
		});
	});
	
	$(function() {
		function reposition() {
			var modal = $(this),
				dialog = modal.find('.modal-dialog');
			modal.css('display', 'block');
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
		}
		$('#addInfo').on('show.bs.modal', reposition);
		$(window).on('resize', function() {
			$('#addInfo:visible').each(reposition);
		});
	});
	
	$(function() {
		function reposition() {
			var modal = $(this),
				dialog = modal.find('.modal-dialog');
			modal.css('display', 'block');
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
		}
		$('#choiceTip').on('show.bs.modal', reposition);
		$(window).on('resize', function() {
			$('#choiceTip:visible').each(reposition);
		});
	});
	
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
	
	//资源提供方信息 选择资源格式模态框 提交按钮 事件
	$("#submitResourceFormat").click(function(){
		var s = '<table class="table table-hover"><thead><tr><th>资源格式</th><th>存储格式</th></tr></thead><tbody>';
		var box = document.getElementsByName("box");
		if(box!=null && box.length>0){
			for(var i = 0;i<box.length;i++){
				if(box[i].checked==true){
					if(box[i].id == ""){
						s+='<tr><td style="min-width: 100px;">'+box[i].parentElement.parentElement.children[1].innerHTML+ '</td><td>'+
						box[i].parentElement.parentElement.children[2].innerHTML+'</td></tr>';
					}else if(box[i].id == "other"){
						//自描述文本框单独处理
						s+='<tr><td style="min-width: 100px;">'+box[i].parentElement.parentElement.children[1].innerHTML+ '</td><td>'+
						$("#otherType").val();+'</td></tr>';
					}
				}
			}
		}
		s+='</tbody></table>';
		$("#choiceResourceFormat").html(s);
		$("#resourceformat").modal('hide');
	});
	//信息项信息 添加信息模态框 确定按钮事件。
	$("#submitInfoItem").click(function(){
		var s ='<tr><td><input type="checkbox" name="ids"></input></td><td>'+$("#infoItemName").val()
		+'</td><td>'+$("#infoType").val()+'</td><td>'+$("#infoMark").val()+'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();">删除</a></td></tr>';
		$("#infoItemTable").append(s);
		$("#addInfo").modal('hide');
	});
	
	$("#addItembutton").click(function(){
		 $('#addInfo').modal('show');
 		 $('#addInfo').on('show.bs.modal',
	     function() {
	        $("#infoItemName").val("");
	        $("#infoMark").val("");
	     })
	});
	
	$("#delItembutton").click(function(){
		if($("[name='ids']:checked").length==0){
			$("#choiceTip").modal('show');
		}
		
		$("[name='ids']:checked").each(function(){
			$(this).parent().parent().remove();
		});
	});
	
	//选择资源格式模态框全选
	$("#resformatall").click(function(){
		var objs=document.getElementsByName("box");
		if($("#resformatall").is(':checked')){
			if(objs!=null && objs.length>0){
	 			for(var i=0;i<objs.length;i++){
	 				if(objs[i].checked==false){
	 					objs[i].checked=true;
	 				}
	 			}
	 		}
		}else if(!$("#resformatall").is(':checked')){
			if(objs!=null && objs.length>0){
	 			for(var i=0;i<objs.length;i++){
	 				if(objs[i].checked==true){
	 					objs[i].checked =false;
	 				}
	 			}
	 		}
		}
	});
	
	//添加添加信息项信息模态框全选
	$("#checkall").click(function(){
		var objs=document.getElementsByName("ids");
		if($("#checkall").is(':checked')){
			if(objs!=null && objs.length>0){
	 			for(var i=0;i<objs.length;i++){
	 				if(objs[i].checked==false){
	 					objs[i].checked=true;
	 				}
	 			}
	 		}
		}else if(!$("#checkall").is(':checked')){
			if(objs!=null && objs.length>0){
	 			for(var i=0;i<objs.length;i++){
	 				if(objs[i].checked==true){
	 					objs[i].checked =false;
	 				}
	 			}
	 		}
		}
	});
	//发布日期时间控件
	$("#publishDate").daterangepicker({
		autoApply: true,
		singleDatePicker: true,
		opens:'left',
		locale: {
            format: 'YYYY-MM-DD'
        }
	});
	
	//共享类型
	$("#shareType").change(function(){
	    var opt=$("#shareType").val();
	    if(opt == '无条件共享'){
	    	$("#userequire").show();
	    	$("#relatebasis").hide();
	    	$("#sharebar").hide();
	    	$("#sharebar").hide();
	    }
	    if(opt == '有条件共享'){
	    	$("#userequire").show();
	    	$("#sharerange").show();
	    	$("#sharebar").show();
	    	$("#relatebasis").hide();
	    }
	    if(opt == '不予共享'){
	    	$("#userequire").hide();
	    	$("#sharebar").hide();
	    	$("#sharerange").hide();
	    	$("#relatebasis").show();
	    }
	});
	
	//发布结果 结果
	$("#checkresult").change(function(){
	    var opt=$("#checkresult").val();
	    if(opt == '通过'){
	    	$("#resultreason").hide();
	    }
	    if(opt == '不通过'){
	    	$("#resultreason").show();
	    }
	});
	
});