<?php
/**
 * 前端首页控制器
 * @author Administrator
 *
 */
class IndexAction extends Action{
	
	/**
	 *首页视图
	 */
	public function index(){
			/**
		  * wechat php test
		  */
		
		//define your token
		define("TOKEN", "BlogsoToken");
		$wechatObj = new CommonAction();
// 		$wechatObj->valid();
		$wechatObj->responseMsg();
	}
}

