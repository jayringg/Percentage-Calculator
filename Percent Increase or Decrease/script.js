window.addEventListener('load', () => {
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', (e) =>{
    e.preventDefault();
   function calculatePercentage() {
    const firstValue = parseFloat(input1.value.trim());
    const secondValue = parseFloat(input2.value.trim());
    const percentage = ((secondValue - firstValue) / firstValue) * 100;
    return document.getElementById('percentage').value = percentage;
   }
//    console.log(calculatePercentage());
calculatePercentage();
});
  
});