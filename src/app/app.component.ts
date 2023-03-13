import { Component } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vellvet';
  signOutIcon = faSignOut;
  isCollapsed = true;
}
