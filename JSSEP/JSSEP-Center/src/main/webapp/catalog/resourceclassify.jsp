<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
</head>
<body>
	<link href="catalog/css/catalog.css" rel="stylesheet">
	<link href="catalog/css/resourceclassify.css" rel="stylesheet">
	<script src="catalog/js/resourceclassify.js"></script>
	<div class="panel panel-default panel-nobody clearfix resourceclassify-content">
		<div class="resourceclassify-tree">
			<ul id="treeDemo" class="ztree"></ul>
		</div>
		<div class="panel panel-default panel-nobody resourceclassify-table">
			<div class="table-toolbar clearfix">
				<div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
				    <button id="btn-add" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>新增</button>
				    <button id="btn-delete" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
				</div>
				<div class="table-toolbar-search pull-right clearfix">
					<form class="form-inline clearfix">
						<ul>
							<li class="form-group">
								<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入名称或数值"/>
							</li>
						</ul>
					</form>
				</div>
	  		</div>
	  		<table id="grids"  data-undefined-text="没有检索到数据" ></table>
		</div>
	</div>
	<div style="display: none;">
		<div id="modelContent">
			<form class="form-horizontal">
				<div class="form-group">
					<label class="col-sm-3 control-label">资源名称</label>
					<div class="col-sm-8">
						<input type="text" class="form-control" id="deptName">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">数值</label>
					<div class="col-sm-8">
						<input type="text" class="form-control" id="deptCode">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">上级</label>
					<div class="col-sm-8">
						<input id="btn-show-select-tree" type="text" class="form-control" readonly="readonly">
					</div>
				</div>
			</form>
		</div>
		<div id="treeContent">
			<ul id="treeContentDemo" class="ztree"></ul>
		</div>
	</div>
</body>
</html>