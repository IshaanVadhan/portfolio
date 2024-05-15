import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formParams = {
    from_name: '',
    to_name: 'Ishaan Vadhan',
    from_email: '',
    subject: '',
    message: '',
  };
  isSending: boolean = false;
  message: string | null = null;
  msgType: boolean = true;
  showNotification: boolean = false;
  private timeoutId: any;

  form: FormGroup = this.fb.group(this.formParams);

  constructor(private fb: FormBuilder) {}

  showMessage(message: string, msgType: boolean = true) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.message = message;
    this.msgType = msgType;
    this.showNotification = true;
    this.timeoutId = setTimeout(() => {
      this.hideMessage();
    }, 3000);
  }

  hideMessage() {
    this.message = null;
    this.showNotification = false;
  }

  async sendEmail() {
    if (this.isSending) return;
    this.isSending = true;

    const { from_name, to_name, from_email, subject, message } =
      this.form.value;

    emailjs.init('5EDzQNOY2PmJmiyMz');
    let response = await emailjs.send('service_jc4p82p', 'template_9ec0cmm', {
      from_name,
      to_name,
      from_email,
      subject,
      message,
      reply_to: from_email,
    });
    if (response.status === 200) {
      this.showMessage(`Message has been sent to ${to_name}!`, true);
    } else {
      this.showMessage(`Couldn't send the message!`, false);
    }
    this.form.reset(this.formParams);
    this.isSending = false;
  }
}
