function create(){  
        //创建一个div  
        var div = document.createElement("div");  
          
        //为div创建属性class = "test"  
        var divattr = document.createAttribute("class");  
        divattr.value = "test";  
          
        //把属性class = "test"添加到div  
        div.setAttributeNode(divattr);  
          
        //创建一个值为test的按钮  
        var input = document.createElement("input");  
        var inputattr = document.createAttribute("type");  
        inputattr.value = "button";  
        input.setAttributeNode(inputattr);  
        var inputattr1 = document.createAttribute("value");  
        inputattr1.value = "test";  
        input.setAttributeNode(inputattr1);  
          
        //创建一hello,world个文本节点  
        var text = document.createTextNode("hello,world");  
          
        //将按钮和文本节点追加到div  
        div.appendChild(input);  
        div.appendChild(text);  
          
        //为div添加样式  
        var style = document.createAttribute("style");  
        div.setAttributeNode(style);  
        div.style.backgroundColor = "#F00";  
        div.style.borderWidth = "20px";  
        div.style.borderColor = "#000";  
        div.style.width = "500px";  
        div.style.height = "500px";  
        div.style.marginLeft = "30%";  
        div.style.marginTop = "1%"; 