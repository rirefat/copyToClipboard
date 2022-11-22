function copyToClipboard (string){
    let element = document.createElement('textarea');
    element.value = string;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
}

function handleClick (){
    let text = document.getElementById("floatingTextarea").value;
    copyToClipboard(text)
}