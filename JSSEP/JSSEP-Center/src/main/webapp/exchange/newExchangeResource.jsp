<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增交换资源</title>
</head>
<body>
<link  href="exchange/css/newExchangeResource.css" rel="stylesheet">
<link href="common/css/custom_zTreeStyle.css" rel="stylesheet">
<script type="text/javascript" src="exchange/js/newExchangeResource.js"></script>
<form class="form-horizontal" id="newExchangeResourceForm">
	<div class="form-group has-feedback">
		<label for="resourceName" class="col-sm-1 control-label"><font class="red">*</font>资源名称</label>
		<div class="col-sm-8">
			<input type="text" class="form-control" id="resourceName" name ="resourceName" placeholder="请选择资源名称" readonly aria-describedby="resourceCollection">
			<span class="glyphicon glyphicon-th-list form-control-feedback" aria-hidden="true"></span>
				<span id="resourceCollection" class="sr-only">(primary)</span>
		</div>
	</div>
	
	<div class="form-group">
		<label for="resourceCode" class="col-sm-1 control-label"><font class="red">*</font>资源代码</label>
		<div class="col-sm-8">
			<input type="text" class="form-control" name="resourceCode" id="resourceCode" readonly>
		</div>
	</div>
	<div class="form-group has-primary has-feedback">
		<label for="releaseDate" class="col-sm-1 control-label" for="releaseDate"><font class="red">*</font>发布日期</label>
		<div class="col-sm-8">
			<input type="text" class="form-control" readonly id="releaseDate" value="" name="releaseDate" aria-describedby="releaseDateStatus">
			<span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
				<span id="releaseDateStatus" class="sr-only">(primary)</span>
		</div>
	</div>
	<div class="form-group">
		<label for="resourceProvider" class="col-sm-1 control-label"><font class="red">*</font>资源提供方</label>
		<div class="col-sm-8">
			<input type="text" class="form-control" id="resourceProvider" name="resourceProvider"  readonly>
		</div>
		
	</div>
	<div class="form-group">
		<label for="resourceProviderCode" class="col-sm-1 control-label"><font class="red">*</font>资源提供方代码</label>
		<div class="col-sm-8">
			<input type="text" class="form-control" id="resourceProviderCode" name ="resourceProviderCode" readonly>
		</div>
	</div>
	<div class="form-group addList">
		<label for="resourceReques" class="col-sm-1 control-label"><font class="red">*</font>资源需求方</label>
		<div class="col-sm-8">
			<div class="tablecheck"><table id="resourceReques" name="resourceReques"></table></div>
		</div>
	</div>
	<div class="form-group addBtn">
		<label class="col-sm-1 control-label"></label>
		<label class="col-sm-8 control-label addRequersData">
		<span class="glyphicon glyphicon-plus-sign" title="添加资源需求方"></span>
		<p class="checkTableData" >资源需求方不能为空</p>
		</label>
	</div>
	<div class="form-group">
		<label for="state" class="col-sm-1 control-label">是否生效</label>
		<div class="col-sm-4">
			 <input type="checkbox"  name="inlineRadioOptions" checked >
		</div>
	</div>
</form>
	<div class="row text-center submit-btn" >
		<button type="button" class="btn btn-success" id="btn_submit"><span class="glyphicon glyphicon-check"></span>&nbsp;提交</button>
		<button type="button" class="btn btn-primary" id="btn_resetForm"><span class="glyphicon glyphicon-repeat"></span>&nbsp;重置</button>
		<button type="button" class="btn btn-default" id="btn_cancel"><span class="glyphicon glyphicon-remove"></span>&nbsp;取消</button>
		<button type="button" class="btn btn-default" id="btn_back" ><span class="fa fa-reply"></span>&nbsp;返回</button>
	</div>
</div>
<!-- 资源需求方弹出框信息 -->
<div style="display: none;">
  <div id="orgInfoContainer">
	<form>
		<div class="form-group has-feedback">
			<input class="form-control" type="text" placeholder="请输入部门代码、部门名称或联系人姓名进行查询" aria-describedby="orgInfoIcon"/>
			<span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
			<span id="orgInfoIcon" class="sr-only">(primary)</span>
		</div>
	</form>
	<table id="orgInfo"></table>
	</div>
</div>
<!-- 弹出字典需要的模版 -->
<div id="sourceDialog"></div>
</body>
</html>