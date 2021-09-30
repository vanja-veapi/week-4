window.addEventListener("load", function(){
    let btn = this.document.querySelector("#btn");
    let input = this.document.querySelector("#input");
    let errorMsg = this.document.querySelector("#error__msg");
    let mailRegExp =  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    btn.addEventListener("click", checkInput);

    function checkInput()
    {
        let emailValue = input.value;

        if(emailValue === "")
        {
            errorMsg.classList.remove("invisible");
        }
        else
        {
            !mailRegExp.test(emailValue) ?  errorMsg.classList.remove("invisible") : errorMsg.classList.add("invisible");
        }
    }
});