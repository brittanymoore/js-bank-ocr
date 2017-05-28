# js-bank-ocr

JavaScript solution for Bank OCR problem (http://codingdojo.org/kata/BankOCR/)

## Dependencies

node, jasmine

## Usage

To run the program: 

``
node main.js *file path*
``

To run the unit tests:
``
npm run test
``

## Notes

### Going Forward

Right now it's doing the bare minimum - reading the file and outputting the account numbers. I have a working 
validation function, so I was very close to the ILL and ERR cases. The main thing I didn't have time to get to
at all was guessing alternate digits. Obviously I need to finish adding tests for the newer functions - isValid is the only well-covered function.

My plan for tackling the guessing was to basically check
each number for one-offs, then check whether inserting that one-off passes the checksum validator. It doesn't
seem terribly efficient, so I was thinking it might be useful to update the scanValues object to contain one-offs instead of calculating them over and over.

So instead of scanValues["*one string*"] = "1", it would be scanValues["*one string*"] = { digit: "1", alts: [*whatever they are*] }; I would strongly consider moving the scanValues stuff into it's own class as well, since that piece of functionality isn't intrinsically linked to the file reader portion.

Each AccountNumber object would have a status property: "ILL" if it contains a ?, "ERR" if it is all numbers but doesn't pass the isValid function, and "AMB" if there are multiple one-offs that are valid options. The toString function would handle appending that so the file write doesn't have to worry about it.

Overall, this was an interesting problem, and I'll probably come back at it later.

### Areas for Improvement

1) Unit test coverage is definitely not what I'd like - it was very useful to get the validation up and running, but less helpful during the file parsing stage. I think I need to practice more with 'fs' in general; I've used it quickly in tutorials, but not for a complicated line-reading scenario. I lost some time due to bad inputs. >_<
2) Ditto for commenting.
3) There are a couple of places that I should have established constant variables instead of repeating values (that 27 in the file reader helpers, for example).
4) Some functions could use better error handling in case of bad inputs (line length, skipped lines, etc).
5) Organization (see notes above).
