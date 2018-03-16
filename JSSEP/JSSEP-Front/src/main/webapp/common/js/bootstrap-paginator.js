define(['jquery','bootstrap'], function($,bootstrap){
	'use strict';
   //创建分页对象
   var Paginator = function(el,options){
   		this.settings=$.extend({},Paginator.DEFAULTS,options);
        this.$el = $(el);
        this.$el_ = this.$el.clone();
        this.timeoutId_ = 0;
        this._initPage();
   }
   //分页默认配置		
   Paginator.DEFAULTS={
			pageNo:1,   							//当前页码，用于点亮对应的页码
			pageSize:10,    						//每页渲染的最大页码数
			pageList:[10,30,50,100,300,500,'全部'],	//可变页码大小
			dataCount:0,    						//总数据条数
			pageCount:0,    						//总页数
			pageShowNum:5,  						//初始化的显示页码，默认的是显示到5页
			skipPart:true,  						//跳转模块是否添加
			fontSize:14,     						//分页字体
			queryParams:{}
	}
	Paginator.prototype={
		constructor: Paginator,
		//校验数据
		_validatePageCount:function(){
		    var that =this;
			if(that.settings.pagNo<0 || that.settings.pageSize<0 || that.settings.pageCount<0){
				console.error("请检查 pagNo,pageSize,count这个三个参数是否存在非法输入");
				return false;
			}
			//如果showNum为为非法数值，那么设置为默认值
			if(that.settings.pageShowNum<0){
			   that.setting.pageShowNum=5;
			}
		},
		//分页渲染
		_pageDraw:function(){
			var that=this; 
			var json=that.pageJson;
			if(that.settings.dataCount>0){
				var pagination='<div class="pull-right pagination"><ul class="pagination">';
				for(var i=0;i<json.algorithm.length;i++){
					if(json.algorithm[i].status=="disabled"){
						pagination+='<li class="'+json.algorithm[i].status+'" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}
					else if(json.algorithm[i].status=="active"){
						pagination+='<li class="'+json.algorithm[i].status+'" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
						
					}else if(json.algorithm[i].num=="more"){
						pagination+='<li class="disabled" num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}else{
						pagination+='<li num="'+json.algorithm[i].num+'" ><a href="javascript:;">'+json.algorithm[i].text+'</a></li>';
					}
				}
				pagination+='</ul></div>';
				var paginationDetail='<div class="pull-left pagination-detail" style="margin-top: 5px;" >'
					paginationDetail+='<span class="pagination-info">共 '+that.settings.dataCount+' 条&nbsp;</span>';
		            paginationDetail+='<span class="page-list">每页显示 <span class="btn-group dropup"><button type="button" style="padding: 4px;" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
		            paginationDetail+='<span class="page-size" style ="padding:4px;">'+that.settings.pageSize+'</span><span class="caret"></span></button>'
		            paginationDetail+='<ul class="dropdown-menu pageSize" role="menu">';
		            for(var j=0;j<that.settings.pageList.length;j++){
		            	paginationDetail+='<li><a value='+that.settings.pageList[j]+' href="javascript:void(0)">'+that.settings.pageList[j]+'</a></li>';
		            }
		            paginationDetail+='</ul></span> 条</span></div>';
				if(that.settings.skipPart==true){
					var paginationDetail1='<div class="pull-right pagination-detail" style="margin-top: 5px;">';
						paginationDetail1+='<span class="pagination-info">跳转至&nbsp;</span>';
						paginationDetail1+='<span class="pagination-info pull-right">&nbsp;页</span>';
				        paginationDetail1+= '<input type="text" class="form-control input-sm pull-right pagination_change_page" style="width: 40px;padding:3px; height: 25px;margin-top: -3px;"/></div>';
					paginationDetail+=paginationDetail1;
				}
				paginationDetail+=pagination;
				that.$el.html(paginationDetail);
			}
		},
		//分页算法逻辑，主要对分页进行逻辑运算，不做渲染，返回值为JSON
		_pageAlgorithm:function (){
			var that=this;
			var data="";
			if(that.settings.pageNo==1){
				data='{"algorithm":[{"text":"上一页","num":0,"status":"disabled"}';
			}else{
				data='{"algorithm":[{"text":"上一页","num":"'+(that.settings.pageNo-1)+'","status":"abled"}';
			}
			//判断分页类型
			if(that.settings.pageCount>that.settings.pageShowNum){
				if(that.settings.pageNo<that.settings.pageShowNum){
					//判断pageNo是否在要初始化显示的页码内
					if(that.settings.pageNo<=that.settings.pageShowNum){
						for(var i=1;i<=that.settings.pageShowNum;i++){
							if(that.settings.pageNo==i){
								data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
								
							}else{
								data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
							}	
						}
						if(that.settings.pageNo==that.settings.pageShowNum){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}else{
						for(var i=1;i<=that.settings.pageNo;i++){
	
							if(i==that.settings.pageNo){
								data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
							}else{
								data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
							}
						}
						if(that.settings.pageNo!=that.settings.pageCount){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}
					//选中最后一页时，将省略号隐藏
					if(that.settings.pageNo!=that.settings.pageCount){
						if(that.settings.pageNo!=(that.settings.pageCount-1)){
							data+=',{"text":"…","num":"more","status":""}';
							data+=',{"text":"'+that.settings.pageCount+'","num":"'+that.settings.pageCount+'","status":"abled"}';
						}
					}
				}else if(that.settings.pageNo>that.settings.pageCount-that.settings.pageShowNum){
					data+=',{"text":"1","num":"1","status":"abled"}';
					data+=',{"text":"…","num":"more","status":"disabled"}';
					
					if(that.settings.pageNo<=that.settings.pageCount-4){
						data+=',{"text":"'+(that.settings.pageNo-1)+'","num":"'+(that.settings.pageNo-1)+'","status":"abled"}';
						data+=',{"text":"'+that.settings.pageNo+'","num":"'+that.settings.pageNo+'","status":"active"}';
						data+=',{"text":"'+(that.settings.pageNo+1)+'","num":"'+(that.settings.pageNo+1)+'","status":"abled"}';
						data+=',{"text":"…","num":"more","status":"disabled"}';
						data+=',{"text":"'+that.settings.pageCount+'","num":"'+that.settings.pageCount+'","status":"abled"}';
					}else{
						for(var i=that.settings.pageCount-that.settings.pageShowNum+1;i<=that.settings.pageCount;i++){
							if(that.settings.pageNo==i){
								data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
							}else{
								data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
							}
						}
					}
					
				}else{
					data+=',{"text":"1","num":"1","status":"abled"}';
					data+=',{"text":"…","num":"more","status":"disabled"}';
					for(var i=that.settings.pageNo-1;i<=that.settings.pageNo+1;i++){
						if(i==that.settings.pageNo){
							data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
						}else{
							data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
						}
					}
					data+=',{"text":"…","num":"more","status":"disabled"}';
					data+=',{"text":"'+that.settings.pageCount+'","num":"'+that.settings.pageCount+'","status":"abled"}';
				}
			}else{				
				for(var i=1;i<=that.settings.pageCount;i++){
					if(that.settings.pageNo==i){
						data+=',{"text":"'+i+'","num":"'+i+'","status":"active"}';
					}else{
						data+=',{"text":"'+i+'","num":"'+i+'","status":"abled"}';
					}
				}
			}
			if(that.settings.pageNo==that.settings.pageCount){
				data+=',{"text":"下一页","num":"'+(that.settings.pageNo+1)+'","status":"disabled"}]}';
			}else{
				data+=',{"text":"下一页","num":"'+(that.settings.pageNo+1)+'","status":"abled"}]}';
			}
			that.pageJson=JSON.parse(data);
		},
		//获取数据
		_getData:function(){
	   	   var that = this;
		   $.ajax({ 
			   url: that.settings.url,
			   async:false,
			   type:'post',
			   data:that.settings.queryParams,
			   success: function(data){
			   	   if(typeof(data) != "object"){
						data = JSON.parse(data);
				   }
				   that.settings.pageCount=Math.ceil(parseInt(data.total)/parseInt(that.settings.pageSize));
				   that.settings.dataCount=parseInt(data.total);
				   if(that.settings.callback!=null&&that.settings!=undefined){
				   		that.settings.callback(data);
				   }
			   }
		    });
	   },
	   //页数变换方法
	   _onPageNumberChange:function(event){
			 var that = this;
			 var pageNo=event.currentTarget.attributes.num.value;
			 if($(event.currentTarget).attr("class")=="disabled"){return false;}
			 if(pageNo==0 || pageNo==(that.settings.pageCount+1)){
			 }else{
			 	that.settings.pageNo=parseInt(pageNo);
			 	that._initPage(that.settings);
			 }
		},
		//分页显示多少变换
		_onPageSizeChange:function(event){
			var that = this;
			var pageSize=event.currentTarget.outerText;
			that.settings.queryParams
		 	that.settings.pageSize=parseInt(pageSize);
		 	if(that.settings.pageNo>Math.ceil(that.settings.dataCount/that.settings.pageSize)){
		 		that.settings.pageNo=1;
		 	}
		 	that._initPage();
		},
		//分页跳转页
		_onGoPageNumber:function(event){
			 var that = this;
			 if(event.keyCode=='13'){
			 	if(event.currentTarget.value!=undefined&&event.currentTarget.value!=""){
			 		that.settings.pageNo=parseInt(event.currentTarget.value);
		 	 	    that._initPage(that.settings);
			 	}
			 }
		},
		//自定义查询方法
		resetSearch:function(contexts){
	    	var that = this;
	    	if(contexts!=undefined&&contexts!=null){
		    	$.extend(that.settings.queryParams,contexts);
	    	}
	    	that.settings.pageNo=1;
	    	that._initPage();
	    	//that.settings.queryParams={};
	    },
	    //初始化方法
	    _initPage:function(){
			var that = this;
			that.settings.queryParams.pageNumber=that.settings.pageNo;
			that.settings.queryParams.pageSize=that.settings.pageSize;
			that._getData();
			that._validatePageCount();
			that._pageAlgorithm();
		    that._pageDraw();
		    that.resetSearch=that.resetSearch;
		    var $pageNumberChange = that.$el.find('ul.pagination li');
		    var $pageSizeChange = that.$el.find('ul.pageSize li');
		    var $goPageNmuber = that.$el.find('.pagination_change_page');
		    
	  		$pageNumberChange.off('click').on('click', $.proxy(that._onPageNumberChange, this));
	  		$pageSizeChange.off('click').on('click', $.proxy(that._onPageSizeChange, this));
	  		$goPageNmuber.on('keydown', $.proxy(that._onGoPageNumber, this));
		}
		
	}	
  	$.fn.paginator=function(options){
  		return new Paginator(this,options);
    }
    $.fn.paginator.Constructor = Paginator;
});