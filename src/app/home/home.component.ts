import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  particlesArray: any[] = [];
  numberOfParticles: number = 200;
  maxDistance: number = 100;
  mouse = { x: null as number | null, y: null as number | null, radius: 150 };

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

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

    this.adjustParticleCount();
    this.initParticles();

    window.addEventListener('resize', () => {
      this.adjustParticleCount();
      this.particlesArray.length = 0;
      this.initParticles();
    });
  }

  ngAfterViewInit() {
    this.initCanvas();
    this.initParticles();
    this.animateParticles();
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
    if (this.mobileToggle) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  initCanvas() {
    this.canvas =
      this.elementRef.nativeElement.querySelector('#particleCanvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  resizeCanvas() {
    const navbar = this.elementRef.nativeElement.querySelector('nav.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - navbarHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeCanvas();
    this.particlesArray = [];
    this.initParticles();
  }

  initParticles() {
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particlesArray.push(this.createParticle());
    }
  }

  adjustParticleCount() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
      this.numberOfParticles = 150;
    } else if (screenWidth > 768) {
      this.numberOfParticles = 100;
    } else {
      this.numberOfParticles = 50;
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    };
  }

  animateParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particlesArray.length; i++) {
      const particle = this.particlesArray[i];
      this.updateParticle(particle);
      this.drawParticle(particle);
      this.connectParticles(i);
    }
    requestAnimationFrame(() => this.animateParticles());
  }

  updateParticle(particle: any) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    if (particle.x > this.canvas.width || particle.x < 0)
      particle.speedX = -particle.speedX;
    if (particle.y > this.canvas.height || particle.y < 0)
      particle.speedY = -particle.speedY;

    const dx = this.mouse.x! - particle.x;
    const dy = this.mouse.y! - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxForce = 0.5;
      const force = (this.mouse.radius - distance) / this.mouse.radius;
      particle.x -= forceDirectionX * force * maxForce;
      particle.y -= forceDirectionY * force * maxForce;
    }
  }

  drawParticle(particle: any) {
    this.ctx.fillStyle = `rgba(80, 207, 127, ${particle.opacity})`;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  connectParticles(index: number) {
    for (let j = index; j < this.particlesArray.length; j++) {
      const dx = this.particlesArray[index].x - this.particlesArray[j].x;
      const dy = this.particlesArray[index].y - this.particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.maxDistance) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(80, 207, 127, ${
          (1 - distance / this.maxDistance) * 0.66
        })`;
        this.ctx.lineWidth = 0.5;
        this.ctx.moveTo(
          this.particlesArray[index].x,
          this.particlesArray[index].y
        );
        this.ctx.lineTo(this.particlesArray[j].x, this.particlesArray[j].y);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const navbar = this.elementRef.nativeElement.querySelector('nav.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    this.mouse.x = event.x;
    this.mouse.y = event.y - navbarHeight;
  }
}
