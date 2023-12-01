
function generateRandomTimestamp() {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const randomTimestamp = Date.now() + Math.floor(Math.random() * oneDayInMilliseconds);
    return randomTimestamp;
}

function calculateCountdown(targetTimestamp) {
    const now = Date.now();
    const timeDifference = targetTimestamp - now;

    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} `;
    } else {
      return 'waktu telah habis';
    }
  }

export {
    generateRandomTimestamp,
    calculateCountdown
}