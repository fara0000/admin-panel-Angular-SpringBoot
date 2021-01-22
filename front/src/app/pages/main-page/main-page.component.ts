import { GetPointsService } from './main-page-service/get-points.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { HttpErrorResponse } from '@angular/common/http';
import { CheckPointService } from './main-page-service/check-point.service';
import {element} from "protractor";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {
  public parameter: number;
  private tablePoints: any;
  rateControl = new FormControl('', [Validators.max(3), Validators.min(-3)])


  constructor(private _getPointService: GetPointsService, private _checkPointService: CheckPointService) {
    this.parameter = 2;
  }

  ngOnInit(): void {
    this.draw(this.parameter);
    this.getUserPoints();
  }

  public getUserPoints() {
    this._getPointService.getPoints().subscribe((res: any) => this.tablePoints = res,
      (err: HttpErrorResponse) => console.log(err),
    )
    setTimeout(() => console.log(this.tablePoints, 'tbpoint'), 1000)
  }

  public getParameter() {
    return this.parameter
  }

  public checkPoint(data: object): void {
    this._checkPointService.checkPoints(data).subscribe((res: any) => res,
      (err: HttpErrorResponse) => console.log(err),
    )
    this.getUserPoints();
  }

  public getTablePoints(): any {
    return this.tablePoints;
  }

  // tslint:disable-next-line:typedef
  draw(parameter: any = 0) {
    const CANVAS_WIDTH = 400;
    const CANVAS_HEIGHT = 400;
    const canvas = document.getElementById('canvas');
    // @ts-ignore
    if (canvas.getContext){
      // @ts-ignore
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = "rgba(256, 256, 256, 0.8)"; // background fill
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      ctx.fillStyle = 'rgb(35, 184, 253)'; //area
      ctx.fillRect(200, 200, parameter * 40, parameter * 80); //rectangle
      ctx.fill();

      ctx.beginPath();
      ctx.lineTo(200, 200 - parameter * 20); // quarter of circle
      if (parameter > 0) ctx.arc(200,200, Math.abs(parameter * 40), Math.PI/2, Math.PI, false);
      else ctx.arc(200,200, Math.abs(parameter * 40), Math.PI * 3 / 2, 0, false);
      ctx.lineTo(200,200);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(200 - parameter * 40, 200); // triangle
      ctx.lineTo(200, 200 - parameter * 80);
      ctx.lineTo(200,200);
      ctx.closePath();
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
      ctx.moveTo(194,20); //arrows at the ends of lines
      ctx.lineTo(200,0);
      ctx.lineTo(206,20);
      ctx.moveTo(380,194);
      ctx.lineTo(400,200);
      ctx.lineTo(380,206);
      ctx.stroke();
      ctx.fill();

      ctx.font = "18px Arial";
      ctx.fillText("X", 385, 188);
      ctx.fillText("Y", 208, 18);
      ctx.fillText("0", 202, 198);
      if (Math.abs(parameter) >= 1){
        ctx.fillText("1", 282, 198);
        ctx.fillText("1", 202, 116);
        ctx.fillText("-1", 122, 198);
        ctx.fillText("-1", 202, 276);
      }
      if (Math.abs(parameter) >= 2){
        ctx.fillText("2", 362, 198);
        ctx.fillText("2", 202, 38);
        ctx.fillText("-2", 42, 198);
        ctx.fillText("-2", 202, 356);
      }
      ctx.closePath();

      //TODO: send request on canvas click

      this.getTablePoints().forEach((element: any) => {
        let x = element.x;
        let y = element.y;
        let result = this.check(x, y, parameter);
          if (result !== "") {
            result === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(200 + 80 * x, 200 - 80 * y, 6, 0, 2 * Math.PI);
            ctx.fill();
          }
      })
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
