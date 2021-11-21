import { Component, OnInit } from '@angular/core';
import {BaselinerService} from "../shared/baseliner.service";
import {Recipe} from "../../../model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  //#region Fields
  checked = false;
  loading = false;
  indeterminate = false;
  recipes: Recipe[] = [];
  readonly listOfCurrentPageData: Recipe[] = [];
  setOfCheckedId = new Set<number>();
  canDownload:boolean = true;
  canDelete: boolean= true;

  //#endregion

  //#region Ctor
  constructor(private baselinerService: BaselinerService) { }
  //#endregion

  //#region Hooks
  ngOnInit(): void {
    this.onRetrieve();
  }
  //#endregion

  //#region Callback
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .forEach(({ Id }) => this.updateCheckedSet(Id, checked));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Recipe[]): void {
    const listOfEnabledData = this.listOfCurrentPageData;
    this.checked = listOfEnabledData.every(({ Id }) => this.setOfCheckedId.has(Id));
    this.indeterminate = listOfEnabledData.some(({ Id }) => this.setOfCheckedId.has(Id)) && !this.checked;
  }

  onRetrieve(){
    this.baselinerService.retrieveRecipe().subscribe(observer => {
      this.recipes = [];
      this.recipes.push(observer);
    });
  }

  onUpload(){

  }

  onDownload(){

  }

  onDelete(){

  }
  //endregion

  //#region Private Methods
  private updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  private refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData;
    this.checked = listOfEnabledData.every(({ Id }) => this.setOfCheckedId.has(Id));
    this.indeterminate = listOfEnabledData.some(({ Id }) => this.setOfCheckedId.has(Id)) && !this.checked;
  }
  //#endregion

}
