# 📦 StreamVibe Products

## Descrição
**StreamVibe Products** é um projeto **front‑end** em **React + Vite**, que exibe uma galeria de produtos com integração a carteiras Web3 (MetaMask), permitindo conexão e interação com blockchain para troca dos usuários da StreamVibe.

## 💡 Funcionalidades
- Listagem de produtos com imagens, descrições e preços.
- Botão de conexão com MetaMask para interação Web3.
- Design responsivo com Tailwind CSS.
- Comunicação com backend/API para dados dos produtos.

## 🛠 Tecnologias
- **React** (JS / TS) + **Next.js**
- **Tailwind CSS** para estilização
- **web3.js** e **ethers.js** para conexão MetaMask
- **API REST**  para listagem de produtos

## 🚀 Instalação

Clone o repositório:
```bash
git clone https://github.com/Will-firmino/_streamvibe_products.git
cd _streamvibe_products
```

Instale as dependências:
```bash
npm install
# ou
yarn install
   ```

## ⚙️ Como rodar

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
Acesse `http://localhost:3000` (ou `5173` para Vite).

### Build para produção
```bash
npm run build
# ou
yarn build
```

### Preview (após build)
```bash
npm run preview
```

## 🧠 Estrutura de pastas
```
public/                  # arquivos estáticos (ex: logo)
src/
├── components/
│   ├── Header.tsx       # componente de cabeçalho com MetaMask
│   ├── ProductCard.tsx  # cartão de produto
│   └── MetaMaskConnect.tsx
├── pages/ or App.tsx    # entry principal
├── styles/              # seções de estilização Tailwind ou CSS
└── api/                 # chamada à API (mock ou real)
```

## ✅ Contribuições
Pull requests são bem-vindos! Para contribuições:

1. Fork esse repositório.
2. Crie uma branch (`feat/nova‑feature`).
3. Commit suas alterações (`git commit -m 'feat: algo incrível'`).
4. Push na branch (`git push origin feat/nova‑feature`).
5. Abra um Pull Request.

## 📖 Licença
MIT License.