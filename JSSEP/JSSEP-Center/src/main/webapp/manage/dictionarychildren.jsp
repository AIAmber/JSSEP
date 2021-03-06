<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String path=request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>字典管理/二级子菜单</title>
</head>
<body>
<link  href="<%=path %>/manage/css/manage.css" rel="stylesheet">
<script src="<%=path %>/manage/js/dictionarychildren.js"></script>
<div class="panel panel-default panel-nobody" >
        <div class="table-toolbar clearfix">
    <div class="btn-group btn-group-sm pull-right table-toolbar-btn-group">
        <button id="btn-add" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</button>
        <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
        <a id="btn-return" role="group" type="button" class="btn btn-default" href="#/dictionary"><span class='glyphicon glyphicon-share-alt'></span>&nbsp;返回</a>
    </div>
    <div class="table-toolbar-search pull-left clearfix" >
         <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <input class="form-control form-control-large pull-left"  style="width: 250px;" placeholder="请输入关键字进行查询  "/>
              </li>
            </ul>
          </form>
    </div>
    </div>
       <table id="dicChildGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
  
    <!--  新增模态框表单  -->
  <div style="display:none">
      <form class="form-horizontal" role="form" method="post" action="#" id="childAddForm">
      <div class="form-group">
          <label for="codeValue" class="control-label col-sm-3" ><font class="red">*</font>代码值</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" name="codeValue"/>
          </div>
      </div>
      <div class="form-group">
          <label for="strValue" class="control-label col-sm-3" ><font class="red">*</font>字符值</label>
          <div class="col-sm-9">
              <input type="text" class="form-control" name="strValue"/>
          </div>
      </div>
      <div class="form-group">
          <label for="fileValue" class="control-label col-sm-3" ><font class="red">*</font>文本值</label>
          <div class="col-sm-9">
              <textarea class="form-control" rows="3" name="fileValue"></textarea>
          </div>
      </div>
      <div class="form-group">
          <label for="textValue" class="control-label col-sm-3" ><font class="red">*</font>文件值</label>
          <div class="input-group col-sm-9" style="padding:0px 15px">
                    <input id="fileName" type="text" class="form-control" readonly="readonly"  >
                    <input id="fileContent" type="file" class="form-control" style="display: none;">
                    <span class="input-group-btn">
                      <button id="selectFile" class="btn btn-default input-btn-bg" type="button">选择</button>
                    </span>
         </div>
      </div>
        <div class="form-group">
          <label for="dicNum" class="control-label col-sm-3" ><font class="red">*</font>顺序号</label>
          <div class="col-sm-9">
              <input type="number" class="form-control" name="dicNum"/>
          </div>
      </div>
  </form>
  </div>
</body>
</html>