//hover on icons in header
const notificationIcon = document.querySelector(".notife-icon");
const homeIcon = document.querySelector(".home-icon");
const starIcon = document.querySelector(".star-icon");


function hoverIcon(event) {
   if (event == 1) {
      starIcon.style.backgroundColor = "#cbe7ff";
      starIcon.children[0].src = './image/icon/starLight.png';

   } else if (event == 2) {
      homeIcon.style.backgroundColor = "#cbe7ff";
      homeIcon.children[0].src = './image/icon/home-24-blue.png';
   } else if (event == 3) {

      notificationIcon.style.backgroundColor = "#cbe7ff";
      notificationIcon.children[0].src = './image/icon/notification-blue.png';
   }
}

function leaveIcon() {
   notificationIcon.style.backgroundColor = "white";
   notificationIcon.children[0].src = './image/icon/notification.png';

   homeIcon.style.backgroundColor = "white";
   homeIcon.children[0].src = './image/icon/home-24.png';

   starIcon.style.backgroundColor = "white";
   starIcon.children[0].src = './image/icon/starOff.png';
}

//Toggle menu
const toggleUserMenu = document.querySelector('.userMenu');
const toggleNotifeMenu = document.querySelector('.notifeMenu');

function ToggleMenu(event) {
   if (event == 1) {
      toggleNotifeMenu.classList.toggle('active');
   } else if (event == 2) {

      toggleUserMenu.classList.toggle('active');
   }
}

//access list toggle menu
function ChangeStar(list, num) {
   const star = document.querySelector(".list-" + list + "-star-" + num);
   if (star.src.indexOf('starOff.png') != -1) {
      star.src = './image/icon/starLight.png';
      console.log(star);
   } else {
      star.src = './image/icon/starOff.png';
      console.log(star);
   }
}

function openList(event) {
   let arrow = document.querySelector("#arrow-left-" + event);
   let listTitr = document.querySelector('.listTitr-' + event);
   let list = document.querySelector(".list-" + event);

   arrow.classList.toggle('active');
   list.classList.toggle("active");
}
//open next page list
const mainList = document.querySelector('.mainList');

function openNextPage(event) {
   let subList = document.querySelector(".subList-" + event);

   mainList.classList.add('active');
   subList.classList.add('active');
}

function back(event1, page) {
   let subList = document.querySelector(".subList-" + event1);
   console.log(subList);
   if (page == 1) {
      mainList.classList.remove('active');
      subList.classList.remove('active');
      console.log(subList);
   }
}

//box options
function openBoxOption(event) {
   const boxOption = document.querySelector('.box-options-' + event);
   console.log(boxOption);
   boxOption.classList.toggle('active');
}
//when access list become steady
function steadyAccessList() {
   const body = document.querySelector('#body');
   const dashboardCard = document.querySelectorAll('.dashboard-card');
   const box = document.querySelectorAll('.box');
   const main = document.querySelector('.main');
   const functions = document.querySelector('.functions');
   const dashboard = document.querySelector('.dashboard');
   const accessMenu = document.querySelector('.accessMenu');
   const steadyIcon = document.querySelector('.steady-icon');

   body.classList.toggle('steady');
   for (let i = 0; i < dashboardCard.length; i++) {
      dashboardCard[i].classList.toggle('steady');

   }
   for (let i = 0; i < box.length; i++) {
      box[i].classList.toggle('steady');
   }
   main.classList.toggle('steady');
   dashboard.classList.toggle('steady');
   accessMenu.classList.toggle('steady');
   steadyIcon.classList.toggle('steady');
   functions.classList.toggle('steady');
}
//building the function lists table
function openFunctionList(event) {
   const main = document.querySelector('.main');
   const functions = document.querySelector('.functions');
   let tHeader = document.querySelector('.theader');
   let tBody = document.querySelector('.functions-tbody');
   main.style.display = "none";
   functions.style.display = "flex";
   tHeader.innerHTML="";
   tBody.innerHTML="";

   fetch(`https://jsonplaceholder.typicode.com/${event}/`)
      .then(response => response.json())
      .then(json => {
         let Keys = [];
         for (const x in json[0]) {
            Keys.push(x);
         }
         //table header
         let tableHeaderTr = `<td>select</td>`;
         let trHead = document.createElement("tr");
         for (let i = 1; i < Keys.length; i++) {
            tableHeaderTr += `<td>${Keys[i]}</td>`;
         }
         trHead.innerHTML = tableHeaderTr;
         tHeader.appendChild(trHead);
         //table body
         for (let j = 0; j < json.length; j++) {
            let trBody = document.createElement("tr");
            trBody.innerHTML = ``;
            let tableBodyTr = `<td><input type="checkbox" name="checkbox"></td>`;
            for (let i = 1; i < Keys.length; i++) {
               tableBodyTr += `<td>${json[j][Keys[i]]}</td>`;
            }
            trBody.innerHTML = tableBodyTr;
            tBody.append(trBody);
         }

      })
}
//select items in table
function changeSelect() {
   const selectAll = document.querySelector(".select-btn").childNodes[0];
   const tr = document.getElementsByName("checkbox");

   if (selectAll.src.indexOf("select-none-30.png") != -1) {
      document.querySelector(".select-btn").childNodes[0].src = './image/icon/select-30.png';
      for (let i = 0; i < tr.length; i++) {
         tr[i].checked = true;
      }
   } else {
      document.querySelector(".select-btn").childNodes[0].src = './image/icon/select-none-30.png';
      for (let i = 0; i < tr.length; i++) {
         tr[i].checked = false;
      }
   }
}