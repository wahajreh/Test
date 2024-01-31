import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  yourForm: FormGroup;
  dynamicObject= {
    Condition: [
      {
        ScoreId: 12,
        DemoId: 'plot',
        ScoreBoardSet: [
          { filed1: 'poi', field2: 'opoiu', field3: 'jhghsdf' },
          { filed1: 'poi sdf', field2: 'opoiu ddd', field3: 'jhghsdf qq' }
        ]
      },
      {
        ScoreId: 12,
        DemoId: 'plot',
        ScoreBoardSet: [
          { filed1: 'poi', field2: 'opoiu', field3: 'jhghsdf' },
          { filed1: 'poi sdf', field2: 'opoiu ddd', field3: 'jhghsdf qq' }
        ]
      }
    ]
  };
  

  constructor(private fb: FormBuilder) {
    this.yourForm = this.createFormGroup(this.dynamicObject);
   }

  ngOnInit(): void {
  }

  // Create a FormGroup based on a dynamic object structure
  createFormGroup(obj: any): FormGroup {
    const group: any = {};
    Object.keys(obj).forEach(key => {
      if (Array.isArray(obj[key])) {
        // If the property is an array, create a FormArray
        group[key] = this.fb.array(obj[key].map((item: any) => this.createFormGroup(item)));
      } else if (typeof obj[key] === 'object') {
        // If the property is an object, recursively create a FormGroup
        group[key] = this.createFormGroup(obj[key]);
      } else {
        // For other types, create a FormControl
        group[key] = new FormControl(obj[key]);
      }
    });
    return this.fb.group(group);
  }

  // Add a new item to an array in the form
  addItemToArray(arrayControl: FormArray, obj: any): void {
    arrayControl.push(this.createFormGroup(obj));
  }

  // Remove an item from an array in the form
  removeItemFromArray(arrayControl: FormArray, index: number): void {
    arrayControl.removeAt(index);
  }
  getControls(arg0: any,arg1: any) {
    return arg0.get(arg1)?.controls
    }

  // Submit your form data
  onSubmit(): void {
    console.log(this.yourForm.value);
    // Add your logic to handle the form submission
  }
}
