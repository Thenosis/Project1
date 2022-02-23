import { LightningElement, track } from "lwc";

export default class CarSearch extends LightningElement {
  @track carTypeId;

  carTypeSelectHandler(e) {
    this.carTypeId = e.detail;
  }
}
