<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path = request.getContextPath(); %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
</head>
<body>
	<link href="<%=path %>/databridge/css/databridge.css" rel="stylesheet">
	<script src="<%=path %>/databridge/js/bridgerun.js"></script>
	<div class="panel panel-default panel-nobody">
        <div class="table-toolbar clearfix">
            <div class="table-toolbar-search pull-left clearfix">
                <form class="form-inline clearfix">
                    <ul>
                        <li class="form-group">
                            <div class="btn-group btn-group-sm" id="btn-group-tab">
                                <a class="btn btn-default active">全部</a>
                                <a class="btn btn-default">已启用</a>
                                <a class="btn btn-default">已停用</a>
                            </div>
                        </li>
                        <li class="form-group">
                            <input class="form-control form-control-large pull-left" placeholder="请输入关键字进行查询" style="width: 250px"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="btn-group btn-group-sm table-toolbar-btn-group">
                <button id="btn-delete" type="button" class="btn btn-default"><span class='glyphicon glyphicon-trash'></span>删除</button>
            </div>
        </div>
		<table id="grids"  data-undefined-text="没有检索到数据" ></table>
	</div>
</body>
</html>