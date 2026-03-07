# 113652
n = int(input())
d = n - 1
print("YES" if d % 3 == 0 or d % 5 == 0 or (d >= 8 and (d - 3) % 5 == 0) or any((d - 3*i) % 5 == 0 for i in range(d//3 + 1)) else "NO")


# 113653
s = input()
print(max(s))


# 113654
s = input()
print(sum(1 for c in s if c.isdigit()))