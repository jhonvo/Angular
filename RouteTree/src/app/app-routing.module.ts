import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AuthorComponent } from './author/author.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [

  { path: 'products', component: ProductComponent, children: [
    { path: 'details/:id', component: ProductDetailComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
},

{ path: 'reviews', component: ReviewComponent, children: [
    { path: 'details/:id', component: ReviewDetailComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllReviewsComponent }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
