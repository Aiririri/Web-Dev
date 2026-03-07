# Задача 292
a = int(input())
b = int(input())
print(max(a, b))


# Задача 253 
year = int(input())
if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print("YES")
else:
    print("NO")


# Задача 2960 
correct = int(input())
student = int(input())
if correct == 1:
    print("YES" if student == 1 else "NO")
else:
    print("YES" if student != 1 else "NO")


# Задача 2959 
x = int(input())
if x > 0:
    print(1)
elif x < 0:
    print(-1)
else:
    print(0)


# Задача 293 
a = int(input())
b = int(input())
if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)