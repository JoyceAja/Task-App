var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


function createTask(title, completed) {
    return {
       title: title,
       completed: completed
   }
}

var tasks = []

function logTasks(taskArr) {
     for (var i = 0; i < taskArr.length; i++) {
         console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed)
   }
}

function completeStatus(taskArr, boolean){
   for (var i = 0; i < taskArr.length; i++) {
         if(taskArr[i].completed === boolean){
             console.log((i + 1) + '. ' + taskArr[i].title + '. Completed: ' + taskArr[i].completed)
         }
   }
}

function toggleCompleted(index) {
     tasks[index].completed = !tasks[index].completed
}

rl.on('line', function(input) {
var inputArr = input.split(' ')
var description = inputArr.slice(1).join(' ')
var newTask = createTask(description, false)
    if(inputArr[0].toUpperCase() === 'ADD'){
        tasks.push(newTask)
        logTasks(tasks)
    }
    else if(inputArr[0] === 'toggle'){
         toggleCompleted(Number(inputArr[1])-1)
         logTasks(tasks)
    }
   else if(inputArr[0] === 'show'){
         if(inputArr[1] === 'all'){
              logTasks(tasks)
         }
        else if(inputArr[1] === 'active'){
             completeStatus(tasks,false)
         }
        else if(inputArr[1] === 'completed'){
             completeStatus(tasks,true)
         }
    }
    else{
        console.log('Input your task by Starting the input with ADD')
 }
})
