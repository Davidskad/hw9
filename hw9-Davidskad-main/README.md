# CS272-F24 HW9: Badger MadLib

In this HW, you will complete our implementation of Badger MadLib! Carrying over our work from the in-class exercise, the input fields are created on page load, but you still need to perform validation and generation of the MadLib!

## Instructions

### 1. Regular Expressions

You will need to create regular expressions to validate each of the possible MadLib types...

 - `word`: A `word` contains 1 or more alpha letters (a-z, A-Z). It should *not* accept spaces, digits, or letters outside of the English alphabet.
 - `properNoun`: A `properNoun` contains 1 or more alpha letters (a-z, A-Z), the first of which being capitalized. Like a `word`, a `properNoun` should *not* accept spaces, digits, or letters outside of the English alphabet.
 - `adjective`: An `adjective` contains 1 or more alpha letters (a-z, A-Z), the last letter of which ends in `y` (uppercase or lowercase). Like a `word` and `properNoun`, it should *not* accept spaces, digits, or letters outside of the English alphabet.
 - `quote`: A `quote` starts and ends with quotation marks. These can be represented with single `'` or double `"` quotes, though they must be consistent in their use. For example, `'hello world'` and `"hello world"` are valid quotes, though `'hello world"` is not. Within the quotes must be a string containing 1 or more characters. However, unlike the above types, a `quote` can contain *any* character: letters (both English and non-English), spaces, digits, periods, commas, subquotes, *anything* is valid between the quotation marks, so long as there is atleast 1 character.

For more examples and test cases, please see the Scenarios below. You can use [regexr](https://regexr.com/) to test your regular expressions.

You will use these regular expressions in the next step.

### 2. `validate`

Implement `validate` to validate each of the inputs using the regular expressions created above. For each input that has validation errors, mark the form-control as invalid and set the appropriate error text (as defined below). Otherwise, reset any error text and form control error that may exist.

 - If a `word` input fails validation, the error text should be `"Please type 1 or more letters, without spaces or special characters."`
 - If a `properNoun` input fails validation, the error text should be `"Please type 1 or more letters, without special characters, starting with a capital letter."`
 - If an `adjective` input fails validation, the error text should be `"Please type 1 or more letters, without special characters, ending with a y."`
 - If a `quote` input fails validation, the error text should be `"Please type 1 or more characters between single or double quotes."`

Finally, the function should return `true` or `false`. The function should return `true` only if each input is valid. If any input is invalid, the function should return `false`.

**Note:** You are welcome to create additional functions to support `validate`, but that is up to you!

### 3. `generateLib`

Implement `generateLib` such that the MadLib is generated and inserted into the `madlib-result` div. To do this, you will make use of the `MAD_LIB.text` list. The full list can be found in `madlibs.js`.

This is an ordered list containing objects of 3 distinct `segmentType`. You will iterate over this list, and complete the madlib based on its segmentType according to the below instructions...
 - If the `segmentType` is `"static"`, there will be an additional key called `text`. This is simply the text that should be inserted into the madlib.
 - If the `segmentType` is `"fillable"`, there will be an additional key called `id` referencing a particular madlib `id`. You should insert the text *from the corresponding `input`* into the madlib.
 - If the `segmentType` is `"newline"`, there will be no additional key. Instead, you should simply continue the story onto a new line.

**Note:** You are welcome to create additional functions to support `generateLib`, but that is up to you!

**Hint:** To accomplish this, I would expect you to begin by creating a `p` element. For any "static" or "fillable" `segmentType`, you could append to the element's `innerText`. For any "newline" `segmentType`, you could create a new `p` element.

However, how you choose to implement this is up to you **so long as you do NOT use `innerHTML` or `insertAdjacentHTML`.** Using `innerHTML` or `insertAdjacentHTML` will cause you to lose points.

## Scenarios

The following are different possible strings for each type of regular expression.

### `word`

| String | Matches? | Reason |
| --- | --- | --- |
| `hello` | `true` | Valid string |
| `WoRLd` | `true` | Valid string |
| `a` | `true` | Valid string |
| `hello world` | `false` | Contains a space |
| `hello!` | `false` | Contains an exclamation point |
| | `false` | Must be atleast 1 letter |

### `properNoun`

| String | Matches? | Reason |
| --- | --- | --- |
| `Hello` | `true` | Valid string |
| `HELLO` | `true` | Valid string |
| `H` | `true` | Valid string |
| `hello` | `false` |  Does not start with a capital letter |
| `Hello World` | `false` | Contains a space |
|  | `false` |  Must be atleast 1 letter |

### `adjective`
| String | Matches? | Reason |
| --- | --- | --- |
| `happy` | `true` | Valid string |
| `MY` | `true` | Valid string |
| `y` | `true` | Valid string |
| `blue` | `false` | Does not end in y |
| `happy world` | `false` | Contains a space |
|  | `false` |  Must be atleast 1 letter |

### `quote`
| String | Matches? | Reason |
| --- | --- | --- |
| `"Hello"` | `true` | Valid string |
| `'Hello world'` | `true` | Valid string |
| `"HeLLo WOrlD!!! :)"` | `true` | Valid string |
| `"He said, 'Hello'"` | `true` | Valid string |
| `Hello` | `false` | Not enclosed in quotes |
| `"Unmatched` | `false` | Unmatched double quote |
| `'Unmatched` | `false` | Unmatched single quote |
| `'Mismatched"` | `false` | Mismatched quotes |
|  | `false` | Empty string |
| `""` | `false` | Quote is empty |
