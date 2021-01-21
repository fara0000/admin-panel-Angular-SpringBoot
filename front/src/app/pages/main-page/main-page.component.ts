import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  public parameter: number;

  constructor() {
    this.parameter = 2;
  }

  ngOnInit(): void {
    this.draw(this.parameter);
  }

  // tslint:disable-next-line:typedef
  draw(parameter: any = 0) {
    parameter *= 2;
    const CANVAS_WIDTH = 400;
    const CANVAS_HEIGHT = 400;
    const canvas = document.getElementById('canvas');
    // let table = document.getElementById('resultTable');
    // @ts-ignore
    if (canvas.getContext){
      // @ts-ignore
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = "rgba(256, 256, 256, 0.8)"; // background fill
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = 'rgb(35, 184, 253)'; //area
      ctx.fillRect(200, 200, parameter * 20, parameter * 40); //rectangle
      ctx.fill();

      ctx.lineTo(200, 200 - parameter * 20); // quarter of circle
      if (parameter > 0) ctx.arc(200,200, Math.abs(parameter * 20), Math.PI/2, Math.PI, false);
      else ctx.arc(200,200, Math.abs(parameter * 20), Math.PI * 3 / 2, 0, false);
      ctx.lineTo(200,200);
      ctx.fill();

      ctx.moveTo(200 - parameter * 20, 200); // triangle
      ctx.lineTo(200, 200 - parameter * 40);
      ctx.lineTo(200,200);
      ctx.fill();

      for (let x = 40; x < 361; x += 40) { // gird
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 400);
      }
      for (let y = 40; y < 361; y += 40) {
        ctx.moveTo(0, y);
        ctx.lineTo(400, y);
      }
      ctx.strokeStyle = "#333";
      ctx.stroke();

      ctx.fillStyle = 'black'; //axis
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineTo(400,200);
      ctx.moveTo(200,0);
      ctx.lineTo(200,400);
      ctx.moveTo(190,20); //arrows at the ends of lines
      ctx.lineTo(200,0);
      ctx.lineTo(210,20);
      ctx.moveTo(380,190);
      ctx.lineTo(400,200);
      ctx.lineTo(380,210);
      ctx.stroke();

      ctx.font = "18px Arial";
      ctx.fillText("X", 385, 188);
      ctx.fillText("Y", 208, 18);
      ctx.fillText("0", 202, 198);
      if (Math.abs(parameter) >= 4){
        ctx.fillText("2", 362, 198);
        ctx.fillText("2", 202, 38);
        ctx.fillText("-2", 42, 198);
        ctx.fillText("-2", 202, 356);
      }
      if (Math.abs(parameter) >= 2){
        ctx.fillText("1", 282, 198);
        ctx.fillText("1", 202, 116);
        ctx.fillText("-1", 122, 198);
        ctx.fillText("-1", 202, 276);
      }

      //TODO: add drawing points through get request to /main/getPoints but other multiplayer

      // for (let r = 1, n = table.rows.length; r < n; r++) { //dots
      //   let x = table.rows[r].cells[0].innerHTML;
      //   let y = table.rows[r].cells[1].innerHTML;
      //   let result = check(x, y, parameter);
      //   if (result !== "") {
      //     result === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
      //     ctx.beginPath();
      //     ctx.arc(200 + 40 * x, 200 - 40 * y, 6, 0, 2 * Math.PI);
      //     ctx.fill();
      //   }
      // }
    }
  }

  check(x: number, y: number, r: number) : string {
    let income = "false";
    if (r >= 0) {
      if (y > 0){
        if ((y <= 2 * x + r) && (x <= 0)) income = "true"; //triangle
      } else {
        if (x >= 0){
          if ((x <= r/2) && (y >= -r)) income = "true"; // rectangle
        }
        if (x < 0){
          if (x * x + y * y <= r * r / 4)income = "true"; //circle
        }
      }
    } else {
      if (y >= 0){
        if (x > 0){
          if (x * x + y * y <= r * r / 4)income = "true"; //circle
        }
        else if ((x >= r/2) && (y <= Math.abs(r))) income = "true" // reactangle

      } else if ((y >= 2 * x + r) && (x >= 0)) income = "true"; //triangle
    }
    return income;
  }
}
