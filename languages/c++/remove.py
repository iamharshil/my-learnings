import os;

for i in os.listdir():
    if len(i.split(".")) < 2:
        os.remove(i)