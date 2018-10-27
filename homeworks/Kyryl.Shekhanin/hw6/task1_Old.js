/*
- Given text with tags create object structure where key - the tag name, value - tag value.Nested tags are allowed.
Dublicated tag names on the same level are forbiden.
*/
const GetTagsObj = (t) => {
    if (!t) {
        return;
    }

    var text = t;

    
    var textPosStart = 0;
    var textPosEnd = 0;
    var TagName = [];
    var TagNameStr = '';
    var TagText = '';


    var obj = {};

    /**
     * /Make String from Array without coma 'A,B'
     * @param {Array} string
     */
    var MytoString = function (array) {
        var Str = '';
        for (var i = 0; i < array.length; i += 1) {
            Str += array[i];
        }
        return Str;
    }

    /**
     * Find Tag, return true if tag not empty
     * */
    var findTag = function () {
        TagName = [];
        TagNameStr = '';
        textPosStart = text.indexOf('<', textPosStart);

        for (textPosStart += 1; textPosStart !== text.indexOf('>', textPosStart); textPosStart++) {
            TagName.push(text.charAt(textPosStart));
        }

        TagNameStr = MytoString(TagName);
        textPosEnd = text.indexOf('</' + TagNameStr + '>');

        if (TagNameStr) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get text between textPosStart and textPosEnd
     * */
    var getTagText = function () {
        textPosStart += 1;
        TagText = text.slice(textPosStart, textPosEnd);
    }


    while (textPosStart != text.length) {
        findTag();
        getTagText();

        obj[TagNameStr] = TagText;
        

        textPosEnd += (TagName.length + 3);
        textPosStart = textPosEnd;
    }

    return obj;

};


/**
 * Not Finish
 * @param {any} t
 */
const GetTagsObj_Nested = (t) => {
    if (!t) {
        return;
    } else if (typeof t !== 'string') {
        return;
    }

    var tArray = t.split('');

    var tagCounter = 0;
    var tagName = '';
    var tagText = '';

    /**
     * 
     * @param {string} text
     */
    var FindTag = function (text) {
        var textArray = text.split('')
        var tagIsOpen = false;
        tagName = '';

        for (var i = 0; i < textArray.length; i += 1) {

            if (textArray[i] === '<' && !tagIsOpen) {

                tagIsOpen = true;

                if (textArray[i + 1] === '/') {
                    tagCounter -= 1;
                    tagIsOpen = false;
                    
                    while (textArray[i] !== '>')
                    {
                        i += 1;
                    }
                    return {tagPos}
                } else {
                    tagCounter += 1;
                }

            } else if (textArray[i] === '>' && tagIsOpen) {
                tagIsOpen = false;

            } else if (tagIsOpen) {
                tagName += textArray[i];
            } else if (!tagIsOpen) {
                tagText += textArray[i];
            }


        }
    }

    FindTag(t);


}

var TestText = '<p>This is </p><sub>subscripted text.</sub>';
var TestTextNested = '<p>This is <sub>subscripted text.</sub></p>';

var TagObj1 = GetTagsObj_Nested(TestText);
var TagObj2 = GetTagsObj_Nested(TestTextNested);