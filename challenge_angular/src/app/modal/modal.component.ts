import { Component, Input, input } from '@angular/core';
import { ModalActionsComponent } from '../modal-actions/modal-actions.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ModalActionsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {


/* couldn't figure out another method without using document, did 
some research and it seems that's the main way in angular*/  


  /**
   * Closes the modal by setting the --modal CSS variable to 'none'
   */
closeModal() {
  document.documentElement.style.setProperty('--modal', 'none');
}
  /**
   * Opens the modal by setting the --modal CSS variable to 'block'
   */
openModal() {
  document.documentElement.style.setProperty('--modal', 'block');
}


}
