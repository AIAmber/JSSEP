(function($, window, document){
	
	var Toolbar = function(element, options){
		this.$element = $(element);
		this.options = $.extend({},$.fn.toolbar.defaults,options);
		this._init();
	};
	
	Toolbar.prototype = {
		constructor: Toolbar,
		_init:function(){
			this._initSearchBtn();
			this._initArrowBtn();
			this._initLabelAndControl();
			this._setSearchBarWidth();
			this._initResizeListener(true);
			this._initResizeListener(false);
		},
		//初始化查询按钮和下拉箭头，追加在末尾
		_initSearchBtn:function(){
			var searchBtnDiv='<div class="search-btn clearfix">'+
								'<div class="pull-right">'+
							    	'<a href="javascript:void(0)" class="arrow-btn">'+
							    	'<i class="fa fa-angle-double-down"></i></a>'+
							    '</div>'+
							    '<div class="pull-right">'+
							    	'<a href="javascript:void(0)" class="arrow-btn arrow-up">'+
							    	'<i class="fa fa-angle-double-up"></i></a>'+
							    '</div>'+
							    '<div class="pull-left">'+
							    	'<a href="javascript:void(0)" class="glyphicon glyphicon-search"></a>'+
							    '</div>'+
							'</div>';
			this.$element.find("form").after(searchBtnDiv);
		},
		//初始化箭头的点击事件
		_initArrowBtn:function(){
			var $element = this.$element;
			var options = this.options;
			
			var count = $element.find("form ul").length;
			if(count == 1){
				$element.find(".arrow-btn").hide();
				$element.find(".table-toolbar-search").css("padding-right",function(index,value){
					return parseFloat(value) / 2;
				});
				return;
			}
			
			$element.find(".arrow-btn").on("click",function(){
				var toolbar = $(this).parents(".table-toolbar-search");
				var form = toolbar.find("form");
				
				if (toolbar.height() == form.height()){
					toolbar.height(options.toolbarMinHeight);
				} else {
					toolbar.height(form.height());
				}
				toolbar.find(".arrow-btn").toggle();
				var foldEventFunc = options.foldEvent;
				if(foldEventFunc instanceof Function){
					foldEventFunc($element);
				}
			});
			
		},
		_initLabelAndControl:function(){
			var $element = this.$element;
			var options = this.options;
			
			var $label = $element.find("form.form-inline span.form-label").each(function(){
				 var width = $(this).outerWidth();
				 if(options.maxLabelWidth < width){
				 	options.maxLabelWidth = width;
				 }
			}).outerWidth(options.maxLabelWidth).first();
			options.labelMar = parseFloat($label.css("margin-left")) + parseFloat($label.css("margin-right"));
		},
		_setSearchBarWidth:function(){
			var $element = this.$element;
			var options = this.options;
			
			this._getFormControlWithOutLarge().outerWidth(options.defaultFormControlWidth);
			var $searchBar = $element.find(".table-toolbar-search");
			var paddingLeft = parseFloat($searchBar.css("padding-left"))
			var paddingRight = parseFloat($searchBar.css("padding-right"))
			var width = $element.find(".table-toolbar-search").outerWidth() + paddingLeft + paddingRight;
			options.searchBarWidth = width;
		},
		_initResizeListener:function(isResize){
			var self=this;
			var $element = this.$element;
			var options = this.options;
			
			var btnGroupWidth = $element.find(".table-toolbar-btn-group").first().outerWidth();
			var count = $element.find("form.form-inline ul:first li").length;
			
			var resize = function(){
				var toolBarWidth = $element.outerWidth();
				//这里加200像素是这样显示比较美观，同时label会有margin，div会有padding
				var controlWidth = toolBarWidth - btnGroupWidth - options.maxLabelWidth * count - 200;
				if(options.searchBarWidth>=(toolBarWidth - btnGroupWidth)){
					self._getFormControlWithOutLarge().outerWidth(controlWidth / count);
					$element.find(".form-control-large").outerWidth(controlWidth / count + options.maxLabelWidth + options.labelMar);
				}else{
					self._getFormControlWithOutLarge().outerWidth(options.defaultFormControlWidth);
					$element.find(".form-control-large").outerWidth(options.maxLabelWidth + options.defaultFormControlWidth + options.labelMar);
				}
			};
			
			//toolBar动态宽度
			if(isResize){
				resize();
			}else{
				$(window).resize(function() {
					resize();
				});
			}
			
		},
		_getFormControlWithOutLarge:function(){
			return this.$element.find(".form-control").not(".form-control-large");
		},
		foldEvent:function(foldEvent){
			this.options.foldEvent=foldEvent;
		}
	};
	
	$.fn.toolbar = function(options) {
		return new Toolbar(this.first(),options);
        /*this.each(function() {
            new Toolbar(this,options);
        });
        return this;*/
    };
    
    $.fn.toolbar.defaults = {
		"toolbarMinHeight": 30,//toolbar的最小高度
    	"defaultFormControlWidth": 161,//每一个输入框或下拉框的默认宽度
    	"maxLabelWidth": -1,//最大的label宽度
    	"labelMar": -1,//label左右pading及margin
		"searchBarWidth": -1,//搜索部分占据最大宽度
		"foldEvent":null//折叠事件
	};
    
	$.fn.toolbar.Constructor = Toolbar;
    
})(jQuery, window, document)