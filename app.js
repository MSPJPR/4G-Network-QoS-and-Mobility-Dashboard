// Initial QoS data
let qosData = {
    labels: ["Latency (ms)", "Jitter (ms)", "Packet Loss (%)"],
    datasets: [
        {
            label: 'QoS Metrics',
            data: [50, 5, 0.2],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            borderColor: ['#2980b9', '#27ae60', '#c0392b'],
            borderWidth: 1
        }
    ]
};

// Render QoS Chart
const ctx = document.getElementById('qosChart').getContext('2d');
let qosChart = new Chart(ctx, {
    type: 'bar',
    data: qosData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to simulate QoS changes
function simulateQoS() {
    let latency = Math.floor(Math.random() * 100);
    let jitter = Math.floor(Math.random() * 30);
    let packetLoss = (Math.random() * 2).toFixed(2);

    document.getElementById('latency').innerText = latency + 'ms';
    document.getElementById('jitter').innerText = jitter + 'ms';
    document.getElementById('packetLoss').innerText = packetLoss + '%';

    qosChart.data.datasets[0].data = [latency, jitter, packetLoss];
    qosChart.update();
}

// Function to simulate mobility handover
function simulateHandover() {
    const cells = ["Cell A", "Cell B", "Cell C", "Cell D", "Cell E"];
    let currentCell = document.getElementById('cell');
    let newCell;

    do {
        newCell = cells[Math.floor(Math.random() * cells.length)];
    } while (newCell === currentCell.innerText);

    currentCell.innerText = newCell;
}
