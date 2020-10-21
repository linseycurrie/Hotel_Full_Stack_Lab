<template>
<div>
    <booking v-for="(booking, index) in bookings" :booking="booking" :key="index"> </booking>
</div>
  
</template>

<script>
import Booking from './Booking';

export default {
    name: 'booking-display',
    components: {
        'booking': Booking
    },
    props: ['bookings'],
    
}
</script>

<style>

</style>