import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {HighlightDirective} from '@shared/directives/highlight.directive'
import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from './../../../info/components/wave-audio/wave-audio.component';
import { HeaderComponent } from 'src/app/domain/shared/components/header/header.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent,CounterComponent, WaveAudioComponent,HighlightDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }
}
