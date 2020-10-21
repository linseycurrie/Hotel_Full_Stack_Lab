<template>
  <div>
    <form v-on:click="updateBooking">
      <h2>Name: {{selected_booking.name}}</h2>
      <h3>Email: {{ selected_booking.email }}</h3>
      <h3>Check in Status: </h3>
      <label for="checkbox">Check In</label>
      <input type="checkbox" value="checked in">
      <label for="checkbox">Check Out</label>
      <input type="checkbox" value="checked out">

      <input type="submit" value="Save" id="save"/>
    </form>
  </div>
</template>

<script>
import UpdateBooking from '../components/UpdateBooking';
import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
    name:'update-booking',
    props: ['selected_booking'],

    methods: {
        updateBooking(){
            BookingService.updateBooking(booking, this.booking._id)
            .then(() => eventBus.$emit('booking-update', this.booking._id))
        }
    }


}
</script>

<style>

</style>