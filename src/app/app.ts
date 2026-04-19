import { Component } from '@angular/core';
import { Starfield }   from './starfield/starfield';
import { Navbar }      from './navbar/navbar';
import { Hero }        from './hero/hero';
import { Experience }  from './experience/experience';
import { Skills }      from './skills/skills';
import { Validation }  from './validation/validation';
import { Projects }    from './projects/projects';
import { Contact }     from './contact/contact';
import { Footer }      from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Starfield,
    Navbar,
    Hero,
    Experience,
    Skills,
    Validation,
    Projects,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
