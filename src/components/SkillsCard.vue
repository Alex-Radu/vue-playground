<template>
  <div>
    <Card class="skills-card" with-info>
      <template v-slot:header>
        Skills
      </template>
      <div v-for="skill in skills" :key="skill.id">
        <div class="proficiency" :data-proficiency="skill.proficiency"
          v-on="skill.comment ? { click: toggle } : {}">
          <span>{{ skill.name }}</span>
        </div>
        <div class="comment" v-if="skill.comment">
          <p v-html="skill.comment">{{ skill.comment }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import * as moment from 'moment';
import Card from './Card.vue';

export default {
  name: 'SkillsCard',
  components: {
    Card,
  },
  data: () => ({
    skills: [
      {
        id: '1',
        name: 'Javascript',
        proficiency: 80,
        comment: `I would say that this is my main skill; this is what everything else is built upon. I've been a Web Developer for around
        ${moment('20140801', 'YYYYMMDD').fromNow(true)} now and Javascript was a part of this from the start. I had a fair bit of projects
        that I worked on that showed me various aspects of the language which helped me understand it more. There are still intricacies I
        am not in full control of and the language is constantly getting updated and also I still sometimes double check the MDN page for
        Arrays 🙈, but I use the following metric to evaluate myself: if I laugh when I see the code I wrote ~3 years ago then it means
        I'm better now than I was back then (sure, it also means I'm a little bit more pretentious, but this comes with experience).`,
      },
      {
        id: '2',
        name: 'Redux',
        proficiency: 60,
        comment: '',
      },
      {
        id: '3',
        name: 'Vue.js',
        proficiency: 50,
        comment: `My only experience with Vue.js is this page that you're looking at. It has Vue Router, nested components,
        directives, slots and some other stuff. Because everything here was written from zero, no components from other sources,
        I think that this little project gave me enough exposure to this framework so that I could understand and even contribute
        to more complex projects.`,
      },
      {
        id: '4',
        name: 'Polymer',
        proficiency: 80,
        comment: '',
      },
      {
        id: '5',
        name: 'Lit-Element',
        proficiency: 80,
        comment: '',
      },
      {
        id: '6',
        name: 'HTML',
        proficiency: 100,
        comment: `Not much to say here; 90% of the time you're filling the page with <strong>divs</strong> and <strong>spans</strong>. The
        other 10% is knowing when not to use them in favour of more semantically appropriate options.`,
      },
      {
        id: '7',
        name: 'CSS',
        proficiency: 80,
        comment: 'It\'s not always that easy to center something with CSS, but I can do it with almost any element. That\'s good, right?',
      },
    ],
  }),
  methods: {
    toggle: (event) => {
      const target = event.currentTarget;
      const sibling = target.nextSibling;

      if (target.classList.contains('expanded')) {
        const sectionHeight = sibling.scrollHeight;
        const siblingTransition = sibling.style.transition;
        sibling.style.transition = '';

        requestAnimationFrame(() => {
          sibling.style.height = `${sectionHeight}px`;
          sibling.style.transition = siblingTransition;

          requestAnimationFrame(() => {
            sibling.style.height = '0px';
          });
        });

        target.classList.remove('expanded');
      } else {
        const sectionHeight = sibling.scrollHeight;

        sibling.style.height = `${sectionHeight}px`;
        target.classList.add('expanded');
      }
    },
  },
};
</script>

<style lang="scss">

$skill-width: 25rem;

.skills-card {
  .proficiency {
    background: linear-gradient(to right, #173753, #7DE2D1);
    box-sizing: border-box;
    cursor: pointer;
    height: 3rem;
    overflow: hidden;
    position: relative;
    width: $skill-width;

    &:before,
    &:after {
      content: '';
      display: inline-block;
    }

    &:before {
      background: #F87060;
      bottom: 0;
      height: 2px;
      position: absolute;
      transition: width .5s ease;
      width: 0;
      z-index: 2;
    }

    &:after {
      background: #EEEEFF;
      height: 3rem;
      right: 0;
      position: absolute;
      z-index: 1;
    }

    &:hover:before {
      width: 100%;
    }

    &.expanded {
      border-bottom: 2px solid #F87060;

      &:before {
        bottom: -2px;
      }
    }

    span {
      border-left: 2px dashed #F87060;
      color: #EEEEFF;
      padding: .25rem .5rem;
      position: absolute;
      left: 1.5rem;
      top: .5rem;
      z-index: 3;
    }
  }

  @for $i from 1 through 10 {
    .proficiency[data-proficiency="#{10 * $i}"]:after {
      width: 10% * (10 - $i);
    }
  }

  .comment {
    height: 0;
    hyphens: auto;
    overflow: hidden;
    text-align: justify;
    transition: height .5s ease-out;
    width: $skill-width;

    p {
      margin: 1rem;
    }
  }

  .proficiency.expanded + .comment {
    border-bottom: 2px solid #F87060;
    border-top: none;
  }
}
</style>
