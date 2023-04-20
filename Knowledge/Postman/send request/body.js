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
