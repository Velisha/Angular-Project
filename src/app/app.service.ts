import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
	constructor(private http:Http){
	}
	getData(){
		return this.http.get('app/data.json').map((response: Response) => response.json());
	}
}
