import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
    selector: 'app-form-group',
    templateUrl: './form-group.component.html'
})

export class FormGroupComponent {
    form: any;
    book = {
        colors: [
          { name: 'Red',  selected: false, id: 12 },
          { name: 'Orange',  selected: false, id: 2 },
        ]
      }

      constructor(private fb: FormBuilder) {

         this.form = this.fb.group({
           colors: this.buildSkills()
         });
      }

      get colors() {
        return this.form.get('colors');
      };

      buildSkills() {
        const arr = this.book.colors.map(skill => {
          return this.fb.control(skill.selected);
        });
        return this.fb.array(arr);
      }

}
