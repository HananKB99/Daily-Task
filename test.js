// this function should put a line through the task that was finished
//not workink
function  ddelet(){
	
//document.getElementsById(`taskc${j}`).style.textDecoration="line-through";
	$(`#taskc${j}`).attr("class","donetask")
	console.log($(`#taskc${j}`))
	j++
}
let j = 0;

//when we click the add button the values will be saved in variables and display below in a list
$('#add-task').on('click', function(){
	
	// if the input text is empty alert will show up
   if(	$('#input-task').val()===""){
		alert("“You must write something!”")
    }else{
		
		//the task timing
		var min =  $("#min").val()
		var houre = $("#houre").val()
		$("#list").append("<br><br>"+houre+":"+min)
		
		
		//the task name will be saved in a variable called task
		var task = $("#input-task").val()
		$("#list").append(`<br><b id='taskc${j}'>  ${task}  </b>`)
		
		
		//the task description will be saved in a variable called desc
		var desc = $("#input-desc").val()
		$("#list").append("<br>"+desc+"<br><br>")
//		$desc.attr("class","descc")
		
		
//		this button should put a line through the task that was finished
		$("#list").append(`<input type="button" id="done${j}" class="doneclass" value="done" onclick="ddelet()">`)
	}

  })



// this function should clear and delete all the task when we click on clear all the tasks button
//not workink
$('#clear').on('click', function(){
	$("#list").remove();
	
 }
)

//hours array
var theHours= h()

var hours = $('#houre');
$.each(theHours, function(val) {
    hours.append(
        $('<option>' + val + ' </option>')
    );
});

//minutes array
var themin = min()
var miin = $('#min');
$.each(themin, function(val) {
    miin.append(
        $('<option>' + val + ' </option>')
    );
});
//creatin hours
function h (){
	var arr = []
	for(var i = 1; i<=24 ; i++){
	arr.push(i)
	
	}
	return arr
}

//creating minutes
function min(){
var arr = []
	for(var i = 1; i<=60 ; i++){
	arr.push(i)
	
	}
	return arr
}

				  









