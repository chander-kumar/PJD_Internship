
const x = [1,2,3,4,5,6,7,8,9]
let sum = 0
for (let i = 0; i < x.length; i++) {
    sum = sum + x[i]
}
mean = sum/x.length
for (let i =0 ;i<x.length;i++){
    sumsquared = (x[i]-mean)^2
}
console.log("Standard Deviation = ",sumsquared/x.length)