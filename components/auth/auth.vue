<script setup>
import multiInput from "../ui/multiInput.vue";
import { ref } from "vue";
import { useStore } from "~/stores/index";

const store = useStore();
const apiDomain = store.apiDomain;
const phone = ref("");

const typeLogin = ref("phone");
const goCode = async () => {
  let cleanedPhone = phone.value.replace(/[^\d+]/g, "");

  if (cleanedPhone.startsWith("8")) {
    cleanedPhone = "+7" + cleanedPhone.slice(1);
  }

  console.log("Очищенный номер:", cleanedPhone);

  try {
    const checkResponse = await $fetch(apiDomain + "/api/auth/check_user", {
      method: "POST",
      body: {
        phone_number: cleanedPhone,
        is_email: false,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Ответ от /check_user:", checkResponse);

    if (
      checkResponse.register === false &&
      checkResponse.command === "register to phone"
    ) {
      console.log("Регистрируем пользователя...");

      const registerResponse = await $fetch(
        apiDomain +
          "/api/auth/phone_registration_confirmed?phone_number=" +
          encodeURIComponent(cleanedPhone),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log("Результат регистрации:", registerResponse);

      const activationCode = registerResponse.activation_code;
      const password = registerResponse.password;
      if (registerResponse.ok) {
        goRegister(registerResponse.activation_code, registerResponse.record_id, cleanedPhone);
      }

      console.log("Код активации:", activationCode);
      console.log("Пароль:", password);
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};
const goRegister = async (code, record_id, phone) => {
  try {
    const registerResponse = await $fetch(
      apiDomain + "/api/auth/verify_phone_registration",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: {
          phone_number: phone,
          code: code,
          record_id: record_id,
        },
        credentials: 'include',
      }
    );
   console.log("Результат регистрации:", registerResponse);
   
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};
</script>
<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__head">
        <div class="modal__title">Введите номер телефона</div>
        <div v-if="typeLogin == 'phone'" class="modal__description">
          Мы отправим код или позвоним. Отвечать на звонок не нужно. Код может
          прийти на почту или в СМС
        </div>
        <div v-if="typeLogin == 'email'" class="modal__description">
          Мы отправим код на почту. Обычно он приходит в течении нескольких
          минут
        </div>
      </div>
      <form class="modal__form">
        <multi-input
          v-if="typeLogin == 'phone'"
          placeholder="+7 (___) ___-__-__"
          type="phone"
          v-model="phone"
        />
        <multi-input
          v-if="typeLogin == 'email'"
          placeholder="Введите email"
          type="email"
        />
        <a @click="goCode" class="btn__blue">Продолжить</a>
        <input type="checkbox" id="soglasie" />
        <label class="label__soglasie" for="soglasie"
          >Соглашаюсь с правилами пользования торговой площадой и
          возврата</label
        >
      </form>
      <div
        v-if="typeLogin == 'phone'"
        @click="typeLogin = 'email'"
        class="modal__description link"
      >
        Войти с помощью email
      </div>
      <div
        v-if="typeLogin == 'email'"
        @click="typeLogin = 'phone'"
        class="modal__description link"
      >
        Войти с помощью телефона
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(35, 35, 35, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal__content {
  border-radius: 12px;
  background: var(--Primary-White, #fff);
  padding: 48px;
  width: 100%;
  max-width: 394px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.modal__head {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.modal__title {
  color: var(--Primary-Black, #232323);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 125% */
  letter-spacing: -0.48px;
}
.modal__description {
  color: var(--Primary-Black, #232323);
  font-size: 14px;
}
.modal__description.link {
  color: #118afb;
  cursor: pointer;
  text-decoration: underline;
}
.modal__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.label__soglasie {
  color: var(--Primary-Black, #232323);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.28px;
  padding-left: 28px;
  position: relative;
  cursor: pointer;
}
.label__soglasie::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #a1a1a1;
}
#soglasie {
  display: none;
}
#soglasie:checked + .label__soglasie::before {
  border-color: #118afb;
  border-radius: 4px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5.3335 9.99935L9.3335 13.3327L14.6668 6.66602' stroke='white' stroke-width='2'/%3E%3C/svg%3E"),
    linear-gradient(180deg, #118afb 0%, #118afb 100%);
  background-repeat: no-repeat;
  background-position: center;
}
</style>