const ctx = document.getElementById('chart-t1').getContext('2d');


const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1° rodada', '2° rodada', '3° rodada', '4° rodada', '5° rodada', '6° rodada' , '7° rodada' , '8° rodada' , '9° rodada' , '10° rodada'],
        datasets: [{
            data: [3 , 1, 5, 0, 2, 3, 4, 1, 0, 2],
            backgroundColor: 'rgb(8, 18, 58)' ,
            categoryPercentage: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
