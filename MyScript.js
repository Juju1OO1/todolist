//vars
const inputText = document.querySelector(".option.padding input");
const remButton = document.querySelector("button.rem-btn");
const myList = document.querySelector(".ToDolist.margin");
const deButton = document.querySelectorAll("button.d-btn");
const edButton = document.querySelector("button.e-btn");
const inputEdit = document.querySelector(".editbox input");
var listArray=[]
showMyTask();

function showMyTask(){
    let getLocalStorageData = localStorage.getItem("NewData")
    if(getLocalStorageData==null){
         listArray = []
    }else{
        document.querySelectorAll(".list").forEach((e) => {
            e.remove(e);
        });
         listArray = JSON.parse(getLocalStorageData);
         for(i=0;i<listArray.length;i++){
            const newTask = document.createElement('div');
            newTask.innerHTML = `
            <div class="list" id = "${i}">
                <div class="todo padding" id="td${i}">${listArray[i]}</div>
                <button class="e-btn padding margin" onclick="editOne(${i})">Edit</button>
            <button class="d-btn padding" onclick="deleteOne(${i})">Delete</button>
            </div>`;
            myList.appendChild(newTask);
            document.querySelector(".dis").textContent=`You have ${listArray.length} pending tasks.`

            }
         
    };
        
    
};


//add to do
function OneTask(){
    let getLocalStorageData = localStorage.getItem("NewData")
    if (inputText.value!==""){
        //storage
        if (getLocalStorageData == null) {
            listArray = [];
          } else {
            listArray = JSON.parse(getLocalStorageData);
            
            
          }
	listArray.push(inputText.value);
            localStorage.setItem("NewData", JSON.stringify(listArray));
	    showMyTask();
            inputText.value = "";
	
          
    }
}


//clear all
function clearAll(){
    let getLocalStorageData = localStorage.getItem("NewData")
    //page
    if(document.querySelector(".ToDolist.margin").textContent!==""){
    if (confirm("Are you sure you want to clear all?")) {
        listArray=[];
        localStorage.setItem("NewData", JSON.stringify(listArray));
        inputText.value = "";
        document.querySelector(".dis").textContent=`You have 0 pending tasks.`
        showMyTask();
      };
}
}

//deleteOne
function deleteOne(i){
    let getLocalStorageData = localStorage.getItem("NewData")
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(i,1);
    localStorage.setItem("NewData", JSON.stringify(listArray));
    showMyTask();
}

function editOne(i){
    document.querySelector(".maskbox").classList.remove("disNone");
    let getLocalStorageData = localStorage.getItem("NewData")
    listArray = JSON.parse(getLocalStorageData);
    inputEdit.value=listArray[i];
    document.querySelector("button.okay-btn").onclick = () =>{
        listArray.splice(i,1,inputEdit.value);
        localStorage.setItem("NewData", JSON.stringify(listArray));
        document.querySelector(".maskbox").classList.add("disNone");
        showMyTask();
        }

    }
