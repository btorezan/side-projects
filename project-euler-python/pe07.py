#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#What is the 10 001st prime number?

#return none if prime, false if isnt
def isPrime(num):
    for i in range(2,num):
        if num % i == 0:
            return False
    return True

primeQtd = 0
count = 0
target = 0
while primeQtd <= 10002:
    if isPrime(count):
        primeQtd +=1
        target = count
    count +=1

print(target)

