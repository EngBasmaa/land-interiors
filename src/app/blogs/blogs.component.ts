import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import Swiper from 'swiper';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BlogsComponent implements OnInit, AfterViewInit {
  blogs: any[] = [];
  data = [
    {
      id: 1,
      image_path: '../../assets/img 1.jpg',
      title: 'Modern Interior',
      description: 'Description of Modern Interior',
      date: '22 April 2023',
    },
    {
      id: 2,
      image_path: '../../assets/img 2.jpg',
      title: 'Exterior Project',
      description: 'Description of Exterior Project',
      date: '10 April 2023',
    },
    {
      id: 3,
      image_path: '../../assets/img 3.jpg',
      title: 'Grey Beauty',
      description: 'Description of Grey Beauty',
      date: '05 April 2023',
    },
    {
      id: 4,
      image_path: '../../assets/img 4.jpg',
      title: 'Plantation Interior',
      description: 'Description of Plantation Interior',
      date: '29 March 2023',
    },
    {
      id: 5,
      image_path: '../../assets/img 5.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '20 March 2023',
    },

    {
      id: 6,
      image_path: '../../assets/img 6.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '30 March 2023',
    },

    {
      id: 7,
      image_path: '../../assets/img 7.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '11 March 2023',
    },

    {
      id: 8,
      image_path: '../../assets/img 8.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '25 March 2023',
    },

    {
      id: 9,
      image_path: '../../assets/img 9.jpg',
      title: 'Role of Furniture',
      description: 'Description of Role of Furniture',
      date: '10 March 2023',
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

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      // Swiper options
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
