//$('#dash-realTime-top10').tooltip();

//// card logic
////var cardNumA=document.getElementById('cardA');
//var cardNumA = $('#cardA').html();
//window.setInterval('cardNumA.innerHTML=parseInt(cardNumA.innerHTML)+1;', 1600);
//
//var cardNumB=document.getElementById('cardB');
//window.setInterval('cardNumB.innerHTML=parseInt(cardNumB.innerHTML)+1;', 3400);
//
//var cardNumC=document.getElementById('cardC');
//window.setInterval('cardNumC.innerHTML=parseInt(cardNumC.innerHTML)+1;', 300);
//
//var cardNumD=document.getElementById('cardD');
//window.setInterval('cardNumD.innerHTML=parseInt(cardNumD.innerHTML)+1;', 1200);

// main21 pop
$('#dash-count-pop').popover({
    html: true,
    title: function () {
        return main21_btn1_title();
    },
    content: function () {
        return main21_btn1_content();
    },
    template: '<div class="popover" role="tooltip" style="background-color: #4DB7B7; z-index: 9999; padding: 0px;"><div class="arrow" style="border-bottom-color: #4DB7B7;"></div><h3 class="popover-title" style="background-color: #78C7C1; border-color: #78C7C1; text-align: center; font-weight: bold;"></h3><div class="popover-content"></div></div>'
});

function main21_btn1_title() {
    var head21_1 = $('#dash-card-01-head').html();
    return head21_1;
}

function main21_btn1_content() {
    var content21_1 = $('#dash-card-01').html();
    return content21_1;
}

// main22 pop
$('#dash-realTime-pop').popover({
    html: true,
    title: function () {
        return main22_btn1_title();
    },
    content: function () {
        return main22_btn1_content();
    },
    template: '<div class="popover" role="tooltip" style="background-color: #D97A80; z-index: 9999; padding: 0px;"><div class="arrow" style="border-bottom-color: #D97A80;"></div><h3 class="popover-title" style="background-color: #E3A0A5; border-color: #E3A0A5; text-align: center; font-weight: bold;"></h3><div class="popover-content"></div></div>'
});

function main22_btn1_title() {
    var head22_1 = $('#dash-card-02-head').html();
    return head22_1;
}

function main22_btn1_content() {
    var content22_1 = $('#dash-card-02').html();
    return content22_1;
}

// main21 detail
$('#dash-count-detail').popover({
    html: true,
    title: function () {
        return main21_btn22_title();
    },
    content: function () {
        return main21_btn22_content();
    },
    template: '<div class="popover" role="tooltip" style="z-index: 9999; padding: 0px;"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
});

function main21_btn22_title() {
    var head21_22 = $('#dash-main21-btn22-head').html();
    return head21_22;
}

function main21_btn22_content() {
    var content21_22 = $('#dash-main21-btn22').html();
    return content21_22;
}

// main21 pop
$('#dash-realTime-pop').popover({
    html: true,
    title: "test",
    content: "test"
});
// main22 detail
$('#dash-realTime-detail').popover({
    html: true,
    title: function () {
        return main22_btn22_title();
    },
    content: function () {
        return main22_btn22_content();
    },
    template: '<div class="popover" role="tooltip" style="z-index: 9999; padding: 0px;"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
});

function main22_btn22_title() {
    var head22_22 = $('#dash-main22-btn22-head').html();
    return head22_22;
}

function main22_btn22_content() {
    var content22_22 = $('#dash-main22-btn22').html();
    return content22_22;
}
