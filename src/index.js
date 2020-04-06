const payload = JSON.stringify({

    a: 1,
    b: 2
})
console.log('payload', payload)

const data = new FormData()
data.append( "json", payload  )


fetch("/getData",
{
    method: "POST",
    body: data
})
.then(res => {console.log(res); return res.json()})
.then(data => console.log('databack', data) )