import React from 'react';

const ServicosPage: React.FC = () => {
    return (
    <section id ="Sevicos">
        <div>
            <main>
                <aside>
                    <h1 className='text-blue-900 text-center text-3xl py-6'>Serviços</h1>
                    <h2 className='py-5 text-blue-900 text-center text-3xl '><span>O que há de novo na Salesforce?</span></h2>
                    <div className="flex flex-row justify-center mt-4">
                        <div className="border border-gray-300 rounded-lg p-4 mx-4">
                            <p className="text-center py-4">Conheça o Salesforce Starter: o pacote de CRM simples e poderoso.</p>
                            <a href="https://www.salesforce.com/br/products/salesforce-starter/" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Conheça Agora</a>
                        </div>
                        <div className="border border-gray-300 rounded-lg p-4 mx-4">
                            <p className="text-center py-4">Encontre uma solução de IA adaptada às suas necessidades de negócios.</p>
                            <a href="https://salesforcecustomer360.herokuapp.com/?_ga=2.146264439.2134737465.1711922826-306636531.1710218923" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Crie Seu Próprio Customer 360</a>
                        </div>
                        <div className="border border-gray-300 rounded-lg p-4 mx-4">
                            <p className="text-center py-4">Expanda sua pequena empresa com um CRM projetado para você.</p>
                            <a href="https://www.salesforce.com/br/solutions/small-business-solutions/overview/" target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Explore a Solução</a>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    </section>
    );
}

export default ServicosPage;
