#include <stdio.h>
#include <unistd.h>

int main(){
	printf("\nThis is my ls program.\n");
	printf("\nMy real uid is : %d.\nMy effective uid is :%d\n", getuid(), geteuid());
	return (0);
}
