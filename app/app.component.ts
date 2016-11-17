import { Component } from '@angular/core';
import { Navigation } from  './shared/Navigation/navigation.component';
@Component({
    selector: 'my-app',
    template: `
        <navigation-component>
            Loading...
        </navigation-component>
        <footer-component></footer-component>
        `,
    
})
export class AppComponent { }
