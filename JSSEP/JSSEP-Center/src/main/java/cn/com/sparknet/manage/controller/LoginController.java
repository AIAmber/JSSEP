package cn.com.sparknet.manage.controller;

import java.awt.image.BufferedImage;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.octo.captcha.service.CaptchaServiceException;

import cn.com.sparknet.common.config.Config;
import cn.com.sparknet.common.json.EditJson;
import cn.com.sparknet.common.util.StringUtil;
import cn.com.sparknet.manage.captcha.CaptchaServiceSingleton;

/**
 * 系统登录
 * @author chenxy
 *
 */
@Controller
@RequestMapping("/LoginController")
public class LoginController {
	
/*	@Resource
	private LoginService loginService;*/
	
	/**
	 * 获取验证码
	 */
	@RequestMapping("/getCaptcha")
	public void getCaptcha(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ServletOutputStream out = null;
		try {
			response.setHeader("Cache-Control", "no-store");
			response.setHeader("Pragma", "no-cache");
			response.setDateHeader("Expires", 0);
			response.setContentType("image/jpeg");
			out = response.getOutputStream();
			String captchaId = request.getSession(true).getId();
			BufferedImage challenge = (BufferedImage) CaptchaServiceSingleton.getInstance().getChallengeForID(captchaId,request.getLocale());
			ImageIO.write(challenge, "jpg", out);
			out.flush();
		} catch (CaptchaServiceException e) {
			throw new CaptchaServiceException(e.getMessage(),e);
		} finally {
			out.close();
			out=null;
		}
	}
	
	/**
	 * 登录系统
	 */
	@ResponseBody
	@RequestMapping("/login")
	public void login(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpSession session=request.getSession();
		if (!request.getMethod().equals("POST")) {
			this.sendRedirect(false, "来自不安全的网站登录", session, request, response);
		}else{
			//校验验证码
			Boolean isCorrect = true;
			String systemCaptcha = Config.getInstance().getProperty("manage.system.captcha");
			if(systemCaptcha.equals("true")){
				String captcha=StringUtil.nullToEmpty(request.getParameter("c"));
				try{
					isCorrect = CaptchaServiceSingleton.getInstance().validateResponseForID(session.getId(), captcha);
				} catch (CaptchaServiceException e){
					this.sendRedirect(false, "验证码已过期，请重新输入", session, request, response);
				}
			}
			if(isCorrect){
				//解决会话标识未更新漏洞
				if(null!=session){
					session.invalidate();
				}
				Cookie[] cookies=request.getCookies();
				if(null!=cookies){
					cookies[0].setMaxAge(0);
				}
				session=request.getSession(true);
				//账号校验
				String username=StringUtil.nullToEmpty(request.getParameter("u"));
				String password=StringUtil.nullToEmpty(request.getParameter("p"));
				//EditJson editJson=loginService.loginSystem(request, session, username, password);
				EditJson editJson = null;
				//if(editJson.isSuccess()){
				if(true){
					this.sendRedirect(true, null, session, request, response);
				}else{
					this.sendRedirect(false, editJson.getBean().toString(), session, request, response);
				}
			}else{
				this.sendRedirect(false, "验证码错误，请重新输入", session, request, response);
			}
		}
	}
	
	/**
	 * 页面跳转
	 */
	private void sendRedirect(boolean success,String errorinfo,HttpSession session,HttpServletRequest request, HttpServletResponse response) throws Exception {
		if(success){//跳转到首页
			session.removeAttribute("errorinfo");
			response.sendRedirect(request.getContextPath()+"/index.jsp#/home");
		}else{//跳转到登录页
			session.setAttribute("errorinfo", "<img src=\""+request.getContextPath()+"/login/images/error.png\"/> "+errorinfo);
			response.sendRedirect(request.getContextPath()+"/login.jsp");
		}
	}
	
	/**
	 * 注销系统
	 */
	@RequestMapping("/loginOut")
	public void loginOut(HttpServletRequest request,HttpServletResponse response) {
		try{
			HttpSession session=request.getSession();
			if(null!=session){
				session.removeAttribute("sessionBean");
				session.invalidate();
			}
			response.sendRedirect(request.getContextPath()+"/login.jsp");
		}catch(Exception e){
			throw new RuntimeException(e.getMessage(),e);
		}
	}

}
