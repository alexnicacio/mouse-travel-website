import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.scss',
})
export class AppComponentMouse {
  title = 'mouse-travel-website';
}
