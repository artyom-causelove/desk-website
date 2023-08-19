<template>
  <q-drawer v-model="drawer" :mini="mini" class="column justify-between q-pt-md bg-primary text-white" show-if-above side="left" bordered :width="270">
    <q-btn class="absolute" style="bottom: 15px; right: -10px" dense round unelevated color="accent" :icon="mini ? 'chevron_right' : 'chevron_left'" @click="toggleMini()" />

    <q-list dark style="max-width: 318px">
      <transition-group
        name="list__item"
        enter-from-class="animated fadeInLeft"
        leave-to-class="animated fadeOutLeft"
      >
        <q-item class="list__item" clickable v-ripple key="1">
          <transition-group
            name="list__item"
            enter-from-class="animated fadeInRight"
            leave-to-class="animated fadeOutRight"
          >
            <q-item-section id="awd" avatar class="list__item-section" :class="{ 'q-pl-xs': !mini }" key="11">
              <q-icon name="api" size="lg" />
            </q-item-section>
            <q-item-section v-if="!mini" key="12">
              <q-item-label class="text-h5 text-weight-bold text-uppercase">desk</q-item-label>
            </q-item-section>
            <q-item-section v-if="!mini" side top key="13">
              <q-badge label="1.0.0" color="secondary" text-color="primary"/>
            </q-item-section>
          </transition-group>
        </q-item>

        <q-separator dark spaced="lg" key="2" />
        <q-item-label v-if="!mini" class="list__item-label text-subtitle1 text-weight-bold text-capitalize" header key="3">main</q-item-label>

        <q-item class="list__item" dense exact-active-class="text-warning" clickable v-ripple exact to="/namespaces" key="4">
          <q-item-section avatar>
            <q-icon class="list__item-icon" :class="{ 'on-right': !mini }" name="view_module" size="xs"/>
          </q-item-section>
          <q-item-section>
              <q-item-label class="text-weight-bold text-uppercase">namespaces</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="list__item" dense exact-active-class="text-warning" clickable v-ripple exact to="/projects" key="5">
          <q-item-section avatar>
            <q-icon class="list__item-icon" :class="{ 'on-right': !mini }" name="dashboard" size="xs"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold text-uppercase">projects</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="list__item" dense clickable v-ripple key="6">
          <q-item-section avatar>
            <q-icon class="list__item-icon" :class="{ 'on-right': !mini }" name="web_asset" size="xs"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold text-uppercase">boards</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="list__item" dense clickable v-ripple key="7">
          <q-item-section avatar>
            <q-icon class="list__item-icon" :class="{ 'on-right': !mini }" name="task" size="xs"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold text-uppercase">tasks</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator dark spaced="lg" key="8"/>
        <q-item-label v-if="!mini" class="list__item-label text-subtitle1 text-weight-bold text-capitalize" header key="9">profile</q-item-label>

        <q-item class="list__item" clickable v-ripple key="10">
          <q-item-section avatar>
            <q-avatar size="38px">
              <img style="object-fit: cover" src="https://img.freepik.com/premium-photo/portrait-of-a-handsome-young-man-getting-ready-for-work-created-with-generative-ai_762026-29150.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-bold text-capitalize">John Silver</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="list__item" clickable v-ripple key="11">
          <q-item-section avatar>
            <q-icon class="list__item-icon" :class="{ 'on-right': !mini }" name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-medium text-capitalize">logout</q-item-label>
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>

    <q-list class="q-pb-md row justify-center" dense dark style="max-width: 318px">
      <q-item>
        <q-item-section>
          <q-item-label class="text-caption text-right text-weight-medium text-capitalize">
            powered by
            <q-avatar class="q-ml-xs" size="25px">
              <img style="object-fit: cover" src="https://nuxt.com/assets/design-kit/logo/icon-green.svg">
            </q-avatar>
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-caption text-right text-weight-medium text-capitalize">
            powered by
            <q-avatar class="q-ml-xs" size="25px">
              <img style="object-fit: cover" src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg">
            </q-avatar>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup () {
    const mini = ref(false);
    const drawer = ref(true);

    return {
      mini,
      drawer,
      toggleMini: () => mini.value = !mini.value
    };
  }
}
</script>

<style scoped lang="scss">
  #awd {
    flex: 1;

    * {
      align-self: center;
    }
  }

  .list__item {
    transition: all 0.2s ease;

    &-move {
      transition: all 0.2s ease;
    }

    &-leave-active {
      position: absolute;
    }

    &-label {
      --animate-duration: 0.1s;
    }

    &-section {
      --animate-duration: 1ms;
      transition: all 0.1s ease;
    }
  }
</style>
