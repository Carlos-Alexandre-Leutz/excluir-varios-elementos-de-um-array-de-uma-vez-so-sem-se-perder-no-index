var lista = [
    { id: 1, text: 'texto 01', excluir: true },
    { id: 2, text: 'texto 02', excluir: false },
    { id: 3, text: 'texto 03', excluir: true },
    { id: 4, text: 'texto 04', excluir: false },
    { id: 5, text: 'texto 05', excluir: true },
];
//excluir por parametro no obj
const excluiPOrParametroNoAtributo = () => {

    lista.reverse()
    for (var i = lista.length - 1; i >= 0; i--) {
        var item = lista[i];
        if (item.excluir >= 4) {
            lista.splice(i, 1);
            console.log("item excluido lista 1", item)
        }
    }
    lista.reverse()
    console.log("nova lista 1", lista)

}
//excluir por id
var lista2 = [
    { id: 1, text: 'texto 01', excluir: true },
    { id: 2, text: 'texto 02', excluir: false },
    { id: 3, text: 'texto 03', excluir: true },
    { id: 4, text: 'texto 04', excluir: false },
    { id: 5, text: 'texto 05', excluir: true },
];
const excluiPorId = (id) => {
    lista2.reverse()
    for (var i = lista2.length - 1; i >= 0; i--) {
        var item = lista2[i];
        if (item.id == id) {
            lista2.splice(i, 1);
            console.log("item excluido lista 2", item)
        }
    }
    lista2.reverse()
    console.log("nova lista 2", lista2)
}
excluiPOrParametroNoAtributo()
excluiPorId(3)
