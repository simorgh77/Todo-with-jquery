let studends = [];
function Student(name, lastName, email, phone) {
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  return this;
}
function addStudent(name, lastName, email, phone) {
  const student = new Student(name, lastName, email, phone);
  studends.push(student);
//   render();
//   document.querySelector('#form').reset()
  
}
function editStudent(index, name, lastName, email, phone) {
  const student = new Student(name, lastName, email, phone);
  studends = studends.map((item, i) => (i === index ? student : item));
  render();
}
function removeStudent(index) {
  studends = studends.filter((item, i) => i !== index);
  render();
}

document.querySelector('#form').addEventListener('submit',function(e){
    const name=document.querySelector("#mainname")
    const lastname=document.querySelector("#mainlastname")
    const email=document.querySelector("#mainemail")
    const phone=document.querySelector("#mainphone")
    e.preventDefault();
    const student= addStudent(name.value,lastname.value,email.value,phone.value)
    render()
})
    function render() {
     const tbody=document.querySelector("#tb"); 
     const table=document.querySelector(".mytable"); 
     tbody.innerHTML=""
      studends.map((item,index)=>{
        tbody.innerHTML+=`<tr id="row${index}"> <td> ${item.name} </td> <td> ${item.lastName} </td>
         <td> ${item.email} </td> 
        <td> ${item.phone} </td>
        <td><button onclick="preedit(${index})">Edit</button>
        <button onclick="removeStudent(${index})">Remove</button></td> </tr>`  
    })
}

function preedit(index){
    row =document.querySelector(`#row${index}`)

    studends.filter((item,i)=>{

        if(i==index){
row.innerHTML=`<td><input type="text" id="myname${index}" value="${item.name}"></td> 
    <td > <input type="text" id="mylastname${index}" value="${item.lastName}"></td>   
     <td ><input type="text" id="myemail${index}" value="${item.email}"> </td>
     <td> <input type="text" id="myphone${index}" value="${item.phone}"> </td>
      <td> <td class='buttons'><button onclick=save(${index}) class="btn btn-success save">SAVE
     </button></td>`;
        }
    })
}

function save(index){
    const myname=document.getElementById(`myname${index}`)
    const mylastname=document.getElementById(`mylastname${index}`)
    const myemail=document.getElementById(`myemail${index}`)
    const myphone=document.getElementById(`myphone${index}`)
    console.log(myname);
    editStudent(index,myname.value,mylastname.value,myemail.value,myphone.value)

}


    
