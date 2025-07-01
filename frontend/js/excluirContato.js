import { excluirContato } from "./sistema.js";



const params = new URLSearchParams(window.location.search);
const idContato = params.get('idContato');

await excluirContato(idContato);

