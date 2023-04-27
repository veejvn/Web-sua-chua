var search=document.getElementById("search");
search.addEventListener("keydown",function(event){
    if(event.key === 'Enter')
        doSearch();
});
function doSearch(){
    var frm=document.forms["frm-search"];
    if(search.words.value.length > 0){
        frm.submit();
    }
}
var ic_search=document.getElementById("icon-search");
ic_search.addEventListener("click",function(){
    doSearch();
});
function frmValidate5(frm){
    return frm.checkValidaty();
}
function xacthucdn(frm){
    var emailReg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập email hợp lệ.");
        frm.email.focus();
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Mật khẩu tôi thiểu 8 ký tự.");
        frm.psw.focus();
        return false;
    }
    alert("Đã gửi dữ liệu Đăng nhập");
    return true;
}
