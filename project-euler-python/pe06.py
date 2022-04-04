#Find the difference between the sum of the squares of the first one
# hundred natural numbers and the square of the sum.

sum = 0
sumOfSquares = 0

for i in range(101):
    sum += i
    sumOfSquares += i**2

print (sum**2 - sumOfSquares)