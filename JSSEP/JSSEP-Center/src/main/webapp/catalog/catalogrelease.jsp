<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
</head>
<body>
	<link href="catalog/css/catalog.css" rel="stylesheet">
	<script src="catalog/js/catalogrelease.js"></script>
	<div class="panel panel-default panel-nobody">
		<ul class="nav nav-tabs nav-tabs-underline" id="navtab">
			<li class="active"><a href="javascript:void(0)">待发布</a></li>
			<li><a href="javascript:void(0)">已发布</a></li>
		</ul>
  		<div class="table-toolbar clearfix">
			<div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
			    <button id="btn-delete" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
			    <button id="btn-download" type="button" class="btn btn-default"><span class='glyphicon glyphicon-download-alt'></span>下载</button>
			</div>
			<div class="table-toolbar-search pull-right clearfix">
				<form class="form-inline clearfix">
					<ul>
						<li class="form-group">
							<span class="pull-left text-right form-label">共享类型</span>
							<select class="form-control pull-left">
								<option>无条件共享</option>
								<option>有条件共享</option>
								<option>不共享</option>
							</select>
						</li>
						<li class="form-group">
							<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入资源名称或代码"/>
						</li>
					</ul>
				</form>
			</div>
  		</div>
		<table id="grids"  data-undefined-text="没有检索到数据" ></table>
	</div>
</body>
</html>