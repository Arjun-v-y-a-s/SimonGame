
let userSeq=[];
let gameSeq=[];

let btns=["pink","sky","yellow","blue"];

let h2=document.querySelector("h2");

let started=false;
let level=0;


document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game was started");
    started=true;
  };
  levelUp();
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);

}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);

}

function levelUp(){
 userSeq=[];
  level++;
  h2.innerText=(`level ${level}`);

  let randIdx=Math.floor(Math.random()*4);
  let randColor=btns[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log( ` gameSeq ${gameSeq}`);
  gameFlash(randBtn);
}


function check(idx){
if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
      return;
    };
    return;
  }else {
    for (let i=0;i<userSeq.length;i++){
      if(userSeq[i]!==gameSeq[i]){  
      h2.innerHTML = `GAME OVER !<b> your score was ${level} </b> <br> press any key to start </br>`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"},300);
      reset();
      }
    }
  }
}


function btnPress(){
  let btn=this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(`userSeq ${userSeq}`);

  check(level-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  userSeq=[];
  gameSeq=[];
  level=0;
}