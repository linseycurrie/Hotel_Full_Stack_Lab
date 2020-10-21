<template>
  <div id="app">
    <booking-form>  </booking-form>
    <booking-display v-if="bookings" :bookings="bookings"> </booking-display>
    <update-booking v-if="selected_booking" :selected_booking="selected_booking"></update-booking>

  </div>
</template>

<script>
import {eventBus} from '@/main'
import BookingService from './services/BookingService'
import BookingForm from './components/BookingForm'
import BookingDisplay from './components/BookingDisplay'
import UpdateBooking from './components/UpdateBooking'



export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-display': BookingDisplay,
    'update-booking': UpdateBooking
  },

  data(){
    return{
      bookings: [],
      selected_booking: null
    }
  },
  mounted(){
    this.fetchBookings()

    eventBus.$on('booking-added', (booking) => {
      console.log('booking', booking);
      this.bookings.push(booking)
  })

  eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

  eventBus.$on('booking-update', (id) => {
    let index = this.bookings.findIndex(booking => booking._id === id)
    this.selected_booking = this.bookings[index]
  })
  },

  methods: {
    fetchBookings(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
