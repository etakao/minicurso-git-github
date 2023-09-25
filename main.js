function somar() {
  const input1 = document.getElementById('operando1').value;
  const input2 = document.getElementById('operando2').value;

  const resultado = parseInt(input1) + parseInt(input2);

  document.getElementById('resultado').innerHTML = resultado;
}

function subtrair() {
  const input1 = document.getElementById('operando1').value;
  const input2 = document.getElementById('operando2').value;

  const resultado = parseInt(input1) - parseInt(input2);

  document.getElementById('resultado').innerHTML = resultado;
}

function raizQuadrada() {
  const input1 = document.getElementById('operando1').value;
  const input2 = document.getElementById('operando2').value;

  const resultado = Math.sqrt(parseInt(input1));

  document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}

function multiplicar() {
  const input1 = document.getElementById('operando1').value;
  const input2 = document.getElementById('operando2').value;

  const resultado = parseInt(input1) * parseInt(input2);

  document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}

function dividir() {
  const input1 = document.getElementById('operando1').value;
  const input2 = document.getElementById('operando2').value;

  if (input2 === 0) {
    return;
  }

  const resultado = parseInt(input1) / parseInt(input2);

  document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}
