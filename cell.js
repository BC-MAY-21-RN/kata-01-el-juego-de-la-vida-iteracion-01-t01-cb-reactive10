//Que nos piden
//implementar un programa que nos permita verificar la poblacion de las celulas
//Que nos dan
//1. celula viva con menos de dos vecinas muere salida por pantalla ('Causa fuera la subpoblacion')
//2. Celula viva con mas de tres vecinos vivos muere salida por pantalla ('Hacinamiento')
//3. Celula viva con dos o tres vecinos vivos salida por pantalla (vive en la proxima generacion)
//4. Celula muerta con exatamente tres vecinos vivos se convierte en celular viva
//Como lo hacemos

// CREAR MATRIZ
let C = 8;
let R = 4;  

const matrix=[]
for(let i=0; i<R; i++){
  matrix[i]= new Array(C)
}

//console.log(matrix)


//Recorrer la matriz para llenar la primera fila
for (let i = 0; i < matrix.length; i++) {
    //console.log(matrix[i].length);
  for(let j=0; j<matrix[i].length;j++){
matrix[i][j]='.'
  }
}

matrix[1][4]= '*'
matrix[2][3]= '*'
matrix[2][4]= '*'


//IMPRIMIR MATRIZ
console.log('GENERACION 1: ');
/*for(let i=0; i<R; i++){
    let line= '';
    for (let j = 0; j < matrix[i].length; j++) {
        line += matrix[i][j] + ' '; 
    }
    console.log(line);
}*/

for(let elemento in matrix){
  console.log(elemento + " = " + matrix[elemento])
}

//Imprimir MAtr
//LLENAR MATRIZ GENERACION 1
//console.log(matrix)

/**
 * R i se mueve en horizontal
 * C  j se mueve en vertical
........
....*...
...**...
........

 */