import { Component, OnInit } from '@angular/core';
import { from, Observable, switchMap, tap } from 'rxjs';

interface Download {
  name: string;
  progress: number;
}

@Component({
  selector: 'app-progress-test',
  templateUrl: './progress-test.component.html',
  styleUrls: ['./progress-test.component.scss'],
})
export class ProgressTestComponent {
  downloads$: Observable<Download[]>;

  constructor() {
    const download: () => Promise<Download[]> = async () => {
      return [
        {
          name: 'Teste',
          progress: 0,
        },
      ];
    };

    let progress = 0;

    this.downloads$ = new Observable<Download[]>((observer) => {
      const pump = () => {
        progress += 2;

        observer.next([
          {
            name: 'Teste',
            progress: progress,
          },
        ]);

        setTimeout(pump, 500);
      };

      pump();
    });

    // this.downloads$ = from(download()).pipe(
    //   tap((downloads) => {
    //     return downloads;
    //   })
    // );
    // setTimeout(() => {
    //   this.progress = 10;
    // }, 2000);
  }
}
