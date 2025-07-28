import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Structure } from "../../models";
import { EmailElementService } from "../../email-element.service";

@Component({
  selector: "app-three-column",
  templateUrl: "./three-column.component.html",
  styleUrls: ["./three-column.component.scss"],
})
export class ThreeColumnComponent {
  @Input() structure: Structure = new Structure({ type: "3", blocks: [] });
  @Input() sIndex!: number;
  @Output() threeClicked = new EventEmitter<number>();

  threeColumnClicked(column: number) {
    this.threeClicked.emit(column);
  }
  
  selectedSIindex!: number;
  selectedCIndex!: number;
  constructor(private es: EmailElementService) {}
  ngOnInit() {
    this.es.selectedStructureIndex$.subscribe(
      (i) => (this.selectedSIindex = i)
    );
    this.es.selectedStructureColumn$.subscribe(
      (i) => (this.selectedCIndex = i)
    );
  }
}
