//when we click the add button the values will be saved in variables and display below in a list
$('#add-task').on('click', function(){
	
	// if the input text is empty alert will show up
   if(	$('#input-task').val()===""){
		alert("“You must write something!”")
    }else{
		
		//the task timing
		var houre = $("#houre").val()
		$("#list").append(houre+":")
			var min =  $("#min").val()
		$("#list").append( min+"<br>")
		
		
		//the task name will be saved in a variable called task
		var task = $("#input-task").val()
		$("#list").append("<li class='taskc'> "+ task +" </li>")
		
		
		
		
		//the task description will be saved in a variable called desc
		var desc = $("#input-desc").val()
		$("#list").append(desc+"<br>")
		
		
//		var date = $("#date").val()
//		$("#list").append( date)
		
//		this button should put a line through the task that was finished
		$("#list").append('<input type="button" id="done" value="done" onclick="ddelet()">')
	}

  })
// this function should put a line through the task that was finished
//not workink
function ddelet(){
document.getElementsByClassName('taskc').style.textDecoration="line-through";
}

// this function should clear and delete all the task when we click on clear all the tasks button
//not workink
function clear(){
	 $("#clear").click(function(){
    $("#divlist").remove();
  });
}