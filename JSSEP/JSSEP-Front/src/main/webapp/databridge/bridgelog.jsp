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
							<span class="pull-left text-right form-label">任务名称</span>
							<input class="form-control pull-left" />
						</li>
						<li class="form-group">
							<span class="pull-left text-right form-label">执行时间</span>
							<input id="reservation" class="form-control pull-left" readonly="readonly"/>
						</li>
						<li class="form-group">
							<span class="pull-left text-right form-label">执行结果</span>
							<select class="form-control pull-left" >
								<option>成功</option>
								<option>失败</option>
								<option>正在执行</option>
							</select>
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