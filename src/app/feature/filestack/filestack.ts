declare var filestack;
declare var md5;

import {Subscription} from 'rxjs/Subscription';
import { Component, HostListener, ElementRef, Renderer, EventEmitter, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { AppConfigService } from "providers/services/web/app-config.services";

@Component({
    selector : "file-stack",
    templateUrl : "filestack.html"
})

export class FileStackComponent implements OnInit, OnDestroy{
    private el:HTMLElement;

    public key = "AtwbB54GRKuuUtalBgIFAz";

    @Input("typeId")
    private typeId: String;

    @Input("config")
    private config:any;

    @Input("data-accept")
    private dataFormat:any;

    @Input("type")
    private dataType;

    @Output("complete")
    private output:EventEmitter<any> = new EventEmitter<any>();

    private appConfigSubscriber: Subscription;

    
    constructor( private _elementRef: ElementRef, private _renderer : Renderer, private appConfigService: AppConfigService){
        this.el = _elementRef.nativeElement;
    }

    ngOnInit(){
       // this.appConfigSubscriber = this.appConfigService.getConfig().subscribe();
    }
    

    /**open filestack on click event**/
    @HostListener("click", ['$event'])
    onFileStackFieldClick (event:MouseEvent){
        let accept = (this.dataFormat || "").split(",");
        let maxFiles = this.el.getAttribute("data-maxfiles");
        // let dataType = this.el.getAttribute("data-type");
        // let dataType = this.dataType || this.el.getAttribute("data-type") || "";
        if(this.appConfigSubscriber){
            this.appConfigSubscriber.unsubscribe();
            this.appConfigSubscriber = null;
        }
        
        let filestackConfig = this.appConfigService.key;
        //let s3BucketType = dataType == "APPLICATION" ? "application" :  "customer";
        let fileStackClient = filestack.init(filestackConfig, { policy: 'policy', signature: 'signature' });
        
        fileStackClient.pick({
            accept : accept,
            maxFiles : parseInt(maxFiles),
            fromSources: 'local_file_system',
            // storeTo: {
            //     location: 's3',
            //     path: md5(this.typeId) + "/",
            //     //container: s3Config.bucket[s3BucketType],
            //     region: 'ap-south-1'
            // },
            onFileSelected: function(file) {
                var epoch 	= (new Date).getTime();
                //file.name 	= md5(epoch);
                return file;
            }
        })
        .then((result:any) => {
            if(result.filesFailed.length > 0) {
                this.output.emit({
                    success : false,
                    data : result.filesFailed,
                    config : this.config
                });
            }
            else {
                result.filesUploaded = result.filesUploaded || [];
                this.output.emit({
                    success : true,
                    data : result.filesUploaded,
                    config : this.config
                });
            }
        });
    }
    
    ngOnDestroy(){
        if(this.appConfigSubscriber){
            this.appConfigSubscriber.unsubscribe();
            this.appConfigSubscriber = null;
        }
    }
}


// var client = filestack.init('AopksPQORR6IgXcMjzRQjz');
//     function showPicker() {
//         client.pick({
//         }).then(function(result) {
//             console.log(JSON.stringify(result.filesUploaded))
//         });
//     }