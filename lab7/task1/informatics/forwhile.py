# 315 
n = int(input())
s = 0
for i in range(1, n + 1):
    s += i * i
print(s)


# 352 
n = int(input())
result = 1
for i in range(n):
    result *= 2
print(result)


# 317 
n = int(input())
k = int(input())
def factorial(x):
    f = 1
    for i in range(1, x + 1):
        f *= i
    return f
print(factorial(n) // (factorial(k) * factorial(n - k)))


# 319 
a = float(input())
n = int(input())
s = 1
term = 1
for i in range(1, n + 1):
    term *= a
    s += term
print(s)


# 320 
n = int(input())
s = 0
for i in range(1, n + 1):
    s += 1 / (i * i)
print(s)


# 321 
n = int(input())
s = 0
for i in range(n + 1):
    s += ((-1) ** i) / (2 * i + 1)
print(4 * s)


# 353
n = int(input())
s = 1
power = 1
for i in range(1, n + 1):
    power *= 2
    s += power
print(s)


# 120 
n = int(input())
s = 0
fact = 1
for i in range(n + 1):
    if i > 0:
        fact *= i
    s += 1 / fact
print(round(s, 5))