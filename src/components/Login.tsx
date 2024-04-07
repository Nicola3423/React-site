import React from 'react';
import LoginImage from './images/login.png';

const LoginPage: React.FC = () => {
    return (
    <section id="Login">
        <div className="main-container">
            <div className="flex-container">
                <div className="content-wrapper">
                    <header>
                        <div className="login-section">
                            <aside>
                                <h1 className='text-blue-900 text-center text-3xl mb-4'>Faça login agora</h1>
                                <h1 className='text-blue-900 text-center text-3xl mb-8'>na Salesforce</h1>
                                <p className='py-4'>Todo tipo de conteúdo. Tudo para te ajudar a crescer.</p>
                                <div className="form-wrapper">
                                    <form>
                                        <div className="form-group mb-4">
                                            <label htmlFor="nome" className="block font-bold mb-1">Nome:</label>
                                            <input type="text" id="nome" placeholder="Nome" className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="email" className="block font-bold mb-1">E-mail:</label>
                                            <input type="email" id="email" placeholder="E-mail" className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="senha" className="block font-bold mb-1">Senha:</label>
                                            <input type="password" id="senha" placeholder="Senha" className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Enviar" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300" />
                                        </div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                        <div className="imghome">
                            <img src={LoginImage} alt="Login"/>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </section>
    );
}

export default LoginPage;
