import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppModalService {
  private bsModal?: bootstrap.Modal;

  constructor() {}

  public show(): void {
    if (!this.bsModal) {
      this.bsModal = new bootstrap.Modal('#modal', {
        backdrop: 'static'
      })
    }
    if (this.bsModal) {
      this.bsModal.show();
    }
  }

  public hide(): void {
    if (this.bsModal) {
      this.bsModal.hide();
    }
  }
}
