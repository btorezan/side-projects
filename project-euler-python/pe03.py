#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?


#return none if prime, false if isnt
def isPrime(num):
    for i in range(2,num):
        if num % i == 0:
            return False
    return True

number = 600851475143
largestPrime = 0
#              from, to
for i in range(2, number//2):
    if number % i == 0:
        if isPrime(i) == True:
            if i >= largestPrime:
                largestPrime = i
                print(largestPrime)

