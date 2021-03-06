import {Injectable} from '@angular/core';
import {BlogPost} from '../../app.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private store: Store, private http: HttpClient) {
  }

  getBlogPosts(): Observable<BlogPost[]> {
    const existingBlogPosts = this.store.selectSnapshot(store => store.app.blogPosts);
    if (existingBlogPosts.length === 0) {
      return this.http.get('http://localhost:4200/assets/data.json') as Observable<BlogPost[]>;
    } else {
      return of(existingBlogPosts);
    }
  }

  createBlogPost(blogPost: BlogPost): Observable<any> {
    return of(blogPost);
  }

  updateBlogPost(blogPost: BlogPost): Observable<any> {
    return of(blogPost);
  }

  deleteBlogPost(blogPostId: number): Observable<any> {
    return of(blogPostId);
  }

  getBlogPost(blogPostId: number): Observable<any> {
    const existingBlogPosts = this.store.selectSnapshot(store => store.app.blogPosts);
    const blogPost = existingBlogPosts.filter(m => m.id === blogPostId)[0];

    return of(blogPost);
  }
}
