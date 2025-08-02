<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const reviews = [
  {
    name: 'Андрей',
    date: '5 августа 2024',
    stars: '5',
    images: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
    mod: 'Черный',
    advantages: 'Очень классные полотенца: ткань мягчайшая, приятная на кожу, воду впитывает отлично. Подарочная упаковка с красивой лентой, упаковано в зип-лок пакет. На карточке-вкладыше есть инструкции и советы по уходу за тканью и стирке вещей',
    disadvantages: '- так и не поняла, по какому принципу в набор добавляется петелька, на фото в отзывах видела, что на каких то полотенцах петельки есть, у меня ни в одном из наборов не оказалось. Но это не критично, я не рассчитывала на наличие петельки - наборы по качеству были разные: в сине-сером были вложены картонные держатели формы в полотенца 70х140, в серо-розовом нет. Сине-серый набор был отшит идеально, пара прилипших ниток с производства, это ушло после стирки; в серо-розовом по углам на стыке швов торчали нитки, на розовом полотенце брак - разошлась строчка, и в принципе швы были менее аккуратными',
    comment: 'За свою стоимость идеально, но если подарок, то кому-то не очень близкому и не на очень важное событие))',
  },
  {
    name: 'Андрей',
    date: '5 августа 2024',
    stars: '3',
    images: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
    mod: 'Черный',
    advantages: 'Очень классные полотенца: ткань мягчайшая, приятная на кожу, воду впитывает отлично. Подарочная упаковка с красивой лентой, упаковано в зип-лок пакет. На карточке-вкладыше есть инструкции и советы по уходу за тканью и стирке вещей',
    disadvantages: '- так и не поняла, по какому принципу в набор добавляется петелька, на фото в отзывах видела, что на каких то полотенцах петельки есть, у меня ни в одном из наборов не оказалось. Но это не критично, я не рассчитывала на наличие петельки - наборы по качеству были разные: в сине-сером были вложены картонные держатели формы в полотенца 70х140, в серо-розовом нет. Сине-серый набор был отшит идеально, пара прилипших ниток с производства, это ушло после стирки; в серо-розовом по углам на стыке швов торчали нитки, на розовом полотенце брак - разошлась строчка, и в принципе швы были менее аккуратными',
    comment: 'За свою стоимость идеально, но если подарок, то кому-то не очень близкому и не на очень важное событие))',
  },
  {
    name: 'Андрей',
    date: '5 августа 2024',
    stars: '4',
    images: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
    mod: 'Черный',
    advantages: 'Очень классные полотенца: ткань мягчайшая, приятная на кожу, воду впитывает отлично. Подарочная упаковка с красивой лентой, упаковано в зип-лок пакет. На карточке-вкладыше есть инструкции и советы по уходу за тканью и стирке вещей',
    disadvantages: '- так и не поняла, по какому принципу в набор добавляется петелька, на фото в отзывах видела, что на каких то полотенцах петельки есть, у меня ни в одном из наборов не оказалось. Но это не критично, я не рассчитывала на наличие петельки - наборы по качеству были разные: в сине-сером были вложены картонные держатели формы в полотенца 70х140, в серо-розовом нет. Сине-серый набор был отшит идеально, пара прилипших ниток с производства, это ушло после стирки; в серо-розовом по углам на стыке швов торчали нитки, на розовом полотенце брак - разошлась строчка, и в принципе швы были менее аккуратными',
  },
  {
    name: 'Андрей',
    date: '5 августа 2024',
    stars: '2',
    images: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
    mod: 'Черный',
    advantages: 'Очень классные полотенца: ткань мягчайшая, приятная на кожу, воду впитывает отлично. Подарочная упаковка с красивой лентой, упаковано в зип-лок пакет. На карточке-вкладыше есть инструкции и советы по уходу за тканью и стирке вещей',
    disadvantages: '- так и не поняла, по какому принципу в набор добавляется петелька, на фото в отзывах видела, что на каких то полотенцах петельки есть, у меня ни в одном из наборов не оказалось. Но это не критично, я не рассчитывала на наличие петельки - наборы по качеству были разные: в сине-сером были вложены картонные держатели формы в полотенца 70х140, в серо-розовом нет. Сине-серый набор был отшит идеально, пара прилипших ниток с производства, это ушло после стирки; в серо-розовом по углам на стыке швов торчали нитки, на розовом полотенце брак - разошлась строчка, и в принципе швы были менее аккуратными',
  },
]
const showAllReviews = ref(false)
const allReviewImages = computed(() => {
  return reviews.flatMap(review => review.images)
})
</script>
<template>
  <div class="wrap">
    <div class="reviews">
      <div class="reviews__all">
        <div class="reviews__all-head">
          <h3>Фото и видео</h3>
          <NuxtLink to="/">Смотреть все фото и видео
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.65856 8.79974L6.02856 5.16975L7.06549 4.13281L11.7324 8.79974L7.06549 13.4667L6.02856 12.4297L9.65856 8.79974Z"
                fill="#A1A1A1" />
            </svg>
          </NuxtLink>
        </div>
        <Swiper class="reviews__all-slider" :slides-per-view="'auto'" :space-between="6">
          <SwiperSlide v-for="(image, index) in allReviewImages" :key="index">
            <img :src="image" alt="">
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="reviews__list">
        <div class="rev" v-for="(review, index) in showAllReviews ? reviews : [reviews[0]]" :key="index">
          <div class="rev__top">
            <div class="rev__top-left">
              <div class="avatar">
                <img src="/img/review-icon.png" alt="">
              </div>
              <div class="rev__top-text">
                <div class="name">{{ review.name }}</div>
                <div class="date">{{ review.date }}</div>
              </div>
            </div>
            <div class="stars">
              <svg v-for="index in 5" :key="index" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.0009 14.3921L13.4592 16.4838C14.0926 16.8671 14.8676 16.3005 14.7009 15.5838L13.7843 11.6505L16.8426 9.00046C17.4009 8.51712 17.1009 7.60046 16.3676 7.54212L12.3426 7.20046L10.7676 3.48379C10.4842 2.80879 9.51758 2.80879 9.23425 3.48379L7.65925 7.19212L3.63425 7.53379C2.90092 7.59212 2.60091 8.50879 3.15925 8.99212L6.21758 11.6421L5.30092 15.5755C5.13425 16.2921 5.90925 16.8588 6.54258 16.4755L10.0009 14.3921Z"
                  :fill="index <= Number(review.stars) ? '#FFA631' : '#a1a1a1'" />
              </svg>
            </div>
          </div>
          <Swiper class="rev__images" :slides-per-view="'auto'" :space-between="12">
            <SwiperSlide v-for="image in review.images" :key="image">
              <img :src="image" alt="">
            </SwiperSlide>
          </Swiper>
          <div class="rev__mod">{{ review.mod }}</div>
          <div class="rev__text">
            <div class="rev__text-item" v-if="review.advantages">
              <p>Достоинства:</p>
              <p>{{ review.advantages }}</p>
            </div>
            <div class="rev__text-item" v-if="review.disadvantages">
              <p>Недостатки::</p>
              <p>{{ review.disadvantages }}</p>
            </div>
            <div class="rev__text-item" v-if="review.comment">
              <p>Комментарии:</p>
              <p>{{ review.comment }}</p>
            </div>
          </div>

        </div>
        <button class="reviews__btn" v-if="!showAllReviews" @click="showAllReviews = true">Показать все
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.20026 9.65856L10.8303 6.02856L11.8672 7.06549L7.20026 11.7324L2.53332 7.06549L3.57026 6.02856L7.20026 9.65856Z"
              fill="#A1A1A1" />
          </svg>
        </button>
      </div>

    </div>
    <div class="right">
      <div class="right__top">
        <div class="right__star">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.001 30.2226L28.2635 34.6151C29.5935 35.4201 31.221 34.2301 30.871 32.7251L28.946 24.4651L35.3685 18.9001C36.541 17.8851 35.911 15.9601 34.371 15.8376L25.9185 15.1201L22.611 7.31508C22.016 5.89758 19.986 5.89758 19.391 7.31508L16.0835 15.1026L7.63104 15.8201C6.09104 15.9426 5.46104 17.8676 6.63354 18.8826L13.056 24.4476L11.131 32.7076C10.781 34.2126 12.4085 35.4026 13.7385 34.5976L21.001 30.2226Z"
              fill="#FFA631" />
          </svg>
          4.1
        </div>
        <NuxtLink to="/" class="right__link">
          <span>1 234 оценок<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.65856 8.79974L6.02856 5.16975L7.06549 4.13281L11.7324 8.79974L7.06549 13.4667L6.02856 12.4297L9.65856 8.79974Z"
                fill="#232323" />
            </svg>
          </span>
          <span>432 отзыва</span>
        </NuxtLink>
      </div>
      <div class="right__check">
        <div class="check">
          <input type="radio" name="reviews" id="reviews-1">
          <label for="reviews-1">
            <p class="bold">С фотографиями</p>
          </label>
        </div>
        <div class="check">
          <input type="radio" name="reviews" id="reviews-2">
          <label for="reviews-2">
            <div class="check-stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
            </div>
            <p>80 отзывов</p>
          </label>
        </div>
        <div class="check">
          <input type="radio" name="reviews" id="reviews-3">
          <label for="reviews-3">
            <div class="check-stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
            </div>
            <p>10 отзывов</p>
          </label>
        </div>
        <div class="check">
          <input type="radio" name="reviews" id="reviews-4">
          <label for="reviews-4">
            <div class="check-stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
            </div>
            <p>3 отзывов</p>
          </label>
        </div>
        <div class="check">
          <input type="radio" name="reviews" id="reviews-5">
          <label for="reviews-5">
            <div class="check-stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
            </div>
            <p>0 отзывов</p>
          </label>
        </div>
        <div class="check">
          <input type="radio" name="reviews" id="reviews-6">
          <label for="reviews-6">
            <div class="check-stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#FFA631" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.00054 11.5135L10.7672 13.1868C11.2739 13.4935 11.8939 13.0402 11.7605 12.4668L11.0272 9.32017L13.4739 7.20017C13.9205 6.8135 13.6805 6.08017 13.0939 6.0335L9.87387 5.76017L8.61387 2.78684C8.3872 2.24684 7.61387 2.24684 7.3872 2.78684L6.1272 5.7535L2.9072 6.02684C2.32054 6.0735 2.08054 6.80684 2.5272 7.1935L4.97387 9.3135L4.24054 12.4602C4.1072 13.0335 4.7272 13.4868 5.23387 13.1802L8.00054 11.5135Z"
                  fill="#A1A1A1" />
              </svg>
            </div>
            <p>0 отзывов</p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.wrap 
  margin-top: 24px
  gap: 24px 
  display: flex
  align-items: flex-start
.right 
  padding: 24px
  max-width: calc(320px * 100% / 1296px)
  width: 100%
  background: #fff
  border-radius: 12px
  &__top 
    display: flex
    align-items: center
    gap: 12px
    margin-bottom: 24px
  &__star 
    display: flex
    align-items: center
    font-size: 36px
    font-weight: 600
    line-height: 100%
    letter-spacing: -0.02em
  &__link 
    display: flex
    flex-direction: column
    &:hover 
      text-decoration: underline
    span 
      display: flex
      align-items: center
      font-size: 12px
      line-height: 16px
      letter-spacing: -0.02em
      font-weight: 500
      &:last-child
        color: #A1A1A1
  &__check 
    display: flex
    flex-direction: column
    gap: 8px
.check 
  &:first-child 
    margin-bottom: 8px
  input 
    position: absolute
    opacity: 0
    width: 0
    height: 0
  &-stars 
    display: flex
    align-items: center
  input:checked + label
    &::after 
      opacity: 1
    &::before 
      border-color: var(--color-blue)
  label 
    display: flex
    align-items: center
    gap: 4px
    padding-left: 24px
    position: relative
    cursor: pointer
    p 
      font-size: 12px
      line-height: 16px
      letter-spacing: -0.02em
      color: #A1A1A1
      font-weight: 500
      &.bold 
        font-weight: 600
        font-size: 14px
        line-height: 18px
        color: var(--color-black)
    &::before 
      content: ''
      width: 16px
      height: 16px
      border: 1px solid #A1A1A1
      border-radius: 50%
      position: absolute 
      left: 0
      top: 50%
      transform: translateY(-50%)
      transition: .3s all
    &::after 
      content: ''
      width: 8px
      height: 8px
      background: var(--color-blue)
      border-radius: 50%
      position: absolute 
      left: 4px
      top: 50%
      transform: translateY(-50%)
      opacity: 0
      transition: .3s all
.reviews 
  padding: 24px
  border-radius: 12px
  background: #fff
  width: 100%
  max-width: calc(1000px * 100% / 1296px)
  &__btn 
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto
    font-size: 14px
    line-height: 18px
    font-weight: 500
    letter-spacing: -0.02em
    color: #a1a1a1
  &__all 
    margin-bottom: 32px
    &-slider 
      .swiper-slide  
        max-width: 77px
        height: 91px
        img 
          width: 100%
          height: 100%
          object-fit: cover
          border-radius: 3px
    &-head 
      display: flex
      align-items: center
      justify-content: space-between
      gap: 15px
      margin-bottom: 16px
      h3 
        font-size: 16px
        font-weight: 600
        line-height: 20px
        letter-spacing: -0.02em
      a 
        display: flex
        align-items: center
        font-size: 14px
        font-weight: 500
        letter-spacing: -0.02em
        color: #A1A1A1
        &:hover 
          text-decoration: underline
  &__list  
    display: flex
    flex-direction: column
    gap: 24px
.rev 
  &__top 
    display: flex
    align-items: center
    justify-content: space-between
    gap: 15px
    margin-bottom: 16px
    &-left 
      display: flex 
      gap: 8px
      align-items: center
      .name 
        font-size: 14px
        line-height: 18px
        letter-spacing: -0.02em
        font-weight: 600
      .date 
        font-size: 12px
        line-height: 16px
        font-weight: 500
        letter-spacing: -0.02em
        color: #A1A1A1
    .stars 
      display: flex
      align-items: center 
  &__images 
    margin-bottom: 8px
    .swiper-slide 
      max-width: 99px
      width: 100%
      height: 117px
      img 
        width: 100%
        height: 100%
        object-fit: cover
        border-radius: 5px 
  &__mod 
    font-size: 14px
    font-weight: 500
    letter-spacing: -0.02em 
    color: #A1A1A1
  &__text 
    display: flex
    flex-direction: column
    gap: 16px
    &-item 
      display: flex
      flex-direction: column
      gap: 4px
      p
        font-size: 14px
        line-height: 18px
        letter-spacing: -0.02em
        font-weight: 500
        &:first-child 
          font-weight: 700
@media (max-width: 1200px)
  .wrap 
    flex-direction: column
  .right 
    max-width: 100%
    order: 0
  .reviews 
    max-width: 100%
@media (max-width: 768px)
  .wrap
    gap: 8px
    margin-top: 8px
  .right 
    padding: 16px
    &__top 
      margin-bottom: 0
    &__check 
      display: none
  .reviews 
    display: contents
    padding: 0
    &__all 
      order: 1
      padding: 16px
      background: #fff
      border-radius: 12px
      margin-bottom: 0
      &-head 
        margin-bottom: 12px
    &__list 
      order: 2
      gap: 8px
    &__btn 
      background: #fff
      border-radius: 12px
      padding: 16px
      max-width: 100%
      width: 100%
      color: var(--color-blue)
      path 
        fill: var(--color-blue)
  .rev 
    padding: 20px 16px
    background: #fff
    border-radius: 12px
</style>