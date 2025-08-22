import React, { useState } from 'react'
import './RNGSimulator.css'

const RNGSimulator = () => {
  const [customChance, setCustomChance] = useState(50)
  const [currentChance, setCurrentChance] = useState(50)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])
  const [statistics, setStatistics] = useState({
    totalAttempts: 0,
    successes: 0,
    failures: 0,
    successRate: 0
  })
  const [totalSpent, setTotalSpent] = useState({
    adena: 0,
    coins: 0
  })

  // Chances predefinidas com preços
  const predefinedChances = [
    { label: 'Book 1*', value: 50, image: '/book1.png', price: { adena: 0, coins: 56 } },
    { label: 'Book 2*', value: 30, image: '/book2.png', price: { adena: 0, coins: 78 } },
    { label: 'Book 3*', value: 10, image: '/book3.png', price: { adena: 0, coins: 173 } },
    { label: 'Book 4*', value: 5, image: '/book4.png', price: { adena: 75000000, coins: 1600 } },
    { label: 'Enchant Armor', value: 36, image: '/EAA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Armor', value: 31, image: '/EAA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Armor', value: 29, image: '/EAA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Armor', value: 26, image: '/EAA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Weapon', value: 56, image: '/EWA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Weapon', value: 51, image: '/EWA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Weapon', value: 46, image: '/EWA.png', price: { adena: 0, coins: 0 } },
    { label: 'Enchant Weapon', value: 41, image: '/EWA.png', price: { adena: 0, coins: 0 } }
  ]

  const performRNG = () => {
    const randomValue = Math.random() * 100
    const success = randomValue <= currentChance

    // Encontrar o item selecionado para calcular o preço
    const selectedItem = predefinedChances.find(item => item.value === currentChance)

    const newResult = {
      success,
      chance: currentChance,
      roll: randomValue.toFixed(2),
      timestamp: new Date().toLocaleTimeString(),
      item: selectedItem?.label || 'Custom',
      price: selectedItem?.price || { adena: 0, coins: 0 }
    }

    setResult(newResult)

    // Atualizar histórico
    const newHistory = [newResult, ...history].slice(0, 20) // Manter apenas os últimos 20
    setHistory(newHistory)

    // Atualizar estatísticas
    const newStats = {
      totalAttempts: statistics.totalAttempts + 1,
      successes: statistics.successes + (success ? 1 : 0),
      failures: statistics.failures + (success ? 0 : 1)
    }
    newStats.successRate = ((newStats.successes / newStats.totalAttempts) * 100).toFixed(1)
    setStatistics(newStats)

    // Atualizar gastos totais
    if (selectedItem?.price) {
      setTotalSpent(prev => ({
        adena: prev.adena + selectedItem.price.adena,
        coins: prev.coins + selectedItem.price.coins
      }))
    }
  }

  const setPresetChance = (chance) => {
    setCurrentChance(chance)
    setCustomChance(chance)
  }

  const handleCustomChanceChange = (e) => {
    const value = parseFloat(e.target.value)
    if (value >= 0 && value <= 100) {
      setCustomChance(value)
      setCurrentChance(value)
    }
  }

  const resetStatistics = () => {
    setHistory([])
    setStatistics({
      totalAttempts: 0,
      successes: 0,
      failures: 0,
      successRate: 0
    })
    setResult(null)
    setTotalSpent({ adena: 0, coins: 0 })
  }

  // Função para formatar números de adena
  const formatAdena = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`
    }
    return amount.toString()
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Painel Principal */}
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="mb-0">🎲 L2 RNG Simulator</h2>
            </div>
            <div className="card-body">
              {/* Campo de Chance Personalizada */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Customized chance (%)</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      value={customChance}
                      onChange={handleCustomChanceChange}
                      min="0"
                      max="100"
                      step="0.1"
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-end">
                  <button
                    className="btn btn-success btn-lg w-100"
                    onClick={performRNG}
                  >
                    🎯 Try RNG
                  </button>
                </div>
              </div>

              {/* Chances Predefinidas */}
              <div className="mb-4">
                <h5 className="mb-3">Preset chances:</h5>
                <div className="row g-2">
                  {predefinedChances.map((preset, index) => (
                    <div key={index} className="col-md-3">
                      <button
                        className={`btn btn-outline-primary btn-sm w-100 ${currentChance === preset.value ? 'active' : ''
                          }`}
                        onClick={() => setPresetChance(preset.value)}
                        style={{ minHeight: '100px', padding: '8px' }}
                      >
                        {preset.image && (
                          <img
                            src={preset.image}
                            alt={preset.label}
                            className="img-fluid mb-1"
                            style={{ maxHeight: '35px', width: 'auto', display: 'block', margin: '0 auto' }}
                          />
                        )}
                        <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
                          {preset.label}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                          {preset.value}%
                        </div>
                        {preset.price && (
                          <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                            <div style={{ color: '#28a745' }}>
                              💰 {formatAdena(preset.price.adena)} Adena
                            </div>
                            {preset.price.coins > 0 && (
                              <div style={{ color: '#ffc107' }}>
                                {preset.price.coins} Giran Seal
                              </div>
                            )}
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resultado Atual */}
              {result && (
                <div className="mb-4">
                  <div className={`alert ${result.success ? 'alert-success' : 'alert-danger'} text-center`}>
                    <h3 className="mb-2">
                      {result.success ? '✅ SUCCESS!' : '❌ FAIL!'}
                    </h3>
                    <p className="mb-0">
                      {result.item} | Chance: {result.chance}% | Roll: {result.roll} |
                      {result.success ? ` Success (≤ ${result.chance})` : ` Falha (> ${result.chance})`}
                    </p>
                    {result.price && result.price.adena > 0 && (
                      <p className="mb-0 mt-2">
                        <small>
                          💰 {formatAdena(result.price.adena)} Adena
                          {result.price.coins > 0 && ` |  ${result.price.coins} Giran Seal`}
                        </small>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Estatísticas */}
              <div className="row mb-4">
                <div className="col-md-2">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h6 className="card-title">Total</h6>
                      <h4 className="text-primary">{statistics.totalAttempts}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h6 className="card-title">Success</h6>
                      <h4 className="text-success">{statistics.successes}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h6 className="card-title">Fails</h6>
                      <h4 className="text-danger">{statistics.failures}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <h6 className="card-title">Rate</h6>
                      <h4 className="text-info">{statistics.successRate}%</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card bg-success text-white">
                    <div className="card-body text-center">
                      <h6 className="card-title">💰 Adena</h6>
                      <h4>{formatAdena(totalSpent.adena)}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card bg-warning text-dark">
                    <div className="card-body text-center">
                      <h6 className="card-title">Giran Seal</h6>
                      <h4>{totalSpent.coins}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-warning"
                  onClick={resetStatistics}
                  disabled={statistics.totalAttempts === 0}
                >
                  🔄 Reset
                </button>
              </div>
            </div>
          </div>
                     {/* Discord Section */}
           <div className="text-center mt-3">
             <a 
               href="https://discord.com/users/335859108425236493" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-decoration-none"
             >
               <div className="discord-simple">
                 <i className="fab fa-discord text-primary me-2"></i>
                 <span className="discord-text">
                   <img src="/discord.png" alt="Discord" className="discord-icon me-1" />
                   lucasng
                 </span>
               </div>
             </a>
           </div>
        </div>

        {/* Histórico */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header bg-secondary text-white">
              <h5 className="mb-0">📊 Recent Record</h5>
            </div>
            <div className="card-body" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {history.length === 0 ? (
                <p className="text-muted text-center">No attempt yet.</p>
              ) : (
                history.map((attempt, index) => (
                  <div
                    key={index}
                    className={`border-start border-4 border-${attempt.success ? 'success' : 'danger'
                      } ps-3 mb-3`}
                  >
                    <div className="d-flex justify-content-between">
                      <span className={`fw-bold ${attempt.success ? 'text-success' : 'text-danger'
                        }`}>
                        {attempt.success ? 'SUCCESS' : 'FAIL'}
                      </span>
                      <small className="text-muted">{attempt.timestamp}</small>
                    </div>
                    <small className="text-muted">
                      Chance: {attempt.chance}% | Roll: {attempt.roll}
                      {attempt.price && attempt.price.adena > 0 && (
                        <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
                          💰 {formatAdena(attempt.price.adena)} Adena
                          {attempt.price.coins > 0 && ` |  ${attempt.price.coins} Coins`}
                        </div>
                      )}
                    </small>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RNGSimulator
