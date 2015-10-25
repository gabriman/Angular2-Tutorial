/**
 * Created by Gabriel on 04/10/2015.
 */
/// <reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap,View, Component, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
    id: number;
    name: string;
}

// Annotation section
@Component({
    selector: 'my-app',
})

@View({
    template:'<h1>{{title}}</h1><h2>{{hero}} details!</h2>',
    directives: [FORM_DIRECTIVES]
})

// Component controller
class MyAppComponent
{
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
bootstrap(MyAppComponent);
