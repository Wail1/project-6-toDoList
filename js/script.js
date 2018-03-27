var input = document.getElementById("input");
var btn = document.getElementById("btn");
var toDoList = document.getElementById("todo-list");
var index = document.getElementsByClassName("index");
var list = [];

btn.addEventListener("click", function(){

        if(input.value != ""){

          list.push(input.value);   //قم بتخزين المهمة في المصفوفة
          toDoList.innerHTML  += '<li class="index" onclick="done(this.id)" id="'+(list.length-1)+'">' + list[list.length-1] + "</li>";   // قم بإضافتها للقائمة
          input.value = "";   // قم بتفريغ حقل الإدخال

          localStorage["tasks"] = JSON.stringify(list);

      }


});
function done(id){
   // سيتم تنفيذ الأوامر التي هنا بمجرد إستدعاء هذه الدالة ولا يتم إستدعائها الإ بالضغط على احد العناصر
   index[id].classList.toggle("checked");
};
/*
    // فقط اذا اردت معرفة طريقة عمل ما سبق وقمنا به دون إستخدام الـ inline events
for(var i = 0 ; i < index.length ; i++){

	index[i].addEventListener("click",function(){

		index[this.id].classList.toggle("checked");

	});
};
*/
input.addEventListener("keydown", function() {
   // سيتم تنفيذ هذه الأوامر في حال الضغط على أي مفتاح في لوحة المفاتيح
         if (event.keyCode === 13) {
          //سيتم تنفيذ هذه الاوامر عند الضغط على المفتاح انتر من لوحة المفاتيح
          btn.click();
      }
});

if("tasks" in localStorage){

	var retrievedTasks = localStorage.getItem("tasks");

	list = JSON.parse(retrievedTasks);

  for(var i=0; i<list.length ; i++){
		toDoList.innerHTML  += '<li class="index"  onclick="done(this.id)" id="'+ i +'">' + list[i] +"</li>";
	}
}
