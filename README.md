# ⏱️ Chronos Pomodoro  

**Chronos Pomodoro** é um aplicativo desenvolvido em **React + TypeScript** que aplica a **técnica Pomodoro** para melhorar o foco e a produtividade.  
Com uma interface moderna e intuitiva, o usuário pode controlar seus ciclos de trabalho e descanso, acompanhar o histórico de sessões e personalizar o tempo dos intervalos.  

---

## 🚀 Tecnologias utilizadas  

🌀 **React** — criação da interface dinâmica e reativa  
⚡ **Vite** — ambiente de build rápido e leve  
🧠 **TypeScript** — tipagem estática para um código mais seguro  
📅 **date-fns** — manipulação simples de datas e tempos  
🎉 **React Toastify** — exibição de notificações elegantes  
🧭 **React Router** — navegação entre telas  

---

## 🧭 Estrutura do Projeto  
```bash
chronos-pomodoro/
├── src/
│ ├── assets/ # Ícones e imagens
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Telas principais (Home, Histórico, Configurações)
│ ├── hooks/ # Hooks personalizados
│ ├── contexts/ # Contextos globais
│ ├── App.tsx # Componente raiz
│ └── main.tsx # Ponto de entrada do app
└── package.json
```

---

## 🧩 Funcionalidades  

- Início, pausa e reinício de ciclos de trabalho  
- Contagem automática de intervalos curtos e longos  
- Exibição do histórico de pomodoros concluídos  
- Personalização de tempos de foco e descanso  
- Modo escuro para maior conforto visual  

---

## ⚙️ Como executar o projeto  

Clone o repositório:
```bash
git clone https://github.com/rafamgcarvalho/chronos-pomodoro.git
cd chronos-pomodoro
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação será executada em:

```arduino
http://localhost:5173
```

## 💡 Diferenciais e possíveis melhorias
- 🎨 Interface moderna e responsiva
- 🧩 Código modular e de fácil manutenção
- 🔔 Notificações de fim de ciclo
  
## 🔧 Possíveis melhorias futuras:
- Integração com banco de dados local
- Estatísticas detalhadas de produtividade
- Integração com apps de tarefas
