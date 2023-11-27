function Places(location, landmarks, year, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.year = year;
    this.notes = notes;
};

Places.prototype.placesDetails = function(){
    return this.location + " " this.landmarks;
};