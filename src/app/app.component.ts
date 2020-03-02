import { Component } from '@angular/core';
import { User } from 'projects/gavant/src/lib/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gavant-ng-example-components';

  user: User = {
    id: 2,
    firstName: 'Bill',
    lastName: 'D.',
    emailAddress: 'someone@example.com'
  };
}
