let autos = require ("./autos");
let personas = require("./personas")

let concesionaria = {


    personas: personas,

    autos: autos,

    

       buscarAuto: function(patente){
        for(let i = 0; i<autos.length; i++){
            if(autos[i].patente==patente){
                return autos[i];
            }
             
            }
            return null;
},

venderAuto: function(patente){
    let autoVenta = this.buscarAuto(patente);
    return autoVenta.vendido = true;
    },

    autosParaLaVenta:function (patente){
        return autos.filter(autos => autos.vendido == false)
        },

        autosNuevos: function (autos0KM){
            return this.autosParaLaVenta(autos0KM).filter(autos=>((autos.km <= 100)&&(autos.vendido == false)))
            },   

    
        listaDeVentas: function (){
            let autosvendidos = [];
            for(let i = 0; i<autos.length; i++){
                if(autos[i].vendido==true){
                    autosvendidos.push(autos[i].precio)
                    
                }

                

                }
                
                return autosvendidos;
            },


            totalDeVentas: function(){
                let preciosAutos = this.listaDeVentas();
           
                if (preciosAutos.length==0){
                   return 0;
                }
           
                let totalPrecios = preciosAutos.reduce(function(a,e){
                   return a+e;
                })
           
                return totalPrecios;
           
             },

           
                puedeComprar: function(auto, persona) {
                    if (auto.precio > persona.capacidadDePagoTotal) { 
                      return false;
                    }
                    let precioPorCuota = auto.precio / 12 
                    if (precioPorCuota > persona.capacidadDePagoEnCuotas) {
                      return false;
                    }
                    return true;
                 },

                 autosQuePuedeComprar:function(persona){
                    let autosDisponibles=this.autosParaLaVenta()
                    return autosDisponibles.filter(item=>this.puedeComprar(persona,item))
                }
             
             
         }

 
console.log(concesionaria.autosQuePuedeComprar(personas))