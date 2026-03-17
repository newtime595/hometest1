// const editMember = document.querySelector(".memedit");

// editMember.addEventListener("click", function(){
//     location.href = "/Oulim/admin/html/member-manage/mem-edit.html";
// });

const editMember = document.querySelectorAll(".memedit");

editMember.forEach((btn) => {
  btn.addEventListener("click", function () {
    location.href = "/Oulim/admin/html/member-manage/mem-edit.html";
  });
});
