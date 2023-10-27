import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  messages: { sender: string, text: string }[] = [];
  newMessage: string = ''; // Déclaration de la propriété newMessage

  constructor() {
    // Initialisation des messages
    this.messages = [
      { sender: 'Alice', text: 'Bonjour' },
      { sender: 'Bob', text: 'Salut' },
      // Ajoutez d'autres messages ici
    ];
  }
    sendMessage() {
      if (this.newMessage.trim() !== '') { // Vérifiez si le message n'est pas vide
        this.messages.push({ sender: 'Me', text: this.newMessage });
        this.newMessage = ''; // Efface le champ de texte après l'envoi
      }
    }
}
