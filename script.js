let input = document.getElementById("input");
let addbtn = document.getElementById("add-btn");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createElement(){
    // creating a element li for grap input value
    let li = document.createElement('li');
    // append input field value in li
    li.append(input.value);

    // append li into ul
    ul.append(li);
   
    // reset input field
    input.value = "";

    // function for empty list
    let dBtn = document.getElementById('empty-btn');
    function deleteItem(){
        li.classList.add('delete');
    }
    dBtn.addEventListener("click",deleteItem);
}

function addBtnClick() {
    if(inputLength()>0){
        createElement();
    }
}
function enterKeypress(event) {
    if(inputLength()>0 && event.which === 13){
        createElement();
    }
}



input.addEventListener("keypress",enterKeypress);

addbtn.addEventListener("click",addBtnClick);
