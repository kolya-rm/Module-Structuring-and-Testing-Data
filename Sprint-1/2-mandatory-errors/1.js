// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// In this case we'll get TypeError: Assignment to constant variable.
// We declared the variable like a constant and then try to assign new
// value for it.