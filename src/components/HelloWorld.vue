<template>
  <main>
    <h1>{{ randomH1 }}</h1>
    <p>{{ randomIngress }}</p>
    <p>
      {{ randomText }}
    </p>

    <table>
      <thead>
        <tr>
          <th>{{ column }}</th>
          <th>{{ column }}</th>
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

    <h2>{{ randomH2 }}</h2>
    <p>{{ randomIngress2 }}</p>
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
