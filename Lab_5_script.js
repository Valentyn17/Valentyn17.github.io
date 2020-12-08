let centre_block=document.querySelector(".centreblock").innerHTML;
let workspace=document.querySelector(".centreblock");
let form=document.querySelector(".event_log");




function building_workspace() {
    form.style.display="none";
    localStorage.clear();
    workspace.innerHTML="";
    workspace.style.display="flex";
    
    let anim=document.createElement("div");
    anim.className="anim";
    workspace.appendChild(anim);
    
    let div=document.createElement("div");
    div.className=("controls");
    div.setAttribute("style","display: flex; justify-content:flex-end; width: 40%; text-align:left;");
    workspace.insertBefore(div, anim); 

    let div_text=document.createElement("div");
    div_text.className=("controls_text");
    div_text.setAttribute("style","display: flex; width: 60%; text-align:left;");
    workspace.insertBefore(div_text, div); 

    let start=document.createElement("button");
    start.className="start_btn";
    start.innerText="START";
    start.setAttribute("type", "submit");
    start.setAttribute("style", "display: flex; justify-content: flex-end; align-items: flex-start; width: auto; height: 20px;");
    div.appendChild(start);

    start.onclick=()=>{     
        square1.style.animationPlayState="running";
        square2.style.animationPlayState="running";

        start.style.display="none";
        stop.style.display="flex";

        square1.classList.add("moving_square1");
        square2.classList.add("moving_square2");

        div_text.innerText="animation started!";
        add_to_local_storage("animation started!");

        const animation1=document.querySelector(".moving_square1");
        const animation2=document.querySelector(".moving_square2");
      /*   if(Math.abs(square2.offsetWidth-square1.offsetWidth)<10 && Math.abs(square2.offsetHeight-square1.offsetHeight)<10)
        {
            add_to_local_storage("square2 cover square1");
            square1.style.animationPlayState="paused";
            square2.style.animationPlayState="paused";
            stop.style.display="none";
            reload.style.display="flex";
            div_text.innerText="animation stopped!";
            add_to_local_storage("animation stopped!");
        }*/
        animation1.addEventListener('animationiteration', ()=> {
        div_text.innerText="square1 touched wall"; 
        add_to_local_storage("square1 touched wall");
        });
        animation2.addEventListener('animationiteration', ()=> {
        div_text.innerText="square2 touched wall"; 
        add_to_local_storage("square2 touched wall");
       
        });
    }
    
   
    let stop=document.createElement("button");
    stop.className="stop_btn";
    stop.innerText="STOP";
    stop.setAttribute("type", "submit");
    stop.setAttribute("style", "display: none; justify-content: flex-end; align-items: flex-start; width: auto; height: 20px;");
    stop.onclick=()=>{     
        square1.style.animationPlayState="paused";
        square2.style.animationPlayState="paused";
        stop.style.display="none";
        reload.style.display="flex";
        div_text.innerText="animation stopped!";
        add_to_local_storage("animation stopped!");
    }
    div.appendChild(stop);


    let reload=document.createElement("button");
    reload.className="reload_btn";
    reload.innerText="RELOAD";
    reload.setAttribute("type", "submit");
    reload.setAttribute("style", "display: none; justify-content: flex-end; align-items: flex-start; width: auto; height: 20px;");
    reload.onclick=()=>{     
    
        square1.style.left=0;
        square2.style.top=0;
        square1.classList.remove("moving_square1");
        square2.classList.remove("moving_square2");
        start.style.display="flex";
        reload.style.display="none";
        div_text.innerText="animation reloaded!";
        add_to_local_storage("animation reloaded!");
    }
    div.appendChild(reload);

    


    let close=document.createElement("button");
    close.className="close_btn";
    close.innerText="CLOSE";
    close.setAttribute("type", "submit");
    close.setAttribute("style", "display: block; justify-content: flex-end; align-items: flex-start; width: auto; height: 20px;");
    close.onclick=()=>{     
       workspace.innerHTML=centre_block;
       workspace.className=("centreblock");
       workspace.style.display="grid";
       form.style.display="block";
       form.innerHTML=localStorage.getItem("event");
    }
    div.appendChild(close);

    let square1 = document.createElement("div");
    square1.className="square1";
    anim.appendChild(square1);
    let square2 = document.createElement("div");
    square2.className="square2";
    anim.appendChild(square2);
}



function add_to_local_storage(information)
{
    let existing=localStorage.getItem("event");
    existing = existing ? existing.split(',') : [];// If no existing data, create an array
    let time = new Date(Date.now());
    // Add new data to localStorage Array
    existing.push("<br>"+information+" time:"+ time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());

    // Save back to localStorage
    localStorage.setItem('event', existing.toString());
}


function building_canvas()
{
    document.querySelector(".play_button").style.display="none";
    form.style.display="none";
    localStorage.clear();
    add_to_local_storage("animation started!");
    workspace.innerHTML="";
    let canvas=document.createElement("canvas"); 
    canvas.className="canvas";
    workspace.appendChild(canvas);
    canvas.width=workspace.clientWidth;
    canvas.height=workspace.clientHeight;
    let width=canvas.width;
    let height=canvas.height;
    let x1=0,
        y1=canvas.height/2,
        y2=0,
        x2=canvas.width/2;
    let interval1=1;
    let interval2=1;
    let ctx = canvas.getContext('2d');
       
   let a= setInterval( ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        
        
        ctx.fillStyle="green";
        ctx.fillRect(x2, y2, 20,20);
        ctx.rect(x2, y2, 20,20);
        ctx.fillStyle="red";
        ctx.rect(x1, y1, 10, 10);
        ctx.fillRect(x1,y1,10,10);
        y2+=interval2;
        x1 += interval1; 
        if(x1<0 || x1>width-10)
        {
            interval1*=-1;
            add_to_local_storage("square1 touched wall");
        } 
        if(y2<0 || y2>height-10)
        { 
            interval2*=-1;
            add_to_local_storage("square2 touched wall");
        } 
        if(Math.abs(y2-y1)<10 && Math.abs(x2-x1)<10)
        {
            clearInterval(a);
            add_to_local_storage("square2 cover square1")
            stopping();
        }
        
    }, 2);

    let stop=document.querySelector(".stop");
    stop.style.display="block";
   
    
    document.querySelector(".leftblock").appendChild(stop); 

}


function stopping(){
    document.querySelector(".stop").style.display="none";
    workspace.innerHTML=centre_block;
    add_to_local_storage("animation stopped");
    workspace.className=("centreblock");
    workspace.style.display="grid";
    form.style.display="block";
    form.innerHTML=localStorage.getItem("event");
    document.querySelector(".play_button").style.display="block";
}

    