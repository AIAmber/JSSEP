<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>字典管理</title>
<script src="manage/js/dictionary.js"></script>
</head>
<body>
<link  href="manage/css/organzation.css" rel="stylesheet">
  <div class="panel panel-default panel-nobody" >
    <div class="table-toolbar clearfix">
        <div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
            <button id="btn-add" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-plus'></span>新增</button>
            <button id="btn-delete" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-trash'></span>删除</button>
        </div>
        <div class="table-toolbar-search pull-right clearfix">
          <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <span class="pull-left text-right form-label">代码值</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <span class="pull-left text-right form-label">字符值</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入字典代码或名称"/>
              </li>
            </ul>
            <ul>
              <li class="form-group">
                <span class="pull-left text-right form-label">文件值</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <span class="pull-left text-right form-label">文本值</span>
                <input class="form-control pull-left"/>
              </li>
            </ul>
          </form>
        </div>
        </div>
       <table id="dicGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
  <div style="display:none">
    <form class=" form-horizontal" role="form" action="#" method="post" id="dicAddForm">
                        <div class="form-group">
                          <label for="dicNumber" class="control-label col-sm-4" style="font-weight: normal;">顺序号</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">  
                          <label for="dicDiscribe" class="control-label col-sm-4" style="font-weight: normal;">字典描述</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="dicName" class="control-label col-sm-4" style="font-weight: normal;">字典名称</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="dicCode" class="control-label col-sm-4" style="font-weight: normal;">字典代码</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="codeValue" class="control-label col-sm-4" style="font-weight: normal;">代码值</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">  
                          <label for="strValue" class="control-label col-sm-4" style="font-weight: normal;">字符值</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="txtValue" class="control-label col-sm-4" style="font-weight: normal;">文本值</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                         </div>
                         <div class="form-group"> 
                          <label for="fileValue" class="control-label col-sm-4" style="font-weight: normal;">文件值</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                </form>
  </div>
</body>
</html>