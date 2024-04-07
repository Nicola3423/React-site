import React from 'react';
import Vendas from './images/vendas.webp';
import Servicos from './images/servicos.webp';
import Marketing from './images/marketing.jpg';
import Commerce from './images/commerce.png';
import Analytics from './images/analytics.webp';
import Integracao from './images/integracao.jpg';
import Slack from './images/slack.jpg';
import TodosProdutos from './images/vejatodos.webp';

const produtos = [
    { nome: 'Vendas', imagem: Vendas },
    { nome: 'Serviços', imagem: Servicos },
    { nome: 'Marketing', imagem: Marketing },
    { nome: 'Commerce', imagem: Commerce },
    { nome: 'Analytics', imagem: Analytics },
    { nome: 'Integração', imagem: Integracao },
    { nome: 'Slack', imagem: Slack },
    { nome: 'Todos os Produtos', imagem: TodosProdutos },
];

const ProdutosPage: React.FC = () => {
    return (
    <section id="Produtos">
        <div>
            <main>
                <aside>
                    <h1 className='text-blue-900 text-center text-3xl py-16'>Produtos Salesforce</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {produtos.map((produto, index) => (
                            <div key={index} className="text-center">
                                <img src={produto.imagem} alt={produto.nome} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                <p style={{ marginTop: '10px' }}>{produto.nome}</p>
                            </div>
                        ))}
                    </div>
                </aside>
            </main>
        </div>
    </section>
    );
}

export default ProdutosPage;
