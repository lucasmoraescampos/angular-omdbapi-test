import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AppOffcanvasService {
  private bsOffcanvas?: bootstrap.Offcanvas;

  public show(): void {
    if (!this.bsOffcanvas) {
      const myOffcanvas = document.getElementById('offcanvas');
      if (myOffcanvas) {
        this.bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas as HTMLElement, {
          backdrop: 'static',
        });
      }
    }
    if (this.bsOffcanvas) {
      this.bsOffcanvas.show();
    }
  }

  public hide(): void {
    if (this.bsOffcanvas) {
      this.bsOffcanvas.hide();
    }
  }
}
