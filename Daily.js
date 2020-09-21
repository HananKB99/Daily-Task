
function  ddelet(){
document.getElementsById("taskc").style.textDecoration="line-through";
}

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
			
//		$("#list").append( min+"<br>")
		
		
		//the task name will be saved in a variable called task
		var task = $("#input-task").val()
		$("#list").append("<br><b id='taskc'> "+ task +" </b>")
		
		
		
		
		
		//the task description will be saved in a variable called desc
		var desc = $("#input-desc").val()
		$("#list").append("<br>"+desc+"<br><br>")
//		$desc.attr("class","descc")
		
		

		
//		this button should put a line through the task that was finished
		$("#list").append('<input type="button" id="done" value="done" onclick="ddelet()">')
	}

  })
// this function should put a line through the task that was finished
//not workink


// this function should clear and delete all the task when we click on clear all the tasks button
//not workink



$('#clear').on('click', function(){
	$("#list").remove();
	
 }
)


var myOptions = {
    val1 : 1,
    val2 : 2,
    val3 : 3,
    val4 : 4,
    val5 : 5,
    val6 : 6,
    val7 : 7,
    val8 : 8,
    val9 : 9,
    val10 : 10,
    val11 : 11,
    val12 : 12,
    val13 : 13,
    val14 : 14,
    val15 : 15,
    val16 : 16,
    val17 : 17,
    val18 : 18,
    val19 : 19,
    val20 : 20,
    val21 : 21,
    val22 : 22,
    val23 : 23,
    val24 : 24
};
var hours = $('#houre');
$.each(myOptions, function(val, text) {
    hours.append(
        $('<option></option>').val(val).html(text)
    );
});
//
//function h (){
//	var obj={}
//	for(var i = 1; i<=24 ; i++){
//	for (var key in obj){
//		obj[key] = i
//	}
//	}
//	return obj
//	
//}
function min(){
	for (var i = 1; i<=24 ; i++){
		$("section").append("<option>"+desc+"</option>")
	}
}

//var taskArray =$('#list li')
//  var last=listitem[listitem.length -1]
//  if(listitem.length === 0){
//    alert("There are no tasks to remove!")
//  }
//  else
//  last.remove()
//}



				  









