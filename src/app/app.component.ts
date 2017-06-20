import { Component } from '@angular/core';
import { AppLitteralsConfig } from 'providers/litterals/app-litterals';
import { AppConfigService } from "providers/services/web/app-config.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public AppLitteralsConfig:any = AppLitteralsConfig;

   constructor( private appConfigService: AppConfigService){
     
    }

  onFileStackUploadComplete(event) {
		if (event.success) {
			event.data.forEach((o) => {
				// this.personalInfoService.setProfileImage(o.key);
				// this.userImage = o.url;
				// this.isImage = true;
			});
		}
	}
}
