var search=document.getElementById("search");
search.addEventListener("keydown",function(event){
    if(event.key === 'Enter')
        doSearch();
});
function doSearch(){
    var frm=document.forms["frm-search"];
    if(search.value.length > 0){
        frm.submit();
    }
}
var ic_search=document.getElementById("icon-search");
ic_search.addEventListener("click",function(){
    doSearch();
});
