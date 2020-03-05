import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../shared/models/team.model';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardTeamComponent implements OnInit {

  @Input() team: Team;
  constructor() { }

  ngOnInit() {}

}
