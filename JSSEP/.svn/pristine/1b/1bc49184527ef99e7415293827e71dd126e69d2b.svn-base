<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>目录注册-已注册</title>
</head>
<body>
	<script src="<%=path %>/catalog/js/catalogalreadyregistration.js"></script>
	<link href="<%=path %>/catalog/css/catalog-form.css" rel="stylesheet">
	<form class="form-horizontal" method="post" id="catalogalreadyregistration">
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
						    <span class="input-group-addon">类</span>
						    <select class="form-control formselect" name="classcify">
						    	<option value="">请选择类</option>
					   		    <option>基础信息资源类</option>
					   		    <option selected="selected">主题信息资源类</option>
					   		    <option>部门信息资源类</option>
					   	    </select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
						    <span class="input-group-addon">项</span>
						    <select class="form-control formselect" name="item">
						    	<option value="">请选择项</option>
						   		<option>法人单位信息资源库</option>
						   		<option>审批改革</option>
						   		<option selected="selected">公共服务事项</option>
				   	 		</select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
						    <span class="input-group-addon">目</span>
						    <select class="form-control formselect" name="head">
						    	<option value="">请选择目</option>
						   		<option>事业</option>
						   		<option>企业</option>
						   		<option>个人/企业</option>
						   		<option selected="selected">行政许可审批</option>
					   		 </select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="input-group">
					  		<span class="input-group-addon">细目</span>
						    <select class="form-control formselect" name="details">
						    	<option value="">请选择细目</option>
						   		<option selected="selected">基本信息</option>
						   		<option>企业新设注册登记</option>
						   		<option>房地产交易</option>
						   		<option>投资项目建设</option>
						   		<option>设立登记</option>
						   		<option>变更登记</option>
						   		<option>注销登记</option>
						   		<option>行政许可</option>
					   		 </select>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcecode" readonly="readonly" value="111112001/2001">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源名称</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcename" value="法人基本信息">
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
						<input type="text" class="form-control forminput" name="resourceprovide" value="市质监局">
						<span class="glyphicon glyphicon-list form-control-feedback" aria-hidden="true" style="right: 15px;"></span>
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源提供方代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourceprovidecode" value="30113008">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源摘要</label>
						<div class="col-sm-8">
						<textarea class="form-control forminput" name="resourceprovide" rows="3">法人基本信息</textarea>
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft">资源格式</label>
						<div class="col-sm-8">
							<table class="table table-hover">
								<thead>
									<tr>
										<th style="width: 30%">资源格式</th>
										<th style="width: 60%">存储格式</th>
										<!-- <th style="min-width: 100px;">操作</th> -->
									</tr>
								</thead>
								<tbody id="resourceformatchoice">
									<tr>
										<td>数据库类</td>
										<td>DB</td>
<!-- 										<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 -->									</tr>
								</tbody>
							</table>
							<!-- <div style="border: none;text-align: center;" data-toggle="tooltip" data-placement="bottom" data-original-title="请点击选择资源格式">
								<span class="glyphicon glyphicon-plus-sign" id="addresourceformat"></span>
							</div> -->
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
						                        <td>
													<select class="optionmultiselect" id="electronicdocument" multiple="multiple">
													    <option value="OFD">OFD</option>
													    <option value="WPS" >WPS</option>
													    <option value="XML">XML</option>
													    <option value="TXT">TXT</option>
													    <option value="DOC">DOC</option>
													    <option value="DOCX">DOCX</option>
													    <option value="HTML">HTML</option>
													    <option value="PDM">PDM</option>
													    <option value="PPT">PPT</option>
													</select>
												</td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>电子表格</td>
						                        <td>
						                        	<select class="optionmultiselect" id="electronicform" multiple="multiple">
													    <option value="ET">ET</option>
													    <option value="XLS" >XLS</option>
													    <option value="XLSX">XLSX</option>
													</select>
												</td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>数据库类</td>
						                        <td>
						                        	<select class="optionmultiselect" id="databaseclass" multiple="multiple">
													    <option value="MDB">MDB</option>
													    <option value="MDF">MDF</option>
													    <option value="DB">DB</option>
													    <option value="DBF">DBF</option>
													    <option value="WDB">WDB</option>
													</select>
						                        </td>
						                     </tr>
						                     <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>	
						                        <td>图形图像类</td>
						                        <td>
						                        	<select class="optionmultiselect" id="graphicimagecategory" multiple="multiple">
													    <option value="JPG">JPG</option>
													    <option value="GIF">GIF</option>
													    <option value="BMP">BMP</option>
													</select>
						                        </td>
						                     </tr>
						                      <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>
						                        <td>流媒体类</td>
						                        <td>
						                        	<select class="optionmultiselect" id="streamingmediacategory" multiple="multiple">
													    <option value="SWF">SWF</option>
													    <option value="RM" >RM</option>
													    <option value="MPG">MPG</option>
													</select>
												</td>
						                     </tr>
						                      <tr>
						                        <td class="table-checkbox" style="width:20px; margin: auto;">
						                        	<input name="box" id="other" style="vertical-align: top;" class="group-checkable" type="checkbox">
						                        </td>	
						                        <td>自描述格式</td>
						                        <td>
						                        	<input type="text" id="otherType" style="width:100%" class="form-control forminput" readonly="readonly" placeholder="请输入自描述格式!">
						                        </td>
						                     </tr>
					                   </tbody>
					                 </table>
									</div><!-- /.modal-content -->
								</div><!-- /.modal -->
							</div>
							<!-- 选择资源格式模态框结束 -->
						</div>
    	</fieldset>
 		<!-- 资源提供方信息结束 -->
 		<!-- 资源信息项开始 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">资源信息项</span>
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
											<th style="width: 20%;">信息项名称</th>
											<th style="width: 20%;">数据类型</th>
											<th style="width: 20%">数据长度</th>
											<th style="width:30%">注释</th>
<!-- 											<th style="min-width: 100px;">操作</th>
 -->										</tr>
									</thead>
									<tbody id="infoItemTable">
										<tr>
											<td>唯一标识</td>
											<td>数值型</td>
											<td>100</td>
											<td>唯一标识</td>
										</tr>
										<tr>
											<td>行政区划编码</td>
											<td>数值型</td>
											<td>100</td>
											<td>行政区划编码</td>
										</tr>
										<tr>
											<td>行政区划名称</td>
											<td>文本型</td>
											<td>100</td>
											<td>行政区划名称</td>
										</tr>
										<tr>
											<td>部门编码</td>
											<td>字符型</td>
											<td>18</td>
											<td>部门编码</td>
										</tr>
										<tr>
											<td>部门名称</td>
											<td>字符型</td>
											<td>100</td>
											<td>部门名称</td>
										</tr>
										<tr>
											<td>全省唯一办件编号</td>
											<td>字符型</td>
											<td>100</td>
											<td>全省唯一办件编号</td>
										</tr>
										<tr>
											<td>32位事项编码</td>
											<td>字符型</td>
											<td>32</td>
											<td>32位事项编码</td>
										</tr>										
										<tr>
											<td>申请事项名称</td>
											<td>字符型</td>
											<td>4000</td>
											<td>申请事项名称</td>
										</tr>
										<tr>
											<td>32位或者34业务编码</td>
											<td>字符型</td>
											<td>500</td>
											<td>32位或者34业务编码</td>
										</tr>										
										<tr>
											<td>申请业务名称</td>
											<td>字符型</td>
											<td>1000</td>
											<td>申请业务名称</td>
										</tr>
										<tr>
											<td>经办处室</td>
											<td>字符型</td>
											<td>100</td>
											<td>经办处室</td>
										</tr>																				
										<tr>
											<td>办件名称</td>
											<td>字符型</td>
											<td>200</td>
											<td>办件名称</td>
										</tr>	
										<tr>
											<td>办件摘要</td>
											<td>字符型</td>
											<td>4000</td>
											<td>办件摘要</td>
										</tr>																					
										<tr>
											<td>是否加急</td>
											<td>字符型</td>
											<td>5</td>
											<td>是否加急</td>
										<tr>
											<td>申请方式</td>
											<td>字符型</td>
											<td>1</td>
											<td>申请方式</td>
										<tr>
											<td>申请人类型</td>
											<td>字符型</td>
											<td>1</td>
											<td>申请人类型</td>
										</tr>										
										<tr>
											<td>申请者名称</td>
											<td>字符型</td>
											<td>100</td>
											<td>申请者名称</td>
										</tr>											
										<tr>
											<td>证件类型</td>
											<td>字符型</td>
											<td>2</td>
											<td>证件类型</td>
										</tr>											
										<tr>
											<td>证件号码</td>
											<td>字符型</td>
											<td>50</td>
											<td>证件类型为“营业执照”时将填写对应的“社会统一信用代码”</td>
										</tr>											
										<tr>
											<td>手机</td>
											<td>字符型</td>
											<td>20</td>
											<td>手机</td>
										</tr>										
										<tr>
											<td>联系电话</td>
											<td>字符型</td>
											<td>40</td>
											<td>联系电话</td>
										</tr>											
										<tr>
											<td>联系地址</td>
											<td>字符型</td>
											<td>200</td>
											<td>联系地址</td>
										</tr>											
										<tr>
											<td>邮政编码</td>
											<td>字符型</td>
											<td>6</td>
											<td>邮政编码</td>
										</tr>										
										<tr>
											<td>电子邮箱</td>
											<td>字符型</td>
											<td>100</td>
											<td>电子邮箱</td>
										</tr>											
										<tr>
											<td>组织机构代码</td>
											<td>字符型</td>
											<td>50</td>
											<td>组织机构代码</td>
										</tr>											
										<tr>
											<td>法定代表人姓名</td>
											<td>字符型</td>
											<td>100</td>
											<td>法定代表人姓名</td>
										</tr>									
										<tr>
											<td>申请方经办人姓名</td>
											<td>字符型</td>
											<td>100</td>
											<td>申请方经办人姓名</td>
										</tr>										
									
										<tr>
											<td>申请方经办人证件类型</td>
											<td>字符型</td>
											<td>2</td>
											<td>申请方经办人证件类型</td>
										</tr>									
										<tr>
											<td>申请方经办人证件号码</td>
											<td>字符型</td>
											<td>50</td>
											<td>申请方经办人证件号码</td>
										</tr>									
										<tr>
											<td>申请方经办人手机</td>
											<td>字符型</td>
											<td>20</td>
											<td>申请方经办人手机</td>
										</tr>									
										<tr>
											<td>申请方经办人联系电话</td>
											<td>字符型</td>
											<td>40</td>
											<td>申请方经办人联系电话</td>
										</tr>
										<tr>
											<td>申请方经办人联系地址</td>
											<td>字符型</td>
											<td>200</td>
											<td>申请方经办人联系地址</td>
										</tr>										
										<tr>
											<td>申请方经办人邮政编码</td>
											<td>字符型</td>
											<td>6</td>
											<td>申请方经办人邮政编码</td>
										</tr>										
										<tr>
											<td>申请方经办人邮箱地址</td>
											<td>字符型</td>
											<td>100</td>
											<td>申请方经办人邮箱地址</td>
										</tr>										
										<tr>
											<td>办件业务说明</td>
											<td>字符型</td>
											<td>4000</td>
											<td>办件业务说明</td>
										</tr>										
										<tr>
											<td>办件附件说明</td>
											<td>字符型</td>
											<td>4000</td>
											<td>办件附件说明</td>
										</tr>										
										<tr>
											<td>法定办结时间</td>
											<td>数值型</td>
											<td>4</td>
											<td>法定办结时间</td>
										</tr>										
										<tr>
											<td>法定办结时间计量单位</td>
											<td>字符型</td>
											<td>2</td>
											<td>法定办结时间计量单位</td>
										</tr>										
										<tr>
											<td>承诺办结时间</td>
											<td>数值型</td>
											<td>4</td>
											<td>承诺办结时间</td>
										</tr>											
										<tr>
											<td>承诺办结时间计量单位</td>
											<td>字符型</td>
											<td>2</td>
											<td>承诺办结时间计量单位</td>
										</tr>										
										<tr>
											<td>网上申请时间</td>
											<td>日期时间型</td>
											<td></td>
											<td>网上申请时间</td>
										</tr>
										<tr>
											<td>收件时间</td>
											<td>日期时间型</td>
											<td></td>
											<td>收件时间</td>
										</tr>
										<tr>
											<td>办件状态</td>
											<td>字符型</td>
											<td>2</td>
											<td>办件状态</td>
										</tr>
										<tr>
											<td>数据来源</td>
											<td>字符型</td>
											<td>1</td>
											<td>数据来源</td>
										</tr>
										<tr>
											<td>数据推送时间</td>
											<td>日期时间型</td>
											<td>1</td>
											<td>数据推送时间</td>
										</tr>
										<tr>
											<td>数据同步时间</td>
											<td>日期时间型</td>
											<td>1</td>
											<td>数据同步时间</td>
										</tr>
										<tr>
											<td>信息同步标志</td>
											<td>字符型</td>
											<td>1</td>
											<td>信息同步标志</td>
										</tr>										
										<tr>
											<td>信息同步错误原因</td>
											<td>字符型</td>
											<td>1000</td>
											<td>信息同步标志</td>
										</tr>	
									</tbody>
								</table>
								<!-- <div style="border: none;text-align: center;" data-toggle="tooltip" data-placement="bottom" data-original-title="请点击添加资源信息项" aria-describedby="tooltip799952">
									<span class="glyphicon glyphicon-plus-sign" id="addItembutton"></span>
								</div> -->
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
   							   		<option selected="selected">无条件共享</option>
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
								<textarea class="form-control forminput" name="userequirement" rows="3">遵守相关法律法规</textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="relatebasis" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft">相关依据</label>
							<div class="col-sm-8">
								<textarea class="form-control forminput" name="userequirement" rows="3"></textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharebar" style="display: none;">
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
					<div class="col-md-12" id="sharingmethod">
						<div class="form-group">
							<label for="name" class="control-label formleft">共享方式</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" name="share" id="share" value="" checked="checked" onclick="$('#otherInput').hide()"> 通过共享平台获取
								</label>
								<label class="radio-inline">
									<input type="radio" name="share" id="share" value="option2" onclick="$('#otherInput').show()">通过其他方式获取
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="otherInput" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft">共享方式说明</label>
							<div class="col-sm-8">
								<textarea rows="3" cols="" class="form-control forminput" name="sharingmethoddescription"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
   	 	<!-- 其他结束 -->
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
							<label for="name" class="control-label formleft">是否对社会开放</label>
							<div class="col-sm-9">
								<input type="checkbox" name="openproperty" checked>
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
								<input type="text" class="form-control forminput" value="221211003/1003">
							</div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
   	 	<!-- 其他结束 -->
   	 	<div class="btn-bottom">
			<div class="row clearfix">
				<div class="col-sm-12 column" style="text-align: center;">
					 <a class="btn btn-default btn-div" id="revokebtn">
					 	<span class="bootstrap-dialog-button-icon fa fa-reply"></span>&nbsp;返回
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
						<textarea class="form-control forminput" id="infoMark" rows="3"></textarea>
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- 信息项信息弹出框内容结束-->
</body>
</html>