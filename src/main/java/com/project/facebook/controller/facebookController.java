package com.project.facebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class facebookController {
	
	@GetMapping("/home")
	public String home()
	{
		return "fb_home";
	}
	
	@GetMapping("/login")
	public String login()
	{
		return "fb_login";
	}
	
	@GetMapping("/wrong_email")
	public String wrong_email()
	{
		return "fb_wrong_email";
	}
	
	@GetMapping("/wrong_password")
	public String wrong_password()
	{
		return "fb_wrong_password";
	}
}
