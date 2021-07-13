// accordion
const courseCurriculum__ques       = document.querySelectorAll(".course-curriculum__ques");
const courseCurriculum__itemOption = document.querySelectorAll(".course-curriculum__item-option"); 
courseCurriculum__ques.forEach(function(button){
  button.addEventListener("click",function(e){
    var parent = e.currentTarget.parentElement;
    courseCurriculum__itemOption.forEach(function(item){
      if(item == parent){
        item.classList.toggle("active");
        return;
      }
      item.classList.remove("active");
    })
  })
})
// list coursedetail
const courseListImg = document.querySelectorAll(".detailcourse__list-img img");
const courseImgShow = document.querySelector(".detailcourse__main-img img");
const btn_prevCourseimg = document.querySelector(".btn-prev-courseimg");
const btn_nextCourseimg = document.querySelector(".btn-next-courseimg");
var courseImgIndex = 0;
btn_nextCourseimg.addEventListener("click",function(){
  courseImgIndex++;
  if(courseImgIndex > courseListImg.length -1){
    courseImgIndex = 0;
  }
  showImgcourse(courseImgIndex,courseImgShow,courseListImg)
  choseActive(courseImgIndex,courseListImg)
})
btn_prevCourseimg.addEventListener("click",function(){
  courseImgIndex--;
  if(courseImgIndex < 0){
    courseImgIndex = courseListImg.length -1;
  }
  showImgcourse(courseImgIndex,courseImgShow,courseListImg)
  choseActive(courseImgIndex,courseListImg)
})
function showImgcourse(index,element,imglist){
    element.src = imglist[index].src;
}
courseListImg.forEach(function(button,index){
  button.addEventListener("click",function(e){
    var src = e.currentTarget.src;
    courseImgShow.src = src;
    choseActive(index,courseListImg)
  })
})