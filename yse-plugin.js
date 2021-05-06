// declaring a namespace for the plugin
var YSE = YSE || {};

YSE = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    feedback: {
        'fi': 'Voit ehdottaa uusia käsitteitä YSOn etusivun alalaidasta löytyvällä lomakkeella. Jos haluat ehdottaa muutosta YSOn käsitteeseen, muutosehdotuslomake löytyy YSO-käsitteiden tietojen yhteydestä.',
        'sv': 'Du kan föreslå nya begrepp till ALLFO med förslagsblanketten längst ner på ALLFO:s förstasida. Du kan också föreslå ändringar till ALLFO-begrepp via den ändringsblankett som finns på varje ALLFO-begreppssida.',
        'en': ''
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
