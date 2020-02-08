const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');

const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');

const exchangeRate = document.getElementById('exchangeRate');
const swap = document.getElementById('swap');

const calculate = () => {
  const initialCurrency = currencyOne.value;
  const resultingCurrency = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${initialCurrency}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[resultingCurrency];

      exchangeRate.innerText = `1 ${initialCurrency} = ${rate} ${resultingCurrency}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

// Event listeners
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);

swap.addEventListener('click', () => {
  const temp = currencyOne.value;

  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;

  calculate();
});

calculate();
