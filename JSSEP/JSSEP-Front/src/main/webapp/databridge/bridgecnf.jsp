<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title></title>
    <!-- Bootstrap -->
    <link href="common/css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
		<script src="common/js/html5shiv.min.js"></script>
    	<script src="common/js/respond.min.js"></script>
    <![endif]-->
    <script src="common/js/jquery.min.js"></script>
    <script src="common/js/bootstrap.min.js"></script>
	<script src="common/js/director.min.js"></script>
	<style type="text/css">
		.form-icon-label{position: absolute;top: 0px;width: 100px;left: -204px;height: 48px}
		.form-icon-label-body{width: 150px;height: 48px;background-color: #A1A1A1}
		.form-icon-label-body > p{padding-top: 14px;color: white;font-weight: bolder;padding-left: 30px}
		.form-icon-label-arrow{left: 150px;position: absolute;top: 0px}
		.form-block{position: relative;margin-top: 40px}
	</style>
</head>
<body>
	<div class="panel panel-default" style="margin-top: 15px">
		<div class="panel-body" style="padding: 0px">
			<div class="col-sm-10" style="border-left: 1px solid #ddd;margin-left: 138px">
				<form class="form-horizontal" style="margin-left: 50px">
					<div class="clearfix form-block">
						<div class="form-icon-label">
							<div class="form-icon-label-body">
								<p>
									<span class="glyphicon glyphicon-bookmark"></span>
									<span>任务信息</span>
								</p>
								<img src="<%=path%>/common/img/databridge/arrow.png" class="form-icon-label-arrow">
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">任务名称</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="任务名称" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">KTR</label>
								<div class="col-sm-9">
									<input type="file" class="form-control" placeholder="KTR" />
								</div>
							</div>
						</div>
					</div>
					<div class="clearfix form-block">
						<div class="form-icon-label">
							<div class="form-icon-label-body">
								<p>
									<span class="glyphicon glyphicon-bookmark"></span>
									<span>源库信息</span>
								</p>
								<img src="<%=path%>/common/img/databridge/arrow.png" class="form-icon-label-arrow">
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库类型</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库地址</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库实例名</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库端口</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库用户名</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库密码</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
					</div>
					<div class="clearfix form-block">
						<div class="form-icon-label">
							<div class="form-icon-label-body">
								<p>
									<span class="glyphicon glyphicon-bookmark"></span>
									<span>目标库信息</span>
								</p>
								<img src="<%=path%>/common/img/databridge/arrow.png" class="form-icon-label-arrow">
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库类型</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库地址</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库实例名</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库端口</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库用户名</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库类型" />
								</div>
							</div>
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">数据库密码</label>
								<div class="col-sm-9">
									<input type="text" class="form-control" placeholder="数据库地址" />
								</div>
							</div>
						</div>
					</div>
					<div class="clearfix form-block">
						<div class="form-icon-label">
							<div class="form-icon-label-body">
								<p>
									<span class="glyphicon glyphicon-bookmark"></span>
									<span>任务描述</span>
								</p>
								<img src="<%=path%>/common/img/databridge/arrow.png" class="form-icon-label-arrow">
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">任务描述</label>
								<div class="col-sm-9">
									<textarea class="form-control" style="height: 100px"></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="clearfix form-block">
						<div class="form-icon-label">
							<div class="form-icon-label-body">
								<p>
									<span class="glyphicon glyphicon-bookmark"></span>
									<span>执行周期</span>
								</p>
								<img src="<%=path%>/common/img/databridge/arrow.png" class="form-icon-label-arrow">
							</div>
						</div>
						<div class="form-group">
							<div class="form-group col-sm-6">
								<label class="col-sm-3 control-label">执行周期</label>
								<div class="col-sm-9 execution-cycle">
									<p class="pull-left" style="line-height: 2.47">每</p>
									<select class="pull-left form-control" style="width: 80px;margin: 0px 15px">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
									</select>
									<select class="pull-left form-control" style="width: 80px;margin-right: 15px">
										<option>分钟</option>
										<option>小时</option>
										<option>天</option>
									</select>
									<p class="pull-left" style="line-height: 2.47">执行</p>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div class="col-sm-12" style="margin-bottom: 20px">
					<span class="center-block" style="width: 200px">
						<input class="btn btn-default" type="button" value="提交"/>
						<input class="btn btn-default" type="button" value="取消"/>
					</span>
				</div>
			</div>
		</div>
	</div>
</body>
</html>