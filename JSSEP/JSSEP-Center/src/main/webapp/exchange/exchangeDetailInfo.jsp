<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>落地数据详情</title>
</head>
<body>

<div class="panel panel-default panel-nobody">
<link  href="exchange/css/newExchangeNode.css" rel="stylesheet">
      <form class="form-horizontal" id="newExchangeNodeForm">
          <fieldset>
          <div class="">
              <div class="hrtitle">
                  <img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
                  <span style="margin-left: 10px">业务信息</span>
              </div>
              <hr>
          <div class="form-group">
              <label for="orgName" class="col-sm-1 control-label">事项名称</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" name="orgName" value="专职律师执业许可变更登记" readonly aria-describedby="orgNameIcon" >
              </div>
              <label for="orgCode" class="col-sm-1 control-label" >业务名称</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" value="专职律师执业许可变更登记" id="orgCode" readonly>
              </div>
          </div>
          <div class="form-group">
              <label for="linkName" class="col-sm-1 control-label">办件名称</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" value="徐雅倩-律师转所（跨市）申请" id="linkName" readonly >
              </div>
              <label for="linkPhone" class="col-sm-1 control-label">申请单位/申请人</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" value="徐雅倩" id="linkPhone" readonly >
              </div>
          </div>
          <div class="form-group">
              <label for="linkEmail" class="col-sm-1 control-label">收件单位</label>
              <div class="col-sm-4">
                  <input type="email" class="form-control" value="江苏省司法厅" id="linkEmail" readonly>
              </div>
              <label for="accessTime" class="col-sm-1 control-label" >经办人</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" name ="accessTime" readonly >
              </div>
          </div>
           <div class="form-group">
              <label for="linkEmail" class="col-sm-1 control-label">受理时间</label>
              <div class="col-sm-4">
                  <input type="email" class="form-control" name="linkEmail" id="linkEmail" readonly>
              </div>
              <label for="accessTime" class="col-sm-1 control-label" >承诺办结时间</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" value ="18工作日" readonly >
              </div>
          </div>
          <div class="form-group">
              <label for="linkEmail" class="col-sm-1 control-label">法定办结时间</label>
              <div class="col-sm-4">
                  <input type="email" class="form-control" value="20工作日" id="linkEmail" readonly>
              </div>
              <label for="accessTime" class="col-sm-1 control-label" >当前办理状态</label>
              <div class="col-sm-4">
                  <input type="text" class="form-control" value ="办理中" readonly >
              </div>
          </div>
          </div>
          </fieldset>
          <fieldset>
              <div class="hrtitle">
                  <img alt="" src="common/img/list-title.png" style="margin-top: -5px;">
                  <span style="margin-left: 10px">交换信息</span>
              </div>
              <hr>
              <div class="">
              <div class="form-group">
                  <label for="msgProQueue" class="col-sm-1 control-label">资源需求方</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" value="省工商局" id="msgProQueue" readonly>
                  </div>
                  <label for="msgCsuQueue" class="col-sm-1 control-label">资源提供方</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" value="省司法厅" id="msgCsuQueue" readonly>
                  </div>
              </div>
              <div class="form-group">
                  <label for="msgPublishTheme" class="col-sm-1 control-label">交换时间</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" value="2017-07-27 14:12:01" id="msgPublishTheme" readonly>
                  </div>
              </div>
              </div>
          </fieldset>
  </form>
  <div class="row text-center submit-btn">
      <a href="#/exchangeDetailed" type="button" class="btn btn-default" id="btn_back" ><span class="fa fa-reply"></span>&nbsp;返回</a>
  </div>
</div>
</body>
</html>