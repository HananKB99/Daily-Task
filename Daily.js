//function sum (){
//	return "g"
//}
//document.getElementById("newTaskForm");\







function add(){
	if(	$('#taskname').val()===""){
				alert("“You must write something!”")

			}
			else {
			var task=	$('#list').append("<li>" + $('#taskname').val() + "</li>");
				$('#taskname').val("")
		  	}
}

$("#addButton").on("click", function(){
    add()
  })
