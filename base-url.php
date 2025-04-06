<?php
	function home_base_url(){   
		$base_url = (isset($_SERVER['HTTPS']) &&
		$_SERVER['HTTPS']!='off') ? 'https://' : 'http://';
		$tmpURL = dirname(__FILE__);
		$tmpURL = str_replace(chr(92),'/',$tmpURL);
		$tmpURL = str_replace($_SERVER['DOCUMENT_ROOT'],'',$tmpURL);
		$tmpURL = ltrim($tmpURL,'/');
		$tmpURL = rtrim($tmpURL, '/');
		if (strpos($tmpURL,'/')){
			$tmpURL = explode('/',$tmpURL);
			$tmpURL = $tmpURL[0];
		}
		if ($tmpURL !== $_SERVER['HTTP_HOST'])
			$base_url .= $_SERVER['HTTP_HOST'].'/'.$tmpURL;		//		=>.'/'
		else
			$base_url .= $tmpURL;								//		=> .'/'
		return $base_url; 
	}
	$baseUrl = home_base_url();
?>