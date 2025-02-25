import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';  
import { ViewportScroller } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterModule],  // ✅ RouterModule importiert
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {
  http = inject(HttpClient);
  viewportScroller = inject(ViewportScroller); // ✅ ViewportScroller für Scroll-Funktion
  router = inject(Router); // ✅ Router für Navigation

  contactData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: false
  };

  formSubmitted = false;
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain', responseType: 'text' }
    }
  };

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid || !this.contactData.privacyAccepted) return;
    
    this.mailTest ? this.handleSuccess(ngForm) : this.sendMail(ngForm);
  }

  private sendMail(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => this.handleSuccess(ngForm),
        error: (error) => console.error(error),
      });
  }

  private handleSuccess(ngForm: NgForm) {
    console.log('Form submitted successfully.');
    this.formSubmitted = true;
    ngForm.resetForm();

    setTimeout(() => {
      this.formSubmitted = false;
      this.scrollToTop();
    }, 5000);
  }

  isFormValid(): boolean {
    return this.contactData.privacyAccepted;
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  navigateToSection(section: string): void {
    this.router.navigate(['/'], { fragment: section });
  }
}
