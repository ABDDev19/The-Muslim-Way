// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(12, 34));

// const arr1 = [12, 12, 14, 15];
// const arr2 = [3, 2, 4, 5, 6];
// const arr = arr1.concat(arr2);
// console.log(arr);

// const finalArr = [...arr1, arr2];
// console.log(finalArr);

// const person = {
//   name: "ali",
//   age: 32,
// };

// const person2 = {
//   salary: 32000,
//   job: "developer",
// };
// const emp = { ...person, ...person2 };
// console.log(emp.name);

// personalData = (age1, salary, job, address) => {
//   console.log(
//     `your age is${age1} and your salaray is ${salary} and your  is ${job} and your home number is `,
//   );
// };

// personalData(...emp);
// personalData(emp[])

// AsmaulHusna page

// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

//

//
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
