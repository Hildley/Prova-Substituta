const btnAdd = document.querySelector("#addBtn"); 


btnAdd.addEventListener("click", function () {
  const li = document.createElement("li"); 
  const inputValue = document.querySelector("#cxtxt").value; 
  const taskText = document.createTextNode(inputValue); 
  li.appendChild(taskText); 

  
  if (inputValue === "") {
    alert("Você deve digitar algum texto para adicionar!");
  } 
  else {
    document.getElementById("listatarefa").appendChild(li); 
  }

  document.querySelector("cxtxt").value = ""; 


  const span = document.createElement("span");
  const icon = document.createTextNode("&#215;"); 
  span.className = "fechar"; 
  span.appendChild(icon); 
  li.appendChild(span); 

  const close = document.querySelectorAll(".fechar"); 


  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      const li = this.parentElement; 
      li.style.display = "none"; 
    });
  }
});

const list = document.querySelector("ul"); 


list.addEventListener("click", function (ev) {
 
  if (ev.target.nodeName === "LI") {
    ev.target.classList.toggle("checked"); 
  }
});