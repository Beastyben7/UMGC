// HEADER NAVIGATION
// VARS
var msgLink = document.getElementById("msgLink")
var msgPreviews = document.getElementById("msgPreviews")
var accountLink = document.getElementById("accountLink")
var accountMenu = document.getElementById("accountMenu")

document.addEventListener("DOMContentLoaded", function() {
    if (window.localStorage.getItem('fName') !== null)
    {document.getElementById("createAccount").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    }
    else {document.getElementById("logOut").style.display = "none";
    document.getElementById("profileContainer").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("msgLink").style.display = "none";}
});
// MESSAGES
   //I removed the dropdown with previews. Unfortunately, it wouldv'e been to difficult to implement.
// ACCOUNT MENU
accountLink.addEventListener("click", function() {
    if (accountMenu.style.display === "flex")
        {accountMenu.style.display = "none";}
    else {accountMenu.style.display = "flex";
    msgPreviews.style.display = "none";}

});
//Display User Name
const userFName = window.localStorage.getItem('fName');
const userLName = window.localStorage.getItem('lName');

function showUserData() {
    document.getElementById('userFName').innerHTML = userFName;
    document.getElementById('userLName').innerHTML = userLName;
}
showUserData();

//Log Out
var logOut = document.getElementById("logOut")
logOut.addEventListener("click", function(){
    window.localStorage.removeItem('property')
    window.location.href = "login.html";
});

//JavaScript Time
function showTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 });

    const fullDate = `${day} ${month} ${year}  ${hours}:${minutes}`
    document.getElementById('currentTime').innerHTML = fullDate;
};
setInterval(showTime, 1000);
showTime();