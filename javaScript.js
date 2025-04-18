function changeText(){
    const title= document.getElementById("title");
    title.content= "Text Changed";
    title.style.color= "skyblue";
    document.getElementById("text").innerHTML= "vamos!!!"
}
function toggleElement(){
    constpara= document.getElementById("togglePara");
    para.style.display= para.style.display ==="none"? "block" :"none";
}