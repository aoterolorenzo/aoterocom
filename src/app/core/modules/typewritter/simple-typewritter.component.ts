import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-typewritter',
  templateUrl: './simple-typewritter.component.html',
  styleUrls: ['./simple-typewritter.component.scss']
})
export class SimpleTypewritterComponent implements OnInit {

  /* typewriter variable for data binding to template */
  typewriter = '';

  /* typewriter params */
  @Input() data: Array<string>;
  @Input() wait = 3; // time to wait after finish typing to start deleting the current string
  @Input() speed = 100;
  private typing = true; // current status of the writting (true=typing false=deleting)
  private word = -1; // counter giving the current word of the arrray to do the work
  private lastAddTime = 0; // last character adition timestamp (to control time to wait after the complete string is written)

  ngOnInit() {
    /* typewritting effect initialization */
    setInterval(() => this.typewriter = this.typeWrittingEffect(), this.speed  );
  }

  /* Typewritting function.
  *
  * Basically it evaluates the current value of 'typewriter' and return an updated string for binding
  * giving the array of strings and the parameters given
  * every time is called. It is supposed to be used in an interval to do an infinite bucle
  *
  * */
  typeWrittingEffect(): string {

    // Time to type when the string is empty
    if (this.typewriter.length === 0) {

      // If word is unitializated, starts with first word
      if (this.word === -1) this.word = 0;
      // Else go to next or return to first dif it is the last one
      else if (this.word === this.data.length - 1) this.word = 0;
      else this.word++;

      // Anyway, we always start typing at this point
      this.typing = true;

    }

    // If string is not completed and is in crescendo
    if (this.typewriter !== this.data[this.word] && this.typing ) {

      // Grab time of last addedd character and start creasing, else don't do anything and evaluate if dicreasing
      this.lastAddTime = new Date().getTime();
      return this.data[this.word].substring(0, this.typewriter.length + 1);

    } else {

      // Once enter here, text starts to dicrease
      this.typing = false;
      // If it past the wait time since last added character, dicrease
      if (new Date().getTime() - (this.wait * 1000) > this.lastAddTime)
        return this.data[this.word].substring(0, this.typewriter.length - 1);
      // Else text remains intact
      else return this.data[this.word];

    }




  }

}
