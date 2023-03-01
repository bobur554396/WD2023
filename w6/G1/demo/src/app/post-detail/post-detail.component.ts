import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import {ActivatedRoute} from "@angular/router";
import {POSTS} from "../fake-db";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
    this.post = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void {
    // let _id = this.route.snapshot.paramMap.get('id');
    // if(_id){
    //   // const id = parseInt(_id);
    //   const id = +_id;
    //   this.post = POSTS.find((x) => x.id === id) as Post;
    // }

    // this.route.paramMap.subscribe((params) => {
    //   let _id = params.get('id');
    //   if (_id){
    //     let id = +_id;
    //     this.post = POSTS.find((x) => x.id === id) as Post;
    //   }
    // });


    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.postService.getPost(id).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        })
      }
    });


  }

}
