import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from 'src/app/shared/module/material/material.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/core/interceptors/token-interceptor.service';
import { AuthGuardService } from 'src/app/services/core/guards/auth-guard.service';
import { AuthService } from 'src/app/services/core/auth/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { CategoryComponent } from './category/category.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

 

@NgModule({
  declarations: [CategoryComponent, NotesComponent, NoteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AngularEditorModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class HomeModule { }
