<script setup>
import { ref, watch, onMounted } from "vue";
import IMask from "imask";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
});

const inputValue = ref(props.modelValue ?? "");
const error = ref("");
const emit = defineEmits(["update:modelValue"]);

let maskRef = null;
const inputEl = ref(null);

onMounted(() => {
  if ((props.type === "phone" || props.type === "code") && inputEl.value) {
    const maskOptions = {
      phone: {
        mask: "+{7} (000) 000-00-00",
        lazy: false,
        placeholderChar: "_",
      },
      code: {
        mask: "000-000",
        lazy: false,
        placeholderChar: "_",
      },
    };

    maskRef = IMask(inputEl.value, maskOptions[props.type]);

    maskRef.on("accept", () => {
      inputValue.value = maskRef.value;
      if (props.type === "phone") {
        error.value = maskRef.masked.isComplete ? "" : "Неверный формат телефона";
      } else {
        error.value = "";
      }
      emit("update:modelValue", inputValue.value);
    });
  }
});

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal ?? "";
    if (maskRef && newVal !== maskRef.value) {
      maskRef.value = newVal ?? "";
    }
  }
);

const onInput = (e) => {
  const val = e.target.value;
  inputValue.value = val;
  emit("update:modelValue", val);

  if (props.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    error.value = emailRegex.test(val) || val === "" ? "" : "Неверный email";
  } else {
    error.value = "";
  }
};
</script>

<template>
  <div>
    <input
      ref="inputEl"
      :placeholder="props.placeholder"
      :type="props.type === 'phone' ? 'tel' : props.type"
      :value="inputValue"
      @input="onInput"
      class="input_multi"
      :class="{ 'input-error': error }"
    />
  </div>
</template>

<style scoped>
.input_multi {
  border-radius: 8px;
  border: 1px solid #118afb;
  padding: 12px;
  width: 100%;
  outline: none;
}
.input-error {
  border: 1px solid #ff0000;
}
</style>
