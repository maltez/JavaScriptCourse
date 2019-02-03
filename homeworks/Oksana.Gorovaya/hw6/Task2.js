let tagTxt = {
    html: {
        head: {
            title: 'Here is your title',
            meta: 'Some meta',
        },
        body: {
            p: 'Here is your paragraph',
            a: 'Some href',
        }
    },
    render: function (){
        let html = '<html>';
        Object.keys(this.html).map((tag) => {
            html += '<' + tag + '>';
            Object.keys(this.html[tag]).map((nestedTag) => {
                html += '<' + nestedTag + '>';
                html += this.html[tag][nestedTag];
                html += '</' + nestedTag + '>';
            });
            html += '</' + tag + '>';
        });
        html += '</html>';
        return html;
    },
};
console.log(tagTxt.render());