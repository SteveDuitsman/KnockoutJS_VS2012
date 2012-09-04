
function SongModel(id, title, artist, length) {
    this.Id = ko.observable(id || -1);
    this.Title = ko.observable(title || '');
    this.Artist = ko.observable(artist || '');
    this.Length = ko.observable(length || new LengthModel());
    return this;
}

function LengthModel() {
    this.Hours = ko.observable(0);
    this.Minutes = ko.observable(0);
    this.Seconds = ko.observable(0);
    return this;
}