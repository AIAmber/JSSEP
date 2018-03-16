define(['jquery','bootstrap','paginator','bootstrap-table','bootstrap-table-sticky-header'],function($,bootstrap,paginator,bootstrapTable){
	
	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
	//创建对象
	var BootstrapGrid= function(el,options){
		this.options = options;
        this.$el = $(el);
        this.$el_ = this.$el.clone();
        this._inintGrid(options);
	};
	//初始化表格	
	BootstrapGrid.prototype={
		_inintGrid:function(){
			var that = this;
			that.toolbarheight=30;
			if(that.options.customHeight!=undefined&&that.options.customHeight!=null){
				that.toolbarheight+=that.options.customHeight||0;
			}
			that.url = that.options.url||"";
			this.options.url="";
			this.options.locale='zh-CN';
			this.options.height=$('#rightContent').height()-(68+that.toolbarheight);
			that.bootstrapTable = that.$el.bootstrapTable(this.options);
			that._initPaginator();
			that.resetSearch=that.resetSearch;
			that.table=that.table;
			if(this.options.toolbarc!=undefined){
				this.options.toolbarc.foldEvent(function($element){
					that.toolbarheight=$element.height()+(that.options.customHeight||0);
					$(that.bootstrapTable.selector).bootstrapTable('resetView',{height:$('#rightContent').height()-(68+that.toolbarheight)});
			  	});
			}
		},
		//初始化分页工具
		_initPaginator:function(){
			var that = this;
			$container = $('<div class="fixed-table-paginationc" style="display: block;"></div>');
			var paginator = that.paginator=$container.paginator({
				url:that.url,
				skipPart:true,
				callback:function(data){
					$(that.bootstrapTable.selector).bootstrapTable('load', data.rows);
				 }
	  		});
	  		that.$el.parent().parent().parent().find('div.fixed-table-container').after($container);
	  		$(window).resize(function() {
				$(that.bootstrapTable.selector).bootstrapTable('resetView',{height:$('#rightContent').height()-(68+that.toolbarheight)});
			});
	  		that.paginator=paginator;
		},
		//提供查询方法
		resetSearch:function(params){
			this.paginator.resetSearch(params);
		},
		//抛出官方接口
		table:function(method,params){
			return this.bootstrapTable.bootstrapTable(method,params);
		}
			
	}
  	$.fn.bootstrapGrid = function (options) {
  		 return new BootstrapGrid(this,options);
    };
});


