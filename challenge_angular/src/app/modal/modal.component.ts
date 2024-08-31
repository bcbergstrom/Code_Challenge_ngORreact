import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
activateClick() {
  console.log('clicked');
}

/* couldn't figure out another method without using document, did 
some research and it seems that's the main way in angular*/  


closeModal() {
  document.documentElement.style.setProperty('--modal', 'none');
}
openModal() {
  document.documentElement.style.setProperty('--modal', 'block');
}


}
