import {Component, HostListener, signal, WritableSignal} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive
  ],
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  public activeHeaderNav: WritableSignal<number> = signal<number>(0);
  public lastScrollTop: number = 0;
  public isHidden: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.isHidden = currentScroll > this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  public active(id: number): void {
    this.activeHeaderNav.set(id)
  }

  public deactivate(categoryId: number): void {
    if (this.activeHeaderNav() === categoryId) {
      this.activeHeaderNav.set(0);
    }
  }


  @HostListener('document:click', ['$event.target'])
  public listItemClicked(targetElement: HTMLElement): void {
    targetElement.tagName === 'A' ? this.activeHeaderNav.set(0) : ''
  }
}
