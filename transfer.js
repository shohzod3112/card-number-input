let textContainer = document.querySelector(".Field_inputPlaceholder__k_sMH");
let allKey = document.querySelectorAll(".hg-standardBtn");
let clrbtn = document.querySelector(".hg-button-clear")
let deleteKey = document.querySelector(".hg-button-backspace");
let enterKey = document.querySelector(".hg-button-enter");
let chars = [];
let content = textContainer.innerText;
let retrievedArrayString = localStorage.getItem('phoneNumbers');
localStorage.clear();

document.addEventListener('DOMContentLoaded', (event) =>
{   if(retrievedArrayString){
    let retrievedArray = JSON.parse(retrievedArrayString);
    textContainer.textContent = retrievedArray;

    console.log(textContainer.textContent != "0000 0000 0000 0000");
    if(retrievedArray.length == 16 && textContainer.textContent != "0000 0000 0000 0000"){
        
        enterKey.classList.remove("Keyboard_buttonDisabled__2KofX");
        enterKey.classList.add("Keyboard_buttonEnter__2QosB");
        enterKey.classList.add("Keyboard_button__RNPPS");
        enterKey.classList.add("EnterKey__enable");
    }
    console.log("event = " + event);
}
})

allKey.forEach(key =>
{
  key.addEventListener('click', () => {

    if(content === "0000 0000 0000 0000"){
        textContainer.innerHTML = "";
        content = "";
        enterKey.classList.add("Keyboard_buttonDisabled__2KofX");
    }

    if(textContainer.innerText.length < 19){  
    content += key.innerText;
    textContainer.innerHTML = content;
    console.log("content: " + content);
    
    if(textContainer.innerText.length == 19 && textContainer.innerText != "0000 0000 0000 0000"){
        enterKey.classList.remove("Keyboard_buttonDisabled__2KofX");
        enterKey.classList.add("Keyboard_buttonEnter__2QosB");
        enterKey.classList.add("Keyboard_button__RNPPS");
        enterKey.classList.add("EnterKey__enable");
        chars = content.replace(/\s+/g, ""); 
        console.log(chars);
    }
    else {
        enterKey.classList.add("Keyboard_buttonDisabled__2KofX");
        enterKey.classList.remove("Keyboard_buttonEnter__2QosB");
        enterKey.classList.remove("Keyboard_button__RNPPS");
        enterKey.classList.remove("EnterKey__enable");
    }

    if(textContainer.innerText.length == 4 || textContainer.innerText.length == 9 || textContainer.innerText.length == 14)
      {
        textContainer.innerHTML = textContainer.innerText + "&nbsp";
        content =textContainer.innerText;
        console.log("textContainer.innerText.length = " + textContainer.innerText.length);
      }
    }
})
})

deleteKey.addEventListener("click",() =>
{   content = textContainer.innerText.slice(0,textContainer.innerText.length-1);
    console.log("Content" + content);
    textContainer.innerText = content;

    if(content.length == 19 && content != "0000 0000 0000 0000"){
        enterKey.classList.remove("Keyboard_buttonDisabled__2KofX");
        enterKey.classList.add("Keyboard_buttonEnter__2QosB");
        enterKey.classList.add("Keyboard_button__RNPPS");
        enterKey.classList.add("EnterKey__enable");
    }
    else {
        enterKey.classList.add("Keyboard_buttonDisabled__2KofX");
        enterKey.classList.remove("Keyboard_buttonEnter__2QosB");
        enterKey.classList.remove("Keyboard_button__RNPPS");
        enterKey.classList.remove("EnterKey__enable");
    }
})


clrbtn.addEventListener("click", () =>
{   
  textContainer.innerText = '';
  content = "";
  chars = [];
  enterKey.classList.add("Keyboard_buttonDisabled__2KofX");
  enterKey.classList.remove("Keyboard_buttonEnter__2QosB");
  enterKey.classList.remove("Keyboard_button__RNPPS");
  enterKey.classList.remove("EnterKey__enable");
})