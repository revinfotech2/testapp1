import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any[];
  search: any = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').subscribe(data => {
      console.log(data);
      this.data = data['hits'];
    });
  }

  data_clciked(x) {
    console.log(x);
  }

}
