function TravelJournal() {
    this.places = {};
    this.currentId = 0;
};

TravelJournal.prototype.addPlaces = function(place) {
    this.places[place.location] = place;
}

function Places(location, landmarks, year, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.year = year;
    this.notes = notes;
};

Places.prototype.placesDetails = function () {
    return this.location + " " + this.landmarks;
};