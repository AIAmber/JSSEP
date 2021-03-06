<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>新建编目</title>
</head>
<body>
	<link href="databridge/css/databridge.css" rel="stylesheet">
	<script src="databridge/js/bridgecnf.js" ></script>
	<form action="" class="form-horizontal bridgecnf">
		<fieldset>
			<div class="hrtitle">
				<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
				<span style="margin-left: 10px">任务信息</span>
			</div>
			<hr>
			<div class="row form-content">
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">任务名称</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" />
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">KTR文件</label>
						<div class="col-sm-4">
							<div class="input-group">
								<input id="filename" type="text" class="form-control" readonly="readonly" placeholder="支持文件类型：.ktr">
								<input id="file" type="file" class="form-control" style="display: none;">
								<span class="input-group-btn">
									<button id="selectFile" class="btn btn-default input-btn-bg" type="button">选择文件</button>
								</span>
						    </div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
    	<!-- 任务信息结束 -->
    	
    	<!-- 源库信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">源库信息</span>
	      	</div>
			<hr>
			<div class="row form-content">
				<div class="col-md-12">
					<div class="form-group">
						<label for="resourcename" class="col-sm-1 control-label">数据库类型</label>
						<div class="col-sm-4">
							<select class="form-control" id="shareType">
								<option>请选择数据库类型</option>
						   		<option>Oracle</option>
						   		<option>Mysql</option>
						   		<option>Sql Server</option>
						   </select>
						</div>
						<label class="col-sm-1 control-label">数据库地址</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">数据库实例名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
						<label class="col-sm-1 control-label">数据库端口</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">数据库用户名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
						<label class="col-sm-1 control-label">数据库密码</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
			</div>
    	</fieldset>
 		<!-- 源库信息结束 -->
 		
 		<!-- 目标库信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">目标库信息</span>
	      	</div>
			<hr>
			<div class="row form-content">
				<div class="col-md-12">
					<div class="form-group">
						<label for="resourcename" class="col-sm-1 control-label">数据库类型</label>
						<div class="col-sm-4">
							<select class="form-control" id="shareType">
								<option>请选择数据库类型</option>
						   		<option>Oracle</option>
						   		<option>Mysql</option>
						   		<option>Sql Server</option>
						   </select>
						</div>
						<label class="col-sm-1 control-label">数据库地址</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">数据库实例名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
						<label class="col-sm-1 control-label">数据库端口</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="form-group">
						<label class="col-sm-1 control-label">数据库用户名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
						<label class="col-sm-1 control-label">数据库密码</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" value="">
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
 		<!-- 目标库信息结束 -->
 		
 		<!-- 任务描述开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">任务描述</span>
	      	</div>
			<hr>
			<div class="row form-content">
				<div class="col-md-12" id="userequire">
					<div class="form-group">
						<label class="col-sm-1 control-label">任务描述</label>
						<div class="col-sm-4">
							<textarea type="text" class="form-control" cols="12" rows="5"></textarea>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
 		<!-- 任务描述束 -->
 		
 		<!-- 执行周期开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">任务调度</span>
	      	</div>
			<hr>
			<div class="row form-content">
				<div class="col-md-12" id="userequire">
					<div class="form-group">
						<label for="resourceclassfy" class="col-sm-1 control-label">执行间隔</label>
						<div class="col-sm-2">
							<input class="form-control" />
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
				</div>
			</div>
   	 	</fieldset>
 		<!-- 执行周期述束 -->
 		
   	 	<div class="container" style="margin-bottom: 20px">
			<div class="row clearfix">
				<div class="col-sm-12 column" style="text-align: center;">
					 <a class="btn btn-default btn-success btn-div" id="submitBtn">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-check"></span>&nbsp;提交
					 </a>
					 <a class="btn btn-default btn-div" id="revokebtn">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-remove"></span>&nbsp;取消
					 </a>
				</div>
			</div>
		</div>
 	</form>
</body>
</html>