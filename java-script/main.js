// const add = document.querySelector(".post .add");
// const arrayTag = [];
// add.onclick = addData;
// function addData(){
//     const data = document.querySelector(".post .taskInput");
//     if(data.value != "") {
//         const result = [] = `<li><input type="checkbox" class="checkbox"><span>${data.value}</span></li>`;
//          document.querySelector(".list-task ul").innerHTML  = result;  
//          data.value = '';
//          arrayTag.push(result);
//          console.log(arrayTag);
//           checkBoxOnclick(document.querySelectorAll(".checkbox")) ;
//     }
// }
// function checkBoxOnclick(e) {
//     console.log(e);
// e.onclick =  function (){
//     document.querySelector(".list .list-task span").classList.add("removeText");
//     console.log(e);
// }
// }


const add = document.querySelector(".add");
const taskInput = document.querySelector(".taskInput"); 
add.addEventListener("click" ,  function (){ 
    if(taskInput.value != ''){
        const result = `<li><input type="checkbox" class="checkbox"><span>${taskInput.value}</span></li>`;
        document.querySelector(".list-task ul").innerHTML  += result;  
        taskInput.value = '';
        }else{
            alert("Error: The text is empty. It is not added");
        }
      
        removeTask(document.querySelectorAll("li input"),document.querySelectorAll("li span"));
}  );
 function removeTask(e,even){
    for (let i=0;i<e.length;i++){
        e[i].addEventListener('change' ,function () {
            even[i].classList.add("removeText"); 
        });
    }
 }
 

 

