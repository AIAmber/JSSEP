<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增交换节点</title>
</head>
<body>

<div class="panel panel-default panel-nobody">
<link  href="exchange/css/newExchangeNode.css" rel="stylesheet">
<script type="text/javascript" src="exchange/js/newExchangeNode.js"></script>
			<form class="form-horizontal" id="newExchangeNodeForm">
				<fieldset>
				<div class="">
			      	<div class="hrtitle">
			      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
			      		<span style="margin-left: 10px">基础信息</span>
			      	</div>
					<hr>
				<div class="form-group has-feedback">
					<label for="orgName" class="col-sm-1 control-label"><font class="red">*</font>部门名称</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" name="orgName" id="orgName" placeholder="请选择部门名称" required readonly aria-describedby="orgNameIcon" >
						<span class="glyphicon glyphicon-th-list form-control-feedback" aria-hidden="true"></span>
					  	<span id="orgNameIcon" class="sr-only">(primary)</span>
					</div>
					<label for="orgCode" class="col-sm-1 control-label" ><font class="red">*</font>部门代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" name="orgCode" id="orgCode" readonly>
					</div>
				</div>
				<div class="form-group">
					<label for="linkName" class="col-sm-1 control-label"><font class="red">*</font>联系人姓名</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" name="linkName" id="linkName" readonly >
					</div>
					<label for="linkPhone" class="col-sm-1 control-label"><font class="red">*</font>联系人电话</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" name="linkPhone" id="linkPhone" readonly >
					</div>
				</div>
				<div class="form-group has-feedback">
					<label for="linkEmail" class="col-sm-1 control-label"><font class="red">*</font>联系人邮箱</label>
					<div class="col-sm-4">
						<input type="email" class="form-control" name="linkEmail" id="linkEmail" readonly>
					</div>
					<label for="accessTime" class="col-sm-1 control-label" ><font class="red">*</font>创建时间</label>
					<div class="col-sm-4">
						<input type="text" class="form-control" name ="accessTime" id="accessTime" readonly >
						<span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
					    <span id="accessTimeIcon" class="sr-only">(primary)</span>
					</div>
				</div>
				<div class="form-group">
					<label for="businessExplain" class="col-sm-1 control-label">业务说明</label>
					<div class="col-sm-9">
						<textarea class="form-control" name="businessExplain" id="businessExplain" rows="3"></textarea>
					</div>
				</div>
				</div>
				</fieldset>
				<fieldset>
			      	<div class="hrtitle">
			      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
			      		<span style="margin-left: 10px">传输信息</span>
			      	</div>
					<hr>
					<div class="">
					<div class="form-group">
						<label for="msgProQueue" class="col-sm-1 control-label">消息生产队列</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="msgProQueue" id="msgProQueue">
						</div>
						<label for="msgCsuQueue" class="col-sm-1 control-label">消息消费队列</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" name="msgCsuQueue" id="msgCsuQueue">
						</div>
					</div>
					<div class="form-group">
						<label for="msgPublishTheme" class="col-sm-1 control-label">消息发布主题</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" name="msgPublishTheme" id="msgPublishTheme">
						</div>
					</div>
					</div>
	   	 		</fieldset>
		</form>
		<div class="row text-center submit-btn">
			<button type="button" class="btn btn-success" id="btn_submit" ><span class="glyphicon glyphicon-check"></span>&nbsp;提交</button>
			<button type="button" class="btn btn-primary" id="btn_resetFrom"><span class="glyphicon glyphicon-repeat"></span>&nbsp;重置</button>
			<button type="button" class="btn btn-default" id="btn_cancel" ><span class="glyphicon glyphicon-remove"></span>&nbsp;取消</button>
			<button type="button" class="btn btn-default" id="btn_back" ><span class="fa fa-reply"></span>&nbsp;返回</button>
		</div>
</div>
	<div style="display: none;">
	  <div id="orgInfoContainer">
		<form>
			<div class="form-group has-feedback">
				<input class="form-control" type="text" placeholder="请输入部门代码、部门名称或联系人姓名" aria-describedby="orgInfoIcon"/>
				<span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
				<span id="orgInfoIcon" class="sr-only">(primary)</span>
			</div>
		</form>
		<table id="orgInfo"></table>
		</div>
	</div>
</body>
</html>