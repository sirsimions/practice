//let btn = document.getElementById('btn');
//btn.addEventListener("onclick", submitInformation);
function submitInformation(){

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let out1 = document.getElementById('out1');
    let out = document.getElementById('out');
       if(age<=18){
        out1.innerHTML = "Your name is " + name + "";
        out.innerHTML = "Your age is " + age + "and you are a child";
       }
       else{
        out1.innerHTML = "Your name is " + name + "";
        out.innerHTML = "Your age is " + age + "and you are an adult";
       }
    
}
let btn = document.getElementById('btn');
btn.addEventListener("onclick", submitGender);
function submitGender(){
  
  var gender = document.querySelector('input[name="gender"]:checked').value[i];
  output = document.getElementById('output');
  output.innerHTML = 'You are a ' + gender + "";
}

 let butn = document.getElementById('btn');
     butn.addEventListener("onclick", selectFood);
function selectFood(){
  let varfood = document.querySelector('option[name="food"]:checked').value;
  let outpt = document.getElementById('outpt');
  outpt.innerHTML= "Your food selection is " + varfood + ""
}
