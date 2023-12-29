import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  formValues: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.formValues = JSON.parse(params['formValues']);
    });
  }
  OnTask() {
    this.router.navigate(['/task']);
  }
  onTodo() {
    this.router.navigate(['/todo']);
  }
  OnDrop() {
    this.router.navigate(['drop']);
  }
}
