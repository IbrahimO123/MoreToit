function navBar(selections){
    var gender = selections.getAttribute("data-choice");
    let list =document.createElement("div");
    let contents= document.createTextNode("New In Sales Bags");
    list.appendChild(contents);
    let options = document.getElementById("women");
    options.appendChild(list);



}

