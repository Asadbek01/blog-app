import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TagsPageRoutingModule } from './tags-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TagsPage } from './tags.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TagsPage]
})
export class TagsPageModule {}
