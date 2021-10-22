const precios = [150, 88, 66, 99, 100];
let acum = 0;
let prom = 0;
for (let i = 0; i <= precios.length; i++) {



    // suma = parseInt(precios[i]) + parseInt(suma);
    
    console.log( precios[i] );

    acum = precios[i] + acum;

  
    
}

prom = acum / precios.length;

console.log( prom );
