const Notificavel = {
    enviarEmail(mensagem) {
      return this.nome + " Enviou " + mensagem
    },
    enviarSMS(ensagem) {
      return this.nome + " diz: olá mundo!";
    }
  };

  export default Notificavel