# A palindromic number reads the same both ways.
# The largest palindrome made from the product of two
# 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from
# the product of two 3-digit numbers.

def isPalindrome(number):
    #retorna o inverso de uma string
    return str(number) == str(number)[::-1]


largestPalindrome = 0

for i in range(100, 1000):
    for j in range(100, 1000):
        if isPalindrome(i * j) == True and (i * j) >= largestPalindrome:
            largestPalindrome = i * j
            print(largestPalindrome)
