require(['jquery','Util','bootstrap-dialog','daterangepicker','daterangepicker-zh-CN'], function($,Util,BootstrapDialog,datetimepicker) {
	
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
		drops: "up",
		opens:'left',
		locale: {
            format: 'YYYY-MM-DD'
        }
	});
	
	//其他 共享类型 选择框 事件
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
	
	//资源格式 添加资源格式 模态框
	var Dialog = new BootstrapDialog({
		title: '选择资源格式',
		type:'type-default',
        message: $('#resourceformat').children(),
        closeByBackdrop: false,
        closeByKeyboard: false,
        autodestroy:false,
        cssClass:'selectresourceformat-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'col-sm-1 btn-success btn-sm',
            action: function(dialogRef){
            	//资源提供方信息 选择资源格式模态框 保存按钮 事件
            	var s = '';
        		var box = document.getElementsByName("box");
        		if(box!=null && box.length>0){
        			for(var i = 0;i<box.length;i++){
        				if(box[i].checked==true){
        					s+='<tr>';
        					if(box[i].id == ""){
        						s+='<td>'+box[i].parentElement.parentElement.children[1].innerHTML+ '</td><td>'+
        						box[i].parentElement.parentElement.children[2].innerHTML+'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>';
        					}else if(box[i].id == "other"){
        						//自描述文本框单独处理
        						s+='<td>'+box[i].parentElement.parentElement.children[1].innerHTML+ '</td><td>'+
        						$("#otherType").val()+'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>';
        					}
        					s+="</tr>";
        				}
        			}
        		}
        		$("#resourceformatchoice").append(s);
        		$("#otherType").val("");
    	        $("input[name$='box']").attr("checked", false); 
    	        $("#resformatall").attr("checked", false);
            	Dialog.close();
            }
        },{
            label: '重置',
            autospin: false,
            icon:'glyphicon glyphicon-repeat',
            cssClass:' col-sm-1 btn-primary btn-sm',
            action: function(dialogRef){
            	$("#otherType").val("");
    	        $("input[name$='box']").attr("checked", false); 
    	        $("#resformatall").attr("checked", false);
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm',
            action: function(dialogRef){
            	$("#otherType").val("");
    	        $("input[name$='box']").attr("checked", false); 
    	        $("#resformatall").attr("checked", false);
            	Dialog.close();
            }
        }]
    });
	$("#addresourceformat").on("click",function(){
		Dialog.open();
	});
	
	/*$("#btn-delete").on("click",function(){
		BootstrapDialog.confirm({
			id:"modelRemove",
	        title: '<span class="glyphicon glyphicon-alert"></span>&nbsp;&nbsp;提示',
	        message: '确实是否删除？',
	        type: BootstrapDialog.TYPE_WARNING,
	        closable: false, 
	        cssClass:'node-dialog ',
	        draggable: true, 
	        btnCancelLabel: '取消', 
	        btnCancelClass: 'btn-default btn-sm',
	        btnOKLabel: '确认', 
	        btnOKClass: 'btn-warning btn-sm',
	        callback: function(result) {
	            if(result) {
	            	Dialog.close();
	            }else {
	            	Dialog.close();
	            }
	        }
	    });
	});
	$('.glyphicon-search').on('click',function(){
		var deptName = $('#deptName').val();
		debugger;
		nodeGrid.resetSearch({'deptName':deptName});
	});*/
	
	var addInfoItemDialog = new BootstrapDialog({
		title: '添加信息项信息',
		type:'type-default',
        message: $('#addInfo'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        autodestroy:false,
        cssClass:'addinfoitem-dialog',
        buttons: [{
        	id:"savebtn",
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'col-sm-1 btn-success btn-sm',
            action: function(dialogRef){
            	//信息项信息 添加信息模态框 确定按钮事件。
        		var s ='<tr><td>'+$("#infoItemName").val()
        		+'</td><td>'+$("#infoType").val()+'</td><td>'+$("#infoMark").val()+'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td></tr>';
        		$("#infoItemTable").append(s);
        		$("#infoItemName").val("");
     	        $("#infoMark").val("");
    	        addInfoItemDialog.close();
            }
        },{
            label: '重置',
            autospin: false,
            icon:'glyphicon glyphicon-repeat',
            cssClass:' col-sm-1 btn-primary btn-sm',
            action: function(dialogRef){
            	$("#infoItemName").val("");
     	        $("#infoMark").val("");
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm',
            action: function(dialogRef){
            	$("#infoItemName").val("");
     	        $("#infoMark").val("");
            	addInfoItemDialog.close();
            }
        }]
    });
	$("#addItembutton").on("click",function(){
		addInfoItemDialog.open();
	});
	
	$("#saveForm").click(function(){
		//$.ajax();
		Util.questionDialog('确定保存目录编目信息？',function(dialog, result){
			if(result){
//				Util.dangerDialog("保存编目信息成功!");
				location.href="#/catalogprepare";
			}
			dialog.close();
		});
	});
	
});