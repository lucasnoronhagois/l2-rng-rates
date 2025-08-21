import React, { useState } from 'react'
import RNGSimulator from './components/RNGSimulator'

function App() {
  const [showSimulator, setShowSimulator] = useState(true)

  return (
    <div className="min-vh-100 bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <span className="navbar-brand">🎲 L2 RNG Simulator</span>
          <div className="navbar-nav ms-auto">
            <button
              className={`btn ${showSimulator ? 'btn-outline-light' : 'btn-light'} me-2`}
              onClick={() => setShowSimulator(true)}
            >
              Simulador
            </button>
            <button
              className={`btn ${!showSimulator ? 'btn-outline-light' : 'btn-light'}`}
              onClick={() => setShowSimulator(false)}
            >
              Sobre
            </button>
          </div>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      {showSimulator ? (
        <RNGSimulator />
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-header bg-info text-white">
                  <h2 className="mb-0">Sobre o L2 RNG Simulator</h2>
                </div>
                <div className="card-body">
                  <p className="lead">
                    Este simulador foi criado para testar a sorte (RNG - Random Number Generator) 
                    baseado nas taxas reais do Lineage 2.
                  </p>
                  
                  <h5>Funcionalidades:</h5>
                  <ul>
                    <li>🎯 Campo personalizável para definir qualquer chance (0% a 100%)</li>
                    <li>🎮 Botões com chances predefinidas do L2 (enchant, drops, etc.)</li>
                    <li>📊 Histórico das últimas 20 tentativas</li>
                    <li>📈 Estatísticas em tempo real (sucessos, falhas, taxa de sucesso)</li>
                    <li>🔄 Função para resetar todas as estatísticas</li>
                  </ul>

                  <h5>Como usar:</h5>
                  <ol>
                    <li>Digite uma chance personalizada OU clique em uma das chances predefinidas</li>
                    <li>Clique em "Testar RNG" para realizar o teste</li>
                    <li>Veja o resultado (SUCCESS ou FAIL) e acompanhe suas estatísticas</li>
                  </ol>

                  <div className="alert alert-warning mt-4">
                    <strong>Nota:</strong> Este é um simulador. 
                    Os resultados são baseados em números aleatórios reais e podem não refletir 
                    exatamente a experiência do jogo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
