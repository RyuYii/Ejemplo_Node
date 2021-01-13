
var c = [-16.54655,-68.02214]
var mymap = L.map('mapid').setView(c, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//L.marker(c).addTo(mymap)
 //   .bindPopup('Nos Ubicamos aqui mero!!!<br> Easily customizable.')
 //   .openPopup();


$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title : bici.id}).addTo(mymap)
                .bindPopup('Nos Ubicamos aqui mero!!!<br> Easily customizable.')
                .openPopup();
        });
    }
})