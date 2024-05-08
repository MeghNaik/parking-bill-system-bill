const licensePlateInput = document.getElementById('licensePlate');
const entryTimeInput = document.getElementById('entryTime');
const calculateButton = document.getElementById('calculateButton');
const billContainer = document.getElementById('bill-container');
const plateDisplay = document.getElementById('plateDisplay');
const entryTimeDisplay = document.getElementById('entryTimeDisplay');
const exitTimeDisplay = document.getElementById('exitTimeDisplay');
const parkingTimeDisplay = document.getElementById('parkingTimeDisplay');
const totalBillDisplay = document.getElementById('totalBillDisplay');

calculateButton.addEventListener('click', function() {
  const licensePlate = licensePlateInput.value;
  const entryTime = new Date(entryTimeInput.value);

  // Simulate user entering exit time (replace with actual input)
  const exitTime = new Date();

  // Calculate parking time in hours (adjust for your pricing model)
  const parkingTime = (exitTime - entryTime) / (1000 * 60 * 60);

  // Set fixed rate for simplicity (replace with dynamic pricing)
  const hourlyRate = 2;
  const totalBill = parkingTime * hourlyRate;

  plateDisplay.textContent = licensePlate;
  entryTimeDisplay.textContent = entryTime.toLocaleString();
  exitTimeDisplay.textContent = exitTime.toLocaleString();
  parkingTimeDisplay.textContent = parkingTime.toFixed(2) + ' hours';
  totalBillDisplay.textContent = totalBill.toFixed(2);

  billContainer.style.display = 'block';
});
