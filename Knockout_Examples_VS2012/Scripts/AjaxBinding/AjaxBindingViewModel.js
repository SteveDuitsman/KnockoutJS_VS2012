function AjaxBindingViewModel(loadUrl) {
    var self = this;

    self.Id = ko.observable();
    self.Title = ko.observable();
    self.Artist = ko.observable();
    self.Length = ko.observable();

    self.LoadSongs = function () {
        var songData = {};

        loadSongsViaAjax(function (data) {
            songData = data;

            var first = songData[0];

            self.Id(first.Id);
            self.Title(first.Title);
            self.Artist(first.Artist);
            self.Length(first.Length);
        });
    };

    var loadSongsViaAjax = function (successCallback) {
        $.ajax({
            url: loadUrl,
            type: 'GET',
            success: function (data) {
                successCallback(data);
            }
        });
    };

    return self;
}