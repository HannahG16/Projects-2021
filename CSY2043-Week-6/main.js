
// function print5 (){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
// }

// print5();
// print5();

   function updateParagraph() {
    var element = document.getElementById('contents');
    element.firstChild.nodeValue = 'New Heading';
   }


   function updateH1() {
    var element = document.getElementById('title');
    element.firstChild.nodeValue = 'New paragraph contents';
   }


   function myLoadFunction() {
    var element = document.getElementById('title');
    element.addEventListener('click', updateH1);
    var element = document.getElementById('contents');
    element.addEventListener('click', updateParagraph);
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);