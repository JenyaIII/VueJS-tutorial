new Vue({
  el: "#vue-app",
  data: {
    name: "Jenya",
    job: "Net Ninja"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    }
  }
});
