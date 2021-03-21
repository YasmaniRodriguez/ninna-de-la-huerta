// when the user click on the product category: open a catalog window 
function openWindow (URL){ 
    window.open(URL,"Catalog","width=1000,height=1000") 
 } 

// to get the button
 var mybutton = document.getElementById("scroll-to-top");

 // when the user scrolls down 20px from the top of the document: show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // when the user clicks on the button: scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

 function openTab(evt, tabName) {
  var i, tabpanel, tablink;
  tabpanel = document.getElementsByClassName("wa-tab-panel");
  for (i = 0; i < tabpanel.length; i++) {
    tabpanel[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}