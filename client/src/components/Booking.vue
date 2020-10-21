<template>
  <div class="booking">
      <h2>{{ booking.name }}</h2>
      <h3>{{ booking.email }}</h3>
      <h3>{{ booking.check_in }}</h3>

      <button type="button" v-on:click="deleteBooking">Delete Booking</button>
     <button typr="button" v-on:click="updateBooking">Update Booking</button>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService';

export default {
    name: 'booking',
  props: ['booking'],

  methods: {
    deleteBooking(){
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },

    updateBooking(){
      BookingService.updateBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-update', this.booking._id))
    }
  }

}
</script>

<style>
.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

</style>