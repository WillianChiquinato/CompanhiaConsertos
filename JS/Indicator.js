// Seleciona todos os elementos com a classe 'Skill' (cada círculo)
let skills = document.querySelectorAll('.Skill');

skills.forEach((skill, index) => {
    let number = skill.querySelector(`#number${index + 1}`);
    let circle = skill.querySelector('circle');

    let targetPercentage = 75;
    let counter = 0;

    // Perímetro do círculo, alteravel aqui.
    let circumference = 1000;

    let interval = setInterval(() => {
        if (counter >= targetPercentage) {
            clearInterval(interval);
        } else {
            counter += 1;
            number.innerText = counter + '%';
            let offset = circumference - (circumference * counter / 100);
            circle.style.strokeDashoffset = offset;
        }
    }, 15);
});

