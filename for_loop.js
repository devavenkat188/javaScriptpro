<html>
    <head>
        <style>
            body {
                padding-top: 10px;
            }
        </style>
    </head>
	<body class="container-fluid">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3>For Loop</h3>
			</div>
			<div class="panel-body">
				<script>
                   var loopVar = 0;
                   
                   var courses = ["HTML", "CSS", "JS", "Bootstrap", "Angular", "ReactJS"];
                   
                   for(loopVar=0;loopVar<courses.length;loopVar++)
                   {
                     document.write(courses[loopVar]);
                     document.write("<br/>");
                   }
				</script>
			</div>
		</div>
	</body>
</html>