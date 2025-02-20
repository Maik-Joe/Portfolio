import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  http = inject(HttpClient);
  contactData = { name: "", email: "", phone: "", message: "", privacyAccepted: false };
  formSubmitted = false;
  mailTest = true;
  post = { endPoint: 'https://deineDomain.de/sendMail.php', body: (payload: any) => JSON.stringify(payload), options: { headers: { 'Content-Type': 'text/plain', responseType: 'text' } } };

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.contactData.privacyAccepted) return;
    this.mailTest ? this.handleSuccess(ngForm) : this.sendMail(ngForm);
  }

  private sendMail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
      next: () => this.handleSuccess(ngForm),
      error: (error) => console.error(error),
    });
  }

  private handleSuccess(ngForm: NgForm) {
    console.log('Form submitted successfully.');
    this.formSubmitted = true;
    ngForm.resetForm();
    setTimeout(() => (this.formSubmitted = false), 5000);
  }

  isFormValid(): boolean {
    return this.contactData.privacyAccepted;
  }  
}
