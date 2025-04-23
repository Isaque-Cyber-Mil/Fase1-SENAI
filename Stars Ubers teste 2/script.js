document.getElementById('uber-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const distanceInKm = parseFloat(document.getElementById('distance').value);
    const speedOfLightKmPerSec = 299792; // Velocidade da luz em km/s

    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        document.getElementById('result').textContent = "Por favor, insira uma distância válida.";
        return;
    }

    // Calcula o tempo em segundos
    let timeInSeconds = distanceInKm / speedOfLightKmPerSec;
    let resultText = `Tempo necessário para viajar ${distanceInKm.toLocaleString()} km na velocidade da luz:\n`;

    // Adiciona o tempo em segundos
    resultText += `- ${timeInSeconds.toFixed(2)} segundos\n`;

    // Adiciona o tempo em minutos, se aplicável
    if (timeInSeconds >= 60) {
        let timeInMinutes = timeInSeconds / 60;
        resultText += `- ${timeInMinutes.toFixed(2)} minutos\n`;

        // Adiciona o tempo em horas, se aplicável
        if (timeInMinutes >= 60) {
            let timeInHours = timeInMinutes / 60;
            resultText += `- ${timeInHours.toFixed(2)} horas\n`;

            // Adiciona o tempo em dias, se aplicável
            if (timeInHours >= 24) {
                let timeInDays = timeInHours / 24;
                resultText += `- ${timeInDays.toFixed(2)} dias\n`;

                // Adiciona o tempo em meses, se aplicável
                if (timeInDays >= 30) {
                    let timeInMonths = timeInDays / 30;
                    resultText += `- ${timeInMonths.toFixed(2)} meses\n`;

                    // Adiciona o tempo em anos, se aplicável
                    if (timeInMonths >= 12) {
                        let timeInYears = timeInMonths / 12;
                        resultText += `- ${timeInYears.toFixed(2)} anos\n`;
                    }
                }
            }
        }
    }

    // Exibe o resultado
    document.getElementById('result').textContent = resultText;
});