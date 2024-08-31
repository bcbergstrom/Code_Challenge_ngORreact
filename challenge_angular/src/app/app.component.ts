import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalActionsComponent } from "./modal-actions/modal-actions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent, ModalActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'challenge_angular';
}
