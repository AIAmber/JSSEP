<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>新建编目</title>
</head>
<body>
	<script src="catalog/js/newcatalog.js"></script>
	<link href="catalog/css/catalog-form.css" rel="stylesheet">
	<form class="form-horizontal" method="post">
		<!-- 信息资源分类开始 -->
		<fieldset>
			<div class="hrtitle">
				<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
				<span style="margin-left: 10px">信息资源分类</span>
			</div>
			<hr>
			<div class="">
				<div class="form-group">
					<label for="resourceclassfy" class="control-label formleft">资源分类</label>
					<div class="col-sm-3">	
						<div class="input-group">
						    <span class="input-group-addon" id="basic-addon1">类</span>
						    <select class="form-control formselect" id="resourceclassfy">
					   		    <option>基础信息资源类</option>
					   		    <option>主题信息资源类</option>
					   		    <option>部门信息资源类</option>
					   	    </select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
						    <span class="input-group-addon" id="basic-addon1">项</span>
						    <select class="form-control formselect" id="Sharingtype">
						   		<option>人口信息资源库</option>
						   		<option>法人单位信息资源库</option>
						   		<option>空间地理信息资源库</option>
						   		<option>全民社会保障</option>
						   		<option>市场价格监督</option>
						   		<option>公共服务事项</option>
						   		<option>党中央</option>
						   		<option>全国人大委员会</option>
						   		<option>国务院</option>
						   		<option>全国政协</option>
						   		<option>地方</option>
				   	 		</select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
						    <span class="input-group-addon" id="basic-addon1">目</span>
						    <select class="form-control formselect" id="Sharingtype">
						   		<option>行政</option>
						   		<option>事业</option>
						   		<option>企业</option>
						   		<option>社会保险</option>
						   		<option>社会救助</option>
						   		<option>行政许可审批</option>
						   		<option>便民服务事项</option>
						   		<option>发改委</option>
						   		<option>财政部</option>
						   		<option>北京市</option>
						   		<option>河北省</option>
					   		 </select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
					  		<span class="input-group-addon" id="basic-addon1">细目</span>
						    <select class="form-control formselect" id="Sharingtype">
						   		<option>自定义细目1</option>
						   		<option>自定义细目2</option>
						   		<option>自定义细目3</option>
					   		 </select>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcecode" readonly="readonly" value="224550121545/454545">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源名称</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcename" value="">
					</div>
				</div>
			</div>
		</fieldset>
    	<!-- 信息资源分类结束 -->
    	<!-- 资源提供方信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">资源提供方信息</span>
	      	</div>
			<hr>
			<div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源提供方</label>
						<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourceprovide" >
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">提供方代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourceprovidecode" value="">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源摘要</label>
						<div class="col-sm-8">
						<textarea type="text" class="form-control forminput" name="resourceprovide" ></textarea>
					</div>
				</div>
				<div class="form-group" style="margin-top: 30px;">
					<label for="name" class="control-label formleft">资源格式</label>
						<div class="col-sm-8">
							<table class="table table-hover">
								<thead>
									<tr>
										<th style="min-width: 100px;">资源格式</th>
										<th>存储格式</th>
										<th style="min-width: 100px;">操作</th>
									</tr>
								</thead>
								<tbody id="resourceformatchoice">
								</tbody>
							</table>
							<!-- 选择资源格式模态框开始 -->
							<div id="resourceformat" style="display: none;">
									<table id="grid" class="table table-striped table-bordered table-hover">
				                       <thead id="grid_head">
				                           <tr>
				                               <th class="table-checkbox" style="width:20px; margin: auto;">
				                               		<input id="resformatall" style="vertical-align: top;" class="group-checkable" type="checkbox" >
				                               	</th>
				                               <th>资源格式</th>
				                               <th>存储格式</th>
				                           </tr>
				                       </thead>
				                       <tbody id="grid_body">
				                       		<tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>	
						                        <td>电子文件</td>
						                        <td>OFD,WPS,XML,TXT,DOC,DOCX,HTML,PDM,PPT</td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>电子表格</td>
						                        <td>ET,XLS,XLSX</td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>数据库类</td>
						                        <td>ET,XLS,XLSX</td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>	
						                        <td>图形图像类</td>
						                        <td>JPG,GIF,BMP</td>
						                     </tr>
						                      <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>流媒体类</td>
						                        <td>SWF,RM,MPG</td>
						                     </tr>
						                      <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" id="other" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>	
						                        <td>自描述格式</td>
						                        <td>
						                        	<input type="text" id="otherType" style="width:100%" class="form-control forminput">
						                        </td>
						                     </tr>
					                   </tbody>
					                 </table>
									</div><!-- /.modal-content -->
								</div><!-- /.modal -->
								<div class="btn-group btn-group-sm">
									<a type="button" class="btn btn-default" id="addresourceformat"><span class="glyphicon glyphicon-plus"></span>&nbsp;添加</a>
								</div>
							</div>
							<!-- 选择资源格式模态框结束 -->
						</div>
					</div>
			</div>
    	</fieldset>
 		<!-- 资源提供方信息结束 -->
 		<!-- 信息项信息开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">信息项信息</span>
	      	</div>
			<hr>
		  	<div class="control-group">
			  	<div class="">
					<div class="row" >
						 <div class="col-sm-12" >
						 	<div class="form-group" >
						 	<label for="name" class="control-label formleft"></label>
						 	<div class="col-sm-8">
						 		<table class="table table-hover">
									<thead>
										<tr>
											<th>信息项名称</th>
											<th style="min-width: 100px;">数据类型</th>
											<th>注释</th>
											<th style="min-width: 100px;">操作</th>
										</tr>
									</thead>
									<tbody id="infoItemTable">
									</tbody>
								</table>
						 	</div>
						 	<div class="btn-group btn-group-sm">
								<a type="button" class="btn btn-default" id="addItembutton"><span class="glyphicon glyphicon-plus"></span>&nbsp;添加</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   	 	</fieldset>
 		<!-- 信息项信息结束 -->
 		<!-- 其他开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">其他</span>
	      	</div>
			<hr>
			<div class="">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft">共享类型</label>
							<div class="col-sm-2">
								<select class="form-control formselect" id="shareType">
   							   		<option>无条件共享</option>
   							   		<option>有条件共享</option>
   							   		<option>不予共享</option>
							   </select>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="userequire">
						<div class="form-group">
							<label for="name" class="control-label formleft">使用要求</label>
							<div class="col-sm-8">
								<textarea type="text" class="form-control forminput" name="userequirement"></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="relatebasis" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft">相关依据</label>
							<div class="col-sm-8">
								<textarea type="text" class="form-control forminput" name="userequirement"></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharebar" style="display: none;margin-top: 15px;" >
						<div class="form-group">
							<label for="name" class="control-label formleft">共享条件</label>
							<div class="col-sm-4">
								<input type="text" class="form-control forminput"></input>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharerange" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft">共享范围</label>
							<div class="col-sm-4">
								<input type="text" class="form-control forminput"></input>
							</div>
						</div>
					</div>
					<div class="col-md-12" style="margin-top: 15px;">
						<div class="form-group">
							<label for="name" class="control-label formleft">共享方式</label>
							<div class="col-sm-9" style="overflow: hidden;">
								<label class="radio-inline" style="float: left;">
									<input type="radio" name="share" id="share" value="" checked="" onclick="$('#otherInput').hide()"> 通过共享平台获取
								</label>
								<label class="radio-inline" style="float: left;">
									<input type="radio" name="share" id="share" value="option2" onclick="$('#otherInput').show()">通过其他方式获取
								</label>
								<label class="" id="otherInput" style="display:none;float: left;">
									<input type="text" class="form-control forminput" style="margin-left: 10px;">
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="control-label formleft">开放属相</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" name="optionsRadiosinline" value=""  checked="">是
								</label>
								<label class="radio-inline">
									<input type="radio" name="optionsRadiosinline" value ="option2">否
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft">更新周期</label>
							<div class="col-sm-2">
								<select class="form-control formselect" id="">
   							   		<option>实时</option>
   							   		<option>每日</option>
   							   		<option>每周</option>
   							   		<option>每月</option>
   							   		<option>每季度</option>
   							   		<option>每年</option>
							   </select>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft">发布日期</label>
							<div class="col-sm-2">
							     <input type='text' class="form-control pull-left dateCustom forminput" id='publishDate' readonly />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft">关联资源代码</label>
								<div class="col-sm-4">
								<input type="text" class="form-control forminput">
							</div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
   	 	<div class="container" style="margin-bottom: 30px">
			<div class="row clearfix">
				<div class="col-sm-12 column" style="text-align: center;">
					 <a class="btn btn-default btn-success btn-div" id="saveForm">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-check"></span>&nbsp;提交
					 </a>
					 <a class="btn btn-default btn-div" id="revokebtn">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-remove"></span>&nbsp;取消
					 </a>
				</div>
			</div>
		</div>
 		<!-- 其他结束 -->
 	</form>
 	<!-- 信息项信息弹出框内容开始 -->
 	<div style="display: none">
		<div id="addInfo" style="margin-bottom: 30px;">
			<form class="form-horizontal">
				<div class="form-group">
					<label class="col-sm-3 control-label">信息项信息</label>
					<div class="col-sm-8">
						<input type="text" class="form-control forminput"  id="infoItemName">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">数据类型</label>
					<div class="col-sm-8">
						<select class="form-control formselect" id="infoType">
					   		<option>文本类信息</option>
					   		<option>结构化数据</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">注释</label>
					<div class="col-sm-8">
						<textarea type="text" class="form-control forminput" id="infoMark"></textarea>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- 信息项信息弹出框内容结束-->
</body>
</html>