<template>
  <div>
    <Card class="skills-card" with-info>
      <template v-slot:header>
        Skills Card
      </template>
      <div v-for="skill in skills" :key="skill.id">
        <div class="proficiency" :data-proficiency="skill.proficiency" v-on:click="toggle">
          <span>{{ skill.name }}</span>
        </div>
        <div class="comment" v-if="skill.comment">
          <p>{{ skill.comment }}</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'SkillsCard',
  components: {
    Card,
  },
  data: () => ({
    skills: [
      { id: '1', name: 'Javascript', proficiency: 80 },
      {
        id: '2',
        name: 'Redux',
        proficiency: 60,
        comment: 'This is a comment regarding my Redux skill; it is meant to clarify why I believe I have this grade of proficiency with it.',
      },
      { id: '3', name: 'Vue.js', proficiency: 60 },
      { id: '4', name: 'Polymer', proficiency: 80 },
      { id: '5', name: 'Lit-Element', proficiency: 80 },
      { id: '6', name: 'HTML', proficiency: 100 },
      { id: '7', name: 'CSS', proficiency: 80 },
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

$skill-width: 20rem;

.skills-card {
  .proficiency {
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
      background: linear-gradient(to right, #182848, #4b6cb7);
      box-shadow: 2px 6px 3px -4px rgba(130, 130, 130, .8);
      height: 3rem;
      left: 0;
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
      width: 10% * $i;
    }
  }

  .comment {
    height: 0;
    overflow: hidden;
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
