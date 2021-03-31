function Counter (element, value ){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);





function getElement(selection){
    const element = document.querySelector(selection);
    //if an element exists return the element
    if(element){
        return element
    }
    // if element not exists
    throw new Error(`Please check "${selection}" selector, no such element exists`)
}

getElement('.first-counter');