## GraphQL
Short for **Graph Query Language**, GraphQL is a specification for APIs that allow clients to define the structure of the data they want to request from the server. GraphQL is RESTful, as it follows the six constraints of REST APIs. However, GraphQL also takes the approach of being query-centric, because it is structured to function similarly to a database query language like Structured Query Language (SQL).

To access a GraphQL API, we’ll typi- cally access the URL where it is hosted and submit an authorized request that contains query parameters as the body of a POST request, similar to the following:
```
query {
  users {
    username
    id
    email
    } 
}
```

And response might be as following:
```json
{
  "data": {
    "users": {
      "username": "hapi_hacker",
      "id": 1111,
      "email": "hapihacker@email.com"
      } 
    }
}
```

###  SOAP: AN ACTION-ORIENTED API FORMAT

 Simple Object Access Protocol (SOAP) is a type of action-oriented API that relies on XML. SOAP is one of the older web APIs, originally released as XML- RPC back in the late 1990s, so we won’t cover it in this book.

 Although SOAP works over HTTP, SMTP, TCP, and UDP, it was primarily designed for use over HTTP. When SOAP is used over HTTP, the requests are all made using HTTP POST. For example, take a look at the following sample SOAP request:

  ##### Anatomy of SOAP Message


The examples in the above sections have already shown the format of SOAP API messages. In this section, you can better understand the few blocks of XML that SOAP requests contain. While it’s deliberately minimal (the “S” in SOAP stands for “simple,” after all), it provides the foundation for complex implementations.

SOAP messages are constructed of up to four blocks:

   - soap:**Envelope**
   - soap:**Header**
   - soap:**Body**
   - soap:**ault**
  
Only soap:Envelope and soap:Body are required.

 Request example:
  ```xml
  POST /Inventory HTTP/1.1
    Host: www.soap-shop.com
    Content-Type: application/soap+xml; charset=utf-8
    Content-Length: nnn

    <?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
  <soap:Body xmlns:m="http://www.soap-shop.com/inventory"> <m:GetInventoryPrice>
    <m:InventoryName>ThebestSOAP</m:InventoryName>
  </m:GetInventoryPrice>
</soap:Body>
</soap:Envelope>
 ```
 Resonse :
  ```xml
HTTP/1.1 200 OK
Content-Type: application/soap+xml; charset=utf-8
Content-Length: nnn

<?xml version="1.0"?>
<soap:Envelope 
xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" 
soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">

<soap:Body xmlns:m="http://www.soap-shop.com/inventory"> 
    <soap:Fault> <faultcode>soap:VersionMismatch</faultcode>
        <faultstring, xml:lang='en'>
            Name does not match Inventory record
        </faultstring>
    </soap:Fault>
</soap:Body>
</soap:Envelope>
 ```