const wait = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve()
    }, 4000)
})


;(async () => {
    const w = await wait
    console.log('done')
})()
