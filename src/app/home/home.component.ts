import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  activeTab?: String;
  mobileToggle: Boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/') {
          this.activeTab = 'home';
        } else {
          this.activeTab = event.url.substring(1);
        }
        setTimeout(() => {
          this.scrollToTop();
        }, 100);
      });
  }

  scrollToTop(): void {
    const element = this.elementRef.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setActiveTab(currentTab: String) {
    this.activeTab = currentTab;
  }

  setMobileToggle(state: Boolean) {
    this.mobileToggle = state;
  }
}
