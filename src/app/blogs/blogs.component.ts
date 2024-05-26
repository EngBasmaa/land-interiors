import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  data = [
    {
      id: 1,
      image_path: 'assets/modern-interior.jpg',
      title: 'Modern Interior',
      description: 'Description of Modern Interior',
      date: '22 April 2023',
    },
    {
      id: 2,
      image_path: 'assets/exterior-project.jpg',
      title: 'Exterior Project',
      description: 'Description of Exterior Project',
      date: '10 April 2023',
    },
    {
      id: 3,
      image_path: 'assets/grey-beauty.jpg',
      title: 'Grey Beauty',
      description: 'Description of Grey Beauty',
      date: '05 April 2023',
    },
    {
      id: 4,
      image_path: 'assets/plantation-interior.jpg',
      title: 'Plantation Interior',
      description: 'Description of Plantation Interior',
      date: '29 March 2023',
    },
    {
      id: 5,
      image_path: 'assets/role-of-furniture.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '20 March 2023',
    },
  ];
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.blogs = this.data; // Simulating fetching data
      this.isLoading = false;
    }, 2000);
  }
}
