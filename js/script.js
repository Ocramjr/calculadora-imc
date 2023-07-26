const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Você está abaixo do peso. Vá comer!😅'
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal.👍'
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30){
        description = 'Você está com sobrepeso. Vá correr caboquim!😒'
    } else if (bmi > 30 && bmi <= 35){
        description = 'Você está com obesidade moderada. Vá para uma academia.😓'
    } else if (bmi > 35 && bmi <= 40){
        description = 'Você está com obesidade severa. Fecha essa boca e vai se cuidar.🙁'
    } else {
        description = 'Cuidado, você está com obesidade morbida!😲'
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

})

