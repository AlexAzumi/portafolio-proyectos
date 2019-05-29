// Dependencias
import { Component, OnInit } from '@angular/core';

// Secreto
declare function startGame(): any;
@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
  // Banderas
  public secretUnlocked: boolean = false;
  public startedSecret: boolean = false;

  public text: string = '';

  /*
   * OnInit
   */
  ngOnInit() {
    document.addEventListener('keydown', (key) => {
      if (key.keyCode == 84 && !this.startedSecret) {
        this.startedSecret = true;
        this.writeText('T');
      }
      else {
        switch (key.keyCode) {
          case 69:
            this.writeText('E');
            break;
          case 84:
            this.writeText('T');
            break;
          case 82:
            this.writeText('R');
            break;
          case 73:
            this.writeText('I');
            break;
          case 83:
            this.writeText('S');
            break;
          case 8:
            this.text = '';
            break;
        }
      }
    });
  }

  public openGame():void {
    this.setBodyOverflow('hidden');
    this.secretUnlocked = true;
    startGame();
  }

  public closeGame(): void {
    this.setBodyOverflow('auto');
    this.secretUnlocked = false;
  }

  public setBodyOverflow(overflow: string): void {
    document.getElementById('body').style.overflowY = overflow;
  }

  private writeText(letter: string) {
    this.text += letter;
    console.log(this.text);
    if (this.text === 'TETRIS') {
      this.openGame();
      this.text = '';
    }
  }

}
