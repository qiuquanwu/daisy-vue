<template>
  <y-popper :placement="placement">
    <template #trigger>
      <div class="trigger-box">
        <y-radio-group v-model="placement" type="solid">
          <y-radio
            v-for="p in topPlacements"
            :value="p"
            :key="p">
            {{ p }}
          </y-radio>
        </y-radio-group>
        <div class="flex-box">
          <y-radio-group v-model="placement" type="solid" vertical>
            <y-radio
              v-for="p in leftPlacements"
              :value="p"
              :key="p">
              {{ p }}
            </y-radio>
          </y-radio-group>
          <y-radio-group v-model="placement" type="solid" vertical>
            <y-radio
              v-for="p in rightPlacements"
              :value="p"
              :key="p">
              {{ p }}
            </y-radio>
          </y-radio-group>
        </div>
        <y-radio-group v-model="placement" type="solid">
          <y-radio
            v-for="p in bottomPlacements"
            :value="p"
            :key="p">
            {{ p }}
          </y-radio>
        </y-radio-group>
      </div>
    </template>
    popper content
  </y-popper>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Placement",
  setup() {
    const topPlacements = ['top-start', 'top', 'top-end'];
    const rightPlacements = ['right-start', 'right', 'right-end'];
    const bottomPlacements = ['bottom-start', 'bottom', 'bottom-end'];
    const leftPlacements = ['left-start', 'left', 'left-end'];
    const placement = ref('bottom')

    return {
      placement,
      topPlacements,
      rightPlacements,
      bottomPlacements,
      leftPlacements,
    };
  }
});
</script>

<style lang="scss" scoped>
.trigger-box {
  text-align: center;
  width: 320px;
}
.flex-box {
  width: 100%;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
