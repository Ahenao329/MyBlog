import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  success:WritableSignal<boolean | undefined> = signal(undefined);
  loading = signal(false);

  form = {
    name: '',
    email: '',
    message: '',
  }

  async sendMessage(event: SubmitEvent) {
    event.preventDefault();
    this.loading.set(true);
    const res = await fetch("/.netlify/functions/contactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.form)
    })
    this.loading.set(false);
    this.success.set(res.ok);
  }

}
