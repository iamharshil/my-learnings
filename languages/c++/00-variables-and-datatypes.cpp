#include <iostream>

int main()
{
    // standard characters output << = left shift operators.
    std::cout << "Hello, World"
              << "\n";

    int x; // declaration // developer used to declare variable at start of program in early days where it completes heavy declaration task first and then focus on other functionalities. now days it does not matter where to declare but some of companies still uses old compiler(source code to machine code) where it's require to declare variable first for better performance.
    x = 5; // assignment

    // int double string char boolean

    // const defined value of variable is constant and it cannot be changed.(similar to read-only).
    // usually c++ developer uses Capitalized naming for const variables but it's not necessary.
    const double PI = 3.14;
    std::cout << PI << std::endl;

    return 0;
}