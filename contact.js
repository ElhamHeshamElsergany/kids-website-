
var messagebtn= document.getElementById('messagebtn');
messagebtn.addEventListener("click", messagesendalert);

function messagesendalert() {
   alert('your message send , thank you ') 
   window.open('http://127.0.0.1:5501/home.html')
}