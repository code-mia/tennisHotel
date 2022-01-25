import React, { Component } from 'react';
class ServicesHandler extends Component {


    state = {
        Bar : false,
        Restaurant: false,
        PetitDejeuner : false,
        Sauna: false,
        SalleDeSport: false,
        Coiffeur : false,
        Pressing: false,
        Hammam: false
    };

    getState = () => {
        return this.state;
    }
    // React Checkboxes onChange Methods
    onChangeBar= () => {
        this.setServices(i => ({
            Bar: !i.Bar
        
        }));
      }
      onChangeRestaurant= () => {
        this.setServices(i => ({
            Restaurant: !i.Restaurant
        }));
      }
      onChangePetitDejeuner = () => {
        this.setServices(i => ({
            PetitDejeuner: !i.PetitDejeuner
        }));
      }
      onChangeSauna = () => {
        this.setServices(i => ({
            Sauna: !i.Sauna
        }));
      }
      onChangeSalleDeSport = () => {
        this.setServices(i => ({
            SalleDeSport: !i.SalleDeSport
        }));
      }
      onChangeCoiffeur= () => {
        this.setServices(i => ({
            Coiffeur: !i.Coiffeur,
        }));
      }
       onChangePressing= () => {
        this.setServices(i => ({
            Pressing: !i.Pressing,
        }));
      }
       onChangeHammam= () => {
        this.setServices(i => ({
            Hammam: !i.Hammam,
        }));
      }
      SetServices = () => {
  
        console.log(this.state );
      }
  
    // Submit
    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  
  }
  
  export default ServicesHandler;