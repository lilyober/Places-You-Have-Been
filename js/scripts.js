function TravelJournal() {
    this.places = {};
    this.currentId = 0;
};

TravelJournal.prototype.addPlaces = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};

TravelJournal.prototype.assignId = function() {
    this.currentId = 1;
    return this.currentId;
};

function Places(location, landmarks, year, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.year = year;
    this.notes = notes;
};

Places.prototype.placesDetails = function () {
    return this.location + " " + this.landmarks;
};