let time =2000;
let block1 = document.querySelector(".block1"),
block2=document.querySelector(".block2"),
block_3=document.querySelector(".centreblock"),
block4=document.querySelector(".block4"),
block5=document.querySelector(".block5"),
block6=document.querySelector(".block6");
let b1=block1.innerHTML,
    b2=block2.innerHTML,
    b3=block_3.innerHTML,
    b4=block4.innerHTML,
    b5=block5.innerHTML,
    b6=block6.innerHTML;

function task1()
{
setTimeout(function(){
   block2.innerHTML=b1;
   },time);
time+=2000;
setTimeout(function(){
   block_3.innerHTML=b2;
   
   },time);
time+=2000;
setTimeout(function(){
   block4.innerHTML=b3;
   },time);
time+=2000;
setTimeout(function(){
   block5.innerHTML=b4;
   },time);
time+=2000;
setTimeout(function(){
   block6.innerHTML=b5;
   },time);
time+=2000;
setTimeout(function(){
   block1.innerHTML=b6;
   },time);
time+=2000; 
}

function task2()
{
   let func = setInterval(() => {
      if (document.querySelector(".block4").style.color == "black"){
         document.querySelector(".block4").style.color = "red";
      } else {
         document.querySelector(".block4").style.color = "black";
      }
  }, 5000);
  document.querySelector(".logo").addEventListener('mouseover',function(){
   document.querySelector(".logo").innerHTML="Hello!"
   setTimeout(function (){if (document.querySelector(".block1").style.color == "black"){
      document.querySelector(".block1").style.color = "green";
   } else {
      document.querySelector(".block1").style.color = "black";
   }}, 5000);
   
  });
  document.querySelector(".logo").addEventListener('mouseout',function(){
   document.querySelector(".logo").innerHTML="Футбол";  
});
}

function form_for_commits()
{
   let form=document.querySelector(".git_task");
   document.querySelector(".git_error").style.display='none';
   form.style.display='block';
   form.style.background='white';
   
   return form;
}

function form_for_error()
{
   let form=document.querySelector(".git_error");
   document.querySelector(".git_task").style.display='none';
   form.style.display='block';
   form.style.background='red';
   form.style.height='100px';
   
   return form;
}

async function task3()
{
   let name=document.getElementById("1").value;
   let repos_name=document.getElementById("2").value;
   let url='https://api.github.com/repos/'+name+'/'+repos_name+'/commits';
   let response= await fetch(url);
   if(response.ok)
   {
   let form=form_for_commits();
   let commits = await response.json();
   commits.forEach(item => {
      let li = document.createElement('li');
      let str = item.commit.author.name + ": " + item.commit.message;
      li.innerHTML = str;
      form.appendChild(li);

   });
}
   else
   {
      let form=form_for_error();
      form.textContent='Error :  '+response.statusText;
      let button=document.createElement("button");
      button.textContent="OK";
      button.addEventListener("click", ()=>{form.style.display="none";});
      form.appendChild(button);
   }
}

  
let y = function(callback){
   console.log("It's 1");
   callback();
};

let z = function(){
   console.log("It's 2");
};



function task4(callback1, callback2){
   callback1(callback2);
}

task4( y, z);


function selection_sort(array)
{  

   let k;
   for (let i = 0; i < array.length; i++)
   {  
      let min=array[i];
      for (let j = i; j < array.length; j++) {
      if(array[j]<=min)
      {
         min=array[j];
         k=j;
      }
      }
      array[k]=array[i];
      array[i]=min;
   }
   return array;
}



function task5()
{
   let user_text=document.getElementById("arr").value.match(/\-?\d+\.?\d*/g).map(Number);
  alert(selection_sort(user_text));
}





task1();
task2();
