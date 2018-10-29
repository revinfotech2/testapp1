import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  simple_params: {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    var d = this.route.params
      .subscribe((params) => {
        console.log(params);
        this.simple_params = JSON.stringify(params);
      });
  }

}
