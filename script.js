document.getElementById('calcForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let num = document.getElementById('numberInput').value;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;

    }
    console.log(sum, "Сума");
});