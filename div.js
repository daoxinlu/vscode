function create(){
    var div = document.createElement("div");
    var divattr = document.createAttribute("class");
    divattr.value = "test";
    div.setAttributeNode(divattr);

    var input = document.createElement("input");
    var inputattr = document.createAttribute("type");
    inputattr.value = "button";
    input.setAttributeNode(inputattr);

    div.appendChild(input);

    //为div设置样式
    var style = document.createAttribute("style");
    div.setAttributeNode(style);
    div.style.backgroundColor = "#000";
    div.style.borderWidth = "20px";
    div.style.borderColor = "black";
    div.style.width = "500px";
    div.style.height = "500px";
    div.style.marginLeft = "20%";
    div.style.marginTop = "10%";

    document.getElementsByTagName("body")[0].appendChild("div");

}
create();
