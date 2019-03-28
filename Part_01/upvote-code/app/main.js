const submissionComponent = {
  // It must be enclosed within A SINGLE root element (the 'div' here)
  template: `
  <div style="display: flex; width: 100%"
    <figure class="media-left">
      <img class="image is-64x64" v-bind:src="single_sub.submissionImage">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>
              <a v-bind:href="single_sub.url" class="has-text-info">
                  {{ single_sub.title }}
              </a>
              <span class="tag is-small">#{{ single_sub.id }}</span>
          </strong>
          <br/>
              {{ single_sub.description }}
          <br/>
          <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24" v-bind:src="single_sub.avatar" alt="This is Daniel">
          </small>
        </p>
      </div>
    </div>
    <div class="media-right">
      <span class="icon is-small" v-on:click="upvote(single_sub.id)">
        <i class="fas fa-thumbs-up"></i>&nbsp;
        <strong class="has-text-info">{{ single_sub.votes }}</strong>
      </span>
    </div>
  <div>`,
  props: ['single_sub', 'submissions'],
  methods: {
    // Since the Vue components ARE Vue instances,
    // you CAN use most of the attrs that exist in the root Vue instance.
    upvote (submissionId) {
      const single_sub = this.submissions.find (
        single_sub => single_sub.id === submissionId
      );

      single_sub.votes++;
    },
  },
};

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
