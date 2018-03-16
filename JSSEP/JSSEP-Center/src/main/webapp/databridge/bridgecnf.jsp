<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>新建编目</title>
</head>
<body>
	<link href="<%=path %>/databridge/css/databridge.css" rel="stylesheet">
	<script src="<%=path %>/databridge/js/bridgecnf.js" ></script>
	<form action="" class="form-horizontal bridgecnf" id="bridgecnf">
		<fieldset>
			<div class="hrtitle">
				<img alt="" src="<%=path %>/common/img/list-title.png" style="margin-top: -5px;">
				<span>任务信息</span>
			</div>
			<hr>
			<div class="form-group">
				<label class="control-label col-sm-1"><span class="red">*</span>任务名称</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="taskName" required/>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>KTR文件</label>
				<div class="col-sm-4">
					<div class="input-group">
						<input id="filename" name="filename" type="text" class="form-control" readonly="readonly" placeholder="支持文件类型：.ktr" required>
						<input id="file" type="file" name="file" class="form-control" style="display: none;" required>
						<div class="input-group-btn">
							<button id="selectFile" class="btn btn-default" type="button">选择文件</button>
						</div>
				    </div>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1">任务描述</label>
				<div class="col-sm-9">
					<textarea class="form-control" rows="4"></textarea>
				</div>
			</div>
   	 	</fieldset>
    	<!-- 任务信息结束 -->
    	
    	<!-- 源库信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="<%=path %>/common/img/list-title.png" style="margin-top: -5px;">
	      		<span>源库信息</span>
	      	</div>
			<hr>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库类型</label>
				<div class="col-sm-4 has-feedback">
					<select class="form-control" name="sourceType" required>
						<option value="">请选择数据库类型</option>
				   		<option>Oracle</option>
				   		<option>MySQL</option>
				   		<option>SQL Server</option>
				   </select>
				   <span class="glyphicon glyphicon-repeat test-connect icon-connect" data-container="body" data-toggle="tooltip" data-placement="right" title="点击进行连接测试"></span>
				   <span class="fa fa-spinner test-connect" style="display: none;cursor: default;" data-container="body" data-toggle="tooltip" data-placement="right" title="正在测试，请稍候"></span>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库地址</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="sourceIp" required ip="true">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库实例名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="sourceDBName" required>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库端口</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="sourcePort" required digits='true'>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库用户名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="sourceUsername" required>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库密码</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="sourcePassword" required>
				</div>
			</div>
    	</fieldset>
 		<!-- 源库信息结束 -->
 		
 		<!-- 目标库信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="<%=path %>/common/img/list-title.png" style="margin-top: -5px;">
	      		<span>目标库信息</span>
	      	</div>
			<hr>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库类型</label>
				<div class="col-sm-4 has-feedback">
					<select class="form-control" name="targetType" required>
						<option value="">请选择数据库类型</option>
				   		<option>Oracle</option>
				   		<option>MySQL</option>
				   		<option>SQL Server</option>
				   </select>
				   <span class="glyphicon glyphicon-repeat test-connect icon-connect" data-container="body" data-toggle="tooltip" data-placement="right" title="点击进行连接测试"></span>
				   <span class="fa fa-spinner test-connect" style="display: none;cursor: default;" data-container="body" data-toggle="tooltip" data-placement="right" title="正在测试，请稍候"></span>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库地址</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="targetIp" required ip="true">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库实例名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="targetDBName" required>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库端口</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="targetPort" required digits="true">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>数据库用户名</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="targetUsername" required>
				</div>
				<label class="control-label col-sm-1"><font class="red">*</font>数据库密码</label>
				<div class="col-sm-4">
					<input type="text" class="form-control" name="targetPassword" required>
				</div>
			</div>
   	 	</fieldset>
 		<!-- 目标库信息结束 -->
 		
 		<!-- 执行周期开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="<%=path %>/common/img/list-title.png" style="margin-top: -5px;">
	      		<span>任务调度</span>
	      	</div>
			<hr>
			<div class="form-group">
				<label class="control-label col-sm-1"><font class="red">*</font>执行间隔</label>
				<div class="col-sm-2">
					<input type="number" class="form-control text-center" name="time" required number="true">
				</div>
				<div class="col-sm-2">
				    <select class="form-control">
						<option>秒</option>
				   		<option>分钟</option>
				   		<option>小时</option>
				   		<option>天</option>
			   	 	</select>
				</div>
			</div>
   	 	</fieldset>
 		<!-- 执行周期述束 -->
 		
		<div class="row text-center form-bottom">
			<a class="btn btn-default btn-success for-edit" style="display: none;" id="submitBtn">
				<span class="glyphicon glyphicon-check"></span>&nbsp;提交
			</a>
			<a class="btn btn-default btn-primary for-edit" style="display: none;" id="resetBtn">
				<span class="glyphicon glyphicon-repeat"></span>&nbsp;重置
			</a>
			<a class="btn btn-default for-edit" style="display: none;" id="cancelBtn">
				<span class="glyphicon glyphicon-remove"></span>&nbsp;取消
			</a>
			<a href="#/bridgerun" class="btn btn-default" style="display: none;" id="backBtn">
				<span class="fa fa-reply"></span>&nbsp;返回
			</a>
		</div>
	</form>
</body>
</html>