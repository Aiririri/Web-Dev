# 3152
a = list(map(int, input().split()))
print(*a[::2])


# 3153
a = list(map(int, input().split()))
print(*[x for x in a if x % 2 == 0])


# 3154
a = list(map(int, input().split()))
print(sum(1 for x in a if x > 0))


# 3155
a = list(map(int, input().split()))
print(*[a[i] for i in range(1, len(a)) if a[i] > a[i-1]])


# 3156
a = list(map(int, input().split()))
for i in range(len(a) - 1):
    if (a[i] > 0) == (a[i+1] > 0):
        print(a[i], a[i+1])
        break


# 3157
a = list(map(int, input().split()))
count = 0
for i in range(1, len(a) - 1):
    if a[i] > a[i-1] and a[i] > a[i+1]:
        count += 1
print(count)


# 3158
a = list(map(int, input().split()))
m = max(a)
print(m, a.index(m))