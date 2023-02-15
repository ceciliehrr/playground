<template>
  <main class="pkt-container">
    <h1 class="osg-h1">{{ randomH1 }}</h1>
    <p class="osg-txt1">{{ randomIngress }}</p>
    <p>
      {{ randomText }}
    </p>
    <button class="pkt-btn pkt-btn--label-only">
      <span class="pkt-btn__text">Knappen</span>
    </button>

    <table class="pkt-table mt-size-20 mb-size-30">
      <thead>
        <tr>
          <th class="pkt-table__th">{{ column }}</th>
          <th class="pkt-table__th">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ celle }}</td>
          <td>{{ celle }}</td>
        </tr>
        <tr>
          <td>{{ celle }}</td>
          <td>{{ celle }}</td>
        </tr>
      </tbody>
    </table>

    <h2 class="osg-h2">{{ randomH2 }}</h2>
    <p class="osg-txt2">{{ randomIngress2 }}</p>
    <p>
      {{ randomText }}
    </p>

    <img :src="image" alt="cat" />
  </main>
</template>

<script>
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

export default {
  props: {
    msg: String,
  },
  data() {
    return {
      randomH1: faker.hacker.adjective(),
      randomH2: faker.hacker.adjective(),
      randomIngress: faker.hacker.phrase(),
      randomIngress2: faker.hacker.phrase(),
      randomText: faker.lorem.paragraphs(4),
      image: faker.image.cats(),
      column: faker.hacker.adjective(),
      celle: faker.hacker.ingverb(),
    };
  },
};
</script>

<style scoped></style>
