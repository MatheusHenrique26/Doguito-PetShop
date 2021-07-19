import { clienteServices } from "../services/cliente-services.js"
const criaNovaLinha = (nome , email , id) =>{
    const LinhaNovoCliente = document.createElement('tr')
        const conteudo = `
                <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
                `
        LinhaNovoCliente.innerHTML = conteudo
        LinhaNovoCliente.dataset.id = id
        return LinhaNovoCliente 
    }
                    
    const tabela = document.querySelector('[data-tabela]')

    tabela.addEventListener('click', async(evento) => {
    const ehBotaoDeletar = evento.target.className === "botao-simples botao-simples--excluir"
    if(ehBotaoDeletar){
        try{
            const linhaCliente = evento.target.closest('[data-id]')
            let id =linhaCliente.dataset.id
            
            await clienteServices.removeCliente(id)
                  linhaCliente.remove()
        }
        catch(error){
            console.log(error)
            window.location.href = '../telas/erro.html'
        }
    }

    })
    const render = async ()=>{
        try{
            const cliente = await clienteServices.ListaClientes()
            cliente.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email,elemento.id))
    })
        }
        catch(error){
            console.log(error)
            window.location.href = '../telas/erro.html'
        }
    
    }
    render()
