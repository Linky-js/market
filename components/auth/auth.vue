<script setup>
import multiInput from "../ui/multiInput.vue";
import passinput from "../ui/passinput.vue";
import resendtimer from "../ui/resendtimer.vue";
import { ref } from "vue";
import { useStore } from '@/stores/index'

const store = useStore()
const apiDomain = store.apiDomain;
const step = ref("start");

const registerFlag = ref(false);
const soglasie = ref(null);
const soglasieError = ref(false);
const phone = ref("");
const email = ref("");
const login = ref("");
const recordId = ref(null);

const password = ref("");
const code = ref("");
const typeLogin = ref("phone");

const shake = (selectorOrElement) => {
  const el =
    typeof selectorOrElement === "string"
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

  if (!el) return;

  el.classList.add("brrr");
  setTimeout(() => el.classList.remove("brrr"), 1000);
};
const goCode = async () => {
  const checkbox = soglasie.value;
  const label = checkbox.nextElementSibling;

  if (!checkbox.checked) {
    shake(label);
    return;
  }

  const isEmpty = (val) => val?.trim?.() === "";

  if (typeLogin.value === "phone" && isEmpty(phone.value)) {
    shake(".input_phone");
    return;
  }

  if (typeLogin.value === "email" && isEmpty(email.value)) {
    shake(".input_email");
    return;
  }

  if (typeLogin.value === "pass") {
    if (isEmpty(login.value)) {
      shake(".input_login");
      return;
    }
    if (isEmpty(password.value)) {
      shake(".input_pass");
      return;
    }
  }

  let cleanedPhone = phone.value.replace(/[^\d+]/g, "");

  if (cleanedPhone.startsWith("8")) {
    cleanedPhone = "+7" + cleanedPhone.slice(1);
  }
  phone.value = cleanedPhone;

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
      registerFlag.value = true;
      await goValueCode(cleanedPhone);
    } else if (
      checkResponse.register === true 
    ) {
      step.value = "code";
      goLoginCode();
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};
const goValueCode = async (cleanedPhone) => {
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
  code.value = activationCode;
  if (registerResponse.ok) {
    step.value = "code";
    recordId.value = registerResponse.record_id;
    // goRegister(
    //   registerResponse.activation_code,
    //   registerResponse.record_id,
    //   cleanedPhone
    // );
  }
  console.log("Код активации:", activationCode);
};
const goLoginCode = async () => {
  try {
    let cleanedPhone = phone.value.replace(/[^\d+]/g, "");
    const loginResponse = await $fetch(apiDomain + "/api/auth/phone_login_get_code/?phone_number=" + encodeURIComponent(cleanedPhone), {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: {
        phone_number: cleanedPhone,
      },
    });
    console.log("Результат авторизации:", loginResponse);
    if (loginResponse.ok) {
      code.value = loginResponse.activation_code;
      recordId.value = loginResponse.record_id;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};
const goRegister = async () => {
  try {
    const registerResponse = await $fetch(
      apiDomain + "/api/auth/verify_phone_registration",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: {
          phone_number: phone.value,
          code: code.value,
          record_id: recordId.value,
        },
        credentials: "include",
      }
    );

    console.log("Результат регистрации:", registerResponse);

    if (registerResponse.access_token && registerResponse.refresh_token) {
      const accessToken = useCookie("access_token", {
        maxAge: 60 * 60 * 1, // 1 час
        sameSite: "lax",
      });

      const refreshToken = useCookie("refresh_token", {
        maxAge: 60 * 60 * 24 * 1, // 1 дней
        sameSite: "lax",
      });

      accessToken.value = registerResponse.access_token;
      refreshToken.value = registerResponse.refresh_token;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};

const goLogin = async () => {
  try {
    const loginResponse = await $fetch(apiDomain + "/api/auth/login_phone_with_code/", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: {
        code: code.value.replace(/[^a-zA-Z0-9]/g, ''),
        record_id: recordId.value,
      },
      credentials: "include",
    });
    console.log("Результат авторизации:", loginResponse);
    if (loginResponse.access_token && loginResponse.refresh_token) {
      const accessToken = useCookie("access_token", {
        maxAge: 60 * 60 * 1, // 1 час
        sameSite: "lax",
      });

      const refreshToken = useCookie("refresh_token", {
        maxAge: 60 * 60 * 24 * 1, // 1 дней
        sameSite: "lax",
      });

      accessToken.value = loginResponse.access_token;
      refreshToken.value = loginResponse.refresh_token;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};

const codeSuccess = () => {
  if (registerFlag.value) {
    goRegister();
  } else {
    goLogin();
  }
}
const handleResend = () => {
  goCode();
};
</script>
<template>
  <div class="modal" @click.self="$emit('close')">
    <div v-if="step == 'start'" class="modal__content">
      <div class="modal__head">
        <div class="modal__title">
          {{
            typeLogin == "phone"
              ? "Введите номер телефон"
              : typeLogin == "pass"
              ? "Ввести логин и пароль"
              : "Введите email"
          }}
        </div>
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
          class="input_phone"
          placeholder="+7 (___) ___-__-__"
          type="phone"
          v-model="phone"
        />
        <multi-input
          class="input_email"
          v-if="typeLogin == 'email'"
          placeholder="Введите email"
          type="email"
          v-model="email"
        />
        <multi-input
          v-if="typeLogin == 'pass'"
          class="input_login"
          placeholder="Введите логин"
          type="text"
          v-model="login"
        />
        <passinput
          v-if="typeLogin == 'pass'"
          class="input_pass"
          placeholder="Введите пароль"
          v-model="password"
        />
        <a @click="goCode" class="btn__blue">Продолжить</a>
        <input type="checkbox" id="soglasie" ref="soglasie" />
        <label class="label__soglasie" for="soglasie"
          >Соглашаюсь с правилами пользования торговой площадой и
          возврата</label
        >
      </form>

      <div class="modal__description link">
        <span v-if="typeLogin == 'email'" @click="typeLogin = 'phone'"
          >Войти с помощью телефона</span
        >
        <span v-if="typeLogin == 'phone'" @click="typeLogin = 'email'"
          >Войти с помощью email</span
        >
      </div>
      <div class="modal__description link">
        <span @click="typeLogin = 'pass'">Ввесть логин и пароль</span>
      </div>
    </div>
    <div v-if="step == 'code'" class="modal__content">
      <div class="modal__head">
        <div class="modal__title">Введите код из сообщения</div>
        <div class="modal__description">
          Отправили код на ваш номер телефона, если сообщения не пришло, нажмите
          “Отправить новое собщение”
        </div>
      </div>
      <form class="modal__form">
        <multi-input
          class="input_code"
          placeholder="Введите код"
          type="code"
          v-model="code"
        />
        <a @click="codeSuccess" class="btn__blue">Войти</a>
        <resendtimer @resend="handleResend" />
      </form>
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