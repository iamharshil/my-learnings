# Learnings

### This is repo for all my learn from now where I will have separate folder for languages technologies and frameworks.

I will provide link for them from here

1. C++ : [README.md](https://github.com/iamharshil/my-learnings/blob/main/languages/c%2B%2B/README.md)

### Logs

- Python namespace was not working with ubuntu since by default python used to refer to python2 which is EOD(end of life) now.
- Ubuntu uses python3 namespace to link it to the system.
- I had vs code extension which uses python namespace to run python file.
- What I did was I changed default extension to language map of python like below in user `settings.json` file.

```json
[
    "code-runner.executorMap": {
        "python": "python3"
      }
]
```

- This changed python to python3 in my code-runner extension without any system conflicts(I was planning to set alias for it in .bashrc XD).
