import { Component, inject, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AccountComponent, AuthComponent],
})
export class AppComponent implements OnInit {
  readonly supabase = inject(SupabaseService);

  session = this.supabase.session;

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
