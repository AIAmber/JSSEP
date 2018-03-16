require(['jquery','bootstrap-multiselect','bootstrap-switch','bootstrap-grid','Util','bootstrap-dialog','daterangepicker','daterangepicker-zh-CN'], function($,bootstrapMultiselect,bootstrapswitch,grid,Util,BootstrapDialog,datetimepicker) {
	//新建编目 文件
	
	//类 项 目 细目 级联操作
	$("[name='classcify']").change(function(){
	    var opt=$("[name='classcify']").val();
	    if(opt == '基础信息资源类'){
	    	$("[name='item']").empty().append("<option>请选择项</option>");
	    	$("[name='head']").empty().append("<option>请选择目</option>");
	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	$("[name='resourcecode']").val("");
	    	$("[name='item']").append("<option>法人单位信息资源库</option>");
	    	$("[name='item']").change(function(){
	    	    var opt=$("[name='item']").val();
	    	    if(opt == '法人单位信息资源库'){
	    	    	$("[name='head']").empty().append("<option>请选择目</option>");
	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	$("[name='resourcecode']").val("");
	    	    	$("[name='head']").append("<option>企业</option><option>事业</option>");
	    	    	$("[name='head']").change(function(){
	    	    	    var opt=$("[name='head']").val();
	    	    	    if(opt == '企业'){
	    	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	    	$("[name='resourcecode']").val("");
	    	    	    	$("[name='details']").append("<option>基本信息</option>");
	    	    	    	$("[name='details']").change(function(){
	    	    	    	    var opt=$("[name='details']").val();
	    	    	    	    if(opt == '基本信息'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	});
	    	    	    }
	    	    	    if(opt == '事业'){
	    	    	    	$("[name='details']").append("<option>基本信息</option>");
	    	    	    }
	    	    	});
	    	    }
	    	});
	    }
	    if(opt == '主题信息资源类'){
	    	$("[name='item']").empty().append("<option>请选择项</option>");
	    	$("[name='head']").empty().append("<option>请选择目</option>");
	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	$("[name='resourcecode']").val("");
	    	$("[name='item']").append("<option>审批改革</option><option>公共服务事项</option>");
	    	$("[name='item']").change(function(){
	    	    var opt=$("[name='item']").val();
	    	    if(opt == '审批改革'){
	    	    	$("[name='head']").empty().append("<option>请选择目</option>");
	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	$("[name='resourcecode']").val("");
	    	    	$("[name='head']").append("<option>企业</option><option>个人/企业</option><option>企业</option>");
	    	    	$("[name='head']").change(function(){
	    	    	    var opt=$("[name='head']").val();
	    	    	    if(opt == '企业'){
	    	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	    	$("[name='resourcecode']").val("");
	    	    	    	$("[name='details']").append("<option>企业新设注册登记</option>");
	    	    	    	$("[name='details']").change(function(){
	    	    	    	    var opt=$("[name='details']").val();
	    	    	    	    if(opt == '企业新设注册登记'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	});
	    	    	    }
	    	    	    if(opt == '个人/企业'){
	    	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	    	$("[name='resourcecode']").val("");
	    	    	    	$("[name='details']").append("<option>房地产交易</option>");
	    	    	    	$("[name='details']").change(function(){
	    	    	    	    var opt=$("[name='details']").val();
	    	    	    	    if(opt == '房地产交易'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	});
	    	    	    }
	    	    	    if(opt == '企业'){
	    	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	    	$("[name='resourcecode']").val("");
	    	    	    	$("[name='details']").append("<option>投资项目建设</option>");
	    	    	    	$("[name='details']").change(function(){
	    	    	    	    var opt=$("[name='details']").val();
	    	    	    	    if(opt == '投资项目建设'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	});
	    	    	    }
	    	    	});
	    	    }
	    	    if(opt == '公共服务事项'){
	    	    	$("[name='head']").empty().append("<option>请选择目</option>");
	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	$("[name='resourcecode']").val("");
	    	    	$("[name='head']").append("<option>行政许可审批</option>");
	    	    	$("[name='head']").change(function(){
	    	    	    var opt=$("[name='head']").val();
	    	    	    if(opt == '行政许可审批'){
	    	    	    	$("[name='details']").empty().append("<option>请选择细目</option>");
	    	    	    	$("[name='resourcecode']").val("");
	    	    	    	$("[name='details']").append("<option>设立登记</option><option>变更登记</option><option>注销登记</option><option>行政许可</option>");
	    	    	    	$("[name='details']").change(function(){
	    	    	    	    var opt=$("[name='details']").val();
	    	    	    	    if(opt == '设立登记'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	    if(opt == '变更登记'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	    if(opt == '注销登记'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	    if(opt == '行政许可'){
	    	    	    	    	$("[name='resourcecode']").val("221211003/1003");
	    	    	    	    }
	    	    	    	});
	    	    	    }
	    	    	    if(opt == '事业'){
	    	    	    	$("[name='details']").append("<option>基本信息</option>");
	    	    	    }
	    	    	});
	    	    }
	    	});
	    }
	});
	
	var anchorParam = Util.getAnchorObject();
	if(anchorParam.option == 'view'){
		//给标签增加属性，使表单只读
		//给标签增加属性，使表单只读
		$("#newcatalogview input").attr("disabled","disabled");
		$("#newcatalogview select").attr("disabled","disabled");
		$("#newcatalogview textarea").attr("readonly",true);
		$("#savedraft").remove();
		$("#saveForm").remove();
		$("#resetForm").remove();
		$("#resourceformatchoice tr").each(function(){
			$(this).children("td:last").empty();
		});
		$("#infoItemTable tr").each(function(){
			$(this).children("td:last").empty();
		});
	}else{
		
	}
	
	$(function () { $("[data-toggle='tooltip']").tooltip(); });
	
	$("[name='openproperty']").bootstrapSwitch({
		 onText:"是",  
	     offText:"否",
	     onColor:"success",  
         offColor:"warning",  
         size:"small",
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
        		$("#resourceformatchoice").append(s);
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
	
	//添加信息项信息模态框
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
            	var flag = $("#infoitemform").valid();
        		if(flag==false){
        			infoitemform.focusInvalid();
        		}else{
        			//信息项信息 添加信息模态框 确定按钮事件。
            		var s ='<tr><td>'+$("#infoItemName").val()
            		+'</td><td>'+$("#infoType").val()+'</td><td>'+$("#datalength").val()+'</td><td>'+$("#infoMark").val()+'</td><td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td></tr>';
            		$("#infoItemTable").append(s);
            		$("#infoItemName").val("");
         	        $("#infoMark").val("");
         	        $("#datalength").val("");
         	        $("#infoType option:first").prop("selected", 'selected')
        	        addInfoItemDialog.close();
        		}
            }
        },{
            label: '重置',
            autospin: false,
            icon:'glyphicon glyphicon-repeat',
            cssClass:' col-sm-1 btn-primary btn-sm btn-model-diy',
            action: function(dialogRef){
            	infoitemform.resetForm();
            	$("#infoItemName").val("");
     	        $("#infoMark").val("");
     	        $("#datalength").val("");
     	        $("#infoType option:first").prop("selected", 'selected')
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' col-sm-1 btn-default btn-sm btn-model-diy',
            action: function(dialogRef){
            	infoitemform.resetForm();
            	$("#infoItemName").val("");
     	        $("#infoMark").val("");
     	        $("#datalength").val("");
     	        $("#infoType option:first").prop("selected", 'selected')
            	addInfoItemDialog.close();
            }
        }]
    });
	$("#addItembutton").on("click",function(){
		addInfoItemDialog.open();
	});
	
	//添加信息项信息表单校验
	var infoitemform = Util.validate("infoitemform",{
		rules :{
			infoItemName:{
				required:true
			},
			infoType: {
				required:true
			},
			infoMark: {
				required:true
			},
			datalength:{
				required:true
			}
		},
		messages: {
			infoItemName:{
				required:"信息项信息不能为空"
			},
			infoType: {
				required:"请选择数据类型"
			},
			infoMark: {
				required:"请添加注释"
			},
			datalength: {
				required:"数据长度不能为空"
			}
		}
	});
	
	//表单校验规则
	var newcatalogValidate = Util.validate("newcatalog",{
		rules: {
			classcify: {
				required: true
			},
			item: {
				required: true
			},
			head: {
				required: true
			},
			details: {
				required: true
			},
			resourcename: {
	    		required: true
	    	},
	    	resourceprovide: {
	    		required: true
	    	},
	    	resourcesummary: {
	    		required: true
	    	},
	    	sharedtype:{
	    		required: true
	    	},
	    	userequirement:{
	    		required: true
	    	},
	    	relatedbasis:{//相关依据
	    		required: true
	    	},
	    	sharingconditions:{
	    		required: true
	    	},
	    	sharerange: {
	    		required: true
	    	},
	    	updatecycle:{
	    		required: true
	    	},
	    	associatedresourcecode:{
	    		required: true
	    	},
	    	sharingmethoddescription:{
	    		required: true
	    	}
		},
		messages: {
			classcify: {
				required: "请选择类信息"
			},
			item: {
				required: "请选择项信息"
			},
			head: {
				required: "请选择目信息"
			},
			details: {
				required: "请选择细目信息"
			},
			resourcename: {
		        required: "请选择资源名称"
		    },
			resourceprovide: {
	    		required: "请选择资源提供方"
	    	},
	    	resourcesummary: {
	    		required: "资源摘要不能为空"
	    	},
	    	sharedtype: {
	    		required: "请选择共享类型"
	    	},
	    	userequirement: {
	    		required: "使用要求不能为空"
	    	},
	    	relatedbasis: {
	    		required: "相关依据不能为空"
	    	},
	    	sharingconditions:{
	    		required: "共享条件不能为空"
	    	},
	    	sharerange: {
	    		required: "共享范围不能为空"
	    	},
	    	updatecycle:{
	    		required: "请选择更新周期"
	    	},
	    	associatedresourcecode:{
	    		required: "关联资源代码不能为空"
	    	},
	    	sharingmethoddescription:{
	    		required: "贡献方式说明不能为空"
	    	}
	    }
		
	});
	  
	$("#saveForm").click(function(){
		var flag = $("#newcatalog").valid();
		if(flag==false){
			newcatalogValidate.focusInvalid();
		}else{
			Util.questionDialog('是否提交编目信息？',function(dialog, result){
				if(result){
					Util.promptSuccessDialog("提交编目信息成功!");
					//ajax 提交数据到后台
					location.href="#/catalogprepare";
				}
				dialog.close();
			});
		}
	});
	
	//保存按钮
	$("#savedraft").click(function(){
		location.href="#/catalogprepare";
		/*Util.questionDialog('是否保存草稿？',function(dialog, result){
			if(result){
				Util.promptSuccessDialog("保存草稿成功!");
				location.href="#/catalogprepare";
			}
			dialog.close();
		});*/
	});
	//取消按钮
	$("#revokebtn").click(function(){
		location.href="#/catalogprepare";
		/*Util.questionDialog('是否保存草稿？',function(dialog, result){
			if(result){
				Util.promptSuccessDialog("保存草稿成功!");
				location.href="#/catalogprepare";
			}else{
				location.href="#/catalogprepare";
			}
			dialog.close();
		});*/
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
	
	//点击表格每一行任意位置，都能勾选复选框
	$("#grid tr").each(function(){
		$(this).children("td:eq(1)").click(function(){
			$(this).prev().children().prop("checked",true);
			$(this).parent().find(".optionmultiselect").multiselect('enable');
		});
		
		$(this).children("td:eq(2)").click(function(){
			var id = $(this).parent().children("td:eq(0)").children().attr("id");
			if("other" != id){
				$(this).parent().children("td:eq(0)").children().prop("checked",true);
				$(this).parent().find(".optionmultiselect").multiselect('enable');
			}else{
				$(this).parent().children("td:eq(0)").children().prop("checked",true);
				$(this).parent().children("td:eq(2)").children().prop("readonly",false);
				$(this).parent().find(".optionmultiselect").multiselect('enable');
			}
		});
	});
	
	var deptInfoGrid = $('#resourceprovidetable').bootstrapGrid({
		url:'newCatalogController/findResourceProviderInfo',   //请求的URL
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
	        field: 'resourceProviderName',
	        title: '资源提供方',
	        width: '50%'
	    }, {
	        field: 'resourceProviderCode',
	        title: '资源提供方代码',
	        width: '50%'
	    },{
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
	
	var ResourceProviderDialog = new BootstrapDialog({
		title: '选择资源提供方',
		type:'type-default',
        message: $('#resourceprovidermodel'),
        closeByBackdrop: false,
        closeByKeyboard: false,
        draggable: true,
        autodestroy:false,
        onshown : function(dialogRef){
        	$(".fixed-table-container").css("padding-bottom","32px");
        },
        cssClass:'chooseresourceprovide-dialog',
        buttons: [{
            label: '确定',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:'btn-success btn-sm',
            action: function(dialogRef){
            	var selectData = deptInfoGrid.table('getSelections');
            	if(selectData.length>0){
					$('#resourceprovider').val(selectData[0].resourceProviderName);
					$('#resourceprovidecode').val(selectData[0].resourceProviderCode);
            		$("#newcatalogview").validate().element($('#resourceprovider'));
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
            	ResourceProviderDialog.close();
            }
        }]
    });
	
	//资源提供方点击事件
	$('#resourceprovider').on('click',function(){
		ResourceProviderDialog.open();
		$(".fixed-table-container").css("padding-bottom","32px");
	});
	
	//资源信息项弹出框 添加信息项信息 数据类型
	$("#infoType").change(function(){
	    var opt=$("#infoType").val();
	    if(opt == '数值型'|| opt == '字符型' || opt == '双精度型' || opt == '整型' || opt == '浮点型'){
	    	$("#form-group-infomark").hide();
	    	$("#form-group-datalength").show();
	    }else if(opt == '备注型'){
	    	$("#form-group-infomark").show();
	    	$("#form-group-datalength").hide();
	    }else{
	    	$("#form-group-infomark").hide();
	    	$("#form-group-datalength").hide();
	    }
	});
	
	//重置按钮 清空校验和表单内容
	$("#resetForm").click(function(){
		Util.questionDialog('确定重置？',function(dialog, result){
			if(result){
				Util.validate("newcatalog",{}).resetForm();
				$("#resourceformatchoice").children().empty();
				$("#infoItemTable").children().empty();
				//清空表单
				$("#newcatalog")[0].reset();
			}else{
				
			}
			dialog.close();
		});
		
	});
});