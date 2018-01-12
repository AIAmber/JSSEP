<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
<script src="manage/js/user.js"></script>
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
                <span class="pull-left text-right form-label">所属部门</span>
                <input class="form-control pull-left"/>
              </li>
              <li class="form-group">
                <span class="pull-left text-right form-label">用户类型</span>
                <select class="form-control pull-left">
                  <option>中心管理员</option>
                  <option>中心用户</option>
                  <option>部门管理员</option>
                  <option>部门用户</option>
                </select>
              </li>
              <li class="form-group">
                <input class="form-control form-control-large pull-left" style="width: 250px" placeholder="请输入用户名"/>
              </li>
            </ul>
          </form>
        </div>
        </div>
       <table id="userGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
   <!--新增模态框  -->
    <div  style="display:none">
       <form class=" form-horizontal" role="form" action="#" method="post"  id="userAddForm">
            <div class="form-group">
              <label for="userNumber" class="control-label col-sm-4" style="font-weight: normal;">顺序号</label>
              <div class="col-sm-5">
                <input type="text" class="form-control " style="background:#F5F9FA"/>
              </div>
            </div>
            <div class="form-group">
              <label for="userName" class="control-label col-sm-4" style="font-weight: normal;">用户名</label>
              <div class="col-sm-5">
                <input type="text" class="form-control " style="background:#F5F9FA" />
              </div>
            </div>
            <div class="form-group">
              <label for="userPassword" class="control-label col-sm-4" style="font-weight: normal;">密码</label>
              <div class="col-sm-5">
                <input type="password" class="form-control " style="background:#F5F9FA" />
              </div>
            </div>
            <div class="form-group">
              <label for="deptFrom" class="control-label col-sm-4" style="font-weight: normal;">所属部门</label>
              <div class="col-sm-5">
                <input type="text" class="form-control " style="background:#F5F9FA" />
              </div>
            </div>
            <div class="form-group">
              <label for="userPhone" class="control-label col-sm-4" style="font-weight: normal;">电话</label>
              <div class="col-sm-5">
                <input type="tel" class="form-control " style="background:#F5F9FA" />
              </div>
            </div>
            <div class="form-group">
              <label for="userType" class="control-label col-sm-4" style="font-weight: normal;">用户类型</label>
              <div class="col-sm-5">
                <select class="form-control" id="userType" style="background:#F5F9FA">
                  <option>中心管理员</option>
                  <option>中心用户</option>
                  <option>部门管理员</option>
                  <option>部门用户</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="userEmail" class="control-label col-sm-4" style="font-weight: normal;">邮箱</label>
              <div class="col-sm-5">
                <input type="email" class="form-control "  style="background:#F5F9FA"/>
              </div>
            </div>
            <div class="form-group">
              <label for="userPhoto" class="control-label col-sm-4" style="font-weight: normal;">头像</label>
              <div class="col-sm-5">
                <input type="file" />
              </div>
            </div>
      </form>
    </div>
  </body>
</html>