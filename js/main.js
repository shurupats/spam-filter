function addCommentary(){
    const originalText = document.querySelector(".message").value.split(' ');
    const name = document.querySelector(".username").value;
    let correctedText = new Array();

    originalText.forEach(element => {
        if (checkSpam(element.toLowerCase())){
            correctedText.push(element);
        }
        else{{
            correctedText.push('***');
        }}
    });

    let resultString = correctedText.join(' ');
    
    addText(resultString, name);

    clearTextArea();
}

function checkSpam(str){
    if (str == 'viagra' || str == 'xxx'){
        return false;
    }
    else {
        return true;
    }
}

function addText(str, name){
    let resultContainer = document.querySelector(".result");
    let newCommentary = document.createElement("div");
    newCommentary.classList.add("comment");

    let username = document.createElement("p");
    username.classList.add("comment-name");
    username.innerHTML = name;

    let text = document.createElement("p");
    text.classList.add("label");
    text.innerHTML = str;

    newCommentary.appendChild(username);
    newCommentary.appendChild(text);

    resultContainer.appendChild(newCommentary);
}

function clearTextArea(){
    document.querySelector(".message").value = '';
}


document.querySelector(".button").addEventListener("click", addCommentary);