import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngMusicPlayerModule } from 'ang-music-player';
import { IonicModule } from '@ionic/angular';

import { PrayerPageRoutingModule } from './prayer-routing.module';

import { PrayerPage } from './prayer.page';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    AngMusicPlayerModule,
    NgxAudioPlayerModule,
    PrayerPageRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  declarations: [PrayerPage],
})
export class PrayerPageModule {}
