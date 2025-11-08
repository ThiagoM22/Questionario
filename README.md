# 🧠 Questionário IoT — ESP32 + React Dashboard

## 🧩 Descrição do Projeto

O **Questionário IoT** é um sistema interativo que combina hardware e software para criar um **quiz educativo** sobre Internet das Coisas (IoT).  
Utilizando um **ESP32 simulado no Wokwi**, o projeto exibe perguntas em uma **tela LCD** e permite ao usuário responder **Verdadeiro ou Falso** por meio de dois botões físicos.  

As respostas e resultados são enviados via **protocolo MQTT** para um **dashboard web** desenvolvido em **React + Vite**, que exibe o desempenho do jogador em tempo real.

---

## ⚙️ Funcionalidades Principais

### 🧠 No ESP32 (simulado no Wokwi)
- Exibição das perguntas em um **display LCD (16x2)**.  
- **Dois botões físicos** (verde e vermelho) para respostas Verdadeiro/Falso.  
- Sorteio aleatório de **5 perguntas** entre 30 disponíveis.  
- Envio de resultados via **MQTT**:
  - Número de **acertos** e **erros**;
  - **Média** de desempenho;
  - **Status de aprovação**.

 ### 💻 No Frontend (React + Vite)
- Exibição em **tempo real** dos resultados do quiz:  
  - ✅ Quantidade de acertos  
  - ❌ Quantidade de erros  
  - 📊 Média percentual  
  - 🟢 Status final (Aprovado / Reprovado)  
- Interface responsiva feita com **Bootstrap**.

---

## 🌐 Conexão MQTT

| Parâmetro | Valor |
|------------|--------|
| **Broker** | `broker.hivemq.com` |
| **Porta** | `1883` |
| **Protocolo** | MQTT |
| **Tópicos principais** | `quizIoT-Mazzi/resp_enviada`, `quizIoT-Mazzi/resultado`, `quizIoT-Mazzi/iniciarJogo`, `quizIoT-Mazzi/statusJogo` |

> O ESP32 publica e recebe mensagens MQTT, permitindo comunicação em tempo real com o dashboard React.

---

## 🚀 Como Executar

### 🔸 Clonar o projeto
```bash
git clone https://github.com/ThiagoM22/Questionario.git
```

### 🔸 Instalar Dependências
```bash
npm i
```

### 🔸 Executar o servidor local
```bash
npm run dev
```

---
## 🔧 Simulação do ESP32 (Wokwi)
O código do microcontrolador foi desenvolvido e testado no simulador Wokwi , garantindo compatibilidade e praticidade para testes sem hardware físico. Você pode abrir o projeto diretamente pelo link do Wokwi:
- 🔗[Acessar simulação mo Wokwi](https://wokwi.com/projects/439723934508097537)

---
## 👨‍💻 Autor
Desenvolvido por Mazzi 📧[thiago.mazzi2017@gmail.com]
🔗[ThiagoMZZ](https://github.com/ThiagoM22)




