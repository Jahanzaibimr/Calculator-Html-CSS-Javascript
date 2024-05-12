document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                try {
                    const result = eval(expression);
                    inputBox.value = result;
                    expression = result.toString(); // Update expression with result
                } catch (error) {
                    inputBox.value = 'Error';
                    expression = '';
                }
            } else if (buttonText === 'AC') {
                expression = '';
                inputBox.value = '';
            } else if (buttonText === 'DEL') {
                expression = expression.slice(0, -1);
                inputBox.value = expression;
            } else {
                expression += buttonText;
                inputBox.value = expression;
            }
        });
    });
});
