import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/services/repository.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  slides: Array<Project> = [];

  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'arrows': false,
    'swipeToSlide': true,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 2000,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  constructor(private repository: RepositoryService) { }

  ngOnInit() {
    this.repository.getRepositories().subscribe(repo => {
      this.slides.push(...repo)
    })
    console.log(this.slides);

  }


}
