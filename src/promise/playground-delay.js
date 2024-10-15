

function delay(time, message){
    return new Promise ((resolve, reject)=>{
        if (true){
            resolve(setTimeout(()=>{
                console. log(message)
            },2000))
        }
    })
}

delay (6000, 'Hi')