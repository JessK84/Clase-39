const comestibles = 
[
    ["FRUTAS", "manzana", "pera", "banana"], //comenzar el [i][j] desde 1 para no tener en cuenta "FRUTAS"
    ["VERDURAS", "choclo", "brocolí", "lechuga"],
    ["LEGUMBRES", "lenteja", "garbanzo", "portotos"],
]
let mensaje =`` ;

for (let i=0; i < comestibles.length; i++){  
    mensaje +=comestibles[i][0]+  ` \n`+`________________`+ ` \n`;
    console.log(comestibles[i][0])
    for(let j= 1; j< comestibles[i].length; j++){ // comienza j en 1 porque está ocupado por una categoría.
        // console.log(`comestibles [${i}][${j}]`)
        mensaje +=comestibles[i][j]+ ` \n`;
    }
    mensaje +=`________________`+ ` \n`
}
alert(mensaje)


