require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','Util','ztree'], function($,bootstrapDialog,grid,toolbar,Util,ztree) {
	var toolbarc = $(".table-toolbar").toolbar();
	var gridTable=$('#userGrids').bootstrapGrid({
		url:'./manage/data/user.json',   //请求的URL
		uniqueId:'id',					 //主键标识
		toolbarc:toolbarc,						
		columns:[{									 
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键',
	    }, {
	        field: 'userName',
	        title: '用户名',
	        width: '15%',
	    }, {
	        field: 'perName',
	        title: '姓名',
	        width: '12%',
	    }, 
	    {
	        field: 'deptFrom',
	        title: '所属部门',
	        width: '18%'
	    }, {
	        field: 'userType',
	        title: '用户类型',
	        width: '12%'
	    },{
	        field: 'phone',
	        title: '电话',
	        width: '15%'
	    }, {
	        field: 'email',
	        title: '邮箱',
	        width: '17%'
	    },{
	    	 field: 'id',
	         title: '操作',
	    	formatter:function(value,row,index){
	    		return [
	    			'<a class="authority"  href="javascript:void(0)" title="授权" ><img  src="./common/img/authority.png" > </a>',
	    			'<a class="correctDialog table-operation table-operation-edit fa fa-pencil-square-o" href="javascript:void(0)" title="修改"></a>',
   		            '<a data-id="'+value+'" class="table-delete table-operation table-operation-del fa fa-trash-o" style="margin-left:-2px;" href="javascript:void(0)" title="删除"></a>',
   		     ].join('');

	        }
	    }],
	});
	
	
	//权限树
	var setting = {
			view:{
				dblClickExpand: false
			},
			async: {
				enable: true,
				url:Util.getPath()+"/manage/data/authorityTree.json",
				dataFilter: function(treeId, parentNode, childNodes){
					return childNodes.rows;
				}
			}, 
			data: {
			    simpleData: {
			        enable: true
			    }
			},
			check:{
				enable: true,
				chkStyle: "checkbox",
				chkboxType: { "Y": "s", "N": "s" }
			},
        };
	 $.fn.zTree.init($("#treeAuthorityContentDemo"),setting);
	    var selectAuthorityTree = new bootstrapDialog({
			title: '权限选择',
			type:'type-default',
	        message: $("#treeAuthorityContent"),
			autodestroy:false,
	        closeByBackdrop: false,
	        closeByKeyboard: false,
	        draggable:true,
	        cssClass:'organzation-dialog-tree ',
	        buttons: [{
	        	id:'submitbtn',
	            label: '提交',
	            icon: 'glyphicon glyphicon-check',
	            cssClass:'btn-success btn-sm',
	            action: function(dialogRef){
	            	dialogRef.close();
	            	Util.promptSuccessDialog("权限分配成功！");
	            }
	        },{
	            label: '取消',
	            icon:'glyphicon glyphicon-remove',
	            cssClass:'btn-default btn-sm',
	            action: function(dialogRef){
	            	dialogRef.close();
	            }
	        }]
	    });
	    $(".authority").click(function(){
			selectAuthorityTree.open();
		});
	    
	//头像上传功能
	    $('#photoContent').on("change",function(){
	    	 var path;
	    	 var photoPreview=document.getElementById("photoContent");
	    	 var photoObj=document.getElementById("photo");
	    	  
             if(document.all)//IE
             {
                 photoPreview.select();
                 photoPreview.blur();
                 path = document.selection.createRange().text;
                 photoObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";
             }else
             {
                 path=window.URL.createObjectURL(photoPreview.files[0]);
                 photoObj.src=path;
             }
	    });
	    
	    $("#upload").click(function(){
	    	$("#photoContent").click();
	    });
	    
	    $("#updelete").click(function(){
	    	var path=Util.getPath()+"/common/img/head.png";
	    	$("#photo").attr("src",path);
	    	$("#photoContent").val("");
	    });
	    
	//用户管理模态框
	var userAddForm=$("#userAddForm");
	var dialog=new bootstrapDialog({
		type:'type-default',
        message: $("#userAddForm"),
        closeByBackdrop: false,
        closeByKeyboard: false,
        autodestroy:false,
        draggable:true,
        cssClass:'user-dialog',
        buttons: [{
        	id:'savebtn',
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:' btn-success btn-sm',
            action: function(dialogRef){
            	 var validator = Util.validate("userAddForm");
         			if(!userAddForm.valid()){
         				userAddInfo.focusInvalid()
         				return;
         			}
         				dialogRef.close();
         				$("#userAddForm")[0].reset();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:' btn-default btn-sm',
            action: function(dialogRef){
            	dialog.close();
            	userAddInfo.resetForm();
            	$("#userAddForm")[0].reset();
            }
        }]
	});
	
	$("#btn-add").on("click",function(){
		dialog.setTitle("新增用户管理");
		dialog.open();
	   });
	$(".correctDialog").on("click",function(){
		dialog.setTitle("修改用户管理");
		dialog.open();
	});
	
	//表单校验
	var userAddInfo=Util.validate("userAddForm",{
		rules:{
			userNum:{
				required:true
			},
			userName:{
				required:true
			},
			userPassword:{
				required:true
			},
			confirmPassword:{
				required:true,
				equalTo:"#userPassword"
			},
			deptFrom:{
				required:true
			},
			userType:{
				required:true
			}
		},
		messages:{
			userNum:{
				required:"请输入顺序号"
			},
			userName:{
				required:"请输入用户名"
			},
			userPassword:{
				required:"请输入密码"
			},
			confirmPassword:{
				required:"请输入确认密码",
				equalTo:"两次输入密码不一致"
			},
			deptFrom:{
				required:"请选择所属部门"
			},
			userType:{
				required:"请选择用户类型"
			}
		}
	});
	
	$(".bootstrap-table").on("click",".table-delete",function(){
		var $this = $(this);
		Util.questionDialog('确定删除数据？',function(dialog, result){
			if(result){
				var id = $this.attr("data-id");
				var row = gridTable.table("getRowByUniqueId",id);
				//TODO　这里调用后台
				Util.promptSuccessDialog('删除用户信息成功！');
			}
			dialog.close();
		});
	});
	
	$("#btn-delete").click(function(){
		var items = gridTable.table('getSelections');
		if(items.length==0){
			Util.warningDialog('尚未选择数据，请选择！');
		}else{
			Util.questionDialog('确定删除数据？',function(dialog, result){
				if(result){
					//TODO　这里调用后台
					Util.promptSuccessDialog('删除用户信息成功！');
				}
				dialog.close();
			});
		}
	});
	
	//所属部门树
	var selectedInfo=$("#selected-node-info");
	var selectedNode;
	var setting = {
			view:{
				dblClickExpand: false
			},
			async: {
				enable: true,
				url:Util.getPath()+"/manage/data/tree.json",
				dataFilter: function(treeId, parentNode, childNodes){
					return childNodes.rows;
				}
			}, 
			data: {
			    simpleData: {
			        enable: true
			    }
			},
        };
	 $.fn.zTree.init($("#treeContentDemo"), $.extend({},setting,{callback:{
			onClick:function(event, treeId, treeNode){
				selectedNode = treeNode;
				selectedInfo.val(selectedNode.name);
				userAddForm.validate().element(selectedInfo);
				 $("#user-depart-tree").dropdown('toggle');
			}
		}}));
	 
	 $(".dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
	        e.stopPropagation();
	    });
	 
	 
	    //邮箱地址格式
	    $.fn.mailAutoComplete = function(options) {
			var defaults = {
				className: "emailist",
				email: 	["qq.com","gmail.com","126.com","163.com","hotmail.com","sina.com"], 
				zIndex: 11	
			};
			var params = $.extend({}, defaults, options || {});
			var isModern = typeof window.screenX === "number", visibility = "visibility";
			var key = {
				"up": 38,
				"down": 40,
				"enter": 13,
				"esc": 27,
				"tab": 9	
			};
			var fnEmailList = function(input) {
				var htmlEmailList = '', arrValue = input.value.split("@"), arrEmailNew = [];
				$.each(params.email, function(index, email) {
					if (arrValue.length !== 2 || arrValue[1] === "" || email.indexOf(arrValue[1].toLowerCase()) === 0) {			
						arrEmailNew.push(email);						
					}
				});	
				$.each(arrEmailNew, function(index, email) {
					htmlEmailList = htmlEmailList + '<li'+ (input.indexSelected===index? ' class="on"':'') +'>'+ arrValue[0] + "@" + email +'</li>';	
				});		
				return htmlEmailList;			
			};
			var fnEmailVisible = function(ul, isIndexChange) {
				var value = $.trim(this.value), htmlList = '';
				if (value === "" || (htmlList = fnEmailList(this)) === "") {
					ul.css(visibility, "hidden");	
				} else {
					isIndexChange && (this.indexSelected = -1);
					ul.css(visibility, "visible").html(htmlList);
				}
			};
			return $(this).each(function() {
				this.indexSelected = -1;
				var element = this;
				var eleUl = $('<ul></ul>').css({
					position: "absolute",
					marginTop: "33px",
					minWidth: element.offsetWidth - 2,
					visibility: "hidden",
					zIndex: params.zIndex,
					background:"white",
					"list-style":"none",
					border:"1px solid #bdbdbd",
					"padding-left":"1px ",
					cursor:"pointer"
				}).addClass(params.className).bind("click", function(e) {
					var target = e && e.target;
					if (target && target.tagName.toLowerCase() === "li") {
						$(element).val(target.innerHTML).trigger("input");
						$(this).css({visibility: "hidden",});
						element.focus(); 
					}				
				});			
				$(this).before(eleUl);
				if (!window.XMLHttpRequest) { eleUl.width(element.offsetWidth - 2); }	
				
				isModern? $(this).bind("input", function() {
					fnEmailVisible.call(this, eleUl, true);
				}): element.attachEvent("onpropertychange", function(e) {				
					if (e.propertyName !== "value") return;
					fnEmailVisible.call(element, eleUl, true);		
				});
				
				$(document).bind({
					"click": function(e) {
						var target = e && e.target, htmlList = '';
						if (target == element && element.value && (htmlList = fnEmailList(element, params.email))) {
							eleUl.css(visibility, "visible").html(htmlList);	
						} else if (target != eleUl.get(0) && target.parentNode != eleUl.get(0)) {
							eleUl.css(visibility, "hidden");
						}
					},
					"keydown": function(e) {
						var eleLi = eleUl.find("li");
						if (eleUl.css(visibility) === "visible") {
							switch (e.keyCode) {
								case key.up: {
									element.indexSelected--;
									if (element.indexSelected < 0) {
										element.indexSelected = -1 + eleLi.length;	
									}
									e.preventDefault && e.preventDefault();
									break;
								}
								case key.down: {
									element.indexSelected++;
									if (element.indexSelected >= eleLi.length) {
										element.indexSelected = 0;	
									}
									e.preventDefault && e.preventDefault();
									break;
								}
								case key.enter: {		
									e.preventDefault();		
									eleLi.get(element.indexSelected) && $(element).val(eleLi.eq(element.indexSelected).html());
									eleUl.css("visibility", "hidden");
									break;
								}
								case key.tab: case key.esc: {
									eleUl.css("visibility", "hidden");
									break;
								}
							}
							if (element.indexSelected !== -1) {
								eleUl.html(fnEmailList(element));
							}
						}
					}
				});		
			});
		};
		$(".inputMailList").mailAutoComplete();
});