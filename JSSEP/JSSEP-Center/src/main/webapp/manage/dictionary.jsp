<%@ page language="java" contentType="text/html; charset=UTF-8" 
    pageEncoding="UTF-8"%>
 <% String path=request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<title>字典管理</title>
</head>
<body>
<link  href="<%=path %>/manage/css/manage.css" rel="stylesheet">
<script src="<%=path %>/manage/js/dictionary.js"></script>
  <div class="panel panel-default panel-nobody" >
    <div class="table-toolbar clearfix">
        <div class="btn-group btn-group-sm pull-right table-toolbar-btn-group">
            <button id="btn-add" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</button>
            <button id="btn-delete" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
        </div>
        <div class="table-toolbar-search pull-left clearfix">
          <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <input class="form-control form-control-large pull-left"  style="width: 250px;" placeholder="请输入关键字进行查询"/>
              </li>
            </ul>
          </form>
        </div>
        </div>
       <table id="dicGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
 <!--  新增模态框表单-->
  <div style="display:none">
    <form class=" form-horizontal" role="form" action="#" method="post" id="dicAddForm">
        <div class="form-group">
            <label for="dicCode" class="control-label col-sm-3" ><font class="red">*</font>字典代码</label>
          <div class="col-sm-9">
            <input type="text" class="form-control " name="dicCode"/>
          </div>
        </div>
        <div class="form-group">
           <label for="dicName" class="control-label col-sm-3" ><font class="red">*</font>字典名称</label>
          <div class="col-sm-9">
            <input type="text" class="form-control " name="dicName"/>
          </div>
        </div>  
        <div class="form-group">
          <label for="dicDiscribe" class="control-label col-sm-3" >字典描述</label>
          <div class="col-sm-9">
             <textarea class="form-control " rows="3" name="dicDiscribe"></textarea>
          </div>
        </div>  
      </form>
  </div>
</body>
</html>