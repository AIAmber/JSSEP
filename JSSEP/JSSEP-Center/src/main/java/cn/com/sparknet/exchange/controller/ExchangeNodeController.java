package cn.com.sparknet.exchange.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.sparknet.common.json.ListJson;

@Controller
@RequestMapping("/ExchangeNodeController")
public class ExchangeNodeController {
	
	static List<Map<String,String>> list = new ArrayList<Map<String,String>>();
	static{
		for(int i=1;i<=500;i++){
			 Map<String,String> map = new HashMap<String,String>();
			if(i%2==0){
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市公安局");
		   		 map.put("linkName", "公安局管理员");
		   		 map.put("linkPhone", "13814256325");
		   		 map.put("linkEmail", "123456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息的认证，相关个人历史信息的查询");
			}else if(i%3==0){
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市工商局");
		   		 map.put("linkName", "工商局管理员");
		   		 map.put("linkPhone", "15895623587");
		   		 map.put("linkEmail", "658456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息财务信息，相关个人历史信息的查询");
			}else if(i%5==0){
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市质监局");
		   		 map.put("linkName", "质监局管理员");
		   		 map.put("linkPhone", "15895623587");
		   		 map.put("linkEmail", "658456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息财务信息，相关个人历史信息的查询");
				
			}else if(i%7==0){
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市地税局");
		   		 map.put("linkName", "地税局管理员");
		   		 map.put("linkPhone", "15895623587");
		   		 map.put("linkEmail", "658456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息财务信息，相关个人历史信息的查询");
			}
			else if(i%9==0){
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市国税局");
		   		 map.put("linkName", "国税局管理员");
		   		 map.put("linkPhone", "15895623587");
		   		 map.put("linkEmail", "658456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息财务信息，相关个人历史信息的查询");
			}else{
				 map.put("id", i+"A");
		   		 map.put("orgCode", "100"+(i+1));
		   		 map.put("orgName", "市财政局");
		   		 map.put("linkName", "财政厅管理员");
		   		 map.put("linkPhone", "15895623587");
		   		 map.put("linkEmail", "658456789125@qq.com");
		   		 map.put("accessTime", "2018-12-13 02:33");
		   		 map.put("businessDescr", "个人信息财务信息，相关个人历史信息的查询");
			}
	   		list.add(map);
		}
	}
	@ResponseBody
	@RequestMapping("/findNodeInfo")
	public ListJson findNodeInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ListJson listJson=new ListJson();
		Integer pageSize = Integer.parseInt(request.getParameter("pageSize").toString());
		Integer pageNumber = Integer.parseInt(request.getParameter("pageNumber").toString());
		List<Map<String,String>> result = new ArrayList<Map<String,String>>();
		try{
			if(pageSize!=0){
				int crrentMax = pageNumber*pageSize>list.size()?list.size():pageNumber*pageSize;
				for(int i=((pageNumber-1)*pageSize);i<crrentMax ;i++){
					result.add(list.get(i));
	        	}
			}else{
        		result.addAll(list);
			}
        	listJson.setRows(result);
        	listJson.setTotal(list.size());
		}catch(Exception e){
        	throw new RuntimeException(e.getMessage(),e);
        }
		return listJson;
	}
	
	@ResponseBody
	@RequestMapping("/addNodeInfo")
	public ListJson addNodeInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ListJson listJson=new ListJson();
		try{
        	listJson.setRows(list);
        	listJson.setTotal(20);
		}catch(Exception e){
        	throw new RuntimeException(e.getMessage(),e);
        }
		return listJson;
	}
	
	@ResponseBody
	@RequestMapping("/editNodeInfo")
	public ListJson editNodeInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ListJson listJson=new ListJson();
		try{
        	for(int i=0;i<100;i++){
        		 Map<String,String> map = new HashMap<String,String>();
        		 map.put("ID", "1"+(i+1));
        		 map.put("ORD", ""+(i+1));
        		 map.put("orgCODE", "100"+(i+1));
        		 map.put("orgNAME", "公安局");
        		 map.put("USERNAME", "张三");
        		 map.put("MOBLE", "13814256325");
        		 map.put("EMAIL", "22935@qq.com");
        		 map.put("DATE", "2017/12/13");
        		 map.put("POSION", "站岗");
        		 list.add(map);
        	}
        	listJson.setRows(list);
        	listJson.setTotal(20);
		}catch(Exception e){
        	throw new RuntimeException(e.getMessage(),e);
        }
		return listJson;
	}
	@ResponseBody
	@RequestMapping("/deleNodeInfo")
	public ListJson deleNodeInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ListJson listJson=new ListJson();
		try{
		   String ID = request.getAttribute("ID").toString();
		   for(Map<String,String> map : list){
			   if(map.get("ID").toString().equals(ID)){
				   list.remove(map);
			   }
		   }
        	listJson.setRows(list);
        	listJson.setTotal(20);
		}catch(Exception e){
        	throw new RuntimeException(e.getMessage(),e);
        }
		return listJson;
	}

}
