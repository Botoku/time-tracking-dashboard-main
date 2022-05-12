// 'use strict'
// const content = document.querySelectorAll('.content')
// const dailyBtn = document.querySelector('.daily-btn')
// const weeklyBtn = document.querySelector('.weekly-btn')
// const monthlyBtn = document.querySelector('.monthly-btn')

// const dailyContainer = document.querySelectorAll('.daily')
// const weeklyContainer = document.querySelectorAll('.weekly')
// const monthlyContainer = document.querySelectorAll('.monthly')
// let sectionData

// fetch("data.json").then(response => response.json()).then(data => {
//     console.log(data)
//     console.log(data[0])

//     const finalDataDailyCurrent = data.map(da => da.timeframes.daily.current )
//     const finalDataDailyPrevious = data.map(da => da.timeframes.daily.previous )

//     const finalDataWeeklyCurrent = data.map(da => da.timeframes.weekly.current )
//     const finalDataWeeklyPrevious = data.map(da => da.timeframes.weekly.previous )

//     const finalDataMonthlyCurrent = data.map(da => da.timeframes.monthly.current )
//     const finalDataMonthlyPrevious = data.map(da => da.timeframes.monthly.previous )

//     const dailyDataCurrent = document.querySelectorAll('.daily-current')
//     const dailyDataPrevious = document.querySelectorAll('.daily-previous')

//     const weeklyDataCurrent = document.querySelectorAll('.weekly-current')
//     const weeklyDataPrevious = document.querySelectorAll('.weekly-previous')

//     const monthlyDataCurrent = document.querySelectorAll('.monthly-current')
//     const monthlyDataPrevious = document.querySelectorAll('.monthly-previous')

//     dailyBtn.addEventListener('click', ()=>{
//         console.log('click')

//         dailyBtn.style.opacity = 1
//         weeklyBtn.style.opacity = 0.6
//         monthlyBtn.style.opacity = 0.6

//         dailyContainer.forEach((section) =>{
//             section.style.display='flex'
//         })
//         weeklyContainer.forEach((section) =>{
//             section.style.display= 'none'
//         })
//         monthlyContainer.forEach((section) =>{
//             section.style.display ='none'
//         })

//         dailyDataCurrent.forEach((div)=>
//         div.innerHTML = `<p>${finalDataDailyCurrent[div.parentElement.parentElement.dataset.position]}hrs</p>`)

//         dailyDataPrevious.forEach((div)=>
//         div.innerHTML = `<p>Yesterday - ${finalDataDailyPrevious[div.parentElement.parentElement.dataset.position]}hrs</p>`)

//     })

//     weeklyBtn.addEventListener('click',()=>{

//         weeklyBtn.style.opacity = 1
//         dailyBtn.style.opacity = 0.6
//         monthlyBtn.style.opacity = 0.6

//         weeklyContainer.forEach((section)=>{
//             section.style.display= 'flex'
//         })

//         dailyContainer.forEach((section)=> {
//             section.style.display='none'
//         })
//         monthlyContainer.forEach((section)=> {
//             section.style.display='none'
//         })

//         weeklyDataCurrent.forEach((div)=>
//         div.innerHTML = `<p>${finalDataWeeklyCurrent[div.parentElement.parentElement.dataset.position]}hrs</p>`)

//         weeklyDataPrevious.forEach((div)=>
//         div.innerHTML = `<p>Last Week - ${finalDataWeeklyPrevious[div.parentElement.parentElement.dataset.position]}hrs</p>`)
//     })

//     monthlyBtn.addEventListener('click',()=>{
//         monthlyBtn.style.opacity = 1
//         weeklyBtn.style.opacity = 0.6
//         dailyBtn.style.opacity = 0.6

//         monthlyContainer.forEach((section)=>{
//             section.style.display= 'flex'
//         })

//         dailyContainer.forEach((section)=> {
//             section.style.display='none'
//         })
//         weeklyContainer.forEach((section)=> {
//             section.style.display='none'
//         })

//         monthlyDataCurrent.forEach((div)=>
//         div.innerHTML = `<p>${finalDataMonthlyCurrent[div.parentElement.parentElement.dataset.position]}hrs</p>`)

//         monthlyDataPrevious.forEach((div)=>
//         div.innerHTML = `<p>Last Month - ${finalDataMonthlyPrevious[div.parentElement.parentElement.dataset.position]}hrs</p>`)
//     })

// })

fetch('https://jsonmock.hackerrank.com/api/moviesdata?Year=2015')
    .then((data) => data.json())
    .then((fin) => console.log(fin));
