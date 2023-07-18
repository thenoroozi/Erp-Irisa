const container = document.querySelector('#container');
window.onmousemove = function (event) {
    let x = event.clientX / 5;
    let y = event.clientY / 5;
    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";
}

//validation
const usernameInput=document.querySelector(".user-input");
const passwordInput=document.querySelector(".pass-input");
const accessbility=document.querySelector("#accessbility");

const usernameMsg=document.querySelector(".username-msg");
const passwordMsg=document.querySelector(".password-msg");
const accessbilityMsg=document.querySelector(".accessbility-msg");

const signinBtn=document.querySelector(".login");
const password=document.querySelector('.password');
const username=document.querySelector('.username');

window.addEventListener("load",LoadWindow);
signinBtn.addEventListener("click", signIn);

function LoadWindow (event){
   event.preventDefault();
   usernameInput.value="";
   accessbility.value=1;
}

function signIn(event) {
   event.preventDefault();
   usernameMsg.innerText="";
   passwordMsg.innerText="";
   accessbilityMsg.innerText="";
   const usernameValue = usernameInput.value;
   const passwordValue = passwordInput.value;
   const accessbilitValue = accessbility.value;
   let ifSendData=true;

   if(usernameValue.length===0){
      usernameMsg.innerText="Please enter your username or email";
      ifSendData=false;
   
   }else if(usernameValue.indexOf("@")===-1 || usernameValue.indexOf(".")===-1){
      usernameMsg.innerText="Please enter a valid email";
      ifSendData=false;

   }

   if(passwordValue.length===0){
      passwordMsg.innerText="Please enter your password"
      ifSendData=false;
   }else if (passwordValue.length <= 5){
      passwordMsg.innerText="Your password is too short";
      ifSendData=false;
   }
   if (accessbilitValue ==1) {
      accessbilityMsg.innerText="You should choose your accessbility";
      ifSendData=false;
   }

   if(ifSendData){
      const body = JSON.stringify({
         username: usernameValue,
         password: passwordValue,
         accessbility: accessbilitValue,
      })
      const headers={
         "content-Type": "application/json; charset=UTF-8"
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
         method: "POST",
         body: body,
         headers: headers
      })

      .then(response => {
         if(response.ok){
            alert("You loged in successfully")
         }
      })
   }
}
