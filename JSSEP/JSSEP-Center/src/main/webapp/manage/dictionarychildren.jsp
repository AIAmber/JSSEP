<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>字典管理/二级子菜单</title>
<script src="manage/js/dictionary.js"></script>
</head>
<body>
<div class="panel panel-default panel-nobody" >
        <div class="table-toolbar clearfix">
    <div class="btn-group btn-group-sm pull-left table-toolbar-btn-group">
        <button id="btn-add" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-plus'></span>新增</button>
        <button id="btn-delete" role="group" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
        <a id="btn-return"  role="group" type="button" class="btn btn-default" href="#/dictionary"><span class='glyphicon glyphicon-share-alt'></span>返回</a>
    </div>
    <div class="table-toolbar-search pull-right clearfix">
    </div>
    </div>
       <table id="dicChildGrids"  data-undefined-text="没有检索到数据" data-url="data.json" ></table>
  </div>
</body>
</html>