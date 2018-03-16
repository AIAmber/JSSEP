<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>交换节点</title>
</head>
<body>
<link  href="exchange/css/exchangeNode.css" rel="stylesheet">
<script src="exchange/js/exchangeNode.js"></script>
	<div class="panel panel-default panel-nobody" >
		<!-- toolbar -->
		<div class="table-toolbar clearfix">
			<div class="table-toolbar-search pull-left clearfix">
				<form class="form-inline clearfix">
					<ul>
						<li class="form-group">
							<span class="pull-left text-right form-label">机构名称</span>
							<select class="form-control pull-left">
								<option>公安局</option>
								<option>工商局</option>
								<option>档案局</option>
								<option>质监局</option>
							</select>
						</li>
						<li class="form-group has-feedback">
						  <span class="pull-left text-right form-label">创建时间</span>
	                      <input type='text' class="form-control pull-left dateCustom dateCustom-detail" id='exchangeDate' readonly  placeholder="	开始时间	   ~	    结束时间"/>
	                      <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
						  <span id="releaseDateStatus" class="sr-only">(primary)</span> 
						</li>
						<li class="form-group">
							<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入关键字进行查询"/>
						</li>
					</ul>
				</form>
			</div>
			<div class="btn-group btn-group-sm table-toolbar-btn-group">
				<a href="#/newexchangenode/add/_" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</a>
		    	<button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
			</div>
 		</div>
 		<!-- grid -->
		<table id="nodeGrids"></table>
		<!-- model -->
	</div>
</body>
</html>