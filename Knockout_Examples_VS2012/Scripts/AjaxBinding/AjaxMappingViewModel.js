function AjaxMappingViewModel(urls) {
    var self = this;

    self.Songs = ko.observableArray();

    self.LoadSongs = function () {
        loadSongsViaAjax(function (data) {
            
            ko.mapping.fromJS(data, {}, self.Songs);
        });
    };

    self.RunningSongCount = ko.computed(function () {
        return self.Songs().length + ' songs in collection';
    });

    var loadSongsViaAjax = function (successCallback) {
        $.ajax({
            url: urls.LoadUrl,
            type: 'GET',
            success: function (data) {
                successCallback(data);
            }
        });
    };

    return self;
}