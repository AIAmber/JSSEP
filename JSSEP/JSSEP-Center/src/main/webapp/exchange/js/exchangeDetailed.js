require(['jquery', 'bootstrap-grid','table-toolbar','daterangepicker','Util','ztree','daterangepicker-zh-CN'], function($,grid,toolbar,daterangepicker,Util,ztree) {
	var toolbarc =  $(".table-toolbar").toolbar();
	var logGrid = $('#logGrids').bootstrapGrid({
		url:Util.getPath()+'/exchange/data/exchange.json',   //请求的URL
		method:'get',								 //请求方式
		dataType:'json',							 //参数类型
		toolbarc:toolbarc,
		queryParams:{},
		singleSelect:false,
		uniqueId:'ID',								 //主键标识
		columns:[{									 //数据列
	        checkbox: true
	    }, {
	    	visible:false,
	        field: 'ID',
	        title: '主键'
	    },{
	    	 field: 'TRANSACT_AFFAIR_NAME',
	         title: '办件名称',
	         formatter:function(value,row,index){
               return '<a href="#/exchangeDetailInfo/view/'+row.ID+'">'+value+'</a>';
            }
	    },{
	    	 field: 'DEPT_YW_NAME',
	         title: '业务名称'
	    },{
	        field: 'sourceProvider',
	        title: '申请事项',
	        width: '15%'
	    },{
	        field: 'APPLICANT_NAME',
	        title: '申请人/单位'
	    }, {
	        field: 'ORG_NAME',
	        title: '办理部门',
	        width: '15%'
	    },{
	        field: 'EXCHANGE_DATE',
	        title: '交换时间',
	        width: '5%',
	        sortable:true
	    }],
	    onLoadSuccess:function(str){
	    }
	});
	$("#reservation").daterangepicker({
		autoUpdateInput: false,
		timePicker: true,
    	timePicker24Hour: true,
		locale: {
            format: 'YYYY-MM-DD HH:mm',
            applyLabel: "确定",
    		cancelLabel: "取消"
        }
	}).on('apply.daterangepicker',function(ev, picker){
		if(picker.singleDatePicker){
			$(this).val(picker.startDate.format(picker.locale.format));
		}else{
			$(this).val(picker.startDate.format(picker.locale.format)+' ~ '+picker.endDate.format(picker.locale.format));
		}
	});
	/*$('#btn-customShow').on('click',function(){
			$(".resourceChoose").animate({'margin-right':'1%'},500); 
	});*/
	/*$('#btn-customShow').on('click',function(){
			$(".resourceChoose").animate({'margin-right':'1%'},500); 
	});*/
	
	//下拉树
	var setting = {
            view: {
                dblClickExpand: false
            },
            /*async: {
                enable: true,
                url:Util.getPath()+"/exchange/data/tree.json",
                autoParam:["id", "name=n"],
                otherParam:{"otherParam":"zTreeAsyncTest"},
                dataFilter: function(treeId, parentNode, childNodes){
                    return childNodes.rows;
                }
            }, */
            data: {
                simpleData: {
                    enable: true
                }
            },
            callback: {
                beforeClick: function(treeId, treeNode) {
                    var check = (treeNode && !treeNode.isParent);
                    return check;
                },
                onClick: onClick
            }
        };
    //暂时将数据放在这里
    var data =[
        { "id":1, "pId":0, "name":"基础信息资源类","open":true},
        { "id":12, "pId":1, "name":"法人单位信息资源库"},
        { "id":123, "pId":12, "name":"企业"},
        { "id":1231, "pId":123, "name":"基本信息"},
        { "id":12311, "pId":1231, "name":"法人基本信息"},
        { "id":122, "pId":12, "name":"事业"},
        { "id":1221, "pId":122, "name":"基本信息"},
        { "id":12211, "pId":1221, "name":"法人基本信息"},
        { "id":121, "pId":12, "name":"行政","isParent":true},
        { "id":11, "pId":1, "name":"人口信息资源库","isParent":true},
        { "id":13, "pId":1, "name":"空间地理信息资源库","isParent":true},
    
        { "id":2, "pId":0, "name":"主题信息资源类"},
        { "id":24, "pId":2, "name":"审批改革"},
        { "id":241, "pId":24, "name":"企业"},
        { "id":2411, "pId":241, "name":"企业新设注册登记"},
        { "id":24111, "pId":2411, "name":"3550主题分析-企业注册登记"},
        { "id":2412, "pId":241, "name":"投资项目建设"},
        { "id":24121, "pId":2412, "name":"3550主题分析-投资项目建设"},
        { "id":242, "pId":24, "name":"个人/企业"},
        { "id":2421, "pId":242, "name":"房地产交易"},
        { "id":24211, "pId":2421, "name":"3550主题分析-不动产登记"},
        { "id":21, "pId":2, "name":"全民社会保障"},
        { "id":211, "pId":21, "name":"社会保险","isParent":true},
        { "id":212, "pId":21, "name":"社会救助","isParent":true},
        { "id":22, "pId":2, "name":"市场价格监督","isParent":true},
        { "id":23, "pId":2, "name":"公共服务事项"},
        { "id":231, "pId":23, "name":"行政许可审批"},
        { "id":2311, "pId":231, "name":"设立登记"},
        { "id":23111, "pId":2311, "name":"企业注册登记"},
        { "id":2312, "pId":231, "name":"变更登记"},
        { "id":23121, "pId":2312, "name":"企业注册登记"},
        { "id":2313, "pId":231, "name":"注销登记"},
        { "id":23131, "pId":2313, "name":"企业注册登记"},
        { "id":2314, "pId":231, "name":"行政许可"},
        { "id":23141, "pId":2314, "name":"服务事项公开基本信息"},
        { "id":232, "pId":23, "name":"便民服务事项","isParent":true},
    
        { "id":3, "pId":0, "name":"部门信息资源类","isParent":true},
        { "id":31, "pId":3, "name":"党中央","isParent":true},
        { "id":32, "pId":3, "name":"全国人大委员会","isParent":true},
        { "id":33, "pId":3, "name":"国务院","isParent":true},
        { "id":331, "pId":33, "name":"发改委","isParent":true},
        { "id":332, "pId":33, "name":"财政部","isParent":true},
        { "id":34, "pId":3, "name":"地方","isParent":true},
        { "id":341, "pId":34, "name":"北京市","isParent":true},
        { "id":342, "pId":34, "name":"河北省","isParent":true}
      ];
    function onClick(e, treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        v = "";
        nodes.sort(function compare(a,b){return a.id-b.id;});
        for (var i=0, l=nodes.length; i<l; i++) {
            v += nodes[i].name + ",";
        }
        if (v.length > 0 ) v = v.substring(0, v.length-1);
        var cityObj = $("#select-source");
        cityObj.attr("value", v);
        hideMenu();
    }
    function hideMenu() {
        $("#menuContent").fadeOut("fast");
        $("body").unbind("mousedown", onBodyDown);
    }
    function onBodyDown(event) {
        if (!(event.target.id == "menuBtn" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
            hideMenu();
        }
    }
	$.fn.zTree.init($("#treeDemo"), setting, data);
	$("#select-source").click(function(){
	    var $this = $("#select-source");
        var cityOffset = $this.offset();
        console.log(cityOffset.left,cityOffset.top + $this.outerHeight());
        $("#menuContent").outerWidth($this.outerWidth()).css({left:cityOffset.left, top:cityOffset.top + $this.outerHeight() + 2}).slideDown("fast");

        $("body").bind("mousedown", onBodyDown);
	});
	
	
});