# Next.js E-commerce Application 🛒✨

Uma aplicação web responsiva de e-commerce feita com Next.js, React e TypeScript.  
Mostra produtos dinâmicos buscados de um banco Supabase, com páginas modernas e interativas.

---

## Funcionalidades ⭐

- **UI Responsiva** 📱💻 - Interface amigável para dispositivos móveis com Tailwind CSS  
- **Produtos Dinâmicos** 🔄 - Busca produtos diretamente do banco Supabase  
- **Componentes Interativos** 🎨 - Efeitos de hover e transições suaves  
- **Múltiplas Páginas** 🏠🛍️ - Página inicial e loja com layouts distintos  
- **Design Moderno** 🎯 - Visual limpo e profissional

---

## Screenshots 📸

<img src="./assets/home.png" alt="Home Page Screenshot">  
<img src="./assets/store.png" alt="Store Page Screenshot">

---

## Tecnologia Utilizada 🛠️

- Frontend: [Next.js](https://nextjs.org/) 14.0.4 🔷  
- UI Library: [React](https://reactjs.org/) 18 ⚛️  
- Estilo: [Tailwind CSS](https://tailwindcss.com/) 3.3.0 🎨  
- Linguagem: [TypeScript](https://www.typescriptlang.org/) 5 📝  
- Cliente DB: [postgres](https://www.npmjs.com/package/postgres) 3.4.3 🗄️  
- Ícones: [React Icons](https://react-icons.github.io/react-icons/) 4.12.0 ⭐  

---

## Estrutura do Projeto 📁

```
src/
├── app/
│   ├── components/     # Componentes compartilhados
│   ├── about/          # Página da loja
│   │   └── components/ # Componentes específicos da loja
│   ├── db.js           # Conexão com banco de dados
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout raiz
│   └── page.tsx        # Página inicial
public/                 # Recursos estáticos
```

---

## Pré-requisitos ✅

- Node.js (versão estável mais recente)  
- Editor de código (ex: VS Code)  
- Conhecimento básico em React e Next.js

---

## Como Rodar 🏃‍♂️

1. **Clone o repositório**

```bash
git clone https://github.com/EmanuelSergio/next-js.git
cd next-js
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure variáveis de ambiente**

Crie um arquivo `.env.local` na raiz com:

```
DATABASE_URL=your_supabase_postgres_connection_string
```

4. **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Abra no navegador**

Acesse [http://localhost:3000](http://localhost:3000)

---

## Configuração do Banco de Dados 🗄️

Usa banco Postgres via Supabase. Conexão configurada em `db.js` com a variável `DATABASE_URL`.

A tabela `product` deve conter:  
- `img` (string) — URL da imagem do produto  
- `desc` (string) — descrição do produto  
- `price` (numérico) — preço do produto
