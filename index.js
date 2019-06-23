// Variables 
var totalPuntos = 0;
var amigos = ["Mike","Lucas","Dustin","Eleven","Max"]; // Esto es un vector
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0]; // Esto es un vector o new Array(5);
var porcentajeCadaAmigo = [0,0,0,0,0];
var resultado = "";
var metaDePuntos = "";

for(var i=0; i < amigos.length; i++){
    for(var j=0; j < artefactos; j++){
        do{
            var artefacto = prompt("Digite los puntos del artefacto " + (j+1) + " recolectado por " + amigos[i]);
            artefacto = parseInt(artefacto);
        }while(artefacto < 1 || artefacto > 100)
        
        puntosArtefactosPorAmigo[i] += artefacto;
        //alert("El total de puntos va en " + puntosArtefactosPorAmigo[i]);
    }
    

}for(var k=0; k < puntosArtefactosPorAmigo.length; k++){
    if(puntosArtefactosPorAmigo[k] >= 250){
        metaDePuntos = "Ha cumplido con el minimo de puntos para salvar el pueblo";
    }else{
        metaDePuntos = "No ha cumplido con los puntos minimos";
}
    totalPuntos += puntosArtefactosPorAmigo[k];
    document.write("</br>" + "Los puntos que recogio " + amigos[k] + " fueron en total: " + puntosArtefactosPorAmigo[k] + "</br>");
    totalPuntos = parseInt(totalPuntos);
    document.write(amigos[k] + ": " + metaDePuntos + "</br>");

}

for(var x=0; x < porcentajeCadaAmigo.length; x++){
    porcentajeCadaAmigo[x] = puntosArtefactosPorAmigo[x] * 100 / totalPuntos + "%";
    document.write("</br>" + " El porcentaje de " + amigos[x] + " es igual a " + porcentajeCadaAmigo[x]+ "</br>");
    porcentajeCadaAmigo[x] = parseInt(porcentajeCadaAmigo);
}

document.write("</br>" + "El total de puntos recogido por todos los amigos es de " + totalPuntos);

resultado = salvacionDelPueblo(totalPuntos);
function salvacionDelPueblo(totalPuntos){
    if(totalPuntos >= 1230){
        return "El pueblo se ha salvado";
    }else{
        return "El pueblo esta condenado a su destrucción";
    }
}
document.write("</br>" + "<h3>" + resultado);




