
const postDetail = document.querySelectorAll(".c-list__col");

postDetail.forEach((btn) => {
    btn.addEventListener("click", function(){
    location.href = "/Oulim/admin/html/community-manage/post-detail.html";
});
});