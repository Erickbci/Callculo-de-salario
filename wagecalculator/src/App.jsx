import { useState } from 'react';
import './App.css';


function App() {
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [discountValue, setDiscountValue] = useState(0)
  const [grossSalary, setGrossSalary] = useState(0)
  const [netSalary, setNetSalary] = useState(0)
  
  // const cleanInputs = () => {
  //   inputWage.value = ' '
  //   inputDiscount.value = ' '
  // }
  
  function getDiscounts  (valor)  {
    const discountInss = valor.target.value
    setDiscountPercentage(discountInss) 
  }

  function getGrossSalary(valor) {
    const grossSalaryValue = valor.target.value
    setGrossSalary(grossSalaryValue)
  }

  function wageCalculator(event) {
    const sumOfWage = grossSalary - discountValue 
    setNetSalary(sumOfWage);
    console.log(sumOfWage, netSalary);

    const discountCalculator = grossSalary*discountPercentage/100  
    setDiscountValue(discountCalculator)

    event.preventDefault()
  }

  return (
    <div className="app">

      <h1>Controle De Salário</h1>

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

    </div>
  );
}

export default App;
