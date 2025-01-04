<template>
    <div>
      <!-- Destek Butonu -->
      <button
        class="btn btn-danger position-fixed"
        style="bottom: 20px; right: 20px; border-radius: 50px; padding: 10px 20px; z-index: 1000;"
        @click="toggleChat"
      >
        <i class="bi bi-chat-dots"></i> DESTEK
      </button>
  
      <!-- Chat Penceresi -->
      <div
        v-if="showChat"
        class="chat-window position-fixed bg-light shadow"
        style="width: 300px; height: 400px; bottom: 70px; right: 20px; border-radius: 10px; z-index: 999;"
      >
        <div class="chat-header bg-warning text-white p-2 d-flex justify-content-between align-items-center">
          <span>Galatasaray - Müşteri Hizmetleri</span>
          <button class="btn btn-sm btn-close bg-light" @click="toggleChat"></button>
        </div>
        <div class="chat-body p-3 overflow-auto" style="height: 300px;">
          <div class="text-secondary">Değerli taraftarımız, size nasıl yardımcı olabiliriz?</div>
        </div>
        <div class="chat-footer p-2 bg-light">
          <input
            type="text"
            class="form-control"
            placeholder="Mesajınızı yazın"
            v-model="message"
            @keyup.enter="sendMessage"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showChat: false,
        message: '',
      };
    },
    methods: {
      toggleChat() {
        this.showChat = !this.showChat;
      },
      sendMessage() {
        if (this.message.trim()) {
          alert(`Mesaj gönderildi: ${this.message}`);
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-window {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  