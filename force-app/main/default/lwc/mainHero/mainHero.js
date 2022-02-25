import { LightningElement } from "lwc";
import myResource from "@salesforce/resourceUrl/lambo";
import myResource2 from "@salesforce/resourceUrl/sclass";

export default class MainHero extends LightningElement {
  heroImg = myResource;
}
