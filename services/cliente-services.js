//Comentarios para utilizar no terminal
//(usar na pasta admin) Para rodar o server do json usar: npx json-server --watch db.json 
//Para rodar o browser sync : browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html


const ListaClientes = () =>{
    return fetch(`http://localhost:3000/profile`)
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel listar os clientes')
    })
    }


const criaCliente = (nome ,email) => {
    return fetch(`http://localhost:3000/profile`,{
    method: 'POST',
    headers: {'content-Type': 'application/json'},
    body: JSON.stringify({nome: nome ,
                         email: email})
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possivel criar um cliente')
    })
}


const   removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'DELETE'}
    ).then(resposta =>{
        if(!resposta.ok){
            throw new Error('Não foi possivel remover um cliente')
        }
    })
}

const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar um cliente')
    })
}

const atualizaCliente = (id , nome , email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:
            JSON.stringify({
                nome : nome , 
                email : email
            })
    
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar um cliente')
    })    
}

export const clienteServices = {
    ListaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}