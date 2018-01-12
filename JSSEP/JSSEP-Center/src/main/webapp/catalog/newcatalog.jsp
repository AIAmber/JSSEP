<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>新建编目</title>
</head>
<body>
	<script src="catalog/js/newcatalog.js"></script>
	<link href="catalog/css/catalog-form.css" rel="stylesheet">
	<form action="" class="form-horizontal">
		<fieldset>
			<div class="hrtitle">
				<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
				<span style="margin-left: 10px">信息资源分类</span>
			</div>
			<hr>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourceclassfy" class="col-sm-1 control-label">资源分类</label>
							<div class="col-sm-2">
								<select class="form-control" id="resourceclassfy">
							   		<option>类</option>
							   		<option>类</option>
							   		<option>类</option>
							   </select>
							</div>
							<div class="col-sm-2">
								<select class="form-control" id="Sharingtype">
							   		<option>项</option>
							   		<option>项</option>
							   		<option>项</option>
						   	 	</select>
							</div>
							<div class="col-sm-2">
								<select class="form-control" id="Sharingtype">
							   		<option>目</option>
							   		<option>目</option>
							   		<option>目</option>
							    </select>
							</div>
							<div class="col-sm-2">
								<select class="form-control" id="Sharingtype">
							   		<option>细目</option>
							   		<option>细目</option>
							   		<option>细目</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">资源代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="resourcecode" readonly="readonly" value="224550121545/454545">
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">资源名称</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="resourcename" value="">
							</div>
						</div>
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
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">资源提供方</label>
								<div class="col-sm-4">
								<input type="text" class="form-control" name="resourceprovide" >
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">提供方代码</label>
							<div class="col-sm-4">
								<input type="text" class="form-control" name="resourceprovidecode" value="">
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">资源摘要</label>
								<div class="col-sm-8">
								<textarea type="text" class="form-control" name="resourceprovide" ></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">资源格式</label>
								<div class="col-sm-8">
									<div id=""></div>
									
									<table class="table table-hover">
										<thead>
											<tr>
												<th><input type="checkbox" id="selallresformat"></input></th>
												<th>资源格式</th>
												<th>存储格式</th>
												<th style="min-width: 80px">操作</th>
											</tr>
										</thead>
										<tbody id="resourceformatchoice">
										</tbody>
									</table>
									<div style="text-align:center">
										<button type="button" class="btn btn-default btn-primary" id="addresourceformat">添加</button>
										<button type="button" class="btn btn-default btn-warning" id="delresourceformat">删除</button>
									</div>
									
<!-- 									<img alt="" src="common/img/add.png" data-toggle="modal" data-target="#resourceformat" data-toggle="tooltip" title="请点击选择或者修改资源格式"  data-placement="top">
 -->									<!-- 选择资源格式模态框开始 -->
									<div class="modal fade" id="resourceformat" tabindex="-1" role="dialog" aria-labelledby="choiceResourceFormat" aria-hidden="true" data-backdrop="static" data-keyboard="false">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
														&times;
													</button>
													<h4 class="modal-title" id="choiceResourceFormat">
														选择资源格式
													</h4>
												</div>
												<div class="modal-body">
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
										                        	<input type="text" id="otherType" style="width:100%" class="form-control">
										                        </td>
										                     </tr>
									                   </tbody>
									                 </table>
												</div>
												<div class="modal-footer" style="text-align: center;">
													<button type="button" class="btn btn-default btn-primary" id="submitResourceFormat">提交</button>
													<button type="button" class="btn btn-default btn-warning" data-dismiss="modal">关闭</button>
												</div>
											</div><!-- /.modal-content -->
										</div><!-- /.modal -->
									</div>
									<!-- 选择资源格式模态框结束 -->
									<!-- 提示模态框 -->
									<div class="modal fade" id="choiceTip" tabindex="-1" role="dialog"  aria-hidden="true" data-backdrop="static" data-keyboard="false">
										<div class="modal-dialog" style="width: 300px">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
														&times;
													</button>
													<!-- <h4 class="modal-title" id="myModalLabel">
														模态框（Modal）标题
													</h4> -->
												</div>
												<div class="modal-body" style="text-align: center;font-size: 14px">
													请至少选择一条信息！
												</div>
												<div class="modal-footer" style="text-align: center">
													<button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
												</div>
											</div><!-- /.modal-content -->
										</div><!-- /.modal -->
									</div>
									<!-- 提示模态框 -->
								</div>
							</div>
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
			  	<div class="container">
					<div class="row" >
						 <div class="col-sm-12" >
						 	<div class="form-group" >
						 	<label for="name" class="col-sm-1 control-label"></label>
						 	<div class="col-sm-8">
						 		<table class="table table-hover">
									<thead>
										<tr>
											<th><input type="checkbox" id="checkall"></input></th>
											<th>信息项名称</th>
											<th>数据类型</th>
											<th>注释</th>
											<th>操作</th>
										</tr>
									</thead>
								<tbody id="infoItemTable">
								</tbody>
								</table>
								<div style="text-align:center">
									<button type="button" class="btn btn-default btn-primary" id="addItembutton">添加</button>
									<button type="button" class="btn btn-default btn-warning" id="delItembutton">删除</button>
								</div>
						 	</div>
							<div class="col-sm-1">
								<!-- <img alt="" src="common/img/add.png" data-toggle="modal" data-target="#addInfo"> -->
								<!-- 添加信息项弹出框 -->
<!-- 								<div style="height: 800px" class="modal fade" id="addInfo" tabindex="-1" role="dialog" aria-labelledby="addInfoLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
 -->									
								<div class="modal fade" id="addInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
													&times;
												</button>
												<h4 class="modal-title" id="myModalLabel">
													添加信息项信息
												</h4>
											</div>
											<div class="modal-body">
												<div class="form-group">
										            	<label for="resourcename" class="col-sm-1 control-label">信息项名称</label>
															<div class="col-sm-8">
															<input type="text" class="form-control" id="infoItemName">
														</div>
										            </div>
										            <div class="form-group">
														<label for="resourcename" class="col-sm-1 control-label">数据类型</label>
														<div class="col-sm-8">
															<select class="form-control" id="infoType">
							   							   		<option>文本类信息</option>
							   							   		<option>结构化数据</option>
								   							</select>
														</div>
													</div>
													<div class="form-group">
														<label for="resourcename" class="col-sm-1 control-label">注释</label>
														<div class="col-sm-8">
															<textarea type="text" class="form-control" id="infoMark"></textarea>
														</div>
													</div>
											</div>
											<div class="modal-footer" style="text-align: center;">
												<button type="button" class="btn btn-default btn-primary" id="submitInfoItem">确定</button>
												<button type="button" class="btn btn-default btn-warning" data-dismiss="modal">取消</button>
											</div>
										</div><!-- /.modal-content -->
									</div><!-- /.modal -->
								</div>	
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
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="col-sm-1 control-label">共享类型</label>
							<div class="col-sm-2">
								<select class="form-control" id="shareType">
   							   		<option>无条件共享</option>
   							   		<option>有条件共享</option>
   							   		<option>不予共享</option>
							   </select>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="userequire">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">使用要求</label>
							<div class="col-sm-8">
								<textarea type="text" class="form-control" name="userequirement"></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="relatebasis" style="display: none">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">相关依据</label>
							<div class="col-sm-8">
								<textarea type="text" class="form-control" name="userequirement"></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharebar" style="display: none">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">共享条件</label>
							<div class="col-sm-4">
								<input type="text" class="form-control"></input>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharerange" style="display: none">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">共享范围</label>
							<div class="col-sm-4">
								<input type="text" class="form-control"></input>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">共享方式</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" name="share" id="share" value="" checked="" onclick="$('#otherInput').hide()"> 通过共享平台获取
								</label>
								<label class="radio-inline">
									<input type="radio" name="share" id="share" value="option2" onclick="$('#otherInput').show()">通过其他方式获取
								</label>
								<label class="" id="otherInput" style="display:none">
									<input type="text" class="form-control" >
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="name" class="col-sm-1 control-label">开放属相</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" name="optionsRadiosinline" value="" checked="">是
								</label>
								<label class="radio-inline">
									<input type="radio" name="optionsRadiosinline" value ="option2">否
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="col-sm-1 control-label">更新周期</label>
							<div class="col-sm-2">
								<select class="form-control" id="">
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
							<label for="resourcename" class="col-sm-1 control-label">发布日期</label>
							<div class="col-sm-2">
							     <input type='text' class="form-control pull-left dateCustom" id='publishDate' readonly />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="col-sm-1 control-label">关联资源代码</label>
								<div class="col-sm-4">
								<input type="text" class="form-control">
							</div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
   	 	<div class="container" style="margin-bottom: 20px">
			<div class="row clearfix">
				<div class="col-sm-12 column" style="text-align: center;">
					 <button type="button" class="btn btn-default btn-primary">提交</button>
					 <button type="button" class="btn btn-default btn-warning">取消</button>
				</div>
			</div>
		</div>
 		<!-- 其他结束 -->
 	</form>
</body>
</html>