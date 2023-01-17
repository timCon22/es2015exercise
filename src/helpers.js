function choice(items) {

    let i = Math.floor(Math.random() * items.length)

    return items[i]
}

function remove(items, item) {

    if(items[item] === item){
        items.slice(item)
    }

}


export {choice, remove}