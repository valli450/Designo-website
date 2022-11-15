/* Input value length */
const nameBlock = document.getElementById("name__input");
const emailBlock = document.getElementById("email__input");
const phoneBlock = document.getElementById("phone__input");
const messageBlock = document.getElementById("message__input");

const inputList = [nameBlock, emailBlock, phoneBlock, messageBlock];

/* Error block */
const nameBlockError = document.getElementById("name__error");
const emaiBlocklError = document.getElementById("email__error");
const phoneBlockError = document.getElementById("phone__error");
const messageBlockError = document.getElementById("message__error");

const errorBlockList = [nameBlockError, emaiBlocklError, phoneBlockError, messageBlockError]

let allGood = false;

function checkInput(){
    for(let i = 0; i < inputList.length; i++){
        if(inputList[i].value.length === 0){
            inputList[i].classList.add("errorMove");
            inputList[i].style.marginLeft="0.9rem";
            setTimeout(function(){
                inputList[i].style.marginLeft="0.5rem";
                setTimeout(function(){
                    inputList[i].style.marginLeft="0.8rem";
                    errorBlockList[i].style.opacity = '1';
                    errorBlockList[i].style.zIndex = '1';
                    setTimeout(function(){
                        inputList[i].classList.remove("errorMove");
                    }, 120)
                }, 120)
            }, 120)
            
        }else{
            errorBlockList[i].style.opacity = '0';
            errorBlockList[i].style.zIndex = '-1';
            allGood = true;
        }

        console.log(errorBlockList[i])
    }
    if(allGood){
        console.log('good')
    }
}