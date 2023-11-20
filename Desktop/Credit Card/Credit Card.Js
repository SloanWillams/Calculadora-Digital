function isValidCardNumber(cardNumber) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

document.getElementById("creditCardForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
  const expirationDate = document.getElementById("expirationDate").value;
  const cvv = document.getElementById("cvv").value;

  if (isValidCardNumber(cardNumber)) {
    console.log("Número do cartão válido!");
    console.log("Número do cartão: " + cardNumber);
    console.log("Data de Expiração: " + expirationDate);
    console.log("CVV: " + cvv);

  } else {
    console.log("Número do cartão inválido!");

  }
});