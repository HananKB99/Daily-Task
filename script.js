//when we click the add button the values will be saved in variables and display below in a list
$("#add-task").on("click", function(){
	
	// if the input text is empty alert will show up
   if(	$('#input-task').val()===""){
		alert("“You must write something!”")
    }else{
		//the task name will be saved in a variable called task
		var task = $("#input-task").val()
		$("#list").append("<li class='taskc'> "+ task +" </li>")
		
		//the task description will be saved in a variable called desc
		var desc = $("#input-desc").val()
		$("#list").append(desc+"<br>")
		
		
		var date = $("#date").val()
		$("#list").append( date)
//		
		$("#list").append("<input type='button' id='done' value='done' onclick='ddelet()'>")

		
		
		console.log(task)
	}
	
	
  })
function ddelet(){

document.getElementsByClassName('taskc').style.textDecoration="line-through";

}
////
// var x = $("#list").append("<button > done </button>"+"<br><br>")
//

