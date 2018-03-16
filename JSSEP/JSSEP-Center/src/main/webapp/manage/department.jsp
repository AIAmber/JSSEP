<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <% String path=request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<title>部门管理</title>
</head>
<body>
<link  href="<%=path %>/manage/css/manage.css" rel="stylesheet">
<script src="<%=path %>/manage/js/department.js"></script>
  <div class="panel panel-default panel-nobody" >
    <div class="table-toolbar clearfix">
        <div class="table-toolbar-search  pull-left clearfix">
          <form class="form-inline clearfix">
            <ul>
              <li class="form-group">
                <input class="form-control form-control-large pull-left"  style="width: 250px" placeholder="请输入关键字进行查询"/>
              </li>
            </ul>
          </form>
        </div>
        <div class="btn-group btn-group-sm pull-right table-toolbar-btn-group">
            <button id="btn-add" role="group" type="button" class="btn btn-default" ><span class='glyphicon glyphicon-plus'></span>&nbsp;新增</button>
            <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>&nbsp;删除</button>
        </div>
        
        </div>
       <table id="deptGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
   <!--新增模态框表单  -->
         <div  style="display: none;">
            <form class=" form-horizontal" role="form" action="#" method="post" id="deptAddForm" style="width:927px;margin-left:-45px">
                  <div class="form-group">
                      <label for="orgName" class="control-label col-sm-2"  ><font class="red">*</font>部门全称</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control " name="orgName"/>
                    </div>
                     <label for="orgShortName" class="control-label col-sm-2" ><font class="red">*</font>部门简称</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control "  name="orgShortName"/>
                    </div>
                  </div>
                  <div class="form-group">
                     <label for="orgCode" class="control-label col-sm-2"  ><font class="red">*</font>部门代码</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control " name="orgCode" />
                    </div>
                    <label for="creditCode" class="control-label col-sm-2"  ><font class="red">*</font>统一社会信用代码</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control " name="creditCode" />
                    </div>
                    
                  </div>
                  <div class="form-group">
                  <label for="orgFrom" class="control-label col-sm-2" ><font class="red">*</font>上级部门</label>
                    <div class="col-sm-4">
                        <input id="orgFrom" type="text" class="form-control" data-toggle="dropdown"  readonly name="orgFrom" style="cursor:pointer" aria-describedby="orgFromIcon"/>
                        <span class="fa fa-sort-desc form-control-feedback" aria-hidden="true" style="margin-right:12px;margin-top:7px"></span>
                         <span id="orgFromIcon" class="sr-only">(primary)</span>
                          <ul id="orgFrom-tree-dropdown" class="dropdown-menu" style="margin-left:15px;width:275px;overflow:auto;max-height:250px;padding:10px">
                            <li data-stopPropagation="true">
                                <div id="orgFrom-tree" >
                                   <ul id="orgFrom-treeContent" class="ztree"></ul>
                                </div>        
                            </li>
                          </ul>
                    </div>
                    <label for="perName" class="control-label col-sm-2"  ><font class="red">*</font>联系人姓名</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control " name="perName"/>
                    </div>
                    </div>
                  <div class="form-group">
                     <label for="perEmail" class="control-label col-sm-2"  >联系人邮箱</label>
                    <div class="col-sm-4">
                        <input type="email" class="form-control  inputMailList" name="perEmail"  />
                    </div>
                    <label for="perPhone" class="control-label col-sm-2" >联系人电话</label>
                    <div class="col-sm-4">
                      <input type="tel" class="form-control " name="perPhone"/>
                    </div>   
                   </div>
                  <div class="form-group">
                    <label for="orgAddress" class="control-label col-sm-2" >办公地址</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" rows="2" name="orgAddress"></textarea>
                    </div>
                   </div>
                   <div class="form-group">
                     <label for="deptNum" class="control-label col-sm-2" >顺序号</label>
                    <div class="col-sm-10">
                      <input type="number" class="form-control " name="deptNum" id="deptNum"/>
                    </div>   
                   </div>
                </form>
         </div>
</body>
</html>