
function incrementTask(id) {
    const incrementTask = parseInt(document.getElementById(id).innerText);
    const newIncrementTask = incrementTask + 1;
    document.getElementById('increment-task').innerText = newIncrementTask;
}

function decrementTask(id) {
    const taskCount = parseInt(document.getElementById(id).innerText);
    const newTaskCount = taskCount - 1;
    document.getElementById('task-count').innerText = newTaskCount;
    if(newTaskCount <= 0){
        alert('congrats!!! You have complete all the current task')
    }
}



const completeBtnSection = document.querySelectorAll('#complete-btn-section div button ');
document.getElementById('task-count').innerText = completeBtnSection.length;
for (const btn of completeBtnSection) {
    btn.addEventListener('click', function (event) {
        alert('Board updated successfully')
        const buttonDisabled = event.target.setAttribute('disabled', 'true');
        const title = event.target.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
        decrementTask('task-count');
        incrementTask('increment-task');
        const currentTime = new Date().toLocaleTimeString("en-US", {
            hour12: true
        });
        const addedTask = document.getElementById('card-section');
        const createTaskHeading = document.createElement('p');
        createTaskHeading.classList.add('p-3', 'my-3', 'bg-blue-50', 'text-sm',);
        createTaskHeading.innerText = `You have Complete The Task ${title.innerText} at ${currentTime}`;
        addedTask.appendChild(createTaskHeading)
    })
}
const changeBgColor = document.getElementById('change-bg-color');
changeBgColor.addEventListener('click', function () {
    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    document.body.style.background = `rgb(${num1} ${num2} ${num3})`
});
document.getElementById('clear-history').addEventListener('click', function(){
    const addedTask = document.getElementById('card-section');
    const allTask = document.querySelectorAll('#card-section p');
    addedTask.innerHTML = '';
})
document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = 'qna.html'
})
const date = new Date();
const weekend = date.toDateString().split(' ')[0];
const month = date.toDateString().split(' ')[1];
const monthDate = date.toDateString().split(' ')[2];
const Year = date.toDateString().split(' ')[3];
document.getElementById('date').innerText = weekend + ' ,';
document.getElementById('month-year').innerText = `${month} ${monthDate} ${Year}`;