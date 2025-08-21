# Imagens e Preços - L2 RNG Simulator

## Estrutura de Imagens

As imagens estão localizadas em `src/frontend/public/`:

### Books
- `book1.png` - Book 1* (50% de chance) - 1M Adena
- `book2.png` - Book 2* (30% de chance) - 5M Adena  
- `book3.png` - Book 3* (10% de chance) - 15M Adena
- `book4.png` - Book 4* (5% de chance) - 50M Adena

### Enchant Scrolls
- `EAA.png` - Enchant Armor Scroll (36%, 31%, 29%, 26% de chance)
- `EWA.png` - Enchant Weapon Scroll (56%, 51%, 46%, 41% de chance)

## Como Funciona

As imagens e preços são exibidos automaticamente nos botões do simulador:

1. **Posicionamento**: As imagens aparecem acima do texto do item
2. **Tamanho**: Máximo de 35px de altura, largura automática
3. **Centralização**: Imagens centralizadas nos botões
4. **Preços**: Exibidos abaixo da chance com formatação automática (K/M)
5. **Moedas**: Suporte para Adena (💰) e Coins (🪙)
6. **Responsividade**: Se adaptam ao tamanho do botão

## Implementação

As imagens e preços são referenciados no array `predefinedChances`:

```javascript
{ 
  label: 'Book 1*', 
  value: 50, 
  image: '/book1.png',
  price: { adena: 1000000, coins: 0 }
}
```

E renderizados condicionalmente nos botões:

```jsx
{preset.image && (
  <img 
    src={preset.image} 
    alt={preset.label}
    className="img-fluid mb-1"
    style={{ maxHeight: '35px', width: 'auto', display: 'block', margin: '0 auto' }}
  />
)}
{preset.price && (
  <div style={{ fontSize: '0.7rem', marginTop: '2px' }}>
    <div style={{ color: '#28a745' }}>
      💰 {formatAdena(preset.price.adena)} Adena
    </div>
    {preset.price.coins > 0 && (
      <div style={{ color: '#ffc107' }}>
        🪙 {preset.price.coins} Coins
      </div>
    )}
  </div>
)}
```

## Adicionando Novos Itens

Para adicionar novos itens com imagens e preços:

1. Coloque a imagem em `src/frontend/public/`
2. Adicione o item no array `predefinedChances` com:
   - `label`: Nome do item
   - `value`: Chance de sucesso
   - `image`: Caminho da imagem
   - `price`: Objeto com `adena` e `coins`
3. As imagens e preços serão automaticamente exibidos nos botões

## Sistema de Gastos

- **Contador Total**: Mostra o total gasto em Adena e Coins
- **Histórico**: Cada tentativa registra o preço gasto
- **Reset**: O botão "Resetar Estatísticas" também zera os gastos
- **Formatação**: Valores grandes são formatados automaticamente (K/M)
