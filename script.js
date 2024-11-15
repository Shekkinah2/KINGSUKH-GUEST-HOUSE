const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links")
const menuBtnIcon=menuBtn.querySelector("i");
menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isopen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isopen?"ri-close-line":"ri-menu-line");
});
navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});
const scrollRevealOption={
    distance:"50px",origin:"bottom",duration:1000,
};
//header container
scrollReveal().reveal(".header_container.section_subheader",{...scrollRevealOption,});
scrollReveal().reveal(".header_container.h1",{...scrollRevealOption,delay:500});
scrollReveal().reveal(".header_container.btn",{...scrollRevealOption ,delay:1000});
// room container
ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // feature container
  ScrollReveal().reveal(".feature_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // gallery container
  ScrollReveal().reveal(".gallery_card", {
    ...scrollRevealOption,
    interval: 500,
  });