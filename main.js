const { createApp } = Vue

createApp({
  data() {
    return {
      displayedMessage: '',
      tocItems: [],
      isLeftColumnVisible: true
    }
  },
  mounted() {
    const message = '佐藤光流 ポートフォリオ';
    let i = 0;
    const typing = setInterval(() => {
      if (i < message.length) {
        this.displayedMessage += message.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);

    this.generateToc();
  },
  methods: {
    generateToc() {
      const content = document.getElementById('content');
      const headings = content.querySelectorAll('h2');
      headings.forEach((heading, index) => {
        const id = 'section-' + index;
        heading.id = id;
        this.tocItems.push({ id: id, text: heading.textContent });
      });
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleLeftColumn() {
      this.isLeftColumnVisible = !this.isLeftColumnVisible;
    }
  }
}).mount('#app');
