import { useState } from "react";
import '../styles/components/Card.css'

export default function Card() {

  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [discountValue, setDiscountValue] = useState(0)
  const [grossSalary, setGrossSalary] = useState(0)
  const [netSalary, setNetSalary] = useState(0)

  const inputWage = document.querySelector('#wage-info')
  const inputDiscount = document.querySelector('#discount-inss')
  
  
  
  
  function getDiscounts  (valor)  {
    const discountInss = valor.target.value
    setDiscountPercentage(discountInss) 
  }

  function getGrossSalary(valor) {
    const grossSalaryValue = valor.target.value
    setGrossSalary(grossSalaryValue)
  }

  function wageCalculator(event) {
    event.preventDefault()

    const discountCalculator = Math.round(grossSalary*discountPercentage/100)  
    setDiscountValue(discountCalculator)
    
    const sumOfWage = Math.round(grossSalary - discountCalculator) 
    setNetSalary(sumOfWage);

    const isSomeInputEmpty = inputWage.value === '' || inputDiscount.value === ''

    if ( isSomeInputEmpty ){
      alert('Por favor, preencha os dois campos')
      return
    }
    cleanInputs()
  }

  const cleanInputs = () => {
    inputWage.value = ' '
    inputDiscount.value = ' '
  }

  return(
    <div className="container">

      <form id="form">
        <div className="form-control">
          <label htmlFor="amount">Salário</label>
          <input autoFocus type="text" onChange={getGrossSalary} id="wage-info" placeholder="Valor do Salário" />
        </div>

        <div className="form-control">
          <label htmlFor="amount">INSS <br />
            
          </label>
          
          <input type="text" onChange={getDiscounts} id="discount-inss" placeholder="Percentagem INSS" />
        </div>

        <button className="btn"  onClick={wageCalculator}>Calcular </button>

        <label className="resultsLabel" htmlFor="text-name">
          <h3>Bruto</h3>
          <span>R$ {grossSalary}</span>
        </label>

        <label className="resultsLabel" htmlFor="text-name">
          <h3>Desconto </h3>
          <span>{discountPercentage}%</span>
        </label>

        <label className="resultsLabel" htmlFor="text-name">
          <h3>Desconto em R$ </h3>
          <span>R$ {discountValue}</span>
        </label>

        <label className="resultsLabel" htmlFor="text-name">
          <h3>Líquido</h3>
          <span>R$ {netSalary}</span>
        </label>

      </form>

      </div>
  )
}