<script setup>
import ModalOut from './ModalOut.vue';
import ModalRemove from './ModalRemove.vue';
import ModalApproved from './ModalApproved.vue';
import { ref } from 'vue'

const isModalOpen = ref(false)
const isModalRemoveOpen = ref(false)
const isModalApprovedOpen = ref(false)

// массив адресов
const addresses = ref([
  { id: 1, value: '' } // первый по умолчанию
])

// функция добавления
const addAddress = () => {
  addresses.value.push({
    id: Date.now(), // уникальный id
    value: ''
  })
}

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
</script>
<template>
  <div class="column">
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
          <input type="radio" name="i-gender" id="i-gender-1">
          <label for="i-gender-1">Женский</label>
        </div>
        <div class="info__radio">
          <input type="radio" name="i-gender" id="i-gender-2">
          <label for="i-gender-2">Мужской</label>
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
          <span class="info__status" @click="isModalApprovedOpen = true">Не подтверждён</span>
        </div>
        <div class="info__box">
          <label for="i-email" class="info__label">E-mail*</label>
          <input type="email" name="i-email" id="i-email" class="inp" placeholder="Электронный адрес">
        </div>
        <div class="info__box">
          <label for="i-password" class="info__label">Пароль</label>
          <input type="password" name="i-password" id="i-password" class="inp" placeholder="Пароль">
        </div>
        <div class="info__box" v-for="(address, index) in addresses" :key="address.id">
          <label :for="'i-address-' + address.id" class="info__label">
            {{ index === 0 ? 'Основной адрес' : 'Дополнительный адрес' }}
          </label>
          <input type="text" class="inp" :id="'i-address-' + address.id" :name="'i-address-' + address.id"
            v-model="address.value" :placeholder="index === 0 ? 'Основной адрес' : 'Дополнительный адрес'" />
        </div>
        <button type="button" class="add-adress" @click="addAddress">
          Добавить новый адрес
        </button>
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
</style>