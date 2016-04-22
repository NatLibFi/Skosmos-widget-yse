// declaring a namespace for the plugin
var YSE = YSE || {};

YSE = {
    strings: {
        'fi': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSOon/YSAan. Jos tarvitset käsitettä kerro siitä käsite-ehdotuksen kotisivulla.',
        'sv': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSOon/YSAan. Jos tarvitset käsitettä kerro siitä käsite-ehdotuksen kotisivulla.',
        'en': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSOon/YSAan. Jos tarvitset käsitettä kerro siitä käsite-ehdotuksen kotisivulla.'
    },
    renderWarning: function(params) {
        $('.content').prepend(Handlebars.compile($('#ysewarning-template').html())({'warning-text': this.strings[lang]}));
    },
};

$(function() { 
    window.yseWarning = function(params) {
        if (params.page === 'page' && params.uri) {
            YSE.renderWarning(params);
        }
    };
});
