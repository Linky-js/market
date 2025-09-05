<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])
const anotherPerson = ref(false)
const editAdress = ref(false)
const newAdress = ref()
const adress = [
  {
    title: 'Пункты выдачи',
    list: [
      { name: 'Яндекс', street: 'Краснодарский край, Краснодар, ул. Рашпилевская, 74, кв. 1' },
      { name: 'СДЭК', street: 'г. Краснодар, ул. имени Академика Лукьяненко, 123' },
    ],
  },
  {
    title: 'Доставка курьером',
    list: [
      { name: 'СДЭК', street: 'Краснодарский край, Краснодар, ул. Рашпилевская, 74, кв. 2' },
      { name: 'Яндекс', street: 'г. Краснодар, ул. имени Академика Лукьяненко, 1253' },
      { name: 'СДЭК', street: 'Краснодарский край, Краснодар, ул. Рашпилевская, 74, кв. 4' },
    ],
  },
]

</script>
<template>
  <div class="modal">
    <div class="modal__content">
      <div class="left" v-if="!editAdress && !newAdress">
        <div class="left__prev" @click="emit('close')">
          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
              fill="#232323" />
          </svg>
          Назад
        </div>
        <div class="left__content">
          <div class="left__adress">
            <div class="title">Выберите адрес</div>
            <div class="left__item" v-for="item in adress" :key="item.title">
              <div class="mintitle">{{ item.title }}</div>
              <div class="left__radio i-radio" v-for="item in item.list" :key="item.name">
                <input type="radio" name="del-adress" :id="'del-adress-' + item.street">
                <label :for="'del-adress-' + item.street">
                  <p>
                    <span>{{ item.name }}</span>
                    <span>{{ item.street }}</span>
                  </p>
                  <button @click="editAdress = true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8438 6.34375L13.6562 9.15625M2.96875 13.6562V17.0312H6.34375L17.0312 6.34375L13.6562 2.96875L2.96875 13.6562Z"
                        stroke="#A1A1A1" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </label>
              </div>
            </div>
            <div class="left__add" @click="newAdress = true">Добавить новый адрес</div>
          </div>
          <div class="left__data">
            <div class="title">Данные получателя</div>
            <div class="left__grid">
              <div class="left__box">
                <label for="name">Имя*</label>
                <input class="inp" type="text" id="name" placeholder="Ваше имя">
              </div>
              <div class="left__box">
                <label for="surname">Фамилия*</label>
                <input class="inp" type="text" id="surname" placeholder="Ваша фамилия">
              </div>
              <div class="left__box">
                <label for="phone">Номер телефона*</label>
                <input class="inp" type="text" id="phone" placeholder="Ваш телефон">
              </div>
            </div>
            <div class="left__another i-radio">
              <input type="checkbox" name="another" id="another-1" v-model="anotherPerson">
              <label for="another-1">Заберёт другой человек</label>
            </div>
            <div class="left__grid" v-if="anotherPerson">
              <div class="left__box">
                <label for="name">Имя*</label>
                <input class="inp" type="text" id="name" placeholder="Ваше имя">
              </div>
              <div class="left__box">
                <label for="surname">Фамилия*</label>
                <input class="inp" type="text" id="surname" placeholder="Ваша фамилия">
              </div>
              <div class="left__box">
                <label for="phone">Номер телефона*</label>
                <input class="inp" type="text" id="phone" placeholder="Ваш телефон">
              </div>
            </div>
          </div>
        </div>
        <button class="left__btn default-btn" @click="emit('close')">Сохранить и продолжить</button>
      </div>
      <div class="left edit" v-if="editAdress">
        <div class="left__prev" @click="editAdress = false">
          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
              fill="#232323" />
          </svg>
          Назад
        </div>
        <div class="left__content">
          <div class="left__grid">
            <div class="left__box">
              <label for="adress-2">Адрес</label>
              <textarea class="inp" id="adress-2"></textarea>
            </div>
            <div class="left__box">
              <label for="kv-2">Квартира</label>
              <input type="text" id="kv-2" class="inp" placeholder="Квартира">
            </div>
            <div class="left__box">
              <label for="pd-2">Подъезд</label>
              <input type="text" id="pd-2" class="inp" placeholder="Подъезд">
            </div>
            <div class="left__box">
              <label for="et-2">Этаж</label>
              <input type="text" id="et-2" class="inp" placeholder="Этаж">
            </div>
            <div class="left__box">
              <label for="df-2">Домофон</label>
              <input type="text" id="df-2" class="inp" placeholder="Домофон">
            </div>
            <div class="left__box">
              <label for="df-2">Комментарий</label>
              <input type="text" id="df-2" class="inp" placeholder="Что передать курьеру?">
            </div>
          </div>
          <div class="left__remove" @click="editAdress = false">Удалить адрес</div>
        </div>
        <button class="left__btn default-btn" @click="editAdress = false">Сохранить и продолжить</button>
      </div>
      <div class="left new" v-if="newAdress">
        <div class="left__prev desktop" @click="newAdress = false">
          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
              fill="#232323" />
          </svg>
          Назад
        </div>
        <div class="left__content">
          <div class="left__content-up">
            <div class="left__prev" @click="newAdress = false">
              <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
                  fill="#232323" />
              </svg>
              Назад
            </div>
            <div class="left__switch">
              <input type="radio" name="del-2" id="del-1-2" value="Самовывоз" checked>
              <label for="del-1-2" class="del__switch-self">Самовывоз</label>
              <input type="radio" name="del-2" id="del-2-2" value="Доставка">
              <label class="del__switch-delivery" for="del-2-2">Доставка</label>
              <div class="bg"></div>
            </div>
          </div>
          <div class="map">
            <img src="/img/map.jpg" alt="">
          </div>
          <div class="left__content-bot">
            <div class="left__location">
              <div class="left__location-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.0545 3.03335L2.51543 6.58391C1.88607 6.77757 1.81452 7.63978 2.40349 7.93427L7.29406 10.3796C7.43532 10.4502 7.54991 10.5648 7.62054 10.706L10.0657 15.5964C10.3602 16.1854 11.2222 16.114 11.4159 15.4846L14.9667 3.94531C15.139 3.38527 14.6145 2.86103 14.0545 3.03335Z"
                    stroke="#118AFB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Определить адрес
              </div>
              <input class="inp" type="text" name="location" id="location" placeholder="Укажите свой адрес">
            </div>
            <div class="default-btn" @click="newAdress = false">Далее</div>
          </div>
        </div>
      </div>
      <div class="map">
        <img src="/img/map.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: calc(100vh - 98px) 
  display: flex
  align-items: center
  justify-content: center
  z-index: 3
  &__content 
    width: 100%
    height: 100%
    
    display: flex
.title 
  font-size: 20px
  line-height: 25px
  font-weight: 600
.mintitle 
  font-size: 16px
  font-weight: 600
  line-height: 20px
.map 
  width: 100%
  height: 100%
  img 
    width: 100%
    height: 100%
    object-fit: cover
.left 
  max-width: 480px
  width: 100%
  padding: 36px 48px 72px
  display: flex
  flex-direction: column
  background: #F2F4F8
  gap: 16px
  &.new 
    .left__content 
      padding: 24px
      gap: 24px
      max-height: max-content
      .map 
        display: none
    .default-btn
      font-size: 14px
      padding: 14px
  &.edit 
    .left__box 
      label 
        font-size: 16px
        color: #232323
    .left__grid 
      .left__box
        &:first-child 
          grid-column: span 2
    .left__content 
      gap: 24px
      padding: 24px
  &__location 
    display: flex
    flex-direction: column
    gap: 12px
    &-btn 
      display: flex
      align-items: center
      gap: 8px
      font-size: 16px
      line-height: 110%
      color: var(--color-blue)
      cursor: pointer
      transition: .3s all
      &:hover 
        color: #118AFB
  &__switch 
    position: relative
    max-width: 100%
    width: 100%
    display: flex
    align-items: center
    height: 40px
    border-radius: 100px
    background: rgba(17, 138, 251, 0.15)
    .bg 
      width: 50%
      height: 100%
      content: ''
      position: absolute
      top: 0
      left: 0
      border-radius: 100px
      background: #118AFB
      transition: .3s all
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
      visibility: visible
      &:checked + label
        color: #fff
      &:checked + .del__switch-delivery ~ .bg 
        transform: translateX(100%)
    label 
      width: 100%
      text-align: center
      z-index: 2
      position: relative
      color: #118AFB
      transition: .3s all
      cursor: pointer
      font-size: 14px
      line-height: 110%
      letter-spacing: -0.02em
  &__remove 
    font-size: 16px
    line-height: 20px
    font-weight: 500
    color: #FB4711
    cursor: pointer
    &:hover 
      text-decoration: underline
  &__add 
    font-size: 16px
    line-height: 20px
    font-weight: 600
    color: var(--color-blue)
    cursor: pointer
    &:hover 
      text-decoration: underline
  &__prev 
    display: flex
    align-items: center
    gap: 4px
    margin-left: 16px
    font-size: 16px
    line-height: 20px
    font-weight: 600
    cursor: pointer
    transition: .3s all
    path 
      transition: .3s all
    &:hover 
      color: var(--color-blue)
      path 
        fill: var(--color-blue)
  &__content 
    padding: 32px 24px
    background: #fff
    border-radius: 12px
    max-height: 71vh
    height: 100%
    display: flex
    flex-direction: column
    gap: 48px
    overflow-y: auto
    &::-webkit-scrollbar 
      width: 4px  
    &::-webkit-scrollbar-track 
      background: #E7E9EC   
    body::-webkit-scrollbar-thumb 
      background-color: red
      border-radius: 20px    
      border: 4px solid #fff   
    &-up 
      .left__prev 
        display: none
    &-bot 
      display: flex
      flex-direction: column
      gap: 24px
  &__adress, &__data 
    display: flex
    flex-direction: column
    gap: 24px
  &__item 
    display: flex
    flex-direction: column
    gap: 8px
    .mintitle 
      margin-bottom: 8px
  &__another 
    label 
      align-items: center
      gap: 10px
      font-size: 14px
      line-height: 20px
      font-weight: 500
      &::before 
        margin-top: 0
      
  &__grid 
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 12px 8px
    .left__box:last-child
      grid-column: span 2
  &__box 
    label 
      font-size: 14px
      line-height: 20px
      font-weight: 500
      color: #A1A1A1
      margin-bottom: 8px
      display: inline-block
  &__radio 
    input:checked 
      & + label 
        p 
          color: #232323
          span:last-child
            color: #595959
    label 
      p 
        display: flex
        flex-direction: column
        gap: 4px
        color: #A1A1A1
        span:first-child 
          font-size: 16px
          line-height: 20px
          font-weight: 600
        span:last-child 
          font-size: 14px
          line-height: 20px
          font-weight: 500
      button:hover 
        path 
          stroke: var(--color-blue)
@media (max-width: 1440px)
  .left 
    padding: 36px 24px 72px
    max-width: 360px
@media (max-width: 767px)
  .modal 
    height: 100vh
  .map 
    display: none
  .left 
    padding: 0
    max-width: 100%
    height: 100%
    gap: 0
    &__content 
      max-height: 100vh
      padding: 20px 16px 150px
    &__prev 
      padding: 16px
      margin-bottom: 0
      font-size: 14px
      line-height: 18px
    &__btn 
      position: fixed
      bottom: 70px
      left: 16px
      width: calc(100% - 32px)
      z-index: 2
  .left.edit 
    .left__content 
      padding: 20px 16px
  .left.new 
    background: none
    gap: 0
    .left__content 
      gap: 0
      background: none
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 100%
      max-height: 100%
      padding: 0
      padding-bottom: 55px
      border-radius: 0
      .map 
        display: block
        position: absolute
        top: 0
        left: 0
        bottom: 0
        width: 100%
        height: 100%
  .left__prev.desktop 
    display: none
  .left__content-up 
    display: flex
    gap: 24px
    padding: 20px 16px
    background: #fff
    border-radius: 0 0 12px 12px
    position: relative
    z-index: 2
    .left__prev 
      display: flex
      padding: 0
  .left__content-bot 
    position: relative
    z-index: 2
    padding: 16px
    background: #fff
    border-radius: 12px 12px 0 0
</style>