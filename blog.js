let myProjects = []

function addProject(event) {
    event.preventDefault()


    let projectName = document.getElementById("projectName").value
    let description = document.getElementById("description").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
   
    let image = document.getElementById("image").files
    image = URL.createObjectURL(image[0]) //gambar di card
    
    let nodejs = document.getElementById("nodejs").checked
    let reactjs = document.getElementById("reactjs").checked
    let java = document.getElementById("java").checked
    let python = document.getElementById("python").checked
    
    


if(nodejs){
        nodejs = document.getElementById("nodejs").value;
    } else {
        nodejs = ""
    }

    if(reactjs){
        reactjs = document.getElementById("reactjs").value;
    } else {
        reactjs = ""
    }

    if(java){
        java = document.getElementById("java").value;
    } else {
        java = ""
    }

    if(python){
        python = document.getElementById("python").value;
    } else {
        python = ""
    }

    console.log(python, java);

    let project = {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate, 
        desc: description,
        nodejs: nodejs,
        reactjs: reactjs,
        java: java,
        python: python,
        image: image,
    }
    
    myProjects.push(project)
    
    renderProject();
    
}


function renderProject() {

    document.getElementById("projects-cards").innerHTML = ""
    
for (let dataProject = 0; dataProject < myProjects.length; dataProject++) {
    document.getElementById("projects-cards").innerHTML +=

`
     <div class="cards">
     <img src=${myProjects[dataProject].image} alt="">
     <h4 id="project-name">${myProjects[dataProject].projectName}</h4>
     <p id="duration-post">duration: ${getDistanceTime(myProjects[dataProject].startDate, myProjects[dataProject].endDate)}</p>
     <p id="desc-post">${myProjects[dataProject].desc}</p>
     <div class="logo-post" id="logo-post">
       <i class="${myProjects[dataProject].nodejs}"></i>
       <i class="${myProjects[dataProject].reactjs}"></i>
       <i class="${myProjects[dataProject].java}"></i>
       <i class="${myProjects[dataProject].python}"></i>
     </div>
       <div class="button">
         <button class="btn">edit</button>
         <button class="btn">delete</button>
       </div>
   </div>
`

    }
} 

function getDistanceTime(start, end) {
    let startDate = new Date(start)
    let endDate = new Date(end)

let distance = endDate - startDate
console.log(distance);   


let miliseconds = 1000
let secondInHours = 3600
let hoursInDay = 24 
let dayInMonth = 31
let monthInYear = 12

let distanceYear = Math.floor(distance / (miliseconds* secondInHours * hoursInDay * dayInMonth * monthInYear))
let distanceMonth = Math.floor(distance / (miliseconds * secondInHours * hoursInDay * dayInMonth))
let distanceDay = Math.floor(distance / (miliseconds * secondInHours * hoursInDay))
let distanceHours = Math.floor(distance / (miliseconds * 60 * 60))
let distanceMinutes = Math.floor(distance / (miliseconds * 60))
let distanceSeconds = Math.floor(distance / miliseconds)

console.log(distanceDay);
console.log(distanceHours);
console.log(distanceMinutes);

if (distanceYear > 0) {
    return`${distanceYear} Year`
} else if (distanceMonth > 0) {
    return`${distanceMonth} Month`
} else if(distanceDay > 0) {
    return `${distanceDay} day`
} else if(distanceHours > 0) {
    return `${distanceHours} hours`
} else if(distanceMinutes > 0) {
    return `${distanceMinutes} minutes`
} else {
    return `${distanceSeconds} seconds`
}


}


