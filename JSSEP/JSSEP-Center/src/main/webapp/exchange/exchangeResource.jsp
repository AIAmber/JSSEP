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
    
</head>
<body>
	<link  rel="stylesheet" href="exchange/css/exchangeResource.css">
	<script src="exchange/js/exchangeResource.js"></script>
	<div class="panel panel-default panel-nobody">
	<div class="table-toolbar clearfix">
		<div class="table-toolbar-search pull-left clearfix">
			<form class="form-inline clearfix">
					<ul>
						<li class="form-group">
							<div class="btn-group btn-group-sm" id="btn-group-tab">
									<a class="btn btn-default active">全部</a>
									<a class="btn btn-default">已生效</a>
									<a class="btn btn-default">未生效</a>
							</div>
						</li>
						<li class="form-group has-feedback">
						  <span class="pull-left text-right form-label">发布时间</span>
	                      <input type='text' class="form-control pull-left dateCustom dateCustom-detail" id='publishDate' readonly  placeholder="	开始时间	   ~	    结束时间"/>
	                      <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
						  <span id="releaseDateStatus" class="sr-only">(primary)</span>
						</li>
						<li class="form-group">
							<input class="form-control form-control-large pull-left" placeholder="请输入关键字进行查询"/>
						</li>
					</ul>
			</form>
		</div>
		<div class="btn-group btn-group-sm table-toolbar-btn-group">
			  <a id="btn-add" href="#/newexchangeresource/add/_" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</a>
			  <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
		</div>
	</div>
	<table id="grids" ></table>
   </div>
</body>
</html>