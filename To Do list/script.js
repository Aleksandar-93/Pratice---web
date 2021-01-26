// Create a "close" button and append it to each list item
const myList = document.getElementsByTagName('LI');
for(let i = 0; i < myList.length; i++){
    const span = document.createElement('SPAN');
    const text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myList[i].appendChild(span);
}
// Click on a close button to hide the current list item
    const close = document.getElementsByClassName('close');
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }


// Add a "checked" symbol when clicking on a list item

const list = document.querySelector('ul');
list.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
});



// Create a new list item when clicking on the "Add" button


