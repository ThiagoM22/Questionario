// Importar o pacote 'paho-mqtt' a classe client
import { Client } from "paho-mqtt";

let client; // Variável para armazenar a instância do cliente MQTT

export const connectMQTT = (onMessageRecived) => {
  // Usar wss na prta 8884
  client = new Client(
    "broker.hivemq.com",
    8884,
    "/mqtt",
    " reactClient" + Math.random()
  );

  //define o handler para perda de conexão
  client.onConnectionLost = (responseObject) => {
    console.log("Conexão perdida: ", responseObject);
  };

  // define o handler para a chegada de novas mensagens
  client.onMessageArrived = (message) => {
    onMessageRecived(message.destinationName, message.payloadString);
  };
  // inicia a conexão e subscreve nos topicos
  client.connect({
    useSSL: true,
    onSuccess: () => {
      console.log("MQTT Conectado via WSS!");
      client.subscribe("quizIoT-Mazzi/resp_enviada");
      client.subscribe("quizIoT-Mazzi/resultado");
      client.subscribe("quizIoT-Mazzi/statusJogo");
      client.subscribe("quizIoT-Mazzi/iniciarJogo");
    },
    onFailure: (error) => {
      console.log("Falha na conexão:", error);
    },
  });
};

export const publishMessage = (topic, payload) => {
  if (!client) return;
  const message = new window.Paho.MQTT.Message(payload);
  message.destinationName = topic;
  client.send(message);
};
