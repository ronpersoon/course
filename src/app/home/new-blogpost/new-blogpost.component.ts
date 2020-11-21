import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateBlogPost} from '../../core/blogpost/blogpost.actions';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-blogpost',
  templateUrl: './new-blogpost.component.html',
  styleUrls: ['./new-blogpost.component.scss']
})
export class NewBlogpostComponent implements OnInit {

  @ViewChild('blogPostId') blogPostId;
  @ViewChild('blogPostTitle') blogPostTitle;
  @ViewChild('blogPostText') blogPostText;
  @ViewChild('blogPostAuthor') blogPostAuthor;
  @ViewChild('blogPostDate') blogPostDate;

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
  }

  CreateBlogPost() {
    const newBlogPost = {
      id: this.blogPostId.nativeElement.value,
      title: this.blogPostTitle.nativeElement.value,
      text: this.blogPostText.nativeElement.value,
      author: this.blogPostAuthor.nativeElement.value,
      date: this.blogPostDate.nativeElement.value
    };

    this.store.dispatch(new CreateBlogPost(newBlogPost)).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}