import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder,
  FormControl, FormArray, Validators
} from '@angular/forms';
import { exhaustMap, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import { CustomValidator } from './customvalidator/custom.validator';

@Component({
  selector: 'dnt-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onboardingForm: FormGroup;

  get pastExp() {
    return this.onboardingForm.get('pastExp') as FormArray;
  }

  city = [
    'pune',
    'mumbai',
    'banglore'
  ];

  constructor(private fb: FormBuilder,
              private empService: EmployeeService) { }

  ngOnInit(): void {
    this.onboardingForm = this.fb.group({
      // name: new FormControl({ value: 'Test', disabled: true }),
      name: new FormControl('',
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
            CustomValidator.nameValidator
          ]
        }),
      dob: ['', Validators.required],
      password: [''],
      confirmPassword: [''],
      tnc: ['', Validators.requiredTrue],
      email: new FormControl('', [Validators.required, Validators.email]),
      address: this.fb.group({
        addr1: new FormControl('',
          [Validators.required, CustomValidator.specialChar(['!', ',', '.'])]),
        addr2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array(
        [
          this.buildForm()
        ]
      )
    }, { updateOn: 'change', validators: [CustomValidator.passwordValidaor] });

    this.getEmployeeData();

    // this.onboardingForm.valueChanges.subscribe((val)=> console.log(val));

    // this.onboardingForm.valueChanges.pipe(
    //   tap((val) => console.log(val)),
    //   filter(()=> this.onboardingForm.valid),
    //   tap((val) => console.log(val))
    // ).subscribe();

    this.onboardingForm.valueChanges.pipe(
      filter(() => this.onboardingForm.valid),
      exhaustMap((val) => this.empService.postEmployee(val))
      // mergeMap((val) => this.empService.postEmployee(val))
      // switchMap((val) => this.empService.postEmployee(val))
      // exhaustMap((val) => this.empService.postEmployee(val))
    ).subscribe();
  }

  getEmployeeData() {
    this.onboardingForm.patchValue(this.empService.getEmployee());
  }

  addExp() {
    this.pastExp.push(this.buildForm());
  }

  removeExp(i: number) {
    this.pastExp.removeAt(i);
  }

  removeAll() {
    this.pastExp.clear();
    this.pastExp.push(this.buildForm());
  }

  private buildForm() {
    return this.fb.group({
      employer: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl(''),
    });
  }

  addEmployee() {
    console.log(this.onboardingForm.getRawValue());
    this.resetForm();
  }

  private resetForm() {
    this.onboardingForm.reset({
      name: '',
      dob: '',
      password: '',
      confirmPassword: '',
      tnc: '',
      email: '',
      address: {
        addr1: '',
        addr2: '',
        city: '',
        pin: '',
      },
      pastExp: []
    });
  }

  reset() {
    this.resetForm();
  }

  addPassport() {
    this.onboardingForm.addControl('passport', new FormGroup({
      passportNo: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl('')
    }));
  }
}
