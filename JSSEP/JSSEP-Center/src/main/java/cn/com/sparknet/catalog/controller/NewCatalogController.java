package cn.com.sparknet.catalog.controller;

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
@RequestMapping("/newCatalogController")
public class NewCatalogController {
	
	static List<Map<String,String>> list = new ArrayList<Map<String,String>>();
	static{
		for(int i=1;i<=100;i++){
			Map<String,String> map = new HashMap<String,String>();
			if(i%2==0){
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30113412");
		   		 map.put("resourceProviderName", "市工商局");
		   		 map.put("linkName", "张三");
		   		 map.put("linkPhone", "13812345678");
		   		 map.put("linkEmail", "jsgs@js.gov.cn");
			}else if(i%3==0){
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30221254");
		   		 map.put("resourceProviderName", "市公安局");
		   		 map.put("linkName", "李四");
		   		 map.put("linkPhone", "13887654123");
		   		 map.put("linkEmail", "jsga@js.gov.cn");
			}else if(i%5==0){
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30224585");
		   		 map.put("resourceProviderName", "市国税局");
		   		 map.put("linkName", "王五");
		   		 map.put("linkPhone", "13856784123");
		   		 map.put("linkEmail", "jsgs@js.gov.cn");
			}else if(i%7==0){
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30124512");
		   		 map.put("resourceProviderName", "市经信委");
			   	 map.put("linkName", "赵六");
		   		 map.put("linkPhone", "12545561234");
		   		 map.put("linkEmail", "jsjxw@js.gov.cn");
			}else if(i%9==0){
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30126545");
		   		 map.put("resourceProviderName", "市财政局");
			   	 map.put("linkName", "赵六");
		   		 map.put("linkPhone", "13512345645");
		   		 map.put("linkEmail", "jsgt@js.gov.cn");
			}else{
				 map.put("id", i+"A");
		   		 map.put("resourceProviderCode", "30126535");
		   		 map.put("resourceProviderName", "市民政局");
		   		 map.put("linkName", "孙七");
		   		 map.put("linkPhone", "12545561234");
		   		 map.put("linkEmail", "jsfgw@js.gov.cn");
			}
	   		list.add(map);
		}
	}
	@ResponseBody
	@RequestMapping("/findResourceProviderInfo")
	public ListJson findResourceProviderInfo(HttpServletRequest request, HttpServletResponse response) throws Exception {
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
        		 map.put("DEPTCODE", "100"+(i+1));
        		 map.put("DEPTNAME", "公安局");
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
