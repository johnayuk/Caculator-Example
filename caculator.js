console.log(document.URL)
console.log(document)
document.title = 'Calculator Assignment'


//this function insert the clicked button to the input (screen)
function insert(num){
    document.form.textview.value += num
}

//this function evaluates the inputs uusing the eval function
function calculate(){
    document.form.textview.value = eval( document.form.textview.value)
}

//this function creates an null value that erases the 
//previous value equating the ( document.form.textview.value) to a null 
function c(){
    document.form.textview.value ="" 
}

