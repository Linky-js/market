<script setup>
import ModalOut from './ModalOut.vue';
import ModalRemove from './ModalRemove.vue';
import ModalApproved from './ModalApproved.vue';
import { ref } from 'vue'

const isModalOpen = ref(false)
const isModalRemoveOpen = ref(false)
const isModalApprovedOpen = ref(false)


const phone = ref("")

function formatPhone(e) {
  let value = e.target.value.replace(/\D/g, "") // убираем все, кроме цифр

  // убираем лишнюю 7 или 8 в начале
  if (value.startsWith("7")) value = value.slice(1)
  if (value.startsWith("8")) value = value.slice(1)

  // ограничиваем максимум 10 цифр после кода страны
  value = value.substring(0, 10)

  // собираем формат: +7 (XXX) XXX-XX-XX
  let formatted = "+7"
  if (value.length > 0) formatted += " (" + value.substring(0, 3)
  if (value.length >= 4) formatted += ") " + value.substring(3, 6)
  if (value.length >= 7) formatted += "-" + value.substring(6, 8)
  if (value.length >= 9) formatted += "-" + value.substring(8, 10)

  phone.value = formatted
}

function allowOnlyDigits(e) {
  // запрещаем ввод всего, кроме цифр
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault()
  }
}

const emit = defineEmits(["back"])
</script>
<template>
  <div class="column">
    <button class="prev" @click="emit('back')">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.13388 9.2503L11.2176 5.16655L10.0511 4L4.80078 9.2503L10.0511 14.5006L11.2176 13.334L7.13388 9.2503Z"
          fill="#232323" />
      </svg>
      Профиль
    </button>
    <div class="info">
      <div class="info__grid">
        <div class="info__box">
          <label class="info__label" for="i-name">Имя*</label>
          <input type="text" name="i-name" id="i-name" class="inp" placeholder="Имя*">
        </div>
        <div class="info__box">
          <label class="info__label" for="i-surname">Фамилия*</label>
          <input type="text" name="i-surname" id="i-surname" class="inp" placeholder="Фамилия*">
        </div>
      </div>
      <div class="info__box">
        <p class="info__label">Пол*</p>
        <div class="info__radio">
          <input type="radio" name="i-gender" id="i-gender-1" checked>
          <label for="i-gender-1">Не выбран</label>
        </div>
        <div class="info__radio">
          <input type="radio" name="i-gender" id="i-gender-2">
          <label for="i-gender-2">Женский</label>
        </div>
        <div class="info__radio">
          <input type="radio" name="i-gender" id="i-gender-3">
          <label for="i-gender-3">Мужской</label>
        </div>
      </div>
      <div class="info__grid">
        <div class="info__box">
          <label for="i-date" class="info__label">Дата рождения</label>
          <input type="date" name="i-date" id="i-date" class="inp">
        </div>
        <div class="info__box">
          <label for="i-phone" class="info__label">Номер телефона*</label>
          <input type="tel" id="i-phone" class="inp" :value="phone" @input="formatPhone" @keypress="allowOnlyDigits"
            placeholder="+7 (___) ___-__-__" />
          <span class="info__status" @click="isModalApprovedOpen = true">Подтвердить</span>
        </div>
        <div class="info__box">
          <label for="i-email" class="info__label">E-mail*</label>
          <input type="email" name="i-email" id="i-email" class="inp" placeholder="Электронный адрес">
        </div>
        <div class="info__box">
          <label for="i-password" class="info__label">Пароль</label>
          <input type="password" name="i-password" id="i-password" class="inp" placeholder="Пароль">
        </div>
      </div>
    </div>
    <div class="out-remove">
      <div class="out" @click="isModalOpen = true">Выйти из аккаунта</div>
      <div class="remove" @click="isModalRemoveOpen = true">Удалить аккаунт</div>
    </div>
  </div>
  <ModalOut v-if="isModalOpen" @close="isModalOpen = false" />
  <ModalRemove v-if="isModalRemoveOpen" @close="isModalRemoveOpen = false" />
  <ModalApproved v-if="isModalApprovedOpen" @close="isModalApprovedOpen = false" />
</template>
<style lang="sass" scoped>
.prev 
  display: none
  justify-content: flex-start
  align-items: center
  gap: 0
  font-size: 14px
  line-height: 18px
  font-weight: 600
.column 
  display: flex
  flex-direction: column
  gap: 8px
  width: 100%
.add-adress 
  font-size: 16px
  font-weight: 500
  line-height: 20px
  color: var(--color-blue)
  padding: 0
  margin: 0
  text-align: left
.info 
  padding: 24px
  background: #fff
  border-radius: 12px
  display: flex
  flex-direction: column
  gap: 16px
  width: 100%
  &__status 
    font-size: 16px
    line-height: 20px
    font-weight: 500
    position: absolute
    right: 12px
    bottom: 15px
    z-index: 2
    cursor: pointer
    color: var(--color-blue)
  &__grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 16px
  &__box 
    position: relative
    width: 100%
    display: flex
    flex-direction: column
    gap: 8px
  &__label 
    line-height: 20px
    font-weight: 500
    color: #A1A1A1
    font-size: 14px
  &__radio
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
    input:checked + label 
      &::before 
        border-width: 4.5px
        border-color: var(--color-blue)
    label 
      font-size: 14px
      line-height: 18px
      letter-spacing: -0.02em
      font-weight: 500
      position: relative
      cursor: pointer
      display: flex
      align-items: center
      gap: 8px
      &::before
        width: 18px
        height: 18px
        border-radius: 50%
        content: ''
        border: 1.8px solid #A1A1A1
        flex-shrink: 0
        display: inline-block
        transition: .3s all
.out-remove 
  display: flex
  align-items: center
  gap: 32px 
  padding: 12px 24px 24px
  .out 
    font-size: 16px
    line-height: 20px
    font-weight: 500
    transition: .3s all
    cursor: pointer
    &:hover 
      color: var(--color-blue)
  .remove
    font-size: 16px
    line-height: 20px
    font-weight: 500
    transition: .3s all
    cursor: pointer
    color: #FB4711
    &:hover 
      text-decoration: underline
@media (max-width: 991px)
  .info__grid 
    grid-template-columns: repeat(1, 1fr)
@media (max-width: 768px)
  .prev 
    display: flex
    padding: 16px 16px 8px
  .info 
    padding: 20px 16px
  .out-remove 
    gap: 15px
    justify-content: space-between
    padding: 8px 16px 16px
</style>