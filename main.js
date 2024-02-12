function calcular(){
    var valIni = document.getElementById("valIni").value
    var aporte = document.getElementById("aporte").value
    var juros = document.getElementById("juros").value
    var tempo = document.getElementById("tempo").value
    var jurosDec = juros/100
    var resultados = document.getElementById("resultados")
    var main = document.getElementById("main")


    var tempoAnos = tempo*12

    var selectTempo = document.getElementById("selectTempo")

    if(valIni == "" || aporte == "" || juros == ""){
        alert("Por favor, preencha todos os campos!")

    }else if(selectTempo.value === "mensal"){
        var total = valIni * (1 + (jurosDec)) ** tempo + aporte * (((1 + (jurosDec)) ** tempo - 1) / (jurosDec))
        
        var totalJuros = total - valIni - (tempo*aporte)

    }else if(selectTempo.value === "anual"){
        var total = valIni * (1 + (juros/100)) ** (12 * tempo) + aporte * (((1 + (juros/100)) ** (12 * tempo) - 1) / (juros/100))

        var totalJuros = total - valIni - (tempoAnos*aporte)

    }

    var totalInvest = total - totalJuros

    var arrendTotalJuros = +(totalJuros.toFixed(2))
    var arrendTotal = +(total.toFixed(2))
    var arrendTotalInvest = +(totalInvest.toFixed(2))

    var formatTotal = arrendTotal.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2
    })

    var formatTotalJuros = arrendTotalJuros.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2
    })

    var formatTotalInvest = arrendTotalInvest.toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumFractionDigits: 2
    })

    

    main.classList.add("main-transition")

    main.style.cssText = "height: 600px" 

    resultados.innerHTML = `<div class="itens2" id="itens2">
    <p>Valor total:</p>
    <div class="resultTotal">
        ${formatTotal}
    </div>
    <p>Valor do juros:</p>
    <div class="resultJuros">
        ${formatTotalJuros}
    </div>
    <p>Valor investido:</p>
    <div class="resultInvest">
        ${formatTotalInvest}
    </div>
</div>`

    resultados.style.cssText = "opacity: 1"
    
}

function limpar(){
    valIni.value = "" 
    aporte.value = ""
    juros.value = ""
    tempo.value = "" 

    resultados.style.cssText = "opacity: 0;"
    main.style.cssText = "height: 350px"
}