define(['jquery','bootstrap','bootstrap-table-zh-CN'],function($,bootstrap){
	var grid = "";
	var jumpPage="";
	var toolbarheight=30;
	window.pageTofun = function(tableId) {
			var jumpPage = $('#jumpPage input').val();
			if (jumpPage != undefined && jumpPage != null && jumpPage != "") {
				 $(tableId).bootstrapTable('selectPage', jumpPage);
			}
		}
	var BootstrapGrid = function(el,option){
		return el.bootstrapTable({
            url: option.url,         	                   				 		
            dataType: option.dataType||"json",
            method: option.method||'get',                      
            toolbarAlign:'left',
            locale:'zh-CN',						 				
            radio:true,
            striped: option.striped||false,                      
            cache: false,     
            showPaginationSwitch:option.showPaginationSwitch||false,
            singleSelect:option.singleSelect||false,
            pagination: true,                    
            sortable: false,                     
            sortOrder: "asc", 
            data:option.data,
            sidePagination: option.sidePagination||"server",           
            paginationLoop:option.paginationLoop||false,
            paginationPreText:"上一页",
            paginationNextText:"下一页",
            smartDisplay:true,
            queryParamsType:'',
            queryParams: function(param){
            	var params={};
            	$.each(option.queryParams,function(name, value){ 
            		params[name]=value;
				});
				if(isNaN(param.pageSize)){
            		params.pageSize='0';
            	}else{
            		params.pageSize=param.pageSize;
            	}
            	params.pageNumber=param.pageNumber;
        		return params; 		 				
            },
            onLoadSuccess:function(){
            	$("#"+grid).parent().parent().find('.fixed-table-pagination div.pagination').append(jumpPage);
            	toolbarheight+=option.customHeight||0;
				$("#"+grid).parent().height($('#rightContent').height()-(72+toolbarheight));
				$('#'+grid).bootstrapTable('resetView');
            },
            pageNumber:1,                        
            pageSize: 15,                            
            pageList: [15,30,60,120,240,360,'Unlimited'],	
            search: false,                      	 
            searchOnEnterKey:true,
            strictSearch: false,
            showColumns: false,                  
            showRefresh: false,                   
            minimumCountColumns: 2,              
            clickToSelect: true,                 
            uniqueId: option.uniqueId||"ID",                      
            showToggle:false,                     
            cardView: false,                     
            columns:option.columns
        });
	};
	 	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
	  	$.fn.bootstrapGrid = function (option) {
	  		grid=this.attr('id');
	  		jumpPage='<div class="pull-right pagination" id="jumpPage" >'+
			'<button type="button" class="btn btn-default btn-sm pull-right" style ="border:0px;" onclick="pageTofun(\'#'+grid+'\')">确定</button>'+
			'<div><span class="pagination-info pull-right" >&nbsp;页&nbsp;&nbsp;</span></div>'+
			'<input class="form-control input-sm pull-right" type="text" >'+
			'<div><span class="pagination-info pull-right">跳转至&nbsp;</span></div></div>';
			toolbar=option.toolbar;
			toolbar.foldEvent(function($element){
				if($element.height()>30){
					toolbarheight=80;
				}else{
					toolbarheight=30
				}
			    $("#"+grid).parent().height($('#rightContent').height()-(72+toolbarheight));
			    $('#'+grid).bootstrapTable('resetView');
	  		});
	  		return BootstrapGrid(this,option);
	    };
	   
		$(window).resize(function() {
			$("#"+grid).parent().height($('#rightContent').height()-(72+toolbarheight));
			$('#'+grid).bootstrapTable('resetView');
		});
});


