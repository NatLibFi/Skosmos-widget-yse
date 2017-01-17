// declaring a namespace for the plugin
var YSE = YSE || {};

YSE = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    feedback: {
        'fi': 'Ehdotukset uusiksi YSA- ja YSO-käsitteiksi <a href="http://ehdotus.finto.fi/">ehdotusjärjestelmän</a> kautta.',
        'sv': 'Förslag till nya Allärs- och ALLFO-begrepp ges via <a href="http://ehdotus.finto.fi/">förslagssystemet</a>.',
        'en': 'For suggesting new concepts, please use the <a href="http://ehdotus.finto.fi/">online suggestion form</a>.'
    },
    warning: {
        'fi': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSAan eikä YSOon. Jos pidät käsitettä tarpeellisena tai haluat kommentoida sen sisältöä, kerro asiasta käsite-ehdotuksen kotisivulla (ks. linkki alla).',
        'sv': 'Detta begreppsförslag har ännu inte godkänts till Allärs eller ALLFO. Om du anser att begreppet behövs eller om du vill kommentera det så berätta om det på begreppsförslagets sida (se länken nedan).',
        'en': 'Tätä käsite-ehdotusta ei ole vielä hyväksytty YSAan eikä YSOon. Jos pidät käsitettä tarpeellisena tai haluat kommentoida sen sisältöä, kerro asiasta käsite-ehdotuksen kotisivulla (ks. linkki alla).'
    },
    renderWarning: function(params) {
        $('.content').prepend(Handlebars.compile($('#yse-template').html())({'warning-text': this.warning[lang]}));
    },
    renderFeedback: function(params) {
        $('#feedback-content').prepend(Handlebars.compile($('#yse-feedback').html())({'content': this.feedback[lang], 'notice': this.notice[lang]}));
    },
};

$(function() {
    window.yseWarning = function(params) {
        if (params.page === 'page' && vocab == 'yse' && params.uri) {
            YSE.renderWarning(params);
        }
        if ($('#feedback-form').length && (vocab === 'yso' || vocab === 'ysa' || vocab === 'yse' || vocab === 'allars')) {
            YSE.renderFeedback(params);
        }
    };
});
