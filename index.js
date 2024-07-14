let choice=document.querySelectorAll("#bt");
let win=document.querySelector("#winner");
let cW=document.querySelector("#cW");
let uW=document.querySelector("#uW")

let arr=["rock","paper","scissor"];
let rand=Math.floor(Math.random() * 3);
let compCh=(arr[rand]);
console.log(compCh)

let user=0;
let comp=0;

choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        let userCh=ch.getAttribute("class");
        console.log(userCh);
        let userWin;
        if (compCh===userCh)
        {
            win.textContent="Draw";
            return;
        }
        else if(userCh=="rock")
        {
            //compCh=scissor,paper
            if(compCh=="scissor")
            {
                userWin=true;
                user++;
            }
            else{
                userWin=false;
                comp++;
            }
        }
        else if(userCh=="paper")
        {
            //compCh=scissor,rock
            if(compCh=="rock")
            {
                userWin=true;
                user++;
            }
            else{
                userWin=false;
                comp++;
            }
        }
        else if(userCh=="scissor")
        {
            //compCh=rock,paper
            if(compCh=="paper")
            {
                userWin=true;
                user++;
            }
            else{
                userWin=false;
                comp++;
            }
        }

        if(userWin)
        {
            win.textContent="User wins";
            uW.textContent=user;
        }
        else if (compWin){
            win.textContent="Computer wins";
            cW.textContent=comp;
        }
    });
});

