# password-generator1

Password generator that gives the user multiple prompts and full control over how their password will be created. 

The logic uses .concat() to it's advantages by using a series of else if statements to validate each of the selection the users make and .concat() allows us to fill up our `pick` array as we go so at the end we can Math.random the entire array so it pushes out a new password for us to use!