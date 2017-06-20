import { Component } from '@angular/core';
import { AppLitteralsConfig } from 'providers/litterals/app-litterals';
import { AppConfigService } from "providers/services/web/app-config.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userImages: any;
  title = 'app';

  public AppLitteralsConfig:any = AppLitteralsConfig;

   constructor( private appConfigService: AppConfigService){
     
    }

  onFileStackUploadComplete(event) {
    this.userImages = [];
		if (event.success) {
			event.data.forEach((data) => {
				//this.userImage = data.url;
        this.userImages.push(data.url);
			});
		}
	}
}
