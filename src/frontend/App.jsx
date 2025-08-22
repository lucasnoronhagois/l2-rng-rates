import React, { useState } from 'react'
import RNGSimulator from './components/RNGSimulator'

function App() {
  const [showSimulator, setShowSimulator] = useState(true)
  const [language, setLanguage] = useState('pt') // 'pt' for Portuguese, 'en' for English

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
              Simulator
            </button>
            <button
              className={`btn ${!showSimulator ? 'btn-outline-light' : 'btn-light'}`}
              onClick={() => setShowSimulator(false)}
            >
              About
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
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mb-0">Sobre o L2 RNG Simulator</h2>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={`btn btn-sm ${language === 'pt' ? 'btn-light' : 'btn-outline-light'}`}
                        onClick={() => setLanguage('pt')}
                      >
                        🇧🇷 Português
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${language === 'en' ? 'btn-light' : 'btn-outline-light'}`}
                        onClick={() => setLanguage('en')}
                      >
                        🇺🇸 English
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {language === 'pt' ? (
                    <>
                      <p className="lead">
                        Este simulador foi criado para testar a sorte (RNG - Random Number Generator)
                        baseado nas taxas reais do Lineage 2.
                      </p>

                      <h5>Funcionalidades:</h5>
                      <ul>
                        <li>🎯 Campo personalizável para definir qualquer chance (0% a 100%)</li>
                        <li>🎮 Buttons with preset L2 chances (enchant, craft ou chance direta.)</li>
                        <li>📊 History of the last 20 attempts</li>
                        <li>📈 Estatísticas em tempo real (sucessos, falhas, taxa de sucesso)</li>
                        <li>🔄 Function to reset all statistics</li>
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
                    </>
                  ) : (
                    <>
                      <p className="lead">
                        This simulator was created to test luck (RNG - Random Number Generator)
                        based on the real rates of Lineage 2.
                      </p>

                      <h5>Features:</h5>
                      <ul>
                        <li>🎯 Customizable field to set any chance (0% to 100%)</li>
                        <li>🎮 Buttons with preset L2 chances (enchant, craft or direct chance.)</li>
                        <li>📊 History of the last 20 attempts</li>
                        <li>📈 Real-time statistics (successes, failures, success rate)</li>
                        <li>🔄 Function to reset all statistics</li>
                      </ul>

                      <h5>How to use:</h5>
                      <ol>
                        <li>Enter a custom chance OR click one of the preset chances</li>
                        <li>Click "Test RNG" to perform the test</li>
                        <li>See the result (SUCCESS or FAIL) and track your statistics</li>
                      </ol>

                      <div className="alert alert-warning mt-4">
                        <strong>Note:</strong> This is a simulator.
                        The results are based on real random numbers and may not reflect
                        exactly the in-game experience.
                      </div>
                    </>
                  )}
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
