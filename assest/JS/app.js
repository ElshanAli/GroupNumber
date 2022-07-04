function ClickGroup(){
    var groupName=prompt('Enter The Group Number')
    var groupNum=groupName.slice(-3,-2)
    if (groupNum==1) {
        document.write(`Your have been added to the ${groupName.toUpperCase()} Group ${'<br>'} And Your Group is The Morning Group`)
        document.body.style.backgroundColor='yellow'
        document.body.style.display='flex'
        document.body.style.justifyContent='center'
        document.body.style.alignItems='center'
        document.body.style.textAlign='center'
        document.body.style.fontSize='40px'

    }
    if (groupNum==2) {
        document.write(`Your have been added to the ${groupName.toUpperCase()} Group ${'<br>'} And Your Group is The Afternoon Group`)
        document.body.style.backgroundColor='red'
        document.body.style.color='white'
        document.body.style.display='flex'
        document.body.style.justifyContent='center'
        document.body.style.alignItems='center'
        document.body.style.textAlign='center'
        document.body.style.fontSize='40px'

    } 
    if (groupNum==3) {
        document.write(`Your have been added to the ${groupName.toUpperCase()} Group ${'<br>'} And Your Group is The Evening Group`)
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.body.style.display='flex'
        document.body.style.justifyContent='center'
        document.body.style.alignItems='center'
        document.body.style.textAlign='center'
        document.body.style.fontSize='40px'

    }
}