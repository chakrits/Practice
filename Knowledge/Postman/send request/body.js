// Update body befoore sebd request

pm.request.body.update({
    mode: "urlencoded",   // body type x-wwww-form-urlencoded
    urlencoded: [
    {
        key: "{{key1}}",                          
        value: "{value 1}"
    },
    {
        key:"{{key2}}",                       
        value: "{value 2}"
    }
    ]
});


pm.request.body.update( 
    {
        mode: 'raw',
        raw: JSON.stringify({
            key: 'value1',
            key2: 'value2'
        }),
        options: {
            raw: {
                language: 'json'
            }
        }
    }
)
 