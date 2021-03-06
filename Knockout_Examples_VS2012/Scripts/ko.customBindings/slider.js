﻿ko.bindingHandlers.slider = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var options = allBindingsAccessor().sliderOptions || {};
        var min = options.min || 0;
        var max = options.max || 100;
        options.min = min;
        options.max = max;

        $(element).slider(options);


        ko.utils.registerEventHandler(element, "slidechange", function () {
            var observable = valueAccessor();
            var value = $(element).slider("option", "value");
            observable(value);
        });
    },
    update: function (element, valueAccessor) {
        var sliderValue = $(element).slider("option", "value");
        var observableValue = ko.utils.unwrapObservable(valueAccessor());

        if (sliderValue - observableValue !== 0) {
            $(element).slider("option", "value", observableValue);
        }
    }
};