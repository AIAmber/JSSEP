<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>目录审核-待审核</title>
</head>
<body>
	<script src="<%=path %>/catalog/js/catalogtobecheck.js"></script>
	<link href="<%=path %>/catalog/css/catalog-form.css" rel="stylesheet">
	<form class="form-horizontal" method="post" id="catalogtobecheck">
		<!-- 信息资源分类开始 -->
		<fieldset>
			<div class="hrtitle">
				<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
				<span style="margin-left: 10px">信息资源分类</span>
			</div>
			<hr>
			<div class="">
				<div class="form-group">
					<label for="resourceclassfy" class="control-label formleft"><font class="red">*</font>资源分类</label>
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
					<label for="name" class="control-label formleft"><font class="red">*</font>资源代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcecode" readonly="readonly" value="111112001/2001">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft"><font class="red">*</font>资源名称</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourcename" value="3550主题分析-企业注册登记">
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
					<label for="name" class="control-label formleft"><font class="red">*</font>资源提供方</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourceprovide" id="resourceprovider" readonly="readonly" placeholder="请选择资源提供方" value="市工商局">
						<span class="glyphicon glyphicon-list form-control-feedback" aria-hidden="true" style="right: 15px;"></span>
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft"><font class="red">*</font>资源提供方代码</label>
					<div class="col-sm-4">
						<input type="text" class="form-control forminput" name="resourceprovidecode" id="resourceprovidecode" readonly="readonly" value="30113008">
					</div>
				</div>
				<div class="form-group">
					<label for="name" class="control-label formleft"><font class="red">*</font>资源摘要</label>
						<div class="col-sm-8">
						<textarea class="form-control forminput" name="resourcesummary" rows="3">3550主题分析-企业注册登记</textarea>
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
										<th style="width: 10%">操作</th>
									</tr>
								</thead>
								<tbody id="resourceformatchoice">
									<tr>
										<td>数据库类</td>
										<td>DB</td>
										<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
									</tr>
								</tbody>
							</table>
							<div class="" style="border: none;text-align: center;" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="请点击选择资源格式" aria-describedby="tooltip767175">
								<span class="glyphicon glyphicon-plus-sign" id="addresourceformat"></span>
							</div>
							<!-- 选择资源格式模态框开始 -->
							<div id="resourceformat" style="display: none;">
									<table id="grid" class="table table-striped table-bordered table-hover">
				                       <thead id="grid_head">
				                           <tr>
				                               <th class="table-checkbox" style="width:20px; margin: auto;">
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
											<th style="width: 20%">信息项名称</th>
											<th style="width: 20%">数据类型</th>
											<th style="width: 20%">数据长度</th>
											<th style="width: 30%">注释</th>
											<th style="width: 10%">操作</th>
										</tr>
									</thead>
									<tbody id="infoItemTable">
										<tr>
											<td>创建机构代码</td>
											<td>数值型</td>
											<td>12</td>
											<td>创建机构代码</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>名称核准号</td>
											<td>字符型</td>
											<td>80</td>
											<td>名称核准号</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
										<tr>
											<td>注册号</td>
											<td>字符型</td>
											<td>30</td>
											<td>注册号</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>企业名称</td>
											<td>字符型</td>
											<td>100</td>
											<td>企业名称</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>企业住所</td>
											<td>字符型</td>
											<td>200</td>
											<td>企业住所</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>生产经营地/个体户经营场所</td>
											<td>字符型</td>
											<td>200</td>
											<td>生产经营地/个体户经营场所</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
										<tr>
											<td>设立(变更)机关</td>
											<td>数值型</td>
											<td>12</td>
											<td>设立(变更)机关</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>委托设立机关</td>
											<td>数值型</td>
											<td>12</td>
											<td>委托设立机关</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>所属管区</td>
											<td>数值型</td>
											<td>12</td>
											<td>所属管区</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>所属行业</td>
											<td>数值型</td>
											<td>8</td>
											<td>所属行业</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>企业类型</td>
											<td>数值型</td>
											<td>8</td>
											<td>企业类型</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>企业分类</td>
											<td>字符型</td>
											<td>2</td>
											<td>企业分类</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>开业日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>开业日期</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>迁入\注销\吊销\等业务的核准日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>迁入\注销\吊销\等业务的核准日期</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
										</tr>
 										<tr>
											<td>法定代表人证件编号</td>
											<td>字符型</td>
											<td>30</td>
											<td>法定代表人证件编号</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>法定代表人名称</td>
											<td>字符型</td>
											<td>160</td>
											<td>法定代表人名称</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>企业状态(在业\迁出\注销\吊销)</td>
											<td>字符型</td>
											<td>2</td>
											<td>企业状态(在业\迁出\注销\吊销)依次的01-04</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>企业的业务(开业\变更\注销\吊销\补照\换照\换号)</td>
											<td>字符型</td>
											<td>2</td>
											<td>企业的业务(开业\变更\注销\吊销\补照\换照\换号)01-06</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>注册资金(保存为分)</td>
											<td>数值型</td>
											<td>22</td>
											<td>注册资金(保存为分)</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>经营期限(起)</td>
											<td>日期时间型</td>
											<td></td>
											<td>经营期限(起)</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>经营期限(止)</td>
											<td>日期时间型</td>
											<td></td>
											<td>经营期限(止)</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>信用等级(ABCD)</td>
											<td>字符型</td>
											<td></td>
											<td>信用等级(ABCD)</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
  										<tr>
											<td>经营范围</td>
											<td>字符型</td>
											<td>4000</td>
											<td>经营范围</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>统一代码(个体户除外)</td>
											<td>字符型</td>
											<td>30</td>
											<td>统一代码(个体户除外)</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
 										<tr>
											<td>原机构撤销标志</td>
											<td>字符型</td>
											<td>1</td>
											<td>原机构撤销标志</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
  										<tr>
											<td>迁入机构</td>
											<td>数值型</td>
											<td>1</td>
											<td>迁入机构</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
  										<tr>
											<td>统一代码(个体户除外)</td>
											<td>字符型</td>
											<td>30</td>
											<td>统一代码(个体户除外)</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr> 
  										<tr>
											<td>外来标志</td>
											<td>数值型</td>
											<td>1</td>
											<td>0或空为本地,1是外来</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
  										<tr>
											<td>代理标志</td>
											<td>数值型</td>
											<td>1</td>
											<td>代理标志</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
  										<tr>
											<td>注销日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>注销日期</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr> 
   										<tr>
											<td>吊销日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>吊销日期</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr> 
   										<tr>
											<td>年检日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>年检日期</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>
   										<tr>
											<td>吊销日期</td>
											<td>日期时间型</td>
											<td></td>
											<td>吊销日期</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>   
    									<tr>
											<td>许可经营项目</td>
											<td>字符型</td>
											<td>2000</td>
											<td>许可经营项目</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>  
    									<tr>
											<td>许可经营项目</td>
											<td>字符型</td>
											<td>2000</td>
											<td>许可经营项目</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr> 
     									<tr>
											<td>一般经营项目</td>
											<td>字符型</td>
											<td>2000</td>
											<td>一般经营项目</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>  
      									<tr>
											<td>年检年度</td>
											<td>字符型</td>
											<td>4</td>
											<td>年检年度</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>  
      									<tr>
											<td>总局企业类型</td>
											<td>数值型</td>
											<td>8</td>
											<td>总局企业类型</td>
											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr> 
      									<tr>
											<td>统一社会信用代码</td>
											<td>字符型</td>
											<td>30</td>
											<td>统一社会信用代码</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>  
      									<tr>
											<td>监管机关</td>
											<td>数值型</td>
											<td>12</td>
											<td>监管机关</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>  
       									<tr>
											<td>是否自助打印</td>
											<td>字符型</td>
											<td>500</td>
											<td>是否自助打印2618 否 2617 是</td>
 											<td><a href="javascript:void(0);" onclick="$(this).parent().parent().remove();" class="glyphicon glyphicon-trash"></a></td>
 										</tr>   
									</tbody>
								</table>
								<div style="border: none;text-align: center;" data-toggle="tooltip" data-placement="bottom" data-original-title="请点击添加资源信息项">
									<span id="addItembutton" class="glyphicon glyphicon-plus-sign"></span>
								</div>
						 	</div>
						</div>
					</div>
				</div>
			</div>
		</div>
   	 	</fieldset>
 		<!-- 信息项信息结束 -->
 		<!-- 共享类型 -->
 		<fieldset>
	      	<div class="hrtitle">
	      		<img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
	      		<span style="margin-left: 10px">共享类型</span>
	      	</div>
			<hr>
			<div class="">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft"><font class="red">*</font>共享类型</label>
							<div class="col-sm-4">
								<select class="form-control formselect" name="sharedtype" id="shareType">
									<option value="">请选择共享类型</option>
   							   		<option selected="selected">无条件共享</option>
   							   		<option>有条件共享</option>
   							   		<option>不予共享</option>
							   </select>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="userequire">
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>使用要求</label>
							<div class="col-sm-8">
								<textarea class="form-control forminput" name="userequirement" rows="3">遵守相关法律法规</textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="relatebasis" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>相关依据</label>
							<div class="col-sm-8">
								<textarea class="form-control forminput" name="relatedbasis" rows="3">违反相关法律法规</textarea>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharebar" style="display: none;" >
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>共享条件</label>
							<div class="col-sm-4">
								<input type="text" class="form-control forminput" name="sharingconditions" id="sharingconditions" value="需要具有相关权限"></input>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharerange" style="display: none">
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>共享范围</label>
							<div class="col-sm-4">
								<input type="text" class="form-control forminput" name="sharerange" id="sharerange">具有访问权限的所有人</input>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="sharingmethod">
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>共享方式</label>
							<div class="col-sm-9" style="overflow: hidden;">
								<label class="radio-inline" style="float: left;">
									<input type="radio" name="share" id="share" checked="checked" onclick="$('#otherInput').hide()"> 通过共享平台获取
								</label>
								<label class="radio-inline" style="float: left;">
									<input type="radio" name="share" id="share" onclick="$('#otherInput').show()">通过其他方式获取
								</label>
							</div>
						</div>
					</div>
					<div class="col-md-12" id="otherInput" hidden="">
						<div class="form-group">
							<label for="name" class="control-label formleft"><font class="red">*</font>共享方式说明</label>
							<div class="col-sm-8">
								<textarea rows="3" cols="" class="form-control forminput" name="sharingmethoddescription"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
   	 	</fieldset>
   	 	<!-- 共享类型结束 -->
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
							<label for="name" class="control-label formleft"><font class="red">*</font>是否对社会开放</label>
							<div class="col-sm-9">
								<input type="checkbox" name="openproperty" checked>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft"><font class="red">*</font>更新周期</label>
							<div class="col-sm-4">
								<select class="form-control formselect" name="updatecycle">
									<option value="">请选择更新周期</option>
   							   		<option>实时</option>
   							   		<option selected>每日</option>
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
							<div class="col-sm-4">
							     <input type='text' class="form-control pull-left dateCustom forminput" id='publishDate' readonly />
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="form-group">
							<label for="resourcename" class="control-label formleft">关联资源代码</label>
								<div class="col-sm-4">
								<input type="text" class="form-control forminput" name="associatedresourcecode" value="221211003/1003">
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
					 <a class="btn btn-default btn-success btn-div" id="saveForm">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-check"></span>&nbsp;提交
					 </a>
					 <a class="btn btn-default btn-danger btn-div" id="catalogregistrationfail">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-remove"></span>&nbsp;退回
					 </a>
					 <a class="btn btn-default btn-primary btn-div" id="resetForm">
					 	<span class="bootstrap-dialog-button-icon glyphicon glyphicon-repeat"></span>&nbsp;重置
					 </a>
					 <a class="btn btn-default btn-div" id="revokebtn">
					 	<span class="bootstrap-dialog-button-icon fa fa-mail-reply"></span>&nbsp;取消
					 </a>
				</div>
			</div>
		</div>
 	</form>
 	<!-- 信息项信息弹出框内容开始 -->
 	<div hidden="hidden">
		<div id="addInfo" style="margin-bottom: 30px;">
			<form class="form-horizontal" id="infoitemform">
				<div class="form-group">
					<label class="col-sm-3 control-label"><font class="red">*</font>信息项信息</label>
					<div class="col-sm-8">
						<input type="text" class="form-control forminput" id="infoItemName" name="infoItemName">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label"><font class="red">*</font>数据类型</label>
					<div class="col-sm-8">
						<select class="form-control formselect" id="infoType" name="infoType">
							<option selected="selected" value="">请选择数据类型</option>
					   		<option>字符型</option>
					   		<option>数值型</option>
					   		<option>货币型</option>
					   		<option>日期型</option>
					   		<option>日期时间型</option>
					   		<option>逻辑型</option>
					   		<option>备注型</option>
					   		<option>通用型</option>
					   		<option>双精度型</option>
					   		<option>整型</option>
					   		<option>浮点型</option>
						</select>
					</div>
				</div>
				<div class="form-group" hidden="hidden" id="form-group-infomark">
					<label class="col-sm-3 control-label"><font class="red">*</font>注释</label>
					<div class="col-sm-8">
						<textarea class="form-control forminput" id="infoMark" name="infoMark" rows="3"></textarea>
					</div>
				</div>
				<div class="form-group" hidden="hidden" id="form-group-datalength">
					<label class="col-sm-3 control-label"><font class="red">*</font>数据长度</label>
					<div class="col-sm-8">
						<input type="text" class="form-control forminput" id="datalength" name="datalength">
					</div>
				</div>
			</form>
		</div>
	</div>
	<!-- 信息项信息弹出框内容结束-->
	<!--  -->
	<div style="display: none;">
		<div id="resourceprovidermodel">
			<form>
				<div class="form-group has-feedback">
					<input class="form-control" type="text" placeholder="请输入关键字进行查询" aria-describedby="deptInfoIcon"/>
					<span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
					<span id="deptInfoIcon" class="sr-only">(primary)</span>
				</div>
			</form>
			<table id="resourceprovidetable"></table>
		</div>
		<textarea class="form-control" id="catalogfailreasonone" name="catalogfailreasonone" style="margin-bottom:15px;" rows="5" placeholder="请输入退回原因"></textarea>
	</div>
</body>
</html>