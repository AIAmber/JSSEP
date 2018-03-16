require.config({
	//定义根路径
	baseUrl:'common/',
	urlArgs:'v='+(new Date()).getTime(),//清除缓存
	paths:{
		'jquery':'js/jquery.min',
		'bootstrap':'js/bootstrap.min',
		'bootstrap-table':"js/bootstrap-table.min",
		'bootstrap-table-zh-CN':'js/bootstrap-table-zh-CN.min',
		'daterangepicker':'js/daterangepicker',
		'daterangepicker-zh-CN':'js/daterangepicker.zh-CN',
		'ztree':'js/jquery.ztree.all.3.5.28.min',
		'moment':'js/moment.min',
		'Router':"js/director.min",
		'echarts':"js/echarts.min",
		'bootstrap-table':"js/bootstrap-table.min",
		'bootstrap-table-sticky-header':'js/bootstrap-table-sticky-header.min',
		'bootstrap-dialog':'js/bootstrap-dialog.min',
		'paginator':'js/bootstrap-paginator',
		//'validator': 'js/zh-CN',
		//兼容IE
		//自定义封装控件
		'table-toolbar':'js/table-toolbar',
		'main':'js/main',
		'bootstrap-grid':'js/bootstrap-grid',
		'routes':'js/router',
		//通用工具
		'Util':'js/util'
	},
	//依赖关系
	shim:{
		'jquery': {exports: 'jquery'},
		'bootstrap-table-zh-CN':{'deps':['jquery','bootstrap-table']},
		'bootstrap-table-sticky-header':['bootstrap-table','css!../common/css/bootstrap-table-sticky-header'],
		'bootstrap':{'deps':['jquery',
		             'css!../common/css/bootstrap-table.min',
		             'css!../common/css/bootstrap-table'
		             ],
		             exports:'bootstrap'},
		'echarts':['jquery'],
		//'validator':['../common/js/jquery.validator.min','css!../common/css/jquery.validator'],
		'paginator':['jquery','bootstrap'],
		'bootstrap-dialog':['jquery','bootstrap'],
		'daterangepicker-zh-CN':['jquery','bootstrap','moment','daterangepicker'],
		'daterangepicker':['jquery','bootstrap','moment'],
		'ztree':['jquery','css!../common/css/metroStyle'],
		'bootstrap-grid':{'deps':['jquery','bootstrap','bootstrap-table']},
		'table-toolbar':{'deps':['jquery','css!../common/css/table-toolbar']},
		'Router': {exports: 'Router'}
	},
	//css样式加载器
    map: {
        '*': {
            css: 'common/js/css.min.js'
        }
    }
});
require(['jquery','main','routes'], function($,main,routes) {
	routes.inint();
}); 