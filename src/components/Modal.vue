<template>
  <div
    class="cart-modal-overlay"
    :class="{ open: isOpen }"
    @click.self="closeModal()"
  >
    <div class="cart-modal">
      <div class="cart-modal-header">
        <h2 class="cart-modal-header-title">Корзина</h2>
        <span class="cart-modal-header-close">
          <img
            src="@/assets/images/icons/close.svg"
            alt="close"
            @click="closeModal()"
          />
        </span>
      </div>

      <div class="cart-modal-body">
        <div class="cart-item">
          <p class="cart-item-title">Ролл угорь стандарт</p>
          <div class="cart-item-controls">
            <div class="cart-item-controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item-controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item-title">Ролл угорь стандарт</p>
          <div class="cart-item-controls">
            <div class="cart-item-controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item-controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item-title">Ролл угорь стандарт</p>
          <div class="cart-item-controls">
            <div class="cart-item-controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item-controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item-title">Ролл угорь стандарт</p>
          <div class="cart-item-controls">
            <div class="cart-item-controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item-controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>

        <div class="cart-item">
          <p class="cart-item-title">Ролл угорь стандарт</p>
          <div class="cart-item-controls">
            <div class="cart-item-controls-price">250 ₽</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item-controls-count">1</div>
            <button class="btn btn-outline">+</button>
          </div>
        </div>
      </div>

      <div class="cart-modal-footer">
        <div class="cart-modal-footer-price">1250 ₽</div>
        <div class="cart-modal-footer-controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");
</script>

<style scoped>
.cart-modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.cart-modal-overlay.open {
  display: flex;
}

.cart-modal {
  max-width: 780px;
  width: 100%;
  padding: 40px 45px;
  border-radius: 5px;
  background: #fff;
}

.cart-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

.cart-modal-header-title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.cart-modal-header-close {
  cursor: pointer;
}

.cart-modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
}

.cart-modal-footer-price {
  border-radius: 5px;
  background: #262626;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 20px;
}

.cart-modal-footer-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.cart-item:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
}

.cart-item-title {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
}

.cart-item-controls {
  display: flex;
  align-items: center;
}

.cart-item-controls-price {
  margin-right: 47px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
}

.cart-item-controls button {
  border: 1px solid #40a9ff;
  color: #40a9ff;
}

.cart-item-controls-count {
  margin-left: 15px;
  margin-right: 15px;
}
</style>