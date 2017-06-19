import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppConfigService {

    public url : string;
    public userEmail : string;
    public envConfig : any;
    public loginUserDetails: any;

    public isReady = false;
    public deferredCallbacks = [];
    public filestackConfig : any;
    public s3Config : any;

   // "jwt"
    public audience : "http://api.incred";
    public issuer : "http://incred.local";
    
    //"auth0"
    public domain : "dev-incred.auth0.com";
    public clientID : "f2DAHcRyc3zsQhRvKYakek6OAotuGvTR";
    public callbackURL : "http://sales.incred/callback";

    // "initial"
    public redirect : "/client"; 
    public allowedUrls : ["/", "/callback"];

    // "api"
    public protocol : "https:";
    public host : "uat-api.incred.com";
    public port : 443;
    public endpoint : "/endpoint";

    // "filestack"
    public key = "AtwbB54GRKuuUtalBgIFAz";

    // "s3"
    public s3Key = "file-read-write";
    public signatureVersion = "v4";
    // s3 bucket
    public customer = "uat-inc-cust";
    public application = "uat-inc-cust";
    public user = "uat-inc-user";
 
    constructor(public http: Http){
        
    }

    //set filestack config
    getFilestackConfig() {
        return this.key;
    }

    // set s3 config
    getS3Config () {
        return this.s3Config;
    }
}