import axios from 'axios';  

const instancia = axios.create({
    baseURL: 'http://localhost:3300/'
})

export const getProdutos = async () => {
    const response = await instancia.get('/produtos');
    const json = await response.data.produtos;
    return json;
}

export const getProdutosPorCategoria = async (categoria) => {    
    const response = await instancia.get(`/produtos/categoria/${categoria}`);
    const json = await response.data.produtos;
    return json;
}