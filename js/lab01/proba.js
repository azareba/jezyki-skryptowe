
cyfry = '1,2,3,5,6,6'

const najw = ()=>{
    const lista = cyfry.trim().split(',')
    const listaCyfr = lista.map(e=> +e)
    console.log(Math.max(...listaCyfr))
}
najw()