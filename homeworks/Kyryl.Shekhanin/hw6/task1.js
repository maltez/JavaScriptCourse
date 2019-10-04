    /**
    * 
    * @param {string} text
    * @returns {Object}
    */
var Init = function (text) {

    if (!text) {
        return;
    } else if (typeof text !== 'string') {
        return;
    }

    var tagPos = 0;
    var tagLastPos = 0;
    var indexTextPos = 0;

    var NoTagCounter = 0;

    var Tagname = '';


    var obj;
    while (indexTextPos < text.length) {
        text = text.slice(tagLastPos);

        tagPos = 0;
        tagLastPos = 0;
        indexTextPos = 0;
        /**
         * Find anyTag; 
         */
        Tagname = GetTagPos(text.slice(tagLastPos));


        /**
         * 'Hahaha' -> null;
         * '<p>test</p>Hahahah' -> obj{p:test}
         */
        if (Tagname === -1) {
            if (!obj) {
                return null;
            } else {
                obj['NTC_' + NoTagCounter] = text.slice(tagLastPos);
                NoTagCounter += 1;
                return obj;
            }
        }
        if (!obj) {
            obj = {};
        }

        /**
         * Find pos tag Tagname 
         */
        tagPos = GetTagPos(text.slice(tagLastPos), Tagname);

        /*
         * Skip  noTag-text from begin.
         * 'Hahaha<p>test</p> -> <p>test</p>
         * 
         * */
        if (tagPos && !indexTextPos) {
            
            tagLastPos = tagPos;
            indexTextPos = tagPos;

            obj['NTC_' + NoTagCounter] = text.slice(0, tagLastPos);
            NoTagCounter += 1;
            continue;
        }

        /*
         *Find position correct close-tag
         * 
         * */
        tagLastPos = GetLastTagPos(text.slice(tagLastPos), Tagname);

        /**
         *          <,> = 2 characters;
         * */
        tagPos += Tagname.length + 2; 



        obj[Tagname] = text.slice(tagPos + indexTextPos, tagLastPos + indexTextPos);


        /**
         * Check Substring into revers function'
         * {p : '<sub>Some str!</sub>' -> {p:{sub:'Some str!'}};
         * */
        var tmpObj = Init(obj[Tagname]);
        obj[Tagname] = tmpObj ? tmpObj : obj[Tagname];



        /**
         *          <,/,> = 3 characters;
         * */
        tagLastPos += Tagname.length + 3;
        indexTextPos += tagLastPos;

    }

    return obj;
}

    /**
    * 
    * Return first Index of position current TagName.
    * If TugName === undef, return first TagName 
    * text = '<p>12<p>34</p></p>'
    * TagName = 'p'
    * return = 0;
    * 
    * @param {string} text
    * @param {string} TagName
    * 
    */
var GetTagPos = function (text, TagName) {
    if (!TagName) {
        var TagName = '';
        var startTagPos = text.indexOf('<');

        if (startTagPos === -1) {
            return -1;
        }
        else startTagPos += 1;

        for (; startTagPos !== text.indexOf('>'); startTagPos += 1) {
            if (startTagPos === text.length)
                return '';

            TagName += text.charAt(startTagPos);

        }
        return TagName;
    }
    else {
        return text.indexOf('<' + TagName + '>');
    }
}


    /**
    * 
    * Return last Index of position current TugName. Use nested
    * text = '<p>12<p>34</p></p>'
    * TagName = 'p'
    * return = 14;
    * 
    * @param {string} text
    * @param {string} TagName
    * 
    */
var GetLastTagPos = function (text, TagName) {
    if (!TagName) {
        return;
    }

    var tmpTagPos = 0;
    var tmpTagName = '';
    var nestedCounter = 0;



    tmpTagPos = 2 + TagName.length;

    for (; ;) {

        tmpTagName = GetTagPos(text.slice(tmpTagPos));
        if (tmpTagName === TagName) {
            nestedCounter += 1;
        } else if (tmpTagName === ('/' + TagName)) {
            if (!nestedCounter) {
                return tmpTagPos += GetTagPos(text.slice(tmpTagPos), tmpTagName);
            }
            nestedCounter -= 1;
        }

        tmpTagPos += GetTagPos(text.slice(tmpTagPos), tmpTagName) + (2 + tmpTagName.length);
    }

}




var TestTextNested = ['Hahah', '<p>This is <sub>subscripted text.</sub></p>','dggdfgd<p><p>This is <sub>subscripted text.</sub></p>This is </p>Text<sub>subscripted text.</sub>'];

console.log("\n\nNTC - no tag counter");
for (var i = 0; i < TestTextNested.length; i += 1)
{

    var test = Init(TestTextNested[i]);
    console.log('_____________________________________________________________________')
    console.log('DefaultText:' + TestTextNested[i]);
    console.log(test);
}

