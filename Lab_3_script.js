 let text_content=document.querySelector(".content1_main"),
     text_content2=document.querySelector(".content1");
let remove=false;
let containerForm=document.querySelector(".content_main_form");
let block1 = document.querySelector(".block1"),
    block2=document.querySelector(".block2"),
    block_3=document.querySelector(".centreblock"),
    block4=document.querySelector(".block4"),
    block5=document.querySelector(".block5"),
    block6=document.querySelector(".block6"),
    Btn_Submit_3 = document.getElementById("Btn_Submit_3"),
    btnClearText_3 = document.getElementById("btnClearText_3");
    Btn_Submit_2 = document.getElementById("Btn_Submit_2"),
    btnClearText_2 = document.getElementById("btnClearText_2");
containerForm.style.display = 'none';


function task1 () {

let b1=block1.innerHTML;
block1.innerHTML=block6.innerHTML;
block6.innerHTML=b1;
}

function task2()
{
    let a=5, 
        h=6;
    let block3=document.querySelector(".centreblock");
    let div=document.createElement('div');
    div.textContent = "S = " + (a*h/2).toFixed(2);
        div.style.textAlign = "center";
        block3.appendChild(div);
}

if (!sessionStorage.getItem("confirmed")){
    if(!remove){
        if (document.cookie.match("result=.+[^\;]")) {
            remove = confirm(document.cookie.match("result=.+[^\;]") + "\nDo you want to remove cookies?");
            if (remove) {
                document.cookie = encodeURIComponent("result") + '=;'; 
                document.location.reload();
            } else {
                sessionStorage.setItem("confirmed", true);
                alert("notification of availability of cookies! \nYou need to reload page!");
            }
        } else {
            containerForm.style.display = 'block';
        }
    }
}
function task3()
{
    let result;
    let btn_centre=document.querySelector(".content_button");
     function res_func()
    {
     let a=Number(document.getElementById('1').value);
     
     let b=Number(document.getElementById('2').value);
     let c=Number(document.getElementById('3').value);
     
    if(b+c>a && a+b>c && a+c>b)
    {
    result="Triangle can be build";
    document.cookie = encodeURIComponent("result") + '=' + encodeURIComponent(result);
    alert(result);
     }else
    {
        result="Triangle can't be build";
        document.cookie = encodeURIComponent("result") + '=' + encodeURIComponent(result);
    alert(result);
     }
}
    btn_centre.addEventListener('click', res_func)

}

function task5()
{
    let content=document.querySelector(".content_centre");
    function changing  (){
        content.innerHTML="Hello!!";
    }
    function changing2(){
        content.innerHTML="Футбол";
    }
content.addEventListener('mouseover', changing);
content.addEventListener('mouseout', changing2);
}

window.addEventListener('load', load_cursive);
function load_cursive()
{
if(localStorage.fontStyle!=null)
text_content.style.fontStyle=localStorage.fontStyle;
}

function task4()
{
  btn_italic=document.querySelector(".text_change");
  btn_italic.onclick = () => {
    localStorage.setItem('fontStyle', 'italic');
    load_cursive();}
  btn_norm=document.querySelector(".text_change2");
  btn_norm.onclick = () => {
    localStorage.setItem('fontStyle', 'normal');
    load_cursive();
  }
}

let text2=document.querySelector(".content1");
function Load_Text_2() {
    if(localStorage.text_2){
      text2.innerHTML += localStorage.text_2 + "\n";
    }
    else
    {
       text2.innerHTML=text_content2.innerHTML;
    }
  }

  window.addEventListener('load', Load_Text_2);



let text=document.querySelector(".content1_main");
function Load_Text_3() {
    if(localStorage.text_3){
      text.innerHTML += localStorage.text_3 + "\n";
    }
    else
    {
       text.innerHTML=text_content.innerHTML;
    }
  }

  window.addEventListener('load', Load_Text_3);

function task6()
{
    Btn_Submit_3.onclick = () => {
        let User_Text = document.getElementById("inputUserText_3").value;
        if (User_Text != "") {
            localStorage.setItem('text_3', User_Text);
            Load_Text_3();
        }
      };
      btnClearText_3.onclick = () => {
        text.innerHTML=text_content.innerHTML;
        localStorage.removeItem('text_3');
        Load_Text_3();
      };

      Btn_Submit_2.onclick = () => {
        let User_Text2 = document.getElementById("inputUserText_2").value;
        if (User_Text2 != "") {
            localStorage.setItem('text_2', User_Text2);
            Load_Text_2();
        }
      };
      btnClearText_2.onclick = () => {
        text2.innerHTML=text_content2.innerHTML;
        localStorage.removeItem('text_2');
        Load_Text_2();
      };

}

task1();
task2();
task3();
task4();
task5();
task6();