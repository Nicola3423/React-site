import React from 'react';
import Lupa from './images/lupa.jpg';


const AcessibilidadePage: React.FC = () => {
    return (
    <section id = "Acessibilidade">
        <div className="main-container">
            <main className="flex-container">
                <div className="content-wrapper">
                    <h1 className='text-blue-900 text-center text-3xl py-16'>Acessibilidade: Lupa</h1>
                    <p>
                        A implementação dessa ferramenta permite que usuários ampliem áreas específicas do conteúdo, atendendo às necessidades de pessoas com deficiência visual ou outras que necessitem de maior clareza. O sistema também é personalizável, permitindo que cada usuário ajuste o zoom de acordo com suas preferências. Essa iniciativa torna o Salesforce mais inclusivo e fácil de usar para todos, promovendo a diversidade e a igualdade no acesso à informação.
                    </p>
                </div>
                <img className="lupa-image" src={Lupa} alt="Avatar da Salesforce" />
            </main>
        </div>
    </section>
    );
}

export default AcessibilidadePage;
