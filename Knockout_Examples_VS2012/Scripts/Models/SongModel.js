
function SongModel(id, title, artist, duration) {
    this.Id = ko.observable(id || -1);
    this.Title = ko.observable(title || '');
    this.Artist = ko.observable(artist || '');
    //this.Duration = ko.observable(duration || new Date(0, 0, 0 , 0, 5, 0, 0));
    return this;
}