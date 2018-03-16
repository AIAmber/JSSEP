<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>目录注册列表页面</title>
</head>
<body>
	<link href="<%=path %>/catalog/css/catalog.css" rel="stylesheet">
	<script src="<%=path %>/catalog/js/catalogregistration.js"></script>
	<div class="panel panel-default panel-nobody">
		<ul class="nav nav-tabs nav-tabs-underline" id="navtab" style="position: relative;">
			<li class="active">
				<a href="javascript:void(0)">
					<i style="font-style: normal;">待注册</i>
					<i class="label label-success tab-notice-number" style="position: absolute;">5</i>
				</a>
			</li>
			<li><a href="javascript:void(0)">已注册</a></li>
		</ul>
		<div class="clearfix tab-content">
	  		<div class="table-toolbar clearfix" id="toolbar-one">
				<div class="table-toolbar-search pull-left clearfix">
					<form class="form-inline clearfix">
						<ul>
							<li class="form-group has-feedback">
								<span class="pull-left text-right form-label">提交时间</span>
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
	  		</div>
			<table id="grids-one"  data-undefined-text="没有检索到数据" ></table>
		</div>
		<div class="clearfix tab-content" style="display: none;">
	  		<div class="table-toolbar clearfix" id="toolbar-two">
				<div class="table-toolbar-search pull-left clearfix">
					<form class="form-inline clearfix">
						<ul>
							<li class="form-group">
								<div class="btn-group btn-group-sm" id="btn-group-tab">
									<a class="btn btn-default active">全部</a>
									<a class="btn btn-default">注册通过</a>
									<a class="btn btn-default">注不通过</a>
								</div>
							</li>
							<li class="form-group has-feedback">
								<span class="pull-left text-right form-label">注册时间</span>
								<div class="pull-left has-feedback dateCustom-wrapper">
									<input class="form-control pull-left dateCustom dateCustom-detail" readonly placeholder="             开始时间    ~    结束时间" />
									<span class="glyphicon glyphicon-calendar form-control-feedback"></span>
									<span class="glyphicon glyphicon-remove form-control-feedback dateCustom-remove"></span>
								</div>
							</li>
							<li class="form-group">
								<input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入关键字进行查询"/>
							</li>
						</ul>
					</form>
				</div>
	  		</div>
			<table id="grids-two"  data-undefined-text="没有检索到数据" ></table>
		</div>
	</div>
	
	<!-- 流程进度 -->
	<div class="block-message" id="blockdiv">
		<div class="block-content">
			<table class="table">
				<thead>
					<tr>
						<th>#</th>
						<th>流程节点</th>
						<th>处理结果</th>
						<th>处理人</th>
						<th>处理时间</th>
					</tr>
				</thead>
				<tbody>
			        <tr>
			          <td scope="row">1</td>
			          <td>目录注册</td>
			          <td>通过</td>
			          <td>张三</td>
			          <td>2018-01-01</td>
			        </tr>
			        <tr>
			          <td scope="row">2</td>
			          <td>目录审核</td>
			          <td>通过</td>
			          <td>李四</td>
			          <td>2018-01-02</td>
			        </tr>
			        <tr>
			          <td scope="row">3</td>
			          <td>目录发布</td>
			          <td><a href="javascript:void(0)" class="content-show-detail">不通过</a></td>
			          <td>王二</td>
			          <td>2018-01-03</td>
			        </tr>
			        <tr class="detail">
			        	<td></td>
			          	<td colspan="4">
			          		<div class="detail-content">
			          			<table class="table table-condensed table-nobody">
			          				<tr>
							          <td style="width: 75px" class="text-right">审批结果：</td>
							          <td>不通过</td>
							        </tr>
							        <tr>
							          <td class="text-right">原因：</td>
							          <td>内容不符合要求！</td>
							        </tr>
			          			</table>
							</div>
						</td>
			        </tr>
			        <tr>
			          <td scope="row">4</td>
			          <td>目录注册</td>
			          <td><a href="javascript:void(0)" class="content-show-detail">不通过</a></td>
			          <td>张三</td>
			          <td>2018-01-04</td>
			        </tr>
			        <tr class="detail">
			        	<td></td>
			          	<td colspan="4">
			          		<div class="detail-content">
			          			<table class="table table-condensed table-nobody">
			          				<tr>
							          <td style="width: 75px" class="text-right">审批结果：</td>
							          <td>不通过</td>
							        </tr>
							        <tr>
							          <td class="text-right">原因：</td>
							          <td>内容不符合要求！</td>
							        </tr>
			          			</table>
							</div>
						</td>
			        </tr>
	      		</tbody>
			</table>
		</div>
	</div>
</body>
</html>