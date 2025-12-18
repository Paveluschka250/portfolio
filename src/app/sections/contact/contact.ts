import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Hier kannst du später die Formular-Daten verarbeiten
    console.log('Formular abgesendet:', this.contactForm);
    // Reset nach dem Absenden
    this.contactForm = { name: '', email: '', message: '' };
    alert('Vielen Dank für deine Nachricht! Ich melde mich bald bei dir.');
  }
}
