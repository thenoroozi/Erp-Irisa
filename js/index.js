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

function back(event1,page) {
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
   const body=document.querySelector('#body');
   const dashboardCard=document.querySelectorAll('.dashboard-card');
   const box=document.querySelectorAll('.box');
   const main=document.querySelector('.main');
   const dashboard=document.querySelector('.dashboard');
   const accessMenu=document.querySelector('.accessMenu');
   const steadyIcon=document.querySelector('.steady-icon');

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
}