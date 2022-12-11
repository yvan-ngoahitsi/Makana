import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/22'),
    },
    {
      name: 'Documentaires',
      updated: new Date('1/17/22'),
    },
    {
      name: 'WorkShop',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Wango',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Loango',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Documentaires',
      updated: new Date('1/17/22'),
    },
    {
      name: 'WorkShop',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Wango',
      updated: new Date('1/28/22'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/22'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/22'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/22'),
    },
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/22'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/22'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/22'),
    },
  ];

  // constructor() { }

  // ngOnInit(): void {
  // }

}
