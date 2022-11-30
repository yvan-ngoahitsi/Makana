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
      name: 'Recipes',
      updated: new Date('1/17/22'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Worker',
      updated: new Date('1/28/22'),
    },
    {
      name: 'Worked',
      updated: new Date('1/28/22'),
    },
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
  ];

  // constructor() { }

  // ngOnInit(): void {
  // }

}
