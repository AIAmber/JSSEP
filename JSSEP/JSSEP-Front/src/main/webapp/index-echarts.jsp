<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>首页 - 江苏省政务信息交换平台</title>
    <!-- Bootstrap -->
    <link href="common/css/bootstrap.min.css" rel="stylesheet">

    <script src="common/js/jquery.min.js"></script>
    <script src="common/js/bootstrap.min.js"></script>
    <!--    <script src="./js/director.min.js"></script>-->
</head>
<body>
    <div class="container-fluid">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="row-fluid">
                    <div class="panel panel-default">
                        <div class="panel-heading clearfix"><i class="glyphicon glyphicon-flash"></i> 最新发布</div>
                        <!-- 第1排 -->
                        <div class="panel-body">
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-send"></i> 最新发布目录内容</div>
                                    <!-- 第1排第1个 -->
                                    <div class="panel-body">
                                        <div id="main11" style="height:250px; overflow-x:hidden; overflow-y:auto;">
                                            <p>新发布 5 条信息</p>
                                            <table class="table">
                                                <tbody>
                                                    <tr class="warining">
                                                        <td>1</td>
                                                        <td>资源名称一</td>
                                                        <td>资源提供方</td>
                                                        <td>01/04/2018</td>
                                                    </tr>
                                                    <tr class="success">
                                                        <td>2</td>
                                                        <td>资源名称二</td>
                                                        <td>资源提供方</td>
                                                        <td>01/04/2018</td>
                                                    </tr>
                                                    <tr class="error">
                                                        <td>3</td>
                                                        <td>资源名称三</td>
                                                        <td>资源提供方</td>
                                                        <td>02/04/2018</td>
                                                    </tr>
                                                    <tr class="warning">
                                                        <td>4</td>
                                                        <td>资源名称四</td>
                                                        <td>资源提供方</td>
                                                        <td>03/04/2018</td>
                                                    </tr>
                                                    <tr class="error">
                                                        <td>5</td>
                                                        <td>资源名称五</td>
                                                        <td>资源提供方</td>
                                                        <td>02/04/2018</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-list-alt"></i> 最新发布内容统计</div>
                                    <!-- 第1排第2个 -->
                                    <div class="panel-body">
                                        <div id="main12" style="height:250px; overflow-x:hidden; overflow-y:auto;">
                                            <p>新接入部门 6 个</p>
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>部门名称一</td>
                                                        <td>01/04/2018</td>
                                                    </tr>
                                                    <tr class="success">
                                                        <td>2</td>
                                                        <td>部门名称二</td>
                                                        <td>01/04/2018</td>
                                                    </tr>
                                                    <tr class="error">
                                                        <td>3</td>
                                                        <td>部门名称三</td>
                                                        <td>02/04/2018</td>
                                                    </tr>
                                                    <tr class="warning">
                                                        <td>4</td>
                                                        <td>部门名称四</td>
                                                        <td>03/04/2018</td>
                                                    </tr>
                                                    <tr class="error">
                                                        <td>5</td>
                                                        <td>部门名称五</td>
                                                        <td>03/04/2018</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-fluid">
                    <div class="panel panel-default">
                        <div class="panel-heading clearfix"><i class="glyphicon glyphicon-user"></i> 访问情况</div>
                        <!-- 第2排 -->
                        <div class="panel-body">
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-bookmark"></i> 热门资源访问统计</div>
                                    <!-- 第2排第1个 -->
                                    <div class="panel-body">
                                        <div id="main21" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-retweet"></i> 今日资源交换量统计</div>
                                    <!-- 第2排第2个 -->
                                    <div class="panel-body">
                                        <div id="main22" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-signal"></i> 资源访问次数统计</div>
                                    <!-- 第2排第3个 -->
                                    <div class="panel-body">
                                        <div id="main23" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-th"></i> 请求类型分析</div>
                                    <!-- 第2排第4个 -->
                                    <div class="panel-body">
                                        <div id="main24" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading clearfix"><i class="glyphicon glyphicon-equalizer"></i> 平台服务状态信息</div>
                    <!-- 第3排 -->
                    <div class="panel-body">
                        <div class="row-fluid">

                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <!--<div class="panel-heading clearfix">节点监控</div>-->
                                    <!-- 第3排第1个 -->
                                    <div class="panel-body">
                                        <div id="main31" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <!--<div class="panel-heading clearfix">内存信息</div>-->
                                    <!-- 第3排第2个 -->
                                    <div class="panel-body">
                                        <div id="main32" style="height:250px"></div>
                                    </div>
                                </div>
                            </div>



                            <div class="row-fluid">
                                <div class="col-md-6">
                                    <div class="panel panel-default">
                                        <!-- 第4排第1个 -->
                                        <!--<div class="panel-heading clearfix">CPU信息</div>-->
                                        <div class="panel-body">
                                            <div id="main41" style="height:250px"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="panel panel-default">
                                        <!--<div class="panel-heading clearfix">服务器</div>-->
                                        <!-- 第4排第2个 -->
                                        <div class="panel-body">
                                            <div id="main42" style="height:250px; overflow-x:hidden; overflow-y:auto;">
                                                <h4><b>服务器信息</b></h4>
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>节点</th>
                                                            <th>操作系统</th>
                                                            <th>系统名称</th>
                                                            <th>系统地址</th>
                                                            <th>端口</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Master-01</td>
                                                            <td>windows(114.55.34.251) </td>
                                                            <td>windows7</td>
                                                            <td>00-00-00-00-00-00-00-E0</td>
                                                            <td>21</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Master-02</td>
                                                            <td>Linux(114.55.34.252) </td>
                                                            <td>Centos 7.3</td>
                                                            <td>00-00-00-00-00-00-00-E1</td>
                                                            <td>21</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Slave-01</td>
                                                            <td>Linux(114.55.34.131) </td>
                                                            <td>Centos 7.3</td>
                                                            <td>00-00-00-00-00-00-00-F0</td>
                                                            <td>21</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Slave-02</td>
                                                            <td>Linux(114.55.34.133) </td>
                                                            <td>Centos 7.3</td>
                                                            <td>00-00-00-00-00-00-00-F3</td>
                                                            <td>443</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="common/js/echarts.js"></script>
    <script type="text/javascript" src="common/echarts/echartAll.js"></script>

</body>
</html>