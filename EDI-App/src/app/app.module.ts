import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BaselinerComponent } from './pages/baseliner/baseliner.component';
import { RecipeComponent } from './pages/baseliner/recipe/recipe.component';
import { ReportComponent } from './pages/baseliner/report/report.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { ToolBarComponent } from './pages/baseliner/shared/tool-bar/tool-bar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CardComponent } from './pages/shared/card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BaselinerComponent,
    RecipeComponent,
    ReportComponent,
    ToolBarComponent,
    CardComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    NzAvatarModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
