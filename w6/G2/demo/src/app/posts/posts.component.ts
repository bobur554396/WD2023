import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  newPost: Post;
  loaded: boolean;

  constructor(private postService: PostService) {
    this.posts = [];
    this.newPost = {} as Post;
    this.loaded = true;
  }

  ngOnInit(): void {
    // this.posts = POSTS;
    this.getPosts();
  }

  getPosts(){
    this.loaded = false;
    this.postService.getPosts().subscribe((posts) =>{
      this.posts = posts;
      this.loaded = true;
    })
  }

  addPost(){
    this.loaded = false;
    this.postService.addPost(this.newPost).subscribe((post) => {
      // this.posts.push(post);
      this.posts.unshift(post);
      this.loaded = true;
      this.newPost = {} as Post;
    });
  }

//  CURD -> CREATE, UPDATE, READ, DELETE

}
