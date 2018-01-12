<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
   <link  rel="stylesheet" href="exchange/css/exchangeResource.css">
	<script src="exchange/js/exchangeResource.js"></script>
</head>
<body>
 	
	<div class="panel panel-default panel-nobody">
	<div class="table-toolbar clearfix">
				<div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
				    <button id="btn-add" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>新增</button>
				    <button id="btn-edit"  role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-pencil'></span> 修改</button>
				    <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
				</div>
				<div class="table-toolbar-search pull-right clearfix">
					<form class="form-inline clearfix">
						<ul>
							<li class="form-group">
								<span class="pull-left text-right form-label">资源名称</span>
								<input class="form-control pull-left"/>
							</li>
							<li class="form-group has-feedback">
							  <span class="pull-left text-right form-label">发布时间</span>
		                      <input type='text' class="form-control pull-left" id='publishDate' readonly />
		                      <span class="glyphicon glyphicon-calendar form-control-feedback"></span>
							</li>
							<li class="form-group">
								<input class="form-control form-control-large pull-left" placeholder="搜索"/>
							</li>
						</ul>
						<ul>
							<li class="form-group">
								<span class="pull-left text-right form-label">资源提供方</span>
								<input class="form-control pull-left"/>
							</li>
							<li class="form-group">
								<span class="pull-left text-right form-label">资源需求方</span>
								<input class="form-control pull-left"/>
							</li>
							<li class="form-group">
								<span class="pull-left text-right form-label">是否生效</span>
								<select class="form-control pull-left">
									<option>是</option>
									<option>否</option>
								</select>
							</li>
						</ul>
					</form>
				</div>
	  		</div>
		<table id="grids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
   </div>
   <div style="display: none;">
		<!-- Tab panes -->
		<div id="modelContent">
			<!-- Nav tabs -->
				<div class="panel panel-body">
					<form class="form-horizontal">
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">资源名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">资源代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">资源提供方</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">资源提供方代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">资源需求方</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">资源需求方代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
						<div class="form-group">
							<label for="deptName" class="col-sm-2 control-label">发布日期</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptName">
							</div>
							<label for="deptCode" class="col-sm-2 control-label">是否生效</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" id="deptCode">
							</div>
						</div>
					</form>
				</div>
			</div>
	</div>
</body>
</html>