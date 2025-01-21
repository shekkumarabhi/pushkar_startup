const nav = document.querySelector('nav')
const icons = document.querySelectorAll('.icon')
const descriptions = document.querySelectorAll('.description')
const arrowSigns = document.querySelectorAll('.arrow-sign')
const arrowSignIcon = document.querySelectorAll('.arrow-sign > i')
const hiddenMenuUnorderedList = document.querySelector('.nav-lists > ul')
const hiddenMenuList = document.querySelectorAll('.nav-lists > ul > li')
const hiddenList = document.querySelectorAll('.hidden-list')
const hiddenListMenu = document.querySelectorAll('.hidden-list>ul>li')
const hiddenListsContainer = document.querySelectorAll('.hidden-lists-container')

nav.addEventListener('mouseenter', () => {
    for (let i = 0; i <= descriptions.length - 1; i++) {
        icons[i].style.width = '19%'
        descriptions[i].classList.remove('display-none')
        descriptions[i].classList.add('display-inline-block')
    }
    for (let i = 0; i <= arrowSigns.length - 1; i++) {
        arrowSigns[i].style.width = '19%'
    }
    for(let i = 0; i<=hiddenListMenu.length-1; i++){
        hiddenListMenu[i].style.visibility='visible'
    }
})



nav.addEventListener('mouseleave', () => {
    for (let i = 0; i <= descriptions.length - 1; i++) {
        icons[i].style.width = '49%'
        descriptions[i].classList.remove('display-inline-block')
        descriptions[i].classList.add('display-none')
    }
    for (let i = 0; i <= arrowSigns.length - 1; i++) {
        arrowSigns[i].style.width = '49%'
    }
    for(let i = 0; i<=hiddenListMenu.length-1; i++){
        hiddenListMenu[i].style.visibility='hidden'
    }
})




for (let i = 0; i <= arrowSigns.length - 1; i++) {
    arrowSigns[i].addEventListener('click', () => {
        hiddenList[i].classList.toggle('display-none')
        hiddenList[i].classList.toggle('display-inline-block')
        arrowSignIcon[i].classList.toggle('rotate-ninety')
    })
}

for (let i = 0; i <= hiddenListsContainer.length - 1; i++) {
    arrowSigns[i].addEventListener('click', () => {
        hiddenListsContainer[i].classList.toggle('height-max-content')
    })
}




/*--------integarting my chart fromhere-------*/

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line', // You can use other chart types like 'bar', etc.
    data: {
        labels: ['2-Jan', '5-Jan', '8-Jan', '11-Jan', '13-Jan', '16-Jan'], // x-axis labels
        datasets: [
            {
                label: 'Dataset 1 (Left Y-Axis)',
                data: [10, 20, 15, 25, 30, 40],
                borderColor: 'blue',
                borderWidth: 2,
                yAxisID: 'yLeft', // Link this dataset to the left y-axis
            },
            {
                label: 'Dataset 2 (Right Y-Axis)',
                data: [50, 40, 35, 45, 60, 70],
                borderColor: 'red',
                borderWidth: 2,
                yAxisID: 'yRight', // Link this dataset to the right y-axis
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                }
            },
            yLeft: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                },
                ticks: {
                    callback: function(value) {
                        return value + ' units'; // Customize left y-axis tick labels
                    }
                }
            },
            yRight: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                },
                ticks: {
                    callback: function(value) {
                        return value + ' kg'; // Customize right y-axis tick labels
                    }
                },
                grid: {
                    drawOnChartArea: false // Avoid overlapping grid lines with the left y-axis
                }
            }
        }
    }
});