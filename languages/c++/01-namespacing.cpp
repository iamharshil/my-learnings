#include <iostream>

namespace first
{
    int x = 5;
}

namespace second
{
    int x = 10;
}

int main()
{
    // Usually we cannot use multiple variables with same name by namespacing we can.
    // namespacing provide solution for name conflicts in large projects.
    // namespaces allow the identically named entities as long as the namespaces are different.

    int x = 1;

    std::cout << x << std::endl; // if I explicitly don't define which namespace I am using then it will take value of x from local

    std::cout << first::x << std::endl; // :: scope resolution operator. here value of x will come from the scope of namespace first

    // if I dont have to define namespace each time I  can set using namespace at start of main function, But make sure there is no other local variable with same name while using namespace.
    using namespace second;

    std::cout << x << std::endl;

    return 0;
}