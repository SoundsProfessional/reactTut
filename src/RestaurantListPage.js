import React, { Component } from 'react';
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

export default class RestaurantListPage extends Component {
    state={restaurantNames:[]}

    handleAddRestaurant = (newRestaurantName) => {
        this.setState(state => ({
            restaurantNames: [
                newRestaurantName,
                ...state.restaurantNames,
            ],
        }));
    }

    render() {
        const {restaurantNames} = this.state;
        return (
            <div>
                <NewRestaurantForm onSave={this.handleAddRestaurant}/>
                <button data-test="addRestaurantButton">ADD</button>
                <RestaurantList restaurantNames={restaurantNames}/>
            </div>
        );

    }
}