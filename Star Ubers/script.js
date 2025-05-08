function UberStars(){
    let disCorrida = Number(prompt ("Digite a distância da corrida em (Km): "))
    tempoSeg = disCorrida/ 300000
    tempoMin = tempoSeg / 60
    tempoHora = tempoMin / 60
    tempoDia = tempoHora / 24
    tempoMes = tempoDia / 30
    tempoAno = tempoMes / 12
    sobraSeg = tempoSeg % 60
    sobraMin = tempoMin % 60
    sobraHora = tempoHora % 24
    sobraDia = tempoDia % 30
    sobraMes = tempoMes % 12

   

        if (tempoSeg < 60){
            alert ("O tempo total da corrida foi de " + tempoSeg + " segundos.")
        }else if (tempoMin < 60){
            alert ("O tempo total da corrida foi de " + tempoMin + " minutos." + " e " + sobraSeg + " segundos.")
        }else if (tempoHora < 24){
            alert ("O tempo total da corrida foi de " + tempoHora + " horas." + " e " + sobraMin + " minutos." + " e " + sobraSeg + " segundos.")
        }else if (tempoDia < 30){
            alert ("O tempo total da corrida foi de " + tempoDia + " dias." + " e " + sobraHora + " horas." + " e " + sobraMin + " minutos." + " e " + sobraSeg + " segundos.")
        }else if (tempoMes < 12){
            alert ("O tempo total da corrida foi de " + tempoMes + " meses." + " e " + sobraDia + " dias." + " e " + sobraHora + " horas." + " e " + sobraMin + " minutos." + " e " + sobraSeg + " segundos.")
        }else if (tempoAno > 12){
            alert ("O tempo total da corrida foi de " + tempoAno + " anos." + " e " + sobraMes + " meses." + " e " + sobraDia + " dias." + " e " + sobraHora + " horas." + " e " + sobraMin + " minutos." + " e " + sobraSeg + " segundos.")}
    
}