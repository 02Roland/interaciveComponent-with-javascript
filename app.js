let valeur = []

document.querySelectorAll('button').forEach(elt=>{
    elt.addEventListener('click', function(e){
        elt.style.backgroundColor = "hsl(216, 12%, 54%)"
        elt.style.color = 'white'
        valeur.push(elt.innerHTML)
    }, false)
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    if(valeur != []){
        document.querySelector('form').submit
        document.querySelector('.ActiveComponent').innerHTML=''
        let div1 = document.createElement('div')
        div1.id = 'mydiv1'
    
        let img = document.createElement('img')
        img.src = './images/illustration-thank-you.svg'

        let button = document.createElement('span')
        button.id = 'btn'
        Text = document.createTextNode(`You selected ${valeur} out of 5`)
        button.appendChild(Text)

        let h2 = document.createElement('h2')
        text2 = document.createTextNode('Thank you')
        h2.appendChild(text2)
    
        let p = document.createElement('p')
        p.id = 'myp'
        text3 = document.createTextNode('We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!')
        p.appendChild(text3)
        div1.appendChild(img)
        div1.appendChild(button)
        div1.appendChild(h2)
        div1.appendChild(p)
        document.querySelector('.ActiveComponent').appendChild(div1)
    }
    
})

