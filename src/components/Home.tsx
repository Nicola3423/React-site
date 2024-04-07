import React from 'react';
import logoSalesforce from './images/salesforce.png';
import logoHome from './images/ursosales.webp';

const HomePage: React.FC = () => {
    return (
    <section id='Home'>
        <div>
            <header>
                <div className="logo">
                    <img src={logoSalesforce} alt="Logo Salesforce"/>
                </div>
                <div className='menu' style={{ marginLeft: '20px', marginRight: 'auto' }}>
                    <a href="#Home">Home</a>
                    <a href="#Sevicos">Serviços</a>
                    <a href="#Produtos">Produtos</a>
                    <a href="#Acessibilidade">Acessibilidade</a>
                    <a href="#Sobre">Sobre/Equipe</a>
                    <a href="organograma.html">Organograma</a>
                </div>
                <div className="login-button" style={{ marginRight: '20px' }}>
                    <a href="#Login"><button id="inscreva-se-btn">Faça login</button></a>
                </div>
            </header>

            <main>
                <aside>
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Experimente o
                            Salesforce Starter
                            Suite gratuitamente.
                        </h1>
                    </div>
                    <p className='primary-text'>
                        Reúna marketing, vendas e atendimento em um único aplicativo. Experimente o Salesforce Starter Suite hoje mesmo. Não há nada para instalar. Não é necessário cartão de crédito.
                    </p>
                </aside>
                <article>
                    <img className="imghome" src={logoHome} alt="Avatar da Salesforce" />
                </article>
            </main>
        </div>
    </section>
    );
}

export default HomePage;
