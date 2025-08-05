<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  duration: {
    type: Number,
    default: 60, // секунды
  },
});

const emit = defineEmits(['resend']);

const isCounting = ref(false);
const timer = ref(0);
let startTime = 0;
let rafId = null;

const startTimer = () => {
  isCounting.value = true;
  startTime = Date.now();

  const tick = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remaining = props.duration - elapsed;
    timer.value = remaining > 0 ? remaining : 0;

    if (remaining > 0) {
      rafId = requestAnimationFrame(tick);
    } else {
      isCounting.value = false;
    }
  };

  tick();
};

const onClick = () => {
  if (isCounting.value) return;
  emit('resend');
  startTimer();
};

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <div class="resend-timer">
    <a
      @click="onClick"
      class="next__code"
      :class="{ disabled: isCounting }"
      style="cursor: pointer;"
    >
      Отправить новое сообщение
    </a>
    <span v-if="isCounting" class="timer-text">({{ timer }} сек.)</span>
  </div>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

.timer-text {
  margin-left: 8px;
  font-size: 14px;
  color: #888;
}
.next__code {
  color: var(--Grey-site-3, #a1a1a1);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  text-decoration: underline;
}
</style>