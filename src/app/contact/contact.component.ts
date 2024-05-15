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

  form: FormGroup = this.fb.group(this.formParams);

  constructor(private fb: FormBuilder) {}

  async sendEmail() {
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
      alert(`Message has been sent to ${to_name}!`);
    } else {
      alert(`Couldn't send the message!`);
    }
    this.form.reset(this.formParams);
  }
}
