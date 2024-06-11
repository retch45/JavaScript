function addition(){
    let num1=0;
    let num2=0;
    let ans1=0;
    
    num1 = document.getElementById("add1").value;
    num2 = document.getElementById("add2").value;

    if(num1 == false){
        alert("failed")
    }
    else if(num2 == false){
            alert("failed")
    }
        else{
            ans1= Number(num1) + Number(num2);
    document.getElementById("sagot").value=ans1;
        }
    }
    
function subtraction(){
    let num1=0;
    let num2=0;
    let ans1=0;
    num1 = document.getElementById("sub1").value;
    num2 = document.getElementById("sub2").value;
    ans1= Number(num1) - Number(num2);
    document.getElementById("sagot1").value=ans1;
}
function multiplication(){
    let num1=0;
    let num2=0;
    let ans1=0;
    num1 = document.getElementById("multi1").value;
    num2 = document.getElementById("multi2").value;
    ans1= Number(num1) * Number(num2);
    document.getElementById("sagot2").value=ans1;
}
function division(){
    let num1=0;
    let num2=0;
    let ans1=0;
    num1 = document.getElementById("div1").value;
    num2 = document.getElementById("div2").value;
    ans1= Number(num1) / Number(num2);
    document.getElementById("sagot3").value=ans1;
}

