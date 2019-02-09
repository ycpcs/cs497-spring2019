// buffer_demo.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>

struct Point
{
	float x, y;

	Point() : x(10.), y(20.){	}
};

int main()
{
	int value = 5;
	int array[5];
	float a = 3.0;
	float b = 5.0;
	Point point;

	array[0] = 0;
	array[1] = 1;
	array[2] = 2;
	array[3] = 3;
	array[4] = 4;

	int* pi = new int();
	*pi = 13;
	Point* pPoint = new Point();

    std::cout << "cs497 buffer demo!\n"; 

	std::cin.get();
}
