import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  @ViewChild('messageContainer') private messageContainer: ElementRef | undefined;
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

      if (this.messageContainer) {
        setTimeout(() => {
          if (this.messageContainer) { // Effectuez une double vérification
              this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
          }
        });
      }
    }
  }
}
