# Fermat's Near Misses

Simply press the main button to find your near miss. You can type in any range you want, although it may get slower if your numbers are too big. Also, things only get interesting if n is larger than two. 

Fermat's Last Theorem states that for n larger than two, there are no integer solutions for a^n + b^n = c^n. However, there are some solutions very close to being integers. In this program, I have it so that it finds solutions for a^n + b^n = c^n where the difference between c and a rounded c is less that 0.001. AKA c is not an integer, but so close that once raised to a large power, most calculators will make it look like this solution is actually true.