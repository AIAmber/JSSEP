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
	<script src="exchange/js/exchangeLog.js"></script>
</head>
<body>
   <div class="panel panel-default panel-nobody">
   <div class="table-toolbar clearfix">
				<div class="table-toolbar-search pull-right clearfix">
					<form class="form-inline clearfix">
						<ul>
							<li class="form-group">
								<span class="pull-left text-right form-label">资源名称</span>
								<input class="form-control pull-left"/>
							</li>
							<li class="form-group">
								<span class="pull-left text-right form-label">交换时间</span>
								<input class="form-control pull-left dateCustom" readonly id="reservation"/>
								 <span class="glyphicon glyphicon-calendar dateIcon"></span>
							</li>
							<li class="form-group">
								<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="搜索"/>
							</li>
						</ul>
					</form>
				</div>
	  		</div>
		<table id="logGrids"  data-undefined-text="没有检索到数据" ></table>
   </div>
</body>
</html>