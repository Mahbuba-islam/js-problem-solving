// predict average waiting time
// get average from interview times of array whose interview already finished
function waitingTime(interviewTimes,serialNumber){
    let totalInterviewTime = 0
   for(const interviewTime of interviewTimes){
     totalInterviewTime = totalInterviewTime+interviewTime
    
   }
    const averageInterviewTime = totalInterviewTime/interviewTimes.length
     console.log(averageInterviewTime)
     const remainingInterview = serialNumber-interviewTimes.length
     const waitingTime = averageInterviewTime*remainingInterview
     return waitingTime
}
const interviewTimes = [3,5,7,8,9]
const serialNumber = 10
console.log(waitingTime(interviewTimes,serialNumber))