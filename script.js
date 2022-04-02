class TipCalculator{
    constructor(tipPerPersonTextElement, totatlTipTextElement){
       this.tipPerPersonTextElement = tipPerPersonTextElement;
       this.totatlTipTextElement = totatlTipTextElement;

    }

    reset(){
        this.perPersonAmount = '0.00'
        this.totalAmount = '0.00'
        this.tip = ''
    }
    appendTip(tip){
        this.tip = tip
    }
    

    calculate(billAmount, numOfPeople){
        this.perPersonAmount = Number((billAmount/numOfPeople) * (this.tip/100)).toFixed(2)
        this.totalAmount = (Number(billAmount) + Number(this.perPersonAmount)).toFixed(2)
    }

    display(){
        this.tipPerPersonTextElement.textContent = this.perPersonAmount
        this.totatlTipTextElement.textContent = this.totalAmount
    }
}

const tipPerPerson = document.querySelector('.per-person')
const totalAmount = document.querySelector('.total-tip')
const resetButton = document.querySelector('.resetBtn')
const billInTotal = document.getElementById('bill')
const tipButtons = document.querySelectorAll('.tip-buttons')
const numOfPeople = document.getElementById('numOfPeople')

const newTipCalc = new TipCalculator(tipPerPerson, totalAmount)

tipButtons.forEach(btn => btn.addEventListener('click', (e)=>{
    if(e.target.tagName === "SPAN")return
    console.log(e.target.firstChild.textContent)
    newTipCalc.appendTip(e.target.firstChild.textContent)
}))

window.addEventListener('keydown', (e)=>{
    
    if(e.key === 'Enter'){
        newTipCalc.calculate(billInTotal.value, numOfPeople.value)
        newTipCalc.display()
    }
})
resetButton.addEventListener('click', ()=>{
    newTipCalc.reset()
    billInTotal.value = ''
    numOfPeople.value = ''
    newTipCalc.display()
})
