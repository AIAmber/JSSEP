//目录发布 已发布
require(['jquery','bootstrap-multiselect','bootstrap-switch','Util','bootstrap-dialog','daterangepicker','daterangepicker-zh-CN'], function($,bootstrapmultiselect,bootstrapswitch,Util,BootstrapDialog,datetimepicker) {
	
	//给标签增加属性，使表单只读
	$("#catalogalreadyrereleased input").attr("disabled","disabled");
	$("#catalogalreadyrereleased select").attr("disabled","disabled");
	$("#catalogalreadyrereleased textarea").attr("readonly",true);
	
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
	
	$("[name='openproperty']").bootstrapSwitch({
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
	    	$("#sharingmethod").show();
	    }
	    if(opt == '有条件共享'){
	    	$("#userequire").show();
	    	$("#sharerange").show();
	    	$("#sharebar").show();
	    	$("#relatebasis").hide();
	    	$("#sharingmethod").show();
	    }
	    if(opt == '不予共享'){
	    	$("#userequire").hide();
	    	$("#sharebar").hide();
	    	$("#sharerange").hide();
	    	$("#relatebasis").show();
	    	$("#sharingmethod").hide();
	    	$("#otherInput").hide();
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
            cssClass:'col-sm-1 btn-success btn-sm btn-model-diy',
            action: function(dialogRef){
            	//资源提供方信息 选择资源格式模态框 保存按钮 事件
            	var s = '';
            	$("input[name='box']:checked").each(function(){
            		if($(this).attr("id") != "other"){
            			s+='<tr><td>'+$(this).parents("tr").find("td").eq(1).html()+ '</td><td>';
                		var val = '';
                		$(this).parents("tr").find("td").eq(2).find(".active").each(function(){
                			val += $(this).text()+",";
                		});
                		s+= val.substring(0,val.length-1).trim() +'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td></tr>';
            		}else{
            			s+='<tr><td>'+$(this).parents("tr").find("td").eq(1).html()+ '</td><td>' + 
                		 $("#otherType").val() +'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td></tr>';
            		}
            		
            	});
            	
            	//选择资源格式 表单提交后 移除表单中的内容 恢复初始状况
        		$("#resourceformatchoice").append(s);
        		$("#otherType").val("");
    	        $("input[name$='box']").attr("checked", false); 
    	        
	            $('#electronicdocument').multiselect('deselectAll', false);
	            $('#electronicdocument').multiselect('updateButtonText');
	            $("#electronicdocument").multiselect('disable');
    	        
	            $('#electronicform').multiselect('deselectAll', false);
	            $('#electronicform').multiselect('updateButtonText');
	            $("#electronicform").multiselect('disable');
	            
	            $('#databaseclass').multiselect('deselectAll', false);
	            $('#databaseclass').multiselect('updateButtonText');
	            $("#databaseclass").multiselect('disable');
	            
	            $('#graphicimagecategory').multiselect('deselectAll', false);
	            $('#graphicimagecategory').multiselect('updateButtonText');
	            $("#graphicimagecategory").multiselect('disable');
	            
	            $('#streamingmediacategory').multiselect('deselectAll', false);
	            $('#streamingmediacategory').multiselect('updateButtonText');
	            $("#streamingmediacategory").multiselect('disable');
            	Dialog.close();
            }
        },{
            label: '重置',
            autospin: false,
            icon:'glyphicon glyphicon-repeat',
            cssClass:' col-sm-1 btn-primary btn-sm btn-model-diy',
            action: function(dialogRef){
            	$("#otherType").val("");
    	        $("input[name$='box']").attr("checked", false); 
    	        $("#otherType").val("");
				$("#otherType").attr("readonly",true);
    	        
    	        $('#electronicdocument').multiselect('deselectAll', false);
	            $('#electronicdocument').multiselect('updateButtonText');
	            $("#electronicdocument").multiselect('disable');
    	        
	            $('#electronicform').multiselect('deselectAll', false);
	            $('#electronicform').multiselect('updateButtonText');
	            $("#electronicform").multiselect('disable');
	            
	            $('#databaseclass').multiselect('deselectAll', false);
	            $('#databaseclass').multiselect('updateButtonText');
	            $("#databaseclass").multiselect('disable');
	            
	            $('#graphicimagecategory').multiselect('deselectAll', false);
	            $('#graphicimagecategory').multiselect('updateButtonText');
	            $("#graphicimagecategory").multiselect('disable');
	            
	            $('#streamingmediacategory').multiselect('deselectAll', false);
	            $('#streamingmediacategory').multiselect('updateButtonText');
	            $("#streamingmediacategory").multiselect('disable');
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm btn-model-diy',
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
            cssClass:'col-sm-1 btn-success btn-sm btn-model-diy',
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
            cssClass:' col-sm-1 btn-primary btn-sm btn-model-diy',
            action: function(dialogRef){
            	$("#infoItemName").val("");
     	        $("#infoMark").val("");
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm btn-model-diy',
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
	
	//发布按钮
	$("#saveForm").click(function(){
		//$.ajax();
		Util.questionDialog('确定保存目录发布信息？',function(dialog, result){
			if(result){
//				Util.dangerDialog("保存编目信息成功!");
				location.href="#/catalogrelease";
			}
			dialog.close();
		});
	});
	//取消按钮
	$("#revokebtn").click(function(){
		location.href="#/catalogrelease";
		/*Util.questionDialog('确定返回到目录发布列表？',function(dialog, result){
			if(result){
//				Util.dangerDialog("保存编目信息成功!");
				location.href="#/catalogrelease";
			}
			dialog.close();
		});*/
	});
	
	$("#checkresult").change(function(){
	    var opt=$("#checkresult").val();
	    if(opt == '通过'){
	    	$("#resultreason").hide();
	    }
	    if(opt == '不通过'){
	    	$("#resultreason").show();
	    }
	});
	
	//资源格式模态框 选择框初始化
	$(document).ready(function() {
		$("#electronicdocument").multiselect({
	       	 nonSelectedText: '请选择电子文件类型!',
	       	 allSelectedText: '全部选中',
             nSelectedText: '个被选中',
             buttonWidth: '100%', 
             numberDisplayed: 5
	    });
		$("#electronicdocument").multiselect('disable');
        $('#electronicform').multiselect({
        	 nonSelectedText: '请选择电子表格类型!',
        	 allSelectedText: '全部选中',
             nSelectedText: '个被选中',
             buttonWidth: '100%',
             numberDisplayed: 5
        });
        $("#electronicform").multiselect('disable');
       //数据库类
        $('#databaseclass').multiselect({
       	 	nonSelectedText: '请选择数据库文件类型!',
       	 	allSelectedText: '全部选中',
       	 	nSelectedText: '个被选中',
       	 	buttonWidth: '100%',
       	 	numberDisplayed: 5
        });
        $("#databaseclass").multiselect('disable');
        //图形图像类
        $("#graphicimagecategory").multiselect({
       	 	nonSelectedText: '请选择图形图像文件类型!',
       	 	allSelectedText: '全部选中',
       	 	nSelectedText: '个被选中',
       	 	buttonWidth: '100%',
       	 	numberDisplayed: 5
        });
        $("#graphicimagecategory").multiselect('disable');
        //流媒体类
        $("#streamingmediacategory").multiselect({
       	 	nonSelectedText: '请选择流媒体文件类型!',
       	 	allSelectedText: '全部选中',
       	 	nSelectedText: '个被选中',
       	 	buttonWidth: '100%',
       	 	numberDisplayed: 5
        });
        $("#streamingmediacategory").multiselect('disable');
    });
	
	//添加资源格式 模态框 checkbox事件
	$("[name='box']").click(function(){
		if($(this).attr("id") != "other"){
			if($(this).is(':checked')){
				$(this).parents("tr").find(".optionmultiselect").multiselect('enable');
			}else{
				$(this).parents("tr").find(".optionmultiselect").multiselect('disable');
				$(this).parents("tr").find(".optionmultiselect").multiselect('deselectAll', false);
				$(this).parents("tr").find(".optionmultiselect").multiselect('updateButtonText');
			}
		}else{
			if($(this).is(':checked')){
				$("#otherType").attr("readonly",false);
			}else{
				$("#otherType").val("");
				$("#otherType").attr("readonly",true);
			}
		}
	});
});