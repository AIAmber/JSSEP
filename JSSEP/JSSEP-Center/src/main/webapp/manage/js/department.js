require(['jquery','bootstrap-dialog','bootstrap-grid','table-toolbar','Util','ztree'], function($,bootstrapDialog,grid,toolbar,Util,ztree) {
	var toolbarc = $(".table-toolbar").toolbar();
    var gridTable =	$('#deptGrids').bootstrapGrid({
		url:'./manage/data/deptSource.json',   //请求的URL
		uniqueId:'id',						  //主键标识
		toolbarc:toolbarc,						
		columns:[{									 
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'id',
	        title: '主键',
	    },{
	        field: 'deptCode',
	        title: '部门代码',
	        width: '15%',
	    }, {
	    	field: 'deptName',
	        title: '部门全称',
	        width: '18%'
	      
	    }, {
        	field: 'deptSName',
  	        title: '部门简称',
  	        width: '15%'
	    }, {
	        field: 'deptUp',
	        title: '上级部门',
	        width: '18%'
	    }, {
	        field: 'userAddress',
	        title: '办公地址',
	        width: '23%'
	     }, {
	    	 field: 'ID',
	         title: '操作',
	    	formatter:function(value,row,index){
	    		return [
	    			'<a class="correctDialog table-operation table-operation-edit fa fa-pencil-square-o" href="javascript:void(0)" title="修改"></a>',
   		         '<a data-id="'+value+'" class="table-delete table-operation table-operation-del fa fa-trash-o" href="javascript:void(0)" title="删除"></a>'
	   		     ].join('');
	        }
	    }],
	});
	//新增部门管理模态框
    var deptAddForm=$("#deptAddForm");
    var dialog=new bootstrapDialog({
		type:'type-default',
        message: $("#deptAddForm"),
        closeByBackdrop: false,
        closeByKeyboard: false,
        autodestroy:false,
        draggable:true,
        cssClass:'department-dialog',
        buttons: [{
            label: '保存',
            autospin: false,
            icon: 'glyphicon glyphicon-check',    
            cssClass:' btn-success btn-sm',
            action: function(dialogRef){
            	if(!deptAddForm.valid()){
            		deptAddInfo.focusInvalid();
            		return;
            	}
            	dialogRef.close();
            	$("#deptAddForm")[0].reset();
            }
        },{
            label: '取消',
            autospin: false,
            icon:'glyphicon glyphicon-remove',
            cssClass:'  btn-default btn-sm',
            action: function(dialogRef){
            	dialogRef.close();
            	$("#deptAddForm")[0].reset();
            	deptAddInfo.resetForm();
            }
        }]
	})
	$("#btn-add").on("click",function(){
		dialog.setTitle("新增部门管理");
		dialog.open();
	   });
    $(".correctDialog").on("click",function(){
    	dialog.setTitle("修改部门管理");
    	dialog.open();
    });
	
	//表单校验
	var deptAddInfo=Util.validate("deptAddForm",{
		rules:{
			orgCode:{
				required:true
			},
			orgShortName:{
				required:true
			},
			orgName:{
				required:true
			},
			orgFrom:{
				required:true
			},
			perName:{
				required:true
			},creditCode:{
				required:true
			},deptNum:{
				required:true
			}
			
		},
		messages:{
			orgCode:{
				required:"请输入部门代码"
			},
			orgShortName:{
				required:"请输入部门简称"
			},
			orgName:{
				required:"请输入部门全称"
			},
			orgFrom:{
				required:"请输入所属部门"
			},
			perName:{
				required:"请输入联系人姓名"
			},creditCode:{
				required:"请输入统一社会信用代码"
			},deptNum:{
				required:"请输入顺序号"
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
				Util.promptSuccessDialog('删除部门信息成功！');
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
					Util.promptSuccessDialog('删除部门信息成功！');
				}
				dialog.close();
			});
		}
	});
	
	//上级部门下拉树
	var orgFrom=$("#orgFrom");
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
	var selectedOrgNode;
	 $.fn.zTree.init($("#orgFrom-treeContent"), $.extend({},setting,{callback:{
			onClick:function(event, treeId, treeNode){
				selectedOrgNode = treeNode;
				orgFrom.val(selectedOrgNode.name);
				deptAddForm.validate().element(orgFrom);
				 $("#orgFrom-tree-dropdown").dropdown('toggle');
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