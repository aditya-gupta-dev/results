# Throughput Journey

command to stress test (`npm install -g autocannon`)  

`autocannon -m GET -H "regid: 123" -H "pass: pass" http://localhost:3000/get-results`

### 1) Reading from disk everytime (36k req/sec)

Commit -> 3757965b997af055cd6dc453415cbbe7023944f7


### 2) With Caching data (45k req/sec)

Commit -> d485a16e481744a88e3a6645193ecd053dde8e8b