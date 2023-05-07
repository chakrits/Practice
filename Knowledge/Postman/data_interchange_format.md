## API Data Interchange Formats

APIs use several formats to facilitate the exchange of data. Additionally, specifications use these formats to document APIs. Some APIs, like SOAP, require a specific format, whereas others allow the client to specify the format to use in the request and response body. 

Three common formats: JSON, XML, and YAML.

#### JSON

JavaScript Object Notation (JSON) is the primary data interchange format we’ll use throughout this book, as it is widely used for APIs. It organizes data in a way that is both human-readable and easily parsable by applications; many programming languages can turn JSON into data types they can use.
JSON represents objects as key/value pairs separated by commas, within a pair of curly brackets, as follows:
```json
 {
    "firstName": "James",
    "lastName": "Lovell",
    "tripsToTheMoon": 2,
    "isAstronaut": true,
    "walkedOnMoon": false,
    "comment" : "This is a comment",
    "spacecrafts": ["Gemini 7", "Gemini 12", "Apollo 8", "Apollo 13"],
    "book": [
              {
                "title": "Lost Moon",
                "genre": "Non-fiction"
                } 
            ]
}
```

#### XML

The Extensible Markup Language (XML) format has been around for a while, and you’ll probably recognize it. XML is characterized by the descriptive tags it uses to wrap data. Although REST APIs can use XML, it is most commonly associated with SOAP APIs. SOAP APIs can only use XML as the data interchange.
The Twitter JSON you just saw would look like the following if con- verted to XML:

```xml
<?xml version="1.0" encoding="UTF-8" ?> 

<root>
<id>1278533978970976300</id>
  <id_str>1278533978970976256</id_str>
  <full_text>1984: William Gibson published his debut novel, Neuromancer. It&#x27;s a cyberpunk
tale about Henry Case, a washed up computer hacker who&#x27;s offered a chance at redemption by
a mysterious dude named Armitage. Cyberspace. Hacking. Virtual reality. The matrix. Hacktivism.
A must read. https://t.co/R9hm2LOKQi 
</full_text>
  <truncated>false</truncated> <!-- Comment in XML -->
</root>
```


#### YAML

Another lightweight form of data exchange used in APIs, YAML is a recursive acronym that stands for YAML Ain’t Markup Language. It was created as a more human and computer-readable format for data exchange.
Like JSON, YAML documents contain key/value pairs. The value may be any of the YAML data types, which include numbers, strings, Booleans, null values, and sequences. For example, take a look at the following YAML data:

```yaml
id: 1278533978970976300
id_str: 1278533978970976256
#Comment about Neuromancer
full_text: "1984: William Gibson published his debut novel, Neuromancer. It's a cyberpunk
tale about Henry Case, a washed up computer hacker who's offered a chance at redemption by a
mysterious dude named Armitage. Cyberspace. Hacking. Virtual reality. The matrix. Hacktivism. A
must read. https://t.co/R9hm2LOKQi"
truncated: false

```