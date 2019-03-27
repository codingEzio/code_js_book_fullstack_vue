new Vue ({
  el: '#app',
  data: {
    submissions: Seed.submissions, // Seed => seed.js
  },
  computed: {
    // Q: Why here (coding this 'computed property' part)?
    // A: For any complex logic, you should do it in here (rather than template).
    sortedSubmissions () {
      /*
        Apparently, the `submissions` here is one coming from `data` part.
        So this one here will always depend on it (& update when `xx in data` changes).

        For me, this part is kinda like << Vue_inst.data.submissions >> (unverified).
      */
      return this.submissions.sort ((former, latter) => {
        return latter.votes - former.votes;
      });
    },
  },
});
