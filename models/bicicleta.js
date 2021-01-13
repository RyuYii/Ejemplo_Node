var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;

}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + ' | color: ' + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici){
    Bicicleta.allBicis.push(aBici);
}
Bicicleta.removeById = function(biciId){
    //var aBici = Bicicleta.findById(biciId);
    for(var i = 0;i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id == biciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }

    }
    //Bicicleta.allBicis.pop();
}

Bicicleta.findById = function(biciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == biciId);
    if(aBici) 
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id: ${biciId}`);
}


var a = new Bicicleta(1, 'Naranja', 'urbana', [-34.6012 ,-58.3861]);
var b = new Bicicleta(2, 'blanca', 'urbana', [-34.5969 ,-58.3808]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;