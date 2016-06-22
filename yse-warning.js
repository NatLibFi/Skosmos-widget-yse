// declaring a namespace for the plugin
var YSE = YSE || {};

YSE = {
    strings: {
        'fi': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSAan eikä YSOon. Jos pidät käsitettä tarpeellisena tai haluat kommentoida sen sisältöä, kerro asiasta käsite-ehdotuksen kotisivulla (ks. linkki alla).',
        'sv': 'Detta begreppsförslag har ännu inte godkänts till Allärs eller ALLFO. Om du anser att begreppet behövs eller om du vill kommentera det så berätta om det på begreppsförslagets sida (se länken nedan).',
        'en': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSAan eikä YSOon. Jos pidät käsitettä tarpeellisena tai haluat kommentoida sen sisältöä, kerro asiasta käsite-ehdotuksen kotisivulla (ks. linkki alla).'
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
