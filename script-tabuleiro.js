const totalCasas = 40;
let casaAtual = 0;

const somAcerto = document.getElementById("somAcerto");
const somErro = document.getElementById("somErro");
const somFinal = document.getElementById("somFinal");


const board = document.getElementById("board");
const question = document.getElementById("question");
const feedback = document.getElementById("feedback");

// Lista de perguntas (atualize com os blocos que vou te mandar)
const perguntas = [
  {
    pergunta: "Qual é a função de um switch em uma rede?",
    alternativas: [
      "Repetir sinal para todos os dispositivos",
      "Encaminhar dados para o destino correto",
      "Conectar dispositivos via Bluetooth",
      "Transmitir dados por fibra óptica"
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma topologia em estrela?",
    alternativas: [
      "Todos os dispositivos conectados em um único cabo",
      "Conexão circular entre dispositivos",
      "Todos os dispositivos conectados a um ponto central",
      "Cada dispositivo conectado a todos os outros"
    ],
    correta: 2
  },
  {
    pergunta: "Qual meio de transmissão é imune a interferências eletromagnéticas?",
    alternativas: [
      "Par trançado",
      "Cabo coaxial",
      "Fibra óptica",
      "Ondas de rádio"
    ],
    correta: 2
  },
  {
    pergunta: "O que significa o protocolo CSMA/CD?",
    alternativas: [
      "Controle de acesso por senha",
      "Detecção de colisão em redes compartilhadas",
      "Criptografia de dados em redes Wi-Fi",
      "Distribuição de pacotes por broadcast"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal função do endereço MAC?",
    alternativas: [
      "Identificar o usuário na internet",
      "Controlar o acesso ao Wi-Fi",
      "Identificar fisicamente um dispositivo na rede",
      "Criptografar dados em trânsito"
    ],
    correta: 2
  },
  {
    pergunta: "Qual tipo de rede cobre uma cidade inteira?",
    alternativas: [
      "LAN",
      "WAN",
      "MAN",
      "PAN"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a característica da comunicação simplex?",
    alternativas: [
      "Transmissão simultânea nos dois sentidos",
      "Transmissão alternada entre dispositivos",
      "Transmissão em uma única direção",
      "Transmissão por fibra óptica"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o conector mais comum em cabos de par trançado?",
    alternativas: [
      "USB-C",
      "RJ-45",
      "HDMI",
      "VGA"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tecnologia é usada para transmitir dados por luz?",
    alternativas: [
      "Bluetooth",
      "Fibra óptica",
      "Wi-Fi",
      "Cabo coaxial"
    ],
    correta: 1
  },
  {
    pergunta: "Qual tipo de rede é usada para conectar dispositivos pessoais em curta distância?",
    alternativas: [
      "WAN",
      "LAN",
      "MAN",
      "PAN"
    ],
  correta: 3
},
{
  pergunta: "O que é uma rede WAN?",
  alternativas: [
    "Rede doméstica de curto alcance",
    "Rede de campus universitário",
    "Rede que cobre países ou continentes",
    "Rede entre dispositivos Bluetooth"
  ],
  correta: 2
},
{
  pergunta: "Qual é a principal vantagem da topologia em malha?",
  alternativas: [
    "Baixo custo de instalação",
    "Alta tolerância a falhas",
    "Facilidade de configuração",
    "Uso exclusivo em redes Wi-Fi"
  ],
  correta: 1
},
{
  pergunta: "Qual tipo de cabo possui pares de fios entrelaçados?",
  alternativas: [
    "Fibra óptica",
    "Cabo coaxial",
    "Par trançado",
    "Cabo HDMI"
  ],
  correta: 2
},
{
  pergunta: "O que significa a sigla NIC?",
  alternativas: [
    "Network Interface Card",
    "Network Internal Connector",
    "Node Internet Control",
    "Net Integrated Circuit"
  ],
  correta: 0
},
{
  pergunta: "Qual protocolo é usado para evitar colisões em redes antigas?",
  alternativas: [
    "TCP/IP",
    "CSMA/CD",
    "HTTP",
    "DNS"
  ],
  correta: 1
},
{
  pergunta: "Qual é a função do endereço MAC?",
  alternativas: [
    "Identificar o usuário na internet",
    "Definir a velocidade da rede",
    "Identificar fisicamente um dispositivo na rede",
    "Controlar o acesso ao Wi-Fi"
  ],
  correta: 2
},
{
  pergunta: "Qual meio não guiado é mais sensível à chuva?",
  alternativas: [
    "Ondas de rádio",
    "Micro-ondas",
    "Bluetooth",
    "Wi-Fi"
  ],
  correta: 1
},
{
  pergunta: "Qual é a principal característica da fibra óptica?",
  alternativas: [
    "Transmite dados por pulsos de luz",
    "Utiliza ondas de rádio",
    "É feita de cobre",
    "É usada apenas em redes domésticas"
  ],
  correta: 0
},
{
  pergunta: "Qual tipo de transmissão envia dados para todos os dispositivos da rede?",
  alternativas: [
    "Unicast",
    "Multicast",
    "Broadcast",
    "Anycast"
  ],
  correta: 2
},
{
  pergunta: "Qual tecnologia permite comunicação simultânea nos dois sentidos?",
  alternativas: [
    "Simplex",
    "Half-Duplex",
    "Full-Duplex",
    "Token Ring"
  ],
  correta: 2
  },
  {
  pergunta: "Qual é a principal função de um roteador?",
  alternativas: [
    "Repetir sinal para todos os dispositivos",
    "Interligar redes diferentes e encaminhar pacotes",
    "Armazenar arquivos em rede",
    "Converter sinal digital em analógico"
  ],
  correta: 1
},
{
  pergunta: "Qual tipo de fibra óptica é ideal para longas distâncias?",
  alternativas: [
    "Multimodo com LED",
    "Multimodo com laser",
    "Monomodo com LED",
    "Monomodo com laser"
  ],
  correta: 3
},
{
  pergunta: "Qual é a função do protocolo TCP?",
  alternativas: [
    "Transmitir dados sem garantia de entrega",
    "Controlar acesso ao meio físico",
    "Garantir entrega confiável e ordenada de dados",
    "Traduzir nomes de domínio em IP"
  ],
  correta: 2
},
{
  pergunta: "Qual tecnologia é usada para conectar dispositivos sem fio em curtas distâncias?",
  alternativas: [
    "Wi-Fi",
    "Bluetooth",
    "Ethernet",
    "Fibra óptica"
  ],
  correta: 1
},
{
  pergunta: "Qual é a principal característica da topologia em barramento?",
  alternativas: [
    "Alta tolerância a falhas",
    "Conexão ponto a ponto",
    "Meio compartilhado com risco de colisões",
    "Conexão circular entre dispositivos"
  ],
  correta: 2
},
{
  pergunta: "Qual tipo de modulação altera a altura da onda?",
  alternativas: [
    "Modulação de frequência",
    "Modulação de fase",
    "Modulação de amplitude",
    "Modulação digital"
  ],
  correta: 2
},
{
  pergunta: "Qual é a principal vantagem da comunicação via fibra óptica?",
  alternativas: [
    "Baixo custo",
    "Alta imunidade a interferências",
    "Facilidade de instalação",
    "Compatibilidade com cabos coaxiais"
  ],
  correta: 1
},
{
  pergunta: "Qual tipo de rede é mais comum em ambientes domésticos?",
  alternativas: [
    "WAN",
    "MAN",
    "LAN",
    "PAN"
  ],
  correta: 2
},
{
  pergunta: "Qual protocolo é usado para traduzir nomes de sites em endereços IP?",
  alternativas: [
    "HTTP",
    "DNS",
    "FTP",
    "SMTP"
  ],
  correta: 1
},
{
  pergunta: "Qual é a função de um servidor DNS?",
  alternativas: [
    "Enviar e-mails",
    "Armazenar arquivos",
    "Traduzir nomes de domínio em IP",
    "Controlar acesso à rede"
  ],
  correta: 2
}, 
{
  pergunta: "Qual é a função do protocolo HTTP?",
  alternativas: [
    "Transferir arquivos entre servidores",
    "Enviar e-mails",
    "Exibir páginas web",
    "Traduzir nomes de domínio"
  ],
  correta: 2
},
{
  pergunta: "Qual tipo de rede é mais usado por empresas para comunicação interna?",
  alternativas: [
    "Internet",
    "Extranet",
    "Intranet",
    "WAN"
  ],
  correta: 2
},
{
  pergunta: "Qual é a principal função de um hub?",
  alternativas: [
    "Encaminhar dados para o destino correto",
    "Repetir sinal para todas as portas",
    "Traduzir nomes de domínio",
    "Controlar acesso à rede"
  ],
  correta: 1
},
{
  pergunta: "Qual tipo de modulação altera a velocidade da oscilação da onda?",
  alternativas: [
    "Modulação de amplitude",
    "Modulação de frequência",
    "Modulação de fase",
    "Modulação digital"
  ],
  correta: 1
},
{
  pergunta: "Qual é a principal desvantagem da topologia em anel?",
  alternativas: [
    "Alto custo",
    "Colisões constantes",
    "Ponto único de falha",
    "Baixa velocidade"
  ],
  correta: 2
},
{
  pergunta: "Qual tipo de rede conecta dispositivos em um mesmo ambiente físico?",
  alternativas: [
    "WAN",
    "LAN",
    "MAN",
    "PAN"
  ],
  correta: 1
},
{
  pergunta: "Qual tecnologia permite que dispositivos se comuniquem com o servidor mais próximo?",
  alternativas: [
    "Broadcast",
    "Multicast",
    "Anycast",
    "Unicast"
  ],
  correta: 2
},
{
  pergunta: "Qual é a principal vantagem da topologia híbrida?",
  alternativas: [
    "Baixo custo",
    "Alta velocidade",
    "Flexibilidade de projeto",
    "Uso exclusivo em redes Wi-Fi"
  ],
  correta: 2
},
{
  pergunta: "Qual tipo de cabo é mais usado em redes Ethernet modernas?",
  alternativas: [
    "Cabo coaxial",
    "Par trançado",
    "Fibra óptica",
    "HDMI"
  ],
  correta: 1
},
{
  pergunta: "Qual é a função do protocolo DNS?",
  alternativas: [
    "Enviar dados com segurança",
    "Traduzir nomes de domínio em IP",
    "Controlar acesso à rede",
    "Transmitir dados por fibra óptica"
  ],
  correta: 1
}
];

// Cria o tabuleiro visual
for (let i = 0; i < totalCasas; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i + 1;
  cell.id = "casa-" + i;
  board.appendChild(cell);
}

// Carrega a pergunta atual
function carregarPergunta() {
  if (casaAtual < perguntas.length) {
    const atual = perguntas[casaAtual];
    question.textContent = `Pergunta ${casaAtual + 1}: ${atual.pergunta}`;
    document.querySelectorAll(".option").forEach((btn, i) => {
      btn.textContent = atual.alternativas[i];
      btn.style.display = "block";
    });
  } else {
    question.textContent = "🎉 Parabéns! Você completou a missão!";
    document.querySelectorAll(".option").forEach(btn => btn.style.display = "none");
  }
}

// Função para verificar a resposta
function verificarResposta(selected) {
  const atual = perguntas[casaAtual];
  const casa = document.getElementById("casa-" + casaAtual);

  if (selected === atual.correta) {
    somAcerto.play();
    casa.classList.remove("active");
    casa.classList.add("correct");
    feedback.textContent = "✅ Correto! Avançando para a próxima casa.";
    feedback.style.color = "green";
    casaAtual++;
    if (casaAtual < totalCasas) {
      const proxima = document.getElementById("casa-" + casaAtual);
      proxima.classList.add("active");
    }
    carregarPergunta();
    if (casaAtual >= perguntas.length) {
      somFinal.play();
    }
  } else {
    somErro.play();
    casa.classList.add("wrong");
    feedback.textContent = "❌ Errado! Tente novamente.";
    feedback.style.color = "red";
  }
}

// Adiciona evento aos botões de alternativa
document.querySelectorAll(".option").forEach((btn, i) => {
  btn.onclick = function() {
    verificarResposta(i);
  };
});

// Inicializa o jogo
document.getElementById("casa-0").classList.add("active");
carregarPergunta();
