const listaDeCompra = [frutas,vegtales,salasa,tortillas,frijoles];
let lista = listaDeCompra.push("aceite de girasol");
let listaOriginal = listaOriginal.pop(lista);


const peliculas = [
    {
        titulos:"Francis Ford Coppola",
        director:"The Godfather",
        fecha:new Date(1972, 3, 14)
    },
    {
        titulos:"The Shawshank Redemption",
        director:"Frank Darabont",
        fecha:new Date(1994, 9, 23)
    },
    {
        titulos:"David Fincher",
        director:"Fight Club",
        fecha:new Date(1999, 9, 6)
    }   
]

const nuevaLista = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 1, 1))
const listaDirectores = peliculas.map(pelicula =>  pelicula.director );
const listaTitulos = peliculas.map(pelicula => pelicula.titulos );

const directorTitulos = directores.concat(listaTitulos);
const directores = [...listaDirectores, ...listaTitulos];