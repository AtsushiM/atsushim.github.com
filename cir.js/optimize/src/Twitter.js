/* Test: "../../spec/_src/src/Twitter/test.js" */
Global['Twitter'] = klassExtendBase(UNDEFINED,
{
    'shareURL': function(vars) {
        var caption = vars['caption'] || EMPTY,
            name = vars['name'],
            hash = vars['hash'],
            url = 'https://twitter.com/intent/tweet?';

        name = name ? ' 「' + name + '」' : EMPTY;
        hash = hash ? ' ' + hash : EMPTY;

        url += makeQueryString({
            'url': vars['redirect_uri'],
            'text': caption + name + hash
        });

        return url;
    }
});
