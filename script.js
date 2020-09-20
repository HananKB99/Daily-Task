

 
 function  add(){
	
	if(	$('#input-task').val()===""){
		alert("“You must write something!”")

	}
	else {

	var task=$('#list').append("<li>" + $('#input-task').val() + "</li>");
	$('#input-task').val("")

		 	}
        }

$("#add-task").on("click", function(){
    add()
  })



