import {Component, OnInit, ElementRef, ViewChild, NgZone, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "angular2-google-maps/core";
import {} from '@types/googlemaps';

@Component({
  selector: 'app-google',
  templateUrl: 'google.component.html',
  styleUrls: ['google.component.css'],
})

export class GoogleComponent implements OnInit {
  @Output() eventClick = new EventEmitter();;
   latitude: number;
   longitude: number;
   searchControl: FormControl;
   zoom: number;
  @ViewChild("search")
   searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();
    //set current position
    this.setCurrentPosition();

  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement, {
        types: ["address"]
      });
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
      });
    });

  });

  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.eventClick.emit(this.longitude+","+ this.latitude);
      });
    }
  }
  sortByLocation(){
    this.eventClick.emit(this.longitude+","+ this.latitude);

  }
}
declare var google;
