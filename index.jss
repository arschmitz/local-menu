<!DOCTYPE html>
<html class="ui-mobile">
<head>
	<title>Local Sites</title>
	<meta charset=utf-8 />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		.ui-mobile,
		.ui-mobile body {
			height: 99.9%;
		}
		.ui-mobile-viewport {
			margin: 0;
			overflow-x: visible;
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust:none;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}
		body.ui-mobile-viewport {
			overflow-x: hidden;
		}
		.ui-page {
			top: 0;
			left: 0;
			width: 100%;
			min-height: 100%;
			position: absolute;
			display: none;
			border: 0;
		}
		.ui-mobile .ui-page-active {
			display: block;
			overflow: visible;
			overflow-x: hidden;
		}
		@media screen and (orientation: portrait) {
			.ui-mobile .ui-page {
				min-height: 420px;
			}
		}
		@media screen and (orientation: landscape) {
			.ui-mobile .ui-page {
				min-height: 300px;
			}
		}

	 .ui-body {
			position: relative;
			padding: .4em 1em;
			overflow: hidden;
			display: block;
			clear: both;
		}
		.ui-header{
			border-width: 1px 0;
			border-style: solid;
			position: relative;
		}
		.ui-content {
			border-width: 0;
			overflow: visible;
			overflow-x: hidden;
			padding: 1em;
		}
		.ui-btn {
			font-size: 16px;
			margin: .5em 0;
			padding: .7em 1em;
			display: block;
			position: relative;
			text-align: center;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			cursor: pointer;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		.ui-listview,
		.ui-listview > li {
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.ui-content .ui-listview{
			margin: -1em;
		}
		.ui-listview > li {
			display: block;
			position: relative;
			overflow: visible;
		}
		.ui-listview > li > a.ui-btn {
			margin: 0;
			display: block;
			position: relative;
			text-align: left;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		.ui-listview > li > a.ui-btn {
			border-width: 1px 0 0 0;
			border-style: solid;
		}

		.ui-listview > li h1 {
			font-size: 1em;
			font-weight: bold;
			display: block;
			margin: .45em 0;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		body,
		.ui-btn {
			font-size: 1em;
			line-height: 1.3;
			font-family: sans-serif;
		}
		.ui-btn {
			font-weight: bold;
			border-width: 1px;
			border-style: solid;
		}
		.ui-btn:link {
			text-decoration: none !important;
		}

	 .ui-page-theme-a .ui-bar-inherit {
			background: #e9e9e9;
			border-color: #ddd;
			color: #333;
			text-shadow: 0 1px 0 #eee;
			font-weight: bold;
		}
		.ui-page-theme-a {
			background: #f9f9f9;
			border-color: #bbb;
			color: #333;
			text-shadow: 0 1px 0 #f3f3f3;
		}

		.ui-body-a {
			border-width: 1px;
			border-style: solid;
		}
		.ui-page-theme-a a:visited {
				color: #3388cc;
		}
		.ui-page-theme-a {
			color: #005599;
		}
		.ui-page-theme-a a:active {
			color: #005599;
		}
		.ui-page-theme-a .ui-btn,
		.ui-page-theme-a .ui-btn:visited{
			background: #f6f6f6;
			border-color: #ddd;
			color: #333 ;
			text-shadow: 0 1px 0 #f3f3f3;
		}
		.ui-header .ui-title{
			font-size: 1em;
			min-height: 1.1em;
			text-align: center;
			display: block;
			margin: 0 30%;
			padding: .7em 0;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			outline: 0 !important;
		}
	</style>
</head>
<body class="ui-mobile-viewport ui-overlay-a">
 <div class="ui-page ui-page-theme-a ui-page-active">

	<div class="ui-header ui-bar-inherit">
		<h1 class="ui-title">Local Sites</h1>
	</div>
	<div class="ui-content">
		<ul class="ui-listview">
<?
	var command = "ipconfig getifaddr en0",
			spawn = require('child_process').spawn,
			fs = require( "fs" ),
			files = fs.readdirSync( mapPath( '../' ) ),
			os = require('os'),
			interfaces = os.networkInterfaces(),
			addresses = [];
	for (var k in interfaces) {
	    for (var k2 in interfaces[k]) {
	        var address = interfaces[k][k2];
	        if (address.family === 'IPv4' && !address.internal) {
	            addresses.push(address.address);
	        }
	    }
	}
	var ip = request.headers.host.split(".")
	ip.pop()
	ip.pop()
	ip.shift()
	ip = ip.join(".")
	var http = require('http');

	http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
	  resp.on('data', function(ip) {
	    files.forEach(function( file ){
		if( file !== "index.php" && !/\.html|\.php|\.js|DS|\.log|\.json|\.css/.test( file) ){
			write( "<li><a class='ui-btn' href='http://" + file + "." + ip + ".xip.io'><h1>" + file + "</h1></a></li>" );
		}
		
	});?>
		</ul>
		 </div><!-- /content -->
		</body>
		</html><?
	  });
	});
	?>
