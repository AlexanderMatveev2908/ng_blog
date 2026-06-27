import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from '@/layout/toast/toast';
import { Navbar } from '@/layout/navbar/navbar';
import { UseStorageSvc } from '@/core/services/use_storage';
import { ThemeT } from '@/features/theme/reducer';
import { ThemeSlice } from '@/features/theme/slice';
import { Footer } from '@/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly useStorage: UseStorageSvc = inject(UseStorageSvc);
  private readonly themeSlice: ThemeSlice = inject(ThemeSlice);

  ngOnInit(): void {
    const saved: ThemeT = this.useStorage.getItem('theme') ?? 'light';
    this.themeSlice.setTheme(saved);
  }
}
