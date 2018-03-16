<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%String path =  request.getContextPath(); %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	<script type="text/javascript" src="<%=path %>/dashboard/js/dashboardPlus.js"></script>
    <script type="text/javascript" src="<%=path %>/dashboard/js/dashboardDialog.js"></script>
    <script type="text/javascript" src="<%=path %>/dashboard/js/dashBase.js"></script>
    <link rel="stylesheet" href="<%=path %>/dashboard/css/clickWarning.css" type="text/css" />
    <link rel="stylesheet" href="<%=path %>/dashboard/css/wgt-fund.css" type="text/css" />
    <link rel="stylesheet" href="<%=path %>/dashboard/css/dash-button.css" type="text/css" />
	<style type="text/css">
        .btn-circle {
            width: 24px;
            height: 24px;
            text-align: center;
            padding: 4.5px 0;
            font-size: 12px;
            line-height: 1;
            border-radius: 12px;
        }
        .container-fluid {
            padding-right: 0px;
            padding-left: 0px;
        }
    </style>
    <div class="container-fluid" style="padding-right: 0px; padding-left: 0px;">
        <!-- row 开始 -->
        <div class="row-fluid">
            <!--<div class="panel-heading clearfix"><i class="glyphicon glyphicon-flash"></i> 今日发布</div>-->
            <!-- 第一排开始 -->
            <div class="row" style="padding-left: 16px; padding-right: 16px;">
                <!-- 第1排 -->
                <!-- card 1 -->
                <div class="col-md-4 col-xs-4">
                    <div class="panel panel-default" style="border-color: #9FD3A2; box-shadow: none;">
                        <!-- 第1排第1个 -->
                        <div class="panel-heading" style="height: 32px; background-color: #9FD3A2; border-color: #81C884; text-align:center; font-size: 16px; color: white;">
                            <span style="display: block; margin-top: -4px">目录发布情况</span>
                        </div>
                        <div class="panel-body" style="background-color: #81C884; text-align: center; margin: 0 auto; cursor: pointer;" onclick="window.location.href='#/catalogrelease';">
                            <div style="height: 68px; width: 30%; float: left;">
                                <!--<span style="display: block; margin-top: -6px"><img src="<%=path %>/dashboard/img/1-1print.png" width="65px" height="65px" /></span>-->
                                <span><img src="<%=path %>/dashboard/img/1-1print-65-2.png" width="65px" height="65px" /></span>
                            </div>
                            <div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">未处理</p>
                                    <p style="font-size: 30px; color: white; margin-top: -4px"><span id="cardAb">10</span><span id="cardAb-bit" style="font-size: 18px">&nbsp;条</span></p>
                                </div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">已发布</p>
                                    <p style="font-size: 30px; color: white; margin-top: -4px"><span id="cardAa">150</span><span id="cardAa-bit" style="font-size: 18px">&nbsp;条</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card 2 -->
                <div class="col-md-4 col-xs-4">
                    <div class="panel panel-default" style="border-color: #FFC878; box-shadow: none;">
                        <!-- 第1排第2个 -->
                        <div class="panel-heading" style="height: 32px; background-color: #FFC878; border-color: #FFB74E; text-align:center; font-size: 16px; color: white;">
                            <span style="display: block; margin-top: -4px">平台运行情况</span>
                        </div>
                        <div class="panel-body" style="background-color: #FFB74E; text-align: center; margin: 0 auto; cursor: pointer;" onclick="window.location.href='#/department';">
                            <div style="height: 68px; width: 30%; float: left;">
                                <!--<span style="display: block; margin-top: -6px"><img src="<%=path %>/dashboard/img/1-2count.png" width="65px" height="65px" /></span>-->
                                <span><img src="<%=path %>/dashboard/img/1-2count-65-2.png" width="65px" height="65px"/></span>
                            </div>
                            <div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">总体流量</p>
                                    <p style="font-size: 24px; color: white; margin-top: 7px"><span id="cardBa">136.05</span><span id="cardAa-bit" style="font-size: 18px">&nbsp;Gb</span></p>
                                </div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">接入部门</p>
                                    <p style="font-size: 24px; color: white; margin-top: 7px"><span id="cardBb">15</span><span id="cardAb-bit" style="font-size: 18px">&nbsp;个</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- card 3 -->
                <div class="col-md-4 col-xs-4">
                    <div class="panel panel-default" style="border-color: #78C7C1; box-shadow: none;">
                        <!-- 第1排第3个 -->
                        <div class="panel-heading" style="height: 32px; background-color: #78C7C1; border-color: #4DB7AD; text-align:center; font-size: 16px; color: white;">
                            <span style="display: block; margin-top: -4px">资源交换总量</span>
                        </div>
                        <div class="panel-body" style="background-color: #4DB7AD; text-align: center; margin: 0 auto;">
                            <div style="height: 68px; width: 30%; float: left;">
                                <!--<span style="display: block; margin-top: -6px"><img src="<%=path %>/dashboard/img/1-3mount.png" width="65px" height="65px" /></span>-->
                                <span><img src="<%=path %>/dashboard/img/1-3mount-65-2.png" width="65px" height="65px" /></span>
                            </div>
                            <div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">交换流量</p>
                                    <p style="font-size: 24px; color: white; margin-top: 7px;"><span id="cardCb">18.12</span><span id="cardCb-bit" style="font-size: 18px">&nbsp;Gb</span></p>
                                </div>
                                <div style="height: 68px; width: 35%;  float: right;">
                                    <p style="font-size: 13px; color: white; display: block; margin-top: -6px">交换次数</p>
                                    <p style="font-size: 24px; color: white; margin-top: 7px;"><span id="cardCa">1240</span><span id="cardCa-bit" style="font-size: 18px">&nbsp;次</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--第一排结束-->

            <!--<div class="panel-heading clearfix"><i class="glyphicon glyphicon-user"></i> 访问情况</div>-->
            <!--第二排开始-->
            <!-- 第2排 -->
            <div class="row" style="padding-left: 16px; padding-right: 16px;">
                <div class="col-md-8 col-xs-8">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-leaf"></i></span>
                            <span style="font-size:16px; float: left; width: 135px; line-height: 16px;">热门资源访问统计</span>
                            <span style="font-size: 14px; float: right; display: block; margin-top: -4px; width: 25px"><button id="mainHotResource" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                            <div style="position: relative; width: 146px; margin-top: -3px; padding: 0px 8px; float: right;">
                                <button id="dash-count-pop" type="button" class="btn btn-xs dash-button" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom">描述</button>
                                <button id="dash-count-detail" type="button" class="btn btn-xs dash-button-clk" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom" type="button" style="color: #fff">详情</button>
                                <button type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #fff">排名</button>
                                <ul class="dropdown-menu">
                                    <li><a id="dash-count-top5" style="color: #333">热门访问 top 5</a></li>
                                    <li><a id="dash-count-top10" style="color: #333">热门访问 top 10</a></li>
                                    <li><a id="dash-count-top20" style="color: #333">热门访问 top 15</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 第2排第1个 -->
                        <div class="panel-body">
                            <div id="main21" style="height:234px;"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-xs-4">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-object-align-bottom"></i></span>
                            <span style="font-size:16px; float: left; width: 100px; line-height: 16px;">热门资源分析</span>
                            <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button onclick="javascript:window.location.href='#/resourceclassify';" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                            <div style="position: relative; width: 94px; margin-top: -3px; float: right;">
                                <!-- req or pub -->
                                <button id="dash-resource-reqOrPub" type="button" class="btn btn-xs dash-button">请求</button>
                                <button id="dash-realTime-top5" type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">排名</button>
                                <ul class="dropdown-menu">
                                    <li><a id="dash-publish-top3" style="color: #333">热门资源 Top3</a></li>
                                    <li><a id="dash-publish-top5" style="color: #333">热门资源 Top5</a></li>
                                    <li><a id="dash-publish-top8" style="color: #333">热门资源 Top8</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 第2排第2个 -->
                        <div class="panel-body">
                            <div id="main23" style="height:234px"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!--第三排开始-->
            <div class="row" style="padding-left: 16px; padding-right: 16px;">
                <div class="col-md-8 col-xs-8">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-sort"></i></span>
                            <span style="font-size:16px; float: left; width: 115px; line-height: 16px;">资源交换情况</span>
                            <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button onclick="javascript:window.location.href='#/exchangelog';" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                            <div style="position: relative; width: 146px; margin-top: -3px; padding: 0px 8px; float: right;">
                                <button id="dash-realTime-pop" type="button" class="btn btn-xs dash-button" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom">描述</button>
                                <button id="dash-realTime-detail" type="button" class="btn btn-xs dash-button-clk" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom">详情</button>
                                <button type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">模式</button>
                                <ul class="dropdown-menu">
                                    <li><a id="dash-realtime" style="color: #333">今日交换量</a></li>
                                    <li><a id="dash-realtime-7days" style="color: #333">近一周交换量</a></li>
                                    <li><a id="dash-realtime-30days" style="color: #333">近一月交换量</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 第3排第1个 -->
                        <div class="panel-body">
                            <div id="main22" style="height:234px"></div>
                        </div>
                    </div>
                </div>

                <div class="row-fluid">
                    <div class="col-md-4 col-xs-4">
                        <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                            <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                                <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-indent-left"></i></span>
                                <span style="font-size:16px; float: left; width: 100px; line-height: 16px;">部门行为分析</span>
                                <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button onclick="javascript:window.location.href='#/exchangenode';" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                                <div style="position: relative; width: 94px; margin-top: -3px; float: right;">
                                    <button id="dash-reqPub-reqOrPub" type="button" class="btn btn-xs dash-button">请求</button>
                                    <button id="dash-reqPub-rank" type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">排名</button>
                                    <ul class="dropdown-menu">
                                        <li><a id="dash-request-top3" style="color: #333">部门行为 Top3</a></li>
                                        <li><a id="dash-request-top5" style="color: #333">部门行为 Top5</a></li>
                                        <li><a id="dash-request-top8" style="color: #333">部门行为 Top8</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- 第3排第2个 -->
                            <div class="panel-body">
                                <div id="main24" style="height:234px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--第三排结束-->
            
            <!--第三排下附一排开始-->
            <div class="row" style="padding-left: 16px; padding-right: 16px;">
                <div class="col-md-6 col-xs-6">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-sort"></i></span>
                            <span style="font-size:16px; float: left; width: 115px; line-height: 16px;">数据入库与利用</span>
                            <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button onclick="javascript:window.location.href='#/exchangelog';" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                            <div style="position: relative; width: 146px; margin-top: -3px; padding: 0px 8px; float: right;">
                                <button id="dash-dataStorage-pop" type="button" class="btn btn-xs dash-button" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom">描述</button>
                                <button id="dash-dataStorage-detail" type="button" class="btn btn-xs dash-button-clk" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom">详情</button>
                                <button type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">模式</button>
                                <ul class="dropdown-menu">
                                    <li><a id="dash-dataStorage" style="color: #333">查询入库</a></li>
                                    <li><a id="dash-dataStorage-2" style="color: #333">查询利用</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 第3排第1个 mainDataStorage 数据入库与利用 -->
                        <div class="panel-body">
                            <div id="mainDataStorage" style="height:234px"></div>
                        </div>
                    </div>
                </div>

                <div class="row-fluid">
                    <div class="col-md-6 col-xs-6">
                        <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                            <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                                <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-indent-left"></i></span>
                                <span style="font-size:16px; float: left; width: 115px; line-height: 16px;">数据共享与交换</span>
                                <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button onclick="javascript:window.location.href='#/exchangenode';" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc"></i></button></span>
                                <div style="position: relative; width: 146px; margin-top: -3px; padding: 0px 8px; float: right;">
                                <button id="dash-dataShare-pop" type="button" class="btn btn-xs dash-button" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom">描述</button>
                                <button id="dash-dataShare-detail" type="button" class="btn btn-xs dash-button-clk" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom">详情</button>
                                <button type="button" class="btn btn-xs dash-button-clk" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">模式</button>
                                <ul class="dropdown-menu">
                                    <li><a id="dash-dataShare" style="color: #333">查询共享</a></li>
                                    <li><a id="dash-dataShare-2" style="color: #333">查询交换</a></li>
                                </ul>
                            </div>
                            </div>
                            <!-- 第3排第2个 mainDataUse 数据共享与交换 -->
                            <div class="panel-body">
                                <div id="mainDataShare" style="height:234px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--第三排下附一排结束-->

            <!--第四排开始-->
            <div class="row" style="padding-left: 16px; padding-right: 16px;">
                <div class="col-md-3 col-xs-3">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <!--<div class="panel-heading clearfix">内存信息</div>-->
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-fire"></i></span>
                            <span style="font-size:16px; float: left; width: 100px; line-height: 16px;">内存使用情况</span>
                        </div>
                        <!-- 第4排第1个 -->
                        <div class="panel-body">
                            <div id="main32" style="height:184px"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-xs-3">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <!--<div class="panel-heading clearfix">内存信息</div>-->
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-dashboard"></i></span>
                            <span style="font-size:16px; float: left; width: 100px; line-height: 16px;">CPU使用率</span>
                        </div>
                        <!-- 第4排第2个 -->
                        <div class="panel-body">
                            <div id="mainAddCPU" style="height:184px"></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xs-6">
                    <div class="panel panel-default" style="border-radius: 2px; border-color: white; box-shadow: none;">
                        <!--<div class="panel-heading clearfix">内存信息</div>-->
                        <div class="panel-heading" style="height: 36px; background-color: #f5f5f4; border-color: #f5f5f4;">
                            <span style="font-size:16px; float: left; width: 24px; height: 36px; color: #5f5f5f; display: block; margin-top: -2px"><i class="glyphicon glyphicon-hdd"></i></span>
                            <span style="font-size:16px; float: left; width: 115px; line-height: 16px;">硬盘使用情况</span>
                            <span style="font-size: 14px; float: right; display: block; margin-top: -4px"><button id="dash-btn-click-43" type="button" class="btn btn-default btn-circle"><i class="glyphicon glyphicon-option-horizontal" style="color: #ccc;"></i></button></span>
                            <div style="position: relative; width: 152px; margin-top: -3px; float: right;">
                                <button id="dash-mq-see" type="button" class="btn btn-xs dash-button">消息队列</button>
                                <button id="dash-server-info" type="button" class="btn btn-xs dash-button-clk" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="bottom" type="button" style="color: #fff">服务器信息</button>
                            </div>
                        </div>
                        <!-- 第4排第3个 -->
                        <div class="panel-body">
                            <div id="discInfo" style="height:184px">
                                <div id="mainAddDisc" style="height:184px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--第四排结束-->

        </div>
        <!-- row 结束 -->
    </div>
    
    <script type="text/javascript">

    </script>

</body>

<!--card popover-->

<!--main21 btn01-->
<div id="dash-card-01-head" style="display: none; text-align: center;">
    <span style="color: white;">今日资源访问情况</span>
</div>
<div id="dash-card-01" style="display: none;">
    <div id="dash-card-01-div">
        <div style="height: 68px; width: 38%; float: left; margin-top: -3px;">
            <span><img src="<%=path %>/dashboard/img/2-1pop-65-2.png" width="65px" height="65px" /></span>
        </div>
        <div style="height: 68px; width: 62%;  float: right;">
            <p style="font-size: 24px; color: white; margin-top: 11px; margin-left: 20px">362次</p>
        </div>
    </div>
</div>

<!--main22 btn01-->
<div id="dash-card-02-head" style="display: none; text-align: center;">
    <span style="color: white;">今日资源访问流量</span>
</div>
<div id="dash-card-02" style="display: none;">
    <div id="dash-card-02-div">
        <div style="height: 68px; width: 38%; float: left; margin-top: -3px;">
            <span><img src="<%=path %>/dashboard/img/2-1pop-65-2.png" width="65px" height="65px" /></span>
        </div>
        <div style="height: 68px; width: 62%;  float: right;">
            <p style="font-size: 24px; color: white; margin-top: 11px; margin-left: 12px">5.62Gb</p>
        </div>
    </div>
</div>


<!--popover content-->

<!--main21 head-->
<div id="dash-main21-btn22-head" style="display: none">
    <span><i class="glyphicon glyphicon-upload"></i></span>
    <span>&nbsp;热门资源访问情况</span>
    <a id="dash-count-detail-rm" style="width: 24px; float: right; text-align: center; cursor: pointer;" onclick="javascript:$('#dash-count-detail').popover('hide');"><i class="glyphicon glyphicon-remove"></i></a>
</div>
<!--main21 content-->
<div id="dash-main21-btn22" style="display: none">
    <div style="width:250px;color: #787671">
        <table id="dash-main21-tb" class="table table-condensed table-hover">
            <thead>
                <tr>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">资源代码</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">资源</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">机构</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">访问次数</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr>
                    <td>011222</td>
                    <td>行政许可</td>
                    <td>工商</td>
                    <td>105次</td>
                </tr>
                <tr>
                    <td>011223</td>
                    <td>资质认定</td>
                    <td>质监</td>
                    <td>79次</td>
                </tr>
                <tr>
                    <td>011224</td>
                    <td>监测报告</td>
                    <td>环保</td>
                    <td>62次</td>
                </tr>
                <tr>
                    <td>011225</td>
                    <td>法人信息</td>
                    <td>公安</td>
                    <td>43次</td>
                </tr>
                <tr>
                    <td>011226</td>
                    <td>公文</td>
                    <td>水利</td>
                    <td>21次</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!--main22 head-->
<div id="dash-main22-btn22-head" style="display: none">
    <span><i class="glyphicon glyphicon-random"></i></span>
    <span>&nbsp;热门资源交换情况</span>
    <a id="dash-realTime-detail-rm" style="width: 24px; float: right; text-align: center; cursor: pointer;" onclick="javascript:$('#dash-realTime-detail').popover('hide');"><i class="glyphicon glyphicon-remove"></i></a>
</div>
<!--main22 content-->
<div id="dash-main22-btn22" style="display: none;">
    <div style="width:250px;color: #787671">
        <table class="table table-condensed table-hover">
            <thead>
                <tr>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">资源代码</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">资源</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">机构</th>
                    <th style="border-bottom-color: #BFE2C2; text-align: center;">交换量</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr>
                    <td>011222</td>
                    <td>行政许可</td>
                    <td>工商</td>
                    <td>1532Mb</td>
                </tr>
                <tr>
                    <td>011223</td>
                    <td>资质认定</td>
                    <td>质监</td>
                    <td>895Mb</td>
                </tr>
                <tr>
                    <td>011224</td>
                    <td>监测报告</td>
                    <td>环保</td>
                    <td>725Mb</td>
                </tr>
                <tr>
                    <td>011225</td>
                    <td>法人信息</td>
                    <td>公安</td>
                    <td>514Mb</td>
                </tr>
                <tr>
                    <td>011226</td>
                    <td>公文</td>
                    <td>水利</td>
                    <td>323Mb</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!--server INFO-->
<div id="dash-main33-btn-head" style="display: none;">
    <span><i class="glyphicon glyphicon-tasks"></i></span>
    <span>&nbsp;服务器信息</span>
    <a id="dash-realTime-detail-rm" style="width: 24px; float: right; text-align: center; cursor: pointer;" onclick="javascript:$('#dash-server-info').popover('hide');"><i class="glyphicon glyphicon-remove"></i></a>
</div>

<div id="dash-main33-btn" style="display: none;">
    <div style="width:250px;color: #787671">
        <table class="table table-condensed table-hover">
            <thead>
                <tr>
                    <th style="border-bottom-color: #FFDBA7;">节点</th>
                    <th style="border-bottom-color: #FFDBA7;">系统</th>
                    <th style="border-bottom-color: #FFDBA7;">IP</th>
                    <th style="border-bottom-color: #FFDBA7;">端口</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>M1</td>
                    <td>windows7</td>
                    <td>114.55.34.251</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>S1</td>
                    <td>Centos7</td>
                    <td>114.55.34.131</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>S2</td>
                    <td>Centos7</td>
                    <td>114.55.34.132</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>S3</td>
                    <td>Centos7</td>
                    <td>114.55.34.133</td>
                    <td>443</td>
                </tr>
                <tr>
                    <td>S4</td>
                    <td>Centos7</td>
                    <td>114.55.34.133</td>
                    <td>443</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!--悬浮小图标 sm-->
<div id="wgt-share" class="wgt-sm-exp-share wgt-sm" style="display: block; position: fixed; cursor: pointer;">
    <div class="wrp-sm-exp-share">
        <a id="w-share"></a>
    </div>
</div>
<div id="wgt-share-up1" class="wgt-sm-exp-share wgt-sm-up" style="position: fixed; display: block; cursor: pointer;">
    <div class="wrp-sm-exp-share-up">
        <a id="w-share-up1" href="javascript:void(0)"></a>
    </div>
</div>
<div id="wgt-share-up2" class="wgt-sm-exp-share wgt-sm-up2" style="position: fixed; display: block; cursor: pointer;">
    <div class="wrp-sm-exp-share-up2">
        <a id="w-share-up2" href="javascript:void(0)" data-action="open-task-list"></a>
    </div>
</div>

</html>