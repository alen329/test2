let arabic=document.getElementById("arabic");
let english=document.getElementById("english");
let title=document.getElementById("title");
let welcome=document.getElementById("welcome-text");
let about=document.getElementById("about");
let aboutText=document.getElementById("about-text");
let contact=document.getElementById("contact");

arabic.onclick=()=>{
    setLanguage("arabic");
    localStorage.setItem("Lang","arabic");
};
english.onclick=()=>{
    setLanguage("english");
    localStorage.setItem("Lang","english");
};
onload=()=>{
    setLanguage(localStorage.getItem("Lang"));
}
function setLanguage(getLanguage){
if(getLanguage==="arabic"){
title.innerHTML="التسوق";
welcome.innerHTML="مرحبا بك في صفحة التسوق";
about.innerHTML="حولنا";
aboutText.innerHTML="التسوق هو نشاط يتصفح فيه العميل السلع التي يقدمها بائع تجزئة واحد او اكثر";
contact.innerHTML="تواصل معنا";
}else if(getLanguage==="english"){
title.innerHTML="Shopping";
welcome.innerHTML="Welcome to website of Online Shopping";
about.innerHTML=" About US";
aboutText.innerHTML="Shopping is an activity in which a customer browser the available goods by one our more retailers";
contact.innerHTML="Contact Us";
}
}