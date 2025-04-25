class MessageSystem {
  constructor() {
    this.messages = [];
    this.messageId = 1;
  }

  sendMessage(username, message) {
    const msgObj = {
      id: this.messageId++,
      username,
      message
    };
    this.messages.push(msgObj);
    return msgObj;
  }

  getAllMessages() {
    return this.messages;
  }

  getMessageById(id) {
    return this.messages.find(msg => msg.id === id);
  }

  getMessagesByUser(username) {
    return this.messages.filter(msg => msg.username === username);
  }

  deleteMessage(id) {
    const msg = this.getMessageById(id);
    if (msg) {
      this.messages = this.messages.filter(m => m.id !== id);
      return msg;
    }
    return null;
  }

  editMessage(id, newMessage) {
    const msg = this.getMessageById(id);
    if (msg) {
      msg.message = newMessage;
      return msg;
    }
    return null;
  }
}

const chat = new MessageSystem();

chat.sendMessage('Shubham', 'hello');
chat.sendMessage('Shubham', 'how are you');
chat.sendMessage('Shubham', 'my name is Shubham');
chat.sendMessage('Shubham', 'what is your name');

chat.sendMessage('GE Vernova', 'hello');
chat.sendMessage('GE Vernova', 'I am fine, how are you');
chat.sendMessage('GE Vernova', 'my name is GE Vernova');
chat.sendMessage('GE Vernova', 'when are you coming here');

console.log(chat.getMessageById(2)); 
console.log(chat.getMessagesByUser('Shubham'));

console.log(chat.getAllMessages());