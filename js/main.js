function addCommentary(){
    const originalText = document.querySelector(".message").value.split(' ');
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
    
    addText(resultString);

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

function addText(str){
    let resultContainer = document.querySelector(".result");
    let newCommentary = document.createElement("p");
    newCommentary.classList.add(".label");
    newCommentary.innerHTML = str;
    resultContainer.appendChild(newCommentary);
}

function clearTextArea(){
    document.querySelector(".message").value = '';
}


document.querySelector(".button").addEventListener("click", addCommentary);