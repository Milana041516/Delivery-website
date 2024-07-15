
<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="products-card" v-for="good in goodArray" :key="good.id">
          <div class="products-card-image">
            <img :src="getUrl(good.image)" alt="restaurant1" />
          </div>

          <div class="products-card-description">
            <div class="products-card-description-row">
              <h5 class="products-card-description-name">
                {{ good.title }}
              </h5>
            </div>

            <div class="products-card-description-row">
              <p class="products-card-description-text">
                {{ good.ingredient }}
              </p>
            </div>

            <div class="products-card-description-row">
              <div class="products-card-description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img
                    src="../assets/images/icons/shopping-cart-white.svg"
                    alt="shopping cart"
                  />
                </button>
                <span class="products-card-description-controls-price"
                  >{{ good.price }} ₽</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodArray } from "../constants/goods";
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
};
</script>