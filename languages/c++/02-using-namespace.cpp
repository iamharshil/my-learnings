#include <iostream>

int main()
{
    // people often uses using namespace std; which has hundreds of names space which can impact performance
    // so here is better solution for it.
    using std::cout;
    using std::endl;
    using std::string;

    string greeting = "Hey there";
    cout << greeting << endl;

    return 0;
}