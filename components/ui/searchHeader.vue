<script setup></script>

<template>
  <div
    class="flex items-center flex-1 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500"
  >
    <svg
      class="w-4 h-4 text-gray-500 mr-2"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
    <input
      type="text"
      placeholder="Искать на Флипе"
      class="flex-1 outline-none text-sm text-gray-700 searchInput"
    />
    <svg
      class="w-4 h-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0012.9 12.9z"
      />
    </svg>
  </div>
</template>
<style scoped>
.searchInput {
  overflow: hidden;
  color: #232323;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.32px;
}
.searchInput::placeholder{
  color: #939393;
  
}
</style>