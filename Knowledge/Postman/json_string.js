// --- Set key parameter --- //
var key = {}

key.request_datetime = cur_date;                       // Current DateTime
key.app_id = 'qc4e0Lo4';                               // System Key {{qc4e0Lo4,HLJa4mV5,kFukTPY0 }}
key.correspondent_code = 'test_hn_02'                  // HN
key.correspondent_type = 'patient'                     // ${{Correspondent Type}}      
key.correspondent_episode = 'test_en_02'               // EN
key.document_type_id = '0001'                          // Document ID
key.issuer_code = 'his_application';                        // Issue Code
key.issuer_code_type = 'application_contact_code';           // Issue Code Type
key.reference_id = 'html-005'                           // Reference ID
key.reference_type = 'invoice_number'                       // ${{Reference Type
key.latest = true                                           // Order by 

// --- End Set key parameter --- //
var data = JSON.stringify(key)
console.log(data);