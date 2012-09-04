ko.bindingHandlers.slideVisible = {
    init: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).toggle(value);
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        var value = valueAccessor();
        var allBindings = allBindingsAccessor();

        var unwrappedValue = ko.utils.unwrapObservable(value);
        var Length = allBindings.slideLength || 400;

        if (unwrappedValue == true) {
            $(element).slideDown(Length);
        } else {
            $(element).slideUp(Length);
        }
    }
};