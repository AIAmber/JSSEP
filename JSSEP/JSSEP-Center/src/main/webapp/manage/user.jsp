<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  String path=request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
</head>
<body>
<link  href="<%=path %>/manage/css/manage.css" rel="stylesheet">
<script src="<%=path %>/manage/js/user.js"></script>
  <div class="panel panel-default panel-nobody" >
    <div class="table-toolbar clearfix">
        <div class="btn-group btn-group-sm pull-right table-toolbar-btn-group">
            <button id="btn-add" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</button>
            <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
        </div>
        <div class="table-toolbar-search pull-left clearfix">
          <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <span class="pull-left text-right form-label">用户类型</span>
                <select class="form-control pull-left">
                <option>请选择用户类型</option>
                  <option>中心管理员</option>
                  <option>中心用户</option>
                  <option>部门管理员</option>
                  <option>部门用户</option>
                </select>
              </li>
              <li class="form-group">
                <input class="form-control form-control-large pull-left" style="width: 250px"  placeholder="请输入关键字进行查询"/>
              </li>
            </ul>
          </form>
        </div>
        </div>
       <table id="userGrids"  data-undefined-text="没有检索到数据" ></table>
  </div>
   <!--新增模态框表单  -->
    <div  style="display:none">
       <form class=" form-horizontal" role="form" action="#" method="post"  id="userAddForm" style="width:910px">
          <div style="float: left">
              <div class="imgPreview" >
         <img id="photo"  src="<%=path %>/common/img/head.png " >
         <div style="margin-top:16px;text-align:center" >
             <input id="photoContent" type="file" class="form-control" accept="image/*" style="display:none" />
             <a  id="upload" class="btn btn-default btn-sm"type="button" style="margin-right:12px">上传</a>
              <a  id="updelete"  class="btn btn-default btn-sm" type="button">删除</a>
         </div>
       </div>
          </div>
          <div style="float: left;width:668px">
          <div class="form-group">
               <label for="userName" class="control-label col-sm-2" ><font class="red">*</font>用户名</label>
              <div class="col-sm-4">
                <input type="text" class="form-control " id="userName"  name="userName" />
              </div>
               <label for="userType" class="control-label col-sm-2"><font class="red">*</font>用户类型</label>
              <div class="col-sm-4">
                <select class="form-control"  style="padding:3px 6px;" id="userType" name="userType">
                  <option value="">请选择用户类型</option>
                  <option >中心管理员</option>
                  <option>中心用户</option>
                  <option>部门管理员</option>
                  <option>部门用户</option>
                </select>
              </div>
             </div>
            <div class="form-group">
                <label for="userPassword" class="control-label col-sm-2" ><font class="red">*</font>密码</label>
                <div class="col-sm-4">
                  <input type="password" class="form-control " id="userPassword" name="userPassword" />
                </div>
               <label for="confirmPassword" class="control-label col-sm-2" ><font class="red">*</font>确认密码</label>
                <div class="col-sm-4">
                  <input type="password" class="form-control " id="confirmPassword" name="confirmPassword" />
                </div>
            </div>
            <div class="form-group">
               <label for="deptFrom" class="control-label col-sm-2" ><font class="red">*</font>所属部门</label>
              <div class="col-sm-4">
              <input id="selected-node-info" type="text" class="form-control"  readonly data-toggle="dropdown"  name="deptFrom" style="cursor:pointer" aria-describedby="orgFromIcon"/>
                     <span class="fa fa-sort-desc form-control-feedback" aria-hidden="true" style="margin-right:12px;margin-top:7px"></span>
                         <span id="orgFromIcon" class="sr-only">(primary)</span>
                    <ul id="user-depart-tree" class="dropdown-menu" style="margin-left:15px;width:192px;overflow:auto;max-height:250px;padding:10px ">
                      <li data-stopPropagation="true">
                          <div id="treeContent" >
                             <ul id="treeContentDemo" class="ztree"></ul>
                          </div>        
                      </li>
                    </ul>
              </div>
              <label for="perName" class="control-label col-sm-2" >姓名</label>
              <div class="col-sm-4">
                <input type="text" class="form-control " id="perName"  name="perName" />
              </div>
            </div>
            <div class="form-group">
            <label for="IDNum" class="control-label col-sm-2" >身份证号码</label>
              <div class="col-sm-4">
                <input type="text" class="form-control " id="IDNum"  name="IDNum" />
              </div>
               <label for="userPhone" class="control-label col-sm-2" >手机</label>
              <div class="col-sm-4">
                <input type="tel" class="form-control " id="userPhone" name="userPhone"/>
              </div>
            </div>
             <div class="form-group">
               <label for="userEmail" class="control-label col-sm-2" >邮箱</label>
               <div class="col-sm-4">
                  <input id="userEmail" type="email" class="form-control inputMailList"   />
               </div>
             </div>
             <div class="form-group">
                <label for="userAddress" class="control-label col-sm-2" >住址</label>
              <div class="col-sm-10">
                  <textarea rows="2" class="form-control" id="userAddress"  name="userAddress"></textarea>
              </div>
             </div>
          </div>
      </form>
    </div>
    <div style="display:none">
            <div id="treeAuthorityContent" style="margin-left:5px;margin-top:15px;overflow-y:auto;max-height:300px" >
              <ul id="treeAuthorityContentDemo" class="ztree"></ul>
            </div>        
          </div>
    
  </body>
</html>