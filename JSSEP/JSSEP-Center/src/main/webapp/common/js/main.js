define(['jquery','bootstrap'],function($,bootstrap){
	 $(function() {
		/*左侧导航栏显示隐藏功能*/
		$(".subNav").click(function() {
			/*显示*/
			if($(this).find("span:first-child").attr('class') == "title-icon glyphicon glyphicon-chevron-down") {
				$(this).find("span:first-child").removeClass("glyphicon-chevron-down");
				$(this).find("span:first-child").addClass("glyphicon-chevron-right");
				$(this).removeClass("sublist-down");
				$(this).addClass("sublist-up");
			}
			/*隐藏*/
			else {
				$(this).find("span:first-child").removeClass("glyphicon-chevron-right");
				$(this).find("span:first-child").addClass("glyphicon-chevron-down");
				$(this).removeClass("sublist-up");
				$(this).addClass("sublist-down");
			}
			// 修改数字控制速度， slideUp(500)控制卷起速度
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
		})
		/*左侧导航栏缩进功能*/
		$(".left-main .sidebar-fold").click(function() {
			if($(this).parent().attr('class') == "left-main left-full") {
				$(this).parent().removeClass("left-full");
				$(this).parent().addClass("left-off");
	
				$(this).parent().parent().find(".right-product").removeClass("right-full");
				$(this).parent().parent().find(".right-product").addClass("right-off");
			} else {
				$(this).parent().removeClass("left-off");
				$(this).parent().addClass("left-full");
	
				$(this).parent().parent().find(".right-product").removeClass("right-off");
				$(this).parent().parent().find(".right-product").addClass("right-full");
			}
		})
	
		/*左侧鼠标移入提示功能*/
		$(".sBox ul li").mouseenter(function() {
			if($(this).find("span:last-child").css("display") == "none") {
				$(this).find("div").show();
			}
		}).mouseleave(function() {
			$(this).find("div").hide();
		})
	
	/*当浏览器大小变化时 ,窗口发生相应的变化 */
	$(window).resize(function() {
		$("#rightContent").height($(window).height() - $(".nav.navbar-default.navbar-mystyle.navbar-fixed-top").height() - $(".breadcrumbs").height() - $(".footer").height());
	
	});
	//
	$(document).ready(function() {
		$("#rightContent").height($(window).height() - $(".nav.navbar-default.navbar-mystyle.navbar-fixed-top").height() - $(".breadcrumbs").height() - $(".footer").height());
	});
	//左侧菜单点击高亮显示
	$(function(){
		$(".sBox ul li a").click(function(){
			$(".sBox ul li.active").removeClass();
			$(this).parent().addClass("active");
		})
	});
	
});
});