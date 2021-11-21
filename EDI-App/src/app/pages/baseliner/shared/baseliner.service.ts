import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Recipe} from "../../../model";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaselinerService {

  //#region Fields
  //endregion

  //#region Ctor
  constructor(private http: HttpClient) {

  }
  //endregion

  //#region Public Methods

  retrieveRecipe(){
    let retrieveApi = environment.ediApi + "baseliner/recipe";
    return this.http.get<Recipe>(retrieveApi).pipe(
      catchError(this.handleError)
    );
  }

  uploadRecipe(){

  }

  downloadRecipe(){

  }

  deleteRecipe(){

  }

  //#endregion

  //#region Private Methods
  private handleError(error: HttpErrorResponse){
    if (error.status === 0){

    }else{

    }
    return throwError("Something bad happend.")
  }
  //endregion
}
