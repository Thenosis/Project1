import { LightningElement, track } from "lwc";

export default class CarSearch extends LightningElement {
  @track carTypeId;

  /* handler to update the result component with the changes */
  carTypeSelectHandler(e) {
    /* assign the carTypeId the value from detail
    created in our custom event */
    this.carTypeId = e.detail;
  }
}
