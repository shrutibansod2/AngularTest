import { Component, OnInit } from '@angular/core';
import { StateDDList } from 'types';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  StateList:StateDDList[]=[];
  
  constructor(private StateService: StateService) { }

  ngOnInit(): void {
    this.GetStateList();
  }
  GetStateList(){
    this.StateService.getStateList().subscribe(
      (data) => {
        this.StateList = data as StateDDList[];
        
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
