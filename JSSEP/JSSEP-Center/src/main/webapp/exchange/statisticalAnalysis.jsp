<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
	<script src="exchange/js/statisticalAnalysis.js"></script>
	

</head>
<body>
<div class="panel-body" id="tubiao">
   <div class="panel panel-default"  style="width:48%;float: left;" >
		<div class="panel-heading" role="tab" id="headingRequestCount">
			<h4 class="panel-title">
				<a role="button" id="requestCount"  data-toggle="collapse" href="#requestResourceCount" aria-controls="requestResourceCount">
				请求资源数量统计
				</a>
		 	 	<span style="margin-top:-0.5%;float: right;position: relative;margin-right: 2%;">
					<button type="button" class="btn btn-primary btn-sm" onclick="">导出数据</button>
					<button type="button" class="btn btn-primary btn-sm" onclick="">昨天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近7天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近30天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">2017-11-12~2017-12-30 &nbsp;<span class="glyphicon glyphicon-calendar"></span></button>
					
				</span> 
			</h4>
		</div>
		<div id="requestResourceCount" data-target="requestResourceCount" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingRequestCount">
			<div class="panel-body">
				 <div id="requestResourceCountChart" style="width:100%;height:300px;" ></div>
			</div>
		</div>
	</div>
	
	 <div class="panel panel-default" style="width:48%;float:right;" >
		<div class="panel-heading " role="tab" id="headingRequestFlow">
			<h4 class="panel-title">
			<a role="button"  data-toggle="collapse"  href="#requestResourceFlow" aria-expanded="true" aria-controls="requestResourceFlow">
			请求资源流量统计</a>
				<!-- <span style="margin-top:-0.5%;float: right;position: relative;margin-right: 2%;">
					<button type="button" class="btn btn-primary btn-sm" onclick="">导出数据</button>
					<button type="button" class="btn btn-primary btn-sm" onclick="">昨天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近7天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近30天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">2017-11-12~2017-12-30 &nbsp;<span class="glyphicon glyphicon-calendar"></span></button>
				</span> -->
			</h4>
		</div>
		<div id="requestResourceFlow" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingRequestFlow">
			<div class="panel-body">
				 <div id="requestResourceFlowChart" style="width:100%;height:300px;" ></div>
			</div>
		</div>
	</div>
	
	 <div class="panel panel-default"  style="width:48%;float: left;" >
		<div class="panel-heading" role="tab" id="headingProvideCount">
			<h4 class="panel-title">
				<a role="button"  data-toggle="collapse"  href="#provideResourceCount" aria-expanded="true" aria-controls="provideResourceCount">
				提供资源数量统计</a>
				<!-- <span style="margin-top:-0.5%;float: right;position: relative;margin-right: 2%;">
					<button type="button" class="btn btn-primary btn-sm" onclick="">导出数据</button>
					<button type="button" class="btn btn-primary btn-sm" onclick="">昨天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近7天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近30天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">2017-11-12~2017-12-30 &nbsp;<span class="glyphicon glyphicon-calendar"></span></button>
				</span> -->
			</h4>
		</div>
		<div id="provideResourceCount" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingProvideCount">
			<div class="panel-body">
				<div id="provideResourceCountChart" style="width:100%;height:300px;" ></div>
				</div>
			</div>
		</div>
	
	 <div class="panel panel-default"  style="width:48%;float:right;" >
		<div class="panel-heading" role="tab" id="headingProvideFlow">
			<h4 class="panel-title">
				<a role="button"  data-toggle="collapse" href="#provideResourceFlow" aria-expanded="true" aria-controls="provideResourceFlow">
				提供资源流量统计
				</a>
				<!-- <span style="margin-top:-0.5%;float: right;position: relative;margin-right: 2%;">
					<button type="button" class="btn btn-primary btn-sm" onclick="">导出数据</button>
					<button type="button" class="btn btn-primary btn-sm" onclick="">昨天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近7天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">最近30天</button> 
					<button type="button" class="btn btn-primary btn-sm" onclick="">2017-11-12~2017-12-30 &nbsp;<span class="glyphicon glyphicon-calendar"></span></button>
				</span> -->
			</h4>
		</div>
		<div id="provideResourceFlow" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingProvideFlow">
			<div class="panel-body">
				<div id="provideResourceFlowChart" style="width:100%;height:300px;" ></div>
			</div>
		</div>
	</div>
	</div>
</body>
</html>