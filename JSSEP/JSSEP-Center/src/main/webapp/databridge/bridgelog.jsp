<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
</head>
<body>
	<link href="databridge/css/databridge.css" rel="stylesheet">
	<script src="databridge/js/bridgelog.js"></script>
	<div class="panel panel-default panel-nobody">
  		<div class="table-toolbar clearfix">
			<div class="table-toolbar-search pull-left clearfix">
				<form class="form-inline clearfix">
					<ul>
						<li class="form-group">
							<div class="btn-group btn-group-sm" id="btn-group-tab">
								<a class="btn btn-default active">全部</a>
								<a class="btn btn-default">执行成功</a>
								<a class="btn btn-default">执行失败</a>
							</div>
						</li>
						<li class="form-group has-feedback">
							<span class="pull-left text-right form-label">执行时间</span>
							<div class="pull-left has-feedback dateCustom-wrapper">
								<input class="form-control pull-left dateCustom dateCustom-detail" readonly placeholder="             开始时间    ~    结束时间" />
								<span class="glyphicon glyphicon-calendar form-control-feedback"></span>
								<span class="glyphicon glyphicon-remove form-control-feedback dateCustom-remove"></span>
							</div>
						</li>
						<li class="form-group">
							<input class="form-control form-control-large pull-left" placeholder="请输入关键字进行查询"/>
						</li>
					</ul>
				</form>
			</div>
			<div class="btn-group btn-group-sm table-toolbar-btn-group">
			    <button id="btn-delete" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
			</div>
  		</div>
		<table id="grids"  data-undefined-text="没有检索到数据" ></table>
	</div>
</body>
</html>