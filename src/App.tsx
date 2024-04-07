// Importando o React para poder usar JSX
import React from 'react';

// Importando os estilos CSS para a aplicação
import './App.css';

// Importando os diferentes componentes da aplicação
import Homepage from './components/Home';
import LoginPage from './components/Login';
import ProdutosPage from './components/Produtos';
import ServicosPage from './components/Servicos';
import SobrePage from './components/Sobre';
import AcessibilidadePage from './components/Acessibilidade';

// Definindo o componente principal da aplicação como uma função de componente React
const App: React.FC = () => {
  return (
    <>
      {/* Renderizando cada um dos componentes importados */}
      <Homepage></Homepage>
      <ServicosPage></ServicosPage>
      <ProdutosPage></ProdutosPage>
      <AcessibilidadePage></AcessibilidadePage>
      <SobrePage></SobrePage>
      <LoginPage></LoginPage>

      {/* Renderizando o rodapé da aplicação */}
      <footer>&copy; 2023 Salesforce. Todos os direitos reservados </footer>
    </>
  );
}

// Exportando o componente principal para que ele possa ser utilizado em outros lugares da aplicação
export default App;
