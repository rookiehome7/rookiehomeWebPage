import { Component, OnInit, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})



export class VideosComponent implements OnInit {

  static get parameters() {
    return [DomSanitizer];
  }

  videoList : any = [
                  {
                    'title' : 'Volvo V60',
                    'link' : 'https://www.youtube.com/embed/ZVFEZHGDUFg'
                  }

  ]

  constructor(
              private sanitizer : DomSanitizer,


            ) { 
  }

  ngOnInit() {
  }
  
  videoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.videoList[0].list);
  }

}
