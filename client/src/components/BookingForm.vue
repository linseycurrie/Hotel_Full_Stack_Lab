<template>
  <div>  
    <form id="booking-form" v-on:submit="addBooking">
      <h2>Add Guest Booking</h2>
      <div>
          <label for="name">Guest Name: </label>
          <input type="text" id="name" v-model="name" required>
      </div>
      <div>
          <label for="email">Email address: </label>
          <input type="text" id="email" v-model="email" required>
      </div>
      <div>
          <label for="check_in">Check in Status: </label>
          <label for="true">Checked In</label>
          <input type="radio" id="true" value="checked in" v-model="check_in">
          <label for="false">Checked Out</label>
          <input type="radio" id="false" value="checked out" v-model="check_in">
      </div>
      <input type="submit" value="Save" id="save"/>
    </form>
  </div>
</template>

<script>
import {eventBus} from '@/main'
import BookingService from '@/services/BookingService'


export default {
    name: "booking-form",
    data(){
        return {
            name: "",
            email: "",
            check_in: Boolean
    }
},

    methods: {
        addBooking(event){
            event.preventDefault()
            const booking ={
                name: this.name,
                email: this.email,
                check_in: this.check_in
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))
        }
    }

}
</script>

<style>

</style>