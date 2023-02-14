var dateNow= new Date().getHours();
var morning= new Date().setHours(06);
var noon= new Date().setHours(12);
var afternoon=new Date().setHours(18)
var night= new Date().setHours(00)

if(dateNow>=morning && dateNow<=noon){
    document.body.style.backgroundColor="gray"
    alert("Sabahiniz xeyir")
}
else if(dateNow>=noon && dateNow<=afternoon){
    document.body.style.backgroundColor="yellow"
    alert("Gunortaniz xeyir")
}
else if(dateNow>=afternoon && dateNow<=night){
    document.body.style.backgroundColor="dark blue"
    alert("Axsaminiz xeyir")
}
else{
    document.body.style.backgroundColor="black"
    alert("Get yat daa ala")
}

//task2
function ChangeMode(){
    if(document.body.style.backgroundColor==="gray")
    {
        document.body.style.backgroundColor="white"

    }
    else if(document.style.body.backgroundColor==="white")
    {
        document.body.style.backgroundColor="gray"
    }
    else{
        document.body.style.backgroundColor="gray"
        
    }
}

function ChangeMode2(){
   document.body.style.backgroundColor="green"
}

///task3
var radius = 4;
var area;
area=Math.PI*Math.pow(radius);


var Elvin = {
    name: "elvin",
    age:19,
    school: 244,
    birthDate: function(){
        return new Date().getFullYear - this.age;
    }

};


console.log(Elvin.birthDate());







var tarix= new Date();
console.log(tarix)//uzun tarixi gosterir
var users=["elvin", Elvin, 19];
console.log(users[0]);
console.log(typeof Elvin)
console.log(isNan(Elvin))