document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardChosenID = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/purple.png')
            card.setAttribute('data-Id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenID[0]
        const OptionTwoId = cardChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[OptionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/purple.png')
            cards[OptionTwoId].setAttribute('src', 'images/purple.png')
            alert('Sorry, try again.')
        }

        cardsChosen = []
        cardChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-Id')
        cardsChosen.push(cardArray[cardId].name)
        cardChosenID.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()

})