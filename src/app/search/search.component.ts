import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../request/api-request.service';
import { HttpClient } from '@angular/common/http';
import { FrontpageComponent } from '../frontpage/frontpage.component';
import { environment } from '../../environments/environment';
import { FrontpageComponent } from '../frontpage/frontpage.component';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiRequestService],
})
export class SearchComponent implements OnInit {

  return$;

  constructor( private http: HttpClient, _sevice: ApiRequestService,  public frontpagecomponent: FrontpageComponent  ) { }

  search(keyword) {

  this.http.get
  ('' + keyword.value )
  .subscribe(result => {
        this.return$ = result;
        console.log(result);
  });

  this.http.get
  ('https://api.github.com/search/users?q=' + keyword.value )
  .subscribe(result => {
        this.return$ = result;
        console.log(result);
  });
}
  ngOnInit() {
  }

}
