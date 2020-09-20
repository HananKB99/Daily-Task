
$("#add-task").on("click", function(){
   if(	$('#input-task').val()===""){
		alert("“You must write something!”")
    }else{
		var task = $("#input-task").val()
		$("#list").append("<li> "+ task +" </li>")
		var desc = $("#input-desc").val()
		$("#list").append(desc+"<br>")
		var date = $("#date").val()
		$("#list").append( date)
//		$("#list").append("<button > done </button>"+"<br><br>")
//		$tweet.attr("class", "users")
		$("#list").append("<input type='button' id='done' value='done' onclick='ddelete()'>")

		
		
		console.log(task)
	}
	
	
  })
function ddelete (){

  document.getElementById("done").style.textDecoration = " line-through";;


}
////
// var x = $("#list").append("<button > done </button>"+"<br><br>")
//'
/*
$("#done").on("click", function(){
	  document.getElementsById("tassk").style.textDecoration = " line-through";

}
//function ddelete (){
//
//  document.getElementsByName("li").style.textDecoration = " line-through";
//
//
//}
////
// var x = $("#list").append("<button > done </button>"+"<br><br>")
//


