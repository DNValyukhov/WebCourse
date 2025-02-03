"use strict";

$(document).ready(function () {
    const elements = $(".item").filter(function (index) {
        const self = $(this);
        return self.attr("id").indexOf("jquery") >= 0;
    });

    console.log(elements);
});