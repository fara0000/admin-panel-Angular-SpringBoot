package com.application.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "point")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private double x;
    private double y;
    private double r;
    private String income;
    private Integer userId;


    public Point() {}
    public Point(double x, double y, double r, String income) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.income = income;
    }
    public Point(double x, double y, double r, String income, Integer userId) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.income = income;
        this.userId = userId;
    }

    @Override
    public String toString(){
        return "Point{" + "x=" + x + ", y=" + y + ", r=" + r + "}";
    }

}

