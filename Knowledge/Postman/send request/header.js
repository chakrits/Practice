// --- update header with new value--- //

//If header has this key. can update by
pm.request.headers.upsert({
    key : "{{header key}}",
    value: "{key value}"
    });

//If need to add new key
pm.request.headers.add({
    key : "{{header key}}",
    value: "{key value}"
    });