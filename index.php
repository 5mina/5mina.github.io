<!DOCTYPE html>

<html>

<head>
	<title>Hello</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre&family=Titillium+Web&family=Ubuntu+Condensed&display=swap" rel="stylesheet">
	<style>
		<?php 
		$css = file_get_contents('style.css');
		echo $css; ?>
	</style>
</head>

<body>
	<div class="head">
		FILEGROS
		<div class="date"><?php echo date("d/m/Y"); ?></div>
	</div>
	<div class="nav">
		<table>
			<tr>
				<td>LOGO</td>
				<td>MENU</td>
				<td>FORUMS</td>
				<td>MEDIA</td>
				<td>ACADS</td>
			</tr>
		</table>
	</div>
	<div class="boxes" style="display:none">
		<div class="box1"></div>
		<div class="box2"></div>
		<div class="box3"></div>
		<div class="box4"></div>
	</div>
</body>

</html>