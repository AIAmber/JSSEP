<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>部门管理</title>
<script src="manage/js/department.js"></script>
</head>
<body>
<link  href="manage/css/organzation.css" rel="stylesheet">
  <div class="panel panel-default panel-nobody" >
    <div class="table-toolbar clearfix">
        <div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
            <button id="btn-add" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-plus'></span>新增</button>
            <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
        </div>
        <div class="table-toolbar-search pull-right clearfix">
          <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <span class="pull-left text-right form-label">联系人姓名</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <span class="pull-left text-right form-label">联系人电话</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入部门名称或代码"/>
              </li>
            </ul>
          </form>
                  
        </div>
        </div>
       <table id="deptGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
   <!--新增模态框  -->
         <div  style="display: none;">
            <form class=" form-horizontal" role="form" action="#" method="post" id="deptAddForm" >
                        <div class="form-group">
                          <label for="orgNumber" class="control-label col-sm-4" style="font-weight: normal">顺序号</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">  
                          <label for="orgShortName" class="control-label col-sm-4" style="font-weight: normal">部门简称</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                         </div> 
                        
                        <div class="form-group">
                          <label for="orgCode" class="control-label col-sm-4" style="font-weight: normal">部门代码</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group"> 
                          <label for="orgFrom" class="control-label col-sm-4" style="font-weight: normal">所属机构</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="orgName" class="control-label col-sm-4" style="font-weight: normal">部门名称</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                         </div> 
                         <div class="form-group">
                          <label for="perName" class="control-label col-sm-4" style="font-weight: normal">联系人姓名</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="orgDepartment" class="control-label col-sm-4" style="font-weight: normal">上级部门</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA" />
                          </div>
                         </div>
                         <div class="form-group">
                          <label for="perEmail" class="control-label col-sm-4" style="font-weight: normal">联系人邮箱</label>
                          <div class="col-sm-5">
                            <input type="email" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="perPhone" class="control-label col-sm-4" style="font-weight: normal">联系人电话</label>
                          <div class="col-sm-5">
                            <input type="tel" class="form-control "  style="background:#F5F9FA"/>
                          </div>
                         </div>
                         <div class="form-group">
                          <label for="orgAddress" class="control-label col-sm-4" style="font-weight: normal">办公地址</label>
                          <div class="col-sm-5">
                            <input type="text" class="form-control " style="background:#F5F9FA"/>
                          </div>
                        </div>
                </form>
         </div>
</body>
</html>