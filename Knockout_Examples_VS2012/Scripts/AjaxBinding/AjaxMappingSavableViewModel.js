function AjaxMappingSavableViewModel(urls) {
    var self = this;

    self.Songs = ko.observableArray();
    self.AddingNewSong = ko.observable(false);
    self.NewSong = new SongModel();
    
    self.ShowAddSongForm = function () {
        self.AddingNewSong(!self.AddingNewSong());
    };

    self.AddSong = function () {
        self.Songs.push(self.NewSong);
        self.NewSong = new SongModel();
        self.AddingNewSong(false);
    };

    self.SaveSong = function () {
        var songs = ko.toJSON(self.Songs);
        $.ajax({
            url: urls.SaveUrl,
            type: 'POST',
            data: songs,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
            }
        });
    };

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