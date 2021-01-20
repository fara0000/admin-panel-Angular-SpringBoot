package com.application.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
//@Table(name = "s207704.point")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private double x;
    private double y;
    private double r;
    private String income;


    public Point() {}
    public Point(double x, double y, double r, String income) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.income = income;
    }

    @Override
    public String toString(){
        return "Point{" + "x=" + x + ", y=" + y + ", r=" + r + "}";
    }
}

